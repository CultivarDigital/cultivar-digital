<template>
  <v-dialog :value="true" fullscreen persistent>
    <v-card>
      <DialogHeader @close="close" />
      <v-container class="pt-6">
        <ValidationObserver v-slot="{ validate, invalid }">
          <v-form @submit.prevent="validate().then(save)">
            <div>
              <validation-provider
                v-slot="{ errors }"
                name="Nome do serviço"
                rules="required"
              >
                <v-textarea
                  v-model="form.name"
                  rows="1"
                  auto-grow
                  label="Nome do serviço"
                  outlined
                  :error-messages="errors"
                  focusable
                />
              </validation-provider>
              <Editor v-model="form.description" editable />
              <validation-provider
                v-slot="{ errors }"
                name="Preço"
                rules="required"
              >
                <Money
                  v-model="form.point_price"
                  label="Preço do serviço"
                  :error-messages="errors"
                />
              </validation-provider>
              
              <div class="d-flex justify-space-between align-center">
                <Remove
                  v-if="
                    $auth.user.role === 'provider' && recurringService && !recurringService.paid
                  "
                  @confirm="remove"
                />
                <Save
                  :invalid="invalid"
                  label="Salvar serviço recorrente"
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
export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  props: {
    recurringService: {
      type: Object,
      default: () => null,
    },
  },
  data() {
    return {
      dialog: false,
      form: {
        name: '',
        description: null,
        price: null,
      },
    }
  },
  created() {
    if (this.recurringService) {
      Object.keys(this.form).forEach((key) => {
        if (this.recurringService[key] !== undefined && this.recurringService[key] !== null) {
          this.form[key] = this.recurringService[key]
        }
      })
    }
  },
  methods: {
    save() {
      const form = { ...this.form }
      if (this.recurringService) {
        this.$axios
          .$patch('/v1/recurring-services/' + this.recurringService._id, form)
          .then((recurringService) => {
            this.$notifier.success('Atualizado!')
            this.$emit('input', recurringService)
          })
      } else {
        this.$axios
          .$post('/v1/recurring-services', { ...form, customer: this.customer._id })
          .then((recurringService) => {
            this.$notifier.success('Salvo!')
            this.$emit('input', recurringService)
          })
      }
    },
    close() {
      this.$emit('close')
    },
    remove(recurringService) {
      this.$emit('remove', recurringService)
    },
  },
}
</script>
