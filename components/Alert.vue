<template>
  <div class="text-center">
    <v-alert>{{ message }}</v-alert>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'secondary',
    },
    message: {
      type: String,
      default: null,
    },
  },
}
</script>
