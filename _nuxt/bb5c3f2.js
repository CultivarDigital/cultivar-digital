(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{673:function(t,e,n){"use strict";n.r(e);var o=n(589),r=(n(85),n(4),n(8),n(7),n(10),n(13),n(11),n(14),n(1));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={props:{demand:{type:Object,default:function(){return null}},proposal:{type:Object,default:function(){return null}}},data:function(){return{form:{body:null,demand:this.demand?this.demand._id:null,proposal:this.proposal?this.proposal._id:null}}},methods:{save:function(){var t=this,form=c(c({},this.form),{},{customer:this.customer._id});this.$axios.$post("/v1/comments",form).then((function(e){t.$notifier.success("Salvo!"),t.$emit("input",e),t.body=null}))}}},d=n(31),component=Object(d.a)(f,(function(){var t=this,e=t._self._c;return e("div",[e(o.a,{on:{submit:function(e){return e.preventDefault(),t.save.apply(null,arguments)}}},[e("Editor",{attrs:{editable:"","fixed-text":"",labels:{text:{icon:"mdi-comment-text-outline",label:"Comentário"}}},model:{value:t.form.body,callback:function(e){t.$set(t.form,"body",e)},expression:"form.body"}}),t._v(" "),t.form.body&&t.form.body.find((function(t){return t.content}))?e("div",[e("Save",{attrs:{block:!1,label:"Enviar"}})],1):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Editor:n(604).default,Save:n(359).default})}}]);