<template>
  <v-btn
    :color="color"
    :href="'https://api.whatsapp.com/send?phone=55' + phone"
    target="_blank"
    :icon="icon"
    dark
    large
  >
    <v-icon :left="!icon">mdi-whatsapp</v-icon>
    <span v-if="!icon">{{ label }}</span>
  </v-btn>
</template>
<script>
export default {
  props: {
    icon: {
      type: Boolean,
      default: false,
    },
    phone: {
      type: String,
      default: '62999159008',
    },
    color: {
      type: String,
      default: '#25D366',
    },
    label: {
      type: String,
      default: 'Fale conosco',
    },
  },
}
</script>
