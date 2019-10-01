!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).LottiePalette=e()}(this,(function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var r=/rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/i,n=/^#[0-9a-f]{3,6}$/i;return function(){function a(t){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),!t)throw"[lottie-palette] No element found.";this.$element=t,this.colorMap={},this.linearGradMap={},this.updateMaps()}var o,i,l;return o=a,l=[{key:"_lineGradString2Data",value:function(t){return t.split("-").map((function(t){return t.split("|")}))}},{key:"_lineGradString2CSS",value:function(t){var e=a._lineGradString2Data(t),r=[];return e.forEach((function(t){var e,n,a,o="";t[2]?(e=t[1],n=t[2],a=e.substring(4,e.length-1),o="rgba(".concat(a,",").concat(n,")")):o=t[1],o+=" ".concat(t[0]),r.push(o)})),"".concat("linear-gradient(").concat(r.join(",")).concat(")")}}],(i=[{key:"updateMaps",value:function(){this._generateColorMap(),this._generateLineGradMap()}},{key:"_generateColorMap",value:function(){for(var t=this.$element.querySelectorAll('path[fill^="rgb"]'),e=0,r=t.length;e<r;e++){var n=t[e],a=window.encodeURIComponent(window.getComputedStyle(n).fill.replace(/\s+/g,""));a in this.colorMap?this.colorMap[a].push(n):this.colorMap[a]=[n]}}},{key:"_generateLineGradMap",value:function(){for(var t=this.$element.querySelectorAll("defs > linearGradient"),e=0,r=t.length;e<r;e++){for(var n=t[e],a=n.children,o=[],i=0,l=a.length;i<l;i++){var c=a[i],u=c.getAttribute("offset"),s=c.getAttribute("stop-color"),f=c.getAttribute("stop-opacity");o.push([u,s,f].join("|"))}var p=o.join("-");p in this.linearGradMap?this.linearGradMap[p].push(n):this.linearGradMap[p]=[n]}}},{key:"getInitialColors",value:function(){var t=[];for(var e in this.colorMap)this.colorMap.hasOwnProperty(e)&&t.push(window.decodeURIComponent(e));return t}},{key:"getLinearGradients",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"css",e=[];for(var r in this.linearGradMap){if(!this.linearGradMap.hasOwnProperty(r))return;var n=void 0;n="css"===t?a._lineGradString2CSS(r):r,e.push(n)}return e}},{key:"updateColor",value:function(t,e,a){var o,i=t.replace(/\s+/g,"");if(o=i,n.test(o))i=function(t){t=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(t,e,r,n){return e+e+r+r+n+n}));var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?"rgb(".concat(parseInt(e[1],16),",").concat(parseInt(e[2],16),",").concat(parseInt(e[3],16),")"):""}(i);else if(!function(t){return r.test(t)}(i))throw"[lottie-palette] Color key ".concat(t," is invalid");var l=window.encodeURIComponent(t.replace(/\s+/g,""));if(!(l in this.colorMap))throw'[lottie-palette] No such color key "'.concat(t,'" in the origin svg file!');this.colorMap[l].forEach((function(t){t.style.fill=e.replace(/\s+/g,"")})),a&&this.updateLinearGradColor(t,e)}},{key:"updateLinearGradColor",value:function(e,r){var n=this,o=function(t){if(!n.linearGradMap.hasOwnProperty(t))return{v:void 0};var o=a._lineGradString2Data(t),i=[];o.forEach((function(t,r){t[1]===e&&i.push(r)})),i.length>0&&n.linearGradMap[t].forEach((function(t){i.forEach((function(e){t.children[e].setAttribute("stop-color",r)}))}))};for(var i in this.linearGradMap){var l=o(i);if("object"===t(l))return l.v}}},{key:"updateLinearGrad",value:function(t,e){if(!(t in this.linearGradMap))throw'No such linear gradient key "'.concat(t,'" in the origin svg file!');var r=a._lineGradString2Data(e.replace(/\s+/g,""));this.linearGradMap[t].forEach((function(t){for(;t.hasChildNodes();)t.removeChild(t.firstChild);r.forEach((function(e){var r=document.createElementNS("http://www.w3.org/2000/svg","stop");r.setAttribute("offset",e[0]),r.setAttribute("stop-color",e[1]),r.setAttribute("stop-opacity",e[2]),t.appendChild(r)}))}))}}])&&e(o.prototype,i),l&&e(o,l),a}()}));
