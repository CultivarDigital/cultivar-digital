<template>
  <div>
    <v-form @submit.prevent="save">
      <Editor
        v-model="form.body"
        editable
        fixed-text
        :labels="{
          text: { icon: 'mdi-comment-text-outline', label: 'Comentário' },
        }"
      />
      <div v-if="form.body && form.body.find((block) => block.content)">
        <Save :block="false" label="Enviar" />
      </div>
    </v-form>
  </div>
</template>
<script>
export default {
  props: {
    demand: {
      type: Object,
      default: () => null,
    },
    proposal: {
      type: Object,
      default: () => null,
    },
  },
  data() {
    return {
      form: {
        body: null,
        demand: this.demand ? this.demand._id : null,
        proposal: this.proposal ? this.proposal._id : null,
      },
    }
  },
  methods: {
    save() {
      const form = { ...this.form, customer: this.customer._id }
      this.$axios.$post('/v1/comments', form).then((comment) => {
        this.$notifier.success('Salvo!')
        this.$emit('input', comment)
        this.body = null
      })
    },
  },
}
</script>
