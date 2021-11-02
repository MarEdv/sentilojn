(this["webpackJsonpsentilojn-web"]=this["webpackJsonpsentilojn-web"]||[]).push([[0],{610:function(e,t,n){e.exports=n(743)},743:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(16),i=n.n(o),c=n(20),l=n(171),s=n.n(l),u=n(747),m=n(797),d=n(25),f=n(801),p=n(800),v=n(798),E=n(182),g=n(799),h=n(183),b=n(181),y=n(794),w=n(792),S=n(816),k=n(818),C=n(795),O=n(793),j=n(812);function x(){var e=localStorage.getItem("logs");return null===e?"[]":e}function D(e,t){var n=x(),a=JSON.parse(n||[]);t?a.push({id:a.length,message:"".concat(e,": ").concat(t)}):a.push({id:a.length,message:"".concat(e)});var r=JSON.stringify(a);localStorage.setItem("logs",r)}function z(){var e=x();return JSON.parse(e)}function I(){localStorage.setItem("logs","[]")}var N=function(e){var t=e.queryKey;console.log("loadSensorValues",t);var n=Object(c.a)(t,2),a=(n[0],n[1]),r=(a=void 0===a?{}:a).sensorId,o=void 0===r?null:r,i=a.valueResolution,l=void 0===i?null:i,s=a.fromDateTime,u=void 0===s?new Date((new Date).getTime()-216e5):s,m=a.toDateTime;void 0===m&&new Date;return D("loadSensorValues",u),fetch("https://3gzxlzr6d4.execute-api.us-east-1.amazonaws.com/dev/sensorValues?from=6".concat(null!=l?"&resolution=".concat(l):"").concat(null!=o?"&sensorId=".concat(o):"")).then((function(e){return e.json()})).then((function(e){var t,n,a=(t=e.series,n="sensorid",t.reduce((function(e,t){var a=t[n];return e[a]=e[a]||[],e[a].push(t),e}),{}));return console.log("loadSensorValues.items",a),{items:a,lastUpdated:new Date}})).catch((function(e){console.error("ERROR",e)}))},L=n(22),W=n(796);function F(e){var t=e.sensor,n=e.open,a=e.onClose,o=r.a.useState("15minutes"),i=Object(c.a)(o,2),l=i[0],s=i[1],d=r.a.useState(t),f=Object(c.a)(d,2),p=f[0],v=f[1],E=r.a.useState(!1),g=Object(c.a)(E,2),h=g[0],b=g[1],x={sensorId:p.sensorid,valueResolution:l},D={enabled:h,cacheTime:3e5,staleTime:3e5},z=Object(L.useQuery)(["loadCurrentSensorValues",x],N,D),I=z.data,F=void 0===I?null:I,T=z.isLoading;r.a.useEffect((function(){if(null!==F){var e=F.items[p.sensorid].filter((function(e){return e.type===p.type}))[0];v(e)}}),[p,F]);var R=function(e){var t=new Date(0);return t.setUTCSeconds(e/1e3),t.toLocaleTimeString()},U={minimumFractionDigits:2,maximumFractionDigits:2};return r.a.createElement(S.a,{onClose:a,"aria-labelledby":"simple-dialog-title",open:n},r.a.createElement(w.a,{id:"simple-dialog-title"},p.name+" ("+p.type+")"),r.a.createElement(O.a,null,r.a.createElement(k.a,{id:"demo-simple-select-label"},"Resolution"),r.a.createElement(j.a,{labelId:"value-resolution-label",id:"value-resolution-select",value:l,onChange:function(e){s(e.target.value),b(!0)}},r.a.createElement(C.a,{value:"15minutes"},"15 minutes"),r.a.createElement(C.a,{value:"hour"},"Hourly"),r.a.createElement(C.a,{value:"day"},"Daily"))),r.a.createElement(y.a,null,T&&r.a.createElement(W.a,{variant:"rect",width:166,height:128}),!T&&p&&p.data&&p.data.map((function(e,t){if("day"===l){var n=e[2]&&e[3]&&r.a.createElement(r.a.Fragment,null,r.a.createElement("b",null,"Min: "),e[2].toLocaleString(void 0,U),r.a.createElement("br",null),r.a.createElement("b",null,"Max: "),e[3].toLocaleString(void 0,U));return r.a.createElement(u.a,{button:!0,onClick:function(){return s("hour")},key:t},r.a.createElement(m.a,{primary:e[0],secondary:n}),"\xa0",r.a.createElement(m.a,{primary:e[1].toLocaleString(void 0,U)}))}if("hour"===l){var o=e[2]&&e[3]&&r.a.createElement(r.a.Fragment,null,r.a.createElement("b",null,"Min: "),e[2].toLocaleString(void 0,U),r.a.createElement("br",null),r.a.createElement("b",null,"Max: "),e[3].toLocaleString(void 0,U));return r.a.createElement(u.a,{button:!0,onClick:function(){return s("15minutes")},key:t},r.a.createElement(m.a,{primary:e[0],secondary:o}),"\xa0",r.a.createElement(m.a,{primary:e[1].toLocaleString(void 0,U)}))}return r.a.createElement(u.a,{button:!0,onClick:a,key:t},r.a.createElement(m.a,{primary:R(e[0])}),r.a.createElement(m.a,{primary:e[1].toLocaleString(void 0,U)}))}))))}var T=v.a[400],R=E.a[400],U=g.a[400],A=h.a[400],M=b.a[400],Q=function(e,t){switch(t){case"temp":return T;case"humidity":return R;case"uv":return U;case"lum":return A;default:return M}},B=function(e){switch(e){case"temp":return"C";case"humidity":return"%";case"lum":return"L";case"uv":return"UV";default:return"N/A"}};function P(e){var t=e.sensor,n=r.a.useState(!1),a=Object(c.a)(n,2),o=a[0],i=a[1],l="temp"===t.type?{minimumFractionDigits:1,maximumFractionDigits:1}:{minimumFractionDigits:0,maximumFractionDigits:0};return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{variant:"contained",key:t.type,style:{backgroundColor:Q(t.data.slice().reverse()[0][1],t.type),maxWidth:64},onClick:function(){return i(!0)}},t.data.slice().reverse()[0][1].toLocaleString(void 0,l)+B(t.type)),r.a.createElement(F,{sensor:t,open:o,onClose:function(){i(!1)}}))}var J=Object(f.a)((function(){return{root:{paddingTop:0,paddingBottom:0}}}));function V(e){var t=e.sensors,n=J();return r.a.createElement(u.a,{className:n.root},r.a.createElement(m.a,{primary:t[0].name.substring(0,35)+(t[0].name.length>35?"...":""),secondary:s()(t[0].data.slice().reverse()[0][0]).fromNow()}),r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement(d.a,{array:t,size:2},(function(e){return e.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(d.d,{collection:e,iteratee:function(e){return r.a.createElement(P,{sensor:e,key:e.type})}}))}))}))))}var q=n(257),G=(n(741),n(590)),H=n.n(G),K=n(802),Z=n(258),Y=n.n(Z),X=function(){return D("loadSensors()"),fetch("https://3gzxlzr6d4.execute-api.us-east-1.amazonaws.com/dev/sensor").then((function(e){return e.json()})).then((function(e){return console.log("loadSensors(1)",e),e.sensors})).catch((function(e){console.error("ERROR",e)}))},$=function(e){var t=e.sensorId,n=e.isFavourite,a=e.snoozeUntil;D("updateSensor: ",t);var r={};return Y.a.isUndefined(n)||(r.isFavourite=n),Y.a.isUndefined(a)||(r.snoozeUntil=a),fetch("https://3gzxlzr6d4.execute-api.us-east-1.amazonaws.com/dev/sensor/".concat(t),{headers:{Accept:"application/json","Content-Type":"application/json"},method:"PATCH",body:JSON.stringify(r)}).then((function(e){return e.json()})).catch((function(e){console.error("ERROR",e)}))},_=Object(f.a)((function(e){return{root:{width:"100%",maxWidth:440,backgroundColor:e.palette.background.paper}}})),ee=function(){return r.a.createElement(K.a,{container:!0,spacing:3},r.a.createElement(K.a,{item:!0,xs:12},r.a.createElement(K.a,{container:!0,spacing:1},r.a.createElement(d.e,{start:10},(function(e){return r.a.createElement(d.d,{collection:e,iteratee:function(e){return r.a.createElement(K.a,{item:!0,xs:12,key:e},r.a.createElement(W.a,{variant:"rect",width:"100%",height:56}))}})})))))},te=function(e,t,n,a){var o=Object.keys(e.items).sort((function(t,n){return e.items[t][0].name.localeCompare(e.items[n][0].name)}));return r.a.createElement(q.SwipeableList,{className:t.root},r.a.createElement(d.b,{collection:o,predicate:function(e){return!a.includes(e)}},(function(t){return r.a.createElement(d.d,{collection:t,iteratee:function(t){return r.a.createElement(q.SwipeableListItem,{key:t,swipeRight:(a=t,{content:r.a.createElement(H.a,null),action:function(){return n.mutate({sensorId:a,isFavourite:!0})}})},r.a.createElement(V,{sensors:e.items[t]}));var a}})})))};function ne(e){var t=e.sensorData,n=e.isLoading,a=_(),o=Object(L.useQueryClient)(),i=Object(L.useMutation)($,{onSuccess:function(){o.invalidateQueries("loadSensors")}}),l=Object(L.useQuery)("loadSensors",X).data,s=void 0===l?[]:l,u=r.a.useState([]),m=Object(c.a)(u,2),d=m[0],f=m[1];return r.a.useEffect((function(){f(s.filter((function(e){return e.isFavourite})).map((function(e){return"".concat(e.sensorId)})))}),[s]),n?ee():te(t,a,i,d)}var ae=n(746),re=n(178),oe=n.n(re),ie=Object(f.a)((function(e){return{root:{flexGrow:1,maxWidth:440,marginTop:10,marginBottom:10},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,fontSize:16,fontWeight:700,position:"relative"},clearIcon:{color:"#DDDDDD",position:"absolute",right:2,top:2,"&:hover":{color:"#444444"}},sensorName:{marginTop:0}}})),ce=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(K.a,{item:!0,xs:6,key:1},r.a.createElement(W.a,{variant:"rect",width:166,height:128})),r.a.createElement(K.a,{item:!0,xs:6,key:2},r.a.createElement(W.a,{variant:"rect",width:166,height:128})))},le=function(e,t,n,a){return r.a.createElement(d.d,{collection:t,iteratee:function(t){return r.a.createElement(K.a,{item:!0,xs:6,key:t},r.a.createElement(ae.a,{className:e.paper},r.a.createElement(oe.a,{className:e.clearIcon,onClick:function(){return a.mutate({sensorId:t,isFavourite:!1})}}),r.a.createElement("p",{className:e.sensorName},n.items[t]&&n.items[t][0].name),r.a.createElement("div",null,r.a.createElement(d.d,{collection:n.items[t],iteratee:function(e){return["temp","humidity"].includes(e.type)?r.a.createElement(P,{sensor:e,key:e.type}):""}}))))}})};function se(e){var t=e.sensorData,n=e.isLoading,a=Object(L.useQueryClient)(),o=Object(L.useQuery)("loadSensors",X).data,i=void 0===o?[]:o,l=Object(L.useMutation)($,{onSuccess:function(){a.invalidateQueries("loadSensors")}}),s=r.a.useState([]),u=Object(c.a)(s,2),m=u[0],d=u[1];r.a.useEffect((function(){d(i.filter((function(e){return e.isFavourite})).map((function(e){return e.sensorId})))}),[i]);var f=ie();return r.a.createElement(K.a,{id:"favourites",container:!0,spacing:3,className:f.root},r.a.createElement(K.a,{item:!0,xs:12},r.a.createElement(K.a,{container:!0,spacing:1},n?ce():le(f,m,t,l))))}var ue=n(803);function me(){var e=Object(L.useQuery)("loadSensorValues",N,{refetchInterval:6e4}),t=e.data,n=void 0===t?{items:[],lastUpdated:new Date}:t,a=e.isLoading;return r.a.createElement(ue.a,{maxWidth:"sm"},r.a.createElement(se,{sensorData:n,isLoading:a}),r.a.createElement(ne,{sensorData:n,isLoading:a}))}var de=n(811),fe=n(809),pe=n(810),ve=n(748),Ee=n(593),ge=n.n(Ee),he=n(594),be=n(595),ye=n(592),we=n.n(ye),Se=n(806),ke=n(808),Ce=n(817),Oe=n(814),je=n(807),xe=n(815),De=n(804),ze=n(805),Ie=n(591),Ne=n.n(Ie),Le={1:"1 hour",2:"2 hours",4:"4 hours",24:"24 hours"},We=["1","2","4","24"];function Fe(e){var t=e.eventsList,n=e.handleClickEvents,a=e.sensorMutation,o=e.sensor,i=v.a[400],l=function(e){var t=new Date(0);return t.setUTCSeconds(e/1e3),t.toLocaleTimeString()},f=r.a.useState("1"),E=Object(c.a)(f,2),g=E[0],h=E[1],b=r.a.useRef(null),k=r.a.useState(!1),C=Object(c.a)(k,2),O=C[0],j=C[1];r.a.useEffect((function(){O||h("1")}),["1",O]);var x=(new Date).getTime(),D=o.snoozeUntil>x?i:"black",z=t[0],I=Object(be.a)(t).reverse()[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(xe.a,null,r.a.createElement(De.a,{expandIcon:r.a.createElement(Ne.a,null),"aria-controls":"content",id:"header"},r.a.createElement(K.a,{container:!0,spacing:0,alignItems:"center"},r.a.createElement(K.a,{item:!0,xs:11},r.a.createElement(m.a,{primary:z.name,secondary:l(I.timestamp)})),r.a.createElement(K.a,{item:!0,xs:1},r.a.createElement(we.a,{style:{color:D},onClick:function(e){e.stopPropagation(),j(!0)},onFocus:function(e){return e.stopPropagation()}})))),r.a.createElement(ze.a,null,r.a.createElement(y.a,null,r.a.createElement(d.d,{collection:t,iteratee:function(e){return r.a.createElement(u.a,{button:!0,onClick:n,key:"".concat(e.sensorId,"-").concat(e.timestamp)},r.a.createElement(m.a,{secondary:l(e.timestamp),primary:e.message}))}})))),r.a.createElement(S.a,{disableBackdropClick:!0,disableEscapeKeyDown:!0,maxWidth:"xs",onEntering:function(){null!=b.current&&b.current.focus()},"aria-labelledby":"confirmation-dialog-title",open:O},r.a.createElement(w.a,{id:"confirmation-dialog-title"},"Snooze For"),r.a.createElement(Se.a,{dividers:!0},o.snoozeUntil>x&&"Active again ".concat(s()(o.snoozeUntil).fromNow(),"."),r.a.createElement(Ce.a,{ref:b,"aria-label":"snooze-for",name:"snooze-for",value:g,onChange:function(e){h(e.target.value)}},We.map((function(e){return r.a.createElement(je.a,{value:e,key:e,control:r.a.createElement(Oe.a,null),label:Le[e]})})))),r.a.createElement(ke.a,null,r.a.createElement(p.a,{autoFocus:!0,onClick:function(){j(!1)},color:"primary"},"Cancel"),r.a.createElement(p.a,{onClick:function(){j(!1),a.mutate({sensorId:t[0].sensorId,snoozeUntil:(new Date).getTime()+1e3*g*60*60})},color:"primary"},"Ok"))))}var Te=function(){return r.a.createElement(K.a,{container:!0,spacing:1,alignItems:"center"},r.a.createElement(d.d,{collection:[1,2,3],iteratee:function(e){return r.a.createElement(K.a,{item:!0,xs:12},r.a.createElement(W.a,{key:e,variant:"rect",width:309,height:80}))}}))};function Re(e){var t=e.onClose,n=r.a.useState(!1),a=Object(c.a)(n,2),o=a[0],i=a[1],l=function(){i(!1),t()},s=Object(L.useQuery)("loadNotificationEvents",(function(){return D("reloadData"),fetch("https://aoq53tdls8.execute-api.us-east-1.amazonaws.com/dev/sensorNotificationEvent").then((function(e){return e.json()})).catch((function(e){console.error("ERROR",e)}))}),{refetchInterval:6e4}),u=s.data,m=void 0===u?[]:u,f=s.isLoading,p=Object(L.useQueryClient)(),v=Object(L.useQuery)("loadSensors",X).data,E=Object(L.useMutation)($,{onSuccess:function(){p.invalidateQueries("loadSensors")}});return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{onClick:function(){i(!0)}},"Notification Events"),r.a.createElement(S.a,{onClose:l,"aria-labelledby":"simple-dialog-title",open:o,fullWidth:!0,maxWidth:"xs"},r.a.createElement(w.a,{id:"simple-dialog-title"},"Notification Events"),r.a.createElement(y.a,null,f&&Te(),!f&&r.a.createElement(d.c,{collection:m,iteratee:function(e){return e.sensorId}},(function(e){return r.a.createElement(d.d,{collection:Object.keys(e),iteratee:function(t){return r.a.createElement(Fe,{eventsList:e[t],handleClickEvents:l,key:t,sensorMutation:E,sensor:v&&v.filter((function(e){return"".concat(e.sensorId)===t}))[0]})}})})))))}function Ue(e){var t=e.onClose,n=r.a.useState(!1),a=Object(c.a)(n,2),o=a[0],i=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{onClick:function(){i(!0)}},"Application Logs"),r.a.createElement(S.a,{onClose:function(){i(!1),t()},"aria-labelledby":"simple-dialog-title",open:o,fullWidth:!0,maxWidth:"xs"},r.a.createElement(w.a,{id:"simple-dialog-title"},"Application Logs",r.a.createElement(oe.a,{onClick:I})),r.a.createElement(y.a,null,r.a.createElement(d.d,{collection:z(),iteratee:function(e){return r.a.createElement(u.a,{key:e.id},r.a.createElement(m.a,{primary:e.message||e}))}}))))}var Ae=Object(f.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},dialog2:{minWidth:"400px"}}}));function Me(){var e=Ae(),t=r.a.useState(null),n=Object(c.a)(t,2),a=n[0],o=n[1],i=Boolean(a),l=function(){o(null),D("handleClose")};return r.a.createElement(r.a.Fragment,null,r.a.createElement(fe.a,{position:"fixed",className:e.root},r.a.createElement(pe.a,null,r.a.createElement(ve.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){o(e.currentTarget),D("handleMenu")}},r.a.createElement(ge.a,null)),r.a.createElement(he.a,{id:"menu-appbar",anchorEl:a,anchorOrigin:{vertical:"top",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:i,onClose:l},r.a.createElement("div",null,r.a.createElement(Re,{onClose:l})),r.a.createElement("div",null,r.a.createElement(Ue,{onClose:l}))))),r.a.createElement(pe.a,null))}var Qe=new L.QueryClient;var Be=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Pe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(D("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(D("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Je=function(e){for(var t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),a=window.atob(n),r=new Uint8Array(a.length),o=0;o<a.length;++o)r[o]=a.charCodeAt(o);return r}("BCBiWe3ds-oc2bXKvwDCZYUByuwOOjldeQJNAUTzWfwHH-ZGoIBEf7j70tpbCSq8wWlZlM7iwz9Dr506Iwsq4Yg");i.a.render(r.a.createElement((function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(L.QueryClientProvider,{client:Qe},r.a.createElement(de.a,null),r.a.createElement(Me,null),r.a.createElement(me,null)))}),null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/sentilojn/test",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/sentilojn/test","/").concat("service-worker.js");Be?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Pe(e,t)})).catch((function(){D("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){D("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Pe(t,e)}))}}(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.pushManager?e.pushManager.getSubscription().then((function(t){null===t?(D("No subscription detected, make a request."),e.pushManager.subscribe({applicationServerKey:Je,userVisibleOnly:!0}).then((function(e){var t;D("New subscription added."),t=e,fetch("".concat("https://3gzxlzr6d4.execute-api.us-east-1.amazonaws.com","/dev/subscription"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"},mode:"no-cors"})})).catch((function(e){"granted"!==Notification.permission?D("Permission was not granted."):console.error("An error ocurred during the subscription process.",e)}))):D("Existed subscription detected.")})):D("Push manager unavailable.")})).catch((function(e){console.error("An error ocurred during Service Worker registration.",e)}))}},[[610,1,2]]]);
//# sourceMappingURL=main.962c1634.chunk.js.map