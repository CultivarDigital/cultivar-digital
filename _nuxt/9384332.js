(window.webpackJsonp=window.webpackJsonp||[]).push([[45,31],{545:function(t,e,r){"use strict";r.r(e);var n=r(540),o=r(219),l=r(215),c={props:{invalid:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},block:{type:Boolean,default:!0},label:{type:String,default:"Salvar"}}},d=r(62),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",[t.invalid?e(n.a,{staticClass:"d-flex justify-center",attrs:{type:"error"}},[t._v("\n    Você deve corrigir os erros acima antes de salvar\n  ")]):t._e(),t._v(" "),e(o.a,{staticClass:"mb-4 mt-4 font-weight-bold text-none",attrs:{"x-large":"",type:"submit",color:"success",disabled:t.invalid||t.loading,block:t.block,rounded:""}},[t.loading?e(l.a,{attrs:{color:"secondary",indeterminate:"",size:"20"}}):e("span",[t._v(t._s(t.label))])],1)],1)}),[],!1,null,null,null);e.default=component.exports},547:function(t,e,r){t.exports=r.p+"img/logo.0ed42f9.png"},582:function(t,e,r){"use strict";var n=r(3),o=(r(41),r(69),r(234),r(14),r(4),r(15),r(56),r(102),r(11),r(10),r(18),r(19),r(8)),l=r(103),c=r(154);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},699:function(t,e,r){"use strict";r.r(e);var n=r(219),o=r(542),l=r(582),c=r(194),d=r(580),f=(r(79),r(26),r(47),r(152)),h=r(61),v={components:{ValidationObserver:f.a,ValidationProvider:f.b},layout:"public",data:function(){return{showPassword:!1,loading:!1,form:{login:"",password:""}}},methods:{signInWithGoogle:function(t){var e=this;this.$firebase.loginWithGoogle().then((function(t){t&&t.user&&e.authenticateApi(t)})).catch(this.$notifier.firebaseError)},authenticateApi:function(t){var e=this;Object(h.e)(Object(h.d)().currentUser).then((function(r){e.$auth.loginWith("local",{data:{token:r,group_id:e.$route.query.codigo}}).then((function(r){e.welcome(t.user),e.loading=!1})).catch((function(t){e.$notifier.apiError(t),e.loading=!1}))}))},login:function(){var t=this;this.loading=!0,this.$firebase.login(this.form.login.trim(),this.form.password).then((function(e){t.authenticateApi(e)})).catch((function(e){t.$notifier.firebaseError(e),t.loading=!1}))},welcome:function(){this.$router.replace("/atendimento")}}},m=r(62),component=Object(m.a)(v,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"d-flex align-center"},[e(o.a,{staticClass:"pt-10 text-center",staticStyle:{"max-width":"340px"}},[e("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(o){var f=o.validate,h=o.invalid;return[e(l.a,{on:{submit:function(e){e.preventDefault(),f().then(t.login)}}},[e("img",{staticClass:"mb-6",attrs:{src:r(547),alt:"Cultivar Digital",width:"140"}}),t._v(" "),e("div",[e("p",{staticClass:"text-subtitle-1 mb-6"},[t._v("\n            Informe seu e-mail e senha para acessar a área de clientes.\n          ")]),t._v(" "),e("validation-provider",{attrs:{name:"e-mail",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(r){var n=r.errors;return[e(d.a,{attrs:{outlined:"",label:"Digite seu e-mail","error-messages":n},model:{value:t.form.login,callback:function(e){t.$set(t.form,"login",e)},expression:"form.login"}})]}}],null,!0)}),t._v(" "),e("validation-provider",{attrs:{name:"senha",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(r){var n=r.errors;return[e(d.a,{attrs:{outlined:"",type:t.showPassword?"text":"password","error-messages":n,label:"Digite sua senha","hide-details":"auto"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}},[e(c.a,{attrs:{slot:"append"},on:{click:function(e){t.showPassword=!t.showPassword}},slot:"append"},[t._v("\n                mdi-eye\n              ")])],1)]}}],null,!0)}),t._v(" "),e("div",{staticClass:"text-right mb-6 mt-2"})],1),t._v(" "),e("Save",{attrs:{invalid:h,loading:t.loading,label:"Entrar"}}),t._v(" "),e(n.a,{staticClass:"mb-2",attrs:{color:"primary",block:"",rounded:""},on:{click:t.signInWithGoogle}},[e(c.a,{attrs:{left:""}},[t._v("mdi-google")]),t._v(" Entrar com o google\n        ")],1)],1)]}}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Save:r(545).default})}}]);