<template>
  <div class="text-center" @click="$emit('click')">
    <v-alert :color="color">{{ message }}</v-alert>
  </div>
</template>
<script>
export default {
  props: {
    color: {
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
