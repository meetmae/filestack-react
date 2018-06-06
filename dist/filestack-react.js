!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("filestack-js"),require("prop-types"),require("react"));else if("function"==typeof define&&define.amd)define(["filestack-js","prop-types","react"],t);else{var n="object"==typeof exports?t(require("filestack-js"),require("prop-types"),require("react")):t(e["filestack-js"],e["prop-types"],e.react);for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(this,function(e,t,n){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(t,n){t.exports=e},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(4),f=r(l),s=n(0),p=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(s),d=n(3),y=r(d),b=function(e){function t(){var e,n,r,i;o(this,t);for(var a=arguments.length,l=Array(a),f=0;f<a;f++)l[f]=arguments[f];return n=r=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),r.onClickPick=function(e){e.stopPropagation(),e.preventDefault();var t=r.props,n=t.apikey,o=t.onSuccess,u=t.onError,i=t.options,c=t.mode,a=t.file,l=t.security,f=t.cname,s=t.sessionCache,p=function(e){"function"==typeof o?o(e):console.log(e)},d=function(e){"function"==typeof u?u(e):console.error(e)};r.initClient(c,n,i,a,l,f,s).then(p).catch(d)},r.initClient=function(e,t,n,r,o,u,i){var a=n.url,l=n.handle;delete n.handle,delete n.url;var f=p.init(t,{security:o,cname:u,sessionCache:i});return"transform"===e?new Promise(function(e,t){try{e(f.transform(l,n))}catch(e){t(e)}}):"retrieve"===e?f.retrieve(l,n):"metadata"===e?f.metadata(l,n):"storeUrl"===e?f.storeURL(a,n):"upload"===e?f.upload(r,n):"remove"===e?f.remove(l,o):new Promise(function(e){f.picker(c({},n,{onUploadDone:e})).open()})},i=n,u(r,i)}return i(t,e),a(t,[{key:"render",value:function(){var e=this.props,t=e.buttonClass,n=e.buttonText,r=e.link,o=e.children,u=e.render;if(u)return f.default.createElement(u,{onPick:this.onClickPick});var i=r?"a":"button";return f.default.createElement(i,{name:"filestack",onClick:this.onClickPick,className:t},o||n)}}]),t}(l.Component);b.defaultProps={file:null,link:!1,buttonText:"Pick file",buttonClass:"",onSuccess:function(e){return console.log(e)},onError:function(e){return console.error(e)},mode:"pick",options:{},security:null,children:null,render:null,cname:null,sessionCache:!1},b.propTypes={file:y.default.objectOf(y.default.any),apikey:y.default.string.isRequired,link:y.default.bool,mode:y.default.string,buttonText:y.default.string,buttonClass:y.default.string,onSuccess:y.default.func,onError:y.default.func,options:y.default.objectOf(y.default.any),security:y.default.objectOf(y.default.any),children:y.default.node,render:y.default.func,cname:y.default.string,sessionCache:y.default.bool},t.default=b},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.client=void 0;var r=n(0),o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(r),u=n(1),i=function(e){return e&&e.__esModule?e:{default:e}}(u);t.default=i.default,t.client=o},function(e,n){e.exports=t},function(e,t){e.exports=n}])});
//# sourceMappingURL=filestack-react.js.map