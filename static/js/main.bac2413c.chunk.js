(this.webpackJsonpmarkdown_test=this.webpackJsonpmarkdown_test||[]).push([[0],{122:function(t,e,n){},349:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),r=n(39),s=n.n(r),o=(n(122),n(100)),c=n(409),l=n(51),p=n(400),h=n(34),d=n(18),u=n(19),b=n(15),j=n(22),m=n(21),O=n(33),f=n(91),g=n(414),x=n(415),v=n(403),y=n(412),C=n(413),w=n(406),S=n(383),T=n(72),k=n(1),F=function(t){Object(j.a)(n,t);var e=Object(m.a)(n);function n(t){var a;return Object(d.a)(this,n),(a=e.call(this,t)).state={timeoutCnt:0},a.copyToClipBoard=a.copyToClipBoard.bind(Object(b.a)(a)),a.copyTimeout=a.copyTimeout.bind(Object(b.a)(a)),a}return Object(u.a)(n,[{key:"copyToClipBoard",value:function(t){this.props.enqueueSnackbar("Code is now in your clipboard",{variant:"info"});var e=document.createElement("textarea");e.value=this.props.children,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e);var n=this.state.timeoutCnt;n++,this.setState({timeoutCnt:n}),setTimeout(this.copyTimeout,5e3)}},{key:"copyTimeout",value:function(){var t=this.state.timeoutCnt;t>0&&(t--,this.setState({timeoutCnt:t++}))}},{key:"render",value:function(){var t,e,n,a=[];if(this.state.timeoutCnt>0?(t="!!   Copied   !!",e="primary"):(t="Copy code",e="primary"),void 0!==this.props.className&&this.props.className.includes("lang-")){var i,r=this.props.className.split("lang-").pop();r.includes("-nc")?r=r.split("-nc")[0]:a=Object(k.jsx)("div",{children:Object(k.jsx)(y.a,{variant:"contained",size:"small",style:{marginBottom:12},color:e,onClick:this.copyToClipBoard,children:t})}),i=1!==this.props.children.split(/\r\n|\r|\n/).length,n=Object(k.jsxs)("div",{children:[Object(k.jsx)(C.a,{}),Object(k.jsx)("div",{children:Object(k.jsx)(w.a,{language:r,style:S.a,showLineNumbers:i,wrapLongLines:!0,codeTagProps:{style:{fontFamily:"inherit"}},children:this.props.children})}),a,Object(k.jsx)(C.a,{})]})}else n=Object(k.jsx)("i",{children:Object(k.jsx)("code",{children:this.props.children})});return n}}]),n}(a.Component),L=Object(T.b)(F),I=i.a.createContext(""),D=["children"],N=["children"],P=["children"],R=["children"],E=["children"],B=["children"],A=["children"],G=["children"],M=["children"],W=["children"],U=["children"],_=["children"],q=function(t){Object(j.a)(n,t);var e=Object(m.a)(n);function n(){return Object(d.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this,e={overrides:{h1:{component:function(t){var e=t.children;Object(O.a)(t,D);return Object(k.jsxs)(g.a,{gutterBottom:!0,variant:"h4",children:[" ",e,"  "]})},props:{classes:this.props.classes}},h2:{component:function(t){var e=t.children;Object(O.a)(t,N);return Object(k.jsxs)(g.a,{gutterBottom:!0,variant:"h6",children:[" ",e]})},props:{classes:this.props.classes}},h3:{component:function(t){var e=t.children;Object(O.a)(t,P);return Object(k.jsxs)(g.a,{gutterBottom:!0,variant:"subtitle1",children:[" ",e]})},props:{classes:this.props.classes}},h4:{component:function(t){var e=t.children;Object(O.a)(t,R);return Object(k.jsxs)(g.a,{gutterBottom:!0,variant:"caption",paragraph:!0,children:[" ",e]})},props:{classes:this.props.classes}},p:{component:function(t){var e=t.children;Object(O.a)(t,E);return Object(k.jsxs)(g.a,{paragraph:!0,children:[e," "]})},props:{classes:this.props.classes}},a:{component:x.a},li:{component:function(t){var e=t.children;Object(O.a)(t,B);return Object(k.jsx)("li",{children:Object(k.jsx)(g.a,{component:"span",children:e})})},props:{classes:this.props.classes}},code:{component:L},pre:{component:function(t){var e=t.children;Object(O.a)(t,A);return Object(k.jsx)(a.Fragment,{children:e})}},img:{component:function(e){e.children;var n=Object(O.a)(e,G);return Object(k.jsxs)(a.Fragment,{children:[Object(k.jsx)("img",{alt:n.alt,src:t.context+t.props.mdInfo.mdPath+"/img/"+n.src.replace("./img/",""),title:n.title,style:{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",maxWidth:"100%",height:"auto"}}),Object(k.jsx)("br",{})]})}},ainfo:{component:function(t){var e=t.children;Object(O.a)(t,M);return Object(k.jsx)(v.a,{variant:"filled",severity:"info",children:e})}},asuccess:{component:function(t){var e=t.children;Object(O.a)(t,W);return Object(k.jsx)(v.a,{variant:"filled",severity:"success",children:e})}},awarning:{component:function(t){var e=t.children;Object(O.a)(t,U);return Object(k.jsx)(v.a,{variant:"filled",severity:"warning",children:e})}},aerror:{component:function(t){var e=t.children;Object(O.a)(t,_);return Object(k.jsx)(v.a,{variant:"filled",severity:"error",children:e})}}}};return Object(k.jsx)(a.Fragment,{children:Object(k.jsx)(f.a,{children:this.props.children,options:e})})}}]),n}(a.Component);q.contextType=I;var z=q,H=n(418),J=n(419),V=n(385),$={position:"fixed",bottom:function(t){return t.spacing(2)},right:function(t){return t.spacing(2)}},K=function(t){Object(j.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(d.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).scrollTop=function(){window.scrollTo({top:0,behavior:"smooth"})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this,e=this.props.mdChapters,n=(e=e.split(/(^#\s.*\r\n\r\n)/g)).map((function(e,n){return Object(k.jsx)(z,{children:e,enqueueSnackbar:t.props.enqueueSnackbar,mdInfo:t.props.mdInfo,routerLocation:t.props.routerLocation},n)}));return Object(k.jsxs)(H.a,{justify:"flex-start",spacing:0,style:{padding:24},children:[n,Object(k.jsx)(J.a,{"aria-label":"Add",sx:$,color:"primary",onClick:this.scrollTop,children:Object(k.jsx)(V.a,{})})]})}}]),n}(a.Component),Q=K,X=n(386),Y=n(402),Z=n(389),tt=n(390),et=n(391),nt=n(16),at={fabR:{position:"fixed",bottom:function(t){return t.spacing(2)},right:function(t){return t.spacing(2)}},fabC:{position:"fixed",bottom:function(t){return t.spacing(10)},right:function(t){return t.spacing(2)}},fabL:{position:"fixed",bottom:function(t){return t.spacing(2)},right:function(t){return t.spacing(10)}},fabLL:{position:"fixed",bottom:function(t){return t.spacing(2)},right:function(t){return t.spacing(18)}}},it=function(t){Object(j.a)(n,t);var e=Object(m.a)(n);function n(t){var a;Object(d.a)(this,n);var i=(a=e.call(this,t)).props.mdChapters;console.log(i),i=i.split(/^(?=#\s.*[\r\n\r\n|\n\n])/gm),console.log(i),i[0].search(/^[\r\n\r\n|\n\n]/)>=0&&i.shift();var r=i.length;return a.state={slideIndex:0,mdChapters:i,mdChapterSize:r,slide:!0,slideToShow:0,reroute:!1,enter:!0},a.nextSlide=a.nextSlide.bind(Object(b.a)(a)),a.previousSlide=a.previousSlide.bind(Object(b.a)(a)),a.firstSlide=a.firstSlide.bind(Object(b.a)(a)),a.onExited=a.onExited.bind(Object(b.a)(a)),a.onEnter=a.onEnter.bind(Object(b.a)(a)),a}return Object(u.a)(n,[{key:"firstSlide",value:function(){var t=this.state.slideIndex;this.setState({previousIndex:t,slideIndex:0,slide:!1})}},{key:"nextSlide",value:function(){var t=this.state.slideIndex+1;t>=this.state.mdChapterSize?console.log("\xe7ondition fail"):this.setState({slideIndex:t,slide:!1})}},{key:"previousSlide",value:function(){var t=this.state.slideIndex-1;t<0&&(t=0),this.setState({slideIndex:t,slide:!1})}},{key:"onExited",value:function(){this.setState({slideToShow:this.state.slideIndex,slide:!0,reroute:!0})}},{key:"onEnter",value:function(t){this.setState({slideIndex:t,slideToShow:t,enter:!1})}},{key:"render",value:function(){var t=this,e=Object(k.jsxs)(nt.d,{children:[Object(k.jsx)(nt.b,{exact:!0,path:"".concat(this.props.match.path,"/:id"),render:function(e){var n=e.match,i=parseInt(n.params.id);return t.state.reroute?Object(k.jsx)(nt.a,{push:!0,to:"".concat(t.props.match.url,"/").concat(t.state.slideIndex)}):(t.state.enter&&setTimeout(t.onEnter,0,i),Object(k.jsx)(a.Fragment,{}))}}),Object(k.jsx)(nt.a,{exact:!0,from:"".concat(this.props.match.url),to:"".concat(this.props.match.url,"/0")})]}),n=Object(k.jsx)(a.Fragment,{children:Object(k.jsx)(X.a,{in:this.state.slide,unmountOnExit:!0,mountOnEnter:!0,onExited:this.onExited,children:Object(k.jsx)("div",{children:Object(k.jsx)(z,{children:this.state.mdChapters[this.state.slideToShow],mdInfo:this.props.mdInfo})})})});return Object(k.jsxs)(H.a,{justify:"flex-start",spacing:0,style:{padding:24},children:[e,n,Object(k.jsx)(Y.a,{title:"First slide","aria-label":"First slide",children:Object(k.jsx)(J.a,{"aria-label":"First slide",sx:at.fabLL,color:"primary",onClick:this.firstSlide,children:Object(k.jsx)(Z.a,{})})}),Object(k.jsx)(Y.a,{title:"Previous slide","aria-label":"Previous slide",children:Object(k.jsx)(J.a,{"aria-label":"Previous slide",sx:at.fabL,color:"primary",onClick:this.previousSlide,children:Object(k.jsx)(tt.a,{})})}),Object(k.jsx)(J.a,{"aria-label":"Slide",sx:at.fabC,variant:"extended",children:"  ".concat(this.state.slideIndex+1," / ").concat(this.state.mdChapters.length,"  ")}),Object(k.jsx)(Y.a,{title:"Next slide","aria-label":"Next slide",children:Object(k.jsx)(J.a,{"aria-label":"Next slide",sx:at.fabR,color:"primary",onClick:this.nextSlide,children:Object(k.jsx)(et.a,{})})})]})}}]),n}(a.Component),rt=function(t){Object(j.a)(n,t);var e=Object(m.a)(n);function n(){return Object(d.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t,e=this,n=/^----!(\r\n|\n)Presentation(\r\n|\n)----!/,i=this.props.mdInfo.mdContent;return i.search(n)>=0?(console.log("presenation mode"),i=i.split(n).pop(),t=Object(k.jsx)(nt.b,{to:"".concat(this.props.match.path),render:function(t){return Object(k.jsx)(it,Object(h.a)({mdChapters:i,mdInfo:e.props.mdInfo},t))}})):(console.log("document mode"),t=Object(k.jsx)(Q,{mdChapters:i,mdInfo:this.props.mdInfo})),Object(k.jsx)(a.Fragment,{children:t})}}]),n}(a.Component),st=rt,ot=n(417),ct=n(428),lt=n(427),pt=n(398),ht=n(399),dt=n(421),ut=n(426),bt=n(405),jt=n(420),mt=n(411),Ot=n(392),ft=n(393),gt=n(38),xt={Folder:{color:"#002052",fontWeight:"bold"},File:{color:"#002052",fontWeight:"500"}},vt=function(t){Object(j.a)(n,t);var e=Object(m.a)(n);function n(t){var a;function i(e){return"Folder"===e.type?function(t){return t.children.find((function(t){return i(t)}))}(e):!(!t.match.params.hasOwnProperty("fileName")||t.match.params.fileName!==e.file)}Object(d.a)(this,n);var r=i((a=e.call(this,t)).props.item);return r=void 0!==r,a.state={expand:r},a}return Object(u.a)(n,[{key:"render",value:function(){var t=this,e=this.props.item,i={};this.props.depth>0&&(i={paddingLeft:32*this.props.depth});var r={};if("Folder"===e.type){var s=e.children.map((function(e){return Object(k.jsx)(nt.b,{to:"".concat(t.props.match.path),render:function(a){return Object(k.jsx)(n,Object(h.a)({item:e,depth:t.props.depth+1,selectCb:t.props.selectCb},a),e.name)}},e.name)}));r=Object(k.jsxs)(a.Fragment,{children:[Object(k.jsxs)(bt.a,{button:!0,style:i,onClick:function(e){return t.setState({expand:!t.state.expand})},children:[Object(k.jsx)(jt.a,{inset:!0,primary:e.name,disableTypography:!0,sx:xt.Folder}),this.state.expand?Object(k.jsx)(Ot.a,{}):Object(k.jsx)(ft.a,{})]}),Object(k.jsx)(mt.a,{in:this.state.expand,timeout:"auto",unmountOnExit:!0,children:Object(k.jsx)(dt.a,{component:"div",disablePadding:!0,children:s})})]})}else if("File"===e.type){var o=!1;this.props.match.params.hasOwnProperty("fileName")&&this.props.match.params.fileName===e.file&&(o=!0);var c="";if(this.props.match.path.search(":fileName")>0){var l=this.props.match.url.split("/");l.pop(),c=l.join("/")}else c=this.props.match.url;c+="/".concat(e.file),r=Object(k.jsx)(bt.a,{button:!0,selected:o,style:i,onClick:function(n){return t.props.selectCb(e.name)},component:gt.b,to:c,children:Object(k.jsx)(jt.a,{disableTypography:!0,inset:!0,primary:e.name,sx:xt.File})})}return Object(k.jsx)(a.Fragment,{children:r})}}]),n}(a.Component),yt=n(397),Ct=n(396),wt=n(422),St=n(423),Tt=n(424),kt=n(394),Ft=n(425),Lt=n(395),It=function(t){Object(j.a)(n,t);var e=Object(m.a)(n);function n(t){var a;return Object(d.a)(this,n),(a=e.call(this,t)).state={open:!1},a.tagSelected=a.tagSelected.bind(Object(b.a)(a)),a.handleClose=a.handleClose.bind(Object(b.a)(a)),a}return Object(u.a)(n,[{key:"openDialog",value:function(){this.setState({open:!0})}},{key:"tagSelected",value:function(t){this.setState({open:!1})}},{key:"handleClose",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var t=this,e=this.props.tags,n="",a="";return this.props.match.params.hasOwnProperty("githubName")&&(n=n+"/"+this.props.match.params.githubName),this.props.match.params.hasOwnProperty("githubRepository")&&(n=n+"/"+this.props.match.params.githubRepository),this.props.match.params.hasOwnProperty("fileName")&&(a=this.props.match.params.fileName),Object(k.jsxs)(wt.a,{onClose:this.handleClose,"aria-labelledby":"simple-dialog-title",open:this.state.open,children:[Object(k.jsx)(St.a,{id:"simple-dialog-title",children:"Select page variant"}),Object(k.jsx)(Tt.a,{children:"Page allow multiple vatiants for its content. They can be linked to specific SW or HW version."}),Object(k.jsx)(dt.a,{children:e.map((function(e){return Object(k.jsxs)(kt.a,{onClick:function(){return t.tagSelected(e)},component:gt.b,to:"".concat(n,"/").concat(e,"/").concat(a),children:[Object(k.jsx)(Ft.a,{children:Object(k.jsx)(Lt.a,{color:"primary"})}),Object(k.jsx)(jt.a,{primary:e})]},e)}))})]})}}]),n}(a.Component),Dt={flexGrow:1},Nt=function(t){Object(j.a)(n,t);var e=Object(m.a)(n);function n(t){var a;return Object(d.a)(this,n),(a=e.call(this,t)).tagDialog=i.a.createRef(),a.closeDrawer=a.closeDrawer.bind(Object(b.a)(a)),a.openTagDialog=a.openTagDialog.bind(Object(b.a)(a)),a}return Object(u.a)(n,[{key:"closeDrawer",value:function(){this.props.drawerChange(!1)}},{key:"openTagDialog",value:function(){this.tagDialog.current.openDialog()}},{key:"render",value:function(){var t,e=this,n=this.props.classesToUse,a=this.props.menuItems.map((function(t,n){return Object(k.jsx)(nt.b,{to:"".concat(e.props.match.path),render:function(n){return Object(k.jsx)(vt,Object(h.a)({item:t,depth:0,selectCb:e.props.selectCb,classesToUse:e.props.classesToUse},n),t.name)}},n)})),i=Object(k.jsx)(dt.a,{component:"nav",children:a});return this.props.pageOptions.allowTagSelect&&(t=Object(k.jsx)(y.a,{color:"inherit",onClick:this.openTagDialog,startIcon:Object(k.jsx)(Ct.a,{}),sx:Dt,children:this.props.match.params.gitTag})),Object(k.jsxs)(ut.a,{sx:n.drawer,variant:"persistent",open:this.props.isDrawerOpen,anchor:"left",children:[Object(k.jsxs)(lt.a,{children:[Object(k.jsx)(ot.a,{onClick:this.closeDrawer,color:"inherit","aria-label":"open drawer",edge:"start",children:Object(k.jsx)(yt.a,{})}),t]}),Object(k.jsx)(C.a,{}),i,Object(k.jsx)(nt.b,{to:"".concat(this.props.match.path),render:function(t){return Object(k.jsx)(It,Object(h.a)({tags:e.props.tagList,ref:e.tagDialog},t))}})]})}}]),n}(a.Component),Pt=320,Rt={root:{display:"flex"},drawer:{width:Pt,flexShrink:0,"& .MuiDrawer-paper":{width:Pt}},drawerPaper:{width:Pt},appBarClose:{marginLeft:Pt,transition:function(t){return t.transitions.create(["margin","width"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen})}},appBarOpen:{width:"calc(100% - ".concat(Pt,"px)"),marginLeft:Pt,transition:function(t){return t.transitions.create(["margin","width"],{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen})}},content:{flexGrow:1,padding:24,transition:function(t){return t.transitions.create("margin",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen})},marginLeft:0},contentShift:{transition:function(t){return t.transitions.create("margin",{easing:t.transitions.easing.easeOut,duration:t.transitions.duration.enteringScreen})},marginLeft:0},nested:{paddingLeft:32},title:{flexGrow:1}},Et=function(t){Object(j.a)(n,t);var e=Object(m.a)(n);function n(t){var a;return Object(d.a)(this,n),(a=e.call(this,t)).state={mdFilesContent:[],mdSelected:"",isDrawerOpen:!0,menuStructure:[],mdfilesToLoadArr:[],mdGithubLoc:"",githubPage:"",selectTag:!1,tagList:[],githubName:"",githubRepository:"",gitTag:"",pageOptions:{allowMenu:!0,allowTagSelect:!0}},a.itemSelectedCb=a.itemSelectedCb.bind(Object(b.a)(a)),a.drawerOpenClose=a.drawerOpenClose.bind(Object(b.a)(a)),a.handleDrawerOpen=a.handleDrawerOpen.bind(Object(b.a)(a)),a.fetchRestOfFiles=a.fetchRestOfFiles.bind(Object(b.a)(a)),a.fetchGithubTags=a.fetchGithubTags.bind(Object(b.a)(a)),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.fetchRestOfFiles(this.props.match.params.githubName,this.props.match.params.githubRepository,this.props.match.params.gitTag)}},{key:"componentDidUpdate",value:function(t){this.props.match.params.gitTag!==t.match.params.gitTag&&this.fetchRestOfFiles(this.props.match.params.githubName,this.props.match.params.githubRepository,this.props.match.params.gitTag)}},{key:"fetchGithubTags",value:function(t,e){var n=this,a="https://api.github.com/repos/".concat(t,"/").concat(e,"/tags");fetch(a).then((function(t){return t.json()})).then((function(t){var e=t.map((function(t){return t.name}));n.setState({tagList:e})}))}},{key:"fetchRestOfFiles",value:function(t,e,n){var a,i=this,r=[];this.fetchGithubTags(t,e);var s="https://raw.githubusercontent.com/".concat(t,"/").concat(e,"/").concat(n);fetch(s+"/filesToLoad.json").then((function(t){return t.json()})).then((function(t){document.title=t.title,a=t})).then((function(){var o=a.filesToLoadArr.map((function(t){return fetch(s+t.path+"/"+t.file).then((function(t){return t.text()})).then((function(e){var n={name:t.name,mdContent:e,mdPath:t.path,mdFile:t.file};r.push(n)}))}));Promise.all(o).then((function(){var o=!0;"options"in a&&"allowMenu"in a.options||(a.options=i.state.pageOptions,console.log("Add options to yout filesToLoad file")),!1===a.options.allowMenu&&(o=!1),i.setState({githubName:t,githubRepository:e,gitTag:n,mdFilesContent:r,menuStructure:a.menuStructure,mdfilesToLoadArr:a.filesToLoadArr,mdGithubLoc:a.githubLoc,githubPage:s,pageOptions:a.options,isDrawerOpen:o})}))}))}},{key:"itemSelectedCb",value:function(t){this.setState({mdSelected:t})}},{key:"handleDrawerOpen",value:function(){this.drawerOpenClose(!0)}},{key:"drawerOpenClose",value:function(t){this.setState({isDrawerOpen:t})}},{key:"render",value:function(){var t,e,n,i,r,s,o=this,c={},l="";if(l="/:githubName/:githubRepository/:gitTag",0===this.state.mdFilesContent.length)c.name="Loading",c.mdContent="",c.mdPath="";else if(1===this.state.mdFilesContent.length){c=this.state.mdFilesContent[0];var p=this.state.menuStructure[0];t=Object(k.jsx)(nt.b,{to:"".concat(this.props.match.path),render:function(t){return Object(k.jsx)(Nt,Object(h.a)({classesToUse:Rt,menuItems:o.state.menuStructure,selectCb:o.itemSelectedCb,isDrawerOpen:o.state.isDrawerOpen,drawerChange:o.drawerOpenClose,tagList:o.state.tagList,pageOptions:o.state.pageOptions,match:o.props.match},t))}}),e=Object(k.jsx)(nt.b,{path:"".concat(l,"/").concat(p.file),render:function(t){return Object(k.jsx)(I.Provider,{value:o.state.githubPage,children:Object(k.jsx)(st,Object(h.a)({mdInfo:c},t))})}})}else t=Object(k.jsx)(nt.b,{to:"".concat(this.props.match.path),render:function(t){return Object(k.jsx)(Nt,Object(h.a)({classesToUse:Rt,menuItems:o.state.menuStructure,selectCb:o.itemSelectedCb,isDrawerOpen:o.state.isDrawerOpen,drawerChange:o.drawerOpenClose,tagList:o.state.tagList,pageOptions:o.state.pageOptions,match:o.props.match},t))}}),c=this.state.mdFilesContent.find((function(t){return t.name===o.state.mdSelected})),(e=this.state.mdFilesContent.map((function(t,e){return Object(k.jsx)(nt.b,{path:"".concat(l,"/").concat(t.mdFile),render:function(e){return Object(k.jsx)(I.Provider,{value:o.state.githubPage,children:Object(k.jsx)(st,Object(h.a)({mdInfo:t},e))})}},e)}))).push(Object(k.jsx)(nt.b,{exact:!0,path:"".concat(this.props.match.path),render:function(t){return Object(k.jsx)(a.Fragment,{})}},"main screen not selected item")),void 0===c&&((c={}).name="",c.mdContent="",c.mdPath="");this.state.isDrawerOpen?(n=Rt.appBarOpen,i=Rt.contentShift):(console.log(this),"allowMenu"in this.state.pageOptions&&!0===this.state.pageOptions.allowMenu&&(r=Object(k.jsx)(ot.a,{color:"inherit","aria-label":"open drawer",onClick:this.handleDrawerOpen,edge:"start",children:Object(k.jsx)(pt.a,{})})),n=Rt.appBarClose,t=null,i=Rt.content);var d=this.state.mdfilesToLoadArr.find((function(t){return o.props.location.pathname.includes(t.file)}));if(void 0!==d){var u="https://github.com/".concat(this.state.githubName,"/").concat(this.state.githubRepository,"/blob/").concat(this.state.gitTag).concat(d.path,"/").concat(d.file);c.name=d.name,s=Object(k.jsx)(y.a,{target:"_blank",href:u,startIcon:Object(k.jsx)(ht.a,{}),color:"inherit",children:"EDIT THIS PAGE"})}return Object(k.jsxs)(H.a,{sx:Rt.root,children:[t,Object(k.jsx)(ct.a,{position:"fixed",sx:n,children:Object(k.jsxs)(lt.a,{children:[r,Object(k.jsx)(g.a,{variant:"h6",color:"inherit",sx:Rt.title,children:c.name}),s]})}),Object(k.jsx)(H.a,{className:i,children:Object(k.jsxs)(T.a,{maxSnack:3,children:[Object(k.jsx)(lt.a,{}),e,Object(k.jsx)(lt.a,{})]})})]})}}]),n}(a.Component),Bt=n(410),At=(n(348),Object(o.a)({typography:{useNextVariants:!0,fontFamily:["Roboto","Arial"].join(",")},palette:{primary:l.a,secondary:p.a,text:{primary:"#002052"}}}));var Gt=function(){var t;return t=Object(k.jsxs)(a.Fragment,{children:[Object(k.jsx)(nt.b,{path:"/:githubName/:githubRepository/",exact:!0,render:function(t){return Object(k.jsx)(nt.a,{to:"/".concat(t.match.params.githubName,"/").concat(t.match.params.githubRepository,"/master")})}}),Object(k.jsx)(nt.b,{path:"/:githubName/:githubRepository/:gitTag",exact:!0,component:Et}),Object(k.jsx)(nt.b,{path:"/:githubName/:githubRepository/:gitTag/:fileName",component:Et})]}),Object(k.jsx)(gt.a,{basename:"/tomas_materials_v2",children:Object(k.jsxs)(c.a,{theme:At,children:[Object(k.jsx)(Bt.a,{}),Object(k.jsx)("div",{className:"App",children:Object(k.jsx)(nt.d,{children:t})})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(k.jsx)(Gt,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[349,1,2]]]);
//# sourceMappingURL=main.bac2413c.chunk.js.map