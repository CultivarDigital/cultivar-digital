<template>
  <v-app-bar app flat>
    <n-link to="/" class="text-decoration-none d-flex align-center">
      <img v-if="provider.logo" :src="filesURL + provider.logo" class="logo" />
      <span class="ml-3 text-subtitle-1">{{ provider.name }}</span>
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
  </v-app-bar>
</template>
<script>
export default {
  methods: {
    logout() {
      this.$firebase.logout()
      this.$auth.logout()
    },
  },
}
</script>
