<template>
  <div v-if="customer">
    <v-container class="d-flex justify-space-between align-center py-6">
      <div>
        <h3>{{ customer.name }}</h3>
        <div class="caption secondary--text text--lighten-4">
          {{ $auth.user.name }}
        </div>
      </div>
      <div>
        <v-btn icon @click="editCustomer = true">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </div>
    </v-container>
    <CustomerForm
      v-if="editCustomer"
      :customer="customer"
      @input="customerUpdated"
      @close="close"
    />
    <v-container class="px-0 px-md-4 py-0">
      <v-tabs :show-arrows="true"  class="mb-3">
        <v-tab :to="'/' + customer._id + '/demandas'">
          Demandas
          <v-badge
            v-if="customerSummary && customerSummary.pendingDemands"
            color="accent"
            small
            :content="customerSummary.pendingDemands"
          />
        </v-tab>
        <v-tab :to="'/' + customer._id + '/propostas'">
          Propostas
          <v-badge
            v-if="customerSummary && customerSummary.pendingProposals"
            color="accent"
            :content="customerSummary.pendingProposals"
          />
        </v-tab>
        <v-tab :to="'/' + customer._id + '/faturas'">Faturas</v-tab>
      </v-tabs>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      editCustomer: false,
      search: '',
    }
  },
  computed: {
    customer() {
      return this.$store.state.customer
    },
    customerSummary() {
      return this.$store.state.customerSummary
    },
  },
  async mounted() {
    const customerId = this.$route.params.cliente
    console.log('customerId', customerId);
    if (customerId) {
      await this.$store.dispatch('loadCustomer', customerId)
      await this.$store.dispatch('loadCustomerSummary')
    }
  },
  methods: {
    customerUpdated(customer) {
      this.close()
      this.$store.commit('setCustomer', customer)
    },
    close() {
      this.editCustomer = false
    },
  },
}
</script>
