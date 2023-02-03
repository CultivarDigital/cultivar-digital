<template>
  <div>
    <v-container class="d-flex align-center justify-space-between">
      <div class="d-flex align-center">
        <img :src="require('~/assets/img/logo.png')" class="logo" />
        <span class="ml-3"><strong>Cultivar</strong> Digital</span>
      </div>
      <v-btn icon @click="close">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-container>
    <v-divider />
  </div>
</template>
<script>
export default {
  methods: {
    close() {
      this.$emit('close')
    },
  },
}
</script>
