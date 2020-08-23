(this["webpackJsonpemoji-communitator"]=this["webpackJsonpemoji-communitator"]||[]).push([[0],{12:function(e,n,t){},13:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),i=t(5),r=t.n(i),c=(t(12),t(2)),s=t(6);function l(e){var n=e.emoji,t=Object(s.a)(e,["emoji"]);return o.a.createElement("img",Object.assign({},t,{src:n.src,alt:"",loading:"lazy"}))}function m(e){var n=e.emoji,t=e.onClick;return o.a.createElement("div",{className:"pb-100% relative"},o.a.createElement("button",{className:"flex flex-col items-center shadow rounded p-2 bg-white absolute top-0 w-full h-full focus:outline-none hover:bg-orange-300 focus:bg-orange-300 transition duration-300",onClick:function(){t(n)}},o.a.createElement(l,{emoji:n,className:"pb-8 h-full"}),o.a.createElement("span",{className:"font-semibold text-gray-600 text-sm absolute bottom-2 truncate max-w-full px-2"},n.id)))}function u(e){var n=e.emoji,t=e.onClose;return o.a.createElement("div",{className:"fixed top-0 left-0 w-screen h-screen bg-white z-50 flex items-center justify-center",onClick:t},o.a.createElement(l,{emoji:n,className:"w-96 h-96 max-h-vmin max-w-vmin object-contain p-8"}))}function d(e){var n=e.emojies,t=Object(a.useState)(null),i=Object(c.a)(t,2),r=i[0],s=i[1],l=Object(a.useCallback)((function(){s(null)}),[s]);return Object(a.useEffect)((function(){r?(document.body.style.overflow="hidden",window.history.pushState(null,"Emoji fullscreen open",window.location.pathname)):document.body.style.overflow="auto";var e=function(e){r?s(null):window.history.back()};return window.addEventListener("popstate",e),function(){window.removeEventListener("popstate",e)}}),[r]),o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 md:gap-4"},n.map((function(e){return o.a.createElement(m,{key:e.id,emoji:e,onClick:s})}))),r&&o.a.createElement(u,{emoji:r,onClose:l}))}var f=t(16),g=t(17),p=t(15),h=function(e){var n=Object(f.a)(new Date);localStorage.setItem(e,n)};function w(e,n){var t=function(e){return localStorage.getItem(e)}(e);if(t){var a=Object(g.a)(t),o=Object(p.a)(a,new Date);return isNaN(o)||o>n}return!0}var v=function(){var e=Object(a.useState)(),n=Object(c.a)(e,2),t=n[0],o=n[1],i=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30,t=Object(a.useState)(w(e,n)),o=Object(c.a)(t,2),i=o[0],r=o[1],s=function(){r(!1),h(e)};return[i,s]}("webInstallPromptedAt"),r=Object(c.a)(i,2),s=r[0],l=r[1];Object(a.useEffect)((function(){var e=function(e){console.log(e),e.preventDefault(),s&&o(e)};return window.addEventListener("beforeinstallprompt",e),function(){return window.removeEventListener("beforeinstallprompt",e)}}),[s]);return[t,function(){l(),o(void 0)},function(){t&&(t.prompt(),t.userChoice.then((function(e){"accepted"!==e.outcome&&l(),o(void 0)})))}]};function b(){var e=v(),n=Object(c.a)(e,3),t=n[0],a=n[1],i=n[2];return t?o.a.createElement("div",{className:"fixed bottom-4 right-4"},o.a.createElement("div",{className:"flex items-center rounded border-1 border-gray-700 bg-white p-2 gap-1 shadow ml-4"},o.a.createElement("span",{className:"inline-block mx-2 font-semibold"},"Anwendung lokal installieren?"),o.a.createElement("button",{className:"focus:outline-none rounded text-green-700 hover:bg-gray-300 p-1 transition duration-200",onClick:i},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o.a.createElement("polyline",{points:"20 6 9 17 4 12"}))),o.a.createElement("button",{onClick:a,className:"focus:outline-none rounded text-red-700 hover:bg-gray-300 p-1 transition duration-200"},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o.a.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),o.a.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))))):null}function y(){return o.a.createElement("div",{className:"flex justify-between items-center max-w-screen-lg mx-auto px-4 pb-2"},o.a.createElement("span",{className:"opacity-50"},"Created by Johann Lochbaum"),o.a.createElement("div",{className:"flex gap-2"},o.a.createElement("a",{className:"w-8 h-8 block p-1 opacity-50 hover:opacity-75 transition duration-200",href:"https://www.linkedin.com/in/johann-lochbaum/"},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-full h-full",viewBox:"0 0 24 24",fill:"#000"},o.a.createElement("path",{d:"M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z"}))),o.a.createElement("a",{className:"w-8 h-8 block p-1 opacity-50 hover:opacity-75 transition duration-200",href:"https://github.com/Johannitor/emoji-communicator"},o.a.createElement("svg",{className:"w-full h-full",viewBox:"0 0 24 24",fill:"#000",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})))))}var E="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/237/",j=[{id:"smily_smile",src:E+"smiling-face-with-smiling-eyes_1f60a.png"},{id:"smily_frown",src:E+"white-frowning-face_2639.png"},{id:"smily_angry",src:E+"pouting-face_1f621.png"},{id:"smily_shocked",src:E+"face-screaming-in-fear_1f631.png"},{id:"smily_hearts",src:E+"smiling-face-with-heart-shaped-eyes_1f60d.png"},{id:"smily_raised",src:E+"face-with-one-eyebrow-raised_1f928.png"},{id:"smily_shush",src:E+"face-with-finger-covering-closed-lips_1f92b.png"},{id:"smily_sleep",src:E+"sleeping-face_1f634.png"},{id:"smily_party",src:E+"face-with-party-horn-and-party-hat_1f973.png"},{id:"waving",src:E+"waving-hand-sign_1f44b.png"},{id:"thumbs_up",src:E+"thumbs-up-sign_1f44d.png"},{id:"thumbs_down",src:E+"thumbs-down-sign_1f44e.png"},{id:"ok",src:E+"ok-hand-sign_1f44c.png"},{id:"fingers_crossed",src:E+"hand-with-index-and-middle-fingers-crossed_1f91e.png"},{id:"raised_hand_man",src:E+"man-raising-hand-type-1-2_1f64b-1f3fb-200d-2642-fe0f.png"},{id:"raised_hand_woman",src:E+"woman-raising-hand-type-1-2_1f64b-1f3fb-200d-2640-fe0f.png"},{id:"cake",src:E+"shortcake_1f370.png"},{id:"lit",src:E+"fire_1f525.png"},{id:"hourglass",src:E+"hourglass_231b.png"},{id:"party",src:E+"party-popper_1f389.png"},{id:"magic",src:E+"crystal-ball_1f52e.png"},{id:"telephone",src:E+"telephone-receiver_1f4de.png"},{id:"microphone",src:E+"microphone_1f3a4.png"},{id:"walking_woman",src:E+"woman-walking-type-1-2_1f6b6-1f3fb-200d-2640-fe0f.png"},{id:"walking_man",src:E+"man-walking-type-1-2_1f6b6-1f3fb-200d-2642-fe0f.png"},{id:"joker",src:E+"playing-card-black-joker_1f0cf.png"},{id:"wtf",src:E+"exclamation-question-mark_2049.png"}];function k(){var e=Object(a.useState)(),n=Object(c.a)(e,2),t=n[0],i=n[1];return Object(a.useEffect)((function(){i(function(e){var n=e.length;return e[Math.floor(Math.random()*n)]}(j))}),[]),o.a.createElement("div",{className:"h-16 w-full relative bg-white shadow"},o.a.createElement("div",{className:"max-w-screen-lg mx-auto items-center h-full flex px-4"},t&&o.a.createElement(l,{emoji:t,className:"h-10 mr-4"}),o.a.createElement("span",{className:"text-lg text-gray-900 font-bold tracking"},"Emoji Communicator")))}var _=function(){return o.a.createElement("div",null,o.a.createElement(k,null),o.a.createElement("div",{className:"max-w-screen-lg mx-auto p-4"},o.a.createElement(d,{emojies:j})),o.a.createElement(y,null),o.a.createElement(b,null))},x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function N(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(_,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/emoji-communicator",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/emoji-communicator","/service-worker.js");x?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):N(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):N(n,e)}))}}()},7:function(e,n,t){e.exports=t(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.d3f0f358.chunk.js.map