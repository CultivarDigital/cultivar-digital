<template>
  <div>
    <span v-if="item.estimate_in_days > 0" class="caption text--secondary">
      <span v-if="item.billable">
        {{ item.price | moeda }} ({{
          $utils.plural(item.estimate_in_days, 'dia')
        }})
      </span>
      <span v-else>
        {{ $utils.plural(item.estimate_in_days, 'dia') }}
      </span>
    </span>
    <span v-else class="caption text--disabled">Não será estimada</span>
    <v-btn v-if="showEditButton" icon small @click="$emit('edit')">
      <v-icon small>mdi-pencil</v-icon>
    </v-btn>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default: null,
    },
    showEditButton: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
