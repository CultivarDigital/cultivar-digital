<template>
  <v-dialog :value="true" fullscreen persistent>
    <v-card>
      <DialogHeader @close="close" />
      <div>
        <div v-if="proposal">
          <v-container>
            <h2 class="mb-6">Proposta de orçamento</h2>
            <Alert
              v-if="proposal.canceled"
              message="Proposta cancelada"
              color="error"
            />
            <div class="d-flex justify-space-between align-start">
              <div>
                <h3>
                  {{ proposal.title }}
                </h3>
                <p v-if="proposal.startAt && proposal.deadline">
                  <small>
                    {{ $moment(proposal.startAt).format('DD/MM/YYYY') }} -
                    {{ $moment(proposal.deadline).format('DD/MM/YYYY') }}
                  </small>
                </p>
                <p v-else>
                  <small>
                    {{ $moment(proposal.createdAt).format('DD/MM/YYYY') }}
                  </small>
                </p>
              </div>
              <div>
                <v-chip
                  v-if="proposal.status === 'approved'"
                  outlined
                  small
                  color="success"
                >
                  <v-icon left small> mdi-check </v-icon>
                  Aprovada
                </v-chip>
                <v-chip
                  v-if="proposal.status === 'rejected'"
                  outlined
                  small
                  color="error"
                >
                  <v-icon left small> mdi-close-thick </v-icon>
                  Rejeitada
                </v-chip>
                <v-chip
                  v-if="proposal.status === 'canceled'"
                  outlined
                  small
                  color="error"
                >
                  <v-icon left small> mdi-cancel </v-icon>
                  Cancelada
                </v-chip>
                <v-chip v-if="proposal.status === 'pending'" small outlined>
                  <v-icon left small> mdi-clock </v-icon>
                  Aguardando aprovação
                </v-chip>
              </div>
            </div>
            <p>
              A proposta abaixo foi personalizada por meio de um levantamento de
              requisitos e análise prévia para a execução das demandas
              solicitadas.
            </p>
            <p>
              Selecione abaixo os itens da proposta que deseja aprovar e clique
              em aprovar proposta para continuar
            </p>
          </v-container>
          <v-simple-table class="mb-6 rounded-0" light>
            <template #default>
              <thead>
                <tr>
                  <th class="text-left">Demanda</th>
                  <th>Estimativa</th>
                  <th>Valor</th>
                  <th> <span v-if="proposal.status === 'pending'">Aprovar</span></th>
                </tr>
              </thead>
              <tbody>
                <template v-for="item in proposal.items">
                  <tr  v-if="proposal.status != 'approved' || item.approved" :key="item._id">
                    <td @click="previewDemand = item.demand">
                      <small>{{ item.demand.title }}</small>
                    </td>
                    <td @click="previewDemand = item.demand">
                      <small>{{
                        $utils.plural(item.estimate_in_days, 'dia')
                      }}</small>
                    </td>
                    <td @click="previewDemand = item.demand">
                      <small>{{ item.price | moeda }}</small>
                    </td>
                    <td class="text-right">
                      <v-checkbox
                        v-if="proposal.status === 'pending'"
                        v-model="item.approved"
                        color="success"
                        hide-details
                        class="mt-0"
                      />
                      <v-btn
                        v-else
                        x-small
                        icon
                        @click="previewDemand = item.demand"
                      >
                        <v-icon>mdi-eye</v-icon>
                      </v-btn>
                    </td>
                  </tr>
                </template>
              </tbody>
              <tfoot>
                <tr>
                  <th><strong>Total</strong></th>
                  <th>
                    <strong>{{
                      $utils.plural(proposalValues.estimate_in_days, 'dia')
                    }}</strong>
                  </th>
                  <th>
                    <strong>{{ proposalValues.price | moeda }}</strong>
                  </th>
                  <th></th>
                </tr>
              </tfoot>
            </template>
          </v-simple-table>
          <v-container>
            <div class="mb-6">
              <h5 class="mb-3">OBSERVAÇÕES:</h5>
              <ul class="mb-10">
                <li>
                  <small>
                    Os prazos e valores acima foram estimados baseados em
                    levantamento de requisitos e análise prévia das
                    funcionalidades, portanto, esta proposta tem caráter de
                    escopo fechado e qualquer mudança de escopo invalida esta
                    proposta.
                  </small>
                </li>
              </ul>
              <div
                v-if="proposal.status === 'approved' && proposal.approved_by"
                class="text-center mb-10"
              >
                <v-icon x-large>mdi-check</v-icon>
                <br />
                <small>
                  <strong>Aprovada por:</strong>
                  <br />
                  {{ proposal.approved_by.name }}
                </small>
              </div>
              <div
                v-if="proposal.status === 'rejected' && proposal.rejected_by"
                class="text-center mb-10"
              >
                <v-icon x-large>mdi-close-thick</v-icon>
                <br />
                <small>
                  <strong>Rejeitada por:</strong>
                  <br />
                  {{ proposal.rejected_by.name }}
                </small>
              </div>
              <div
                v-if="proposal.status === 'canceled' && proposal.canceled_by"
                class="text-center mb-10"
              >
                <v-icon x-large>mdi-cancel</v-icon>
                <br />
                <small>
                  <strong>Cancelada por:</strong>
                  <br />
                  {{ proposal.canceled_by.name }}
                </small>
              </div>
            </div>
            <Alert
              v-if="proposal.status === 'canceled'"
              message="Proposta cancelada"
              color="error"
            />
            <Alert
              v-if="proposal.status === 'rejected'"
              message="Proposta rejeitada"
              color="error"
            />
            <div v-if="proposal.status === 'pending'" class="text-center">
              <div class="mb-6">
                <ProposalApprove :proposal="proposal" @confirm="approve" />
              </div>
              <v-btn
                v-if="$auth.user.role === 'customer'"
                small
                color="error"
                class="mb-6"
                @click="reject"
              >
                <v-icon left> mdi-close-thick </v-icon>
                Rejeitar esta proposta
              </v-btn>
              <v-btn
                v-if="$auth.user.role === 'provider'"
                small
                class="mb-6"
                @click="cancel"
              >
                <v-icon left> mdi-close </v-icon>
                Cancelar esta proposta
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
                      providerURL +
                        '/' +
                        proposal.customer._id +
                        '/propostas?proposta=' +
                        proposal._id
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
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    proposalId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      dialog: false,
      proposal: null,
      previewDemand: null,
    }
  },
  computed: {
    proposalValues() {
      if (this.proposal.status !== 'pending') {
        return {
          price: this.proposal.price,
          estimate_in_days: this.proposal.estimate_in_days,
        }
      }

      let price = 0
      let estimateInDays = 0
      this.proposal.items
        .filter((item) => item.approved)
        .forEach((item) => {
          price += item.price
          estimateInDays += item.estimate_in_days
        })

      return {
        price,
        estimate_in_days: estimateInDays,
      }
    },
  },
  async created() {
    await this.loadProposal()

    if (this.proposal.status === 'pending') {
      this.proposal.items.forEach((item) => {
        item.approved = true
      })
    }
  },
  methods: {
    async loadProposal() {
      this.proposal = null
      this.proposal = await this.$axios.$get(
        '/v1/proposals/' + this.proposalId + '/info'
      )
    },
    async approve() {
      const proposal = await this.$axios.$patch(
        '/v1/proposals/' + this.proposalId + '/approve',
        {
          approved_demands: this.proposal.items
            .filter((item) => item.approved)
            .map((item) => item.demand._id),
        }
      )
      this.loadProposal()
      this.$emit('input', proposal)
    },
    async reject() {
      const proposal = await this.$axios.$patch(
        '/v1/proposals/' + this.proposalId + '/reject'
      )
      this.loadProposal()
      this.$emit('input', proposal)
    },
    async cancel() {
      const proposal = await this.$axios.$patch(
        '/v1/proposals/' + this.proposalId + '/cancel'
      )
      this.loadProposal()
      this.$emit('input', proposal)
    },
    close() {
      this.$emit('close')
    },
    async copy(value) {
      await navigator.clipboard.writeText(value)
      this.notify('Copiado!')
    },
  },
}
</script>
