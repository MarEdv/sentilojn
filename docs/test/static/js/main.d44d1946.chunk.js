(this["webpackJsonpsentilojn-web"]=this["webpackJsonpsentilojn-web"]||[]).push([[0],{603:function(e,t,n){e.exports=n(736)},736:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(14),i=n.n(o),c=n(31),l=n(165),s=n.n(l),u=n(740),m=n(784),d=n(25),f=n(785),p=n(779),g=n(777),E=n(175),v=n(778),h=n(176),b=n(177),y=n(783),w=n(782),k=n(802),S=g.a[400],C=E.a[400],O=v.a[400],j=h.a[400],x=b.a[400],z=function(e,t){switch(t){case"temp":return S;case"humidity":return C;case"uv":return O;case"lum":return j;default:return x}},N=function(e){switch(e){case"temp":return"C";case"humidity":return"%";case"lum":return"L";case"uv":return"UV";default:return"N/A"}},W=function(e){var t=new Date(0);return t.setUTCSeconds(e/1e3),t.toLocaleTimeString()};function D(e){var t=e.sensor,n=r.a.useState(!1),a=Object(c.a)(n,2),o=a[0],i=a[1],l=function(){i(!o)};return r.a.createElement(p.a,{variant:"contained",key:t.type,style:{backgroundColor:z(t.data.slice().reverse()[0][1],t.type),maxWidth:64},onClick:l},t.data.slice().reverse()[0][1]+N(t.type),r.a.createElement(k.a,{onClose:l,"aria-labelledby":"simple-dialog-title",open:o},r.a.createElement(w.a,{id:"simple-dialog-title"},t.name+" ("+t.type+")"),r.a.createElement(y.a,null,t.data.map((function(e,t){return r.a.createElement(u.a,{button:!0,onClick:l,key:t},r.a.createElement(m.a,{primary:W(e[0])}),r.a.createElement(m.a,{primary:e[1]}))})))))}var I=Object(f.a)((function(){return{root:{paddingTop:0,paddingBottom:0}}}));function U(e){var t=e.sensors,n=I();return r.a.createElement(u.a,{className:n.root},r.a.createElement(m.a,{primary:t[0].name.substring(0,35)+(t[0].name.length>35?"...":""),secondary:s()(t[0].data.slice().reverse()[0][0]).fromNow()}),r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement(d.a,{array:t,size:2},(function(e){return e.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(d.d,{collection:e,iteratee:function(e){return r.a.createElement(D,{sensor:e,key:e.type})}}))}))}))))}var R=n(251),T=(n(733),n(584)),A=n.n(T),L=n(786),F=n(787),Q=n(26);function B(){var e=localStorage.getItem("logs");return null===e?"[]":e}function M(e,t){var n=B(),a=JSON.parse(n||[]);t?a.push({id:a.length,message:"".concat(e,": ").concat(t)}):a.push({id:a.length,message:"".concat(e)});var r=JSON.stringify(a);localStorage.setItem("logs",r)}function P(){var e=B();return JSON.parse(e)}function J(){localStorage.setItem("logs","[]")}var V=n(252),q=n.n(V),G=function(){return M("loadSensors()"),fetch("https://3gzxlzr6d4.execute-api.us-east-1.amazonaws.com/dev/sensor").then((function(e){return e.json()})).then((function(e){return console.log("loadSensors(1)",e),e.sensors})).catch((function(e){console.error("ERROR",e)}))},H=function(e){var t=e.sensorId,n=e.isFavourite,a=e.snoozeUntil;M("updateSensor: ",t);var r={};return q.a.isUndefined(n)||(r.isFavourite=n),q.a.isUndefined(a)||(r.snoozeUntil=a),fetch("https://3gzxlzr6d4.execute-api.us-east-1.amazonaws.com/dev/sensor/".concat(t),{headers:{Accept:"application/json","Content-Type":"application/json"},method:"PATCH",body:JSON.stringify(r)}).then((function(e){return e.json()})).catch((function(e){console.error("ERROR",e)}))},K=Object(f.a)((function(e){return{root:{width:"100%",maxWidth:440,backgroundColor:e.palette.background.paper}}})),Z=function(){return r.a.createElement(L.a,{container:!0,spacing:3},r.a.createElement(L.a,{item:!0,xs:12},r.a.createElement(L.a,{container:!0,spacing:1},r.a.createElement(d.e,{start:10},(function(e){return r.a.createElement(d.d,{collection:e,iteratee:function(e){return r.a.createElement(L.a,{item:!0,xs:12,key:e},r.a.createElement(F.a,{variant:"rect",width:"100%",height:56}))}})})))))},Y=function(e,t,n,a){var o=Object.keys(e.items).sort((function(t,n){return e.items[t][0].name.localeCompare(e.items[n][0].name)}));return r.a.createElement(R.SwipeableList,{className:t.root},r.a.createElement(d.b,{collection:o,predicate:function(e){return!a.includes(e)}},(function(t){return r.a.createElement(d.d,{collection:t,iteratee:function(t){return r.a.createElement(R.SwipeableListItem,{key:t,swipeRight:(a=t,{content:r.a.createElement(A.a,null),action:function(){return n.mutate({sensorId:a,isFavourite:!0})}})},r.a.createElement(U,{sensors:e.items[t]}));var a}})})))};function X(e){var t=e.sensorData,n=e.isLoading,a=K(),o=Object(Q.useQueryClient)(),i=Object(Q.useMutation)(H,{onSuccess:function(){o.invalidateQueries("loadSensors")}}),l=Object(Q.useQuery)("loadSensors",G).data,s=void 0===l?[]:l,u=r.a.useState([]),m=Object(c.a)(u,2),d=m[0],f=m[1];return r.a.useEffect((function(){f(s.filter((function(e){return e.isFavourite})).map((function(e){return"".concat(e.sensorId)})))}),[s]),n?Z():Y(t,a,i,d)}var $=n(739),_=n(172),ee=n.n(_),te=Object(f.a)((function(e){return{root:{flexGrow:1,maxWidth:440,marginTop:10,marginBottom:10},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,fontSize:16,fontWeight:700,position:"relative"},clearIcon:{color:"#DDDDDD",position:"absolute",right:2,top:2,"&:hover":{color:"#444444"}},sensorName:{marginTop:0}}})),ne=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{item:!0,xs:6,key:1},r.a.createElement(F.a,{variant:"rect",width:166,height:128})),r.a.createElement(L.a,{item:!0,xs:6,key:2},r.a.createElement(F.a,{variant:"rect",width:166,height:128})))},ae=function(e,t,n,a){return r.a.createElement(d.d,{collection:t,iteratee:function(t){return r.a.createElement(L.a,{item:!0,xs:6,key:t},r.a.createElement($.a,{className:e.paper},r.a.createElement(ee.a,{className:e.clearIcon,onClick:function(){return a.mutate({sensorId:t,isFavourite:!1})}}),r.a.createElement("p",{className:e.sensorName},n.items[t]&&n.items[t][0].name),r.a.createElement("div",null,r.a.createElement(d.d,{collection:n.items[t],iteratee:function(e){return["temp","humidity"].includes(e.type)?r.a.createElement(D,{sensor:e,key:e.type}):""}}))))}})};function re(e){var t=e.sensorData,n=e.isLoading,a=Object(Q.useQueryClient)(),o=Object(Q.useQuery)("loadSensors",G).data,i=void 0===o?[]:o,l=Object(Q.useMutation)(H,{onSuccess:function(){a.invalidateQueries("loadSensors")}}),s=r.a.useState([]),u=Object(c.a)(s,2),m=u[0],d=u[1];r.a.useEffect((function(){d(i.filter((function(e){return e.isFavourite})).map((function(e){return e.sensorId})))}),[i]);var f=te();return r.a.createElement(L.a,{id:"favourites",container:!0,spacing:3,className:f.root},r.a.createElement(L.a,{item:!0,xs:12},r.a.createElement(L.a,{container:!0,spacing:1},n?ne():ae(f,m,t,l))))}var oe=n(788),ie=function(e,t){return e.reduce((function(e,n){var a=n[t];return e[a]=e[a]||[],e[a].push(n),e}),{})},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date((new Date).getTime()-216e5);arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date;return M("loadSensorValues",e),fetch("https://3gzxlzr6d4.execute-api.us-east-1.amazonaws.com/dev/sensorValues?from=6").then((function(e){return e.json()})).then((function(e){var t=ie(e.series,"sensorid");return console.log("loadSensorValues.items",t),{items:t,lastUpdated:new Date}})).catch((function(e){console.error("ERROR",e)}))};function le(){var e=Object(Q.useQuery)("loadSensorValues",ce,{refetchInterval:6e4}),t=e.data,n=void 0===t?{items:[],lastUpdated:new Date}:t,a=e.isLoading;return r.a.createElement(oe.a,{maxWidth:"sm"},r.a.createElement(re,{sensorData:n,isLoading:a}),r.a.createElement(X,{sensorData:n,isLoading:a}))}var se=n(797),ue=n(795),me=n(796),de=n(741),fe=n(587),pe=n.n(fe),ge=n(800),Ee=n(794),ve=n(588),he=n(586),be=n.n(he),ye=n(791),we=n(793),ke=n(803),Se=n(799),Ce=n(792),Oe=n(801),je=n(789),xe=n(790),ze=n(585),Ne=n.n(ze),We={1:"1 hour",2:"2 hours",4:"4 hours",24:"24 hours"},De=["1","2","4","24"];function Ie(e){var t=e.eventsList,n=e.handleClickEvents,a=e.sensorMutation,o=e.sensor,i=g.a[400],l=function(e){var t=new Date(0);return t.setUTCSeconds(e/1e3),t.toLocaleTimeString()},f=r.a.useState("1"),E=Object(c.a)(f,2),v=E[0],h=E[1],b=r.a.useRef(null),S=r.a.useState(!1),C=Object(c.a)(S,2),O=C[0],j=C[1];r.a.useEffect((function(){O||h("1")}),["1",O]);var x=(new Date).getTime(),z=o.snoozeUntil>x?i:"black",N=t[0],W=Object(ve.a)(t).reverse()[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(Oe.a,null,r.a.createElement(je.a,{expandIcon:r.a.createElement(Ne.a,null),"aria-controls":"content",id:"header"},r.a.createElement(L.a,{container:!0,spacing:0,alignItems:"center"},r.a.createElement(L.a,{item:!0,xs:11},r.a.createElement(m.a,{primary:N.name,secondary:l(W.timestamp)})),r.a.createElement(L.a,{item:!0,xs:1},r.a.createElement(be.a,{style:{color:z},onClick:function(e){e.stopPropagation(),j(!0)},onFocus:function(e){return e.stopPropagation()}})))),r.a.createElement(xe.a,null,r.a.createElement(y.a,null,r.a.createElement(d.d,{collection:t,iteratee:function(e){return r.a.createElement(u.a,{button:!0,onClick:n,key:"".concat(e.sensorId,"-").concat(e.timestamp)},r.a.createElement(m.a,{secondary:l(e.timestamp),primary:e.message}))}})))),r.a.createElement(k.a,{disableBackdropClick:!0,disableEscapeKeyDown:!0,maxWidth:"xs",onEntering:function(){null!=b.current&&b.current.focus()},"aria-labelledby":"confirmation-dialog-title",open:O},r.a.createElement(w.a,{id:"confirmation-dialog-title"},"Snooze For"),r.a.createElement(ye.a,{dividers:!0},o.snoozeUntil>x&&"Active again ".concat(s()(o.snoozeUntil).fromNow(),"."),r.a.createElement(ke.a,{ref:b,"aria-label":"snooze-for",name:"snooze-for",value:v,onChange:function(e){h(e.target.value)}},De.map((function(e){return r.a.createElement(Ce.a,{value:e,key:e,control:r.a.createElement(Se.a,null),label:We[e]})})))),r.a.createElement(we.a,null,r.a.createElement(p.a,{autoFocus:!0,onClick:function(){j(!1)},color:"primary"},"Cancel"),r.a.createElement(p.a,{onClick:function(){j(!1),a.mutate({sensorId:t[0].sensorId,snoozeUntil:(new Date).getTime()+1e3*v*60*60})},color:"primary"},"Ok"))))}function Ue(e){var t=e.onClose,n=r.a.useState(!1),a=Object(c.a)(n,2),o=a[0],i=a[1],l=function(){i(!1),t()},s=Object(Q.useQuery)("loadNotificationEvents",(function(){return M("reloadData"),fetch("https://aoq53tdls8.execute-api.us-east-1.amazonaws.com/dev/sensorNotificationEvent").then((function(e){return e.json()})).catch((function(e){console.error("ERROR",e)}))}),{refetchInterval:6e4}).data,u=void 0===s?[]:s,m=Object(Q.useQueryClient)(),f=Object(Q.useQuery)("loadSensors",G).data,p=Object(Q.useMutation)(H,{onSuccess:function(){m.invalidateQueries("loadSensors")}});return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ee.a,{onClick:function(){i(!0)}},"Notification Events"),r.a.createElement(k.a,{onClose:l,"aria-labelledby":"simple-dialog-title",open:o,fullWidth:!0,maxWidth:"xs"},r.a.createElement(w.a,{id:"simple-dialog-title"},"Notification Events"),r.a.createElement(y.a,null,r.a.createElement(d.c,{collection:u,iteratee:function(e){return e.sensorId}},(function(e){return r.a.createElement(d.d,{collection:Object.keys(e),iteratee:function(t){return r.a.createElement(Ie,{eventsList:e[t],handleClickEvents:l,key:t,sensorMutation:p,sensor:f&&f.filter((function(e){return"".concat(e.sensorId)===t}))[0]})}})})))))}function Re(e){var t=e.onClose,n=r.a.useState(!1),a=Object(c.a)(n,2),o=a[0],i=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ee.a,{onClick:function(){i(!0)}},"Application Logs"),r.a.createElement(k.a,{onClose:function(){i(!1),t()},"aria-labelledby":"simple-dialog-title",open:o,fullWidth:!0,maxWidth:"xs"},r.a.createElement(w.a,{id:"simple-dialog-title"},"Application Logs",r.a.createElement(ee.a,{onClick:J})),r.a.createElement(y.a,null,r.a.createElement(d.d,{collection:P(),iteratee:function(e){return r.a.createElement(u.a,{key:e.id},r.a.createElement(m.a,{primary:e.message||e}))}}))))}var Te=Object(f.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},dialog2:{minWidth:"400px"}}}));function Ae(){var e=Te(),t=r.a.useState(null),n=Object(c.a)(t,2),a=n[0],o=n[1],i=Boolean(a),l=function(){o(null),M("handleClose")};return r.a.createElement(r.a.Fragment,null,r.a.createElement(ue.a,{position:"fixed",className:e.root},r.a.createElement(me.a,null,r.a.createElement(de.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){o(e.currentTarget),M("handleMenu")}},r.a.createElement(pe.a,null)),r.a.createElement(ge.a,{id:"menu-appbar",anchorEl:a,anchorOrigin:{vertical:"top",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:i,onClose:l},r.a.createElement("div",null,r.a.createElement(Ue,{onClose:l})),r.a.createElement("div",null,r.a.createElement(Re,{onClose:l}))))),r.a.createElement(me.a,null))}var Le=new Q.QueryClient;var Fe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Qe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(M("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(M("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Be=function(e){for(var t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),a=window.atob(n),r=new Uint8Array(a.length),o=0;o<a.length;++o)r[o]=a.charCodeAt(o);return r}("BCBiWe3ds-oc2bXKvwDCZYUByuwOOjldeQJNAUTzWfwHH-ZGoIBEf7j70tpbCSq8wWlZlM7iwz9Dr506Iwsq4Yg");i.a.render(r.a.createElement((function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q.QueryClientProvider,{client:Le},r.a.createElement(se.a,null),r.a.createElement(Ae,null),r.a.createElement(le,null)))}),null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/sentilojn/test",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/sentilojn/test","/").concat("service-worker.js");Fe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Qe(e,t)})).catch((function(){M("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){M("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Qe(t,e)}))}}(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.pushManager?e.pushManager.getSubscription().then((function(t){null===t?(M("No subscription detected, make a request."),e.pushManager.subscribe({applicationServerKey:Be,userVisibleOnly:!0}).then((function(e){var t;M("New subscription added."),t=e,fetch("".concat("https://3gzxlzr6d4.execute-api.us-east-1.amazonaws.com","/dev/subscription"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"},mode:"no-cors"})})).catch((function(e){"granted"!==Notification.permission?M("Permission was not granted."):console.error("An error ocurred during the subscription process.",e)}))):M("Existed subscription detected.")})):M("Push manager unavailable.")})).catch((function(e){console.error("An error ocurred during Service Worker registration.",e)}))}},[[603,1,2]]]);
//# sourceMappingURL=main.d44d1946.chunk.js.map