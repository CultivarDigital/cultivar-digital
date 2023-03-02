<template>
  <div>
    <v-btn
      v-if="$auth.user.role === 'provider'"
      fab
      fixed
      bottom
      right
      color="success"
      @click="addInvoice = true"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-container>
      <div>
        <div v-if="invoices">
          <div v-if="!invoices.length">
            <Alert message="Nenhuma fatura aqui" />
          </div>
          <div v-if="invoices && invoices.length">
            <v-card
              v-for="invoice in invoices"
              :key="invoice._id"
              class="mb-3 pa-3"
              elevation="0"
              :to="'/' + customer._id + '/faturas?fatura=' + invoice._id"
            >
              <div>
                <h4 class="mb-1">{{ invoice.title }}</h4>
                <div v-if="invoice.points > 0">
                  <div class="mb-1">
                    <div
                      v-if="invoice.paidAt"
                      class="caption"
                    >
                      {{ $moment(invoice.paidAt).format('DD/MM/YYYY') }} -
                      
                    </div>
                    <div v-else>
                      <small>
                        {{ $moment(invoice.createdAt).format('DD/MM/YYYY') }}
                      </small>
                    </div>
                  </div>
                  <div>
                    <EstimateValues :item="{ ...invoice, billable: true }" />
                  </div>
                </div>
                <div class="pt-3">
                  <div>
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
                    <v-chip v-if="invoice.status === 'pending' && invoice.payment_proof" small outlined color="success" class="mb-3">
                      <v-icon left small> mdi-ticket </v-icon>
                      Comprovante enviado!
                    </v-chip>
                    <v-chip v-if="invoice.status === 'pending'" small outlined>
                      <v-icon left small> mdi-cash-clock </v-icon>
                      {{invoice.payment_proof ? 'Aguardando confirmação do pagamento' : 'Aguardando pagamento'}}
                    </v-chip>
                  </div>
                  <div></div>
                </div>
              </div>
            </v-card>
          </div>
        </div>
        <Loading v-else />
      </div>
    </v-container>
    <InvoiceForm
      v-if="addInvoice"
      @input="invoiceCreated"
      @close="addInvoice = false"
    />
    <Invoice
      v-if="activeInvoice"
      :invoice-id="activeInvoice._id"
      @input="invoiceUpdated"
      @close="closeInvoice"
    />
  </div>
</template>
<script>
export default {
  layout: 'customer',
  data() {
    return {
      invoices: null,
      addInvoice: false,
    }
  },
  computed: {
    activeInvoice() {
      if (this.$route.query.fatura && this.invoices) {
        return this.invoices.find((d) => d._id === this.$route.query.fatura)
      }
      return null
    },
  },
  watch: {
    customer() {
      this.loadInvoices()
    },
  },
  async created() {
    if (this.customer) {
      await this.loadInvoices()
    }
  },
  methods: {
    async loadInvoices() {
      this.invoices = null
      this.invoices = await this.$axios.$get('/v1/invoices', {
        params: {
          customer: this.customer._id,
        },
      })
    },
    estimateInDays(points) {
      return Math.ceil(points / this.customer.points_per_day)
    },
    invoiceCreated() {
      this.addInvoice = false
      this.loadInvoices()
      this.loadSummary()
    },
    invoiceUpdated(invoice) {
      const index = this.invoices.findIndex((d) => d._id === invoice._id)
      this.invoices.splice(index, 1, invoice)
      this.loadSummary()
    },

    closeInvoice() {
      this.$router.push('/' + this.customer._id + '/faturas')
    },
    loadSummary() {
      this.$store.dispatch('loadCustomerSummary')
    },
  },
}
</script>
