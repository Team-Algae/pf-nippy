!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{BrMu:function(t,r,o){"use strict";o.r(r),o.d(r,"HomeModule",function(){return F});var l,i,s,c,a,u,p,g,f,h=o("ofXK"),S=o("fXoL"),d=function(){function t(n){e(this,t),this.startScrollPosition=0,this.interruptListenersAttached=!1,this.timer=null,n.scrollViews&&0!==n.scrollViews.length?this.isInlineScrolling=!0:(n.scrollViews=[n.document.documentElement,n.document.body,n.document.body.parentNode],this.isInlineScrolling=!1),this.pageScrollOptions=n}return n(t,[{key:"getScrollPropertyValue",value:function(e){return this.pageScrollOptions.verticalScrolling?e.scrollTop:e.scrollLeft}},{key:"getScrollClientPropertyValue",value:function(e){return this.pageScrollOptions.verticalScrolling?e.clientHeight:e.clientWidth}},{key:"extractScrollTargetPosition",value:function(){var e=this.getScrollTargetElement();return null==e?{top:NaN,left:NaN}:this.isInlineScrolling?t.getInlineScrollingTargetPosition(this.pageScrollOptions,e):t.getScrollingTargetPosition(this.pageScrollOptions,e)}},{key:"getCurrentOffset",value:function(){return this.pageScrollOptions.scrollOffset}},{key:"setScrollPosition",value:function(e){var t=this;return this.pageScrollOptions.scrollViews.reduce(function(n,r){var o=t.getScrollPropertyValue(r);if(r&&null!=o){var l=Math.abs(o-e),i=l<t.pageScrollOptions._minScrollDistance;if(t.pageScrollOptions.verticalScrolling?r.scrollTop=e:r.scrollLeft=e,i||l>Math.abs(t.getScrollPropertyValue(r)-e))return!0}return n},!1)}},{key:"fireEvent",value:function(e){this.pageScrollOptions.scrollFinishListener&&this.pageScrollOptions.scrollFinishListener.emit(e)}},{key:"attachInterruptListeners",value:function(e){var t=this;this.interruptListenersAttached&&this.detachInterruptListeners(),this.interruptListener=function(n){e.report(n,t)},this.pageScrollOptions.interruptEvents.forEach(function(e){return t.pageScrollOptions.document.body.addEventListener(e,t.interruptListener)}),this.interruptListenersAttached=!0}},{key:"detachInterruptListeners",value:function(){var e=this;this.pageScrollOptions.interruptEvents.forEach(function(t){return e.pageScrollOptions.document.body.removeEventListener(t,e.interruptListener)}),this.interruptListenersAttached=!1}},{key:"getScrollTargetElement",value:function(){if("string"==typeof this.pageScrollOptions.scrollTarget){var e=this.pageScrollOptions.scrollTarget;return null!==e.match(/^#[^\s]+$/g)?this.pageScrollOptions.document.getElementById(e.substr(1)):this.pageScrollOptions.document.querySelector(e)}return this.pageScrollOptions.scrollTarget}}],[{key:"getScrollingTargetPosition",value:function(e,t){var n=e.document.body,r=e.document.documentElement,o=e.document.defaultView&&e.document.defaultView.pageYOffset||r.scrollTop||n.scrollTop,l=e.document.defaultView&&e.document.defaultView.pageXOffset||r.scrollLeft||n.scrollLeft,i=r.clientTop||n.clientTop||0,s=r.clientLeft||n.clientLeft||0;if(null==t)return{top:o,left:l};var c=t.getBoundingClientRect(),a=c.left+l-s;return{top:Math.round(c.top+o-i),left:Math.round(a)}}},{key:"getInlineScrollingTargetPosition",value:function(e,t){var n={top:t.offsetTop,left:t.offsetLeft};if(e.advancedInlineOffsetCalculation&&1===e.scrollViews.length){for(var r={top:0,left:0},o=t.ownerDocument.defaultView,l=!1,i=t.parentElement;!l&&null!=i;)"relative"===o.getComputedStyle(i).getPropertyValue("position")&&(r.top+=i.offsetTop,r.left+=i.offsetLeft),l=(i=i.parentElement)===e.scrollViews[0];l&&(n.top+=r.top,n.left+=r.left)}return n}}]),t}(),b=new S.q("ngxps_config"),v={_interval:10,_minScrollDistance:2,_logLevel:1,namespace:"default",verticalScrolling:!0,duration:1250,scrollOffset:0,advancedInlineOffsetCalculation:!1,interruptEvents:["mousedown","wheel","DOMMouseScroll","mousewheel","keyup","touchmove"],interruptKeys:[" ","Escape","Tab","Enter","PageUp","PageDown","Home","End","ArrowUp","ArrowRight","ArrowLeft","ArrowDown"],interruptible:!0,scrollInView:!0,easingLogic:function(e,t,n,r){return n*e/r+t}},m=((l=function(){function t(n){var r=this;e(this,t),this.runningInstances=[],this.onInterrupted={report:function(e,t){if(t.pageScrollOptions.interruptible){var n=!0;"keyup"===e.type?-1===r.config.interruptKeys.indexOf(e.key)&&(n=!1):"mousedown"===e.type&&(t.pageScrollOptions.scrollViews.some(function(t){return t.contains(e.target)})||(n=!1)),n&&r.stopAll(t.pageScrollOptions.namespace)}}},this.config=Object.assign(Object.assign({},v),n),t.instanceCounter>0&&(this.config._logLevel>=2||this.config._logLevel>=1&&Object(S.S)())&&console.warn("An instance of PageScrollService already exists, usually including one provider should be enough, so double check."),t.instanceCounter++}return n(t,[{key:"stopInternal",value:function(e,t){var n=this.runningInstances.indexOf(t);return n>=0&&this.runningInstances.splice(n,1),t.interruptListenersAttached&&t.detachInterruptListeners(),!!t.timer&&(clearInterval(t.timer),t.timer=void 0,t.fireEvent(!e),!0)}},{key:"create",value:function(e){return new d(Object.assign(Object.assign({},this.config),e))}},{key:"start",value:function(e){var t=this;if(e.pageScrollOptions=Object.assign(Object.assign({},this.config),e.pageScrollOptions),this.stopAll(e.pageScrollOptions.namespace),null!==e.pageScrollOptions.scrollViews&&0!==e.pageScrollOptions.scrollViews.length){var n=!1,r=e.getScrollClientPropertyValue(e.pageScrollOptions.scrollViews[0]);e.startScrollPosition=0,e.pageScrollOptions.scrollViews.forEach(function(t){if(null!=t){var o=e.getScrollPropertyValue(t);!n&&o&&(e.startScrollPosition=o,n=!0,r=e.getScrollClientPropertyValue(t))}});var o=e.getCurrentOffset(),l=e.extractScrollTargetPosition();if(e.targetScrollPosition=Math.round((e.pageScrollOptions.verticalScrolling?l.top:l.left)-o),e.distanceToScroll=e.targetScrollPosition-e.startScrollPosition,isNaN(e.distanceToScroll))return(this.config._logLevel>=2||this.config._logLevel>=1&&Object(S.S)())&&console.log("Scrolling not possible, as we can't find the specified target"),void e.fireEvent(!1);var i=Math.abs(e.distanceToScroll)<e.pageScrollOptions._minScrollDistance;return e.executionDuration=e.pageScrollOptions.duration,null!=e.pageScrollOptions.speed&&null==e.pageScrollOptions.duration&&(e.executionDuration=Math.abs(e.distanceToScroll)/e.pageScrollOptions.speed*1e3),i||e.executionDuration<=e.pageScrollOptions._interval?((this.config._logLevel>=2||this.config._logLevel>=1&&Object(S.S)())&&(i?console.log("Scrolling not possible, as we can't get any closer to the destination"):console.log("Scroll duration shorter that interval length, jumping to target")),e.setScrollPosition(e.targetScrollPosition),void e.fireEvent(!0)):!e.pageScrollOptions.scrollInView&&e.targetScrollPosition>e.startScrollPosition&&e.targetScrollPosition<=e.startScrollPosition+r?((this.config._logLevel>=2||this.config._logLevel>=1&&Object(S.S)())&&console.log("Not scrolling, as target already in view"),void e.fireEvent(!0)):(e.pageScrollOptions.interruptible&&e.attachInterruptListeners(this.onInterrupted),e.startTime=(new Date).getTime(),e.endTime=e.startTime+e.executionDuration,e.timer=setInterval(function(e){var n,r=(new Date).getTime(),o=!1;e.endTime<=r?(n=e.targetScrollPosition,o=!0):n=Math.round(e.pageScrollOptions.easingLogic(r-e.startTime,e.startScrollPosition,e.distanceToScroll,e.executionDuration)),t.config._logLevel>=5&&Object(S.S)()&&console.warn("Scroll Position: "+n),e.setScrollPosition(n)||(o=!0),o&&t.stopInternal(!1,e)},this.config._interval,e),void this.runningInstances.push(e))}(this.config._logLevel>=2||this.config._logLevel>=1&&Object(S.S)())&&console.warn("No scrollViews specified, thus ngx-page-scroll does not know which DOM elements to scroll")}},{key:"scroll",value:function(e){this.start(this.create(e))}},{key:"stopAll",value:function(e){if(this.runningInstances.length>0){for(var t=!1,n=0;n<this.runningInstances.length;++n){var r=this.runningInstances[n];e&&r.pageScrollOptions.namespace!==e||(t=!0,this.stopInternal(!0,r),n--)}return t}return!1}},{key:"stop",value:function(e){return this.stopInternal(!0,e)}}]),t}()).\u0275fac=function(e){return new(e||l)(S.Ib(b))},l.instanceCounter=0,l.\u0275prov=Object(S.zb)({factory:function(){return new l(Object(S.Ib)(b))},token:l,providedIn:"root"}),l),y={},O=((i=function(){function t(){e(this,t)}return n(t,null,[{key:"forRoot",value:function(e){return{ngModule:t,providers:[m,{provide:b,useValue:e}]}}}]),t}()).\u0275mod=S.Bb({type:i}),i.\u0275inj=S.Ab({factory:function(e){return new(e||i)},providers:[m,{provide:b,useValue:y}]}),i),w=o("tyNb"),I=o("pLZG"),L=o("IzEk"),k=((a=function(){function t(n,r,o){e(this,t),this.pageScrollService=n,this.router=r,this.pageScrollAdjustHash=!1,this.pageScrollFinish=new S.n,this.document=o}return n(t,[{key:"ngOnChanges",value:function(e){this.pageScrollInstance=void 0}},{key:"ngOnDestroy",value:function(){this.pageScrollInstance&&this.pageScrollService.stop(this.pageScrollInstance)}},{key:"getPageScrollTarget",value:function(){return this.pageScrollTarget||this.href||(this.fragment?"#"+this.fragment:"")}},{key:"generatePageScrollInstance",value:function(){if(null==this.pageScrollInstance){var e={document:this.document,scrollTarget:this.getPageScrollTarget()};this.pageScroll&&(e.namespace=this.pageScroll),null!=this.pageScrollHorizontal&&(e.verticalScrolling=!this.pageScrollHorizontal),null!=this.pageScrollOffset&&(e.scrollOffset=this.pageScrollOffset),null!=this.pageScrollInterruptible&&(e.interruptible=this.pageScrollInterruptible),null!=this.pageScrollInView&&(e.scrollInView=this.pageScrollInView),this.pageScrollEasing&&(e.easingLogic=this.pageScrollEasing),null!=this.pageScrollDuration&&(e.duration=this.pageScrollDuration),null!=this.pageScrollSpeed&&(e.speed=this.pageScrollSpeed),this.pageScrollFinish&&(e.scrollFinishListener=this.pageScrollFinish),this.pageScrollInstance=this.pageScrollService.create(e)}return this.pageScrollInstance}},{key:"pushRouterState",value:function(){this.pageScrollAdjustHash&&"string"==typeof this.pageScrollInstance.pageScrollOptions.scrollTarget&&"#"===this.pageScrollInstance.pageScrollOptions.scrollTarget.substr(0,1)&&this.router.navigate([],{fragment:this.pageScrollInstance.pageScrollOptions.scrollTarget.substr(1),queryParamsHandling:"preserve"})}},{key:"scroll",value:function(){var e=this.generatePageScrollInstance();this.pushRouterState(),this.pageScrollService.start(e)}},{key:"handleClick",value:function(e){var t,n=this;return this.routerLink&&null!=this.router&&(t="string"==typeof this.routerLink?this.router.parseUrl(this.routerLink):this.router.createUrlTree(this.routerLink),!this.router.isActive(t,!0))?(this.router.events.pipe(Object(I.a)(function(e){return e instanceof w.c||e instanceof w.d||e instanceof w.b}),Object(L.a)(1)).subscribe(function(e){e instanceof w.c&&setTimeout(function(){n.scroll()},0)}),!1):(this.scroll(),!1)}}]),t}()).\u0275fac=function(e){return new(e||a)(S.Db(m),S.Db(w.f,8),S.Db(h.c))},a.\u0275dir=S.yb({type:a,selectors:[["","pageScroll",""]],hostBindings:function(e,t){1&e&&S.Lb("click",function(e){return t.handleClick(e)})},inputs:{pageScrollAdjustHash:"pageScrollAdjustHash",routerLink:"routerLink",href:"href",fragment:"fragment",pageScrollTarget:"pageScrollTarget",pageScrollHorizontal:"pageScrollHorizontal",pageScrollOffset:"pageScrollOffset",pageScrollDuration:"pageScrollDuration",pageScrollSpeed:"pageScrollSpeed",pageScrollEasing:"pageScrollEasing",pageScrollInterruptible:"pageScrollInterruptible",pageScrollInView:"pageScrollInView",pageScroll:"pageScroll"},outputs:{pageScrollFinish:"pageScrollFinish"},features:[S.tb]}),a),T=((c=function t(){e(this,t)}).\u0275mod=S.Bb({type:c}),c.\u0275inj=S.Ab({factory:function(e){return new(e||c)},imports:[[O]]}),c),P=((s=function t(){e(this,t)}).\u0275mod=S.Bb({type:s}),s.\u0275inj=S.Ab({factory:function(e){return new(e||s)},imports:[[h.b,O.forRoot({duration:800}),T]]}),s),x=o("+drn"),E=((u=function(){function t(){e(this,t),this.toggle=!0}return n(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(e){return new(e||u)},u.\u0275cmp=S.xb({type:u,selectors:[["algae-navigation"]],decls:26,vars:2,consts:[["id","header",1,"flex","flex-wrap","items-center","px-6","py-2","mx-auto","font-bold","bg-white","lg:px-16","lg:py-0","font-montserrat"],[1,"flex","items-center","justify-between","flex-1"],["routerLink","/",1,"text-2xl","text-black"],[1,"hamburger","hamburger--elastic","lg:hidden",3,"ngClass","click"],[1,"hamburger-box"],[1,"hamburger-inner"],["id","menu",1,"w-full","lg:w-auto","lg:flex","lg:items-center",3,"ngClass"],[1,"items-center","justify-between","pt-4","text-base","text-gray-700","lg:flex","lg:pt-0"],["pageScroll","","href","#hello",1,"block","px-0","py-3","border-b-2","border-transparent","lg:p-4","hover:text-primary-900"],["pageScroll","","href","#hi",1,"block","px-0","py-3","border-b-2","border-transparent","lg:p-4","hover:text-primary-900"]],template:function(e,t){1&e&&(S.Gb(0,"header",0),S.Gb(1,"div",1),S.Gb(2,"div",1),S.Gb(3,"a",2),S.Rb(4,"Nippy"),S.Fb(),S.Fb(),S.Fb(),S.Gb(5,"div",3),S.Lb("click",function(){return t.toggle=!t.toggle}),S.Gb(6,"span",4),S.Eb(7,"span",5),S.Fb(),S.Fb(),S.Gb(8,"div",6),S.Gb(9,"nav"),S.Gb(10,"ul",7),S.Gb(11,"li"),S.Gb(12,"a",8),S.Rb(13,"ABOUT US"),S.Fb(),S.Fb(),S.Gb(14,"li"),S.Gb(15,"a",9),S.Rb(16,"SHOP"),S.Fb(),S.Fb(),S.Gb(17,"li"),S.Gb(18,"a",8),S.Rb(19,"PORTFOLIO"),S.Fb(),S.Fb(),S.Gb(20,"li"),S.Gb(21,"a",8),S.Rb(22,"BLOG"),S.Fb(),S.Fb(),S.Gb(23,"li"),S.Gb(24,"a",8),S.Rb(25,"ELEMENTS"),S.Fb(),S.Fb(),S.Fb(),S.Fb(),S.Fb(),S.Fb()),2&e&&(S.ub(5),S.Nb("ngClass",t.toggle?"":"is-active"),S.ub(3),S.Nb("ngClass",t.toggle?"hidden":""))},directives:[h.h,k],styles:[""]}),u),V=[{path:x.a.Home,component:(p=function(){function t(){e(this,t),this.path=x.a}return n(t,[{key:"ngOnInit",value:function(){}}]),t}(),p.\u0275fac=function(e){return new(e||p)},p.\u0275cmp=S.xb({type:p,selectors:[["ng-component"]],decls:2,vars:0,consts:[[1,"min-w-full","light"]],template:function(e,t){1&e&&(S.Gb(0,"div",0),S.Eb(1,"algae-navigation"),S.Fb())},directives:[E],styles:[""]}),p),data:{title:"Home",description:"Start writing your business logic right away without any concern on architecture matters.",robots:"index, follow"}}],j=((f=function t(){e(this,t)}).\u0275mod=S.Bb({type:f}),f.\u0275inj=S.Ab({factory:function(e){return new(e||f)},imports:[[w.g.forChild(V)],w.g]}),f),F=((g=function t(){e(this,t)}).\u0275mod=S.Bb({type:g}),g.\u0275inj=S.Ab({factory:function(e){return new(e||g)},imports:[[h.b,j,P]]}),g)}}])}();