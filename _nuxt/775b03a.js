(window.webpackJsonp=window.webpackJsonp||[]).push([[11,21],{507:function(e,t,r){"use strict";r.r(t);var n={props:{invalid:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},block:{type:Boolean,default:!0},label:{type:String,default:"Salvar"}}},o=r(69),l=r(70),c=r.n(l),d=r(502),m=r(207),f=r(208),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.invalid?r("v-alert",{staticClass:"d-flex justify-center",attrs:{type:"error"}},[e._v("\n    Você deve corrigir os erros acima antes de salvar\n  ")]):e._e(),e._v(" "),r("v-btn",{staticClass:"mb-4 mt-4 font-weight-bold text-none",attrs:{"x-large":"",type:"submit",color:"primary",disabled:e.invalid||e.loading,block:e.block,rounded:""}},[e.loading?r("v-progress-circular",{attrs:{color:"secondary",indeterminate:"",size:"20"}}):r("span",[e._v(e._s(e.label))])],1)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VAlert:d.a,VBtn:m.a,VProgressCircular:f.a})},527:function(e,t,r){"use strict";r.d(t,"b",(function(){return l})),r.d(t,"c",(function(){return c}));r(105),r(4);var n=[{value:"feature",label:"Funcionalidade",icon:"mdi-star"},{value:"bug",label:"Correção",icon:"mdi-bug"},{value:"improvement",label:"Melhoria",icon:"mdi-wrench"}],o=function(e){return n.find((function(t){return t.value===e}))},l=function(e){var t=o(e);return t?t.icon:""},c=function(e){var t=o(e);return t?t.label:""};t.a=n},528:function(e,t,r){"use strict";r.d(t,"b",(function(){return o}));r(105),r(4);var n=[{label:"Na fila",value:"backlog"},{label:"Em andamento",value:"in-progress"},{label:"Finalizadas",value:"done"}],o=function(e){var t=n.find((function(t){return t.value===e}));return t?t.label:""};t.a=n},529:function(e,t,r){"use strict";r.d(t,"c",(function(){return l})),r.d(t,"b",(function(){return c}));r(105),r(4);var n=[{value:0,label:"Urgente",color:"error"},{value:1,label:"Alta",color:"warning"},{value:2,label:"Média",color:"info"},{value:3,label:"Baixa",color:"success"}],o=function(e){return n.find((function(p){return p.value===e}))},l=function(e){var t=o(e);return t?t.label:""},c=function(e){var t=o(e);return t?t.color:""};t.a=n},575:function(e,t,r){"use strict";r.r(t);r(11),r(12),r(18),r(19);var n=r(3),o=r(22),l=(r(71),r(4),r(15),r(13),r(184),r(144)),c=r(527),d=r(528),m=r(529);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var v={components:{ValidationObserver:l.a,ValidationProvider:l.b},props:{demand:{type:Object,default:function(){return null}},company:{type:Object,default:function(){return null}}},data:function(){return{demandTypes:c.a,demandStatus:d.a,demandPriorities:m.a,dialog:!1,companies:[],form:{title:"",company:null,body:null,points:null,price:null,type:null,priority:null,progress:0,status:"backlog",paid:!1}}},created:function(){var e=this;this.demand&&Object.keys(this.form).forEach((function(t){void 0!==e.demand[t]&&null!==e.demand[t]&&(e.form[t]=e.demand[t])})),this.company&&(this.form.company=this.company._id),"admin"===this.$auth.user.role&&this.loadCompanies()},methods:{loadCompanies:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$get("/v1/companies");case 2:e.companies=t.sent;case 3:case"end":return t.stop()}}),t)})))()},save:function(){var e=this,form=function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},this.form);this.demand?this.$axios.$patch("/v1/demands/"+this.demand._id,form).then((function(t){e.$notifier.success("Atualizado!"),e.$emit("change",t)})):this.$axios.$post("/v1/demands",form).then((function(t){e.$notifier.success("Salvo!"),e.$emit("change",t)}))},toggleMonth:function(e){this.active_month===e?this.active_month=null:this.active_month=e},removeItem:function(e,t,r){this.form.data[e-1][t-1].splice(r,1)},close:function(){this.$emit("close")}}},y=v,h=r(69),_=r(70),k=r.n(_),x=r(207),O=r(538),$=r(505),j=r(651),w=r(535),C=r(204),P=r(646),V=r(533),S=r(555),T=r(73),component=Object(h.a)(y,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-dialog",{attrs:{value:!0,fullscreen:""}},[r("v-card",{staticClass:"template-form"},[r("v-toolbar",{attrs:{color:"primary",dark:""}},[r("v-btn",{attrs:{icon:"",dark:""},on:{click:e.close}},[r("v-icon",[e._v("mdi-close")])],1),e._v(" "),r("span",[e._v(e._s(e.demand?"Editar demanda":"Adicionar demanda"))])],1),e._v(" "),r("v-container",{staticClass:"pt-6"},[r("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(t){var n=t.validate,o=t.invalid;return[r("v-form",{on:{submit:function(t){t.preventDefault(),n().then(e.save)}}},[null===e.form.type?r("div",[r("h3",{staticClass:"mb-6"},[e._v("Que tipo de demanda é essa?")]),e._v(" "),e._l(e.demandTypes,(function(t){return r("v-btn",{key:t.value,staticClass:"mb-6 text-left",attrs:{color:"primary",large:"",block:""},on:{click:function(r){e.form.type=t.value}}},[r("v-icon",{attrs:{left:""}},[e._v(" "+e._s(t.icon))]),e._v("\n              "+e._s(t.label)+"\n            ")],1)}))],2):null===e.form.priority?r("div",[r("h3",{staticClass:"mb-6"},[e._v("Qual a prioridade dessa demanda?")]),e._v(" "),e._l(e.demandPriorities,(function(t){return r("v-btn",{key:t.value,staticClass:"mb-6 text-left",attrs:{color:t.color,large:"",block:""},on:{click:function(r){e.form.priority=t.value}}},[e._v("\n              "+e._s(t.label)+"\n            ")])}))],2):r("div",["admin"===e.$auth.user.role&&e.companies?r("validation-provider",{attrs:{name:"Cliente",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("v-select",{attrs:{label:"Cliente",items:e.companies,"item-value":"_id","item-text":"name",outlined:"","error-messages":n},model:{value:e.form.company,callback:function(t){e.$set(e.form,"company",t)},expression:"form.company"}})]}}],null,!0)}):e._e(),e._v(" "),r("validation-provider",{attrs:{name:"Título da demanda",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("v-textarea",{attrs:{rows:"1","auto-grow":"",label:"Título da demanda",outlined:"","error-messages":n,focusable:""},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})]}}],null,!0)}),e._v(" "),r("Editor",{attrs:{editable:""},model:{value:e.form.body,callback:function(t){e.$set(e.form,"body",t)},expression:"form.body"}}),e._v(" "),r("validation-provider",{attrs:{name:"Tipo de demanda",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("v-select",{attrs:{label:"Tipo de demanda",items:e.demandTypes,"item-value":"value","item-text":"label",outlined:"","error-messages":n},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}})]}}],null,!0)}),e._v(" "),r("validation-provider",{attrs:{name:"Prioridade",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return[r("v-select",{attrs:{label:"Prioridade",items:e.demandPriorities,"item-value":"value","item-text":"label",outlined:"","error-messages":n},model:{value:e.form.priority,callback:function(t){e.$set(e.form,"priority",t)},expression:"form.priority"}})]}}],null,!0)}),e._v(" "),r("validation-provider",{attrs:{name:"Pontos",rules:"required|min_value:0"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.errors;return["admin"===e.$auth.user.role?r("v-text-field",{attrs:{label:"Pontos",type:"number",outlined:"","error-messages":n},model:{value:e.form.points,callback:function(t){e.$set(e.form,"points",t)},expression:"form.points"}}):e._e()]}}],null,!0)}),e._v(" "),r("div",{staticClass:"text-right"},[r("Save",{attrs:{invalid:o,block:!1,label:"Salvar"}})],1)],1)])]}}])})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;k()(component,{Editor:r(532).default,Save:r(507).default}),k()(component,{VBtn:x.a,VCard:O.a,VContainer:$.a,VDialog:j.a,VForm:w.a,VIcon:C.a,VSelect:P.a,VTextField:V.a,VTextarea:S.a,VToolbar:T.a})}}]);