(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"/b8u":function(e,t,n){var a=n("STAE");e.exports=a&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},"/qmn":function(e,t,n){var a=n("2oRo");e.exports=a.Promise},0:function(e,t){},"0Q4T":function(e,t,n){e.exports=n.p+"static/c1_cropped-2de09c548bc47b18e4ece83e93831ead.png"},1:function(e,t){},2:function(e,t){},3:function(e,t){},"33Wh":function(e,t,n){var a=n("yoRg"),r=n("eDl+");e.exports=Object.keys||function(e){return a(e,r)}},4:function(e,t){},5:function(e,t){},"5Mbj":function(e,t,n){e.exports=n.p+"static/american_accent-37700b365b766632e9bd2b46b5920cca.jpg"},6:function(e,t){},"6LWA":function(e,t,n){var a=n("xrYK");e.exports=Array.isArray||function(e){return"Array"==a(e)}},"8GlL":function(e,t,n){"use strict";var a=n("HAuM"),r=function(e){var t,n;this.promise=new e((function(e,a){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=a})),this.resolve=a(t),this.reject=a(n)};e.exports.f=function(e){return new r(e)}},"8oxB":function(e,t){var n,a,r=e.exports={};function l(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function o(e){if(n===setTimeout)return setTimeout(e,0);if((n===l||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:l}catch(e){n=l}try{a="function"==typeof clearTimeout?clearTimeout:c}catch(e){a=c}}();var i,s=[],u=!1,m=-1;function f(){u&&i&&(u=!1,i.length?s=i.concat(s):m=-1,s.length&&p())}function p(){if(!u){var e=o(f);u=!0;for(var t=s.length;t;){for(i=s,s=[];++m<t;)i&&i[m].run();m=-1,t=s.length}i=null,u=!1,function(e){if(a===clearTimeout)return clearTimeout(e);if((a===c||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(e);try{a(e)}catch(t){try{return a.call(null,e)}catch(t){return a.call(this,e)}}}(e)}}function E(e,t){this.fun=e,this.array=t}function h(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new E(e,t)),1!==s.length||u||o(p)},E.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},A2ZE:function(e,t,n){var a=n("HAuM");e.exports=function(e,t,n){if(a(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,a){return e.call(t,n,a)};case 3:return function(n,a,r){return e.call(t,n,a,r)}}return function(){return e.apply(t,arguments)}}},"G+Rx":function(e,t,n){var a=n("0GbY");e.exports=a("document","documentElement")},HwDC:function(e,t,n){e.exports=n.p+"static/servicesA-f82fb1eec192d04e7678bb8bce3b3713.png"},"N+g0":function(e,t,n){var a=n("g6v/"),r=n("m/L8"),l=n("glrk"),c=n("33Wh");e.exports=a?Object.defineProperties:function(e,t){l(e);for(var n,a=c(t),o=a.length,i=0;o>i;)r.f(e,n=a[i++],t[n]);return e}},Ogtm:function(e,t,n){e.exports=n.p+"static/career2-de6a7223468bcc7232aebe00dac508ae.jpg"},RNIs:function(e,t,n){var a=n("tiKp"),r=n("fHMY"),l=n("m/L8"),c=a("unscopables"),o=Array.prototype;null==o[c]&&l.f(o,c,{configurable:!0,value:r(null)}),e.exports=function(e){o[c][e]=!0}},SEBh:function(e,t,n){var a=n("glrk"),r=n("HAuM"),l=n("tiKp")("species");e.exports=function(e,t){var n,c=a(e).constructor;return void 0===c||null==(n=a(c)[l])?t:r(n)}},STAE:function(e,t,n){var a=n("0Dky");e.exports=!!Object.getOwnPropertySymbols&&!a((function(){return!String(Symbol())}))},Vi9V:function(e,t,n){e.exports=n.p+"static/secrets_of_the_stars-a7f4f6bd139ebe727514aac2c65c44af.jpg"},XbcX:function(e,t,n){"use strict";var a=n("I+eb"),r=n("or9q"),l=n("ewvW"),c=n("UMSQ"),o=n("HAuM"),i=n("ZfDv");a({target:"Array",proto:!0},{flatMap:function(e){var t,n=l(this),a=c(n.length);return o(e),(t=i(n,0)).length=r(t,n,n,a,0,1,e,arguments.length>1?arguments[1]:void 0),t}})},ZfDv:function(e,t,n){var a=n("hh1v"),r=n("6LWA"),l=n("tiKp")("species");e.exports=function(e,t){var n;return r(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!r(n.prototype)?a(n)&&null===(n=n[l])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},"a1w/":function(e,t,n){e.exports=n.p+"static/servicesB-a3dced01f9a1172a31c321ab5b7a831e.png"},"aNN+":function(e,t,n){e.exports=n.p+"static/servicesE-c5d8f01c114116a7d6b279bd5e02ac62.png"},c9m3:function(e,t,n){n("RNIs")("flatMap")},fHMY:function(e,t,n){var a,r=n("glrk"),l=n("N+g0"),c=n("eDl+"),o=n("0BK2"),i=n("G+Rx"),s=n("zBJ4"),u=n("93I0"),m=u("IE_PROTO"),f=function(){},p=function(e){return"<script>"+e+"<\/script>"},E=function(){try{a=document.domain&&new ActiveXObject("htmlfile")}catch(r){}var e,t;E=a?function(e){e.write(p("")),e.close();var t=e.parentWindow.Object;return e=null,t}(a):((t=s("iframe")).style.display="none",i.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(p("document.F=Object")),e.close(),e.F);for(var n=c.length;n--;)delete E.prototype[c[n]];return E()};o[m]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(f.prototype=r(e),n=new f,f.prototype=null,n[m]=e):n=E(),void 0===t?n:l(n,t)}},izN1:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="izN1"},lhMi:function(e,t,n){e.exports=n.p+"static/servicesF-5c909eb8fee090bf11450dafe1f25406.png"},or9q:function(e,t,n){"use strict";var a=n("6LWA"),r=n("UMSQ"),l=n("A2ZE"),c=function(e,t,n,o,i,s,u,m){for(var f,p=i,E=0,h=!!u&&l(u,m,3);E<o;){if(E in n){if(f=h?h(n[E],E,t):n[E],s>0&&a(f))p=c(e,t,f,r(f.length),p,s-1)-1;else{if(p>=9007199254740991)throw TypeError("Exceed the acceptable array length");e[p]=f}p++}E++}return p};e.exports=c},p532:function(e,t,n){"use strict";var a=n("I+eb"),r=n("xDBR"),l=n("/qmn"),c=n("0Dky"),o=n("0GbY"),i=n("SEBh"),s=n("zfnd"),u=n("busE");a({target:"Promise",proto:!0,real:!0,forced:!!l&&c((function(){l.prototype.finally.call({then:function(){}},(function(){}))}))},{finally:function(e){var t=i(this,o("Promise")),n="function"==typeof e;return this.then(n?function(n){return s(t,e()).then((function(){return n}))}:e,n?function(n){return s(t,e()).then((function(){throw n}))}:e)}}),r||"function"!=typeof l||l.prototype.finally||u(l.prototype,"finally",o("Promise").prototype.finally)},"q+GV":function(e,t,n){e.exports=n.p+"static/servicesD-e8530cc45232655e132da671279f5bc3.png"},tiKp:function(e,t,n){var a=n("2oRo"),r=n("VpIT"),l=n("UTVS"),c=n("kOOl"),o=n("STAE"),i=n("/b8u"),s=r("wks"),u=a.Symbol,m=i?u:u&&u.withoutSetter||c;e.exports=function(e){return l(s,e)||(o&&l(u,e)?s[e]=u[e]:s[e]=m("Symbol."+e)),s[e]}},wCYt:function(e,t,n){"use strict";n.r(t);var a=n("dI71"),r=n("q1tI"),l=n.n(r),c=n("uuth"),o=n("Bl7J"),i=n("xiP5"),s=n.n(i),u=n("Vi9V"),m=n.n(u),f=n("5Mbj"),p=n.n(f),E=n("Ogtm"),h=n.n(E),d=n("HwDC"),g=n.n(d),y=n("a1w/"),b=n.n(y),v=n("zhqb"),w=n.n(v),N=n("q+GV"),x=n.n(N),S=n("aNN+"),A=n.n(S),T=(n("lhMi"),n("YIkO")),k=n.n(T),C=n("+22N"),O=n("Wbzz"),M=function(e){return l.a.createElement("nav",{id:"nav",className:e.sticky?"alt":""},l.a.createElement(k.a,{items:["home","your-career","coaching","general-american-accent","secrets-of-the-stars","archetype-coaching"],currentClassName:"is-active",offset:-300},l.a.createElement("li",null,l.a.createElement(O.Link,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(C.a,{type:"id",element:"your-career"},l.a.createElement("a",{href:"#"},"Your Career"))),l.a.createElement("li",null,l.a.createElement(C.a,{type:"id",element:"coaching"},l.a.createElement("a",{href:"#"},"Coaching"))),l.a.createElement("li",null,l.a.createElement(C.a,{type:"id",element:"general-american-accent"},l.a.createElement("a",{href:"#"},"General American Accent"))),l.a.createElement("li",null,l.a.createElement(C.a,{type:"id",element:"secrets-of-the-stars"},l.a.createElement("a",{href:"#"},"Secrets of the Stars"))),l.a.createElement("li",null,l.a.createElement(C.a,{type:"id",element:"archetype-coaching"},l.a.createElement("a",{href:"#"},"Archetype Coaching")))))},j=n("0Q4T"),I=n.n(j),L=(n("SoUf"),function(e){function t(t){var n;return(n=e.call(this,t)||this)._handleWaypointEnter=function(){n.setState((function(){return{stickyNav:!1}}))},n._handleWaypointLeave=function(){n.setState((function(){return{stickyNav:!0}}))},n.state={stickyNav:!1},n}return Object(a.a)(t,e),t.prototype.render=function(){return l.a.createElement(o.a,null,l.a.createElement(c.a,{onEnter:this._handleWaypointEnter,onLeave:this._handleWaypointLeave}),l.a.createElement(M,{sticky:this.state.stickyNav}),l.a.createElement("div",{id:"main"},l.a.createElement("section",{id:"your-career",className:"main"},l.a.createElement("div",{className:"spotlight"},l.a.createElement("div",{className:"content"},l.a.createElement("header",{className:"major custom"},l.a.createElement("h2",null,"Your Career")),l.a.createElement("span",{className:"imageServices"},l.a.createElement("img",{src:h.a,alt:""})),l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement("em",null,"Resumes are your entry through the door and as such, are THE most important tool for job placement and positioning. Your resume should outperform your competition while highlighting your strengths."),l.a.createElement("br",null),l.a.createElement("br",null),"Our resumes are customized for you and are written based on how other recruiters search for and select candidates. We implement proven resume strategies that are Applicant Tracking System (ATS) compliant and target how recruiters/employers search, read, and find resumes today.",l.a.createElement("br",null),l.a.createElement("br",null),"Includes:",l.a.createElement("ul",null,l.a.createElement("li",null,"30min – 1hr phone consultation to discuss your current resume, career goals, and resume strategy"),l.a.createElement("li",null,"Update/Revision to your current resume sent to your email in Wordx/PDF attachment"),l.a.createElement("li",null,"1 month free of additional resume edits, if needed"),l.a.createElement("li",null,"Returning clients also receive a 25% discount whenever a resume is needed in the future"),l.a.createElement("li",null,"Email us for a price quote and free summary of work offer"))),l.a.createElement("span",{className:"imageServicesExtra"},l.a.createElement("img",{src:g.a,alt:"Early Career"})),l.a.createElement("br",null),l.a.createElement("span",{className:"imageServicesExtra"},l.a.createElement("img",{src:b.a,alt:"Experienced"})),l.a.createElement("br",null),l.a.createElement("span",{className:"imageServicesExtra"},l.a.createElement("img",{src:w.a,alt:"Managers/Directors"})),l.a.createElement("br",null),l.a.createElement("span",{className:"imageServicesExtra"},l.a.createElement("img",{src:x.a,alt:"Licensed Professionals"})),l.a.createElement("br",null),l.a.createElement("span",{className:"imageServicesExtra"},l.a.createElement("img",{src:A.a,alt:"Executives"})),l.a.createElement("br",null),l.a.createElement("h3",null,"Al A Carte"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("strong",null,"Theatrical Resume - $60")),"Must submit old resume or complete questionnaire.",l.a.createElement("li",null,l.a.createElement("strong",null,"Bio - $85")),"Eye catching, real, and written to reflect your personality and style.",l.a.createElement("li",null,l.a.createElement("strong",null,"Headshot Consultation - $50")),"We will advise you on how to choose the perfect headshot(s) based on your personality, brand, and your competition.",l.a.createElement("li",null,l.a.createElement("strong",null,"LinkedIn Update - $50")),l.a.createElement("strong",null,"Over 87% of employers utilize LinkedIn making it a key resource for jobseekers."),l.a.createElement("br",null),"We will optimize your profile, add content, and improve your chances of being seen by employers.",l.a.createElement("li",null,l.a.createElement("strong",null,"Job Interview Prep - $100")),"A 45min - 1-hr phone consultation where we will answer questions, rehearse responses, and provide powerful tips to help you succeed during the job interview.",l.a.createElement("li",null,l.a.createElement("strong",null,"Cover Letter (+ Thank You Letter) - $80 ($100)")),"A personalized and perfected intro and outro paired with your resume."),l.a.createElement("p",null,"***Prices listed are for updating & improving existing resumes. There is an additional cost if you do not have an existing resume.",l.a.createElement("br",null),"****LinkedIn Updating is only offered with a resume")))),l.a.createElement("section",{id:"coaching",className:"main"},l.a.createElement("div",{className:"spotlight"},l.a.createElement("div",{className:"content"},l.a.createElement("header",{className:"major custom"},l.a.createElement("h2",null,"Coaching")),l.a.createElement("span",{className:"imageServicesExtra"},l.a.createElement("img",{src:I.a,alt:""})),l.a.createElement("br",null),l.a.createElement("p",{className:"column"},l.a.createElement("ul",null,l.a.createElement("li",null,"General American Accent"),l.a.createElement("li",null,"Neutral/UK Accents"),l.a.createElement("li",null,"Regional American Dialects"),l.a.createElement("li",null,"US Scenes (Film/TV)"),l.a.createElement("li",null,"US Sitcom"),l.a.createElement("li",null,"US Plays"))),l.a.createElement("p",{className:"column"},l.a.createElement("ul",null,l.a.createElement("li",null,"US Drama"),l.a.createElement("li",null,"US Musical Theatre"),l.a.createElement("li",null,"Client Branding"),l.a.createElement("li",null,"Client Sourcing"),l.a.createElement("li",null,"Career Consulting"),l.a.createElement("li",null,"Interviews"))),l.a.createElement("p",{className:"column"},l.a.createElement("ul",null,l.a.createElement("li",null,"Movement"),l.a.createElement("li",null,"Singing"),l.a.createElement("li",null,"Voice & Speech"),l.a.createElement("li",null,"Self-tapes/Auditions"),l.a.createElement("li",null,"Acting"),l.a.createElement("li",null,"On-set")))))),l.a.createElement("section",{id:"general-american-accent",className:"main"},l.a.createElement("div",{className:"spotlight"},l.a.createElement("div",{className:"content"},l.a.createElement("header",{className:"major custom"},l.a.createElement("h2",null,"General American Accent for Self-Tapes")),l.a.createElement("span",{className:"imageServices"},l.a.createElement("a",{href:"https://youtu.be/uIS59EP8_og",target:"_blank"},l.a.createElement("img",{src:p.a,alt:""}))),l.a.createElement("br",null),l.a.createElement("p",{className:"centeredText"},l.a.createElement("strong",null,"All clients must take this before private US accent coaching with Kai."),l.a.createElement("br",null),"Click the image for further details."),l.a.createElement("p",{className:"centeredText"},l.a.createElement("strong",null,"Date"),": Enrollment Open Now!",l.a.createElement("br",null),l.a.createElement("strong",null,"Closing"),": April 15th",l.a.createElement("br",null),l.a.createElement("strong",null,"Attendees"),": All Levels",l.a.createElement("br",null),l.a.createElement("strong",null,"Where"),": Your Home",l.a.createElement("br",null),l.a.createElement("strong",null,"Duration"),": 2 Weeks",l.a.createElement("br",null),l.a.createElement("strong",null,"Price"),": $750",l.a.createElement("br",null),l.a.createElement("strong",null,"Format"),": Online Video Intensive",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("strong",null,"Message us to see if you qualify for the seasonal discount"))))),l.a.createElement("section",{id:"secrets-of-the-stars",className:"main"},l.a.createElement("div",{className:"spotlight"},l.a.createElement("div",{className:"content"},l.a.createElement("header",{className:"major custom"},l.a.createElement("h2",null,"Secrets of the Stars")),l.a.createElement("span",{className:"imageServices"},l.a.createElement("a",{href:"https://youtu.be/IAu2M_iEeqw",target:"_blank"},l.a.createElement("img",{src:m.a,alt:""}))),l.a.createElement("br",null),l.a.createElement("p",{className:"centeredText"},l.a.createElement("strong",null,"This jam-packed intensive offers in-depth, first-hand knowledge of the industry and reveals the necessary steps to success."),l.a.createElement("br",null),"Click the image for further details."),l.a.createElement("p",{className:"centeredText"},l.a.createElement("strong",null,"Date"),": Enrollment Open Now!",l.a.createElement("br",null),l.a.createElement("strong",null,"Closing"),": April 15th",l.a.createElement("br",null),l.a.createElement("strong",null,"Attendees"),": All Levels",l.a.createElement("br",null),l.a.createElement("strong",null,"Where"),": Your Home",l.a.createElement("br",null),l.a.createElement("strong",null,"Duration"),": 4 Weeks",l.a.createElement("br",null),l.a.createElement("strong",null,"Price"),": $1200",l.a.createElement("br",null),l.a.createElement("strong",null,"Format"),": Online Video Intensive",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("strong",null,"Message us to see if you qualify for the seasonal discount"))))),l.a.createElement("section",{id:"archetype-coaching",className:"main"},l.a.createElement("div",{className:"spotlight"},l.a.createElement("div",{className:"content"},l.a.createElement("header",{className:"major custom"},l.a.createElement("h2",null,"Archetype Coaching")),l.a.createElement("span",{className:"imageServices"},l.a.createElement("img",{src:s.a,alt:""})),l.a.createElement("br",null),l.a.createElement("p",null,"In Jungian psychology, the archetypes represent universal patterns and images that are part of the collective unconscious. Jung believed that we inherit these archetypes much in the way we inherit instinctive patterns of behavior.",l.a.createElement("br",null),l.a.createElement("br",null),"The word “archetype” means original pattern.",l.a.createElement("br",null),l.a.createElement("br",null),"Millions of people around the world know their psychological type, the result of completing the Myers-Briggs Type Indicator® assessment. The MBTI® instrument is a tool created by Isabel Myers based on Carl G. Jung's personality type theories. In this work you can find your mission & purpose, understand life lessons, unlock roadblocks, and get clarity on how to reach success.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("strong",null,"Recommended prior to standard coaching.")))))))},t}(l.a.Component));t.default=L},xiP5:function(e,t,n){e.exports=n.p+"static/archetype-fe4d3bbacb4b32bd9b8cafa19d0f9fee.jpg"},zfnd:function(e,t,n){var a=n("glrk"),r=n("hh1v"),l=n("8GlL");e.exports=function(e,t){if(a(e),r(t)&&t.constructor===e)return t;var n=l.f(e);return(0,n.resolve)(t),n.promise}},zhqb:function(e,t,n){e.exports=n.p+"static/servicesC-b3d0a1fe46bf85f28ba431a3997d8f09.png"}}]);
//# sourceMappingURL=component---src-pages-services-js-94d77ed2d6d24e5c96a0.js.map