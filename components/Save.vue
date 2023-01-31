<template>
  <div>
    <v-alert v-if="invalid" type="error" class="d-flex justify-center">
      Você deve corrigir os erros acima antes de salvar
    </v-alert>
    <v-btn
      x-large
      class="mb-4 mt-4 font-weight-bold text-none"
      type="submit"
      color="primary"
      :disabled="invalid || loading"
      :block="block"
      rounded
    >
      <v-progress-circular
        v-if="loading"
        color="secondary"
        indeterminate
        size="20"
      />
      <span v-else>{{ label }}</span>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    invalid: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: true,
    },
    label: {
      type: String,
      default: 'Salvar',
    },
  },
}
</script>
