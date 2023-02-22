<template>
  <section class="d-flex align-center">
    <v-container class="pt-10 text-center" style="max-width: 340px">
      <ValidationObserver v-slot="{ validate, invalid }">
        <v-form @submit.prevent="validate().then(login)">
          <v-icon class="mb-6" size="100">mdi-face-agent</v-icon>
          <h3 class="mb-3">Central de atendimento</h3>
          <div>
            <p class="text-subtitle-1 mb-8">
              <small>Informe seus dados para acessar a área de clientes</small>
            </p>
            <validation-provider
              v-slot="{ errors }"
              name="e-mail"
              rules="required"
            >
              <!-- <h4
              class="text-subtitle-1 font-weight-black mb-3"
              style="opacity: 0.6"
            >
              Login
            </h4> -->
              <v-text-field
                v-model="form.login"
                outlined
                label="Digite seu e-mail"
                :error-messages="errors"
              />
            </validation-provider>
            <validation-provider
              v-slot="{ errors }"
              name="senha"
              rules="required"
            >
              <!-- <h4
              class="text-subtitle-1 font-weight-black mb-3"
              style="opacity: 0.6"
            >
              Senha
            </h4> -->
              <v-text-field
                v-model="form.password"
                outlined
                :type="showPassword ? 'text' : 'password'"
                :error-messages="errors"
                label="Digite sua senha"
                hide-details="auto"
              >
                <v-icon slot="append" @click="showPassword = !showPassword">
                  mdi-eye
                </v-icon>
              </v-text-field>
            </validation-provider>
            <div class="text-right mb-6 mt-2">
              <!-- <v-btn
              color="white"
              outlined
              small
              to="/esqueci-minha-senha"
              rounded
            >
              Esqueci minha senha
            </v-btn> -->
            </div>
          </div>
          <Save :invalid="invalid" :loading="loading" label="Entrar" />
          <v-btn
            color="primary"
            block
            class="mb-2"
            rounded
            @click="signInWithGoogle"
          >
            <v-icon left>mdi-google</v-icon> Entrar com o google
          </v-btn>
          <!-- <v-btn
          color="primary"
          plain
          :to="{ path: '/cadastro', query: $route.query }"
        >
          Cadastre-se
        </v-btn> -->
        </v-form>
      </ValidationObserver>
    </v-container>
  </section>
</template>
<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import { getAuth, getIdToken } from 'firebase/auth'
export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  layout: 'public',
  data() {
    return {
      showPassword: false,
      loading: false,
      form: {
        login: '',
        password: '',
      },
    }
  },
  methods: {
    signInWithGoogle(rounded) {
      this.$firebase
        .loginWithGoogle()
        .then((userCredential) => {
          if (userCredential && userCredential.user) {
            this.authenticateApi(userCredential)
          }
        })
        .catch(this.$notifier.firebaseError)
    },
    authenticateApi(userCredential) {
      getIdToken(getAuth().currentUser).then((token) => {
        this.$auth
          .loginWith('local', {
            data: {
              token,
              group_id: this.$route.query.codigo,
            },
          })
          // .then((resp) => {
          //   this.welcome(userCredential.user)
          //   this.loading = false
          // })
          .catch((error) => {
            this.$notifier.apiError(error)
            this.loading = false
          })
      })
    },
    login() {
      this.loading = true
      this.$firebase
        .login(this.form.login.trim(), this.form.password)
        .then((userCredential) => {
          this.authenticateApi(userCredential)
        })
        .catch((error) => {
          this.$notifier.firebaseError(error)
          this.loading = false
        })
    },
  },
}
</script>
