(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"3Uem":function(e,t,n){e.exports=n.p+"static/hero-e9852c812e343d7455a53133f50bdcbe.webm"},"48la":function(e,t,n){n("2Spj"),n("/SS/"),n("hHhE"),n("HAE/"),e.exports=function(e,t){"use strict";var n="default"in e?e.default:e;function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e){return"translateX(".concat(e,"px)")}t=t&&t.hasOwnProperty("default")?t.default:t;var l=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,n=!(o=i(t).call(this,e))||"object"!=typeof o&&"function"!=typeof o?c(r):o,a(c(n),"_animationState",{stopped:!0,lastTickTime:null}),a(c(n),"_pos",{x:null}),a(c(n),"_refs",{container:null,inner:null}),n._setContainerRef=n._setContainerRef.bind(c(n)),n._setInnerRef=n._setInnerRef.bind(c(n)),n._tick=n._tick.bind(c(n)),n}var l,u,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}(t,e),l=t,(u=[{key:"componentDidMount",value:function(){this._resetPosition(),this._requestAnimationWithDelay()}},{key:"componentDidUpdate",value:function(){this._resetPosition(),this._requestAnimationWithDelay()}},{key:"_setContainerRef",value:function(e){this._refs.container=e}},{key:"_setInnerRef",value:function(e){this._refs.inner=e}},{key:"_resetPosition",value:function(){this._pos.x=this._getInitialPosition(),this._refs.inner.style.transform=s(this._pos.x)}},{key:"_requestAnimationWithDelay",value:function(){var e=this.props.delay;setTimeout(this._requestAnimationIfNeeded.bind(this),e)}},{key:"_requestAnimationIfNeeded",value:function(){this._refs.container&&this._refs.inner&&this._refs.inner.scrollWidth>this._refs.container.clientWidth&&window.requestAnimationFrame(this._tick)}},{key:"_tick",value:function(e){var t=this._animationState.lastTickTime;t&&this._updateInnerPosition(e-t),this._animationState.lastTickTime=e,this._requestAnimationIfNeeded()}},{key:"_updateInnerPosition",value:function(e){var t=this,n=this.props,r=n.direction,a=n.speed,i=n.childMargin,o=function(){if("right"===r){var n=t._pos.x+e*a;return n>-i?t._getInitialPosition():n}if("left"===r){var o=t._pos.x-e*a;return o<-t._refs.inner.clientWidth/2-i?t._getInitialPosition():o}return t._pos.x}();this._pos.x=o,this._refs.inner.style.transform=s(o)}},{key:"_getInitialPosition",value:function(){var e=this.props,t=e.direction,n=e.childMargin;return"right"===t?-this._refs.inner.clientWidth/2-n:-n}},{key:"render",value:function(){var e=this.props,t=e.childMargin,r=e.children,a=function(){return n.createElement("span",{style:{margin:"0 ".concat(t,"px")}},r)};return n.createElement("div",{ref:this._setContainerRef,style:{overflowX:"hidden"}},n.createElement("div",{ref:this._setInnerRef,style:{display:"inline-block"}},n.createElement(a,null),n.createElement(a,null)))}}])&&r(l.prototype,u),f&&r(l,f),t}(e.PureComponent);return a(l,"propTypes",{speed:t.number,direction:t.oneOf(["left","right"]),delay:t.number,childMargin:t.number,children:t.node}),a(l,"defaultProps",{speed:.04,delay:3e3,direction:"right",childMargin:15,children:null}),l}(n("q1tI"),n("17x9"))},DgSl:function(e,t,n){e.exports=n.p+"static/hero-55ff731e5ca95b476af2a0ef3778cc80.webm"},Pi8Y:function(e,t,n){e.exports=n.p+"static/hero-e91a2e532a4527460fa699169eaf7e71.webm"},RXBc:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("vrFN"),o=(n("93Eu"),n("Eg6Q")),c=(n("zLI8"),n("4QlT"),n("/eHF")),s=n.n(c),l=n("48la"),u=n.n(l),f=n("X7BR"),m=n("btAG"),h=n.n(m),p=n("UYvL"),d=n.n(p),_=n("DgSl"),v=n.n(_),y=n("3Uem"),b=n.n(y),E=n("Pi8Y"),g=n.n(E),w=n("qOYq"),k=n.n(w),P={default:h.a,phisher:d.a,cluse:v.a,ditto:b.a,fisqual:g.a,trunks:k.a},O=function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(s.a,{left:!0,duration:500},a.a.createElement("section",{className:"home__hero "+e.currentHover},a.a.createElement("figure",{className:"home__img"},a.a.createElement("video",{className:"home__img--limiter",preload:"yes",autoPlay:"autoplay",key:P[e.currentHover],loop:!0,muted:!0,playsInline:!0},a.a.createElement("source",{src:P[e.currentHover],type:"video/webm"}))),a.a.createElement("div",{className:"hero__txt"},a.a.createElement("div",{className:"marquee__wrap"},a.a.createElement(u.a,{direction:"left",children:"Booty",delay:"0",speed:"0.2"},f.a[e.currentHover].heroTitle))))))},x=(n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("HEwt"),n("vQWL"),n("Wbzz"));var N=function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"home__txt--wrapper"},a.a.createElement("section",{className:"home__txt"},a.a.createElement(s.a,{opposite:!0,right:!0,duration:500},(t=e.projects,n=e.mouseOverCallback,Array.from(Array(t.length).keys()).map((function(e){return a.a.createElement(x.a,{to:t[e]},a.a.createElement("div",{className:"link__wrapper",onMouseOver:n},a.a.createElement("h1",{className:"home__head"},(r=t[e]).charAt(0).toUpperCase()+r.slice(1)),a.a.createElement("h2",{className:"home__brow"},f.a[t[e]].heroYear)));var r})))))));var t,n},q=n("/g0T"),I=n("fItr");var H=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).handleProjectHover=function(e){n.setState({currentName:e.currentTarget.querySelector(".home__head").innerHTML.toLowerCase()})},n.handleHeaderHover=function(e){n.setState({currentName:"default"})},n.state={currentName:"default"},n}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(i.a,{title:"Yana Gevorgyan"}),a.a.createElement("main",{className:"home"},a.a.createElement("div",{className:"hero__wrapper"},a.a.createElement(o.a,{mouseOverCallback:this.handleHeaderHover}),a.a.createElement(O,{currentHover:this.state.currentName}),a.a.createElement(N,{currentHover:this.state.currentName,projects:["cluse","trunks","fisqual","phisher"],mouseOverCallback:this.handleProjectHover})),a.a.createElement(q.a,null),a.a.createElement(I.a,null)))},r}(a.a.Component);t.default=H},UYvL:function(e,t,n){e.exports=n.p+"static/hero-5eb944d9eff56da8b352cc07b1f74d40.webm"},btAG:function(e,t,n){e.exports=n.p+"static/hero-6f4ec3c7a4f9d8a46fdd63602095ae1c.webm"},qOYq:function(e,t,n){e.exports=n.p+"static/hero-bc79e1e8db1ca5b4f2f51711103f51dc.webm"}}]);
//# sourceMappingURL=component---src-pages-index-js-43eb2f98c1faa3a169fb.js.map