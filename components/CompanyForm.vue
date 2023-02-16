<template>
  <v-dialog :value="true" fullscreen persistent>
    <v-card class="template-form">
      <DialogHeader @close="close" />
      <v-container class="pt-6">
        <ValidationObserver v-slot="{ validate, invalid }">
          <v-form @submit.prevent="validate().then(save)">
            <validation-provider
              v-slot="{ errors }"
              name="Nome da empresa"
              rules="required"
            >
              <v-text-field
                v-model="form.name"
                label="Nome da empresa"
                outlined
                :error-messages="errors"
              />
            </validation-provider>
            <v-text-field
              v-model="form.corporate_name"
              label="Razão social"
              outlined
            />
            <v-text-field
              v-model="form.cnpj"
              v-mask="['##.###.###/####-##']"
              label="CNPJ"
              outlined
            />
            <v-textarea
              v-model="form.address"
              rows="2"
              label="Endereço"
              outlined
            />
            <v-text-field
              v-model="form.phone"
              v-mask="['(##) ####-####', '(##) #####-####']"
              label="Telefone de contato"
              outlined
            />
            <v-text-field
              v-model="form.email"
              label="Email de contato"
              outlined
            />
            <v-textarea v-model="form.notes" label="Observações" outlined />
            <div v-if="$auth.user.role === 'admin'">
              <v-text-field
                v-model="form.points_per_day"
                label="Pontos por dia"
                outlined
              />
              <Money v-model="form.point_price" label="Preço do ponto" />
            </div>

            <v-btn
              v-if="customer"
              class="mb-6"
              small
              @click="() => copy(baseUrl + '/cadastrar?cliente=' + customer._id)"
            >
              <v-icon left small> mdi-content-copy </v-icon>
              Copiar link de cadastro
            </v-btn>
            <div class="text-right">
              <Save :invalid="invalid" :block="false" label="Salvar" />
            </div>
          </v-form>
        </ValidationObserver>
      </v-container>
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
  props: {
    customer: {
      type: Object,
      default: () => null,
    },
  },
  data() {
    return {
      form: {
        name: '',
        corporate_name: '',
        cnpj: '',
        address: '',
        phone: '',
        email: '',
        notes: '',
        point_price: 0,
        point_unit: 'hour',
        points_per_day: 0,
      },
    }
  },
  computed: {
    baseUrl() {
      return process.env.BASE_URL
    },
  },
  created() {
    if (this.customer) {
      Object.keys(this.form).forEach((key) => {
        if (this.customer[key]) {
          this.form[key] = this.customer[key]
        }
      })
    }
  },
  methods: {
    save() {
      const form = { ...this.form }
      if (this.customer) {
        this.$axios
          .$patch('/v1/customers/' + this.customer._id, form)
          .then((customer) => {
            this.$notifier.success('Atualizado!')
            this.$emit('input', customer)
          })
      } else {
        this.$axios.$post('/v1/customers', form).then((customer) => {
          this.$notifier.success('Salvo!')
          this.$emit('input', customer)
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
    async copy(value) {
      await navigator.clipboard.writeText(value)
      this.notify('Copiado!')
    },
    close() {
      this.$emit('close')
    },
  },
}
</script>
