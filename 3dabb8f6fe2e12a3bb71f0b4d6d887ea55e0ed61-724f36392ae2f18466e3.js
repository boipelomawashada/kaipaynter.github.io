(self.webpackChunkkaipaynter_github_io=self.webpackChunkkaipaynter_github_io||[]).push([[192],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var c,l,u,s;if(Array.isArray(e)){if((c=e.length)!=o.length)return!1;for(l=c;0!=l--;)if(!i(e[l],o[l]))return!1;return!0}if(n&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!o.has(l.value[0]))return!1;for(s=e.entries();!(l=s.next()).done;)if(!i(l.value[1],o.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!o.has(l.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((c=e.length)!=o.length)return!1;for(l=c;0!=l--;)if(e[l]!==o[l])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===o.toString();if((c=(u=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(o,u[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!e.$$typeof)&&!i(e[u[l]],o[u[l]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,a=n(7294),i=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function s(){l=e(u.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){u.push(this),s()},o.componentDidUpdate=function(){s()},o.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},o.render=function(){return i.createElement(r,this.props)},a}(a.PureComponent);return o(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),o(f,"canUseDOM",c),f}}},8514:function(e){e.exports={siteTitle:"Kai Paynter",manifestName:"Kai Paynter",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#663399",manifestThemeColor:"#663399",manifestDisplay:"standalone",manifestIcon:"src/assets/images/Kai_Paynter_Logo.jpg",heading:"Kai Paynter",subHeading:"Kai Paynter",socialLinks:[{icon:"fa-instagram",name:"Instagram",url:"https://instagram.com/kai_paynter"},{icon:"fa-twitter",name:"Twitter",url:"https://twitter.com/kai_paynter"},{icon:"fa-facebook",name:"Facebook",url:"https://www.facebook.com/kaipaynter"}]}},7077:function(e,t,n){"use strict";n.d(t,{Z:function(){return ke}});var r,a,i,o,c=n(1721),l=n(7294),u=n(5697),s=n.n(u),f=n(4839),p=n.n(f),m=n(2993),d=n.n(m),h=n(6494),y=n.n(h),b="bodyAttributes",v="htmlAttributes",g="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(T).map((function(e){return T[e]})),"charset"),w="cssText",C="href",A="http-equiv",O="innerHTML",S="itemprop",k="name",P="property",j="rel",L="src",N="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},x="defaultTitle",M="defer",_="encodeSpecialCharacters",R="onChangeClientState",D="titleTemplate",H=Object.keys(I).reduce((function(e,t){return e[I[t]]=t,e}),{}),B=[T.NOSCRIPT,T.SCRIPT,T.STYLE],F="data-react-helmet",K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},U=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},z=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},G=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(e){var t=X(e,T.TITLE),n=X(e,D);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=X(e,x);return t||r||void 0},Z=function(e){return X(e,R)||function(){}},$=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},Q=function(e,t){return t.filter((function(e){return void 0!==e[T.BASE]})).map((function(e){return e[T.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},J=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ae("Helmet: "+e+' should be of type "Array". Instead found type "'+K(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var c=i[o],l=c.toLowerCase();-1===t.indexOf(l)||n===j&&"canonical"===e[n].toLowerCase()||l===j&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==O&&c!==w&&c!==S||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][u]&&(a[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var c=i[o],l=y()({},r[c],a[c]);r[c]=l}return e}),[]).reverse()},X=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},ee=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){ee(e)}),0)}),te=function(e){return clearTimeout(e)},ne="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ee:n.g.requestAnimationFrame||ee,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||te:n.g.cancelAnimationFrame||te,ae=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ie=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;ue(T.BODY,r),ue(T.HTML,a),le(f,p);var m={baseTag:se(T.BASE,n),linkTags:se(T.LINK,i),metaTags:se(T.META,o),noscriptTags:se(T.NOSCRIPT,c),scriptTags:se(T.SCRIPT,u),styleTags:se(T.STYLE,s)},d={},h={};Object.keys(m).forEach((function(e){var t=m[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(h[e]=m[e].oldTags)})),t&&t(),l(e,d,h)},ce=function(e){return Array.isArray(e)?e.join(""):e},le=function(e,t){void 0!==e&&document.title!==e&&(document.title=ce(e)),ue(T.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(F),a=r?r.split(","):[],i=[].concat(a),o=Object.keys(t),c=0;c<o.length;c++){var l=o[c],u=t[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),-1===a.indexOf(l)&&a.push(l);var s=i.indexOf(l);-1!==s&&i.splice(s,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);a.length===i.length?n.removeAttribute(F):n.getAttribute(F)!==o.join(",")&&n.setAttribute(F,o.join(","))}},se=function(e,t){var n=document.head||document.querySelector(T.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),a=Array.prototype.slice.call(r),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===O)n.innerHTML=t.innerHTML;else if(r===w)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(F,"true"),a.some((function(e,t){return o=t,n.isEqualNode(e)}))?a.splice(o,1):i.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:i}},fe=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},pe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[I[n]||n]=e[n],t}),t)},me=function(e,t,n){switch(e){case T.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[F]=!0,a=pe(n,r),[l.createElement(T.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=fe(n),i=ce(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+G(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+G(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case b:case v:return{toComponent:function(){return pe(t)},toString:function(){return fe(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[F]=!0,r);return Object.keys(t).forEach((function(e){var n=I[e]||e;if(n===O||n===w){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),l.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===O||e===w)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+G(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",o=-1===B.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,l=e.scriptTags,u=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:me(T.BASE,t,r),bodyAttributes:me(b,n,r),htmlAttributes:me(v,a,r),link:me(T.LINK,i,r),meta:me(T.META,o,r),noscript:me(T.NOSCRIPT,c,r),script:me(T.SCRIPT,l,r),style:me(T.STYLE,u,r),title:me(T.TITLE,{title:f,titleAttributes:p},r)}},he=p()((function(e){return{baseTag:Q([C,N],e),bodyAttributes:$(b,e),defer:X(e,M),encode:X(e,_),htmlAttributes:$(v,e),linkTags:J(T.LINK,[j,C],e),metaTags:J(T.META,[k,E,A,P,S],e),noscriptTags:J(T.NOSCRIPT,[O],e),onChangeClientState:Z(e),scriptTags:J(T.SCRIPT,[L,O],e),styleTags:J(T.STYLE,[w],e),title:V(e),titleAttributes:$(g,e)}}),(function(e){ie&&re(ie),e.defer?ie=ne((function(){oe(e,(function(){ie=null}))})):(oe(e),ie=null)}),de)((function(){return null})),ye=(a=he,o=i=function(e){function t(){return q(this,t),W(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:t};case T.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return Y({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Y({},a,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(r.type){case T.TITLE:return Y({},a,((t={})[r.type]=o,t.titleAttributes=Y({},i),t));case T.BODY:return Y({},a,{bodyAttributes:Y({},i)});case T.HTML:return Y({},a,{htmlAttributes:Y({},i)})}return Y({},a,((n={})[r.type]=Y({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Y({},t);return Object.keys(e).forEach((function(t){var r;n=Y({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return l.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[H[n]||n]=e[n],t}),t)}(z(a,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:o,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=z(e,["children"]),r=Y({},n);return t&&(r=this.mapChildrenToProps(t,r)),l.createElement(a,r)},U(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(l.Component),i.propTypes={base:s().object,bodyAttributes:s().object,children:s().oneOfType([s().arrayOf(s().node),s().node]),defaultTitle:s().string,defer:s().bool,encodeSpecialCharacters:s().bool,htmlAttributes:s().object,link:s().arrayOf(s().object),meta:s().arrayOf(s().object),noscript:s().arrayOf(s().object),onChangeClientState:s().func,script:s().arrayOf(s().object),style:s().arrayOf(s().object),title:s().string,titleAttributes:s().object,titleTemplate:s().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);ye.renderStatic=ye.rewind;var be=ye,ve=n(5444);function ge(){return l.createElement("section",null,l.createElement("h2",null,"Get in touch"),l.createElement("form",{method:"post",action:"https://getform.io/f/691a6df1-eaa3-47d2-84b9-a5727ec0d386"},l.createElement("div",{className:"fields"},l.createElement("div",{className:"field half"},l.createElement("input",{type:"text",name:"name",id:"name",placeholder:"Name"})),l.createElement("div",{className:"field half"},l.createElement("input",{type:"email",name:"email",id:"email",placeholder:"Email"})),l.createElement("div",{className:"field"},l.createElement("textarea",{name:"message",id:"message",placeholder:"Message"}))),l.createElement("ul",{className:"actions"},l.createElement("li",null,l.createElement("input",{type:"submit",value:"Send",className:"primary"})))))}var Te=n(8514),Ee=n.n(Te);function we(){return l.createElement("footer",{id:"footer"},l.createElement("div",{className:"inner"},l.createElement(ge,null),l.createElement("section",null,l.createElement("h2",null,"Follow"),l.createElement("ul",{className:"icons"},Ee().socialLinks.map((function(e){var t=e.icon,n=e.name,r=e.url;return l.createElement("li",{key:r},l.createElement("a",{href:r,className:"icon "+t,target:"_blank",rel:"noreferrer"},l.createElement("span",{className:"label"},n)))})))),l.createElement("ul",{className:"copyright"},l.createElement("li",null,"© Kai Paynter. All rights reserved"))))}function Ce(e){var t=e.onClose,n=void 0===t?function(){}:t;return l.createElement("nav",{id:"menu"},l.createElement("div",{className:"inner"},l.createElement("h2",null,"Menu"),l.createElement("ul",null,l.createElement("li",null,l.createElement(ve.Link,{to:"/"},"Home")),l.createElement("li",null,l.createElement(ve.Link,{to:"/Performer"},"Performer")),l.createElement("li",null,l.createElement(ve.Link,{to:"/Socials"},"Socials")),l.createElement("li",null,l.createElement(ve.Link,{to:"/Gallery"},"Gallery")),l.createElement("li",null,l.createElement(ve.Link,{to:"/Contact"},"Contact")))),l.createElement("a",{className:"close",onClick:function(e){e.preventDefault(),n()},href:"#menu"},"Close"))}function Ae(e){var t=e.onMenuClick,n=void 0===t?function(){}:t;return l.createElement("nav",null,l.createElement("ul",null,l.createElement("li",null,l.createElement("a",{href:"#menu",onClick:function(e){e.preventDefault(),n()}},"Menu"))))}var Oe=n.p+"static/Kai_Paynter_logo_tight-bafc746d3a52a488dd9cef2963ddbb7f.jpg";function Se(e){e.sections;var t=(0,l.useState)(!1),n=t[0],r=t[1];return l.createElement(l.Fragment,null,l.createElement("header",{id:"header"},l.createElement("div",{className:"inner"},l.createElement(ve.Link,{to:"/",className:"logo"},l.createElement("span",{className:"large"},l.createElement("img",{src:Oe,alt:""}))),l.createElement(Ae,{onMenuClick:function(){return r(!n)}}))),l.createElement("div",{className:n?"is-menu-visible":" "},l.createElement(Ce,{onClose:function(){return r(!n)}})))}var ke=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isPreloaded:!0},n}(0,c.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;this.timeoutId=setTimeout((function(){e.setState({isPreloaded:!1})}),100)},n.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},n.render=function(){var e=this.props.children,t=this.state.isPreloaded;return l.createElement(ve.StaticQuery,{query:"3649515864",render:function(n){return l.createElement(l.Fragment,null,l.createElement(be,{title:n.site.siteMetadata.title,meta:[{name:"description",content:"Kai Paynter"},{name:"keywords",content:"kai paynter, kaipaynter, actress, coach, performer, singer"}]},l.createElement("html",{lang:"en"})),l.createElement("div",{className:t?"main-body is-preload":"main-body"},l.createElement("div",{id:"wrapper"},l.createElement(Se,null),e,l.createElement(we,null))))}})},t}(l.Component)}}]);
//# sourceMappingURL=3dabb8f6fe2e12a3bb71f0b4d6d887ea55e0ed61-724f36392ae2f18466e3.js.map