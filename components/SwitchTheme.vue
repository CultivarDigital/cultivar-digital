<template>
  <span>
    <v-btn icon @click="switchDarkMode">
      <v-icon small>mdi-white-balance-sunny</v-icon>
    </v-btn>
  </span>
</template>
<script>
export default {
  methods: {
    switchDarkMode() {
      this.$vuetify.theme.isDark = !this.$vuetify.theme.isDark
    },
  },
}
</script>
