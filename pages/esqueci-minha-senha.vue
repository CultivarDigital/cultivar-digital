<template>
  <section class="d-flex align-center">
    <v-container class="pt-10 text-center" style="max-width: 340px">
      <ValidationObserver v-slot="{ validate, invalid }">
        <v-form
          v-if="!success"
          @submit.prevent="validate().then(sendPasswordReset)"
        >
          <div>
            <ProviderLogo />
            <h4 class="text-subtitle-1 font-weight-black mb-3">
              {{ provider.name }}
            </h4>
          </div>
          <p class="mb-6">
            <small
              >Digite seu telefone de acesso para redefinir sua senha</small
            >
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
                label="Telefone de acesso"
                :error-messages="errors"
                placeholder="(XX) XXXXX-XXXX"
              />
            </validation-provider>
          </div>
          <Save :invalid="invalid" :loading="loading" label="Continuar" />

          <br />
          <v-btn small text to="/entrar"> Cancelar </v-btn>
        </v-form>
        <div v-else>
          <v-icon color="success" size="100" class="mb-6">mdi-check-circle</v-icon>
          <p>
            Enviamos um link para redefinir sua senha para o WhatsApp do
            telefone informado.
          </p>
          <p>
            Verifique seu WhatsApp e siga as instruções para redefinir sua
            senha.
          </p>
        </div>
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
      try {
        await this.$axios.$post('/v1/auth/send-password-reset', this.form)
        this.success = true
      } catch (error) {
        this.$notifier.apiError(error)
      }
      this.loading = false
    },
  },
}
</script>
