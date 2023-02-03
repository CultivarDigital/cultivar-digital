<template>
  <div>
    <v-btn fab fixed bottom right color="success" @click="addDemand = true">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
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
      <div>
        <div v-if="demands">
          <div v-if="!hasDemand">
            <Alert message="Nenhuma demanda aqui" />
          </div>
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
                        isActive(demand) ? 'mdi-chevron-up' : 'mdi-chevron-down'
                      }}</v-icon>
                    </v-btn>
                  </div>
                </div>

                <div v-if="isActive(demand)" class="white--text">
                  <Editor v-model="demand.body" />
                </div>
                <div>
                  <div v-if="demand.points && demand.points > 0" class="mb-3">
                    <strong>
                      {{ demand.estimate_in_days }}
                      dias
                      <br />
                      {{ demand.price | moeda }}
                    </strong>
                  </div>
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
                    v-if="!demand.points && demand.status === 'backlog'"
                    outlined
                    small
                    color="rgba(255, 255, 255, 0.6)"
                  >
                    <v-icon left small> mdi-clock </v-icon>
                    Aguardando estimativa
                  </v-chip>
                </div>
                <div v-if="isActive(demand)" class="text-right">
                  <v-divider class="my-3"></v-divider>
                  <v-btn
                    v-if="isActive(demand)"
                    small
                    @click="activeDemand = null"
                  >
                    <v-icon small left>mdi-close</v-icon> Fechar
                  </v-btn>
                  <v-btn
                    v-if="isActive(demand)"
                    small
                    @click="editDemand = demand"
                  >
                    <v-icon small left>mdi-pencil</v-icon> Editar
                  </v-btn>
                  <v-btn
                    v-if="
                      $auth.user.role === 'admin' && demand.status === 'backlog'
                    "
                    color="success"
                    small
                    @click="updateStatus(demand, 'in-progress')"
                  >
                    <v-icon left>mdi-play-circle-outline</v-icon> Iniciar
                  </v-btn>
                  <v-btn
                    v-if="
                      $auth.user.role === 'admin' &&
                      demand.status === 'in-progress'
                    "
                    color="success"
                    small
                    @click="updateStatus(demand, 'done')"
                  >
                    <v-icon left>mdi-check-circle-outline</v-icon> Concluir
                  </v-btn>
                </div>
              </v-card-text>
            </v-card>
          </template>
        </div>
        <Loading v-else />
      </div>
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
  props: {
    company: {
      type: Object,
      default: null,
    },
  },
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
      editDemand: null,
      showStatus: demandStatus[0],
      filters: {
        company: this.company ? this.company._id : null,
      },
    }
  },
  computed: {
    hasDemand() {
      return this.demands.find((d) => this.showStatus.value === d.status)
    },
  },
  watch: {
    company() {
      this.filters.company = this.company ? this.company._id : null
      this.loadDemands()
    },
  },
  async mounted() {
    await this.loadDemands()
  },
  methods: {
    isActive(demand) {
      return this.activeDemand === demand._id
    },
    toggleDemand(id) {
      if (this.activeDemand === id) {
        this.activeDemand = null
      } else {
        this.activeDemand = id
      }
    },
    async loadDemands() {
      this.demands = null
      this.demands = await this.$axios.$get('/v1/demands', {
        params: this.filters,
      })
      this.$emit('change')
    },
    async updateStatus(demand, status) {
      await this.$axios.$patch(`/v1/demands/${demand._id}`, {
        status,
      })
      this.loadDemands()
    },
  },
}
</script>
