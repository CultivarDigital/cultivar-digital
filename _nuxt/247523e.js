(window.webpackJsonp=window.webpackJsonp||[]).push([[12,14],{608:function(t,e,n){"use strict";n.r(e);var o=n(240),r=n(155),l={props:{item:{type:Object,default:null},showEditButton:{type:Boolean,default:!1}}},c=n(31),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",[t.item.estimate_in_days>0?e("span",{staticClass:"caption text--secondary"},[t.item.billable?e("span",[t._v("\n      "+t._s(t._f("moeda")(t.item.price))+" -\n      "+t._s(t.$utils.plural(t.item.estimate_in_days,"dia útil"))+"\n    ")]):e("span",[t._v("\n      "+t._s(t.$utils.plural(t.item.estimate_in_days,"dia útil"))+"\n    ")])]):e("span",{staticClass:"caption text--disabled"},[t._v("Não será estimada")]),t._v(" "),t.showEditButton?e(o.a,{attrs:{icon:"",small:""},on:{click:function(e){return t.$emit("edit")}}},[e(r.a,{attrs:{small:""}},[t._v("mdi-pencil")])],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports},633:function(t,e,n){var content=n(634);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("7b5d4dc6",content,!0,{sourceMap:!1})},634:function(t,e,n){var o=n(15)((function(i){return i[1]}));o.push([t.i,".v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}.v-input--checkbox.v-input--dense{margin-top:4px}",""]),o.locals={},t.exports=o},635:function(t,e,n){var content=n(636);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("ae7a972c",content,!0,{sourceMap:!1})},636:function(t,e,n){var o=n(15)((function(i){return i[1]}));o.push([t.i,'.v-input--selection-controls{margin-top:16px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-bottom:0;margin-top:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:24px}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{cursor:pointer;height:100%;opacity:0;position:absolute;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:100%}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;left:-12px;margin:7px;position:absolute;top:calc(50% - 24px);transition:inherit;width:34px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";left:0;opacity:.2;position:absolute;right:0;top:0;transform:scale(.2);transform-origin:center center;transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{height:28px;left:-9px;width:28px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:inherit}.v-input--selection-controls.v-input--is-disabled:not(.v-input--is-readonly){pointer-events:none}.v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}',""]),o.locals={},t.exports=o},660:function(t,e,n){"use strict";n.r(e);var o=n(240),r=n(572),l=n(676),c=n(597),d=n(596),h=n(589),v=n(155),m=n(162),f=(n(8),n(7),n(10),n(4),n(13),n(11),n(14),n(1)),_=n(107);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var x={components:{ValidationObserver:_.a,ValidationProvider:_.b},props:{demand:{type:Object,required:!0},showEstimateButton:{type:Boolean,default:!1},showEditButton:{type:Boolean,default:!1}},data:function(){return{form:{points:this.demand.points||null,estimated:!0,billable:this.demand.billable||!0},show_form:!1}},computed:{estimate:function(){return this.form.points&&this.customer?{estimate_in_days:Math.round(this.form.points/this.customer.points_per_day),price:this.form.points*this.customer.point_price,billable:this.form.billable}:null}},methods:{save:function(){var t=this,form=function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(f.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},this.form);this.$axios.$patch("/v1/demands/"+this.demand._id,form).then((function(e){t.$notifier.success("Estimativa atualizada!"),t.$emit("input",e),t.close()}))},pointsChanged:function(){this.setEstimated(),this.setBillable()},setEstimated:function(){this.form.estimated=this.form.points>0},setBillable:function(){null===this.form.billable&&(this.form.billable=this.form.points>0)},close:function(){this.show_form=!1,this.$emit("close")}}},w=x,O=n(31),component=Object(O.a)(w,(function(){var t=this,e=t._self._c;return e("div",[t.demand.estimated?e("EstimateValues",{attrs:{item:t.demand,"show-edit-button":"provider"===t.$auth.user.role&&!t.demand.approved&&t.showEditButton},on:{edit:function(e){t.show_form=!0}}}):t._e(),t._v(" "),t.demand.estimated||"backlog"!==t.demand.status?t._e():e("div",[t.showEstimateButton?t._e():e("div",{staticClass:"small text-caption text--secondary"},[t._v("\n      Aguardando estimativa\n    ")]),t._v(" "),"provider"===t.$auth.user.role&&t.showEstimateButton?e(o.a,{staticClass:"mt-2",attrs:{color:"success"},on:{click:function(e){t.show_form=!0}}},[e(v.a,{attrs:{left:"",small:""}},[t._v("mdi-calculator")]),t._v("\n      Estimar esta demanda\n    ")],1):t._e()],1),t._v(" "),t.show_form?e(d.a,{attrs:{value:!0,"overlay-opacity":.9,"max-width":"350"},on:{"click:outside":t.close,keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.close.apply(null,arguments)}}},[e(r.a,{attrs:{outlined:""}},[e(c.a,[e("div",{staticClass:"d-flex align-center justify-space-between mb-6"},[e("div",{staticClass:"d-flex align-center"},[e("h3",[t._v("Estimar demanda")])]),t._v(" "),e(o.a,{attrs:{icon:""},on:{click:t.close}},[e(v.a,[t._v("mdi-close")])],1)],1),t._v(" "),e("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(n){var o=n.validate,r=n.invalid;return[e(h.a,{on:{submit:function(e){e.preventDefault(),o().then(t.save)}}},["provider"===t.$auth.user.role?e("validation-provider",{attrs:{name:"Pontos",rules:"required|min_value:0"},scopedSlots:t._u([{key:"default",fn:function(n){var o=n.errors;return[e(m.a,{attrs:{label:"Pontos",type:"number",outlined:"","error-messages":o,"hide-details":"auto","bg-color":"#fff"},on:{input:t.pointsChanged},model:{value:t.form.points,callback:function(e){t.$set(t.form,"points",e)},expression:"form.points"}})]}}],null,!0)}):t._e(),t._v(" "),t.form.points>0?e("div",[e(l.a,{attrs:{label:"Você vai cobrar por essa demanda?",outlined:"",color:"success"},model:{value:t.form.billable,callback:function(e){t.$set(t.form,"billable",e)},expression:"form.billable"}}),t._v(" "),t.estimate&&t.estimate.estimate_in_days>0?e("div",{staticClass:"text-center"},[e("EstimateValues",{attrs:{item:t.estimate}})],1):t._e()],1):t._e(),t._v(" "),e("div",[e("Save",{attrs:{invalid:r,label:"Salvar estimativa","show-error-alert":!1}})],1)],1)]}}],null,!1,3045713523)})],1)],1)],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{EstimateValues:n(608).default,Save:n(359).default})},676:function(t,e,n){"use strict";n(8),n(7),n(10),n(13),n(11),n(14);var o=n(90),r=n(1),l=(n(4),n(78),n(633),n(635),n(44)),c=n(89),d=n(98),h=n(2).a.extend({name:"rippleable",directives:{ripple:d.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}}),v=n(256),m=n(5);function f(t){t.preventDefault()}var _=Object(m.a)(c.a,h,v.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,input=this.internalValue;return this.isMultiple?!!Array.isArray(input)&&input.some((function(n){return t.valueComparator(n,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,input):Boolean(input):this.valueComparator(input,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var label=c.a.options.methods.genLabel.call(this);return label?(label.data.on={click:f},label):label},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:f},ref:"input"})},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,input=this.internalValue;if(this.isMultiple){Array.isArray(input)||(input=[]);var n=input.length;(input=input.filter((function(n){return!t.valueComparator(n,e)}))).length===n&&input.push(e)}else input=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(input,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(input,e)?null:e:!input;this.validate(!0,input),this.internalValue=input,this.hasColor=input}},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown:function(t){}}}),y=["title"];function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=_.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return w(w({},c.a.options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var t=this.attrs$,e=(t.title,Object(o.a)(t,y));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(l.a,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",w(w({},e),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})}}]);