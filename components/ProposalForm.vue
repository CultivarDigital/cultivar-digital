<template>
  <v-dialog :value="true" fullscreen persistent>
    <v-card class="template-form">
      <DialogHeader @close="close" />

      <div v-if="loading" class="pt-6">
        <Loading />
      </div>
      <div v-else>
        <v-container>
          <h3>Gerar proposta comercial</h3>
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
                <div>Selecione as demandas que deseja incluir na proposta:</div>
              </v-container>

              <v-list color="secondary">
                <v-list-item v-for="item in form.items" :key="item._id">
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ item.demand.title }}
                    </v-list-item-title>
                    <v-list-item-subtitle v-if="item.points > 0">
                      {{ item.price | moeda }} ({{
                        item.estimate_in_days
                      }}
                      dias)
                    </v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-checkbox v-model="item.checked" color="primary" />
                  </v-list-item-action>
                </v-list-item>
              </v-list>
              <v-container>
                <h3>
                  Total: {{ totalPrice | moeda }} ({{
                    totalEstimateInDays
                  }}
                  dias)
                </h3>
                <div v-if="totalPoints > 0" class="text-right">
                  <Save :invalid="invalid" :block="false" label="Salvar" />
                </div>
              </v-container>
            </div>
          </v-form>
        </ValidationObserver>
      </div>
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
    company() {
      return this.$store.state.company
    },
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
          company: this.company._id,
          approved: false,
          type: 'feature',
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
        .$post('/v1/proposals', { ...form, company: this.company._id })
        .then((proposal) => {
          this.$notifier.success('Proposta gerada!')
          this.$emit('change', proposal)
        })
      this.loading = false
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
    close() {
      this.$emit('close')
    },
  },
}
</script>
