<template>
  <v-dialog :value="true" fullscreen persistent>
    <v-card class="template-form" color="secondary">
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
                  @change="setBillable"
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
              <validation-provider
                v-if="$auth.user.role === 'provider'"
                v-slot="{ errors }"
                name="Pontos"
                rules="required|min_value:0"
              >
                <v-text-field
                  v-model="form.points"
                  label="Pontos"
                  type="number"
                  outlined
                  :error-messages="errors"
                  @input="pointsChanged"
                />
              </validation-provider>
              <v-switch
                v-if="$auth.user.role === 'provider' && form.points < 1"
                v-model="form.estimated"
                label="Marcar como estimada"
                color="success"
              />
              <div v-if="form.points > 0">
                <v-switch
                  v-model="form.billable"
                  label="Você vai cobrar por essa demanda?"
                  outlined
                  color="success"
                />
                <div
                  v-if="
                    $auth.user.role === 'provider' &&
                    estimate &&
                    estimate.estimate_in_days > 0
                  "
                >
                  <EstimateValues :item="estimate" />
                </div>
              </div>
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
        points: 0,
        price: null,
        type: null,
        priority: null,
        progress: 0,
        status: 'backlog',
        paid: false,
        billable: null,
        estimated: null,
      },
    }
  },
  computed: {
    customer() {
      return this.$store.state.customer
    },
    estimate() {
      if (!this.form.points || !this.customer) return null
      return {
        estimate_in_days: Math.round(
          this.form.points / this.customer.points_per_day
        ),
        price: this.form.points * this.customer.point_price,
        billable: this.form.billable,
      }
    },
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
    toggleMonth(month) {
      if (this.active_month === month) {
        this.active_month = null
      } else {
        this.active_month = month
      }
    },
    removeItem(month, week, index) {
      this.form.data[month - 1][week - 1].splice(index, 1)
    },
    pointsChanged() {
      this.setEstimated()
      this.setBillable()
    },
    setEstimated() {
      this.form.estimated = this.form.points > 0
    },
    setBillable() {
      if (this.form.billable === null) {
        this.form.billable = this.form.points > 0
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
