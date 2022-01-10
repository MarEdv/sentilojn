(this["webpackJsonpsentilojn-web"]=this["webpackJsonpsentilojn-web"]||[]).push([[0],{624:function(e,t,a){e.exports=a(757)},757:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),i=a.n(o),c=a(16),l=a(177),s=a.n(l),u=a(761),m=a(806),d=a(23),f=a(810),E=a(809),g=a(807),p=a(190),v=a(808),h=a(191),b=a(189),y=a(803),S=a(799),w=a(829),k=a(830),C=a(804),O=a(800),x=a(825);function j(){var e=localStorage.getItem("logs");return null===e?"[]":e}function D(e,t){var a=j(),n=JSON.parse(a||[]);t?n.push({id:n.length,message:"".concat(e,": ").concat(t)}):n.push({id:n.length,message:"".concat(e)});var r=JSON.stringify(n);localStorage.setItem("logs",r)}function I(){var e=j();return JSON.parse(e)}function L(){localStorage.setItem("logs","[]")}var N=function(e){var t=e.queryKey;console.log("loadSensorValues.options",e),console.log("loadSensorValues.queryKey",t);var a=Object(c.a)(t,2),n=(a[0],a[1]),r=(n=void 0===n?{interval:{from:"6"}}:n).sensorId,o=void 0===r?null:r,i=n.valueResolution,l=void 0===i?null:i,s=n.interval,u=s.from,m=void 0===u?"6":u,d=s.to,f=void 0===d?"":d;console.log("loadSensorValues.valueResolution",l);var E="".concat(l?"&resolution=".concat(l):""),g="".concat(o?"&sensorId=".concat(o):""),p="https://3gzxlzr6d4.execute-api.us-east-1.amazonaws.com/dev/sensorValues?"+"from=".concat(m)+"&to=".concat(f)+E+g;return console.log("loadSensorValues.url",p),fetch(p).then((function(e){return e.json()})).then((function(e){var t,a,n=(t=e.series,a="sensorid",t.reduce((function(e,t){var n=t[a];return e[n]=e[n]||[],e[n].push(t),e}),{}));return console.log("loadSensorValues.items",n),{items:n,lastUpdated:new Date}})).catch((function(e){console.error("ERROR",e)}))},z=a(19),W=a(805);function F(e){var t=e.sensor,a=e.open,n=e.onClose,o=r.a.useState("15minutes"),i=Object(c.a)(o,2),l=i[0],s=i[1],d=r.a.useState(t),f=Object(c.a)(d,2),E=f[0],g=f[1],p=r.a.useState(!1),v=Object(c.a)(p,2),h=v[0],b=v[1],j=r.a.useState({from:"6",to:""}),D=Object(c.a)(j,2),I=D[0],L=D[1],F={sensorId:E.sensorid,valueResolution:l,interval:I},M={enabled:h,cacheTime:3e5,staleTime:3e5},R=Object(z.useQuery)(["loadCurrentSensorValues",F],N,M),A=R.data,T=void 0===A?null:A,Q=R.isLoading;r.a.useEffect((function(){if(null!==T){var e=T.items[E.sensorid].filter((function(e){return e.type===E.type}))[0];g(e)}}),[E,T]);var U=function(e){var t=new Date(0);return t.setUTCSeconds(e/1e3),t.toLocaleTimeString()},B={minimumFractionDigits:2,maximumFractionDigits:2};return r.a.createElement(w.a,{onClose:n,"aria-labelledby":"simple-dialog-title",open:a},r.a.createElement(S.a,{id:"simple-dialog-title"},E.name+" ("+E.type+")"),r.a.createElement(O.a,null,r.a.createElement(k.a,{id:"demo-simple-select-label"},"Resolution"),r.a.createElement(x.a,{labelId:"value-resolution-label",id:"value-resolution-select",value:l,onChange:function(e){var t=new Date;switch(e.target.value){case"day":var a=new Date((new Date).setMonth(t.getMonth()-1));L({from:a.toLocaleDateString("sv-se"),to:t.toLocaleDateString("sv-se")});break;case"hour":var n=new Date((new Date).setDate(t.getDate()-3));L({from:n.toLocaleDateString("sv-se")+"-00",to:t.toLocaleDateString("sv-se")+"-23"});break;default:L({from:"6",to:""})}s(e.target.value),b(!0)}},r.a.createElement(C.a,{value:"15minutes"},"15 minutes"),r.a.createElement(C.a,{value:"hour"},"Hourly"),r.a.createElement(C.a,{value:"day"},"Daily"))),r.a.createElement(y.a,null,Q&&r.a.createElement(W.a,{variant:"rect",width:166,height:128}),!Q&&E&&E.data&&E.data.map((function(e,t){if("day"===l){var a=e[2]&&e[3]&&r.a.createElement(r.a.Fragment,null,r.a.createElement("b",null,"Min: "),e[2].toLocaleString(void 0,B),r.a.createElement("br",null),r.a.createElement("b",null,"Max: "),e[3].toLocaleString(void 0,B));return console.log("day",E),r.a.createElement(u.a,{button:!0,onClick:function(){s("hour"),L({from:e[0]+"-00",to:e[0]+"-23"})},key:t},r.a.createElement(m.a,{primary:e[0],secondary:a}),"\xa0",r.a.createElement(m.a,{primary:e[1].toLocaleString(void 0,B)}))}if("hour"===l){var o=e[2]&&e[3]&&r.a.createElement(r.a.Fragment,null,r.a.createElement("b",null,"Min: "),e[2].toLocaleString(void 0,B),r.a.createElement("br",null),r.a.createElement("b",null,"Max: "),e[3].toLocaleString(void 0,B));return r.a.createElement(u.a,{button:!0,onClick:n,key:t},r.a.createElement(m.a,{primary:e[0],secondary:o}),"\xa0",r.a.createElement(m.a,{primary:e[1].toLocaleString(void 0,B)}))}return r.a.createElement(u.a,{button:!0,onClick:n,key:t},r.a.createElement(m.a,{primary:U(e[0])}),r.a.createElement(m.a,{primary:e[1].toLocaleString(void 0,B)}))}))))}var M=g.a[400],R=p.a[400],A=v.a[400],T=h.a[400],Q=b.a[400],U=function(e,t){switch(t){case"temp":return M;case"humidity":return R;case"uv":return A;case"lum":return T;default:return Q}},B=function(e){switch(e){case"temp":return"C";case"humidity":return"%";case"lum":return"L";case"uv":return"UV";default:return"N/A"}};function V(e){var t=e.sensor,a=r.a.useState(!1),n=Object(c.a)(a,2),o=n[0],i=n[1],l="temp"===t.type?{minimumFractionDigits:1,maximumFractionDigits:1}:{minimumFractionDigits:0,maximumFractionDigits:0};return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{variant:"contained",key:t.type,style:{backgroundColor:U(t.data.slice().reverse()[0][1],t.type),maxWidth:64},onClick:function(){return i(!0)}},t.data.slice().reverse()[0][1].toLocaleString(void 0,l)+B(t.type)),r.a.createElement(F,{sensor:t,open:o,onClose:function(){i(!1)}}))}var P=Object(f.a)((function(){return{root:{paddingTop:0,paddingBottom:0}}})),J=function(e){switch(e){case 253:return"(battery Ok)";case 254:return"";case 255:return"(battery LOW)";default:return""}};function q(e){var t=P(),a=e.sensors;return r.a.createElement(u.a,{className:t.root},r.a.createElement(m.a,{primary:a[0].name.substring(0,35)+(a[0].name.length>35?"...":""),secondary:s()(a[0].data.slice().reverse()[0][0]).fromNow()+" "+J(a[0].battery)}),r.a.createElement("div",{style:{display:"flex",flexDirection:"column"}},r.a.createElement(d.a,{array:a,size:2},(function(e){return e.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(d.d,{collection:e,iteratee:function(e){return r.a.createElement(V,{sensor:e,key:e.type})}}))}))}))))}var K=a(262),G=(a(755),a(597)),H=a.n(G),X=a(811),Z=function(){return D("loadSensors()"),fetch("https://3gzxlzr6d4.execute-api.us-east-1.amazonaws.com/dev/sensor").then((function(e){return e.json()})).then((function(e){return console.log("loadSensors(1)",e),e.sensors})).catch((function(e){console.error("ERROR",e)}))},Y=function(e){var t=e.sensorId;return D("updateSensor: ",t),fetch("https://3gzxlzr6d4.execute-api.us-east-1.amazonaws.com/dev/sensor/".concat(t),{headers:{Accept:"application/json","Content-Type":"application/json"},method:"PATCH",body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){console.error("ERROR",e)}))},$=Object(f.a)((function(e){return{root:{width:"100%",maxWidth:440,backgroundColor:e.palette.background.paper}}})),_=function(){return r.a.createElement(X.a,{container:!0,spacing:3},r.a.createElement(X.a,{item:!0,xs:12},r.a.createElement(X.a,{container:!0,spacing:1},r.a.createElement(d.e,{start:10},(function(e){return r.a.createElement(d.d,{collection:e,iteratee:function(e){return r.a.createElement(X.a,{item:!0,xs:12,key:e},r.a.createElement(W.a,{variant:"rect",width:"100%",height:56}))}})})))))},ee=function(e,t,a,n){var o=Object.keys(e.items).sort((function(t,a){return e.items[t][0].name.localeCompare(e.items[a][0].name)}));return r.a.createElement("div",{className:t.root},r.a.createElement(K.SwipeableList,null,r.a.createElement(d.b,{collection:o,predicate:function(e){return!n.includes(e)}},(function(t){return r.a.createElement(d.d,{collection:t,iteratee:function(t){return r.a.createElement(K.SwipeableListItem,{key:t,swipeRight:(n=t,{content:r.a.createElement(H.a,null),action:function(){return a.mutate({sensorId:n,isFavourite:!0})}})},r.a.createElement(q,{sensors:e.items[t]}));var n}})}))))};function te(e){var t=e.sensorData,a=e.isLoading,n=$(),o=Object(z.useQueryClient)(),i=Object(z.useMutation)(Y,{onSuccess:function(){o.invalidateQueries("loadSensors")}}),l=Object(z.useQuery)("loadSensors",Z).data,s=void 0===l?[]:l,u=r.a.useState([]),m=Object(c.a)(u,2),d=m[0],f=m[1];return r.a.useEffect((function(){f(s.filter((function(e){return e.isFavourite})).map((function(e){return"".concat(e.sensorId)})))}),[s]),a?_():ee(t,n,i,d)}var ae=a(760),ne=a(184),re=a.n(ne),oe=Object(f.a)((function(e){return{root:{flexGrow:1,maxWidth:440,marginTop:10,marginBottom:10},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,fontSize:16,fontWeight:700,position:"relative"},clearIcon:{color:"#DDDDDD",position:"absolute",right:2,top:2,"&:hover":{color:"#444444"}},sensorName:{marginTop:0}}})),ie=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(X.a,{item:!0,xs:6,key:1},r.a.createElement(W.a,{variant:"rect",width:166,height:128})),r.a.createElement(X.a,{item:!0,xs:6,key:2},r.a.createElement(W.a,{variant:"rect",width:166,height:128})))},ce=function(e,t,a,n){return r.a.createElement(d.d,{collection:t,iteratee:function(t){return r.a.createElement(X.a,{item:!0,xs:6,key:t},r.a.createElement(ae.a,{className:e.paper},r.a.createElement(re.a,{className:e.clearIcon,onClick:function(){return n.mutate({sensorId:t,isFavourite:!1})}}),r.a.createElement("p",{className:e.sensorName},a.items[t]&&a.items[t][0].name),r.a.createElement("div",null,r.a.createElement(d.d,{collection:a.items[t],iteratee:function(e){return["temp","humidity"].includes(e.type)?r.a.createElement(V,{sensor:e,key:e.type}):""}}))))}})};function le(e){var t=e.sensorData,a=e.isLoading,n=Object(z.useQueryClient)(),o=Object(z.useQuery)("loadSensors",Z).data,i=void 0===o?[]:o,l=Object(z.useMutation)(Y,{onSuccess:function(){n.invalidateQueries("loadSensors")}}),s=r.a.useState([]),u=Object(c.a)(s,2),m=u[0],d=u[1];r.a.useEffect((function(){d(i.filter((function(e){return e.isFavourite})).map((function(e){return e.sensorId})))}),[i]);var f=oe();return r.a.createElement(X.a,{id:"favourites",container:!0,spacing:3,className:f.root},r.a.createElement(X.a,{item:!0,xs:12},r.a.createElement(X.a,{container:!0,spacing:1},a?ie():ce(f,m,t,l))))}var se=a(812);function ue(){var e=Object(z.useQuery)("loadSensorValues",N,{refetchInterval:6e4}),t=e.data,a=void 0===t?{items:[],lastUpdated:new Date}:t,n=e.isLoading;return r.a.createElement(se.a,{maxWidth:"sm"},r.a.createElement(le,{sensorData:a,isLoading:n}),r.a.createElement(te,{sensorData:a,isLoading:n}))}var me=a(823),de=a(821),fe=a(822),Ee=a(603),ge=a(599),pe=a.n(ge),ve=a(600),he=a(601),be=a(187),ye=a.n(be),Se=a(815),we=a(818),ke=a(816),Ce=a(826),Oe=a(817),xe=a(827),je=a(813),De=a(814),Ie=a(186),Le=a.n(Ie),Ne={1:"1 hour",2:"2 hours",4:"4 hours",24:"24 hours"},ze=[1,2,4,24];function We(e){var t=e.eventsList,a=e.handleClickEvents,n=e.sensorMutation,o=e.sensor,i=g.a[400],l=function(e){var t=new Date(0);return t.setUTCSeconds(e/1e3),t.toLocaleTimeString()},f=r.a.useState(1),p=Object(c.a)(f,2),v=p[0],h=p[1],b=r.a.useRef(null),k=r.a.useState(!1),C=Object(c.a)(k,2),O=C[0],x=C[1];r.a.useEffect((function(){O||h(1)}),[1,O]);var j=(new Date).getTime(),D=o.snoozeUntil||0>j?i:"black",I=t[0],L=Object(he.a)(t).reverse()[0],N=function(e){return e.snoozeUntil||0};return r.a.createElement(r.a.Fragment,null,r.a.createElement(xe.a,null,r.a.createElement(je.a,{expandIcon:r.a.createElement(Le.a,null),"aria-controls":"content",id:"header"},r.a.createElement(X.a,{container:!0,spacing:0,alignItems:"center"},r.a.createElement(X.a,{item:!0,xs:11},r.a.createElement(m.a,{primary:I.name,secondary:l(L.timestamp)})),r.a.createElement(X.a,{item:!0,xs:1},r.a.createElement(ye.a,{style:{color:D},onClick:function(e){e.stopPropagation(),x(!0)},onFocus:function(e){return e.stopPropagation()}})))),r.a.createElement(De.a,null,r.a.createElement(y.a,null,r.a.createElement(d.d,{collection:t,iteratee:function(e){return r.a.createElement(u.a,{button:!0,onClick:a,key:"".concat(e.sensorId,"-").concat(e.timestamp)},r.a.createElement(m.a,{secondary:l(e.timestamp),primary:e.message}))}})))),r.a.createElement(w.a,{disableBackdropClick:!0,disableEscapeKeyDown:!0,maxWidth:"xs",onEntering:function(){null!=b.current&&console.log("handleEntering",typeof b.current)},"aria-labelledby":"confirmation-dialog-title",open:O},r.a.createElement(S.a,{id:"confirmation-dialog-title"},"Snooze For"),r.a.createElement(Se.a,{dividers:!0},N(o)>j&&"Active again ".concat(s()(N(o)).fromNow(),"."),r.a.createElement(ke.a,{ref:b,"aria-label":"snooze-for",name:"snooze-for",value:v,onChange:function(e){h(parseInt(e.target.value))}},ze.map((function(e){return r.a.createElement(Oe.a,{value:e,key:e,control:r.a.createElement(Ce.a,null),label:Ne[e]})})))),r.a.createElement(we.a,null,r.a.createElement(E.a,{autoFocus:!0,onClick:function(){x(!1)},color:"primary"},"Cancel"),r.a.createElement(E.a,{onClick:function(){x(!1),n.mutate({sensorId:t[0].sensorId,snoozeUntil:(new Date).getTime()+1e3*v*60*60})},color:"primary"},"Ok"))))}var Fe=function(){return r.a.createElement(X.a,{container:!0,spacing:1,alignItems:"center"},r.a.createElement(d.d,{collection:[1,2,3],iteratee:function(e){return r.a.createElement(X.a,{item:!0,xs:12},r.a.createElement(W.a,{key:e,variant:"rect",width:309,height:80}))}}))};function Me(e){var t=e.onClose,a=r.a.useState(!1),n=Object(c.a)(a,2),o=n[0],i=n[1],l=function(){i(!1),t()},s=Object(z.useQuery)("loadNotificationEvents",(function(){return D("reloadData"),fetch("https://pskgmzrgz2.execute-api.us-east-1.amazonaws.com/dev/sensorNotificationEvents").then((function(e){return e.json()})).catch((function(e){console.error("ERROR",e)}))}),{refetchInterval:6e4}),u=s.data,m=void 0===u?[]:u,f=s.isLoading,E=Object(z.useQueryClient)(),g=Object(z.useQuery)("loadSensors",Z).data,p=Object(z.useMutation)(Y,{onSuccess:function(){E.invalidateQueries("loadSensors")}});return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{onClick:function(){i(!0)}},"Notification Events"),r.a.createElement(w.a,{onClose:l,"aria-labelledby":"simple-dialog-title",open:o,fullWidth:!0,maxWidth:"xs"},r.a.createElement(S.a,{id:"simple-dialog-title"},"Notification Events"),r.a.createElement(y.a,null,f&&Fe(),!f&&r.a.createElement(d.c,{collection:m,iteratee:function(e){return e.sensorId}},(function(e){return r.a.createElement(d.d,{collection:Object.keys(e),iteratee:function(t){return r.a.createElement(We,{eventsList:e[t],handleClickEvents:l,key:t,sensorMutation:p,sensor:g&&g.filter((function(e){return"".concat(e.sensorId)===t}))[0]})}})})))))}function Re(e){var t=e.onClose,a=r.a.useState(!1),n=Object(c.a)(a,2),o=n[0],i=n[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{onClick:function(){i(!0)}},"Application Logs"),r.a.createElement(w.a,{onClose:function(){i(!1),t()},"aria-labelledby":"simple-dialog-title",open:o,fullWidth:!0,maxWidth:"xs"},r.a.createElement(S.a,{id:"simple-dialog-title"},"Application Logs",r.a.createElement(re.a,{onClick:L})),r.a.createElement(y.a,null,r.a.createElement(d.d,{collection:I(),iteratee:function(e){return r.a.createElement(u.a,{key:e.id},r.a.createElement(m.a,{primary:e.message||e}))}}))))}var Ae=a(598),Te=a.n(Ae),Qe=a(93),Ue=a(762),Be=a(828),Ve=a(819),Pe=a(832);function Je(e){var t=e.sensorMutation,a=e.sensor,n=g.a[400],o=r.a.useState(a.isFavourite||!1),i=Object(c.a)(o,2),l=i[0],s=i[1],u=r.a.useState(a.notificationEnabled||!1),d=Object(c.a)(u,2),f=d[0],p=d[1],v=r.a.useState(a.settings),h=Object(c.a)(v,2),b=h[0],y=h[1],S=(new Date).getTime(),w=a.snoozeUntil||0>S?n:"black",k={maxLength:3,style:{width:"50px"}};return r.a.createElement(xe.a,null,r.a.createElement(je.a,{expandIcon:r.a.createElement(Le.a,null),"aria-controls":"content",id:"header"},r.a.createElement(X.a,{container:!0,spacing:0,alignItems:"center"},r.a.createElement(X.a,{item:!0,xs:11},r.a.createElement(m.a,{primary:a.name,secondary:a.sensorId})),r.a.createElement(X.a,{item:!0,xs:1},r.a.createElement(ye.a,{style:{color:w}})))),r.a.createElement(De.a,null,r.a.createElement(Ue.a,{style:{width:"100%"}},r.a.createElement(Oe.a,{control:r.a.createElement(Be.a,{checked:l,onChange:function(e){s(e.target.checked)}}),label:"Favourite"}),r.a.createElement(Oe.a,{control:r.a.createElement(Be.a,{checked:f,onChange:function(e){p(e.target.checked)}}),label:"Notifications"}),r.a.createElement(Ve.a,null),r.a.createElement("h3",null,"Settings"),b&&b.min&&r.a.createElement("div",null,r.a.createElement(Pe.a,{inputProps:k,label:"Min",defaultValue:b.min,onChange:function(e){y(Object(Qe.a)({},b,{min:parseInt(e.target.value||"1")}))}}),r.a.createElement(E.a,{onClick:function(){var e=Object(Qe.a)({},b);delete e.min,y(e)}},"X"))||r.a.createElement(E.a,{onClick:function(){var e=Object(Qe.a)({},b,{min:1});console.log("addMin",e),y(e)},color:"primary"},"Add min"),b&&b.max&&r.a.createElement("div",null,r.a.createElement(Pe.a,{inputProps:k,label:"Max",defaultValue:b.max,onChange:function(e){y(Object(Qe.a)({},b,{max:parseInt(e.target.value||"1")}))}}),r.a.createElement(E.a,{onClick:function(){var e=Object(Qe.a)({},b);delete e.max,y(e)}},"X"))||r.a.createElement(E.a,{onClick:function(){var e=Object(Qe.a)({},b,{max:1});console.log("addMax",e),y(e)},color:"primary"},"Add max"),r.a.createElement("br",null),r.a.createElement(Ve.a,null),r.a.createElement(E.a,{onClick:function(){t.mutate({sensorId:a.sensorId,isFavourite:l,notificationEnabled:f,settings:b})},color:"primary"},"Save"))))}var qe=a(820);function Ke(e){var t=e.onClose,a=r.a.useState(!1),o=Object(c.a)(a,2),i=o[0],l=o[1],s=r.a.useState(!0),u=Object(c.a)(s,2),m=u[0],f=u[1],E=Object(z.useQuery)("loadSensors",Z,{refetchInterval:6e4}).data,g=void 0===E?[]:E,p=Object(n.useMemo)((function(){return Te.a.sortBy(g,"name").filter((function(e){return m?e.notificationEnabled:!e.notificationEnabled}))}),[g,m]),v=Object(z.useQueryClient)(),h=Object(z.useMutation)(Y,{onSuccess:function(){v.invalidateQueries("loadSensors")}});return r.a.createElement(r.a.Fragment,null,r.a.createElement(C.a,{onClick:function(){l(!0)}},"Sensors"),r.a.createElement(w.a,{onClose:function(){l(!1),t()},"aria-labelledby":"simple-dialog-title",open:i,fullWidth:!0,maxWidth:"xs"},r.a.createElement(X.a,{container:!0,spacing:0,alignItems:"center"},r.a.createElement(X.a,{item:!0,xs:8},r.a.createElement(S.a,{id:"simple-dialog-title"},"Sensors")),r.a.createElement(X.a,{item:!0,xs:4},r.a.createElement(Oe.a,{control:r.a.createElement(qe.a,{checked:m,onChange:function(e){f(e.target.checked)}}),label:"Active"}))),r.a.createElement(y.a,null,r.a.createElement(d.d,{collection:p,iteratee:function(e){return r.a.createElement(Je,{key:e.sensorId,sensor:e,sensorMutation:h})}}))))}var Ge=Object(f.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},dialog2:{minWidth:"400px"}}}));function He(){var e=Ge(),t=r.a.useState(null),a=Object(c.a)(t,2),n=a[0],o=a[1],i=Boolean(n),l=function(){o(null),D("handleClose")};return r.a.createElement(r.a.Fragment,null,r.a.createElement(de.a,{position:"fixed",className:e.root},r.a.createElement(fe.a,null,r.a.createElement(Ee.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){o(e.currentTarget),D("handleMenu")}},r.a.createElement(pe.a,null)),r.a.createElement(ve.a,{id:"menu-appbar",anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"left"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"left"},open:i,onClose:l},r.a.createElement("div",null,r.a.createElement(Me,{onClose:l})),r.a.createElement("div",null,r.a.createElement(Re,{onClose:l})),r.a.createElement("div",null,r.a.createElement(Ke,{onClose:l}))))),r.a.createElement(fe.a,null))}var Xe=new z.QueryClient;var Ze=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ye(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(D("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(D("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var $e=function(e){for(var t="=".repeat((4-e.length%4)%4),a=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),n=window.atob(a),r=new Uint8Array(n.length),o=0;o<n.length;++o)r[o]=n.charCodeAt(o);return r}("BCBiWe3ds-oc2bXKvwDCZYUByuwOOjldeQJNAUTzWfwHH-ZGoIBEf7j70tpbCSq8wWlZlM7iwz9Dr506Iwsq4Yg");i.a.render(r.a.createElement((function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(z.QueryClientProvider,{client:Xe},r.a.createElement(me.a,null),r.a.createElement(He,null),r.a.createElement(ue,null)))}),null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/sentilojn",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/sentilojn","/").concat("service-worker.js");Ze?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ye(e,t)})).catch((function(){D("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){D("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Ye(t,e)}))}}(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.pushManager?e.pushManager.getSubscription().then((function(t){null===t?(D("No subscription detected, make a request."),e.pushManager.subscribe({applicationServerKey:$e,userVisibleOnly:!0}).then((function(e){var t;D("New subscription added."),t=e,fetch("".concat("https://3gzxlzr6d4.execute-api.us-east-1.amazonaws.com","/dev/subscription"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"},mode:"no-cors"})})).catch((function(e){"granted"!==Notification.permission?D("Permission was not granted."):console.error("An error ocurred during the subscription process.",e)}))):D("Existed subscription detected.")})):D("Push manager unavailable.")})).catch((function(e){console.error("An error ocurred during Service Worker registration.",e)}))}},[[624,1,2]]]);
//# sourceMappingURL=main.0a58327d.chunk.js.map