"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[367],{69974:function(ge,V,i){var j=i(94313),d=i.n(j),O=i(18855),Y=i(24773),S=i(74422),R=i(34534),a=i(17920),T=i(42628),E=i(13478),B=i(14795),he=i(99088),f=i(29088),x=["blackAlpha","whiteAlpha","brand"],ve=function(le){var X=d()(le.color,2),q=X[0],D=X[1];return(0,f.jsx)(S.Eq,{children:Object.entries(D).map(function(se){var G=d()(se,2),ee=G[0],e=G[1],W="".concat(q,".").concat(ee);return(0,f.jsx)(S.Uc,{w:"30%",children:(0,f.jsx)(S.M5,{w:"full",h:9,borderRadius:"base",bg:W,shadow:"sm",color:"whiteAlpha.800",fontSize:"sm",transitionProperty:"all",children:e})},ee)})})},w=function(le){var X=le.children,q=(0,R.qY)(),D=q.isOpen,se=q.onOpen,G=q.onClose,ee=(0,O.useRef)(null),e=(0,B.Z)(),W=e.brand,xe=e.changeBrand,fe=e.config,je=(0,O.useState)(),me=d()(je,2),ne=me[0],Oe=me[1],Z=(0,O.useMemo)(function(){return Object.entries(fe.colors).filter(function(U){var L=d()(U,2),F=L[0],$=L[1];return(0,he.Kn)($)&&!x.includes(F)})},[fe]),pe=(0,O.useMemo)(function(){return Z.filter(function(U){var L=d()(U,2),F=L[0],$=L[1];return typeof W=="string"?F===W:(0,he.Kn)(W)?Object.keys($).every(function(re){return W[re]===$[re]}):F==="purple"})[0]},[Z,W]),be=(0,O.useCallback)(function(){if(ne){var U=Z.find(function(L){return L[0]===ne})[1];xe(U)}G()},[ne,xe,Z]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a.zx,{ref:ee,position:"fixed",top:"50%",translateY:"-50%",colorScheme:"brand",right:0,zIndex:200,fontSize:"xl",onClick:se,disabled:D,children:X!=null?X:(0,f.jsx)(Y.ew,{})}),(0,f.jsxs)(T.dy,{isOpen:D,onClose:G,finalFocusRef:ee,children:[(0,f.jsx)(T.P1,{}),(0,f.jsxs)(T.sc,{children:[(0,f.jsx)(T.cC,{}),(0,f.jsx)(T.OX,{children:(0,f.jsx)(S.X6,{as:"h4",fontSize:"xl",children:(0,f.jsx)(E._H,{id:"theme.header"})})}),(0,f.jsxs)(T.Ng,{children:[(0,f.jsxs)(S.Kq,{children:[(0,f.jsxs)(S.xv,{fontSize:"md",children:["brand: ",pe[0]]}),(0,f.jsx)(ve,{color:pe})]}),Z.map(function(U,L){var F=d()(U,1),$=F[0];return(0,f.jsxs)(S.Kq,{mt:4,children:[(0,f.jsxs)(S.Ug,{justifyContent:"space-between",children:[(0,f.jsx)(S.xv,{fontSize:"md",children:$}),(0,f.jsx)(a.zx,{colorScheme:$,onClick:function(){return Oe($)},leftIcon:ne===$?(0,f.jsx)(Y.nQ,{}):void 0,children:(0,f.jsx)(E._H,{id:"theme.choose"})})]}),(0,f.jsx)(ve,{color:Z[L],hideChooseButton:!0})]},$)})]}),(0,f.jsx)(T.ze,{children:(0,f.jsxs)(a.hE,{spacing:3,children:[(0,f.jsx)(a.zx,{variant:"outline",onClick:G,children:(0,f.jsx)(E._H,{id:"theme.cancel"})}),(0,f.jsx)(a.zx,{colorScheme:"brand",onClick:be,children:(0,f.jsx)(E._H,{id:"theme.confirm"})})]})})]})]})]})};V.Z=w},99088:function(ge,V,i){i.d(V,{Kn:function(){return d},ad:function(){return O},o8:function(){return Y},wd:function(){return S},xb:function(){return R}});var j;function d(a){return Object.prototype.toString.call(a)==="[object Object]"}var O=/(mac|iphone|ipod|ipad)/i.test(typeof navigator!="undefined"?(j=navigator)===null||j===void 0?void 0:j.platform:"");function Y(a){return Object.prototype.toString.call(a)==="[object Undefined]"}function S(a){return/^(\w+:)\/\/|^(mailto|tel):/.test(a)}function R(a){return!(Array.isArray(a)?a.length:d(a)?Object.entries(a).length:a)}},14795:function(ge,V,i){i.d(V,{Z:function(){return S},f:function(){return Y}});var j=i(18855),d=i(42537),O=(0,j.createContext)({brand:d.rS.colors.purple,changeBrand:function(){}});O.displayName="DUMITHEMECHAKRA";var Y=O.Provider;function S(){return(0,j.useContext)(O)}},17132:function(ge,V,i){i.r(V),i.d(V,{default:function(){return Vn}});var j=i(18855),d=i(13478);function O(){return(0,d.WF)().themeConfig}function Y(){return(0,d.WF)().loading}var S=i(53051),R=i(34534),a=i(74422),T=i(91789),E=i(17920),B=i(24773),he=i(22484),f=i(18170),x=i.n(f),ve=i(94313),w=i.n(ve),K=i(42537),le=i(53716),X=i(87020),q=i(14795),D=i(99088),se=i(27197),G=function(r){return{".markdown":{a:{color:(0,se.xJ)("brand.500","brand.300")(r)},img:{maxWidth:"full"},"*:not(pre) code":{px:.5,py:1.5},pre:{fontSize:"sm",px:6,bgColor:"gray.50"},table:{w:"full",th:{bgColor:"gray.50"},"th, td":{px:2.5,py:4,borderColor:"gray.100"}},ul:{li:{lineHeight:"tall"}},"h1, h2, h3, h4, h5, h6":{cursor:"pointer","> a[aria-hidden]:first-child":{float:"left",width:5,paddingInlineEnd:1,marginInlineStart:-6,fontSize:0,textAlign:"left",lineHeight:"inhert","&:hover":{border:0},"> .icon-link":{transitionProperty:"visibility",transitionDuration:".3s","&::before":{content:'"#"',fontSize:"xl"}}},"&:not(:hover) > a[aria-hidden]:first-child > .icon-link":{visibility:"hidden"}}}}},ee=G,e=i(29088),W=function(r){var t=r.children,n=r.config,o=r.brand,c=o===void 0?K.rS.colors.purple:o,s=(0,S.If)(),u=s.colorMode,h=(0,j.useState)(c),v=w()(h,2),m=v[0],b=v[1],p=(0,j.useMemo)(function(){var y,g,C,I,M,A,P;return(0,le.B1)(x()(x()({initialColorMode:u!=null?u:"system",useSystemColorMode:!1,styles:x()(x()(x()({},K.rS.styles),(y=n==null?void 0:n.styles)!==null&&y!==void 0?y:{}),{},{global:function(te){var Q,z,ie;return x()(x()(x()({},(Q=K.rS.styles.global)!==null&&Q!==void 0?Q:{}),(z=n==null||(ie=n.styles)===null||ie===void 0?void 0:ie.global)!==null&&z!==void 0?z:{}),ee(te))}})},n!=null?n:{}),{},{colors:x()({brand:m},(g=n==null?void 0:n.colors)!==null&&g!==void 0?g:{}),space:x()(x()(x()({},K.rS.space),(C=n==null?void 0:n.space)!==null&&C!==void 0?C:{}),{},{18:"4.5rem"}),sizes:x()(x()(x()({},K.rS.sizes),(I=n==null?void 0:n.sizes)!==null&&I!==void 0?I:{}),{},{18:"4.5rem",screenW:"100vw",screenH:"100vh",container:x()(x()(x()({},K.rS.sizes.container),(M=n==null||(A=n.sizes)===null||A===void 0?void 0:A.container)!==null&&M!==void 0?M:{}),{},{xxl:"1392px"})}),breakpoints:x()(x()(x()({},K.rS.breakpoints),(P=n==null?void 0:n.breakpoints)!==null&&P!==void 0?P:{}),{},{xxl:"1392px"})}))},[n,u,m]),k=(0,j.useCallback)(function(y){(0,D.Kn)(y)&&b(y),typeof y=="string"&&y in p.colors&&b(p.colors[y])},[n]);return(0,e.jsx)(X.xjn,{theme:p,children:(0,e.jsx)(q.f,{value:{brand:m,changeBrand:k,config:p},children:t})})},xe=W,fe=i(69974),je=i(82688),me=i(14913),ne="DUMI-ANNOUNCEMENT",Oe="DUMI-THEME-COLOR",Z=function(){var r=(0,j.useState)(!Number(localStorage.getItem(ne))),t=w()(r,2),n=t[0],o=t[1],c=O(),s=c.announcementBar;if(!s)return null;var u=s.content,h=s.id,v=s.isCloseable,m=s.textColor,b=m===void 0?"brand.500":m,p=s.backgroundColor;return(0,e.jsx)(je.UO,{in:n,startingHeight:0,children:(0,e.jsxs)(a.xu,{id:h,display:"flex",alignItems:"center",bgColor:p,color:b,children:[(0,e.jsx)(a.M5,{flexGrow:1,children:(0,e.jsx)(a.X6,{as:"h4",size:"sm",dangerouslySetInnerHTML:{__html:u}})}),v&&(0,e.jsx)(me.P,{onClick:function(){localStorage.setItem(ne,"1"),o(!1)}})]})})},pe=Z,be=function(){var r=(0,S.If)(),t=r.toggleColorMode,n=(0,S.ff)(B.NW,B.kL);return(0,e.jsx)(E.zx,{variant:"ghost",fontSize:"xl",padding:0,onClick:function(){return t()},children:(0,e.jsx)(n,{})})},U=be,L=i(48889),F=i(76090),$=i(6051),re;(function(l){l.GITHUB="github",l.DISCORD="discord"})(re||(re={}));var $e=function(){var r=O(),t=r.social;return!t||!Object.keys(t).length?null:(0,e.jsx)(a.Kq,{direction:"row",spacing:0,children:Object.entries(t).map(function(n){var o=w()(n,2),c=o[0],s=o[1],u=s.name,h=s.link,v=s.target,m=v===void 0?"__blank":v;return(0,e.jsx)(E.zx,{as:"a",variant:"ghost",datatype:u,href:h,target:m,fontSize:"xl",padding:0,children:c===re.GITHUB?(0,e.jsx)(L.JO,{as:F.iyW}):(0,e.jsx)(L.JO,{as:$.Mqf})},c)})})},Me=$e,ce=i(56587),_=i(42628);function Ae(l){var r=l.pathname,t=l.current,n=l.target,o="base"in t?r.replace(t.base.replace(/\/$/,""),""):r.replace(new RegExp("".concat(t.suffix,"$")),"");return"base"in n?"".concat(n.base).concat(o).replace(/^\/\//,"/"):"".concat(o).concat(n.suffix)}var Pe=function(){var r=(0,d.WF)(),t=r.locales,n=(0,d.YB)(),o=n.locale,c=(0,d.TH)(),s=c.pathname,u=(0,d.bU)(),h=(0,R.qY)(),v=h.isOpen,m=h.onOpen,b=h.onClose,p=(0,j.useRef)(null),k=(0,j.useMemo)(function(){var g;return(g=t.find(function(C){return C.id===o}))===null||g===void 0?void 0:g.name},[t,o]),y=(0,j.useCallback)(function(g){d.m8.push(Ae({pathname:s,current:u,target:t.find(function(C){var I=C.id;return I===g})}))},[t,s]);return t.length<=1?null:(0,e.jsxs)(a.xu,{pl:{base:2.5,md:0},children:[(0,e.jsx)(T.di,{above:"md",children:(0,e.jsxs)(ce.v2,{children:[(0,e.jsx)(ce.j2,{as:E.zx,variant:"outline",rightIcon:(0,e.jsx)(B.v4,{}),colorScheme:"brand",children:k}),(0,e.jsx)(ce.qy,{children:(0,e.jsx)(ce.__,{defaultValue:o,type:"radio",onChange:function(C){return y(C)},children:t.map(function(g){var C=g.id,I=g.name;return(0,e.jsx)(ce.ii,{value:C,children:I},C)})})})]})}),(0,e.jsxs)(T.c,{above:"md",children:[(0,e.jsx)(E.zx,{ref:p,variant:"outline",colorScheme:"brand",onClick:m,children:k}),(0,e.jsxs)(_.dy,{isOpen:v,onClose:b,finalFocusRef:p,placement:"top",children:[(0,e.jsx)(_.P1,{}),(0,e.jsxs)(_.sc,{h:"screenH",backdropFilter:"saturate(50%) blur(8px)",children:[(0,e.jsx)(_.cC,{}),(0,e.jsx)(_.Ng,{children:(0,e.jsx)(a.Kq,{children:t.map(function(g){var C=g.id,I=g.name;return(0,e.jsx)(E.zx,{variant:"ghost",colorScheme:C===o?"brand":void 0,onClick:function(){y(C),b()},children:I},C)})})})]})]})]})]})},He=Pe,Ce=i(87536),Re=i.p+"static/dumi-theme-chakra-logo.bb3e588e.png",we=function(){var r=O(),t=r.name,n=r.logo,o=(0,d.bU)();return(0,e.jsx)(d.rU,{to:"base"in o?o.base:"/",children:(0,e.jsxs)(a.xu,{display:"flex",alignItems:"center",fontSize:"xl",fontWeight:"semibold",children:[(0,e.jsx)(Ce.Ee,{h:{base:8,md:10},src:n!=null?n:Re,alt:t,mr:{base:0,md:2.5}}),(0,e.jsx)(a.xv,{whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",children:t})]})})},Ke=we,We=i(4305),Ue=i.n(We),Fe=i(85881),Ne=i(49260),Ve=[["searchBox.resetButtonTitle","searchBox.resetButtonAriaLabel","searchBox.cancelButtonText","searchBox.cancelButtonAriaLabel"],["startScreen.recentSearchesTitle","startScreen.noRecentSearchesText","startScreen.saveRecentSearchButtonTitle","startScreen.removeRecentSearchButtonTitle","startScreen.favoriteSearchesTitle","startScreen.removeFavoriteSearchButtonTitle"],["errorScreen.titleText","errorScreen.helpText"],["footer.selectText","footer.selectKeyAriaLabel","footer.navigateText","footer.navigateUpKeyAriaLabel","footer.navigateDownKeyAriaLabel","footer.closeText","footer.closeKeyAriaLabel","footer.searchByText"],["noResultsScreen.noResultsText","noResultsScreen.suggestedQueryText","noResultsScreen.reportMissingResultsText","noResultsScreen.reportMissingResultsLinkText"]],Gn=i(46562),Ye=function(r){var t=r.isOpen,n=r.onClose,o=O(),c=o.search,s=(0,d.YB)(),u=(0,D.Kn)(c)?c:{},h=Ve.reduce(function(v,m){return m.forEach(function(b){var p,k=b.split("."),y=w()(k,2),g=y[0],C=y[1],I=(p=v[g])!==null&&p!==void 0?p:{};v[g]=x()(x()({},I),{},Ue()({},C,s.formatMessage({id:["algolia",b].join(".")})))}),v},{});return(0,e.jsxs)(e.Fragment,{children:[(u==null?void 0:u.appId)&&(0,e.jsx)(d.ql,{children:(0,e.jsx)("link",{rel:"preconnect",href:"https://".concat(u.appId,"-dsn.algolia.net"),crossOrigin:"anonymous"})}),t&&(0,e.jsx)(Ne.h_,{children:(0,e.jsx)(Fe.H,x()(x()({},u),{},{placeholder:s.formatMessage({id:"header.search.placeholder"}),onClose:n,initialScrollY:window.scrollY,translations:{modal:h}}))})]})},Xe=Ye,de=i(88998),J=i(13543),ye=i(22261),Ge=i(78706);function Ze(l){var r=(0,j.useCallback)(function(){var s=0,u=[];return l.forEach(function(h){h.title&&u.push({type:"title",value:{title:h.title}}),h.hints.forEach(function(v){u.push({type:"hint",activeIndex:s++,value:v})})}),[u,s]},[l]),t=(0,j.useState)(r),n=w()(t,2),o=n[0],c=n[1];return(0,j.useEffect)(function(){c(r)},[l]),o}var Je=de.m.Empty,Qe=de.m.Item,qe=de.m.List,en=de.m.Loading,nn=(0,J.m$)(de.m),rn=(0,J.m$)(Qe),tn=(0,J.m$)(qe),on=(0,J.m$)(Je),an=(0,J.m$)(en),ln={title:B.sz,page:B.xP,content:B.dY,demo:B.ON};function _e(l){var r,t,n,o;return(r=l==null||(t=l.filter)===null||t===void 0||(n=t.call(l,function(c){return c.highlighted}))===null||n===void 0||(o=n.map)===null||o===void 0?void 0:o.call(n,function(c){return c.text}))!==null&&r!==void 0?r:[]}function Ie(l){var r,t,n,o;return(r=(t=l.map)===null||t===void 0||(n=t.call(l,function(c){return c.text}))===null||n===void 0||(o=n.join)===null||o===void 0?void 0:o.call(n,""))!==null&&r!==void 0?r:""}var sn=function(r){var t,n=r.isOpen,o=r.onClose,c=(0,d.YB)(),s=(0,d.OO)(),u=s.keywords,h=s.setKeywords,v=s.result,m=s.loading,b=Ze(v),p=w()(b,1),k=p[0];return(0,e.jsxs)(_.u_,{isOpen:n,onClose:o,children:[(0,e.jsx)(_.ZA,{}),(0,e.jsxs)(_.hz,{h:{base:"screenH",md:"472px"},maxH:{base:"screenH",md:"472px"},w:{base:"screenW",md:"640px"},maxW:{base:"screenW",md:"640px"},shadow:"lg",paddingBlock:2,marginBlock:{base:0,md:16},borderRadius:{base:0,md:"md"},className:"chakra-search-result",children:[(0,e.jsx)(T.c,{above:"md",children:(0,e.jsx)(_.ol,{zIndex:20})}),(0,e.jsxs)(nn,{children:[(0,e.jsxs)(ye.BZ,{children:[(0,e.jsx)(ye.II,{colorScheme:"brand",border:"none",borderRadius:0,_focusVisible:{border:"none"},value:u,onChange:function(g){return h(g.target.value)},placeholder:c.formatMessage({id:"header.search.placeholder"})}),(0,e.jsx)(T.di,{above:"md",children:(0,e.jsx)(ye.xH,{children:(0,e.jsx)(E.zx,{variant:"unstyle",size:"xs",onClick:function(){return h("")},children:(0,e.jsx)(B.Tw,{})})})})]}),(0,e.jsx)(a.iz,{marginBlock:3}),(0,e.jsxs)(tn,{h:{base:"calc(100vh - var(--chakra-space-20) - 1px)",md:"388px"},overflow:"auto",children:[m&&!!(u!=null&&u.length)&&(0,e.jsx)(an,{h:"full",w:"full",children:(0,e.jsxs)(a.Kq,{h:"full",pt:20,justify:"center",align:"center",children:[(0,e.jsx)(Ge.$,{color:"brand.500",size:"md"}),(0,e.jsx)(a.xu,{mt:4,children:(0,e.jsx)(d._H,{id:"header.search.placeholder"})})]})}),(0,e.jsx)(on,{h:"full",w:"full",children:(0,e.jsxs)(a.Kq,{h:"full",w:"full",align:"center",pt:20,children:[(0,e.jsx)(B.PO,{color:"brand.500",fontSize:"6xl"}),(0,e.jsx)(a.xu,{mt:4,children:(0,e.jsx)(d._H,{id:"search.not.found"})})]})}),!m&&(k==null||(t=k.map)===null||t===void 0?void 0:t.call(k,function(y,g){var C=y.type,I=y.value,M=I,A=M.title,P=M.link,ae=M.highlightTitleTexts,te=M.highlightTexts,Q=M.type,z=ln[Q];return(0,e.jsx)(rn,{paddingInline:3,children:C==="title"?(0,e.jsx)(a.X6,{as:"h4",size:"sm",lineHeight:8,pt:2,colorScheme:"brand",children:A}):(0,e.jsx)(d.rU,{to:P,onClick:o,children:(0,e.jsxs)(E.zx,{display:"flex",alignItems:"center",w:"full",textAlign:"left",paddingBlock:2,mb:1,h:"max-content",_hover:{backgroundColor:"brand.400",color:"whiteAlpha.900"},children:[(0,e.jsx)(z,{}),(0,e.jsxs)(a.xu,{flexGrow:1,pl:2,children:[(0,e.jsx)(a.X6,{as:"h5",size:"sm",fontWeight:"semibold",children:(0,e.jsx)(a.y$,{query:_e(ae),styles:{fontWeight:"bold",color:"brand.500"},children:Ie(ae)})}),(0,e.jsx)(a.X6,{as:"p",size:"xs",children:(0,e.jsx)(a.y$,{query:_e(te),styles:{fontWeight:"bold",color:"brand.500"},children:Ie(te)})})]})]})})},g)}))]})]})]})]})},cn=sn;function dn(){var l;return!!(!((l=O().search)!==null&&l!==void 0)||l)}var oe;(function(l){l.CMDK="cmdk",l.DOCSEARCH="docsearch"})(oe||(oe={}));var un=function(){var r=dn(),t=(0,d.YB)(),n=O(),o=(0,R.qY)(),c=o.isOpen,s=o.onOpen,u=o.onClose,h=D.ad?"\u2318":"Ctrl",v=(0,j.useCallback)(function(){s()},[]);(0,j.useEffect)(function(){var b=function(k){!r||(((D.ad?k.metaKey:k.ctrlKey)&&k.key==="k"||k.key==="/")&&(k.preventDefault(),s()),k.key==="Escape"&&(k.preventDefault(),u()))};return document.addEventListener("keydown",b),function(){return document.removeEventListener("keydown",b)}},[r]);var m=(0,j.useMemo)(function(){var b,p;return(0,D.o8)(n.search)||typeof n.search=="boolean"&&n.search?oe.CMDK:(b=(0,D.Kn)(n.search)?(p=n.search)===null||p===void 0?void 0:p.type:oe.CMDK)!==null&&b!==void 0?b:oe.CMDK},[n]);return r?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(E.zx,{onClick:v,variant:{base:"ghost",md:"outline"},paddingInline:{base:0,md:4},leftIcon:(0,e.jsx)(T.di,{above:"md",children:(0,e.jsx)(B.W1,{})}),rightIcon:(0,e.jsx)(T.di,{above:"md",children:(0,e.jsxs)(a.Tz,{children:[h," + K"]})}),borderRadius:{base:"md",md:"2xl"},colorScheme:"brand",children:[(0,e.jsx)(T.di,{above:"md",children:t.formatMessage({id:"header.search.placeholder"})}),(0,e.jsx)(T.c,{above:"md",children:(0,e.jsx)(B.W1,{})})]}),m===oe.CMDK?(0,e.jsx)(cn,{isOpen:c,onClose:u,onOpen:s}):(0,e.jsx)(Xe,{isOpen:c,onClose:u,onOpen:s})]}):null},hn=un,vn=function(r){var t=r.children,n=(0,S.ff)("whiteAlpha.800","gray.800");return(0,e.jsx)(a.xu,{as:"header",position:"sticky",h:18,top:0,zIndex:10,w:"full",bg:n,backdropFilter:"saturate(50%) blur(8px)",shadow:"sm",children:(0,e.jsxs)(a.W2,{maxW:"container.xxl",h:"full",display:"flex",alignItems:"center",justifyContent:"space-between",children:[(0,e.jsx)(Ke,{}),(0,e.jsxs)(a.Kq,{direction:"row",spacing:{base:0,md:2.5},children:[t,(0,e.jsx)(hn,{}),(0,e.jsx)(T.di,{above:"md",children:(0,e.jsx)(Me,{})}),(0,e.jsx)(U,{}),(0,e.jsx)(He,{})]})]})})},xn=vn,Zn=(0,J.m$)(d.rU),Ee=function(){var r=(0,d.TH)(),t=r.pathname,n=(0,d.OK)(),o=(0,S.ff)("brand.500","brand.300");return(0,e.jsx)(a.Ug,{flexDirection:{base:"column",md:"row"},spacing:0,children:n.map(function(c){var s=c.link,u=c.title,h=(0,D.wd)(s);return(0,e.jsx)(E.zx,{variant:"ghost",_hover:{color:o},className:t.startsWith(s)?"active":"",sx:{"&.active":{color:o}},children:h?(0,e.jsx)("a",{href:s,target:"_blank",rel:"noreferrer",children:"title"}):(0,e.jsx)(d.rU,{to:s,children:u})},s)})})},fn=function(r){var t=r.isOpen,n=r.onClose;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(T.di,{above:"md",children:(0,e.jsx)(Ee,{})}),(0,e.jsx)(T.c,{above:"md",children:(0,e.jsxs)(_.dy,{placement:"top",isOpen:t,onClose:n,isFullHeight:!0,children:[(0,e.jsx)(_.P1,{}),(0,e.jsxs)(_.sc,{children:[(0,e.jsx)(_.cC,{}),(0,e.jsx)(_.Ng,{children:(0,e.jsx)(Ee,{})})]})]})})]})},mn=fn,pn=i(18348),gn=i.n(pn),De=i(80924);function Be(){var l,r,t,n=(l=O())!==null&&l!==void 0?l:{},o=n.hero,c=o===void 0?{}:o,s=(r=(t=(0,d.eL)().frontmatter)===null||t===void 0?void 0:t.hero)!==null&&r!==void 0?r:{};return x()({config:c},s)}function jn(){return(0,d.WF)().pkg}var bn=function(){var r=Be(),t=r.title,n=r.config;n=n===void 0?{}:n;var o=n.showVersionBadge,c=jn(),s=c.version,u=s===void 0?"unknown":s;return(0,e.jsx)(a.M5,{children:(0,e.jsxs)(a.Ug,{position:"relative",align:{base:"center",md:"start"},justifyContent:{base:"center",md:"start"},flexDirection:{base:"column",md:"row"},children:[(0,e.jsx)(a.X6,{as:"h1",mb:8,textAlign:"center",fontSize:{base:"5xl",md:"7xl"},bgGradient:"linear(to-r, brand.200, brand.500)",color:"transparent",backgroundClip:"text",textShadow:"0 var(--chakra-sizes-2-5) var(--chakra-sizes-5) var(--chakra-colors-brand-200)",children:t}),o?(0,e.jsxs)(De.Vp,{position:{base:"relative",md:"absolute"},top:{base:0,md:0},left:{base:-2,md:"100%"},colorScheme:"brand",color:"whiteAlpha.900",children:["V",u]}):null]})})},Cn=bn,yn=["config"],Sn={github:(0,e.jsx)(L.JO,{as:F.iyW}),discord:(0,e.jsx)(L.JO,{as:$.Mqf})},kn=function(r){var t,n=r.icon;return(t=Sn[n])!==null&&t!==void 0?t:(0,e.jsx)(Ce.Ee,{src:n,alt:"action button left icon"})},Tn=function(){var r=Be(),t=r.config,n=gn()(r,yn);console.log(t);var o=n!=null?n:{},c=o.actions,s=o.description,u=(0,j.useMemo)(function(){return!!(c!=null&&c.length)},[c]);return(0,D.xb)(n)?null:(0,e.jsxs)(a.W2,{maxW:"container.xxl",p:{base:10,md:16},children:[(0,e.jsx)(Cn,{}),(0,e.jsx)(a.M5,{children:(0,e.jsx)(a.xv,{fontSize:"2xl",textAlign:"center",fontWeight:"semibold",p:{base:4,md:8},pt:4,children:s})}),u&&(0,e.jsx)(a.M5,{children:(0,e.jsx)(a.Ug,{wrap:"wrap",children:c.map(function(h,v){var m=h.icon,b=h.text,p=h.link;return(0,e.jsx)(E.zx,{size:"lg",variant:v?"outline":"solid",colorScheme:v?void 0:"brand",leftIcon:m?(0,e.jsx)(kn,{icon:m}):void 0,mb:2,children:p?(0,D.wd)(p)?(0,e.jsx)("a",{href:p,target:"_blank",rel:"noreferrer",children:b}):(0,e.jsx)(d.rU,{to:p,children:b}):b},v)})})})]})},On=Tn,Le=i(86046);function Mn(){var l;return(l=(0,d.eL)().frontmatter)===null||l===void 0?void 0:l.features}var _n="container.xxl",In=function(r){var t=r.link,n=r.children;return t?(0,D.wd)(t)?(0,e.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:n}):(0,e.jsx)(d.rU,{to:t,children:n}):(0,e.jsx)(e.Fragment,{children:n})},En=function(){var r=Mn(),t=(0,S.ff)("blackAlpha.50","gray.700"),n=(0,S.ff)("blackAlpha.50","gray.500");return r!=null&&r.length?(0,e.jsx)(a.W2,{maxW:_n,paddingInline:{base:0,md:8},children:(0,e.jsx)(a.MI,{columns:{base:1,md:3},h:"max-content",children:r.map(function(o){var c=o.title,s=o.description,u=o.emoji,h=o.icon,v=o.link,m=o.tag;return(0,e.jsx)(Le.Zb,{m:"3%",bg:t,backdropFilter:"saturate(50%) blur(8px)",children:(0,e.jsxs)(Le.eW,{children:[(u||h)&&(0,e.jsxs)(a.Kq,{w:12,h:12,justify:"center",align:"center",mb:5,borderRadius:"md",bg:n,children:[u&&(0,e.jsx)(a.xv,{fontSize:6,children:u}),h&&(0,e.jsx)(Ce.Ee,{ml:u?1.5:0,boxSize:6,src:h,alt:s})]}),c&&(0,e.jsxs)(a.X6,{as:"h2",fontSize:"md",lineHeight:6,display:"flex",alignItems:"center",children:[(0,e.jsx)(In,{link:v,children:c}),m&&(0,e.jsx)(De.Vp,{color:"white",ml:2,colorScheme:"brand",size:"sm",children:m})]}),s&&(0,e.jsx)(a.xv,{opacity:.7,dangerouslySetInnerHTML:{__html:s},pt:2})]})},c)})})}):null},Dn=En,Bn=function(r){var t=r.children,n=(0,d.tx)(),o=(0,S.ff)("blackAlpha.100","whiteAlpha.200");return(0,e.jsx)(a.Kq,{flexGrow:1,paddingInline:{base:0,md:8},pt:n?{base:2,md:8}:void 0,borderLeft:n?{base:void 0,md:"1px solid"}:void 0,borderLeftColor:{base:"transparent",md:o},className:"chakra-theme-content",children:t})},Ln=Bn,zn=i(34936),$n=(0,J.m$)(d.rU),An=function(){var r=(0,d.TH)(),t=r.pathname,n=r.search,o=(0,d.eL)(),c=(0,d.WF)(),s=c.loading,u=(0,j.useRef)(0),h=(0,j.useState)([]),v=w()(h,2),m=v[0],b=v[1],p=(0,S.ff)("blackAlpha.100","whiteAlpha.200"),k=o.toc.filter(function(y){var g=y.depth;return g>1&&g<4});return(0,j.useEffect)(function(){if(!s){var y=k.map(function(g){var C=g.id;return{current:document.getElementById(C)}});b(y)}},[t,n,s]),m.length?(0,e.jsx)(zn.i,{sectionRefs:m,children:function(g){var C=g.currentElementIndexInViewport;C>-1&&(u.current=C);var I=C>-1?C:u.current;return(0,e.jsx)(a.aV,{position:"relative",_empty:{display:"none"},pl:4,borderLeft:"1px solid",h:"max-content",borderLeftColor:p,_before:{content:'""',display:"block",position:"absolute",top:"calc(var(--chakra-sizes-7) * ".concat(I,")"),left:"-0.5px",h:7,w:"px",bg:"brand.300",transitionProperty:"top",transitionDuration:"0.3s"},children:k.filter(function(M){var A=M.depth;return A>1&&A<4}).map(function(M,A){var P="#".concat(encodeURIComponent(M.id));return(0,e.jsx)(a.HC,{"data-depth":M.depth,lineHeight:7,sx:{"&[data-depth=3]":{pl:2}},children:(0,e.jsx)($n,x()(x()({to:P,title:M.title},I===A?{"data-active":!0}:{}),{},{_active:{color:"brand.300"},transitionProperty:"color",transitionDuration:"0.3s",children:(0,e.jsx)(a.xv,{fontSize:"sm",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",children:M.title})}))},M.id)})})}}):null},Se=An,Pn=(0,J.m$)(d.OL),ze=function(r){var t=r.menu,n=(0,S.ff)("whiteAlpha.500","gray.400"),o=(0,S.ff)("brand.500","brand.300"),c=(0,d.TH)(),s=c.pathname;return(0,e.jsx)(a.xu,{w:{base:"full",md:"13rem"},h:{base:"full",md:"calc(100vh - var(--chakra-sizes-18))"},position:{base:"static",md:"sticky"},top:{base:0,md:18},overflow:"auto",children:t.map(function(u,h){var v=u.title,m=u.children;return(0,e.jsxs)(a.xu,{pt:2.5,borderTop:h===t.length-1?0:"1px",borderTopColor:n,borderTopStyle:"solid",children:[(0,e.jsx)(a.X6,{h:8,lineHeight:8,as:"h2",fontSize:"md",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",children:v}),(0,e.jsx)(a.Kq,{children:m.map(function(b){var p=b.link,k=b.title,y=b.toc;return(0,e.jsxs)(a.xu,{children:[(0,e.jsx)(Pn,{position:"sticky",top:0,h:8,paddingBlock:1,display:"block",cursor:"pointer",w:"full",to:p,title:k,opacity:.9,sx:{"&.active":{color:o}},end:!0,children:(0,e.jsx)(a.xv,{as:"span",lineHeight:5,fontSize:"md",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",children:k})}),y&&(0,e.jsx)(Se,{}),p===s&&!y&&(0,e.jsx)(T.c,{above:"md",children:(0,e.jsx)(Se,{})})]},p)})})]},h)})})},Hn=function(r){var t=r.isOpen,n=r.onClose,o=(0,d.tx)(),c=(0,d.TH)(),s=c.pathname,u=(0,d.eL)(),h=(0,j.useMemo)(function(){return o?o.map(function(v){return x()(x()({},v),{},{children:v.children.map(function(m){return x()(x()({},m),{},{toc:m.link===s&&u.frontmatter.toc==="menu"})})})}):[]},[u,o,s]);return o?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(T.di,{above:"md",children:(0,e.jsx)(ze,{menu:h})}),(0,e.jsx)(T.c,{above:"md",children:(0,e.jsxs)(_.dy,{placement:"left",isOpen:t,onClose:n,isFullHeight:!0,children:[(0,e.jsx)(_.P1,{}),(0,e.jsxs)(_.sc,{children:[(0,e.jsx)(_.cC,{}),(0,e.jsx)(_.Ng,{children:(0,e.jsx)(ze,{menu:h})})]})]})})]}):null},Rn=Hn,wn=function(){var r,t=O();return(0,e.jsxs)(a.Kq,{justify:{base:"center",md:"space-between"},align:"center",direction:{base:"column",md:"row"},children:[(0,e.jsx)(a.X6,{as:"h4",size:"sm",textAlign:{base:"center",md:"left"},dangerouslySetInnerHTML:{__html:(r=t.footer)!==null&&r!==void 0?r:""}}),(0,e.jsx)(Me,{})]})},Kn=wn,Wn=i.p+"static/hero-background.b2469a49.jpg",Un=i.p+"static/hero-background-dark.dba36cdf.jpg",Fn=function(){var r,t,n,o=O(),c=(0,d.eL)(),s=(0,d.pC)(),u=(0,d.tx)(),h=(0,d.TH)(),v=h.hash,m=Y(),b=(0,S.If)(),p=b.colorMode,k=(0,S.ff)("whiteAlpha.800","gray.800"),y=(0,S.ff)("transparent","whiteAlpha.400"),g=(0,S.ff)(Wn,Un),C=(0,R.qY)(),I=C.isOpen,M=C.onOpen,A=C.onClose,P=(0,R.qY)(),ae=(0,j.useMemo)(function(){var H,N=o.name,ke=o.helmetIcon,Te=c.frontmatter;return[N,ke,(H=Te==null?void 0:Te.title)!==null&&H!==void 0?H:N].join(" ")},[o,c]),te=(0,j.useMemo)(function(){var H,N=c.frontmatter,ke=o.description;return(H=N==null?void 0:N.description)!==null&&H!==void 0?H:ke},[c,o]),Q=o.logo,z=o.keywords,ie=o.author,ue=o.thumbBackground,Yn=o.settingPanelVisible,Xn=(0,j.useMemo)(function(){return(0,D.o8)(ue)||!ue?"":typeof ue=="string"?ue:g},[ue,g]);return(0,j.useEffect)(function(){var H=v.replace("#","");H&&setTimeout(function(){var N=document.getElementById(decodeURIComponent(H));N&&(0,he.Z)(N.offsetTop-80,{maxDuration:300})},1)},[m,v]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(d.ql,{children:[Q&&(0,e.jsx)("link",{rel:"shortcut icon",href:Q}),(0,e.jsx)("meta",{name:"description",content:te}),(0,e.jsx)("meta",{property:"og:description",content:te}),(0,e.jsx)("meta",{name:"color-scheme",content:p}),(0,e.jsx)("meta",{name:"keywords",content:z==null||(r=z.join)===null||r===void 0?void 0:r.call(z,",")}),(0,e.jsx)("meta",{property:"og:keywords",content:z==null||(t=z.join)===null||t===void 0?void 0:t.call(z,",")}),(0,e.jsx)("meta",{name:"generator",content:"dumi & chakra-dumi"}),ie&&(0,e.jsx)("meta",{name:"author",content:ie}),(0,e.jsx)("title",{children:ae}),(0,e.jsx)("meta",{property:"og:title",content:ae})]}),(0,e.jsxs)(a.xu,{minH:"screenH",display:"flex",flexDirection:"column",backgroundImage:Xn,backgroundSize:"cover",backgroundRepeat:"no-repeat",children:[Yn&&(0,e.jsx)(T.di,{above:"md",children:(0,e.jsx)(fe.Z,{})}),(0,e.jsx)(pe,{}),(0,e.jsx)(xn,{children:(0,e.jsx)(mn,{isOpen:P.isOpen,onClose:P.onClose})}),u&&(0,e.jsx)(T.c,{above:"md",children:(0,e.jsx)(a.xu,{position:"sticky",top:18,zIndex:10,children:(0,e.jsxs)(a.Ug,{justify:"space-between",bg:k,borderTop:"1px",borderTopColor:y,borderTopStyle:"solid",children:[(0,e.jsx)(E.zx,{variant:"ghost",onClick:M,children:(0,e.jsx)(B.Uq,{})}),(0,e.jsx)(E.zx,{variant:"ghost",onClick:P.onOpen,children:(0,e.jsx)(B.Uq,{})})]})})}),(0,e.jsx)(On,{}),(0,e.jsx)(Dn,{}),(0,e.jsxs)(a.W2,{maxW:"container.xxl",paddingInline:6,flexGrow:1,display:"flex",className:"chakra-theme-container",children:[(0,e.jsx)(Rn,{isOpen:I,onClose:A}),(0,e.jsxs)(Ln,{children:[(0,e.jsx)(a.xu,{flexGrow:1,children:s}),(0,e.jsx)(Kn,{})]}),(c==null||(n=c.frontmatter)===null||n===void 0?void 0:n.toc)==="content"&&(0,e.jsx)(T.di,{above:"md",children:(0,e.jsx)(a.xu,{pt:8,h:"calc(100vh - var(--chakra-sizes-18))",position:"sticky",top:18,children:(0,e.jsx)(Se,{})})})]})]})]})},Nn=function(){var r,t=(r=O())!==null&&r!==void 0?r:{},n=t.brand,o=t.config;return(0,e.jsx)(xe,{brand:n,config:o,children:(0,e.jsx)(Fn,{})})},Vn=Nn}}]);
