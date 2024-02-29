<template>
  <div>
    <div v-if="provider">
      <Cover />
      <Presentation />
      <Services />
      <v-divider></v-divider>
      <Portfolio />
    </div>
  </div>
</template>
<script>
export default {
  layout: 'public',
  created() {
    if (!this.provider) {
      this.$router.push('/apresentacao')
    }
  },
}
</script>
