(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(3),u=n.n(l),r=(n(13),n(1));n(15);var i=function(){var e={min:1,max:100,count:10},t=Object(a.useState)(e.count),n=Object(r.a)(t,2),l=n[0],u=n[1],i=Object(a.useState)(e.min),o=Object(r.a)(i,2),m=o[0],d=o[1],v=Object(a.useState)(e.max),s=Object(r.a)(v,2),E=s[0],b=s[1],f=Object(a.useState)([]),p=Object(r.a)(f,2),g=p[0],h=p[1],x=Object(a.useState)(!1),j=Object(r.a)(x,2),O=j[0],C=j[1],F=function(e,t){C(e),h(t)},S=function(t,n,a){F(!1,[]),t.target.value>0?a(parseInt(t.target.value)):a(e[n])};return c.a.createElement("div",{className:"App"},c.a.createElement("div",null,c.a.createElement("strong",null,O&&g.join(", "))),c.a.createElement("div",null,c.a.createElement("label",{name:"min",htmlFor:"min"},"Min")),c.a.createElement("div",null,c.a.createElement("input",{id:"min",type:"text",name:"min",value:m,onChange:function(e){return S(e,"min",d)}})),c.a.createElement("div",null,c.a.createElement("label",{name:"max",htmlFor:"max"},"Max")),c.a.createElement("div",null,c.a.createElement("input",{id:"max",type:"text",name:"max",value:E,onChange:function(e){return S(e,"max",b)}})),c.a.createElement("div",null,c.a.createElement("label",{name:"count",htmlFor:"count"},"Count")),c.a.createElement("div",null,c.a.createElement("input",{id:"count",type:"text",name:"count",value:l,onChange:function(e){return S(e,"count",u)}})),c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){if(function(){var e=!0;return F(!1,[]),m>E?(F(!0,["Min can't be greater than max"]),e=!1):l>E-m&&(F(!0,["Count can't be greater than max minus min"]),e=!1),e}()){for(var e=[];e.length<l;){var t=Math.floor(Math.random()*(E-m))+m;e.includes(t)||e.push(t)}F(!0,e.sort(function(e,t){return e-t}))}}},"Generate")))},o=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,18)).then(function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,l=t.getLCP,u=t.getTTFB;n(e),a(e),c(e),l(e),u(e)})};u.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(i,null))),o()},4:function(e,t,n){e.exports=n(17)}},[[4,3,2]]]);
//# sourceMappingURL=main.38558d1c.chunk.js.map