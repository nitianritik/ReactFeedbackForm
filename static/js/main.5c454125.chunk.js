(this.webpackJsonpfeedform=this.webpackJsonpfeedform||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),i=c(4),a=c.n(i),l=(c(12),c(2)),j=(c(13),c(7)),r=c(0);var b=function(e){var t,c=e.SetThings,s=Object(n.useState)(),i=Object(l.a)(s,2),a=i[0],b=i[1],d=Object(n.useState)(),o=Object(l.a)(d,2),O=o[0],x=o[1],h=Object(n.useState)(),u=Object(l.a)(h,2),m=u[0],p=u[1],f=Object(n.useState)(),v=Object(l.a)(f,2),g=v[0],y=v[1],N=Object(n.useState)(),S=Object(l.a)(N,2),C=S[0],F=S[1];return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"LeftSide",children:[Object(r.jsx)("p",{children:"\ud83d\udd34\ud83d\udfe1\ud83d\udfe2 "})," ",Object(r.jsx)("b",{children:Object(r.jsx)("p",{style:{display:"inline",color:"black"},children:"Enter Your Feedback"})}),Object(r.jsx)("hr",{}),Object(r.jsxs)("div",{className:"LeftSideInner",children:[Object(r.jsxs)("form",{id:"form1",children:[Object(r.jsxs)("lable",{children:["First Name"," ",Object(r.jsx)("b",{children:Object(r.jsx)("p",{style:{display:"inline",color:"red"},children:"*"})})," "]}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",onChange:function(e){b(e.target.value)}}),Object(r.jsx)("br",{}),Object(r.jsx)("lable",{children:"Middle Name"}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",onChange:function(e){x(e.target.value)}}),Object(r.jsx)("br",{}),Object(r.jsxs)("lable",{children:[" ","Last Name"," ",Object(r.jsx)("b",{children:Object(r.jsx)("p",{style:{display:"inline",color:"red"},children:"*"})})," "]}),Object(r.jsx)("br",{}),Object(r.jsx)("input",{type:"text",onChange:function(e){p(e.target.value)}}),Object(r.jsx)("br",{}),Object(r.jsxs)("lable",{children:["Gender"," ",Object(r.jsx)("b",{children:Object(r.jsx)("p",{style:{display:"inline",color:"red"},children:"*"})})," "]}),Object(r.jsxs)("div",{style:{display:"inline"},children:[Object(r.jsxs)("label",{class:"containe",children:[Object(r.jsx)("input",{id:"M",onChange:function(){F("male")},type:"radio",name:"radio"}),"Male"]}),Object(r.jsxs)("label",{class:"containe",children:[Object(r.jsx)("input",{id:"F",onChange:function(){F("female")},type:"radio",name:"radio"}),"Female"]})]}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsxs)("lable",{children:["Feedback"," ",Object(r.jsx)("b",{children:Object(r.jsx)("p",{style:{display:"inline",color:"red"},children:"*"})})," "]}),Object(r.jsx)("br",{}),Object(r.jsx)("textarea",{onChange:function(e){y(e.target.value)},className:"TeAr",style:{},type:"text"}),Object(r.jsx)("br",{})]}),Object(r.jsxs)("div",{className:"Buttons",children:[Object(r.jsx)("button",{class:"Btn",type:"submit",onClick:function(){t="male"==C?"\ud83d\udc66\ud83c\udffb \ud835\udde0\ud835\uddff.  \u2192   ":"female"==C?"\ud83d\udc69\ud83c\udffb \ud835\udde0\ud835\ude00.  \u2192   ":"nope",void 0==O&&(O=""),void 0==a?alert("\u2b55 Enter First name "):void 0==m?alert("\u2b55 Enter Last name "):void 0==g?alert("\u2b55 Enter your Feedback "):"nope"==t?alert("\u2b55 Select Gender "):a.length>40?alert("\u2b55 Max First name length is  40"):O.length>40?alert("\u2b55 Max Middle name length is  40"):m.length>40?alert("\u2b55 Max Last name length is  40"):(document.getElementById("form1").reset(),c((function(e){var c=a,n=O,s=m,i=g;return b(void 0),x(void 0),p(void 0),y(void 0),[].concat(Object(j.a)(e),[{name:t+" "+c+" "+n+" "+s,feed:i}])})))},children:"Submit"}),Object(r.jsx)("p",{className:"space",children:" "}),Object(r.jsx)("button",{class:"Btn",onClick:function(){document.getElementById("form1").reset()},children:"Reset"})]})]})]})})},d=(c(15),0);var o=function(e){var t=e.Things,c=Object(n.useRef)();return d>=2&&c.current.scrollIntoView({behavior:"smooth",block:"end"}),d++,Object(r.jsxs)("div",{className:"RightSide",children:[Object(r.jsx)("p",{className:"rightMac",style:{},children:"\ud83d\udd34\ud83d\udfe1\ud83d\udfe2"}),Object(r.jsxs)("div",{className:"Cont",children:[Object(r.jsx)("b",{children:Object(r.jsx)("p",{style:{display:"inline",color:"black"},children:"Feedbacks"})}),Object(r.jsx)("hr",{}),Object(r.jsxs)("div",{className:"Cont2",id:"style-1",children:[t.map((function(e){return Object(r.jsxs)("div",{className:"card",id:"Card",children:[Object(r.jsx)("p",{children:e.name}),Object(r.jsxs)("p",{className:"says",children:["\ud83d\udcac Says \u2192 ",e.feed]})]})})),Object(r.jsx)("div",{className:"C",ref:c})]})]})]})};var O=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1];return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)("div",{className:"main",children:[Object(r.jsx)(b,{SetThings:s}),Object(r.jsx)(o,{Things:c})]})})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),i(e),a(e)}))};a.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(O,{})}),document.getElementById("root")),x()}},[[16,1,2]]]);
//# sourceMappingURL=main.5c454125.chunk.js.map