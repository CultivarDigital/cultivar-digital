(window.webpackJsonp=window.webpackJsonp||[]).push([[19,7,11,12,16,23],{505:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return c})),r.d(e,"c",(function(){return v}));var o=r(519),l=r(2),n=Object(l.h)("v-card__actions"),d=Object(l.h)("v-card__subtitle"),c=Object(l.h)("v-card__text"),v=Object(l.h)("v-card__title");o.a},506:function(t,e,r){"use strict";r.r(e);var o={methods:{close:function(){this.$emit("close")}}},l=r(69),n=r(70),d=r.n(n),c=r(206),v=r(504),m=r(532),_=r(203),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-container",{staticClass:"d-flex align-center justify-space-between"},[o("div",{staticClass:"d-flex align-center"},[o("img",{staticClass:"logo",attrs:{src:r(230)}}),t._v(" "),o("span",{staticClass:"ml-3"},[o("strong",[t._v("Cultivar")]),t._v(" Digital")])]),t._v(" "),o("v-btn",{attrs:{icon:""},on:{click:t.close}},[o("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),o("v-divider")],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:c.a,VContainer:v.a,VDivider:m.a,VIcon:_.a})},508:function(t,e,r){"use strict";r.r(e);var o={props:{invalid:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},block:{type:Boolean,default:!0},label:{type:String,default:"Salvar"}}},l=r(69),n=r(70),d=r.n(n),c=r(501),v=r(206),m=r(207),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.invalid?r("v-alert",{staticClass:"d-flex justify-center",attrs:{type:"error"}},[t._v("\n    Você deve corrigir os erros acima antes de salvar\n  ")]):t._e(),t._v(" "),r("v-btn",{staticClass:"mb-4 mt-4 font-weight-bold text-none",attrs:{"x-large":"",type:"submit",color:"primary",disabled:t.invalid||t.loading,block:t.block,rounded:""}},[t.loading?r("v-progress-circular",{attrs:{color:"secondary",indeterminate:"",size:"20"}}):r("span",[t._v(t._s(t.label))])],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VAlert:c.a,VBtn:v.a,VProgressCircular:m.a})},511:function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"c",(function(){return d}));r(104),r(4);var o=[{value:"feature",label:"Funcionalidade",icon:"mdi-star"},{value:"bug",label:"Correção",icon:"mdi-bug"},{value:"improvement",label:"Melhoria",icon:"mdi-wrench"}],l=function(t){return o.find((function(e){return e.value===t}))},n=function(t){var e=l(t);return e?e.icon:""},d=function(t){var e=l(t);return e?e.label:""};e.a=o},512:function(t,e,r){"use strict";r.d(e,"b",(function(){return l}));r(104),r(4);var o=[{label:"Na fila",value:"backlog"},{label:"Em andamento",value:"in-progress"},{label:"Finalizadas",value:"done"}],l=function(t){var e=o.find((function(e){return e.value===t}));return e?e.label:""};e.a=o},513:function(t,e,r){"use strict";r.d(e,"c",(function(){return n})),r.d(e,"b",(function(){return d}));r(104),r(4);var o=[{value:0,label:"Urgente",color:"error"},{value:1,label:"Alta",color:"warning"},{value:2,label:"Média",color:"info"},{value:3,label:"Baixa",color:"success"}],l=function(t){return o.find((function(p){return p.value===t}))},n=function(t){var e=l(t);return e?e.label:""},d=function(t){var e=l(t);return e?e.color:""};e.a=o},514:function(t,e,r){"use strict";r.r(e);var o=r(69),l=r(70),n=r.n(l),d=r(207),component=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center"},[e("v-progress-circular",{attrs:{indeterminate:""}})],1)}),[],!1,null,null,null);e.default=component.exports;n()(component,{VProgressCircular:d.a})},516:function(t,e,r){"use strict";r.r(e);var o={props:{color:{type:String,default:null},message:{type:String,default:null}}},l=r(69),n=r(70),d=r.n(n),c=r(501),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-center",on:{click:function(e){return t.$emit("click")}}},[r("v-alert",{attrs:{color:t.color}},[t._v(t._s(t.message))])],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VAlert:c.a})},520:function(t,e,r){"use strict";r.r(e);r(11),r(12),r(18),r(19);var o=r(3),l=(r(4),r(15),r(13),r(183),r(143)),n=r(511),d=r(512),c=r(513);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _={components:{ValidationObserver:l.a,ValidationProvider:l.b},props:{demand:{type:Object,default:function(){return null}}},data:function(){return{demandTypes:n.a,demandStatus:d.a,demandPriorities:c.a,dialog:!1,form:{title:"",body:null,points:null,price:null,type:null,priority:null,progress:0,status:"backlog",paid:!1}}},computed:{company:function(){return this.$store.state.company},estimate:function(){return this.form.points&&this.company?{estimate_in_days:Math.round(this.form.points/this.company.points_per_day),price:this.form.points*this.company.point_price}:null}},created:function(){var t=this;this.demand&&Object.keys(this.form).forEach((function(e){void 0!==t.demand[e]&&null!==t.demand[e]&&(t.form[e]=t.demand[e])}))},methods:{save:function(){var t=this,form=m({},this.form);this.demand?this.$axios.$patch("/v1/demands/"+this.demand._id,form).then((function(e){t.$notifier.success("Atualizado!"),t.$emit("input",e)})):this.$axios.$post("/v1/demands",m(m({},form),{},{company:this.company._id})).then((function(e){t.$notifier.success("Salvo!"),t.$emit("input",e)}))},toggleMonth:function(t){this.active_month===t?this.active_month=null:this.active_month=t},removeItem:function(t,e,r){this.form.data[t-1][e-1].splice(r,1)},close:function(){this.$emit("close")}}},h=r(69),f=r(70),y=r.n(f),w=r(206),x=r(519),k=r(504),C=r(651),j=r(553),O=r(203),$=r(646),V=r(551),S=r(580),component=Object(h.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{attrs:{value:!0,fullscreen:"",persistent:""}},[r("v-card",{staticClass:"template-form"},[r("DialogHeader",{on:{close:t.close}}),t._v(" "),r("v-container",{staticClass:"pt-6"},[r("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(e){var o=e.validate,l=e.invalid;return[r("v-form",{on:{submit:function(e){e.preventDefault(),o().then(t.save)}}},[null===t.form.type?r("div",[r("h3",{staticClass:"mb-6"},[t._v("Que tipo de demanda é essa?")]),t._v(" "),t._l(t.demandTypes,(function(e){return r("v-btn",{key:e.value,staticClass:"mb-6 text-left",attrs:{color:"primary",large:"",block:""},on:{click:function(r){t.form.type=e.value}}},[r("v-icon",{attrs:{left:""}},[t._v(" "+t._s(e.icon))]),t._v("\n              "+t._s(e.label)+"\n            ")],1)}))],2):null===t.form.priority?r("div",[r("h3",{staticClass:"mb-6"},[t._v("Qual a prioridade dessa demanda?")]),t._v(" "),t._l(t.demandPriorities,(function(e){return r("v-btn",{key:e.value,staticClass:"mb-6 text-left",attrs:{color:e.color,large:"",block:""},on:{click:function(r){t.form.priority=e.value}}},[t._v("\n              "+t._s(e.label)+"\n            ")])}))],2):r("div",[r("validation-provider",{attrs:{name:"Título da demanda",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[r("v-textarea",{attrs:{rows:"1","auto-grow":"",label:"Título da demanda",outlined:"","error-messages":o,focusable:""},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})]}}],null,!0)}),t._v(" "),r("Editor",{attrs:{editable:""},model:{value:t.form.body,callback:function(e){t.$set(t.form,"body",e)},expression:"form.body"}}),t._v(" "),r("validation-provider",{attrs:{name:"Tipo de demanda",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[r("v-select",{attrs:{label:"Tipo de demanda",items:t.demandTypes,"item-value":"value","item-text":"label",outlined:"","error-messages":o},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}})]}}],null,!0)}),t._v(" "),r("validation-provider",{attrs:{name:"Prioridade",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[r("v-select",{attrs:{label:"Prioridade",items:t.demandPriorities,"item-value":"value","item-text":"label",outlined:"","error-messages":o},model:{value:t.form.priority,callback:function(e){t.$set(t.form,"priority",e)},expression:"form.priority"}})]}}],null,!0)}),t._v(" "),"admin"===t.$auth.user.role?r("validation-provider",{attrs:{name:"Status da demanda",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[r("v-select",{attrs:{label:"Status da demanda",items:t.demandStatus,"item-value":"value","item-text":"label",outlined:"","error-messages":o},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})]}}],null,!0)}):t._e(),t._v(" "),"admin"===t.$auth.user.role?r("validation-provider",{attrs:{name:"Pontos",rules:"required|min_value:0"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.errors;return[r("v-text-field",{attrs:{label:"Pontos",type:"number",outlined:"","error-messages":o},model:{value:t.form.points,callback:function(e){t.$set(t.form,"points",e)},expression:"form.points"}}),t._v(" "),"admin"===t.$auth.user.role&&t.estimate?r("div",[t._v("\n                "+t._s(t._f("moeda")(t.estimate.price))+" ("+t._s(t.estimate.estimate_in_days)+" dias)\n              ")]):t._e()]}}],null,!0)}):t._e(),t._v(" "),r("div",{staticClass:"text-right"},[r("Save",{attrs:{invalid:l,block:!1,label:"Salvar"}})],1)],1)])]}}])})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;y()(component,{DialogHeader:r(506).default,Editor:r(521).default,Save:r(508).default}),y()(component,{VBtn:w.a,VCard:x.a,VContainer:k.a,VDialog:C.a,VForm:j.a,VIcon:O.a,VSelect:$.a,VTextField:V.a,VTextarea:S.a})},523:function(t,e,r){"use strict";r.r(e);var o={props:{button:{type:Boolean,default:!1},label:{type:String,default:"Tem certeza disso?"},hint:{type:String,default:"Esta alteração não pode ser desfeita"},icon:{type:String,default:"mdi-delete"},buttonLabel:{type:String,default:"Remover"}},data:function(){return{dialog:!1}},methods:{confirm:function(){this.dialog=!1,this.$emit("confirm")},cancel:function(){this.dialog=!1,this.$emit("cancel")}}},l=r(69),n=r(70),d=r.n(n),c=r(206),v=r(519),m=r(505),_=r(651),h=r(203),f=r(500),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{attrs:{"max-width":"290"},on:{"click:outside":function(e){t.removeComment=null}},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,l=e.attrs;return[t.button?r("v-btn",t._g(t._b({attrs:{small:"",dark:""}},"v-btn",l,!1),o),[r("v-icon",{attrs:{left:""}},[t._v(t._s(t.icon))]),t._v(" "+t._s(t.buttonLabel)+"\n    ")],1):r("v-btn",t._g(t._b({attrs:{icon:"","x-small":""}},"v-btn",l,!1),o),[r("v-icon",{attrs:{dark:""}},[t._v(t._s(t.icon))])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),r("v-card",[r("v-card-title",{staticClass:"text-h5"},[t._v("\n      "+t._s(t.label)+"\n    ")]),t._v(" "),r("v-card-text",[t._v(" "+t._s(t.hint)+" ")]),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"error",text:""},on:{click:t.cancel}},[t._v(" Não ")]),t._v(" "),r("v-btn",{attrs:{color:"green",text:""},on:{click:t.confirm}},[t._v(" Sim ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:c.a,VCard:v.a,VCardActions:m.a,VCardText:m.b,VCardTitle:m.c,VDialog:_.a,VIcon:h.a,VSpacer:f.a})},526:function(t,e,r){"use strict";r.r(e);var o=r(22),l=(r(71),r(511)),n=r(512),d=r(513),c={props:{demand:{type:Object,required:!0},preview:{type:Boolean,default:!1}},data:function(){return{demandTypes:l.a,demandTypeLabel:l.c,demandTypeIcon:l.b,demandPriorityLabel:d.c,demandPriorityColor:d.b,demandStatus:n.a,demandStatusLabel:n.b,demandPriorities:d.a,edit:!1}},created:function(){},methods:{close:function(){this.$emit("close")},changed:function(t){this.edit=!1,this.$emit("input",t)},remove:function(t){this.$emit("remove",t)},updateStatus:function(t,e){var r=this;return Object(o.a)(regeneratorRuntime.mark((function o(){var l;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,r.$axios.$patch("/v1/demands/".concat(t._id),{status:e});case 2:l=o.sent,r.changed(l);case 4:case"end":return o.stop()}}),o)})))()}}},v=r(69),m=r(70),_=r.n(m),h=r(206),f=r(519),y=r(568),w=r(504),x=r(651),k=r(532),C=r(203),component=Object(v.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{attrs:{value:!0,fullscreen:"",persistent:""}},[r("v-card",{staticClass:"template-form"},[r("DialogHeader",{on:{close:t.close}}),t._v(" "),r("v-container",{staticClass:"pt-6"},[r("div",{staticClass:"d-flex justify-space-between align-center mb-6"},[r("div",[t._v("\n          Demanda\n          "),t.demand.status?r("span",[t._v("\n            "+t._s(t.demandStatusLabel(t.demand.status).toLowerCase())+"\n          ")]):t._e()]),t._v(" "),t.demand.type?r("v-chip",{attrs:{outlined:"",small:"",color:"rgba(255, 255, 255, 0.6)"}},[r("v-icon",{attrs:{left:"",small:"",color:t.demandPriorityColor(t.demand.priority)}},[t._v(t._s(t.demandTypeIcon(t.demand.type)))]),t._v("\n          "+t._s(t.demandTypeLabel(t.demand.type))+"\n        ")],1):t._e()],1),t._v(" "),r("h3",{staticClass:"white--text mb-3"},[t._v(t._s(t.demand.title))]),t._v(" "),r("div",{staticClass:"white--text mb-3"},[r("Editor",{attrs:{value:t.demand.body}})],1),t._v(" "),r("div",[t.demand.points&&t.demand.points>0?r("div",{staticClass:"mb-6"},[r("small",[t._v("\n            "+t._s(t.demand.estimate_in_days)+"\n            dias\n            "),r("br"),t._v("\n            "+t._s(t._f("moeda")(t.demand.price))+"\n          ")])]):t._e()]),t._v(" "),t.demand.approved&&"backlog"===t.demand.status?r("v-chip",{attrs:{outlined:"",small:"",color:"success"}},[r("v-icon",{attrs:{left:"",small:""}},[t._v(" mdi-check ")]),t._v("\n        Aprovada\n      ")],1):t._e(),t._v(" "),t.demand.points||"backlog"!==t.demand.status||"feature"!==t.demand.type?t._e():r("v-chip",{attrs:{outlined:"",small:"",color:"rgba(255, 255, 255, 0.6)"}},[r("v-icon",{attrs:{left:"",small:""}},[t._v(" mdi-clock ")]),t._v("\n        Aguardando estimativa\n      ")],1),t._v(" "),t.preview?t._e():r("div",{staticClass:"text-right"},[r("v-divider",{staticClass:"my-3"}),t._v(" "),r("div",{staticClass:"d-flex justify-space-between align-center"},["admin"===t.$auth.user.role?r("div",[r("Remove",{attrs:{button:"","button-label":"Arquivar"},on:{confirm:t.remove}})],1):t._e(),t._v(" "),r("div",[r("v-btn",{attrs:{small:""},on:{click:function(e){t.edit=!0}}},[r("v-icon",{attrs:{small:"",left:""}},[t._v("mdi-pencil")]),t._v(" Editar\n            ")],1),t._v(" "),"admin"===t.$auth.user.role&&"backlog"===t.demand.status?r("v-btn",{attrs:{color:"success",small:""},on:{click:function(e){return t.updateStatus(t.demand,"in-progress")}}},[r("v-icon",{attrs:{left:""}},[t._v("mdi-play-circle-outline")]),t._v(" Iniciar\n            ")],1):t._e(),t._v(" "),"admin"===t.$auth.user.role&&"in-progress"===t.demand.status?r("v-btn",{attrs:{color:"success",small:""},on:{click:function(e){return t.updateStatus(t.demand,"done")}}},[r("v-icon",{attrs:{left:""}},[t._v("mdi-check-circle-outline")]),t._v(" Concluir\n            ")],1):t._e()],1)])],1)],1),t._v(" "),t.edit?r("DemandForm",{attrs:{demand:t.demand},on:{input:t.changed,close:function(e){t.edit=!1}}}):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;_()(component,{DialogHeader:r(506).default,Editor:r(521).default,Remove:r(523).default,DemandForm:r(520).default}),_()(component,{VBtn:h.a,VCard:f.a,VChip:y.a,VContainer:w.a,VDialog:x.a,VDivider:k.a,VIcon:C.a})},544:function(t,e,r){var content=r(545);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("7c06aa28",content,!0,{sourceMap:!1})},545:function(t,e,r){var o=r(20)(!1);o.push([t.i,"html{scroll-behavior:smooth;scroll-padding-top:56px}section{min-height:calc(100vh - 56px)}@media(max-width:960px){section{min-height:calc(100vh - 56px)}}.tertiary--text{opacity:.4}.logo{width:42px}@media(min-width:960px){.logo{width:64px}}.nav-btn{box-shadow:none!important}@media(max-width:960px){.nav-btn{display:none}}.container{max-width:960px;padding:16px}.v-tab{font-size:12px!important}.v-slide-group__next,.v-slide-group__prev{display:none!important}.theme--light.v-data-table{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-data-table .v-data-table__divider{border-right:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table.v-data-table--fixed-header thead th{background:#fff;box-shadow:inset 0 -1px 0 rgba(0,0,0,.12)}.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr>th{color:rgba(0,0,0,.6)}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:last-child,.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:not(.v-data-table__mobile-row),.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:last-child,.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:not(.v-data-table__mobile-row),.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr:last-child>th{border-bottom:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr.active{background:#f5f5f5}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background:#eee}.theme--light.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td:not(.v-data-table__mobile-row),.theme--light.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th:not(.v-data-table__mobile-row){border-top:thin solid rgba(0,0,0,.12)}.theme--dark.v-data-table{background-color:#1e1e1e;color:#fff}.theme--dark.v-data-table .v-data-table__divider{border-right:thin solid hsla(0,0%,100%,.12)}.theme--dark.v-data-table.v-data-table--fixed-header thead th{background:#1e1e1e;box-shadow:inset 0 -1px 0 hsla(0,0%,100%,.12)}.theme--dark.v-data-table>.v-data-table__wrapper>table>thead>tr>th{color:hsla(0,0%,100%,.7)}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:last-child,.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:not(.v-data-table__mobile-row),.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:last-child,.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:not(.v-data-table__mobile-row),.theme--dark.v-data-table>.v-data-table__wrapper>table>thead>tr:last-child>th{border-bottom:thin solid hsla(0,0%,100%,.12)}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr.active{background:#505050}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background:#616161}.theme--dark.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td:not(.v-data-table__mobile-row),.theme--dark.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th:not(.v-data-table__mobile-row){border-top:thin solid hsla(0,0%,100%,.12)}.v-data-table{line-height:1.5;max-width:100%}.v-data-table>.v-data-table__wrapper>table{width:100%;border-spacing:0}.v-data-table>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-data-table>.v-data-table__wrapper>table>thead>tr>td,.v-data-table>.v-data-table__wrapper>table>thead>tr>th{padding:0 16px;transition:height .2s cubic-bezier(.4,0,.6,1)}.v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-data-table>.v-data-table__wrapper>table>thead>tr>th{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:.75rem;height:48px}.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>thead>tr>th{text-align:left}.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>thead>tr>th{text-align:right}.v-data-table>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table>.v-data-table__wrapper>table>thead>tr>td{font-size:.875rem;height:48px}.v-data-table__wrapper{overflow-x:auto;overflow-y:hidden}.v-data-table__progress{height:auto!important}.v-data-table__progress th{height:auto!important;border:none!important;padding:0;position:relative}.v-data-table--dense>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table--dense>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>tfoot>tr>th,.v-data-table--dense>.v-data-table__wrapper>table>thead>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>thead>tr>th{height:32px}.v-data-table--has-top>.v-data-table__wrapper>table>tbody>tr:first-child:hover>td:first-child{border-top-left-radius:0}.v-data-table--has-top>.v-data-table__wrapper>table>tbody>tr:first-child:hover>td:last-child{border-top-right-radius:0}.v-data-table--has-bottom>.v-data-table__wrapper>table>tbody>tr:last-child:hover>td:first-child{border-bottom-left-radius:0}.v-data-table--has-bottom>.v-data-table__wrapper>table>tbody>tr:last-child:hover>td:last-child{border-bottom-right-radius:0}.v-data-table--fixed-header>.v-data-table__wrapper,.v-data-table--fixed-height .v-data-table__wrapper{overflow-y:auto}.v-data-table--fixed-header>.v-data-table__wrapper>table>thead>tr>th{border-bottom:0!important;position:-webkit-sticky;position:sticky;top:0;z-index:2}.v-data-table--fixed-header>.v-data-table__wrapper>table>thead>tr:nth-child(2)>th{top:48px}.v-application--is-ltr .v-data-table--fixed-header .v-data-footer{margin-right:17px}.v-application--is-rtl .v-data-table--fixed-header .v-data-footer{margin-left:17px}.v-data-table--fixed-header.v-data-table--dense>.v-data-table__wrapper>table>thead>tr:nth-child(2)>th{top:32px}",""]),t.exports=o},576:function(t,e,r){"use strict";r.r(e);var o=r(22),l=(r(71),{props:{proposalId:{type:String,required:!0}},data:function(){return{dialog:!1,proposal:null,previewDemand:null}},computed:{baseUrl:function(){return"http://localhost:3000"}},created:function(){this.loadProposal()},methods:{loadProposal:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.proposal=null,e.next=3,t.$axios.$get("/v1/proposals/"+t.proposalId+"/info");case 3:t.proposal=e.sent;case 4:case"end":return e.stop()}}),e)})))()},approve:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$patch("/v1/proposals/"+t.proposalId+"/approve");case 2:t.loadProposal(),t.$emit("change");case 4:case"end":return e.stop()}}),e)})))()},reject:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$patch("/v1/proposals/"+t.proposalId+"/reject");case 2:t.loadProposal(),t.$emit("change");case 4:case"end":return e.stop()}}),e)})))()},cancel:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$patch("/v1/proposals/"+t.proposalId+"/cancel");case 2:t.loadProposal(),t.$emit("change");case 4:case"end":return e.stop()}}),e)})))()},close:function(){this.$emit("close")},copy:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,navigator.clipboard.writeText(t);case 2:e.notify("Copiado!");case 3:case"end":return r.stop()}}),r)})))()}}}),n=r(69),d=r(70),c=r.n(d),v=r(206),m=r(519),_=r(568),h=r(504),f=r(651),y=r(203),w=r(600),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-dialog",{attrs:{value:!0,fullscreen:"",persistent:""}},[o("v-card",{staticClass:"template-form"},[o("DialogHeader",{on:{close:t.close}}),t._v(" "),o("div",[t.proposal?o("div",[o("v-container",[o("h2",{staticClass:"mb-6"},[t._v("Proposta comercial")]),t._v(" "),t.proposal.canceled?o("Alert",{attrs:{message:"Proposta cancelada",color:"error"}}):t._e(),t._v(" "),o("div",{staticClass:"d-flex justify-space-between align-start"},[o("div",[o("h3",[t._v("\n                "+t._s(t.proposal.title)+"\n              ")]),t._v(" "),o("p",[o("small",[t._v("\n                  "+t._s(t.$moment(t.proposal.createdAt).format("DD/MM/YYYY"))+"\n                ")])])]),t._v(" "),o("div",["approved"===t.proposal.status?o("v-chip",{attrs:{outlined:"",small:"",color:"success"}},[o("v-icon",{attrs:{left:"",small:""}},[t._v(" mdi-check ")]),t._v("\n                Aprovada\n              ")],1):t._e(),t._v(" "),"rejected"===t.proposal.status?o("v-chip",{attrs:{outlined:"",small:"",color:"error"}},[o("v-icon",{attrs:{left:"",small:""}},[t._v(" mdi-close-thick ")]),t._v("\n                Rejeitada\n              ")],1):t._e(),t._v(" "),"canceled"===t.proposal.status?o("v-chip",{attrs:{outlined:"",small:"",color:"error"}},[o("v-icon",{attrs:{left:"",small:""}},[t._v(" mdi-cancel ")]),t._v("\n                Cancelada\n              ")],1):t._e(),t._v(" "),"pending"===t.proposal.status?o("v-chip",{attrs:{small:"",outlined:"",color:"rgba(255, 255, 255, 0.6)"}},[o("v-icon",{attrs:{left:"",small:""}},[t._v(" mdi-clock ")]),t._v("\n                Aguardando aprovação\n              ")],1):t._e()],1)]),t._v(" "),o("div",[o("p",[t._v("\n              A proposta abaixo foi personalizada por via de um levantamento\n              de requisitos e análise prévia para a execução das demandas\n              solicitadas.\n            ")])]),t._v(" "),o("v-simple-table",{staticClass:"mb-6",attrs:{light:""},scopedSlots:t._u([{key:"default",fn:function(){return[o("thead",[o("tr",[o("th",{staticClass:"text-left"},[t._v("Demanda")]),t._v(" "),o("th",[t._v("Estimativa")]),t._v(" "),o("th",[t._v("Valor")]),t._v(" "),o("th")])]),t._v(" "),o("tbody",t._l(t.proposal.items,(function(e){return o("tr",{key:e._id},[o("td",[o("small",[t._v(t._s(e.demand.title))])]),t._v(" "),o("td",[o("small",[t._v(t._s(e.estimate_in_days)+" dias")])]),t._v(" "),o("td",[o("small",[t._v(t._s(t._f("moeda")(e.price)))])]),t._v(" "),o("td",[o("v-btn",{attrs:{"x-small":"",icon:""},on:{click:function(r){t.previewDemand=e.demand}}},[o("v-icon",[t._v("mdi-eye")])],1)],1)])})),0),t._v(" "),o("tfoot",[o("tr",[o("th",[o("strong",[t._v("Total")])]),t._v(" "),o("th",[o("strong",[t._v(t._s(t.proposal.estimate_in_days)+" dias")])]),t._v(" "),o("th",[o("strong",[t._v(t._s(t._f("moeda")(t.proposal.price)))])]),t._v(" "),o("th")])])]},proxy:!0}],null,!1,3914182322)}),t._v(" "),o("div",{staticClass:"mb-6"},[o("h5",{staticClass:"mb-3"},[t._v("OBSERVAÇÕES:")]),t._v(" "),o("ul",{staticClass:"mb-10"},[o("li",[o("small",[t._v("\n                  Os prazos e valores acima foram estimados baseados em\n                  levantamento de requisitos e análise prévia das\n                  funcionalidades, portanto, esta proposta tem caráter de\n                  escopo fechado e qualquer mudança de escopo invalida esta\n                  proposta.\n                ")])])]),t._v(" "),"approved"===t.proposal.status&&t.proposal.approved_by?o("div",{staticClass:"text-center mb-10"},[o("v-icon",{attrs:{"x-large":""}},[t._v("mdi-check")]),t._v(" "),o("br"),t._v(" "),o("small",[o("strong",[t._v("Aprovada por:")]),t._v(" "),o("br"),t._v("\n                "+t._s(t.proposal.approved_by.name)+"\n              ")])],1):t._e(),t._v(" "),"rejected"===t.proposal.status&&t.proposal.rejected_by?o("div",{staticClass:"text-center mb-10"},[o("v-icon",{attrs:{"x-large":""}},[t._v("mdi-close-thick")]),t._v(" "),o("br"),t._v(" "),o("small",[o("strong",[t._v("Rejeitada por:")]),t._v(" "),o("br"),t._v("\n                "+t._s(t.proposal.rejected_by.name)+"\n              ")])],1):t._e(),t._v(" "),"canceled"===t.proposal.status&&t.proposal.canceled_by?o("div",{staticClass:"text-center mb-10"},[o("v-icon",{attrs:{"x-large":""}},[t._v("mdi-cancel")]),t._v(" "),o("br"),t._v(" "),o("small",[o("strong",[t._v("Cancelada por:")]),t._v(" "),o("br"),t._v("\n                "+t._s(t.proposal.canceled_by.name)+"\n              ")])],1):t._e()]),t._v(" "),"canceled"===t.proposal.status?o("Alert",{attrs:{message:"Proposta cancelada",color:"error"}}):t._e(),t._v(" "),"rejected"===t.proposal.status?o("Alert",{attrs:{message:"Proposta rejeitada",color:"error"}}):t._e(),t._v(" "),"pending"===t.proposal.status?o("div",{staticClass:"text-center"},[o("v-btn",{staticClass:"mb-6",attrs:{block:"",large:"",color:"success"},on:{click:t.approve}},[o("v-icon",{attrs:{left:""}},[t._v(" mdi-check ")]),t._v("\n              Aprovar esta proposta\n            ")],1),t._v(" "),o("v-btn",{staticClass:"mb-6",attrs:{small:""},on:{click:function(){return t.copy(t.baseUrl+"/cliente?modulo=propostas&proposta="+t.proposal._id)}}},[o("v-icon",{attrs:{left:"",small:""}},[t._v(" mdi-content-copy ")]),t._v("\n              Copiar link da proposta\n            ")],1),t._v(" "),"user"===t.$auth.user.role?o("v-btn",{staticClass:"mb-6",attrs:{small:"",color:"error"},on:{click:t.reject}},[o("v-icon",{attrs:{left:""}},[t._v(" mdi-close-thick ")]),t._v("\n              Rejeitar esta proposta\n            ")],1):t._e(),t._v(" "),"admin"===t.$auth.user.role?o("v-btn",{staticClass:"mb-6",attrs:{small:""},on:{click:t.cancel}},[o("v-icon",{attrs:{left:""}},[t._v(" mdi-close ")]),t._v("\n              Cancelar esta proposta\n            ")],1):t._e()],1):t._e(),t._v(" "),o("div",{staticClass:"text-center pt-10 mb-10"},[o("div",[o("img",{staticClass:"logo",attrs:{src:r(230)}}),t._v(" "),o("br"),t._v(" "),o("strong",[t._v("Cultivar Digital")])]),t._v(" "),o("div",[o("small",[t._v("Diego M. Rodrigues")])])])],1)],1):o("div",{staticClass:"pt-6"},[o("Loading")],1)]),t._v(" "),t.previewDemand?o("Demand",{attrs:{demand:t.previewDemand,preview:""},on:{close:function(e){t.previewDemand=null}}}):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{DialogHeader:r(506).default,Alert:r(516).default,Loading:r(514).default,Demand:r(526).default}),c()(component,{VBtn:v.a,VCard:m.a,VChip:_.a,VContainer:h.a,VDialog:f.a,VIcon:y.a,VSimpleTable:w.a})},600:function(t,e,r){"use strict";r(13),r(11),r(12),r(4),r(18),r(15),r(19);var o=r(3),l=(r(31),r(544),r(2)),n=r(29),d=r(8);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a=Object(d.a)(n.a).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(l.g)(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})}}]);