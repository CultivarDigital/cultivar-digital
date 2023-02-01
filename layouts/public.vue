<template>
  <v-app dark>
    <!-- <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <v-app-bar fixed app>
      <n-link
        to="/"
        class="text-decoration-none white--text d-flex align-center"
      >
        <img :src="require('~/assets/img/logo.png')" class="logo" />
        <span class="ml-3"><strong>Cultivar</strong> digital</span>
      </n-link>
      <v-spacer />
      <div class="d-flex align-center">
        <div class="d-none d-md-block">
          <v-btn class="font-weight-light" text small href="#presentation"
            >Oferecemos</v-btn
          >
          <v-btn class="font-weight-light" text small href="#services"
            >Serviços</v-btn
          >
          <v-btn class="font-weight-light" text small href="#portfolio"
            >Portfólio</v-btn
          >
        </div>

        <v-btn color="primary" to="/cliente" small>
          <v-icon left>mdi-login</v-icon> Cliente
        </v-btn>
      </div>
      <!-- <v-btn color="primary" icon @click.stop="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn> -->
    </v-app-bar>
    <v-main style="background-color: #2b2b2b">
      <Nuxt />
    </v-main>

    <v-footer class="pa-3 justify-center">
      <div class="text-center">
        <div class="text-center">
          <div class="mb-3">Fale com a gente pelo WhatsApp</div>
          <v-btn
            color="primary"
            x-large
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5562999159008"
            class="text-decoration-none mb-3"
          >
            <v-icon left>mdi-whatsapp</v-icon>
            62 99915-9008
          </v-btn>
          <h5 class="tertiary--text pt-3">Ou envie um email para:</h5>
          <h5 class="text-h6 mb-6">
            <a
              class="dark text-decoration-none white--text"
              @click="copy('atendimento@cultivardigital.com.br')"
            >
              atendimento@cultivardigital.com.br
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
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      success: '',
      // drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      title: 'Vuetify.js',
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
