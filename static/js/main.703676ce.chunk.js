(this["webpackJsonpemoji-communitator"]=this["webpackJsonpemoji-communitator"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),i=n.n(o),c=(n(13),n(1)),l=n(7);function s(e){var t=e.emoji,n=Object(l.a)(e,["emoji"]);return r.a.createElement("img",Object.assign({},n,{src:t.src,alt:"",loading:"lazy"}))}function u(e){var t=e.emoji,n=e.onClick;return r.a.createElement("div",{className:"pb-100% relative"},r.a.createElement("button",{className:"flex flex-col items-center shadow rounded p-2 bg-white absolute top-0 w-full h-full focus:outline-none hover:bg-orange-300 focus:bg-orange-300 transition duration-300",onClick:function(){n(t)}},r.a.createElement(s,{emoji:t,className:"pb-8 h-full"}),r.a.createElement("span",{className:"font-semibold text-gray-600 text-sm absolute bottom-2 truncate max-w-full px-2"},t.id)))}function m(e){var t=e.emoji,n=e.onClose;return r.a.createElement("div",{className:"fixed top-0 left-0 w-screen h-screen bg-white z-50 flex items-center justify-center",onClick:n},r.a.createElement(s,{emoji:t,className:"w-96 h-96 max-h-vmin max-w-vmin object-contain p-8"}))}function f(e){var t=e.emojies,n=Object(a.useState)(null),o=Object(c.a)(n,2),i=o[0],l=o[1],s=Object(a.useCallback)((function(){l(null)}),[l]);return Object(a.useEffect)((function(){i?(document.body.style.overflow="hidden",window.history.pushState(null,"Emoji fullscreen open",window.location.pathname)):document.body.style.overflow="auto";var e=function(e){i?l(null):window.history.back()};return window.addEventListener("popstate",e),function(){window.removeEventListener("popstate",e)}}),[i]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 md:gap-4"},t.map((function(e){return r.a.createElement(u,{key:e.id,emoji:e,onClick:l})}))),i&&r.a.createElement(m,{emoji:i,onClose:s}))}var d=n(17),g=n(18),p=n(16),h=function(e){var t=Object(d.a)(new Date);localStorage.setItem(e,t)};function v(e,t){var n=function(e){return localStorage.getItem(e)}(e);if(n){var a=Object(g.a)(n),r=Object(p.a)(a,new Date);return isNaN(r)||r>t}return!0}var w,b=function(){var e=Object(a.useState)(),t=Object(c.a)(e,2),n=t[0],r=t[1],o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30,n=Object(a.useState)(v(e,t)),r=Object(c.a)(n,2),o=r[0],i=r[1],l=function(){i(!1),h(e)};return[o,l]}("webInstallPromptedAt"),i=Object(c.a)(o,2),l=i[0],s=i[1];Object(a.useEffect)((function(){var e=function(e){console.log(e),e.preventDefault(),l&&r(e)};return window.addEventListener("beforeinstallprompt",e),function(){return window.removeEventListener("beforeinstallprompt",e)}}),[l]);return[n,function(){s(),r(void 0)},function(){n&&(n.prompt(),n.userChoice.then((function(e){"accepted"!==e.outcome&&s(),r(void 0)})))}]};function E(){var e=b(),t=Object(c.a)(e,3),n=t[0],a=t[1],o=t[2];return n?r.a.createElement("div",{className:"fixed bottom-4 right-4"},r.a.createElement("div",{className:"flex items-center rounded border-1 border-gray-700 bg-white p-2 gap-1 shadow ml-4"},r.a.createElement("span",{className:"inline-block mx-2 font-semibold"},"Anwendung lokal installieren?"),r.a.createElement("button",{className:"focus:outline-none rounded text-green-700 hover:bg-gray-300 p-1 transition duration-200",onClick:o},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r.a.createElement("polyline",{points:"20 6 9 17 4 12"}))),r.a.createElement("button",{onClick:a,className:"focus:outline-none rounded text-red-700 hover:bg-gray-300 p-1 transition duration-200"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},r.a.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),r.a.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))))):null}function j(){return r.a.createElement("div",{className:"flex justify-between items-center max-w-screen-lg mx-auto px-4 pb-2"},r.a.createElement("span",{className:"opacity-50"},"Created by Johann Lochbaum"),r.a.createElement("div",{className:"flex gap-2"},r.a.createElement("a",{className:"w-8 h-8 block p-1 opacity-50 hover:opacity-75 transition duration-200",href:"https://www.linkedin.com/in/johann-lochbaum/"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-full h-full",viewBox:"0 0 24 24",fill:"#000"},r.a.createElement("path",{d:"M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z"}))),r.a.createElement("a",{className:"w-8 h-8 block p-1 opacity-50 hover:opacity-75 transition duration-200",href:"https://github.com/Johannitor/emoji-communicator"},r.a.createElement("svg",{className:"w-full h-full",viewBox:"0 0 24 24",fill:"#000",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})))))}!function(e){e[e.APPLE=0]="APPLE",e[e.WHATSAPP=1]="WHATSAPP",e[e.MICROSOFT=2]="MICROSOFT"}(w||(w={}));var y=Object(a.createContext)({});function k(e){var t=e.children,n=function(){var e=Object(a.useState)(function(){var e=parseInt(localStorage.getItem("emoji-variant")||"",10);return e&&!isNaN(e)&&w[e]?e:0}()),t=Object(c.a)(e,2),n=t[0],r=t[1];return{variant:n,setVariant:function(e){localStorage.setItem("emoji-variant",String(e)),r(e)}}}();return r.a.createElement(y.Provider,{value:n},t)}var x=function(){return Object(a.useContext)(y)};var _,O=x,N=n(4),C=(_={},Object(N.a)(_,w.APPLE,"apple/237/"),Object(N.a)(_,w.WHATSAPP,"whatsapp/238/"),Object(N.a)(_,w.MICROSOFT,"microsoft/209/"),_),S=function(e){var t=function(t){return"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/"+C[e]+t};return[{id:"smiley_smile",src:t("smiling-face-with-smiling-eyes_1f60a.png")},{id:"smiley_frown",src:t("white-frowning-face_2639.png")},{id:"smiley_angry",src:t("pouting-face_1f621.png")},{id:"smiley_shocked",src:t("face-screaming-in-fear_1f631.png")},{id:"smiley_hearts",src:t("smiling-face-with-heart-shaped-eyes_1f60d.png")},{id:"smiley_raised",src:t("face-with-one-eyebrow-raised_1f928.png")},{id:"smiley_shush",src:t("face-with-finger-covering-closed-lips_1f92b.png")},{id:"smiley_sleep",src:t("sleeping-face_1f634.png")},{id:"smiley_party",src:t("face-with-party-horn-and-party-hat_1f973.png")},{id:"waving",src:t("waving-hand-sign_1f44b.png")},{id:"thumbs_up",src:t("thumbs-up-sign_1f44d.png")},{id:"thumbs_down",src:t("thumbs-down-sign_1f44e.png")},{id:"ok",src:t("ok-hand-sign_1f44c.png")},{id:"fingers_crossed",src:t("hand-with-index-and-middle-fingers-crossed_1f91e.png")},{id:"raised_hand_man",src:t("man-raising-hand-type-1-2_1f64b-1f3fb-200d-2642-fe0f.png")},{id:"raised_hand_woman",src:t("woman-raising-hand-type-1-2_1f64b-1f3fb-200d-2640-fe0f.png")},{id:"cake",src:t("shortcake_1f370.png")},{id:"on_fire",src:t("fire_1f525.png")},{id:"hourglass",src:t("hourglass_231b.png")},{id:"party",src:t("party-popper_1f389.png")},{id:"magic",src:t("crystal-ball_1f52e.png")},{id:"telephone",src:t("telephone-receiver_1f4de.png")},{id:"microphone",src:t("microphone_1f3a4.png")},{id:"walking_woman",src:t("woman-walking-type-1-2_1f6b6-1f3fb-200d-2640-fe0f.png")},{id:"walking_man",src:t("man-walking-type-1-2_1f6b6-1f3fb-200d-2642-fe0f.png")},{id:"joker",src:t("playing-card-black-joker_1f0cf.png")},{id:"wtf",src:t("exclamation-question-mark_2049.png")}]};var A=[{label:"Apple",value:w.APPLE},{label:"Microsoft",value:w.MICROSOFT},{label:"WhatsApp",value:w.WHATSAPP}];function P(){var e=O(),t=e.variant,n=e.setVariant;return r.a.createElement("select",{className:"p-2 border border-gray-500 rounded w-32",value:t,onChange:function(e){n(Number(e.target.value))}},A.map((function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.label)})))}function L(){var e=Object(a.useState)(0),t=Object(c.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)(),l=Object(c.a)(i,2),u=l[0],m=l[1],f=O().variant;return Object(a.useEffect)((function(){o(function(e,t,n){var a=e+Math.random()*(t-e);return n?a:Math.floor(a)}(0,S(w.APPLE).length))}),[]),Object(a.useEffect)((function(){m(S(f)[n])}),[f,n]),r.a.createElement("div",{className:"h-16 w-full relative bg-white shadow"},r.a.createElement("div",{className:"max-w-screen-lg mx-auto justify-between items-center h-full flex px-4"},r.a.createElement("div",{className:"flex items-center"},u&&r.a.createElement(s,{emoji:u,className:"h-10 mr-4"}),r.a.createElement("span",{className:"text-lg text-gray-900 font-bold tracking"},"Emoji Communicator")),r.a.createElement(P,null)))}var W=function(){var e=x().variant;return r.a.createElement("div",null,r.a.createElement(L,null),r.a.createElement("div",{className:"max-w-screen-lg mx-auto p-4"},r.a.createElement(f,{emojies:S(e)})),r.a.createElement(j,null),r.a.createElement(E,null))},M=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null,r.a.createElement(W,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/emoji-communicator",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/emoji-communicator","/service-worker.js");M?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):I(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):I(t,e)}))}}()},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.703676ce.chunk.js.map