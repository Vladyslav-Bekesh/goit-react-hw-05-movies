"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[325],{589:function(e,r,t){t.d(r,{Z:function(){return u}});t(791);var n=t(689),a=t(184);var u=function(e){var r=e.films,t=(0,n.s0)();return 0!==r.length?(0,a.jsx)("ul",{children:r.map((function(e){var r=e.id,n=e.original_title;return(0,a.jsx)("li",{onClick:function(){!function(e){t("/movies/".concat(e))}(r)},children:(0,a.jsx)("p",{children:n})},r)}))}):void 0}},498:function(e,r,t){t.d(r,{Z:function(){return u}});var n=t(643),a=t(184);var u=function(){return(0,a.jsx)(n.yk,{height:"100",width:"100",color:"#4fa94d",wrapperStyle:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%)"},wrapperClass:"",visible:!0,outerCircleColor:"",innerCircleColor:"",barColor:"",ariaLabel:"circles-with-bar-loading"})}},325:function(e,r,t){t.r(r),t.d(r,{default:function(){return p}});var n=t(861),a=t(439),u=t(757),i=t.n(u),c=t(791),o=t(87),s=t(184);var l=function(e){var r=e.searchParams,t=e.setSearchParams,n=(0,c.useState)(r.get("query")||""),u=(0,a.Z)(n,2),i=u[0],o=u[1];return(0,s.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===i)return alert("Enter correct query"),r.delete("query"),void t(r);t({query:i})},children:[(0,s.jsx)("input",{type:"text",value:i,onChange:function(e){var r=e.target;o(r.value)}}),(0,s.jsx)("button",{type:"submit",children:"Search"})]})},f=t(498),h=t(589),d=t(141);var p=function(){var e=(0,o.lr)(),r=(0,a.Z)(e,2),t=r[0],u=r[1],p=(0,c.useState)([]),v=(0,a.Z)(p,2),m=v[0],x=v[1],j=(0,c.useState)("idle"),g=(0,a.Z)(j,2),y=g[0],b=g[1];return(0,c.useEffect)((function(){var e=function(){var e=(0,n.Z)(i().mark((function e(r){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b("pending"),e.prev=1,e.next=4,(0,d.z1)(r);case 4:t=e.sent,0===(n=t.results).length?b("empty"):(x(n),b("done")),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),b("rejected"),console.error("Error occurred during API request:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(r){return e.apply(this,arguments)}}();null!==t.get("query")&&e(t.get("query"))}),[t]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l,{searchParams:t,setSearchParams:u}),"pending"===y&&(0,s.jsx)(f.Z,{}),"rejected"===y&&(0,s.jsx)("h2",{children:"error"}),"empty"===y&&(0,s.jsx)("h2",{children:"\xaf\\_(\u30c4)_/\xaf"}),"done"===y&&(0,s.jsx)(h.Z,{films:m})]})}}}]);
//# sourceMappingURL=325.2bab8629.chunk.js.map