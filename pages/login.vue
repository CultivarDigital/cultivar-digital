<template>
  <section class="d-flex align-center">
    <v-container class="pt-10 text-center" style="max-width: 340px">
      <ValidationObserver v-slot="{ validate, invalid }">
        <v-form @submit.prevent="validate().then(login)">
          <v-icon class="mb-6" size="100">mdi-face-agent</v-icon>
          <div class="mb-12">
            <ProviderLogo />
          </div>
          
          <div>
            
            <validation-provider
              v-slot="{ errors }"
              name="telefone"
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
                v-mask="'(##) #####-####'"
                outlined
                label="Digite seu telefone"
                :error-messages="errors"
                placeholder="(XX) XXXXX-XXXX"
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
            <div class="text-right mb-6 mt-1">
              <v-btn
              text
              x-small
              :to="'/esqueci-minha-senha?login=' + form.login"
              rounded
            >
              Esqueci minha senha
            </v-btn>
            </div>
          </div>
          <Save :invalid="invalid" :loading="loading" label="Entrar" />
          <!-- <v-btn
            color="primary"
            block
            class="mb-2"
            rounded
            @click="signInWithGoogle"
          >
            <v-icon left>mdi-google</v-icon> Entrar com o google
          </v-btn> -->
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
        provider: null,
        login: '',
        password: '',
      },
    }
  },
  created() {
    this.form.provider = this.provider._id
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
              provider: this.provider,
            },
          })
          .catch((error) => {
            this.$notifier.apiError(error)
            this.loading = false
          })
      })
    },
    login() {
      this.loading = true
      this.$auth.loginWith('local', { data: this.form }).catch((error) => {
        this.$notifier.apiError(error)
        this.loading = false
      })
    },
  },
}
</script>
