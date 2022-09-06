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
      <img :src="require('~/assets/img/logo.png')" class="logo" />
      <span class="ml-3"><strong>Cultivar</strong> digital</span>
      <v-spacer />
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
      <!-- <v-btn color="primary" icon @click.stop="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn> -->
    </v-app-bar>
    <v-main style="background-color: #2b2b2b">
      <Nuxt />
    </v-main>

    <v-footer fixed app class="pa-3 justify-center">
      <div class="text-center">
        <div class="mb-2">Vamos conversar?</div>
      <v-btn v-if="!show_contact" color="success" block @click="show_contact = !show_contact">
        Fale com a gente
      </v-btn>
      <div v-if="show_contact" class="text-center">
        <h5 class="tertiary--text pt-3">
          Envie uma mensagem para:
        </h5>
        <h5 class="text-h6 mb-6">
          <a href="mailto:atendimento@cultivardigital.com.br" class="dark text-decoration-none white--text">
            atendimento@cultivardigital.com.br
          </a>
        </h5>
        <v-btn class="text-primary tertiary--text" icon @click="show_contact = !show_contact">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      // drawer: false,
      fixed: false,
      show_contact: false,
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
}
</script>
