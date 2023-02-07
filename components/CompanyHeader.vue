<template>
  <v-container class="py-6" fluid>
    <div v-if="loading">
      <Loading />
    </div>
    <div v-else>
      <div v-if="$auth.user.role === 'admin' && companies">
        <v-select
          v-model="companyId"
          hide-details="auto"
          :items="companies"
          label="Cliente"
          item-value="_id"
          item-text="name"
          clearable
          outlined
          @input="companySelected"
        >
          <template #append-outer>
            <v-menu offset-y>
              <template #activator="{ on, attrs }">
                <v-btn dark small icon v-bind="attrs" v-on="on">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item v-if="company" @click="editCompany = true">
                  <v-list-item-title>Editar</v-list-item-title>
                </v-list-item>
                <v-list-item
                  v-if="$auth.user.role === 'admin'"
                  @click="addCompany = true"
                >
                  <v-list-item-title>Adicionar cliente</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </template>
        </v-select>
      </div>
      <div
        v-if="$auth.user.role === 'user' && company"
        class="d-flex justify-space-between align-center"
      >
        <div>
          <h2>{{ company.name }}</h2>
          <div>
            <small>{{ $auth.user.name }}</small>
          </div>
        </div>
        <div>
          <v-btn icon @click="editCompany = true">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </div>
      </div>
      <div v-if="!company" class="pt-6">
        <Alert message="Selecione a empresa" />
      </div>
      <CompanyForm v-if="addCompany" @input="companyUpdated" @close="close" />
      <CompanyForm
        v-if="editCompany"
        :company="company"
        @input="companyUpdated"
        @close="close"
      />
    </div>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      companyId: '',
      addCompany: false,
      editCompany: false,
      loading: true,
    }
  },
  computed: {
    company() {
      return this.$store.state.company
    },
    companies() {
      return this.$store.state.companies
    },
  },
  async mounted() {
    if (this.$auth.user.role === 'admin') {
      await this.loadCompanies()
    }
    if (this.$auth.user.role === 'user') {
      await this.loadCompany()
    }
  },
  methods: {
    async companyUpdated(company) {
      if (this.$auth.user.role === 'admin') {
        await this.loadCompanies()
        if (this.companyId) {
          this.companySelected(this.companyId)
        }
      }
      if (this.$auth.user.role === 'user') {
        this.$store.commit('setCompany', company)
      }
      this.close()
    },
    async loadCompany() {
      this.loading = true
      const company = await this.$axios.$get(
        '/v1/companies/' + this.$auth.user.company
      )
      this.$store.commit('setCompany', company)
      this.loading = false
    },
    async loadCompanies() {
      this.loading = true
      const companies = await this.$axios.$get('/v1/companies')
      if (companies) {
        this.$store.commit('setCompanies', companies)
      }
      this.loading = false
    },
    companySelected(id) {
      if (id) {
        this.$store.commit(
          'setCompany',
          this.companies.find((c) => c._id === id)
        )
      } else {
        this.$store.commit('setCompany', null)
      }
    },
    close() {
      this.addCompany = false
      this.editCompany = false
    },
  },
}
</script>
