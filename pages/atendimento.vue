<template>
  <v-container class="py-6" fluid>
    <div v-if="loading">
      <Loading />
    </div>
    <div v-else>
      <div class="mb-6">
        <v-text-field
          v-if="customers.length > 5"
          v-model="search"
          type="search"
          clearable
          outlined
          label="Buscar cliente"
          append-icon="mdi-magnify"
        />
        <v-card
          v-for="c in filteredCustomers"
          :key="c._id"
          class="mb-3 pa-3"
          elevation="0"
          :to="'/' + c._id + '/demandas'"
        >
          <h4 class="mb-3 font-weight-medium">{{ c.name }}</h4>
          <div
            v-if="c.backlog_demands_count || c.in_progress_demands_count"
            class="caption text--secondary"
          >
            <div v-if="c.backlog_demands_count" class="d-inline-block mr-1">
              <v-chip x-small left class="px-2" color="alert">{{
                c.backlog_demands_count
              }}</v-chip>
              na fila
            </div>
            <div v-if="c.in_progress_demands_count" class="d-inline-block mr-1">
              <v-chip x-small left class="px-2" color="success">{{
                c.in_progress_demands_count
              }}</v-chip>
              em andamento
            </div>
            <div v-if="c.pending_demands_count" class="d-inline-block mr-1">
              <v-chip x-small left class="px-2" color="error">{{
                c.pending_demands_count
              }}</v-chip>
              pendentes
            </div>
          </div>
          <div v-else>
            <div class="caption pt-1 text--disabled">Sem demandas ativas</div>
          </div>
        </v-card>
      </div>
      <v-btn color="success" large block @click="addCustomer = true">
        <v-icon left>mdi-plus</v-icon>
        Adicionar cliente
      </v-btn>
      <CustomerForm
        v-if="addCustomer"
        @input="customerCreated"
        @close="close"
      />
    </div>
  </v-container>
</template>
<script>
export default {
  layout: 'provider',
  data() {
    return {
      addCustomer: false,
      loading: true,
      search: '',
      customers: null,
    }
  },
  computed: {
    filteredCustomers() {
      if (this.search) {
        return this.customers.filter((c) =>
          c.name.toLowerCase().includes(this.search.toLowerCase())
        )
      }
      return this.customers
    },
  },
  mounted() {
    this.loadCustomers()
  },
  methods: {
    async loadCustomers() {
      this.loading = true
      this.customers = await this.$axios.$get('/v1/customers/summary')
      this.loading = false
    },
    customerCreated(customer) {
      this.close()
      this.$router.push('/' + customer._id + '/demandas')
    },
    close() {
      this.addCustomer = false
    },
  },
}
</script>
