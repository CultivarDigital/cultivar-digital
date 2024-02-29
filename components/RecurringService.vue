<template>
  <v-dialog :value="true" fullscreen persistent>
    <v-card>
      <div class="pb-12">
        <DialogHeader @close="close" />
        <v-container>
          <h3 class="mb-3">{{ recurringService.name }}</h3>
          <div v-if="recurringService.description" class="mb-3" v-html="recurringService.description"></div>
          <div v-if="recurringService.price && recurringService.price > 0" class="mb-3" >
            <div class="mb-1">
              <strong>Valor:</strong>
              <span class="ml-1">
                {{ recurringService.price | currency }}
              </span>
            </div>
          </div>
          <div class="d-flex justify-space-between align-start">
            <div>
              <v-chip
                v-if="recurringService.paid && recurringService.status === 'backlog'"
                outlined
                small
                color="success"
              >
                <v-icon left small> mdi-check </v-icon> Paga
              </v-chip>
            </div>
          </div>
          <div
            v-if="
              !preview && ($auth.user.role === 'provider' || !recurringService.paid)
            "
            class="text-right"
          >
            <v-divider class="my-3"></v-divider>
            <div class="d-flex justify-space-between align-center">
              <div>
                <v-btn @click="edit = true">
                  <v-icon left>mdi-pencil</v-icon> Editar
                </v-btn>
              </div>
              <div v-if="recurringService.paid">
                <v-btn
                  v-if="recurringService.status === 'backlog'"
                  color="success"
                  large
                  @click="updateStatus(recurringService, 'in-progress')"
                >
                  <v-icon left>mdi-play</v-icon>
                  Iniciar
                </v-btn>
                <v-btn
                  v-if="recurringService.status === 'in-progress'"
                  color="success"
                  large
                  @click="updateStatus(recurringService, 'done')"
                >
                  <v-icon left>mdi-check</v-icon>
                  Finalizar
                </v-btn>
              </div>
            </div>
          </div>
          <!-- <div class="pt-6">
            <v-btn
              class="mb-6"
              small
              @click="
                () =>
                  copy(
                    providerURL +
                      '/' +
                      recurringService.customer +
                      '/servicos-recorrentes?servico=' +
                      recurringService._id
                  )
              "
            >
              <v-icon left small> mdi-content-copy </v-icon>
              Copiar link
            </v-btn>
          </div> -->
        </v-container>
        <RecurringServiceForm
          v-if="edit"
          :recurring-service="recurringService"
          @input="changed"
          @close="edit = false"
          @remove="remove"
        />
      </div>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    recurringService: {
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
      edit: false,
    }
  },
  created() {},
  methods: {
    close() {
      this.$emit('close')
    },
    changed(recurringService) {
      this.edit = false
      this.$emit('input', recurringService)
    },
    remove(recurringService) {
      this.$emit('remove', recurringService)
    },
    async updateStatus(recurringService, status) {
      const updatedRecurringService = await this.$axios.$patch(
        `/v1/recurringServices/${recurringService._id}`,
        {
          status,
        }
      )
      this.changed(updatedRecurringService)
    },
    async copy(value) {
      await navigator.clipboard.writeText(value)
      this.notify('Copiado!')
    },
  },
}
</script>
