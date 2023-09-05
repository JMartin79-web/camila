"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[474],{1857:function(e,t,r){r.d(t,{Z:function(){return s}});var a=r(5893),i=r(5348),o=r(98),n=r(6501),l=r(3485);function s(e){let{children:t}=e,{logout:r,isLoading:s}=(0,i.Z)();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Z,{isLoading:s}),(0,a.jsx)(n.x7,{}),(0,a.jsxs)("div",{className:"min-h-screen bg-gray-100 text-black p-6",children:[(0,a.jsx)(l.Z,{style:"flex gap-2"}),(0,a.jsx)("button",{className:"absolute right-5 top-4 bg-tourBrown text-white px-4 py-2 rounded hover:opacity-50",onClick:r,children:"Logout"}),t]})]})}},3485:function(e,t,r){r.d(t,{Z:function(){return u}});var a=r(5893),i={src:"/_next/static/media/es.7aeb0cc2.svg",height:100,width:100,blurWidth:0,blurHeight:0},o={src:"/_next/static/media/en.6f59f40a.svg",height:100,width:100,blurWidth:0,blurHeight:0},n={src:"/_next/static/media/port.c944f3e2.svg",height:100,width:100,blurWidth:0,blurHeight:0},l=r(5675),s=r.n(l),d=r(1163);function u(e){let{style:t,handleLangauge:r=console.log}=e,{pathname:l,push:u}=(0,d.useRouter)(),c=e=>{"/"===l?r(e):u("/admin/dashboard-"+e)};return(0,a.jsxs)("div",{className:t,children:[(0,a.jsx)("button",{className:"hover:opacity-50",onClick:()=>c("en"),children:(0,a.jsx)(s(),{src:o,alt:"english",width:25,height:25})}),(0,a.jsx)("button",{className:"hover:opacity-50",onClick:()=>c("es"),children:(0,a.jsx)(s(),{src:i,alt:"espa\xf1ol",width:25,height:25})}),(0,a.jsx)("button",{className:"hover:opacity-50",onClick:()=>c("port"),children:(0,a.jsx)(s(),{src:n,alt:"portugues",width:25,height:25})})]})}},98:function(e,t,r){r.d(t,{Z:function(){return i}});var a=r(5893);function i(e){let{isLoading:t}=e;return t?(0,a.jsx)("div",{className:"fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50",children:(0,a.jsx)("div",{className:"animate-spin rounded-full h-16 w-16 border-t-4 border-r-4 border-tourBrown"})}):null}},3508:function(e,t,r){r.d(t,{Z:function(){return d}});var a=r(5893),i=r(7294),o=r(2865),n=r(9729),l=r(6501),s=r(4762);function d(e){let{collection:t,refetch:r}=e,d=(0,i.useRef)(null),u=(0,i.useRef)(null),c=(0,i.useRef)(null),p=(0,i.useRef)(null),f=(0,i.useRef)(null),m=(0,i.useRef)(null),[h,g]=(0,i.useState)([]),[x,v]=(0,i.useState)([]),b=e=>{let t=x.filter(t=>t.name!==e),r=h.filter(t=>t.name!==e);g(r),v(t)},y=async e=>{var a,i,s,x,b,y,w,j;if(e.preventDefault(),!h.length)return(0,l.Am)("Deberia subir minimo una Imagen!");l.Am.loading("Cargando...",{position:"top-center",duration:2e3});let N=[];for(let e=0;e<h.length;e++){let t=await (0,o.u)(h[e],"tour-images");N.push(t)}await (0,n.l)(t,{content:null==u?void 0:null===(a=u.current)||void 0===a?void 0:a.value.split("\n").join("<br/>"),title:null==c?void 0:null===(i=c.current)||void 0===i?void 0:i.value,price:null==p?void 0:null===(x=p.current)||void 0===x?void 0:null===(s=x.value.split("\n"))||void 0===s?void 0:s.join("<br/>"),schedule:null==f?void 0:null===(b=f.current)||void 0===b?void 0:b.value,moreInfo:null==m?void 0:null===(j=m.current)||void 0===j?void 0:null===(w=j.value)||void 0===w?void 0:null===(y=w.split("\n"))||void 0===y?void 0:y.join("<br/>"),images:N}),setTimeout(()=>{var e;g([]),v([]),null==d||null===(e=d.current)||void 0===e||e.reset()},1500),r()};return(0,a.jsxs)("form",{className:"flex flex-col gap-4 my-4",ref:d,onSubmit:y,children:[(0,a.jsx)("h2",{className:"text-lg font-semibold text-left",children:"Nuevo Tour:"}),(0,a.jsx)("input",{ref:c,className:"",placeholder:"Tour",required:!0}),(0,a.jsx)("input",{ref:f,className:"",placeholder:"Horario",required:!0}),(0,a.jsx)("textarea",{ref:u,placeholder:"Informacion de Tour",rows:8,required:!0}),(0,a.jsx)("textarea",{ref:p,placeholder:"Precio",rows:2,required:!0}),(0,a.jsx)("textarea",{ref:m,placeholder:"Mas Informacion (optional)",rows:6}),(0,a.jsxs)("div",{children:[null==x?void 0:x.map(e=>{let{name:t,img:r}=e;return(0,a.jsxs)("div",{className:"relative w-fit",children:[(0,a.jsx)("img",{className:"my-2 rounded max-w-[500px]",src:r,alt:""}),(0,a.jsx)("button",{type:"button",onClick:()=>b(t),className:"bg-red-600 text-white px-4 py-2 rounded hover:opacity-50 my-2 absolute top-2 right-3",children:"\xd7"})]},t)}),(0,a.jsx)(s.Z,{handleImgAdd:e=>{var t;let r=null==e?void 0:null===(t=e.target)||void 0===t?void 0:t.files;if(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t]);g(t=>[...t,...e]),(0,o.N)([...e],v)}}}),(0,a.jsx)("center",{children:(0,a.jsx)("button",{type:"submit",className:"bg-green-500 hover:bg-green-300 my-4 text-white px-4 py-2 rounded",children:"Guardar Tour"})})]})]})}},7889:function(e,t,r){r.d(t,{Z:function(){return l}});var a=r(5893),i=r(9729),o=r(7294),n=r(5538);function l(e){let{collection:t,docId:r,aboutHeader:l,aboutText:s,whatsappNum:d}=e,u=(0,o.useRef)(null),c=(0,o.useRef)(null),p=(0,o.useRef)(null),f=async e=>{e.preventDefault(),await (0,i.o)(t,r,{aboutTitle:u.current.value.split("\n").join("<br/>"),aboutUsInfo:c.current.value.split("\n").join("<br/>"),whatsapp:p.current.value})};return(0,a.jsxs)("form",{onSubmit:f,className:"flex flex-col gap-4 mt-8",children:[(0,a.jsx)("textarea",{ref:u,defaultValue:null==l?void 0:l.split("<br/>").join("\n"),placeholder:"Titulo",rows:2,required:!0}),(0,a.jsx)("textarea",{ref:c,defaultValue:null==s?void 0:s.split("<br/>").join("\n"),placeholder:"Sobre nosotros",rows:8,required:!0}),(0,a.jsxs)("div",{className:"flex gap-4 items-center",children:[(0,a.jsx)("input",{ref:p,className:"grow",defaultValue:d,placeholder:"whatsapp",required:!0}),(0,a.jsx)(n.Z,{children:"Guardar Cambios"})]})]})}},5538:function(e,t,r){r.d(t,{Z:function(){return i}});var a=r(5893);function i(e){let{children:t}=e;return(0,a.jsxs)("button",{className:"bg-green-500 text-white px-4 py-2 w-fit rounded hover:opacity-50",type:"submit",children:[(0,a.jsx)("p",{className:"hidden sm:block text-white",children:t}),(0,a.jsx)("span",{className:"sm:hidden",children:(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("path",{d:"M19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21Z"}),(0,a.jsx)("path",{d:"M17 3V12H7V3"}),(0,a.jsx)("path",{d:"M7 21V16H17V21"})]})})]})}},7268:function(e,t,r){r.d(t,{Z:function(){return g}});var a=r(5893),i=r(6476),o=r(7294),n=r(6501),l=r(9729),s=r(2865),d=r(9828),u=r(7309),c=r(6650);let p=async e=>{try{let t=(0,c.iH)(u.t,e);await (0,c.oq)(t)}catch(e){console.log("there was an error with your request")}},f=async(e,t,r)=>{let a=confirm("Estas seguro de elminiar?");if(a)try{if(r)for(let e=0;e<r.length;e++)await p(r[e]);let a=(0,d.JU)(u.db,e,t);await (0,d.oe)(a),(0,n.Am)("Actaulizacion Finalizada",{style:{backgroundColor:"rgb(34 197 94)",color:"white"}})}catch(e){(0,n.Am)("Ocurrio un error, intente mas tarde!",{style:{backgroundColor:"red",color:"white"}})}};var m=r(4762),h=r(5538);function g(e){var t;let{title:r,images:d,schedule:u,content:c,price:g,moreInfo:x,id:v,collection:b,handleDeleteTour:y}=e,{boolValue:w,toggle:j}=(0,i.Z)(!1),N=(0,o.useRef)(null),k=(0,o.useRef)(null),C=(0,o.useRef)(null),E=(0,o.useRef)(null),I=(0,o.useRef)(null),[A,Z]=(0,o.useState)(d),[S,H]=(0,o.useState)([]),[R,z]=(0,o.useState)([]),T=(e,t)=>{if(confirm("Estas Seguro de Eliminar esta Imagen?")){if(e){let t=R.filter(t=>t.name!==e),r=S.filter(t=>t.name!==e);H(r),z(t)}else{let e=A.filter(e=>e!==t);Z(e)}}},$=async e=>{var t,r,a,i,o,u,c,f;if(e.preventDefault(),!A.length&&!S.length)return(0,n.Am)("Deberia tener minimo una Imagen!");let m=[];if(S.length)for(let e=0;e<S.length;e++){let t=await (0,s.u)(S[e],"tour-images");m.push(t)}for(let e=0;e<d.length;e++)A.includes(d[e])||await p(d[e]);await (0,l.o)(b,v,{title:null==k?void 0:null===(t=k.current)||void 0===t?void 0:t.value,schedule:null==E?void 0:null===(r=E.current)||void 0===r?void 0:r.value,content:null==N?void 0:null===(a=N.current)||void 0===a?void 0:a.value.split("\n").join("<br/>"),price:null==C?void 0:null===(o=C.current)||void 0===o?void 0:null===(i=o.value.split("\n"))||void 0===i?void 0:i.join("<br/>"),moreInfo:null==I?void 0:null===(f=I.current)||void 0===f?void 0:null===(c=f.value)||void 0===c?void 0:null===(u=c.split("\n"))||void 0===u?void 0:u.join("<br/>"),images:[...A,...m]})};return(0,a.jsxs)("form",{onSubmit:$,children:[(0,a.jsxs)("span",{className:"flex gap-4 my-4",children:[(0,a.jsx)("input",{placeholder:"Titulo",className:"grow",defaultValue:r,ref:k,required:!0}),(0,a.jsx)("button",{type:"button",className:"bg-red-600 text-white px-3 pb-1 text-2xl rounded hover:opacity-50",onClick:async()=>{await f(b,v,d),y(v)},children:"\xd7"}),(0,a.jsx)("button",{type:"button",className:"flex items-center bg-white text-black px-4 pt-2 border-slate-300 \n                    w-fit border-2 rounded hover:opacity-50 ".concat(w?"rotate-180":""),onClick:j,children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,a.jsx)("polyline",{points:"6 9 12 15 18 9"})})}),(0,a.jsx)(h.Z,{children:"Guardar Cambios"})]}),w&&(0,a.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,a.jsx)("input",{ref:E,className:"",placeholder:"Horario",defaultValue:u,required:!0}),(0,a.jsx)("textarea",{ref:N,defaultValue:c.split("<br/>").join("\n"),placeholder:"Informacion de Tour",rows:8,required:!0}),(0,a.jsx)("textarea",{ref:C,placeholder:"Precio",defaultValue:g.split("<br/>").join("\n"),rows:2,required:!0}),(0,a.jsx)("textarea",{ref:I,placeholder:"Mas Informacion (optional)",defaultValue:x?null==x?void 0:null===(t=x.split("<br/>"))||void 0===t?void 0:t.join("\n"):"",rows:6}),(0,a.jsxs)("div",{className:"flex gap-4 flex-wrap",children:[null==A?void 0:A.map(e=>(0,a.jsxs)("div",{className:"relative w-fit",children:[(0,a.jsx)("button",{type:"button",className:"bg-red-600 text-white px-4 py-2 rounded hover:opacity-50 absolute top-2 right-3",onClick:()=>T(void 0,e),children:"Eliminar"}),(0,a.jsx)("img",{className:"max-w-[500px] rounded",src:e,alt:""})]},e)),null==R?void 0:R.map(e=>{let{name:t,img:r}=e;return(0,a.jsxs)("div",{className:"relative w-fit",children:[(0,a.jsx)("img",{className:"max-w-[500px] rounded",src:r,alt:""}),(0,a.jsx)("button",{type:"button",onClick:()=>T(t),className:"bg-red-600 text-white px-4 py-2 rounded hover:opacity-50 absolute top-2 right-3",children:"Eliminar"})]},t)})]}),(0,a.jsx)(m.Z,{handleImgAdd:e=>{var t;let r=null==e?void 0:null===(t=e.target)||void 0===t?void 0:t.files;if(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t]);H(t=>[...t,...e]),(0,s.N)([...e],z)}}}),(0,a.jsx)("hr",{})]})]})}},4762:function(e,t,r){r.d(t,{Z:function(){return i}});var a=r(5893);function i(e){let{handleImgAdd:t}=e;return(0,a.jsxs)("label",{className:"flex flex-col items-center my-2 px-4 py-6 bg-white rounded-lg shadow-md \n            tracking-wide border border-dashed border-blue cursor-pointer hover:bg-green-500 hover:text-white",children:[(0,a.jsx)("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 6v6m0 0v6m0-6h6m-6 0H6"})}),(0,a.jsx)("span",{children:"Subir im\xe1genes"}),(0,a.jsx)("input",{type:"file",className:"hidden",multiple:!0,id:"file-upload",accept:".jpg, .jpeg, .png, .webp",onChange:t})]})}},7309:function(e,t,r){r.d(t,{I:function(){return u},db:function(){return d},t:function(){return s}});var a=r(3977),i=r(6650),o=r(9828),n=r(1259);let l=(0,a.ZF)({apiKey:"AIzaSyA5bU6q88ObffAxVCr2TJAZf3SZptjwQRQ",authDomain:"yourfriendinmendoza-a49d2.firebaseapp.com",projectId:"yourfriendinmendoza-a49d2",storageBucket:"yourfriendinmendoza-a49d2.appspot.com",messagingSenderId:"959015182413",appId:"1:959015182413:web:231c1c0812c05e5e21bc04"}),s=(0,i.cF)(l),d=(0,o.ad)(l),u=(0,n.v0)(l)},5348:function(e,t,r){r.d(t,{Z:function(){return l}});var a=r(7294),i=r(1259),o=r(1163),n=r(7309);function l(){let[e,t]=(0,a.useState)(!0),{replace:r,pathname:l}=(0,o.useRouter)();return(0,a.useEffect)(()=>{t(!0);let e=(0,i.Aj)(n.I,e=>e&&"/admin/dashboard-es"===l?t(!1):e&&"/admin/dashboard-port"===l?t(!1):void(e?r("/admin/dashboard-en"):r("/admin/login")));return setTimeout(()=>t(!1),700),()=>e()},[n.I]),{login:(e,t)=>{(0,i.e5)(n.I,e,t).catch(e=>alert(e.message))},logout:()=>(0,i.w7)(n.I),isLoading:e}}},5801:function(e,t,r){r.d(t,{Z:function(){return s}});var a=r(9828),i=r(7309);let o=async e=>{let t=(0,a.hJ)(i.db,e),r=await (0,a.PL)(t),o=r.docs.map(e=>{let t=e.data();return t.id=e.id,t});return o},n=async(e,t,r,o)=>{try{let n=(0,a.IO)((0,a.hJ)(i.db,e),(0,a.Xo)(t,r)),l=await (0,a.PL)(n);if(o)return l.docs.map(e=>{let t=e.data();return t.id=e.id,t});let s=l.docs[0].data();return s}catch(e){console.error(e)}};var l=r(7294);function s(e){let[t,r]=(0,l.useState)([]),[a,i]=(0,l.useState)([]),s=async()=>{let t="tours",a="page-info";e&&(t+="-".concat(e),a+="-".concat(e));let[l,s]=await Promise.all([n(t,"title","asc",!0),o(a)]);r(l),i(s[0])};return(0,l.useEffect)(()=>{s()},[]),{data:t,fetchData:s,pageData:a,handleDeleteTour:e=>{let a=t.filter(t=>{let{id:r}=t;return r!==e});r(a)}}}},6476:function(e,t,r){r.d(t,{Z:function(){return i}});var a=r(7294);function i(e){let[t,r]=(0,a.useState)(e),i=(0,a.useCallback)(()=>{r(e=>!e)},[]);return{boolValue:t,toggle:i,setBoolvalue:r}}},9729:function(e,t,r){r.d(t,{l:function(){return n},o:function(){return l}});var a=r(6501),i=r(7309),o=r(9828);let n=async(e,t)=>{try{let r=(0,o.hJ)(i.db,e);await (0,o.ET)(r,t),(0,a.Am)("Creacion Finalizada",{style:{backgroundColor:"rgb(34 197 94)",color:"white"}})}catch(e){(0,a.Am)("Hubo un error intente mas tarde!",{style:{backgroundColor:"red",color:"white"}})}},l=async(e,t,r)=>{try{let n=(0,o.JU)(i.db,e,t);await (0,o.r7)(n,r),(0,a.Am)("Actaulizacion Finalizada",{style:{backgroundColor:"rgb(34 197 94)",color:"white"}})}catch(e){(0,a.Am)("Hubo un error intente mas tarde!",{style:{backgroundColor:"red",color:"white"}})}}},2865:function(e,t,r){r.d(t,{N:function(){return n},u:function(){return o}});var a=r(7309),i=r(6650);let o=async(e,t)=>{try{let r=(0,i.iH)(a.t,"".concat(t,"/").concat(e.name)+Date.now()),o=await (0,i.KV)(r,e),n=await (0,i.Jt)((0,i.iH)(a.t,o.metadata.fullPath));return n}catch(e){alert(e)}},n=(e,t)=>{for(let r=0;r<e.length;r++){let a=new FileReader;a.readAsDataURL(e[r]),a.onloadend=()=>{t(t=>[...t,{name:e[r].name,img:a.result}])}}}},6501:function(e,t,r){let a,i;r.d(t,{x7:function(){return ei},Am:function(){return V}});var o,n=r(7294);let l={data:""},s=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||l,d=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,u=/\/\*[^]*?\*\/|  +/g,c=/\n+/g,p=(e,t)=>{let r="",a="",i="";for(let o in e){let n=e[o];"@"==o[0]?"i"==o[1]?r=o+" "+n+";":a+="f"==o[1]?p(n,o):o+"{"+p(n,"k"==o[1]?"":t)+"}":"object"==typeof n?a+=p(n,t?t.replace(/([^,])+/g,e=>o.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):o):null!=n&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=p.p?p.p(o,n):o+":"+n+";")}return r+(t&&i?t+"{"+i+"}":i)+a},f={},m=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+m(e[r]);return t}return e},h=(e,t,r,a,i)=>{var o;let n=m(e),l=f[n]||(f[n]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(n));if(!f[l]){let t=n!==e?e:(e=>{let t,r,a=[{}];for(;t=d.exec(e.replace(u,""));)t[4]?a.shift():t[3]?(r=t[3].replace(c," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(c," ").trim();return a[0]})(e);f[l]=p(i?{["@keyframes "+l]:t}:t,r?"":"."+l)}let s=r&&f.g?f.g:null;return r&&(f.g=f[l]),o=f[l],s?t.data=t.data.replace(s,o):-1===t.data.indexOf(o)&&(t.data=a?o+t.data:t.data+o),l},g=(e,t,r)=>e.reduce((e,a,i)=>{let o=t[i];if(o&&o.call){let e=o(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+a+(null==o?"":o)},"");function x(e){let t=this||{},r=e.call?e(t.p):e;return h(r.unshift?r.raw?g(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,s(t.target),t.g,t.o,t.k)}x.bind({g:1});let v,b,y,w=x.bind({k:1});function j(e,t){let r=this||{};return function(){let a=arguments;function i(o,n){let l=Object.assign({},o),s=l.className||i.className;r.p=Object.assign({theme:b&&b()},l),r.o=/ *go\d+/.test(s),l.className=x.apply(r,a)+(s?" "+s:""),t&&(l.ref=n);let d=e;return e[0]&&(d=l.as||e,delete l.as),y&&d[0]&&y(l),v(d,l)}return t?t(i):i}}var N=e=>"function"==typeof e,k=(e,t)=>N(e)?e(t):e,C=(a=0,()=>(++a).toString()),E=()=>{if(void 0===i&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");i=!e||e.matches}return i},I=new Map,A=e=>{if(I.has(e))return;let t=setTimeout(()=>{I.delete(e),z({type:4,toastId:e})},1e3);I.set(e,t)},Z=e=>{let t=I.get(e);t&&clearTimeout(t)},S=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&Z(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return e.toasts.find(e=>e.id===r.id)?S(e,{type:1,toast:r}):S(e,{type:0,toast:r});case 3:let{toastId:a}=t;return a?A(a):e.toasts.forEach(e=>{A(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let i=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+i}))}}},H=[],R={toasts:[],pausedAt:void 0},z=e=>{R=S(R,e),H.forEach(e=>{e(R)})},T={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},$=(e={})=>{let[t,r]=(0,n.useState)(R);(0,n.useEffect)(()=>(H.push(r),()=>{let e=H.indexOf(r);e>-1&&H.splice(e,1)}),[t]);let a=t.toasts.map(t=>{var r,a;return{...e,...e[t.type],...t,duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||T[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}});return{...t,toasts:a}},D=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||C()}),O=e=>(t,r)=>{let a=D(t,e,r);return z({type:2,toast:a}),a.id},V=(e,t)=>O("blank")(e,t);V.error=O("error"),V.success=O("success"),V.loading=O("loading"),V.custom=O("custom"),V.dismiss=e=>{z({type:3,toastId:e})},V.remove=e=>z({type:4,toastId:e}),V.promise=(e,t,r)=>{let a=V.loading(t.loading,{...r,...null==r?void 0:r.loading});return e.then(e=>(V.success(k(t.success,e),{id:a,...r,...null==r?void 0:r.success}),e)).catch(e=>{V.error(k(t.error,e),{id:a,...r,...null==r?void 0:r.error})}),e};var q=(e,t)=>{z({type:1,toast:{id:e,height:t}})},L=()=>{z({type:5,time:Date.now()})},P=e=>{let{toasts:t,pausedAt:r}=$(e);(0,n.useEffect)(()=>{if(r)return;let e=Date.now(),a=t.map(t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(r<0){t.visible&&V.dismiss(t.id);return}return setTimeout(()=>V.dismiss(t.id),r)});return()=>{a.forEach(e=>e&&clearTimeout(e))}},[t,r]);let a=(0,n.useCallback)(()=>{r&&z({type:6,time:Date.now()})},[r]),i=(0,n.useCallback)((e,r)=>{let{reverseOrder:a=!1,gutter:i=8,defaultPosition:o}=r||{},n=t.filter(t=>(t.position||o)===(e.position||o)&&t.height),l=n.findIndex(t=>t.id===e.id),s=n.filter((e,t)=>t<l&&e.visible).length;return n.filter(e=>e.visible).slice(...a?[s+1]:[0,s]).reduce((e,t)=>e+(t.height||0)+i,0)},[t]);return{toasts:t,handlers:{updateHeight:q,startPause:L,endPause:a,calculateOffset:i}}},F=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,M=j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,_=j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${w`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,B=j("div")`
  position: absolute;
`,J=j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,U=j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,W=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return void 0!==t?"string"==typeof t?n.createElement(U,null,t):t:"blank"===r?null:n.createElement(J,null,n.createElement(M,{...a}),"loading"!==r&&n.createElement(B,null,"error"===r?n.createElement(F,{...a}):n.createElement(_,{...a})))},G=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,K=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,Q=j("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,X=j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Y=(e,t)=>{let r=e.includes("top")?1:-1,[a,i]=E()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[G(r),K(r)];return{animation:t?`${w(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ee=n.memo(({toast:e,position:t,style:r,children:a})=>{let i=e.height?Y(e.position||t||"top-center",e.visible):{opacity:0},o=n.createElement(W,{toast:e}),l=n.createElement(X,{...e.ariaProps},k(e.message,e));return n.createElement(Q,{className:e.className,style:{...i,...r,...e.style}},"function"==typeof a?a({icon:o,message:l}):n.createElement(n.Fragment,null,o,l))});o=n.createElement,p.p=void 0,v=o,b=void 0,y=void 0;var et=({id:e,className:t,style:r,onHeightUpdate:a,children:i})=>{let o=n.useCallback(t=>{if(t){let r=()=>{a(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return n.createElement("div",{ref:o,className:t,style:r},i)},er=(e,t)=>{let r=e.includes("top"),a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:E()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...a}},ea=x`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ei=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:i,containerStyle:o,containerClassName:l})=>{let{toasts:s,handlers:d}=P(r);return n.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...o},className:l,onMouseEnter:d.startPause,onMouseLeave:d.endPause},s.map(r=>{let o=r.position||t,l=er(o,d.calculateOffset(r,{reverseOrder:e,gutter:a,defaultPosition:t}));return n.createElement(et,{id:r.id,key:r.id,onHeightUpdate:d.updateHeight,className:r.visible?ea:"",style:l},"custom"===r.type?k(r.message,r):i?i(r):n.createElement(ee,{toast:r,position:o}))}))}}}]);