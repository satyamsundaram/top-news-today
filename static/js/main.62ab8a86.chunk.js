(this.webpackJsonpnewnews=this.webpackJsonpnewnews||[]).push([[0],{11:function(n,t,c){},14:function(n,t,c){"use strict";c.r(t);var e=c(1),r=c.n(e),o=c(6),u=c.n(o),i=(c(11),c(3)),s=c.n(i),a=c(5),l=c(2),j=c(0),b=function(){var n=Object(e.useState)([]),t=Object(l.a)(n,2),c=t[0],r=t[1],o=Object(e.useState)(!0),u=Object(l.a)(o,2),i=u[0],b=u[1],d=Object(e.useState)(!1),h=Object(l.a)(d,2),O=h[0],x=h[1],f=Object(e.useState)("in"),m=Object(l.a)(f,2),y=m[0],N=m[1],k=Object(e.useState)("3c9e55f01a8744e6aabbb9075620df28"),C=Object(l.a)(k,2),p=C[0],g=C[1],v="http://newsapi.org/v2/top-headlines?country=".concat(y,"&apiKey=")+p,w=Object(e.useState)(v),S=Object(l.a)(w,2),I=S[0],A=S[1],T=function(){var n=Object(a.a)(s.a.mark((function n(){var t,c;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(I);case 2:if((t=n.sent).status>=200&&t.status<300){n.next=8;break}b(!1),x(!0),n.next=13;break;case 8:return n.next=10,t.json();case 10:c=n.sent,r(c.articles),b(!1);case 13:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),z=function(){var n=Object(a.a)(s.a.mark((function n(t){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:N(t),A("http://newsapi.org/v2/top-headlines?country=".concat(t,"&apiKey=")+p),T();case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return Object(e.useEffect)((function(){T()})),i?Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"Loading..."})}):O?(g("5effd7fa704f4219bd24507a1c66b214"),A("http://newsapi.org/v2/top-headlines?country=".concat(y,"&apiKey=")+p),Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"Error..."})})):c.length<1?Object(j.jsxs)("div",{className:"empty",children:[Object(j.jsx)("h1",{children:"Top News Today"}),Object(j.jsx)("a",{href:"/public/index.html",children:"Refresh News"}),Object(j.jsx)("footer",{children:Object(j.jsx)("h3",{children:"API used: newsapi.org"})})]}):Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{id:"page-container",children:[Object(j.jsx)("h1",{children:"Top News Today"}),Object(j.jsxs)("div",{className:"countries",children:[Object(j.jsx)("h3",{children:Object(j.jsx)("b",{children:"Country: "})}),Object(j.jsx)("button",{className:"country",onClick:function(){return z("ar")},children:"Argentina"}),Object(j.jsx)("button",{className:"country",onClick:function(){return z("at")},children:"Austria"}),Object(j.jsx)("button",{className:"country",onClick:function(){return z("au")},children:"Australia"}),Object(j.jsx)("button",{className:"country",onClick:function(){return z("be")},children:"Belgium"}),Object(j.jsx)("button",{className:"country",onClick:function(){return z("bg")},children:"Bulgaria"}),Object(j.jsx)("button",{className:"country",onClick:function(){return z("br")},children:"Brazil"}),Object(j.jsx)("button",{className:"country",onClick:function(){return z("ca")},children:"Canada"}),Object(j.jsx)("button",{className:"country",onClick:function(){return z("cn")},children:"China"}),Object(j.jsx)("button",{className:"country",onClick:function(){return z("co")},children:"Colombia"}),Object(j.jsx)("button",{className:"country",onClick:function(){return z("cu")},children:"Cuba"}),Object(j.jsx)("button",{className:"country",onClick:function(){return z("cz")},children:"Czechia"}),Object(j.jsx)("button",{className:"country",onClick:function(){return z("eg")},children:"Egypt"}),Object(j.jsx)("button",{className:"country",onClick:function(){return z("fr")},children:"France"}),Object(j.jsx)("button",{className:"country",onClick:function(){return z("de")},children:"Germany"}),Object(j.jsx)("button",{className:"country",onClick:function(){return z("gr")},children:"Greece"}),Object(j.jsx)("button",{className:"country",onClick:function(){return z("hk")},children:"Hong Kong"}),Object(j.jsx)("button",{className:"country",onClick:function(){return z("hu")},children:"Hungary"}),Object(j.jsx)("button",{className:"country",onClick:function(){return z("id")},children:"Indonesia"}),Object(j.jsx)("button",{className:"country",onClick:function(){return z("ie")},children:"Ireland"}),Object(j.jsx)("button",{className:"country",onClick:function(){return z("il")},children:"Israel"}),Object(j.jsx)("button",{className:"country",onClick:function(){return z("in")},children:"India"}),Object(j.jsx)("button",{className:"country",onClick:function(){return z("it")},children:"Italy"}),Object(j.jsx)("button",{className:"country",onClick:function(){return z("jp")},children:"Japan"}),Object(j.jsx)("button",{className:"country",onClick:function(){return z("lt")},children:"Lithuania"}),Object(j.jsx)("button",{className:"country",onClick:function(){return z("lv")},children:"Latvia"}),Object(j.jsx)("button",{className:"country",onClick:function(){return z("ma")},children:"Morocco"}),Object(j.jsx)("button",{className:"country",onClick:function(){return z("mx")},children:"Mexico"}),Object(j.jsx)("button",{className:"country",onClick:function(){return z("my")},children:"Malaysia"}),Object(j.jsx)("button",{className:"country",onClick:function(){return z("ng")},children:"Nigeria"}),Object(j.jsx)("button",{className:"country",onClick:function(){return z("nl")},children:"Netherlands"}),Object(j.jsx)("button",{className:"country",onClick:function(){return z("no")},children:"Norway"}),Object(j.jsx)("button",{className:"country",onClick:function(){return z("nz")},children:"New Zealand"}),Object(j.jsx)("button",{className:"country",onClick:function(){return z("ph")},children:"Philippines"}),Object(j.jsx)("button",{className:"country",onClick:function(){return z("pl")},children:"Poland"}),Object(j.jsx)("button",{className:"country",onClick:function(){return z("pt")},children:"Portugal"}),Object(j.jsx)("button",{className:"country",onClick:function(){return z("ro")},children:"Romania"}),Object(j.jsx)("button",{className:"country",onClick:function(){return z("ru")},children:"Russia"}),Object(j.jsx)("button",{className:"country",onClick:function(){return z("sa")},children:"Saudi Arabia"}),Object(j.jsx)("button",{className:"country",onClick:function(){return z("rs")},children:"Serbia"}),Object(j.jsx)("button",{className:"country",onClick:function(){return z("sg")},children:"Singapore"}),Object(j.jsx)("button",{className:"country",onClick:function(){return z("si")},children:"Slovenia"}),Object(j.jsx)("button",{className:"country",onClick:function(){return z("sk")},children:"Slovakia"}),Object(j.jsx)("button",{className:"country",onClick:function(){return z("za")},children:"South Africa"}),Object(j.jsx)("button",{className:"country",onClick:function(){return z("kr")},children:"South Korea"}),Object(j.jsx)("button",{className:"country",onClick:function(){return z("se")},children:"Sweden"}),Object(j.jsx)("button",{className:"country",onClick:function(){return z("ch")},children:"Switzerland"}),Object(j.jsx)("button",{className:"country",onClick:function(){return z("th")},children:"Thailand"}),Object(j.jsx)("button",{className:"country",onClick:function(){return z("tr")},children:"Turkey"}),Object(j.jsx)("button",{className:"country",onClick:function(){return z("tw")},children:"Taiwan"}),Object(j.jsx)("button",{className:"country",onClick:function(){return z("ae")},children:"UAE"}),Object(j.jsx)("button",{className:"country",onClick:function(){return z("gb")},children:"UK"}),Object(j.jsx)("button",{className:"country",onClick:function(){return z("ua")},children:"Ukraine"}),Object(j.jsx)("button",{className:"country",onClick:function(){return z("us")},children:"USA"}),Object(j.jsx)("button",{className:"country",onClick:function(){return z("ve")},children:"Venezuela"})]}),Object(j.jsx)("div",{className:"topnews",children:c.map((function(n,t){var e=n.title,o=n.urlToImage,u=n.description,i=n.url,s=n.source,a=n.author;return Object(j.jsxs)("div",{className:"brief",children:[Object(j.jsx)("img",{src:o,alt:""}),Object(j.jsx)("h4",{children:Object(j.jsx)("a",{href:i,children:e})}),Object(j.jsxs)("p",{children:[u,Object(j.jsx)("a",{href:i,children:" Read more"})]}),Object(j.jsxs)("div",{className:"source",children:[Object(j.jsx)("p",{children:s.id}),Object(j.jsx)("p",{children:a})]}),Object(j.jsx)("button",{className:"btn",onClick:function(){return function(n){var t=c.filter((function(t){return t.title!==n}));r(t)}(e)},children:"Not Interested"})]},t)}))}),Object(j.jsx)("footer",{children:Object(j.jsx)("h3",{children:"API used: newsapi.org"})})]})})};var d=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(b,{})})};u.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(d,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.62ab8a86.chunk.js.map