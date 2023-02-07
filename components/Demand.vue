<template>
  <v-dialog :value="true" fullscreen persistent>
    <v-card class="template-form">
      <DialogHeader @close="close" />
      <v-container class="pt-6">
        <div class="d-flex justify-space-between align-center mb-6">
          <div>
            Demanda
            <span v-if="demand.status">
              {{ demandStatusLabel(demand.status).toLowerCase() }}
            </span>
          </div>
          <v-chip
            v-if="demand.type"
            outlined
            small
            color="rgba(255, 255, 255, 0.6)"
          >
            <v-icon left small :color="demandPriorityColor(demand.priority)">{{
              demandTypeIcon(demand.type)
            }}</v-icon>
            {{ demandTypeLabel(demand.type) }}
          </v-chip>
        </div>
        <h3 class="white--text mb-3">{{ demand.title }}</h3>
        <div class="white--text mb-3">
          <Editor :value="demand.body" />
        </div>
        <div>
          <div v-if="demand.points && demand.points > 0" class="mb-6">
            <small>
              {{ demand.estimate_in_days }}
              dias
              <br />
              {{ demand.price | moeda }}
            </small>
          </div>
        </div>

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
          color="rgba(255, 255, 255, 0.6)"
        >
          <v-icon left small> mdi-clock </v-icon>
          Aguardando estimativa
        </v-chip>
        <div v-if="!preview" class="text-right">
          <v-divider class="my-3"></v-divider>
          <div class="d-flex justify-space-between align-center">
            <div v-if="$auth.user.role === 'admin'">
              <Remove button button-label="Arquivar" @confirm="remove" />
            </div>
            <div>
              <v-btn small @click="edit = true">
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
                  $auth.user.role === 'admin' && demand.status === 'in-progress'
                "
                color="success"
                small
                @click="updateStatus(demand, 'done')"
              >
                <v-icon left>mdi-check-circle-outline</v-icon> Concluir
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
      />
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
      const updatedDemand = await this.$axios.$patch(`/v1/demands/${demand._id}`, {
        status,
      })
      this.changed(updatedDemand)
    },
  },
}
</script>
