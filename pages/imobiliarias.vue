<template>
  <v-container>
    <div class="text-center mt-16">
      <img
        :src="require('~/assets/img/imobiliarias/logo.svg')"
        style="max-width: 100%"
        class="mb-6"
      />
    </div>
    <p class="my-12">
      Facilitando a gestão e a comunicação para imobiliárias e corretores de
      imóveis, nossa plataforma oferece uma solução completa e integrada para
      otimizar seus negócios e proporcionar uma experiência excepcional para
      seus clientes.
    </p>
    <div class="primary white--text py-6 px-3 rounded mb-6">
      <p class="text-center">
        <strong
          >Por que escolher o Atendimento Simples para Imobiliárias?</strong
        >
      </p>
      <ul>
        <li>Crie um site profissional para sua imobiliária em minutos.</li>
        <li>Gerencie suas listagens de imóveis de forma eficiente.</li>
        <li>
          Comunique-se facilmente com seus clientes através de WhatsApp e
          e-mail.
        </li>
        <li>
          Tome decisões informadas com relatórios detalhados e análises de
          desempenho.
        </li>
        <li>
          Personalize sua experiência com inteligência artificial para geração
          de conteúdo.
        </li>
        <li>
          Automatize processos para economizar tempo e aumentar a produtividade.
        </li>
      </ul>
    </div>
    <div class="my-12">
      Escolha o plano que atenda às suas necessidades e comece a simplificar e
      aprofundar sua experiência em gestão imobiliária hoje mesmo! Se tiver
      dúvidas ou precisar de assistência, entre em contato conosco através do
      nosso suporte dedicado.
    </div>

    <v-row>
      <v-col md="4">
        <v-card color="pa-6 mb-6">
          <h2 class="primary--text">Plano Básico</h2>
          <p class="text--secondary" style="font-size: 14px">
            Ideal para quem está começando
          </p>
          <ul style="font-size: 12px" class="mb-3">
            <li>Criação de Site Simples</li>
            <li>Gestão de até 50 Imóveis</li>
            <li>Integração com WhatsApp e E-mail</li>
            <li>Relatórios Básicos</li>
            <li>Suporte por E-mail</li>
          </ul>
          <div class="text-center">
            <p><strong>Preço: R$ 399/mês</strong></p>
            <v-btn small color="secondary" @click="openPlan('Básico')"
              >Assinar Plano Básico</v-btn
            >
          </div>
        </v-card>
      </v-col>
      <v-col md="4">
        <v-card color="pa-6 mb-6">
          <h2 class="primary--text">Plano Premium</h2>
          <p class="text--secondary" style="font-size: 14px">
            Para quem busca mais recursos e personalização
          </p>
          <ul style="font-size: 12px" class="mb-3">
            <li>Criação de Site Personalizado</li>
            <li>Gestão de até 200 Imóveis</li>
            <li>Integração Avançada com WhatsApp e E-mail</li>
            <li>Relatórios Avançados e Análises de Desempenho</li>
            <li>Suporte por E-mail e Chat ao Vivo</li>
          </ul>
          <div class="text-center">
            <p><strong>Preço: R$ 699/mês</strong></p>
            <v-btn small color="secondary" @click="openPlan('Premium')"
              >Assinar Plano Premium</v-btn
            >
          </div>
        </v-card>
      </v-col>
      <v-col md="4">
        <v-card color="pa-6 mb-6">
          <h2 class="primary--text">Plano Profissional</h2>
          <p class="text--secondary" style="font-size: 14px">
            Para imobiliárias e corretores experientes
          </p>
          <ul style="font-size: 12px" class="mb-3">
            <li>Criação de Site Personalizado com Domínio Próprio</li>
            <li>Gestão de Imóveis Ilimitada</li>
            <li>Integração Premium com WhatsApp, E-mail e CRM</li>
            <li>Relatórios Personalizados e Análises Estratégicas</li>
            <li>Suporte Prioritário por E-mail, Chat ao Vivo e Telefone</li>
          </ul>
          <div class="text-center">
            <p><strong>Preço: R$ 999/mês</strong></p>
            <v-btn small color="secondary" @click="openPlan('Profissional')"
              >Assinar Plano Profissional</v-btn
            >
          </div>
        </v-card>
      </v-col>
    </v-row>

    <div class="text-center mb-16 pt-10">
      <p class="mb-6">
        Estamos aqui para ajudar você a alcançar o sucesso em seus negócios
        imobiliários!
      </p>
      <div>
        <WhatsAppButton />
      </div>
    </div>
    <v-dialog
      v-if="plan"
      fullscreen
      :value="true"
      max-width="600"
      persistent
      @hide="closePlan"
    >
      <v-card>
        <div>
          <v-container>
            <div class="text-right">
              <v-btn icon @click="closePlan">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </div>
            <div class="pa-3">
              <div class="pt-12 text-center mb-10">
                <img
                  :src="require('~/assets/img/imobiliarias/logo.svg')"
                  style="max-width: 100%"
                  class="mb-12"
                />
                <h3 class="primary--text">SOLICITE UMA DEMONSTRAÇÃO</h3>
                <p>Plano {{ plan }}</p>
              </div>

              <div v-if="!createdProvider">
                <ValidationObserver v-slot="{ validate, invalid }">
                <v-form @submit.prevent="validate().then(save)">
                  <v-text-field
                    v-model="form.cnpj"
                    v-mask="['##.###.###/####-##']"
                    label="Informe seu CNPJ"
                    placeholder="00.000.000/0000-00"
                    class="text-center"
                    required
                    @input="loadDataFromCNPJ"
                  />
                  <div v-if="loadingDataFromCNPJ" class="text-center">
                    <v-progress-circular
                      indeterminate
                      color="primary"
                    ></v-progress-circular>
                  </div>
                  <div v-if="cnpjIsValid">
                    <validation-provider
                      v-slot="{ errors }"
                      name="Nome da empresa"
                      rules="required"
                    >
                      <v-text-field
                        v-model="form.name"
                        label="Nome da empresa"
                        :error-messages="errors"
                      />
                    </validation-provider>
                    <validation-provider
                      v-slot="{ errors }"
                      name="Razão social"
                      rules="required"
                    >
                      <v-text-field
                        v-model="form.corporate_name"
                        label="Razão Social"
                        :error-messages="errors"
                      />
                    </validation-provider>
                    <validation-provider
                      v-slot="{ errors }"
                      name="Endereço"
                      rules="required"
                    >
                      <v-text-field
                        v-model="form.address"
                        label="Endereço"
                        :error-messages="errors"
                      />
                    </validation-provider>
                    <validation-provider
                      v-slot="{ errors }"
                      name="E-mail de contato"
                      rules="required"
                    >
                      <v-text-field
                        v-model="form.email"
                        label="E-mail de contato"
                        :error-messages="errors"
                      />
                    </validation-provider>
                    <validation-provider
                      v-slot="{ errors }"
                      name="WhatsApp"
                      rules="required|min:15"
                    >
                      <v-text-field
                        v-model="form.phone"
                        v-mask="['(##) #####-####']"
                        label="WhatsApp"
                        :error-messages="errors"
                        hint="Será o telefone usado para acessar o sistema"
                      />
                    </validation-provider>
                    <div v-if="form.phone">
                      <validation-provider
                        v-slot="{ errors }"
                        name="senha"
                        rules="required|min:4"
                        vid="senha"
                      >
                        <v-text-field
                          v-model="form.password"
                          :type="showPassword ? 'text' : 'password'"
                          label="Vamos criar uma senha pra você?"
                          :error-messages="errors"
                        >
                          <v-icon
                            slot="append"
                            tabindex="-1"
                            @click="showPassword = !showPassword"
                          >
                            mdi-eye
                          </v-icon>
                        </v-text-field>
                      </validation-provider>
                      <validation-provider
                        v-slot="{ errors }"
                        name="confirmação da senha"
                        rules="required|confirmed:senha"
                      >
                        <v-text-field
                          v-model="form.password_confirmation"
                          :type="showPassword ? 'text' : 'password'"
                          label="Confirme sua senha"
                          :error-messages="errors"
                        >
                          <v-icon
                            slot="append"
                            tabindex="-1"
                            @click="showPassword = !showPassword"
                          >
                            mdi-eye
                          </v-icon>
                        </v-text-field>
                      </validation-provider>
                    </div>
                  </div>
                  <div class="text-center">
                    <Save
                      v-if="cnpjIsValid"
                      :invalid="invalid"
                      label="Continuar"
                      color="primary"
                      :loading="savingProvider"
                    />
                    <br />
                    <v-btn color="secondary" text @click="closePlan">
                      Cancelar
                    </v-btn>
                  </div>
                </v-form>
              </ValidationObserver>  
              </div>
              <div v-if="createdProvider">
                <div class="text-center">
                  <div>
                    <v-icon
                      size="100"
                      color="primary"
                      class="mb-6"
                      >mdi-check-circle</v-icon
                    >
                  </div>
                  <h1 class="primary--text mb-6">Parabéns!</h1>
                  <h3 class="primary--text mb-6">Seu cadastro foi realizado com sucesso!</h3>
                  <p>
                    Agora você já tem um site e um sistema de gestão completo para simplificar e otimizar as rotinas de atendimento e gestão dos seus imóveis.
                  </p>
                  <p>
                    Por enquanto o endereço do seu site é: <a :href="createdProviderURL" target="_blank">{{ createdProviderURL }}</a>
                  </p>
                  <p>
                    Acesse o seu painel administrativo e pode começar a personalizar o seu site e a cadastrar os seus imóveis.
                  </p>
                  <v-btn color="primary" :href="createdProviderURL + '/atendimento'" block>Acessar o meu painel</v-btn>
                </div>
              </div>
            </div>
          </v-container>
        </div>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
