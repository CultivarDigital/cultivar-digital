<template>
  <v-container class="pt-6" fluid>
    <div v-if="$auth.user.role === 'admin'">
      <div v-if="companies">
        <div class="d-flex align-center justify-space-between">
          <div>
            <v-select
              v-model="filters.company"
              hide-details="auto"
              :items="companies"
              label="Todas as clientes"
              item-value="_id"
              item-text="name"
              clearable
              outlined
              @change="companyChanged"
            />
          </div>
          <div class="text-right">
            <CompanyForm @change="loadCompanies" />
            <CompanyForm
              v-if="company"
              :company="company"
              @change="loadCompanies"
            />
          </div>
        </div>
      </div>
    </div>
    <v-divider class="my-6"></v-divider>
    <div class="d-flex justify-space-between mb-6">
      <div>
        <h2>Demandas</h2>
      </div>
      <div>
        <v-btn color="success" @click="addDemand = true">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </div>
    </div>
    <v-divider class="my-6"></v-divider>
    <div class="d-flex justify-space-around">
      <v-btn
        v-for="status in demandStatus"
        :key="status.value"
        small
        :color="showStatus.value === status.value ? 'primary' : 'secondary'"
        @click="showStatus = status"
      >
        {{ status.label }}
      </v-btn>
    </div>
    <div class="pt-6">
      <template v-for="demand in demands">
        <v-card
          v-if="demand.status === showStatus.value"
          :key="demand._id"
          class="mb-3"
        >
          <v-card-text>
            <div class="d-flex align-center justify-space-between mb-3">
              <div>
                <h3 class="white--text">{{ demand.title }}</h3>
              </div>

              <div class="text-right">
                <v-btn small icon @click="toggleDemand(demand._id)">
                  <v-icon>{{
                    isActive(demand)
                      ? 'mdi-chevron-up'
                      : 'mdi-chevron-down'
                  }}</v-icon>
                </v-btn>
              </div>
            </div>

            <div v-if="isActive(demand)" class="white--text">
              <Editor v-model="demand.body" />
            </div>
            <div>
              <v-chip
                v-if="demand.type"
                outlined
                small
                color="rgba(255, 255, 255, 0.6)"
              >
                <v-icon
                  left
                  small
                  :color="demandPriorityColor(demand.priority)"
                  >{{ demandTypeIcon(demand.type) }}</v-icon
                >
                {{ demandTypeLabel(demand.type) }}
              </v-chip>
            </div>
            <div v-if="isActive(demand)" class="text-right">
              <v-divider class="my-3"></v-divider>
              <v-btn
                v-if="isActive(demand)"
                small
                @click="editDemand = demand"
              >
                <v-icon small left>mdi-pencil</v-icon> Editar
              </v-btn>
              <v-btn v-if="$auth.user.role === 'admin' && demand.status === 'backlog'" color="success" small>
                <v-icon left>mdi-play-circle-outline</v-icon> Iniciar
              </v-btn>
              <v-btn
                v-if="$auth.user.role === 'admin' && demand.status === 'in-progress'"
                color="success"
                small
              >
                <v-icon left>mdi-check-circle-outline</v-icon> Finalizar
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </template>
    </div>
    <DemandForm
      v-if="addDemand"
      :company="company"
      @change="
        loadDemands()
        addDemand = false
      "
      @close="addDemand = false"
    />
    <DemandForm
      v-if="editDemand"
      :company="company"
      :demand="editDemand"
      @change="
        loadDemands()
        editDemand = null
      "
      @close="editDemand = null"
    />
  </v-container>
</template>
<script>
import demandTypes, {
  demandTypeLabel,
  demandTypeIcon,
} from '@/data/demandTypes'
import demandStatus, { demandStatusLabel } from '@/data/demandStatus'
import demandPriorities, {
  demandPriorityLabel,
  demandPriorityColor,
} from '~/data/demandPriorities'

export default {
  data() {
    return {
      demandTypes,
      demandTypeLabel,
      demandTypeIcon,
      demandPriorityLabel,
      demandPriorityColor,
      demandStatus,
      demandStatusLabel,
      demandPriorities,
      companies: null,
      company: null,
      demands: null,
      addDemand: false,
      activeDemand: null,
      editDemand: null,
      showStatus: demandStatus[0],
      filters: {
        company: this.$auth.user.company,
      },
    }
  },
  async mounted() {
    if (this.$auth.user.role === 'admin') {
      await this.loadCompanies()
    }
    await this.loadDemands()
  },
  methods: {
    isActive(demand) {
      return this.activeDemand === demand._id
    },
    toggleDemand(id) {
      console.log('toggleDemand', this.activeDemand === id)
      if (this.activeDemand === id) {
        this.activeDemand = null
      } else {
        this.activeDemand = id
      }
    },
    async companyUpdated() {
      await this.loadCompanies()
      await this.loadCompany()
    },
    async loadCompanies() {
      this.companies = await this.$axios.$get('/v1/companies')
    },
    async companyChanged() {
      if (this.filters.company) {
        this.company = await this.$axios.$get(
          '/v1/companies/' + this.filters.company
        )
      } else {
        this.company = null
      }
      this.loadDemands()
    },
    async loadDemands() {
      this.demands = await this.$axios.$get('/v1/demands', {
        params: this.filters,
      })
      this.editDemand = this.demands[0]
    },
  },
}
</script>
