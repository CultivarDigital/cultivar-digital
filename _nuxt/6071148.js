(window.webpackJsonp=window.webpackJsonp||[]).push([[16,4,18,20,31,33,34,35,36,37],{544:function(t,e,n){"use strict";n.r(e);var o=n(218),l=n(542),r=n(193),c={methods:{close:function(){this.$emit("close")}}},d=n(62),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e(l.a,{staticClass:"d-flex align-center justify-space-between"},[e("div",{staticClass:"d-flex align-center"},[e("img",{staticClass:"logo",attrs:{src:n(233)}}),t._v(" "),e("span",{staticClass:"ml-3"},[e("strong",[t._v("Cultivar")]),t._v(" Digital")])]),t._v(" "),e(o.a,{attrs:{icon:""},on:{click:t.close}},[e(r.a,[t._v("mdi-close")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},545:function(t,e,n){"use strict";n.r(e);var o=n(540),l=n(218),r=n(214),c={props:{invalid:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},block:{type:Boolean,default:!0},label:{type:String,default:"Salvar"}}},d=n(62),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",[t.invalid?e(o.a,{staticClass:"d-flex justify-center",attrs:{type:"error"}},[t._v("\n    Você deve corrigir os erros acima antes de salvar\n  ")]):t._e(),t._v(" "),e(l.a,{staticClass:"mb-4 mt-4 font-weight-bold text-none",attrs:{"x-large":"",type:"submit",color:"success",disabled:t.invalid||t.loading,block:t.block,rounded:""}},[t.loading?e(r.a,{attrs:{color:"secondary",indeterminate:"",size:"20"}}):e("span",[t._v(t._s(t.label))])],1)],1)}),[],!1,null,null,null);e.default=component.exports},550:function(t,e,n){var content=n(564);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("2f3f7f49",content,!0,{sourceMap:!1})},551:function(t,e,n){"use strict";n.r(e);var o={props:{item:{type:Object,default:null},showPrice:{type:Boolean,default:!0}}},l=n(62),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return t.item.estimate_in_days>0?e("div",{staticClass:"caption secondary--text text--lighten-4"},[t.item.billable&&t.item.price&&t.showPrice?e("div",[t._v("\n    "+t._s(t._f("moeda")(t.item.price))+" ("+t._s(t.$utils.plural(t.item.estimate_in_days,"dia"))+")\n  ")]):e("div",[t._v("\n    "+t._s(t.$utils.plural(t.item.estimate_in_days,"dia"))+"\n  ")])]):t._e()}),[],!1,null,null,null);e.default=component.exports},552:function(t,e,n){"use strict";n.r(e);var o=n(218),l=n(193),r=n(583),c=(n(26),n(55),n(192),{props:{editable:{type:Boolean,default:!1},value:{type:Array,default:function(){return[{type:"text",content:""}]}},labels:{type:Object,default:function(){return{}}}},data:function(){return{blockTypes:{text:"Texto",image:"Imagem",video:"Vídeo",audio:"Áudio",file:"Arquivo"},blocks:this.value||[]}},computed:{itemsLabels:function(){return Object.assign({text:{label:"Texto",icon:"mdi-format-text"},image:{label:"Imagem",icon:"mdi-image"},video:{label:"Vídeo",icon:"mdi-youtube"},audio:{label:"Áudio",icon:"mdi-microphone"},file:{label:"Arquivo",icon:"mdi-attachment"}},this.labels)},filesURL:function(){return"https://cultivar.sfo3.cdn.digitaloceanspaces.com"}},watch:{blocks:function(){this.$emit("input",this.blocks)},value:function(){this.blocks=this.value||[]}},methods:{addText:function(){this.blocks||(this.blocks=[]),this.blocks.push({type:"text",content:""})},calcStats:function(){this.$emit("calc-stats")}}}),d=n(62),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",[t._l(t.blocks,(function(n,c){return["text"===n.type?e("div",{key:"text-"+c,staticClass:"mb-6"},[t.editable?e("TextEditor",{attrs:{"upload-prefix":"post"},on:{input:t.calcStats},model:{value:n.content,callback:function(e){t.$set(n,"content",e)},expression:"block.content"}}):e("div",{domProps:{innerHTML:t._s(n.content)}})],1):"image"===n.type?e("div",{key:"image-"+c,staticClass:"mb-6 text-center"},[n.content?e("img",{staticStyle:{"max-width":"100%"},attrs:{src:t.filesURL+n.content.replace("/images","/averages")}}):t._e(),t._v(" "),t.editable&&null!=n.caption&&void 0!==n.caption?e(r.a,{attrs:{rows:"1","auto-grow":"",label:"Legenda da imagem","hide-details":"auto"},model:{value:n.caption,callback:function(e){t.$set(n,"caption",e)},expression:"block.caption"}}):n.caption?e("div",[e("i",[e("small",[t._v(t._s(n.caption))])])]):t._e()],1):"video"===n.type?e("div",{key:"video-"+c,staticClass:"mb-6 text-center"},[e("video",{staticStyle:{"max-width":"100%"},attrs:{src:t.filesURL+n.content,controls:""}},[t._v("\n        Seu navegador não consegue carregar este vídeo.\n      ")]),t._v(" "),t.editable&&null!=n.caption&&void 0!==n.caption?e(r.a,{attrs:{rows:"1","auto-grow":"",label:"Legenda do vídeo","hide-details":"auto"},model:{value:n.caption,callback:function(e){t.$set(n,"caption",e)},expression:"block.caption"}}):n.caption?e("div",[e("i",[e("small",[t._v(t._s(n.caption))])])]):t._e()],1):"audio"===n.type?e("div",{key:"audio-"+c,staticClass:"mb-6 text-center"},[e("audio",{staticStyle:{"max-width":"100%"},attrs:{src:t.filesURL+n.content,controls:""}},[t._v("\n        Seu navegador não consegue carregar este áudio.\n      ")]),t._v(" "),t.editable&&null!=n.caption&&void 0!==n.caption?e(r.a,{attrs:{rows:"1","auto-grow":"",label:"Legenda do áudio","hide-details":"auto"},model:{value:n.caption,callback:function(e){t.$set(n,"caption",e)},expression:"block.caption"}}):n.caption?e("div",[e("i",[e("small",[t._v(t._s(n.caption))])])]):t._e()],1):"file"===n.type?e("div",{key:"file-"+c,staticClass:"mb-6 text-center"},[n.content?e(o.a,{attrs:{href:t.filesURL+n.content,target:"_blank",color:"primary",block:"",large:""}},[e(l.a,{attrs:{left:""}},[t._v("mdi-attachment")]),t._v("\n        Baixar Arquivo\n      ")],1):t._e(),t._v(" "),t.editable&&null!=n.caption&&void 0!==n.caption?e(r.a,{attrs:{rows:"1","auto-grow":"",label:"Legenda do arquivo","hide-details":"auto"},model:{value:n.caption,callback:function(e){t.$set(n,"caption",e)},expression:"block.caption"}}):n.caption?e("div",[e("i",[e("small",[t._v(t._s(n.caption))])])]):t._e()],1):t._e(),t._v(" "),t.editable?e("div",{key:"remove-"+c,staticClass:"text-center mb-10 mt-n3"},[e(o.a,{attrs:{dark:"","x-small":""},on:{click:function(e){return t.blocks.splice(c,1)}}},[e(l.a,{attrs:{left:"","x-small":""}},[t._v("mdi-delete")]),t._v("\n        Remover "+t._s(t.blockTypes[n.type])+"\n      ")],1),t._v(" "),"text"!==n.type&&null!==n.caption&&void 0!==n.caption?e(o.a,{attrs:{dark:"","x-small":""},on:{click:function(t){n.caption=null}}},[e(l.a,{attrs:{left:"","x-small":""}},[t._v("mdi-delete")]),t._v("\n        Remover legenda\n      ")],1):t._e(),t._v(" "),"text"===n.type||null!==n.caption&&void 0!==n.caption?t._e():e(o.a,{attrs:{dark:"","x-small":""},on:{click:function(t){n.caption=""}}},[e(l.a,{attrs:{left:"","x-small":""}},[t._v("mdi-closed-caption-outline")]),t._v("\n        Adicionar legenda\n      ")],1)],1):t._e()]})),t._v(" "),t.editable?e("div",{staticClass:"mb-6"},[e("div",[t._v("Adicionar:")]),t._v(" "),e("span",[e(o.a,{staticClass:"mb-1",attrs:{color:"primary"},on:{click:t.addText}},[e(l.a,{attrs:{left:""}},[t._v(t._s(t.itemsLabels.text.icon))]),t._v(" "+t._s(t.itemsLabels.text.label)+"\n      ")],1)],1),t._v(" "),e("UploadImage",{staticClass:"mb-6",attrs:{prefix:"posts",button:"",icon:t.itemsLabels.image.icon,label:t.itemsLabels.image.label},on:{input:function(image){return t.blocks.push({type:"image",content:image})}}}),t._v(" "),e("UploadVideo",{staticClass:"mb-6",attrs:{prefix:"posts",button:"",icon:t.itemsLabels.video.icon,label:t.itemsLabels.video.label},on:{input:function(video){return t.blocks.push({type:"video",content:video})}}}),t._v(" "),e("UploadAudio",{staticClass:"mb-6",attrs:{prefix:"posts",button:"",icon:t.itemsLabels.audio.icon,label:t.itemsLabels.audio.label},on:{input:function(audio){return t.blocks.push({type:"audio",content:audio})}}}),t._v(" "),e("UploadFile",{staticClass:"mb-6",attrs:{prefix:"posts",button:"",icon:t.itemsLabels.file.icon,label:t.itemsLabels.file.label},on:{input:function(e){return t.blocks.push({type:"file",content:e})}}})],1):t._e()],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TextEditor:n(568).default,UploadImage:n(569).default,UploadVideo:n(570).default,UploadAudio:n(571).default,UploadFile:n(572).default})},555:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return c}));n(102),n(4);var o=[{value:"feature",label:"Funcionalidade",icon:"mdi-star"},{value:"bug",label:"Correção",icon:"mdi-bug"},{value:"improvement",label:"Melhoria",icon:"mdi-wrench"}],l=function(t){return o.find((function(e){return e.value===t}))},r=function(t){var e=l(t);return e?e.icon:""},c=function(t){var e=l(t);return e?e.label:""};e.a=o},556:function(t,e,n){"use strict";n.d(e,"b",(function(){return l}));n(102),n(4);var o=[{label:"Na fila",value:"backlog"},{label:"Em andamento",value:"in-progress"},{label:"Finalizadas",value:"done"}],l=function(t){var e=o.find((function(e){return e.value===t}));return e?e.label:""};e.a=o},557:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return c}));n(102),n(4);var o=[{value:0,label:"Urgente",color:"error"},{value:1,label:"Alta",color:"warning"},{value:2,label:"Média",color:"info"},{value:3,label:"Baixa",color:"success"}],l=function(t){return o.find((function(p){return p.value===t}))},r=function(t){var e=l(t);return e?e.label:""},c=function(t){var e=l(t);return e?e.color:""};e.a=o},563:function(t,e,n){"use strict";n(550)},564:function(t,e,n){var o=n(19)((function(i){return i[1]}));o.push([t.i,'html{scroll-behavior:smooth;scroll-padding-top:56px}section{min-height:calc(100vh - 56px)}@media(max-width:960px){section{min-height:calc(100vh - 56px)}}.tertiary--text{opacity:.4}.logo{width:42px}@media(min-width:960px){.logo{width:64px}}.nav-btn{box-shadow:none!important}@media(max-width:960px){.nav-btn{display:none}}.container{max-width:960px;padding:16px}.v-tab{font-size:12px!important}.v-slide-group__next,.v-slide-group__prev{display:none!important}.theme--light .v-application{color:#2b2b2b!important}.theme--light .v-app-bar.v-toolbar.v-sheet{background-color:#fff!important}.theme--dark .v-application{color:#fff!important}.theme--dark .v-app-bar.v-toolbar.v-sheet{background-color:#2b2b2b!important}.ql-toolbar.ql-snow{background-color:hsla(0,0%,100%,.8)!important;border-color:hsla(0,0%,100%,.24)!important;border-top-left-radius:8px;border-top-right-radius:8px}.ql-editor.ql-blank:before{color:hsla(0,0%,100%,.4)!important}.quill-editor .ql-container{border-bottom-left-radius:8px;border-bottom-right-radius:8px;border-color:hsla(0,0%,100%,.24)!important;font-family:"Roboto",sans-serif;font-size:16px;height:auto}.quill-editor .ql-container .ql-editor{max-height:500px!important;min-height:160px!important;overflow-y:auto!important;padding:16px}.quill-editor .ql-container .ql-editor img{display:block;margin-bottom:16px;margin-top:16px;max-width:100%}.quill-editor .ql-container .ql-editor h1,.quill-editor .ql-container .ql-editor h2,.quill-editor .ql-container .ql-editor h3,.quill-editor .ql-container .ql-editor h4,.quill-editor .ql-container .ql-editor h5,.quill-editor .ql-container .ql-editor h6,.quill-editor .ql-container .ql-editor p{margin-bottom:16px!important}.quill-editor.editor-content .ql-container .ql-editor{max-height:none!important;min-height:0!important;min-height:auto!important;padding:0}',""]),o.locals={},t.exports=o},568:function(t,e,n){"use strict";n.r(e);var o={props:{value:{type:String,default:"",required:!0}},data:function(){return{content:"",hasChanged:!1,savedAlert:!1}},created:function(){this.content=this.value},methods:{changed:function(){this.$emit("input",this.content)}}},l=(n(563),n(62)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mb-3"},[e("quill-editor",{ref:"quillEdit",on:{input:t.changed},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1)}),[],!1,null,null,null);e.default=component.exports},569:function(t,e,n){"use strict";n.r(e);var o=n(218),l=n(193),r=n(214),c=(n(4),n(76),n(40),{props:{value:{type:String,default:function(){return null}},prefix:{type:String,default:function(){return null},required:!0},button:{type:Boolean,default:!1},label:{type:String,default:"Anexar foto"},icon:{type:String,default:"mdi-image"},disabled:{type:Boolean,default:!1}},data:function(){return{loading:!1}},computed:{inputId:function(){return Math.random().toString(36).substring(2,15)}},methods:{uploadFiles:function(t){var e=this;this.loading=!0;for(var n=t.target.files||t.dataTransfer.files,i=0;i<n.length;i++){var o=n[i],l=new FormData;l.append("file",o,o.name),this.$axios.$post("/v1/uploads/images?prefix="+this.prefix,l,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){e.$emit("input",t.url),e.loading=!1})).catch((function(t){e.$notifier.apiError(t),e.loading=!1}))}},upload:function(){this.$refs["upload-image-input-"+this.inputId].click()}}}),d=n(62),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("span",{staticClass:"upload-image"},[t.button?e(o.a,{staticClass:"mb-1",attrs:{color:"primary"},on:{click:t.upload}},[t.loading?e(r.a,{attrs:{color:"white",indeterminate:"",size:"20"}}):[e(l.a,{attrs:{left:""}},[t._v(t._s(t.icon))]),t._v(" "+t._s(t.label)+"\n    ")]],2):e(o.a,{attrs:{color:"primary",icon:""},on:{click:t.upload}},[t.loading?e(r.a,{attrs:{color:"white",indeterminate:"",size:"20"}}):e(l.a,[t._v(t._s(t.icon))])],1),t._v(" "),e("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"upload-image-input-"+t.inputId,attrs:{accept:"image/*",type:"file"},on:{change:t.uploadFiles}})],1)}),[],!1,null,null,null);e.default=component.exports},570:function(t,e,n){"use strict";n.r(e);var o=n(218),l=n(193),r=n(214),c=(n(4),n(76),n(40),{props:{value:{type:String,default:function(){return null}},prefix:{type:String,default:function(){return null},required:!0},button:{type:Boolean,default:!1},label:{type:String,default:"Anexar foto"},icon:{type:String,default:"mdi-video"}},data:function(){return{loading:!1}},computed:{inputId:function(){return Math.random().toString(36).substring(2,15)}},methods:{uploadFiles:function(t){var e=this;this.loading=!0;for(var n=t.target.files||t.dataTransfer.files,i=0;i<n.length;i++){var o=n[i],l=new FormData;l.append("file",o,o.name),this.$axios.$post("/v1/uploads/videos?prefix="+this.prefix,l,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){e.$emit("input",t.url),e.loading=!1})).catch((function(t){e.$notifier.apiError(t),e.loading=!1}))}},upload:function(){this.$refs["upload-video-input-"+this.inputId].click()}}}),d=n(62),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("span",{staticClass:"upload-video"},[t.button?e(o.a,{staticClass:"mb-1",attrs:{color:"primary"},on:{click:t.upload}},[t.loading?e(r.a,{attrs:{color:"white",indeterminate:"",size:"20"}}):[e(l.a,{attrs:{left:""}},[t._v(t._s(t.icon))]),t._v(" "+t._s(t.label)+"\n    ")]],2):e(o.a,{attrs:{color:"primary",icon:""},on:{click:t.upload}},[t.loading?e(r.a,{attrs:{color:"white",indeterminate:"",size:"20"}}):e(l.a,[t._v(t._s(t.icon))])],1),t._v(" "),e("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"upload-video-input-"+t.inputId,attrs:{accept:"video/*",type:"file"},on:{change:t.uploadFiles}})],1)}),[],!1,null,null,null);e.default=component.exports},571:function(t,e,n){"use strict";n.r(e);var o=n(218),l=n(193),r=n(214),c=(n(4),n(76),n(40),{props:{value:{type:String,default:function(){return null}},prefix:{type:String,default:function(){return null},required:!0},button:{type:Boolean,default:!1},label:{type:String,default:"Anexar áudio"},icon:{type:String,default:"mdi-audio"}},data:function(){return{loading:!1}},computed:{inputId:function(){return Math.random().toString(36).substring(2,15)}},methods:{uploadFiles:function(t){var e=this;this.loading=!0;for(var n=t.target.files||t.dataTransfer.files,i=0;i<n.length;i++){var o=n[i],l=new FormData;l.append("file",o,o.name),this.$axios.$post("/v1/uploads/audios?prefix="+this.prefix,l,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){e.$emit("input",t.url),e.loading=!1})).catch((function(t){e.$notifier.apiError(t),e.loading=!1}))}},upload:function(){this.$refs["upload-audio-input-"+this.inputId].click()}}}),d=n(62),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("span",{staticClass:"upload-audio"},[t.button?e(o.a,{staticClass:"mb-1",attrs:{color:"primary"},on:{click:t.upload}},[t.loading?e(r.a,{attrs:{color:"white",indeterminate:"",size:"20"}}):[e(l.a,{attrs:{left:""}},[t._v(t._s(t.icon))]),t._v(" "+t._s(t.label)+"\n    ")]],2):e(o.a,{attrs:{color:"primary",icon:""},on:{click:t.upload}},[t.loading?e(r.a,{attrs:{color:"white",indeterminate:"",size:"20"}}):e(l.a,[t._v(t._s(t.icon))])],1),t._v(" "),e("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"upload-audio-input-"+t.inputId,attrs:{accept:"audio/*",type:"file"},on:{change:t.uploadFiles}})],1)}),[],!1,null,null,null);e.default=component.exports},572:function(t,e,n){"use strict";n.r(e);var o=n(218),l=n(193),r=n(214),c=(n(4),n(76),n(40),{props:{value:{type:String,default:function(){return null}},prefix:{type:String,default:function(){return null},required:!0},button:{type:Boolean,default:!1},label:{type:String,default:"Anexar arquivo"},icon:{type:String,default:"mdi-attachment"},disabled:{type:Boolean,default:!1}},data:function(){return{loading:!1}},computed:{inputId:function(){return Math.random().toString(36).substring(2,15)}},methods:{uploadFiles:function(t){var e=this;this.loading=!0;for(var n=t.target.files||t.dataTransfer.files,i=0;i<n.length;i++){var o=n[i],l=new FormData;l.append("file",o,o.name),this.$axios.$post("/v1/uploads/files?prefix="+this.prefix,l,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){e.$emit("input",t.url),e.loading=!1})).catch((function(t){e.$notifier.apiError(t),e.loading=!1}))}},upload:function(){this.$refs["upload-file-input-"+this.inputId].click()}}}),d=n(62),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("span",{staticClass:"upload-file"},[t.button?e(o.a,{staticClass:"mb-1",attrs:{color:"primary"},on:{click:t.upload}},[t.loading?e(r.a,{attrs:{color:"white",indeterminate:"",size:"20"}}):[e(l.a,{attrs:{left:""}},[t._v(t._s(t.icon))]),t._v(" "+t._s(t.label)+"\n    ")]],2):e(o.a,{attrs:{color:"primary",icon:""},on:{click:t.upload}},[t.loading?e(r.a,{attrs:{color:"white",indeterminate:"",size:"20"}}):e(l.a,[t._v(t._s(t.icon))])],1),t._v(" "),e("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"upload-file-input-"+t.inputId,attrs:{type:"file"},on:{change:t.uploadFiles}})],1)}),[],!1,null,null,null);e.default=component.exports},574:function(t,e,n){"use strict";n.r(e);var o=n(218),l=n(609),r=n(542),c=n(702),d=n(581),f=n(193),m=n(694),v=n(693),h=n(579),_=n(583),y=(n(14),n(13),n(17),n(18),n(3)),x=(n(4),n(15),n(10),n(192),n(152)),k=n(555),w=n(556),$=n(557);function S(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function C(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?S(Object(source),!0).forEach((function(e){Object(y.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):S(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O={components:{ValidationObserver:x.a,ValidationProvider:x.b},props:{demand:{type:Object,default:function(){return null}}},data:function(){return{demandTypes:k.a,demandStatus:w.a,demandPriorities:$.a,dialog:!1,form:{title:"",body:null,points:0,price:null,type:null,priority:null,progress:0,status:"backlog",paid:!1,billable:null,estimated:null}}},computed:{customer:function(){return this.$store.state.customer},estimate:function(){return this.form.points&&this.customer?{estimate_in_days:Math.round(this.form.points/this.customer.points_per_day),price:this.form.points*this.customer.point_price,billable:this.form.billable}:null}},created:function(){var t=this;this.demand&&Object.keys(this.form).forEach((function(e){void 0!==t.demand[e]&&null!==t.demand[e]&&(t.form[e]=t.demand[e])}))},methods:{save:function(){var t=this,form=C({},this.form);this.demand?this.$axios.$patch("/v1/demands/"+this.demand._id,form).then((function(e){t.$notifier.success("Atualizado!"),t.$emit("input",e)})):this.$axios.$post("/v1/demands",C(C({},form),{},{customer:this.customer._id})).then((function(e){t.$notifier.success("Salvo!"),t.$emit("input",e)}))},toggleMonth:function(t){this.active_month===t?this.active_month=null:this.active_month=t},removeItem:function(t,e,n){this.form.data[t-1][e-1].splice(n,1)},pointsChanged:function(){this.setEstimated(),this.setBillable()},setEstimated:function(){this.form.estimated=this.form.points>0},setBillable:function(){null===this.form.billable&&(this.form.billable=this.form.points>0)},close:function(){this.$emit("close")},remove:function(t){this.$emit("remove",t)}}},j=n(62),component=Object(j.a)(O,(function(){var t=this,e=t._self._c;return e(c.a,{attrs:{value:!0,fullscreen:"",persistent:""}},[e(l.a,{staticClass:"template-form",attrs:{color:"secondary"}},[e("DialogHeader",{on:{close:t.close}}),t._v(" "),e(r.a,{staticClass:"pt-6"},[e("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(n){var l=n.validate,r=n.invalid;return[e(d.a,{on:{submit:function(e){e.preventDefault(),l().then(t.save)}}},[null===t.form.type?e("div",[e("h3",{staticClass:"mb-6"},[t._v("Que tipo de demanda é essa?")]),t._v(" "),t._l(t.demandTypes,(function(n){return e(o.a,{key:n.value,staticClass:"mb-6 text-left",attrs:{color:"primary",large:"",block:""},on:{click:function(e){t.form.type=n.value}}},[e(f.a,{attrs:{left:""}},[t._v(" "+t._s(n.icon))]),t._v("\n              "+t._s(n.label)+"\n            ")],1)}))],2):null===t.form.priority?e("div",[e("h3",{staticClass:"mb-6"},[t._v("Qual a prioridade dessa demanda?")]),t._v(" "),t._l(t.demandPriorities,(function(n){return e(o.a,{key:n.value,staticClass:"mb-6 text-left",attrs:{color:n.color,large:"",block:""},on:{click:function(e){t.form.priority=n.value}}},[t._v("\n              "+t._s(n.label)+"\n            ")])}))],2):e("div",[e("validation-provider",{attrs:{name:"Título da demanda",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(n){var o=n.errors;return[e(_.a,{attrs:{rows:"1","auto-grow":"",label:"Título da demanda",outlined:"","error-messages":o,focusable:""},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})]}}],null,!0)}),t._v(" "),e("Editor",{attrs:{editable:""},model:{value:t.form.body,callback:function(e){t.$set(t.form,"body",e)},expression:"form.body"}}),t._v(" "),e("validation-provider",{attrs:{name:"Tipo de demanda",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(n){var o=n.errors;return[e(m.a,{attrs:{label:"Tipo de demanda",items:t.demandTypes,"item-value":"value","item-text":"label",outlined:"","error-messages":o},on:{change:t.setBillable},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}})]}}],null,!0)}),t._v(" "),e("validation-provider",{attrs:{name:"Prioridade",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(n){var o=n.errors;return[e(m.a,{attrs:{label:"Prioridade",items:t.demandPriorities,"item-value":"value","item-text":"label",outlined:"","error-messages":o},model:{value:t.form.priority,callback:function(e){t.$set(t.form,"priority",e)},expression:"form.priority"}})]}}],null,!0)}),t._v(" "),"admin"===t.$auth.user.role?e("validation-provider",{attrs:{name:"Status da demanda",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(n){var o=n.errors;return[e(m.a,{attrs:{label:"Status da demanda",items:t.demandStatus,"item-value":"value","item-text":"label",outlined:"","error-messages":o},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})]}}],null,!0)}):t._e(),t._v(" "),"admin"===t.$auth.user.role?e("validation-provider",{attrs:{name:"Pontos",rules:"required|min_value:0"},scopedSlots:t._u([{key:"default",fn:function(n){var o=n.errors;return[e(h.a,{attrs:{label:"Pontos",type:"number",outlined:"","error-messages":o},on:{input:t.pointsChanged},model:{value:t.form.points,callback:function(e){t.$set(t.form,"points",e)},expression:"form.points"}})]}}],null,!0)}):t._e(),t._v(" "),"admin"===t.$auth.user.role&&t.form.points<1?e(v.a,{attrs:{label:"Marcar como estimada",color:"success"},model:{value:t.form.estimated,callback:function(e){t.$set(t.form,"estimated",e)},expression:"form.estimated"}}):t._e(),t._v(" "),t.form.points>0?e("div",[e(v.a,{attrs:{label:"Você vai cobrar por essa demanda?",outlined:"",color:"success"},model:{value:t.form.billable,callback:function(e){t.$set(t.form,"billable",e)},expression:"form.billable"}}),t._v(" "),"admin"===t.$auth.user.role&&t.estimate&&t.estimate.estimate_in_days>0?e("div",[e("EstimateValues",{attrs:{item:t.estimate}})],1):t._e()],1):t._e(),t._v(" "),e("div",{staticClass:"d-flex justify-space-between align-center"},["admin"===t.$auth.user.role&&t.demand&&!t.demand.approved?e("Remove",{on:{confirm:t.remove}}):t._e(),t._v(" "),e("Save",{attrs:{invalid:r,label:"Salvar demanda",block:!1}})],1)],1)])]}}])})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DialogHeader:n(544).default,Editor:n(552).default,EstimateValues:n(551).default,Remove:n(575).default,Save:n(545).default})},575:function(t,e,n){"use strict";n.r(e);var o=n(218),l=n(609),r=n(543),c=n(702),d=n(193),f=n(535),m={props:{button:{type:Boolean,default:!1},label:{type:String,default:"Tem certeza disso?"},hint:{type:String,default:"Esta alteração não pode ser desfeita"},icon:{type:String,default:"mdi-delete"},buttonLabel:{type:String,default:"Remover"}},data:function(){return{dialog:!1}},methods:{confirm:function(){this.dialog=!1,this.$emit("confirm")},cancel:function(){this.dialog=!1,this.$emit("cancel")}}},v=n(62),component=Object(v.a)(m,(function(){var t=this,e=t._self._c;return e(c.a,{attrs:{"max-width":"290"},on:{"click:outside":function(e){t.removeComment=null}},scopedSlots:t._u([{key:"activator",fn:function(n){var l=n.on,r=n.attrs;return[t.button?e(o.a,t._g(t._b({attrs:{small:""}},"v-btn",r,!1),l),[e(d.a,{attrs:{left:""}},[t._v(t._s(t.icon))]),t._v(" "+t._s(t.buttonLabel)+"\n    ")],1):e(o.a,t._g(t._b({attrs:{icon:"",small:""}},"v-btn",r,!1),l),[e(d.a,[t._v(t._s(t.icon))])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),e(l.a,[e(r.c,{staticClass:"text-h5"},[t._v("\n      "+t._s(t.label)+"\n    ")]),t._v(" "),e(r.b,[t._v(" "+t._s(t.hint)+" ")]),t._v(" "),e(r.a,{staticClass:"pa-3"},[e(f.a),t._v(" "),e(o.a,{attrs:{color:"error",large:""},on:{click:t.cancel}},[t._v(" Não ")]),t._v(" "),e(o.a,{attrs:{color:"success",large:""},on:{click:t.confirm}},[t._v(" Sim ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);