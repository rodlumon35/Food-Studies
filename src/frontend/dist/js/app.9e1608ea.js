(function(e){function t(t){for(var r,o,c=t[0],l=t[1],s=t[2],u=0,g=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&g.push(i[o][0]),i[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);f&&f(t);while(g.length)g.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(r=!1)}r&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={app:0},i={app:0},a=[];function c(e){return l.p+"js/"+({login:"login",profile:"profile",register:"register"}[e]||e)+"."+{login:"cdd006d1",profile:"9b6dfa7e",register:"bfc045bf"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={login:1,register:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({login:"login",profile:"profile",register:"register"}[e]||e)+"."+{login:"21193e11",profile:"31d6cfe0",register:"47b202be"}[e]+".css",i=l.p+r,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var s=a[c],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===r||u===i))return t()}var g=document.getElementsByTagName("style");for(c=0;c<g.length;c++){s=g[c],u=s.getAttribute("data-href");if(u===r||u===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],f.parentNode.removeChild(f),n(a)},f.href=i;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){o[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=a);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=c(e);var g=new Error;s=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;g.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",g.name="ChunkLoadError",g.type=r,g.request=o,n[1](g)}i[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var g=0;g<s.length;g++)t(s[g]);var f=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1cda":function(e,t,n){"use strict";n("819f")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function o(e,t){var n=Object(r["v"])("router-view");return Object(r["p"])(),Object(r["c"])(n)}const i={};i.render=o;var a=i,c=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),l={class:"home"},s={class:"navbar navbar-expand-lg navbar-light bg-light"},u=Object(r["g"])("div",null,[Object(r["g"])("div",{class:"brand-logo"},[Object(r["g"])("img",{src:"img/logo vectorial.svg",alt:"logo",id:"logo"})])],-1),g=Object(r["g"])("div",null,[Object(r["g"])("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(r["g"])("span",{class:"navbar-toggler-icon"})])],-1),f={class:"collapse navbar-collapse align-content-end justify-content-end",id:"navbarSupportedContent"},d={class:"navbar-nav"},p={class:"nav-item"},b=Object(r["f"])("Login"),v={class:"nav-item"},m=Object(r["f"])("Register"),h={class:"d-flex p-1 mt-4 flex-xl-row flex-lg-row flex-md-column flex-sm-column flex-column align-content-center justify-content-center"},j={class:"info col-xl-4 col-lg-4 col-12 d-flex flex-column align-content-center justify-content-center p-4"},O=Object(r["g"])("h1",{class:"display-1"},"Food Studies",-1),y=Object(r["g"])("p",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Est officia ea maiores debitis, dolor accusamus perferendis, tenetur doloremque non corporis velit voluptatem dignissimos. Est rerum saepe temporibus! Exercitationem, tenetur incidunt! ",-1),x=Object(r["f"])("Try now"),w=Object(r["g"])("div",{class:"illustration col-xl-7 col-lg-7 col-12 d-flex align-content-center justify-content-center"},[Object(r["g"])("img",{src:"img/undraw_social_friends_nsbv.svg",alt:"social network illustration"})],-1);function _(e,t){var n=Object(r["v"])("router-link");return Object(r["p"])(),Object(r["c"])("div",l,[Object(r["g"])("nav",s,[u,g,Object(r["g"])("div",f,[Object(r["g"])("ul",d,[Object(r["g"])("li",p,[Object(r["g"])(n,{class:"nav-link",to:"/user/login"},{default:Object(r["A"])((function(){return[b]})),_:1})]),Object(r["g"])("li",v,[Object(r["g"])(n,{class:"nav-link",to:"/user/register"},{default:Object(r["A"])((function(){return[m]})),_:1})])])])]),Object(r["g"])("section",h,[Object(r["g"])("div",j,[O,y,Object(r["g"])("div",null,[Object(r["g"])(n,{to:"/user/register",class:"btn btn-lg text-light"},{default:Object(r["A"])((function(){return[x]})),_:1})])]),w])])}n("1cda");const S={};S.render=_;var k=S,E=[{path:"/",name:"Home",component:k},{path:"/user/register",name:"Register",component:function(){return n.e("register").then(n.bind(null,"73cf"))}},{path:"/user/login",name:"Login",component:function(){return n.e("login").then(n.bind(null,"a55b"))}},{path:"/user/profile",name:"Profile",component:function(){return n.e("profile").then(n.bind(null,"c66d"))}}],P=Object(c["a"])({history:Object(c["b"])("/"),routes:E}),C=P;Object(r["b"])(a).use(C).mount("#app")},"819f":function(e,t,n){}});
//# sourceMappingURL=app.9e1608ea.js.map