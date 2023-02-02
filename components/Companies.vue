<template>
  <v-container class="pt-6" fluid>
    <div v-if="$auth.user.role === 'admin'">
      <div v-if="companies">
        <div class="d-flex align-center justify-space-between">
          <div>
            <v-select
              v-model="companyId"
              hide-details="auto"
              :items="companies"
              label="Todas as clientes"
              item-value="_id"
              item-text="name"
              clearable
              outlined
              @change="companySelected"
            />
          </div>
          <div class="text-right">
            <CompanyForm @change="companyUpdated" />
            <CompanyForm
              v-if="company"
              :company="company"
              @change="companyUpdated"
            />
          </div>
        </div>
      </div>
    </div>
    
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      companies: null,
      company: null,
      companyId: null,
    }
  },
  async mounted() {
    if (this.$auth.user.role === 'admin') {
      await this.loadCompanies()
    }
  },
  methods: {
    async companyUpdated() {
      await this.loadCompanies()
      if (this.companyId) {
        this.companySelected(this.companyId)
      }
    },
    async loadCompanies() {
      this.companies = await this.$axios.$get('/v1/companies')
    },
    companySelected(id) {
      if (id) {
        this.company = this.companies.find((c) => c._id === id)
      } else {
        this.company = null
      }
      this.$emit('input', this.company)
    },
  },
}
</script>
