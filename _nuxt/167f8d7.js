(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{478:function(t,n,e){"use strict";e.r(n);e(6),e(76),e(31);var o={props:{value:{type:String,default:function(){return null}},prefix:{type:String,default:function(){return null},required:!0},button:{type:Boolean,default:!1},label:{type:String,default:"Anexar foto"},icon:{type:String,default:"mdi-video"}},data:function(){return{loading:!1}},computed:{inputId:function(){return Math.random().toString(36).substring(2,15)}},methods:{uploadFiles:function(t){var n=this;this.loading=!0;for(var e=t.target.files||t.dataTransfer.files,i=0;i<e.length;i++){var o=e[i],r=new FormData;r.append("file",o,o.name),this.$axios.$post("/v1/uploads/videos?prefix="+this.prefix,r,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){n.$emit("input",t.url),n.loading=!1})).catch((function(t){n.$notifier.apiError(t),n.loading=!1}))}},upload:function(){this.$refs["upload-video-input-"+this.inputId].click()}}},r=e(75),l=e(95),c=e.n(l),d=e(191),f=e(193),v=e(192),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("span",{staticClass:"upload-video"},[t.button?e("v-btn",{staticClass:"mb-1",attrs:{color:"primary"},on:{click:t.upload}},[t.loading?e("v-progress-circular",{attrs:{color:"white",indeterminate:"",size:"20"}}):[e("v-icon",{attrs:{left:""}},[t._v(t._s(t.icon))]),t._v(" "+t._s(t.label)+"\n    ")]],2):e("v-btn",{attrs:{color:"primary",icon:""},on:{click:t.upload}},[t.loading?e("v-progress-circular",{attrs:{color:"white",indeterminate:"",size:"20"}}):e("v-icon",[t._v(t._s(t.icon))])],1),t._v(" "),e("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"upload-video-input-"+t.inputId,attrs:{accept:"video/*",type:"file"},on:{change:t.uploadFiles}})],1)}),[],!1,null,null,null);n.default=component.exports;c()(component,{VBtn:d.a,VIcon:f.a,VProgressCircular:v.a})}}]);