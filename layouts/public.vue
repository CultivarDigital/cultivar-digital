<template>
  <v-app dark>
    <v-app-bar fixed app flat>
      <div class="d-flex justify-end align-center w-100" style="width: 100%">
        <n-link to="/" class="text-decoration-none d-flex align-center">
          <img v-if="provider.logo" :src="filesURL + provider.logo" class="logo" />
          <span class="ml-3 text-subtitle-1">{{ provider.name }}</span>
        </n-link>
        <v-spacer />
        <div class="d-flex align-center">
          <div class="d-none d-md-block">
            <v-btn v-if="provider.about" class="font-weight-light" text small
              href="#presentation"
              >Sobre nós</v-btn
            >
            <v-btn class="font-weight-light" text small href="#services"
              >Serviços</v-btn
            >
            <v-btn class="font-weight-light" text small href="#portfolio"
              >Portfólio</v-btn
            >
          </div>
          <SwitchTheme />
          <v-btn color="primary" to="/atendimento" small>
            <v-icon left class="d-none d-lg-inline">mdi-account-box</v-icon>
            Atendimento
          </v-btn>
        </div>
      </div>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
    <Snackbar />
    <v-divider />
    <v-footer class="pa-3 justify-center">
      <div class="text-center pt-6">
        <h6 class="text-h6 mb-6">Fale com a gente</h6>
        <p>
          Nossa equipe está sempre pronta para responder às suas perguntas e
          ajudá-lo a encontrar a solução perfeita para a sua
          empresa.
        </p>
        <div class="text-center">
          <div class="mb-3">Fale com a gente pelo WhatsApp:</div>
          <v-btn
            v-if="provider.phone"
            color="primary"
            x-large
            target="_blank"
            :href="`https://api.whatsapp.com/send?phone=55${provider.phone.replace(
              /\D/g,
              ''
            )}`"
            class="text-decoration-none mb-3"
          >
            <v-icon left>mdi-whatsapp</v-icon>
            {{ provider.phone }}
          </v-btn>
          <div v-if="provider.email">
            <p class="pt-3">Ou envie um email para:</p>
            <h5 class="text-h6 mb-6">
              <a
                class="dark text-decoration-none"
                @click="copy(provider.email)"
              >
                {{provider.email}}
              </a>
            </h5>
            <v-alert
              v-if="success"
              type="success"
              outlined
              class="text-left"
              small
            >
              {{ success }}
            </v-alert>
          </div>
        </div>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import SwitchTheme from '~/components/SwitchTheme.vue'

export default {
  components: { SwitchTheme },
  data() {
    return {
      success: '', 
    }
  },
  head() {
    return {
      titleTemplate: '%s - ' + this.provider.name,
      title: this.provider.description,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.provider.description,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.provider.name,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.provider.description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.filesURL + this.provider.logo,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://' + this.provider.slug + '.' + process.env.BASE_DOMAIN,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.provider.name,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.provider.description,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.filesURL + this.provider.logo,
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ],
    }
  },
  methods: {
    async copy(value) {
      await navigator.clipboard.writeText(value)
      this.success = 'Email copiado!'
    },
  },
}
</script>
