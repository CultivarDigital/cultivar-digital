<template>
  <div>
    <v-btn
      v-if="$auth.user.role === 'admin'"
      fab
      fixed
      bottom
      right
      color="success"
      @click="addProposal = true"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-container>
      <div>
        <div v-if="proposals">
          <div v-if="!proposals.length">
            <Alert message="Nenhuma proposta aqui" />
          </div>
          <div v-if="proposals && proposals.length">
            <v-card
              v-for="proposal in proposals"
              :key="proposal._id"
              class="mb-3 pa-3"
              @click="openProposal(proposal)"
            >
              <div>
                <h4 class="mb-1">{{ proposal.title }}</h4>
                <div v-if="proposal.points > 0">
                  <div class="mb-1">
                    <div
                      v-if="proposal.startAt && proposal.deadline"
                      class="caption"
                    >
                      {{ $moment(proposal.startAt).format('DD/MM/YYYY') }} -
                      {{ $moment(proposal.deadline).format('DD/MM/YYYY') }}
                    </div>
                    <div v-else>
                      <small>
                        {{ $moment(proposal.createdAt).format('DD/MM/YYYY') }}
                      </small>
                    </div>
                  </div>
                  <div>
                    <EstimateValues :item="{ ...proposal, billable: true }" />
                  </div>
                </div>
                <div class="pt-3">
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
                  <div></div>
                </div>
              </div>
            </v-card>
          </div>
        </div>
        <Loading v-else />
      </div>
    </v-container>
    <ProposalForm
      v-if="addProposal"
      @input="
        proposalCreated
      "
      @close="addProposal = false"
    />
    <Proposal
      v-if="activeProposal"
      :proposal-id="activeProposal._id"
      @input="proposalUpdated"
      @close="closeProposal"
    />
  </div>
</template>
<script>
export default {
  layout: 'customer',
  data() {
    return {
      proposals: null,
      addProposal: false,
    }
  },
  computed: {
    customer() {
      return this.$store.state.customer
    },
    activeProposal() {
      if (this.$route.query.proposta && this.proposals) {
        return this.proposals.find((d) => d._id === this.$route.query.proposta)
      }
      return null
    },
  },
  watch: {
    customer() {
      this.loadProposals()
    },
  },
  async created() {
    if (this.customer) {
      await this.loadProposals()
    }
  },
  methods: {
    async loadProposals() {
      this.proposals = null
      this.proposals = await this.$axios.$get('/v1/proposals', {
        params: {
          customer: this.customer._id,
        },
      })
    },
    estimateInDays(points) {
      return Math.ceil(points / this.customer.points_per_day)
    },
    proposalCreated() {
      this.addProposal = false
      this.loadProposals()
      this.loadSummary()
    },
    proposalUpdated(proposal) {
      const index = this.proposals.findIndex((d) => d._id === proposal._id)
      this.proposals.splice(index, 1, proposal)
      this.loadSummary()
    },
    openProposal(proposal) {
      this.$router.push({
        query: {
          proposta: proposal._id,
        },
      })
    },
    closeProposal() {
      this.$router.push('/' + this.customer._id + '/propostas')
    },
    loadSummary() {
      this.$store.dispatch('loadCustomerSummary')
    },
  },
}
</script>
