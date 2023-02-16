(window.webpackJsonp=window.webpackJsonp||[]).push([[12,20,21,29],{516:function(e,t,n){"use strict";n.r(t);var r={props:{invalid:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},block:{type:Boolean,default:!0},label:{type:String,default:"Salvar"}}},o=n(62),c=n(63),l=n.n(c),m=n(511),d=n(208),v=n(186),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.invalid?n("v-alert",{staticClass:"d-flex justify-center",attrs:{type:"error"}},[e._v("\n    Você deve corrigir os erros acima antes de salvar\n  ")]):e._e(),e._v(" "),n("v-btn",{staticClass:"mb-4 mt-4 font-weight-bold text-none",attrs:{"x-large":"",type:"submit",color:"primary",disabled:e.invalid||e.loading,block:e.block,rounded:""}},[e.loading?n("v-progress-circular",{attrs:{color:"secondary",indeterminate:"",size:"20"}}):n("span",[e._v(e._s(e.label))])],1)],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VAlert:m.a,VBtn:d.a,VProgressCircular:v.a})},517:function(e,t,n){"use strict";n.r(t);var r={methods:{close:function(){this.$emit("close")}}},o=n(62),c=n(63),l=n.n(c),m=n(208),d=n(514),v=n(561),f=n(205),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-container",{staticClass:"d-flex align-center justify-space-between"},[r("div",{staticClass:"d-flex align-center"},[r("img",{staticClass:"logo",attrs:{src:n(237)}}),e._v(" "),r("span",{staticClass:"ml-3"},[r("strong",[e._v("Cultivar")]),e._v(" Digital")])]),e._v(" "),r("v-btn",{attrs:{icon:""},on:{click:e.close}},[r("v-icon",[e._v("mdi-close")])],1)],1),e._v(" "),r("v-divider")],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VBtn:m.a,VContainer:d.a,VDivider:v.a,VIcon:f.a})},531:function(e,t,n){"use strict";n.r(t);var r=n(62),o=n(63),c=n.n(o),l=n(186),component=Object(r.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"text-center"},[t("v-progress-circular",{attrs:{indeterminate:""}})],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VProgressCircular:l.a})},571:function(e,t,n){"use strict";n.r(t);n(32),n(25),n(64);var r={props:{value:{type:Number,default:null},label:{type:String,default:null}},data:function(){return{v:this.value||0}},methods:{updateValue:function(){if(this.v){var e=Number(this.v.replace("R$ ","").replace(/\./g,"").replace(",","."));this.$emit("input",e)}else this.$emit("input",0)}}},o=n(62),c=n(63),l=n.n(c),m=n(567),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("v-text-field",{directives:[{name:"money",rawName:"v-money",value:{decimal:",",thousands:".",precision:2},expression:"{ decimal: ',', thousands: '.', precision: 2 }"}],attrs:{label:e.label,outlined:""},on:{input:e.updateValue},model:{value:e.v,callback:function(t){e.v=t},expression:"v"}})}),[],!1,null,null,null);t.default=component.exports;l()(component,{VTextField:m.a})},601:function(e,t,n){"use strict";n.r(t);n(11),n(13),n(18),n(19);var r=n(22),o=n(3),c=(n(71),n(4),n(15),n(12),n(184),n(144));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var m={components:{ValidationObserver:c.a,ValidationProvider:c.b},props:{company:{type:Object,default:function(){return null}}},data:function(){return{form:{name:"",corporate_name:"",cnpj:"",address:"",phone:"",email:"",notes:"",point_price:0,point_unit:"hour",points_per_day:0}}},computed:{baseUrl:function(){return"http://localhost:3000"}},created:function(){var e=this;this.company&&Object.keys(this.form).forEach((function(t){e.company[t]&&(e.form[t]=e.company[t])}))},methods:{save:function(){var e=this,form=function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},this.form);this.company?this.$axios.$patch("/v1/companies/"+this.company._id,form).then((function(t){e.$notifier.success("Atualizado!"),e.$emit("input",t)})):this.$axios.$post("/v1/companies",form).then((function(t){e.$notifier.success("Salvo!"),e.$emit("input",t)}))},toggleMonth:function(e){this.active_month===e?this.active_month=null:this.active_month=e},removeItem:function(e,t,n){this.form.data[e-1][t-1].splice(n,1)},copy:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,navigator.clipboard.writeText(e);case 2:t.notify("Copiado!");case 3:case"end":return n.stop()}}),n)})))()},close:function(){this.$emit("close")}}},d=m,v=n(62),f=n(63),h=n.n(f),y=n(208),_=n(545),x=n(514),C=n(673),$=n(570),k=n(205),w=n(567),O=n(576),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{value:!0,fullscreen:"",persistent:""}},[n("v-card",{staticClass:"template-form"},[n("DialogHeader",{on:{close:e.close}}),e._v(" "),n("v-container",{staticClass:"pt-6"},[n("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(t){var r=t.validate,o=t.invalid;return[n("v-form",{on:{submit:function(t){t.preventDefault(),r().then(e.save)}}},[n("validation-provider",{attrs:{name:"Nome da empresa",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[n("v-text-field",{attrs:{label:"Nome da empresa",outlined:"","error-messages":r},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})]}}],null,!0)}),e._v(" "),n("v-text-field",{attrs:{label:"Razão social",outlined:""},model:{value:e.form.corporate_name,callback:function(t){e.$set(e.form,"corporate_name",t)},expression:"form.corporate_name"}}),e._v(" "),n("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:["##.###.###/####-##"],expression:"['##.###.###/####-##']"}],attrs:{label:"CNPJ",outlined:""},model:{value:e.form.cnpj,callback:function(t){e.$set(e.form,"cnpj",t)},expression:"form.cnpj"}}),e._v(" "),n("v-textarea",{attrs:{rows:"2",label:"Endereço",outlined:""},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}}),e._v(" "),n("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:["(##) ####-####","(##) #####-####"],expression:"['(##) ####-####', '(##) #####-####']"}],attrs:{label:"Telefone de contato",outlined:""},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}}),e._v(" "),n("v-text-field",{attrs:{label:"Email de contato",outlined:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),e._v(" "),n("v-textarea",{attrs:{label:"Observações",outlined:""},model:{value:e.form.notes,callback:function(t){e.$set(e.form,"notes",t)},expression:"form.notes"}}),e._v(" "),"admin"===e.$auth.user.role?n("div",[n("v-text-field",{attrs:{label:"Pontos por dia",outlined:""},model:{value:e.form.points_per_day,callback:function(t){e.$set(e.form,"points_per_day",t)},expression:"form.points_per_day"}}),e._v(" "),n("Money",{attrs:{label:"Preço do ponto"},model:{value:e.form.point_price,callback:function(t){e.$set(e.form,"point_price",t)},expression:"form.point_price"}})],1):e._e(),e._v(" "),e.company?n("v-btn",{staticClass:"mb-6",attrs:{small:""},on:{click:function(){return e.copy(e.baseUrl+"/cadastrar?cliente="+e.company._id)}}},[n("v-icon",{attrs:{left:"",small:""}},[e._v(" mdi-content-copy ")]),e._v("\n            Copiar link de cadastro\n          ")],1):e._e(),e._v(" "),n("div",{staticClass:"text-right"},[n("Save",{attrs:{invalid:o,block:!1,label:"Salvar"}})],1)],1)]}}])})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;h()(component,{DialogHeader:n(517).default,Money:n(571).default,Save:n(516).default}),h()(component,{VBtn:y.a,VCard:_.a,VContainer:x.a,VDialog:C.a,VForm:$.a,VIcon:k.a,VTextField:w.a,VTextarea:O.a})},625:function(e,t,n){"use strict";n.r(t);var r=n(22),o=(n(71),n(25),n(249),n(13),n(4),n(37),n(56),n(27),n(105),{data:function(){return{companyId:"",addCompany:!1,editCompany:!1,loading:!0,search:""}},computed:{filteredCompanies:function(){var e=this;return this.search?this.companies.filter((function(t){return t.name.toLowerCase().includes(e.search.toLowerCase())})):this.companies},company:function(){return this.$store.state.company},companies:function(){return this.$store.state.companies}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("admin"!==e.$auth.user.role){t.next=3;break}return t.next=3,e.loadCompanies();case 3:if("user"!==e.$auth.user.role){t.next=6;break}return t.next=6,e.loadCompany();case 6:case"end":return t.stop()}}),t)})))()},methods:{companyUpdated:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.close(),"admin"!==t.$auth.user.role){n.next=5;break}return n.next=4,t.loadCompanies();case 4:t.companySelected(t.companyId);case 5:"user"===t.$auth.user.role&&t.$store.commit("setCompany",e);case 6:case"end":return n.stop()}}),n)})))()},companyCreated:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.close(),"admin"!==t.$auth.user.role){n.next=6;break}return n.next=4,t.loadCompanies();case 4:t.companyId=e._id,t.companySelected(e._id);case 6:case"end":return n.stop()}}),n)})))()},loadCompany:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$axios.$get("/v1/companies/"+e.$auth.user.company);case 3:n=t.sent,e.$store.commit("setCompany",n),e.loading=!1;case 6:case"end":return t.stop()}}),t)})))()},loadCompanies:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$axios.$get("/v1/companies/summary");case 3:(n=t.sent)&&e.$store.commit("setCompanies",n),e.loading=!1;case 6:case"end":return t.stop()}}),t)})))()},companySelected:function(e){this.companyId=e,e?this.$store.commit("setCompany",this.companies.find((function(t){return t._id===e}))):this.$store.commit("setCompany",null)},close:function(){this.addCompany=!1,this.editCompany=!1}}}),c=n(62),l=n(63),m=n.n(l),d=n(208),v=n(545),f=n(514),h=n(205),y=n(209),_=n(134),x=n(143),C=n(498),$=n(667),k=n(567),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"py-6",attrs:{fluid:""}},[e.loading?n("div",[n("Loading")],1):n("div",["admin"===e.$auth.user.role&&e.companies?n("div",[e.company?n("div",[n("v-select",{attrs:{"hide-details":"auto",items:e.companies,label:"Cliente","item-value":"_id","item-text":"name",clearable:"",outlined:""},on:{input:e.companySelected},scopedSlots:e._u([{key:"append-outer",fn:function(){return[n("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n("v-btn",e._g(e._b({attrs:{small:"",icon:""}},"v-btn",o,!1),r),[n("v-icon",[e._v("mdi-dots-vertical")])],1)]}}],null,!1,3448670655)},[e._v(" "),n("v-list",[e.company?n("v-list-item",{on:{click:function(t){e.editCompany=!0}}},[n("v-list-item-title",[e._v("Editar")])],1):e._e(),e._v(" "),"admin"===e.$auth.user.role?n("v-list-item",{on:{click:function(t){e.addCompany=!0}}},[n("v-list-item-title",[e._v("Adicionar cliente")])],1):e._e()],1)],1)]},proxy:!0}],null,!1,149759),model:{value:e.companyId,callback:function(t){e.companyId=t},expression:"companyId"}})],1):n("div",[n("h3",{staticClass:"mb-6"},[e._v("Clientes")]),e._v(" "),n("div",{staticClass:"mb-6"},[e.companies.length>5?n("v-text-field",{attrs:{type:"search",clearable:"",outlined:"",label:"Buscar cliente","append-icon":"mdi-magnify"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}):e._e(),e._v(" "),e._l(e.filteredCompanies,(function(t){return n("v-card",{key:t._id,staticClass:"mb-3 px-3 py-2",attrs:{secondary:""},on:{click:function(n){return e.companySelected(t._id)}}},[n("div",{staticClass:"d-flex justify-space-between align-center"},[n("h6",{staticClass:"text-h6"},[e._v(e._s(t.name))]),e._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(t){e.editCompany=!0}}},[n("v-icon",[e._v("mdi-chevron-right")])],1)],1)])}))],2),e._v(" "),n("v-btn",{attrs:{color:"success",large:"",block:""},on:{click:function(t){e.addCompany=!0}}},[n("v-icon",{attrs:{left:""}},[e._v("mdi-plus")]),e._v("\n          Adicionar cliente\n        ")],1)],1)]):e._e(),e._v(" "),"user"===e.$auth.user.role&&e.company?n("div",{staticClass:"d-flex justify-space-between align-center"},[n("div",[n("h2",[e._v(e._s(e.company.name))]),e._v(" "),n("div",[n("small",[e._v(e._s(e.$auth.user.name))])])]),e._v(" "),n("div",[n("v-btn",{attrs:{icon:""},on:{click:function(t){e.editCompany=!0}}},[n("v-icon",[e._v("mdi-pencil")])],1)],1)]):e._e(),e._v(" "),e.addCompany?n("CompanyForm",{on:{input:e.companyCreated,close:e.close}}):e._e(),e._v(" "),e.editCompany?n("CompanyForm",{attrs:{company:e.company},on:{input:e.companyUpdated,close:e.close}}):e._e()],1)])}),[],!1,null,null,null);t.default=component.exports;m()(component,{Loading:n(531).default,CompanyForm:n(601).default}),m()(component,{VBtn:d.a,VCard:v.a,VContainer:f.a,VIcon:h.a,VList:y.a,VListItem:_.a,VListItemTitle:x.c,VMenu:C.a,VSelect:$.a,VTextField:k.a})}}]);