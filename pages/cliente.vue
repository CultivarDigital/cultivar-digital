<template>
  <div>
    <CustomerHeader />
    <div v-if="customer">
      <v-container
        v-if="summary && (summary.pendingProposals || summary.pendingDemands)"
      >
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
      </v-container>
      <v-container class="px-0 px-md-4 py-0">
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
      </v-container>
      <v-container class="mb-16">
        <Demands v-if="tab === 0" @change="loadSummary" />
        <Proposals v-if="tab === 1" @change="loadSummary" />
        <div v-if="tab === 2">
          <Alert message="Nenhuma fatura aqui" />
        </div>
      </v-container>
    </div>
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
      summary: null,
    }
  },
  computed: {
    customer() {
      return this.$store.state.customer
    },
  },
  methods: {
    async loadSummary() {
      this.summary = await this.$axios.$get('/v1/dashboard/customer/summary', {
        params: {
          customer: this.customer._id,
        },
      })
    },
  },
}
</script>
