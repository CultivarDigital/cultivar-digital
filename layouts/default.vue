<template>
  <v-app dark>
    <client-only>
      <vue-particles color="#A2248F" :particles-number="150" :particle-opacity="0.2" :line-opacity="0.4" :move-speed="2"></vue-particles>
    </client-only>
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
        <v-btn class="font-weight-light" text small href="#presentation">Oferecemos</v-btn>
        <v-btn class="font-weight-light" text small href="#services">Serviços</v-btn>
        <v-btn class="font-weight-light" text small href="#services">Produtos</v-btn>
      </div>
      <!-- <v-btn color="primary" icon @click.stop="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn> -->
    </v-app-bar>
    <v-main style="background-color: #2b2b2b">
      <Nuxt />
    </v-main>

    <v-footer fixed app class="pa-3">
      <v-spacer />
      <v-btn color="accent" small>
        Fale conosco
      </v-btn>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
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
}
</script>
<style lang="sass" scoped>
#particles-js
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%

</style>