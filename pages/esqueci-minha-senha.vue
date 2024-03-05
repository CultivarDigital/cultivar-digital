<template>
  <section class="d-flex align-center">
    <v-container class="pt-10 text-center" style="max-width: 340px">
      <ValidationObserver v-slot="{ validate, invalid }">
        <v-form @submit.prevent="validate().then(sendPasswordReset)">
          <div class="mb-12">
            <ProviderLogo />
          </div>
          <p class="mb-3">Esqueci minha senha</p>
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
          </div>
          <Save :invalid="invalid" :loading="loading" label="Continuar" />

          <br />
          <v-btn color="secondary" small text to="/login"> Cancelar </v-btn>
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
      success: false,
      form: {
        provider: null,
        login: this.$route.query.login || '',
      },
    }
  },
  created() {
    this.form.provider = this.provider._id
  },
  methods: {
    async sendPasswordReset() {
      this.loading = true
      await this.$axios.$post('/v1/auth/send-password-reset', this.form)

      this.success = true
      this.loading = false
    },
  },
}
</script>
