(this.webpackJsonpmarkdown_test=this.webpackJsonpmarkdown_test||[]).push([[0],{123:function(t,e,n){},350:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),s=n(40),r=n.n(s),o=(n(123),n(101)),c=n(412),l=n(52),h=n(402),p=n(27),d=n(16),u=n(17),m=n(14),j=n(19),b=n(18),O=n(35),f=n(92),g=n(420),x=n(421),v=n(405),y=n(415),C=n(416),w=n(408),S=n(385),T=n(74),k=n(1),I=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(d.a)(this,n),(a=e.call(this,t)).state={timeoutCnt:0},a.copyToClipBoard=a.copyToClipBoard.bind(Object(m.a)(a)),a.copyTimeout=a.copyTimeout.bind(Object(m.a)(a)),a}return Object(u.a)(n,[{key:"copyToClipBoard",value:function(t){this.props.enqueueSnackbar("Code is now in your clipboard",{variant:"info"});var e=document.createElement("textarea");e.value=this.props.children,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e);var n=this.state.timeoutCnt;n++,this.setState({timeoutCnt:n}),setTimeout(this.copyTimeout,5e3)}},{key:"copyTimeout",value:function(){var t=this.state.timeoutCnt;t>0&&(t--,this.setState({timeoutCnt:t++}))}},{key:"render",value:function(){var t,e,n,a=[];if(this.state.timeoutCnt>0?(t="!!   Copied   !!",e="primary"):(t="Copy code",e="primary"),void 0!==this.props.className&&this.props.className.includes("lang-")){var i,s=this.props.className.split("lang-").pop();s.includes("-nc")?s=s.split("-nc")[0]:a=Object(k.jsx)("div",{children:Object(k.jsx)(y.a,{variant:"contained",size:"small",style:{marginBottom:12},color:e,onClick:this.copyToClipBoard,children:t})}),i=1!==this.props.children.split(/\r\n|\r|\n/).length,n=Object(k.jsxs)("div",{children:[Object(k.jsx)(C.a,{}),Object(k.jsx)("div",{children:Object(k.jsx)(w.a,{language:s,style:S.a,showLineNumbers:i,wrapLongLines:!0,codeTagProps:{style:{fontFamily:"inherit"}},children:this.props.children})}),a,Object(k.jsx)(C.a,{})]})}else n=Object(k.jsx)("i",{children:Object(k.jsx)("b",{children:Object(k.jsx)("code",{children:this.props.children})})});return n}}]),n}(a.Component),L=Object(T.b)(I),F=n(417),D=n(418),N=n(410),P=n(387),B=n(388),E=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(d.a)(this,n),(a=e.call(this,t)).state={imageDescription:{},imagesLoaded:!1,imageIndex:0,imageCount:0,timeoutId:null},a.handleNext=a.handleNext.bind(Object(m.a)(a)),a.handleBack=a.handleBack.bind(Object(m.a)(a)),a.onTimeout=a.onTimeout.bind(Object(m.a)(a)),a.onMouseEnter=a.onMouseEnter.bind(Object(m.a)(a)),a.onMouseLeave=a.onMouseLeave.bind(Object(m.a)(a)),a}return Object(u.a)(n,[{key:"componentWillUnmount",value:function(){clearTimeout(this.state.timeoutId)}},{key:"componentDidMount",value:function(){var t=this;console.log(this.props);var e=this.props.src;fetch(e).then((function(t){return t.json()})).then((function(e){var n=setTimeout(t.onTimeout,e.interval);t.setState({imageDescription:e,imagesLoaded:!0,imageCount:e.sequence.length,timeoutId:n})}))}},{key:"handleNext",value:function(){var t=this.state.imageIndex+1;t>=this.state.imageCount&&(t=0),this.setState({imageIndex:t})}},{key:"handleBack",value:function(){var t=this.state.imageIndex-1;t<0&&(t=this.state.imageCount-1),this.setState({imageIndex:t})}},{key:"onTimeout",value:function(){var t=setTimeout(this.onTimeout,this.state.imageDescription.interval);this.setState({timeoutId:t}),this.handleNext()}},{key:"onMouseEnter",value:function(){clearTimeout(this.state.timeoutId)}},{key:"onMouseLeave",value:function(){var t=setTimeout(this.onTimeout,this.state.imageDescription.interval);this.setState({timeoutId:t})}},{key:"render",value:function(){var t=this,e=(this.state.imageDescription.path,this.state.imageDescription.sequence),n=[];this.state.imagesLoaded&&(n=this.state.imageDescription.sequence.map((function(e,n){var a={display:"none"};return n===t.state.imageIndex&&(a={}),Object(k.jsx)(F.a,{sx:{justifyContent:"center",display:"flex"},children:Object(k.jsx)("img",{alt:n,src:t.props.mdPath+"/img/"+e.name,title:e.name,style:a},n)})})));var a=0,i="dots";return this.state.imagesLoaded&&(a=e.length)>10&&(i="progress"),Object(k.jsx)(F.a,{children:Object(k.jsxs)(D.a,{onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,children:[n,Object(k.jsx)(N.a,{variant:i,steps:a,position:"static",activeStep:this.state.imageIndex,nextButton:Object(k.jsxs)(y.a,{size:"small",onClick:this.handleNext,children:["Next",Object(k.jsx)(P.a,{})]}),backButton:Object(k.jsxs)(y.a,{size:"small",onClick:this.handleBack,children:[Object(k.jsx)(B.a,{}),"Back"]})})]})})}}]),n}(a.Component),R=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(){return Object(d.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t,e=this.props.src;console.log(this.props);var n=/.json/;return console.log(e.match(n)),t=null!==e.match(n)?Object(k.jsx)(a.Fragment,{children:Object(k.jsx)(E,{src:this.props.mdInfo.mdPath+"/img/"+this.props.src.replace("./img/",""),mdPath:this.props.mdInfo.mdPath})}):Object(k.jsxs)(a.Fragment,{children:[Object(k.jsx)("img",{alt:this.props.alt,src:this.props.mdInfo.mdPath+"/img/"+this.props.src.replace("./img/",""),title:this.props.title,style:{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",maxWidth:"100%",height:"auto"}}),Object(k.jsx)("br",{})]}),Object(k.jsx)(a.Fragment,{children:t})}}]),n}(a.Component),M=R,A=i.a.createContext(""),G=["children"],W=["children"],U=["children"],q=["children"],z=["children"],_=["children"],H=["children"],J=["children"],V=["children"],$=["children"],K=["children"],Q=["children"],X=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(){return Object(d.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this,e={overrides:{h1:{component:function(t){var e=t.children;Object(O.a)(t,G);return Object(k.jsxs)(g.a,{gutterBottom:!0,variant:"h4",children:[" ",e,"  "]})},props:{classes:this.props.classes}},h2:{component:function(t){var e=t.children;Object(O.a)(t,W);return Object(k.jsxs)(g.a,{gutterBottom:!0,variant:"h6",children:[" ",e]})},props:{classes:this.props.classes}},h3:{component:function(t){var e=t.children;Object(O.a)(t,U);return Object(k.jsxs)(g.a,{gutterBottom:!0,variant:"subtitle1",children:[" ",e]})},props:{classes:this.props.classes}},h4:{component:function(t){var e=t.children;Object(O.a)(t,q);return Object(k.jsxs)(g.a,{gutterBottom:!0,variant:"caption",paragraph:!0,children:[" ",e]})},props:{classes:this.props.classes}},p:{component:function(t){var e=t.children;Object(O.a)(t,z);return Object(k.jsxs)(g.a,{paragraph:!0,children:[e," "]})},props:{classes:this.props.classes}},a:{component:x.a},li:{component:function(t){var e=t.children;Object(O.a)(t,_);return Object(k.jsx)("li",{children:Object(k.jsx)(g.a,{component:"span",children:e})})},props:{classes:this.props.classes}},code:{component:L},pre:{component:function(t){var e=t.children;Object(O.a)(t,H);return Object(k.jsx)(a.Fragment,{children:e})}},img:{component:function(e){e.children;var n=Object(O.a)(e,J);return Object(k.jsx)(a.Fragment,{children:Object(k.jsx)(M,Object(p.a)(Object(p.a)({},n),{},{mdInfo:t.props.mdInfo}))})}},ainfo:{component:function(t){var e=t.children;Object(O.a)(t,V);return Object(k.jsx)(v.a,{variant:"filled",severity:"info",children:e})}},asuccess:{component:function(t){var e=t.children;Object(O.a)(t,$);return Object(k.jsx)(v.a,{variant:"filled",severity:"success",children:e})}},awarning:{component:function(t){var e=t.children;Object(O.a)(t,K);return Object(k.jsx)(v.a,{variant:"filled",severity:"warning",children:e})}},aerror:{component:function(t){var e=t.children;Object(O.a)(t,Q);return Object(k.jsx)(v.a,{variant:"filled",severity:"error",children:e})}}}};return Object(k.jsx)(a.Fragment,{children:Object(k.jsx)(f.a,{children:this.props.children,options:e})})}}]),n}(a.Component);X.contextType=A;var Y=X,Z=n(423),tt=n(389),et={position:"fixed",bottom:function(t){return t.spacing(2)},right:function(t){return t.spacing(2)}},nt=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(d.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).scrollTop=function(){window.scrollTo({top:0,behavior:"smooth"})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this,e=this.props.mdChapters,n=(e=e.split(/(^#\s.*\r\n\r\n)/g)).map((function(e,n){return Object(k.jsx)(Y,{children:e,enqueueSnackbar:t.props.enqueueSnackbar,mdInfo:t.props.mdInfo,routerLocation:t.props.routerLocation},n)}));return Object(k.jsxs)(F.a,{justify:"flex-start",spacing:0,style:{padding:24},children:[n,Object(k.jsx)(Z.a,{"aria-label":"Add",sx:et,color:"primary",onClick:this.scrollTop,children:Object(k.jsx)(tt.a,{})})]})}}]),n}(a.Component),at=nt,it=n(390),st=n(404),rt=n(393),ot=n(20),ct={fabR:{position:"fixed",bottom:function(t){return t.spacing(2)},right:function(t){return t.spacing(2)}},fabC:{position:"fixed",bottom:function(t){return t.spacing(10)},right:function(t){return t.spacing(2)}},fabL:{position:"fixed",bottom:function(t){return t.spacing(2)},right:function(t){return t.spacing(10)}},fabLL:{position:"fixed",bottom:function(t){return t.spacing(2)},right:function(t){return t.spacing(18)}}},lt=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(t){var a;Object(d.a)(this,n);var i=(a=e.call(this,t)).props.mdChapters;(i=i.split(/^(?=#\s.*[\r\n\r\n|\n\n])/gm))[0].search(/^[\r\n\r\n|\n\n]/)>=0&&i.shift();var s=i.length;return a.state={slideIndex:0,mdChapters:i,mdChapterSize:s,slide:!0,slideToShow:0,reroute:!1,enter:!0},a.nextSlide=a.nextSlide.bind(Object(m.a)(a)),a.previousSlide=a.previousSlide.bind(Object(m.a)(a)),a.firstSlide=a.firstSlide.bind(Object(m.a)(a)),a.onExited=a.onExited.bind(Object(m.a)(a)),a.onEnter=a.onEnter.bind(Object(m.a)(a)),a}return Object(u.a)(n,[{key:"firstSlide",value:function(){var t=this.state.slideIndex;this.setState({previousIndex:t,slideIndex:0,slide:!1})}},{key:"nextSlide",value:function(){var t=this.state.slideIndex+1;t>=this.state.mdChapterSize?console.log("\xe7ondition fail"):this.setState({slideIndex:t,slide:!1})}},{key:"previousSlide",value:function(){var t=this.state.slideIndex-1;t<0&&(t=0),this.setState({slideIndex:t,slide:!1})}},{key:"onExited",value:function(){this.setState({slideToShow:this.state.slideIndex,slide:!0,reroute:!0})}},{key:"onEnter",value:function(t){this.setState({slideIndex:t,slideToShow:t,enter:!1})}},{key:"render",value:function(){var t=this,e=Object(k.jsxs)(ot.d,{children:[Object(k.jsx)(ot.b,{exact:!0,path:"".concat(this.props.match.path,"/:id"),render:function(e){var n=e.match,i=parseInt(n.params.id);return t.state.reroute?Object(k.jsx)(ot.a,{push:!0,to:"".concat(t.props.match.url,"/").concat(t.state.slideIndex)}):(t.state.enter&&setTimeout(t.onEnter,0,i),Object(k.jsx)(a.Fragment,{}))}}),Object(k.jsx)(ot.a,{exact:!0,from:"".concat(this.props.match.url),to:"".concat(this.props.match.url,"/0")})]}),n=Object(k.jsx)(a.Fragment,{children:Object(k.jsx)(it.a,{in:this.state.slide,unmountOnExit:!0,mountOnEnter:!0,onExited:this.onExited,children:Object(k.jsx)("div",{children:Object(k.jsx)(Y,{children:this.state.mdChapters[this.state.slideToShow],mdInfo:this.props.mdInfo})})})});return Object(k.jsxs)(F.a,{justify:"flex-start",spacing:0,style:{padding:24},children:[e,n,Object(k.jsx)(st.a,{title:"First slide","aria-label":"First slide",children:Object(k.jsx)(Z.a,{"aria-label":"First slide",sx:ct.fabLL,color:"primary",onClick:this.firstSlide,children:Object(k.jsx)(rt.a,{})})}),Object(k.jsx)(st.a,{title:"Previous slide","aria-label":"Previous slide",children:Object(k.jsx)(Z.a,{"aria-label":"Previous slide",sx:ct.fabL,color:"primary",onClick:this.previousSlide,children:Object(k.jsx)(B.a,{})})}),Object(k.jsx)(Z.a,{"aria-label":"Slide",sx:ct.fabC,variant:"extended",children:"  ".concat(this.state.slideIndex+1," / ").concat(this.state.mdChapters.length,"  ")}),Object(k.jsx)(st.a,{title:"Next slide","aria-label":"Next slide",children:Object(k.jsx)(Z.a,{"aria-label":"Next slide",sx:ct.fabR,color:"primary",onClick:this.nextSlide,children:Object(k.jsx)(P.a,{})})})]})}}]),n}(a.Component),ht=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(){return Object(d.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t,e=this,n=/^----!(\r\n|\n)Presentation(\r\n|\n)----!/,i=this.props.mdInfo.mdContent;return i.search(n)>=0?(console.log("presenation mode"),i=i.split(n).pop(),t=Object(k.jsx)(ot.b,{to:"".concat(this.props.match.path),render:function(t){return Object(k.jsx)(lt,Object(p.a)({mdChapters:i,mdInfo:e.props.mdInfo},t))}})):(console.log("document mode"),t=Object(k.jsx)(ot.b,{to:"".concat(this.props.match.path),render:function(t){return Object(k.jsx)(at,Object(p.a)({mdChapters:i,mdInfo:e.props.mdInfo},t))}})),Object(k.jsx)(a.Fragment,{children:t})}}]),n}(a.Component),pt=ht,dt=n(422),ut=n(432),mt=n(431),jt=n(400),bt=n(401),Ot=n(425),ft=n(430),gt=n(407),xt=n(424),vt=n(414),yt=n(394),Ct=n(395),wt=n(39),St={Folder:{color:"#002052",fontWeight:"bold"},File:{color:"#002052",fontWeight:"500"}},Tt=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(t){var a;function i(e){return"Folder"===e.type?function(t){return t.children.find((function(t){return i(t)}))}(e):!(!t.match.params.hasOwnProperty("fileName")||t.match.params.fileName!==e.file)}Object(d.a)(this,n);var s=i((a=e.call(this,t)).props.item);return s=void 0!==s,a.state={expand:s},a}return Object(u.a)(n,[{key:"render",value:function(){var t=this,e=this.props.item,i={};this.props.depth>0&&(i={paddingLeft:32*this.props.depth});var s={};if("Folder"===e.type){var r=e.children.map((function(e){return Object(k.jsx)(ot.b,{to:"".concat(t.props.match.path),render:function(a){return Object(k.jsx)(n,Object(p.a)({item:e,depth:t.props.depth+1,selectCb:t.props.selectCb},a),e.name)}},e.name)}));s=Object(k.jsxs)(a.Fragment,{children:[Object(k.jsxs)(gt.a,{button:!0,style:i,onClick:function(e){return t.setState({expand:!t.state.expand})},children:[Object(k.jsx)(xt.a,{inset:!0,primary:e.name,disableTypography:!0,sx:St.Folder}),this.state.expand?Object(k.jsx)(yt.a,{}):Object(k.jsx)(Ct.a,{})]}),Object(k.jsx)(vt.a,{in:this.state.expand,timeout:"auto",unmountOnExit:!0,children:Object(k.jsx)(Ot.a,{component:"div",disablePadding:!0,children:r})})]})}else if("File"===e.type){var o=!1;this.props.match.params.hasOwnProperty("fileName")&&this.props.match.params.fileName===e.file&&(o=!0);var c="";if(this.props.match.path.search(":fileName")>0){var l=this.props.match.url.split("/");l.pop(),c=l.join("/")}else c=this.props.match.url;c+="/".concat(e.file),s=Object(k.jsx)(gt.a,{button:!0,selected:o,style:i,onClick:function(n){return t.props.selectCb(e.name)},component:wt.b,to:c,children:Object(k.jsx)(xt.a,{disableTypography:!0,inset:!0,primary:e.name,sx:St.File})})}return Object(k.jsx)(a.Fragment,{children:s})}}]),n}(a.Component),kt=n(399),It=n(398),Lt=n(426),Ft=n(427),Dt=n(428),Nt=n(396),Pt=n(429),Bt=n(397),Et=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(d.a)(this,n),(a=e.call(this,t)).state={open:!1},a.tagSelected=a.tagSelected.bind(Object(m.a)(a)),a.handleClose=a.handleClose.bind(Object(m.a)(a)),a}return Object(u.a)(n,[{key:"openDialog",value:function(){this.setState({open:!0})}},{key:"tagSelected",value:function(t){this.setState({open:!1})}},{key:"handleClose",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var t=this,e=this.props.tags,n="",a="";return this.props.match.params.hasOwnProperty("githubName")&&(n=n+"/"+this.props.match.params.githubName),this.props.match.params.hasOwnProperty("githubRepository")&&(n=n+"/"+this.props.match.params.githubRepository),this.props.match.params.hasOwnProperty("fileName")&&(a=this.props.match.params.fileName),Object(k.jsxs)(Lt.a,{onClose:this.handleClose,"aria-labelledby":"simple-dialog-title",open:this.state.open,children:[Object(k.jsx)(Ft.a,{id:"simple-dialog-title",children:"Select page variant"}),Object(k.jsx)(Dt.a,{children:"Page allow multiple vatiants for its content. They can be linked to specific SW or HW version."}),Object(k.jsx)(Ot.a,{children:e.map((function(e){return Object(k.jsxs)(Nt.a,{onClick:function(){return t.tagSelected(e)},component:wt.b,to:"".concat(n,"/").concat(e,"/").concat(a),children:[Object(k.jsx)(Pt.a,{children:Object(k.jsx)(Bt.a,{color:"primary"})}),Object(k.jsx)(xt.a,{primary:e})]},e)}))})]})}}]),n}(a.Component),Rt={flexGrow:1},Mt=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(d.a)(this,n),(a=e.call(this,t)).tagDialog=i.a.createRef(),a.closeDrawer=a.closeDrawer.bind(Object(m.a)(a)),a.openTagDialog=a.openTagDialog.bind(Object(m.a)(a)),a}return Object(u.a)(n,[{key:"closeDrawer",value:function(){this.props.drawerChange(!1)}},{key:"openTagDialog",value:function(){this.tagDialog.current.openDialog()}},{key:"render",value:function(){var t,e=this,n=this.props.classesToUse,a=this.props.menuItems.map((function(t,n){return Object(k.jsx)(ot.b,{to:"".concat(e.props.match.path),render:function(n){return Object(k.jsx)(Tt,Object(p.a)({item:t,depth:0,selectCb:e.props.selectCb,classesToUse:e.props.classesToUse},n),t.name)}},n)})),i=Object(k.jsx)(Ot.a,{component:"nav",children:a});return this.props.pageOptions.allowTagSelect&&(t=Object(k.jsx)(y.a,{color:"inherit",onClick:this.openTagDialog,startIcon:Object(k.jsx)(It.a,{}),sx:Rt,children:this.props.match.params.gitTag})),Object(k.jsxs)(ft.a,{sx:n.drawer,variant:"persistent",open:this.props.isDrawerOpen,anchor:"left",children:[Object(k.jsxs)(mt.a,{children:[Object(k.jsx)(dt.a,{onClick:this.closeDrawer,color:"inherit","aria-label":"open drawer",edge:"start",children:Object(k.jsx)(kt.a,{})}),t]}),Object(k.jsx)(C.a,{}),i,Object(k.jsx)(ot.b,{to:"".concat(this.props.match.path),render:function(t){return Object(k.jsx)(Et,Object(p.a)({tags:e.props.tagList,ref:e.tagDialog},t))}})]})}}]),n}(a.Component),At=320,Gt={root:{display:"flex"},drawer:{width:At,flexShrink:0,"& .MuiDrawer-paper":{width:At}},drawerPaper:{width:At},appBarClose:{marginLeft:At,transition:function(t){return t.transitions.create(["margin","width"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen})}},appBarOpen:{width:"calc(100% - ".concat(At,"px)"),marginLeft:At,transition:function(t){return t.transitions.create(["margin","width"],{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen})}},content:{flexGrow:1,padding:24,transition:function(t){return t.transitions.create("margin",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen})},marginLeft:0},contentShift:{transition:function(t){return t.transitions.create("margin",{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen})},marginLeft:0},nested:{paddingLeft:32},title:{flexGrow:1}},Wt=function(t){Object(j.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(d.a)(this,n),(a=e.call(this,t)).state={mdFilesContent:[],mdSelected:"",isDrawerOpen:!0,menuStructure:[],mdfilesToLoadArr:[],mdGithubLoc:"",githubPage:"",selectTag:!1,tagList:[],githubName:"",githubRepository:"",gitTag:"",pageOptions:{allowMenu:!0,allowTagSelect:!0}},a.itemSelectedCb=a.itemSelectedCb.bind(Object(m.a)(a)),a.drawerOpenClose=a.drawerOpenClose.bind(Object(m.a)(a)),a.handleDrawerOpen=a.handleDrawerOpen.bind(Object(m.a)(a)),a.fetchRestOfFiles=a.fetchRestOfFiles.bind(Object(m.a)(a)),a.fetchGithubTags=a.fetchGithubTags.bind(Object(m.a)(a)),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.fetchRestOfFiles(this.props.match.params.githubName,this.props.match.params.githubRepository,this.props.match.params.gitTag)}},{key:"componentDidUpdate",value:function(t){this.props.match.params.gitTag!==t.match.params.gitTag&&this.fetchRestOfFiles(this.props.match.params.githubName,this.props.match.params.githubRepository,this.props.match.params.gitTag)}},{key:"fetchGithubTags",value:function(t,e){var n=this,a="https://api.github.com/repos/".concat(t,"/").concat(e,"/tags");fetch(a).then((function(t){return t.json()})).then((function(t){var e=t.map((function(t){return t.name}));n.setState({tagList:e})}))}},{key:"fetchRestOfFiles",value:function(t,e,n){var a,i=this,s=[],r="";this.fetchGithubTags(t,e),r="https://raw.githubusercontent.com/".concat(t,"/").concat(e,"/").concat(n),fetch(r+"/filesToLoad.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(t){return t.json()})).then((function(t){document.title=t.title,a=t})).then((function(){var o=a.filesToLoadArr.map((function(t){return fetch(r+t.path+"/"+t.file).then((function(t){return t.text()})).then((function(e){var n={name:t.name,mdContent:e,mdPath:t.path,mdFile:t.file};s.push(n)}))}));Promise.all(o).then((function(){var o=!0;"options"in a&&"allowMenu"in a.options||(a.options=i.state.pageOptions,console.log("Add options to yout filesToLoad file")),!1===a.options.allowMenu&&(o=!1),i.setState({githubName:t,githubRepository:e,gitTag:n,mdFilesContent:s,menuStructure:a.menuStructure,mdfilesToLoadArr:a.filesToLoadArr,mdGithubLoc:a.githubLoc,githubPage:r,pageOptions:a.options,isDrawerOpen:o})}))}))}},{key:"itemSelectedCb",value:function(t){this.setState({mdSelected:t})}},{key:"handleDrawerOpen",value:function(){this.drawerOpenClose(!0)}},{key:"drawerOpenClose",value:function(t){this.setState({isDrawerOpen:t})}},{key:"render",value:function(){var t,e,n,i,s,r,o=this,c={},l="";if(l="/:githubName/:githubRepository/:gitTag",0===this.state.mdFilesContent.length)c.name="Loading",c.mdContent="",c.mdPath="";else if(1===this.state.mdFilesContent.length){c=this.state.mdFilesContent[0];var h=this.state.menuStructure[0];t=Object(k.jsx)(ot.b,{to:"".concat(this.props.match.path),render:function(t){return Object(k.jsx)(Mt,Object(p.a)({classesToUse:Gt,menuItems:o.state.menuStructure,selectCb:o.itemSelectedCb,isDrawerOpen:o.state.isDrawerOpen,drawerChange:o.drawerOpenClose,tagList:o.state.tagList,pageOptions:o.state.pageOptions,match:o.props.match},t))}}),e=Object(k.jsx)(ot.b,{path:"".concat(l,"/").concat(h.file),render:function(t){return Object(k.jsx)(A.Provider,{value:o.state.githubPage,children:Object(k.jsx)(pt,Object(p.a)({mdInfo:c},t))})}})}else t=Object(k.jsx)(ot.b,{to:"".concat(this.props.match.path),render:function(t){return Object(k.jsx)(Mt,Object(p.a)({classesToUse:Gt,menuItems:o.state.menuStructure,selectCb:o.itemSelectedCb,isDrawerOpen:o.state.isDrawerOpen,drawerChange:o.drawerOpenClose,tagList:o.state.tagList,pageOptions:o.state.pageOptions,match:o.props.match},t))}}),c=this.state.mdFilesContent.find((function(t){return t.name===o.state.mdSelected})),(e=this.state.mdFilesContent.map((function(t,e){return Object(k.jsx)(ot.b,{path:"".concat(l,"/").concat(t.mdFile),render:function(e){return Object(k.jsx)(A.Provider,{value:o.state.githubPage,children:Object(k.jsx)(pt,Object(p.a)({mdInfo:t},e))})}},e)}))).push(Object(k.jsx)(ot.b,{exact:!0,path:"".concat(this.props.match.path),render:function(t){return Object(k.jsx)(a.Fragment,{})}},"main screen not selected item")),void 0===c&&((c={}).name="",c.mdContent="",c.mdPath="");this.state.isDrawerOpen?(n=Gt.appBarOpen,i=Gt.contentShift):(console.log(this),"allowMenu"in this.state.pageOptions&&!0===this.state.pageOptions.allowMenu&&(s=Object(k.jsx)(dt.a,{color:"inherit","aria-label":"open drawer",onClick:this.handleDrawerOpen,edge:"start",children:Object(k.jsx)(jt.a,{})})),n=Gt.appBarClose,t=null,i=Gt.content);var d=this.state.mdfilesToLoadArr.find((function(t){return o.props.location.pathname.includes(t.file)}));if(void 0!==d){var u="https://github.com/".concat(this.state.githubName,"/").concat(this.state.githubRepository,"/blob/").concat(this.state.gitTag).concat(d.path,"/").concat(d.file);c.name=d.name,r=Object(k.jsx)(y.a,{target:"_blank",href:u,startIcon:Object(k.jsx)(bt.a,{}),color:"inherit",children:"EDIT THIS PAGE"})}return Object(k.jsxs)(F.a,{sx:Gt.root,children:[t,Object(k.jsx)(ut.a,{position:"fixed",sx:n,children:Object(k.jsxs)(mt.a,{children:[s,Object(k.jsx)(g.a,{variant:"h6",color:"inherit",sx:Gt.title,children:c.name}),r]})}),Object(k.jsx)(F.a,{className:i,children:Object(k.jsxs)(T.a,{maxSnack:3,children:[Object(k.jsx)(mt.a,{}),e,Object(k.jsx)(F.a,{sx:{height:80}})]})})]})}}]),n}(a.Component),Ut=n(413),qt=(n(349),Object(o.a)({typography:{useNextVariants:!0,fontFamily:["Roboto","Arial"].join(",")},palette:{primary:l.a,secondary:h.a,text:{primary:"#002052"}}}));var zt=function(){var t;return t=Object(k.jsxs)(a.Fragment,{children:[Object(k.jsx)(ot.b,{path:"/:githubName/:githubRepository/",exact:!0,render:function(t){return Object(k.jsx)(ot.a,{to:"/".concat(t.match.params.githubName,"/").concat(t.match.params.githubRepository,"/master")})}}),Object(k.jsx)(ot.b,{path:"/:githubName/:githubRepository/:gitTag",exact:!0,component:Wt}),Object(k.jsx)(ot.b,{path:"/:githubName/:githubRepository/:gitTag/:fileName",component:Wt})]}),Object(k.jsx)(wt.a,{basename:"/tomas_materials_v2",children:Object(k.jsxs)(c.a,{theme:qt,children:[Object(k.jsx)(Ut.a,{}),Object(k.jsx)("div",{className:"App",children:Object(k.jsx)(ot.d,{children:t})})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(k.jsx)(zt,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[350,1,2]]]);
//# sourceMappingURL=main.d6931566.chunk.js.map