(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{619:function(t,o,n){var content=n(653);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("2f3f7f49",content,!0,{sourceMap:!1})},652:function(t,o,n){"use strict";n(619)},653:function(t,o,n){var r=n(15)((function(i){return i[1]}));r.push([t.i,'.ql-toolbar.ql-snow{background-color:hsla(0,0%,100%,.8)!important;border-color:hsla(0,0%,100%,.24)!important;border-top-left-radius:8px;border-top-right-radius:8px}.ql-editor.ql-blank:before{color:hsla(0,0%,100%,.4)!important}.quill-editor .ql-container{border-bottom-left-radius:8px;border-bottom-right-radius:8px;border-color:hsla(0,0%,100%,.24)!important;font-family:"Roboto",sans-serif;font-size:16px;height:auto}.quill-editor .ql-container .ql-editor{max-height:500px!important;min-height:160px!important;overflow-y:auto!important;padding:16px}.quill-editor .ql-container .ql-editor img{display:block;margin-bottom:16px;margin-top:16px;max-width:100%}.quill-editor .ql-container .ql-editor h1,.quill-editor .ql-container .ql-editor h2,.quill-editor .ql-container .ql-editor h3,.quill-editor .ql-container .ql-editor h4,.quill-editor .ql-container .ql-editor h5,.quill-editor .ql-container .ql-editor h6,.quill-editor .ql-container .ql-editor p{margin-bottom:16px!important}.quill-editor.editor-content .ql-container .ql-editor{max-height:none!important;min-height:0!important;min-height:auto!important;padding:0}',""]),r.locals={},t.exports=r},664:function(t,o,n){"use strict";n.r(o);var r={props:{value:{type:String,default:"",required:!0}},data:function(){return{content:"",hasChanged:!1,savedAlert:!1}},created:function(){this.content=this.value},methods:{changed:function(){this.$emit("input",this.content)}}},e=(n(652),n(31)),component=Object(e.a)(r,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"mb-3"},[o("quill-editor",{ref:"quillEdit",on:{input:t.changed},model:{value:t.content,callback:function(o){t.content=o},expression:"content"}})],1)}),[],!1,null,null,null);o.default=component.exports}}]);