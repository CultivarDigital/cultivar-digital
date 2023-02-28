<template>
  <v-app>
    <ProviderHeader />
    <v-main>
      <div v-if="customer" class="mb-16">
        <div>
          <v-container class="d-flex justify-space-between align-center py-6">
            <div>
              <div class="d-flex justify-start align-center">
                <v-btn
                  v-if="$auth.user.role === 'provider'"
                  class="mr-4"
                  fab
                  small
                  to="/atendimento"
                  elevation="0"
                >
                  <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
                <div>
                  <h3>{{ customer.name }}</h3>
                  <div class="caption text--secondary">
                    {{ $auth.user.name }}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <v-menu offset-y>
                <template #activator="{ on }">
                  <v-btn icon v-on="on">
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item @click="editCustomer = true">
                    <v-list-item-title>Editar</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </v-container>
          <v-container class="px-0 px-md-4 py-0">
            <v-tabs :show-arrows="true" class="mb-3" color="success">
              <v-tab :to="'/' + customer._id + '/demandas'">
                Demandas
                <v-badge
                  v-if="customerSummary && customerSummary.pendingDemands"
                  color="error"
                  small
                  outlined
                  :content="customerSummary.pendingDemands"
                />
              </v-tab>
              <v-tab :to="'/' + customer._id + '/propostas'">
                Orçamentos
                <v-badge
                  v-if="customerSummary && customerSummary.pendingProposals"
                  small
                  outlined
                  color="error"
                  :content="customerSummary.pendingProposals"
                />
              </v-tab>
              <v-tab :to="'/' + customer._id + '/faturas'">Faturas</v-tab>
            </v-tabs>
          </v-container>
          <CustomerForm
            v-if="editCustomer"
            :value="customer"
            @input="customerUpdated"
            @close="close"
          />
        </div>
        <Nuxt />
      </div>
    </v-main>
    <Snackbar />
  </v-app>
</template>

<script>
export default {
  middleware: 'auth',
  data() {
    return {
      editCustomer: false,
      search: '',
    }
  },
  head() {
    let title = 'Atendimento'
    if (this.customer) {
      title = 'Atendimento - ' + this.customer.name
    }
    return {
      titleTemplate: '%s - ' + this.provider.name,
      title,
    }
  },
  computed: {
    customerSummary() {
      return this.$store.state.customerSummary
    },
    customer() {
      return this.$store.state.customer
    },
  },
  async mounted() {
    const customerId = this.$route.params.cliente
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
