<template>
  <div>
    <EstimateValues v-if="demand.estimated" :item="demand" />
    <div
      v-if="!demand.estimated && demand.status === 'backlog'"
      class="caption secondary--text text--lighten-4 d-flex align-center"
    >
      <v-icon small color="error" class="mr-1">
        mdi-alert-circle-outline
      </v-icon>
      Aguardando estimativa
    </div>
  </div>
</template>
<script>
export default {
  props: {
    demand: {
      type: Object,
      required: true,
    },
  },
}
</script>
