module.exports=__NEXT_REGISTER_PAGE("/post",function(){return{page:webpackJsonp([0],{260:function(e,t,n){e.exports=n(261)},261:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(26),a=n.n(r),o=n(2),i=n.n(o),u=n(82),l=n.n(u),c=n(83),s=n.n(c),d=n(78);var f=function(e){var t=e.error,n=e.post;if(t||!n)return i.a.createElement(s.a,{statusCode:"404"});var r,a=n.name,o=n.summary,u=n.image;return i.a.createElement(d.a,null,i.a.createElement("h1",null,a),i.a.createElement("p",null,(r=o)&&r.replace(/(<([^>]+)>)/gi,"")),u&&u.medium?i.a.createElement("img",{src:u.medium}):"")};f.getInitialProps=function(){var e,t=(e=a.a.mark(function e(t){var n,r,o;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t.query.id,e.next=4,l()("https://api.tvmaze.com/shows/".concat(n));case 4:return r=e.sent,e.next=7,r.json();case 7:return o=e.sent,console.log(o),e.abrupt("return",{post:o});case 12:return e.prev=12,e.t0=e.catch(0),e.abrupt("return",{error:e.t0});case 15:case"end":return e.stop()}},e,this,[[0,12]])}),function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function i(e,t){try{var n=o[e](t),i=n.value}catch(e){return void a(e)}n.done?r(i):Promise.resolve(i).then(u,l)}function u(e){i("next",e)}function l(e){i("throw",e)}u()})});return function(e){return t.apply(this,arguments)}}(),t.default=f},39:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof fetch?fetch.bind():function(e,t){return t=t||{},new Promise(function(n,r){var a=new XMLHttpRequest;for(var o in a.open(t.method||"get",e,!0),t.headers)a.setRequestHeader(o,t.headers[o]);function i(){var e,t=[],n=[],r={};return a.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(a,o,i){t.push(o=o.toLowerCase()),n.push([o,i]),e=r[o],r[o]=e?e+","+i:i}),{ok:2==(a.status/100|0),status:a.status,statusText:a.statusText,url:a.responseURL,clone:i,text:function(){return Promise.resolve(a.responseText)},json:function(){return Promise.resolve(a.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([a.response]))},headers:{keys:function(){return t},entries:function(){return n},get:function(e){return r[e.toLowerCase()]},has:function(e){return e.toLowerCase()in r}}}}a.withCredentials="include"==t.credentials,a.onload=function(){n(i())},a.onerror=r,a.send(t.body)})};t.default=r},40:function(e,t,n){var r=n(87),a=n(88),o=n(94);e.exports=function(e){return r(e)||a(e)||o()}},82:function(e,t,n){e.exports=window.fetch||(window.fetch=n(39).default||n(39))},83:function(e,t,n){e.exports=n(84)},84:function(e,t,n){"use strict";var r=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(13)),o=r(n(6)),i=r(n(7)),u=r(n(14)),l=r(n(15)),c=r(n(2)),s=r(n(24)),d=r(n(85)),f=r(n(86)),p=function(e){function t(){return(0,o.default)(this,t),(0,u.default)(this,(t.__proto__||(0,a.default)(t)).apply(this,arguments))}return(0,l.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props.statusCode,t=404===e?"This page could not be found":d.default[e]||"An unexpected error has occurred";return c.default.createElement("div",{style:E.error},c.default.createElement(f.default,null,c.default.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),c.default.createElement("title",null,e,": ",t)),c.default.createElement("div",null,c.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?c.default.createElement("h1",{style:E.h1},e):null,c.default.createElement("div",{style:E.desc},c.default.createElement("h2",{style:E.h2},t,"."))))}}],[{key:"getInitialProps",value:function(e){var t=e.res,n=e.err;return{statusCode:t?t.statusCode:n?n.statusCode:null}}}]),t}(c.default.Component);t.default=p,Object.defineProperty(p,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{statusCode:s.default.number}});var E={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},85:function(e,t){e.exports={100:"Continue",101:"Switching Protocols",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi Status",208:"Already Reported",226:"IM Used",300:"Multiple Choices",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",306:"Switch Proxy",307:"Temporary Redirect",308:"Permanent Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Time-out",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Request Entity Too Large",414:"Request-URI Too Large",415:"Unsupported Media Type",416:"Requested Range not Satisfiable",417:"Expectation Failed",418:"I'm a teapot",421:"Misdirected Request",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Header Fields Too Large",451:"Unavailable For Legal Reasons",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Time-out",505:"HTTP Version not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",508:"Loop Detected",510:"Not Extended",511:"Network Authentication Required",CONTINUE:100,SWITCHING_PROTOCOLS:101,OK:200,CREATED:201,ACCEPTED:202,NON_AUTHORITATIVE_INFORMATION:203,NO_CONTENT:204,RESET_CONTENT:205,PARTIAL_CONTENT:206,MULTI_STATUS:207,ALREADY_REPORTED:208,IM_USED:226,MULTIPLE_CHOICES:300,MOVED_PERMANENTLY:301,FOUND:302,SEE_OTHER:303,NOT_MODIFIED:304,USE_PROXY:305,SWITCH_PROXY:306,TEMPORARY_REDIRECT:307,PERMANENT_REDIRECT:308,BAD_REQUEST:400,UNAUTHORIZED:401,PAYMENT_REQUIRED:402,FORBIDDEN:403,NOT_FOUND:404,METHOD_NOT_ALLOWED:405,NOT_ACCEPTABLE:406,PROXY_AUTHENTICATION_REQUIRED:407,REQUEST_TIMEOUT:408,CONFLICT:409,GONE:410,LENGTH_REQUIRED:411,PRECONDITION_FAILED:412,REQUEST_ENTITY_TOO_LARGE:413,REQUEST_URI_TOO_LONG:414,UNSUPPORTED_MEDIA_TYPE:415,REQUESTED_RANGE_NOT_SATISFIABLE:416,EXPECTATION_FAILED:417,IM_A_TEAPOT:418,MISDIRECTED_REQUEST:421,UNPROCESSABLE_ENTITY:422,UPGRADE_REQUIRED:426,PRECONDITION_REQUIRED:428,LOCKED:423,FAILED_DEPENDENCY:424,TOO_MANY_REQUESTS:429,REQUEST_HEADER_FIELDS_TOO_LARGE:431,UNAVAILABLE_FOR_LEGAL_REASONS:451,INTERNAL_SERVER_ERROR:500,NOT_IMPLEMENTED:501,BAD_GATEWAY:502,SERVICE_UNAVAILABLE:503,GATEWAY_TIMEOUT:504,HTTP_VERSION_NOT_SUPPORTED:505,VARIANT_ALSO_NEGOTIATES:506,INSUFFICIENT_STORAGE:507,LOOP_DETECTED:508,NOT_EXTENDED:510,NETWORK_AUTHENTICATION_REQUIRED:511}},86:function(e,t,n){"use strict";var r=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=T,t.default=void 0;var a=r(n(29)),o=r(n(40)),i=r(n(13)),u=r(n(6)),l=r(n(7)),c=r(n(14)),s=r(n(15)),d=r(n(2)),f=r(n(24)),p=r(n(95)),E=function(e){function t(){return(0,u.default)(this,t),(0,c.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,s.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){return null}}]),t}(d.default.Component);function T(){return[d.default.createElement("meta",{charSet:"utf-8",className:"next-head"})]}Object.defineProperty(E,"contextTypes",{configurable:!0,enumerable:!0,writable:!0,value:{headManager:f.default.object}});var h=["name","httpEquiv","charSet","itemProp","property"],m=["article:tag"];var _=(0,p.default)(function(e){var t,n,r,i,u;return(t=e.map(function(e){return e.props.children}).map(function(e){return d.default.Children.toArray(e)}).reduce(function(e,t){return e.concat(t)},[]).reduce(function(e,t){return d.default.Fragment&&t.type===d.default.Fragment?e.concat(d.default.Children.toArray(t.props.children)):e.concat(t)},[]).reverse()).concat.apply(t,(0,o.default)(T())).filter(function(e){return!!e}).filter((n=new a.default,r=new a.default,i=new a.default,u={},function(e){if(e.key&&0===e.key.indexOf(".$")){if(n.has(e.key))return!1;n.add(e.key)}switch(e.type){case"title":case"base":if(r.has(e.type))return!1;r.add(e.type);break;case"meta":for(var t=0,o=h.length;t<o;t++){var l=h[t];if(e.props.hasOwnProperty(l))if("charSet"===l){if(i.has(l))return!1;i.add(l)}else{var c=e.props[l],s=u[l]||new a.default;if(s.has(c)&&-1===m.indexOf(c))return!1;s.add(c),u[l]=s}}}return!0})).reverse().map(function(e){var t=(e.props&&e.props.className?e.props.className+" ":"")+"next-head";return d.default.cloneElement(e,{className:t})})},function(e){this.context&&this.context.headManager&&this.context.headManager.updateHead(e)},function(e){return e})(E);t.default=_},87:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},88:function(e,t,n){var r=n(89),a=n(93);e.exports=function(e){if(a(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return r(e)}},89:function(e,t,n){e.exports=n(90)},90:function(e,t,n){n(18),n(91),e.exports=n(0).Array.from},91:function(e,t,n){"use strict";var r=n(11),a=n(3),o=n(23),i=n(67),u=n(68),l=n(36),c=n(92),s=n(45);a(a.S+a.F*!n(71)(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,a,d,f=o(e),p="function"==typeof this?this:Array,E=arguments.length,T=E>1?arguments[1]:void 0,h=void 0!==T,m=0,_=s(f);if(h&&(T=r(T,E>2?arguments[2]:void 0,2)),void 0==_||p==Array&&u(_))for(n=new p(t=l(f.length));t>m;m++)c(n,m,h?T(f[m],m):f[m]);else for(d=_.call(f),n=new p;!(a=d.next()).done;m++)c(n,m,h?i(d,T,[a.value,m],!0):a.value);return n.length=m,n}})},92:function(e,t,n){"use strict";var r=n(8),a=n(25);e.exports=function(e,t,n){t in e?r.f(e,t,a(0,n)):e[t]=n}},93:function(e,t,n){e.exports=n(79)},94:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},95:function(e,t,n){"use strict";var r=n(16),a=n(1);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reduceComponentsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var a,E=new d.default;function T(r){a=e((0,s.default)(E)),h.canUseDOM?t.call(r,a):n&&(a=n(a))}var h=function(e){function t(){return(0,i.default)(this,t),(0,l.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,c.default)(t,e),(0,u.default)(t,[{key:"componentWillMount",value:function(){E.add(this),T(this)}},{key:"componentDidUpdate",value:function(){T(this)}},{key:"componentWillUnmount",value:function(){E.delete(this),T(this)}},{key:"render",value:function(){return f.default.createElement(r,null,this.props.children)}}],[{key:"peek",value:function(){return a}},{key:"rewind",value:function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=a;return a=void 0,E.clear(),e}}]),t}(f.Component);return Object.defineProperty(h,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"SideEffect(".concat((0,p.getDisplayName)(r),")")}),Object.defineProperty(h,"contextTypes",{configurable:!0,enumerable:!0,writable:!0,value:r.contextTypes}),Object.defineProperty(h,"canUseDOM",{configurable:!0,enumerable:!0,writable:!0,value:"undefined"!=typeof window}),h}};var o=a(n(13)),i=a(n(6)),u=a(n(7)),l=a(n(14)),c=a(n(15)),s=a(n(40)),d=a(n(29)),f=r(n(2)),p=n(19)}},[260]).default}});