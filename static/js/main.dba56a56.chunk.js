(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),l=n(3),u=n.n(l),r=(n(13),n(1));n(15);var o=function(){var e={min:1,max:100,count:10},t=Object(a.useState)(e.count),n=Object(r.a)(t,2),l=n[0],u=n[1],o=Object(a.useState)(e.min),i=Object(r.a)(o,2),m=i[0],v=i[1],d=Object(a.useState)(e.max),E=Object(r.a)(d,2),b=E[0],f=E[1],s=Object(a.useState)([]),p=Object(r.a)(s,2),g=p[0],h=p[1],x=Object(a.useState)(!1),j=Object(r.a)(x,2),O=j[0],C=j[1],F=function(e,t){C(e),h(t)},M=function(t,n,a){F(!1,[]),t.target.value>0?a(parseInt(t.target.value)):a(e[n])};return c.a.createElement("div",{className:"App"},c.a.createElement("div",null,c.a.createElement("strong",null,O&&g.join(", "))),c.a.createElement("div",null,c.a.createElement("label",{name:"min",htmlFor:"min"},"Min")),c.a.createElement("div",null,c.a.createElement("input",{id:"min",type:"text",name:"min",value:m,onChange:function(e){return M(e,"min",v)}})),c.a.createElement("div",null,c.a.createElement("label",{name:"max",htmlFor:"max"},"Max")),c.a.createElement("div",null,c.a.createElement("input",{id:"max",type:"text",name:"max",value:b,onChange:function(e){return M(e,"max",f)}})),c.a.createElement("div",null,c.a.createElement("label",{name:"count",htmlFor:"count"},"Count")),c.a.createElement("div",null,c.a.createElement("input",{id:"count",type:"text",name:"count",value:l,onChange:function(e){return M(e,"count",u)}})),c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){if(function(){var e=!0;return F(!1,[]),m>b&&(F(!0,["Min cannot be greater than Max"]),e=!1),e}()){for(var e=[],t=0;t<l;t++){var n=Math.floor(Math.random()*(b-m))+m;e.push(n)}F(!0,e)}}},"Generate")))},i=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,18)).then(function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,l=t.getLCP,u=t.getTTFB;n(e),a(e),c(e),l(e),u(e)})};u.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(o,null))),i()},4:function(e,t,n){e.exports=n(17)}},[[4,3,2]]]);
//# sourceMappingURL=main.dba56a56.chunk.js.map