<template>
  <span class="upload-file">
    <v-btn v-if="button" color="primary" class="mb-1" @click="upload">
      <v-progress-circular
        v-if="loading"
        color="white"
        indeterminate
        size="20"
      ></v-progress-circular>
      <template v-else>
        <v-icon left>{{ icon }}</v-icon> {{ label }}
      </template>
    </v-btn>
    <v-btn v-else color="primary" icon @click="upload">
      <v-progress-circular
        v-if="loading"
        color="white"
        indeterminate
        size="20"
      ></v-progress-circular>
      <v-icon v-else>{{ icon }}</v-icon>
    </v-btn>
    <input
      v-show="false"
      :ref="'upload-file-input-' + inputId"
      type="file"
      @change="uploadFiles"
    />
  </span>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: () => null,
    },
    prefix: {
      type: String,
      default: () => null,
      required: true,
    },
    button: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: 'Anexar arquivo',
    },
    icon: {
      type: String,
      default: 'mdi-attachment',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      loading: false,
    }
  },
  computed: {
    inputId() {
      return Math.random().toString(36).substring(2, 15)
    },
  },
  methods: {
    uploadFiles(e) {
      this.loading = true
      const files = e.target.files || e.dataTransfer.files
      for (let i = 0; i < files.length; i++) {
        const file = files[i]
        const formData = new FormData()
        formData.append('file', file, file.name)
        this.$axios
          .$post('/v1/uploads/files?prefix=' + this.prefix, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((uploaded) => {
            this.$emit('input', uploaded.url)
            this.loading = false
          })
          .catch((error) => {
            this.$notifier.apiError(error)
            this.loading = false
          })
      }
    },
    upload() {
      // eslint-disable-next-line dot-notation
      this.$refs['upload-file-input-' + this.inputId].click()
    },
  },
}
</script>
