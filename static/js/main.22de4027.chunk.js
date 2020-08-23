(this["webpackJsonpemoji-communitator"]=this["webpackJsonpemoji-communitator"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),o=n(6),i=n.n(o),s=(n(13),n(2)),l=n(7);!function(e){e[e.APPLE=0]="APPLE",e[e.WHATSAPP=1]="WHATSAPP",e[e.MICROSOFT=2]="MICROSOFT",e[e.TWITTER=3]="TWITTER",e[e.GOOGLE=4]="GOOGLE",e[e.OPENMOJI=5]="OPENMOJI"}(a||(a={}));var f=Object(r.createContext)({});function u(e){var t=e.children,n=function(){var e=Object(r.useState)(function(){var e=parseInt(localStorage.getItem("emoji-variant")||"",10);return e&&!isNaN(e)&&a[e]?e:0}()),t=Object(s.a)(e,2),n=t[0],c=t[1];return{variant:n,setVariant:function(e){localStorage.setItem("emoji-variant",String(e)),c(e)}}}();return c.a.createElement(f.Provider,{value:n},t)}var m=function(){return Object(r.useContext)(f)};var d=m;function g(e){var t=e.emoji,n=Object(l.a)(e,["emoji"]),a=d().variant;return c.a.createElement("img",Object.assign({},n,{src:t.altSrc&&t.altSrc[a]||t.src,alt:"",loading:"lazy"}))}function p(e){var t=e.emoji,n=e.onClick;return c.a.createElement("div",{className:"pb-100% relative"},c.a.createElement("button",{className:"flex flex-col items-center shadow rounded p-2 bg-white absolute top-0 w-full h-full focus:outline-none hover:bg-orange-300 transition duration-300",onClick:function(){n(t)}},c.a.createElement(g,{emoji:t,className:"pb-8 h-full"}),c.a.createElement("span",{className:"font-semibold text-gray-600 text-sm absolute bottom-2 truncate max-w-full px-2"},t.id)))}function h(e){var t=e.emoji,n=e.onClose;return c.a.createElement("div",{className:"fixed top-0 left-0 w-screen h-screen bg-white z-50 flex items-center justify-center",onClick:n},c.a.createElement(g,{emoji:t,className:"w-96 h-96 max-h-vmin max-w-vmin object-contain p-8"}))}function b(e){var t=e.emojies,n=Object(r.useState)(null),a=Object(s.a)(n,2),o=a[0],i=a[1],l=Object(r.useCallback)((function(){i(null)}),[i]);return Object(r.useEffect)((function(){o?(document.body.style.overflow="hidden",window.history.pushState(null,"Emoji fullscreen open",window.location.pathname)):document.body.style.overflow="auto";var e=function(e){o?i(null):window.history.back()};return window.addEventListener("popstate",e),function(){window.removeEventListener("popstate",e)}}),[o]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 md:gap-4"},t.map((function(e){return c.a.createElement(p,{key:e.id,emoji:e,onClick:i})}))),o&&c.a.createElement(h,{emoji:o,onClose:l}))}var O=n(17),w=n(18),v=n(16),E=function(e){var t=Object(O.a)(new Date);localStorage.setItem(e,t)};function j(e,t){var n=function(e){return localStorage.getItem(e)}(e);if(n){var a=Object(w.a)(n),r=Object(v.a)(a,new Date);return isNaN(r)||r>t}return!0}var _=function(){var e=Object(r.useState)(),t=Object(s.a)(e,2),n=t[0],a=t[1],c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30,n=Object(r.useState)(j(e,t)),a=Object(s.a)(n,2),c=a[0],o=a[1],i=function(){o(!1),E(e)};return[c,i]}("webInstallPromptedAt"),o=Object(s.a)(c,2),i=o[0],l=o[1];Object(r.useEffect)((function(){var e=function(e){console.log(e),e.preventDefault(),i&&a(e)};return window.addEventListener("beforeinstallprompt",e),function(){return window.removeEventListener("beforeinstallprompt",e)}}),[i]);return[n,function(){l(),a(void 0)},function(){n&&(n.prompt(),n.userChoice.then((function(e){"accepted"!==e.outcome&&l(),a(void 0)})))}]};function y(){var e=_(),t=Object(s.a)(e,3),n=t[0],a=t[1],r=t[2];return n?c.a.createElement("div",{className:"fixed bottom-4 right-4"},c.a.createElement("div",{className:"flex items-center rounded border-1 border-gray-700 bg-white p-2 gap-1 shadow ml-4"},c.a.createElement("span",{className:"inline-block mx-2 font-semibold"},"Anwendung lokal installieren?"),c.a.createElement("button",{className:"focus:outline-none rounded text-green-700 hover:bg-gray-300 p-1 transition duration-200",onClick:r},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c.a.createElement("polyline",{points:"20 6 9 17 4 12"}))),c.a.createElement("button",{onClick:a,className:"focus:outline-none rounded text-red-700 hover:bg-gray-300 p-1 transition duration-200"},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c.a.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),c.a.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))))):null}function T(){return c.a.createElement("div",{className:"flex justify-between items-center max-w-screen-lg mx-auto px-4 pb-2"},c.a.createElement("span",{className:"opacity-50"},"Created by Johann Lochbaum"),c.a.createElement("div",{className:"flex gap-2"},c.a.createElement("a",{className:"w-8 h-8 block p-1 opacity-50 hover:opacity-75 transition duration-200",href:"https://www.linkedin.com/in/johann-lochbaum/"},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-full h-full",viewBox:"0 0 24 24",fill:"#000"},c.a.createElement("path",{d:"M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z"}))),c.a.createElement("a",{className:"w-8 h-8 block p-1 opacity-50 hover:opacity-75 transition duration-200",href:"https://github.com/Johannitor/emoji-communicator"},c.a.createElement("svg",{className:"w-full h-full",viewBox:"0 0 24 24",fill:"#000",xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})))))}var k,N=n(1),x=(k={},Object(N.a)(k,a.APPLE,"apple/237/"),Object(N.a)(k,a.WHATSAPP,"whatsapp/238/"),Object(N.a)(k,a.MICROSOFT,"microsoft/209/"),Object(N.a)(k,a.TWITTER,"twitter/259/"),Object(N.a)(k,a.GOOGLE,"google/241/"),Object(N.a)(k,a.OPENMOJI,"openmoji/252/"),k),I="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/",S=function(e){var t,n,r,c,o,i,s,l,f,u,m,d,g,p=function(t){return I+x[e]+t};return[{id:"smiley_smile",src:p("smiling-face-with-smiling-eyes_1f60a.png")},{id:"smiley_frown",src:p("slightly-frowning-face_1f641.png")},{id:"smiley_angry",src:p("pouting-face_1f621.png")},{id:"smiley_shocked",src:p("face-screaming-in-fear_1f631.png")},{id:"smiley_hearts",src:p("smiling-face-with-heart-shaped-eyes_1f60d.png"),altSrc:(t={},Object(N.a)(t,a.GOOGLE,p("smiling-face-with-heart-eyes_1f60d.png")),Object(N.a)(t,a.TWITTER,p("smiling-face-with-heart-eyes_1f60d.png")),Object(N.a)(t,a.OPENMOJI,p("smiling-face-with-heart-eyes_1f60d.png")),t)},{id:"smiley_raised",src:p("face-with-one-eyebrow-raised_1f928.png"),altSrc:(n={},Object(N.a)(n,a.GOOGLE,p("face-with-raised-eyebrow_1f928.png")),Object(N.a)(n,a.TWITTER,p("face-with-raised-eyebrow_1f928.png")),Object(N.a)(n,a.OPENMOJI,p("face-with-raised-eyebrow_1f928.png")),n)},{id:"smiley_shush",src:p("face-with-finger-covering-closed-lips_1f92b.png"),altSrc:(r={},Object(N.a)(r,a.GOOGLE,p("shushing-face_1f92b.png")),Object(N.a)(r,a.TWITTER,p("shushing-face_1f92b.png")),Object(N.a)(r,a.OPENMOJI,p("shushing-face_1f92b.png")),r)},{id:"smiley_sleep",src:p("sleeping-face_1f634.png")},{id:"smiley_party",src:p("face-with-party-horn-and-party-hat_1f973.png"),altSrc:(c={},Object(N.a)(c,a.GOOGLE,p("partying-face_1f973.png")),Object(N.a)(c,a.TWITTER,p("partying-face_1f973.png")),Object(N.a)(c,a.OPENMOJI,p("partying-face_1f973.png")),c)},{id:"waving",src:p("waving-hand-sign_1f44b.png"),altSrc:(o={},Object(N.a)(o,a.GOOGLE,p("waving-hand_1f44b.png")),Object(N.a)(o,a.TWITTER,p("waving-hand_1f44b.png")),Object(N.a)(o,a.OPENMOJI,p("waving-hand_1f44b.png")),o)},{id:"thumbs_up",src:p("thumbs-up-sign_1f44d.png"),altSrc:(i={},Object(N.a)(i,a.GOOGLE,p("thumbs-up_1f44d.png")),Object(N.a)(i,a.TWITTER,p("thumbs-up_1f44d.png")),Object(N.a)(i,a.OPENMOJI,p("thumbs-up_1f44d.png")),i)},{id:"thumbs_down",src:p("thumbs-down-sign_1f44e.png"),altSrc:(s={},Object(N.a)(s,a.GOOGLE,p("thumbs-down_1f44e.png")),Object(N.a)(s,a.TWITTER,p("thumbs-down_1f44e.png")),Object(N.a)(s,a.OPENMOJI,p("thumbs-down_1f44e.png")),s)},{id:"ok",src:p("ok-hand-sign_1f44c.png"),altSrc:(l={},Object(N.a)(l,a.GOOGLE,p("ok-hand_1f44c.png")),Object(N.a)(l,a.TWITTER,p("ok-hand_1f44c.png")),Object(N.a)(l,a.OPENMOJI,p("ok-hand_1f44c.png")),l)},{id:"fingers_crossed",src:p("hand-with-index-and-middle-fingers-crossed_1f91e.png"),altSrc:(f={},Object(N.a)(f,a.GOOGLE,p("crossed-fingers_1f91e.png")),Object(N.a)(f,a.TWITTER,p("crossed-fingers_1f91e.png")),Object(N.a)(f,a.OPENMOJI,p("crossed-fingers_1f91e.png")),f)},{id:"raised_hand_man",src:p("man-raising-hand_1f64b-200d-2642-fe0f.png")},{id:"raised_hand_woman",src:p("woman-raising-hand_1f64b-200d-2640-fe0f.png")},{id:"cake",src:p("shortcake_1f370.png")},{id:"on_fire",src:p("fire_1f525.png")},{id:"hourglass",src:p("hourglass-with-flowing-sand_23f3.png"),altSrc:(u={},Object(N.a)(u,a.GOOGLE,p("hourglass-not-done_23f3.png")),Object(N.a)(u,a.TWITTER,p("hourglass-not-done_23f3.png")),Object(N.a)(u,a.OPENMOJI,p("hourglass-not-done_23f3.png")),u)},{id:"party",src:p("party-popper_1f389.png")},{id:"magic",src:p("crystal-ball_1f52e.png")},{id:"magic_wand",src:I+"emojipedia/240/magic-wand_1fa84.png",altSrc:(m={},Object(N.a)(m,a.TWITTER,p("magic-wand_1fa84.png")),Object(N.a)(m,a.OPENMOJI,p("magic-wand_1fa84.png")),m)},{id:"telephone",src:p("telephone-receiver_1f4de.png")},{id:"microphone",src:p("microphone_1f3a4.png")},{id:"walking_woman",src:p("woman-walking_1f6b6-200d-2640-fe0f.png")},{id:"walking_man",src:p("man-walking_1f6b6-200d-2642-fe0f.png")},{id:"joker",src:p("playing-card-black-joker_1f0cf.png"),altSrc:(d={},Object(N.a)(d,a.GOOGLE,p("joker_1f0cf.png")),Object(N.a)(d,a.TWITTER,p("joker_1f0cf.png")),Object(N.a)(d,a.OPENMOJI,p("joker_1f0cf.png")),d)},{id:"wtf",src:p("exclamation-question-mark_2049.png")},{id:"star",src:p("white-medium-star_2b50.png"),altSrc:(g={},Object(N.a)(g,a.GOOGLE,p("star_2b50.png")),Object(N.a)(g,a.TWITTER,p("star_2b50.png")),Object(N.a)(g,a.OPENMOJI,p("star_2b50.png")),g)},{id:"cant_hear",src:p("hear-no-evil-monkey_1f649.png")}]};var P=[{label:"Apple",value:a.APPLE},{label:"Microsoft",value:a.MICROSOFT},{label:"WhatsApp",value:a.WHATSAPP},{label:"Google",value:a.GOOGLE},{label:"Twitter",value:a.TWITTER},{label:"Openmoji",value:a.OPENMOJI}];function G(){var e=d(),t=e.variant,n=e.setVariant;return c.a.createElement("select",{className:"p-2 border border-gray-500 rounded w-32",value:t,onChange:function(e){n(Number(e.target.value))}},P.map((function(e){return c.a.createElement("option",{key:e.value,value:e.value},e.label)})))}function L(){var e=Object(r.useState)(0),t=Object(s.a)(e,2),n=t[0],o=t[1],i=Object(r.useState)(),l=Object(s.a)(i,2),f=l[0],u=l[1],m=d().variant;return Object(r.useEffect)((function(){o(function(e,t,n){var a=e+Math.random()*(t-e);return n?a:Math.floor(a)}(0,S(a.APPLE).length))}),[]),Object(r.useEffect)((function(){u(S(m)[n])}),[m,n]),c.a.createElement("div",{className:"h-16 w-full relative bg-white shadow"},c.a.createElement("div",{className:"max-w-screen-lg mx-auto justify-between items-center h-full flex px-4"},c.a.createElement("div",{className:"flex items-center"},f&&c.a.createElement(g,{emoji:f,className:"h-10 mr-4"}),c.a.createElement("span",{className:"text-lg text-gray-900 font-bold tracking"},"Emoji Communicator")),c.a.createElement(G,null)))}var W=function(){var e=m().variant;return c.a.createElement("div",null,c.a.createElement(L,null),c.a.createElement("div",{className:"max-w-screen-lg mx-auto p-4"},c.a.createElement(b,{emojies:S(e)})),c.a.createElement(T,null),c.a.createElement(y,null))},M=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(u,null,c.a.createElement(W,null))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/emoji-communicator",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/emoji-communicator","/service-worker.js");M?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):C(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):C(t,e)}))}}()},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.22de4027.chunk.js.map