<template>
  <div>
    <EstimateValues
      v-if="demand.estimated"
      :item="demand"
      :show-edit-button="
        $auth.user.role === 'provider' && !demand.approved && showEditButton
      "
      @edit="show_form = true"
    />

    <div v-if="!demand.estimated && demand.status === 'backlog'">
      <div
        v-if="!showEstimateButton"
        class="small text-caption text--secondary"
      >
        Aguardando estimativa
      </div>
      <v-btn
        v-if="$auth.user.role === 'provider' && showEstimateButton"
        color="success"
        class="mt-2"
        @click="show_form = true"
      >
        <v-icon left small>mdi-calculator</v-icon>
        Estimar esta demanda
      </v-btn>
    </div>
    <v-dialog
      v-if="show_form"
      :value="true"
      :overlay-opacity="0.9"
      max-width="350"
      @click:outside="close"
      @keydown.esc="close"
    >
      <v-card outlined>
        <v-container>
          <div class="d-flex align-center justify-space-between mb-6">
            <div class="d-flex align-center">
              <h3>Estimar demanda</h3>
            </div>
            <v-btn icon @click="close">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
          <ValidationObserver v-slot="{ validate, invalid }">
            <v-form @submit.prevent="validate().then(save)">
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
                  hide-details="auto"
                  bg-color="#fff"
                  @input="pointsChanged"
                />
              </validation-provider>
              <div v-if="form.points > 0">
                <v-checkbox
                  v-model="form.billable"
                  label="Você vai cobrar por essa demanda?"
                  outlined
                  color="success"
                />
                <div
                  v-if="estimate && estimate.estimate_in_days > 0"
                  class="text-center"
                >
                  <EstimateValues :item="estimate" />
                </div>
              </div>
              <div>
                <Save
                  :invalid="invalid"
                  label="Salvar estimativa"
                  :show-error-alert="false"
                />
              </div>
            </v-form>
          </ValidationObserver>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  props: {
    demand: {
      type: Object,
      required: true,
    },
    showEstimateButton: {
      type: Boolean,
      default: false,
    },
    showEditButton: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      form: {
        points: this.demand.points || null,
        estimated: true,
        billable: this.demand.billable || true,
      },
      show_form: false,
    }
  },
  computed: {
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
  methods: {
    save() {
      const form = { ...this.form }
      this.$axios
        .$patch('/v1/demands/' + this.demand._id, form)
        .then((demand) => {
          this.$notifier.success('Estimativa atualizada!')
          this.$emit('input', demand)
          this.close()
        })
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
      this.show_form = false
      this.$emit('close')
    },
  },
}
</script>
