(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{662:function(t,e,n){"use strict";n.r(e);var o=n(240),r=n(155),l=n(241),d=(n(4),n(78),n(26),{props:{value:{type:String,default:function(){return null}},prefix:{type:String,default:function(){return null},required:!0},button:{type:Boolean,default:!1},label:{type:String,default:"Anexar foto"},icon:{type:String,default:"mdi-image"},color:{type:String,default:"primary"},disabled:{type:Boolean,default:!1}},data:function(){return{loading:!1}},computed:{inputId:function(){return Math.random().toString(36).substring(2,15)}},methods:{uploadFiles:function(t){var e=this;this.loading=!0;for(var n=t.target.files||t.dataTransfer.files,i=0;i<n.length;i++){var o=n[i],r=new FormData;r.append("file",o,o.name),this.$axios.$post("/v1/uploads/images?prefix="+this.prefix,r,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){e.$emit("input",t.url),e.loading=!1})).catch((function(t){e.$notifier.apiError(t),e.loading=!1}))}},upload:function(){this.$refs["upload-image-input-"+this.inputId].click()}}}),c=n(31),component=Object(c.a)(d,(function(){var t=this,e=t._self._c;return e("span",{staticClass:"upload-image"},[t.button?e(o.a,{staticClass:"mb-1",attrs:{color:t.color},on:{click:t.upload}},[t.loading?e(l.a,{attrs:{color:"white",indeterminate:"",size:"20"}}):[e(r.a,{attrs:{left:""}},[t._v(t._s(t.icon))]),t._v(" "+t._s(t.label)+"\n    ")]],2):e(o.a,{attrs:{color:t.color,icon:""},on:{click:t.upload}},[t.loading?e(l.a,{attrs:{color:"white",indeterminate:"",size:"20"}}):e(r.a,[t._v(t._s(t.icon))])],1),t._v(" "),e("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"upload-image-input-"+t.inputId,attrs:{accept:"image/*",type:"file"},on:{change:t.uploadFiles}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);