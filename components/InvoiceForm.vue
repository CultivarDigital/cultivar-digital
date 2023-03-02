<template>
  <v-dialog :value="true" fullscreen persistent>
    <v-card>
      <DialogHeader @close="close" />

      <div v-if="loading" class="pt-6">
        <Loading />
      </div>
      <div v-else>
        <v-container>
          <h3 class="font-weight-medium">Gerar fatura</h3>
        </v-container>
        <ValidationObserver v-slot="{ validate, invalid }">
          <v-form @submit.prevent="validate().then(save)">
            <div>
              <v-container>
                <validation-provider
                  v-slot="{ errors }"
                  name="Título da fatura"
                  rules="required"
                >
                  <v-textarea
                    v-model="form.title"
                    rows="1"
                    auto-grow
                    label="Título da fatura"
                    outlined
                    :error-messages="errors"
                    focusable
                  />
                </validation-provider>
                <div v-if="demandItems.length">
                  <div class="text-subtitle-2 text--secondary mb-6">
                    Selecione os items que deseja incluir na fatura:
                  </div>
                  <div
                    v-if="demandItems.length > 1"
                    class="d-flex justify-space-between"
                  >
                    <div><strong>Demandas</strong></div>
                    <v-btn
                      color="success"
                      x-small
                      @click="toggleSelection('demand')"
                      >Selecionar
                      {{ allChecked('demand') ? 'nenhuma' : 'todas' }}</v-btn
                    >
                  </div>
                  <v-list class="mx-n4 mb-3">
                    <v-list-item
                      v-for="item in demandItems"
                      :key="item._id"
                      class="secondary"
                    >
                      <v-list-item-content>
                        <a class="d-block" @click="previewDemand = item.demand">
                          <span class="text-subtitle-2">{{
                            item.demand.title
                          }}</span>
                          <div class="caption text--secondary">
                            {{ item.price | moeda }}
                          </div>
                        </a>
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
                </div>
                <div v-if="recurringServiceItems.length">
                  <div
                    v-if="recurringServiceItems.length > 1"
                    class="d-flex justify-space-between"
                  >
                    <div><strong>Serviços recorrentes</strong></div>
                    <v-btn
                      color="success"
                      x-small
                      @click="toggleSelection('recurringService')"
                      >Selecionar
                      {{
                        allChecked('recurringService') ? 'nenhum' : 'todos'
                      }}</v-btn
                    >
                  </div>
                  <v-list class="mx-n4 mb-3">
                    <v-list-item
                      v-for="item in recurringServiceItems"
                      :key="item._id"
                      class="secondary"
                    >
                      <v-list-item-content>
                        <a
                          class="d-block"
                          @click="
                            previewRecurringService = item.recurringService
                          "
                        >
                          <span class="text-subtitle-2">{{
                            item.recurringService.name
                          }}</span>
                          <div class="caption text--secondary">
                            {{ item.price | moeda }}
                          </div>
                        </a>
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
                </div>
                <div
                  v-if="!recurringServiceItems.length && !demandItems.length"
                >
                  <Alert
                    message="Nenhuma demanda ou serviço recorrente foi encontrado para a fatura"
                  />
                </div>
                <div v-if="totalPrice > 0" class="text-right">
                  <h3>Total: {{ totalPrice | moeda }}</h3>
                  <Save :invalid="invalid" :block="false" label="Salvar" />
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
      <RecurringService
        v-if="previewRecurringService"
        :demand="previewRecurringService"
        preview
        @close="previewRecurringService = null"
        @input="recurringServiceUpdated"
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
      previewRecurringService: null,
      form: {
        title: this.$moment().locale('pt-br').format('MMM-YYYY').toUpperCase(),
        status: 'pending',
        price: 0,
        items: [],
      },
    }
  },
  computed: {
    demandItems() {
      return this.form.items.filter((item) => item.demand)
    },
    recurringServiceItems() {
      return this.form.items.filter((item) => item.recurringService)
    },
    totalPrice() {
      return this.selectedItems.reduce((total, item) => {
        return total + item.price
      }, 0)
    },
    selectedItems() {
      return this.form.items
        .filter((item) => item.checked)
        .map((item) => {
          const demandId = item.demand ? item.demand._id : null
          const recurringServiceId = item.recurringService
            ? item.recurringService._id
            : null
          return {
            demand: demandId,
            recurringService: recurringServiceId,
            price: item.price,
          }
        })
    },
  },
  created() {
    this.loadItems()
  },
  methods: {
    async loadItems() {
      this.loading = true
      this.demands = await this.$axios.$get('/v1/demands', {
        params: {
          status: 'done',
          customer: this.customer._id,
          billable: true,
          with_points: true,
        },
      })

      this.demands.forEach((demand) => {
        this.form.items.push({
          demand,
          price: demand.price,
          checked: false,
        })
      })

      this.recurringServices = await this.$axios.$get(
        '/v1/recurring-services',
        {
          params: {
            customer: this.customer._id,
          },
        }
      )

      this.recurringServices.forEach((recurringService) => {
        this.form.items.push({
          recurringService,
          price: recurringService.price,
          checked: false,
        })
      })

      if (this.form.items.length === 1) {
        this.form.items[0].checked = true
      }
      this.loading = false
    },
    save() {
      const form = { ...this.form }
      form.items = this.selectedItems
      form.price = this.totalPrice
      this.loading = true
      this.$axios
        .$post('/v1/invoices', { ...form, customer: this.customer._id })
        .then((invoice) => {
          this.$notifier.success('Fatura gerada!')
          this.$emit('input', invoice)
        })

      this.loading = false
    },
    demandUpdated(demand) {
      const item = this.form.items.find(
        (item) => item.demand._id === demand._id
      )
      item.demand = demand
      item.price = demand.price
      this.previewDemand = demand
    },
    recurringServiceUpdated(recurringService) {
      const item = this.form.items.find(
        (item) => item.recurringService._id === recurringService._id
      )
      item.recurringService = recurringService
      item.price = recurringService.price
      this.previewRecurringService = recurringService
    },
    allChecked(type) {
      return this.form.items
        .filter((i) => i[type])
        .every((item) => item.checked)
    },
    toggleSelection(type) {
      let checked = true
      if (this.allChecked(type)) {
        checked = false
      }

      this.form.items
        .filter((i) => i[type])
        .forEach((item) => {
          item.checked = checked
        })
    },
    close() {
      this.$emit('close')
    },
  },
}
</script>
