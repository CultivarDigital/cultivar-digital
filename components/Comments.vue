<template>
  <div>
    <!-- list comments -->
    <v-list v-if="comments">
      <v-list-item-group>
        <template v-for="comment in comments">
          <v-list-item :key="comment._id">
            <v-list-item-content>
              <div class="mb-3">
                <strong><small>{{ comment.user.name }}</small></strong>
              </div>
              <Editor :value="comment.body" />
            </v-list-item-content>
          </v-list-item>
          <v-divider :key="comment._id + '_divider'" />
        </template>
      </v-list-item-group>
    </v-list>
    <v-container>
      <CommentForm
        :demand="demand"
        :proposal="proposal"
        @input="loadComments"
      />
    </v-container>
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
