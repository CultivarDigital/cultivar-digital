<template>
  <div v-if="item.estimate_in_days > 0">
    <div v-if="item.billable && item.price && showPrice">
      {{ item.price | moeda }} ({{ $utils.plural(item.estimate_in_days, 'dia') }})
    </div>
    <div v-else>
      {{ $utils.plural(item.estimate_in_days, 'dia') }}
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
    showPrice: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
