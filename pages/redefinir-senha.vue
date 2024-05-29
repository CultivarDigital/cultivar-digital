<template>
  <section class="d-flex align-center">
    <v-container class="pt-10 text-center" style="max-width: 340px">
      <ValidationObserver v-slot="{ validate, invalid }">
        <div>
          <ProviderLogo />
          <h4 class="text-subtitle-1 font-weight-black mb-3">
            {{ provider.name }}
          </h4>
        </div>
        <p class="mb-6">
          <small>Digite seu telefone de acesso para redefinir sua senha</small>
        </p>
        <v-form
          v-if="$route.query.token && $route.query.phone"
          @submit.prevent="validate().then(save)"
        >
          <validation-provider
            v-slot="{ errors }"
            name="senha"
            rules="required|min:4"
            vid="senha"
          >
            <v-text-field
              v-model="form.password"
              :type="showPassword ? 'text' : 'password'"
              label="Nova senha"
              :error-messages="errors"
            >
              <v-icon
                slot="append"
                tabindex="-1"
                @click="showPassword = !showPassword"
              >
                mdi-eye
              </v-icon>
            </v-text-field>
          </validation-provider>
          <validation-provider
            v-slot="{ errors }"
            name="confirmação da senha"
            rules="required|confirmed:senha"
          >
            <v-text-field
              v-model="form.password_confirmation"
              :type="showPassword ? 'text' : 'password'"
              label="Confirme sua nova senha"
              :error-messages="errors"
            >
              <v-icon
                slot="append"
                tabindex="-1"
                @click="showPassword = !showPassword"
              >
                mdi-eye
              </v-icon>
            </v-text-field>
          </validation-provider>
          <Save :invalid="invalid" :loading="loading" label="Redefinir senha" />
          <div class="text-center">
            <v-btn plain :to="{ path: '/', query: $route.query }"
              >Cancelar</v-btn
            >
          </div>
        </v-form>
        <v-alert v-else color="error" dark>
          É necessário um token e um telefone para redefinir a senha
        </v-alert>
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
      loading: false,
      showPassword: false,
      form: {
        provider: null,
        resetToken: this.$route.query.token,
        phone: this.$route.query.phone,
        password: '',
        password_confirmation: '',
      },
    }
  },
  created() {
    this.form.provider = this.provider._id
  },
  methods: {
    async save() {
      try {
        this.loading = true

        await this.$axios.$post(
          '/v1/auth/reset-password',
          this.form
        )

        this.notify('Senha redefinida com sucesso')
        this.$auth.loginWith('local', { data: this.form }).catch((error) => {
          this.$notifier.apiError(error)
          this.loading = false
        })
      } catch (error) {
        this.$notifier.apiError(error)
        this.loading = false
      }
    },
  },
}
</script>
