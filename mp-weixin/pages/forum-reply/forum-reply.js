(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/forum-reply/forum-reply"],{"37a2":function(t,n,e){"use strict";(function(t){e("c0b4"),e("921b");r(e("66fd"));var n=r(e("3e4c"));function r(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"3e4c":function(t,n,e){"use strict";e.r(n);var r=e("c607"),u=e("f774");for(var a in u)"default"!==a&&function(t){e.d(n,t,(function(){return u[t]}))}(a);e("a278");var i,c=e("f0c5"),o=Object(c["a"])(u["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],i);n["default"]=o.exports},"9da0":function(t,n,e){},a278:function(t,n,e){"use strict";var r=e("9da0"),u=e.n(r);u.a},c607:function(t,n,e){"use strict";var r,u=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return r}))},db34:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=u(e("a34a"));function u(t){return t&&t.__esModule?t:{default:t}}function a(t,n,e,r,u,a,i){try{var c=t[a](i),o=c.value}catch(s){return void e(s)}c.done?n(o):Promise.resolve(o).then(r,u)}function i(t){return function(){var n=this,e=arguments;return new Promise((function(r,u){var i=t.apply(n,e);function c(t){a(i,r,u,c,o,"next",t)}function o(t){a(i,r,u,c,o,"throw",t)}c(void 0)}))}}var c={data:function(){return{pid:"",content:"",username:"",user:{}}},onLoad:function(){var n=i(r.default.mark((function n(e){var u,a;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return this.pid=e.pid,u=t.getStorageSync("nowTable"),n.next=4,this.$api.session(u);case 4:a=n.sent,this.user=a.data,"yonghu"==u&&(this.username=this.user.yonghuming);case 7:case"end":return n.stop()}}),n,this)})));function e(t){return n.apply(this,arguments)}return e}(),methods:{onReplyTap:function(){var t=i(r.default.mark((function t(){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.save("forum",{parentid:this.pid,content:this.contont,username:this.username});case 2:this.$utils.msgBack("回复成功");case 3:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}()}};n.default=c}).call(this,e("543d")["default"])},f774:function(t,n,e){"use strict";e.r(n);var r=e("db34"),u=e.n(r);for(var a in r)"default"!==a&&function(t){e.d(n,t,(function(){return r[t]}))}(a);n["default"]=u.a}},[["37a2","common/runtime","common/vendor"]]]);