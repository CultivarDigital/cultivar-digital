<template>
  <v-app>
    
    <v-main>
      <Nuxt />
    </v-main>
    <Snackbar />
  </v-app>
</template>

<script>
export default {
  middleware: 'auth',
}
</script>
