(this["webpackJsonplekhboard-web-ui"]=this["webpackJsonplekhboard-web-ui"]||[]).push([[0],{178:function(e,n,t){},179:function(e,n,t){},285:function(e,n,t){"use strict";t.r(n);var i=t(1),a=t.n(i),r=t(10),o=t.n(r),s=(t(178),t(142)),c=t(143),d=t(167),l=t(165),u=(t(179),t(13)),j=t(317),b=t(321),p=t(322),x=t(323),m=t(327),h=t(328),O=t(288),g=t(324),f=t(152),v=t.n(f),w={root:{flexGrow:1},title:{flexGrow:1},arrowUp:{top:"54px",position:"absolute"},MainGrid:{display:"flex",position:"relative"},outClass:{position:"relative",margin:"0 auto",bottom:"2px",border:"1px solid #d1d1d1"},paper:{background:"#fff",borderRadius:"8px",padding:"15px 126px",textAlign:"center",color:"#000",position:"absolute",margin:"20px",marginRight:"0",right:"-10px",top:"4px",minHeight:"180px","&::before":{content:'"s"',position:"absolute",width:0,height:0,borderLeft:"19px solid transparent",borderRight:"19px solid transparent",borderBottom:"28px solid #fff",top:"-28px",right:"27px",marginLeft:"auto",fontSize:0,zIndex:9}},responsicePaper:{width:"0px",background:"#fff",borderRadius:"8px",padding:"0px 66px",textAlign:"center",color:"#000",margin:"20px",marginRight:"0",right:"19px",top:"13px",minHeight:"123px","&::before":{content:'"s"',position:"absolute",width:0,height:0,borderLeft:"19px solid transparent",borderRight:"19px solid transparent",borderBottom:"28px solid #fff",top:"-28px",right:"27px",marginLeft:"auto",fontSize:0,zIndex:9}},textIcon:{margin:"-7px",paddingRight:"8px"},checkIcon:{position:"absolute",margin:"5px"}},k=t(315),y=t(319),z=t(320),C=t(2),M=Object(k.a)(w),N=function(e){var n=M();return Object(C.jsx)(j.a,{container:!0,children:Object(C.jsx)(y.a,{onClickAway:e.close,children:Object(C.jsx)(j.a,{item:!0,xs:12,className:n.MainGrid,children:Object(C.jsxs)("div",{className:e.Class,children:[Object(C.jsx)("div",{children:e.message}),Object(C.jsx)(z.a,{open:e.open})]})})})})},I=(t(150),Object(k.a)(w),t(23)),S=t(166),B=t(154),R=t.n(B),D=t(94),E=t(151),A=(t(280),function(){var e=D.EditorState.createEmpty(),n=Object(i.useState)(e),t=Object(u.a)(n,2),a=(t[0],t[1]);return Object(C.jsx)(E.Editor,{editorState:e,onEditorStateChange:function(){return function(e){a(e)}()},toolbar:{options:["inline","fontSize","textAlign","history","fontFamily","remove"],inline:{inDropdown:!0},list:{inDropdown:!0},textAlign:{inDropdown:!0},link:{inDropdown:!0},history:{inDropdown:!0}},sytle:{display:"flex"}})}),_=function(){return Object(C.jsx)("div",{className:"canvasContainer",children:Object(C.jsxs)("div",{id:"viewport",className:"viewport",children:[Object(C.jsx)("canvas",{id:"gridCanvas",className:"canvasGridClass"}),Object(C.jsx)("canvas",{id:"drawCanvas",className:"canvasClass"})]})})},q=Object(k.a)(w),T=function(){var e=q(),n=Object(i.useState)(""),t=Object(u.a)(n,2),a=t[0],r=t[1],o=Object(i.useState)(!1),s=Object(u.a)(o,2),c=s[0],d=s[1],l=Object(i.useState)(!1),f=Object(u.a)(l,2),w=f[0],k=f[1],z=Object(i.useState)(""),M=Object(u.a)(z,2),B=M[0],D=M[1],E=Object(i.useState)(!1),_=Object(u.a)(E,2),T=_[0],G=_[1],L=[{id:1,name:"Insert diagram"},{id:2,name:"Default font"},{id:3,name:"Snap to grid"},{id:4,name:"Help"}],F=function(e){G(3===e&&!T),D(e),d(!1)};return Object(C.jsxs)(j.a,{container:!0,children:[Object(C.jsx)(b.a,{className:"HeaderSection",position:"static",color:"transparent",style:{background:"transparent",boxShadow:"none"},children:Object(C.jsxs)(p.a,{children:[Object(C.jsx)(x.a,{className:"HeaderMenuIcon",color:"inherit","aria-label":"menu",onClick:function(e){return function(e){r(e.currentTarget),d(!0)}(e)},children:Object(C.jsx)(v.a,{})}),Object(C.jsxs)(m.a,{onClose:function(){return d(!1)},open:c,value:a,PaperProps:{style:{width:200,marginTop:40}},children:[Object(C.jsx)(S.a,{style:{left:"15px"},label:"Export",onClick:function(){return F("exp")},parentMenuOpen:c,className:"subIcon",children:[{id:1,name:"PDF"},{id:2,name:"PNG"}].map((function(e,n){return Object(C.jsx)(h.a,{children:e.name},n)}))}),null===L||void 0===L?void 0:L.map((function(n,t){return Object(C.jsxs)("div",{children:[2===t&&T&&Object(C.jsx)("span",{className:e.checkIcon,children:Object(C.jsx)(R.a,{})}),Object(C.jsx)(h.a,{style:{left:"15px"},value:n.name,onClick:function(){return F(n.id)},children:n.name},t)]})}))]}),Object(C.jsx)(j.a,{item:!0,xs:12,className:"".concat(e.MainGrid," header_line"),children:Object(C.jsxs)("div",{className:"".concat(e.outClass," header_text"),children:[Object(C.jsxs)(O.a,{children:[Object(C.jsxs)("span",{children:[Object(C.jsx)(I.h,{size:"2em",className:"headerIcon"}),Object(C.jsx)("span",{className:"headerText",children:"Use pencil/mouse to draw or double click to add text"})]}),Object(C.jsx)(g.a,{onClick:function(e){return function(e){k(!w&&e.currentTarget)}(e)},style:{color:"rgb(17 23 228)",cursor:"pointer"},children:" Help"})]}),w?Object(C.jsx)(N,{open:w,close:function(){return k()},message:"Help",Class:e.paper}):null]})})]})}),2===B?Object(C.jsx)(y.a,{onClickAway:function(){D("")},children:Object(C.jsx)("div",{className:"text-editor",children:Object(C.jsx)(A,{})})}):null]})},G=t(325),L={footer:{justifyContent:"center",display:"flex"},backClass:{border:"1px solid",backgroundColor:"#fff",borderColor:"#fff",borderRadius:"4px",boxShadow:"0 0 0 50px transparent",filter:"drop-shadow(0 1px 2px rgba(0, 0, 0, .3))",margin:"13px 10px","&:hover":{cursor:"pointer"}},countClass:{border:"1px solid",margin:"13px 10px",width:"173px",borderColor:"#fff",borderRadius:"4px",backgroundColor:"#fff",boxShadow:"0 0 0 50px transparent",filter:"drop-shadow(0 1px 2px rgba(0, 0, 0, .3))",display:"flex","&:hover":{cursor:"pointer"}},valueClass:{margin:"15px 0px",width:"45px",textAlign:"center"},iconClass:{fontSize:"22px",padding:"8px 8px"},countBtn:{minWidth:"64px",padding:0}},F=t(156),P=t.n(F),H=t(155),W=t.n(H),J=t(157),U=t.n(J),K=t(158),Q=t.n(K),V=Object(k.a)(L),X=function(){var e=V(),n=Object(i.useState)(100),t=Object(u.a)(n,2),a=t[0],r=t[1];return Object(C.jsx)(j.a,{container:!0,className:"footer",children:Object(C.jsxs)(j.a,{item:!0,xs:12,className:e.footer,children:[Object(C.jsxs)("div",{className:"".concat(e.backClass," undo_redo_section"),children:[Object(C.jsx)(G.a,{className:"resButton",children:Object(C.jsx)(W.a,{className:e.iconClass,onClick:function(){return window.Module.inputReceiver().undo(),void window.drawCanvas()}})}),Object(C.jsxs)(G.a,{className:"resButton",children:[Object(C.jsx)(P.a,{className:e.iconClass,onClick:function(){return window.Module.inputReceiver().redo(),void window.drawCanvas()}})," "]})]}),Object(C.jsxs)("div",{className:"".concat(e.countClass," counter_percent"),children:[Object(C.jsx)(G.a,{className:e.countBtn,children:Object(C.jsx)(U.a,{className:e.iconClass,onClick:function(){return r(a-10),void(a<10&&r(0))}})}),Object(C.jsxs)("div",{className:e.valueClass,children:[" ",a,"% "]}),Object(C.jsx)(G.a,{className:e.countBtn,children:Object(C.jsx)(Q.a,{className:e.iconClass,onClick:function(){r(a+10)}})})]})]})})},Y={sideBar:{boxShadow:"0 0 0 50px transparent",background:"white",borderRadius:"10px",width:"55px",display:"inline-block",margin:"0 15px",filter:"drop-shadow(0 1px 2px rgba(0, 0, 0, .3))"},sideBarMenu:{padding:"11px 12px",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column","&:hover":{cursor:"pointer"}},menuIcons:{marginBottom:10},menuItem:{textAlign:"center",fontSize:"13px"},sideMenuIcons:{textAlign:"center",fontSize:"14px"},changeColor:{"&:hover":{cursor:"pointer"}},spaceBwt:{height:"45px"},spaceBwtRound:{height:"47px",border:"1px solid #dfe3e8"}},Z=t(12),$=t(95),ee=t(54),ne=t(159),te=t(96),ie=t(160),ae=t(161),re=t(163),oe=t(162),se=[Object(C.jsx)(Z.a,{size:"2em",color:"red",id:"0"}),Object(C.jsx)(Z.a,{size:"2em",color:"orange",id:"1"}),Object(C.jsx)(Z.a,{size:"2em",color:"teal",id:"2"}),Object(C.jsx)(Z.a,{size:"2em",color:"green",id:"3"}),Object(C.jsx)(Z.a,{size:"2em",color:"yellow",id:"4"}),Object(C.jsx)(Z.a,{size:"2em",color:"tan",id:"5"}),Object(C.jsx)(Z.a,{size:"2em",color:"brown",id:"6"}),Object(C.jsx)(Z.a,{size:"2em",color:"grey",id:"7"}),Object(C.jsx)(Z.a,{size:"2em",color:"pink",id:"8"}),Object(C.jsx)(Z.a,{size:"2em",color:"purple",id:"9"}),Object(C.jsx)(Z.a,{size:"2em",color:"black",id:"10"}),Object(C.jsx)(Z.a,{size:"2em",color:"violet",id:"11"}),Object(C.jsx)(Z.a,{size:"2em",color:"plum",id:"12"}),Object(C.jsx)(Z.a,{size:"2em",color:"skyblue",id:"13"}),Object(C.jsx)(Z.a,{size:"2em",color:"cyan",id:"14"}),Object(C.jsx)(Z.a,{size:"2em",color:"blue",id:"15"}),Object(C.jsx)(Z.a,{size:"2em",color:"darkcyan",id:"16"}),Object(C.jsx)(Z.a,{size:"2em",color:"darkorchid",id:"17"}),Object(C.jsx)(Z.a,{size:"2em",color:"gold",id:"18"}),Object(C.jsx)(Z.a,{size:"2em",color:"royalblue",id:"11"})],ce=[Object(C.jsx)($.b,{size:"2.5em",id:"0",drag:"true"}),Object(C.jsx)(ee.b,{size:"2.5em",id:"1",drag:"true"}),Object(C.jsx)(ee.e,{size:"2.5em",id:"2",drag:"true"}),Object(C.jsx)(ne.a,{size:"2.5em",id:"3",drag:"true"}),Object(C.jsx)(I.a,{size:"2.5em",id:"4",drag:"true"}),Object(C.jsx)(te.b,{size:"2.5em",id:"5",drag:"true"}),Object(C.jsx)(ee.c,{size:"2.5em",id:"6",drag:"true"}),Object(C.jsx)(te.a,{size:"2.5em",id:"7",drag:"true"}),Object(C.jsx)(ie.a,{size:"2.5em",id:"8",drag:"true"}),Object(C.jsx)($.a,{size:"2.5em",id:"9",drag:"true"}),Object(C.jsx)(ae.a,{size:"2.5em",id:"10",drag:"true"}),Object(C.jsx)(ee.d,{size:"2.5em",id:"11",drag:"true"}),Object(C.jsx)(oe.a,{size:"2.5em",id:"12",drag:"true"}),Object(C.jsx)(re.a,{size:"2.5em",id:"13",drag:"true"}),Object(C.jsx)(ee.a,{size:"2.5em",id:"14",drag:"true"})],de=[{id:1,icon:Object(C.jsx)(I.f,{size:"1.2em",color:"#000000b8"}),name:"Select"},{id:2,icon:Object(C.jsx)(I.e,{size:"1.2em",color:"#000000b8"}),name:"Move"},{id:3,icon:Object(C.jsx)(I.g,{size:"1.2em",color:"#000000b8"}),name:"Draw",subMenus:se},{id:4,icon:Object(C.jsx)(I.c,{size:"1.2em",color:"#000000b8"}),name:"Smart Draw",subMenus:se},{id:5,icon:Object(C.jsx)(I.d,{size:"1.2em",color:"#000000b8"}),name:"Erase"},{id:6,icon:Object(C.jsx)(Z.b,{size:"1.2em",color:"#000000b8"}),name:"Erase All"},{id:7,icon:Object(C.jsx)(I.i,{size:"1.2em",color:"#000000b8"}),name:"Shapes",subMenus:ce}],le=t(97),ue=t(326),je=t(289),be=t(164),pe=t.n(be),xe=function(e){var n=a.a.useState(0),t=Object(u.a)(n,2),i=(t[0],t[1]),r=a.a.useState(0),o=Object(u.a)(r,2),s=(o[0],o[1]);return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(pe.a,{position:{x:0,y:0},onStop:function(e){return function(e){i(e.x),s(e.x)}(e)},children:Object(C.jsx)("div",{style:{display:"inline-block"},children:e.subMenu})})})},me=t(53),he={colorIndex:10,dashIndex:0,widthIndex:0};he.setColor=function(e,n){he.colorIndex=e;var t=function(e){var n={aliceblue:[240,248,255,255],antiquewhite:[250,235,215,255],aqua:[0,255,255,255],aquamarine:[127,255,212,255],azure:[240,255,255,255],beige:[245,245,220,255],bisque:[255,228,196,255],black:[0,0,0,255],blanchedalmond:[255,235,205,255],blue:[0,0,255,255],blueviolet:[138,43,226,255],brown:[165,42,42,255],burlywood:[222,184,135,255],cadetblue:[95,158,160,255],chartreuse:[127,255,0,255],chocolate:[210,105,30,255],coral:[255,127,80,255],cornflowerblue:[100,149,237,255],cornsilk:[255,248,220,255],crimson:[220,20,60,255],cyan:[0,255,255,255],darkblue:[0,0,139,255],darkcyan:[0,139,139,255],darkgoldenrod:[184,134,11,255],darkgray:[169,169,169,255],darkgreen:[0,100,0,255],darkkhaki:[189,183,107,255],darkmagenta:[139,0,139,255],darkolivegreen:[85,107,47,255],darkorange:[255,140,0,255],darkorchid:[153,50,204,255],darkred:[139,0,0,255],darksalmon:[233,150,122,255],darkseagreen:[143,188,143,255],darkslateblue:[72,61,139,255],darkslategray:[47,79,79,255],darkturquoise:[0,206,209,255],darkviolet:[148,0,211,255],deeppink:[255,20,147,255],deepskyblue:[0,191,255,255],dimgray:[105,105,105,255],dodgerblue:[30,144,255,255],firebrick:[178,34,34,255],floralwhite:[255,250,240,255],forestgreen:[34,139,34,255],fuchsia:[255,0,255,255],gainsboro:[220,220,220,255],ghostwhite:[248,248,255,255],gold:[255,215,0,255],goldenrod:[218,165,32,255],gray:[128,128,128,255],green:[0,128,0,255],greenyellow:[173,255,47,255],honeydew:[240,255,240,255],hotpink:[255,105,180,255],"indianred ":[205,92,92,255],indigo:[75,0,130,255],ivory:[255,255,240,255],khaki:[240,230,140,255],lavender:[230,230,250,255],lavenderblush:[255,240,245,255],lawngreen:[124,252,0,255],lemonchiffon:[255,250,205,255],lightblue:[173,216,230,255],lightcoral:[240,128,128,255],lightcyan:[224,255,255,255],lightgoldenrodyellow:[250,250,210,255],lightgrey:[211,211,211,255],lightgreen:[144,238,144,255],lightpink:[255,182,193,255],lightsalmon:[255,160,122,255],lightseagreen:[32,178,170,255],lightskyblue:[135,206,250,255],lightslategray:[119,136,153,255],lightsteelblue:[176,196,222,255],lightyellow:[255,255,224,255],lime:[0,255,0,255],limegreen:[50,205,50,255],linen:[250,240,230,255],magenta:[255,0,255,255],maroon:[128,0,0,255],mediumaquamarine:[102,205,170,255],mediumblue:[0,0,205,255],mediumorchid:[186,85,211,255],mediumpurple:[147,112,216,255],mediumseagreen:[60,179,113,255],mediumslateblue:[123,104,238,255],mediumspringgreen:[0,250,154,255],mediumturquoise:[72,209,204,255],mediumvioletred:[199,21,133,255],midnightblue:[25,25,112,255],mintcream:[245,255,250,255],mistyrose:[255,228,225,255],moccasin:[255,228,181,255],navajowhite:[255,222,173,255],navy:[0,0,128,255],oldlace:[253,245,230,255],olive:[128,128,0,255],olivedrab:[107,142,35,255],orange:[255,165,0,255],orangered:[255,69,0,255],orchid:[218,112,214,255],palegoldenrod:[238,232,170,255],palegreen:[152,251,152,255],paleturquoise:[175,238,238,255],palevioletred:[216,112,147,255],papayawhip:[255,239,213,255],peachpuff:[255,218,185,255],peru:[205,133,63,255],pink:[255,192,203,255],plum:[221,160,221,255],powderblue:[176,224,230,255],purple:[128,0,128,255],rebeccapurple:[102,51,153,255],red:[255,0,0,255],rosybrown:[188,143,143,255],royalblue:[65,105,225,255],saddlebrown:[139,69,19,255],salmon:[250,128,114,255],sandybrown:[244,164,96,255],seagreen:[46,139,87,255],seashell:[255,245,238,255],sienna:[160,82,45,255],silver:[192,192,192,255],skyblue:[135,206,235,255],slateblue:[106,90,205,255],slategray:[112,128,144,255],snow:[255,250,250,255],springgreen:[0,255,127,255],steelblue:[70,130,180,255],tan:[210,180,140,255],teal:[0,128,128,255],thistle:[216,191,216,255],tomato:[255,99,71,255],turquoise:[64,224,208,255],violet:[238,130,238,255],wheat:[245,222,179,255],white:[255,255,255,255],whitesmoke:[245,245,245,255],yellow:[255,255,0,255],yellowgreen:[154,205,50,255]};return"undefined"!=typeof n[e.toLowerCase()]?n[e.toLowerCase()]:[255,255,255,255]}(n);window.Module.setStrokeColor(t[0],t[1],t[2],t[3])},he.setDashIndex=function(e){he.dashIndex=e,window.Module.setDashType(e)},he.setWidthIndex=function(e){he.widthIndex=e,window.Module.inputReceiver().currentStyle().setStrokeWidth(2*(e+1))};var Oe=he,ge=Object(k.a)(Y),fe=function(e){var n=ge(),t=Object(i.useState)(Oe.colorIndex),a=Object(u.a)(t,2),r=a[0],o=a[1],s=Object(i.useState)(Oe.dashIndex),c=Object(u.a)(s,2),d=c[0],l=c[1],j=Object(i.useState)(Oe.widthIndex),b=Object(u.a)(j,2),p=b[0],x=b[1],m=[{icon:Object(C.jsx)(Z.a,{size:"1em",id:"0"})},{icon:Object(C.jsx)(Z.a,{size:"1.2em",id:"1"})},{icon:Object(C.jsx)(Z.a,{size:"1.4em",id:"2"})},{icon:Object(C.jsx)(Z.a,{size:"1.6em",id:"3"})},{icon:Object(C.jsx)(Z.a,{size:"1.8em",id:"4"})}],h=[{icon:Object(C.jsx)(me.b,{size:"2.2em",id:"0"})},{icon:Object(C.jsx)(me.c,{size:"2em",style:{marginBottom:"3px"},id:"1"})},{icon:Object(C.jsx)(me.a,{size:"2em",style:{marginBottom:"3px"},id:"2"})},{icon:Object(C.jsx)(me.a,{size:"2em",style:{marginBottom:"3px"},id:"3"})}],O=function(e,n){return(null===e||void 0===e?void 0:e.length)>0&&(null===e||void 0===e?void 0:e.map((function(e,n){return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)("span",{onClick:function(){return!e.props.drag&&g(n,e.props.color)},children:f(e)})})})))},g=function(e,n){o(e),Oe.setColor(e,n)},f=function(e){if(!e.length){if(r!=e.props.id)return e.props.drag?Object(C.jsx)(xe,{subMenu:e,children:Object(C.jsx)("span",{children:e})}):e;if(!e.props.drag)return Object(C.jsx)(I.b,{size:"2em",color:e.props.color})}},v=function(){return Object(C.jsx)("div",{className:n.spaceBwtRound,children:(null===h||void 0===h?void 0:h.length)>0&&h.map((function(e,n){return Object(C.jsx)("span",{className:"".concat(e.icon.props.id===d?"changeBorder":""," "),onClick:function(){return function(e,n){l(n),Oe.setDashIndex(e)}(n,e.icon.props.id)},children:e.icon},n)}))})},w=function(){return Object(C.jsx)("div",{className:n.spaceBwt,children:(null===m||void 0===m?void 0:m.length)>0&&m.map((function(e,n){return Object(C.jsx)("span",{className:"".concat(e.icon.props.id===p?"changeBorderRound":"defaultBorder"," "),onClick:function(){return function(e,n){x(n),Oe.setWidthIndex(e)}(n,e.icon.props.id)},children:e.icon},n)}))})},k=e.open,y=e.anchorEl,M=e.placement,N=e.subMenuIcons,S=(e.setOpenState,e.close,e.selectedItemId);return Object(C.jsx)("div",{children:Object(C.jsx)(z.a,{open:k,anchorEl:y,placement:M,transition:!0,children:function(n){var t,i,a=n.TransitionProps;return Object(C.jsx)(ue.a,Object(le.a)(Object(le.a)({},a),{},{timeout:350,children:Object(C.jsxs)(je.a,{className:"".concat(15===(null===e||void 0===e||null===(t=e.subMenuIcons)||void 0===t?void 0:t.length)?"popper_paper":"smart_draw_paper"," ").concat(15===(null===e||void 0===e||null===(i=e.subMenuIcons)||void 0===i?void 0:i.length)?"poper_paper_res":"smart_draw_res"),children:[(3==S||4==S)&&w(),(3==S||4==S)&&v(),O(N)]})}))}})})},ve={setMode:function(e){if(1==e)window.Module.inputReceiver().setMode(window.Module.InputMode.SELECTION);else if(2==e);else if(3==e)window.Module.inputReceiver().setMode(window.Module.InputMode.DRAWING),window.Module.enableRecognition(!1);else if(4==e)window.Module.inputReceiver().setMode(window.Module.InputMode.DRAWING),window.Module.enableRecognition(!0);else if(5==e);else if(6==e){var n=document.getElementById("drawCanvas");window.Module.eraseAll();var t=n.getContext("2d");t.clearRect(0,0,n.width,n.height),window.Module.drawCanvas(t)}}},we=ve,ke=Object(k.a)(Y),ye=function(){var e=a.a.useState(null),n=Object(u.a)(e,2),t=n[0],i=n[1],r=a.a.useState(!1),o=Object(u.a)(r,2),s=o[0],c=o[1],d=a.a.useState(),l=Object(u.a)(d,2),j=l[0],b=l[1],p=a.a.useState(),x=Object(u.a)(p,2),m=x[0],h=x[1],O=a.a.useState(),g=Object(u.a)(O,2),f=g[0],v=g[1],w=a.a.useState(),k=Object(u.a)(w,2),z=k[0],M=k[1],N=a.a.useState(0),I=Object(u.a)(N,2),S=(I[0],I[1],ke()),B=function(e,n,t,a){i(e.currentTarget),c(a!==f||!s),b(t),h(n),v(a),M(a-1),we.setMode(a)},R=function(e,n){var t=e.icon,i=e.name,a=n.menuItem;return Object(C.jsxs)("div",{children:[Object(C.jsx)("div",{className:a+" sideMenuIcons",children:t}),Object(C.jsx)("div",{className:a+" menuItems",children:i})]})};return Object(C.jsx)(y.a,{onClickAway:function(){return c(!1)},children:Object(C.jsxs)("div",{children:[(3===f||4===f||7===f)&&Object(C.jsx)(fe,{open:s,anchorEl:t,placement:j,subMenuIcons:m,setOpenState:function(){return c(!s)},close:function(){return console.log("close")},selectedItemId:f}),Object(C.jsx)("div",{className:"".concat(S.sideBar," side_menus"),children:de.map((function(e,n){return function(e){return Object.keys(e).length>0&&"subMenus"in e}(e)?Object(C.jsx)("div",{className:e.id===f?S.sideBarMenu+" sideBarMenu active":S.sideBarMenu+" sideBarMenu",onClick:function(n){return B(n,e.subMenus,"right",e.id)},children:R(e,S)},n):Object(C.jsx)("div",{className:5!=n&&n===z?S.sideBarMenu+" sideBarMenu active":S.sideBarMenu+" sideBarMenu",onClick:function(n){return B(n,e.subMenus,"right",e.id)},children:R(e,S)},n)}))})]})})},ze=function(e){var n=document.createElement("script");n.src=e,n.async=!1,document.body.appendChild(n)},Ce=function(e){Object(d.a)(t,e);var n=Object(l.a)(t);function t(){return Object(s.a)(this,t),n.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return Object(C.jsxs)("div",{className:"container",children:[Object(C.jsx)("header",{className:"header",children:Object(C.jsx)(T,{})}),Object(C.jsxs)("div",{className:"Content",children:[Object(C.jsxs)("div",{className:"side-bar",children:[" ",Object(C.jsx)(ye,{})]}),Object(C.jsxs)("div",{className:"main-content",children:[" ",Object(C.jsx)(_,{})]})]}),Object(C.jsx)("div",{className:"footer",children:Object(C.jsx)(X,{})})]})}},{key:"componentDidMount",value:function(){ze("a1/jquery-3.4.1.min.js"),ze("a1/init.js"),ze("a1/lekhapp.js"),ze("a1/basictmpl.js"),ze("a1/bean.min.js"),ze("a1/events.js"),ze("a1/util.js")}}]),t}(a.a.Component),Me=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,329)).then((function(n){var t=n.getCLS,i=n.getFID,a=n.getFCP,r=n.getLCP,o=n.getTTFB;t(e),i(e),a(e),r(e),o(e)}))};o.a.render(Object(C.jsx)(a.a.StrictMode,{children:Object(C.jsx)(Ce,{})}),document.getElementById("root")),Me()}},[[285,1,2]]]);
//# sourceMappingURL=main.2d4f31b7.chunk.js.map