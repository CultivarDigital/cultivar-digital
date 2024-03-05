<template>
  <div>
    <v-alert
      v-if="invalid && showErrorAlert"
      type="error"
      class="d-flex justify-center mt-6"
    >
      Você deve corrigir os erros acima antes de salvar
    </v-alert>
    <v-btn
      large
      class="mb-4 mt-4"
      type="submit"
      :color="color"
      :disabled="invalid || loading"
      :block="block"
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
    showErrorAlert: {
      type: Boolean,
      default: true,
    },
    color: {
      type: String,
      default: 'success',
    },
  },
}
</script>
