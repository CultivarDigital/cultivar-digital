(window.webpackJsonp=window.webpackJsonp||[]).push([[41,30],{545:function(t,e,r){"use strict";r.r(e);var n=r(539),o=r(218),l=r(193),c={props:{invalid:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},block:{type:Boolean,default:!0},label:{type:String,default:"Salvar"}}},d=r(62),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",[t.invalid?e(n.a,{staticClass:"d-flex justify-center",attrs:{type:"error"}},[t._v("\n    Você deve corrigir os erros acima antes de salvar\n  ")]):t._e(),t._v(" "),e(o.a,{staticClass:"mb-4 mt-4 font-weight-bold text-none",attrs:{"x-large":"",type:"submit",color:"success",disabled:t.invalid||t.loading,block:t.block,rounded:""}},[t.loading?e(l.a,{attrs:{color:"secondary",indeterminate:"",size:"20"}}):e("span",[t._v(t._s(t.label))])],1)],1)}),[],!1,null,null,null);e.default=component.exports},585:function(t,e,r){"use strict";var n=r(3),o=(r(42),r(68),r(238),r(13),r(4),r(15),r(55),r(102),r(12),r(14),r(18),r(19),r(8)),l=r(104),c=r(153);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},700:function(t,e,r){"use strict";r.r(e);var n=r(539),o=r(218),l=r(541),c=r(585),d=r(194),f=r(564),m=(r(40),r(78),r(26),r(56),r(152)),h=r(61),v={components:{ValidationObserver:m.a,ValidationProvider:m.b},layout:"public",data:function(){return{loading:!1,showPassword:!1,form:{name:"",email:"",password:"",password_confirmation:""}}},methods:{register:function(){var t=this;this.form.password&&this.form.password===this.form.password_confirmation?(this.loading=!0,this.$firebase.register(this.form.email.trim(),this.form.password).then((function(e){t.authenticateApi(e)})).catch(this.error)):this.$notifier.error("As senhas devem ser iguais")},authenticateApi:function(t){var e=this;Object(h.e)(Object(h.d)().currentUser).then((function(r){e.$auth.loginWith("local",{data:{token:r,customer_id:e.$route.query.cliente}}).then((function(r){var n=e.form.name;e.$axios.$patch("/v1/users/"+e.$auth.user.id,{name:n}).then((function(r){e.$auth.setUser(r),e.welcome(t.user)}))}))}))},error:function(t){this.$notifier.firebaseError(t),this.loading=!1},welcome:function(t){this.loading=!1,this.$router.replace("/atendimento"),this.notify("Seja bem vindo(a)")}}},w=r(62),component=Object(w.a)(v,(function(){var t=this,e=t._self._c;return e(l.a,{staticClass:"mt-3 text-center"},[e("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(r){var l=r.validate,m=r.invalid;return[e("p",{staticClass:"mb-6"},[e("User")],1),t._v(" "),t.$route.query.cliente?e(c.a,{on:{submit:function(e){e.preventDefault(),l().then(t.register)}}},[e("h3",{staticClass:"text-h5 font-weight-bold"},[t._v("Seja bem vindo(a)")]),t._v(" "),e("p",{staticClass:"mb-8",staticStyle:{color:"#ababab"}},[t._v("Vamos começar o seu cadastro?")]),t._v(" "),e("validation-provider",{attrs:{name:"name",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(r){var n=r.errors;return[e(f.a,{attrs:{outlined:"",label:"Qual seu nome?","error-messages":n},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})]}}],null,!0)}),t._v(" "),e("validation-provider",{attrs:{name:"e-mail",rules:"required|min:4"},scopedSlots:t._u([{key:"default",fn:function(r){var n=r.errors;return[e(f.a,{attrs:{outlined:"",label:"Qual seu email?","error-messages":n},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})]}}],null,!0)}),t._v(" "),e("validation-provider",{attrs:{name:"senha",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(r){var n=r.errors;return[e(f.a,{attrs:{outlined:"",type:t.showPassword?"text":"password",label:"Vamos criar uma senha pra você?","error-messages":n},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}},[e(d.a,{attrs:{slot:"append",color:"primary"},on:{click:function(e){t.showPassword=!t.showPassword}},slot:"append"},[t._v("\n            mdi-eye\n          ")])],1)]}}],null,!0)}),t._v(" "),e("validation-provider",{attrs:{name:"confirmação da senha",rules:"required|min:4"},scopedSlots:t._u([{key:"default",fn:function(r){var n=r.errors;return[e(f.a,{attrs:{outlined:"",type:t.showPassword?"text":"password",label:"Confirme sua senha","error-messages":n},model:{value:t.form.password_confirmation,callback:function(e){t.$set(t.form,"password_confirmation",e)},expression:"form.password_confirmation"}},[e(d.a,{attrs:{slot:"append",color:"primary"},on:{click:function(e){t.showPassword=!t.showPassword}},slot:"append"},[t._v("\n            mdi-eye\n          ")])],1)]}}],null,!0)}),t._v(" "),e("Save",{attrs:{invalid:m,loading:t.loading,label:"Cadastrar"}}),t._v(" "),e("div",{staticClass:"text-center"},[e(o.a,{attrs:{color:"primary",plain:"",to:{path:"/login",query:t.$route.query}}},[t._v("Entre")])],1)],1):e(n.a,{attrs:{color:"error",dark:""}},[t._v("\n      É necessário um código de cadastro para continuar. Por favor, entre em\n      contato com nossa equipe e peça o link de cadastro.\n    ")])]}}])})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Save:r(545).default})}}]);