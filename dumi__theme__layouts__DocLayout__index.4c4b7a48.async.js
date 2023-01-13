"use strict";(self.webpackChunk_example_pkg=self.webpackChunk_example_pkg||[]).push([[367],{14319:function(Fe,le,n){var b=n(20447),d=n.n(b),R=n(18855),D=n(83551),ie=n(3758),M=n(33117),se=n(64708),O=n(15052),T=n(26491),Z=n(54613),ce=n(73919),P=n(32603),de=n(87267),Te=n(49149),De=n(98776),Pe=n(80846),U=n(92721),Ce=n(58114),he=n(24738),z=n(36853),Be=n(51178),_=n(60158),Ze=n(12561),e=n(61819),v=n(29088),Ie=["blackAlpha","whiteAlpha","brand"],I=function(xe){var G=d()(xe.color,2),q=G[0],K=G[1];return(0,v.jsx)(M.E,{children:Object.entries(K).map(function(ee){var N=d()(ee,2),ne=N[0],E=N[1],V="".concat(q,".").concat(ne);return(0,v.jsx)(M.U,{w:"30%",children:(0,v.jsx)(se.M,{w:"full",h:9,borderRadius:"base",bg:V,shadow:"sm",color:"whiteAlpha.800",fontSize:"sm",transitionProperty:"all",children:E})},ne)})})},Le=function(xe){var G=xe.children,q=(0,O.q)(),K=q.isOpen,ee=q.onOpen,N=q.onClose,ne=(0,R.useRef)(null),E=(0,Ze.Z)(),V=E.brand,be=E.changeBrand,ye=E.config,Re=(0,R.useState)(),re=d()(Re,2),te=re[0],Se=re[1],$=(0,R.useMemo)(function(){return Object.entries(ye.colors).filter(function(Y){var W=d()(Y,2),Q=W[0],L=W[1];return(0,e.Kn)(L)&&!Ie.includes(Q)})},[ye]),Me=(0,R.useMemo)(function(){return $.filter(function(Y){var W=d()(Y,2),Q=W[0],L=W[1];return typeof V=="string"?Q===V:(0,e.Kn)(V)?Object.keys(L).every(function(me){return V[me]===L[me]}):Q==="purple"})[0]},[$,V]),ke=(0,R.useCallback)(function(){if(te){var Y=$.find(function(W){return W[0]===te})[1];be(Y)}N()},[te,be,$]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(T.z,{ref:ne,position:"fixed",top:"50%",translateY:"-50%",colorScheme:"brand",right:0,zIndex:200,fontSize:"xl",onClick:ee,disabled:K,children:G!=null?G:(0,v.jsx)(D.e,{})}),(0,v.jsxs)(Z.d,{isOpen:K,onClose:N,finalFocusRef:ne,children:[(0,v.jsx)(ce.Z,{}),(0,v.jsxs)(P.s,{children:[(0,v.jsx)(de.o,{}),(0,v.jsx)(Te.x,{children:(0,v.jsx)(De.X,{as:"h4",fontSize:"xl",children:(0,v.jsx)(_._H,{id:"theme.header"})})}),(0,v.jsxs)(Pe.f,{children:[(0,v.jsxs)(U.K,{children:[(0,v.jsxs)(Ce.x,{fontSize:"md",children:["brand: ",Me[0]]}),(0,v.jsx)(I,{color:Me})]}),$.map(function(Y,W){var Q=d()(Y,1),L=Q[0];return(0,v.jsxs)(U.K,{mt:4,children:[(0,v.jsxs)(he.U,{justifyContent:"space-between",children:[(0,v.jsx)(Ce.x,{fontSize:"md",children:L}),(0,v.jsx)(T.z,{colorScheme:L,onClick:function(){return Se(L)},leftIcon:te===L?(0,v.jsx)(ie.n,{}):void 0,children:(0,v.jsx)(_._H,{id:"theme.choose"})})]}),(0,v.jsx)(I,{color:$[W],hideChooseButton:!0})]},L)})]}),(0,v.jsx)(z.m,{children:(0,v.jsxs)(Be.h,{spacing:3,children:[(0,v.jsx)(T.z,{variant:"outline",onClick:N,children:(0,v.jsx)(_._H,{id:"theme.cancel"})}),(0,v.jsx)(T.z,{colorScheme:"brand",onClick:ke,children:(0,v.jsx)(_._H,{id:"theme.confirm"})})]})})]})]})]})};le.Z=Le},12561:function(Fe,le,n){n.d(le,{Z:function(){return ie},f:function(){return D}});var b=n(18855),d=n(8980),R=(0,b.createContext)({brand:d.rS.colors.purple,changeBrand:function(){}});R.displayName="DUMITHEMECHAKRA";var D=R.Provider;function ie(){return(0,b.useContext)(R)}},75277:function(Fe,le,n){n.r(le),n.d(le,{default:function(){return Or}});var b=n(18855),d=n(60158);function R(){return(0,d.WF)().loading}var D=n(65023),ie=n(80541),M=n(80760),se=n(15052),O=n(87687),T=n(69441),Z=n(38607),ce=n(24738),P=n(26491),de=n(92105),Te=n(22484),De=n(14319),Pe=n(20447),U=n.n(Pe),Ce=n(82127),he=n(64708),z=n(98776),Be=n(27371),_="DUMI-ANNOUNCEMENT",Ze="DUMI-THEME-COLOR",e=n(29088),v=function(){var t=(0,b.useState)(!Number(localStorage.getItem(_))),o=U()(t,2),r=o[0],a=o[1],s=(0,D.Z)(),l=s.announcementBar;if(!l)return null;var c=l.content,h=l.id,u=l.isCloseable,f=l.textColor,j=f===void 0?"brand.500":f,x=l.backgroundColor;return(0,e.jsx)(Ce.U,{in:r,startingHeight:0,children:(0,e.jsxs)(O.xu,{id:h,display:"flex",alignItems:"center",bgColor:x,color:j,children:[(0,e.jsx)(he.M,{flexGrow:1,children:(0,e.jsx)(z.X,{as:"h4",size:"sm",dangerouslySetInnerHTML:{__html:c}})}),u&&(0,e.jsx)(Be.P,{onClick:function(){localStorage.setItem(_,"1"),a(!1)}})]})})},Ie=v,I=n(92721),Le=function(t){var o=t.children,r=(0,d.tx)(),a=(0,M.ff)("blackAlpha.100","whiteAlpha.200");return(0,e.jsx)(I.K,{w:r?{base:"full",md:"calc(100% - 13rem)"}:"full",maxW:r?{base:"full",md:"calc(100% - 13rem)"}:"full",flexGrow:1,paddingInline:{base:0,md:8},pt:r?{base:2,md:8}:void 0,borderLeft:r?{base:void 0,md:"1px solid"}:void 0,borderLeftColor:{base:"transparent",md:a},className:"chakra-theme-content",children:o})},Ae=Le,xe=n(31097),G=n(90660),q=n(81109),K=n(58114),ee=n(40192),N=n(72800);function ne(){var i;return(i=(0,d.eL)().frontmatter)===null||i===void 0?void 0:i.features}var E=n(61819),V="container.xxl",be=function(t){var o=t.link,r=t.children;return o?(0,E.wd)(o)?(0,e.jsx)("a",{href:o,target:"_blank",rel:"noreferrer",children:r}):(0,e.jsx)(d.rU,{to:o,children:r}):(0,e.jsx)(e.Fragment,{children:r})},ye=function(){var t=ne(),o=(0,M.ff)("blackAlpha.50","gray.700"),r=(0,M.ff)("blackAlpha.50","gray.500");return t!=null&&t.length?(0,e.jsx)(de.W,{maxW:V,paddingInline:{base:0,md:8},children:(0,e.jsx)(xe.M,{columns:{base:1,md:3},h:"max-content",children:t.map(function(a){var s=a.title,l=a.description,c=a.emoji,h=a.icon,u=a.link,f=a.tag;return(0,e.jsx)(G.Z,{m:"3%",bg:o,backdropFilter:"saturate(50%) blur(8px)",children:(0,e.jsxs)(q.e,{children:[(c||h)&&(0,e.jsxs)(I.K,{w:12,h:12,justify:"center",align:"center",mb:5,borderRadius:"md",bg:r,children:[c&&(0,e.jsx)(K.x,{fontSize:6,children:c}),h&&(0,e.jsx)(ee.E,{ml:c?1.5:0,boxSize:6,src:h,alt:l})]}),s&&(0,e.jsxs)(z.X,{as:"h2",fontSize:"md",lineHeight:6,display:"flex",alignItems:"center",children:[(0,e.jsx)(be,{link:u,children:s}),f&&(0,e.jsx)(N.Vp,{color:"white",ml:2,colorScheme:"brand",size:"sm",children:f})]}),l&&(0,e.jsx)(K.x,{opacity:.7,dangerouslySetInnerHTML:{__html:l},pt:2})]})},s)})})}):null},Re=ye,re=n(15753),te=n(98214),Se=n(6051),$;(function(i){i.GITHUB="github",i.DISCORD="discord"})($||($={}));var Me=function(){var t=(0,D.Z)(),o=t.social;return!o||!Object.keys(o).length?null:(0,e.jsx)(I.K,{direction:"row",spacing:0,children:Object.entries(o).map(function(r){var a=U()(r,2),s=a[0],l=a[1],c=l.name,h=l.link,u=l.target,f=u===void 0?"__blank":u;return(0,e.jsx)(P.z,{as:"a",variant:"ghost",datatype:c,href:h,target:f,fontSize:"xl",padding:0,children:s===$.GITHUB?(0,e.jsx)(re.J,{as:te.iyW}):(0,e.jsx)(re.J,{as:Se.Mqf})},s)})})},ke=Me,Y=function(){var t,o=(0,D.Z)();return(0,e.jsxs)(I.K,{justify:{base:"center",md:"space-between"},align:"center",direction:{base:"column",md:"row"},children:[(0,e.jsx)(z.X,{as:"h4",size:"sm",textAlign:{base:"center",md:"left"},dangerouslySetInnerHTML:{__html:(t=o.footer)!==null&&t!==void 0?t:""}}),(0,e.jsx)(ke,{})]})},W=Y,Q=n(15274),L=n(1857),me=function(){var t=(0,M.If)(),o=t.toggleColorMode,r=(0,M.ff)(Q.N,L.k);return(0,e.jsx)(P.z,{variant:"ghost",fontSize:"xl",padding:0,onClick:function(){return o()},children:(0,e.jsx)(r,{})})},_e=me,qe=n(52695),en=n(31332),nn=n(39633),rn=n(27473),tn=n(64153),Ke=n(54613),Ee=n(73919),We=n(32603),Oe=n(87267),He=n(80846),on=n(50758);function an(i){var t=i.pathname,o=i.current,r=i.target,a="base"in o?t.replace(o.base.replace(/\/$/,""),""):t.replace(new RegExp("".concat(o.suffix,"$")),"");return"base"in r?"".concat(r.base).concat(a).replace(/^\/\//,"/"):"".concat(a).concat(r.suffix)}var ln=function(){var t=(0,d.WF)(),o=t.locales,r=(0,d.YB)(),a=r.locale,s=(0,d.TH)(),l=s.pathname,c=(0,d.bU)(),h=(0,se.q)(),u=h.isOpen,f=h.onOpen,j=h.onClose,x=(0,b.useRef)(null),y=(0,b.useMemo)(function(){var m;return(m=o.find(function(p){return p.id===a}))===null||m===void 0?void 0:m.name},[o,a]),C=(0,b.useCallback)(function(m){d.m8.push(an({pathname:l,current:c,target:o.find(function(p){var k=p.id;return k===m})}))},[o,l]);return o.length<=1?null:(0,e.jsxs)(O.xu,{pl:{base:2.5,md:0},children:[(0,e.jsx)(T.d,{above:"md",children:(0,e.jsxs)(qe.v,{children:[(0,e.jsx)(en.j,{as:P.z,variant:"outline",rightIcon:(0,e.jsx)(on.v,{}),colorScheme:"brand",children:y}),(0,e.jsx)(nn.q,{children:(0,e.jsx)(rn._,{defaultValue:a,type:"radio",onChange:function(p){return C(p)},children:o.map(function(m){var p=m.id,k=m.name;return(0,e.jsx)(tn.i,{value:p,children:k},p)})})})]})}),(0,e.jsxs)(Z.c,{above:"md",children:[(0,e.jsx)(P.z,{ref:x,variant:"outline",colorScheme:"brand",onClick:f,children:y}),(0,e.jsxs)(Ke.d,{isOpen:u,onClose:j,finalFocusRef:x,placement:"top",children:[(0,e.jsx)(Ee.Z,{}),(0,e.jsxs)(We.s,{h:"screenH",backdropFilter:"saturate(50%) blur(8px)",children:[(0,e.jsx)(Oe.o,{}),(0,e.jsx)(He.f,{children:(0,e.jsx)(I.K,{children:o.map(function(m){var p=m.id,k=m.name;return(0,e.jsx)(P.z,{variant:"ghost",colorScheme:p===a?"brand":void 0,onClick:function(){C(p),j()},children:k},p)})})})]})]})]})]})},sn=ln,cn=n.p+"static/dumi-theme-chakra-logo.bb3e588e.png",dn=function(){var t=(0,D.Z)(),o=t.name,r=t.logo,a=(0,d.bU)(),s=(0,b.useMemo)(function(){var l="base"in a?a.base:"/";return l.endsWith("/")?l:l+"/"},[a]);return(0,e.jsx)(d.rU,{to:s,children:(0,e.jsxs)(O.xu,{display:"flex",alignItems:"center",fontSize:"xl",fontWeight:"semibold",children:[(0,e.jsx)(ee.E,{h:{base:8,md:10},src:r!=null?r:cn,alt:o,mr:{base:0,md:2.5}}),(0,e.jsx)(K.x,{whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",children:o})]})})},hn=dn,un=n(51605),Ne=n(32583),vn=n(62241),fn=n.n(vn),xn=n(50215),g=n.n(xn),mn=n(40169),gn=n(26132),jn=[["searchBox.resetButtonTitle","searchBox.resetButtonAriaLabel","searchBox.cancelButtonText","searchBox.cancelButtonAriaLabel"],["startScreen.recentSearchesTitle","startScreen.noRecentSearchesText","startScreen.saveRecentSearchButtonTitle","startScreen.removeRecentSearchButtonTitle","startScreen.favoriteSearchesTitle","startScreen.removeFavoriteSearchButtonTitle"],["errorScreen.titleText","errorScreen.helpText"],["footer.selectText","footer.selectKeyAriaLabel","footer.navigateText","footer.navigateUpKeyAriaLabel","footer.navigateDownKeyAriaLabel","footer.closeText","footer.closeKeyAriaLabel","footer.searchByText"],["noResultsScreen.noResultsText","noResultsScreen.suggestedQueryText","noResultsScreen.reportMissingResultsText","noResultsScreen.reportMissingResultsLinkText"]],Pr=n(60470),pn=function(t){var o=t.isOpen,r=t.onClose,a=(0,D.Z)(),s=a.search,l=(0,d.YB)(),c=(0,E.Kn)(s)?s:{},h=jn.reduce(function(u,f){return f.forEach(function(j){var x,y=j.split("."),C=U()(y,2),m=C[0],p=C[1],k=(x=u[m])!==null&&x!==void 0?x:{};u[m]=g()(g()({},k),{},fn()({},p,l.formatMessage({id:["algolia",j].join(".")})))}),u},{});return(0,e.jsxs)(e.Fragment,{children:[(c==null?void 0:c.appId)&&(0,e.jsx)(d.ql,{children:(0,e.jsx)("link",{rel:"preconnect",href:"https://".concat(c.appId,"-dsn.algolia.net"),crossOrigin:"anonymous"})}),o&&(0,e.jsx)(gn.h,{children:(0,e.jsx)(mn.H,g()(g()({},c),{},{placeholder:l.formatMessage({id:"header.search.placeholder"}),onClose:r,initialScrollY:window.scrollY,translations:{modal:h}}))})]})},Cn=pn,ge=n(88998),J=n(2892),bn=n(43739),yn=n(66217),Sn=n(18645),Mn=n(24930),kn=n(11739),En=n(58935),On=n(10696),Ve=n(55558),Tn=n(61315),Dn=n(96219),Pn=n(88257),Bn=n(11359),In=n(9787),Ln=n(80516);function An(i){var t=(0,b.useCallback)(function(){var l=0,c=[];return i.forEach(function(h){h.title&&c.push({type:"title",value:{title:h.title}}),h.hints.forEach(function(u){c.push({type:"hint",activeIndex:l++,value:u})})}),[c,l]},[i]),o=(0,b.useState)(t),r=U()(o,2),a=r[0],s=r[1];return(0,b.useEffect)(function(){s(t)},[i]),a}var Rn=ge.m.Empty,Kn=ge.m.Item,Wn=ge.m.List,Hn=ge.m.Loading,Un=(0,J.m)(ge.m),zn=(0,J.m)(Kn),$n=(0,J.m)(Wn),Fn=(0,J.m)(Rn),Zn=(0,J.m)(Hn),Nn={title:Tn.s,page:Dn.x,content:Pn.d,demo:Bn.O};function Ye(i){var t,o,r,a;return(t=i==null||(o=i.filter)===null||o===void 0||(r=o.call(i,function(s){return s.highlighted}))===null||r===void 0||(a=r.map)===null||a===void 0?void 0:a.call(r,function(s){return s.text}))!==null&&t!==void 0?t:[]}function Xe(i){var t,o,r,a;return(t=(o=i.map)===null||o===void 0||(r=o.call(i,function(s){return s.text}))===null||r===void 0||(a=r.join)===null||a===void 0?void 0:a.call(r,""))!==null&&t!==void 0?t:""}var Vn=function(t){var o,r=t.isOpen,a=t.onClose,s=(0,d.YB)(),l=(0,d.OO)(),c=l.keywords,h=l.setKeywords,u=l.result,f=l.loading,j=An(u),x=U()(j,1),y=x[0];return(0,e.jsxs)(bn.u_,{isOpen:r,onClose:a,children:[(0,e.jsx)(Ee.Z,{}),(0,e.jsxs)(yn.h,{h:{base:"screenH",md:"472px"},maxH:{base:"screenH",md:"472px"},w:{base:"screenW",md:"640px"},maxW:{base:"screenW",md:"640px"},shadow:"lg",paddingBlock:2,marginBlock:{base:0,md:16},borderRadius:{base:0,md:"md"},className:"chakra-search-result",children:[(0,e.jsx)(Z.c,{above:"md",children:(0,e.jsx)(Oe.o,{zIndex:20})}),(0,e.jsxs)(Un,{children:[(0,e.jsxs)(Sn.B,{children:[(0,e.jsx)(Mn.I,{colorScheme:"brand",border:"none",borderRadius:0,_focusVisible:{border:"none"},value:c,onChange:function(m){return h(m.target.value)},placeholder:s.formatMessage({id:"header.search.placeholder"})}),(0,e.jsx)(T.d,{above:"md",children:(0,e.jsx)(kn.x,{children:(0,e.jsx)(P.z,{variant:"unstyle",size:"xs",onClick:function(){return h("")},children:(0,e.jsx)(In.T,{})})})})]}),(0,e.jsx)(En.i,{marginBlock:3}),(0,e.jsxs)($n,{h:{base:"calc(100vh - var(--chakra-space-20) - 1px)",md:"388px"},overflow:"auto",children:[f&&!!(c!=null&&c.length)&&(0,e.jsx)(Zn,{h:"full",w:"full",children:(0,e.jsxs)(I.K,{h:"full",pt:20,justify:"center",align:"center",children:[(0,e.jsx)(On.$,{color:"brand.500",size:"md"}),(0,e.jsx)(O.xu,{mt:4,children:(0,e.jsx)(d._H,{id:"header.search.placeholder"})})]})}),(0,e.jsx)(Fn,{h:"full",w:"full",children:(0,e.jsxs)(I.K,{h:"full",w:"full",align:"center",pt:20,children:[(0,e.jsx)(Ln.P,{color:"brand.500",fontSize:"6xl"}),(0,e.jsx)(O.xu,{mt:4,children:(0,e.jsx)(d._H,{id:"search.not.found"})})]})}),!f&&(y==null||(o=y.map)===null||o===void 0?void 0:o.call(y,function(C,m){var p=C.type,k=C.value,S=k,A=S.title,H=S.link,ve=S.highlightTitleTexts,ae=S.highlightTexts,w=S.type,B=Nn[w];return(0,e.jsx)(zn,{paddingInline:3,children:p==="title"?(0,e.jsx)(z.X,{as:"h4",size:"sm",lineHeight:8,pt:2,colorScheme:"brand",children:A}):(0,e.jsx)(d.rU,{to:H,onClick:a,children:(0,e.jsxs)(P.z,{display:"flex",alignItems:"center",w:"full",textAlign:"left",paddingBlock:2,mb:1,h:"max-content",_hover:{backgroundColor:"brand.400",color:"whiteAlpha.900"},children:[(0,e.jsx)(B,{}),(0,e.jsxs)(O.xu,{flexGrow:1,pl:2,w:"calc(100% - 1em - var(--chakra-space-2))",children:[(0,e.jsx)(z.X,{as:"h5",size:"sm",fontWeight:"semibold",children:(0,e.jsx)(Ve.y$,{query:Ye(ve),styles:{fontWeight:"bold",color:"brand.500"},children:Xe(ve)})}),(0,e.jsx)(z.X,{as:"p",size:"xs",w:"full",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",children:(0,e.jsx)(Ve.y$,{query:Ye(ae),styles:{fontWeight:"bold",color:"brand.500"},children:Xe(ae)})})]})]})})},m)}))]})]})]})]})},Yn=Vn;function Xn(){var i;return!!(!((i=(0,D.Z)().search)!==null&&i!==void 0)||i)}var ue;(function(i){i.CMDK="cmdk",i.DOCSEARCH="docsearch"})(ue||(ue={}));var Gn=function(){var t=Xn(),o=(0,d.YB)(),r=(0,D.Z)(),a=(0,se.q)(),s=a.isOpen,l=a.onOpen,c=a.onClose,h=E.ad?"\u2318":"Ctrl",u=(0,b.useCallback)(function(){l()},[]);(0,b.useEffect)(function(){var j=function(y){t&&(((E.ad?y.metaKey:y.ctrlKey)&&y.key==="k"||y.key==="/")&&(y.preventDefault(),l()),y.key==="Escape"&&(y.preventDefault(),c()))};return document.addEventListener("keydown",j),function(){return document.removeEventListener("keydown",j)}},[t]);var f=(0,b.useMemo)(function(){var j,x;return(0,E.o8)(r.search)||typeof r.search=="boolean"&&r.search?ue.CMDK:(j=(0,E.Kn)(r.search)?(x=r.search)===null||x===void 0?void 0:x.type:ue.CMDK)!==null&&j!==void 0?j:ue.CMDK},[r]);return t?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(P.z,{onClick:u,variant:{base:"ghost",md:"outline"},paddingInline:{base:0,md:4},leftIcon:(0,e.jsx)(T.d,{above:"md",children:(0,e.jsx)(Ne.W,{})}),rightIcon:(0,e.jsx)(T.d,{above:"md",children:(0,e.jsxs)(un.T,{children:[h," + K"]})}),colorScheme:"brand",children:[(0,e.jsx)(T.d,{above:"md",children:o.formatMessage({id:"header.search.placeholder"})}),(0,e.jsx)(Z.c,{above:"md",children:(0,e.jsx)(Ne.W,{})})]}),f===ue.CMDK?(0,e.jsx)(Yn,{isOpen:s,onClose:c,onOpen:l}):(0,e.jsx)(Cn,{isOpen:s,onClose:c,onOpen:l})]}):null},Qn=Gn,Jn=function(t){var o=t.children,r=(0,M.ff)("whiteAlpha.800","gray.800");return(0,e.jsx)(O.xu,{as:"header",position:"sticky",h:18,top:0,zIndex:10,w:"full",bg:r,backdropFilter:"saturate(50%) blur(8px)",shadow:"sm",children:(0,e.jsxs)(de.W,{maxW:"container.xxl",h:"full",display:"flex",alignItems:"center",justifyContent:"space-between",children:[(0,e.jsx)(hn,{}),(0,e.jsxs)(I.K,{direction:"row",spacing:{base:0,md:2.5},children:[o,(0,e.jsx)(Qn,{}),(0,e.jsx)(T.d,{above:"md",children:(0,e.jsx)(ke,{})}),(0,e.jsx)(_e,{}),(0,e.jsx)(sn,{})]})]})})},wn=Jn,_n=n(53807),qn=n.n(_n);function Ge(){var i,t,o,r=(i=(0,D.Z)())!==null&&i!==void 0?i:{},a=r.hero,s=a===void 0?{}:a,l=(t=(o=(0,d.eL)().frontmatter)===null||o===void 0?void 0:o.hero)!==null&&t!==void 0?t:{};return g()({config:s},l)}function er(){return(0,d.WF)().pkg}var nr=function(){var t=Ge(),o=t.title,r=t.config,a=r===void 0?{}:r,s=a.showVersionBadge,l=er(),c=l.version,h=c===void 0?"unknown":c;return(0,e.jsx)(he.M,{children:(0,e.jsxs)(ce.U,{position:"relative",align:{base:"center",md:"start"},justifyContent:{base:"center",md:"start"},flexDirection:{base:"column",md:"row"},children:[(0,e.jsx)(z.X,{as:"h1",mb:8,textAlign:"center",fontSize:{base:"5xl",md:"7xl"},bgGradient:"linear(to-r, brand.200, brand.500)",color:"transparent",backgroundClip:"text",textShadow:"0 var(--chakra-sizes-2-5) var(--chakra-sizes-5) var(--chakra-colors-brand-200)",children:o}),s?(0,e.jsxs)(N.Vp,{position:{base:"relative",md:"absolute"},top:{base:0,md:0},left:{base:-2,md:"100%"},colorScheme:"brand",color:"whiteAlpha.900",children:["V",h]}):null]})})},rr=nr,tr=["config"],or={github:(0,e.jsx)(re.J,{as:te.iyW}),discord:(0,e.jsx)(re.J,{as:Se.Mqf})},ar=function(t){var o,r=t.icon;return(o=or[r])!==null&&o!==void 0?o:(0,e.jsx)(ee.E,{src:r,alt:"action button left icon"})},lr=function(){var t=Ge(),o=t.config,r=qn()(t,tr);console.log(o);var a=r!=null?r:{},s=a.actions,l=a.description,c=(0,b.useMemo)(function(){return!!(s!=null&&s.length)},[s]);return(0,E.xb)(r)?null:(0,e.jsxs)(de.W,{maxW:"container.xxl",p:{base:10,md:16},children:[(0,e.jsx)(rr,{}),(0,e.jsx)(he.M,{children:(0,e.jsx)(K.x,{fontSize:"2xl",textAlign:"center",fontWeight:"semibold",p:{base:4,md:8},pt:4,children:l})}),c&&(0,e.jsx)(he.M,{children:(0,e.jsx)(ce.U,{wrap:"wrap",children:s.map(function(h,u){var f=h.icon,j=h.text,x=h.link;return(0,e.jsx)(P.z,{size:"lg",variant:u?"outline":"solid",colorScheme:u?void 0:"brand",leftIcon:f?(0,e.jsx)(ar,{icon:f}):void 0,mb:2,children:x?(0,E.wd)(x)?(0,e.jsx)("a",{href:x,target:"_blank",rel:"noreferrer",children:j}):(0,e.jsx)(d.rU,{to:x,children:j}):j},u)})})})]})},ir=lr,Br=(0,J.m)(d.rU),Qe=function(){var t=(0,d.TH)(),o=t.pathname,r=(0,d.OK)(),a=(0,M.ff)("brand.500","brand.300");return(0,e.jsx)(ce.U,{flexDirection:{base:"column",md:"row"},spacing:0,children:r.map(function(s){var l=s.link,c=s.title,h=(0,E.wd)(l);return(0,e.jsx)(P.z,{variant:"ghost",_hover:{color:a},className:o.startsWith(l)?"active":"",sx:{"&.active":{color:a}},children:h?(0,e.jsx)("a",{href:l,target:"_blank",rel:"noreferrer",children:"title"}):(0,e.jsx)(d.rU,{to:l,children:c})},l)})})},sr=function(t){var o=t.isOpen,r=t.onClose;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(T.d,{above:"md",children:(0,e.jsx)(Qe,{})}),(0,e.jsx)(Z.c,{above:"md",children:(0,e.jsxs)(Ke.d,{placement:"top",isOpen:o,onClose:r,isFullHeight:!0,children:[(0,e.jsx)(Ee.Z,{}),(0,e.jsxs)(We.s,{children:[(0,e.jsx)(Oe.o,{}),(0,e.jsx)(He.f,{children:(0,e.jsx)(Qe,{})})]})]})})]})},cr=sr,dr=n(56616),Je=n(27285),hr=(0,J.m)(d.rU),ur=function(){var t=(0,d.TH)(),o=t.pathname,r=t.search,a=(0,d.eL)(),s=(0,d.WF)(),l=s.loading,c=(0,b.useRef)(0),h=(0,b.useState)([]),u=U()(h,2),f=u[0],j=u[1],x=(0,M.ff)("blackAlpha.100","whiteAlpha.200"),y=a.toc.filter(function(C){var m=C.depth;return m>1&&m<4});return(0,b.useEffect)(function(){if(!l){var C=y.map(function(m){var p=m.id;return{current:document.getElementById(p)}});j(C)}},[o,r,l]),f.length?(0,e.jsx)(dr.i,{sectionRefs:f,children:function(m){var p=m.currentElementIndexInViewport;p>-1&&(c.current=p);var k=p>-1?p:c.current;return(0,e.jsx)(Je.aV,{position:"relative",_empty:{display:"none"},pl:4,borderLeft:"1px solid",h:"max-content",borderLeftColor:x,_before:{content:'""',display:"block",position:"absolute",top:"calc(var(--chakra-sizes-7) * ".concat(k,")"),left:"-0.5px",h:7,w:"px",bg:"brand.300",transitionProperty:"top",transitionDuration:"0.3s"},children:y.filter(function(S){var A=S.depth;return A>1&&A<4}).map(function(S,A){var H="#".concat(encodeURIComponent(S.id));return(0,e.jsx)(Je.HC,{"data-depth":S.depth,lineHeight:7,sx:{'&[data-depth="3"]':{pl:2}},children:(0,e.jsx)(hr,g()(g()({to:H,title:S.title},k===A?{"data-active":!0}:{}),{},{_active:{color:"brand.300"},transitionProperty:"color",transitionDuration:"0.3s",children:(0,e.jsx)(K.x,{fontSize:"sm",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",children:S.title})}))},S.id)})})}}):null},Ue=ur,vr=(0,J.m)(d.OL),we=function(t){var o=t.menu,r=(0,M.ff)("whiteAlpha.500","gray.700"),a=(0,M.ff)("brand.500","brand.300"),s=(0,d.TH)(),l=s.pathname;return(0,e.jsx)(O.xu,{w:{base:"full",md:"13rem"},minW:{base:"full",md:"13rem"},h:{base:"full",md:"calc(100vh - var(--chakra-sizes-18))"},position:{base:"static",md:"sticky"},top:{base:0,md:18},overflow:"auto",children:o.map(function(c,h){var u=c.title,f=c.children;return(0,e.jsxs)(O.xu,{pt:2.5,borderTop:h===o.length-1?0:"1px",borderTopColor:r,borderTopStyle:"solid",children:[(0,e.jsx)(z.X,{h:8,lineHeight:8,as:"h2",fontSize:"md",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",children:u}),(0,e.jsx)(I.K,{children:f.map(function(j){var x=j.link,y=j.title,C=j.toc;return(0,e.jsxs)(O.xu,{children:[(0,e.jsx)(vr,{position:"sticky",top:0,h:8,paddingBlock:1,display:"block",cursor:"pointer",w:"full",to:x,title:y,opacity:.9,sx:{"&.active":{color:a}},end:!0,children:(0,e.jsx)(K.x,{as:"span",lineHeight:5,fontSize:"md",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",children:y})}),C&&(0,e.jsx)(Ue,{}),x===l&&!C&&(0,e.jsx)(Z.c,{above:"md",children:(0,e.jsx)(Ue,{})})]},x)})})]},h)})})},fr=function(t){var o=t.isOpen,r=t.onClose,a=(0,d.tx)(),s=(0,d.TH)(),l=s.pathname,c=(0,d.eL)(),h=(0,b.useMemo)(function(){return a?a.map(function(u){return g()(g()({},u),{},{children:u.children.map(function(f){return g()(g()({},f),{},{toc:f.link===l&&c.frontmatter.toc==="menu"})})})}):[]},[c,a,l]);return a?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(T.d,{above:"md",children:(0,e.jsx)(we,{menu:h})}),(0,e.jsx)(Z.c,{above:"md",children:(0,e.jsxs)(Ke.d,{placement:"left",isOpen:o,onClose:r,isFullHeight:!0,children:[(0,e.jsx)(Ee.Z,{}),(0,e.jsxs)(We.s,{children:[(0,e.jsx)(Oe.o,{}),(0,e.jsx)(He.f,{children:(0,e.jsx)(we,{menu:h})})]})]})})]}):null},xr=fr,oe=n(8980),mr=n(88767),gr=n(71129),jr=n(12561),je=n(94664),pr=function(t){return{".markdown":{a:{color:(0,je.x)("brand.500","brand.300")(t)},img:{maxWidth:"full"},"*:not(pre) code":{px:.5,py:1.5,bgColor:(0,je.x)("gray.50","gray.800")(t),color:(0,je.x)("brand.500","brand.300")(t),fontSize:"md"},pre:{fontSize:"sm",px:6,bgColor:"gray.50"},table:{th:{color:(0,je.x)("gray.600","gray.400")(t)},"th, td":{borderColor:(0,je.x)("gray.100","gray.700")(t)}},ul:{li:{lineHeight:"tall"}},"h1, h2, h3, h4, h5, h6":{cursor:"pointer","> a[aria-hidden]:first-of-type":{float:"left",width:5,paddingInlineEnd:1,marginInlineStart:-6,fontSize:0,textAlign:"left",lineHeight:"inhert","&:hover":{border:0},"> .icon-link":{transitionProperty:"visibility",transitionDuration:".3s","&::before":{content:'"#"',fontSize:"xl"}}},"&:not(:hover) > a[aria-hidden]:first-of-type > .icon-link":{visibility:"hidden"}}}}},Cr=pr,br=function(t){var o=t.children,r=t.config,a=t.brand,s=a===void 0?oe.rS.colors.purple:a,l=(0,M.If)(),c=l.colorMode,h=(0,b.useState)(s),u=U()(h,2),f=u[0],j=u[1],x=(0,b.useMemo)(function(){var C,m,p,k,S,A,H;return(0,mr.B1)(g()(g()({initialColorMode:c!=null?c:"system",useSystemColorMode:!1,styles:g()(g()(g()({},oe.rS.styles),(C=r==null?void 0:r.styles)!==null&&C!==void 0?C:{}),{},{global:function(ae){var w,B,fe;return g()(g()(g()({},(w=oe.rS.styles.global)!==null&&w!==void 0?w:{}),(B=r==null||(fe=r.styles)===null||fe===void 0?void 0:fe.global)!==null&&B!==void 0?B:{}),{},{body:{p:0}},Cr(ae))}})},r!=null?r:{}),{},{colors:g()({brand:f},(m=r==null?void 0:r.colors)!==null&&m!==void 0?m:{}),space:g()(g()(g()({},oe.rS.space),(p=r==null?void 0:r.space)!==null&&p!==void 0?p:{}),{},{18:"4.5rem"}),sizes:g()(g()(g()({},oe.rS.sizes),(k=r==null?void 0:r.sizes)!==null&&k!==void 0?k:{}),{},{18:"4.5rem",screenW:"100vw",screenH:"100vh",container:g()(g()(g()({},oe.rS.sizes.container),(S=r==null||(A=r.sizes)===null||A===void 0?void 0:A.container)!==null&&S!==void 0?S:{}),{},{xxl:"1392px"})}),breakpoints:g()(g()(g()({},oe.rS.breakpoints),(H=r==null?void 0:r.breakpoints)!==null&&H!==void 0?H:{}),{},{xxl:"1392px"})}))},[r,c,f]),y=(0,b.useCallback)(function(C){(0,E.Kn)(C)&&j(C),typeof C=="string"&&C in x.colors&&j(x.colors[C])},[r]);return(0,e.jsx)(gr.x,{theme:x,children:(0,e.jsx)(jr.f,{value:{brand:f,changeBrand:y,config:x},children:o})})},yr=br,Sr=n.p+"static/hero-background-dark.dba36cdf.jpg",Mr=n.p+"static/hero-background.b2469a49.jpg",kr=function(){var t,o,r,a=(0,D.Z)(),s=(0,d.eL)(),l=(0,d.pC)(),c=(0,d.tx)(),h=(0,d.TH)(),u=h.hash,f=R(),j=(0,M.If)(),x=j.colorMode,y=(0,M.ff)("whiteAlpha.800","gray.800"),C=(0,M.ff)("transparent","whiteAlpha.400"),m=(0,M.ff)(Mr,Sr),p=(0,se.q)(),k=p.isOpen,S=p.onOpen,A=p.onClose,H=(0,se.q)(),ve=(0,b.useMemo)(function(){var F,X=a.name,ze=a.helmetIcon,$e=s.frontmatter;return[X,ze,(F=$e==null?void 0:$e.title)!==null&&F!==void 0?F:X].join(" ")},[a,s]),ae=(0,b.useMemo)(function(){var F,X=s.frontmatter,ze=a.description;return(F=X==null?void 0:X.description)!==null&&F!==void 0?F:ze},[s,a]),w=a.logo,B=a.keywords,fe=a.author,pe=a.thumbBackground,Tr=a.settingPanelVisible,Dr=(0,b.useMemo)(function(){return(0,E.o8)(pe)||!pe?"":typeof pe=="string"?pe:m},[pe,m]);return(0,b.useEffect)(function(){var F=u.replace("#","");F&&setTimeout(function(){var X=document.getElementById(decodeURIComponent(F));X&&(0,Te.Z)(X.offsetTop-80,{maxDuration:300})},1)},[f,u]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(d.ql,{children:[w&&(0,e.jsx)("link",{rel:"shortcut icon",href:w}),(0,e.jsx)("meta",{name:"description",content:ae}),(0,e.jsx)("meta",{property:"og:description",content:ae}),(0,e.jsx)("meta",{name:"color-scheme",content:x}),(0,e.jsx)("meta",{name:"keywords",content:B==null||(t=B.join)===null||t===void 0?void 0:t.call(B,",")}),(0,e.jsx)("meta",{property:"og:keywords",content:B==null||(o=B.join)===null||o===void 0?void 0:o.call(B,",")}),(0,e.jsx)("meta",{name:"generator",content:"dumi & chakra-dumi"}),fe&&(0,e.jsx)("meta",{name:"author",content:fe}),(0,e.jsx)("title",{children:ve}),(0,e.jsx)("meta",{property:"og:title",content:ve})]}),(0,e.jsxs)(O.xu,{minH:"screenH",display:"flex",flexDirection:"column",backgroundImage:Dr,backgroundSize:"cover",backgroundRepeat:"no-repeat",children:[Tr&&(0,e.jsx)(T.d,{above:"md",children:(0,e.jsx)(De.Z,{})}),(0,e.jsx)(Ie,{}),(0,e.jsx)(wn,{children:(0,e.jsx)(cr,{isOpen:H.isOpen,onClose:H.onClose})}),c&&(0,e.jsx)(Z.c,{above:"md",children:(0,e.jsx)(O.xu,{position:"sticky",top:18,zIndex:10,children:(0,e.jsxs)(ce.U,{justify:"space-between",bg:y,borderTop:"1px",borderTopColor:C,borderTopStyle:"solid",children:[(0,e.jsx)(P.z,{variant:"ghost",onClick:S,children:(0,e.jsx)(ie.U,{})}),(0,e.jsx)(P.z,{variant:"ghost",onClick:H.onOpen,children:(0,e.jsx)(ie.U,{})})]})})}),(0,e.jsx)(ir,{}),(0,e.jsx)(Re,{}),(0,e.jsxs)(de.W,{maxW:"container.xxl",paddingInline:6,flexGrow:1,display:"flex",className:"chakra-theme-container",children:[(0,e.jsx)(xr,{isOpen:k,onClose:A}),(0,e.jsxs)(Ae,{children:[(0,e.jsx)(O.xu,{flexGrow:1,children:l}),(0,e.jsx)(W,{})]}),(s==null||(r=s.frontmatter)===null||r===void 0?void 0:r.toc)==="content"&&(0,e.jsx)(T.d,{above:"md",children:(0,e.jsx)(O.xu,{pt:8,h:"calc(100vh - var(--chakra-sizes-18))",position:"sticky",top:18,children:(0,e.jsx)(Ue,{})})})]})]})]})},Er=function(){var t,o=(t=(0,D.Z)())!==null&&t!==void 0?t:{},r=o.brand,a=o.config;return(0,e.jsx)(yr,{brand:r,config:a,children:(0,e.jsx)(kr,{})})},Or=Er}}]);
