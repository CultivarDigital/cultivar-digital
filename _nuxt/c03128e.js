(window.webpackJsonp=window.webpackJsonp||[]).push([[2,12,13,14],{605:function(t,e,n){"use strict";n.r(e);var o=n(240),r=n(572),l=n(568),c=n(596),d=n(155),m=n(588),v={props:{button:{type:Boolean,default:!1},label:{type:String,default:"Tem certeza disso?"},hint:{type:String,default:"Esta alteração não pode ser desfeita"},icon:{type:String,default:"mdi-delete"},buttonLabel:{type:String,default:"Remover"}},data:function(){return{dialog:!1}},methods:{confirm:function(){this.dialog=!1,this.$emit("confirm")},cancel:function(){this.dialog=!1,this.$emit("cancel")}}},f=n(31),component=Object(f.a)(v,(function(){var t=this,e=t._self._c;return e(c.a,{attrs:{"max-width":"290"},on:{"click:outside":function(e){t.removeComment=null}},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,l=n.attrs;return[t.button?e(o.a,t._g(t._b({attrs:{small:""}},"v-btn",l,!1),r),[e(d.a,{attrs:{left:""}},[t._v(t._s(t.icon))]),t._v(" "+t._s(t.buttonLabel)+"\n    ")],1):e(o.a,t._g(t._b({attrs:{icon:"",small:""}},"v-btn",l,!1),r),[e(d.a,[t._v(t._s(t.icon))])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),e(r.a,[e(l.c,{staticClass:"text-h5"},[t._v("\n      "+t._s(t.label)+"\n    ")]),t._v(" "),e(l.b,[t._v(" "+t._s(t.hint)+" ")]),t._v(" "),e(l.a,{staticClass:"pa-3"},[e(m.a),t._v(" "),e(o.a,{attrs:{color:"error",large:""},on:{click:t.cancel}},[t._v(" Não ")]),t._v(" "),e(o.a,{attrs:{color:"success",large:""},on:{click:t.confirm}},[t._v(" Sim ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},608:function(t,e,n){"use strict";n.r(e);var o=n(240),r=n(155),l={props:{item:{type:Object,default:null},showEditButton:{type:Boolean,default:!1}}},c=n(31),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",[t.item.estimate_in_days>0?e("span",{staticClass:"caption text--secondary"},[t.item.billable?e("span",[t._v("\n      "+t._s(t._f("moeda")(t.item.price))+" -\n      "+t._s(t.$utils.plural(t.item.estimate_in_days,"dia útil"))+"\n    ")]):e("span",[t._v("\n      "+t._s(t.$utils.plural(t.item.estimate_in_days,"dia útil"))+"\n    ")])]):e("span",{staticClass:"caption text--disabled"},[t._v("Não será estimada")]),t._v(" "),t.showEditButton?e(o.a,{attrs:{icon:"",small:""},on:{click:function(e){return t.$emit("edit")}}},[e(r.a,{attrs:{small:""}},[t._v("mdi-pencil")])],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},610:function(t,e,n){"use strict";n.r(e);var o=n(240),r=n(572),l=n(611),c=n(597),d=n(596),m=n(574),v=n(155),f=(n(25),n(49),n(22)),h=(n(63),n(630)),_=n(631),y=n(632),x={props:{demand:{type:Object,required:!0},preview:{type:Boolean,default:!1}},data:function(){return{demandTypes:h.a,demandTypeLabel:h.c,demandTypeIcon:h.b,demandPriorityLabel:y.c,demandPriorityColor:y.b,demandStatus:_.a,demandStatusLabel:_.b,demandPriorities:y.a,edit:!1}},created:function(){},methods:{close:function(){this.$emit("close")},changed:function(t){this.edit=!1,this.$emit("input",t)},remove:function(t){this.$emit("remove",t)},updateStatus:function(t,e){var n=this;return Object(f.a)(regeneratorRuntime.mark((function o(){var r;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.$axios.$patch("/v1/demands/".concat(t._id),{status:e});case 2:r=o.sent,n.changed(r);case 4:case"end":return o.stop()}}),o)})))()},copy:function(t){var e=this;return Object(f.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,navigator.clipboard.writeText(t);case 2:e.notify("Copiado!");case 3:case"end":return n.stop()}}),n)})))()}}},k=n(31),component=Object(k.a)(x,(function(){var t=this,e=t._self._c;return e(d.a,{attrs:{value:!0,fullscreen:"",persistent:""}},[e(r.a,[e("div",{staticClass:"pb-12"},[e("DialogHeader",{on:{close:t.close}}),t._v(" "),e(c.a,[e("h3",{staticClass:"mb-3"},[t._v(t._s(t.demand.title))]),t._v(" "),t.demand.body&&t.demand.body.length?e("div",{staticClass:"mb-3"},[e("Editor",{attrs:{value:t.demand.body}})],1):t._e(),t._v(" "),e("div",{staticClass:"mb-6"},[e("DemandEstimate",{attrs:{demand:t.demand,"show-estimate-button":"","show-edit-button":""},on:{input:t.changed}})],1),t._v(" "),e("div",{staticClass:"d-flex justify-space-between align-start"},[e("div",[t.demand.type?e(l.a,{staticClass:"text--secondary",attrs:{outlined:"",small:""}},[t._v("\n              "+t._s(t.demandTypeLabel(t.demand.type))+"\n              "+t._s(t.demandStatusLabel(t.demand.status).toLowerCase().replace("finalizadas","finalizada"))+"\n            ")]):t._e(),t._v(" "),t.demand.approved&&"backlog"===t.demand.status?e(l.a,{attrs:{outlined:"",small:"",color:"success"}},[e(v.a,{attrs:{left:"",small:""}},[t._v(" mdi-check ")]),t._v(" Aprovada\n            ")],1):t._e()],1),t._v(" "),t.demand.priority?e(l.a,{staticClass:"justify-center",staticStyle:{"min-width":"60px"},attrs:{outlined:"",small:"",color:t.demandPriorityColor(t.demand.priority)}},[t._v("\n            Prioridade\n            "+t._s(t.demandPriorityLabel(t.demand.priority).toLowerCase())+"\n          ")]):t._e()],1),t._v(" "),t.preview||"provider"!==t.$auth.user.role&&t.demand.approved?t._e():e("div",{staticClass:"text-right"},[e(m.a,{staticClass:"my-3"}),t._v(" "),e("div",{staticClass:"d-flex justify-space-between align-center"},[e("div",[e(o.a,{on:{click:function(e){t.edit=!0}}},[e(v.a,{attrs:{left:""}},[t._v("mdi-pencil")]),t._v(" Editar\n              ")],1)],1),t._v(" "),"provider"===t.$auth.user.role?e("div",["backlog"===t.demand.status?e(o.a,{attrs:{color:"success",large:""},on:{click:function(e){return t.updateStatus(t.demand,"in-progress")}}},[e(v.a,{attrs:{left:""}},[t._v("mdi-play")]),t._v("\n                Iniciar\n              ")],1):t._e(),t._v(" "),"in-progress"===t.demand.status?e(o.a,{attrs:{color:"success",large:""},on:{click:function(e){return t.updateStatus(t.demand,"done")}}},[e(v.a,{attrs:{left:""}},[t._v("mdi-check")]),t._v("\n                Finalizar\n              ")],1):t._e()],1):t._e()])],1),t._v(" "),e("div",{staticClass:"pt-6"},[e(o.a,{staticClass:"mb-6",attrs:{small:""},on:{click:function(){return t.copy(t.baseURL+"/"+t.demand.customer+"/demandas?demanda="+t.demand._id)}}},[e(v.a,{attrs:{left:"",small:""}},[t._v(" mdi-content-copy ")]),t._v("\n            Copiar link\n          ")],1)],1)]),t._v(" "),t.edit?e("DemandForm",{attrs:{demand:t.demand},on:{input:t.changed,close:function(e){t.edit=!1},remove:t.remove}}):t._e()],1)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DialogHeader:n(358).default,Editor:n(604).default,DemandEstimate:n(660).default,DemandForm:n(661).default})},630:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return c}));n(85),n(4);var o=[{value:"feature",label:"Funcionalidade",icon:"mdi-star"},{value:"bug",label:"Correção",icon:"mdi-bug"},{value:"improvement",label:"Melhoria",icon:"mdi-wrench"}],r=function(t){return o.find((function(e){return e.value===t}))},l=function(t){var e=r(t);return e?e.icon:""},c=function(t){var e=r(t);return e?e.label:""};e.a=o},631:function(t,e,n){"use strict";n.d(e,"b",(function(){return r}));n(85),n(4);var o=[{label:"Na fila",value:"backlog"},{label:"Em andamento",value:"in-progress"},{label:"Finalizadas",value:"done"}],r=function(t){var e=o.find((function(e){return e.value===t}));return e?e.label:""};e.a=o},632:function(t,e,n){"use strict";n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return c}));n(85),n(4);var o=[{value:1,label:"Alta",color:"orange"},{value:2,label:"Média",color:"warning"},{value:3,label:"Baixa",color:"success"}],r=function(t){return o.find((function(p){return p.value===t}))},l=function(t){var e=r(t);return e?e.label:""},c=function(t){var e=r(t);return e?e.color:""};e.a=o},633:function(t,e,n){var content=n(634);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("7b5d4dc6",content,!0,{sourceMap:!1})},634:function(t,e,n){var o=n(15)((function(i){return i[1]}));o.push([t.i,".v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}.v-input--checkbox.v-input--dense{margin-top:4px}",""]),o.locals={},t.exports=o},635:function(t,e,n){var content=n(636);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("ae7a972c",content,!0,{sourceMap:!1})},636:function(t,e,n){var o=n(15)((function(i){return i[1]}));o.push([t.i,'.v-input--selection-controls{margin-top:16px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-bottom:0;margin-top:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:24px}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{cursor:pointer;height:100%;opacity:0;position:absolute;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:100%}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;left:-12px;margin:7px;position:absolute;top:calc(50% - 24px);transition:inherit;width:34px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";left:0;opacity:.2;position:absolute;right:0;top:0;transform:scale(.2);transform-origin:center center;transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{height:28px;left:-9px;width:28px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:inherit}.v-input--selection-controls.v-input--is-disabled:not(.v-input--is-readonly){pointer-events:none}.v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}',""]),o.locals={},t.exports=o},660:function(t,e,n){"use strict";n.r(e);var o=n(240),r=n(572),l=n(676),c=n(597),d=n(596),m=n(589),v=n(155),f=n(162),h=(n(8),n(7),n(10),n(4),n(13),n(11),n(14),n(1)),_=n(107);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var x={components:{ValidationObserver:_.a,ValidationProvider:_.b},props:{demand:{type:Object,required:!0},showEstimateButton:{type:Boolean,default:!1},showEditButton:{type:Boolean,default:!1}},data:function(){return{form:{points:this.demand.points||null,estimated:!0,billable:this.demand.billable||!0},show_form:!1}},computed:{estimate:function(){return this.form.points&&this.customer?{estimate_in_days:Math.round(this.form.points/this.customer.points_per_day),price:this.form.points*this.customer.point_price,billable:this.form.billable}:null}},methods:{save:function(){var t=this,form=function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(h.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},this.form);this.$axios.$patch("/v1/demands/"+this.demand._id,form).then((function(e){t.$notifier.success("Estimativa atualizada!"),t.$emit("input",e),t.close()}))},pointsChanged:function(){this.setEstimated(),this.setBillable()},setEstimated:function(){this.form.estimated=this.form.points>0},setBillable:function(){null===this.form.billable&&(this.form.billable=this.form.points>0)},close:function(){this.show_form=!1,this.$emit("close")}}},k=x,w=n(31),component=Object(w.a)(k,(function(){var t=this,e=t._self._c;return e("div",[t.demand.estimated?e("EstimateValues",{attrs:{item:t.demand,"show-edit-button":"provider"===t.$auth.user.role&&!t.demand.approved&&t.showEditButton},on:{edit:function(e){t.show_form=!0}}}):t._e(),t._v(" "),t.demand.estimated||"backlog"!==t.demand.status?t._e():e("div",[t.showEstimateButton?t._e():e("div",{staticClass:"small text-caption text--secondary"},[t._v("\n      Aguardando estimativa\n    ")]),t._v(" "),"provider"===t.$auth.user.role&&t.showEstimateButton?e(o.a,{staticClass:"mt-2",attrs:{color:"success"},on:{click:function(e){t.show_form=!0}}},[e(v.a,{attrs:{left:"",small:""}},[t._v("mdi-calculator")]),t._v("\n      Estimar esta demanda\n    ")],1):t._e()],1),t._v(" "),t.show_form?e(d.a,{attrs:{value:!0,"overlay-opacity":.9,"max-width":"350"},on:{"click:outside":t.close,keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.close.apply(null,arguments)}}},[e(r.a,{attrs:{outlined:""}},[e(c.a,[e("div",{staticClass:"d-flex align-center justify-space-between mb-6"},[e("div",{staticClass:"d-flex align-center"},[e("h3",[t._v("Estimar demanda")])]),t._v(" "),e(o.a,{attrs:{icon:""},on:{click:t.close}},[e(v.a,[t._v("mdi-close")])],1)],1),t._v(" "),e("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(n){var o=n.validate,r=n.invalid;return[e(m.a,{on:{submit:function(e){e.preventDefault(),o().then(t.save)}}},["provider"===t.$auth.user.role?e("validation-provider",{attrs:{name:"Pontos",rules:"required|min_value:0"},scopedSlots:t._u([{key:"default",fn:function(n){var o=n.errors;return[e(f.a,{attrs:{label:"Pontos",type:"number",outlined:"","error-messages":o,"hide-details":"auto","bg-color":"#fff"},on:{input:t.pointsChanged},model:{value:t.form.points,callback:function(e){t.$set(t.form,"points",e)},expression:"form.points"}})]}}],null,!0)}):t._e(),t._v(" "),t.form.points>0?e("div",[e(l.a,{attrs:{label:"Você vai cobrar por essa demanda?",outlined:"",color:"success"},model:{value:t.form.billable,callback:function(e){t.$set(t.form,"billable",e)},expression:"form.billable"}}),t._v(" "),t.estimate&&t.estimate.estimate_in_days>0?e("div",{staticClass:"text-center"},[e("EstimateValues",{attrs:{item:t.estimate}})],1):t._e()],1):t._e(),t._v(" "),e("div",[e("Save",{attrs:{invalid:r,label:"Salvar estimativa","show-error-alert":!1}})],1)],1)]}}],null,!1,3045713523)})],1)],1)],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{EstimateValues:n(608).default,Save:n(359).default})},661:function(t,e,n){"use strict";n.r(e);var o=n(240),r=n(572),l=n(597),c=n(596),d=n(589),m=n(155),v=n(690),f=n(590),h=n(1),_=(n(4),n(11),n(8),n(7),n(10),n(13),n(14),n(107)),y=n(630),x=n(631),k=n(632);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(h.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var C={components:{ValidationObserver:_.a,ValidationProvider:_.b},props:{demand:{type:Object,default:function(){return null}}},data:function(){return{demandTypes:y.a,demandStatus:x.a,demandPriorities:k.a,dialog:!1,form:{title:"",body:null,points:0,price:null,type:null,priority:null,progress:0,status:"backlog",paid:!1,billable:null,estimated:null}}},created:function(){var t=this;this.demand&&Object.keys(this.form).forEach((function(e){void 0!==t.demand[e]&&null!==t.demand[e]&&(t.form[e]=t.demand[e])}))},methods:{save:function(){var t=this,form=O({},this.form);this.demand?this.$axios.$patch("/v1/demands/"+this.demand._id,form).then((function(e){t.$notifier.success("Atualizado!"),t.$emit("input",e)})):this.$axios.$post("/v1/demands",O(O({},form),{},{customer:this.customer._id})).then((function(e){t.$notifier.success("Salvo!"),t.$emit("input",e)}))},close:function(){this.$emit("close")},remove:function(t){this.$emit("remove",t)}}},j=n(31),component=Object(j.a)(C,(function(){var t=this,e=t._self._c;return e(c.a,{attrs:{value:!0,fullscreen:"",persistent:""}},[e(r.a,[e("DialogHeader",{on:{close:t.close}}),t._v(" "),e(l.a,{staticClass:"pt-6"},[e("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(n){var r=n.validate,l=n.invalid;return[e(d.a,{on:{submit:function(e){e.preventDefault(),r().then(t.save)}}},[null===t.form.type?e("div",[e("h3",{staticClass:"mb-6"},[t._v("Que tipo de demanda é essa?")]),t._v(" "),t._l(t.demandTypes,(function(n){return e(o.a,{key:n.value,staticClass:"mb-6 text-left",attrs:{color:"primary",large:"",block:""},on:{click:function(e){t.form.type=n.value}}},[e(m.a,{attrs:{left:""}},[t._v(" "+t._s(n.icon))]),t._v("\n              "+t._s(n.label)+"\n            ")],1)}))],2):null===t.form.priority?e("div",[e("h3",{staticClass:"mb-6"},[t._v("Qual a prioridade dessa demanda?")]),t._v(" "),t._l(t.demandPriorities,(function(n){return e(o.a,{key:n.value,staticClass:"mb-6 text-left",attrs:{color:n.color,large:"",block:""},on:{click:function(e){t.form.priority=n.value}}},[t._v("\n              "+t._s(n.label)+"\n            ")])}))],2):e("div",[e("validation-provider",{attrs:{name:"Título da demanda",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(n){var o=n.errors;return[e(f.a,{attrs:{rows:"1","auto-grow":"",label:"Título da demanda",outlined:"","error-messages":o,focusable:""},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})]}}],null,!0)}),t._v(" "),e("Editor",{attrs:{editable:""},model:{value:t.form.body,callback:function(e){t.$set(t.form,"body",e)},expression:"form.body"}}),t._v(" "),e("validation-provider",{attrs:{name:"Tipo de demanda",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(n){var o=n.errors;return[e(v.a,{attrs:{label:"Tipo de demanda",items:t.demandTypes,"item-value":"value","item-text":"label",outlined:"","error-messages":o},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}})]}}],null,!0)}),t._v(" "),e("validation-provider",{attrs:{name:"Prioridade",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(n){var o=n.errors;return[e(v.a,{attrs:{label:"Prioridade",items:t.demandPriorities,"item-value":"value","item-text":"label",outlined:"","error-messages":o},model:{value:t.form.priority,callback:function(e){t.$set(t.form,"priority",e)},expression:"form.priority"}})]}}],null,!0)}),t._v(" "),"provider"===t.$auth.user.role?e("validation-provider",{attrs:{name:"Status da demanda",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(n){var o=n.errors;return[e(v.a,{attrs:{label:"Status da demanda",items:t.demandStatus,"item-value":"value","item-text":"label",outlined:"","error-messages":o},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})]}}],null,!0)}):t._e(),t._v(" "),e("div",{staticClass:"d-flex justify-space-between align-center"},["provider"===t.$auth.user.role&&t.demand&&!t.demand.approved?e("Remove",{on:{confirm:t.remove}}):t._e(),t._v(" "),e("Save",{attrs:{invalid:l,label:"Salvar demanda",block:!1}})],1)],1)])]}}])})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DialogHeader:n(358).default,Editor:n(604).default,Remove:n(605).default,Save:n(359).default})},676:function(t,e,n){"use strict";n(8),n(7),n(10),n(13),n(11),n(14);var o=n(90),r=n(1),l=(n(4),n(78),n(633),n(635),n(44)),c=n(89),d=n(98),m=n(2).a.extend({name:"rippleable",directives:{ripple:d.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}}),v=n(256),f=n(5);function h(t){t.preventDefault()}var _=Object(f.a)(c.a,m,v.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,input=this.internalValue;return this.isMultiple?!!Array.isArray(input)&&input.some((function(n){return t.valueComparator(n,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,input):Boolean(input):this.valueComparator(input,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var label=c.a.options.methods.genLabel.call(this);return label?(label.data.on={click:h},label):label},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:h},ref:"input"})},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,input=this.internalValue;if(this.isMultiple){Array.isArray(input)||(input=[]);var n=input.length;(input=input.filter((function(n){return!t.valueComparator(n,e)}))).length===n&&input.push(e)}else input=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(input,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(input,e)?null:e:!input;this.validate(!0,input),this.internalValue=input,this.hasColor=input}},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown:function(t){}}}),y=["title"];function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=_.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return k(k({},c.a.options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var t=this.attrs$,e=(t.title,Object(o.a)(t,y));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(l.a,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",k(k({},e),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})}}]);