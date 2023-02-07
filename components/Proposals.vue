<template>
  <div>
    <v-btn v-if="$auth.user.role === 'admin'" fab fixed bottom right color="success" @click="addProposal = true">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <div>
      <div>
        <div v-if="proposals">
          <div v-if="!proposals.length">
            <Alert message="Nenhuma proposta aqui" />
          </div>
          <v-list v-if="proposals && proposals.length">
            <template v-for="(proposal, index) in proposals">
              <v-list-item
                :key="proposal._id"
                @click="activeProposal = proposal"
              >
                <v-list-item-content>
                  <v-list-item-title>
                    {{ proposal.title }}
                  </v-list-item-title>
                  <v-list-item-subtitle v-if="proposal.points > 0">
                    <strong>
                      {{ proposal.price | moeda }}
                      <br />
                      {{ proposal.estimate_in_days }}
                      dias
                    </strong>
                    <br />
                    {{ $moment(proposal.createdAt).format('DD/MM/YYYY') }}
                  </v-list-item-subtitle>
                  <div class="pt-3">
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
                    <v-chip
                      v-if="proposal.status === 'pending'"
                      small
                      outlined
                      color="rgba(255, 255, 255, 0.6)"
                    >
                      <v-icon left small> mdi-clock </v-icon>
                      Aguardando aprovação
                    </v-chip>
                  </div>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon>
                    <v-icon>mdi-chevron-right</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
              <v-divider
                v-if="index < proposals.length - 1"
                :key="'divider' + proposal._id"
              />
            </template>
          </v-list>
        </div>
        <Loading v-else />
      </div>
    </div>
    <ProposalForm
      v-if="addProposal"
      :company="company"
      @change="
        loadProposals()
        addProposal = false
      "
      @close="addProposal = false"
    />
    <Proposal
      v-if="activeProposal"
      :proposal-id="activeProposal._id"
      @change="
        loadProposals()
        activeProposal = null
      "
      @close="activeProposal = null"
    />
  </div>
</template>
<script>
export default {
  props: {
    company: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      proposals: null,
      addProposal: false,
      activeProposal: null,
      editProposal: null,
      filters: {
        company: this.company ? this.company._id : null,
      },
    }
  },
  computed: {
    hasProposal() {
      return this.proposals.find((d) => this.showStatus.value === d.status)
    },
  },
  watch: {
    company() {
      this.filters.company = this.company ? this.company._id : null
      this.loadProposals()
    },
  },
  async created() {
    await this.loadProposals()
    if (this.$route.query.proposta) {
      this.activeProposal = this.proposals.find(
        (d) => d._id === this.$route.query.proposta
      )
    }
  },
  methods: {
    isActive(proposal) {
      return this.activeProposal === proposal._id
    },
    async loadProposals() {
      this.proposals = null
      this.proposals = await this.$axios.$get('/v1/proposals', {
        params: this.filters,
      })
      this.$emit('change')
    },
    async updateStatus(proposal, status) {
      await this.$axios.$patch(`/v1/proposals/${proposal._id}`, {
        status,
      })
      await this.loadProposals()
    },
    estimateInDays(points) {
      return Math.ceil(points / this.company.points_per_day)
    },
  },
}
</script>
