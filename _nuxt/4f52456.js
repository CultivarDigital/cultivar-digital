(window.webpackJsonp=window.webpackJsonp||[]).push([[3,23,24,25,26,27],{523:function(t,e,n){var content=n(540);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("78b3d525",content,!0,{sourceMap:!1})},532:function(t,e,n){"use strict";n.r(e);var o={props:{editable:{type:Boolean,default:!1},value:{type:Array,default:function(){return[{type:"text",content:""}]}}},data:function(){return{blockTypes:{text:"Texto",image:"Imagem",video:"Vídeo",audio:"Áudio",file:"Arquivo"},blocks:this.value}},computed:{filesURL:function(){return"http://localhost:5000"}},watch:{blocks:function(){this.$emit("input",this.blocks)}},methods:{addText:function(){this.blocks||(this.blocks=[]),this.blocks.push({type:"text",content:""})},calcStats:function(){this.$emit("calc-stats")}}},l=n(69),r=n(70),c=n.n(r),d=n(207),f=n(204),v=n(555),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._l(t.blocks,(function(e,o){return["text"===e.type?n("div",{key:"text-"+o,staticClass:"mb-6"},[t.editable?n("TextEditor",{attrs:{"upload-prefix":"post"},on:{input:t.calcStats},model:{value:e.content,callback:function(n){t.$set(e,"content",n)},expression:"block.content"}}):n("div",{domProps:{innerHTML:t._s(e.content)}})],1):"image"===e.type?n("div",{key:"image-"+o,staticClass:"mb-6 text-center"},[e.content?n("img",{staticStyle:{"max-width":"100%"},attrs:{src:t.filesURL+e.content.replace("/images","/averages")}}):t._e(),t._v(" "),t.editable&&null!=e.caption&&void 0!==e.caption?n("v-textarea",{attrs:{rows:"1","auto-grow":"",label:"Legenda da imagem","hide-details":"auto"},model:{value:e.caption,callback:function(n){t.$set(e,"caption",n)},expression:"block.caption"}}):e.caption?n("div",[n("i",[n("small",[t._v(t._s(e.caption))])])]):t._e()],1):"video"===e.type?n("div",{key:"video-"+o,staticClass:"mb-6 text-center"},[n("video",{staticStyle:{"max-width":"100%"},attrs:{src:t.filesURL+e.content,controls:""}},[t._v("\n        Seu navegador não consegue carregar este vídeo.\n      ")]),t._v(" "),t.editable&&null!=e.caption&&void 0!==e.caption?n("v-textarea",{attrs:{rows:"1","auto-grow":"",label:"Legenda do vídeo","hide-details":"auto"},model:{value:e.caption,callback:function(n){t.$set(e,"caption",n)},expression:"block.caption"}}):e.caption?n("div",[n("i",[n("small",[t._v(t._s(e.caption))])])]):t._e()],1):"audio"===e.type?n("div",{key:"audio-"+o,staticClass:"mb-6 text-center"},[n("audio",{staticStyle:{"max-width":"100%"},attrs:{src:t.filesURL+e.content,controls:""}},[t._v("\n        Seu navegador não consegue carregar este áudio.\n      ")]),t._v(" "),t.editable&&null!=e.caption&&void 0!==e.caption?n("v-textarea",{attrs:{rows:"1","auto-grow":"",label:"Legenda do áudio","hide-details":"auto"},model:{value:e.caption,callback:function(n){t.$set(e,"caption",n)},expression:"block.caption"}}):e.caption?n("div",[n("i",[n("small",[t._v(t._s(e.caption))])])]):t._e()],1):"file"===e.type?n("div",{key:"file-"+o,staticClass:"mb-6 text-center"},[e.content?n("v-btn",{attrs:{href:t.filesURL+e.content,target:"_blank",color:"primary",block:"",large:""}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-attachment")]),t._v("\n        Baixar Arquivo\n      ")],1):t._e(),t._v(" "),t.editable&&null!=e.caption&&void 0!==e.caption?n("v-textarea",{attrs:{rows:"1","auto-grow":"",label:"Legenda do arquivo","hide-details":"auto"},model:{value:e.caption,callback:function(n){t.$set(e,"caption",n)},expression:"block.caption"}}):e.caption?n("div",[n("i",[n("small",[t._v(t._s(e.caption))])])]):t._e()],1):t._e(),t._v(" "),t.editable?n("div",{key:"remove-"+o,staticClass:"text-center mb-10 mt-n3"},[n("v-btn",{attrs:{dark:"","x-small":""},on:{click:function(e){return t.blocks.splice(o,1)}}},[n("v-icon",{attrs:{left:"","x-small":""}},[t._v("mdi-delete")]),t._v("\n        Remover "+t._s(t.blockTypes[e.type])+"\n      ")],1),t._v(" "),"text"!==e.type&&null!==e.caption&&void 0!==e.caption?n("v-btn",{attrs:{dark:"","x-small":""},on:{click:function(t){e.caption=null}}},[n("v-icon",{attrs:{left:"","x-small":""}},[t._v("mdi-delete")]),t._v("\n        Remover legenda\n      ")],1):t._e(),t._v(" "),"text"===e.type||null!==e.caption&&void 0!==e.caption?t._e():n("v-btn",{attrs:{dark:"","x-small":""},on:{click:function(t){e.caption=""}}},[n("v-icon",{attrs:{left:"","x-small":""}},[t._v("mdi-closed-caption-outline")]),t._v("\n        Adicionar legenda\n      ")],1)],1):t._e()]})),t._v(" "),t.editable?n("div",{staticClass:"mb-6"},[n("div",[t._v("Adicionar:")]),t._v(" "),n("span",[n("v-btn",{staticClass:"mb-1",attrs:{color:"primary"},on:{click:t.addText}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-format-text")]),t._v(" Texto\n      ")],1)],1),t._v(" "),n("UploadImage",{staticClass:"mb-6",attrs:{prefix:"posts",button:"",icon:"mdi-image",label:"Foto"},on:{input:function(image){return t.blocks.push({type:"image",content:image})}}}),t._v(" "),n("UploadVideo",{staticClass:"mb-6",attrs:{prefix:"posts",button:"",icon:"mdi-youtube",label:"Vídeo"},on:{input:function(video){return t.blocks.push({type:"video",content:video})}}}),t._v(" "),n("UploadAudio",{staticClass:"mb-6",attrs:{prefix:"posts",button:"",icon:"mdi-microphone",label:"Áudio"},on:{input:function(audio){return t.blocks.push({type:"audio",content:audio})}}}),t._v(" "),n("UploadFile",{staticClass:"mb-6",attrs:{prefix:"posts",button:"",icon:"mdi-attachment",label:"Arquivo"},on:{input:function(e){return t.blocks.push({type:"file",content:e})}}})],1):t._e()],2)}),[],!1,null,null,null);e.default=component.exports;c()(component,{TextEditor:n(570).default,UploadImage:n(571).default,UploadVideo:n(572).default,UploadAudio:n(573).default,UploadFile:n(574).default}),c()(component,{VBtn:d.a,VIcon:f.a,VTextarea:v.a})},539:function(t,e,n){"use strict";n(523)},540:function(t,e,n){var o=n(20)(!1);o.push([t.i,'html{scroll-behavior:smooth;scroll-padding-top:56px}section{min-height:calc(100vh - 56px)}@media(max-width:960px){section{min-height:calc(100vh - 56px)}}.tertiary--text{opacity:.4}.logo{width:42px}@media(min-width:960px){.logo{width:64px}}.nav-btn{box-shadow:none!important}@media(max-width:960px){.nav-btn{display:none}}.container{max-width:960px;padding:16px}.v-tab{font-size:12px!important}.v-slide-group__next,.v-slide-group__prev{display:none!important}.ql-toolbar.ql-snow{border-top-left-radius:8px;border-top-right-radius:8px;border-color:hsla(0,0%,100%,.24)!important;background-color:hsla(0,0%,100%,.8)!important}.ql-editor.ql-blank:before{color:hsla(0,0%,100%,.4)!important}.quill-editor .ql-container{border-bottom-left-radius:8px;border-bottom-right-radius:8px;height:auto;border-color:hsla(0,0%,100%,.24)!important;font-family:"Roboto",sans-serif;font-size:16px}.quill-editor .ql-container .ql-editor{min-height:160px!important;max-height:500px!important;overflow-y:auto!important;padding:16px}.quill-editor .ql-container .ql-editor img{max-width:100%;display:block;margin-bottom:16px;margin-top:16px}.quill-editor .ql-container .ql-editor h1,.quill-editor .ql-container .ql-editor h2,.quill-editor .ql-container .ql-editor h3,.quill-editor .ql-container .ql-editor h4,.quill-editor .ql-container .ql-editor h5,.quill-editor .ql-container .ql-editor h6,.quill-editor .ql-container .ql-editor p{margin-bottom:16px!important}.quill-editor.editor-content .ql-container .ql-editor{min-height:0!important;max-height:none!important;padding:0}',""]),t.exports=o},570:function(t,e,n){"use strict";n.r(e);var o={props:{value:{type:String,default:"",required:!0}},data:function(){return{content:"",hasChanged:!1,savedAlert:!1}},created:function(){this.content=this.value},methods:{changed:function(){this.$emit("input",this.content)}}},l=(n(539),n(69)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-3"},[n("quill-editor",{ref:"quillEdit",on:{input:t.changed},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)}),[],!1,null,null,null);e.default=component.exports},571:function(t,e,n){"use strict";n.r(e);n(4),n(75),n(28);var o={props:{value:{type:String,default:function(){return null}},prefix:{type:String,default:function(){return null},required:!0},button:{type:Boolean,default:!1},label:{type:String,default:"Anexar foto"},icon:{type:String,default:"mdi-image"},disabled:{type:Boolean,default:!1}},data:function(){return{loading:!1}},computed:{inputId:function(){return Math.random().toString(36).substring(2,15)}},methods:{uploadFiles:function(t){var e=this;this.loading=!0;for(var n=t.target.files||t.dataTransfer.files,i=0;i<n.length;i++){var o=n[i],l=new FormData;l.append("file",o,o.name),this.$axios.$post("/v1/uploads/images?prefix="+this.prefix,l,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){e.$emit("input",t.url),e.loading=!1})).catch((function(t){e.$notifier.apiError(t),e.loading=!1}))}},upload:function(){this.$refs["upload-image-input-"+this.inputId].click()}}},l=n(69),r=n(70),c=n.n(r),d=n(207),f=n(204),v=n(208),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"upload-image"},[t.button?n("v-btn",{staticClass:"mb-1",attrs:{color:"primary"},on:{click:t.upload}},[t.loading?n("v-progress-circular",{attrs:{color:"white",indeterminate:"",size:"20"}}):[n("v-icon",{attrs:{left:""}},[t._v(t._s(t.icon))]),t._v(" "+t._s(t.label)+"\n    ")]],2):n("v-btn",{attrs:{color:"primary",icon:""},on:{click:t.upload}},[t.loading?n("v-progress-circular",{attrs:{color:"white",indeterminate:"",size:"20"}}):n("v-icon",[t._v(t._s(t.icon))])],1),t._v(" "),n("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"upload-image-input-"+t.inputId,attrs:{accept:"image/*",type:"file"},on:{change:t.uploadFiles}})],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VIcon:f.a,VProgressCircular:v.a})},572:function(t,e,n){"use strict";n.r(e);n(4),n(75),n(28);var o={props:{value:{type:String,default:function(){return null}},prefix:{type:String,default:function(){return null},required:!0},button:{type:Boolean,default:!1},label:{type:String,default:"Anexar foto"},icon:{type:String,default:"mdi-video"}},data:function(){return{loading:!1}},computed:{inputId:function(){return Math.random().toString(36).substring(2,15)}},methods:{uploadFiles:function(t){var e=this;this.loading=!0;for(var n=t.target.files||t.dataTransfer.files,i=0;i<n.length;i++){var o=n[i],l=new FormData;l.append("file",o,o.name),this.$axios.$post("/v1/uploads/videos?prefix="+this.prefix,l,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){e.$emit("input",t.url),e.loading=!1})).catch((function(t){e.$notifier.apiError(t),e.loading=!1}))}},upload:function(){this.$refs["upload-video-input-"+this.inputId].click()}}},l=n(69),r=n(70),c=n.n(r),d=n(207),f=n(204),v=n(208),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"upload-video"},[t.button?n("v-btn",{staticClass:"mb-1",attrs:{color:"primary"},on:{click:t.upload}},[t.loading?n("v-progress-circular",{attrs:{color:"white",indeterminate:"",size:"20"}}):[n("v-icon",{attrs:{left:""}},[t._v(t._s(t.icon))]),t._v(" "+t._s(t.label)+"\n    ")]],2):n("v-btn",{attrs:{color:"primary",icon:""},on:{click:t.upload}},[t.loading?n("v-progress-circular",{attrs:{color:"white",indeterminate:"",size:"20"}}):n("v-icon",[t._v(t._s(t.icon))])],1),t._v(" "),n("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"upload-video-input-"+t.inputId,attrs:{accept:"video/*",type:"file"},on:{change:t.uploadFiles}})],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VIcon:f.a,VProgressCircular:v.a})},573:function(t,e,n){"use strict";n.r(e);n(4),n(75),n(28);var o={props:{value:{type:String,default:function(){return null}},prefix:{type:String,default:function(){return null},required:!0},button:{type:Boolean,default:!1},label:{type:String,default:"Anexar áudio"},icon:{type:String,default:"mdi-audio"}},data:function(){return{loading:!1}},computed:{inputId:function(){return Math.random().toString(36).substring(2,15)}},methods:{uploadFiles:function(t){var e=this;this.loading=!0;for(var n=t.target.files||t.dataTransfer.files,i=0;i<n.length;i++){var o=n[i],l=new FormData;l.append("file",o,o.name),this.$axios.$post("/v1/uploads/audios?prefix="+this.prefix,l,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){e.$emit("input",t.url),e.loading=!1})).catch((function(t){e.$notifier.apiError(t),e.loading=!1}))}},upload:function(){this.$refs["upload-audio-input-"+this.inputId].click()}}},l=n(69),r=n(70),c=n.n(r),d=n(207),f=n(204),v=n(208),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"upload-audio"},[t.button?n("v-btn",{staticClass:"mb-1",attrs:{color:"primary"},on:{click:t.upload}},[t.loading?n("v-progress-circular",{attrs:{color:"white",indeterminate:"",size:"20"}}):[n("v-icon",{attrs:{left:""}},[t._v(t._s(t.icon))]),t._v(" "+t._s(t.label)+"\n    ")]],2):n("v-btn",{attrs:{color:"primary",icon:""},on:{click:t.upload}},[t.loading?n("v-progress-circular",{attrs:{color:"white",indeterminate:"",size:"20"}}):n("v-icon",[t._v(t._s(t.icon))])],1),t._v(" "),n("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"upload-audio-input-"+t.inputId,attrs:{accept:"audio/*",type:"file"},on:{change:t.uploadFiles}})],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VIcon:f.a,VProgressCircular:v.a})},574:function(t,e,n){"use strict";n.r(e);n(4),n(75),n(28);var o={props:{value:{type:String,default:function(){return null}},prefix:{type:String,default:function(){return null},required:!0},button:{type:Boolean,default:!1},label:{type:String,default:"Anexar arquivo"},icon:{type:String,default:"mdi-attachment"},disabled:{type:Boolean,default:!1}},data:function(){return{loading:!1}},computed:{inputId:function(){return Math.random().toString(36).substring(2,15)}},methods:{uploadFiles:function(t){var e=this;this.loading=!0;for(var n=t.target.files||t.dataTransfer.files,i=0;i<n.length;i++){var o=n[i],l=new FormData;l.append("file",o,o.name),this.$axios.$post("/v1/uploads/files?prefix="+this.prefix,l,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){e.$emit("input",t.url),e.loading=!1})).catch((function(t){e.$notifier.apiError(t),e.loading=!1}))}},upload:function(){this.$refs["upload-file-input-"+this.inputId].click()}}},l=n(69),r=n(70),c=n.n(r),d=n(207),f=n(204),v=n(208),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"upload-file"},[t.button?n("v-btn",{staticClass:"mb-1",attrs:{color:"primary"},on:{click:t.upload}},[t.loading?n("v-progress-circular",{attrs:{color:"white",indeterminate:"",size:"20"}}):[n("v-icon",{attrs:{left:""}},[t._v(t._s(t.icon))]),t._v(" "+t._s(t.label)+"\n    ")]],2):n("v-btn",{attrs:{color:"primary",icon:""},on:{click:t.upload}},[t.loading?n("v-progress-circular",{attrs:{color:"white",indeterminate:"",size:"20"}}):n("v-icon",[t._v(t._s(t.icon))])],1),t._v(" "),n("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"upload-file-input-"+t.inputId,attrs:{type:"file"},on:{change:t.uploadFiles}})],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VIcon:f.a,VProgressCircular:v.a})}}]);