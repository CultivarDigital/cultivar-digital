import Vue from 'vue'
import VueQuillEditor from 'vue-quill-editor'
// import { Quill } from 'vue-quill-editor'
import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css'
import Quill from 'quill'

const undoIcon =
  '<svg viewbox="0 0 18 18"><polygon class="ql-fill ql-stroke" points="6 10 4 12 2 10 6 10"></polygon><path class="ql-stroke" d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"></path></svg>'
const redoIcon =
  '<svg viewbox="0 0 18 18"><polygon class="ql-fill ql-stroke" points="12 10 14 12 16 10 12 10"></polygon><path class="ql-stroke" d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"></path></svg>'

const icons = Quill.import('ui/icons')
icons.undo = undoIcon
icons.redo = redoIcon

const options = [
  ['bold', 'italic', 'underline', 'strike'], // toggled buttons
  [
    {
      color: [],
    },
    {
      background: [],
    },
  ],
  ['blockquote', 'code-block'],
  [
    {
      header: 1,
    },
    {
      header: 2,
    },
  ], // custom button values
  [
    {
      align: [],
    },
  ],
  [
    {
      indent: '-1',
    },
    {
      indent: '+1',
    },
  ], // outdent/indent
  [
    {
      list: 'ordered',
    },
    {
      list: 'bullet',
    },
  ],
  // [
  //   {
  //     direction: 'rtl',
  //   },
  // ], // text direction
  // [
  //   {
  //     script: 'sub',
  //   },
  //   {
  //     script: 'super',
  //   },
  // ], // superscript/subscript
  [
    {
      size: ['small', false, 'large', 'huge'],
    },
  ], // custom dropdown
  [
    {
      header: [1, 2, 3, 4, 5, 6, false],
    },
  ],
  ['clean'], // remove formatting button
  [
    {
      undo: undoIcon,
    },
    {
      redo: redoIcon,
    },
  ],
]

Vue.use(VueQuillEditor, {
  modules: {
    history: {
      delay: 1000,
      maxStack: 1000,
      userOnly: true,
    },
    toolbar: {
      container: options,
      handlers: {
        redo() {
          this.quill.history.redo()
        },
        undo() {
          this.quill.history.undo()
        },
        fullscreen() {
          const quillEditorTag =
            document.getElementsByClassName('quill-editor')[0]
          quillEditorTag.classList.toggle('fullscreen')
        },
        
      },
    },
  },
})
