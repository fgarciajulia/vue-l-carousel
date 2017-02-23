!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["vue-l-carousel"]=t():e["vue-l-carousel"]=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.CarouselItem=t.Carousel=void 0;var r=n(7),i=o(r),a=n(8),s=o(a);/**
	 * @preserve
	 * vue-l-carousel
	 *
	 * Copyright (c) 2017 - NOW Light Leung
	 *
	 * This library is distributed in the hope that it will be useful,
	 * but WITHOUT ANY WARRANTY; without even the implied warranty of
	 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
	 * Lesser General Public License for more details.
	 */
t.Carousel=i.default,t.CarouselItem=s.default},function(e,t){e.exports=function(e,t,n,o){var r,i=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(r=e,i=e.default);var s="function"==typeof i?i.options:i;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),n&&(s._scopeId=n),o){var u=s.computed||(s.computed={});Object.keys(o).forEach(function(e){var t=o[e];u[e]=function(){return t}})}return{esModule:r,exports:i,options:s}}},function(e,t){"use strict";function n(e){return"undefined"==typeof e?"undefined":b(e)}function o(e){return e instanceof Array}function r(e){return"string"==n(e)}function i(e,t){var n=void 0,o="#"==t[0],r=!o&&"."==t[0],i=o||r?t.slice(1):t,a=I.test(i);return e.getElementById&&a&&o?(n=e.getElementById(i))?[n]:[]:1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType?[]:T.call(a&&!o&&e.getElementsByClassName?r?e.getElementsByClassName(i):e.getElementsByTagName(t):e.querySelectorAll(t))}function a(e,t){for(var n,o=0,r=e.length;o<r;o++)n=e[o],t.call(n,n,o)}function s(e,t,n){r(t)?e.addEventListener(t,n):o(t)&&a(t,function(t){return s(e,t,n)})}function u(e,t,n){r(t)?e.removeEventListener(t,n):o(t)&&a(t,function(t){return u(e,t,n)})}function c(e,t,n){function o(){for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];n.apply(this,i),u(e,t,o)}s(e,t,o)}function d(e,t){return e.getAttribute(t)}function f(e){return e.childNodes}function l(e,t){e.appendChild(t)}function p(e,t){var n=f(e);n.length>0?e.insertBefore(t,n[0]):l(e,t)}function m(e,t){return e.cloneNode(t)}function v(e,t){e.classList.add(t)}function h(e){var t=e.parentNode;t&&t.removeChild(e)}function y(e){return e.replace(/-+(.)?/g,function(e,t){return t?t.toUpperCase():""})}function g(e){return e.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function x(e,t){return"number"!=n(t)||E[g(e)]?t:t+"px"}function w(e,t,n){var o=e.style;return arguments.length<3?o[y(t)]||getComputedStyle(e,"").getPropertyValue(t):void(n||0===n?o[g(t)]=x(t,n):o.removeProperty(g(t)))}function _(e){var t=e.getBoundingClientRect();return{left:t.left+L.pageXOffset,top:t.top+L.pageYOffset,width:P(t.width),height:P(t.height)}}function C(e){return _(e).width}Object.defineProperty(t,"__esModule",{value:!0});var b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L=window,I=/^[\w-]*$/,E={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},A=[],T=A.slice,P=Math.round,M={qsa:i,on:s,off:u,one:c,type:n,isArr:o,isStr:r,append:l,prepend:p,clone:m,addClass:v,remove:h,children:f,attr:d,css:w,each:a,offset:_,width:C};t.default=M},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){return a(e,Math.ceil)}function i(e){return a(e,Math.floor)}function a(e,t){return 100*t(parseInt(e,10)/100)}Object.defineProperty(t,"__esModule",{value:!0});var s=n(2),u=o(s),c=window,d=c.navigator,f=c.String,l=c.Number,p=c.Boolean,m=d.userAgent||d.appVersion,v=/webkit/i.test(m)?"webkit":/firefox/i.test(m)?"moz":"opera"in c?"o":"",h=v?"-"+v.toLowerCase()+"-":"",y=h+"transition",g=h+"transform",x=!!("ontouchstart"in c||d.maxTouchPoints),w="prev",_="next",C=["transitionend","OTransitionEnd","webkitTransitionEnd"],b="touchstart",L="touchend",I="mouseenter",E="mouseleave",A="mousedown",T="mouseup",P="resize",M=u.default.qsa,k=u.default.on,B=u.default.off,j=u.default.one,D=u.default.append,$=u.default.prepend,N=u.default.clone,R=u.default.remove,O=u.default.addClass,S=u.default.attr,W=u.default.css,V=u.default.width,z=u.default.offset,H=u.default.each;t.default={props:{prevHtml:{type:f,default:"&lt;"},nextHtml:{type:f,default:"&gt;"},speed:{type:l,default:300},loop:{type:p,default:!1},rewind:{type:p,default:!1},mouseDrag:{type:p,default:!1},auto:{type:l,default:0},dots:{type:p,default:!0},dotsStyle:{type:[Object,f,Array],default:""},watchItems:{type:Array,default:function(){return[]}}},data:function(){return{activeIndex:0,animPaused:!0,itemsLen:0,slideCount:0,hasLoop:!1,autoTimer:null,cloneItems:[],items:null,itemsWrap:null,transEndCB:null}},mounted:function(){function e(e,t){r.$watch(e,t)}function t(e,t){r.$on(e,t)}function n(e,t){r.$emit(e,t)}function o(){var e=r.activeIndex;n("changed-index",{index:e,total:r.itemsLen,item:r.watchItems[e]})}var r=this,i=r.$el,a=M(i,".v-carousel-items")[0],s=function(){r.updateRender(),o(),n("render-updated")},u=r.checkDrag,d=r.adjRound;r.itemsWrap=a,e("watchItems",s),e("loop",s),e("rewind",s),e("mouseDrag",u),e("auto",r.checkAuto),e("activeIndex",o),t("prev",r.prev),t("next",r.next),t("to",function(e){var t=parseInt(e,10),n=r.itemsLen;!isNaN(e)&&n>0&&t>=0&&t<n&&r.to(t)}),u(),s(),d(),k(c,P,d),k(a,C,r.checkTrans)},destroyed:function(){var e=this,t=e.itemsWrap;B(c,P,e.adjRound),e.unbindDrag(),B(t,C,e.checkTrans)},methods:{updateRender:function(){var e,t=this,n=t.loop,o=t.watchItems,r=o.length,i=t.rewind,a=n&&r>1,s=a&&!i?r+2:r,u=t.itemsWrap,c=t.cloneItems;if(c.length>0&&(H(c,function(e){R(e)}),c=[],t.cloneItems=c),e=M(u,".v-carousel-item"),a&&!i){var d=e[0],f=e[r-1],l=N(d,!0),p=N(f,!0);D(u,l),$(u,p),c.push(l),c.push(p),H(c,function(e){O(e,"cloned")}),e=M(u,".v-carousel-item")}t.hasLoop=a,t.itemsLen=r,t.slideCount=s,t.items=e,W(u,"width",100*s+"%"),H(e,function(e){W(e,"width",100/s+"%")}),t.rmAnim(),t.adjRound(),t.reset(),t.addAnim(),t.checkAuto()},reset:function(){var e=this;e.off(),e.to(0)},checkDrag:function(){var e=this,t=e.mouseDrag,n=e.itemsWrap,o=e.startCB,r=[],i=[];e.unbindDrag(),t&&(r.push("mousemove"),i.push(T)),x&&(r.push("touchmove"),i.push(L)),e.EV_MOVE=r,e.EV_END=i,t&&k(n,A,o),x&&k(n,b,o)},unbindDrag:function(){var e=this;B(e.itemsWrap,[b,A],e.startCB)},checkAuto:function(){var e=this,t=e.auto,n=e.off,o=e.on,r=e.itemsWrap;B(r,I,n),B(r,E,o),B(r,[b,A],n),B(r,[L,T],o),n(),t>0&&(k(r,I,n),k(r,E,o),k(r,[b,A],n),k(r,[L,T],o),o())},rmAnim:function(){var e=this;W(e.itemsWrap,y,"none"),e.animPaused=!0},addAnim:function(){var e=this,t=e.itemsWrap;z(t),W(t,y,g+" "+e.speed/1e3+"s ease"),e.animPaused=!1},on:function(){var e=this,t=e.hasLoop,n=e.itemsLen,o=e.auto;e.off(),n>1&&o>0&&(e.autoTimer=setInterval(function(){t?e.next():e.activeIndex==n-1?e.to(0):e.next()},o))},off:function(){var e=this;e.autoTimer&&(clearInterval(e.autoTimer),e.autoTimer=null)},next:function(){this.nextPrev(_)},prev:function(){this.nextPrev(w)},nextPrev:function(e){var t,n=this,o=n.hasLoop,r=n.rewind,i=n.itemsLen,a=i-1,s=n.activeIndex;if(e==w)if(0==s){if(!o)return;t=r?a:-1}else t=s-1;else if(s==i-1){if(!o)return;t=r?0:i}else t=s+1;n.to(t)},to:function(e){var t,n,o=this,r=o.hasLoop,i=o.itemsLen,a=o.slideCount,s=o.rewind,u=i-1,c=o.rmAnim,d=o.addAnim,f=o.to;r?(e==-1?n=function(){c(),f(u),d()}:e==i&&(n=function(){c(),f(0),d()}),t=s?e:e+1):t=e,n||(o.animPaused?o.activeIndex=e:n=function(){o.activeIndex=e}),o.transEndCB=n,o.transTo(t*-100/a)},checkTrans:function(){var e=this,t=e.transEndCB;t&&(t(),e.transEndCB=null)},transTo:function(e){W(this.itemsWrap,g,"translate3d("+e+"%,0,0)")},startCB:function(e){function t(e){return void 0!=S(e,"style")?g(e):0}function n(e){if(I){var t=m(e);s={time:Date.now(),coords:[t.pageX,t.pageY]},u=Math.abs(I.coords[0]-s.coords[0]),c=Math.abs(I.coords[1]-s.coords[1]),!(u<c||c>10||u<3)&&u>=3&&(I.interacting=!0,y(L+(s.coords[0]-I.coords[0])/b*100/d.slideCount),e.preventDefault())}}function o(e,n){var o=d.slideCount,a=t(e)*o;y((n?r(a):i(a))/o)}function a(e){d.nextPrev(e)}var s,u,c,d=this,f=d.$el,l=d.EV_MOVE,p=d.EV_END,m=d.getEv,v=d.rmAnim,h=d.addAnim,y=d.transTo,g=d.getPercent,x=m(e),C=d.itemsWrap,b=V(f),L=t(C),I={time:Date.now(),coords:[x.pageX,x.pageY],origin:f,interacting:!1};v(),k(C,l,n),j(C,p,function(e){var t=d.activeIndex;if(B(C,l,n),h(),I&&s){var r=Math.abs(I.coords[0]-s.coords[0]),i=Math.abs(I.coords[1]-s.coords[1]),u=I.coords[0]>s.coords[0],c=b/4;if(!(r>20&&r>i))return void(I.interacting&&o(C,u));e.preventDefault(),r>c&&(d.hasLoop&&!d.rewind||!u&&t>0||u&&t<d.itemsLen-1)?a(u?_:w):o(C,u)}I=s=null})},getEv:function(e){var t;return t=e.targetTouches?e.targetTouches[0]:e},getPercent:function(e){return S(e,"style").match(/transform:.*translate3d.*\((.*[0-9].*)%/i)&&parseFloat(RegExp.$1)},adjRound:function(){var e=this,t=e.$el,n=e.items,o=n&&n.length>0?V(t)-V(n[0]):0;0!==o&&H(n,function(e,t){W(e,"position","relative"),W(e,"left",o*t+"px")})}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{}}}},function(e,t){},function(e,t){},function(e,t,n){n(6);var o=n(1)(n(3),n(10),null,null);e.exports=o.exports},function(e,t,n){n(5);var o=n(1)(n(4),n(9),null,null);e.exports=o.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"v-carousel-item"},[e._t("default")],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"v-carousel"},[e._t("before"),e._v(" "),n("div",{staticClass:"v-carousel-items"},[e._t("default")],2),e._v(" "),e.dots?n("div",{staticClass:"v-carousel-dots",style:e.dotsStyle},e._l(e.watchItems,function(t,o){return n("div",{class:{"v-carousel-dot":!0,active:e.activeIndex==o},on:{click:function(t){e.to(o)}}})})):e._e(),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.hasLoop||e.itemsLen>1&&e.activeIndex>0,expression:"hasLoop || (itemsLen > 1 && activeIndex > 0)"}],staticClass:"v-carousel-nav prev",domProps:{innerHTML:e._s(e.prevHtml)},on:{click:e.prev}}),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.hasLoop||e.itemsLen>1&&e.activeIndex<e.itemsLen-1,expression:"hasLoop || (itemsLen > 1 && activeIndex < itemsLen - 1)"}],staticClass:"v-carousel-nav next",domProps:{innerHTML:e._s(e.nextHtml)},on:{click:e.next}}),e._v(" "),e._t("after")],2)},staticRenderFns:[]}}])});