<template>
  <span>
    <v-btn v-if="dark" icon @click="switchDarkMode">
      <v-icon small>mdi-moon-waning-crescent</v-icon>
    </v-btn>
    <v-btn v-else icon @click="switchDarkMode">
      <v-icon small>mdi-white-balance-sunny</v-icon>
    </v-btn>
  </span>
</template>
<script>
export default {
  computed: {
    dark() {
      return this.$vuetify.theme.isDark
    },
  },
  methods: {
    switchDarkMode() {
      this.$vuetify.theme.isDark = !this.$vuetify.theme.isDark
    },
  },
}
</script>
:prepend-icon="dark ? 'mdi-moon-waning-crescent' : 'mdi-white-balance-sunny'"
