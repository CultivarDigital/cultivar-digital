(window.webpackJsonp=window.webpackJsonp||[]).push([[11,16,20,28],{515:function(e,t,n){"use strict";n.r(t);var r={methods:{close:function(){this.$emit("close")}}},o=n(62),l=n(63),d=n.n(l),v=n(208),c=n(513),f=n(205),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-container",{staticClass:"d-flex align-center justify-space-between"},[r("div",{staticClass:"d-flex align-center"},[r("img",{staticClass:"logo",attrs:{src:n(236)}}),e._v(" "),r("span",{staticClass:"ml-3"},[r("strong",[e._v("Cultivar")]),e._v(" Digital")])]),e._v(" "),r("v-btn",{attrs:{icon:""},on:{click:e.close}},[r("v-icon",[e._v("mdi-close")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VBtn:v.a,VContainer:c.a,VIcon:f.a})},518:function(e,t,n){"use strict";n.r(t);var r={props:{invalid:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},block:{type:Boolean,default:!0},label:{type:String,default:"Salvar"}}},o=n(62),l=n(63),d=n.n(l),v=n(510),c=n(208),f=n(186),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.invalid?n("v-alert",{staticClass:"d-flex justify-center",attrs:{type:"error"}},[e._v("\n    Você deve corrigir os erros acima antes de salvar\n  ")]):e._e(),e._v(" "),n("v-btn",{staticClass:"mb-4 mt-4 font-weight-bold text-none",attrs:{"x-large":"",type:"submit",color:"success",disabled:e.invalid||e.loading,block:e.block,rounded:""}},[e.loading?n("v-progress-circular",{attrs:{color:"secondary",indeterminate:"",size:"20"}}):n("span",[e._v(e._s(e.label))])],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VAlert:v.a,VBtn:c.a,VProgressCircular:f.a})},522:function(e,t,n){var content=n(523);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(21).default)("5c8fbe94",content,!0,{sourceMap:!1})},523:function(e,t,n){var r=n(20)(!1);r.push([e.i,"html{scroll-behavior:smooth;scroll-padding-top:56px}section{min-height:calc(100vh - 56px)}@media(max-width:960px){section{min-height:calc(100vh - 56px)}}.tertiary--text{opacity:.4}.logo{width:42px}@media(min-width:960px){.logo{width:64px}}.nav-btn{box-shadow:none!important}@media(max-width:960px){.nav-btn{display:none}}.container{max-width:960px;padding:16px}.v-tab{font-size:12px!important}.v-slide-group__next,.v-slide-group__prev{display:none!important}.theme--light .v-application{color:#2b2b2b!important}.theme--light .v-app-bar.v-toolbar.v-sheet{background-color:#fff!important}.theme--dark .v-application{color:#fff!important}.theme--dark .v-app-bar.v-toolbar.v-sheet{background-color:#2b2b2b!important}.v-textarea textarea{align-self:stretch;flex:1 1 auto;line-height:1.75rem;max-width:100%;min-height:32px;outline:none;padding:0;width:100%}.v-textarea .v-text-field__prefix,.v-textarea .v-text-field__suffix{padding-top:2px;align-self:start}.v-textarea.v-text-field--box .v-text-field__prefix,.v-textarea.v-text-field--box textarea,.v-textarea.v-text-field--enclosed .v-text-field__prefix,.v-textarea.v-text-field--enclosed textarea{margin-top:24px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) textarea{margin-top:10px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-label{top:18px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense textarea{margin-top:6px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-outer{align-self:flex-start;margin-top:8px}.v-textarea.v-text-field--solo{align-items:flex-start}.v-textarea.v-text-field--solo .v-input__append-inner,.v-textarea.v-text-field--solo .v-input__append-outer,.v-textarea.v-text-field--solo .v-input__prepend-inner,.v-textarea.v-text-field--solo .v-input__prepend-outer{align-self:flex-start;margin-top:12px}.v-application--is-ltr .v-textarea.v-text-field--solo .v-input__append-inner{padding-left:12px}.v-application--is-rtl .v-textarea.v-text-field--solo .v-input__append-inner{padding-right:12px}.v-textarea--auto-grow textarea{overflow:hidden}.v-textarea--no-resize textarea{resize:none}.v-textarea.v-text-field--enclosed .v-text-field__slot{align-self:stretch}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-right:-12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-left:-12px}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-right:12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-left:12px}",""]),e.exports=r},560:function(e,t,n){"use strict";var r=n(3),o=(n(37),n(56),n(237),n(13),n(4),n(15),n(50),n(105),n(12),n(11),n(18),n(19),n(8)),l=n(107),d=n(144);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(o.a)(l.a,Object(d.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var e=this,t=function(input){return input.$watch("hasError",(function(t){e.$set(e.errorBag,input._uid,t)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(e.errorBag.hasOwnProperty(input._uid)||(n.valid=t(input)))})):n.valid=t(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var e=this.inputs.find((function(i){return i._uid===input._uid}));if(e){var t=this.watchers.find((function(i){return i._uid===e._uid}));t&&(t.valid(),t.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==e._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:c({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},564:function(e,t,n){"use strict";n(12),n(11),n(13),n(4),n(18),n(15),n(19);var r=n(3),o=(n(32),n(50),n(522),n(533)),l=n(8);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var v=Object(l.a)(o.a);t.a=v.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(e){return!isNaN(parseFloat(e))}},rows:{type:[Number,String],default:5,validator:function(e){return!isNaN(parseInt(e,10))}}},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},o.a.options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{autoGrow:function(e){var t=this;this.$nextTick((function(){var n;e?t.calculateInputHeight():null==(n=t.$refs.input)||n.style.removeProperty("height")}))},lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var e=this;setTimeout((function(){e.autoGrow&&e.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var input=this.$refs.input;if(input){input.style.height="0";var e=input.scrollHeight,t=parseInt(this.rows,10)*parseFloat(this.rowHeight);input.style.height=Math.max(t,e)+"px"}},genInput:function(){var input=o.a.options.methods.genInput.call(this);return input.tag="textarea",delete input.data.attrs.type,input.data.attrs.rows=this.rows,input},onInput:function(e){o.a.options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}})},591:function(e,t,n){"use strict";n.r(t);n(32),n(25),n(65);var r={props:{value:{type:Number,default:null},label:{type:String,default:null}},data:function(){return{v:this.value||0}},methods:{updateValue:function(){if(this.v){var e=Number(this.v.replace("R$ ","").replace(/\./g,"").replace(",","."));this.$emit("input",e)}else this.$emit("input",0)}}},o=n(62),l=n(63),d=n.n(l),v=n(533),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("v-text-field",{directives:[{name:"money",rawName:"v-money",value:{decimal:",",thousands:".",precision:2},expression:"{ decimal: ',', thousands: '.', precision: 2 }"}],attrs:{label:e.label,outlined:""},on:{input:e.updateValue},model:{value:e.v,callback:function(t){e.v=t},expression:"v"}})}),[],!1,null,null,null);t.default=component.exports;d()(component,{VTextField:v.a})},603:function(e,t,n){"use strict";n.r(t);n(11),n(13),n(18),n(19);var r=n(22),o=n(3),l=(n(71),n(4),n(15),n(12),n(184),n(145));function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var v={components:{ValidationObserver:l.a,ValidationProvider:l.b},props:{customer:{type:Object,default:function(){return null}}},data:function(){return{form:{name:"",corporate_name:"",cnpj:"",address:"",phone:"",email:"",notes:"",point_price:0,point_unit:"hour",points_per_day:0}}},computed:{baseUrl:function(){return"http://localhost:3000"}},created:function(){var e=this;this.customer&&Object.keys(this.form).forEach((function(t){e.customer[t]&&(e.form[t]=e.customer[t])}))},methods:{save:function(){var e=this,form=function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},this.form);this.customer?this.$axios.$patch("/v1/customers/"+this.customer._id,form).then((function(t){e.$notifier.success("Atualizado!"),e.$emit("input",t)})):this.$axios.$post("/v1/customers",form).then((function(t){e.$notifier.success("Salvo!"),e.$emit("input",t)}))},toggleMonth:function(e){this.active_month===e?this.active_month=null:this.active_month=e},removeItem:function(e,t,n){this.form.data[e-1][t-1].splice(n,1)},copy:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,navigator.clipboard.writeText(e);case 2:t.notify("Copiado!");case 3:case"end":return n.stop()}}),n)})))()},close:function(){this.$emit("close")}}},c=v,f=n(62),x=n(63),m=n.n(x),h=n(208),_=n(544),y=n(513),w=n(672),O=n(560),j=n(205),$=n(533),k=n(564),component=Object(f.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{value:!0,fullscreen:"",persistent:""}},[n("v-card",{staticClass:"template-form"},[n("DialogHeader",{on:{close:e.close}}),e._v(" "),n("v-container",{staticClass:"pt-6"},[n("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(t){var r=t.validate,o=t.invalid;return[n("v-form",{on:{submit:function(t){t.preventDefault(),r().then(e.save)}}},[n("validation-provider",{attrs:{name:"Nome da empresa",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[n("v-text-field",{attrs:{label:"Nome da empresa",outlined:"","error-messages":r},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})]}}],null,!0)}),e._v(" "),n("v-text-field",{attrs:{label:"Razão social",outlined:""},model:{value:e.form.corporate_name,callback:function(t){e.$set(e.form,"corporate_name",t)},expression:"form.corporate_name"}}),e._v(" "),n("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:["##.###.###/####-##"],expression:"['##.###.###/####-##']"}],attrs:{label:"CNPJ",outlined:""},model:{value:e.form.cnpj,callback:function(t){e.$set(e.form,"cnpj",t)},expression:"form.cnpj"}}),e._v(" "),n("v-textarea",{attrs:{rows:"2",label:"Endereço",outlined:""},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}}),e._v(" "),n("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:["(##) ####-####","(##) #####-####"],expression:"['(##) ####-####', '(##) #####-####']"}],attrs:{label:"Telefone de contato",outlined:""},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}}),e._v(" "),n("v-text-field",{attrs:{label:"Email de contato",outlined:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),e._v(" "),n("v-textarea",{attrs:{label:"Observações",outlined:""},model:{value:e.form.notes,callback:function(t){e.$set(e.form,"notes",t)},expression:"form.notes"}}),e._v(" "),"admin"===e.$auth.user.role?n("div",[n("v-text-field",{attrs:{label:"Pontos por dia",outlined:""},model:{value:e.form.points_per_day,callback:function(t){e.$set(e.form,"points_per_day",t)},expression:"form.points_per_day"}}),e._v(" "),n("Money",{attrs:{label:"Preço do ponto"},model:{value:e.form.point_price,callback:function(t){e.$set(e.form,"point_price",t)},expression:"form.point_price"}})],1):e._e(),e._v(" "),e.customer?n("v-btn",{staticClass:"mb-6",attrs:{small:""},on:{click:function(){return e.copy(e.baseUrl+"/cadastrar?cliente="+e.customer._id)}}},[n("v-icon",{attrs:{left:"",small:""}},[e._v(" mdi-content-copy ")]),e._v("\n            Copiar link de cadastro\n          ")],1):e._e(),e._v(" "),n("div",{staticClass:"text-right"},[n("Save",{attrs:{invalid:o,block:!1,label:"Salvar"}})],1)],1)]}}])})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{DialogHeader:n(515).default,Money:n(591).default,Save:n(518).default}),m()(component,{VBtn:h.a,VCard:_.a,VContainer:y.a,VDialog:w.a,VForm:O.a,VIcon:j.a,VTextField:$.a,VTextarea:k.a})}}]);