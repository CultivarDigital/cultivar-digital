(window.webpackJsonp=window.webpackJsonp||[]).push([[13,7,11,12,16,23],{505:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return m}));var r=n(521),o=n(2),l=Object(o.h)("v-card__actions"),c=Object(o.h)("v-card__subtitle"),d=Object(o.h)("v-card__text"),m=Object(o.h)("v-card__title");r.a},506:function(t,e,n){"use strict";n.r(e);var r={methods:{close:function(){this.$emit("close")}}},o=n(69),l=n(70),c=n.n(l),d=n(206),m=n(504),v=n(527),f=n(203),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-container",{staticClass:"d-flex align-center justify-space-between"},[r("div",{staticClass:"d-flex align-center"},[r("img",{staticClass:"logo",attrs:{src:n(230)}}),t._v(" "),r("span",{staticClass:"ml-3"},[r("strong",[t._v("Cultivar")]),t._v(" Digital")])]),t._v(" "),r("v-btn",{attrs:{icon:""},on:{click:t.close}},[r("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),r("v-divider")],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VContainer:m.a,VDivider:v.a,VIcon:f.a})},507:function(t,e,n){"use strict";n.r(e);var r={props:{invalid:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},block:{type:Boolean,default:!0},label:{type:String,default:"Salvar"}}},o=n(69),l=n(70),c=n.n(l),d=n(501),m=n(206),v=n(207),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.invalid?n("v-alert",{staticClass:"d-flex justify-center",attrs:{type:"error"}},[t._v("\n    Você deve corrigir os erros acima antes de salvar\n  ")]):t._e(),t._v(" "),n("v-btn",{staticClass:"mb-4 mt-4 font-weight-bold text-none",attrs:{"x-large":"",type:"submit",color:"primary",disabled:t.invalid||t.loading,block:t.block,rounded:""}},[t.loading?n("v-progress-circular",{attrs:{color:"secondary",indeterminate:"",size:"20"}}):n("span",[t._v(t._s(t.label))])],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VAlert:d.a,VBtn:m.a,VProgressCircular:v.a})},510:function(t,e,n){"use strict";n.r(e);var r=n(69),o=n(70),l=n.n(o),c=n(207),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center"},[e("v-progress-circular",{attrs:{indeterminate:""}})],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VProgressCircular:c.a})},512:function(t,e,n){"use strict";n.r(e);var r={props:{color:{type:String,default:null},message:{type:String,default:null}}},o=n(69),l=n(70),c=n.n(l),d=n(501),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center",on:{click:function(e){return t.$emit("click")}}},[n("v-alert",{attrs:{color:t.color}},[t._v(t._s(t.message))])],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VAlert:d.a})},516:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return c}));n(104),n(4);var r=[{value:"feature",label:"Funcionalidade",icon:"mdi-star"},{value:"bug",label:"Correção",icon:"mdi-bug"},{value:"improvement",label:"Melhoria",icon:"mdi-wrench"}],o=function(t){return r.find((function(e){return e.value===t}))},l=function(t){var e=o(t);return e?e.icon:""},c=function(t){var e=o(t);return e?e.label:""};e.a=r},517:function(t,e,n){"use strict";n.d(e,"b",(function(){return o}));n(104),n(4);var r=[{label:"Na fila",value:"backlog"},{label:"Em andamento",value:"in-progress"},{label:"Finalizadas",value:"done"}],o=function(t){var e=r.find((function(e){return e.value===t}));return e?e.label:""};e.a=r},518:function(t,e,n){"use strict";n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return c}));n(104),n(4);var r=[{value:0,label:"Urgente",color:"error"},{value:1,label:"Alta",color:"warning"},{value:2,label:"Média",color:"info"},{value:3,label:"Baixa",color:"success"}],o=function(t){return r.find((function(p){return p.value===t}))},l=function(t){var e=o(t);return e?e.label:""},c=function(t){var e=o(t);return e?e.color:""};e.a=r},529:function(t,e,n){"use strict";n.r(e);n(11),n(12),n(18),n(19);var r=n(3),o=(n(4),n(15),n(13),n(183),n(143)),l=n(516),c=n(517),d=n(518);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={components:{ValidationObserver:o.a,ValidationProvider:o.b},props:{demand:{type:Object,default:function(){return null}}},data:function(){return{demandTypes:l.a,demandStatus:c.a,demandPriorities:d.a,dialog:!1,form:{title:"",body:null,points:null,price:null,type:null,priority:null,progress:0,status:"backlog",paid:!1}}},computed:{company:function(){return this.$store.state.company},estimate:function(){return this.form.points&&this.company?{estimate_in_days:Math.round(this.form.points/this.company.points_per_day),price:this.form.points*this.company.point_price}:null}},created:function(){var t=this;this.demand&&Object.keys(this.form).forEach((function(e){void 0!==t.demand[e]&&null!==t.demand[e]&&(t.form[e]=t.demand[e])}))},methods:{save:function(){var t=this,form=v({},this.form);this.demand?this.$axios.$patch("/v1/demands/"+this.demand._id,form).then((function(e){t.$notifier.success("Atualizado!"),t.$emit("input",e)})):this.$axios.$post("/v1/demands",v(v({},form),{},{company:this.company._id})).then((function(e){t.$notifier.success("Salvo!"),t.$emit("input",e)}))},toggleMonth:function(t){this.active_month===t?this.active_month=null:this.active_month=t},removeItem:function(t,e,n){this.form.data[t-1][e-1].splice(n,1)},close:function(){this.$emit("close")}}},_=n(69),h=n(70),y=n.n(h),x=n(206),k=n(521),O=n(504),D=n(651),C=n(540),j=n(203),w=n(646),S=n(537),$=n(554),component=Object(_.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{value:!0,fullscreen:""}},[n("v-card",{staticClass:"template-form"},[n("DialogHeader",{on:{close:t.close}}),t._v(" "),n("v-container",{staticClass:"pt-6"},[n("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.validate,o=e.invalid;return[n("v-form",{on:{submit:function(e){e.preventDefault(),r().then(t.save)}}},[null===t.form.type?n("div",[n("h3",{staticClass:"mb-6"},[t._v("Que tipo de demanda é essa?")]),t._v(" "),t._l(t.demandTypes,(function(e){return n("v-btn",{key:e.value,staticClass:"mb-6 text-left",attrs:{color:"primary",large:"",block:""},on:{click:function(n){t.form.type=e.value}}},[n("v-icon",{attrs:{left:""}},[t._v(" "+t._s(e.icon))]),t._v("\n              "+t._s(e.label)+"\n            ")],1)}))],2):null===t.form.priority?n("div",[n("h3",{staticClass:"mb-6"},[t._v("Qual a prioridade dessa demanda?")]),t._v(" "),t._l(t.demandPriorities,(function(e){return n("v-btn",{key:e.value,staticClass:"mb-6 text-left",attrs:{color:e.color,large:"",block:""},on:{click:function(n){t.form.priority=e.value}}},[t._v("\n              "+t._s(e.label)+"\n            ")])}))],2):n("div",[n("validation-provider",{attrs:{name:"Título da demanda",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[n("v-textarea",{attrs:{rows:"1","auto-grow":"",label:"Título da demanda",outlined:"","error-messages":r,focusable:""},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})]}}],null,!0)}),t._v(" "),n("Editor",{attrs:{editable:""},model:{value:t.form.body,callback:function(e){t.$set(t.form,"body",e)},expression:"form.body"}}),t._v(" "),n("validation-provider",{attrs:{name:"Tipo de demanda",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[n("v-select",{attrs:{label:"Tipo de demanda",items:t.demandTypes,"item-value":"value","item-text":"label",outlined:"","error-messages":r},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}})]}}],null,!0)}),t._v(" "),n("validation-provider",{attrs:{name:"Prioridade",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[n("v-select",{attrs:{label:"Prioridade",items:t.demandPriorities,"item-value":"value","item-text":"label",outlined:"","error-messages":r},model:{value:t.form.priority,callback:function(e){t.$set(t.form,"priority",e)},expression:"form.priority"}})]}}],null,!0)}),t._v(" "),"admin"===t.$auth.user.role?n("validation-provider",{attrs:{name:"Status da demanda",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[n("v-select",{attrs:{label:"Status da demanda",items:t.demandStatus,"item-value":"value","item-text":"label",outlined:"","error-messages":r},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})]}}],null,!0)}):t._e(),t._v(" "),"admin"===t.$auth.user.role?n("validation-provider",{attrs:{name:"Pontos",rules:"required|min_value:0"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[n("v-text-field",{attrs:{label:"Pontos",type:"number",outlined:"","error-messages":r},model:{value:t.form.points,callback:function(e){t.$set(t.form,"points",e)},expression:"form.points"}}),t._v(" "),"admin"===t.$auth.user.role&&t.estimate?n("div",[t._v("\n                "+t._s(t._f("moeda")(t.estimate.price))+" ("+t._s(t.estimate.estimate_in_days)+" dias)\n              ")]):t._e()]}}],null,!0)}):t._e(),t._v(" "),n("div",{staticClass:"text-right"},[n("Save",{attrs:{invalid:o,block:!1,label:"Salvar"}})],1)],1)])]}}])})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;y()(component,{DialogHeader:n(506).default,Editor:n(530).default,Save:n(507).default}),y()(component,{VBtn:x.a,VCard:k.a,VContainer:O.a,VDialog:D.a,VForm:C.a,VIcon:j.a,VSelect:w.a,VTextField:S.a,VTextarea:$.a})},536:function(t,e,n){"use strict";n.r(e);var r={props:{button:{type:Boolean,default:!1},label:{type:String,default:"Tem certeza disso?"},hint:{type:String,default:"Esta alteração não pode ser desfeita"},icon:{type:String,default:"mdi-delete"},buttonLabel:{type:String,default:"Remover"}},data:function(){return{dialog:!1}},methods:{confirm:function(){this.dialog=!1,this.$emit("confirm")},cancel:function(){this.dialog=!1,this.$emit("cancel")}}},o=n(69),l=n(70),c=n.n(l),d=n(206),m=n(521),v=n(505),f=n(651),_=n(203),h=n(500),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{"max-width":"290"},on:{"click:outside":function(e){t.removeComment=null}},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,o=e.attrs;return[t.button?n("v-btn",t._g(t._b({attrs:{small:"",dark:""}},"v-btn",o,!1),r),[n("v-icon",{attrs:{left:""}},[t._v(t._s(t.icon))]),t._v(" "+t._s(t.buttonLabel)+"\n    ")],1):n("v-btn",t._g(t._b({attrs:{icon:"","x-small":""}},"v-btn",o,!1),r),[n("v-icon",{attrs:{dark:""}},[t._v(t._s(t.icon))])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("v-card",[n("v-card-title",{staticClass:"text-h5"},[t._v("\n      "+t._s(t.label)+"\n    ")]),t._v(" "),n("v-card-text",[t._v(" "+t._s(t.hint)+" ")]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"error",text:""},on:{click:t.cancel}},[t._v(" Não ")]),t._v(" "),n("v-btn",{attrs:{color:"green",text:""},on:{click:t.confirm}},[t._v(" Sim ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:m.a,VCardActions:v.a,VCardText:v.b,VCardTitle:v.c,VDialog:f.a,VIcon:_.a,VSpacer:h.a})},575:function(t,e,n){"use strict";n.r(e);var r=n(516),o=n(517),l=n(518),c={props:{demand:{type:Object,required:!0}},data:function(){return{demandTypes:r.a,demandTypeLabel:r.c,demandTypeIcon:r.b,demandPriorityLabel:l.c,demandPriorityColor:l.b,demandStatus:o.a,demandStatusLabel:o.b,demandPriorities:l.a,edit:!1}},created:function(){},methods:{close:function(){this.$emit("close")},changed:function(t){this.edit=!1,this.$emit("input",t)},remove:function(t){this.$emit("remove",t)}}},d=n(69),m=n(70),v=n.n(m),f=n(206),_=n(521),h=n(535),y=n(504),x=n(651),k=n(527),O=n(203),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{value:!0,fullscreen:"",persistent:""}},[n("v-card",{staticClass:"template-form"},[n("DialogHeader",{on:{close:t.close}}),t._v(" "),n("v-container",{staticClass:"pt-6"},[n("div",{staticClass:"d-flex justify-space-between align-center mb-6"},[n("div",[t._v("\n          Demanda\n          "),t.demand.status?n("span",[t._v("\n            "+t._s(t.demandStatusLabel(t.demand.status).toLowerCase())+"\n          ")]):t._e()]),t._v(" "),t.demand.type?n("v-chip",{attrs:{outlined:"",small:"",color:"rgba(255, 255, 255, 0.6)"}},[n("v-icon",{attrs:{left:"",small:"",color:t.demandPriorityColor(t.demand.priority)}},[t._v(t._s(t.demandTypeIcon(t.demand.type)))]),t._v("\n          "+t._s(t.demandTypeLabel(t.demand.type))+"\n        ")],1):t._e()],1),t._v(" "),n("h3",{staticClass:"white--text mb-3"},[t._v(t._s(t.demand.title))]),t._v(" "),n("div",{staticClass:"white--text mb-3"},[n("Editor",{attrs:{value:t.demand.body}})],1),t._v(" "),n("div",[t.demand.points&&t.demand.points>0?n("div",{staticClass:"mb-6"},[n("small",[t._v("\n            "+t._s(t.demand.estimate_in_days)+"\n            dias\n            "),n("br"),t._v("\n            "+t._s(t._f("moeda")(t.demand.price))+"\n          ")])]):t._e()]),t._v(" "),t.demand.approved&&"backlog"===t.demand.status?n("v-chip",{attrs:{outlined:"",small:"",color:"success"}},[n("v-icon",{attrs:{left:"",small:""}},[t._v(" mdi-check ")]),t._v("\n        Aprovada\n      ")],1):t._e(),t._v(" "),t.demand.points||"backlog"!==t.demand.status||"feature"!==t.demand.type?t._e():n("v-chip",{attrs:{outlined:"",small:"",color:"rgba(255, 255, 255, 0.6)"}},[n("v-icon",{attrs:{left:"",small:""}},[t._v(" mdi-clock ")]),t._v("\n        Aguardando estimativa\n      ")],1),t._v(" "),n("div",{staticClass:"text-right"},[n("v-divider",{staticClass:"my-3"}),t._v(" "),n("div",{staticClass:"d-flex justify-space-between align-center"},[n("div",[n("Remove",{attrs:{button:"","button-label":"Arquivar"},on:{confirm:t.remove}})],1),t._v(" "),n("div",[n("v-btn",{attrs:{small:""},on:{click:function(e){t.edit=!0}}},[n("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-pencil")]),t._v(" Editar\n            ")],1),t._v(" "),"admin"===t.$auth.user.role&&"backlog"===t.demand.status?n("v-btn",{attrs:{color:"success",small:""},on:{click:function(e){return t.updateStatus(t.demand,"in-progress")}}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-play-circle-outline")]),t._v(" Iniciar\n            ")],1):t._e(),t._v(" "),"admin"===t.$auth.user.role&&"in-progress"===t.demand.status?n("v-btn",{attrs:{color:"success",small:""},on:{click:function(e){return t.updateStatus(t.demand,"done")}}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-check-circle-outline")]),t._v(" Concluir\n            ")],1):t._e()],1)])],1)],1),t._v(" "),t.edit?n("DemandForm",{attrs:{demand:t.demand},on:{input:t.changed,close:function(e){t.edit=!1}}}):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{DialogHeader:n(506).default,Editor:n(530).default,Remove:n(536).default,DemandForm:n(529).default}),v()(component,{VBtn:f.a,VCard:_.a,VChip:h.a,VContainer:y.a,VDialog:x.a,VDivider:k.a,VIcon:O.a})},602:function(t,e,n){"use strict";n.r(e);n(13),n(11),n(12),n(18),n(15),n(19);var r=n(3),o=n(22),l=(n(71),n(104),n(4),n(234),n(183),n(516)),c=n(517),d=n(518);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={data:function(){return{demandTypes:l.a,demandTypeLabel:l.c,demandTypeIcon:l.b,demandPriorityLabel:d.c,demandPriorityColor:d.b,demandStatus:c.a,demandStatusLabel:c.b,demandPriorities:d.a,demands:null,addDemand:!1,activeDemand:null,showStatus:c.a[0],filters:{}}},computed:{hasDemand:function(){var t=this;return this.demands.find((function(e){return t.showStatus.value===e.status}))},company:function(){return this.$store.state.company}},watch:{company:function(){this.loadDemands()}},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.loadDemands();case 2:case"end":return e.stop()}}),e)})))()},methods:{isActive:function(t){return this.activeDemand&&this.activeDemand._id===t._id},setActiveDemand:function(t){this.activeDemand&&this.activeDemand._id===t._id?this.activeDemand=null:this.activeDemand=t},loadDemands:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.demands=null,n=v(v({},t.filters),{},{company:t.company._id}),e.next=4,t.$axios.$get("/v1/demands",{params:n});case 4:t.demands=e.sent,t.$emit("change");case 6:case"end":return e.stop()}}),e)})))()},updateStatus:function(t,e){var n=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.$axios.$patch("/v1/demands/".concat(t._id),{status:e});case 2:n.loadDemands();case 3:case"end":return r.stop()}}),r)})))()},changed:function(t){var e=this.demands.findIndex((function(e){return e._id===t._id}));this.activeDemand=t,this.demands.splice(e,1,t)},removeDemand:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.$delete("/v1/demands/".concat(e.activeDemand._id));case 2:e.activeDemand=null,e.loadDemands();case 4:case"end":return t.stop()}}),t)})))()}}},_=n(69),h=n(70),y=n.n(h),x=n(206),k=n(521),O=n(505),D=n(535),C=n(203),component=Object(_.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-btn",{attrs:{fab:"",fixed:"",bottom:"",right:"",color:"success"},on:{click:function(e){t.addDemand=!0}}},[n("v-icon",[t._v("mdi-plus")])],1),t._v(" "),n("div",{staticClass:"d-flex justify-space-around"},t._l(t.demandStatus,(function(e){return n("v-btn",{key:e.value,attrs:{small:"",color:t.showStatus.value===e.value?"primary":"secondary"},on:{click:function(n){t.showStatus=e}}},[t._v("\n      "+t._s(e.label)+"\n    ")])})),1),t._v(" "),n("div",{staticClass:"pt-6"},[n("div",[t.demands?n("div",[t.hasDemand?t._e():n("div",[n("Alert",{attrs:{message:"Nenhuma demanda aqui"}})],1),t._v(" "),t._l(t.demands,(function(e){return[e.status===t.showStatus.value?n("v-card",{key:e._id,staticClass:"mb-3",on:{click:function(n){return t.setActiveDemand(e)}}},[n("v-card-text",[n("h3",{staticClass:"white--text mb-3"},[t._v(t._s(e.title))]),t._v(" "),n("div",[e.points&&e.points>0?n("div",{staticClass:"mb-3"},[n("strong",[t._v("\n                    "+t._s(e.estimate_in_days)+"\n                    dias\n                  ")])]):t._e(),t._v(" "),e.type?n("v-chip",{attrs:{outlined:"",small:"",color:"rgba(255, 255, 255, 0.6)"}},[n("v-icon",{attrs:{left:"",small:"",color:t.demandPriorityColor(e.priority)}},[t._v(t._s(t.demandTypeIcon(e.type)))]),t._v("\n                  "+t._s(t.demandTypeLabel(e.type))+"\n                ")],1):t._e(),t._v(" "),e.approved&&"backlog"===e.status?n("v-chip",{attrs:{outlined:"",small:"",color:"success"}},[n("v-icon",{attrs:{left:"",small:""}},[t._v(" mdi-check ")]),t._v("\n                  Aprovada\n                ")],1):t._e(),t._v(" "),e.points||"backlog"!==e.status||"feature"!==e.type?t._e():n("v-chip",{attrs:{outlined:"",small:"",color:"rgba(255, 255, 255, 0.6)"}},[n("v-icon",{attrs:{left:"",small:""}},[t._v(" mdi-clock ")]),t._v("\n                  Aguardando estimativa\n                ")],1)],1)])],1):t._e()]}))],2):n("Loading")],1)]),t._v(" "),t.addDemand?n("DemandForm",{on:{input:function(e){t.loadDemands(),t.addDemand=!1},close:function(e){t.addDemand=!1}}}):t._e(),t._v(" "),t.activeDemand?n("Demand",{attrs:{demand:t.activeDemand},on:{input:t.changed,close:function(e){t.activeDemand=null},remove:t.removeDemand}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;y()(component,{Alert:n(512).default,Loading:n(510).default,DemandForm:n(529).default,Demand:n(575).default}),y()(component,{VBtn:x.a,VCard:k.a,VCardText:O.b,VChip:D.a,VIcon:C.a})}}]);