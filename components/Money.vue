<template>
  <v-text-field
    v-model="v"
    v-money="{ decimal: ',', thousands: '.', precision: 2 }"
    :label="label"
    outlined
    @input="updateValue"
  />
</template>
<script>
export default {
  props: {
    value: {
      type: Number,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      v: this.value || 0,
    }
  },
  methods: {
    updateValue() {
      if (!this.v) {
        this.$emit('input', 0)
        return
      }
      const v = Number(
        this.v.replace('R$ ', '').replace(/\./g, '').replace(',', '.')
      )

      this.$emit('input', v)
    },
  },
}
</script>
