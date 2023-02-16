<template>
  <v-container class="py-6" fluid>
    <div v-if="loading">
      <Loading />
    </div>
    <div v-else>
      <div v-if="$auth.user.role === 'admin' && customers">
        <div v-if="customer">
          <v-select
            v-model="customerId"
            hide-details="auto"
            :items="customers"
            label="Cliente"
            item-value="_id"
            item-text="name"
            clearable
            outlined
            @input="customerSelected"
          >
            <template #append-outer>
              <v-menu offset-y>
                <template #activator="{ on, attrs }">
                  <v-btn small icon v-bind="attrs" v-on="on">
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item v-if="customer" @click="editCustomer = true">
                    <v-list-item-title>Editar</v-list-item-title>
                  </v-list-item>
                  <v-list-item
                    v-if="$auth.user.role === 'admin'"
                    @click="addCustomer = true"
                  >
                    <v-list-item-title>Adicionar cliente</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </template>
          </v-select>
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
              @click="customerSelected(c._id)"
            >
              <div>
                <v-list-item class="pa-0">
                  <v-list-item-content>
                    <h4>{{ c.name }}</h4>
                    <div v-if="c.backlog_demands_count || c.inProgress_demands_count" class="caption">
                      <div v-if="c.backlog_demands_count" class="d-inline-block mr-2 secondary--text text--lighten-4" :class="{'error--text text--lighten-1': c.pending_demands_count}"><strong>{{ c.backlog_demands_count }}</strong> na fila</div>
                      <div v-if="c.inProgress_demands_count" class="d-inline-block mr-2 success--text"><strong>{{ c.inProgress_demands_count }}</strong> em execução</div>
                    </div>
                    <div v-else>
                      <div class="caption pt-1 secondary--text">Sem demandas ativas</div>
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
        </div>
      </div>
      <div
        v-if="$auth.user.role === 'user' && customer"
        class="d-flex justify-space-between align-center"
      >
        <div>
          <h2>{{ customer.name }}</h2>
          <div>
            <small>{{ $auth.user.name }}</small>
          </div>
        </div>
        <div>
          <v-btn icon @click="editCustomer = true">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </div>
      </div>
      <CustomerForm v-if="addCustomer" @input="customerCreated" @close="close" />
      <CustomerForm
        v-if="editCustomer"
        :customer="customer"
        @input="customerUpdated"
        @close="close"
      />
    </div>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      customerId: '',
      addCustomer: false,
      editCustomer: false,
      loading: true,
      search: '',
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
    customer() {
      return this.$store.state.customer
    },
    customers() {
      return this.$store.state.customers
    },
  },
  async mounted() {
    if (this.$auth.user.role === 'admin') {
      await this.loadCustomers()
    }
    if (this.$auth.user.role === 'user') {
      await this.loadCustomer()
    }
  },
  methods: {
    async customerUpdated(customer) {
      this.close()
      if (this.$auth.user.role === 'admin') {
        await this.loadCustomers()
        this.customerSelected(this.customerId)
      }
      if (this.$auth.user.role === 'user') {
        this.$store.commit('setCustomer', customer)
      }
    },
    async customerCreated(customer) {
      this.close()
      if (this.$auth.user.role === 'admin') {
        await this.loadCustomers()
        this.customerId = customer._id
        this.customerSelected(customer._id)
      }
    },
    async loadCustomer() {
      this.loading = true
      const customer = await this.$axios.$get(
        '/v1/customers/' + this.$auth.user.customer
      )
      this.$store.commit('setCustomer', customer)
      this.loading = false
    },
    async loadCustomers() {
      this.loading = true
      const customers = await this.$axios.$get('/v1/customers/summary')
      if (customers) {
        this.$store.commit('setCustomers', customers)
      }
      this.loading = false
    },
    customerSelected(id) {
      this.customerId = id
      if (id) {
        this.$store.commit(
          'setCustomer',
          this.customers.find((c) => c._id === id)
        )
      } else {
        this.$store.commit('setCustomer', null)
      }
    },
    close() {
      this.addCustomer = false
      this.editCustomer = false
    },
  },
}
</script>
