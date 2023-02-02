<template>
  <div>
    <Companies v-if="$auth.user.role === 'admin'" @input="companyChanged" />
    <v-tabs v-model="tab" :show-arrows="true" slider-color="#fff" class="mb-3">
      <v-tab>Demandas</v-tab>
      <v-tab>Propostas</v-tab>
      <v-tab>Faturas</v-tab>
      <v-tab>Relatórios</v-tab>
    </v-tabs>
    <v-container>
      <Demands v-if="tab === 0" :company="company" />
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tab: null,
      companies: null,
      company: null,
    }
  },
  async mounted() {
    if (this.$auth.user.role !== 'admin') {
      await this.loadCompany()
    }
  },
  methods: {
    companyChanged(company) {
      this.company = company
    },
    async loadCompany() {
      this.company = await this.$axios.$get(
        '/v1/companies/' + this.$auth.user.company
      )
    },
  },
}
</script>
