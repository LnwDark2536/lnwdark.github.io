webpackJsonp([1],{Jmt5:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};i("VU/8")({name:"App"},s,!1,function(t){i("oeoe")},null,null).exports;var r=i("/ocq");n.a.use(r.a);var a=new r.a({routes:[{path:"/"}]}),o={name:"Register",data:function(){return{title:"ลงทะเบียน",userId:"",profile:[],send:!1,tel:""}},created:function(){var t=this;window.onload=function(e){liff.init(function(e){t.initializeApp(e)})}},methods:{initializeApp:function(t){this.userId=t.context.userId,console.log(t)}}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("h3",[this._v("ลงทะเบียน")]),this._v(" "),e("h4",[this._v(this._s(this.userId))]),this._v(" "),this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("form",[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"exampleInputEmail1"}},[this._v("เบอร์โทร")]),this._v(" "),e("input",{staticClass:"form-control",attrs:{type:"tel","aria-describedby":"emailHelp",placeholder:"เบอร์โทร..."}})]),this._v(" "),e("div",{staticClass:"text-center"},[e("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[this._v("ลงทะเบียน")])])])}]},c=i("VU/8")(o,l,!1,null,null,null).exports;i("Jmt5");n.a.config.productionTip=!1,new n.a({el:"#app",router:a,components:{Register:c},template:"<Register  />"})},oeoe:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.81474b4cb94e15f559e4.js.map