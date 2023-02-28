<template>
  <v-dialog :value="true" fullscreen persistent>
    <v-card>
      <DialogHeader @close="close" />

      <div v-if="loading" class="pt-6">
        <Loading />
      </div>
      <div v-else>
        <v-container>
          <h3 class="font-weight-medium">Gerar proposta de orçamento</h3>
        </v-container>
        <ValidationObserver v-slot="{ validate, invalid }">
          <v-form @submit.prevent="validate().then(save)">
            <div>
              <v-container>
                <validation-provider
                  v-slot="{ errors }"
                  name="Título da proposta"
                  rules="required"
                >
                  <v-textarea
                    v-model="form.title"
                    rows="1"
                    auto-grow
                    label="Título da proposta"
                    outlined
                    :error-messages="errors"
                    focusable
                  />
                </validation-provider>
                <div v-if="form.items && form.items.length">
                  <div class="text-subtitle-2 text--secondary mb-3">
                    Selecione as demandas que deseja incluir na proposta:
                  </div>
                  <div v-if="form.items.length > 1" class="text-right">
                    <v-btn color="success" x-small @click="toggleSelection"
                      >Selecionar {{ allChecked ? 'nenhuma' : 'todas' }}</v-btn
                    >
                  </div>
                  <v-list class="mx-n4 mb-3">
                    <v-list-item
                      v-for="item in form.items"
                      :key="item._id"
                      class="secondary"
                    >
                      <v-list-item-content>
                        <a class="d-block" @click="previewDemand = item.demand">
                          <span class="text-subtitle-2">{{
                            item.demand.title
                          }}</span>
                          <EstimateValues :item="{ ...item, billable: true }" />
                        </a>
                        <v-list-item-subtitle v-if="item.points > 0">
                        </v-list-item-subtitle>
                      </v-list-item-content>
                      <v-list-item-action>
                        <v-checkbox
                          v-model="item.checked"
                          color="success"
                          large
                        />
                      </v-list-item-action>
                    </v-list-item>
                  </v-list>
                  <div v-if="totalPoints > 0" class="text-right">
                    <h3>
                      Total: {{ totalPrice | moeda }} -
                      {{ $utils.plural(totalEstimateInDays, 'dia útil') }}
                    </h3>
                    <Save :invalid="invalid" :block="false" label="Salvar" />
                  </div>
                </div>
                <div v-else>
                  <Alert
                    message="Nenhuma com valor estimado foi encontrada na fila para a proposta"
                  />
                </div>
              </v-container>
            </div>
          </v-form>
        </ValidationObserver>
      </div>
      <Demand
        v-if="previewDemand"
        :demand="previewDemand"
        preview
        @close="previewDemand = null"
        @input="demandUpdated"
      />
    </v-card>
  </v-dialog>
</template>
<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      loading: false,
      demands: [],
      previewDemand: null,
      form: {
        title: this.$moment().locale('pt-br').format('MMM-YYYY').toUpperCase(),
        status: 'pending',
        points: 0,
        price: 0,
        estimate_in_days: 0,
        items: [],
      },
    }
  },
  computed: {
    totalPrice() {
      return this.selectedItems.reduce((total, item) => {
        return total + item.price
      }, 0)
    },
    totalPoints() {
      return this.selectedItems.reduce((total, item) => {
        return total + item.points
      }, 0)
    },
    totalEstimateInDays() {
      return this.selectedItems.reduce((total, item) => {
        return total + item.estimate_in_days
      }, 0)
    },
    selectedItems() {
      return this.form.items
        .filter((item) => item.checked)
        .map((item) => {
          return {
            demand: item.demand._id,
            points: item.points,
            price: item.price,
            estimate_in_days: item.estimate_in_days,
          }
        })
    },
    allChecked() {
      return this.form.items.every((item) => item.checked)
    },
  },
  created() {
    this.loadDemands()
  },
  methods: {
    async loadDemands() {
      this.loading = true
      this.demands = await this.$axios.$get('/v1/demands', {
        params: {
          status: 'backlog',
          customer: this.customer._id,
          approved: false,
          billable: true,
          with_points: true,
        },
      })

      this.demands.forEach((demand) => {
        this.form.items.push({
          demand,
          price: demand.price,
          points: demand.points,
          estimate_in_days: demand.estimate_in_days,
          checked: false,
        })
      })

      if (this.demands.length === 1) {
        this.form.items[0].checked = true
      }
      this.loading = false
    },
    save() {
      const form = { ...this.form }
      form.items = this.selectedItems
      form.price = this.totalPrice
      form.points = this.totalPoints
      form.estimate_in_days = this.totalEstimateInDays
      this.loading = true
      this.$axios
        .$post('/v1/proposals', { ...form, customer: this.customer._id })
        .then((proposal) => {
          this.$notifier.success('Proposta gerada!')
          this.$emit('input', proposal)
        })
      this.loading = false
    },
    demandUpdated(demand) {
      const item = this.form.items.find(
        (item) => item.demand._id === demand._id
      )
      item.demand = demand
      item.price = demand.price
      item.points = demand.points
      item.estimate_in_days = demand.estimate_in_days
      this.previewDemand = demand
    },
    toggleSelection() {
      let checked = true
      if (this.allChecked) {
        checked = false
      }

      this.form.items.forEach((item) => {
        item.checked = checked
      })
    },
    close() {
      this.$emit('close')
    },
  },
}
</script>
