(window.webpackJsonp=window.webpackJsonp||[]).push([[18,7,14],{602:function(t,e,n){"use strict";n.r(e);var o=n(592),r={props:{color:{type:String,default:"secondary"},message:{type:String,default:null}}},l=n(31),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"text-center",on:{click:function(e){return t.$emit("click")}}},[e(o.a,{attrs:{color:t.color}},[t._v(t._s(t.message))])],1)}),[],!1,null,null,null);e.default=component.exports},603:function(t,e,n){"use strict";n.r(e);var o=n(238),r=n(31),component=Object(r.a)({},(function(){var t=this._self._c;return t("div",{staticClass:"text-center"},[t(o.a,{attrs:{indeterminate:""}})],1)}),[],!1,null,null,null);e.default=component.exports},608:function(t,e,n){var content=n(618);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("ae7a972c",content,!0,{sourceMap:!1})},610:function(t,e,n){"use strict";n(4),n(78),n(10);var o=n(88),r=n(97),l=n(2).a.extend({name:"rippleable",directives:{ripple:r.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}}),c=n(257),d=n(5);function h(t){t.preventDefault()}e.a=Object(d.a)(o.a,l,c.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,input=this.internalValue;return this.isMultiple?!!Array.isArray(input)&&input.some((function(n){return t.valueComparator(n,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,input):Boolean(input):this.valueComparator(input,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var label=o.a.options.methods.genLabel.call(this);return label?(label.data.on={click:h},label):label},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:h},ref:"input"})},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,input=this.internalValue;if(this.isMultiple){Array.isArray(input)||(input=[]);var n=input.length;(input=input.filter((function(n){return!t.valueComparator(n,e)}))).length===n&&input.push(e)}else input=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(input,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(input,e)?null:e:!input;this.validate(!0,input),this.internalValue=input,this.hasColor=input}},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown:function(t){}}})},618:function(t,e,n){var o=n(15)((function(i){return i[1]}));o.push([t.i,'.v-input--selection-controls{margin-top:16px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-bottom:0;margin-top:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:24px}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{cursor:pointer;height:100%;opacity:0;position:absolute;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:100%}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;left:-12px;margin:7px;position:absolute;top:calc(50% - 24px);transition:inherit;width:34px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";left:0;opacity:.2;position:absolute;right:0;top:0;transform:scale(.2);transform-origin:center center;transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{height:28px;left:-9px;width:28px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:inherit}.v-input--selection-controls.v-input--is-disabled:not(.v-input--is-readonly){pointer-events:none}.v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}',""]),o.locals={},t.exports=o},620:function(t,e,n){var content=n(621);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("7b5d4dc6",content,!0,{sourceMap:!1})},621:function(t,e,n){var o=n(15)((function(i){return i[1]}));o.push([t.i,".v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}.v-input--checkbox.v-input--dense{margin-top:4px}",""]),o.locals={},t.exports=o},661:function(t,e,n){"use strict";n(8),n(7),n(10),n(13),n(11),n(14);var o=n(90),r=n(1),l=(n(4),n(78),n(620),n(608),n(44)),c=n(88),d=n(610),h=["title"];function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=d.a.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return f(f({},c.a.options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var t=this.attrs$,e=(t.title,Object(o.a)(t,h));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(l.a,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",f(f({},e),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},670:function(t,e,n){"use strict";n.r(e);var o=n(572),r=n(661),l=n(598),c=n(597),d=n(590),h=n(243),v=n(155),f=n(244),m=n(165),_=n(591),y=(n(8),n(7),n(13),n(14),n(1)),x=n(22),k=(n(63),n(4),n(76),n(10),n(11),n(166),n(108));function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(y.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var j={components:{ValidationObserver:k.a,ValidationProvider:k.b},data:function(){return{loading:!1,demands:[],form:{title:this.$moment().locale("pt-br").format("MMM-YYYY").toUpperCase(),status:"pending",points:0,price:0,estimate_in_days:0,items:[]}}},computed:{customer:function(){return this.$store.state.customer},totalPrice:function(){return this.selectedItems.reduce((function(t,e){return t+e.price}),0)},totalPoints:function(){return this.selectedItems.reduce((function(t,e){return t+e.points}),0)},totalEstimateInDays:function(){return this.selectedItems.reduce((function(t,e){return t+e.estimate_in_days}),0)},selectedItems:function(){return this.form.items.filter((function(t){return t.checked})).map((function(t){return{demand:t.demand._id,points:t.points,price:t.price,estimate_in_days:t.estimate_in_days}}))}},created:function(){this.loadDemands()},methods:{loadDemands:function(){var t=this;return Object(x.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$axios.$get("/v1/demands",{params:{status:"backlog",customer:t.customer._id,approved:!1,billable:!0,with_points:!0}});case 3:t.demands=e.sent,t.demands.forEach((function(e){t.form.items.push({demand:e,price:e.price,points:e.points,estimate_in_days:e.estimate_in_days,checked:!1})})),t.loading=!1;case 6:case"end":return e.stop()}}),e)})))()},save:function(){var t=this,form=w({},this.form);form.items=this.selectedItems,form.price=this.totalPrice,form.points=this.totalPoints,form.estimate_in_days=this.totalEstimateInDays,this.loading=!0,this.$axios.$post("/v1/proposals",w(w({},form),{},{customer:this.customer._id})).then((function(e){t.$notifier.success("Proposta gerada!"),t.$emit("input",e)})),this.loading=!1},toggleMonth:function(t){this.active_month===t?this.active_month=null:this.active_month=t},removeItem:function(t,e,n){this.form.data[t-1][e-1].splice(n,1)},close:function(){this.$emit("close")}}},I=n(31),component=Object(I.a)(j,(function(){var t=this,e=t._self._c;return e(c.a,{attrs:{value:!0,fullscreen:"",persistent:""}},[e(o.a,[e("DialogHeader",{on:{close:t.close}}),t._v(" "),t.loading?e("div",{staticClass:"pt-6"},[e("Loading")],1):e("div",[e(l.a,[e("h3",[t._v("Gerar proposta comercial")])]),t._v(" "),e("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(n){var o=n.validate,c=n.invalid;return[e(d.a,{on:{submit:function(e){e.preventDefault(),o().then(t.save)}}},[e("div",[e(l.a,[e("validation-provider",{attrs:{name:"Título da proposta",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(n){var o=n.errors;return[e(_.a,{attrs:{rows:"1","auto-grow":"",label:"Título da proposta",outlined:"","error-messages":o,focusable:""},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})]}}],null,!0)}),t._v(" "),t.form.items&&t.form.items.length?e("div",[e("div",[t._v("\n                  Selecione as demandas que deseja incluir na proposta:\n                ")]),t._v(" "),e(h.a,{attrs:{color:"secondary"}},t._l(t.form.items,(function(n){return e(v.a,{key:n._id},[e(m.a,[e(m.c,[t._v("\n                        "+t._s(n.demand.title)+"\n                      ")]),t._v(" "),n.points>0?e(m.b,[t._v("\n                        "+t._s(t._f("moeda")(n.price))+" ("+t._s(n.estimate_in_days)+"\n                        dias)\n                      ")]):t._e()],1),t._v(" "),e(f.a,[e(r.a,{attrs:{color:"primary"},model:{value:n.checked,callback:function(e){t.$set(n,"checked",e)},expression:"item.checked"}})],1)],1)})),1),t._v(" "),t.totalPoints>0?e("div",{staticClass:"text-right"},[e("h3",[t._v("\n                    Total: "+t._s(t._f("moeda")(t.totalPrice))+" ("+t._s(t.totalEstimateInDays)+"\n                    dias)\n                  ")]),t._v(" "),e("Save",{attrs:{invalid:c,block:!1,label:"Salvar"}})],1):t._e()],1):e("div",[e("Alert",{attrs:{message:"Nenhuma com valor estimado foi encontrada na fila para a proposta"}})],1)],1)],1)])]}}])})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DialogHeader:n(359).default,Loading:n(603).default,Save:n(360).default,Alert:n(602).default})}}]);