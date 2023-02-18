<template>
  <div
    class="fill-height d-flex justify-center align-center primary"
    style="min-height: 100vh"
  >
    <v-progress-circular color="white" indeterminate />
  </div>
</template>
<script>
export default {
  created() {
    const p = this.$route.query.p
    if (p && p.length > 1) {
      this.$router.replace(p)
    }
  },
}
</script>
