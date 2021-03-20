(this["webpackJsonpsentilojn-web"]=this["webpackJsonpsentilojn-web"]||[]).push([[0],{571:function(e,t,n){e.exports=n(704)},704:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(12),i=n.n(o),c=n(47),l=n(303),s=n.n(l),u=n(706),m=n(743),d=n(63),f=n(744),p=n(739),g=n(737),h=n(143),v=n(738),E=n(144),b=n(145),w=n(742),y=n(741),k=n(755),C=g.a[400],j=h.a[400],O=v.a[400],S=E.a[400],D=b.a[400],x=function(e,t){switch(t){case"temp":return C;case"humidity":return j;case"uv":return O;case"lum":return S;default:return D}},N=function(e){switch(e){case"temp":return"C";case"humidity":return"%";case"lum":return"L";case"uv":return"UV";default:return"N/A"}},W=function(e){var t=new Date(0);return t.setUTCSeconds(e/1e3),t.toLocaleTimeString()};function z(e){var t=e.sensor,n=r.a.useState(!1),a=Object(c.a)(n,2),o=a[0],i=a[1],l=function(){i(!o)};return r.a.createElement(p.a,{variant:"contained",key:t.type,style:{backgroundColor:x(t.data.slice().reverse()[0][1],t.type)},onClick:l},t.data.slice().reverse()[0][1]+N(t.type),r.a.createElement(k.a,{onClose:l,"aria-labelledby":"simple-dialog-title",open:o},r.a.createElement(y.a,{id:"simple-dialog-title"},t.name+" ("+t.type+")"),r.a.createElement(w.a,null,t.data.map((function(e,t){return r.a.createElement(u.a,{button:!0,onClick:l,key:t},r.a.createElement(m.a,{primary:W(e[0])}),r.a.createElement(m.a,{primary:e[1]}))})))))}var T=Object(f.a)((function(){return{root:{paddingTop:0,paddingBottom:0}}}));function A(e){var t=e.sensors,n=T();return r.a.createElement(u.a,{className:n.root},r.a.createElement(m.a,{primary:t[0].name.substring(0,35)+(t[0].name.length>35?"...":""),secondary:s()(t[0].data.slice().reverse()[0][0]).fromNow()}),r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement(d.a,{array:t,size:2},(function(e){return e.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(d.c,{collection:e,iteratee:function(e){return r.a.createElement(z,{sensor:e,key:e.type})}}))}))}))))}var U=Object(f.a)((function(e){return{root:{width:"100%",maxWidth:440,backgroundColor:e.palette.background.paper}}}));function B(e){var t=e.sensorData,n=U(),a=Object.keys(t.items).sort((function(e,n){return t.items[e][0].name.localeCompare(t.items[n][0].name)}));return r.a.createElement(w.a,{className:n.root},a.map((function(e){return r.a.createElement(A,{sensors:t.items[e],key:e})})))}var R=n(745),L=function(e,t){return e.reduce((function(e,n){var a=n[t];return e[a]=e[a]||[],e[a].push(n),e}),{})},M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date((new Date).getTime()-216e5),n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new Date;console.log("reloadData",t,n),fetch("https://3gzxlzr6d4.execute-api.us-east-1.amazonaws.com/dev/sensorValues?from=6").then((function(e){return e.json()})).then((function(t){e({sensorData:{items:L(t.series,"sensorid"),lastUpdated:new Date}})})).catch((function(e){console.error("ERROR",e)}))};function I(){var e=r.a.useState({sensorData:{items:[],lastUpdated:new Date}}),t=Object(c.a)(e,2),n=t[0],a=t[1];return r.a.useEffect((function(){M(a)}),[]),r.a.createElement(R.a,{maxWidth:"sm"},n.sensorData&&r.a.createElement(B,{reloadData:M,sensorData:n.sensorData}))}var P=n(747),q=n(748),J=n(749),G=n(750),V=n(562),Z=n.n(V),H=n(751),K=n(754),Y=n(563),F=n(746),Q=n(560),X=n.n(Q),$=n(561),_=n.n($);function ee(e){var t=e.eventsList,n=e.handleClickEvents,a=r.a.useState(!1),o=Object(c.a)(a,2),i=o[0],l=o[1],s=function(e){var t=new Date(0);return t.setUTCSeconds(e/1e3),t.toLocaleTimeString()};return r.a.createElement("div",null,r.a.createElement(u.a,{button:!0,onClick:function(){l(!i)}},r.a.createElement(m.a,{primary:t[0].name,secondary:"".concat(t.length," entries")}),r.a.createElement(m.a,{primary:s(Object(Y.a)(t).reverse()[0].timestamp)}),i?r.a.createElement(X.a,null):r.a.createElement(_.a,null)),r.a.createElement(F.a,{in:i,timeout:"auto",unmountOnExit:!0},r.a.createElement(d.c,{collection:t,iteratee:function(e){return r.a.createElement(u.a,{button:!0,onClick:n,key:"".concat(e.sensorId,"-").concat(e.timestamp)},r.a.createElement(m.a,{inset:!0,secondary:s(e.timestamp),primary:e.message}))}})))}var te=Object(f.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),ne=function(e){console.log("reloadData"),fetch("https://aoq53tdls8.execute-api.us-east-1.amazonaws.com/dev/sensorNotificationEvent").then((function(e){return e.json()})).then((function(t){e(t)})).catch((function(e){console.error("ERROR",e)}))};var ae=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function re(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var oe=function(e){for(var t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),a=window.atob(n),r=new Uint8Array(a.length),o=0;o<a.length;++o)r[o]=a.charCodeAt(o);return r}("BCBiWe3ds-oc2bXKvwDCZYUByuwOOjldeQJNAUTzWfwHH-ZGoIBEf7j70tpbCSq8wWlZlM7iwz9Dr506Iwsq4Yg");i.a.render(r.a.createElement((function(){var e=te(),t=r.a.useState(null),n=Object(c.a)(t,2),a=n[0],o=n[1],i=Boolean(a),l=function(){o(null),console.log("handleClose")},s=r.a.useState(!1),u=Object(c.a)(s,2),m=u[0],f=u[1],p=r.a.useState([]),g=Object(c.a)(p,2),h=g[0],v=g[1],E=function(){f(!1),l()};return r.a.useEffect((function(){ne(v)}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(P.a,null),r.a.createElement("div",{className:e.root},r.a.createElement(q.a,{position:"fixed"},r.a.createElement(J.a,null,r.a.createElement(G.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){o(e.currentTarget),console.log("handleMenu")}},r.a.createElement(Z.a,null)),r.a.createElement(K.a,{id:"menu-appbar",anchorEl:a,anchorOrigin:{vertical:"top",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:i,onClose:l},r.a.createElement("div",null,r.a.createElement(H.a,{onClick:function(){f(!0)}},"Notification Events"),r.a.createElement(k.a,{onClose:E,"aria-labelledby":"simple-dialog-title",open:m},r.a.createElement(y.a,{id:"simple-dialog-title"},"Notification Events"),r.a.createElement(w.a,null,r.a.createElement(d.b,{collection:h,iteratee:function(e){return e.sensorId}},(function(e){return r.a.createElement(d.c,{collection:Object.keys(e),iteratee:function(t){return r.a.createElement(ee,{eventsList:e[t],handleClickEvents:E,key:t})}})})))))))),r.a.createElement(J.a,null)),r.a.createElement(I,null))}),null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/sentilojn/test",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/sentilojn/test","/").concat("service-worker.js");ae?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):re(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):re(t,e)}))}}(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.pushManager?e.pushManager.getSubscription().then((function(t){null===t?(console.log("No subscription detected, make a request."),e.pushManager.subscribe({applicationServerKey:oe,userVisibleOnly:!0}).then((function(e){var t;console.log("New subscription added."),t=e,fetch("".concat("https://3gzxlzr6d4.execute-api.us-east-1.amazonaws.com","/dev/subscription"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"},mode:"no-cors"})})).catch((function(e){"granted"!==Notification.permission?console.log("Permission was not granted."):console.error("An error ocurred during the subscription process.",e)}))):console.log("Existed subscription detected.")})):console.log("Push manager unavailable.")})).catch((function(e){console.error("An error ocurred during Service Worker registration.",e)}))}},[[571,1,2]]]);
//# sourceMappingURL=main.7f74d5aa.chunk.js.map