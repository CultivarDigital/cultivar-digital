<template>
  <div>
    <!-- list comments -->
    <div v-if="comments">
      <template v-for="comment in comments">
        <v-list-item :key="comment._id" class="pa-0">
          <v-list-item-content class="pa-0">
            <div class="mb-3 caption secondary--text text--lighten-4">
              {{ comment.user.name }}
            </div>
            <Editor :value="comment.body" />
          </v-list-item-content>
        </v-list-item>
      </template>
    </div>
    <div>
      <CommentForm
        :demand="demand"
        :proposal="proposal"
        @input="loadComments"
      />
    </div>
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
      comments: null,
    }
  },
  computed: {
    customer() {
      return this.$store.state.customer
    },
    filesUrl() {
      return process.env.FILES_URL
    },
  },
  created() {
    this.loadComments()
  },
  methods: {
    async loadComments() {
      const params = {
        customer: this.customer._id,
        demand: this.demand ? this.demand._id : null,
        proposal: this.proposal ? this.proposal._id : null,
      }
      this.comments = await this.$axios.$get('/v1/comments', { params })
    },
  },
}
</script>
