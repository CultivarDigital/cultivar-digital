<template>
  <div class="mb-3">
    <quill-editor ref="quillEdit" v-model="content" @input="changed" />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
      required: true,
    },
  },

  data() {
    return {
      content: '',
      hasChanged: false,
      savedAlert: false,
    }
  },
  created() {
    this.content = this.value
  },
  methods: {
    changed() {
      this.$emit('input', this.content)
    },
  },
}
</script>
<style lang="scss">
.ql-toolbar.ql-snow {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-color: rgba(255, 255, 255, 0.24) !important;
  background-color: rgba(255, 255, 255, 0.80) !important;
}

.ql-editor.ql-blank::before {
  color: rgba(255, 255, 255, 0.4) !important;
}
.quill-editor {
  
  .ql-container {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    height: auto;
    border-color: rgba(255, 255, 255, 0.24) !important;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;

    .ql-editor {
      min-height: 160px !important;
      max-height: 500px !important;
      overflow-y: auto !important;
      padding: 16px;
      img {
        max-width: 100%;
        display: block;
        margin-bottom: 16px;
        margin-top: 16px;
      }
      p {
        margin-bottom: 16px !important;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin-bottom: 16px !important;
      }
    }
  }
  &.editor-content {
    .ql-container {
      .ql-editor {
        min-height: initial !important;
        max-height: initial !important;
        padding: 0;
      }
    }
  }
}
</style>
