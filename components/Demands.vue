<template>
  <div>
    <v-btn fab fixed bottom right color="success" @click="addDemand = true">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <div class="d-flex justify-space-around">
      <v-btn
        v-for="status in demandStatus"
        :key="status.value"
        x-small
        :color="showStatus.value === status.value ? 'primary' : 'secondary'"
        style="min-width: 32%; padding: 24px 8px;"
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
              @click="setActiveDemand(demand)"
            >
              <v-card-text>
                <h3 class="mb-3">{{ demand.title }}</h3>
                <div>
                  <div class="mb-3">
                    <EstimateValues :item="demand" :show-price="false" />
                  </div>
                  <v-chip
                    v-if="demand.type"
                    outlined
                    small
                    
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
                    v-if="
                      !demand.points &&
                      demand.status === 'backlog' &&
                      demand.type === 'feature'
                    "
                    outlined
                    small
                  >
                    <v-icon left small> mdi-clock </v-icon>
                    Aguardando estimativa
                  </v-chip>
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
      @input="
        loadDemands()
        addDemand = false
      "
      @close="addDemand = false"
    />
    <Demand
      v-if="activeDemand"
      :demand="activeDemand"
      @input="changed"
      @close="activeDemand = null"
      @remove="removeDemand"
    />
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
        };
    },
    computed: {
        hasDemandsInProgress() {
            return this.demands.find((d) => d.status === 'in-progress');
        },
        hasDemand() {
            return this.demands.find((d) => this.showStatus.value === d.status);
        },
        company() {
            return this.$store.state.company;
        },
    },
    watch: {
        company() {
            this.loadDemands();
        },
    },
    async mounted() {
        await this.loadDemands();
    },
    methods: {
        isActive(demand) {
            return this.activeDemand && this.activeDemand._id === demand._id;
        },
        setActiveDemand(demand) {
            if (!this.activeDemand || this.activeDemand._id !== demand._id) {
                this.activeDemand = demand;
            }
            else {
                this.activeDemand = null;
            }
        },
        async loadDemands() {
            this.demands = null;
            const params = { ...this.filters, company: this.company._id };
            this.demands = await this.$axios.$get("/v1/demands", {
                params,
            });
            if (this.hasDemandsInProgress) {
                this.showStatus = demandStatus[1];
            }
            this.$emit("change");
        },
        changed(demand) {
            const index = this.demands.findIndex((d) => d._id === demand._id);
            this.activeDemand = demand;
            this.demands.splice(index, 1, demand);
        },
        async removeDemand(demand) {
            await this.$axios.$delete(`/v1/demands/${this.activeDemand._id}`);
            this.activeDemand = null;
            this.loadDemands();
        },
    }
}
</script>
