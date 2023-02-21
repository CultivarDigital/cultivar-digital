<template>
  <div>
    <div
      v-if="item.estimate_in_days > 0"
      class="caption secondary--text text--lighten-4"
    >
      <div v-if="item.billable">
        {{ item.price | moeda }} ({{
          $utils.plural(item.estimate_in_days, 'dia')
        }})
      </div>
      <div v-else>
        {{ $utils.plural(item.estimate_in_days, 'dia') }}
      </div>
    </div>
    <div v-else class="caption secondary--text text--lighten-4 opaque">
      Não será estimada
    </div>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
}
</script>
