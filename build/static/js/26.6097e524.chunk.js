(this.webpackJsonpMac=this.webpackJsonpMac||[]).push([[26],{1015:function(e,t,a){"use strict";a.r(t);var c=a(22),n=a(23),r=a(15),i=a(12),l=a.n(i),o=a(0),s=a(29),j=a(36),d=a(142),u=a(476),b=a(548),h=a(966),x=a(551),O=a(666),p=a(556),m=a(546),f=a(907),v=a(89),g=a(217),w=a(631),y=a(216),S=a(141),C=a(214),_=a(41),P=a(91),z=a(1);t.default=function(){var e=Object(v.a)(),t=Object(y.a)().settings,a=Object(o.useState)([]),i=Object(r.a)(a,2),M=i[0],k=i[1],V=Object(_.a)().user,R=Object(s.g)();Object(o.useEffect)((function(){C.a.firestore().collection("staff").doc(V.id).get().then((function(e){"dealership_agent"===e.data().rank.id&&R("/dashboard")})),S.a.push({event:"page_view"}),C.a.firestore().collection("workshop_vehicles").get().then((function(e){var t=[];e.forEach((function(e){t.push(Object(n.a)(Object(n.a)({},e.data()),{},{id:e.id,avatar:P.a}))})),console.log(t),k(t)}))}),[]);var E=Object(o.useCallback)(Object(c.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{k([])}catch(t){console.error(t)}case 1:case"end":return e.stop()}}),e)}))),[e]);return Object(o.useEffect)((function(){E()}),[E]),Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(d.a,{children:Object(z.jsx)("title",{children:"Dashboard: Veh\xedculos | Mac Admin"})}),Object(z.jsx)(u.a,{sx:{backgroundColor:"background.default",minHeight:"100%",py:8},children:Object(z.jsxs)(b.a,{maxWidth:!!t.compact&&"xl",children:[Object(z.jsxs)(h.a,{container:!0,justifyContent:"space-between",spacing:3,children:[Object(z.jsxs)(h.a,{item:!0,children:[Object(z.jsx)(x.a,{color:"textPrimary",variant:"h5",children:"Lista de Veh\xedculos"}),Object(z.jsxs)(O.a,{"aria-label":"breadcrumb",separator:Object(z.jsx)(g.a,{fontSize:"small"}),sx:{mt:1},children:[Object(z.jsx)(p.a,{color:"textPrimary",component:j.b,to:"/dashboard",variant:"subtitle2",children:"Dashboard"}),Object(z.jsx)(x.a,{color:"textSecondary",variant:"subtitle2",children:"Veh\xedculos"})]})]}),Object(z.jsx)(h.a,{item:!0,children:Object(z.jsx)(u.a,{sx:{m:-1},children:Object(z.jsx)(m.a,{color:"primary",startIcon:Object(z.jsx)(w.a,{fontSize:"small"}),sx:{m:1},component:j.b,variant:"contained",to:"/dashboard/taller/vehiculos/crear",children:"Agregar Veh\xedculo"})})})]}),Object(z.jsx)(u.a,{sx:{mt:3},children:Object(z.jsx)(f.f,{customers:M})})]})})]})}},571:function(e,t,a){"use strict";var c=a(30),n=a(1),r=Object(c.a)(Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(n.jsx)("path",{fillRule:"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",clipRule:"evenodd"})}),"ArrowRight");t.a=r},581:function(e,t,a){"use strict";var c=a(30),n=a(1),r=Object(c.a)(Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(n.jsx)("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"})}),"Search");t.a=r},582:function(e,t,a){"use strict";var c=a(23),n=a(88),r=a(7),i=a(1),l=["color","children"],o=Object(r.a)("span")((function(e){var t=e.theme,a=e.styleProps,c=t.palette[a.color].main,n=t.palette[a.color].contrastText;return{alignItems:"center",backgroundColor:c,borderRadius:t.shape.borderRadius,color:n,cursor:"default",display:"inline-flex",flexGrow:0,flexShrink:0,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(11),fontWeight:t.typography.fontWeightMedium,justifyContent:"center",letterSpacing:.5,minWidth:20,paddingBottom:t.spacing(.5),paddingLeft:t.spacing(1),paddingRight:t.spacing(1),paddingTop:t.spacing(.5),textTransform:"uppercase",whiteSpace:"nowrap"}}));t.a=function(e){var t=e.color,a=void 0===t?"primary":t,r=e.children,s=Object(n.a)(e,l),j={color:a};return Object(i.jsx)(o,Object(c.a)(Object(c.a)({styleProps:j},s),{},{children:r}))}},584:function(e,t,a){"use strict";var c=a(30),n=a(1),r=Object(c.a)(Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(n.jsx)("path",{fillRule:"evenodd",d:"M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z",clipRule:"evenodd"})}),"Download");t.a=r},590:function(e,t,a){"use strict";var c=a(30),n=a(1),r=Object(c.a)(Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(n.jsx)("path",{d:"M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"})}),"DotsHorizontal");t.a=r},592:function(e,t,a){"use strict";var c=a(30),n=a(1),r=Object(c.a)(Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(n.jsx)("path",{fillRule:"evenodd",d:"M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z",clipRule:"evenodd"})}),"DocumentText");t.a=r},593:function(e,t,a){"use strict";var c=a(30),n=a(1),r=Object(c.a)(Object(n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:[Object(n.jsx)("path",{d:"M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"}),Object(n.jsx)("path",{d:"M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"})]}),"Duplicate");t.a=r},610:function(e,t,a){"use strict";var c=a(23),n=a(15),r=a(0),i=a(553),l=a(547),o=a(294),s=a(938),j=a(908),d=a(555),u=a(611),b=a(592),h=a(590),x=a(584),O=a(593),p=a(1),m=function(e){var t=Object(r.useRef)(null),a=Object(r.useState)(!1),m=Object(n.a)(a,2),f=m[0],v=m[1];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(i.a,{title:"More options",children:Object(p.jsx)(l.a,Object(c.a)(Object(c.a)({onClick:function(){v(!0)},ref:t},e),{},{children:Object(p.jsx)(h.a,{fontSize:"small"})}))}),Object(p.jsxs)(o.a,{anchorEl:t.current,anchorOrigin:{horizontal:"left",vertical:"top"},onClose:function(){v(!1)},open:f,PaperProps:{sx:{maxWidth:"100%",width:256}},transformOrigin:{horizontal:"left",vertical:"top"},children:[Object(p.jsxs)(s.a,{children:[Object(p.jsx)(j.a,{children:Object(p.jsx)(x.a,{fontSize:"small"})}),Object(p.jsx)(d.a,{primary:"Import"})]}),Object(p.jsxs)(s.a,{children:[Object(p.jsx)(j.a,{children:Object(p.jsx)(b.a,{fontSize:"small"})}),Object(p.jsx)(d.a,{primary:"Export"})]}),Object(p.jsxs)(s.a,{children:[Object(p.jsx)(j.a,{children:Object(p.jsx)(O.a,{fontSize:"small"})}),Object(p.jsx)(d.a,{primary:"Copy"})]}),Object(p.jsxs)(s.a,{children:[Object(p.jsx)(j.a,{children:Object(p.jsx)(u.a,{fontSize:"small"})}),Object(p.jsx)(d.a,{primary:"Archive"})]})]})]})};t.a=Object(r.memo)(m)},611:function(e,t,a){"use strict";var c=a(30),n=a(1),r=Object(c.a)(Object(n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:[Object(n.jsx)("path",{d:"M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"}),Object(n.jsx)("path",{fillRule:"evenodd",d:"M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z",clipRule:"evenodd"})]}),"Archive");t.a=r},631:function(e,t,a){"use strict";var c=a(30),n=a(1),r=Object(c.a)(Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(n.jsx)("path",{fillRule:"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z",clipRule:"evenodd"})}),"Plus");t.a=r},907:function(e,t,a){"use strict";a.d(t,"f",(function(){return E})),a.d(t,"e",(function(){return N})),a.d(t,"a",(function(){return X})),a.d(t,"c",(function(){return Z})),a.d(t,"d",(function(){return te})),a.d(t,"b",(function(){return re}));var c=a(23),n=a(88),r=a(15),i=a(0),l=a(36),o=a(549),s=a(476),j=a(529),d=a(671),u=a(730),b=a(546),h=a(1045),x=a(1049),O=a(1047),p=a(1048),m=a(1046),f=a(537),v=a(556),g=a(551),w=a(547),y=a(1034),S=a(571),C=a(581),_=a(144),P=a(213),z=a(1),M=["customers"],k=[{label:"M\xe1s recientes",value:"updatedAt|desc"},{label:"Menos recientes",value:"updatedAt|asc"},{label:"Total",value:"orders|desc"},{label:"Total",value:"orders|asc"}],V=function(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0},R=function(e,t){var a=t.split("|"),c=Object(r.a)(a,2),n=c[0],i=function(e,t){return"desc"===e?function(e,a){return V(e,a,t)}:function(e,a){return-V(e,a,t)}}(c[1],n),l=e.map((function(e,t){return[e,t]}));return l.sort((function(e,t){var a=i(e[0],t[0]);return 0!==a?a:e[1]-t[1]})),l.map((function(e){return e[0]}))},E=function(e){var t=e.customers,a=Object(n.a)(e,M),V=Object(i.useState)([]),E=Object(r.a)(V,2),B=E[0],T=E[1],A=Object(i.useState)(0),H=Object(r.a)(A,2),W=H[0],I=H[1],L=Object(i.useState)(5),D=Object(r.a)(L,2),q=D[0],F=D[1],J=Object(i.useState)(""),G=Object(r.a)(J,2),N=G[0],K=G[1],Q=Object(i.useState)(k[0].value),U=Object(r.a)(Q,2),X=U[0],Y=U[1],Z=Object(i.useState)({hasAcceptedMarketing:null,isProspect:null,isReturning:null}),$=Object(r.a)(Z,1)[0],ee=function(e,t,a){return e.filter((function(e){var c=!0;if(t){var n=!1;["brand_name","client_name","model_name","tag"].forEach((function(a){e[a].toLowerCase().includes(t.toLowerCase())&&(n=!0)})),n||(c=!1)}return Object.keys(a).forEach((function(t){var n=a[t];n&&e[t]!==n&&(c=!1)})),c}))}(t,N,$),te=function(e,t,a){return e.slice(t*a,t*a+a)}(R(ee,X),W,q),ae=B.length>0,ce=B.length>0&&B.length<t.length,ne=B.length===t.length;return Object(z.jsxs)(o.a,Object(c.a)(Object(c.a)({},a),{},{children:[Object(z.jsxs)(s.a,{sx:{alignItems:"center",display:"flex",flexWrap:"wrap",m:-1,p:2},children:[Object(z.jsx)(s.a,{sx:{m:1,maxWidth:"100%",width:500},children:Object(z.jsx)(j.a,{fullWidth:!0,InputProps:{startAdornment:Object(z.jsx)(d.a,{position:"start",children:Object(z.jsx)(C.a,{fontSize:"small"})})},onChange:function(e){K(e.target.value)},placeholder:"Buscar...",value:N,variant:"outlined"})}),Object(z.jsx)(s.a,{sx:{m:1,width:240},children:Object(z.jsx)(j.a,{label:"Ordenar Por",name:"sort",onChange:function(e){Y(e.target.value)},select:!0,SelectProps:{native:!0},value:X,variant:"outlined",children:k.map((function(e){return Object(z.jsx)("option",{value:e.value,children:e.label},e.value)}))})})]}),ae&&Object(z.jsx)(s.a,{sx:{position:"relative"},children:Object(z.jsxs)(s.a,{sx:{backgroundColor:"background.paper",mt:"6px",position:"absolute",px:"4px",width:"100%",zIndex:2},children:[Object(z.jsx)(u.a,{checked:ne,color:"primary",indeterminate:ce,onChange:function(e){T(e.target.checked?t.map((function(e){return e.id})):[])}}),Object(z.jsx)(b.a,{color:"primary",sx:{ml:2},variant:"outlined",children:"Delete"}),Object(z.jsx)(b.a,{color:"primary",sx:{ml:2},variant:"outlined",children:"Edit"})]})}),Object(z.jsx)(P.a,{children:Object(z.jsx)(s.a,{sx:{minWidth:700},children:Object(z.jsxs)(h.a,{children:[Object(z.jsx)(x.a,{children:Object(z.jsxs)(O.a,{children:[Object(z.jsx)(p.a,{children:"Modelo"}),Object(z.jsx)(p.a,{children:"Placa"}),Object(z.jsx)(p.a,{children:"Due\xf1o"}),Object(z.jsx)(p.a,{children:"Color"}),Object(z.jsx)(p.a,{align:"right",children:"Acciones"})]})}),Object(z.jsx)(m.a,{children:te.map((function(e){var t=B.includes(e.id);return Object(z.jsxs)(O.a,{hover:!0,selected:t,children:[Object(z.jsx)(p.a,{children:Object(z.jsxs)(s.a,{sx:{alignItems:"center",display:"flex"},children:[Object(z.jsx)(f.a,{src:e.logo,sx:{height:42,width:42},children:Object(_.a)(e.model_name)}),Object(z.jsxs)(s.a,{sx:{ml:1},children:[Object(z.jsx)(v.a,{color:"inherit",component:l.b,to:"/dashboard/taller/vehiculos/detalles/".concat(e.id),variant:"subtitle2",children:e.model_name}),Object(z.jsx)(g.a,{color:"textSecondary",variant:"body2",children:e.brand_name})]})]})}),Object(z.jsx)(p.a,{children:"".concat(e.tag)}),Object(z.jsx)(p.a,{children:"".concat(e.client_name)}),Object(z.jsx)(p.a,{children:e.color}),Object(z.jsx)(p.a,{align:"right",children:Object(z.jsx)(w.a,{component:l.b,to:"/dashboard/taller/vehiculos/detalles/".concat(e.id),children:Object(z.jsx)(S.a,{fontSize:"small"})})})]},e.id)}))})]})})}),Object(z.jsx)(y.a,{component:"div",count:ee.length,onPageChange:function(e,t){I(t)},onRowsPerPageChange:function(e){F(parseInt(e.target.value,10))},page:W,rowsPerPage:q,rowsPerPageOptions:[5,10,25]})]}))},B=a(22),T=a(12),A=a.n(T),H=a(29),W=a(143),I=a(61),L=a(114),D=a(966),q=a(550),F=a(937),J=a(545),G=a(214),N=function(e){var t=Object(H.g)(),a=Object(i.useState)([]),n=Object(r.a)(a,2),l=n[0],d=n[1],u=Object(i.useState)([]),h=Object(r.a)(u,2),x=h[0],O=h[1],p=Object(i.useState)([{value:"",name:""}]),m=Object(r.a)(p,2),f=m[0],v=m[1],g=Object(i.useState)([]),w=Object(r.a)(g,2),y=w[0],S=w[1],C=Object(i.useState)(!1),_=Object(r.a)(C,2),P=_[0],M=_[1];return Object(i.useEffect)((function(){var e=[{id:"",name:"",vehicles_count:0}];G.a.firestore().collection("dealership_brands").get().then((function(t){var a=[{id:"",name:"",vehicles_count:0}];t.forEach((function(t){a.push(Object(c.a)(Object(c.a)({},t.data()),{},{id:t.id})),G.a.firestore().collection("dealership_brands").doc(t.id).collection("models").get().then((function(a){a.forEach((function(a){e.push(Object(c.a)(Object(c.a)({},a.data()),{},{id:a.id,idBrand:t.id,nameBrand:t.data().name}))})),O(e)}))})),d(a)})),G.a.firestore().collection("data").doc("color").get().then((function(e){var t=[];t.push({id:"",value:""}),e.data().data.forEach((function(e){t.push(e)})),S(t.sort((function(e,t){return e.value.localeCompare(t.value)})))})).catch((function(e){console.log(e)})),G.a.firestore().collection("workshop_clients").get().then((function(e){var t=[];e.forEach((function(e){t.push({value:e.id,text:e.data().name})})),v(t)})).catch((function(e){console.log(e)}))}),[]),Object(z.jsx)(L.a,{initialValues:{brand:"",model:"",tag:"",color:"",client_id:"",client_name:""},validationSchema:I.f().shape({brand:I.h().max(255).required("La marca es obligatoria"),model:I.h().max(255).required("El modelo es obligatorio"),tag:I.h().max(255).required("La placa es obligatoria"),color:I.h().max(255).required("El color es obligatorio"),client_id:I.h().max(255).required("El cliente es obligatorio"),client_name:I.h().max(255).required("El cliente es obligatorio")}),onSubmit:function(){var e=Object(B.a)(A.a.mark((function e(a,c){var n,r,i,o,s,j;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.setErrors,r=c.setStatus,i=c.setSubmitting,e.prev=1,i(!0),M(!0),o=l.filter((function(e){return e.id===a.brand})),a.brand_name=o[0].name,a.logo=o[0].logo,s=x.filter((function(e){return e.id===a.model})),a.model_name=s[0].name,a.date={registered:"",lastActivity:""},a.owner=[],a.date.registered=G.a.firestore.FieldValue.serverTimestamp(),a.date.lastActivity=G.a.firestore.FieldValue.serverTimestamp(),a.owner.push(a.client_id),a.tag=a.tag.toString(),j="",G.a.firestore().collection("workshop_vehicles").add(a).then((function(e){return j=e.id,G.a.firestore().collection("workshop_clients").doc(a.client_id)})).then((function(e){return console.log(""),e.get()})).then((function(e){var t=e.data().vehicles;return t.push(j),t})).then((function(e){return console.log(""),G.a.firestore().collection("workshop_clients").doc(a.client_id).update({vehicles:e})})).then((function(){return W.b.success("Vehiculo Registrado","Se agrego correctamente el veh\xedculo a ".concat(a.client_name," exitosamente!")),t("/dashboard/taller/vehiculos"),M(!1),!0})),e.abrupt("return",!0);case 20:return e.prev=20,e.t0=e.catch(1),console.error(e.t0),W.b.error("Something went wrong!"),r({success:!1}),n({submit:e.t0.message}),i(!1),M(!1),e.abrupt("return",!0);case 29:case"end":return e.stop()}}),e,null,[[1,20]])})));return function(t,a){return e.apply(this,arguments)}}(),children:function(t){var a=t.errors,n=t.handleBlur,r=t.handleChange,i=t.handleSubmit,d=t.setFieldValue,u=t.touched,h=t.values;return Object(z.jsx)("form",Object(c.a)(Object(c.a)({onSubmit:i},e),{},{children:Object(z.jsxs)(D.a,{container:!0,spacing:3,children:[Object(z.jsx)(D.a,{item:!0,lg:12,md:12,xs:12,children:Object(z.jsx)(o.a,{children:Object(z.jsx)(q.a,{children:Object(z.jsxs)(D.a,{container:!0,spacing:3,children:[Object(z.jsx)(D.a,{item:!0,md:6,xs:12,children:Object(z.jsx)(j.a,{fullWidth:!0,error:Boolean(u.brand&&a.brand),label:"Marca",helperText:u.brand&&a.brand,name:"brand",onChange:r,select:!0,SelectProps:{native:!0},value:h.brand,variant:"outlined",children:l.map((function(e){return Object(z.jsx)("option",{value:e.id,children:e.name},e.id)}))})}),Object(z.jsx)(D.a,{item:!0,md:6,xs:12,children:Object(z.jsxs)(j.a,{fullWidth:!0,error:Boolean(u.model&&a.model),label:"Modelo",helperText:u.model&&a.model,name:"model",onChange:r,select:!0,SelectProps:{native:!0},value:h.model,variant:"outlined",children:[Object(z.jsx)("option",{value:null,children:""}),x.filter((function(e){return e.idBrand===h.brand})).map((function(e){return Object(z.jsx)("option",{value:e.id,children:e.name},e.id)}))]})}),Object(z.jsx)(D.a,{item:!0,md:6,xs:12,children:Object(z.jsx)(j.a,{error:Boolean(u.tag&&a.tag),fullWidth:!0,helperText:u.tag&&a.tag,label:"Placa",name:"tag",type:"text",onBlur:n,onChange:r,value:h.tag,variant:"outlined"})}),Object(z.jsx)(D.a,{item:!0,md:6,xs:12,children:Object(z.jsx)(j.a,{fullWidth:!0,error:Boolean(u.color&&a.color),label:"Color",helperText:u.color&&a.color,name:"color",onChange:r,select:!0,SelectProps:{native:!0},value:h.color,variant:"outlined",children:y.map((function(e){return Object(z.jsx)("option",{value:e.value,children:e.value},e.id)}))})}),Object(z.jsx)(D.a,{item:!0,md:12,xs:12,children:Object(z.jsx)(F.a,{getOptionLabel:function(e){return e.text},isOptionEqualToValue:function(e,t){return e.value===t.value},onChange:function(e,t){d("client_id",t.value),d("client_name",t.text)},options:f,renderInput:function(e){return Object(z.jsx)(j.a,Object(c.a)({error:Boolean(u.client_id&&a.client_id),fullWidth:!0,label:"Cliente",helperText:u.client_id&&a.client_id,name:"client_id",variant:"outlined"},e))}})})]})})})}),Object(z.jsxs)(D.a,{item:!0,lg:2,md:2,xs:12,children:[a.submit&&Object(z.jsx)(s.a,{sx:{mt:3},children:Object(z.jsx)(J.a,{error:!0,children:a.submit})}),Object(z.jsx)(s.a,{sx:{display:"flex",justifyContent:"flex-end",mt:3},children:Object(z.jsx)(b.a,{color:"primary",disabled:P,type:"submit",variant:"contained",children:"Registrar Veh\xedculo"})})]})]})}))}})},K=a(736),Q=a(552),U=["model","brand","tag","email","color"],X=function(e){var t=e.model,a=e.brand,r=e.tag,i=(e.email,e.color),l=Object(n.a)(e,U);return Object(z.jsxs)(o.a,Object(c.a)(Object(c.a)({},l),{},{children:[Object(z.jsx)(K.a,{title:"Veh\xedculo"}),Object(z.jsx)(Q.a,{}),Object(z.jsx)(h.a,{children:Object(z.jsxs)(m.a,{children:[Object(z.jsxs)(O.a,{children:[Object(z.jsx)(p.a,{children:Object(z.jsx)(g.a,{color:"textPrimary",variant:"subtitle2",children:"Modelo"})}),Object(z.jsx)(p.a,{children:Object(z.jsx)(g.a,{color:"textSecondary",variant:"body2",children:t})})]}),Object(z.jsxs)(O.a,{children:[Object(z.jsx)(p.a,{children:Object(z.jsx)(g.a,{color:"textPrimary",variant:"subtitle2",children:"Marca"})}),Object(z.jsx)(p.a,{children:Object(z.jsx)(g.a,{color:"textSecondary",variant:"body2",children:a})})]}),Object(z.jsxs)(O.a,{children:[Object(z.jsx)(p.a,{children:Object(z.jsx)(g.a,{color:"textPrimary",variant:"subtitle2",children:"Placa"})}),Object(z.jsx)(p.a,{children:Object(z.jsx)(g.a,{color:"textSecondary",variant:"body2",children:r})})]}),Object(z.jsxs)(O.a,{children:[Object(z.jsx)(p.a,{children:Object(z.jsx)(g.a,{color:"textPrimary",variant:"subtitle2",children:"Color"})}),Object(z.jsx)(p.a,{children:Object(z.jsx)(g.a,{color:"textSecondary",variant:"body2",children:i})})]})]})})]}))},Y=["name","email","identification","rating"],Z=function(e){var t=e.name,a=e.email,r=e.identification,i=e.rating,l=Object(n.a)(e,Y);return Object(z.jsxs)(o.a,Object(c.a)(Object(c.a)({},l),{},{children:[Object(z.jsx)(K.a,{title:"Clientes"}),Object(z.jsx)(Q.a,{}),Object(z.jsx)(h.a,{children:Object(z.jsxs)(m.a,{children:[Object(z.jsxs)(O.a,{children:[Object(z.jsx)(p.a,{children:Object(z.jsx)(g.a,{color:"textPrimary",variant:"subtitle2",children:"Nombre"})}),Object(z.jsx)(p.a,{children:Object(z.jsx)(g.a,{color:"textSecondary",variant:"body2",children:t})})]}),Object(z.jsxs)(O.a,{children:[Object(z.jsx)(p.a,{children:Object(z.jsx)(g.a,{color:"textPrimary",variant:"subtitle2",children:"Email"})}),Object(z.jsx)(p.a,{children:Object(z.jsx)(g.a,{color:"textSecondary",variant:"body2",children:a})})]}),Object(z.jsxs)(O.a,{children:[Object(z.jsx)(p.a,{children:Object(z.jsx)(g.a,{color:"textPrimary",variant:"subtitle2",children:"ID"})}),Object(z.jsx)(p.a,{children:Object(z.jsx)(g.a,{color:"textSecondary",variant:"body2",children:r})})]}),Object(z.jsxs)(O.a,{children:[Object(z.jsx)(p.a,{children:Object(z.jsx)(g.a,{color:"textPrimary",variant:"subtitle2",children:"Rating"})}),Object(z.jsx)(p.a,{children:Object(z.jsx)(g.a,{color:"textSecondary",variant:"body2",children:i})})]})]})})]}))},$=a(582),ee=a(610),te=function(e){var t=e.orders,a=e.statusOptions;return Object(z.jsxs)(o.a,Object(c.a)(Object(c.a)({},e),{},{children:[Object(z.jsx)(K.a,{action:Object(z.jsx)(ee.a,{}),title:"Ordenes"}),Object(z.jsx)(Q.a,{}),Object(z.jsx)(P.a,{children:Object(z.jsx)(s.a,{sx:{minWidth:1150},children:Object(z.jsxs)(h.a,{children:[Object(z.jsx)(x.a,{children:Object(z.jsxs)(O.a,{children:[Object(z.jsx)(p.a,{children:"Modelo"}),Object(z.jsx)(p.a,{children:"Placa"}),Object(z.jsx)(p.a,{children:"Due\xf1o"}),Object(z.jsx)(p.a,{children:"Empleado"}),Object(z.jsx)(p.a,{children:"Status"}),Object(z.jsx)(p.a,{children:"\xdaltima Actividad"}),Object(z.jsx)(p.a,{align:"right",children:"Actions"})]})}),Object(z.jsx)(m.a,{children:t.map((function(e){return Object(z.jsxs)(O.a,{children:[Object(z.jsx)(p.a,{children:e.model_name}),Object(z.jsx)(p.a,{children:e.tag}),Object(z.jsx)(p.a,{children:e.client_name}),Object(z.jsx)(p.a,{children:e.employee}),Object(z.jsxs)(p.a,{children:[parseInt(e.status,10)!==a.length-1&&parseInt(e.status,10)!==a.length-2&&Object(z.jsx)($.a,{color:"primary",children:a[e.status]}),parseInt(e.status,10)===a.length-1&&Object(z.jsx)($.a,{color:"success",children:a[e.status]}),parseInt(e.status,10)===a.length-2&&Object(z.jsx)($.a,{color:"success",children:a[e.status]})]}),Object(z.jsx)(p.a,{children:new Date(1e3*e.date.lastActivity.seconds).toLocaleString()}),Object(z.jsx)(p.a,{align:"right",children:Object(z.jsx)(w.a,{component:l.b,to:"/dashboard/taller/ordenes/detalles/".concat(e.id),children:Object(z.jsx)(S.a,{fontSize:"small"})})})]},e.id)}))})]})})}),Object(z.jsx)(y.a,{component:"div",count:t.length,onPageChange:function(){},onRowsPerPageChange:function(){},page:0,rowsPerPage:5,rowsPerPageOptions:[5,10,25]})]}))},ae=a(30),ce=Object(ae.a)(Object(z.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(z.jsx)("path",{d:"M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z"})}),"Save"),ne=["idVehicle","idClient","clientsOptions","vehiclesClient","vehiclesOwner"],re=function(e){var t=e.idVehicle,a=e.idClient,l=e.clientsOptions,d=e.vehiclesClient,u=e.vehiclesOwner,h=Object(n.a)(e,ne),x=Object(i.useState)(""),O=Object(r.a)(x,2),p=O[0],m=O[1];Object(i.useEffect)((function(){}),[]);var f=function(){var e=Object(B.a)(A.a.mark((function e(){var c,n,r,i;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),console.log(a),console.log(p),c=l.find((function(e){return e.id===p})),console.log(c),n=G.a.firestore().collection("workshop_clients").doc(a),r=G.a.firestore().collection("workshop_clients").doc(p),i=G.a.firestore().collection("workshop_vehicles").doc(t),e.next=10,G.a.firestore().runTransaction((function(e){return console.log(""),e.get(r).then(function(){var a=Object(B.a)(A.a.mark((function a(l){var o,s;return A.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:o=l.data().vehicles,s=[],d.forEach((function(e){t!==e&&s.push(e)})),o.push(t),u.push(p),e.update(r,{vehicles:o}),e.update(n,{vehicles:s}),e.update(i,{client_id:p,client_name:c.name,owner:u});case 8:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}())})).then((function(){W.b.success("Veh\xedculo Traspasado exitosamente!")})).catch((function(){return W.b.error("Ha ocurrido un error!")}));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(z.jsxs)(o.a,Object(c.a)(Object(c.a)({},h),{},{children:[Object(z.jsx)(K.a,{title:"Traspasar Veh\xedculo"}),Object(z.jsx)(Q.a,{}),Object(z.jsx)(q.a,{children:Object(z.jsxs)(s.a,{children:[Object(z.jsx)(j.a,{fullWidth:!0,name:"option",onChange:function(e){return m(e.target.value)},select:!0,SelectProps:{native:!0},value:p,variant:"outlined",children:l.map((function(e){return Object(z.jsx)("option",{value:e.id,children:e.name},e.id)}))}),Object(z.jsx)(s.a,{sx:{mt:2},children:Object(z.jsx)(b.a,{color:"primary",startIcon:Object(z.jsx)(ce,{fontSize:"small"}),variant:"contained",onClick:function(){return f()},children:"Traspasar"})})]})})]}))}}}]);
//# sourceMappingURL=26.6097e524.chunk.js.map