(window.webpackJsonp=window.webpackJsonp||[]).push([[9,7,16,23],{506:function(e,t,n){"use strict";n.r(t);var r={methods:{close:function(){this.$emit("close")}}},o=n(69),c=n(70),l=n.n(c),m=n(206),d=n(504),v=n(527),f=n(203),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-container",{staticClass:"d-flex align-center justify-space-between"},[r("div",{staticClass:"d-flex align-center"},[r("img",{staticClass:"logo",attrs:{src:n(230)}}),e._v(" "),r("span",{staticClass:"ml-3"},[r("strong",[e._v("Cultivar")]),e._v(" Digital")])]),e._v(" "),r("v-btn",{attrs:{icon:""},on:{click:e.close}},[r("v-icon",[e._v("mdi-close")])],1)],1),e._v(" "),r("v-divider")],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VBtn:m.a,VContainer:d.a,VDivider:v.a,VIcon:f.a})},507:function(e,t,n){"use strict";n.r(t);var r={props:{invalid:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},block:{type:Boolean,default:!0},label:{type:String,default:"Salvar"}}},o=n(69),c=n(70),l=n.n(c),m=n(501),d=n(206),v=n(207),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.invalid?n("v-alert",{staticClass:"d-flex justify-center",attrs:{type:"error"}},[e._v("\n    Você deve corrigir os erros acima antes de salvar\n  ")]):e._e(),e._v(" "),n("v-btn",{staticClass:"mb-4 mt-4 font-weight-bold text-none",attrs:{"x-large":"",type:"submit",color:"primary",disabled:e.invalid||e.loading,block:e.block,rounded:""}},[e.loading?n("v-progress-circular",{attrs:{color:"secondary",indeterminate:"",size:"20"}}):n("span",[e._v(e._s(e.label))])],1)],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VAlert:m.a,VBtn:d.a,VProgressCircular:v.a})},510:function(e,t,n){"use strict";n.r(t);var r=n(69),o=n(70),c=n.n(o),l=n(207),component=Object(r.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"text-center"},[t("v-progress-circular",{attrs:{indeterminate:""}})],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VProgressCircular:l.a})},512:function(e,t,n){"use strict";n.r(t);var r={props:{color:{type:String,default:null},message:{type:String,default:null}}},o=n(69),c=n(70),l=n.n(c),m=n(501),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center",on:{click:function(t){return e.$emit("click")}}},[n("v-alert",{attrs:{color:e.color}},[e._v(e._s(e.message))])],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VAlert:m.a})},569:function(e,t,n){"use strict";n.r(t);n(11),n(12),n(18),n(19);var r=n(22),o=n(3),c=(n(71),n(4),n(15),n(13),n(183),n(143));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var m={components:{ValidationObserver:c.a,ValidationProvider:c.b},props:{company:{type:Object,default:function(){return null}}},data:function(){return{form:{name:"",corporate_name:"",cnpj:"",address:"",phone:"",email:"",notes:"",point_price:0,point_unit:"hour",points_per_day:0}}},computed:{baseUrl:function(){return"http://localhost:3000"}},created:function(){var e=this;this.company&&Object.keys(this.form).forEach((function(t){e.company[t]&&(e.form[t]=e.company[t])}))},methods:{save:function(){var e=this,form=function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},this.form);this.company?this.$axios.$patch("/v1/companies/"+this.company._id,form).then((function(t){e.$notifier.success("Atualizado!"),e.$emit("input",t)})):this.$axios.$post("/v1/companies",form).then((function(t){e.$notifier.success("Salvo!"),e.$emit("input",t)}))},toggleMonth:function(e){this.active_month===e?this.active_month=null:this.active_month=e},removeItem:function(e,t,n){this.form.data[e-1][t-1].splice(n,1)},copy:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,navigator.clipboard.writeText(e);case 2:t.notify("Copiado!");case 3:case"end":return n.stop()}}),n)})))()},close:function(){this.$emit("close")}}},d=m,v=n(69),f=n(70),_=n.n(f),y=n(206),h=n(521),x=n(504),C=n(651),$=n(540),k=n(203),O=n(537),j=n(554),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{value:!0,fullscreen:""}},[n("v-card",{staticClass:"template-form"},[n("DialogHeader",{on:{close:e.close}}),e._v(" "),n("v-container",{staticClass:"pt-6"},[n("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(t){var r=t.validate,o=t.invalid;return[n("v-form",{on:{submit:function(t){t.preventDefault(),r().then(e.save)}}},[n("validation-provider",{attrs:{name:"Nome da empresa",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[n("v-text-field",{attrs:{label:"Nome da empresa",outlined:"","error-messages":r},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})]}}],null,!0)}),e._v(" "),n("v-text-field",{attrs:{label:"Razão social",outlined:""},model:{value:e.form.corporate_name,callback:function(t){e.$set(e.form,"corporate_name",t)},expression:"form.corporate_name"}}),e._v(" "),n("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:["##.###.###/####-##"],expression:"['##.###.###/####-##']"}],attrs:{label:"CNPJ",outlined:""},model:{value:e.form.cnpj,callback:function(t){e.$set(e.form,"cnpj",t)},expression:"form.cnpj"}}),e._v(" "),n("v-textarea",{attrs:{rows:"2",label:"Endereço",outlined:""},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}}),e._v(" "),n("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:["(##) ####-####","(##) #####-####"],expression:"['(##) ####-####', '(##) #####-####']"}],attrs:{label:"Telefone de contato",outlined:""},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}}),e._v(" "),n("v-text-field",{attrs:{label:"Email de contato",outlined:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),e._v(" "),n("v-textarea",{attrs:{label:"Observações",outlined:""},model:{value:e.form.notes,callback:function(t){e.$set(e.form,"notes",t)},expression:"form.notes"}}),e._v(" "),"admin"===e.$auth.user.role?n("div",[n("v-text-field",{attrs:{label:"Pontos por dia",outlined:""},model:{value:e.form.points_per_day,callback:function(t){e.$set(e.form,"points_per_day",t)},expression:"form.points_per_day"}}),e._v(" "),n("v-text-field",{attrs:{label:"Preço do ponto",outlined:""},model:{value:e.form.point_price,callback:function(t){e.$set(e.form,"point_price",t)},expression:"form.point_price"}})],1):e._e(),e._v(" "),e.company?n("v-btn",{staticClass:"mb-6",attrs:{small:""},on:{click:function(){return e.copy(e.baseUrl+"/cadastrar?cliente="+e.company._id)}}},[n("v-icon",{attrs:{left:"",small:""}},[e._v(" mdi-content-copy ")]),e._v("\n            Copiar link de cadastro\n          ")],1):e._e(),e._v(" "),n("div",{staticClass:"text-right"},[n("Save",{attrs:{invalid:o,block:!1,label:"Salvar"}})],1)],1)]}}])})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;_()(component,{DialogHeader:n(506).default,Save:n(507).default}),_()(component,{VBtn:y.a,VCard:h.a,VContainer:x.a,VDialog:C.a,VForm:$.a,VIcon:k.a,VTextField:O.a,VTextarea:j.a})},601:function(e,t,n){"use strict";n.r(t);var r=n(22),o=(n(104),n(4),n(71),{data:function(){return{companyId:"",addCompany:!1,editCompany:!1,loading:!0}},computed:{company:function(){return this.$store.state.company},companies:function(){return this.$store.state.companies}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("admin"!==e.$auth.user.role){t.next=3;break}return t.next=3,e.loadCompanies();case 3:if("user"!==e.$auth.user.role){t.next=6;break}return t.next=6,e.loadCompany();case 6:case"end":return t.stop()}}),t)})))()},methods:{companyUpdated:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("admin"!==t.$auth.user.role){n.next=4;break}return n.next=3,t.loadCompanies();case 3:t.companyId&&t.companySelected(t.companyId);case 4:"user"===t.$auth.user.role&&t.$store.commit("setCompany",e),t.close();case 6:case"end":return n.stop()}}),n)})))()},loadCompany:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$axios.$get("/v1/companies/"+e.$auth.user.company);case 3:n=t.sent,e.$store.commit("setCompany",n),e.loading=!1;case 6:case"end":return t.stop()}}),t)})))()},loadCompanies:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$axios.$get("/v1/companies");case 3:(n=t.sent)&&e.$store.commit("setCompanies",n),e.loading=!1;case 6:case"end":return t.stop()}}),t)})))()},companySelected:function(e){e?this.$store.commit("setCompany",this.companies.find((function(t){return t._id===e}))):this.$store.commit("setCompany",null)},close:function(){this.addCompany=!1,this.editCompany=!1}}}),c=n(69),l=n(70),m=n.n(l),d=n(206),v=n(504),f=n(203),_=n(208),y=n(134),h=n(142),x=n(488),C=n(646),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"py-6",attrs:{fluid:""}},[e.loading?n("div",[n("Loading")],1):n("div",["admin"===e.$auth.user.role&&e.companies?n("div",[n("v-select",{attrs:{"hide-details":"auto",items:e.companies,label:"Cliente","item-value":"_id","item-text":"name",clearable:"",outlined:""},on:{input:e.companySelected},scopedSlots:e._u([{key:"append-outer",fn:function(){return[n("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n("v-btn",e._g(e._b({attrs:{dark:"",small:"",icon:""}},"v-btn",o,!1),r),[n("v-icon",[e._v("mdi-dots-vertical")])],1)]}}],null,!1,1524802101)},[e._v(" "),n("v-list",[e.company?n("v-list-item",{on:{click:function(t){e.editCompany=!0}}},[n("v-list-item-title",[e._v("Editar")])],1):e._e(),e._v(" "),"admin"===e.$auth.user.role?n("v-list-item",{on:{click:function(t){e.addCompany=!0}}},[n("v-list-item-title",[e._v("Adicionar cliente")])],1):e._e()],1)],1)]},proxy:!0}],null,!1,2313083409),model:{value:e.companyId,callback:function(t){e.companyId=t},expression:"companyId"}})],1):e._e(),e._v(" "),"user"===e.$auth.user.role&&e.company?n("div",{staticClass:"d-flex justify-space-between align-center"},[n("div",[n("h2",[e._v(e._s(e.company.name))]),e._v(" "),n("div",[n("small",[e._v(e._s(e.$auth.user.name))])])]),e._v(" "),n("div",[n("v-btn",{attrs:{icon:""},on:{click:function(t){e.editCompany=!0}}},[n("v-icon",[e._v("mdi-pencil")])],1)],1)]):e._e(),e._v(" "),e.company?e._e():n("div",{staticClass:"pt-6"},[n("Alert",{attrs:{message:"Selecione a empresa"}})],1),e._v(" "),e.addCompany?n("CompanyForm",{on:{input:e.companyUpdated,close:e.close}}):e._e(),e._v(" "),e.editCompany?n("CompanyForm",{attrs:{company:e.company},on:{input:e.companyUpdated,close:e.close}}):e._e()],1)])}),[],!1,null,null,null);t.default=component.exports;m()(component,{Loading:n(510).default,Alert:n(512).default,CompanyForm:n(569).default}),m()(component,{VBtn:d.a,VContainer:v.a,VIcon:f.a,VList:_.a,VListItem:y.a,VListItemTitle:h.c,VMenu:x.a,VSelect:C.a})}}]);