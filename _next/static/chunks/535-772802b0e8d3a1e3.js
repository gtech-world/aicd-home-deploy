"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[535],{7077:function(e,t,r){r.d(t,{Z:function(){return o}});var n=function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},n.apply(this,arguments)};Object.create;Object.create;var i=r(959);function o(e,t,r){void 0===t&&(t=[]),void 0===r&&(r={loading:!1});var o=(0,i.useRef)(0),a=function(){var e=(0,i.useRef)(!1),t=(0,i.useCallback)((function(){return e.current}),[]);return(0,i.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),t}(),s=(0,i.useState)(r),l=s[0],c=s[1],u=(0,i.useCallback)((function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var i=++o.current;return l.loading||c((function(e){return n(n({},e),{loading:!0})})),e.apply(void 0,t).then((function(e){return a()&&i===o.current&&c({value:e,loading:!1}),e}),(function(e){return a()&&i===o.current&&c({error:e,loading:!1}),e}))}),t);return[l,u]}},8723:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(959);function i(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];e&&e.addEventListener&&e.addEventListener.apply(e,t)}function o(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];e&&e.removeEventListener&&e.removeEventListener.apply(e,t)}var a=["mousedown","touchstart"],s=function(e,t,r){void 0===r&&(r=a);var s=(0,n.useRef)(t);(0,n.useEffect)((function(){s.current=t}),[t]),(0,n.useEffect)((function(){for(var t=function(t){var r=e.current;r&&!r.contains(t.target)&&s.current(t)},n=0,a=r;n<a.length;n++){var l=a[n];i(document,l,t)}return function(){for(var e=0,n=r;e<n.length;e++){var i=n[e];o(document,i,t)}}}),[r,e])}},9592:function(e,t,r){var n=r(959),i=function(e,t){return"boolean"===typeof t?t:!e};t.Z=function(e){return(0,n.useReducer)(i,e)}},8370:function(e,t,r){var n=r(959),i=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t},l=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(l){i=!0,o=l}finally{try{!n&&s.return&&s.return()}finally{if(i)throw o}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},c=void 0;c="undefined"!==typeof window?window:"undefined"!==typeof self?self:r.g;var u=null,d=null,f=c.clearTimeout,h=c.setTimeout,p=c.cancelAnimationFrame||c.mozCancelAnimationFrame||c.webkitCancelAnimationFrame,v=c.requestAnimationFrame||c.mozRequestAnimationFrame||c.webkitRequestAnimationFrame;function g(e){var t=void 0,r=void 0,n=void 0,i=void 0,o=void 0,a=void 0,s=void 0,l="undefined"!==typeof document&&document.attachEvent;if(!l){a=function(e){var t=e.__resizeTriggers__,r=t.firstElementChild,n=t.lastElementChild,i=r.firstElementChild;n.scrollLeft=n.scrollWidth,n.scrollTop=n.scrollHeight,i.style.width=r.offsetWidth+1+"px",i.style.height=r.offsetHeight+1+"px",r.scrollLeft=r.scrollWidth,r.scrollTop=r.scrollHeight},o=function(e){return e.offsetWidth!==e.__resizeLast__.width||e.offsetHeight!==e.__resizeLast__.height},s=function(e){if(!(e.target.className&&"function"===typeof e.target.className.indexOf&&e.target.className.indexOf("contract-trigger")<0&&e.target.className.indexOf("expand-trigger")<0)){var t=this;a(this),this.__resizeRAF__&&u(this.__resizeRAF__),this.__resizeRAF__=d((function(){o(t)&&(t.__resizeLast__.width=t.offsetWidth,t.__resizeLast__.height=t.offsetHeight,t.__resizeListeners__.forEach((function(r){r.call(t,e)})))}))}};var f=!1,h="";n="animationstart";var p="Webkit Moz O ms".split(" "),v="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),g=document.createElement("fakeelement");if(void 0!==g.style.animationName&&(f=!0),!1===f)for(var m=0;m<p.length;m++)if(void 0!==g.style[p[m]+"AnimationName"]){h="-"+p[m].toLowerCase()+"-",n=v[m],f=!0;break}t="@"+h+"keyframes "+(r="resizeanim")+" { from { opacity: 0; } to { opacity: 0; } } ",i=h+"animation: 1ms "+r+"; "}return{addResizeListener:function(o,u){if(l)o.attachEvent("onresize",u);else{if(!o.__resizeTriggers__){var d=o.ownerDocument,f=c.getComputedStyle(o);f&&"static"===f.position&&(o.style.position="relative"),function(r){if(!r.getElementById("detectElementResize")){var n=(t||"")+".resize-triggers { "+(i||"")+'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',o=r.head||r.getElementsByTagName("head")[0],a=r.createElement("style");a.id="detectElementResize",a.type="text/css",null!=e&&a.setAttribute("nonce",e),a.styleSheet?a.styleSheet.cssText=n:a.appendChild(r.createTextNode(n)),o.appendChild(a)}}(d),o.__resizeLast__={},o.__resizeListeners__=[],(o.__resizeTriggers__=d.createElement("div")).className="resize-triggers";var h=d.createElement("div");h.className="expand-trigger",h.appendChild(d.createElement("div"));var p=d.createElement("div");p.className="contract-trigger",o.__resizeTriggers__.appendChild(h),o.__resizeTriggers__.appendChild(p),o.appendChild(o.__resizeTriggers__),a(o),o.addEventListener("scroll",s,!0),n&&(o.__resizeTriggers__.__animationListener__=function(e){e.animationName===r&&a(o)},o.__resizeTriggers__.addEventListener(n,o.__resizeTriggers__.__animationListener__))}o.__resizeListeners__.push(u)}},removeResizeListener:function(e,t){if(l)e.detachEvent("onresize",t);else if(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(t),1),!e.__resizeListeners__.length){e.removeEventListener("scroll",s,!0),e.__resizeTriggers__.__animationListener__&&(e.__resizeTriggers__.removeEventListener(n,e.__resizeTriggers__.__animationListener__),e.__resizeTriggers__.__animationListener__=null);try{e.__resizeTriggers__=!e.removeChild(e.__resizeTriggers__)}catch(r){}}}}}null==p||null==v?(u=f,d=function(e){return h(e,20)}):(u=function(e){var t=l(e,2),r=t[0],n=t[1];p(r),f(n)},d=function(e){var t=v((function(){f(r),e()})),r=h((function(){p(t),e()}),20);return[t,r]});var m=function(e){function t(){var e,r,n;i(this,t);for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];return r=n=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),n.state={height:n.props.defaultHeight||0,width:n.props.defaultWidth||0},n._onResize=function(){var e=n.props,t=e.disableHeight,r=e.disableWidth,i=e.onResize;if(n._parentNode){var o=n._parentNode.offsetHeight||0,a=n._parentNode.offsetWidth||0,s=window.getComputedStyle(n._parentNode)||{},l=parseInt(s.paddingLeft,10)||0,c=parseInt(s.paddingRight,10)||0,u=parseInt(s.paddingTop,10)||0,d=parseInt(s.paddingBottom,10)||0,f=o-u-d,h=a-l-c;(!t&&n.state.height!==f||!r&&n.state.width!==h)&&(n.setState({height:o-u-d,width:a-l-c}),i({height:o,width:a}))}},n._setRef=function(e){n._autoSizer=e},s(n,r)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){var e=this.props.nonce;this._autoSizer&&this._autoSizer.parentNode&&this._autoSizer.parentNode.ownerDocument&&this._autoSizer.parentNode.ownerDocument.defaultView&&this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement&&(this._parentNode=this._autoSizer.parentNode,this._detectElementResize=g(e),this._detectElementResize.addResizeListener(this._parentNode,this._onResize),this._onResize())}},{key:"componentWillUnmount",value:function(){this._detectElementResize&&this._parentNode&&this._detectElementResize.removeResizeListener(this._parentNode,this._onResize)}},{key:"render",value:function(){var e=this.props,t=e.children,r=e.className,i=e.disableHeight,o=e.disableWidth,s=e.style,l=this.state,c=l.height,u=l.width,d={overflow:"visible"},f={},h=!1;return i||(0===c&&(h=!0),d.height=0,f.height=c),o||(0===u&&(h=!0),d.width=0,f.width=u),(0,n.createElement)("div",{className:r,ref:this._setRef,style:a({},d,s)},!h&&t(f))}}]),t}(n.PureComponent);m.defaultProps={onResize:function(){},disableHeight:!1,disableWidth:!1,style:{}},t.Z=m},9077:function(e,t,r){function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}r.d(t,{NC:function(){return x}});var i=r(2612);function o(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,(0,i.Z)(e,t)}var a=r(959),s=r(6027),l=Number.isNaN||function(e){return"number"===typeof e&&e!==e};function c(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(n=e[r],i=t[r],!(n===i||l(n)&&l(i)))return!1;var n,i;return!0}var u=function(e,t){var r;void 0===t&&(t=c);var n,i=[],o=!1;return function(){for(var a=[],s=0;s<arguments.length;s++)a[s]=arguments[s];return o&&r===this&&t(a,i)||(n=e.apply(this,a),o=!0,r=this,i=a),n}},d="object"===typeof performance&&"function"===typeof performance.now?function(){return performance.now()}:function(){return Date.now()};function f(e){cancelAnimationFrame(e.id)}function h(e,t){var r=d();var n={id:requestAnimationFrame((function i(){d()-r>=t?e.call(null):n.id=requestAnimationFrame(i)}))};return n}var p=-1;function v(e){if(void 0===e&&(e=!1),-1===p||e){var t=document.createElement("div"),r=t.style;r.width="50px",r.height="50px",r.overflow="scroll",document.body.appendChild(t),p=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return p}var g=null;function m(e){if(void 0===e&&(e=!1),null===g||e){var t=document.createElement("div"),r=t.style;r.width="50px",r.height="50px",r.overflow="scroll",r.direction="rtl";var n=document.createElement("div"),i=n.style;return i.width="100px",i.height="100px",t.appendChild(n),document.body.appendChild(t),t.scrollLeft>0?g="positive-descending":(t.scrollLeft=1,g=0===t.scrollLeft?"negative":"positive-ascending"),document.body.removeChild(t),g}return g}var _=function(e,t){return e};function b(e){var t,r=e.getItemOffset,i=e.getEstimatedTotalSize,l=e.getItemSize,c=e.getOffsetForIndexAndAlignment,d=e.getStartIndexForOffset,p=e.getStopIndexForStartIndex,g=e.initInstanceProps,b=e.shouldResetStyleCacheOnItemSizeChange,S=e.validateProps;return t=function(e){function t(t){var n;return(n=e.call(this,t)||this)._instanceProps=g(n.props,(0,s.Z)(n)),n._outerRef=void 0,n._resetIsScrollingTimeoutId=null,n.state={instance:(0,s.Z)(n),isScrolling:!1,scrollDirection:"forward",scrollOffset:"number"===typeof n.props.initialScrollOffset?n.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},n._callOnItemsRendered=void 0,n._callOnItemsRendered=u((function(e,t,r,i){return n.props.onItemsRendered({overscanStartIndex:e,overscanStopIndex:t,visibleStartIndex:r,visibleStopIndex:i})})),n._callOnScroll=void 0,n._callOnScroll=u((function(e,t,r){return n.props.onScroll({scrollDirection:e,scrollOffset:t,scrollUpdateWasRequested:r})})),n._getItemStyle=void 0,n._getItemStyle=function(e){var t,i=n.props,o=i.direction,a=i.itemSize,s=i.layout,c=n._getItemStyleCache(b&&a,b&&s,b&&o);if(c.hasOwnProperty(e))t=c[e];else{var u=r(n.props,e,n._instanceProps),d=l(n.props,e,n._instanceProps),f="horizontal"===o||"horizontal"===s,h="rtl"===o,p=f?u:0;c[e]=t={position:"absolute",left:h?void 0:p,right:h?p:void 0,top:f?0:u,height:f?"100%":d,width:f?d:"100%"}}return t},n._getItemStyleCache=void 0,n._getItemStyleCache=u((function(e,t,r){return{}})),n._onScrollHorizontal=function(e){var t=e.currentTarget,r=t.clientWidth,i=t.scrollLeft,o=t.scrollWidth;n.setState((function(e){if(e.scrollOffset===i)return null;var t=n.props.direction,a=i;if("rtl"===t)switch(m()){case"negative":a=-i;break;case"positive-descending":a=o-r-i}return a=Math.max(0,Math.min(a,o-r)),{isScrolling:!0,scrollDirection:e.scrollOffset<i?"forward":"backward",scrollOffset:a,scrollUpdateWasRequested:!1}}),n._resetIsScrollingDebounced)},n._onScrollVertical=function(e){var t=e.currentTarget,r=t.clientHeight,i=t.scrollHeight,o=t.scrollTop;n.setState((function(e){if(e.scrollOffset===o)return null;var t=Math.max(0,Math.min(o,i-r));return{isScrolling:!0,scrollDirection:e.scrollOffset<t?"forward":"backward",scrollOffset:t,scrollUpdateWasRequested:!1}}),n._resetIsScrollingDebounced)},n._outerRefSetter=function(e){var t=n.props.outerRef;n._outerRef=e,"function"===typeof t?t(e):null!=t&&"object"===typeof t&&t.hasOwnProperty("current")&&(t.current=e)},n._resetIsScrollingDebounced=function(){null!==n._resetIsScrollingTimeoutId&&f(n._resetIsScrollingTimeoutId),n._resetIsScrollingTimeoutId=h(n._resetIsScrolling,150)},n._resetIsScrolling=function(){n._resetIsScrollingTimeoutId=null,n.setState({isScrolling:!1},(function(){n._getItemStyleCache(-1,null)}))},n}o(t,e),t.getDerivedStateFromProps=function(e,t){return y(e,t),S(e),null};var w=t.prototype;return w.scrollTo=function(e){e=Math.max(0,e),this.setState((function(t){return t.scrollOffset===e?null:{scrollDirection:t.scrollOffset<e?"forward":"backward",scrollOffset:e,scrollUpdateWasRequested:!0}}),this._resetIsScrollingDebounced)},w.scrollToItem=function(e,t){void 0===t&&(t="auto");var r=this.props,n=r.itemCount,i=r.layout,o=this.state.scrollOffset;e=Math.max(0,Math.min(e,n-1));var a=0;if(this._outerRef){var s=this._outerRef;a="vertical"===i?s.scrollWidth>s.clientWidth?v():0:s.scrollHeight>s.clientHeight?v():0}this.scrollTo(c(this.props,e,t,o,this._instanceProps,a))},w.componentDidMount=function(){var e=this.props,t=e.direction,r=e.initialScrollOffset,n=e.layout;if("number"===typeof r&&null!=this._outerRef){var i=this._outerRef;"horizontal"===t||"horizontal"===n?i.scrollLeft=r:i.scrollTop=r}this._callPropsCallbacks()},w.componentDidUpdate=function(){var e=this.props,t=e.direction,r=e.layout,n=this.state,i=n.scrollOffset;if(n.scrollUpdateWasRequested&&null!=this._outerRef){var o=this._outerRef;if("horizontal"===t||"horizontal"===r)if("rtl"===t)switch(m()){case"negative":o.scrollLeft=-i;break;case"positive-ascending":o.scrollLeft=i;break;default:var a=o.clientWidth,s=o.scrollWidth;o.scrollLeft=s-a-i}else o.scrollLeft=i;else o.scrollTop=i}this._callPropsCallbacks()},w.componentWillUnmount=function(){null!==this._resetIsScrollingTimeoutId&&f(this._resetIsScrollingTimeoutId)},w.render=function(){var e=this.props,t=e.children,r=e.className,o=e.direction,s=e.height,l=e.innerRef,c=e.innerElementType,u=e.innerTagName,d=e.itemCount,f=e.itemData,h=e.itemKey,p=void 0===h?_:h,v=e.layout,g=e.outerElementType,m=e.outerTagName,b=e.style,y=e.useIsScrolling,S=e.width,w=this.state.isScrolling,z="horizontal"===o||"horizontal"===v,O=z?this._onScrollHorizontal:this._onScrollVertical,R=this._getRangeToRender(),I=R[0],T=R[1],C=[];if(d>0)for(var E=I;E<=T;E++)C.push((0,a.createElement)(t,{data:f,key:p(E,f),index:E,isScrolling:y?w:void 0,style:this._getItemStyle(E)}));var x=i(this.props,this._instanceProps);return(0,a.createElement)(g||m||"div",{className:r,onScroll:O,ref:this._outerRefSetter,style:n({position:"relative",height:s,width:S,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:o},b)},(0,a.createElement)(c||u||"div",{children:C,ref:l,style:{height:z?"100%":x,pointerEvents:w?"none":void 0,width:z?x:"100%"}}))},w._callPropsCallbacks=function(){if("function"===typeof this.props.onItemsRendered&&this.props.itemCount>0){var e=this._getRangeToRender(),t=e[0],r=e[1],n=e[2],i=e[3];this._callOnItemsRendered(t,r,n,i)}if("function"===typeof this.props.onScroll){var o=this.state,a=o.scrollDirection,s=o.scrollOffset,l=o.scrollUpdateWasRequested;this._callOnScroll(a,s,l)}},w._getRangeToRender=function(){var e=this.props,t=e.itemCount,r=e.overscanCount,n=this.state,i=n.isScrolling,o=n.scrollDirection,a=n.scrollOffset;if(0===t)return[0,0,0,0];var s=d(this.props,a,this._instanceProps),l=p(this.props,s,a,this._instanceProps),c=i&&"backward"!==o?1:Math.max(1,r),u=i&&"forward"!==o?1:Math.max(1,r);return[Math.max(0,s-c),Math.max(0,Math.min(t-1,l+u)),s,l]},t}(a.PureComponent),t.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},t}var y=function(e,t){e.children,e.direction,e.height,e.layout,e.innerTagName,e.outerTagName,e.width,t.instance},S=b({getItemOffset:function(e,t){return t*e.itemSize},getItemSize:function(e,t){return e.itemSize},getEstimatedTotalSize:function(e){var t=e.itemCount;return e.itemSize*t},getOffsetForIndexAndAlignment:function(e,t,r,n,i,o){var a=e.direction,s=e.height,l=e.itemCount,c=e.itemSize,u=e.layout,d=e.width,f="horizontal"===a||"horizontal"===u?d:s,h=Math.max(0,l*c-f),p=Math.min(h,t*c),v=Math.max(0,t*c-f+c+o);switch("smart"===r&&(r=n>=v-f&&n<=p+f?"auto":"center"),r){case"start":return p;case"end":return v;case"center":var g=Math.round(v+(p-v)/2);return g<Math.ceil(f/2)?0:g>h+Math.floor(f/2)?h:g;default:return n>=v&&n<=p?n:n<v?v:p}},getStartIndexForOffset:function(e,t){var r=e.itemCount,n=e.itemSize;return Math.max(0,Math.min(r-1,Math.floor(t/n)))},getStopIndexForStartIndex:function(e,t,r){var n=e.direction,i=e.height,o=e.itemCount,a=e.itemSize,s=e.layout,l=e.width,c=t*a,u="horizontal"===n||"horizontal"===s?l:i,d=Math.ceil((u+r-c)/a);return Math.max(0,Math.min(o-1,t+d-1))},initInstanceProps:function(e){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(e){e.itemSize}});var w=function(e){return function(t){e.forEach((function(e){"function"===typeof e?e(t):null!=e&&(e.current=t)}))}},z=function(){},O=function(e,t){return void 0===t&&(t=null),{child:null,isShown:!t||t.public.isOpen&&t.isShown,parent:t,public:e,sibling:null,visited:!1}},R=function(e,t){return(0,t.getRecordData)(e).data.id},I=function(e){return function(t,r,n){return n.refresh?function(e,t,r){var n=e.createRecord,i=t.buildingTaskTimeout,o=t.placeholder,a=t.async,s=void 0!==a&&a,l=t.treeWalker,c=s&&void 0!==r.records,u=r.records,d=[],f=new Map,h=i?{timeout:i}:void 0,p=new WeakMap,v=l(),g=v.next().value,m=n(g.data,r,void 0,c?u.get(g.data.id):void 0);f.set(m.public.data.id,m),p.set(m,g);var _=m,b=!0,y=m,S=void 0!==o&&!(null===o&&!r.order),w=S?function(e){return e.timeRemaining()>0}:function(){return!0},z=function e(t){for(;null!==_;){if(!w(t))return void requestIdleCallback(e,h);if(_.visited)_.visited=!1,_=null!==_.sibling?_.sibling:_.parent,y=_;else{var i=v.next(p.get(_)).value;if(void 0===i){b?b=!1:(_.isShown&&d.push(_.public.data.id),_.visited=null!==_.child,_=null!==_.child?_.child:null!==_.sibling?_.sibling:_.parent),y=_;continue}var o=n(i.data,r,b?void 0:_,c?u.get(i.data.id):void 0);f.set(o.public.data.id,o),p.set(o,i),b||y!==_?y.sibling=o:y.child=o,y=o}}S&&r.setState({order:d,records:f,updateRequest:{}})};return S?requestIdleCallback(z,h):z(),void 0!==o&&s&&r.order?r:{order:d,records:f}}(e,t,r):function(e,t){var r=e.order,n=e.records,i=t.opennessState;if("object"!==typeof i)return null;for(var o in i)if(n.has(o)){var a=i[o],s=n.get(o),l="boolean"===typeof a?{open:a}:a,c=l.open,u=l.subtreeCallback,d=void 0===u?z:u,f=z,h=z;s.isShown&&(c?function(){for(var e=r.indexOf(o),t=s;null!==t;){if(null!==t.sibling){t=t.sibling;break}t=t.parent}var n=null===t?r.length-1-e:r.indexOf(t.public.data.id)-1-e,i=[[e+1,n]];f=function(t){if(t.isShown=!t.parent||t.parent.public.isOpen&&t.parent.isShown,t.isShown){var r=i[i.length-1];r.push(t.public.data.id),32770===r.length&&i.push([e+1+32768*i.length,0])}},h=function(){for(var e=0;e<i.length;e++){var t;(t=r).splice.apply(t,i[e])}}}():s.public.isOpen&&function(){var e=r.indexOf(o),t=0;f=function(e){e.isShown&&(t+=1),e.isShown=!e.parent||e.parent.public.isOpen&&e.parent.isShown},h=function(){r.splice(e+1,t)}}());for(var p=s;null!==p;)p.visited?(p.visited=!1,p=p===s?null:null!==p.sibling?p.sibling:p.parent):(p.public.isOpen=p===s?c:p.public.isOpen,d(p.public,s.public),p!==s&&f(p),p.visited=null!==p.child,p=null!==p.child?p.child:p===s?null:null!==p.sibling?p.sibling:p.parent);h()}return{order:r,records:n,updateRequest:{}}}(r,n)}},T=function(e){function t(t,r){var n;return(n=e.call(this,t,r)||this).getRecordData=n.getRecordData.bind((0,s.Z)(n)),n.state={list:(0,a.createRef)(),recomputeTree:n.recomputeTree.bind((0,s.Z)(n)),setState:n.setState.bind((0,s.Z)(n))},n}o(t,e),t.getDerivedStateFromProps=function(e,t){var r=e.listRef,i=void 0===r?null:r,o=e.treeWalker,a=t.computeTree,s=t.list,l=t.order,c=t.treeWalker;return n({attachRefs:w([s,i])},o===c&&l?null:a(e,t,{refresh:!0}),{treeWalker:o})};var r=t.prototype;return r.getItemData=function(){var e=this.props,t=e.children,r=e.itemData;return{component:t,getRecordData:this.getRecordData,treeData:r}},r.getRecordData=function(e){var t=this.state,r=t.order;return t.records.get(r[e]).public},r.recomputeTree=function(e){var t=this;return new Promise((function(r){t.setState((function(r){return r.computeTree(t.props,r,{opennessState:e})}),r)}))},r.scrollTo=function(e){var t;null==(t=this.state.list.current)||t.scrollTo(e)},r.scrollToItem=function(e,t){var r;null==(r=this.state.list.current)||r.scrollToItem(this.state.order.indexOf(e),t)},t}(a.PureComponent);T.defaultProps={rowComponent:function(e){var t=e.index,r=e.data,n=r.component,i=r.getRecordData,o=r.treeData,s=e.style,l=e.isScrolling,c=i(t);return a.createElement(n,Object.assign({isScrolling:l,style:s,treeData:o},c))}};var C=T,E=I({createRecord:function(e,t,r,n){var i=t.recomputeTree;return O({data:e,isOpen:n?n.public.isOpen:e.isOpenByDefault,setOpen:function(t){var r;return i(((r={})[e.id]=t,r))}},r)}}),x=function(e){function t(t,r){var i;return(i=e.call(this,t,r)||this).state=n({},i.state,{computeTree:E}),i}return o(t,e),t.prototype.render=function(){var e=this.props,t=(e.children,e.listRef,e.placeholder),r=(e.treeWalker,e.rowComponent),n=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,["children","listRef","placeholder","treeWalker","rowComponent"]),i=this.state,o=i.attachRefs,s=i.order;return t&&0===s.length?t:a.createElement(S,Object.assign({},n,{itemCount:s.length,itemData:this.getItemData(),itemKey:R,ref:o}),r)},t}(C);I({createRecord:function(e,t,r,n){var i=t.recomputeTree,o=t.resetAfterId,a=O({data:e,height:n?n.public.height:e.defaultHeight,isOpen:n?n.public.isOpen:e.isOpenByDefault,resize:function(e,t){a.public.height=e,o(a.public.data.id,t)},setOpen:function(t){var r;return i(((r={})[e.id]=t,r))}},r);return a}})}}]);