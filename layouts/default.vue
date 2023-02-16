<template>
  <v-app>
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
    <v-app-bar fixed app flat>
      <n-link
        to="/"
        class="text-decoration-none d-flex align-center"
      >
        <img :src="require('~/assets/img/logo.png')" class="logo" />
        <span class="ml-3"><strong>Cultivar</strong> Digital</span>
      </n-link>
      <v-spacer />
      <SwitchTheme />
      <div class="d-flex align-center">
        <v-menu offset-y>
          <template #activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon>mdi-menu</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="logout">
              <v-list-item-title>Sair</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <!-- <v-btn color="primary" icon @click.stop="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn> -->
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
    <Snackbar />
  </v-app>
</template>

<script>
export default {
  middleware: 'auth',
  data() {
    return {
      success: '',
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
  methods: {
    logout() {
      this.$firebase.logout()
      this.$auth.logout()
    },
  },
}
</script>
