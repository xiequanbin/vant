(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{146:function(o,a,t){"use strict";var i=t(73);t.n(i).a},147:function(o,a,t){(o.exports=t(12)(!1)).push([o.i,".demo-radio-group {\n  padding: 0 17px;\n}\n.demo-radio-group .van-radio {\n  margin-bottom: 10px;\n}\n.demo-radio img {\n  height: 20px;\n}\n",""])},342:function(o,a,t){"use strict";t.r(a);var i={i18n:{"zh-CN":{radio:"单选框",text1:"未选中禁用",text2:"选中且禁用",customIcon:"自定义图标",customColor:"自定义颜色",withCell:"与 Cell 组件一起使用"},"en-US":{radio:"Radio",text1:"Disabled",text2:"Disabled and checked",customIcon:"Custom Icon",customColor:"Custom Color",withCell:"Inside a Cell"}},data:function(){return{radio1:"1",radio2:"2",radio3:"1",icon:{normal:"https://img.yzcdn.cn/public_files/2017/10/13/c547715be149dd3faa817e4a948b40c4.png",active:"https://img.yzcdn.cn/public_files/2017/10/13/793c77793db8641c4c325b7f25bf130d.png"}}}},n=(t(146),t(7)),r=Object(n.a)(i,function(){var o=this,a=o.$createElement,t=o._self._c||a;return t("demo-section",[t("demo-block",{attrs:{title:o.$t("basicUsage")}},[t("van-radio-group",{staticClass:"demo-radio-group",model:{value:o.radio1,callback:function(a){o.radio1=a},expression:"radio1"}},[t("van-radio",{attrs:{name:"1"}},[o._v(o._s(o.$t("radio"))+" 1")]),t("van-radio",{attrs:{name:"2"}},[o._v(o._s(o.$t("radio"))+" 2")])],1)],1),t("demo-block",{attrs:{title:o.$t("disabled")}},[t("van-radio-group",{staticClass:"demo-radio-group",attrs:{disabled:""},model:{value:o.radio2,callback:function(a){o.radio2=a},expression:"radio2"}},[t("van-radio",{attrs:{name:"1"}},[o._v(o._s(o.$t("radio"))+" 1")]),t("van-radio",{attrs:{name:"2"}},[o._v(o._s(o.$t("radio"))+" 2")])],1)],1),t("demo-block",{attrs:{title:o.$t("customColor")}},[t("van-radio",{staticClass:"demo-radio-group",attrs:{name:"1",value:"1","checked-color":"#07c160"}},[o._v("\n      "+o._s(o.$t("radio"))+"\n    ")])],1),t("demo-block",{attrs:{title:o.$t("customIcon")}},[t("van-radio",{staticClass:"demo-radio-group",attrs:{name:"1",value:"1"},scopedSlots:o._u([{key:"icon",fn:function(a){return t("img",{attrs:{src:a.checked?o.icon.active:o.icon.normal}})}}])},[o._v("\n      "+o._s(o.$t("customIcon"))+"\n      ")])],1),t("demo-block",{attrs:{title:o.$t("withCell")}},[t("van-radio-group",{model:{value:o.radio3,callback:function(a){o.radio3=a},expression:"radio3"}},[t("van-cell-group",[t("van-cell",{attrs:{title:o.$t("radio")+1,clickable:""},on:{click:function(a){o.radio3="1"}}},[t("van-radio",{attrs:{name:"1"}})],1),t("van-cell",{attrs:{title:o.$t("radio")+2,clickable:""},on:{click:function(a){o.radio3="2"}}},[t("van-radio",{attrs:{name:"2"}})],1)],1)],1)],1)],1)},[],!1,null,null,null);a.default=r.exports},73:function(o,a,t){var i=t(147);"string"==typeof i&&(i=[[o.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};t(13)(i,n);i.locals&&(o.exports=i.locals)}}]);