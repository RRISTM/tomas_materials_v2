(this.webpackJsonpmarkdown_test=this.webpackJsonpmarkdown_test||[]).push([[0],{123:function(t,e,n){},350:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),s=n(40),r=n.n(s),o=(n(123),n(101)),c=n(414),l=n(52),h=n(404),p=n(27),d=n(16),u=n(17),j=n(13),m=n(20),b=n(19),O=n(35),f=n(92),g=n(424),x=n(425),v=n(407),y=n(417),C=n(418),w=n(410),S=n(385),k=n(74),T=n(1),I=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(d.a)(this,n),(a=e.call(this,t)).state={timeoutCnt:0},a.copyToClipBoard=a.copyToClipBoard.bind(Object(j.a)(a)),a.copyTimeout=a.copyTimeout.bind(Object(j.a)(a)),a}return Object(u.a)(n,[{key:"copyToClipBoard",value:function(t){this.props.enqueueSnackbar("Code is now in your clipboard",{variant:"info"});var e=document.createElement("textarea");e.value=this.props.children,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e);var n=this.state.timeoutCnt;n++,this.setState({timeoutCnt:n}),setTimeout(this.copyTimeout,5e3)}},{key:"copyTimeout",value:function(){var t=this.state.timeoutCnt;t>0&&(t--,this.setState({timeoutCnt:t++}))}},{key:"render",value:function(){var t,e,n,a=[];this.state.timeoutCnt>0?(t="!!   Copied   !!",e="primary"):(t="Copy code",e="primary");var i=1;if(void 0!==this.props.className&&this.props.className.includes("lang-")){var s,r=this.props.className.split("lang-").pop();r.includes("-nc")?r=r.replace("-nc",""):a=Object(T.jsx)("div",{children:Object(T.jsx)(y.a,{variant:"contained",size:"small",style:{marginBottom:12},color:e,onClick:this.copyToClipBoard,children:t})}),s=1!==this.props.children.split(/\r\n|\r|\n/).length,r.includes("-line")?(i=parseInt(r.match(/-line(\d+)/)[0].replace("-line","")),r=r.replace(/-line(\d+)/,"")):s=!1,n=Object(T.jsxs)("div",{children:[Object(T.jsx)(C.a,{}),Object(T.jsx)("div",{children:Object(T.jsx)(w.a,{language:r,style:S.a,showLineNumbers:s,startingLineNumber:i,wrapLongLines:!0,codeTagProps:{style:{fontFamily:"inherit"}},children:this.props.children})}),a,Object(T.jsx)(C.a,{})]})}else n=Object(T.jsx)("i",{children:Object(T.jsx)("b",{children:Object(T.jsx)("code",{children:this.props.children})})});return n}}]),n}(a.Component),L=Object(k.b)(I),P=n(419),F=n(420),D=n(422),N=n(423),B=n(412),R=n(387),E=n(388),M=n(389),A=n(390),G=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(d.a)(this,n),(a=e.call(this,t)).state={imageDescription:{},imagesLoaded:!1,imageIndex:0,imageCount:0,timeoutId:null,pause:!0},a.handleNext=a.handleNext.bind(Object(j.a)(a)),a.handleBack=a.handleBack.bind(Object(j.a)(a)),a.onTimeout=a.onTimeout.bind(Object(j.a)(a)),a.onMouseEnter=a.onMouseEnter.bind(Object(j.a)(a)),a.onMouseLeave=a.onMouseLeave.bind(Object(j.a)(a)),a.handlePausePlay=a.handlePausePlay.bind(Object(j.a)(a)),a}return Object(u.a)(n,[{key:"componentWillUnmount",value:function(){clearTimeout(this.state.timeoutId)}},{key:"componentDidMount",value:function(){var t=this,e=this.props.src;fetch(e).then((function(t){return t.json()})).then((function(e){t.setState({imageDescription:e,imagesLoaded:!0,imageCount:e.sequence.length})}))}},{key:"handleNext",value:function(){var t=this.state.imageIndex+1;t>=this.state.imageCount&&(t=0),this.setState({imageIndex:t})}},{key:"handleBack",value:function(){var t=this.state.imageIndex-1;t<0&&(t=this.state.imageCount-1),this.setState({imageIndex:t})}},{key:"onTimeout",value:function(){var t=setTimeout(this.onTimeout,this.state.imageDescription.interval);this.setState({timeoutId:t}),this.handleNext()}},{key:"onMouseEnter",value:function(){clearTimeout(this.state.timeoutId)}},{key:"onMouseLeave",value:function(){var t=setTimeout(this.onTimeout,this.state.imageDescription.interval);this.setState({timeoutId:t})}},{key:"handlePausePlay",value:function(){var t=!1;if(this.state.pause){t=!1;var e=setTimeout(this.onTimeout,this.state.imageDescription.interval);this.setState({timeoutId:e,pause:t})}else t=!0,clearTimeout(this.state.timeoutId),this.setState({pause:t})}},{key:"render",value:function(){var t=this,e=this.state.imageDescription.sequence,n=[],i=[];this.state.imagesLoaded&&(n=this.state.imageDescription.sequence.map((function(e,n){var a={display:"none",maxWidth:"100%",height:"auto"};return n===t.state.imageIndex&&(a={maxWidth:"100%",height:"auto"}),Object(T.jsx)(P.a,{sx:{justifyContent:"center",display:"flex"},onClick:t.handlePausePlay,children:Object(T.jsx)("img",{alt:n,src:t.props.mdPath+"/img/"+e.name,title:e.name,style:a},n)},n)})),i=this.state.imageDescription.sequence.map((function(e,n){var a={display:"none",padding:function(t){return t.spacing(2)}};return n===t.state.imageIndex&&(a={padding:function(t){return t.spacing(2)}}),e.hasOwnProperty("text")?Object(T.jsx)(P.a,{sx:a,children:Object(T.jsx)(v.a,{variant:"outlined",severity:"info",children:e.text},n)}):null})));var s=0,r="dots";return this.state.imagesLoaded&&(s=e.length)>10&&(r="progress"),Object(T.jsxs)(F.a,{children:[Object(T.jsx)(D.a,{size:"small",sx:{top:function(t){return t.spacing(2)},left:function(t){return t.spacing(2)}},"aria-label":"Play/Pause",onClick:this.handlePausePlay,children:this.state.pause?Object(T.jsx)(R.a,{}):Object(T.jsx)(E.a,{})}),Object(T.jsxs)(N.a,{children:[n,Object(T.jsx)(B.a,{variant:r,steps:s,position:"static",activeStep:this.state.imageIndex,nextButton:Object(T.jsx)(a.Fragment,{children:Object(T.jsxs)(y.a,{size:"small",onClick:this.handleNext,children:["Next",Object(T.jsx)(M.a,{})]})}),backButton:Object(T.jsxs)(y.a,{size:"small",onClick:this.handleBack,children:[Object(T.jsx)(A.a,{}),"Back"]})})]}),i]})}}]),n}(a.Component),W=G,q=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){return Object(d.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t,e=this.props.src,n="";return n=this.props.pathContext,t=null!==e.match(/.json/)?Object(T.jsx)(a.Fragment,{children:Object(T.jsx)(W,{src:n+this.props.mdInfo.mdPath+"/img/"+this.props.src.replace("./img/",""),mdPath:n+this.props.mdInfo.mdPath})}):Object(T.jsxs)(a.Fragment,{children:[Object(T.jsx)("img",{alt:this.props.alt,src:n+this.props.mdInfo.mdPath+"/img/"+this.props.src.replace("./img/",""),title:this.props.title,style:{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",maxWidth:"100%",height:"auto"}}),Object(T.jsx)("br",{})]}),Object(T.jsx)(a.Fragment,{children:t})}}]),n}(a.Component),U=q,z=i.a.createContext(""),_=["children"],H=["children"],J=["children"],V=["children"],$=["children"],K=["children"],Q=["children"],X=["children"],Y=["children"],Z=["children"],tt=["children"],et=["children"],nt=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){return Object(d.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this,e={overrides:{h1:{component:function(t){var e=t.children;Object(O.a)(t,_);return Object(T.jsxs)(g.a,{gutterBottom:!0,variant:"h4",children:[" ",e,"  "]})},props:{classes:this.props.classes}},h2:{component:function(t){var e=t.children;Object(O.a)(t,H);return Object(T.jsxs)(g.a,{gutterBottom:!0,variant:"h6",children:[" ",e]})},props:{classes:this.props.classes}},h3:{component:function(t){var e=t.children;Object(O.a)(t,J);return Object(T.jsxs)(g.a,{gutterBottom:!0,variant:"subtitle1",children:[" ",e]})},props:{classes:this.props.classes}},h4:{component:function(t){var e=t.children;Object(O.a)(t,V);return Object(T.jsxs)(g.a,{gutterBottom:!0,variant:"caption",paragraph:!0,children:[" ",e]})},props:{classes:this.props.classes}},p:{component:function(t){var e=t.children;Object(O.a)(t,$);return Object(T.jsxs)(g.a,{paragraph:!0,children:[e," "]})},props:{classes:this.props.classes}},a:{component:x.a},li:{component:function(t){var e=t.children;Object(O.a)(t,K);return Object(T.jsx)("li",{children:Object(T.jsx)(g.a,{component:"span",children:e})})},props:{classes:this.props.classes}},code:{component:L},pre:{component:function(t){var e=t.children;Object(O.a)(t,Q);return Object(T.jsx)(a.Fragment,{children:e})}},img:{component:function(e){e.children;var n=Object(O.a)(e,X);return Object(T.jsx)(a.Fragment,{children:Object(T.jsx)(U,Object(p.a)(Object(p.a)({},n),{},{mdInfo:t.props.mdInfo,pathContext:t.context}))})}},ainfo:{component:function(t){var e=t.children;Object(O.a)(t,Y);return Object(T.jsx)(v.a,{variant:"filled",severity:"info",children:e})}},asuccess:{component:function(t){var e=t.children;Object(O.a)(t,Z);return Object(T.jsx)(v.a,{variant:"filled",severity:"success",children:e})}},awarning:{component:function(t){var e=t.children;Object(O.a)(t,tt);return Object(T.jsx)(v.a,{variant:"filled",severity:"warning",children:e})}},aerror:{component:function(t){var e=t.children;Object(O.a)(t,et);return Object(T.jsx)(v.a,{variant:"filled",severity:"error",children:e})}}}};return Object(T.jsx)(a.Fragment,{children:Object(T.jsx)(f.a,{children:this.props.children,options:e})})}}]),n}(a.Component);nt.contextType=z;var at=nt,it=n(391),st={position:"fixed",bottom:function(t){return t.spacing(2)},right:function(t){return t.spacing(2)}},rt=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(d.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).scrollTop=function(){window.scrollTo({top:0,behavior:"smooth"})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this,e=this.props.mdChapters,n=(e=e.split(/(^#\s.*\r\n\r\n)/g)).map((function(e,n){return Object(T.jsx)(at,{children:e,enqueueSnackbar:t.props.enqueueSnackbar,mdInfo:t.props.mdInfo,routerLocation:t.props.routerLocation},n)}));return Object(T.jsxs)(P.a,{justify:"flex-start",spacing:0,style:{padding:24},children:[n,Object(T.jsx)(D.a,{"aria-label":"Add",sx:st,color:"primary",onClick:this.scrollTop,children:Object(T.jsx)(it.a,{})})]})}}]),n}(a.Component),ot=rt,ct=n(392),lt=n(406),ht=n(395),pt=n(21),dt={fabR:{position:"fixed",bottom:function(t){return t.spacing(2)},right:function(t){return t.spacing(2)}},fabC:{position:"fixed",bottom:function(t){return t.spacing(10)},right:function(t){return t.spacing(2)}},fabL:{position:"fixed",bottom:function(t){return t.spacing(2)},right:function(t){return t.spacing(10)}},fabLL:{position:"fixed",bottom:function(t){return t.spacing(2)},right:function(t){return t.spacing(18)}}},ut=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(t){var a;Object(d.a)(this,n);var i=(a=e.call(this,t)).props.mdChapters;(i=i.split(/^(?=#\s.*[\r\n\r\n|\n\n])/gm))[0].search(/^[\r\n\r\n|\n\n]/)>=0&&i.shift();var s=i.length;return a.state={slideIndex:0,mdChapters:i,mdChapterSize:s,slide:!0,slideToShow:0,reroute:!1,enter:!0},a.nextSlide=a.nextSlide.bind(Object(j.a)(a)),a.previousSlide=a.previousSlide.bind(Object(j.a)(a)),a.firstSlide=a.firstSlide.bind(Object(j.a)(a)),a.onExited=a.onExited.bind(Object(j.a)(a)),a.onEnter=a.onEnter.bind(Object(j.a)(a)),a}return Object(u.a)(n,[{key:"firstSlide",value:function(){var t=this.state.slideIndex;this.setState({previousIndex:t,slideIndex:0,slide:!1})}},{key:"nextSlide",value:function(){var t=this.state.slideIndex+1;t>=this.state.mdChapterSize?console.log("\xe7ondition fail"):this.setState({slideIndex:t,slide:!1})}},{key:"previousSlide",value:function(){var t=this.state.slideIndex-1;t<0&&(t=0),this.setState({slideIndex:t,slide:!1})}},{key:"onExited",value:function(){this.setState({slideToShow:this.state.slideIndex,slide:!0,reroute:!0})}},{key:"onEnter",value:function(t){this.setState({slideIndex:t,slideToShow:t,enter:!1})}},{key:"render",value:function(){var t=this,e=Object(T.jsxs)(pt.d,{children:[Object(T.jsx)(pt.b,{exact:!0,path:"".concat(this.props.match.path,"/:id"),render:function(e){var n=e.match,i=parseInt(n.params.id);return t.state.reroute?Object(T.jsx)(pt.a,{push:!0,to:"".concat(t.props.match.url,"/").concat(t.state.slideIndex)}):(t.state.enter&&setTimeout(t.onEnter,0,i),Object(T.jsx)(a.Fragment,{}))}}),Object(T.jsx)(pt.a,{exact:!0,from:"".concat(this.props.match.url),to:"".concat(this.props.match.url,"/0")})]}),n=Object(T.jsx)(a.Fragment,{children:Object(T.jsx)(ct.a,{in:this.state.slide,unmountOnExit:!0,mountOnEnter:!0,onExited:this.onExited,children:Object(T.jsx)("div",{children:Object(T.jsx)(at,{children:this.state.mdChapters[this.state.slideToShow],mdInfo:this.props.mdInfo})})})});return Object(T.jsxs)(P.a,{justify:"flex-start",spacing:0,style:{padding:24},children:[e,n,Object(T.jsx)(lt.a,{title:"First slide","aria-label":"First slide",children:Object(T.jsx)(D.a,{"aria-label":"First slide",sx:dt.fabLL,color:"primary",onClick:this.firstSlide,children:Object(T.jsx)(ht.a,{})})}),Object(T.jsx)(lt.a,{title:"Previous slide","aria-label":"Previous slide",children:Object(T.jsx)(D.a,{"aria-label":"Previous slide",sx:dt.fabL,color:"primary",onClick:this.previousSlide,children:Object(T.jsx)(A.a,{})})}),Object(T.jsx)(D.a,{"aria-label":"Slide",sx:dt.fabC,variant:"extended",children:"  ".concat(this.state.slideIndex+1," / ").concat(this.state.mdChapters.length,"  ")}),Object(T.jsx)(lt.a,{title:"Next slide","aria-label":"Next slide",children:Object(T.jsx)(D.a,{"aria-label":"Next slide",sx:dt.fabR,color:"primary",onClick:this.nextSlide,children:Object(T.jsx)(M.a,{})})})]})}}]),n}(a.Component),jt=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(){return Object(d.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t,e=this,n=/^----!(\r\n|\n)Presentation(\r\n|\n)----!/,i=this.props.mdInfo.mdContent;return i.search(n)>=0?(console.log("presenation mode"),i=i.split(n).pop(),t=Object(T.jsx)(pt.b,{to:"".concat(this.props.match.path),render:function(t){return Object(T.jsx)(ut,Object(p.a)({mdChapters:i,mdInfo:e.props.mdInfo},t))}})):(console.log("document mode"),t=Object(T.jsx)(pt.b,{to:"".concat(this.props.match.path),render:function(t){return Object(T.jsx)(ot,Object(p.a)({mdChapters:i,mdInfo:e.props.mdInfo},t))}})),Object(T.jsx)(a.Fragment,{children:t})}}]),n}(a.Component),mt=jt,bt=n(421),Ot=n(434),ft=n(433),gt=n(402),xt=n(403),vt=n(427),yt=n(432),Ct=n(409),wt=n(426),St=n(416),kt=n(396),Tt=n(397),It=n(39),Lt={Folder:{color:"#002052",fontWeight:"bold",paddingLeft:0},File:{color:"#002052",fontWeight:"500",paddingLeft:0}},Pt=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(t){var a;function i(e){return"Folder"===e.type?function(t){return t.children.find((function(t){return i(t)}))}(e):!(!t.match.params.hasOwnProperty("fileName")||t.match.params.fileName!==e.file)}Object(d.a)(this,n);var s=i((a=e.call(this,t)).props.item);return s=void 0!==s,a.state={expand:s},a}return Object(u.a)(n,[{key:"render",value:function(){var t=this,e=this.props.item,i={};this.props.depth>0&&(i={paddingLeft:32*this.props.depth});var s={};if("Folder"===e.type){var r=e.children.map((function(e){return Object(T.jsx)(pt.b,{to:"".concat(t.props.match.path),render:function(a){return Object(T.jsx)(n,Object(p.a)({item:e,depth:t.props.depth+1,selectCb:t.props.selectCb},a),e.name)}},e.name)}));s=Object(T.jsxs)(a.Fragment,{children:[Object(T.jsxs)(Ct.a,{button:!0,style:i,onClick:function(e){return t.setState({expand:!t.state.expand})},children:[Object(T.jsx)(wt.a,{inset:!0,primary:e.name,disableTypography:!0,sx:Lt.Folder}),this.state.expand?Object(T.jsx)(kt.a,{}):Object(T.jsx)(Tt.a,{})]}),Object(T.jsx)(St.a,{in:this.state.expand,timeout:"auto",unmountOnExit:!0,children:Object(T.jsx)(vt.a,{component:"div",disablePadding:!0,children:r})})]})}else if("File"===e.type){var o=!1;this.props.match.params.hasOwnProperty("fileName")&&this.props.match.params.fileName===e.file&&(o=!0);var c="";if(this.props.match.path.search(":fileName")>0){var l=this.props.match.url.split("/");l.pop(),c=l.join("/")}else c=this.props.match.url;c+="/".concat(e.file),s=Object(T.jsx)(Ct.a,{button:!0,selected:o,style:i,onClick:function(n){return t.props.selectCb(e.name)},component:It.b,to:c,children:Object(T.jsx)(wt.a,{disableTypography:!0,inset:!0,primary:e.name,sx:Lt.File})})}return Object(T.jsx)(a.Fragment,{children:s})}}]),n}(a.Component),Ft=n(401),Dt=n(400),Nt=n(428),Bt=n(429),Rt=n(430),Et=n(398),Mt=n(431),At=n(399),Gt=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(d.a)(this,n),(a=e.call(this,t)).state={open:!1},a.tagSelected=a.tagSelected.bind(Object(j.a)(a)),a.handleClose=a.handleClose.bind(Object(j.a)(a)),a}return Object(u.a)(n,[{key:"openDialog",value:function(){this.setState({open:!0})}},{key:"tagSelected",value:function(t){this.setState({open:!1})}},{key:"handleClose",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var t=this,e=this.props.tags,n="",a="";return this.props.match.params.hasOwnProperty("githubName")&&(n=n+"/"+this.props.match.params.githubName),this.props.match.params.hasOwnProperty("githubRepository")&&(n=n+"/"+this.props.match.params.githubRepository),this.props.match.params.hasOwnProperty("fileName")&&(a=this.props.match.params.fileName),Object(T.jsxs)(Nt.a,{onClose:this.handleClose,"aria-labelledby":"simple-dialog-title",open:this.state.open,children:[Object(T.jsx)(Bt.a,{id:"simple-dialog-title",children:"Select page variant"}),Object(T.jsx)(Rt.a,{children:"Page allow multiple vatiants for its content. They can be linked to specific SW or HW version."}),Object(T.jsx)(vt.a,{children:e.map((function(e){return Object(T.jsxs)(Et.a,{onClick:function(){return t.tagSelected(e)},component:It.b,to:"".concat(n,"/").concat(e,"/").concat(a),children:[Object(T.jsx)(Mt.a,{children:Object(T.jsx)(At.a,{color:"primary"})}),Object(T.jsx)(wt.a,{primary:e})]},e)}))})]})}}]),n}(a.Component),Wt={flexGrow:1},qt=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(d.a)(this,n),(a=e.call(this,t)).tagDialog=i.a.createRef(),a.closeDrawer=a.closeDrawer.bind(Object(j.a)(a)),a.openTagDialog=a.openTagDialog.bind(Object(j.a)(a)),a}return Object(u.a)(n,[{key:"closeDrawer",value:function(){this.props.drawerChange(!1)}},{key:"openTagDialog",value:function(){this.tagDialog.current.openDialog()}},{key:"render",value:function(){var t,e=this,n=this.props.classesToUse,a=this.props.menuItems.map((function(t,n){return Object(T.jsx)(pt.b,{to:"".concat(e.props.match.path),render:function(n){return Object(T.jsx)(Pt,Object(p.a)({item:t,depth:0,selectCb:e.props.selectCb,classesToUse:e.props.classesToUse},n),t.name)}},n)})),i=Object(T.jsx)(vt.a,{component:"nav",children:a});return this.props.pageOptions.allowTagSelect?t=Object(T.jsx)(y.a,{color:"inherit",onClick:this.openTagDialog,startIcon:Object(T.jsx)(Dt.a,{}),sx:Wt,children:this.props.match.params.gitTag}):Array.isArray(this.props.tagList)&&(t=Object(T.jsx)(y.a,{color:"inherit",startIcon:Object(T.jsx)(Dt.a,{}),sx:Wt,children:this.props.tagList[0]})),Object(T.jsxs)(yt.a,{sx:n.drawer,variant:"persistent",open:this.props.isDrawerOpen,anchor:"left",children:[Object(T.jsxs)(ft.a,{children:[Object(T.jsx)(bt.a,{onClick:this.closeDrawer,color:"inherit","aria-label":"open drawer",edge:"start",children:Object(T.jsx)(Ft.a,{})}),t]}),Object(T.jsx)(C.a,{}),i,Object(T.jsx)(pt.b,{to:"".concat(this.props.match.path),render:function(t){return Object(T.jsx)(Gt,Object(p.a)({tags:e.props.tagList,ref:e.tagDialog},t))}})]})}}]),n}(a.Component),Ut=320,zt={root:{display:"flex"},drawer:{width:Ut,flexShrink:0,"& .MuiDrawer-paper":{width:Ut}},drawerPaper:{width:Ut},appBarClose:{marginLeft:Ut,transition:function(t){return t.transitions.create(["margin","width"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen})}},appBarOpen:{width:"calc(100% - ".concat(Ut,"px)"),marginLeft:Ut,transition:function(t){return t.transitions.create(["margin","width"],{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen})}},content:{flexGrow:1,padding:24,transition:function(t){return t.transitions.create("margin",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen})},marginLeft:0},contentShift:{transition:function(t){return t.transitions.create("margin",{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen})},marginLeft:0},nested:{paddingLeft:32},title:{flexGrow:1}},_t=function(t){Object(m.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(d.a)(this,n),(a=e.call(this,t)).state={mdFilesContent:[],mdSelected:"",isDrawerOpen:!0,menuStructure:[],mdfilesToLoadArr:[],mdGithubLoc:"",githubPage:"",selectTag:!1,tagList:[],githubName:"",githubRepository:"",gitTag:"",pageOptions:{allowMenu:!0,allowTagSelect:!0}},a.itemSelectedCb=a.itemSelectedCb.bind(Object(j.a)(a)),a.drawerOpenClose=a.drawerOpenClose.bind(Object(j.a)(a)),a.handleDrawerOpen=a.handleDrawerOpen.bind(Object(j.a)(a)),a.fetchRestOfFiles=a.fetchRestOfFiles.bind(Object(j.a)(a)),a.fetchGithubTags=a.fetchGithubTags.bind(Object(j.a)(a)),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.fetchRestOfFiles(this.props.match.params.githubName,this.props.match.params.githubRepository,this.props.match.params.gitTag)}},{key:"componentDidUpdate",value:function(t){this.props.match.params.gitTag!==t.match.params.gitTag&&this.fetchRestOfFiles(this.props.match.params.githubName,this.props.match.params.githubRepository,this.props.match.params.gitTag)}},{key:"fetchGithubTags",value:function(t,e){var n=this,a="https://api.github.com/repos/".concat(t,"/").concat(e,"/tags");fetch(a).then((function(t){return t.json()})).then((function(t){var e=t.map((function(t){return t.name}));n.setState({tagList:e})}))}},{key:"fetchRestOfFiles",value:function(t,e,n){var a,i=this,s=[],r="";this.fetchGithubTags(t,e),r="https://raw.githubusercontent.com/".concat(t,"/").concat(e,"/").concat(n),fetch(r+"/filesToLoad.json").then((function(t){return t.json()})).then((function(t){document.title=t.title,a=t})).then((function(){var o=a.filesToLoadArr.map((function(t){return fetch(r+t.path+"/"+t.file).then((function(t){return t.text()})).then((function(e){var n={name:t.name,mdContent:e,mdPath:t.path,mdFile:t.file};s.push(n)}))}));Promise.all(o).then((function(){var o=!0;"options"in a&&"allowMenu"in a.options||(a.options=i.state.pageOptions,console.log("Add options to yout filesToLoad file")),!1===a.options.allowMenu&&(o=!1),i.setState({githubName:t,githubRepository:e,gitTag:n,mdFilesContent:s,menuStructure:a.menuStructure,mdfilesToLoadArr:a.filesToLoadArr,mdGithubLoc:a.githubLoc,githubPage:r,pageOptions:a.options,isDrawerOpen:o})}))}))}},{key:"itemSelectedCb",value:function(t){this.setState({mdSelected:t})}},{key:"handleDrawerOpen",value:function(){this.drawerOpenClose(!0)}},{key:"drawerOpenClose",value:function(t){this.setState({isDrawerOpen:t})}},{key:"render",value:function(){var t,e,n,i,s,r,o=this,c={},l="";if(l="/:githubName/:githubRepository/:gitTag",0===this.state.mdFilesContent.length)c.name="Loading",c.mdContent="",c.mdPath="";else if(1===this.state.mdFilesContent.length){c=this.state.mdFilesContent[0];var h=this.state.menuStructure[0];t=Object(T.jsx)(pt.b,{to:"".concat(this.props.match.path),render:function(t){return Object(T.jsx)(qt,Object(p.a)({classesToUse:zt,menuItems:o.state.menuStructure,selectCb:o.itemSelectedCb,isDrawerOpen:o.state.isDrawerOpen,drawerChange:o.drawerOpenClose,tagList:o.state.tagList,pageOptions:o.state.pageOptions,match:o.props.match},t))}}),e=Object(T.jsx)(pt.b,{path:"".concat(l,"/").concat(h.file),render:function(t){return Object(T.jsx)(z.Provider,{value:o.state.githubPage,children:Object(T.jsx)(mt,Object(p.a)({mdInfo:c},t))})}})}else t=Object(T.jsx)(pt.b,{to:"".concat(this.props.match.path),render:function(t){return Object(T.jsx)(qt,Object(p.a)({classesToUse:zt,menuItems:o.state.menuStructure,selectCb:o.itemSelectedCb,isDrawerOpen:o.state.isDrawerOpen,drawerChange:o.drawerOpenClose,tagList:o.state.tagList,pageOptions:o.state.pageOptions,match:o.props.match},t))}}),c=this.state.mdFilesContent.find((function(t){return t.name===o.state.mdSelected})),(e=this.state.mdFilesContent.map((function(t,e){return Object(T.jsx)(pt.b,{path:"".concat(l,"/").concat(t.mdFile),render:function(e){return Object(T.jsx)(z.Provider,{value:o.state.githubPage,children:Object(T.jsx)(mt,Object(p.a)({mdInfo:t},e))})}},e)}))).push(Object(T.jsx)(pt.b,{exact:!0,path:"".concat(this.props.match.path),render:function(t){return Object(T.jsx)(a.Fragment,{})}},"main screen not selected item")),void 0===c&&((c={}).name="",c.mdContent="",c.mdPath="");this.state.isDrawerOpen?(n=zt.appBarOpen,i=zt.contentShift):(console.log(this),"allowMenu"in this.state.pageOptions&&!0===this.state.pageOptions.allowMenu&&(s=Object(T.jsx)(bt.a,{color:"inherit","aria-label":"open drawer",onClick:this.handleDrawerOpen,edge:"start",children:Object(T.jsx)(gt.a,{})})),n=zt.appBarClose,t=null,i=zt.content);var d=this.state.mdfilesToLoadArr.find((function(t){return o.props.location.pathname.includes(t.file)}));if(void 0!==d){var u="https://github.com/".concat(this.state.githubName,"/").concat(this.state.githubRepository,"/blob/").concat(this.state.gitTag).concat(d.path,"/").concat(d.file);c.name=d.name,r=Object(T.jsx)(y.a,{target:"_blank",href:u,startIcon:Object(T.jsx)(xt.a,{}),color:"inherit",children:"EDIT THIS PAGE"})}return Object(T.jsxs)(P.a,{sx:zt.root,children:[t,Object(T.jsx)(Ot.a,{position:"fixed",sx:n,children:Object(T.jsxs)(ft.a,{children:[s,Object(T.jsx)(g.a,{variant:"h6",color:"inherit",sx:zt.title,children:c.name}),r]})}),Object(T.jsx)(P.a,{className:i,children:Object(T.jsxs)(k.a,{maxSnack:3,children:[Object(T.jsx)(ft.a,{}),e,Object(T.jsx)(P.a,{sx:{height:80}})]})})]})}}]),n}(a.Component),Ht=n(415),Jt=(n(349),Object(o.a)({typography:{useNextVariants:!0,fontFamily:["Roboto","Arial"].join(",")},palette:{primary:l.a,secondary:h.a,text:{primary:"#002052"}}}));var Vt=function(){var t;return t=Object(T.jsxs)(a.Fragment,{children:[Object(T.jsx)(pt.b,{path:"/:githubName/:githubRepository/",exact:!0,render:function(t){return Object(T.jsx)(pt.a,{to:"/".concat(t.match.params.githubName,"/").concat(t.match.params.githubRepository,"/master")})}}),Object(T.jsx)(pt.b,{path:"/:githubName/:githubRepository/:gitTag",exact:!0,component:_t}),Object(T.jsx)(pt.b,{path:"/:githubName/:githubRepository/:gitTag/:fileName",component:_t})]}),Object(T.jsx)(It.a,{basename:"/tomas_materials_v2",children:Object(T.jsxs)(c.a,{theme:Jt,children:[Object(T.jsx)(Ht.a,{}),Object(T.jsx)("div",{className:"App",children:Object(T.jsx)(pt.d,{children:t})})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(T.jsx)(Vt,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[350,1,2]]]);
//# sourceMappingURL=main.db7ef4f9.chunk.js.map