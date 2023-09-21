"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[486],{7486:function(n,e,r){r.r(e),r.d(e,{default:function(){return N}});var t,o,i,a,s,c,u,d,l,p,f,x,b=r(9439),h=r(2791),g=r(168),m=r(5706),w=m.Z.div(t||(t=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n\n  width: 800px;\n  padding: 20px;\n  margin-top: 20px;\n\n  background-color: #332b00;\n  border: 2px solid #f2ab26;\n  border-radius: 20px;\n"]))),Z=r(8174),v=m.Z.form(o||(o=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n\n  width: 400px;\n"]))),y=m.Z.label(i||(i=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n\n  font-size: 24px;\n  color: #f2ab26;\n"]))),j=m.Z.input(a||(a=(0,g.Z)(["\n  width: 300px;\n  height: 40px;\n  font-size: 20px;\n  padding: 10px;\n\n  background-color: #332b00;\n  border-radius: 16px;\n  outline: none;\n  border: 2px solid#f2ab26;\n  color: #f2ab26;\n\n  transition: 300ms;\n\n  :hover,\n  :focus {\n    border: 2px solid #00f90f;\n  }\n"]))),k=m.Z.button(s||(s=(0,g.Z)(["\n  width: 120px;\n  height: 40px;\n\n  background-color: #332b00;\n  border-radius: 16px;\n  outline: none;\n  border: 2px solid#f2ab26;\n  color: #f2ab26;\n\n  font-size: 20px;\n\n  cursor: pointer;\n  transition: 300ms;\n\n  :hover {\n    background-color: #002b00;\n    border: 2px solid #00f90f;\n    color: #00f90f;\n  }\n"]))),C=r(3329),S=function(n){var e=n.onSubmit,r=(0,h.useState)(""),t=(0,b.Z)(r,2),o=t[0],i=t[1];return(0,C.jsxs)(v,{onSubmit:function(n){n.preventDefault(),""!==o.trim()?(e(o),i("")):Z.Am.warning("\u0412\u043e\u0443-\u0432\u043e\u0443 \u043a\u043e\u0437\u0430\u0447\u0435, \u0432\u0432\u0435\u0434\u0438 \u0449\u043e\u0441\u044c)")},children:[(0,C.jsxs)(y,{children:["\u0417\u043d\u0430\u0439\u0434\u0438 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438:",(0,C.jsx)(j,{type:"text",name:"searchText",value:o,onChange:function(n){var e=n.currentTarget.value;i(e)},autoComplete:"off"})]}),(0,C.jsx)(k,{type:"submit",children:"\u0428\u0443\u043a\u0430\u0442\u0438"})]})},L=r(5861),M=r(4687),z=r.n(M),E=r(8966),_=function(){return(0,C.jsx)(E.iT,{height:40,width:40,color:"#f2ab26",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"oval-loading",secondaryColor:"#f2ab26",strokeWidth:2,strokeWidthSecondary:2})},I=r(1243),R=function(){var n=(0,L.Z)(z().mark((function n(e,r){var t;return z().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t={key:"35900010-e6fba30fbbb71a29105fd08a0",q:r,image_type:"photo",orientation:"horizontal",per_page:12,page:e},n.abrupt("return",I.Z.get("https://pixabay.com/api/",{params:t}));case 2:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),T=m.Z.ul(c||(c=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  flex-wrap: wrap;\n\n  width: 700px;\n  padding: 20px;\n  margin-top: 20px;\n\n  border: 2px solid #f2ab26;\n  border-radius: 20px;\n"]))),U=m.Z.li(u||(u=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  width: 200px;\n  height: 150px;\n\n  border: 2px solid #f2ab26;\n  border-radius: 20px;\n  overflow: hidden;\n\n  transition: 300ms;\n\n  :hover {\n    border-color: #00f90f;\n    scale: 1.05;\n  }\n"]))),O=m.Z.img(d||(d=(0,g.Z)(["\n  width: 100%;\n  border-radius: 20px;\n"]))),q=m.Z.button(l||(l=(0,g.Z)(["\n  width: 280px;\n  height: 60px;\n\n  background-color: #332b00;\n  border-radius: 16px;\n  outline: none;\n  border: 2px solid#f2ab26;\n  color: #f2ab26;\n\n  font-size: 20px;\n\n  cursor: pointer;\n  transition: 300ms;\n\n  :hover {\n    background-color: #002b00;\n    border: 2px solid #00f90f;\n    color: #00f90f;\n  }\n"]))),P=[],V=function(n){var e=n.searchValue,r=(0,h.useState)(P),t=(0,b.Z)(r,2),o=t[0],i=t[1],a=(0,h.useState)(!1),s=(0,b.Z)(a,2),c=s[0],u=s[1],d=(0,h.useState)(1),l=(0,b.Z)(d,2),p=l[0],f=l[1],x=(0,h.useState)(0),g=(0,b.Z)(x,2),m=g[0],w=g[1],Z=(0,h.useMemo)((function(){return function(){var n=(0,L.Z)(z().mark((function n(e,r,t){var o;return z().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u(!0),n.next=3,R(e,t);case 3:o=n.sent,u(!1),i(r.concat(o.data.hits)),w(o.data.totalHits),f(e);case 8:case"end":return n.stop()}}),n)})));return function(e,r,t){return n.apply(this,arguments)}}()}),[]);(0,h.useEffect)((function(){""!==e&&Z(1,P,e)}),[e,Z]);var v=(0,h.useContext)(J);return(0,C.jsxs)(T,{children:[o.map((function(n){return(0,C.jsx)(U,{onClick:function(){return v(n.largeImageURL)},children:(0,C.jsx)(O,{src:n.webformatURL})},n.id)})),(0,C.jsx)(q,{onClick:function(){return Z(p+1,o,e)},hidden:12*p>m,children:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u0449\u0435..."}),c&&(0,C.jsx)(_,{})]})},W=m.Z.img(p||(p=(0,g.Z)(["\n  width: 100%;\n  border-radius: 20px;\n"]))),A=r(4164),D=m.Z.div(f||(f=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.2);\n  transform: scale(1);\n  padding: 15px;\n"]))),F=m.Z.div(x||(x=(0,g.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n\n  width: 600px;\n  max-height: 80%;\n  background: #332b00;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),\n    0px 2px 1px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  border: 2px solid #f2ab26;\n  padding: 20px;\n  overflow-y: auto;\n\n  color: #f2ab26;\n  font-size: 20px;\n\n  transition: 300ms;\n  opacity: ",";\n"])),(function(n){return n.showImg?1:0})),H=document.querySelector("#modal-root"),B=function(n){var e=n.onClose,r=n.showImg,t=n.children,o=(0,h.useMemo)((function(){return function(n){"Escape"===n.code&&e()}}),[e]);(0,h.useEffect)((function(){return window.addEventListener("keydown",o),function(){window.removeEventListener("keydown",o)}}),[o]);return(0,A.createPortal)((0,C.jsx)(D,{onClick:function(n){n.currentTarget===n.target&&e()},children:(0,C.jsx)(F,{showImg:r,children:t})}),H)},G=function(n){var e=n.onClose,r=n.imgURL,t=(0,h.useState)(!0),o=(0,b.Z)(t,2),i=o[0],a=o[1];return(0,h.useEffect)((function(){r||a(!0)}),[r]),r?(0,C.jsx)(B,{onClose:e,showImg:!i,children:(0,C.jsx)(W,{src:r,onLoad:function(){return a(!1)}})}):""},J=(0,h.createContext)(),K=function(n){var e=n.onOpenModalClick,r=n.showModal,t=(0,h.useState)(""),o=(0,b.Z)(t,2),i=o[0],a=o[1],s=(0,h.useState)(""),c=(0,b.Z)(s,2),u=c[0],d=c[1];return(0,C.jsx)(J.Provider,{value:d,children:(0,C.jsxs)(w,{children:[(0,C.jsx)(S,{onSubmit:function(n){return a(n)}}),(0,C.jsx)(V,{searchValue:i,onOpenModalClick:e,showModal:r}),(0,C.jsx)(G,{onClose:function(){return d("")},imgURL:u})]})})},N=function(){var n=(0,h.useState)(!1),e=(0,b.Z)(n,2),r=e[0],t=e[1];return(0,C.jsx)(C.Fragment,{children:(0,C.jsx)(K,{onOpenModalClick:function(){t((function(n){return!n}))},showModal:r})})}}}]);
//# sourceMappingURL=486.2a7f837f.chunk.js.map