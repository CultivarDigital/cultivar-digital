<template>
  <v-app>
    <v-app-bar app flat color="transparent">
      <div class="d-flex justify-end align-center w-100" style="width: 100%">
        <n-link to="/" class="text-decoration-none d-flex align-center">
          <img :src="require('~/assets/img/logo.svg')" width="30" />
          <div style="font-size: 12px">
            <div class="ml-3 primary--text font-weight-bold">
              ATENDIMENTO SIMPLES
            </div>
          </div>
        </n-link>
        <v-spacer />
        <div class="d-flex align-center">
          <!-- <div class="d-none d-md-block">
            <v-btn
              v-if="provider.about"
              class="font-weight-light"
              text
              small
              href="#presentation"
              >Sobre nós</v-btn
            >
            <v-btn class="font-weight-light" text small href="#services"
              >Serviços</v-btn
            >
            <v-btn class="font-weight-light" text small href="#portfolio"
              >Portfólio</v-btn
            >
          </div> -->
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
    <v-footer class="pa-3 d-block text-center">
      <div class="text-secondary mb-3" style="font-size: 12px">
        Este é um produto é oferecido por
      </div>
      <div>
        <img :src="require('~/assets/img/logo.png')" class="logo" />
        <br />
        <span><strong>Cultivar</strong> Digital</span>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      success: '',
    }
  },
  head() {
    const name = 'Atendimento Simples'
    const title =
      'Simplificamos a gestão do seu negócio para que você possa se concentrar no que realmente importa'
    return {
      titleTemplate: name + ' | %s',
      title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: title,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: name,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: title,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.baseURL + 'logo.svg',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.baseURL,
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: name,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: title,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.baseURL + 'logo.svg',
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ],
    }
  },
  created() {
    this.$vuetify.theme.dark = false
    this.$vuetify.theme.themes.light.primary = '#00335a'
    this.$vuetify.theme.themes.light.secondary = '#004274'
  },
  methods: {
    async copy(value) {
      await navigator.clipboard.writeText(value)
      this.success = 'Email copiado!'
    },
  },
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');

$primary: #00335a;
$secondary: #004274;
.theme--light {
  &.v-application {
    font-family: 'Raleway', sans-serif;
    color: #333;
    .v-main {
      background-color: transparent !important;
    }
    .primary {
      background-color: $primary !important;
    }
    .primary--text {
      color: $primary !important;
    }
    .secondary {
      background-color: $secondary !important;
    }
    .secondary--text {
      color: $secondary !important;
    }
  }
}
</style>
