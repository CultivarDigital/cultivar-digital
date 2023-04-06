<template>
  <v-dialog :value="true" fullscreen persistent>
    <v-card>
      <DialogHeader @close="close" />
      <v-container class="pt-6">
        <ValidationObserver v-slot="{ validate, invalid }">
          <v-form @submit.prevent="validate().then(save)">
            <div v-if="form.type === null">
              <h3 class="mb-6">Que tipo de demanda é essa?</h3>
              <v-btn
                v-for="demandType in demandTypes"
                :key="demandType.value"
                color="primary"
                class="mb-6 text-left"
                large
                block
                @click="form.type = demandType.value"
                ><v-icon left> {{ demandType.icon }}</v-icon>
                {{ demandType.label }}
              </v-btn>
            </div>
            <div v-else-if="form.priority === null">
              <h3 class="mb-6">Qual a prioridade dessa demanda?</h3>
              <v-btn
                v-for="demandPriority in demandPriorities"
                :key="demandPriority.value"
                :color="demandPriority.color"
                class="mb-6 text-left"
                large
                block
                @click="form.priority = demandPriority.value"
              >
                {{ demandPriority.label }}
              </v-btn>
            </div>
            <div v-else>
              <validation-provider
                v-slot="{ errors }"
                name="Título da demanda"
                rules="required"
              >
                <v-textarea
                  v-model="form.title"
                  rows="1"
                  auto-grow
                  label="Título da demanda"
                  outlined
                  :error-messages="errors"
                  focusable
                />
              </validation-provider>
              <Editor v-model="form.body" editable />
              <validation-provider
                v-slot="{ errors }"
                name="Tipo de demanda"
                rules="required"
              >
                <v-select
                  v-model="form.type"
                  label="Tipo de demanda"
                  :items="demandTypes"
                  item-value="value"
                  item-text="label"
                  outlined
                  :error-messages="errors"
                />
              </validation-provider>
              <validation-provider
                v-slot="{ errors }"
                name="Prioridade"
                rules="required"
              >
                <v-select
                  v-model="form.priority"
                  label="Prioridade"
                  :items="demandPriorities"
                  item-value="value"
                  item-text="label"
                  outlined
                  :error-messages="errors"
                />
              </validation-provider>
              <validation-provider
                v-if="$auth.user.role === 'provider'"
                v-slot="{ errors }"
                name="Status da demanda"
                rules="required"
              >
                <v-select
                  v-model="form.status"
                  label="Status da demanda"
                  :items="demandStatus"
                  item-value="value"
                  item-text="label"
                  outlined
                  :error-messages="errors"
                />
              </validation-provider>

              <div class="d-flex justify-space-between align-center">
                <Remove
                  v-if="
                    $auth.user.role === 'provider' && demand && !demand.approved
                  "
                  @confirm="remove"
                />
                <Save
                  :invalid="invalid"
                  label="Salvar demanda"
                  :block="false"
                />
              </div>
            </div>
          </v-form>
        </ValidationObserver>
      </v-container>
    </v-card>
  </v-dialog>
</template>
<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import demandTypes from '@/data/demandTypes'
import demandStatus from '@/data/demandStatus'
import demandPriorities from '@/data/demandPriorities'
export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  props: {
    demand: {
      type: Object,
      default: () => null,
    },
  },
  data() {
    return {
      demandTypes,
      demandStatus,
      demandPriorities,
      dialog: false,
      form: {
        title: '',
        body: null,
        type: null,
        priority: null,
        progress: 0,
        status: 'backlog',
      },
    }
  },
  created() {
    if (this.demand) {
      Object.keys(this.form).forEach((key) => {
        if (this.demand[key] !== undefined && this.demand[key] !== null) {
          this.form[key] = this.demand[key]
        }
      })
    }
  },
  methods: {
    save() {
      const form = { ...this.form }
      if (this.demand) {
        this.$axios
          .$patch('/v1/demands/' + this.demand._id, form)
          .then((demand) => {
            this.$notifier.success('Atualizado!')
            this.$emit('input', demand)
          })
      } else {
        this.$axios
          .$post('/v1/demands', { ...form, customer: this.customer._id })
          .then((demand) => {
            this.$notifier.success('Salvo!')
            this.$emit('input', demand)
          })
      }
    },
    close() {
      this.$emit('close')
    },
    remove(demand) {
      this.$emit('remove', demand)
    },
  },
}
</script>
