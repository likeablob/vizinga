(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{210:function(e,t,n){var r=n(213);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(9).default)("614a1bb2",r,!0,{})},211:function(e,t,n){var r;e.exports=(r=n(20),function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=3)}([function(e,t){e.exports=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(r),o=window.CodeMirror||i.default;"function"!=typeof Object.assign&&Object.defineProperty(Object,"assign",{value:function(e,t){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(e),r=1;r<arguments.length;r++){var i=arguments[r];if(null!=i)for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n[o]=i[o])}return n},writable:!0,configurable:!0}),t.default={name:"codemirror",data:function(){return{content:"",codemirror:null,cminstance:null}},props:{code:String,value:String,marker:Function,unseenLines:Array,name:{type:String,default:"codemirror"},placeholder:{type:String,default:""},merge:{type:Boolean,default:!1},options:{type:Object,default:function(){return{}}},events:{type:Array,default:function(){return[]}},globalOptions:{type:Object,default:function(){return{}}},globalEvents:{type:Array,default:function(){return[]}}},watch:{options:{deep:!0,handler:function(e){for(var t in e)this.cminstance.setOption(t,e[t])}},merge:function(){this.$nextTick(this.switchMerge)},code:function(e){this.handerCodeChange(e)},value:function(e){this.handerCodeChange(e)}},methods:{initialize:function(){var e=this,t=Object.assign({},this.globalOptions,this.options);this.merge?(this.codemirror=o.MergeView(this.$refs.mergeview,t),this.cminstance=this.codemirror.edit):(this.codemirror=o.fromTextArea(this.$refs.textarea,t),this.cminstance=this.codemirror,this.cminstance.setValue(this.code||this.value||this.content)),this.cminstance.on("change",function(t){e.content=t.getValue(),e.$emit&&e.$emit("input",e.content)});var n={};["scroll","changes","beforeChange","cursorActivity","keyHandled","inputRead","electricInput","beforeSelectionChange","viewportChange","swapDoc","gutterClick","gutterContextMenu","focus","blur","refresh","optionChange","scrollCursorIntoView","update"].concat(this.events).concat(this.globalEvents).filter(function(e){return!n[e]&&(n[e]=!0)}).forEach(function(t){e.cminstance.on(t,function(){for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];e.$emit.apply(e,[t].concat(r));var o=t.replace(/([A-Z])/g,"-$1").toLowerCase();o!==t&&e.$emit.apply(e,[o].concat(r))})}),this.$emit("ready",this.codemirror),this.unseenLineMarkers(),this.refresh()},refresh:function(){var e=this;this.$nextTick(function(){e.cminstance.refresh()})},destroy:function(){var e=this.cminstance.doc.cm.getWrapperElement();e&&e.remove&&e.remove()},handerCodeChange:function(e){if(e!==this.cminstance.getValue()){var t=this.cminstance.getScrollInfo();this.cminstance.setValue(e),this.content=e,this.cminstance.scrollTo(t.left,t.top)}this.unseenLineMarkers()},unseenLineMarkers:function(){var e=this;void 0!==this.unseenLines&&void 0!==this.marker&&this.unseenLines.forEach(function(t){var n=e.cminstance.lineInfo(t);e.cminstance.setGutterMarker(t,"breakpoints",n.gutterMarkers?null:e.marker())})},switchMerge:function(){var e=this.cminstance.doc.history,t=this.cminstance.doc.cleanGeneration;this.options.value=this.cminstance.getValue(),this.destroy(),this.initialize(),this.cminstance.doc.history=e,this.cminstance.doc.cleanGeneration=t}},mounted:function(){this.initialize()},beforeDestroy:function(){this.destroy()}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n.n(r);for(var o in r)["default","default"].indexOf(o)<0&&function(e){n.d(t,e,function(){return r[e]})}(o);var a=n(5),s=n(4),c=s(i.a,a.a,!1,null,null,null);t.default=c.exports},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.install=t.codemirror=t.CodeMirror=void 0;var i=n(0),o=r(i),a=n(2),s=r(a),c=window.CodeMirror||o.default,l=function(e,t){t&&(t.options&&(s.default.props.globalOptions.default=function(){return t.options}),t.events&&(s.default.props.globalEvents.default=function(){return t.events})),e.component(s.default.name,s.default)},u={CodeMirror:c,codemirror:s.default,install:l};t.default=u,t.CodeMirror=c,t.codemirror=s.default,t.install=l},function(e,t){e.exports=function(e,t,n,r,i,o){var a,s=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(a=e,s=e.default);var l,u="function"==typeof s?s.options:s;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0),n&&(u.functional=!0),i&&(u._scopeId=i),o?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=l):r&&(l=r),l){var d=u.functional,f=d?u.render:u.beforeCreate;d?(u._injectStyles=l,u.render=function(e,t){return l.call(t),f(e,t)}):u.beforeCreate=f?[].concat(f,l):[l]}return{esModule:a,exports:s,options:u}}},function(e,t,n){"use strict";var r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vue-codemirror",class:{merge:e.merge}},[e.merge?n("div",{ref:"mergeview"}):n("textarea",{ref:"textarea",attrs:{name:e.name,placeholder:e.placeholder}})])},staticRenderFns:[]};t.a=r}]))},212:function(e,t,n){"use strict";var r=n(210);n.n(r).a},213:function(e,t,n){(e.exports=n(8)(!1)).push([e.i,"\n.code-flex,.image-flex{background-color:#fff\n}\n.img{height:auto;max-width:100%;max-height:100%;-webkit-user-drag:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:s-resize\n}\n.errbar{position:absolute;top:0;margin:10px;padding:10px;box-sizing:content-box;font-size:15pt;background-color:rgba(0,0,0,.2);color:red\n}\n.codemirror{height:100%;width:100%;overflow:auto\n}\n.cm-s-fill-height{height:100%;min-width:1%\n}\n.loading,.page-switcher{position:absolute\n}\n.page-switcher{z-index:1000;top:0\n}\n.page-resizer{z-index:10;position:absolute;top:50%\n}\n.page-resizer button{cursor:col-resize\n}",""])},214:function(e,t,n){"use strict";n.r(t);var r=n(7),i=n.n(r),o=n(97),a=n.n(o),s=n(16),c=n(211),l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},d=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h=function(){function e(t){var n=this;u(this,e),this.worker=t,this.listeners=[],this.nextId=0,this.worker.addEventListener("message",function(e){var t=e.data.id,r=e.data.error,i=e.data.result;n.listeners[t](r,i),delete n.listeners[t]})}return d(e,[{key:"render",value:function(e,t){var n=this;return new Promise(function(r,i){var o=n.nextId++;n.listeners[o]=function(e,t){e?i(new Error(e.message,e.fileName,e.lineNumber)):r(t)},n.worker.postMessage({id:o,src:e,options:t})})}}]),e}(),m=function e(t,n){u(this,e);var r=t();this.render=function(e,t){return new Promise(function(i,o){try{i(n(r,e,t))}catch(e){o(e)}})}};function g(){return"devicePixelRatio"in window&&window.devicePixelRatio>1?window.devicePixelRatio:1}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.scale,r=void 0===n?g():n,i=t.mimeType,o=void 0===i?"image/png":i,a=t.quality,s=void 0===a?1:a;return new Promise(function(t,n){var i=new Image;i.onload=function(){var e=document.createElement("canvas");e.width=i.width*r,e.height=i.height*r,e.getContext("2d").drawImage(i,0,0,e.width,e.height),e.toBlob(function(e){var n=new Image;n.src=URL.createObjectURL(e),n.width=i.width,n.height=i.height,t(n)},o,s)},i.onerror=function(e){var t;t="error"in e?e.error:new Error("Error loading SVG"),n(t)},i.src="data:image/svg+xml;base64,"+btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g,function(e,t){return String.fromCharCode("0x"+t)}))})}var v=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.workerURL,r=t.worker,i=t.Module,o=t.render;if(u(this,e),void 0!==n)this.wrapper=new h(new Worker(n));else if(void 0!==r)this.wrapper=new h(r);else if(void 0!==i&&void 0!==o)this.wrapper=new m(i,o);else{if(void 0===e.Module||void 0===e.render)throw new Error("Must specify workerURL or worker option, Module and render options, or include one of full.render.js or lite.render.js after viz.js.");this.wrapper=new m(e.Module,e.render)}}return d(e,[{key:"renderString",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.format,r=void 0===n?"svg":n,i=t.engine,o=void 0===i?"dot":i,a=t.files,s=void 0===a?[]:a,c=t.images,l=void 0===c?[]:c,u=t.yInvert,d=void 0!==u&&u,f=t.nop,h=void 0===f?0:f,m=0;m<l.length;m++)s.push({path:l[m].path,data:'<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg width="'+l[m].width+'" height="'+l[m].height+'"></svg>'});return this.wrapper.render(e,{format:r,engine:o,files:s,images:l,yInvert:d,nop:h})}},{key:"renderSVGElement",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.renderString(e,f({},t,{format:"svg"})).then(function(e){return(new DOMParser).parseFromString(e,"image/svg+xml").documentElement})}},{key:"renderImageElement",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.scale,r=t.mimeType,i=t.quality;return this.renderString(e,f({},t,{format:"svg"})).then(function(e){return"object"===("undefined"==typeof fabric?"undefined":l(fabric))&&fabric.loadSVGFromString?function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.scale,r=void 0===n?g():n,i=t.mimeType,o=void 0===i?"image/png":i,a=t.quality,s=void 0===a?1:a,c=r,l=void 0;return"image/jpeg"==o?l="jpeg":"image/png"==o&&(l="png"),new Promise(function(t,n){fabric.loadSVGFromString(e,function(e,r){0==e.length&&n(new Error("Error loading SVG with Fabric"));var i=document.createElement("canvas");i.width=r.width,i.height=r.height;var o=new fabric.Canvas(i,{enableRetinaScaling:!1}),a=fabric.util.groupSVGElements(e,r);o.add(a).renderAll();var u=new Image;u.src=o.toDataURL({format:l,multiplier:c,quality:s}),u.width=r.width,u.height=r.height,t(u)})})}(e,{scale:n,mimeType:r,quality:i}):p(e,{scale:n,mimeType:r,quality:i})})}},{key:"renderJSONObject",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.format;return"json"===n&&"json0"===n||(n="json"),this.renderString(e,f({},t,{format:n})).then(function(e){return JSON.parse(e)})}}]),e}(),w=new v({workerURL:"/full.render.js"}),b={middleware:["parse-query"],components:{codemirror:c.codemirror},data:function(){return{imgData:null,borderX:50,vizErr:"",cmOptions:{tabSize:4,mode:"simplemode",theme:"idea fill-height",lineNumbers:!0,line:!0,styleActiveLine:!0}}},computed:i()({},Object(s.c)(["title"]),{src:{get:function(){return this.$store.state.src},set:function(e){return this.$store.commit("setSrc",e)}},reversePos:{get:function(){return this.$store.state.reversePos},set:function(e){return this.$store.commit("setReversePos",e)}},layout:function(){return{flexDirection:this.reversePos?"row-reverse":"row",justifyContent:this.reversePos?"flex-end":"flex-start"}},codeWidth:function(){return this.reversePos?"".concat(100-this.borderX,"%"):"".concat(this.borderX,"%")},imgWidth:function(){return this.reversePos?"".concat(this.borderX,"%"):"".concat(100-this.borderX,"%")},codeFlex:function(){return{flexGrow:1,maxWidth:this.codeWidth,paddingLeft:this.reversePos?"20px":9}},imageFlex:function(){return{flexBasis:this.reversePos?"".concat(this.borderX,"%"):"".concat(100-this.borderX,"%")}},pageSwitcher:function(){return{left:"".concat(this.borderX,"%")}},pageResizer:function(){return{left:"".concat(this.borderX,"%")}}}),mounted:function(){this.refresh()},methods:{onClickImage:function(){var e=document.createElement("a");e.href=this.imgData,e.download="vizinga_".concat(this.title||"Untitled","_").concat(Date.now(),".png"),e.click()},onDragResizerStart:function(e){e.dataTransfer.setDragImage(new Image,0,0)},onDragResizer:function(e){var t=e.screenX/window.innerWidth*100;0!==t&&(t<10&&(t=10),90<t&&(t=90),this.borderX=t)},onInput:function(){a.a.throttle(this.refresh,100)()},refresh:function(){var e=this;w.renderImageElement(this.src).then(function(t){e.imgData=t.src,e.vizErr=""}).catch(function(t){console.log("ERR",t),e.vizErr=t,console.log(w),w.wrapper.worker.terminate(),w=new v({workerURL:"/full.render.js"})})}}},y=(n(212),n(13)),x=Object(y.a)(b,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{style:e.layout,attrs:{row:"","fill-height":""}},[n("div",{staticClass:"code-flex fill-height",style:e.codeFlex},[n("no-ssr",{attrs:{placeholder:"Loading..."}},[n("codemirror",{ref:"cm",staticClass:"codemirror",attrs:{options:e.cmOptions},on:{ready:function(e){},focus:function(e){},input:e.onInput},model:{value:e.src,callback:function(t){e.src=t},expression:"src"}})],1)],1),n("div",{staticClass:"image-flex fill-height",style:e.imageFlex,attrs:{xs6:""}},[n("v-layout",{staticClass:"image-wrapper",attrs:{"fill-height":"","justify-center":"","align-center":""}},[e.vizErr?n("div",{staticClass:"errbar"},[e._v(e._s(e.vizErr.toString()))]):e._e(),n("img",{directives:[{name:"show",rawName:"v-show",value:e.imgData,expression:"imgData"}],staticClass:"img",attrs:{src:e.imgData,title:"Click to download"},on:{click:e.onClickImage}}),e.imgData?e._e():n("v-progress-circular",{staticClass:"loading",attrs:{indeterminate:"",size:"64",color:"accent"}})],1)],1),n("div",{staticClass:"page-switcher",style:e.pageSwitcher,on:{click:function(t){e.reversePos=!e.reversePos}}},[n("v-tooltip",{attrs:{bottom:""}},[n("v-btn",{attrs:{slot:"activator",depressed:"",icon:"",small:"",absolute:""},slot:"activator"},[n("v-icon",[e._v(e._s(e.reversePos?"undo":"redo"))])],1),n("span",[e._v("Swap pane")])],1)],1),n("div",{staticClass:"page-resizer",style:e.pageResizer,attrs:{draggable:"true"},on:{drag:e.onDragResizer,dragstart:e.onDragResizerStart}},[n("v-btn",{attrs:{depressed:"",icon:"",small:"",absolute:"",ripple:!1}},[n("v-icon",[e._v("more_vert")])],1)],1)])},[],!1,null,null,null);x.options.__file="index.vue";t.default=x.exports}}]);