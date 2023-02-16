<template>
  <v-dialog
    v-model="dialog"
    max-width="290"
    @click:outside="removeComment = null"
  >
    <template #activator="{ on, attrs }">
      <v-btn v-if="button" small v-bind="attrs" v-on="on">
        <v-icon left>{{ icon }}</v-icon> {{ buttonLabel }}
      </v-btn>
      <v-btn v-else v-bind="attrs" icon  small v-on="on">
        <v-icon>{{ icon }}</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="text-h5">
        {{ label }}
      </v-card-title>
      <v-card-text> {{ hint }} </v-card-text>
      <v-card-actions class="pa-3">
        <v-spacer />
        <v-btn color="error" large @click="cancel"> Não </v-btn>
        <v-btn color="success" large @click="confirm"> Sim </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    button: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: 'Tem certeza disso?',
    },
    hint: {
      type: String,
      default: 'Esta alteração não pode ser desfeita',
    },
    icon: {
      type: String,
      default: 'mdi-delete',
    },
    buttonLabel: {
      type: String,
      default: 'Remover',
    },
  },
  data: () => ({
    dialog: false,
  }),
  methods: {
    confirm() {
      this.dialog = false
      this.$emit('confirm')
    },
    cancel() {
      this.dialog = false
      this.$emit('cancel')
    },
  },
}
</script>
