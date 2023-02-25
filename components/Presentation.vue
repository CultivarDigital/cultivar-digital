<!-- eslint-disable vue/no-v-html -->
<template>
  <section
    v-if="provider.about"
    id="presentation"
    class="py-16 d-flex align-center alternative-bg"
  >
    <v-container class="py-16">
      <h3 class="text-h2 mb-6">Sobre nós</h3>
      <p v-html="provider.about"></p>
    </v-container>
  </section>
</template>

<script>
export default {}
</script>
