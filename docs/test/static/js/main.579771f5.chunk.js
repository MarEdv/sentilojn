(this["webpackJsonpsentilojn-web"]=this["webpackJsonpsentilojn-web"]||[]).push([[0],{610:function(e,t,n){e.exports=n(743)},743:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(16),i=n.n(o),c=n(30),l=n(171),s=n.n(l),u=n(747),m=n(799),d=n(23),f=n(800),p=n(791),E=n(789),g=n(181),v=n(790),h=n(182),b=n(183),y=n(797),w=n(795),k=n(816),S=n(817),C=n(798),O=n(796),j=n(812),x=E.a[400],z=g.a[400],N=v.a[400],D=h.a[400],I=b.a[400],W=function(e,t){switch(t){case"temp":return x;case"humidity":return z;case"uv":return N;case"lum":return D;default:return I}},R=function(e){switch(e){case"temp":return"C";case"humidity":return"%";case"lum":return"L";case"uv":return"UV";default:return"N/A"}},U=function(e){var t=new Date(0);return t.setUTCSeconds(e/1e3),t.toLocaleTimeString()};function T(e){var t=e.sensor,n=r.a.useState(!1),a=Object(c.a)(n,2),o=a[0],i=a[1],l=function(){i(!o)},s=r.a.useState("15minutes"),d=Object(c.a)(s,2),f=d[0],E=d[1];return r.a.createElement(p.a,{variant:"contained",key:t.type,style:{backgroundColor:W(t.data.slice().reverse()[0][1],t.type),maxWidth:64},onClick:l},t.data.slice().reverse()[0][1]+R(t.type),r.a.createElement(k.a,{onClose:l,"aria-labelledby":"simple-dialog-title",open:o},r.a.createElement(w.a,{id:"simple-dialog-title"},t.name+" ("+t.type+")"),r.a.createElement(O.a,null,r.a.createElement(S.a,{id:"demo-simple-select-label"},"Resolution"),r.a.createElement(j.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:f,onChange:function(e){E(e.target.value)}},r.a.createElement(C.a,{value:"15minutes"},"15 minutes"),r.a.createElement(C.a,{value:"hour"},"Hourly"),r.a.createElement(C.a,{value:"day"},"Daily"))),r.a.createElement(y.a,null,t.data.map((function(e,t){return r.a.createElement(u.a,{button:!0,onClick:l,key:t},r.a.createElement(m.a,{primary:U(e[0])}),r.a.createElement(m.a,{primary:e[1]}))})))))}var A=Object(f.a)((function(){return{root:{paddingTop:0,paddingBottom:0}}}));function L(e){var t=e.sensors,n=A();return r.a.createElement(u.a,{className:n.root},r.a.createElement(m.a,{primary:t[0].name.substring(0,35)+(t[0].name.length>35?"...":""),secondary:s()(t[0].data.slice().reverse()[0][0]).fromNow()}),r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement(d.a,{array:t,size:2},(function(e){return e.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(d.d,{collection:e,iteratee:function(e){return r.a.createElement(T,{sensor:e,key:e.type})}}))}))}))))}var F=n(256),Q=(n(741),n(590)),B=n.n(Q),M=n(801),P=n(802),J=n(27);function V(){var e=localStorage.getItem("logs");return null===e?"[]":e}function q(e,t){var n=V(),a=JSON.parse(n||[]);t?a.push({id:a.length,message:"".concat(e,": ").concat(t)}):a.push({id:a.length,message:"".concat(e)});var r=JSON.stringify(a);localStorage.setItem("logs",r)}function G(){var e=V();return JSON.parse(e)}function H(){localStorage.setItem("logs","[]")}var K=n(257),Z=n.n(K),Y=function(){return q("loadSensors()"),fetch("https://3gzxlzr6d4.execute-api.us-east-1.amazonaws.com/dev/sensor").then((function(e){return e.json()})).then((function(e){return console.log("loadSensors(1)",e),e.sensors})).catch((function(e){console.error("ERROR",e)}))},X=function(e){var t=e.sensorId,n=e.isFavourite,a=e.snoozeUntil;q("updateSensor: ",t);var r={};return Z.a.isUndefined(n)||(r.isFavourite=n),Z.a.isUndefined(a)||(r.snoozeUntil=a),fetch("https://3gzxlzr6d4.execute-api.us-east-1.amazonaws.com/dev/sensor/".concat(t),{headers:{Accept:"application/json","Content-Type":"application/json"},method:"PATCH",body:JSON.stringify(r)}).then((function(e){return e.json()})).catch((function(e){console.error("ERROR",e)}))},$=Object(f.a)((function(e){return{root:{width:"100%",maxWidth:440,backgroundColor:e.palette.background.paper}}})),_=function(){return r.a.createElement(M.a,{container:!0,spacing:3},r.a.createElement(M.a,{item:!0,xs:12},r.a.createElement(M.a,{container:!0,spacing:1},r.a.createElement(d.e,{start:10},(function(e){return r.a.createElement(d.d,{collection:e,iteratee:function(e){return r.a.createElement(M.a,{item:!0,xs:12,key:e},r.a.createElement(P.a,{variant:"rect",width:"100%",height:56}))}})})))))},ee=function(e,t,n,a){var o=Object.keys(e.items).sort((function(t,n){return e.items[t][0].name.localeCompare(e.items[n][0].name)}));return r.a.createElement(F.SwipeableList,{className:t.root},r.a.createElement(d.b,{collection:o,predicate:function(e){return!a.includes(e)}},(function(t){return r.a.createElement(d.d,{collection:t,iteratee:function(t){return r.a.createElement(F.SwipeableListItem,{key:t,swipeRight:(a=t,{content:r.a.createElement(B.a,null),action:function(){return n.mutate({sensorId:a,isFavourite:!0})}})},r.a.createElement(L,{sensors:e.items[t]}));var a}})})))};function te(e){var t=e.sensorData,n=e.isLoading,a=$(),o=Object(J.useQueryClient)(),i=Object(J.useMutation)(X,{onSuccess:function(){o.invalidateQueries("loadSensors")}}),l=Object(J.useQuery)("loadSensors",Y).data,s=void 0===l?[]:l,u=r.a.useState([]),m=Object(c.a)(u,2),d=m[0],f=m[1];return r.a.useEffect((function(){f(s.filter((function(e){return e.isFavourite})).map((function(e){return"".concat(e.sensorId)})))}),[s]),n?_():ee(t,a,i,d)}var ne=n(746),ae=n(178),re=n.n(ae),oe=Object(f.a)((function(e){return{root:{flexGrow:1,maxWidth:440,marginTop:10,marginBottom:10},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,fontSize:16,fontWeight:700,position:"relative"},clearIcon:{color:"#DDDDDD",position:"absolute",right:2,top:2,"&:hover":{color:"#444444"}},sensorName:{marginTop:0}}})),ie=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,{item:!0,xs:6,key:1},r.a.createElement(P.a,{variant:"rect",width:166,height:128})),r.a.createElement(M.a,{item:!0,xs:6,key:2},r.a.createElement(P.a,{variant:"rect",width:166,height:128})))},ce=function(e,t,n,a){return r.a.createElement(d.d,{collection:t,iteratee:function(t){return r.a.createElement(M.a,{item:!0,xs:6,key:t},r.a.createElement(ne.a,{className:e.paper},r.a.createElement(re.a,{className:e.clearIcon,onClick:function(){return a.mutate({sensorId:t,isFavourite:!1})}}),r.a.createElement("p",{className:e.sensorName},n.items[t]&&n.items[t][0].name),r.a.createElement("div",null,r.a.createElement(d.d,{collection:n.items[t],iteratee:function(e){return["temp","humidity"].includes(e.type)?r.a.createElement(T,{sensor:e,key:e.type}):""}}))))}})};function le(e){var t=e.sensorData,n=e.isLoading,a=Object(J.useQueryClient)(),o=Object(J.useQuery)("loadSensors",Y).data,i=void 0===o?[]:o,l=Object(J.useMutation)(X,{onSuccess:function(){a.invalidateQueries("loadSensors")}}),s=r.a.useState([]),u=Object(c.a)(s,2),m=u[0],d=u[1];r.a.useEffect((function(){d(i.filter((function(e){return e.isFavourite})).map((function(e){return e.sensorId})))}),[i]);var f=oe();return r.a.createElement(M.a,{id:"favourites",container:!0,spacing:3,className:f.root},r.a.createElement(M.a,{item:!0,xs:12},r.a.createElement(M.a,{container:!0,spacing:1},n?ie():ce(f,m,t,l))))}var se=n(803),ue=function(e,t){return e.reduce((function(e,n){var a=n[t];return e[a]=e[a]||[],e[a].push(n),e}),{})},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date((new Date).getTime()-216e5);arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date;return q("loadSensorValues",e),fetch("https://3gzxlzr6d4.execute-api.us-east-1.amazonaws.com/dev/sensorValues?from=6").then((function(e){return e.json()})).then((function(e){var t=ue(e.series,"sensorid");return console.log("loadSensorValues.items",t),{items:t,lastUpdated:new Date}})).catch((function(e){console.error("ERROR",e)}))};function de(){var e=Object(J.useQuery)("loadSensorValues",me,{refetchInterval:6e4}),t=e.data,n=void 0===t?{items:[],lastUpdated:new Date}:t,a=e.isLoading;return r.a.createElement(se.a,{maxWidth:"sm"},r.a.createElement(le,{sensorData:n,isLoading:a}),r.a.createElement(te,{sensorData:n,isLoading:a}))}var fe=n(811),pe=n(809),Ee=n(810),ge=n(748),ve=n(593),he=n.n(ve),be=n(594),ye=n(595),we=n(592),ke=n.n(we),Se=n(806),Ce=n(808),Oe=n(818),je=n(814),xe=n(807),ze=n(815),Ne=n(804),De=n(805),Ie=n(591),We=n.n(Ie),Re={1:"1 hour",2:"2 hours",4:"4 hours",24:"24 hours"},Ue=["1","2","4","24"];function Te(e){var t=e.eventsList,n=e.handleClickEvents,a=e.sensorMutation,o=e.sensor,i=E.a[400],l=function(e){var t=new Date(0);return t.setUTCSeconds(e/1e3),t.toLocaleTimeString()},f=r.a.useState("1"),g=Object(c.a)(f,2),v=g[0],h=g[1],b=r.a.useRef(null),S=r.a.useState(!1),C=Object(c.a)(S,2),O=C[0],j=C[1];r.a.useEffect((function(){O||h("1")}),["1",O]);var x=(new Date).getTime(),z=o.snoozeUntil>x?i:"black",N=t[0],D=Object(ye.a)(t).reverse()[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(ze.a,null,r.a.createElement(Ne.a,{expandIcon:r.a.createElement(We.a,null),"aria-controls":"content",id:"header"},r.a.createElement(M.a,{container:!0,spacing:0,alignItems:"center"},r.a.createElement(M.a,{item:!0,xs:11},r.a.createElement(m.a,{primary:N.name,secondary:l(D.timestamp)})),r.a.createElement(M.a,{item:!0,xs:1},r.a.createElement(ke.a,{style:{color:z},onClick:function(e){e.stopPropagation(),j(!0)},onFocus:function(e){return e.stopPropagation()}})))),r.a.createElement(De.a,null,r.a.createElement(y.a,null,r.a.createElement(d.d,{collection:t,iteratee:function(e){return r.a.createElement(u.a,{button:!0,onClick:n,key:"".concat(e.sensorId,"-").concat(e.timestamp)},r.a.createElement(m.a,{secondary:l(e.timestamp),primary:e.message}))}})))),r.a.createElement(k.a,{disableBackdropClick:!0,disableEscapeKeyDown:!0,maxWidth:"xs",onEntering:function(){null!=b.current&&b.current.focus()},"aria-labelledby":"confirmation-dialog-title",open:O},r.a.createElement(w.a,{id:"confirmation-dialog-title"},"Snooze For"),r.a.createElement(Se.a,{dividers:!0},o.snoozeUntil>x&&"Active again ".concat(s()(o.snoozeUntil).fromNow(),"."),r.a.createElement(Oe.a,{ref:b,"aria-label":"snooze-for",name:"snooze-for",value:v,onChange:function(e){h(e.target.value)}},Ue.map((function(e){return r.a.createElement(xe.a,{value:e,key:e,control:r.a.createElement(je.a,null),label:Re[e]})})))),r.a.createElement(Ce.a,null,r.a.createElement(p.a,{autoFocus:!0,onClick:function(){j(!1)},color:"primary"},"Cancel"),r.a.createElement(p.a,{onClick:function(){j(!1),a.mutate({sensorId:t[0].sensorId,snoozeUntil:(new Date).getTime()+1e3*v*60*60})},color:"primary"},"Ok"))))}var Ae=function(){return r.a.createElement(M.a,{container:!0,spacing:1,alignItems:"center"},r.a.createElement(d.d,{collection:[1,2,3],iteratee:function(e){return r.a.createElement(M.a,{item:!0,xs:12},r.a.createElement(P.a,{key:e,variant:"rect",width:309,height:80}))}}))};function Le(e){var t=e.onClose,n=r.a.useState(!1),a=Object(c.a)(n,2),o=a[0],i=a[1],l=function(){i(!1),t()},s=Object(J.useQuery)("loadNotificationEvents",(function(){return q("reloadData"),fetch("https://aoq53tdls8.execute-api.us-east-1.amazonaws.com/dev/sensorNotificationEvent").then((function(e){return e.json()})).catch((function(e){console.error("ERROR",e)}))}),{refetchInterval:6e4}),u=s.data,m=void 0===u?[]:u,f=s.isLoading,p=Object(J.useQueryClient)(),E=Object(J.useQuery)("loadSensors",Y).data,g=Object(J.useMutation)(X,{onSuccess:function(){p.invalidateQueries("loadSensors")}});return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{onClick:function(){i(!0)}},"Notification Events"),r.a.createElement(k.a,{onClose:l,"aria-labelledby":"simple-dialog-title",open:o,fullWidth:!0,maxWidth:"xs"},r.a.createElement(w.a,{id:"simple-dialog-title"},"Notification Events"),r.a.createElement(y.a,null,f&&Ae(),!f&&r.a.createElement(d.c,{collection:m,iteratee:function(e){return e.sensorId}},(function(e){return r.a.createElement(d.d,{collection:Object.keys(e),iteratee:function(t){return r.a.createElement(Te,{eventsList:e[t],handleClickEvents:l,key:t,sensorMutation:g,sensor:E&&E.filter((function(e){return"".concat(e.sensorId)===t}))[0]})}})})))))}function Fe(e){var t=e.onClose,n=r.a.useState(!1),a=Object(c.a)(n,2),o=a[0],i=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{onClick:function(){i(!0)}},"Application Logs"),r.a.createElement(k.a,{onClose:function(){i(!1),t()},"aria-labelledby":"simple-dialog-title",open:o,fullWidth:!0,maxWidth:"xs"},r.a.createElement(w.a,{id:"simple-dialog-title"},"Application Logs",r.a.createElement(re.a,{onClick:H})),r.a.createElement(y.a,null,r.a.createElement(d.d,{collection:G(),iteratee:function(e){return r.a.createElement(u.a,{key:e.id},r.a.createElement(m.a,{primary:e.message||e}))}}))))}var Qe=Object(f.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},dialog2:{minWidth:"400px"}}}));function Be(){var e=Qe(),t=r.a.useState(null),n=Object(c.a)(t,2),a=n[0],o=n[1],i=Boolean(a),l=function(){o(null),q("handleClose")};return r.a.createElement(r.a.Fragment,null,r.a.createElement(pe.a,{position:"fixed",className:e.root},r.a.createElement(Ee.a,null,r.a.createElement(ge.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){o(e.currentTarget),q("handleMenu")}},r.a.createElement(he.a,null)),r.a.createElement(be.a,{id:"menu-appbar",anchorEl:a,anchorOrigin:{vertical:"top",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:i,onClose:l},r.a.createElement("div",null,r.a.createElement(Le,{onClose:l})),r.a.createElement("div",null,r.a.createElement(Fe,{onClose:l}))))),r.a.createElement(Ee.a,null))}var Me=new J.QueryClient;var Pe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Je(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(q("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(q("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Ve=function(e){for(var t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),a=window.atob(n),r=new Uint8Array(a.length),o=0;o<a.length;++o)r[o]=a.charCodeAt(o);return r}("BCBiWe3ds-oc2bXKvwDCZYUByuwOOjldeQJNAUTzWfwHH-ZGoIBEf7j70tpbCSq8wWlZlM7iwz9Dr506Iwsq4Yg");i.a.render(r.a.createElement((function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(J.QueryClientProvider,{client:Me},r.a.createElement(fe.a,null),r.a.createElement(Be,null),r.a.createElement(de,null)))}),null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/sentilojn/test",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/sentilojn/test","/").concat("service-worker.js");Pe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Je(e,t)})).catch((function(){q("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){q("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Je(t,e)}))}}(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.pushManager?e.pushManager.getSubscription().then((function(t){null===t?(q("No subscription detected, make a request."),e.pushManager.subscribe({applicationServerKey:Ve,userVisibleOnly:!0}).then((function(e){var t;q("New subscription added."),t=e,fetch("".concat("https://3gzxlzr6d4.execute-api.us-east-1.amazonaws.com","/dev/subscription"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"},mode:"no-cors"})})).catch((function(e){"granted"!==Notification.permission?q("Permission was not granted."):console.error("An error ocurred during the subscription process.",e)}))):q("Existed subscription detected.")})):q("Push manager unavailable.")})).catch((function(e){console.error("An error ocurred during Service Worker registration.",e)}))}},[[610,1,2]]]);
//# sourceMappingURL=main.579771f5.chunk.js.map