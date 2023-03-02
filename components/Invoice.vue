<template>
  <v-dialog :value="true" fullscreen persistent>
    <v-card>
      <DialogHeader @close="close" />
      <div>
        <div v-if="invoice">
          <v-container>
            <h2 class="mb-6">Fatura - {{ invoice.title }}</h2>
            <Alert
              v-if="invoice.canceled"
              message="Fatura cancelada"
              color="error"
            />
            <div class="d-flex justify-space-between align-start">
              <div>
                <p v-if="invoice.paidAt">
                  <small>
                    Fatura paga em
                    {{ $moment(invoice.paidAt).format('DD/MM/YYYY') }}
                  </small>
                </p>
              </div>
              <div class="mb-6">
                <v-chip
                  v-if="invoice.status === 'paid'"
                  outlined
                  small
                  color="success"
                >
                  <v-icon left small> mdi-check </v-icon>
                  Paga
                </v-chip>
                <v-chip
                  v-if="invoice.status === 'rejected'"
                  outlined
                  small
                  color="error"
                >
                  <v-icon left small> mdi-close-thick </v-icon>
                  Recusada
                </v-chip>
                <v-chip
                  v-if="invoice.status === 'canceled'"
                  outlined
                  small
                  color="error"
                >
                  <v-icon left small> mdi-cancel </v-icon>
                  Cancelada
                </v-chip>
                <v-chip v-if="invoice.status === 'pending'" small outlined>
                  <v-icon left small> mdi-cash-clock </v-icon>
                  {{invoice.payment_proof ? 'Aguardando confirmação do pagamento' : 'Aguardando pagamento'}}
                </v-chip>
              </div>
            </div>
            <div>
              <p class="mb-6">
                A fatura abaixo inclui as demandas já finalizadas e o parcial
                das demandas em execução.
              </p>
              <v-simple-table class="mb-6" light>
                <template #default>
                  <thead>
                    <tr>
                      <th class="text-left">Demanda/Serviço</th>
                      <th>Valor</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in invoice.items" :key="item._id">
                      <td>
                        <div v-if="item.demand">
                          <small>{{ item.demand.title }}</small>
                        </div>
                        <div v-if="item.recurringService">
                          <small>{{ item.recurringService.name }}</small>
                        </div>
                      </td>
                      <td>
                        <small>{{ item.price | moeda }}</small>
                      </td>
                      <td>
                        <v-btn x-small icon @click="preview(item)">
                          <v-icon>mdi-eye</v-icon>
                        </v-btn>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </div>
            <div class="py-6 text-center">
              <div class="mb-6">
                <div class="caption">VALOR TOTAL DA FATURA:</div>
                <h1>{{ invoice.price | moeda }}</h1>
              </div>
            </div>
            <v-divider class="mb-6" />
            <div class="mb-16">
              <div class="mb-3 text-center">
                <h3 class="mb-3">PAGAR COM PIX</h3>
                <p>
                  <img
                    :src="require('~/assets/img/pix.jpg')"
                    class="Pagar com Pix QRCode"
                    style="max-width: 100%"
                  />
                </p>
                <v-btn
                  class="mb-12"
                  small
                  @click="() => copy('74b0f085-60a7-489a-93a5-cb613f7e3b7e')"
                >
                  <v-icon left small> mdi-content-copy </v-icon>
                  Copiar chave aleatória
                </v-btn>
              </div>
              <h3 class="mb-6 text-center">PAGAR POR TRANSFERÊNCIA</h3>
              <p>Instituição: <strong>403 - Cora SCD</strong></p>
              <p>Agência: <strong>0001</strong></p>
              <p>Conta: <strong>2977306 - 9</strong></p>
              <p>Nome da Empresa: <strong>Cultivar Digital</strong></p>
            </div>
            <div v-if="invoice.payment_proof" class="text-center mb-6">
              <h3 class="mb-3 text-left text-center">
                COMPROVANTE DE PAGAMENTO
              </h3>
              <img
                :src="
                  filesURL +
                  invoice.payment_proof.replace('/images', '/averages')
                "
                style="max-width: 100%"
              />
              <div
                v-if="
                  invoice.payment_proof_sent_by && invoice.paymentProofSentAt
                "
              >
                <small>
                  Comprovante enviado por
                  <strong>{{ invoice.payment_proof_sent_by.name }}</strong>
                  em
                  <strong>{{
                    $moment(invoice.paymentProofSentAt).format('DD/MM/YYYY')
                  }}</strong>
                </small>
              </div>
            </div>
            <div class="mb-6">
              <div
                v-if="invoice.status === 'paid' && invoice.paid_by"
                class="text-center mb-10 pt-6"
              >
                <v-icon x-large color="success">mdi-check</v-icon>
                <br />
                <small>
                  <strong>Pagamento confirmado por</strong>
                  <br />
                  {{ invoice.paid_by.name }}
                </small>
              </div>
              <div
                v-if="invoice.status === 'rejected' && invoice.rejected_by"
                class="text-center mb-10"
              >
                <v-icon x-large>mdi-close-thick</v-icon>
                <br />
                <small>
                  <strong>Recusada por:</strong>
                  <br />
                  {{ invoice.rejected_by.name }}
                </small>
              </div>
              <div
                v-if="invoice.status === 'canceled' && invoice.canceled_by"
                class="text-center mb-10"
              >
                <v-icon x-large>mdi-cancel</v-icon>
                <br />
                <small>
                  <strong>Cancelada por:</strong>
                  <br />
                  {{ invoice.canceled_by.name }}
                </small>
              </div>
            </div>
            <Alert
              v-if="invoice.status === 'canceled'"
              message="Fatura cancelada"
              color="error"
            />
            <Alert
              v-if="invoice.status === 'rejected'"
              message="Fatura rejeitada"
              color="error"
            />

            <div v-if="invoice.status === 'pending'" class="text-center">
              <div class="mb-6">
                <UploadImage
                  prefix="invoices/payment-proofs"
                  button
                  :label="
                    (invoice.payment_proof ? 'Reenviar comprovante' : 'Enviar comprovante de pagamento') 
                  "
                  class="mb-6"
                  color="success"
                  icon="mdi-upload"
                  @input="markAsPaid"
                />
              </div>
              <div class="mb-6">
                <v-btn
                  v-if="$auth.user.role === 'provider'"
                  color="success"
                  @click="() => markAsPaid()"
                >
                  <v-icon left>mdi-check</v-icon>
                  Marcar como paga
                </v-btn>
              </div>
              <v-btn
                v-if="$auth.user.role === 'customer' && !invoice.payment_proof"
                small
                color="error"
                class="mb-6"
                @click="reject"
              >
                <v-icon left> mdi-close-thick </v-icon>
                Rejeitar esta fatura
              </v-btn>
              <v-btn
                v-if="$auth.user.role === 'provider'"
                small
                class="mb-6"
                @click="cancel"
              >
                <v-icon left> mdi-close </v-icon>
                Cancelar esta fatura
              </v-btn>
            </div>
            <div class="text-center pt-10 mb-10">
              <div>
                <img :src="require('~/assets/img/logo.png')" class="logo" />
                <br />
                <strong>Cultivar Digital</strong>
              </div>
              <div><small>Diego M. Rodrigues</small></div>
            </div>
            <div class="text-center pt-6">
              <v-btn
                class="mb-6"
                small
                @click="
                  () =>
                    copy(
                      baseURL +
                        '/' +
                        invoice.customer._id +
                        '/faturas?fatura=' +
                        invoice._id
                    )
                "
              >
                <v-icon left small> mdi-content-copy </v-icon>
                Copiar link
              </v-btn>
            </div>
          </v-container>
        </div>
        <div v-else class="pt-6">
          <Loading />
        </div>
      </div>
      <Demand
        v-if="previewDemand"
        :demand="previewDemand"
        preview
        @close="previewDemand = null"
      />
      <RecurringService
        v-if="previewRecurringService"
        :recurring-service="previewRecurringService"
        preview
        @close="previewRecurringService = null"
      />
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    invoiceId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      dialog: false,
      invoice: null,
      previewDemand: null,
      previewRecurringService: null,
    }
  },
  created() {
    this.loadInvoice()
  },
  methods: {
    async loadInvoice() {
      this.invoice = null
      this.invoice = await this.$axios.$get(
        '/v1/invoices/' + this.invoiceId + '/info'
      )
    },
    async markAsPaid(paymentProof) {
      const body = paymentProof ? { payment_proof: paymentProof } : {}

      const invoice = await this.$axios.$patch(
        '/v1/invoices/' + this.invoiceId + '/mark-as-paid',
        body
      )
      this.loadInvoice()
      this.$emit('input', invoice)
    },
    async reject() {
      const invoice = await this.$axios.$patch(
        '/v1/invoices/' + this.invoiceId + '/reject'
      )
      this.loadInvoice()
      this.$emit('input', invoice)
    },
    async cancel() {
      const invoice = await this.$axios.$patch(
        '/v1/invoices/' + this.invoiceId + '/cancel'
      )
      this.loadInvoice()
      this.$emit('input', invoice)
    },
    close() {
      this.$emit('close')
    },
    async copy(value) {
      await navigator.clipboard.writeText(value)
      this.notify('Copiado!')
    },
    preview(item) {
      console.log('item');
      console.log(item);
      if (item.demand) {
        this.previewDemand = item.demand
      } else if (item.recurringService) {
        this.previewRecurringService = item.recurringService
      }
    },
  },
}
</script>
