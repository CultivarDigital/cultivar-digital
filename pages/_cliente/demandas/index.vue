<template>
  <div>
    <v-container v-if="customer">
      <v-btn fab fixed bottom right color="success" @click="addDemand = true">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-row no-gutters class="mx-n1">
        <v-col
          v-for="status in demandStatus"
          :key="status.value"
          cols="4"
          class="px-1"
        >
          <v-btn
            x-small
            block
            :color="
              showStatus.value === status.value
                ? 'success'
                : 'secondary lighten-1'
            "
            style="padding: 24px 8px"
            @click="showStatus = status"
          >
            {{ status.label }}
          </v-btn>
        </v-col>
      </v-row>
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
                elevation="0"
                @click="openDemand(demand)"
              >
                <h4 class="mb-2">{{ demand.title }}</h4>
                <div>
                  <div class="mb-3">
                    <DemandEstimate :demand="demand" />
                  </div>

                  <div class="d-flex justify-space-between align-start">
                    <div>
                      <v-chip
                        v-if="demand.type"
                        outlined
                        small
                        class="text--secondary"
                      >
                        {{ demandTypeLabel(demand.type) }}
                      </v-chip>
                      <v-chip
                        v-if="demand.approved && demand.status === 'backlog'"
                        outlined
                        small
                        color="success"
                      >
                        <v-icon left small> mdi-low </v-icon>
                        Aprovada
                      </v-chip>
                    </div>
                    <v-chip
                      v-if="demand.priority"
                      outlined
                      small
                      :color="demandPriorityColor(demand.priority)"
                      class="justify-center"
                      style="min-width: 60px"
                    >
                      {{ demandPriorityLabel(demand.priority) }}
                    </v-chip>
                  </div>
                </div>
              </v-card>
            </template>
          </div>
          <Loading v-else />
        </div>
      </div>
      <DemandForm
        v-if="addDemand"
        @input="demandCreated"
        @close="addDemand = false"
      />
      <Demand
        v-if="demand"
        :demand="demand"
        @input="demandUpdated"
        @close="closeDemand"
        @remove="removeDemand"
      />
    </v-container>
  </div>
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
  layout: 'customer',
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
    demand() {
      if (this.$route.query.demanda && this.demands) {
        return this.demands.find((d) => d._id === this.$route.query.demanda)
      }
      return null
    },
  },
  mounted() {
    this.loadDemands()
  },
  methods: {
    isActive(demand) {
      return this.activeDemand && this.activeDemand._id === demand._id
    },
    async loadDemands() {
      const params = { ...this.filters, customer: this.customer._id }
      this.demands = await this.$axios.$get('/v1/demands', {
        params,
      })
      if (this.hasDemandsInProgress && !this.hasPendingDemands) {
        this.showStatus = demandStatus[1]
      }
    },
    openDemand(demand) {
      this.$router.push(
        '/' + this.customer._id + '/demandas?demanda=' + demand._id
      )
    },
    async demandCreated(demand) {
      this.addDemand = false
      await this.loadDemands()
      this.loadSummary()
      this.openDemand(demand)
    },
    async demandUpdated(demand) {
      await this.loadDemands()
      this.loadSummary()
    },
    async removeDemand(demand) {
      await this.$axios.$delete(`/v1/demands/${demand._id}`)
      this.closeDemand()
      this.loadDemands()
      this.loadSummary()
    },
    closeDemand() {
      this.$router.push('/' + this.customer._id + '/demandas')
    },
    loadSummary() {
      this.$store.dispatch('loadCustomerSummary')
    },
  },
}
</script>
