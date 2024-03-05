<template>
  <div>
    <n-link to="/" class="text-decoration-none" >
      <img v-if="provider.logo" :src="filesURL + provider.logo" class="logo" />
      <span v-else class="text-subtitle-1">{{ provider.name }}</span>
    </n-link>
  </div>
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
