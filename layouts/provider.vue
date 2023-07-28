<template>
  <v-app>
    <ProviderHeader />
    <v-main>
      <Nuxt v-if="!loading" />
    </v-main>
    <Snackbar />
  </v-app>
</template>

<script>
export default {
  middleware: 'auth',
  data() {
    return {
      loading: true,
    }
  },
  head() {
    return {
      titleTemplate: '%s - ' + this.provider.name,
      title: 'Atendimento',
    }
  },
  computed: {
    provider() {
      return this.$store.state.provider
    },
  },
  mounted() {
    this.$store.commit('setCustomer', null)
    this.$store.commit('setCustomerSummary', null)
    if (this.$auth.user.role === 'customer') {
      if (this.$auth.user.customer) {
        this.$router.push('/' + this.$auth.user.customer + '/demandas')
      } else {
        this.$router.push('/cadastro-de-cliente')
      }
    } else {
      this.loading = false
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
