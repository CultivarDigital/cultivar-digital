(window.webpackJsonp=window.webpackJsonp||[]).push([[25,17],{517:function(t,e,o){"use strict";o.r(e);var r={methods:{close:function(){this.$emit("close")}}},n=o(62),l=o(63),d=o.n(l),c=o(208),v=o(514),h=o(561),m=o(205),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-container",{staticClass:"d-flex align-center justify-space-between"},[r("div",{staticClass:"d-flex align-center"},[r("img",{staticClass:"logo",attrs:{src:o(237)}}),t._v(" "),r("span",{staticClass:"ml-3"},[r("strong",[t._v("Cultivar")]),t._v(" Digital")])]),t._v(" "),r("v-btn",{attrs:{icon:""},on:{click:t.close}},[r("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),r("v-divider")],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:c.a,VContainer:v.a,VDivider:h.a,VIcon:m.a})},530:function(t,e,o){var content=o(537);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(21).default)("2e2bc7da",content,!0,{sourceMap:!1})},532:function(t,e,o){"use strict";o(4),o(74),o(13);var r=o(524),n=o(106),l=o(1).a.extend({name:"rippleable",directives:{ripple:n.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}}),d=o(552),c=o(8);function v(t){t.preventDefault()}e.a=Object(c.a)(r.a,l,d.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,input=this.internalValue;return this.isMultiple?!!Array.isArray(input)&&input.some((function(o){return t.valueComparator(o,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,input):Boolean(input):this.valueComparator(input,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var label=r.a.options.methods.genLabel.call(this);return label?(label.data.on={click:v},label):label},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:v},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,input=this.internalValue;if(this.isMultiple){Array.isArray(input)||(input=[]);var o=input.length;(input=input.filter((function(o){return!t.valueComparator(o,e)}))).length===o&&input.push(e)}else input=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(input,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(input,e)?null:e:!input;this.validate(!0,input),this.internalValue=input,this.hasColor=input}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}})},537:function(t,e,o){var r=o(20)(!1);r.push([t.i,'html{scroll-behavior:smooth;scroll-padding-top:56px}section{min-height:calc(100vh - 56px)}@media(max-width:960px){section{min-height:calc(100vh - 56px)}}.tertiary--text{opacity:.4}.logo{width:42px}@media(min-width:960px){.logo{width:64px}}.nav-btn{box-shadow:none!important}@media(max-width:960px){.nav-btn{display:none}}.container{max-width:960px;padding:16px}.v-tab{font-size:12px!important}.v-slide-group__next,.v-slide-group__prev{display:none!important}.theme--light .v-application{color:#2b2b2b!important}.theme--light .v-app-bar.v-toolbar.v-sheet{background-color:#fff!important}.theme--dark .v-application{color:#fff!important}.theme--dark .v-app-bar.v-toolbar.v-sheet{background-color:#2b2b2b!important}.v-input--selection-controls{margin-top:16px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-top:0;margin-bottom:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;width:24px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;position:absolute;transition:inherit;width:34px;left:-12px;top:calc(50% - 24px);margin:7px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";position:absolute;opacity:.2;left:0;right:0;top:0;transform-origin:center center;transform:scale(.2);transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{width:28px;height:28px;left:-9px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:inherit}.v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}',""]),t.exports=r},543:function(t,e,o){var content=o(544);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(21).default)("7132a15d",content,!0,{sourceMap:!1})},544:function(t,e,o){var r=o(20)(!1);r.push([t.i,"html{scroll-behavior:smooth;scroll-padding-top:56px}section{min-height:calc(100vh - 56px)}@media(max-width:960px){section{min-height:calc(100vh - 56px)}}.tertiary--text{opacity:.4}.logo{width:42px}@media(min-width:960px){.logo{width:64px}}.nav-btn{box-shadow:none!important}@media(max-width:960px){.nav-btn{display:none}}.container{max-width:960px;padding:16px}.v-tab{font-size:12px!important}.v-slide-group__next,.v-slide-group__prev{display:none!important}.theme--light .v-application{color:#2b2b2b!important}.theme--light .v-app-bar.v-toolbar.v-sheet{background-color:#fff!important}.theme--dark .v-application{color:#fff!important}.theme--dark .v-app-bar.v-toolbar.v-sheet{background-color:#2b2b2b!important}.theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),t.exports=r},552:function(t,e,o){"use strict";var r=o(1),n=o(2);e.a=r.a.extend({name:"comparable",props:{valueComparator:{type:Function,default:n.i}}})},555:function(t,e,o){var content=o(564);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(21).default)("784161f1",content,!0,{sourceMap:!1})},558:function(t,e,o){var content=o(559);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(21).default)("12a190a6",content,!0,{sourceMap:!1})},559:function(t,e,o){var r=o(20)(!1);r.push([t.i,"html{scroll-behavior:smooth;scroll-padding-top:56px}section{min-height:calc(100vh - 56px)}@media(max-width:960px){section{min-height:calc(100vh - 56px)}}.tertiary--text{opacity:.4}.logo{width:42px}@media(min-width:960px){.logo{width:64px}}.nav-btn{box-shadow:none!important}@media(max-width:960px){.nav-btn{display:none}}.container{max-width:960px;padding:16px}.v-tab{font-size:12px!important}.v-slide-group__next,.v-slide-group__prev{display:none!important}.theme--light .v-application{color:#2b2b2b!important}.theme--light .v-app-bar.v-toolbar.v-sheet{background-color:#fff!important}.theme--dark .v-application{color:#fff!important}.theme--dark .v-app-bar.v-toolbar.v-sheet{background-color:#2b2b2b!important}.v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}.v-input--checkbox.v-input--dense{margin-top:4px}",""]),t.exports=r},561:function(t,e,o){"use strict";o(12),o(11),o(13),o(4),o(18),o(15),o(19);var r=o(3),n=(o(543),o(29));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=n.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:d({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:d({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},563:function(t,e,o){"use strict";o(555)},564:function(t,e,o){var r=o(20)(!1);r.push([t.i,'html{scroll-behavior:smooth;scroll-padding-top:56px}section{min-height:calc(100vh - 56px)}@media(max-width:960px){section{min-height:calc(100vh - 56px)}}.tertiary--text{opacity:.4}.logo{width:42px}@media(min-width:960px){.logo{width:64px}}.nav-btn{box-shadow:none!important}@media(max-width:960px){.nav-btn{display:none}}.container{max-width:960px;padding:16px}.v-tab{font-size:12px!important}.v-slide-group__next,.v-slide-group__prev{display:none!important}.theme--light .v-application{color:#2b2b2b!important}.theme--light .v-app-bar.v-toolbar.v-sheet{background-color:#fff!important}.theme--dark .v-application{color:#fff!important}.theme--dark .v-app-bar.v-toolbar.v-sheet{background-color:#2b2b2b!important}.contract-view{background-color:#fff;color:#000;font-size:14px;line-height:1.5;font-family:"Roboto",sans-serif;border-radius:8px;padding:16px}',""]),t.exports=r},565:function(t,e,o){var content=o(566);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(21).default)("7c06aa28",content,!0,{sourceMap:!1})},566:function(t,e,o){var r=o(20)(!1);r.push([t.i,"html{scroll-behavior:smooth;scroll-padding-top:56px}section{min-height:calc(100vh - 56px)}@media(max-width:960px){section{min-height:calc(100vh - 56px)}}.tertiary--text{opacity:.4}.logo{width:42px}@media(min-width:960px){.logo{width:64px}}.nav-btn{box-shadow:none!important}@media(max-width:960px){.nav-btn{display:none}}.container{max-width:960px;padding:16px}.v-tab{font-size:12px!important}.v-slide-group__next,.v-slide-group__prev{display:none!important}.theme--light .v-application{color:#2b2b2b!important}.theme--light .v-app-bar.v-toolbar.v-sheet{background-color:#fff!important}.theme--dark .v-application{color:#fff!important}.theme--dark .v-app-bar.v-toolbar.v-sheet{background-color:#2b2b2b!important}.theme--light.v-data-table{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-data-table .v-data-table__divider{border-right:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table.v-data-table--fixed-header thead th{background:#fff;box-shadow:inset 0 -1px 0 rgba(0,0,0,.12)}.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr>th{color:rgba(0,0,0,.6)}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:last-child,.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:not(.v-data-table__mobile-row),.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:last-child,.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:not(.v-data-table__mobile-row),.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr:last-child>th{border-bottom:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr.active{background:#f5f5f5}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background:#eee}.theme--light.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td:not(.v-data-table__mobile-row),.theme--light.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th:not(.v-data-table__mobile-row){border-top:thin solid rgba(0,0,0,.12)}.theme--dark.v-data-table{background-color:#1e1e1e;color:#fff}.theme--dark.v-data-table .v-data-table__divider{border-right:thin solid hsla(0,0%,100%,.12)}.theme--dark.v-data-table.v-data-table--fixed-header thead th{background:#1e1e1e;box-shadow:inset 0 -1px 0 hsla(0,0%,100%,.12)}.theme--dark.v-data-table>.v-data-table__wrapper>table>thead>tr>th{color:hsla(0,0%,100%,.7)}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:last-child,.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:not(.v-data-table__mobile-row),.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:last-child,.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:not(.v-data-table__mobile-row),.theme--dark.v-data-table>.v-data-table__wrapper>table>thead>tr:last-child>th{border-bottom:thin solid hsla(0,0%,100%,.12)}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr.active{background:#505050}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background:#616161}.theme--dark.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td:not(.v-data-table__mobile-row),.theme--dark.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th:not(.v-data-table__mobile-row){border-top:thin solid hsla(0,0%,100%,.12)}.v-data-table{line-height:1.5;max-width:100%}.v-data-table>.v-data-table__wrapper>table{width:100%;border-spacing:0}.v-data-table>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-data-table>.v-data-table__wrapper>table>thead>tr>td,.v-data-table>.v-data-table__wrapper>table>thead>tr>th{padding:0 16px;transition:height .2s cubic-bezier(.4,0,.6,1)}.v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-data-table>.v-data-table__wrapper>table>thead>tr>th{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:.75rem;height:48px}.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>thead>tr>th{text-align:left}.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>tfoot>tr>th,.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>thead>tr>th{text-align:right}.v-data-table>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table>.v-data-table__wrapper>table>thead>tr>td{font-size:.875rem;height:48px}.v-data-table__wrapper{overflow-x:auto;overflow-y:hidden}.v-data-table__progress{height:auto!important}.v-data-table__progress th{height:auto!important;border:none!important;padding:0;position:relative}.v-data-table--dense>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table--dense>.v-data-table__wrapper>table>tfoot>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>tfoot>tr>th,.v-data-table--dense>.v-data-table__wrapper>table>thead>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>thead>tr>th{height:32px}.v-data-table--has-top>.v-data-table__wrapper>table>tbody>tr:first-child:hover>td:first-child{border-top-left-radius:0}.v-data-table--has-top>.v-data-table__wrapper>table>tbody>tr:first-child:hover>td:last-child{border-top-right-radius:0}.v-data-table--has-bottom>.v-data-table__wrapper>table>tbody>tr:last-child:hover>td:first-child{border-bottom-left-radius:0}.v-data-table--has-bottom>.v-data-table__wrapper>table>tbody>tr:last-child:hover>td:last-child{border-bottom-right-radius:0}.v-data-table--fixed-header>.v-data-table__wrapper,.v-data-table--fixed-height .v-data-table__wrapper{overflow-y:auto}.v-data-table--fixed-header>.v-data-table__wrapper>table>thead>tr>th{border-bottom:0!important;position:-webkit-sticky;position:sticky;top:0;z-index:2}.v-data-table--fixed-header>.v-data-table__wrapper>table>thead>tr:nth-child(2)>th{top:48px}.v-application--is-ltr .v-data-table--fixed-header .v-data-footer{margin-right:17px}.v-application--is-rtl .v-data-table--fixed-header .v-data-footer{margin-left:17px}.v-data-table--fixed-header.v-data-table--dense>.v-data-table__wrapper>table>thead>tr:nth-child(2)>th{top:32px}",""]),t.exports=r},572:function(t,e,o){"use strict";o.r(e);var r={props:{proposal:{type:Object,default:function(){return{}}}},data:function(){return{dialog:!1,accepted:!1}},methods:{confirm:function(){this.dialog=!1,this.$emit("confirm")},cancel:function(){this.dialog=!1,this.$emit("cancel")}}},n=(o(563),o(62)),l=o(63),d=o.n(l),c=o(208),v=o(545),h=o(600),m=o(514),_=o(673),f=o(205),x=o(611),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-dialog",{attrs:{fullscreen:"",persistent:""},on:{"click:outside":function(e){t.dialog=!1}},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[o("v-btn",t._g(t._b({attrs:{block:"",large:"",color:"success"}},"v-btn",n,!1),r),[o("v-icon",{attrs:{left:""}},[t._v(" mdi-check ")]),t._v("\n      Aprovar esta proposta\n    ")],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),o("v-card",[o("DialogHeader",{on:{close:function(){return t.dialog=!1}}}),t._v(" "),o("v-container",[o("div",{staticClass:"contract-view"},[o("h3",{staticClass:"pt-3 mb-6"},[t._v("\n          CONTRATO DE PRESTAÇÃO DE SERVIÇOS\n        ")]),t._v(" "),o("p",[t._v("Entre:")]),t._v(" "),o("p",[o("strong",[t._v(t._s(t.proposal.company.corporate_name))]),t._v(", com sede em "),o("strong",[t._v(t._s(t.proposal.company.address))]),t._v(", representado por "),o("strong",[t._v(t._s(t.$auth.user.name))]),t._v(', doravante denominado simplesmente de "Contratante".\n        ')]),t._v(" "),o("p",[t._v("E")]),t._v(" "),o("p",[o("strong",[t._v("Cultivar Digital LTDA")]),t._v(", com sede em\n          "),o("strong",[t._v("\n            Av. Portugal, n°1148, Sala C 2501 - Edifício Órion Business &\n            Health Complex, Setor Marista, Goiânia-GO, CEP: 74.150-030")]),t._v(", representado por "),o("strong",[t._v("Diego Maradona Rodrigues")]),t._v(',\n          doravante denominado simplesmente de "Prestador".\n        ')]),t._v(" "),o("p",[t._v("Os presentes acordam com as seguintes cláusulas e condições:")]),t._v(" "),o("h4",{staticClass:"mb-3"},[t._v("Objetivo do Contrato")]),t._v(" "),o("p",[t._v("\n          O objetivo deste contrato é estabelecer os termos e condições para a\n          prestação de serviços ao Contratante.\n        ")]),t._v(" "),o("h4",{staticClass:"mb-3"},[t._v("Prazos")]),t._v(" "),o("p",[t._v("\n          O projeto terá início em\n          "),o("strong",[t._v(t._s(t.$moment(t.$momentBusinessDays.addDays({days:1})).format("DD/MM/YYYY")))]),t._v("\n          e sua entrega é prevista para\n          "),o("strong",[t._v(t._s(t.$moment(t.$momentBusinessDays.addDays({days:t.proposal.estimate_in_days+1})).format("DD/MM/YYYY")))]),t._v(". As entregas podem ser feitas e faturadas antes do prazo final da entrega. O Prestador entregará cada etapa do projeto de acordo com o\n          seguinte cronograma respeitando a ordem de prioridade definida pelo\n          Contratante:\n        ")]),t._v(" "),o("v-simple-table",{staticClass:"mb-6",attrs:{light:""},scopedSlots:t._u([{key:"default",fn:function(){return[o("thead",[o("tr",[o("th",[t._v("Demanda")]),t._v(" "),o("th",{staticClass:"text-right"},[t._v("Estimativa")])])]),t._v(" "),o("tbody",t._l(t.proposal.items,(function(e){return o("tr",{key:e._id},[o("td",[o("small",[t._v(t._s(e.demand.title))])]),t._v(" "),o("td",{staticClass:"text-right"},[o("small",[t._v(t._s(e.estimate_in_days)+" dias")])])])})),0),t._v(" "),o("tfoot",[o("tr",[o("th",[o("strong",[t._v("Total")])]),t._v(" "),o("th",{staticClass:"text-right"},[o("strong",[t._v(t._s(t.proposal.estimate_in_days)+" dias")])])])])]},proxy:!0}])}),t._v(" "),o("h4",{staticClass:"mb-3"},[t._v("Responsabilidades do Contratante e do Prestador")]),t._v(" "),o("p",[t._v("\n          O Contratante será responsável por fornecer todos os recursos,\n          informações e apoio necessários para o desenvolvimento das\n          funcionalidades. O Prestador será responsável por desenvolver as\n          funcionalidades de acordo com as especificações acordadas e por\n          garantir a qualidade e funcionamento das mesmas.\n        ")]),t._v(" "),o("h4",{staticClass:"mb-3"},[t._v("Preço e Pagamento")]),t._v(" "),o("p",[t._v("\n          O valor total dos serviços prestados pelo Prestador será de\n          "),o("strong",[t._v(t._s(t._f("moeda")(t.proposal.price)))]),t._v(". O pagamento será realizado através de fatura gerada mensalmente\n          ao final de cada ciclo incluindo as demandas finalizadas e o\n          percentual já executado das demandas em andamento. O Contratante\n          concorda em pagar o valor total da fatura no prazo de 7 dias após a\n          sua emissão.\n        ")]),t._v(" "),o("h4",{staticClass:"mb-3"},[t._v("Propriedade Intelectual")]),t._v(" "),o("p",[t._v("\n          Todos os direitos autorais, marcas registradas e outros direitos\n          relacionados ao trabalho desenvolvido serão propriedade exclusiva\n          do Contratante. O Prestador concorda em não utilizar esses direitos\n          para fins comerciais ou outros fins não autorizados.\n        ")]),t._v(" "),o("h4",{staticClass:"mb-3"},[t._v("Confidencialidade")]),t._v(" "),o("p",[t._v("\n          O Prestador concorda em manter sigilo e confidencialidade sobre\n          todas as informações confidenciais do Contratante, incluindo, mas\n          não se limitando a, informações financeiras, comerciais, de\n          negócios, de clientes, de tecnologia e outras informações\n          confidenciais. O Prestador só poderá divulgar essas informações se\n          for obrigado por lei ou se o Contratante autorizar por escrito a\n          divulgação.\n        ")]),t._v(" "),o("h4",{staticClass:"mb-3"},[t._v("Garantia")]),t._v(" "),o("p",[t._v("\n          O Prestador garante que os serviços prestados serão realizados de\n          forma profissional, eficiente e de acordo com as especificações\n          acordadas. Se houver problemas com as funcionalidades desenvolvidas,\n          o Prestador corrigirá esses problemas sem custo adicional para o\n          Contratante.\n        ")]),t._v(" "),o("h4",{staticClass:"mb-3"},[t._v("Rescisão")]),t._v(" "),o("p",[t._v("\n          Este contrato poderá ser rescindido imediatamente por qualquer uma\n          das partes mediante notificação por escrito à outra parte. Em caso\n          de rescisão, o Prestador deverá entregar imediatamente todo o\n          material relacionado ao projeto ao Contratante e apagar todas as\n          cópias de informações confidenciais.\n        ")]),t._v(" "),o("h4",{staticClass:"mb-3"},[t._v("Alterações")]),t._v(" "),o("p",[t._v("\n          Este contrato tem escopo fechado. Qualquer alteração no escopo das demandas aqui incluídas deverá ser acordada por escrito entre as partes.\n        ")]),t._v(" "),o("h4",{staticClass:"mb-3"},[t._v("Foro")]),t._v(" "),o("p",[t._v("\n          As partes elegem o foro da Comarca de Goiânia, Estado de Goiás, para dirimir quaisquer dúvidas ou controvérsias oriundas deste contrato.\n        ")]),t._v(" "),o("h4",{staticClass:"mb-3"},[t._v("Leis Aplicáveis")]),t._v(" "),o("p",[t._v("\n          Este contrato será regido e interpretado de acordo com as leis da\n          República Federativa do Brasil.\n        ")])],1),t._v(" "),o("div",[o("v-checkbox",{attrs:{color:"success","x-large":"",label:"Li e concordo com o contrato acima."},model:{value:t.accepted,callback:function(e){t.accepted=e},expression:"accepted"}}),t._v(" "),o("v-btn",{staticClass:"mb-6",attrs:{disabled:!t.accepted,color:"success","x-large":"",block:""},on:{click:t.confirm}},[t._v("\n            Confirmar e aprovar\n          ")])],1)])],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{DialogHeader:o(517).default}),d()(component,{VBtn:c.a,VCard:v.a,VCheckbox:h.a,VContainer:m.a,VDialog:_.a,VIcon:f.a,VSimpleTable:x.a})},600:function(t,e,o){"use strict";o(12),o(11),o(13),o(18),o(15),o(19);var r=o(121),n=o(3),l=(o(4),o(74),o(558),o(530),o(73)),d=o(524),c=o(532),v=["title"];function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=c.a.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return m(m({},d.a.options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var t=this.attrs$,e=(t.title,Object(r.a)(t,v));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(l.a,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",m(m({},e),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},611:function(t,e,o){"use strict";o(12),o(11),o(13),o(4),o(18),o(15),o(19);var r=o(3),n=(o(32),o(565),o(2)),l=o(29),d=o(8);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}e.a=Object(d.a)(l.a).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(n.g)(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})}}]);