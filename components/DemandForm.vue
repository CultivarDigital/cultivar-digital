<template>
  <v-dialog :value="true" fullscreen>
    <v-card class="template-form">
      <v-toolbar color="primary" dark>
        <v-btn icon dark @click="close">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <span>{{ demand ? 'Editar demanda' : 'Adicionar demanda' }}</span>
      </v-toolbar>
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
                v-if="$auth.user.role === 'admin' && companies"
                v-slot="{ errors }"
                name="Cliente"
                rules="required"
              >
                <v-select
                  v-model="form.company"
                  label="Cliente"
                  :items="companies"
                  item-value="_id"
                  item-text="name"
                  outlined
                  :error-messages="errors"
                />
              </validation-provider>
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
                v-slot="{ errors }"
                name="Pontos"
                rules="required|min_value:0"
              >
                <v-text-field
                  v-if="$auth.user.role === 'admin'"
                  v-model="form.points"
                  label="Pontos"
                  type="number"
                  outlined
                  :error-messages="errors"
                />
              </validation-provider>

              <div class="text-right">
                <Save :invalid="invalid" :block="false" label="Salvar" />
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
    company: {
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
      companies: [],
      form: {
        title: '',
        company: null,
        body: null,
        points: null,
        price: null,
        type: null,
        priority: null,
        progress: 0,
        status: 'backlog',
        paid: false,
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
    if (this.company) {
      this.form.company = this.company._id
    }

    if (this.$auth.user.role === 'admin') {
      this.loadCompanies()
    }
  },
  methods: {
    async loadCompanies() {
      this.companies = await this.$axios.$get('/v1/companies')
    },
    save() {
      const form = { ...this.form }
      if (this.demand) {
        this.$axios
          .$patch('/v1/demands/' + this.demand._id, form)
          .then((demand) => {
            this.$notifier.success('Atualizado!')
            this.$emit('change', demand)
          })
      } else {
        this.$axios.$post('/v1/demands', form).then((demand) => {
          this.$notifier.success('Salvo!')
          this.$emit('change', demand)
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
    close() {
      this.$emit('close')
    },
  },
}
</script>
