<template>
  <div>
    <template v-for="(block, index) in blocks">
      <div v-if="block.type === 'text'" :key="'text-' + index" class="mb-6">
        <TextEditor
          v-if="editable"
          v-model="block.content"
          upload-prefix="post"
          @input="calcStats"
        />
        <div v-else v-html="block.content" />
      </div>
      <div
        v-else-if="block.type === 'image'"
        :key="'image-' + index"
        class="mb-6 text-center"
      >
        <img
          v-if="block.content"
          :src="filesURL + block.content.replace('/images', '/averages')"
          style="max-width: 100%"
        />
        <v-textarea
          v-if="editable && block.caption != null && block.caption !== undefined"
          v-model="block.caption"
          rows="1"
          auto-grow

          label="Legenda da imagem"
          hide-details="auto"
        />
        <div v-else-if="block.caption" >
          <i><small>{{ block.caption }}</small></i>
        </div>
      </div>
      <div
        v-else-if="block.type === 'video'"
        :key="'video-' + index"
        class="mb-6 text-center"
      >
        <video
          :src="filesURL + block.content"
          controls
          style="max-width: 100%"
        >
          Seu navegador não consegue carregar este vídeo.
        </video>
        <v-textarea
          v-if="editable && block.caption != null && block.caption !== undefined"
          v-model="block.caption"
          rows="1"
          auto-grow

          label="Legenda do vídeo"
          hide-details="auto"
        />
        <div v-else-if="block.caption" >
          <i><small>{{ block.caption }}</small></i>
        </div>
      </div>
      <div
        v-else-if="block.type === 'audio'"
        :key="'audio-' + index"
        class="mb-6 text-center"
      >
        <audio
          :src="filesURL + block.content"
          controls
          style="max-width: 100%"
        >
          Seu navegador não consegue carregar este áudio.
        </audio>
        <v-textarea
          v-if="editable && block.caption != null && block.caption !== undefined"
          v-model="block.caption"
          rows="1"
          auto-grow

          label="Legenda do áudio"
          hide-details="auto"
        />
        <div v-else-if="block.caption" >
          <i><small>{{ block.caption }}</small></i>
        </div>
      </div>
      <div
        v-else-if="block.type === 'file'"
        :key="'file-' + index"
        class="mb-6 text-center"
      >
        <v-btn
          v-if="block.content"
          :href="filesURL + block.content"
          target="_blank"
          color="primary"
          block
          large
        >
          <v-icon left>mdi-attachment</v-icon>
          Baixar Arquivo
        </v-btn>
        <v-textarea
          v-if="editable && block.caption != null && block.caption !== undefined"
          v-model="block.caption"
          rows="1"
          auto-grow

          label="Legenda do arquivo"
          hide-details="auto"
        />
        <div v-else-if="block.caption" >
          <i><small>{{ block.caption }}</small></i>
        </div>
      </div>
      <div v-if="editable" :key="'remove-' + index"  class="text-center mb-10 mt-n3">
        <v-btn dark x-small @click="blocks.splice(index, 1)">
          <v-icon left x-small>mdi-delete</v-icon>
          Remover {{ blockTypes[block.type] }}
        </v-btn>
        <v-btn v-if="block.type !== 'text' && block.caption !== null && block.caption !== undefined" dark x-small @click="block.caption = null">
          <v-icon left x-small>mdi-delete</v-icon>
          Remover legenda
        </v-btn>
        <v-btn v-if="block.type !== 'text' && (block.caption === null || block.caption === undefined)" dark x-small @click="block.caption = ''">
          <v-icon left x-small>mdi-closed-caption-outline</v-icon>
          Adicionar legenda
        </v-btn>
      </div>
    </template>
    <div v-if="editable" class="mb-6">
      <div>Adicionar:</div>
      <span>
        <v-btn color="primary" class="mb-1" @click="addText">
          <v-icon left>mdi-format-text</v-icon> Texto
        </v-btn>
      </span>
      <UploadImage
        prefix="posts"
        button
        icon="mdi-image"
        label="Foto"
        class="mb-6"
        @input="
          (image) =>
            blocks.push({
              type: 'image',
              content: image,
            })
        "
      />
      <UploadVideo
        prefix="posts"
        button
        icon="mdi-youtube"
        label="Vídeo"
        class="mb-6"
        @input="
          (video) =>
            blocks.push({
              type: 'video',
              content: video,
            })
        "
      />
      <UploadAudio
        prefix="posts"
        button
        icon="mdi-microphone"
        label="Áudio"
        class="mb-6"
        @input="
          (audio) =>
            blocks.push({
              type: 'audio',
              content: audio,
            })
        "
      />
      <UploadFile
        prefix="posts"
        button
        icon="mdi-attachment"
        label="Arquivo"
        class="mb-6"
        @input="
          (file) =>
            blocks.push({
              type: 'file',
              content: file,
            })
        "
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    editable: {
      type: Boolean,
      default: false,
    },
    value: {
      type: Array,
      default: () => [
        {
          type: 'text',
          content: '',
        },
      ],
    },
  },
  data() {
    return {
      blockTypes: {
        text: 'Texto',
        image: 'Imagem',
        video: 'Vídeo',
        audio: 'Áudio',
        file: 'Arquivo',
      },
      blocks: this.value,
    }
  },
  computed: {
    filesURL() {
      return process.env.FILES_URL
    },
  },
  watch: {
    blocks() {
      this.$emit('input', this.blocks)
    },
    value() {
      this.blocks = this.value
    }
  },
  methods: {
    addText() {
      if (!this.blocks) {
        this.blocks = []
      }
      this.blocks.push({
        type: 'text',
        content: '',
      })
    },
    calcStats() {
      this.$emit('calc-stats')
    },
  },
}
</script>
