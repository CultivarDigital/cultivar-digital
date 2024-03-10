<template>
  <section class="d-flex align-center">
    <v-container class="pt-10 text-center" style="max-width: 340px">
      <ValidationObserver v-slot="{ validate, invalid }">
        <v-form @submit.prevent="validate().then(login)">
          <div>
          <ProviderLogo />
          <h4 class="text-subtitle-1 font-weight-black mb-3">
            {{ provider.name }}
          </h4>
        </div>
        <p class="mb-6">
          <small>Digite seu telefone e senha de acesso para entrar</small>
        </p>
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