export default {
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  layout: 'main',
  data() {
    return {
      loadingDataFromCNPJ: false,
      savingProvider: false,
      showPassword: false,
      createdProvider: null,
      form: {
        cnpj: '',
        name: '',
        corporate_name: '',
        address: '',
        phone: '',
        email: '',
        password: '',
        password_confirmation: '',
        theme: 'light',
        primary_color: '#00335a',
        type: 'Imobiliária',
        company_info: null,
      },
    }
  },
  computed: {
    plan() {
      return this.$route.query.plan
    },
    cnpjIsValid() {
      return this.form.cnpj.length === 18
    },
    passwordIsValid() {
      return (
        this.form.password.length &&
        this.form.password_confirmation.length &&
        this.form.password === this.form.password_confirmation
      )
    },
    createdProviderURL() {
      if (this.createdProvider) {
        return 'https://' + this.createdProvider.slug + '.' + this.baseDomain
      }
      return ''
    },
  },
  methods: {
    async loadDataFromCNPJ() {
      if (this.cnpjIsValid) {
        try {
          this.loadingDataFromCNPJ = true
          const data = await this.$axios
            .$get(`/v1/utils/cnpj/${this.form.cnpj.replace(/\D/g, '')}`)
            .catch((error) => {
              this.notify('Não foi possível carregar os dados do CNPJ', 'error')
              console.log(error)
            })

          if (data) {
            if (data && data.status === 'ERROR') {
              throw new Error(data.message)
            }

            this.form.company_info = data

            this.form.name = data.fantasia
            this.form.corporate_name = data.nome
            this.form.phone = data.telefone ? data.telefone.split(' / ')[0] : ''
            this.form.email = data.email
            this.form.address = `${[
              data.logradouro,
              data.numero,
              data.complemento,
              data.bairro,
              [data.municipio, data.uf].filter(Boolean).join(' - '),
              data.cep,
            ]
              .filter(Boolean)
              .join(', ')}`
          }
        } catch (error) {
          console.log(error)
        }
        this.loadingDataFromCNPJ = false
      }
    },
    async save() {
      this.savingProvider = true
      try {
        const provider = await this.$axios.$post(
          '/v1/providers/public/register',
          { ...this.form, plan: this.plan }
        )
       
        this.createdProvider = provider
      } catch (error) {
        const message = error.response.data.message
        console.log(message)
        if (message.includes('E11000')) {
          if (message.includes('slug:')) {
            this.notify('Este nome já está cadastrado', 'error')
          } else if (message.includes('cnpj:')) {
            this.notify('Este CNPJ já está cadastrado', 'error')
          }
        } else {
          console.error(error)
          this.notify('Erro ao salvar', 'error')
        }
      }
      this.savingProvider = false
    },
    openPlan(plan) {
      this.$router.push({ query: { plan } })
    },
    closePlan() {
      this.$router.push({ query: {} })
    },
  },
}
</script>
