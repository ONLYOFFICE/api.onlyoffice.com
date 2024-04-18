/*! For license information please see 4701.8fd6350b.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_docspace_shared=self.webpackChunk_docspace_shared||[]).push([[4701],{"../../node_modules/autosize/dist/autosize.js":function(module,exports){var __WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;__WEBPACK_AMD_DEFINE_ARRAY__=[module,exports],__WEBPACK_AMD_DEFINE_FACTORY__=function(module,exports){"use strict";var keys,values,map="function"==typeof Map?new Map:(keys=[],values=[],{has:function has(key){return keys.indexOf(key)>-1},get:function get(key){return values[keys.indexOf(key)]},set:function set(key,value){-1===keys.indexOf(key)&&(keys.push(key),values.push(value))},delete:function _delete(key){var index=keys.indexOf(key);index>-1&&(keys.splice(index,1),values.splice(index,1))}}),createEvent=function createEvent(name){return new Event(name,{bubbles:!0})};try{new Event("test")}catch(e){createEvent=function createEvent(name){var evt=document.createEvent("Event");return evt.initEvent(name,!0,!1),evt}}function assign(ta){if(ta&&ta.nodeName&&"TEXTAREA"===ta.nodeName&&!map.has(ta)){var heightOffset=null,clientWidth=null,cachedHeight=null,pageResize=function pageResize(){ta.clientWidth!==clientWidth&&update()},destroy=function(style){window.removeEventListener("resize",pageResize,!1),ta.removeEventListener("input",update,!1),ta.removeEventListener("keyup",update,!1),ta.removeEventListener("autosize:destroy",destroy,!1),ta.removeEventListener("autosize:update",update,!1),Object.keys(style).forEach((function(key){ta.style[key]=style[key]})),map.delete(ta)}.bind(ta,{height:ta.style.height,resize:ta.style.resize,overflowY:ta.style.overflowY,overflowX:ta.style.overflowX,wordWrap:ta.style.wordWrap});ta.addEventListener("autosize:destroy",destroy,!1),"onpropertychange"in ta&&"oninput"in ta&&ta.addEventListener("keyup",update,!1),window.addEventListener("resize",pageResize,!1),ta.addEventListener("input",update,!1),ta.addEventListener("autosize:update",update,!1),ta.style.overflowX="hidden",ta.style.wordWrap="break-word",map.set(ta,{destroy,update}),init()}function init(){var style=window.getComputedStyle(ta,null);"vertical"===style.resize?ta.style.resize="none":"both"===style.resize&&(ta.style.resize="horizontal"),heightOffset="content-box"===style.boxSizing?-(parseFloat(style.paddingTop)+parseFloat(style.paddingBottom)):parseFloat(style.borderTopWidth)+parseFloat(style.borderBottomWidth),isNaN(heightOffset)&&(heightOffset=0),update()}function changeOverflow(value){var width=ta.style.width;ta.style.width="0px",ta.offsetWidth,ta.style.width=width,ta.style.overflowY=value}function getParentOverflows(el){for(var arr=[];el&&el.parentNode&&el.parentNode instanceof Element;)el.parentNode.scrollTop&&arr.push({node:el.parentNode,scrollTop:el.parentNode.scrollTop}),el=el.parentNode;return arr}function resize(){if(0!==ta.scrollHeight){var overflows=getParentOverflows(ta),docTop=document.documentElement&&document.documentElement.scrollTop;ta.style.height="",ta.style.height=ta.scrollHeight+heightOffset+"px",clientWidth=ta.clientWidth,overflows.forEach((function(el){el.node.scrollTop=el.scrollTop})),docTop&&(document.documentElement.scrollTop=docTop)}}function update(){resize();var styleHeight=Math.round(parseFloat(ta.style.height)),computed=window.getComputedStyle(ta,null),actualHeight="content-box"===computed.boxSizing?Math.round(parseFloat(computed.height)):ta.offsetHeight;if(actualHeight<styleHeight?"hidden"===computed.overflowY&&(changeOverflow("scroll"),resize(),actualHeight="content-box"===computed.boxSizing?Math.round(parseFloat(window.getComputedStyle(ta,null).height)):ta.offsetHeight):"hidden"!==computed.overflowY&&(changeOverflow("hidden"),resize(),actualHeight="content-box"===computed.boxSizing?Math.round(parseFloat(window.getComputedStyle(ta,null).height)):ta.offsetHeight),cachedHeight!==actualHeight){cachedHeight=actualHeight;var evt=createEvent("autosize:resized");try{ta.dispatchEvent(evt)}catch(err){}}}}function destroy(ta){var methods=map.get(ta);methods&&methods.destroy()}function update(ta){var methods=map.get(ta);methods&&methods.update()}var autosize=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?((autosize=function autosize(el){return el}).destroy=function(el){return el},autosize.update=function(el){return el}):((autosize=function autosize(el,options){return el&&Array.prototype.forEach.call(el.length?el:[el],(function(x){return assign(x,options)})),el}).destroy=function(el){return el&&Array.prototype.forEach.call(el.length?el:[el],destroy),el},autosize.update=function(el){return el&&Array.prototype.forEach.call(el.length?el:[el],update),el}),exports.default=autosize,module.exports=exports.default},void 0===(__WEBPACK_AMD_DEFINE_RESULT__="function"==typeof __WEBPACK_AMD_DEFINE_FACTORY__?__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__):__WEBPACK_AMD_DEFINE_FACTORY__)||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)},"../../node_modules/computed-style/dist/computedStyle.commonjs.js":module=>{module.exports=function(el,prop,getComputedStyle){return((getComputedStyle=window.getComputedStyle)?getComputedStyle(el):el.currentStyle)[prop.replace(/-(\w)/gi,(function(word,letter){return letter.toUpperCase()}))]}},"../../node_modules/copy-to-clipboard/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var deselectCurrent=__webpack_require__("../../node_modules/toggle-selection/index.js"),clipboardToIE11Formatting={"text/plain":"Text","text/html":"Url",default:"Text"};module.exports=function copy(text,options){var debug,message,reselectPrevious,range,selection,mark,success=!1;options||(options={}),debug=options.debug||!1;try{if(reselectPrevious=deselectCurrent(),range=document.createRange(),selection=document.getSelection(),(mark=document.createElement("span")).textContent=text,mark.ariaHidden="true",mark.style.all="unset",mark.style.position="fixed",mark.style.top=0,mark.style.clip="rect(0, 0, 0, 0)",mark.style.whiteSpace="pre",mark.style.webkitUserSelect="text",mark.style.MozUserSelect="text",mark.style.msUserSelect="text",mark.style.userSelect="text",mark.addEventListener("copy",(function(e){if(e.stopPropagation(),options.format)if(e.preventDefault(),void 0===e.clipboardData){debug&&console.warn("unable to use e.clipboardData"),debug&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var format=clipboardToIE11Formatting[options.format]||clipboardToIE11Formatting.default;window.clipboardData.setData(format,text)}else e.clipboardData.clearData(),e.clipboardData.setData(options.format,text);options.onCopy&&(e.preventDefault(),options.onCopy(e.clipboardData))})),document.body.appendChild(mark),range.selectNodeContents(mark),selection.addRange(range),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");success=!0}catch(err){debug&&console.error("unable to copy using execCommand: ",err),debug&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(options.format||"text",text),options.onCopy&&options.onCopy(window.clipboardData),success=!0}catch(err){debug&&console.error("unable to copy using clipboardData: ",err),debug&&console.error("falling back to prompt"),message=function format(message){var copyKey=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return message.replace(/#{\s*key\s*}/g,copyKey)}("message"in options?options.message:"Copy to clipboard: #{key}, Enter"),window.prompt(message,text)}}finally{selection&&("function"==typeof selection.removeRange?selection.removeRange(range):selection.removeAllRanges()),mark&&document.body.removeChild(mark),reselectPrevious()}return success}},"../../node_modules/csvjson-json_beautifier/json_beautifier.js":function(module,exports,__webpack_require__){(function(){function walkObjectAndDropQuotesOnNumbers(object){if(isObject(object)){var keys=Object.keys(object);keys&&keys.forEach((function(key){var value=object[key];if("string"==typeof value){var number=value-0;object[key]=isNaN(number)?value:number}else(isObject(value)||Array.isArray(value))&&walkObjectAndDropQuotesOnNumbers(value)}))}}function isObject(o){return o&&"object"==typeof o}function inlineShortArraysInResult(result,width){if(width||(width=80),"number"!=typeof width||width<20)throw"Invalid width '"+width+"'. Expecting number equal or larger than 20.";for(var list=result.split("\n"),i=0,start=null,content=[];i<list.length;){var startMatch=!!list[i].match(/\[/),endMatch=!!list[i].match(/\],?/);if(startMatch&&!endMatch)content=[list[i]],start=i;else if(endMatch&&!startMatch&&start){content.push((list[i]||"").trim());var inline=content.join(" ");inline.length<width&&(list.splice(start,i-start+1,inline),i=start),start=null,content=[]}else start&&content.push((list[i]||"").trim());i+=1}return list.join("\n")}function convert(object,options){var space=options.space||2,dropQuotesOnKeys=options.dropQuotesOnKeys||!1,dropQuotesOnNumbers=options.dropQuotesOnNumbers||!1,inlineShortArrays=options.inlineShortArrays||!1,inlineShortArraysDepth=options.inlineShortArraysDepth||1,quoteType=options.quoteType||"double",minify=options.minify||!1;dropQuotesOnNumbers&&walkObjectAndDropQuotesOnNumbers(object);var result=JSON2_mod.stringify(object,null,minify?void 0:space,dropQuotesOnKeys,quoteType);if(inlineShortArrays&&!minify){var newResult=inlineShortArraysInResult(result);if(inlineShortArraysDepth>1)for(var i=1;i<inlineShortArraysDepth&&(newResult=inlineShortArraysInResult(result=newResult))!=result;i++);result=newResult}return result}var JSON2_mod;module.exports&&(exports=module.exports=convert),JSON2_mod=__webpack_require__("../../node_modules/json2-mod/json2-mod.js"),exports.json_beautifier=convert}).call(this)},"../../node_modules/json2-mod/json2-mod.js":function(module,exports){(function(){"use strict";var JSON2_mod={};function f(n){return n<10?"0"+n:n}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,keyable=/^[a-zA-Z_$][0-9a-zA-Z_$]*$/,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"'":"\\'","\\":"\\\\"},rep;function quote(string,quoteType){escapable.lastIndex=0;var surroundingQuote='"';return"single"===quoteType&&(surroundingQuote="'"),escapable.test(string)?surroundingQuote+string.replace(escapable,(function(a){var c=meta[a];return"string"==typeof c?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}))+surroundingQuote:surroundingQuote+string+surroundingQuote}function condQuoteKey(string,quoteType){return keyable.test(string)?string:quote(string,quoteType)}function str(key,holder,dropQuotesOnKeys,quoteType){var i,k,v,length,partial,mind=gap,value=holder[key];switch(value&&"object"==typeof value&&"function"==typeof value.toJSON&&(value=value.toJSON(key)),"function"==typeof rep&&(value=rep.call(holder,key,value)),typeof value){case"string":return quote(value,quoteType);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value)return"null";if(gap+=indent,partial=[],"[object Array]"===Object.prototype.toString.apply(value)){for(length=value.length,i=0;i<length;i+=1)partial[i]=str(i,value,dropQuotesOnKeys,quoteType)||"null";return v=0===partial.length?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]",gap=mind,v}if(rep&&"object"==typeof rep)for(length=rep.length,i=0;i<length;i+=1)"string"==typeof rep[i]&&(v=str(k=rep[i],value,dropQuotesOnKeys,quoteType))&&partial.push((dropQuotesOnKeys?condQuoteKey(k,quoteType):quote(k,quoteType))+(gap?": ":":")+v);else for(k in value)Object.prototype.hasOwnProperty.call(value,k)&&(v=str(k,value,dropQuotesOnKeys,quoteType))&&partial.push((dropQuotesOnKeys?condQuoteKey(k,quoteType):quote(k,quoteType))+(gap?": ":":")+v);return v=0===partial.length?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}",gap=mind,v}}"function"!=typeof JSON2_mod.stringify&&(JSON2_mod.stringify=function(value,replacer,space,dropQuotesOnKeys,quoteType){var i;if(gap="",indent="","number"==typeof space)for(i=0;i<space;i+=1)indent+=" ";else"string"==typeof space&&(indent=space);if(rep=replacer,replacer&&"function"!=typeof replacer&&("object"!=typeof replacer||"number"!=typeof replacer.length))throw new Error("JSON.stringify");return str("",{"":value},dropQuotesOnKeys,quoteType)}),"function"!=typeof JSON2_mod.parse&&(JSON2_mod.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&"object"==typeof value)for(k in value)Object.prototype.hasOwnProperty.call(value,k)&&(void 0!==(v=walk(value,k))?value[k]=v:delete value[k]);return reviver.call(holder,key,value)}if(text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,(function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}))),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")}),module.exports&&(exports=module.exports=JSON2_mod),exports.JSON2_mod=JSON2_mod}).call(this)},"../../node_modules/line-height/lib/line-height.js":(module,__unused_webpack_exports,__webpack_require__)=>{var computedStyle=__webpack_require__("../../node_modules/computed-style/dist/computedStyle.commonjs.js");module.exports=function lineHeight(node){var lnHeightStr=computedStyle(node,"line-height"),lnHeight=parseFloat(lnHeightStr,10);if(lnHeightStr===lnHeight+""){var _lnHeightStyle=node.style.lineHeight;node.style.lineHeight=lnHeightStr+"em",lnHeightStr=computedStyle(node,"line-height"),lnHeight=parseFloat(lnHeightStr,10),_lnHeightStyle?node.style.lineHeight=_lnHeightStyle:delete node.style.lineHeight}if(-1!==lnHeightStr.indexOf("pt")?(lnHeight*=4,lnHeight/=3):-1!==lnHeightStr.indexOf("mm")?(lnHeight*=96,lnHeight/=25.4):-1!==lnHeightStr.indexOf("cm")?(lnHeight*=96,lnHeight/=2.54):-1!==lnHeightStr.indexOf("in")?lnHeight*=96:-1!==lnHeightStr.indexOf("pc")&&(lnHeight*=16),lnHeight=Math.round(lnHeight),"normal"===lnHeightStr){var nodeName=node.nodeName,_node=document.createElement(nodeName);_node.innerHTML="&nbsp;","TEXTAREA"===nodeName.toUpperCase()&&_node.setAttribute("rows","1");var fontSizeStr=computedStyle(node,"font-size");_node.style.fontSize=fontSizeStr,_node.style.padding="0px",_node.style.border="0px";var body=document.body;body.appendChild(_node),lnHeight=_node.offsetHeight,body.removeChild(_node)}return lnHeight}},"../../node_modules/react-autosize-textarea/lib/TextareaAutosize.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var extendStatics,__extends=this&&this.__extends||(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)b.hasOwnProperty(p)&&(d[p]=b[p])},function(d,b){function __(){this.constructor=d}extendStatics(d,b),d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}),__assign=this&&this.__assign||Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__rest=this&&this.__rest||function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&(t[p[i]]=s[p[i]])}return t};exports.__esModule=!0;var React=__webpack_require__("../../node_modules/react/index.js"),PropTypes=__webpack_require__("../../node_modules/prop-types/index.js"),autosize=__webpack_require__("../../node_modules/autosize/dist/autosize.js"),getLineHeight=__webpack_require__("../../node_modules/line-height/lib/line-height.js"),TextareaAutosizeClass=function(_super){function TextareaAutosizeClass(){var _this=null!==_super&&_super.apply(this,arguments)||this;return _this.state={lineHeight:null},_this.textarea=null,_this.onResize=function(e){_this.props.onResize&&_this.props.onResize(e)},_this.updateLineHeight=function(){_this.textarea&&_this.setState({lineHeight:getLineHeight(_this.textarea)})},_this.onChange=function(e){var onChange=_this.props.onChange;_this.currentValue=e.currentTarget.value,onChange&&onChange(e)},_this}return __extends(TextareaAutosizeClass,_super),TextareaAutosizeClass.prototype.componentDidMount=function(){var _this=this,_a=this.props,maxRows=_a.maxRows,async=_a.async;"number"==typeof maxRows&&this.updateLineHeight(),"number"==typeof maxRows||async?setTimeout((function(){return _this.textarea&&autosize(_this.textarea)})):this.textarea&&autosize(this.textarea),this.textarea&&this.textarea.addEventListener("autosize:resized",this.onResize)},TextareaAutosizeClass.prototype.componentWillUnmount=function(){this.textarea&&(this.textarea.removeEventListener("autosize:resized",this.onResize),autosize.destroy(this.textarea))},TextareaAutosizeClass.prototype.render=function(){var _this=this,_b=this.props,maxRows=(_b.onResize,_b.maxRows),style=(_b.onChange,_b.style),children=(_b.innerRef,_b.children),props=__rest(_b,["onResize","maxRows","onChange","style","innerRef","children"]),lineHeight=this.state.lineHeight,maxHeight=maxRows&&lineHeight?lineHeight*maxRows:null;return React.createElement("textarea",__assign({},props,{onChange:this.onChange,style:maxHeight?__assign({},style,{maxHeight}):style,ref:function(element){_this.textarea=element,"function"==typeof _this.props.innerRef?_this.props.innerRef(element):_this.props.innerRef&&(_this.props.innerRef.current=element)}}),children)},TextareaAutosizeClass.prototype.componentDidUpdate=function(){this.textarea&&autosize.update(this.textarea)},TextareaAutosizeClass.defaultProps={rows:1,async:!1},TextareaAutosizeClass.propTypes={rows:PropTypes.number,maxRows:PropTypes.number,onResize:PropTypes.func,innerRef:PropTypes.any,async:PropTypes.bool},TextareaAutosizeClass}(React.Component);exports.TextareaAutosize=React.forwardRef((function(props,ref){return React.createElement(TextareaAutosizeClass,__assign({},props,{innerRef:ref}))}))},"../../node_modules/react-autosize-textarea/lib/index.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var TextareaAutosize_1=__webpack_require__("../../node_modules/react-autosize-textarea/lib/TextareaAutosize.js");exports.A=TextareaAutosize_1.TextareaAutosize},"../../node_modules/react-toastify/dist/react-toastify.esm.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{N9:()=>Q,nk:()=>g,oR:()=>B});var react=__webpack_require__("../../node_modules/react/index.js");function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}const dist_clsx=function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n},c=e=>"number"==typeof e&&!isNaN(e),d=e=>"string"==typeof e,u=e=>"function"==typeof e,p=e=>d(e)||u(e)?e:null,m=e=>(0,react.isValidElement)(e)||d(e)||u(e)||c(e);function g(t){let{enter:a,exit:r,appendPosition:i=!1,collapse:l=!0,collapseDuration:c=300}=t;return function(t){let{children:d,position:u,preventExitTransition:p,done:m,nodeRef:g,isIn:y,playToast:v}=t;const h=i?`${a}--${u}`:a,T=i?`${r}--${u}`:r,E=(0,react.useRef)(0);return(0,react.useLayoutEffect)((()=>{const e=g.current,t=h.split(" "),n=o=>{o.target===g.current&&(v(),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===E.current&&"animationcancel"!==o.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)}),[]),(0,react.useEffect)((()=>{const e=g.current,t=()=>{e.removeEventListener("animationend",t),l?function f(e,t,n){void 0===n&&(n=300);const{scrollHeight:o,style:s}=e;requestAnimationFrame((()=>{s.minHeight="initial",s.height=o+"px",s.transition=`all ${n}ms`,requestAnimationFrame((()=>{s.height="0",s.padding="0",s.margin="0",setTimeout(t,n)}))}))}(e,m,c):m()};y||(p?t():(E.current=1,e.className+=` ${T}`,e.addEventListener("animationend",t)))}),[y]),react.createElement(react.Fragment,null,d)}}function y(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const v=new Map;let h=[];const T=new Set,E=e=>T.forEach((t=>t(e))),b=()=>v.size>0;function I(e,t){var n;if(t)return!(null==(n=v.get(t))||!n.isToastActive(e));let o=!1;return v.forEach((t=>{t.isToastActive(e)&&(o=!0)})),o}function _(e,t){m(e)&&(b()||h.push({content:e,options:t}),v.forEach((n=>{n.buildToast(e,t)})))}function C(e,t){v.forEach((n=>{null!=t&&null!=t&&t.containerId?(null==t?void 0:t.containerId)===n.id&&n.toggle(e,null==t?void 0:t.id):n.toggle(e,null==t?void 0:t.id)}))}function L(e){const{subscribe:o,getSnapshot:s,setProps:i}=(0,react.useRef)(function(e){const n=e.containerId||1;return{subscribe(o){const s=function(e,n,o){let s=1,r=0,i=[],l=[],f=[],g=n;const v=new Map,h=new Set,T=()=>{f=Array.from(v.values()),h.forEach((e=>e()))},E=e=>{l=null==e?[]:l.filter((t=>t!==e)),T()},b=e=>{const{toastId:n,onOpen:s,updateId:a,children:r}=e.props,i=null==a;e.staleId&&v.delete(e.staleId),v.set(n,e),l=[...l,e.props.toastId].filter((t=>t!==e.staleId)),T(),o(y(e,i?"added":"updated")),i&&u(s)&&s((0,react.isValidElement)(r)&&r.props)};return{id:e,props:g,observe:e=>(h.add(e),()=>h.delete(e)),toggle:(e,t)=>{v.forEach((n=>{null!=t&&t!==n.props.toastId||u(n.toggle)&&n.toggle(e)}))},removeToast:E,toasts:v,clearQueue:()=>{r-=i.length,i=[]},buildToast:(n,l)=>{if((t=>{let{containerId:n,toastId:o,updateId:s}=t;const a=n?n!==e:1!==e,r=v.has(o)&&null==s;return a||r})(l))return;const{toastId:f,updateId:h,data:I,staleId:_,delay:C}=l,L=()=>{E(f)},N=null==h;N&&r++;const $={...g,style:g.toastStyle,key:s++,...Object.fromEntries(Object.entries(l).filter((e=>{let[t,n]=e;return null!=n}))),toastId:f,updateId:h,data:I,closeToast:L,isIn:!1,className:p(l.className||g.toastClassName),bodyClassName:p(l.bodyClassName||g.bodyClassName),progressClassName:p(l.progressClassName||g.progressClassName),autoClose:!l.isLoading&&(w=l.autoClose,k=g.autoClose,!1===w||c(w)&&w>0?w:k),deleteToast(){const e=v.get(f),{onClose:n,children:s}=e.props;u(n)&&n((0,react.isValidElement)(s)&&s.props),o(y(e,"removed")),v.delete(f),r--,r<0&&(r=0),i.length>0?b(i.shift()):T()}};var w,k;$.closeButton=g.closeButton,!1===l.closeButton||m(l.closeButton)?$.closeButton=l.closeButton:!0===l.closeButton&&($.closeButton=!m(g.closeButton)||g.closeButton);let P=n;(0,react.isValidElement)(n)&&!d(n.type)?P=(0,react.cloneElement)(n,{closeToast:L,toastProps:$,data:I}):u(n)&&(P=n({closeToast:L,toastProps:$,data:I}));const M={content:P,props:$,staleId:_};g.limit&&g.limit>0&&r>g.limit&&N?i.push(M):c(C)?setTimeout((()=>{b(M)}),C):b(M)},setProps(e){g=e},setToggle:(e,t)=>{v.get(e).toggle=t},isToastActive:e=>l.some((t=>t===e)),getSnapshot:()=>g.newestOnTop?f.reverse():f}}(n,e,E);v.set(n,s);const r=s.observe(o);return h.forEach((e=>_(e.content,e.options))),h=[],()=>{r(),v.delete(n)}},setProps(e){var t;null==(t=v.get(n))||t.setProps(e)},getSnapshot(){var e;return null==(e=v.get(n))?void 0:e.getSnapshot()}}}(e)).current;i(e);const l=(0,react.useSyncExternalStore)(o,s,s);return{getToastToRender:function(e){if(!l)return[];const t=new Map;return l.forEach((e=>{const{position:n}=e.props;t.has(n)||t.set(n,[]),t.get(n).push(e)})),Array.from(t,(t=>e(t[0],t[1])))},isToastActive:I,count:null==l?void 0:l.length}}function N(e){const[t,o]=(0,react.useState)(!1),[a,r]=(0,react.useState)(!1),l=(0,react.useRef)(null),c=(0,react.useRef)({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:d,pauseOnHover:u,closeToast:p,onClick:m,closeOnClick:f}=e;var g,y;function h(){o(!0)}function T(){o(!1)}function E(n){const o=l.current;c.canDrag&&o&&(c.didMove=!0,t&&T(),c.delta="x"===e.draggableDirection?n.clientX-c.start:n.clientY-c.start,c.start!==n.clientX&&(c.canCloseOnClick=!1),o.style.transform=`translate3d(${"x"===e.draggableDirection?`${c.delta}px, var(--y)`:`0, calc(${c.delta}px + var(--y))`},0)`,o.style.opacity=""+(1-Math.abs(c.delta/c.removalDistance)))}function b(){document.removeEventListener("pointermove",E),document.removeEventListener("pointerup",b);const t=l.current;if(c.canDrag&&c.didMove&&t){if(c.canDrag=!1,Math.abs(c.delta)>c.removalDistance)return r(!0),e.closeToast(),void e.collapseAll();t.style.transition="transform 0.2s, opacity 0.2s",t.style.removeProperty("transform"),t.style.removeProperty("opacity")}}null==(y=v.get((g={id:e.toastId,containerId:e.containerId,fn:o}).containerId||1))||y.setToggle(g.id,g.fn),(0,react.useEffect)((()=>{if(e.pauseOnFocusLoss)return document.hasFocus()||T(),window.addEventListener("focus",h),window.addEventListener("blur",T),()=>{window.removeEventListener("focus",h),window.removeEventListener("blur",T)}}),[e.pauseOnFocusLoss]);const I={onPointerDown:function(t){if(!0===e.draggable||e.draggable===t.pointerType){c.didMove=!1,document.addEventListener("pointermove",E),document.addEventListener("pointerup",b);const n=l.current;c.canCloseOnClick=!0,c.canDrag=!0,n.style.transition="none","x"===e.draggableDirection?(c.start=t.clientX,c.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(c.start=t.clientY,c.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent)/100)}},onPointerUp:function(t){const{top:n,bottom:o,left:s,right:a}=l.current.getBoundingClientRect();"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&t.clientX>=s&&t.clientX<=a&&t.clientY>=n&&t.clientY<=o?T():h()}};return d&&u&&(I.onMouseEnter=T,e.stacked||(I.onMouseLeave=h)),f&&(I.onClick=e=>{m&&m(e),c.canCloseOnClick&&p()}),{playToast:h,pauseToast:T,isRunning:t,preventExitTransition:a,toastRef:l,eventHandlers:I}}function $(t){let{delay:n,isRunning:o,closeToast:s,type:a="default",hide:r,className:i,style:c,controlledProgress:d,progress:p,rtl:m,isIn:f,theme:g}=t;const y=r||d&&0===p,v={...c,animationDuration:`${n}ms`,animationPlayState:o?"running":"paused"};d&&(v.transform=`scaleX(${p})`);const h=dist_clsx("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${g}`,`Toastify__progress-bar--${a}`,{"Toastify__progress-bar--rtl":m}),T=u(i)?i({rtl:m,type:a,defaultClassName:h}):dist_clsx(h,i),E={[d&&p>=1?"onTransitionEnd":"onAnimationEnd"]:d&&p<1?null:()=>{f&&s()}};return react.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":y},react.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${g} Toastify__progress-bar--${a}`}),react.createElement("div",{role:"progressbar","aria-hidden":y?"true":"false","aria-label":"notification timer",className:T,style:v,...E}))}let w=1;const k=()=>""+w++;function P(e){return e&&(d(e.toastId)||c(e.toastId))?e.toastId:k()}function M(e,t){return _(e,t),t.toastId}function x(e,t){return{...t,type:t&&t.type||e,toastId:P(t)}}function A(e){return(t,n)=>M(t,x(e,n))}function B(e,t){return M(e,x("default",t))}B.loading=(e,t)=>M(e,x("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),B.promise=function(e,t,n){let o,{pending:s,error:a,success:r}=t;s&&(o=d(s)?B.loading(s,n):B.loading(s.render,{...n,...s}));const i={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(e,t,s)=>{if(null==t)return void B.dismiss(o);const a={type:e,...i,...n,data:s},r=d(t)?{render:t}:t;return o?B.update(o,{...a,...r}):B(r.render,{...a,...r}),s},c=u(e)?e():e;return c.then((e=>l("success",r,e))).catch((e=>l("error",a,e))),c},B.success=A("success"),B.info=A("info"),B.error=A("error"),B.warning=A("warning"),B.warn=B.warning,B.dark=(e,t)=>M(e,x("default",{theme:"dark",...t})),B.dismiss=function(e){!function(e){var t;if(b()){if(null==e||d(t=e)||c(t))v.forEach((t=>{t.removeToast(e)}));else if(e&&("containerId"in e||"id"in e)){var n;(null==(n=v.get(e.containerId))?void 0:n.removeToast(e.id))||v.forEach((t=>{t.removeToast(e.id)}))}}else h=h.filter((t=>null!=e&&t.options.toastId!==e))}(e)},B.clearWaitingQueue=function(e){void 0===e&&(e={}),v.forEach((t=>{!t.props.limit||e.containerId&&t.id!==e.containerId||t.clearQueue()}))},B.isActive=I,B.update=function(e,t){void 0===t&&(t={});const n=((e,t)=>{var n;let{containerId:o}=t;return null==(n=v.get(o||1))?void 0:n.toasts.get(e)})(e,t);if(n){const{props:o,content:s}=n,a={delay:100,...o,...t,toastId:t.toastId||e,updateId:k()};a.toastId!==e&&(a.staleId=e);const r=a.render||s;delete a.render,M(r,a)}},B.done=e=>{B.update(e,{progress:1})},B.onChange=function(e){return T.add(e),()=>{T.delete(e)}},B.play=e=>C(!0,e),B.pause=e=>C(!1,e);const O="undefined"!=typeof window?react.useLayoutEffect:react.useEffect,D=t=>{let{theme:n,type:o,isLoading:s,...a}=t;return react.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===n?"currentColor":`var(--toastify-icon-color-${o})`,...a})},z={info:function(t){return react.createElement(D,{...t},react.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return react.createElement(D,{...t},react.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return react.createElement(D,{...t},react.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return react.createElement(D,{...t},react.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return react.createElement("div",{className:"Toastify__spinner"})}},R=n=>{const{isRunning:o,preventExitTransition:s,toastRef:r,eventHandlers:i,playToast:c}=N(n),{closeButton:d,children:p,autoClose:m,onClick:f,type:g,hideProgressBar:y,closeToast:v,transition:h,position:T,className:E,style:b,bodyClassName:I,bodyStyle:_,progressClassName:C,progressStyle:L,updateId:w,role:k,progress:P,rtl:M,toastId:x,deleteToast:A,isIn:B,isLoading:O,closeOnClick:D,theme:R}=n,S=dist_clsx("Toastify__toast",`Toastify__toast-theme--${R}`,`Toastify__toast--${g}`,{"Toastify__toast--rtl":M},{"Toastify__toast--close-on-click":D}),H=u(E)?E({rtl:M,position:T,type:g,defaultClassName:S}):dist_clsx(S,E),F=function(e){let{theme:n,type:o,isLoading:s,icon:r}=e,i=null;const l={theme:n,type:o};return!1===r||(u(r)?i=r({...l,isLoading:s}):(0,react.isValidElement)(r)?i=(0,react.cloneElement)(r,l):s?i=z.spinner():(e=>e in z)(o)&&(i=z[o](l))),i}(n),X=!!P||!m,Y={closeToast:v,type:g,theme:R};let q=null;return!1===d||(q=u(d)?d(Y):(0,react.isValidElement)(d)?(0,react.cloneElement)(d,Y):function(t){let{closeToast:n,theme:o,ariaLabel:s="close"}=t;return react.createElement("button",{className:`Toastify__close-button Toastify__close-button--${o}`,type:"button",onClick:e=>{e.stopPropagation(),n(e)},"aria-label":s},react.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},react.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(Y)),react.createElement(h,{isIn:B,done:A,position:T,preventExitTransition:s,nodeRef:r,playToast:c},react.createElement("div",{id:x,onClick:f,"data-in":B,className:H,...i,style:b,ref:r},react.createElement("div",{...B&&{role:k},className:u(I)?I({type:g}):dist_clsx("Toastify__toast-body",I),style:_},null!=F&&react.createElement("div",{className:dist_clsx("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!O})},F),react.createElement("div",null,p)),q,react.createElement($,{...w&&!X?{key:`pb-${w}`}:{},rtl:M,theme:R,delay:m,isRunning:o,isIn:B,closeToast:v,hide:y,type:g,style:L,className:C,controlledProgress:X,progress:P||0})))},S=function(e,t){return void 0===t&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},H=g(S("bounce",!0)),q=(g(S("slide",!0)),g(S("zoom")),g(S("flip")),{position:"top-right",transition:H,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"});function Q(t){let o={...q,...t};const s=t.stacked,[a,r]=(0,react.useState)(!0),c=(0,react.useRef)(null),{getToastToRender:d,isToastActive:m,count:f}=L(o),{className:g,style:y,rtl:v,containerId:h}=o;function T(e){const t=dist_clsx("Toastify__toast-container",`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":v});return u(g)?g({position:e,rtl:v,defaultClassName:t}):dist_clsx(t,p(g))}function E(){s&&(r(!0),B.play())}return O((()=>{if(s){var e;const t=c.current.querySelectorAll('[data-in="true"]'),n=12,s=null==(e=o.position)?void 0:e.includes("top");let r=0,i=0;Array.from(t).reverse().forEach(((e,t)=>{const o=e;o.classList.add("Toastify__toast--stacked"),t>0&&(o.dataset.collapsed=`${a}`),o.dataset.pos||(o.dataset.pos=s?"top":"bot");const l=r*(a?.2:1)+(a?0:n*t);o.style.setProperty("--y",`${s?l:-1*l}px`),o.style.setProperty("--g",`${n}`),o.style.setProperty("--s",""+(1-(a?i:0))),r+=o.offsetHeight,i+=.025}))}}),[a,f,s]),react.createElement("div",{ref:c,className:"Toastify",id:h,onMouseEnter:()=>{s&&(r(!1),B.pause())},onMouseLeave:E},d(((t,n)=>{const o=n.length?{...y}:{...y,pointerEvents:"none"};return react.createElement("div",{className:T(t),style:o,key:`container-${t}`},n.map((t=>{let{content:n,props:o}=t;return react.createElement(R,{...o,stacked:s,collapseAll:E,isIn:m(o.toastId,o.containerId),style:o.style,key:`toast-${o.key}`},n)})))})))}},"../../node_modules/toggle-selection/index.js":module=>{module.exports=function(){var selection=document.getSelection();if(!selection.rangeCount)return function(){};for(var active=document.activeElement,ranges=[],i=0;i<selection.rangeCount;i++)ranges.push(selection.getRangeAt(i));switch(active.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":active.blur();break;default:active=null}return selection.removeAllRanges(),function(){"Caret"===selection.type&&selection.removeAllRanges(),selection.rangeCount||ranges.forEach((function(range){selection.addRange(range)})),active&&active.focus()}}}}]);