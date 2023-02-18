<template>
  <div>
    <CustomerHeader />
    <v-container v-if="customer">
      <v-btn fab fixed bottom right color="success" @click="addDemand = true">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <div class="d-flex justify-space-around">
        <v-btn
          v-for="status in demandStatus"
          :key="status.value"
          x-small
          :color="
            showStatus.value === status.value
              ? 'primary'
              : 'secondary lighten-1'
          "
          style="min-width: 32%; padding: 24px 8px"
          @click="showStatus = status"
        >
          {{ status.label }}
        </v-btn>
      </div>
      <div class="pt-6">
        <div>
          <div v-if="demands">
            <div v-if="!hasDemand">
              <Alert message="Nenhuma demanda aqui" />
            </div>
            <template v-for="demand in demands">
              <v-card
                v-if="demand.status === showStatus.value"
                :key="demand._id"
                class="mb-3 pa-3"
                @click="openDemand(demand)"
              >
                <h4 class="mb-1">{{ demand.title }}</h4>
                <div>
                  <div class="mb-3">
                    <EstimateValues :item="demand" />
                  </div>
                  <v-chip v-if="demand.type" outlined small>
                    <v-icon
                      left
                      small
                      :color="demandPriorityColor(demand.priority)"
                      >{{ demandTypeIcon(demand.type) }}</v-icon
                    >
                    {{ demandTypeLabel(demand.type) }}
                  </v-chip>
                  <v-chip
                    v-if="demand.approved && demand.status === 'backlog'"
                    outlined
                    small
                    color="success"
                  >
                    <v-icon left small> mdi-check </v-icon>
                    Aprovada
                  </v-chip>
                  <v-chip
                    v-if="!demand.estimated && demand.status === 'backlog'"
                    outlined
                    small
                  >
                    <v-icon left small> mdi-clock </v-icon>
                    Aguardando estimativa
                  </v-chip>
                </div>
              </v-card>
            </template>
          </div>
          <Loading v-else />
        </div>
      </div>
      <DemandForm
        v-if="addDemand"
        @input="
          loadDemands()
          addDemand = false
        "
        @close="addDemand = false"
      />
      <Demand
        v-if="demand"
        :demand="demand"
        @input="demandChanged"
        @close="closeDemand"
        @remove="removeDemand"
      />
    </v-container>
  </div>
</template>
<script>
import EstimateValues from './EstimateValues.vue'
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
  components: { EstimateValues },
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
      demands: null,
      addDemand: false,
      activeDemand: null,
      showStatus: demandStatus[0],
      filters: {},
    }
  },
  computed: {
    hasDemandsInProgress() {
      return this.demands.find((d) => d.status === 'in-progress')
    },
    hasPendingDemands() {
      return this.demands.find((d) => d.status === 'backlog' && !d.estimated)
    },
    hasDemand() {
      return this.demands.find((d) => this.showStatus.value === d.status)
    },
    customer() {
      return this.$store.state.customer
    },
    demand() {
      if (this.$route.query.demanda && this.demands) {
        return this.demands.find((d) => d._id === this.$route.query.demanda)
      }
      return null
    },
  },
  watch: {
    customer() {
      this.loadDemands()
    },
  },
  created() {
    if (this.customer) {
      this.loadDemands()
    }
  },
  methods: {
    isActive(demand) {
      return this.activeDemand && this.activeDemand._id === demand._id
    },
    openDemand(demand) {
      this.$router.replace(
        '/' + this.customer._id + '/demandas?demanda=' + demand._id
      )
    },
    async loadDemands() {
      this.demands = null
      const params = { ...this.filters, customer: this.customer._id }
      this.demands = await this.$axios.$get('/v1/demands', {
        params,
      })
      if (this.hasDemandsInProgress && !this.hasPendingDemands) {
        this.showStatus = demandStatus[1]
      }
      this.$emit('change')
    },
    demandChanged(demand) {
      const index = this.demands.findIndex((d) => d._id === demand._id)
      this.demands.splice(index, 1, demand)
    },
    async removeDemand(demand) {
      await this.$axios.$delete(`/v1/demands/${this.activeDemand._id}`)
      this.closeDemand()
      this.loadDemands()
    },
    closeDemand() {
      this.$router.push('/' + this.customer._id + '/demandas')
    },
  },
}
</script>
