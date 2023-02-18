<template>
  <v-container class="py-6" fluid>
    Atendimento
    <!-- <div v-if="loading">
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
          class="mb-3 px-3"
          secondary
          :to="'/' + c._id + '/demandas'"
        >
          <div>
            <v-list-item class="pa-0">
              <v-list-item-content>
                <h4>{{ c.name }}</h4>
                <div
                  v-if="c.backlog_demands_count || c.inProgress_demands_count"
                  class="caption"
                >
                  <div
                    v-if="c.backlog_demands_count"
                    class="d-inline-block mr-2 secondary--text text--lighten-4"
                    :class="{
                      'error--text text--lighten-1': c.pending_demands_count,
                    }"
                  >
                    <strong>{{ c.backlog_demands_count }}</strong> na fila
                  </div>
                  <div
                    v-if="c.inProgress_demands_count"
                    class="d-inline-block mr-2 success--text"
                  >
                    <strong>{{ c.inProgress_demands_count }}</strong> em
                    execução
                  </div>
                </div>
                <div v-else>
                  <div class="caption pt-1 secondary--text">
                    Sem demandas ativas
                  </div>
                </div>
              </v-list-item-content>
            </v-list-item>
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
    </div> -->
  </v-container>
</template>
<script>
export default {
  // data() {
  //   return {
  //     addCustomer: false,
  //     loading: true,
  //     search: '',
  //     customers: null,
  //   }
  // },
  // computed: {
  //   filteredCustomers() {
  //     if (this.search) {
  //       return this.customers.filter((c) =>
  //         c.name.toLowerCase().includes(this.search.toLowerCase())
  //       )
  //     }
  //     return this.customers
  //   },
  //   customer() {
  //     return this.$store.state.customer
  //   },
  // },
  // async mounted() {
  //   if (this.$auth.user.role === 'user') {
  //     await this.$router.push('/' + this.$auth.user.customer + '/demandas')
  //   } else {
  //     this.loadCustomers()
  //   }
  // },
  // methods: {
  //   async loadCustomers() {
  //     this.loading = true
  //     this.customers = await this.$axios.$get('/v1/customers/summary')
  //     this.loading = false
  //   },
  //   customerCreated(customer) {
  //     this.close()
  //     this.$router.push('/' + customer._id + '/demandas')
  //   },
  //   close() {
  //     this.addCustomer = false
  //   },
  // },
}
</script>
