(function(t){function e(e){for(var r,u,i=e[0],d=e[1],c=e[2],l=0,f=[];l<i.length;l++)u=i[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(t[r]=d[r]);a&&a(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,i=1;i<n.length;i++){var d=n[i];0!==o[d]&&(r=!1)}r&&(s.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={app:0},s=[];function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/words/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var a=d;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"3f27":function(t,e,n){},"48c1":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("WordInput",{attrs:{words:t.words.length},on:{add:t.add}}),n("WordsList",{attrs:{words:t.words}})],1)},s=[],u=(n("4e82"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"word-input"},[n("LetterInput",{on:{"add-letter":t.addLetter}}),n("p",[t._v(t._s(t.word))]),n("button",{on:{click:t.deleteLetter}},[t._v("Delete")]),n("button",{on:{click:function(e){return t.$emit("add",t.word)}}},[t._v("Add")])],1)}),i=[],d=(n("a9e3"),n("99af"),n("fb6a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"letter-input"},t._l(t.letters,(function(e){return n("span",{key:e,on:{click:function(n){return t.$emit("add-letter",e)}}},[t._v(t._s(e))])})),0)}),c=[],a=function(t){var e,n=t.length;while(0!=n){e=Math.floor(Math.random()*n),n--;var r=[t[e],t[n]];t[n]=r[0],t[e]=r[1]}return t},l=["B","C","D","F","G","H","J","K","L","M","N","P","Q","R","S","T","V","W","X","Y","Z"],f=["A","E","I","O","U"],p=a(a(l).slice(0,4).concat(a(f).slice(0,3))),w={name:"LetterInput",data:function(){return{letters:p}}},h=w,v=(n("f7a6"),n("2877")),b=Object(v["a"])(h,d,c,!1,null,"7fbd05eb",null),_=b.exports,m={name:"WordInput",components:{LetterInput:_},props:{words:Number},data:function(){return{word:""}},methods:{addLetter:function(t){this.word="".concat(this.word).concat(t)},deleteLetter:function(){this.word=this.word.slice(0,-1)}},watch:{words:function(t,e){return this.word=t!==e?"":this.word}}},y=m,g=(n("647d"),Object(v["a"])(y,u,i,!1,null,"0140cf2e",null)),O=g.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"words-list"},[t.words.length?n("p",[t._v(" "+t._s(t.words.length)+" "+t._s(t.wordsPluralized)+" added: "),n("strong",[t._v(t._s(t.wordsSentence))])]):n("p",[t._v("No words yet")])])},L=[],x=(n("a15b"),n("761a")),P=n.n(x),S={name:"WordsList",props:{words:Array},computed:{wordsSentence:function(){return this.words.join(", ")},wordsPluralized:function(){return P()("word",this.words.length)}}},k=S,I=Object(v["a"])(k,j,L,!1,null,null,null),M=I.exports,W={name:"App",components:{WordInput:O,WordsList:M},data:function(){return{added:!1,words:[]}},methods:{add:function(t){t=t.toLowerCase(),t.length>0&&-1==this.words.indexOf(t)&&(this.words.push(t),this.words=this.words.sort())}}},$=W,C=(n("034f"),Object(v["a"])($,o,s,!1,null,null,null)),E=C.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(E)}}).$mount("#app")},"647d":function(t,e,n){"use strict";n("48c1")},"85ec":function(t,e,n){},f7a6:function(t,e,n){"use strict";n("3f27")}});
//# sourceMappingURL=app.716dfd43.js.map