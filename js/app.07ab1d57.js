(function(e){function t(t){for(var s,c,i=t[0],o=t[1],u=t[2],l=0,f=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&f.push(r[c][0]),r[c]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],s=!0,i=1;i<n.length;i++){var o=n[i];0!==r[o]&&(s=!1)}s&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var s={},r={app:0},a=[];function c(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=s,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)c.d(n,s,function(t){return e[t]}.bind(null,s));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vk-vue/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var d=o;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var s=n("85ec"),r=n.n(s);r.a},"09b7":function(e,t,n){},"0ab0":function(e,t,n){"use strict";var s=n("c432"),r=n.n(s);r.a},"0af1":function(e,t,n){"use strict";var s=n("6f0c"),r=n.n(s);r.a},"25ef":function(e,t,n){"use strict";var s=n("42d2"),r=n.n(s);r.a},"3c0d6":function(e,t,n){"use strict";var s=n("09b7"),r=n.n(s);r.a},"42d2":function(e,t,n){},4678:function(e,t,n){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=a(e);return n(t)}function a(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=a,e.exports=r,r.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),e.showPage?n("UserPage",{attrs:{user:e.clickedUser},on:{click:e.onBackClick}}):n("section",{staticClass:"content"},[n("div",{attrs:{id:"search-section"}},[e.userInfo?n("SearchSection",{attrs:{inputText:e.inputText,token:e.token,friends:e.friends,users:e.usersForBuild},on:{"input-change":e.inputChange,select:e.onSelect,remove:e.removeUser,click:e.onBuildClick}}):n("a-spin",{attrs:{size:"large"}})],1),n("div",{staticClass:"vl"}),n("div",{attrs:{id:"build-section"}},[e.fetching?n("a-spin",{attrs:{size:"large"}}):n("div",[e.usersResult.length&&e.usersForBuild.length?n("BuildSection",{attrs:{users:e.usersResult,length:e.usersForBuild.length},on:{click:e.onUserClick}}):n("a-empty",{staticClass:"empty"})],1)],1)])],1)},a=[],c=(n("99af"),n("4de4"),n("7db0"),n("caad"),n("c975"),n("d81d"),n("b0c0"),n("a9e3"),n("07ac"),n("ac1f"),n("2532"),n("1276"),n("b85c")),i=(n("96cf"),n("1da1")),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("a-auto-complete",{staticStyle:{width:"80%"},attrs:{"data-source":e.friendsMatched,placeholder:"Enter friend name"},on:{select:e.onSelect,search:e.onSearch},model:{value:e.searchedName,callback:function(t){e.searchedName=t},expression:"searchedName"}}),e.users.length?n("div",[e._l(e.users,(function(t,s){return n("Card",{key:s,attrs:{user:t},on:{remove:e.removeUser}})})),n("a-button",{attrs:{type:"primary"},on:{click:e.onClick}},[e._v(" Build"),n("a-icon",{attrs:{type:"build"}})],1)],2):n("a-empty",{staticClass:"empty"})],1)},u=[],d=n("1157"),l=n.n(d),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-card",{staticClass:"card",staticStyle:{width:"80%"},attrs:{hoverable:""}},[n("template",{staticClass:"ant-card-actions",slot:"actions"},[n("a-icon",{key:"close",attrs:{type:"close"},on:{click:function(t){return e.$emit("remove",e.user.name)}}})],1),n("a-card-meta",{attrs:{title:e.user.name,description:e.getDesc(e.user)}},[n("a-avatar",{attrs:{slot:"avatar",src:e.user.photo},slot:"avatar"})],1)],2)},p=[],h={props:{user:{type:Object,required:!0}},methods:{getDesc:function(e){return"Birthday: ".concat(e.bdate,"\tSex: ").concat(e.sex)}}},m=h,b=(n("0ab0"),n("2877")),j=Object(b["a"])(m,f,p,!1,null,null,null),v=j.exports,k=n("a078"),g=n.n(k),y={props:{inputText:{type:String,required:!0},token:{type:String,required:!0},friends:{type:Array,required:!0},users:{type:Array,required:!0}},data:function(){return{searchedName:this.inputText,friendsMatched:[]}},watch:{searchedName:function(e){this.$emit("input-change",e)}},methods:{emitEmpty:function(){this.$refs.userNameInput.focus(),this.searchedName=""},onSearch:function(e){this.searchedName=e,this.friendsMatched=this.searchedName?this.friends.filter((function(t){return t.name.includes(e)})).map((function(e){return e.name+" (@".concat(e.domain,")")})):[]},onSelect:function(e){this.searchedName="",this.$emit("select",e)},onClick:function(e){this.$emit("click")},removeUser:function(e){this.$emit("remove",e)}},components:{Card:v}},_=y,x=(n("3c0d6"),Object(b["a"])(_,o,u,!1,null,null,null)),w=x.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Build Section")]),n("div",{staticClass:"card"},e._l(e.users,(function(t,s){return n("a-tag",{key:s,attrs:{color:e.getColor(t.friends.length,e.length)}},[n("img",{attrs:{src:t.photo,alt:""}}),n("p",[e._v(e._s(t.name))]),n("p",[e._v("Birthday: "+e._s(t.bdate))]),n("p",[e._v("Sex: "+e._s(t.sex))]),n("a-button",{attrs:{name:t.name,type:"primary",icon:"export"},on:{click:e.onClick}})],1)})),1)])},S=[],C={props:{users:{type:Array,required:!0},length:{type:Number,required:!0}},components:{Card:v},methods:{getColor:function(e,t){var n=Math.floor(e/t*255);return"rgba(0, ".concat(n,", 0, 1)")},onClick:function(e){this.$emit("click",e.target.name)}}},z=C,B=(n("0af1"),Object(b["a"])(z,O,S,!1,null,null,null)),T=B.exports,F=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},N=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header"},[n("div",{attrs:{id:"app-name"}},[n("h2",[e._v("FriendsTool")])])])}],U={},I=U,$=(n("8baf"),Object(b["a"])(I,F,N,!1,null,null,null)),P=$.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"user-page"}},[n("a-button",{attrs:{id:"back",type:"danger",icon:"rollback"},on:{click:e.onClick}},[e._v("Back")]),n("section",{staticClass:"flex-container"},[n("div",{staticClass:"card-container"},e._l(e.user.friends,(function(e,t){return n("Card",{key:t,staticClass:"card",attrs:{user:e}})})),1),e._m(0)])],1)},R=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vk-div"},[n("div",{attrs:{id:"vk_groups"}})])}],q={components:{Card:v},props:{user:{type:Object,requred:!0}},methods:{onClick:function(e){this.$emit("click",e)}},mounted:function(){VK.Widgets.Group("vk_groups",{mode:4,height:"400",width:"500"},"-".concat(this.user.id))}},M=q,D=(n("25ef"),Object(b["a"])(M,E,R,!1,null,"2dc9b1ba",null)),J=D.exports,A={name:"App",components:{SearchSection:w,BuildSection:T,UserPage:J,Header:P},data:function(){return{userInfo:null,token:null,inputText:"",friends:[],usersForBuild:[],usersResult:[],fetching:!1,showPage:!1,clickedUser:null}},methods:{removeUser:function(e){this.usersForBuild=this.usersForBuild.filter((function(t){return t.name!=e})),this.usersResult=[]},sortUsers:function(){this.usersForBuild.sort((function(e,t){return e.name>t.name?1:-1}))},inputChange:function(e){this.inputText=e},onSelect:function(e){var t=e.substring(e.indexOf("@")+1,e.indexOf(")")),n=this.friends.find((function(e){return e.domain===t}));this.usersForBuild.find((function(e){return e.domain===t}))||(this.usersForBuild.push(n),this.usersForBuild.sort((function(e,t){return e.name>t.name?1:-1})),this.inputText="")},onBuildClick:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,s,r,a,i,o,u,d,f;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n={},e.fetching=!0,s=Object(c["a"])(e.usersForBuild),t.prev=3,s.s();case 5:if((r=s.n()).done){t.next=14;break}return a=r.value,t.next=9,l.a.ajax({method:"GET",url:g.a.getFriendsByID(a.id,e.token),dataType:"JSONP"}).then((function(e){return e.response.items.map((function(e){return{id:e.id,name:"".concat(e.first_name," ").concat(e.last_name),city:e.city?e.city.title:g.a.unknown,sex:2===e.sex?"Men":"Woman",bdate:e.bdate||g.a.unknown,domain:e.domain,photo:e.photo_100}}))}));case 9:i=t.sent,o=Object(c["a"])(i);try{for(o.s();!(u=o.n()).done;)d=u.value,f=d.id,n[f]?(n[f].counter++,n[f].friends.push(a)):(n[f]={},Object.assign(n[f],d,{counter:1,friends:[]}),n[f].friends.push(a))}catch(p){o.e(p)}finally{o.f()}case 12:t.next=5;break;case 14:t.next=19;break;case 16:t.prev=16,t.t0=t["catch"](3),s.e(t.t0);case 19:return t.prev=19,s.f(),t.finish(19);case 22:e.usersResult=Object.values(n).sort((function(e,t){return e.name>t.name?1:-1})),e.fetching=!1;case 24:case"end":return t.stop()}}),t,null,[[3,16,19,22]])})))()},onUserClick:function(e){this.showPage=!0;var t=this.usersResult.find((function(t){return t.name===e}));this.clickedUser=t},onBackClick:function(e){this.showPage=!1}},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,s,r,a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return c=function(){return c=Object(i["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.a.ajax({method:"GET",url:g.a.getFriends(t),dataType:"JSONP"}).then((function(e){return e.response.items.map((function(e){return{id:e.id,name:"".concat(e.first_name," ").concat(e.last_name),city:e.city?e.city.title:"¯\\_(ツ)_/¯",sex:2===e.sex?"Men":"Woman",bdate:e.bdate||"¯\\_(ツ)_/¯",domain:e.domain,photo:e.photo_100}}))}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),c.apply(this,arguments)},a=function(e){return c.apply(this,arguments)},r=function(){return r=Object(i["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.a.ajax({method:"GET",url:g.a.getUserInfo(t),dataType:"JSONP"}).then((function(e){return e.response[0]}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),r.apply(this,arguments)},s=function(e){return r.apply(this,arguments)},n=function(){var e=window.location.href,t=localStorage.getItem("token"),n=Number(localStorage.getItem("expiresIn")),s=(new Date).getTime()/1e3,r=Number(localStorage.getItem("date"));if(!(!e.includes("access_token=")&&!t||r&&n&&s-r>=n&&!e.includes("access_token=")))return e.includes("access_token=")&&(localStorage.setItem("token",e.split("access_token=")[1].split("&")[0]),localStorage.setItem("expiresIn",e.split("expires_in=")[1].split("&")[0]),localStorage.setItem("date",(new Date).getTime()/1e3)),localStorage.getItem("token");window.location.href=g.a.oauthUrl(e)},e.token=n(),t.next=8,s(e.token);case 8:return e.userInfo=t.sent,t.next=11,a(e.token);case 11:e.friends=t.sent;case 12:case"end":return t.stop()}}),t)})))()}},G=A,W=(n("034f"),Object(b["a"])(G,r,a,!1,null,null,null)),H=W.exports,K=n("67b0"),L=n("f23d");n("202f");s["a"].config.productionTip=!1,s["a"].use(L["a"]),s["a"].use(K["a"]),s["a"].loadScript("https://vk.com/js/api/openapi.js?168"),new s["a"]({render:function(e){return e(H)}}).$mount("#app")},6860:function(e,t,n){},"6f0c":function(e,t,n){},"85ec":function(e,t,n){},"8baf":function(e,t,n){"use strict";var s=n("6860"),r=n.n(s);r.a},a078:function(e,t){e.exports={unknown:"¯\\_(ツ)_/¯",oauthUrl:function(e){return"https://oauth.vk.com/authorize?client_id=7553424&display=page&"+"redirect_uri=".concat(e,"&")+"scope=friends&response_type=token&v=5.52"},getUserInfo:function(e){return"https://api.vk.com/method/users.get?v=5.52&"+"access_token=".concat(e)},searchFriends:function(e,t){return"https://api.vk.com/method/friends.search?"+"q=".concat(e,"&")+"fields=sex,photo_100,city&v=5.122&count=10&"+"access_token=".concat(t)},getFriends:function(e){return"https://api.vk.com/method/friends.get?order=name&fields=sex,photo_100,city,domain,bdate&v=5.122&"+"access_token=".concat(e)},getFriendsByID:function(e,t){return"https://api.vk.com/method/friends.get?"+"user_id=".concat(e,"&")+"order=name&fields=sex,photo_100,city,domain,bdate&v=5.122&"+"access_token=".concat(t)}}},c432:function(e,t,n){}});
//# sourceMappingURL=app.07ab1d57.js.map