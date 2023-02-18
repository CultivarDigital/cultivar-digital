(window.webpackJsonp=window.webpackJsonp||[]).push([[20,9,13,17,22,30],{540:function(e,t,r){"use strict";r.r(t);var o=r(220),n=r(538),l=r(194),c={methods:{close:function(){this.$emit("close")}}},m=r(48),component=Object(m.a)(c,(function(){var e=this,t=e._self._c;return t("div",[t(n.a,{staticClass:"d-flex align-center justify-space-between"},[t("div",{staticClass:"d-flex align-center"},[t("img",{staticClass:"logo",attrs:{src:r(235)}}),e._v(" "),t("span",{staticClass:"ml-3"},[t("strong",[e._v("Cultivar")]),e._v(" Digital")])]),e._v(" "),t(o.a,{attrs:{icon:""},on:{click:e.close}},[t(l.a,[e._v("mdi-close")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},542:function(e,t,r){"use strict";r.r(t);var o=r(536),n=r(220),l=r(193),c={props:{invalid:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},block:{type:Boolean,default:!0},label:{type:String,default:"Salvar"}}},m=r(48),component=Object(m.a)(c,(function(){var e=this,t=e._self._c;return t("div",[e.invalid?t(o.a,{staticClass:"d-flex justify-center",attrs:{type:"error"}},[e._v("\n    Você deve corrigir os erros acima antes de salvar\n  ")]):e._e(),e._v(" "),t(n.a,{staticClass:"mb-4 mt-4 font-weight-bold text-none",attrs:{"x-large":"",type:"submit",color:"success",disabled:e.invalid||e.loading,block:e.block,rounded:""}},[e.loading?t(l.a,{attrs:{color:"secondary",indeterminate:"",size:"20"}}):t("span",[e._v(e._s(e.label))])],1)],1)}),[],!1,null,null,null);t.default=component.exports},573:function(e,t,r){"use strict";r.r(t);var o=r(564),n=(r(29),r(26),r(57),{props:{value:{type:Number,default:null},label:{type:String,default:null}},data:function(){return{v:this.value||0}},methods:{updateValue:function(){if(this.v){var e=Number(this.v.replace("R$ ","").replace(/\./g,"").replace(",","."));this.$emit("input",e)}else this.$emit("input",0)}}}),l=r(48),component=Object(l.a)(n,(function(){var e=this;return(0,e._self._c)(o.a,{directives:[{name:"money",rawName:"v-money",value:{decimal:",",thousands:".",precision:2},expression:"{ decimal: ',', thousands: '.', precision: 2 }"}],attrs:{label:e.label,outlined:""},on:{input:e.updateValue},model:{value:e.v,callback:function(t){e.v=t},expression:"v"}})}),[],!1,null,null,null);t.default=component.exports},574:function(e,t,r){"use strict";r.r(t);var o=r(536),n={props:{color:{type:String,default:null},message:{type:String,default:null}}},l=r(48),component=Object(l.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"text-center",on:{click:function(t){return e.$emit("click")}}},[t(o.a,{attrs:{color:e.color}},[e._v(e._s(e.message))])],1)}),[],!1,null,null,null);t.default=component.exports},579:function(e,t,r){"use strict";r.r(t);var o=r(220),n=r(571),l=r(538),c=r(703),m=r(591),d=r(194),f=r(564),v=r(593),_=(r(40),r(14),r(13),r(18),r(19),r(17)),h=r(3),y=(r(67),r(5),r(15),r(12),r(192),r(152));function x(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var k={components:{ValidationObserver:y.a,ValidationProvider:y.b},props:{customer:{type:Object,default:function(){return null}}},data:function(){return{form:{name:"",corporate_name:"",cnpj:"",address:"",phone:"",email:"",notes:"",point_price:0,point_unit:"hour",points_per_day:0}}},computed:{baseUrl:function(){return"https://cultivardigital.com.br"}},created:function(){var e=this;this.customer&&Object.keys(this.form).forEach((function(t){e.customer[t]&&(e.form[t]=e.customer[t])}))},methods:{save:function(){var e=this,form=function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(t){Object(h.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},this.form);this.customer?this.$axios.$patch("/v1/customers/"+this.customer._id,form).then((function(t){e.$notifier.success("Atualizado!"),e.$emit("input",t)})):this.$axios.$post("/v1/customers",form).then((function(t){e.$notifier.success("Salvo!"),e.$emit("input",t)}))},toggleMonth:function(e){this.active_month===e?this.active_month=null:this.active_month=e},removeItem:function(e,t,r){this.form.data[e-1][t-1].splice(r,1)},copy:function(e){var t=this;return Object(_.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,navigator.clipboard.writeText(e);case 2:t.notify("Copiado!");case 3:case"end":return r.stop()}}),r)})))()},close:function(){this.$emit("close")}}},C=k,O=r(48),component=Object(O.a)(C,(function(){var e=this,t=e._self._c;return t(c.a,{attrs:{value:!0,fullscreen:"",persistent:""}},[t(n.a,{staticClass:"template-form"},[t("DialogHeader",{on:{close:e.close}}),e._v(" "),t(l.a,{staticClass:"pt-6"},[t("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(r){var n=r.validate,l=r.invalid;return[t(m.a,{on:{submit:function(t){t.preventDefault(),n().then(e.save)}}},[t("validation-provider",{attrs:{name:"Nome da empresa",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(r){var o=r.errors;return[t(f.a,{attrs:{label:"Nome da empresa",outlined:"","error-messages":o},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})]}}],null,!0)}),e._v(" "),t(f.a,{attrs:{label:"Razão social",outlined:""},model:{value:e.form.corporate_name,callback:function(t){e.$set(e.form,"corporate_name",t)},expression:"form.corporate_name"}}),e._v(" "),t(f.a,{directives:[{name:"mask",rawName:"v-mask",value:["##.###.###/####-##"],expression:"['##.###.###/####-##']"}],attrs:{label:"CNPJ",outlined:""},model:{value:e.form.cnpj,callback:function(t){e.$set(e.form,"cnpj",t)},expression:"form.cnpj"}}),e._v(" "),t(v.a,{attrs:{rows:"2",label:"Endereço",outlined:""},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}}),e._v(" "),t(f.a,{directives:[{name:"mask",rawName:"v-mask",value:["(##) ####-####","(##) #####-####"],expression:"['(##) ####-####', '(##) #####-####']"}],attrs:{label:"Telefone de contato",outlined:""},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}}),e._v(" "),t(f.a,{attrs:{label:"Email de contato",outlined:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),e._v(" "),t(v.a,{attrs:{label:"Observações",outlined:""},model:{value:e.form.notes,callback:function(t){e.$set(e.form,"notes",t)},expression:"form.notes"}}),e._v(" "),"admin"===e.$auth.user.role?t("div",[t(f.a,{attrs:{label:"Pontos por dia",outlined:""},model:{value:e.form.points_per_day,callback:function(t){e.$set(e.form,"points_per_day",t)},expression:"form.points_per_day"}}),e._v(" "),t("Money",{attrs:{label:"Preço do ponto"},model:{value:e.form.point_price,callback:function(t){e.$set(e.form,"point_price",t)},expression:"form.point_price"}})],1):e._e(),e._v(" "),e.customer?t(o.a,{staticClass:"mb-6",attrs:{small:""},on:{click:function(){return e.copy(e.baseUrl+"/cadastrar?cliente="+e.customer._id)}}},[t(d.a,{attrs:{left:"",small:""}},[e._v(" mdi-content-copy ")]),e._v("\n            Copiar link de cadastro\n          ")],1):e._e(),e._v(" "),t("div",{staticClass:"text-right"},[t("Save",{attrs:{invalid:l,block:!1,label:"Salvar"}})],1)],1)]}}])})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{DialogHeader:r(540).default,Money:r(573).default,Save:r(542).default})},592:function(e,t,r){"use strict";r.r(t);var o=r(641),n=r(220),l=r(538),c=r(194),m=r(640),d=r(643),f=(r(40),r(17)),v=(r(67),{data:function(){return{editCustomer:!1,search:""}},computed:{customer:function(){return this.$store.state.customer},customerSummary:function(){return this.$store.state.customerSummary}},mounted:function(){var e=this;return Object(f.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.$route.params.cliente,console.log("customerId",r),!r){t.next=7;break}return t.next=5,e.$store.dispatch("loadCustomer",r);case 5:return t.next=7,e.$store.dispatch("loadCustomerSummary");case 7:case"end":return t.stop()}}),t)})))()},methods:{customerUpdated:function(e){this.close(),this.$store.commit("setCustomer",e)},close:function(){this.editCustomer=!1}}}),_=r(48),component=Object(_.a)(v,(function(){var e=this,t=e._self._c;return e.customer?t("div",[t(l.a,{staticClass:"d-flex justify-space-between align-center py-6"},[t("div",[t("h3",[e._v(e._s(e.customer.name))]),e._v(" "),t("div",{staticClass:"caption secondary--text text--lighten-4"},[e._v("\n        "+e._s(e.$auth.user.name)+"\n      ")])]),e._v(" "),t("div",[t(n.a,{attrs:{icon:""},on:{click:function(t){e.editCustomer=!0}}},[t(c.a,[e._v("mdi-pencil")])],1)],1)]),e._v(" "),e.editCustomer?t("CustomerForm",{attrs:{customer:e.customer},on:{input:e.customerUpdated,close:e.close}}):e._e(),e._v(" "),t(l.a,{staticClass:"px-0 px-md-4 py-0"},[t(d.a,{staticClass:"mb-3",attrs:{"show-arrows":!0}},[t(m.a,{attrs:{to:"/"+e.customer._id+"/demandas"}},[e._v("\n        Demandas\n        "),e.customerSummary&&e.customerSummary.pendingDemands?t(o.a,{attrs:{color:"accent",small:"",content:e.customerSummary.pendingDemands}}):e._e()],1),e._v(" "),t(m.a,{attrs:{to:"/"+e.customer._id+"/propostas"}},[e._v("\n        Propostas\n        "),e.customerSummary&&e.customerSummary.pendingProposals?t(o.a,{attrs:{color:"accent",content:e.customerSummary.pendingProposals}}):e._e()],1),e._v(" "),t(m.a,{attrs:{to:"/"+e.customer._id+"/faturas"}},[e._v("Faturas")])],1)],1)],1):e._e()}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{CustomerForm:r(579).default})},675:function(e,t,r){"use strict";r.r(t);var o=r(538),n=r(48),component=Object(n.a)({},(function(){var e=this._self._c;return e("div",[e("CustomerHeader"),this._v(" "),e(o.a,[e("Alert",{attrs:{message:"Nenhuma fatura aqui"}})],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{CustomerHeader:r(592).default,Alert:r(574).default})}}]);