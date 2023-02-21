<template>
  <v-dialog :value="true" fullscreen persistent>
    <v-card>
      <div class="pb-12">
        <DialogHeader @close="close" />
        <v-container>
          <h3 class="mb-3">{{ demand.title }}</h3>
          <div class="mb-3">
            <Editor :value="demand.body" />
          </div>
          <div class="mb-3">
            <DemandEstimate :demand="demand" />
          </div>
          <div class="d-flex justify-space-between align-start">
            <div>
              <v-chip
                v-if="demand.type"
                outlined
                small
                class="secondary--text text--lighten-4"
              >
                {{ demandTypeLabel(demand.type) }}
                {{ demandStatusLabel(demand.status).toLowerCase().replace('finalizadas', 'finalizada') }}
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
            </div>
            <v-chip
              v-if="demand.priority"
              outlined
              small
              :color="demandPriorityColor(demand.priority)"
              class="justify-center"
              style="min-width: 60px"
            >
              Prioridade
              {{ demandPriorityLabel(demand.priority).toLowerCase() }}
            </v-chip>
          </div>

          <!-- <Comments :demand="demand" /> -->
          <div
            v-if="!preview && ($auth.user.role === 'admin' || !demand.approved)"
            class="text-right"
          >
            <v-divider class="my-3"></v-divider>
            <div class="d-flex justify-space-between align-center">
              <div v-if="!demand.approved">
                <v-btn v-if="!demand.approved" @click="edit = true">
                  <v-icon left>mdi-pencil</v-icon> Editar
                </v-btn>
              </div>
              <div v-if="$auth.user.role === 'admin'">
                <v-btn
                  v-if="demand.status === 'backlog'"
                  color="success"
                  large
                  @click="updateStatus(demand, 'in-progress')"
                >
                  <v-icon left>mdi-play</v-icon>
                  Iniciar
                </v-btn>
                <v-btn
                  v-if="demand.status === 'in-progress'"
                  color="success"
                  large
                  @click="updateStatus(demand, 'done')"
                >
                  <v-icon left>mdi-check</v-icon>
                  Finalizar
                </v-btn>
              </div>
            </div>
          </div>
        </v-container>

        <DemandForm
          v-if="edit"
          :demand="demand"
          @input="changed"
          @close="edit = false"
          @remove="remove"
        />
      </div>
    </v-card>
  </v-dialog>
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
    demand: {
      type: Object,
      required: true,
    },
    preview: {
      type: Boolean,
      default: false,
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
      edit: false,
    }
  },
  created() {},
  methods: {
    close() {
      this.$emit('close')
    },
    changed(demand) {
      this.edit = false
      this.$emit('input', demand)
    },
    remove(demand) {
      this.$emit('remove', demand)
    },
    async updateStatus(demand, status) {
      const updatedDemand = await this.$axios.$patch(
        `/v1/demands/${demand._id}`,
        {
          status,
        }
      )
      this.changed(updatedDemand)
    },
  },
}
</script>
