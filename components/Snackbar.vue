<template>
  <v-snackbar
    v-model="show"
    :color="color"
    
    :timeout="color === 'green' ? 3000 : 10000"
  >
    <v-icon v-if="color === 'green'" left> mdi-checkbox-marked-circle </v-icon>
    <v-icon v-if="color === 'red'" left> mdi-alert-circle </v-icon>
    {{ message }}
    <template #action="{  }">
      <v-btn small text @click="show = false">
        <v-icon> mdi-close </v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      message: '',
      color: '',
    }
  },

  created() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'snackbar/showMessage') {
        this.message = state.snackbar.content
        this.color = state.snackbar.color
        this.show = true
      }
    })
  },
}
</script>
