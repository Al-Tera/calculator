(this["webpackJsonpdeuscalc-proto"]=this["webpackJsonpdeuscalc-proto"]||[]).push([[0],[,,,,,,,function(e,t,n){},function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),c=n.n(a),s=n(9),i=n.n(s),o=(n(15),n(2)),l=(n(16),n(3));n(7);var u=function(e){var t=e.basic,n=Object(a.useState)([]),c=Object(o.a)(n,2),s=c[0],i=c[1],u=Object(a.useState)(""),d=Object(o.a)(u,2),j=d[0],b=d[1];function v(){var e=document.getElementById("theInput");if("Syntax Error"===e.value)b("");else if(e.value.length>0){var t=e.value.split(/[\u00F7\u00D7%+^-]/g).filter((function(e){return""!==e})),n=e.value.split(/[0-9]|[.]/g).filter((function(e){return""!==e})),r=[];if(e.value[0].match(/[%^+\u00F7\u00D7-]/g))for(var a=0;a<n.length;a++)r.push(n[a]),r.push(t[a]);else for(var c=0;c<t.length;c++)r.push(t[c]),r.push(n[c]);for(var o=r.filter((function(e){return void 0!==e&&""!==e})),u=r.filter((function(e){return void 0!==e&&""!==e})),d=0;d<o.length;d++)0===d&&"-"===o[0]?(o[1]=o[0]+o[1],o[0]=""):0===d&&o[0].match(/[%^+\u00F7\u00D7]/g)&&(o[0]=""),o[d].length>1&&(o[d].includes("-")&&!o[d].match(/[0-9]|[.]/g)&&(o[o.length-1].match(/[0-9]|[.]/g)?(o[d+1]=o[d][o[d].indexOf("-")]+o[d+1],o[d]=o[d][0]):o[d]=""),o[d].match(/[0-9]/g)||o[o.length-1].match(/[0-9]|[.]/g)&&(o[d]=o[d][0]));var j=(o=o.filter((function(e){return""!==e}))).filter((function(e){return e.match(/[0-9]/i)})).map((function(e){return+e})),v=o.filter((function(e){return!e.match(/[0-9]/i)}));if(e.value.includes("^"))for(;v.includes("^");){var h=v.indexOf("^");j[h]=Math.pow(j[h],j[h+1]),j[h+1]="",v[h]=""}if(e.value.includes("%"))for(;v.includes("%");){var p=v.indexOf("%");if(o[o.indexOf("%")-1]&&o[o.indexOf("%")+1])j[p]=j[p]%j[p+1],j[p+1]="",v[p]="";else if(!o[o.indexOf("%")+1]){for(var g=0;g<v[v.indexOf("%")].length;g++)j[p]*=.01;v[p]=""}}v=v.filter((function(e){return""!==e}));for(var f=(j=j.filter((function(e){return""!==e}))).toString().length>1?j[0]:parseInt(j),O=0;O<=v.length;O++)"+"===v[O]&&(f+=j[O+1]),"-"===v[O]&&(f-=j[O+1]),"\xd7"===v[O]&&(f*=j[O+1]),"\xf7"===v[O]&&(f/=j[O+1]);i([].concat(Object(l.a)(s),[{input:isNaN(f)?u.join(""):o.join(""),sumnumber:isNaN(f)?"Syntax Error":parseFloat(f.toFixed(4))}])),b(isNaN(f)?"Syntax Error":f)}}var h=function(e){var t=document.getElementById("theInput");"Syntax Error"!==t.value?(t.value+=e.target.value,b(t.value)):b("")},p=function(e){"Syntax Error"!==e.target.textContent&&(document.getElementById("theInput").value=e.target.textContent)};return Object(r.jsxs)("div",{className:"basic__container",style:{display:t?"":"none"},children:[Object(r.jsx)("div",{className:"equation__list",children:s.map((function(e,t){return Object(r.jsxs)("div",{className:"equation",children:[Object(r.jsx)("h1",{onClick:p,children:e.input}),Object(r.jsx)("h1",{children:"="}),Object(r.jsx)("h1",{onClick:p,children:e.sumnumber})]},t)}))}),Object(r.jsx)("input",{type:"text",id:"theInput",value:j,onChange:function(e){b(e.target.value)},onKeyDown:function(e){switch(e.keyCode){case 191:e.target.value+="\xf7";break;case 56:e.shiftKey&&(e.target.value+="\xd7");break;case 13:v()}},onInput:function(e){e.target.value=e.target.value.replace(/[^0-9%^.+\u00F7\u00D7-]/g,"")},autoComplete:"off"}),Object(r.jsxs)("div",{className:"buttons",children:[Object(r.jsx)("button",{value:"0",style:{gridArea:"n0"},onMouseUp:h,children:"0"}),Object(r.jsx)("button",{value:"1",style:{gridArea:"n1"},onMouseUp:h,children:"1"}),Object(r.jsx)("button",{value:"2",style:{gridArea:"n2"},onMouseUp:h,children:"2"}),Object(r.jsx)("button",{value:"3",style:{gridArea:"n3"},onMouseUp:h,children:"3"}),Object(r.jsx)("button",{value:"4",style:{gridArea:"n4"},onMouseUp:h,children:"4"}),Object(r.jsx)("button",{value:"5",style:{gridArea:"n5"},onMouseUp:h,children:"5"}),Object(r.jsx)("button",{value:"6",style:{gridArea:"n6"},onMouseUp:h,children:"6"}),Object(r.jsx)("button",{value:"7",style:{gridArea:"n7"},onMouseUp:h,children:"7"}),Object(r.jsx)("button",{value:"8",style:{gridArea:"n8"},onMouseUp:h,children:"8"}),Object(r.jsx)("button",{value:"9",style:{gridArea:"n9"},onMouseUp:h,children:"9"}),Object(r.jsx)("button",{value:".",style:{gridArea:"period"},onMouseUp:h,children:"."}),Object(r.jsx)("button",{value:"%",style:{gridArea:"percent"},onMouseUp:h,children:"%"}),Object(r.jsx)("button",{value:"\xf7",style:{gridArea:"division"},onMouseUp:h,children:"/"}),Object(r.jsx)("button",{value:"\xd7",style:{gridArea:"multiple"},onMouseUp:h,children:"x"}),Object(r.jsx)("button",{value:"-",style:{gridArea:"minus"},onMouseUp:h,children:"-"}),Object(r.jsx)("button",{value:"+",style:{gridArea:"addition"},onMouseUp:h,children:"+"}),Object(r.jsx)("button",{style:{gridArea:"equal"},onMouseUp:v,children:"="}),Object(r.jsx)("button",{style:{gridArea:"clear"},onMouseUp:function(e){e.preventDefault(),b("")},children:"C"})]})]})};n(8),n(17);var d=function(e){var t=e.id,n=e.binaries,a=e.setBinaries,c=e.setValue,s=e.mode;return Object(r.jsx)("div",{className:"btnbtn",children:Object(r.jsx)("button",{value:n[t],className:"btn",onMouseDown:function(e){e.preventDefault(),c(s?parseInt(n.join("").split("").reverse().join(""),2):parseInt(n.join("").split("").reverse().join(""),2).toString(16).toUpperCase())},onMouseDownCapture:function(e){var r=Object(l.a)(n);"0"===e.target.value?(r[t]=1,a(r)):(r[t]=0,a(r))},children:n[t]})})};var j=function(e){for(var t=e.converter,n=[],c=[],s=Object(a.useState)("0"),i=Object(o.a)(s,2),u=i[0],j=i[1],b=Object(a.useState)(c),v=Object(o.a)(b,2),h=v[0],p=v[1],g=Object(a.useState)(!0),f=Object(o.a)(g,2),O=f[0],m=f[1],x=0;x<48;x++)n.push(x),c.push(0);return window.onclick=function(e){if(!e.target.matches(".dropbtn"))for(var t=document.getElementsByClassName("dropdown-content"),n=0;n<t.length;n++){var r=t[n];r.classList.contains("show")&&r.classList.remove("show")}if(e.target.matches(".dec"))m(!0),j(parseInt(h.join("").split("").reverse().join(""),2));else if(e.target.matches(".hex")){var a=document.getElementById("converterInput");m(!1);var c=parseInt(h.join("").split("").reverse().join(""),2).toString(16).toUpperCase();j("0"===a.value||""===a.value?c:"0"+c)}},Object(r.jsxs)("div",{className:"converter",style:{display:t?"":"none"},children:[Object(r.jsx)("div",{className:"button_container",children:n.map((function(e,t){return Object(r.jsx)(d,{id:t,binaries:h,setBinaries:p,value:u,setValue:j,setMode:m,mode:O},e)}))}),Object(r.jsxs)("div",{className:"marker",children:[Object(r.jsx)("h1",{children:"0"}),Object(r.jsx)("h1",{children:"12"}),Object(r.jsx)("h1",{children:"23"}),Object(r.jsx)("h1",{children:"24"}),Object(r.jsx)("h1",{children:"36"}),Object(r.jsx)("h1",{children:"47"})]}),Object(r.jsx)("input",{type:O?"number":"text",id:"converterInput",autoComplete:"off",spellCheck:"false",value:u,onChange:function(e){j(e.target.value.length<=1&&!O?"0":e.target.value.toUpperCase());var t=O?parseInt(e.target.value).toString(2):parseInt(e.target.value,16).toString(2),n=t.split("").reverse(),r=Object(l.a)(h);if(parseInt(e.target.value)>=0&&(O?e.target.value.length<=15:e.target.value.length<=13)){for(var a=0;a<t.length;a++)r[a]=n[a],p(r);for(var c=t.length;c<48;c++)r[c]=0,p(r)}},onInput:function(e){e.target.value=e.target.value.replace(/[^0-9a-fA-F]/g,"")}}),Object(r.jsxs)("div",{className:"dropdown",children:[Object(r.jsx)("button",{onClick:function(){document.getElementById("myDropdown").classList.toggle("show")},className:"dropbtn",children:O?"Decimal":"Hexadecimal"}),Object(r.jsxs)("div",{id:"myDropdown",className:"dropdown-content",children:[Object(r.jsx)("p",{className:"dec",children:"Decimal"}),Object(r.jsx)("p",{className:"hex",children:"Hexadecimal"})]})]})]})};var b=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)((function(){var e=localStorage.getItem("basic");return!e||JSON.parse(e)})),i=Object(o.a)(s,2),l=i[0],d=i[1],b=Object(a.useState)((function(){var e=localStorage.getItem("advanced");return!!e&&JSON.parse(e)})),v=Object(o.a)(b,2),h=v[0],p=v[1],g=Object(a.useState)((function(){var e=localStorage.getItem("converter");return!!e&&JSON.parse(e)})),f=Object(o.a)(g,2),O=f[0],m=f[1];return Object(a.useEffect)((function(){localStorage.setItem("basic",JSON.stringify(l)),localStorage.setItem("advanced",JSON.stringify(h)),localStorage.setItem("converter",JSON.stringify(O))}),[l,h,O]),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsxs)("div",{className:"modes",onMouseDown:function(){return c(!0)},children:[Object(r.jsx)("h6",{className:"mode mc",children:l?"Basic Mode":O?"Converter Mode":"Advanced Mode"}),n?Object(r.jsxs)("div",{className:"choices",children:[Object(r.jsxs)("h6",{className:"mode mc",onClick:function(){d(!0),p(!1),m(!1),c(!1)},children:["Basic Mode",Object(r.jsx)("span",{className:l?"circle":""})]}),Object(r.jsxs)("h6",{className:"mode mc",onClick:function(){d(!1),p(!1),m(!0),c(!1)},children:["Converter Mode",Object(r.jsx)("span",{className:O?"circle":""})]})]}):"",Object(r.jsx)("div",{className:"arrow mc"})]}),Object(r.jsx)(u,{basic:l}),Object(r.jsx)(j,{converter:O})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(b,{})}),document.getElementById("root")),v()}],[[18,1,2]]]);
//# sourceMappingURL=main.9fedb02a.chunk.js.map