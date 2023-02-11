(window.webpackJsonp=window.webpackJsonp||[]).push([[15,4,27,29,30,31,32,33],{510:function(t,e,n){"use strict";n.r(e);var o={props:{invalid:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},block:{type:Boolean,default:!0},label:{type:String,default:"Salvar"}}},r=n(69),l=n(70),c=n.n(l),d=n(505),f=n(206),v=n(207),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.invalid?n("v-alert",{staticClass:"d-flex justify-center",attrs:{type:"error"}},[t._v("\n    Você deve corrigir os erros acima antes de salvar\n  ")]):t._e(),t._v(" "),n("v-btn",{staticClass:"mb-4 mt-4 font-weight-bold text-none",attrs:{"x-large":"",type:"submit",color:"primary",disabled:t.invalid||t.loading,block:t.block,rounded:""}},[t.loading?n("v-progress-circular",{attrs:{color:"secondary",indeterminate:"",size:"20"}}):n("span",[t._v(t._s(t.label))])],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VAlert:d.a,VBtn:f.a,VProgressCircular:v.a})},511:function(t,e,n){"use strict";n.r(e);var o={methods:{close:function(){this.$emit("close")}}},r=n(69),l=n(70),c=n.n(l),d=n(206),f=n(508),v=n(549),m=n(203),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-container",{staticClass:"d-flex align-center justify-space-between"},[o("div",{staticClass:"d-flex align-center"},[o("img",{staticClass:"logo",attrs:{src:n(234)}}),t._v(" "),o("span",{staticClass:"ml-3"},[o("strong",[t._v("Cultivar")]),t._v(" Digital")])]),t._v(" "),o("v-btn",{attrs:{icon:""},on:{click:t.close}},[o("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),o("v-divider")],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VContainer:f.a,VDivider:v.a,VIcon:m.a})},512:function(t,e,n){"use strict";n.r(e);var o={props:{editable:{type:Boolean,default:!1},value:{type:Array,default:function(){return[{type:"text",content:""}]}},labels:{type:Object,default:function(){return{}}}},data:function(){return{blockTypes:{text:"Texto",image:"Imagem",video:"Vídeo",audio:"Áudio",file:"Arquivo"},blocks:this.value||[]}},computed:{itemsLabels:function(){return Object.assign({text:{label:"Texto",icon:"mdi-format-text"},image:{label:"Imagem",icon:"mdi-image"},video:{label:"Vídeo",icon:"mdi-youtube"},audio:{label:"Áudio",icon:"mdi-microphone"},file:{label:"Arquivo",icon:"mdi-attachment"}},this.labels)},filesURL:function(){return"http://localhost:5000"}},watch:{blocks:function(){this.$emit("input",this.blocks)},value:function(){this.blocks=this.value||[]}},methods:{addText:function(){this.blocks||(this.blocks=[]),this.blocks.push({type:"text",content:""})},calcStats:function(){this.$emit("calc-stats")}}},r=n(69),l=n(70),c=n.n(l),d=n(206),f=n(203),v=n(563),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._l(t.blocks,(function(e,o){return["text"===e.type?n("div",{key:"text-"+o,staticClass:"mb-6"},[t.editable?n("TextEditor",{attrs:{"upload-prefix":"post"},on:{input:t.calcStats},model:{value:e.content,callback:function(n){t.$set(e,"content",n)},expression:"block.content"}}):n("div",{domProps:{innerHTML:t._s(e.content)}})],1):"image"===e.type?n("div",{key:"image-"+o,staticClass:"mb-6 text-center"},[e.content?n("img",{staticStyle:{"max-width":"100%"},attrs:{src:t.filesURL+e.content.replace("/images","/averages")}}):t._e(),t._v(" "),t.editable&&null!=e.caption&&void 0!==e.caption?n("v-textarea",{attrs:{rows:"1","auto-grow":"",label:"Legenda da imagem","hide-details":"auto"},model:{value:e.caption,callback:function(n){t.$set(e,"caption",n)},expression:"block.caption"}}):e.caption?n("div",[n("i",[n("small",[t._v(t._s(e.caption))])])]):t._e()],1):"video"===e.type?n("div",{key:"video-"+o,staticClass:"mb-6 text-center"},[n("video",{staticStyle:{"max-width":"100%"},attrs:{src:t.filesURL+e.content,controls:""}},[t._v("\n        Seu navegador não consegue carregar este vídeo.\n      ")]),t._v(" "),t.editable&&null!=e.caption&&void 0!==e.caption?n("v-textarea",{attrs:{rows:"1","auto-grow":"",label:"Legenda do vídeo","hide-details":"auto"},model:{value:e.caption,callback:function(n){t.$set(e,"caption",n)},expression:"block.caption"}}):e.caption?n("div",[n("i",[n("small",[t._v(t._s(e.caption))])])]):t._e()],1):"audio"===e.type?n("div",{key:"audio-"+o,staticClass:"mb-6 text-center"},[n("audio",{staticStyle:{"max-width":"100%"},attrs:{src:t.filesURL+e.content,controls:""}},[t._v("\n        Seu navegador não consegue carregar este áudio.\n      ")]),t._v(" "),t.editable&&null!=e.caption&&void 0!==e.caption?n("v-textarea",{attrs:{rows:"1","auto-grow":"",label:"Legenda do áudio","hide-details":"auto"},model:{value:e.caption,callback:function(n){t.$set(e,"caption",n)},expression:"block.caption"}}):e.caption?n("div",[n("i",[n("small",[t._v(t._s(e.caption))])])]):t._e()],1):"file"===e.type?n("div",{key:"file-"+o,staticClass:"mb-6 text-center"},[e.content?n("v-btn",{attrs:{href:t.filesURL+e.content,target:"_blank",color:"primary",block:"",large:""}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-attachment")]),t._v("\n        Baixar Arquivo\n      ")],1):t._e(),t._v(" "),t.editable&&null!=e.caption&&void 0!==e.caption?n("v-textarea",{attrs:{rows:"1","auto-grow":"",label:"Legenda do arquivo","hide-details":"auto"},model:{value:e.caption,callback:function(n){t.$set(e,"caption",n)},expression:"block.caption"}}):e.caption?n("div",[n("i",[n("small",[t._v(t._s(e.caption))])])]):t._e()],1):t._e(),t._v(" "),t.editable?n("div",{key:"remove-"+o,staticClass:"text-center mb-10 mt-n3"},[n("v-btn",{attrs:{dark:"","x-small":""},on:{click:function(e){return t.blocks.splice(o,1)}}},[n("v-icon",{attrs:{left:"","x-small":""}},[t._v("mdi-delete")]),t._v("\n        Remover "+t._s(t.blockTypes[e.type])+"\n      ")],1),t._v(" "),"text"!==e.type&&null!==e.caption&&void 0!==e.caption?n("v-btn",{attrs:{dark:"","x-small":""},on:{click:function(t){e.caption=null}}},[n("v-icon",{attrs:{left:"","x-small":""}},[t._v("mdi-delete")]),t._v("\n        Remover legenda\n      ")],1):t._e(),t._v(" "),"text"===e.type||null!==e.caption&&void 0!==e.caption?t._e():n("v-btn",{attrs:{dark:"","x-small":""},on:{click:function(t){e.caption=""}}},[n("v-icon",{attrs:{left:"","x-small":""}},[t._v("mdi-closed-caption-outline")]),t._v("\n        Adicionar legenda\n      ")],1)],1):t._e()]})),t._v(" "),t.editable?n("div",{staticClass:"mb-6"},[n("div",[t._v("Adicionar:")]),t._v(" "),n("span",[n("v-btn",{staticClass:"mb-1",attrs:{color:"primary"},on:{click:t.addText}},[n("v-icon",{attrs:{left:""}},[t._v(t._s(t.itemsLabels.text.icon))]),t._v(" "+t._s(t.itemsLabels.text.label)+"\n      ")],1)],1),t._v(" "),n("UploadImage",{staticClass:"mb-6",attrs:{prefix:"posts",button:"",icon:t.itemsLabels.image.icon,label:t.itemsLabels.image.label},on:{input:function(image){return t.blocks.push({type:"image",content:image})}}}),t._v(" "),n("UploadVideo",{staticClass:"mb-6",attrs:{prefix:"posts",button:"",icon:t.itemsLabels.video.icon,label:t.itemsLabels.video.label},on:{input:function(video){return t.blocks.push({type:"video",content:video})}}}),t._v(" "),n("UploadAudio",{staticClass:"mb-6",attrs:{prefix:"posts",button:"",icon:t.itemsLabels.audio.icon,label:t.itemsLabels.audio.label},on:{input:function(audio){return t.blocks.push({type:"audio",content:audio})}}}),t._v(" "),n("UploadFile",{staticClass:"mb-6",attrs:{prefix:"posts",button:"",icon:t.itemsLabels.file.icon,label:t.itemsLabels.file.label},on:{input:function(e){return t.blocks.push({type:"file",content:e})}}})],1):t._e()],2)}),[],!1,null,null,null);e.default=component.exports;c()(component,{TextEditor:n(527).default,UploadImage:n(528).default,UploadVideo:n(529).default,UploadAudio:n(530).default,UploadFile:n(531).default}),c()(component,{VBtn:d.a,VIcon:f.a,VTextarea:v.a})},515:function(t,e,n){var content=n(525);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("78b3d525",content,!0,{sourceMap:!1})},519:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return c}));n(104),n(4);var o=[{value:"feature",label:"Funcionalidade",icon:"mdi-star"},{value:"bug",label:"Correção",icon:"mdi-bug"},{value:"improvement",label:"Melhoria",icon:"mdi-wrench"}],r=function(t){return o.find((function(e){return e.value===t}))},l=function(t){var e=r(t);return e?e.icon:""},c=function(t){var e=r(t);return e?e.label:""};e.a=o},520:function(t,e,n){"use strict";n.d(e,"b",(function(){return r}));n(104),n(4);var o=[{label:"Na fila",value:"backlog"},{label:"Em andamento",value:"in-progress"},{label:"Finalizadas",value:"done"}],r=function(t){var e=o.find((function(e){return e.value===t}));return e?e.label:""};e.a=o},521:function(t,e,n){"use strict";n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return c}));n(104),n(4);var o=[{value:0,label:"Urgente",color:"error"},{value:1,label:"Alta",color:"warning"},{value:2,label:"Média",color:"info"},{value:3,label:"Baixa",color:"success"}],r=function(t){return o.find((function(p){return p.value===t}))},l=function(t){var e=r(t);return e?e.label:""},c=function(t){var e=r(t);return e?e.color:""};e.a=o},524:function(t,e,n){"use strict";n(515)},525:function(t,e,n){var o=n(20)(!1);o.push([t.i,'html{scroll-behavior:smooth;scroll-padding-top:56px}section{min-height:calc(100vh - 56px)}@media(max-width:960px){section{min-height:calc(100vh - 56px)}}.tertiary--text{opacity:.4}.logo{width:42px}@media(min-width:960px){.logo{width:64px}}.nav-btn{box-shadow:none!important}@media(max-width:960px){.nav-btn{display:none}}.container{max-width:960px;padding:16px}.v-tab{font-size:12px!important}.v-slide-group__next,.v-slide-group__prev{display:none!important}.ql-toolbar.ql-snow{border-top-left-radius:8px;border-top-right-radius:8px;border-color:hsla(0,0%,100%,.24)!important;background-color:hsla(0,0%,100%,.8)!important}.ql-editor.ql-blank:before{color:hsla(0,0%,100%,.4)!important}.quill-editor .ql-container{border-bottom-left-radius:8px;border-bottom-right-radius:8px;height:auto;border-color:hsla(0,0%,100%,.24)!important;font-family:"Roboto",sans-serif;font-size:16px}.quill-editor .ql-container .ql-editor{min-height:160px!important;max-height:500px!important;overflow-y:auto!important;padding:16px}.quill-editor .ql-container .ql-editor img{max-width:100%;display:block;margin-bottom:16px;margin-top:16px}.quill-editor .ql-container .ql-editor h1,.quill-editor .ql-container .ql-editor h2,.quill-editor .ql-container .ql-editor h3,.quill-editor .ql-container .ql-editor h4,.quill-editor .ql-container .ql-editor h5,.quill-editor .ql-container .ql-editor h6,.quill-editor .ql-container .ql-editor p{margin-bottom:16px!important}.quill-editor.editor-content .ql-container .ql-editor{min-height:0!important;max-height:none!important;padding:0}',""]),t.exports=o},527:function(t,e,n){"use strict";n.r(e);var o={props:{value:{type:String,default:"",required:!0}},data:function(){return{content:"",hasChanged:!1,savedAlert:!1}},created:function(){this.content=this.value},methods:{changed:function(){this.$emit("input",this.content)}}},r=(n(524),n(69)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-3"},[n("quill-editor",{ref:"quillEdit",on:{input:t.changed},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)}),[],!1,null,null,null);e.default=component.exports},528:function(t,e,n){"use strict";n.r(e);n(4),n(73),n(27);var o={props:{value:{type:String,default:function(){return null}},prefix:{type:String,default:function(){return null},required:!0},button:{type:Boolean,default:!1},label:{type:String,default:"Anexar foto"},icon:{type:String,default:"mdi-image"},disabled:{type:Boolean,default:!1}},data:function(){return{loading:!1}},computed:{inputId:function(){return Math.random().toString(36).substring(2,15)}},methods:{uploadFiles:function(t){var e=this;this.loading=!0;for(var n=t.target.files||t.dataTransfer.files,i=0;i<n.length;i++){var o=n[i],r=new FormData;r.append("file",o,o.name),this.$axios.$post("/v1/uploads/images?prefix="+this.prefix,r,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){e.$emit("input",t.url),e.loading=!1})).catch((function(t){e.$notifier.apiError(t),e.loading=!1}))}},upload:function(){this.$refs["upload-image-input-"+this.inputId].click()}}},r=n(69),l=n(70),c=n.n(l),d=n(206),f=n(203),v=n(207),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"upload-image"},[t.button?n("v-btn",{staticClass:"mb-1",attrs:{color:"primary"},on:{click:t.upload}},[t.loading?n("v-progress-circular",{attrs:{color:"white",indeterminate:"",size:"20"}}):[n("v-icon",{attrs:{left:""}},[t._v(t._s(t.icon))]),t._v(" "+t._s(t.label)+"\n    ")]],2):n("v-btn",{attrs:{color:"primary",icon:""},on:{click:t.upload}},[t.loading?n("v-progress-circular",{attrs:{color:"white",indeterminate:"",size:"20"}}):n("v-icon",[t._v(t._s(t.icon))])],1),t._v(" "),n("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"upload-image-input-"+t.inputId,attrs:{accept:"image/*",type:"file"},on:{change:t.uploadFiles}})],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VIcon:f.a,VProgressCircular:v.a})},529:function(t,e,n){"use strict";n.r(e);n(4),n(73),n(27);var o={props:{value:{type:String,default:function(){return null}},prefix:{type:String,default:function(){return null},required:!0},button:{type:Boolean,default:!1},label:{type:String,default:"Anexar foto"},icon:{type:String,default:"mdi-video"}},data:function(){return{loading:!1}},computed:{inputId:function(){return Math.random().toString(36).substring(2,15)}},methods:{uploadFiles:function(t){var e=this;this.loading=!0;for(var n=t.target.files||t.dataTransfer.files,i=0;i<n.length;i++){var o=n[i],r=new FormData;r.append("file",o,o.name),this.$axios.$post("/v1/uploads/videos?prefix="+this.prefix,r,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){e.$emit("input",t.url),e.loading=!1})).catch((function(t){e.$notifier.apiError(t),e.loading=!1}))}},upload:function(){this.$refs["upload-video-input-"+this.inputId].click()}}},r=n(69),l=n(70),c=n.n(l),d=n(206),f=n(203),v=n(207),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"upload-video"},[t.button?n("v-btn",{staticClass:"mb-1",attrs:{color:"primary"},on:{click:t.upload}},[t.loading?n("v-progress-circular",{attrs:{color:"white",indeterminate:"",size:"20"}}):[n("v-icon",{attrs:{left:""}},[t._v(t._s(t.icon))]),t._v(" "+t._s(t.label)+"\n    ")]],2):n("v-btn",{attrs:{color:"primary",icon:""},on:{click:t.upload}},[t.loading?n("v-progress-circular",{attrs:{color:"white",indeterminate:"",size:"20"}}):n("v-icon",[t._v(t._s(t.icon))])],1),t._v(" "),n("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"upload-video-input-"+t.inputId,attrs:{accept:"video/*",type:"file"},on:{change:t.uploadFiles}})],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VIcon:f.a,VProgressCircular:v.a})},530:function(t,e,n){"use strict";n.r(e);n(4),n(73),n(27);var o={props:{value:{type:String,default:function(){return null}},prefix:{type:String,default:function(){return null},required:!0},button:{type:Boolean,default:!1},label:{type:String,default:"Anexar áudio"},icon:{type:String,default:"mdi-audio"}},data:function(){return{loading:!1}},computed:{inputId:function(){return Math.random().toString(36).substring(2,15)}},methods:{uploadFiles:function(t){var e=this;this.loading=!0;for(var n=t.target.files||t.dataTransfer.files,i=0;i<n.length;i++){var o=n[i],r=new FormData;r.append("file",o,o.name),this.$axios.$post("/v1/uploads/audios?prefix="+this.prefix,r,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){e.$emit("input",t.url),e.loading=!1})).catch((function(t){e.$notifier.apiError(t),e.loading=!1}))}},upload:function(){this.$refs["upload-audio-input-"+this.inputId].click()}}},r=n(69),l=n(70),c=n.n(l),d=n(206),f=n(203),v=n(207),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"upload-audio"},[t.button?n("v-btn",{staticClass:"mb-1",attrs:{color:"primary"},on:{click:t.upload}},[t.loading?n("v-progress-circular",{attrs:{color:"white",indeterminate:"",size:"20"}}):[n("v-icon",{attrs:{left:""}},[t._v(t._s(t.icon))]),t._v(" "+t._s(t.label)+"\n    ")]],2):n("v-btn",{attrs:{color:"primary",icon:""},on:{click:t.upload}},[t.loading?n("v-progress-circular",{attrs:{color:"white",indeterminate:"",size:"20"}}):n("v-icon",[t._v(t._s(t.icon))])],1),t._v(" "),n("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"upload-audio-input-"+t.inputId,attrs:{accept:"audio/*",type:"file"},on:{change:t.uploadFiles}})],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VIcon:f.a,VProgressCircular:v.a})},531:function(t,e,n){"use strict";n.r(e);n(4),n(73),n(27);var o={props:{value:{type:String,default:function(){return null}},prefix:{type:String,default:function(){return null},required:!0},button:{type:Boolean,default:!1},label:{type:String,default:"Anexar arquivo"},icon:{type:String,default:"mdi-attachment"},disabled:{type:Boolean,default:!1}},data:function(){return{loading:!1}},computed:{inputId:function(){return Math.random().toString(36).substring(2,15)}},methods:{uploadFiles:function(t){var e=this;this.loading=!0;for(var n=t.target.files||t.dataTransfer.files,i=0;i<n.length;i++){var o=n[i],r=new FormData;r.append("file",o,o.name),this.$axios.$post("/v1/uploads/files?prefix="+this.prefix,r,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){e.$emit("input",t.url),e.loading=!1})).catch((function(t){e.$notifier.apiError(t),e.loading=!1}))}},upload:function(){this.$refs["upload-file-input-"+this.inputId].click()}}},r=n(69),l=n(70),c=n.n(l),d=n(206),f=n(203),v=n(207),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"upload-file"},[t.button?n("v-btn",{staticClass:"mb-1",attrs:{color:"primary"},on:{click:t.upload}},[t.loading?n("v-progress-circular",{attrs:{color:"white",indeterminate:"",size:"20"}}):[n("v-icon",{attrs:{left:""}},[t._v(t._s(t.icon))]),t._v(" "+t._s(t.label)+"\n    ")]],2):n("v-btn",{attrs:{color:"primary",icon:""},on:{click:t.upload}},[t.loading?n("v-progress-circular",{attrs:{color:"white",indeterminate:"",size:"20"}}):n("v-icon",[t._v(t._s(t.icon))])],1),t._v(" "),n("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"upload-file-input-"+t.inputId,attrs:{type:"file"},on:{change:t.uploadFiles}})],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VIcon:f.a,VProgressCircular:v.a})},535:function(t,e,n){"use strict";n.r(e);n(11),n(13),n(18),n(19);var o=n(3),r=(n(4),n(15),n(12),n(183),n(144)),l=n(519),c=n(520),d=n(521);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={components:{ValidationObserver:r.a,ValidationProvider:r.b},props:{demand:{type:Object,default:function(){return null}}},data:function(){return{demandTypes:l.a,demandStatus:c.a,demandPriorities:d.a,dialog:!1,form:{title:"",body:null,points:null,price:null,type:null,priority:null,progress:0,status:"backlog",paid:!1}}},computed:{company:function(){return this.$store.state.company},estimate:function(){return this.form.points&&this.company?{estimate_in_days:Math.round(this.form.points/this.company.points_per_day),price:this.form.points*this.company.point_price}:null}},created:function(){var t=this;this.demand&&Object.keys(this.form).forEach((function(e){void 0!==t.demand[e]&&null!==t.demand[e]&&(t.form[e]=t.demand[e])}))},methods:{save:function(){var t=this,form=v({},this.form);this.demand?this.$axios.$patch("/v1/demands/"+this.demand._id,form).then((function(e){t.$notifier.success("Atualizado!"),t.$emit("input",e)})):this.$axios.$post("/v1/demands",v(v({},form),{},{company:this.company._id})).then((function(e){t.$notifier.success("Salvo!"),t.$emit("input",e)}))},toggleMonth:function(t){this.active_month===t?this.active_month=null:this.active_month=t},removeItem:function(t,e,n){this.form.data[t-1][e-1].splice(n,1)},close:function(){this.$emit("close")}}},h=n(69),_=n(70),y=n.n(_),x=n(206),k=n(534),w=n(508),$=n(658),C=n(559),S=n(203),V=n(654),O=n(556),j=n(563),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{value:!0,fullscreen:"",persistent:""}},[n("v-card",{staticClass:"template-form"},[n("DialogHeader",{on:{close:t.close}}),t._v(" "),n("v-container",{staticClass:"pt-6"},[n("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var o=e.validate,r=e.invalid;return[n("v-form",{on:{submit:function(e){e.preventDefault(),o().then(t.save)}}},[null===t.form.type?n("div",[n("h3",{staticClass:"mb-6"},[t._v("Que tipo de demanda é essa?")]),t._v(" "),t._l(t.demandTypes,(function(e){return n("v-btn",{key:e.value,staticClass:"mb-6 text-left",attrs:{color:"primary",large:"",block:""},on:{click:function(n){t.form.type=e.value}}},[n("v-icon",{attrs:{left:""}},[t._v(" "+t._s(e.icon))]),t._v("\n              "+t._s(e.label)+"\n            ")],1)}))],2):null===t.form.priority?n("div",[n("h3",{staticClass:"mb-6"},[t._v("Qual a prioridade dessa demanda?")]),t._v(" "),t._l(t.demandPriorities,(function(e){return n("v-btn",{key:e.value,staticClass:"mb-6 text-left",attrs:{color:e.color,large:"",block:""},on:{click:function(n){t.form.priority=e.value}}},[t._v("\n              "+t._s(e.label)+"\n            ")])}))],2):n("div",[n("validation-provider",{attrs:{name:"Título da demanda",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[n("v-textarea",{attrs:{rows:"1","auto-grow":"",label:"Título da demanda",outlined:"","error-messages":o,focusable:""},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})]}}],null,!0)}),t._v(" "),n("Editor",{attrs:{editable:""},model:{value:t.form.body,callback:function(e){t.$set(t.form,"body",e)},expression:"form.body"}}),t._v(" "),n("validation-provider",{attrs:{name:"Tipo de demanda",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[n("v-select",{attrs:{label:"Tipo de demanda",items:t.demandTypes,"item-value":"value","item-text":"label",outlined:"","error-messages":o},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}})]}}],null,!0)}),t._v(" "),n("validation-provider",{attrs:{name:"Prioridade",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[n("v-select",{attrs:{label:"Prioridade",items:t.demandPriorities,"item-value":"value","item-text":"label",outlined:"","error-messages":o},model:{value:t.form.priority,callback:function(e){t.$set(t.form,"priority",e)},expression:"form.priority"}})]}}],null,!0)}),t._v(" "),"admin"===t.$auth.user.role?n("validation-provider",{attrs:{name:"Status da demanda",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[n("v-select",{attrs:{label:"Status da demanda",items:t.demandStatus,"item-value":"value","item-text":"label",outlined:"","error-messages":o},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})]}}],null,!0)}):t._e(),t._v(" "),"admin"===t.$auth.user.role?n("validation-provider",{attrs:{name:"Pontos",rules:"required|min_value:0"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[n("v-text-field",{attrs:{label:"Pontos",type:"number",outlined:"","error-messages":o},model:{value:t.form.points,callback:function(e){t.$set(t.form,"points",e)},expression:"form.points"}}),t._v(" "),"admin"===t.$auth.user.role&&t.estimate?n("div",[t._v("\n                "+t._s(t._f("moeda")(t.estimate.price))+" ("+t._s(t.estimate.estimate_in_days)+" dias)\n              ")]):t._e()]}}],null,!0)}):t._e(),t._v(" "),n("div",{staticClass:"text-right"},[n("Save",{attrs:{invalid:r,block:!1,label:"Salvar"}})],1)],1)])]}}])})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;y()(component,{DialogHeader:n(511).default,Editor:n(512).default,Save:n(510).default}),y()(component,{VBtn:x.a,VCard:k.a,VContainer:w.a,VDialog:$.a,VForm:C.a,VIcon:S.a,VSelect:V.a,VTextField:O.a,VTextarea:j.a})}}]);