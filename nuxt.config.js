import colors from 'vuetify/es5/util/colors'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  // target: 'static',
  ssr: true,
  // generate: {
  //   // fallback: true,
  // },
  // router: {
  //   base: '/site/'
  // },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Cultivar Digital',
    title: 'Desenvolvimento de aplicativos',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.sass'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    // '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/moment',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/auth-next',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      'nuxt-validate',
      {
        lang: 'pt_BR',
      },
    ],
  ],

  plugins: [
    '~/plugins/global-mixin',
    '~/plugins/vuetify.js',
    '~/plugins/notifier.js',
    '~/plugins/firebase.js',
    '~/plugins/moment.js',
    '~/plugins/axios.js',
    '~/plugins/utils.js',
    { src: '~/plugins/vue-the-mask', ssr: false },
    { src: '~/plugins/quill.js', ssr: false },
    { src: '~/plugins/vue2-filters.js', ssr: false },
    { src: '~/plugins/moment-business-days.js', ssr: false },
    { src: '~/plugins/v-money', ssr: false },
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'pt-br',
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    treeShake: true,
    defaultAssets: {
      font: {
        family: 'Roboto',
      },
    },
    customVariables: ['~/assets/css/variables.sass'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: '#A2248F',
          accent: '#FF5C00',
          secondary: '#2b2b2b',
          default: '#d8d8d8',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: '#009D6B',
          background: '#fff',
          anchor: '#009D6B',
        },
        light: {
          primary: '#A2248F',
          accent: '#FF5C00',
          secondary: '#2b2b2b',
          default: '#d8d8d8',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: '#009D6B',
          background: '#fff',
          anchor: '#A2248F',
        },
      },
    },
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: 'token.accessToken',
          // required: true,
          type: 'Bearer',
        },
        user: {
          property: false,
          // autoFetch: true
        },
        endpoints: {
          login: { url: '/v1/auth/login', method: 'post' },
          logout: false,
          user: { url: '/v1/users/profile', method: 'get' },
        },
      },
    },
    scopeKey: 'role',
    redirect: {
      login: '/entrar',
      logout: '/',
      callback: '/entrar',
      home: '/atendimento',
    },
    rewriteRedirects: true,
    fullPathRedirect: true,
  },

  axios: {
    baseURL: process.env.API_URL || 'http://localhost:3000',
  },

  eslint: {
    fix: true,
  },

  env: {
    BASE_DOMAIN: process.env.BASE_DOMAIN,
    BASE_URL: process.env.BASE_URL || 'http://localhost:3000',
    API_URL: process.env.API_URL || 'http://localhost:5001',
    FILES_URL: process.env.FILES_URL || 'http://localhost:5000',
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['defu'],
  },
}
