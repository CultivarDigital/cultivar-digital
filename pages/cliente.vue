<template>
  <div>
    <Companies v-if="$auth.user.role === 'admin'" @input="companyChanged" />
    <div v-if="company">
      <v-container v-if="summary">
        <div
          v-if="$auth.user.role === 'user'"
          class="py-6 d-flex justify-space-between align-center"
        >
          <div>
            <h2>{{ company.name }}</h2>
            <div>
              <small>{{ $auth.user.name }}</small>
            </div>
          </div>
          <CompanyForm
            v-if="company"
            :company="company"
            @change="companyUpdated"
          />
        </div>
        <div v-if="summary">
          <Alert
            v-if="summary.pendingProposals"
            :message="'Você tem propostas para analisar'"
            @click="tab = 1"
          />
          <Alert
            v-if="summary.pendingDemands"
            :message="'Você tem demandas para analisar'"
            @click="tab = 0"
          />
        </div>
      </v-container>
      <v-tabs
        v-model="tab"
        :show-arrows="true"
        slider-color="#fff"
        class="mb-3"
      >
        <v-tab>
          Demandas
          <v-badge
            v-if="summary && summary.pendingDemands"
            :content="summary.pendingDemands"
          />
        </v-tab>
        <v-tab>
          Propostas
          <v-badge
            v-if="summary && summary.pendingProposals"
            :content="summary.pendingProposals"
          />
        </v-tab>
        <v-tab>Faturas</v-tab>
      </v-tabs>
      <v-container class="mb-16">
        <Demands v-if="tab === 0" :company="company" @change="loadSummary" />
        <Proposals v-if="tab === 1" :company="company" @change="loadSummary" />
      </v-container>
    </div>
    <v-container v-else>
      <Alert message="Selecione a empresa" />
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    const modulos = {
      demandas: 0,
      propostas: 1,
      faturas: 2,
    }
    return {
      tab: this.$route.query.modulo ? modulos[this.$route.query.modulo] : 0,
      companies: null,
      company: null,
      summary: null,
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
      const company = await this.$axios.$get(
        '/v1/companies/' + this.$auth.user.company
      )
      this.companyChanged(company)
    },
    async loadSummary() {
      this.summary = await this.$axios.$get('/v1/dashboard/company/summary', {
        params: {
          company: this.company._id,
        },
      })
    },
    async companyUpdated() {
      await this.loadCompany()
    },
  },
}
</script>
