(this["webpackJsonpdeuscalc-proto"]=this["webpackJsonpdeuscalc-proto"]||[]).push([[0],[,,,,,,,function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),a=n.n(s),i=n(8),o=n.n(i),l=(n(14),n(2)),r=(n(15),n(5));n(16);var u=function(e){var t=e.basic,n=Object(s.useState)([]),a=Object(l.a)(n,2),i=a[0],o=a[1],u=Object(s.useState)(""),j=Object(l.a)(u,2),b=j[0],d=j[1],O=Object(s.useState)(""),h=Object(l.a)(O,2),v=h[0],m=h[1],p=Object(s.useState)(""),x=Object(l.a)(p,2),N=x[0],f=x[1],g=function(e){if(document.getElementById("theInput").value.length>0){for(var t=v.map((function(e){return+e})),n=v.toString().length>=1?t[0]:parseInt(v),c=0;c<=N.length;c++)"+"===N[c]&&(n+=t[c+1]),"-"===N[c]&&(n-=t[c+1]),"\xd7"===N[c]&&(n*=t[c+1]),"\xf7"===N[c]&&(n/=t[c+1]),"%"===N[c]&&(n*=.01);o([].concat(Object(r.a)(i),[{input:b,sumnumber:isNaN(n)?"Syntax Error":parseFloat(n.toFixed(4))}])),d(isNaN(n)?"Syntax Error":n),m(n.toString().split(/[%+\u00F7\u00D7-]/g)),f("")}},M=function(e){var t=document.getElementById("theInput");t.value+=e.target.value,d(t.value),m(t.value.split(/[%+\u00F7\u00D7-]/g)),f(t.value.split(/[0-9]|[.]/g).join("").split(""))};return Object(c.jsxs)("div",{style:{visibility:t?"visible":"hidden"},children:[Object(c.jsx)("div",{className:"conter",children:i.map((function(e,t){return Object(c.jsxs)("div",{className:"conterInner",children:[Object(c.jsx)("h1",{children:e.input}),Object(c.jsx)("h1",{children:"="}),Object(c.jsx)("h1",{children:e.sumnumber})]},t)}))}),Object(c.jsx)("input",{type:"text",id:"theInput",value:b,onChange:function(e){d(e.target.value),m(e.target.value.split(/[%+\u00F7\u00D7-]/g)),f(e.target.value.split(/[0-9]|[.]/g).join("").split(""))},onKeyDown:function(e){switch(e.keyCode){case 191:e.target.value+="\xf7";break;case 56:e.shiftKey&&(e.target.value+="\xd7");break;case 13:g()}},onInput:function(e){e.target.value=e.target.value.replace(/[^0-9%.+\u00F7\u00D7-]/g,"")},autoComplete:"off"}),Object(c.jsxs)("div",{className:"buttons",children:[Object(c.jsx)("button",{value:"0",className:"n0",onMouseUp:M,children:"0"}),Object(c.jsx)("button",{value:"1",className:"n1",onMouseUp:M,children:"1"}),Object(c.jsx)("button",{value:"2",className:"n2",onMouseUp:M,children:"2"}),Object(c.jsx)("button",{value:"3",className:"n3",onMouseUp:M,children:"3"}),Object(c.jsx)("button",{value:"4",className:"n4",onMouseUp:M,children:"4"}),Object(c.jsx)("button",{value:"5",className:"n5",onMouseUp:M,children:"5"}),Object(c.jsx)("button",{value:"6",className:"n6",onMouseUp:M,children:"6"}),Object(c.jsx)("button",{value:"7",className:"n7",onMouseUp:M,children:"7"}),Object(c.jsx)("button",{value:"8",className:"n8",onMouseUp:M,children:"8"}),Object(c.jsx)("button",{value:"9",className:"n9",onMouseUp:M,children:"9"}),Object(c.jsx)("button",{value:".",className:"period",onMouseUp:M,children:"."}),Object(c.jsx)("button",{value:"%",className:"percent",onMouseUp:M,children:"%"}),Object(c.jsx)("button",{value:"\xf7",className:"divide",onMouseUp:M,children:"/"}),Object(c.jsx)("button",{value:"\xd7",className:"multiply",onMouseUp:M,children:"x"}),Object(c.jsx)("button",{value:"-",className:"minus",onMouseUp:M,children:"-"}),Object(c.jsx)("button",{value:"+",className:"addition",onMouseUp:M,children:"+"}),Object(c.jsx)("button",{className:"equal",onMouseUp:g,children:"="}),Object(c.jsx)("button",{className:"clear",onMouseUp:function(e){e.preventDefault(),d(""),m(""),f("")},children:"C"})]})]})};n(7);var j=function(e){var t=e.id,n=e.binaries,a=e.setBinaries,i=Object(s.useState)(!1),o=Object(l.a)(i,2),u=o[0],j=o[1];return Object(c.jsx)("div",{className:"btnbtn",children:Object(c.jsx)("button",{className:"btn",onMouseDown:function(e){e.preventDefault();var c=Object(r.a)(n);j(!u),u?(c[t]=0,a(c)):(c[t]=1,a(c)),console.log("working")},children:n[t]})})};var b=function(e){for(var t=e.converter,n=[],a=[],i=Object(s.useState)(""),o=Object(l.a)(i,2),r=(o[0],o[1],Object(s.useState)(a)),u=Object(l.a)(r,2),b=u[0],d=u[1],O=0;O<48;O++)n.push(O),a.push(0);return Object(c.jsxs)("div",{className:"converter",style:{visibility:t?"visible":"hidden"},children:[Object(c.jsx)("div",{className:"button_container",children:n.map((function(e,t){return Object(c.jsx)(j,{id:t,binaries:b,setBinaries:d},e)}))}),Object(c.jsxs)("div",{className:"marker",children:[Object(c.jsx)("h1",{children:"0"}),Object(c.jsx)("h1",{children:"12"}),Object(c.jsx)("h1",{children:"23"}),Object(c.jsx)("h1",{children:"24"}),Object(c.jsx)("h1",{children:"36"}),Object(c.jsx)("h1",{children:"47"})]}),Object(c.jsx)("div",{id:"result",className:"result",onClick:function(e){},children:parseInt(b.join("").split("").reverse().join(""),2)})]})};var d=function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),n=t[0],a=t[1],i=Object(s.useState)((function(){var e=localStorage.getItem("basic");return!e||JSON.parse(e)})),o=Object(l.a)(i,2),r=o[0],j=o[1],d=Object(s.useState)((function(){var e=localStorage.getItem("advanced");return!!e&&JSON.parse(e)})),O=Object(l.a)(d,2),h=O[0],v=O[1],m=Object(s.useState)((function(){var e=localStorage.getItem("converter");return!!e&&JSON.parse(e)})),p=Object(l.a)(m,2),x=p[0],N=p[1];return Object(s.useEffect)((function(){localStorage.setItem("basic",JSON.stringify(r)),localStorage.setItem("converter",JSON.stringify(x))}),[r,x]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)("div",{className:"modes",onMouseDown:function(){return a(!0)},children:[Object(c.jsx)("h6",{className:"mode mc",children:r?"Basic Mode":x?"Converter Mode":"Advanced Mode"}),n?Object(c.jsxs)("div",{className:"choices",children:[Object(c.jsxs)("h6",{className:"mode mc",onClick:function(){j(!0),v(!1),N(!1),a(!1)},children:["Basic Mode",Object(c.jsx)("span",{className:r?"circle":""})]}),Object(c.jsxs)("h6",{className:"mode mc",onClick:function(){j(!1),v(!0),N(!1),a(!1)},children:["Advanced Mode",Object(c.jsx)("span",{className:h?"circle":""})]}),Object(c.jsxs)("h6",{className:"mode mc",onClick:function(){j(!1),v(!1),N(!0),a(!1)},children:["Converter Mode",Object(c.jsx)("span",{className:x?"circle":""})]})]}):"",Object(c.jsx)("div",{className:"arrow mc"})]}),Object(c.jsx)(u,{basic:r}),Object(c.jsx)(b,{converter:x})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(d,{})}),document.getElementById("root")),O()}],[[17,1,2]]]);
//# sourceMappingURL=main.da8c3ce0.chunk.js.map