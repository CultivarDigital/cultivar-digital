(window.webpackJsonp=window.webpackJsonp||[]).push([[2,11,12,13],{605:function(e,t,n){"use strict";n.r(t);var r={props:{item:{type:Object,default:null}}},o=n(31),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",[e.item.estimate_in_days>0?t("div",{staticClass:"caption secondary--text text--lighten-4"},[e.item.billable?t("div",[e._v("\n      "+e._s(e._f("moeda")(e.item.price))+" ("+e._s(e.$utils.plural(e.item.estimate_in_days,"dia"))+")\n    ")]):t("div",[e._v("\n      "+e._s(e.$utils.plural(e.item.estimate_in_days,"dia"))+"\n    ")])]):t("div",{staticClass:"caption secondary--text text--lighten-4 opaque"},[e._v("\n    Não será estimada\n  ")])])}),[],!1,null,null,null);t.default=component.exports},614:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return d}));n(85),n(4);var r=[{value:"feature",label:"Funcionalidade",icon:"mdi-star"},{value:"bug",label:"Correção",icon:"mdi-bug"},{value:"improvement",label:"Melhoria",icon:"mdi-wrench"}],o=function(e){return r.find((function(t){return t.value===e}))},l=function(e){var t=o(e);return t?t.icon:""},d=function(e){var t=o(e);return t?t.label:""};t.a=r},615:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));n(85),n(4);var r=[{label:"Na fila",value:"backlog"},{label:"Em andamento",value:"in-progress"},{label:"Finalizadas",value:"done"}],o=function(e){var t=r.find((function(t){return t.value===e}));return t?t.label:""};t.a=r},616:function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return d}));n(85),n(4);var r=[{value:1,label:"Alta",color:"error"},{value:2,label:"Média",color:"warning"},{value:3,label:"Baixa",color:"info"}],o=function(e){return r.find((function(p){return p.value===e}))},l=function(e){var t=o(e);return t?t.label:""},d=function(e){var t=o(e);return t?t.color:""};t.a=r},635:function(e,t,n){"use strict";n.r(t);var r=n(242),o=n(572),l=n(568),d=n(597),c=n(154),m=n(588),f={props:{button:{type:Boolean,default:!1},label:{type:String,default:"Tem certeza disso?"},hint:{type:String,default:"Esta alteração não pode ser desfeita"},icon:{type:String,default:"mdi-delete"},buttonLabel:{type:String,default:"Remover"}},data:function(){return{dialog:!1}},methods:{confirm:function(){this.dialog=!1,this.$emit("confirm")},cancel:function(){this.dialog=!1,this.$emit("cancel")}}},v=n(31),component=Object(v.a)(f,(function(){var e=this,t=e._self._c;return t(d.a,{attrs:{"max-width":"290"},on:{"click:outside":function(t){e.removeComment=null}},scopedSlots:e._u([{key:"activator",fn:function(n){var o=n.on,l=n.attrs;return[e.button?t(r.a,e._g(e._b({attrs:{small:""}},"v-btn",l,!1),o),[t(c.a,{attrs:{left:""}},[e._v(e._s(e.icon))]),e._v(" "+e._s(e.buttonLabel)+"\n    ")],1):t(r.a,e._g(e._b({attrs:{icon:"",small:""}},"v-btn",l,!1),o),[t(c.a,[e._v(e._s(e.icon))])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),t(o.a,[t(l.c,{staticClass:"text-h5"},[e._v("\n      "+e._s(e.label)+"\n    ")]),e._v(" "),t(l.b,[e._v(" "+e._s(e.hint)+" ")]),e._v(" "),t(l.a,{staticClass:"pa-3"},[t(m.a),e._v(" "),t(r.a,{attrs:{color:"error",large:""},on:{click:e.cancel}},[e._v(" Não ")]),e._v(" "),t(r.a,{attrs:{color:"success",large:""},on:{click:e.confirm}},[e._v(" Sim ")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},655:function(e,t,n){"use strict";n.r(t);var r=n(154),o={props:{demand:{type:Object,required:!0}}},l=n(31),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("div",[e.demand.estimated?t("EstimateValues",{attrs:{item:e.demand}}):e._e(),e._v(" "),e.demand.estimated||"backlog"!==e.demand.status?e._e():t("div",{staticClass:"caption secondary--text text--lighten-4 d-flex align-center"},[t(r.a,{staticClass:"mr-1",attrs:{small:"",color:"error"}},[e._v("\n      mdi-alert-circle-outline\n    ")]),e._v("\n    Aguardando estimativa\n  ")],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{EstimateValues:n(605).default})},656:function(e,t,n){"use strict";n.r(t);var r=n(242),o=n(572),l=n(598),d=n(597),c=n(590),m=n(154),f=n(694),v=n(692),_=n(161),h=n(591),y=(n(7),n(10),n(13),n(14),n(1)),k=(n(4),n(11),n(8),n(166),n(108)),x=n(614),$=n(615),C=n(616);function O(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function S(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(t){Object(y.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var j={components:{ValidationObserver:k.a,ValidationProvider:k.b},props:{demand:{type:Object,default:function(){return null}}},data:function(){return{demandTypes:x.a,demandStatus:$.a,demandPriorities:C.a,dialog:!1,form:{title:"",body:null,points:0,price:null,type:null,priority:null,progress:0,status:"backlog",paid:!1,billable:null,estimated:null}}},computed:{customer:function(){return this.$store.state.customer},estimate:function(){return this.form.points&&this.customer?{estimate_in_days:Math.round(this.form.points/this.customer.points_per_day),price:this.form.points*this.customer.point_price,billable:this.form.billable}:null}},created:function(){var e=this;this.demand&&Object.keys(this.form).forEach((function(t){void 0!==e.demand[t]&&null!==e.demand[t]&&(e.form[t]=e.demand[t])}))},methods:{save:function(){var e=this,form=S({},this.form);this.demand?this.$axios.$patch("/v1/demands/"+this.demand._id,form).then((function(t){e.$notifier.success("Atualizado!"),e.$emit("input",t)})):this.$axios.$post("/v1/demands",S(S({},form),{},{customer:this.customer._id})).then((function(t){e.$notifier.success("Salvo!"),e.$emit("input",t)}))},toggleMonth:function(e){this.active_month===e?this.active_month=null:this.active_month=e},removeItem:function(e,t,n){this.form.data[e-1][t-1].splice(n,1)},pointsChanged:function(){this.setEstimated(),this.setBillable()},setEstimated:function(){this.form.estimated=this.form.points>0},setBillable:function(){null===this.form.billable&&(this.form.billable=this.form.points>0)},close:function(){this.$emit("close")},remove:function(e){this.$emit("remove",e)}}},w=n(31),component=Object(w.a)(j,(function(){var e=this,t=e._self._c;return t(d.a,{attrs:{value:!0,fullscreen:"",persistent:""}},[t(o.a,{staticClass:"template-form",attrs:{color:"secondary"}},[t("DialogHeader",{on:{close:e.close}}),e._v(" "),t(l.a,{staticClass:"pt-6"},[t("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(n){var o=n.validate,l=n.invalid;return[t(c.a,{on:{submit:function(t){t.preventDefault(),o().then(e.save)}}},[null===e.form.type?t("div",[t("h3",{staticClass:"mb-6"},[e._v("Que tipo de demanda é essa?")]),e._v(" "),e._l(e.demandTypes,(function(n){return t(r.a,{key:n.value,staticClass:"mb-6 text-left",attrs:{color:"primary",large:"",block:""},on:{click:function(t){e.form.type=n.value}}},[t(m.a,{attrs:{left:""}},[e._v(" "+e._s(n.icon))]),e._v("\n              "+e._s(n.label)+"\n            ")],1)}))],2):null===e.form.priority?t("div",[t("h3",{staticClass:"mb-6"},[e._v("Qual a prioridade dessa demanda?")]),e._v(" "),e._l(e.demandPriorities,(function(n){return t(r.a,{key:n.value,staticClass:"mb-6 text-left",attrs:{color:n.color,large:"",block:""},on:{click:function(t){e.form.priority=n.value}}},[e._v("\n              "+e._s(n.label)+"\n            ")])}))],2):t("div",[t("validation-provider",{attrs:{name:"Título da demanda",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(n){var r=n.errors;return[t(h.a,{attrs:{rows:"1","auto-grow":"",label:"Título da demanda",outlined:"","error-messages":r,focusable:""},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})]}}],null,!0)}),e._v(" "),t("Editor",{attrs:{editable:""},model:{value:e.form.body,callback:function(t){e.$set(e.form,"body",t)},expression:"form.body"}}),e._v(" "),t("validation-provider",{attrs:{name:"Tipo de demanda",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(n){var r=n.errors;return[t(f.a,{attrs:{label:"Tipo de demanda",items:e.demandTypes,"item-value":"value","item-text":"label",outlined:"","error-messages":r},on:{change:e.setBillable},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}})]}}],null,!0)}),e._v(" "),t("validation-provider",{attrs:{name:"Prioridade",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(n){var r=n.errors;return[t(f.a,{attrs:{label:"Prioridade",items:e.demandPriorities,"item-value":"value","item-text":"label",outlined:"","error-messages":r},model:{value:e.form.priority,callback:function(t){e.$set(e.form,"priority",t)},expression:"form.priority"}})]}}],null,!0)}),e._v(" "),"admin"===e.$auth.user.role?t("validation-provider",{attrs:{name:"Status da demanda",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(n){var r=n.errors;return[t(f.a,{attrs:{label:"Status da demanda",items:e.demandStatus,"item-value":"value","item-text":"label",outlined:"","error-messages":r},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}})]}}],null,!0)}):e._e(),e._v(" "),"admin"===e.$auth.user.role?t("validation-provider",{attrs:{name:"Pontos",rules:"required|min_value:0"},scopedSlots:e._u([{key:"default",fn:function(n){var r=n.errors;return[t(_.a,{attrs:{label:"Pontos",type:"number",outlined:"","error-messages":r},on:{input:e.pointsChanged},model:{value:e.form.points,callback:function(t){e.$set(e.form,"points",t)},expression:"form.points"}})]}}],null,!0)}):e._e(),e._v(" "),"admin"===e.$auth.user.role&&e.form.points<1?t(v.a,{attrs:{label:"Marcar como estimada",color:"success"},model:{value:e.form.estimated,callback:function(t){e.$set(e.form,"estimated",t)},expression:"form.estimated"}}):e._e(),e._v(" "),e.form.points>0?t("div",[t(v.a,{attrs:{label:"Você vai cobrar por essa demanda?",outlined:"",color:"success"},model:{value:e.form.billable,callback:function(t){e.$set(e.form,"billable",t)},expression:"form.billable"}}),e._v(" "),"admin"===e.$auth.user.role&&e.estimate&&e.estimate.estimate_in_days>0?t("div",[t("EstimateValues",{attrs:{item:e.estimate}})],1):e._e()],1):e._e(),e._v(" "),t("div",{staticClass:"d-flex justify-space-between align-center"},["admin"===e.$auth.user.role&&e.demand&&!e.demand.approved?t("Remove",{on:{confirm:e.remove}}):e._e(),e._v(" "),t("Save",{attrs:{invalid:l,label:"Salvar demanda",block:!1}})],1)],1)])]}}])})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{DialogHeader:n(359).default,Editor:n(608).default,EstimateValues:n(605).default,Remove:n(635).default,Save:n(360).default})},657:function(e,t,n){"use strict";n.r(t);var r=n(242),o=n(572),l=n(609),d=n(598),c=n(597),m=n(574),f=n(154),v=(n(25),n(49),n(22)),_=(n(63),n(614)),h=n(615),y=n(616),k={props:{demand:{type:Object,required:!0},preview:{type:Boolean,default:!1}},data:function(){return{demandTypes:_.a,demandTypeLabel:_.c,demandTypeIcon:_.b,demandPriorityLabel:y.c,demandPriorityColor:y.b,demandStatus:h.a,demandStatusLabel:h.b,demandPriorities:y.a,edit:!1}},created:function(){},methods:{close:function(){this.$emit("close")},changed:function(e){this.edit=!1,this.$emit("input",e)},remove:function(e){this.$emit("remove",e)},updateStatus:function(e,t){var n=this;return Object(v.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,n.$axios.$patch("/v1/demands/".concat(e._id),{status:t});case 2:o=r.sent,n.changed(o);case 4:case"end":return r.stop()}}),r)})))()}}},x=n(31),component=Object(x.a)(k,(function(){var e=this,t=e._self._c;return t(c.a,{attrs:{value:!0,fullscreen:"",persistent:""}},[t(o.a,[t("div",{staticClass:"pb-12"},[t("DialogHeader",{on:{close:e.close}}),e._v(" "),t(d.a,[t("h3",{staticClass:"mb-3"},[e._v(e._s(e.demand.title))]),e._v(" "),t("div",{staticClass:"mb-3"},[t("Editor",{attrs:{value:e.demand.body}})],1),e._v(" "),t("div",{staticClass:"mb-3"},[t("DemandEstimate",{attrs:{demand:e.demand}})],1),e._v(" "),t("div",{staticClass:"d-flex justify-space-between align-start"},[t("div",[e.demand.type?t(l.a,{staticClass:"secondary--text text--lighten-4",attrs:{outlined:"",small:""}},[e._v("\n              "+e._s(e.demandTypeLabel(e.demand.type))+"\n              "+e._s(e.demandStatusLabel(e.demand.status).toLowerCase().replace("finalizadas","finalizada"))+"\n            ")]):e._e(),e._v(" "),e.demand.approved&&"backlog"===e.demand.status?t(l.a,{attrs:{outlined:"",small:"",color:"success"}},[t(f.a,{attrs:{left:"",small:""}},[e._v(" mdi-check ")]),e._v("\n              Aprovada\n            ")],1):e._e()],1),e._v(" "),e.demand.priority?t(l.a,{staticClass:"justify-center",staticStyle:{"min-width":"60px"},attrs:{outlined:"",small:"",color:e.demandPriorityColor(e.demand.priority)}},[e._v("\n            Prioridade\n            "+e._s(e.demandPriorityLabel(e.demand.priority).toLowerCase())+"\n          ")]):e._e()],1),e._v(" "),e.preview||"admin"!==e.$auth.user.role&&e.demand.approved?e._e():t("div",{staticClass:"text-right"},[t(m.a,{staticClass:"my-3"}),e._v(" "),t("div",{staticClass:"d-flex justify-space-between align-center"},[e.demand.approved?e._e():t("div",[e.demand.approved?e._e():t(r.a,{on:{click:function(t){e.edit=!0}}},[t(f.a,{attrs:{left:""}},[e._v("mdi-pencil")]),e._v(" Editar\n              ")],1)],1),e._v(" "),"admin"===e.$auth.user.role?t("div",["backlog"===e.demand.status?t(r.a,{attrs:{color:"success",large:""},on:{click:function(t){return e.updateStatus(e.demand,"in-progress")}}},[t(f.a,{attrs:{left:""}},[e._v("mdi-play")]),e._v("\n                Iniciar\n              ")],1):e._e(),e._v(" "),"in-progress"===e.demand.status?t(r.a,{attrs:{color:"success",large:""},on:{click:function(t){return e.updateStatus(e.demand,"done")}}},[t(f.a,{attrs:{left:""}},[e._v("mdi-check")]),e._v("\n                Finalizar\n              ")],1):e._e()],1):e._e()])],1)]),e._v(" "),e.edit?t("DemandForm",{attrs:{demand:e.demand},on:{input:e.changed,close:function(t){e.edit=!1},remove:e.remove}}):e._e()],1)])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{DialogHeader:n(359).default,Editor:n(608).default,DemandEstimate:n(655).default,DemandForm:n(656).default})}}]);