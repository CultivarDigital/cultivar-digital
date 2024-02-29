<template>
  <v-container class="py-6" fluid>
    <div v-if="loading">
      <Loading />
    </div>
    <div v-else>
      <div v-if="createdCustomer" class="text-center">
        <v-icon class="mb-12"  color="success" size="120">mdi-check-circle</v-icon> 

        <h2 class="mb-6">
          Sua solicitação foi enviada com sucesso. 
        </h2>
        <p class="mb-3">
          Em breve nossa equipe entrará em contato com você.
        </p>
        <p class="mb-3">
          A partir de agora você terá um acesso a um painel exclusivo onde poderá acompanhar o andamento das suas demandas.
        </p>
        <div class="mb-6">
          <v-btn color="success" large target="_blank" :href="providerURL + '/' + createdCustomer._id + '/demandas'">
            Acompanhe suas demandas
          </v-btn>
        </div> 
      </div>
      <div v-else>
        <h4 class="mb-6">
          Certo! Agora informe os dados da sua empresa/negócio e os detalhes da
          sua solicitação
        </h4>
        <ValidationObserver v-slot="{ validate, invalid }">
          <v-form @submit.prevent="validate().then(save)">
            <validation-provider
              v-slot="{ errors }"
              name="Nome da empresa"
              rules="required"
            >
              <v-text-field
                v-model="form.name"
                label="Qual o nome da sua empresa/negócio?"
                outlined
                :error-messages="errors"
              />
            </validation-provider>
            <v-text-field
              v-model="form.cnpj"
              v-mask="['##.###.###/####-##']"
              label="CNPJ"
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
            <validation-provider
              v-slot="{ errors }"
              name="Nome da empresa"
              rules="required"
            >
              <v-textarea
                v-model="form.demand_details"
                :error-messages="errors"
                label="Como podemos te ajudar?"
                hint="Descreva com o máximo de detalhes a sua ideia/necessidade que nossa equipe ficará muito feliz em te ajudar."
                outlined
                persistent-hint
                auto-grow
              />
            </validation-provider>
            <div class="text-right">
              <Save :invalid="invalid" label="Enviar solicitação" />
            </div>
          </v-form>
        </ValidationObserver>
      </div>
    </div>
  </v-container>
</template>
<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  layout: 'public',
  data() {
    return {
      loading: false,
      createdCustomer: null,
      form: {
        name: '',
        cnpj: '',
        email: this.$auth.user.email || '',
        demand_details: '',
      },
    }
  },
  methods: {
    save() {
      const form = { ...this.form }
      this.$axios.$post('/v1/customers/register', form).then((c) => {
        this.createdCustomer = c
      })
    },
  },
}
</script>
