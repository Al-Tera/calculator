(this["webpackJsonpdeuscalc-proto"]=this["webpackJsonpdeuscalc-proto"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),u=n(9),r=n.n(u),l=(n(15),n(2)),o=(n(16),n(3));n(7);var i=function(e){var t=e.basic,n=Object(c.useState)([]),s=Object(l.a)(n,2),u=s[0],r=s[1],i=Object(c.useState)(""),j=Object(l.a)(i,2),b=j[0],d=j[1];function v(){var e=document.getElementById("theInput");if("Syntax Error"===e.value)d("");else if(e.value.length>0){var t=b.split(/[\u00F7\u00D7+^-]/g).filter((function(e){return""!==e})),n=b.split(/[0-9]/g).filter((function(e){return""!==e})),a=[];if(t.length>n.length)for(var c=0;c<t.length;c++)a.push(t[c]),a.push(n[c]);else for(var s=0;s<n.length;s++)a.push(n[s]),a.push(t[s]);for(var l=a.filter((function(e){return void 0!==e&&""!==e})),i=0;i<l.length;i++)0===i&&"-"===l[0]&&(l[1]=l[0]+l[1],l[0]="",l=l.filter((function(e){return""!==e}))),l[i].length>1&&l[i].includes("-")&&!l[i].match(/[0-9]/g)&&(l[i+1]=l[i][l[i].indexOf("-")]+l[i+1],l[i]=l[i][0]),l[i].length>1&&!l[i].match(/[0-9]/g)&&(l[i]=l[i][0]);var j=l.filter((function(e){return e.match(/[0-9]/i)})).map((function(e){return+e})),v=l.filter((function(e){return!e.match(/[0-9]/i)}));if(e.value.includes("^")){for(;v.includes("^");){var h=v.indexOf("^");j[h]=Math.pow(j[h],j[h+1]),j[h+1]="",v[h]=""}v=v.filter((function(e){return""!==e})),j=j.filter((function(e){return""!==e}))}for(var p=j.toString().length>=1?j[0]:parseInt(j),O=0;O<=v.length;O++)"+"===v[O]&&(p+=j[O+1]),"-"===v[O]&&(p-=j[O+1]),"\xd7"===v[O]&&(p*=j[O+1]),"\xf7"===v[O]&&(p/=j[O+1]),"%"===v[O]&&(p*=.01);r([].concat(Object(o.a)(u),[{input:l.join(""),sumnumber:isNaN(p)?"Syntax Error":parseFloat(p.toFixed(4))}])),d(isNaN(p)?"Syntax Error":p)}}var h=function(e){var t=document.getElementById("theInput");t.value+=e.target.value,d(t.value)};return Object(a.jsxs)("div",{className:"basic__container",style:{display:t?"":"none"},children:[Object(a.jsx)("div",{className:"conter",children:u.map((function(e,t){return Object(a.jsxs)("div",{className:"conterInner",children:[Object(a.jsx)("h1",{children:e.input}),Object(a.jsx)("h1",{children:"="}),Object(a.jsx)("h1",{children:e.sumnumber})]},t)}))}),Object(a.jsx)("input",{type:"text",id:"theInput",value:b,onChange:function(e){d(e.target.value)},onKeyDown:function(e){switch(e.keyCode){case 191:e.target.value+="\xf7";break;case 56:e.shiftKey&&(e.target.value+="\xd7");break;case 13:v()}},onInput:function(e){e.target.value=e.target.value.replace(/[^0-9%^.+\u00F7\u00D7-]/g,"")},autoComplete:"off"}),Object(a.jsxs)("div",{className:"buttons",children:[Object(a.jsx)("button",{value:"0",className:"n0",onMouseUp:h,children:"0"}),Object(a.jsx)("button",{value:"1",className:"n1",onMouseUp:h,children:"1"}),Object(a.jsx)("button",{value:"2",className:"n2",onMouseUp:h,children:"2"}),Object(a.jsx)("button",{value:"3",className:"n3",onMouseUp:h,children:"3"}),Object(a.jsx)("button",{value:"4",className:"n4",onMouseUp:h,children:"4"}),Object(a.jsx)("button",{value:"5",className:"n5",onMouseUp:h,children:"5"}),Object(a.jsx)("button",{value:"6",className:"n6",onMouseUp:h,children:"6"}),Object(a.jsx)("button",{value:"7",className:"n7",onMouseUp:h,children:"7"}),Object(a.jsx)("button",{value:"8",className:"n8",onMouseUp:h,children:"8"}),Object(a.jsx)("button",{value:"9",className:"n9",onMouseUp:h,children:"9"}),Object(a.jsx)("button",{value:".",className:"period",onMouseUp:h,children:"."}),Object(a.jsx)("button",{value:"%",className:"percent",onMouseUp:h,children:"%"}),Object(a.jsx)("button",{value:"\xf7",className:"divide",onMouseUp:h,children:"/"}),Object(a.jsx)("button",{value:"\xd7",className:"multiply",onMouseUp:h,children:"x"}),Object(a.jsx)("button",{value:"-",className:"minus",onMouseUp:h,children:"-"}),Object(a.jsx)("button",{value:"+",className:"addition",onMouseUp:h,children:"+"}),Object(a.jsx)("button",{className:"equal",onMouseUp:v,children:"="}),Object(a.jsx)("button",{className:"clear",onMouseUp:function(e){e.preventDefault(),d("")},children:"C"})]})]})};var j=function(e){var t=e.advanced,n=Object(c.useState)([]),s=Object(l.a)(n,2),u=s[0],r=s[1],i=Object(c.useState)(""),j=Object(l.a)(i,2),b=j[0],d=j[1],v=Object(c.useState)(""),h=Object(l.a)(v,2),p=h[0],O=h[1],m=Object(c.useState)(""),f=Object(l.a)(m,2),x=f[0],g=f[1],N=Object(c.useState)(!1),M=Object(l.a)(N,2),U=M[0],S=M[1],y=function(e){if(document.getElementById("advancedInput").value.length>0){for(var t=p.map((function(e){return+e})),n=p.toString().length>=1?t[0]:parseInt(p),a=0;a<=x.length;a++)"+"===x[a]&&(n+=t[a+1]),"-"===x[a]&&(n-=t[a+1]),"\xd7"===x[a]&&(n*=t[a+1]),"\xf7"===x[a]&&(n/=t[a+1]),"%"===x[a]&&(n*=.01);r([].concat(Object(o.a)(u),[{input:b,sumnumber:isNaN(n)?"Syntax Error":parseFloat(n.toFixed(4))}])),d(isNaN(n)?"Syntax Error":n),O(n.toString().split(/[%+\u00F7\u00D7-]/g)),g("")}},I=function(e){var t=document.getElementById("advancedInput");t.value+=e.target.value,d(t.value),O(t.value.split(/[%+\u00F7\u00D7-]/g)),g(t.value.split(/[0-9]|[.]/g).join("").split(""))};return Object(a.jsxs)("div",{className:"basic__container",style:{display:t?"":"none"},children:[Object(a.jsx)("div",{className:"conter",children:u.map((function(e,t){return Object(a.jsxs)("div",{className:"conterInner",children:[Object(a.jsx)("h1",{children:e.input}),Object(a.jsx)("h1",{children:"="}),Object(a.jsx)("h1",{children:e.sumnumber})]},t)}))}),Object(a.jsx)("input",{type:"text",id:"advancedInput",value:b,onChange:function(e){d(e.target.value),O(e.target.value.split(/[%+\u00F7\u00D7-]/g)),g(e.target.value.split(/[0-9]|[.]/g).join("").split(""))},onKeyDown:function(e){var t=document.getElementById("advancedInput");if(console.log("kaeey code: "+e.keyCode),U){switch(e.preventDefault(),e.keyCode){case 48:e.target.value+="\u2070";break;case 49:e.target.value+="\xb9";break;case 50:e.target.value+="\xb2";break;case 51:e.target.value+="\xb3";break;case 52:e.target.value+="\u2074";break;case 53:e.target.value+="\u2075";break;case 54:e.target.value+="\u2076";break;case 55:e.target.value+="\u2077";break;case 56:e.target.value+="\u2078";break;case 57:e.target.value+="\u2079"}d(t.value)}switch(e.keyCode){case 191:e.target.value+="\xf7";break;case 56:e.shiftKey&&(e.target.value+="\xd7");break;case 13:y()}},onInput:function(e){e.target.value=e.target.value.replace(/[^0-9%^.+\u00F7\u00D7\u00B9-]/g,"")},autoComplete:"off"}),Object(a.jsxs)("div",{className:"buttons",children:[Object(a.jsx)("button",{value:U?"\u2070":"0",className:"n0",onMouseUp:I,children:"0"}),Object(a.jsx)("button",{value:U?"\xb9":"1",className:"n1",onMouseUp:I,children:"1"}),Object(a.jsx)("button",{value:U?"\xb2":"2",className:"n2",onMouseUp:I,children:"2"}),Object(a.jsx)("button",{value:U?"\xb3":"3",className:"n3",onMouseUp:I,children:"3"}),Object(a.jsx)("button",{value:U?"\u2074":"4",className:"n4",onMouseUp:I,children:"4"}),Object(a.jsx)("button",{value:U?"\u2075":"5",className:"n5",onMouseUp:I,children:"5"}),Object(a.jsx)("button",{value:U?"\u2076":"6",className:"n6",onMouseUp:I,children:"6"}),Object(a.jsx)("button",{value:U?"\u2077":"7",className:"n7",onMouseUp:I,children:"7"}),Object(a.jsx)("button",{value:U?"\u2078":"8",className:"n8",onMouseUp:I,children:"8"}),Object(a.jsx)("button",{value:U?"\u2079":"9",className:"n9",onMouseUp:I,children:"9"}),Object(a.jsx)("button",{value:".",className:"period",onMouseUp:I,children:"."}),Object(a.jsx)("button",{value:"%",className:"percent",onMouseUp:I,children:"%"}),Object(a.jsx)("button",{value:"\xf7",className:"divide",onMouseUp:I,children:"/"}),Object(a.jsx)("button",{value:"\xd7",className:"multiply",onMouseUp:I,children:"x"}),Object(a.jsx)("button",{value:"-",className:"minus",onMouseUp:I,children:"-"}),Object(a.jsx)("button",{value:"+",className:"addition",onMouseUp:I,children:"+"}),Object(a.jsx)("button",{className:"equal",onMouseUp:y,children:"="}),Object(a.jsx)("button",{className:"clear",onMouseUp:function(e){e.preventDefault(),d(""),O(""),g("")},children:"C"}),Object(a.jsx)("button",{style:{background:U?"green":"orange",position:"absolute"},onMouseUp:function(e){e.preventDefault(),S(!U)},children:"sup"})]})]})};n(8);var b=function(e){var t=e.id,n=e.binaries,c=e.setBinaries,s=e.setValue;return Object(a.jsx)("div",{className:"btnbtn",children:Object(a.jsx)("button",{value:n[t],className:"btn",onMouseDown:function(e){e.preventDefault(),s(parseInt(n.join("").split("").reverse().join(""),2))},onMouseDownCapture:function(e){var a=Object(o.a)(n);"0"===e.target.value?(a[t]=1,c(a)):(a[t]=0,c(a))},children:n[t]})})};var d=function(e){for(var t=e.converter,n=[],s=[],u=Object(c.useState)(""),r=Object(l.a)(u,2),i=r[0],j=r[1],d=Object(c.useState)(s),v=Object(l.a)(d,2),h=v[0],p=v[1],O=0;O<48;O++)n.push(O),s.push(0);return Object(a.jsxs)("div",{className:"converter",style:{display:t?"":"none"},children:[Object(a.jsx)("div",{className:"button_container",children:n.map((function(e,t){return Object(a.jsx)(b,{id:t,binaries:h,setBinaries:p,value:i,setValue:j},e)}))}),Object(a.jsxs)("div",{className:"marker",children:[Object(a.jsx)("h1",{children:"0"}),Object(a.jsx)("h1",{children:"12"}),Object(a.jsx)("h1",{children:"23"}),Object(a.jsx)("h1",{children:"24"}),Object(a.jsx)("h1",{children:"36"}),Object(a.jsx)("h1",{children:"47"})]}),Object(a.jsx)("input",{type:"number",id:"converterInput",autoComplete:"off",value:i,onChange:function(e){j(e.target.value);var t=""===e.target.value?"0":parseInt(e.target.value).toString(2),n=t.split("").reverse(),a=Object(o.a)(h);if(parseInt(e.target.value)>=0&&parseInt(e.target.value)<=0xfffffffeffff){for(var c=0;c<t.length;c++)a[c]=n[c],p(a);for(var s=t.length;s<48;s++)a[s]=0,p(a)}}})]})};var v=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],s=t[1],u=Object(c.useState)((function(){var e=localStorage.getItem("basic");return!e||JSON.parse(e)})),r=Object(l.a)(u,2),o=r[0],b=r[1],v=Object(c.useState)((function(){var e=localStorage.getItem("advanced");return!!e&&JSON.parse(e)})),h=Object(l.a)(v,2),p=h[0],O=h[1],m=Object(c.useState)((function(){var e=localStorage.getItem("converter");return!!e&&JSON.parse(e)})),f=Object(l.a)(m,2),x=f[0],g=f[1];return Object(c.useEffect)((function(){localStorage.setItem("basic",JSON.stringify(o)),localStorage.setItem("advanced",JSON.stringify(p)),localStorage.setItem("converter",JSON.stringify(x))}),[o,p,x]),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)("div",{className:"modes",onMouseDown:function(){return s(!0)},children:[Object(a.jsx)("h6",{className:"mode mc",children:o?"Basic Mode":x?"Converter Mode":"Advanced Mode"}),n?Object(a.jsxs)("div",{className:"choices",children:[Object(a.jsxs)("h6",{className:"mode mc",onClick:function(){b(!0),O(!1),g(!1),s(!1)},children:["Basic Mode",Object(a.jsx)("span",{className:o?"circle":""})]}),Object(a.jsxs)("h6",{className:"mode mc",onClick:function(){b(!1),O(!1),g(!0),s(!1)},children:["Converter Mode",Object(a.jsx)("span",{className:x?"circle":""})]})]}):"",Object(a.jsx)("div",{className:"arrow mc"})]}),Object(a.jsx)(i,{basic:o}),Object(a.jsx)(j,{advanced:p}),Object(a.jsx)(d,{converter:x})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,u=t.getTTFB;n(e),a(e),c(e),s(e),u(e)}))};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(v,{})}),document.getElementById("root")),h()},7:function(e,t,n){},8:function(e,t,n){}},[[17,1,2]]]);
//# sourceMappingURL=main.1bc21d94.chunk.js.map