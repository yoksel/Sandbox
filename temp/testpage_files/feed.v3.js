/* ---------------------------------------------------------------------------------
   file-start: js/feed/feed.v3.js 
*/

/* ---------------------------------------------------------------------------------
   file-start: js/core/object.js 
*/

;(function() {
    'use strict';

    LJ.define('LJ.Object');

    /**
     * Return a copy of the object only containing the whitelisted properties.
     * @param {Object} obj Object source
     * @param {String} keys* Keys which should be picked from source object
     * @return {Object} Copy of source object that contains only whitelisted keys
     */
    LJ.Object.pick = function(obj) {
        var copy = {},
            keys = Array.prototype.concat.apply(
                [], Array.prototype.slice.call(arguments, 1)
            );

        keys.forEach(function (key) {
            if (key in obj) {
                copy[key] = obj[key];
            }
        });

        return copy;
    };

    /**
     * Invert the keys and values of an object. The values must be serializable.
     * @param  {Object} obj Source object
     * @return {Object}     Result object
     */
    LJ.Object.invert = function (obj) {
        return Object.keys(obj).reduce(function (result, key) {
            result[ obj[key] ] = key;
            return result;
        }, {});
    };

})();
;

/* file-end: js/core/object.js 
----------------------------------------------------------------------------------*/

/* ---------------------------------------------------------------------------------
   file-start: js/lib/angular/1.2.18/angular.min.js 
*/

/*
 AngularJS v1.2.18
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(T,V,s){'use strict';function t(b){return function(){var a=arguments[0],c,a="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.2.18/"+(b?b+"/":"")+a;for(c=1;c<arguments.length;c++)a=a+(1==c?"?":"&")+"p"+(c-1)+"="+encodeURIComponent("function"==typeof arguments[c]?arguments[c].toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof arguments[c]?"undefined":"string"!=typeof arguments[c]?JSON.stringify(arguments[c]):arguments[c]);return Error(a)}}function db(b){if(null==b||Ea(b))return!1;
var a=b.length;return 1===b.nodeType&&a?!0:C(b)||O(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function q(b,a,c){var d;if(b)if(Q(b))for(d in b)"prototype"==d||("length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d))||a.call(c,b[d],d);else if(b.forEach&&b.forEach!==q)b.forEach(a,c);else if(db(b))for(d=0;d<b.length;d++)a.call(c,b[d],d);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function Wb(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function Sc(b,
a,c){for(var d=Wb(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function Xb(b){return function(a,c){b(c,a)}}function eb(){for(var b=ja.length,a;b;){b--;a=ja[b].charCodeAt(0);if(57==a)return ja[b]="A",ja.join("");if(90==a)ja[b]="0";else return ja[b]=String.fromCharCode(a+1),ja.join("")}ja.unshift("0");return ja.join("")}function Yb(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function J(b){var a=b.$$hashKey;q(arguments,function(a){a!==b&&q(a,function(a,c){b[c]=a})});Yb(b,a);return b}function Z(b){return parseInt(b,
10)}function Zb(b,a){return J(new (J(function(){},{prototype:b})),a)}function y(){}function Fa(b){return b}function $(b){return function(){return b}}function D(b){return"undefined"===typeof b}function B(b){return"undefined"!==typeof b}function U(b){return null!=b&&"object"===typeof b}function C(b){return"string"===typeof b}function yb(b){return"number"===typeof b}function Na(b){return"[object Date]"===wa.call(b)}function Q(b){return"function"===typeof b}function fb(b){return"[object RegExp]"===wa.call(b)}
function Ea(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function Tc(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function Uc(b,a,c){var d=[];q(b,function(b,g,f){d.push(a.call(c,b,g,f))});return d}function Oa(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function Pa(b,a){var c=Oa(b,a);0<=c&&b.splice(c,1);return a}function Ga(b,a,c,d){if(Ea(b)||b&&b.$evalAsync&&b.$watch)throw Qa("cpws");if(a){if(b===a)throw Qa("cpi");c=c||[];
d=d||[];if(U(b)){var e=Oa(c,b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(O(b))for(var g=a.length=0;g<b.length;g++)e=Ga(b[g],null,c,d),U(b[g])&&(c.push(b[g]),d.push(e)),a.push(e);else{var f=a.$$hashKey;q(a,function(b,c){delete a[c]});for(g in b)e=Ga(b[g],null,c,d),U(b[g])&&(c.push(b[g]),d.push(e)),a[g]=e;Yb(a,f)}}else(a=b)&&(O(b)?a=Ga(b,[],c,d):Na(b)?a=new Date(b.getTime()):fb(b)?a=RegExp(b.source):U(b)&&(a=Ga(b,{},c,d)));return a}function ka(b,a){if(O(b)){a=a||[];for(var c=0;c<b.length;c++)a[c]=
b[c]}else if(U(b))for(c in a=a||{},b)!zb.call(b,c)||"$"===c.charAt(0)&&"$"===c.charAt(1)||(a[c]=b[c]);return a||b}function xa(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(O(b)){if(!O(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!xa(b[d],a[d]))return!1;return!0}}else{if(Na(b))return Na(a)&&b.getTime()==a.getTime();if(fb(b)&&fb(a))return b.toString()==a.toString();if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&
a.$watch||Ea(b)||Ea(a)||O(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!Q(b[d])){if(!xa(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==s&&!Q(a[d]))return!1;return!0}return!1}function $b(){return V.securityPolicy&&V.securityPolicy.isActive||V.querySelector&&!(!V.querySelector("[ng-csp]")&&!V.querySelector("[data-ng-csp]"))}function Ab(b,a){var c=2<arguments.length?ya.call(arguments,2):[];return!Q(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?
a.apply(b,c.concat(ya.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Vc(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)?c=s:Ea(a)?c="$WINDOW":a&&V===a?c="$DOCUMENT":a&&(a.$evalAsync&&a.$watch)&&(c="$SCOPE");return c}function ra(b,a){return"undefined"===typeof b?s:JSON.stringify(b,Vc,a?"  ":null)}function ac(b){return C(b)?JSON.parse(b):b}function Ra(b){"function"===typeof b?b=!0:b&&0!==b.length?(b=L(""+b),b=!("f"==b||"0"==b||"false"==
b||"no"==b||"n"==b||"[]"==b)):b=!1;return b}function ga(b){b=w(b).clone();try{b.empty()}catch(a){}var c=w("<div>").append(b).html();try{return 3===b[0].nodeType?L(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+L(b)})}catch(d){return L(c)}}function bc(b){try{return decodeURIComponent(b)}catch(a){}}function cc(b){var a={},c,d;q((b||"").split("&"),function(b){b&&(c=b.split("="),d=bc(c[0]),B(d)&&(b=B(c[1])?bc(c[1]):!0,a[d]?O(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}
function Bb(b){var a=[];q(b,function(b,d){O(b)?q(b,function(b){a.push(za(d,!0)+(!0===b?"":"="+za(b,!0)))}):a.push(za(d,!0)+(!0===b?"":"="+za(b,!0)))});return a.length?a.join("&"):""}function gb(b){return za(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function za(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}function Wc(b,a){function c(a){a&&d.push(a)}var d=[b],e,g,f=["ng:app",
"ng-app","x-ng-app","data-ng-app"],k=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;q(f,function(a){f[a]=!0;c(V.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(q(b.querySelectorAll("."+a),c),q(b.querySelectorAll("."+a+"\\:"),c),q(b.querySelectorAll("["+a+"]"),c))});q(d,function(a){if(!e){var b=k.exec(" "+a.className+" ");b?(e=a,g=(b[2]||"").replace(/\s+/g,",")):q(a.attributes,function(b){!e&&f[b.name]&&(e=a,g=b.value)})}});e&&a(e,g?[g]:[])}function dc(b,a){var c=function(){b=w(b);if(b.injector()){var c=
b[0]===V?"document":ga(b);throw Qa("btstrpd",c);}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");c=ec(a);c.invoke(["$rootScope","$rootElement","$compile","$injector","$animate",function(a,b,c,d,e){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},d=/^NG_DEFER_BOOTSTRAP!/;if(T&&!d.test(T.name))return c();T.name=T.name.replace(d,"");Sa.resumeBootstrap=function(b){q(b,function(b){a.push(b)});c()}}function hb(b,a){a=a||"_";return b.replace(Xc,function(b,
d){return(d?a:"")+b.toLowerCase()})}function Cb(b,a,c){if(!b)throw Qa("areq",a||"?",c||"required");return b}function Ta(b,a,c){c&&O(b)&&(b=b[b.length-1]);Cb(Q(b),a,"not a function, got "+(b&&"object"==typeof b?b.constructor.name||"Object":typeof b));return b}function Aa(b,a){if("hasOwnProperty"===b)throw Qa("badname",a);}function fc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,g=a.length,f=0;f<g;f++)d=a[f],b&&(b=(e=b)[d]);return!c&&Q(b)?Ab(e,b):b}function Db(b){var a=b[0];b=b[b.length-1];if(a===
b)return w(a);var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return w(c)}function Yc(b){var a=t("$injector"),c=t("ng");b=b.angular||(b.angular={});b.$$minErr=b.$$minErr||t;return b.module||(b.module=function(){var b={};return function(e,g,f){if("hasOwnProperty"===e)throw c("badname","module");g&&b.hasOwnProperty(e)&&(b[e]=null);return b[e]||(b[e]=function(){function b(a,d,e){return function(){c[e||"push"]([a,d,arguments]);return n}}if(!g)throw a("nomod",e);var c=[],d=[],l=b("$injector",
"invoke"),n={_invokeQueue:c,_runBlocks:d,requires:g,name:e,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:b("$provide","value"),constant:b("$provide","constant","unshift"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:l,run:function(a){d.push(a);return this}};f&&l(f);return n}())}}())}function Zc(b){J(b,{bootstrap:dc,
copy:Ga,extend:J,equals:xa,element:w,forEach:q,injector:ec,noop:y,bind:Ab,toJson:ra,fromJson:ac,identity:Fa,isUndefined:D,isDefined:B,isString:C,isFunction:Q,isObject:U,isNumber:yb,isElement:Tc,isArray:O,version:$c,isDate:Na,lowercase:L,uppercase:Ha,callbacks:{counter:0},$$minErr:t,$$csp:$b});Ua=Yc(T);try{Ua("ngLocale")}catch(a){Ua("ngLocale",[]).provider("$locale",ad)}Ua("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:bd});a.provider("$compile",gc).directive({a:cd,input:hc,textarea:hc,
form:dd,script:ed,select:fd,style:gd,option:hd,ngBind:id,ngBindHtml:jd,ngBindTemplate:kd,ngClass:ld,ngClassEven:md,ngClassOdd:nd,ngCloak:od,ngController:pd,ngForm:qd,ngHide:rd,ngIf:sd,ngInclude:td,ngInit:ud,ngNonBindable:vd,ngPluralize:wd,ngRepeat:xd,ngShow:yd,ngStyle:zd,ngSwitch:Ad,ngSwitchWhen:Bd,ngSwitchDefault:Cd,ngOptions:Dd,ngTransclude:Ed,ngModel:Fd,ngList:Gd,ngChange:Hd,required:ic,ngRequired:ic,ngValue:Id}).directive({ngInclude:Jd}).directive(Eb).directive(jc);a.provider({$anchorScroll:Kd,
$animate:Ld,$browser:Md,$cacheFactory:Nd,$controller:Od,$document:Pd,$exceptionHandler:Qd,$filter:kc,$interpolate:Rd,$interval:Sd,$http:Td,$httpBackend:Ud,$location:Vd,$log:Wd,$parse:Xd,$rootScope:Yd,$q:Zd,$sce:$d,$sceDelegate:ae,$sniffer:be,$templateCache:ce,$timeout:de,$window:ee,$$rAF:fe,$$asyncCallback:ge})}])}function Va(b){return b.replace(he,function(a,b,d,e){return e?d.toUpperCase():d}).replace(ie,"Moz$1")}function Fb(b,a,c,d){function e(b){var e=c&&b?[this.filter(b)]:[this],m=a,h,l,n,p,r,
v;if(!d||null!=b)for(;e.length;)for(h=e.shift(),l=0,n=h.length;l<n;l++)for(p=w(h[l]),m?p.triggerHandler("$destroy"):m=!m,r=0,p=(v=p.children()).length;r<p;r++)e.push(Ba(v[r]));return g.apply(this,arguments)}var g=Ba.fn[b],g=g.$original||g;e.$original=g;Ba.fn[b]=e}function R(b){if(b instanceof R)return b;C(b)&&(b=aa(b));if(!(this instanceof R)){if(C(b)&&"<"!=b.charAt(0))throw Gb("nosel");return new R(b)}if(C(b)){var a=b;b=V;var c;if(c=je.exec(a))b=[b.createElement(c[1])];else{var d=b,e;b=d.createDocumentFragment();
c=[];if(Hb.test(a)){d=b.appendChild(d.createElement("div"));e=(ke.exec(a)||["",""])[1].toLowerCase();e=da[e]||da._default;d.innerHTML="<div>&#160;</div>"+e[1]+a.replace(le,"<$1></$2>")+e[2];d.removeChild(d.firstChild);for(a=e[0];a--;)d=d.lastChild;a=0;for(e=d.childNodes.length;a<e;++a)c.push(d.childNodes[a]);d=b.firstChild;d.textContent=""}else c.push(d.createTextNode(a));b.textContent="";b.innerHTML="";b=c}Ib(this,b);w(V.createDocumentFragment()).append(this)}else Ib(this,b)}function Jb(b){return b.cloneNode(!0)}
function Ia(b){lc(b);var a=0;for(b=b.childNodes||[];a<b.length;a++)Ia(b[a])}function mc(b,a,c,d){if(B(d))throw Gb("offargs");var e=la(b,"events");la(b,"handle")&&(D(a)?q(e,function(a,c){Wa(b,c,a);delete e[c]}):q(a.split(" "),function(a){D(c)?(Wa(b,a,e[a]),delete e[a]):Pa(e[a]||[],c)}))}function lc(b,a){var c=b[ib],d=Xa[c];d&&(a?delete Xa[c].data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),mc(b)),delete Xa[c],b[ib]=s))}function la(b,a,c){var d=b[ib],d=Xa[d||-1];if(B(c))d||(b[ib]=d=++me,
d=Xa[d]={}),d[a]=c;else return d&&d[a]}function nc(b,a,c){var d=la(b,"data"),e=B(c),g=!e&&B(a),f=g&&!U(a);d||f||la(b,"data",d={});if(e)d[a]=c;else if(g){if(f)return d&&d[a];J(d,a)}else return d}function Kb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function jb(b,a){a&&b.setAttribute&&q(a.split(" "),function(a){b.setAttribute("class",aa((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+aa(a)+" "," ")))})}
function kb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(a.split(" "),function(a){a=aa(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",aa(c))}}function Ib(b,a){if(a){a=a.nodeName||!B(a.length)||Ea(a)?[a]:a;for(var c=0;c<a.length;c++)b.push(a[c])}}function oc(b,a){return lb(b,"$"+(a||"ngController")+"Controller")}function lb(b,a,c){b=w(b);9==b[0].nodeType&&(b=b.find("html"));for(a=O(a)?a:[a];b.length;){for(var d=b[0],e=0,g=a.length;e<
g;e++)if((c=b.data(a[e]))!==s)return c;b=w(d.parentNode||11===d.nodeType&&d.host)}}function pc(b){for(var a=0,c=b.childNodes;a<c.length;a++)Ia(c[a]);for(;b.firstChild;)b.removeChild(b.firstChild)}function qc(b,a){var c=mb[a.toLowerCase()];return c&&rc[b.nodeName]&&c}function ne(b,a){var c=function(c,e){c.preventDefault||(c.preventDefault=function(){c.returnValue=!1});c.stopPropagation||(c.stopPropagation=function(){c.cancelBubble=!0});c.target||(c.target=c.srcElement||V);if(D(c.defaultPrevented)){var g=
c.preventDefault;c.preventDefault=function(){c.defaultPrevented=!0;g.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented||!1===c.returnValue};var f=ka(a[e||c.type]||[]);q(f,function(a){a.call(b,c)});8>=S?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function Ja(b){var a=typeof b,c;"object"==a&&null!==b?"function"==typeof(c=b.$$hashKey)?c=
b.$$hashKey():c===s&&(c=b.$$hashKey=eb()):c=b;return a+":"+c}function Ya(b){q(b,this.put,this)}function sc(b){var a,c;"function"==typeof b?(a=b.$inject)||(a=[],b.length&&(c=b.toString().replace(oe,""),c=c.match(pe),q(c[1].split(qe),function(b){b.replace(re,function(b,c,d){a.push(d)})})),b.$inject=a):O(b)?(c=b.length-1,Ta(b[c],"fn"),a=b.slice(0,c)):Ta(b,"fn",!0);return a}function ec(b){function a(a){return function(b,c){if(U(b))q(b,Xb(a));else return a(b,c)}}function c(a,b){Aa(a,"service");if(Q(b)||
O(b))b=n.instantiate(b);if(!b.$get)throw Za("pget",a);return l[a+k]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[],c,d,g,k;q(a,function(a){if(!h.get(a)){h.put(a,!0);try{if(C(a))for(c=Ua(a),b=b.concat(e(c.requires)).concat(c._runBlocks),d=c._invokeQueue,g=0,k=d.length;g<k;g++){var f=d[g],m=n.get(f[0]);m[f[1]].apply(m,f[2])}else Q(a)?b.push(n.invoke(a)):O(a)?b.push(n.invoke(a)):Ta(a,"module")}catch(l){throw O(a)&&(a=a[a.length-1]),l.message&&(l.stack&&-1==l.stack.indexOf(l.message))&&
(l=l.message+"\n"+l.stack),Za("modulerr",a,l.stack||l.message||l);}}});return b}function g(a,b){function c(d){if(a.hasOwnProperty(d)){if(a[d]===f)throw Za("cdep",d+" <- "+m.join(" <- "));return a[d]}try{return m.unshift(d),a[d]=f,a[d]=b(d)}catch(e){throw a[d]===f&&delete a[d],e;}finally{m.shift()}}function d(a,b,e){var g=[],k=sc(a),f,m,h;m=0;for(f=k.length;m<f;m++){h=k[m];if("string"!==typeof h)throw Za("itkn",h);g.push(e&&e.hasOwnProperty(h)?e[h]:c(h))}a.$inject||(a=a[f]);return a.apply(b,g)}return{invoke:d,
instantiate:function(a,b){var c=function(){},e;c.prototype=(O(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return U(e)||Q(e)?e:c},get:c,annotate:sc,has:function(b){return l.hasOwnProperty(b+k)||a.hasOwnProperty(b)}}}var f={},k="Provider",m=[],h=new Ya,l={$provide:{provider:a(c),factory:a(d),service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),value:a(function(a,b){return d(a,$(b))}),constant:a(function(a,b){Aa(a,"constant");l[a]=b;p[a]=b}),decorator:function(a,
b){var c=n.get(a+k),d=c.$get;c.$get=function(){var a=r.invoke(d,c);return r.invoke(b,null,{$delegate:a})}}}},n=l.$injector=g(l,function(){throw Za("unpr",m.join(" <- "));}),p={},r=p.$injector=g(p,function(a){a=n.get(a+k);return r.invoke(a.$get,a)});q(e(b),function(a){r.invoke(a||y)});return r}function Kd(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;q(a,function(a){b||"a"!==L(a.nodeName)||(b=a)});return b}
function g(){var b=c.hash(),d;b?(d=f.getElementById(b))?d.scrollIntoView():(d=e(f.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):a.scrollTo(0,0)}var f=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(g)});return g}]}function ge(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function se(b,a,c,d){function e(a){try{a.apply(null,ya.call(arguments,1))}finally{if(v--,0===v)for(;I.length;)try{I.pop()()}catch(b){c.error(b)}}}
function g(a,b){(function ba(){q(x,function(a){a()});u=b(ba,a)})()}function f(){z=null;M!=k.url()&&(M=k.url(),q(ha,function(a){a(k.url())}))}var k=this,m=a[0],h=b.location,l=b.history,n=b.setTimeout,p=b.clearTimeout,r={};k.isMock=!1;var v=0,I=[];k.$$completeOutstandingRequest=e;k.$$incOutstandingRequestCount=function(){v++};k.notifyWhenNoOutstandingRequests=function(a){q(x,function(a){a()});0===v?a():I.push(a)};var x=[],u;k.addPollFn=function(a){D(u)&&g(100,n);x.push(a);return a};var M=h.href,F=a.find("base"),
z=null;k.url=function(a,c){h!==b.location&&(h=b.location);l!==b.history&&(l=b.history);if(a){if(M!=a)return M=a,d.history?c?l.replaceState(null,"",a):(l.pushState(null,"",a),F.attr("href",F.attr("href"))):(z=a,c?h.replace(a):h.href=a),k}else return z||h.href.replace(/%27/g,"'")};var ha=[],P=!1;k.onUrlChange=function(a){if(!P){if(d.history)w(b).on("popstate",f);if(d.hashchange)w(b).on("hashchange",f);else k.addPollFn(f);P=!0}ha.push(a);return a};k.baseHref=function(){var a=F.attr("href");return a?
a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var N={},ca="",E=k.baseHref();k.cookies=function(a,b){var d,e,g,k;if(a)b===s?m.cookie=escape(a)+"=;path="+E+";expires=Thu, 01 Jan 1970 00:00:00 GMT":C(b)&&(d=(m.cookie=escape(a)+"="+escape(b)+";path="+E).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(m.cookie!==ca)for(ca=m.cookie,d=ca.split("; "),N={},g=0;g<d.length;g++)e=d[g],k=e.indexOf("="),0<k&&(a=unescape(e.substring(0,
k)),N[a]===s&&(N[a]=unescape(e.substring(k+1))));return N}};k.defer=function(a,b){var c;v++;c=n(function(){delete r[c];e(a)},b||0);r[c]=!0;return c};k.defer.cancel=function(a){return r[a]?(delete r[a],p(a),e(y),!0):!1}}function Md(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new se(b,d,a,c)}]}function Nd(){this.$get=function(){function b(b,d){function e(a){a!=n&&(p?p==a&&(p=a.n):p=a,g(a.n,a.p),g(a,n),n=a,n.n=null)}function g(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in
a)throw t("$cacheFactory")("iid",b);var f=0,k=J({},d,{id:b}),m={},h=d&&d.capacity||Number.MAX_VALUE,l={},n=null,p=null;return a[b]={put:function(a,b){if(h<Number.MAX_VALUE){var c=l[a]||(l[a]={key:a});e(c)}if(!D(b))return a in m||f++,m[a]=b,f>h&&this.remove(p.key),b},get:function(a){if(h<Number.MAX_VALUE){var b=l[a];if(!b)return;e(b)}return m[a]},remove:function(a){if(h<Number.MAX_VALUE){var b=l[a];if(!b)return;b==n&&(n=b.p);b==p&&(p=b.n);g(b.n,b.p);delete l[a]}delete m[a];f--},removeAll:function(){m=
{};f=0;l={};n=p=null},destroy:function(){l=k=m=null;delete a[b]},info:function(){return J({},k,{size:f})}}}var a={};b.info=function(){var b={};q(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function ce(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function gc(b,a){var c={},d="Directive",e=/^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/,g=/(([\d\w_\-]+)(?:\:([^;]+))?;?)/,f=/^(on[a-z]+|formaction)$/;this.directive=function m(a,e){Aa(a,"directive");C(a)?
(Cb(e,"directiveFactory"),c.hasOwnProperty(a)||(c[a]=[],b.factory(a+d,["$injector","$exceptionHandler",function(b,d){var e=[];q(c[a],function(c,g){try{var f=b.invoke(c);Q(f)?f={compile:$(f)}:!f.compile&&f.link&&(f.compile=$(f.link));f.priority=f.priority||0;f.index=g;f.name=f.name||a;f.require=f.require||f.controller&&f.name;f.restrict=f.restrict||"A";e.push(f)}catch(m){d(m)}});return e}])),c[a].push(e)):q(a,Xb(m));return this};this.aHrefSanitizationWhitelist=function(b){return B(b)?(a.aHrefSanitizationWhitelist(b),
this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return B(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};this.$get=["$injector","$interpolate","$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,l,n,p,r,v,I,x,u,M,F){function z(a,b,c,d,e){a instanceof w||(a=w(a));q(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&(a[c]=w(b).wrap("<span></span>").parent()[0])});
var g=P(a,b,a,c,d,e);ha(a,"ng-scope");return function(b,c,d,e){Cb(b,"scope");var f=c?Ka.clone.call(a):a;q(d,function(a,b){f.data("$"+b+"Controller",a)});d=0;for(var m=f.length;d<m;d++){var h=f[d].nodeType;1!==h&&9!==h||f.eq(d).data("$scope",b)}c&&c(f,b);g&&g(b,f,f,e);return f}}function ha(a,b){try{a.addClass(b)}catch(c){}}function P(a,b,c,d,e,g){function f(a,c,d,e){var g,h,l,r,n,p,v;g=c.length;var K=Array(g);for(n=0;n<g;n++)K[n]=c[n];v=n=0;for(p=m.length;n<p;v++)h=K[v],c=m[n++],g=m[n++],l=w(h),c?
(c.scope?(r=a.$new(),l.data("$scope",r)):r=a,l=c.transcludeOnThisElement?N(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?N(a,b):null,c(g,r,h,d,l)):g&&g(a,h.childNodes,s,e)}for(var m=[],h,l,r,n,p=0;p<a.length;p++)h=new Lb,l=ca(a[p],[],h,0===p?d:s,e),(g=l.length?H(l,a[p],h,b,c,null,[],[],g):null)&&g.scope&&ha(w(a[p]),"ng-scope"),h=g&&g.terminal||!(r=a[p].childNodes)||!r.length?null:P(r,g?(g.transcludeOnThisElement||!g.templateOnThisElement)&&g.transclude:b),m.push(g,h),n=n||g||h,g=null;return n?
f:null}function N(a,b,c){return function(d,e,g){var f=!1;d||(d=a.$new(),f=d.$$transcluded=!0);e=b(d,e,g,c);if(f)e.on("$destroy",function(){d.$destroy()});return e}}function ca(a,b,c,d,f){var m=c.$attr,h;switch(a.nodeType){case 1:ba(b,ma(La(a).toLowerCase()),"E",d,f);var l,r,n;h=a.attributes;for(var p=0,v=h&&h.length;p<v;p++){var x=!1,I=!1;l=h[p];if(!S||8<=S||l.specified){r=l.name;n=ma(r);W.test(n)&&(r=hb(n.substr(6),"-"));var M=n.replace(/(Start|End)$/,"");n===M+"Start"&&(x=r,I=r.substr(0,r.length-
5)+"end",r=r.substr(0,r.length-6));n=ma(r.toLowerCase());m[n]=r;c[n]=l=aa(l.value);qc(a,n)&&(c[n]=!0);R(a,b,l,n);ba(b,n,"A",d,f,x,I)}}a=a.className;if(C(a)&&""!==a)for(;h=g.exec(a);)n=ma(h[2]),ba(b,n,"C",d,f)&&(c[n]=aa(h[3])),a=a.substr(h.index+h[0].length);break;case 3:t(b,a.nodeValue);break;case 8:try{if(h=e.exec(a.nodeValue))n=ma(h[1]),ba(b,n,"M",d,f)&&(c[n]=aa(h[2]))}catch(u){}}b.sort(D);return b}function E(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ia("uterdir",
b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return w(d)}function A(a,b,c){return function(d,e,g,f,h){e=E(e[0],b,c);return a(d,e,g,f,h)}}function H(a,c,d,e,g,f,m,n,p){function x(a,b,c,d){if(a){c&&(a=A(a,c,d));a.require=G.require;a.directiveName=na;if(N===G||G.$$isolateScope)a=uc(a,{isolateScope:!0});m.push(a)}if(b){c&&(b=A(b,c,d));b.require=G.require;b.directiveName=na;if(N===G||G.$$isolateScope)b=uc(b,{isolateScope:!0});n.push(b)}}
function I(a,b,c,d){var e,g="data",f=!1;if(C(b)){for(;"^"==(e=b.charAt(0))||"?"==e;)b=b.substr(1),"^"==e&&(g="inheritedData"),f=f||"?"==e;e=null;d&&"data"===g&&(e=d[b]);e=e||c[g]("$"+b+"Controller");if(!e&&!f)throw ia("ctreq",b,a);}else O(b)&&(e=[],q(b,function(b){e.push(I(a,b,c,d))}));return e}function M(a,e,g,f,p){function x(a,b){var c;2>arguments.length&&(b=a,a=s);Ca&&(c=ca);return p(a,b,c)}var u,K,z,F,A,E,ca={},nb;u=c===g?d:ka(d,new Lb(w(g),d.$attr));K=u.$$element;if(N){var ba=/^\s*([@=&])(\??)\s*(\w*)\s*$/;
f=w(g);E=e.$new(!0);!H||H!==N&&H!==N.$$originalDirective?f.data("$isolateScopeNoTemplate",E):f.data("$isolateScope",E);ha(f,"ng-isolate-scope");q(N.scope,function(a,c){var d=a.match(ba)||[],g=d[3]||c,f="?"==d[2],d=d[1],m,l,n,p;E.$$isolateBindings[c]=d+g;switch(d){case "@":u.$observe(g,function(a){E[c]=a});u.$$observers[g].$$scope=e;u[g]&&(E[c]=b(u[g])(e));break;case "=":if(f&&!u[g])break;l=r(u[g]);p=l.literal?xa:function(a,b){return a===b};n=l.assign||function(){m=E[c]=l(e);throw ia("nonassign",u[g],
N.name);};m=E[c]=l(e);E.$watch(function(){var a=l(e);p(a,E[c])||(p(a,m)?n(e,a=E[c]):E[c]=a);return m=a},null,l.literal);break;case "&":l=r(u[g]);E[c]=function(a){return l(e,a)};break;default:throw ia("iscp",N.name,c,a);}})}nb=p&&x;P&&q(P,function(a){var b={$scope:a===N||a.$$isolateScope?E:e,$element:K,$attrs:u,$transclude:nb},c;A=a.controller;"@"==A&&(A=u[a.name]);c=v(A,b);ca[a.name]=c;Ca||K.data("$"+a.name+"Controller",c);a.controllerAs&&(b.$scope[a.controllerAs]=c)});f=0;for(z=m.length;f<z;f++)try{F=
m[f],F(F.isolateScope?E:e,K,u,F.require&&I(F.directiveName,F.require,K,ca),nb)}catch(G){l(G,ga(K))}f=e;N&&(N.template||null===N.templateUrl)&&(f=E);a&&a(f,g.childNodes,s,p);for(f=n.length-1;0<=f;f--)try{F=n[f],F(F.isolateScope?E:e,K,u,F.require&&I(F.directiveName,F.require,K,ca),nb)}catch(B){l(B,ga(K))}}p=p||{};for(var u=-Number.MAX_VALUE,F,P=p.controllerDirectives,N=p.newIsolateScopeDirective,H=p.templateDirective,ba=p.nonTlbTranscludeDirective,D=!1,J=!1,Ca=p.hasElementTranscludeDirective,t=d.$$element=
w(c),G,na,X,T=e,R,S=0,oa=a.length;S<oa;S++){G=a[S];var W=G.$$start,Y=G.$$end;W&&(t=E(c,W,Y));X=s;if(u>G.priority)break;if(X=G.scope)F=F||G,G.templateUrl||(L("new/isolated scope",N,G,t),U(X)&&(N=G));na=G.name;!G.templateUrl&&G.controller&&(X=G.controller,P=P||{},L("'"+na+"' controller",P[na],G,t),P[na]=G);if(X=G.transclude)D=!0,G.$$tlb||(L("transclusion",ba,G,t),ba=G),"element"==X?(Ca=!0,u=G.priority,X=E(c,W,Y),t=d.$$element=w(V.createComment(" "+na+": "+d[na]+" ")),c=t[0],ob(g,w(ya.call(X,0)),c),
T=z(X,e,u,f&&f.name,{nonTlbTranscludeDirective:ba})):(X=w(Jb(c)).contents(),t.empty(),T=z(X,e));if(G.template)if(J=!0,L("template",H,G,t),H=G,X=Q(G.template)?G.template(t,d):G.template,X=Z(X),G.replace){f=G;X=Hb.test(X)?w(aa(X)):[];c=X[0];if(1!=X.length||1!==c.nodeType)throw ia("tplrt",na,"");ob(g,t,c);oa={$attr:{}};X=ca(c,[],oa);var te=a.splice(S+1,a.length-(S+1));N&&tc(X);a=a.concat(X).concat(te);B(d,oa);oa=a.length}else t.html(X);if(G.templateUrl)J=!0,L("template",H,G,t),H=G,G.replace&&(f=G),M=
y(a.splice(S,a.length-S),t,d,g,D&&T,m,n,{controllerDirectives:P,newIsolateScopeDirective:N,templateDirective:H,nonTlbTranscludeDirective:ba}),oa=a.length;else if(G.compile)try{R=G.compile(t,d,T),Q(R)?x(null,R,W,Y):R&&x(R.pre,R.post,W,Y)}catch($){l($,ga(t))}G.terminal&&(M.terminal=!0,u=Math.max(u,G.priority))}M.scope=F&&!0===F.scope;M.transcludeOnThisElement=D;M.templateOnThisElement=J;M.transclude=T;p.hasElementTranscludeDirective=Ca;return M}function tc(a){for(var b=0,c=a.length;b<c;b++)a[b]=Zb(a[b],
{$$isolateScope:!0})}function ba(b,e,g,f,h,r,n){if(e===h)return null;h=null;if(c.hasOwnProperty(e)){var p;e=a.get(e+d);for(var v=0,x=e.length;v<x;v++)try{p=e[v],(f===s||f>p.priority)&&-1!=p.restrict.indexOf(g)&&(r&&(p=Zb(p,{$$start:r,$$end:n})),b.push(p),h=p)}catch(I){l(I)}}return h}function B(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;q(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,g){"class"==g?(ha(e,b),a["class"]=(a["class"]?
a["class"]+" ":"")+b):"style"==g?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==g.charAt(0)||a.hasOwnProperty(g)||(a[g]=b,d[g]=c[g])})}function y(a,b,c,d,e,g,f,h){var m=[],l,r,v=b[0],x=a.shift(),I=J({},x,{templateUrl:null,transclude:null,replace:null,$$originalDirective:x}),M=Q(x.templateUrl)?x.templateUrl(b,c):x.templateUrl;b.empty();n.get(u.getTrustedResourceUrl(M),{cache:p}).success(function(n){var p,u;n=Z(n);if(x.replace){n=Hb.test(n)?w(aa(n)):[];p=n[0];if(1!=
n.length||1!==p.nodeType)throw ia("tplrt",x.name,M);n={$attr:{}};ob(d,b,p);var z=ca(p,[],n);U(x.scope)&&tc(z);a=z.concat(a);B(c,n)}else p=v,b.html(n);a.unshift(I);l=H(a,p,c,e,b,x,g,f,h);q(d,function(a,c){a==p&&(d[c]=b[0])});for(r=P(b[0].childNodes,e);m.length;){n=m.shift();u=m.shift();var F=m.shift(),A=m.shift(),z=b[0];if(u!==v){var E=u.className;h.hasElementTranscludeDirective&&x.replace||(z=Jb(p));ob(F,w(u),z);ha(w(z),E)}u=l.transcludeOnThisElement?N(n,l.transclude,A):A;l(r,n,z,d,u)}m=null}).error(function(a,
b,c,d){throw ia("tpload",d.url);});return function(a,b,c,d,e){a=e;m?(m.push(b),m.push(c),m.push(d),m.push(a)):(l.transcludeOnThisElement&&(a=N(b,l.transclude,e)),l(r,b,c,d,a))}}function D(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function L(a,b,c,d){if(b)throw ia("multidir",b.name,c.name,a,ga(d));}function t(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){var b=a.parent().length;b&&ha(a.parent(),"ng-binding");return function(a,
c){var e=c.parent(),g=e.data("$binding")||[];g.push(d);e.data("$binding",g);b||ha(e,"ng-binding");a.$watch(d,function(a){c[0].nodeValue=a})}}})}function T(a,b){if("srcdoc"==b)return u.HTML;var c=La(a);if("xlinkHref"==b||"FORM"==c&&"action"==b||"IMG"!=c&&("src"==b||"ngSrc"==b))return u.RESOURCE_URL}function R(a,c,d,e){var g=b(d,!0);if(g){if("multiple"===e&&"SELECT"===La(a))throw ia("selmulti",ga(a));c.push({priority:100,compile:function(){return{pre:function(c,d,m){d=m.$$observers||(m.$$observers=
{});if(f.test(e))throw ia("nodomevents");if(g=b(m[e],!0,T(a,e)))m[e]=g(c),(d[e]||(d[e]=[])).$$inter=!0,(m.$$observers&&m.$$observers[e].$$scope||c).$watch(g,function(a,b){"class"===e&&a!=b?m.$updateClass(a,b):m.$set(e,a)})}}}})}}function ob(a,b,c){var d=b[0],e=b.length,g=d.parentNode,f,m;if(a)for(f=0,m=a.length;f<m;f++)if(a[f]==d){a[f++]=c;m=f+e-1;for(var h=a.length;f<h;f++,m++)m<h?a[f]=a[m]:delete a[f];a.length-=e-1;break}g&&g.replaceChild(c,d);a=V.createDocumentFragment();a.appendChild(d);c[w.expando]=
d[w.expando];d=1;for(e=b.length;d<e;d++)g=b[d],w(g).remove(),a.appendChild(g),delete b[d];b[0]=c;b.length=1}function uc(a,b){return J(function(){return a.apply(null,arguments)},a,b)}var Lb=function(a,b){this.$$element=a;this.$attr=b||{}};Lb.prototype={$normalize:ma,$addClass:function(a){a&&0<a.length&&M.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&M.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=vc(a,b),d=vc(b,a);0===c.length?M.removeClass(this.$$element,d):
0===d.length?M.addClass(this.$$element,c):M.setClass(this.$$element,c,d)},$set:function(a,b,c,d){var e=qc(this.$$element[0],a);e&&(this.$$element.prop(a,b),d=e);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=hb(a,"-"));e=La(this.$$element);if("A"===e&&"href"===a||"IMG"===e&&"src"===a)this[a]=b=F(b,"src"===a);!1!==c&&(null===b||b===s?this.$$element.removeAttr(d):this.$$element.attr(d,b));(c=this.$$observers)&&q(c[a],function(a){try{a(b)}catch(c){l(c)}})},$observe:function(a,b){var c=
this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);I.$evalAsync(function(){e.$$inter||b(c[a])});return b}};var Ca=b.startSymbol(),oa=b.endSymbol(),Z="{{"==Ca||"}}"==oa?Fa:function(a){return a.replace(/\{\{/g,Ca).replace(/}}/g,oa)},W=/^ngAttr[A-Z]/;return z}]}function ma(b){return Va(b.replace(ue,""))}function vc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),g=0;a:for(;g<d.length;g++){for(var f=d[g],k=0;k<e.length;k++)if(f==e[k])continue a;c+=(0<c.length?" ":"")+f}return c}function Od(){var b=
{},a=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,d){Aa(a,"controller");U(a)?J(b,a):b[a]=d};this.$get=["$injector","$window",function(c,d){return function(e,g){var f,k,m;C(e)&&(f=e.match(a),k=f[1],m=f[3],e=b.hasOwnProperty(k)?b[k]:fc(g.$scope,k,!0)||fc(d,k,!0),Ta(e,k,!0));f=c.instantiate(e,g);if(m){if(!g||"object"!=typeof g.$scope)throw t("$controller")("noscp",k||e.name,m);g.$scope[m]=f}return f}}]}function Pd(){this.$get=["$window",function(b){return w(b.document)}]}function Qd(){this.$get=
["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function wc(b){var a={},c,d,e;if(!b)return a;q(b.split("\n"),function(b){e=b.indexOf(":");c=L(aa(b.substr(0,e)));d=aa(b.substr(e+1));c&&(a[c]=a[c]?a[c]+(", "+d):d)});return a}function xc(b){var a=U(b)?b:s;return function(c){a||(a=wc(b));return c?a[L(c)]||null:a}}function yc(b,a,c){if(Q(c))return c(b,a);q(c,function(c){b=c(b,a)});return b}function Td(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},
e=this.defaults={transformResponse:[function(d){C(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=ac(d)));return d}],transformRequest:[function(a){return U(a)&&"[object File]"!==wa.call(a)&&"[object Blob]"!==wa.call(a)?ra(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ka(d),put:ka(d),patch:ka(d)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},g=this.interceptors=[],f=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope",
"$q","$injector",function(a,b,c,d,n,p){function r(a){function b(a){var d=J({},a,{data:yc(a.data,a.headers,c.transformResponse)});return 200<=a.status&&300>a.status?d:n.reject(d)}var c={method:"get",transformRequest:e.transformRequest,transformResponse:e.transformResponse},d=function(a){function b(a){var c;q(a,function(b,d){Q(b)&&(c=b(),null!=c?a[d]=c:delete a[d])})}var c=e.headers,d=J({},a.headers),g,f,c=J({},c.common,c[L(a.method)]);b(c);b(d);a:for(g in c){a=L(g);for(f in d)if(L(f)===a)continue a;
d[g]=c[g]}return d}(a);J(c,a);c.headers=d;c.method=Ha(c.method);var g=[function(a){d=a.headers;var c=yc(a.data,xc(d),a.transformRequest);D(a.data)&&q(d,function(a,b){"content-type"===L(b)&&delete d[b]});D(a.withCredentials)&&!D(e.withCredentials)&&(a.withCredentials=e.withCredentials);return v(a,c,d).then(b,b)},s],f=n.when(c);for(q(u,function(a){(a.request||a.requestError)&&g.unshift(a.request,a.requestError);(a.response||a.responseError)&&g.push(a.response,a.responseError)});g.length;){a=g.shift();
var m=g.shift(),f=f.then(a,m)}f.success=function(a){f.then(function(b){a(b.data,b.status,b.headers,c)});return f};f.error=function(a){f.then(null,function(b){a(b.data,b.status,b.headers,c)});return f};return f}function v(c,g,f){function h(a,b,c,e){A&&(200<=a&&300>a?A.put(w,[a,b,wc(c),e]):A.remove(w));p(b,a,c,e);d.$$phase||d.$apply()}function p(a,b,d,e){b=Math.max(b,0);(200<=b&&300>b?u.resolve:u.reject)({data:a,status:b,headers:xc(d),config:c,statusText:e})}function v(){var a=Oa(r.pendingRequests,
c);-1!==a&&r.pendingRequests.splice(a,1)}var u=n.defer(),q=u.promise,A,H,w=I(c.url,c.params);r.pendingRequests.push(c);q.then(v,v);(c.cache||e.cache)&&(!1!==c.cache&&"GET"==c.method)&&(A=U(c.cache)?c.cache:U(e.cache)?e.cache:x);if(A)if(H=A.get(w),B(H)){if(H.then)return H.then(v,v),H;O(H)?p(H[1],H[0],ka(H[2]),H[3]):p(H,200,{},"OK")}else A.put(w,q);D(H)&&((H=Mb(c.url)?b.cookies()[c.xsrfCookieName||e.xsrfCookieName]:s)&&(f[c.xsrfHeaderName||e.xsrfHeaderName]=H),a(c.method,w,g,h,f,c.timeout,c.withCredentials,
c.responseType));return q}function I(a,b){if(!b)return a;var c=[];Sc(b,function(a,b){null===a||D(a)||(O(a)||(a=[a]),q(a,function(a){U(a)&&(a=ra(a));c.push(za(b)+"="+za(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var x=c("$http"),u=[];q(g,function(a){u.unshift(C(a)?p.get(a):p.invoke(a))});q(f,function(a,b){var c=C(a)?p.get(a):p.invoke(a);u.splice(b,0,{response:function(a){return c(n.when(a))},responseError:function(a){return c(n.reject(a))}})});r.pendingRequests=[];
(function(a){q(arguments,function(a){r[a]=function(b,c){return r(J(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){r[a]=function(b,c,d){return r(J(d||{},{method:a,url:b,data:c}))}})})("post","put");r.defaults=e;return r}]}function ve(b){if(8>=S&&(!b.match(/^(get|post|head|put|delete|options)$/i)||!T.XMLHttpRequest))return new T.ActiveXObject("Microsoft.XMLHTTP");if(T.XMLHttpRequest)return new T.XMLHttpRequest;throw t("$httpBackend")("noxhr");}function Ud(){this.$get=
["$browser","$window","$document",function(b,a,c){return we(b,ve,b.defer,a.angular.callbacks,c[0])}]}function we(b,a,c,d,e){function g(a,b,c){var g=e.createElement("script"),f=null;g.type="text/javascript";g.src=a;g.async=!0;f=function(a){Wa(g,"load",f);Wa(g,"error",f);e.body.removeChild(g);g=null;var k=-1,v="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),v=a.type,k="error"===a.type?404:200);c&&c(k,v)};pb(g,"load",f);pb(g,"error",f);8>=S&&(g.onreadystatechange=function(){C(g.readyState)&&
/loaded|complete/.test(g.readyState)&&(g.onreadystatechange=null,f({type:"load"}))});e.body.appendChild(g);return f}var f=-1;return function(e,m,h,l,n,p,r,v){function I(){u=f;F&&F();z&&z.abort()}function x(a,d,e,g,f){P&&c.cancel(P);F=z=null;0===d&&(d=e?200:"file"==sa(m).protocol?404:0);a(1223===d?204:d,e,g,f||"");b.$$completeOutstandingRequest(y)}var u;b.$$incOutstandingRequestCount();m=m||b.url();if("jsonp"==L(e)){var M="_"+(d.counter++).toString(36);d[M]=function(a){d[M].data=a;d[M].called=!0};
var F=g(m.replace("JSON_CALLBACK","angular.callbacks."+M),M,function(a,b){x(l,a,d[M].data,"",b);d[M]=y})}else{var z=a(e);z.open(e,m,!0);q(n,function(a,b){B(a)&&z.setRequestHeader(b,a)});z.onreadystatechange=function(){if(z&&4==z.readyState){var a=null,b=null;u!==f&&(a=z.getAllResponseHeaders(),b="response"in z?z.response:z.responseText);x(l,u||z.status,b,a,z.statusText||"")}};r&&(z.withCredentials=!0);if(v)try{z.responseType=v}catch(s){if("json"!==v)throw s;}z.send(h||null)}if(0<p)var P=c(I,p);else p&&
p.then&&p.then(I)}}function Rd(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function g(g,h,l){for(var n,p,r=0,v=[],I=g.length,x=!1,u=[];r<I;)-1!=(n=g.indexOf(b,r))&&-1!=(p=g.indexOf(a,n+f))?(r!=n&&v.push(g.substring(r,n)),v.push(r=c(x=g.substring(n+f,p))),r.exp=x,r=p+k,x=!0):(r!=I&&v.push(g.substring(r)),r=I);(I=v.length)||(v.push(""),I=1);if(l&&1<v.length)throw zc("noconcat",
g);if(!h||x)return u.length=I,r=function(a){try{for(var b=0,c=I,f;b<c;b++){if("function"==typeof(f=v[b]))if(f=f(a),f=l?e.getTrusted(l,f):e.valueOf(f),null==f)f="";else switch(typeof f){case "string":break;case "number":f=""+f;break;default:f=ra(f)}u[b]=f}return u.join("")}catch(k){a=zc("interr",g,k.toString()),d(a)}},r.exp=g,r.parts=v,r}var f=b.length,k=a.length;g.startSymbol=function(){return b};g.endSymbol=function(){return a};return g}]}function Sd(){this.$get=["$rootScope","$window","$q",function(b,
a,c){function d(d,f,k,m){var h=a.setInterval,l=a.clearInterval,n=c.defer(),p=n.promise,r=0,v=B(m)&&!m;k=B(k)?k:0;p.then(null,null,d);p.$$intervalId=h(function(){n.notify(r++);0<k&&r>=k&&(n.resolve(r),l(p.$$intervalId),delete e[p.$$intervalId]);v||b.$apply()},f);e[p.$$intervalId]=n;return p}var e={};d.cancel=function(a){return a&&a.$$intervalId in e?(e[a.$$intervalId].reject("canceled"),clearInterval(a.$$intervalId),delete e[a.$$intervalId],!0):!1};return d}]}function ad(){this.$get=function(){return{id:"en-us",
NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function Nb(b){b=b.split("/");for(var a=b.length;a--;)b[a]=gb(b[a]);return b.join("/")}function Ac(b,a,c){b=sa(b,c);a.$$protocol=b.protocol;a.$$host=b.hostname;a.$$port=Z(b.port)||xe[b.protocol]||null}
function Bc(b,a,c){var d="/"!==b.charAt(0);d&&(b="/"+b);b=sa(b,c);a.$$path=decodeURIComponent(d&&"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=cc(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function pa(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function $a(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Ob(b){return b.substr(0,$a(b).lastIndexOf("/")+1)}function Cc(b,a){this.$$html5=!0;a=a||
"";var c=Ob(b);Ac(b,this,b);this.$$parse=function(a){var e=pa(c,a);if(!C(e))throw Pb("ipthprfx",a,c);Bc(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Bb(this.$$search),b=this.$$hash?"#"+gb(this.$$hash):"";this.$$url=Nb(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$rewrite=function(d){var e;if((e=pa(b,d))!==s)return d=e,(e=pa(a,e))!==s?c+(pa("/",e)||e):b+d;if((e=pa(c,d))!==s)return c+e;if(c==d+"/")return c}}function Qb(b,a){var c=
Ob(b);Ac(b,this,b);this.$$parse=function(d){var e=pa(b,d)||pa(c,d),e="#"==e.charAt(0)?pa(a,e):this.$$html5?e:"";if(!C(e))throw Pb("ihshprfx",d,a);Bc(e,this,b);d=this.$$path;var g=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));g.exec(e)||(d=(e=g.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Bb(this.$$search),e=this.$$hash?"#"+gb(this.$$hash):"";this.$$url=Nb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$rewrite=function(a){if($a(b)==
$a(a))return a}}function Rb(b,a){this.$$html5=!0;Qb.apply(this,arguments);var c=Ob(b);this.$$rewrite=function(d){var e;if(b==$a(d))return d;if(e=pa(c,d))return b+a+e;if(c===d+"/")return c};this.$$compose=function(){var c=Bb(this.$$search),e=this.$$hash?"#"+gb(this.$$hash):"";this.$$url=Nb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function qb(b){return function(){return this[b]}}function Dc(b,a){return function(c){if(D(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Vd(){var b=
"",a=!1;this.hashPrefix=function(a){return B(a)?(b=a,this):b};this.html5Mode=function(b){return B(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,g){function f(a){c.$broadcast("$locationChangeSuccess",k.absUrl(),a)}var k,m,h=d.baseHref(),l=d.url(),n;a?(n=l.substring(0,l.indexOf("/",l.indexOf("//")+2))+(h||"/"),m=e.history?Cc:Rb):(n=$a(l),m=Qb);k=new m(n,"#"+b);k.$$parse(k.$$rewrite(l));g.on("click",function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var e=
w(a.target);"a"!==L(e[0].nodeName);)if(e[0]===g[0]||!(e=e.parent())[0])return;var f=e.prop("href");U(f)&&"[object SVGAnimatedString]"===f.toString()&&(f=sa(f.animVal).href);if(m===Rb){var h=e.attr("href")||e.attr("xlink:href");if(0>h.indexOf("://"))if(f="#"+b,"/"==h[0])f=n+f+h;else if("#"==h[0])f=n+f+(k.path()||"/")+h;else{for(var l=k.path().split("/"),h=h.split("/"),p=0;p<h.length;p++)"."!=h[p]&&(".."==h[p]?l.pop():h[p].length&&l.push(h[p]));f=n+f+l.join("/")}}l=k.$$rewrite(f);f&&(!e.attr("target")&&
l&&!a.isDefaultPrevented())&&(a.preventDefault(),l!=d.url()&&(k.$$parse(l),c.$apply(),T.angular["ff-684208-preventDefault"]=!0))}});k.absUrl()!=l&&d.url(k.absUrl(),!0);d.onUrlChange(function(a){k.absUrl()!=a&&(c.$evalAsync(function(){var b=k.absUrl();k.$$parse(a);c.$broadcast("$locationChangeStart",a,b).defaultPrevented?(k.$$parse(b),d.url(b)):f(b)}),c.$$phase||c.$digest())});var p=0;c.$watch(function(){var a=d.url(),b=k.$$replace;p&&a==k.absUrl()||(p++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",
k.absUrl(),a).defaultPrevented?k.$$parse(a):(d.url(k.absUrl(),b),f(a))}));k.$$replace=!1;return p});return k}]}function Wd(){var b=!0,a=this;this.debugEnabled=function(a){return B(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||y;a=!1;try{a=!!e.apply}catch(m){}return a?
function(){var a=[];q(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function ea(b,a){if("constructor"===b)throw Da("isecfld",a);return b}function ab(b,a){if(b){if(b.constructor===b)throw Da("isecfn",a);if(b.document&&b.location&&b.alert&&b.setInterval)throw Da("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&
b.attr&&b.find))throw Da("isecdom",a);}return b}function rb(b,a,c,d,e){e=e||{};a=a.split(".");for(var g,f=0;1<a.length;f++){g=ea(a.shift(),d);var k=b[g];k||(k={},b[g]=k);b=k;b.then&&e.unwrapPromises&&(ta(d),"$$v"in b||function(a){a.then(function(b){a.$$v=b})}(b),b.$$v===s&&(b.$$v={}),b=b.$$v)}g=ea(a.shift(),d);return b[g]=c}function Ec(b,a,c,d,e,g,f){ea(b,g);ea(a,g);ea(c,g);ea(d,g);ea(e,g);return f.unwrapPromises?function(f,m){var h=m&&m.hasOwnProperty(b)?m:f,l;if(null==h)return h;(h=h[b])&&h.then&&
(ta(g),"$$v"in h||(l=h,l.$$v=s,l.then(function(a){l.$$v=a})),h=h.$$v);if(!a)return h;if(null==h)return s;(h=h[a])&&h.then&&(ta(g),"$$v"in h||(l=h,l.$$v=s,l.then(function(a){l.$$v=a})),h=h.$$v);if(!c)return h;if(null==h)return s;(h=h[c])&&h.then&&(ta(g),"$$v"in h||(l=h,l.$$v=s,l.then(function(a){l.$$v=a})),h=h.$$v);if(!d)return h;if(null==h)return s;(h=h[d])&&h.then&&(ta(g),"$$v"in h||(l=h,l.$$v=s,l.then(function(a){l.$$v=a})),h=h.$$v);if(!e)return h;if(null==h)return s;(h=h[e])&&h.then&&(ta(g),"$$v"in
h||(l=h,l.$$v=s,l.then(function(a){l.$$v=a})),h=h.$$v);return h}:function(g,f){var h=f&&f.hasOwnProperty(b)?f:g;if(null==h)return h;h=h[b];if(!a)return h;if(null==h)return s;h=h[a];if(!c)return h;if(null==h)return s;h=h[c];if(!d)return h;if(null==h)return s;h=h[d];return e?null==h?s:h=h[e]:h}}function ye(b,a){ea(b,a);return function(a,d){return null==a?s:(d&&d.hasOwnProperty(b)?d:a)[b]}}function ze(b,a,c){ea(b,c);ea(a,c);return function(c,e){if(null==c)return s;c=(e&&e.hasOwnProperty(b)?e:c)[b];return null==
c?s:c[a]}}function Fc(b,a,c){if(Sb.hasOwnProperty(b))return Sb[b];var d=b.split("."),e=d.length,g;if(a.unwrapPromises||1!==e)if(a.unwrapPromises||2!==e)if(a.csp)g=6>e?Ec(d[0],d[1],d[2],d[3],d[4],c,a):function(b,g){var f=0,k;do k=Ec(d[f++],d[f++],d[f++],d[f++],d[f++],c,a)(b,g),g=s,b=k;while(f<e);return k};else{var f="var p;\n";q(d,function(b,d){ea(b,c);f+="if(s == null) return undefined;\ns="+(d?"s":'((k&&k.hasOwnProperty("'+b+'"))?k:s)')+'["'+b+'"];\n'+(a.unwrapPromises?'if (s && s.then) {\n pw("'+
c.replace(/(["\r\n])/g,"\\$1")+'");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n':"")});var f=f+"return s;",k=new Function("s","k","pw",f);k.toString=$(f);g=a.unwrapPromises?function(a,b){return k(a,b,ta)}:k}else g=ze(d[0],d[1],c);else g=ye(d[0],c);"hasOwnProperty"!==b&&(Sb[b]=g);return g}function Xd(){var b={},a={csp:!1,unwrapPromises:!1,logPromiseWarnings:!0};this.unwrapPromises=function(b){return B(b)?(a.unwrapPromises=!!b,this):a.unwrapPromises};
this.logPromiseWarnings=function(b){return B(b)?(a.logPromiseWarnings=b,this):a.logPromiseWarnings};this.$get=["$filter","$sniffer","$log",function(c,d,e){a.csp=d.csp;ta=function(b){a.logPromiseWarnings&&!Gc.hasOwnProperty(b)&&(Gc[b]=!0,e.warn("[$parse] Promise found in the expression `"+b+"`. Automatic unwrapping of promises in Angular expressions is deprecated."))};return function(d){var e;switch(typeof d){case "string":if(b.hasOwnProperty(d))return b[d];e=new Tb(a);e=(new bb(e,c,a)).parse(d);"hasOwnProperty"!==
d&&(b[d]=e);return e;case "function":return d;default:return y}}}]}function Zd(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return Ae(function(a){b.$evalAsync(a)},a)}]}function Ae(b,a){function c(a){return a}function d(a){return f(a)}var e=function(){var f=[],h,l;return l={resolve:function(a){if(f){var c=f;f=s;h=g(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<d;b++)a=c[b],h.then(a[0],a[1],a[2])})}},reject:function(a){l.resolve(k(a))},notify:function(a){if(f){var c=f;f.length&&
b(function(){for(var b,d=0,e=c.length;d<e;d++)b=c[d],b[2](a)})}},promise:{then:function(b,g,k){var l=e(),I=function(d){try{l.resolve((Q(b)?b:c)(d))}catch(e){l.reject(e),a(e)}},x=function(b){try{l.resolve((Q(g)?g:d)(b))}catch(c){l.reject(c),a(c)}},u=function(b){try{l.notify((Q(k)?k:c)(b))}catch(d){a(d)}};f?f.push([I,x,u]):h.then(I,x,u);return l.promise},"catch":function(a){return this.then(null,a)},"finally":function(a){function b(a,c){var d=e();c?d.resolve(a):d.reject(a);return d.promise}function d(e,
g){var f=null;try{f=(a||c)()}catch(k){return b(k,!1)}return f&&Q(f.then)?f.then(function(){return b(e,g)},function(a){return b(a,!1)}):b(e,g)}return this.then(function(a){return d(a,!0)},function(a){return d(a,!1)})}}}},g=function(a){return a&&Q(a.then)?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},f=function(a){var b=e();b.reject(a);return b.promise},k=function(c){return{then:function(g,f){var k=e();b(function(){try{k.resolve((Q(f)?f:d)(c))}catch(b){k.reject(b),
a(b)}});return k.promise}}};return{defer:e,reject:f,when:function(k,h,l,n){var p=e(),r,v=function(b){try{return(Q(h)?h:c)(b)}catch(d){return a(d),f(d)}},I=function(b){try{return(Q(l)?l:d)(b)}catch(c){return a(c),f(c)}},x=function(b){try{return(Q(n)?n:c)(b)}catch(d){a(d)}};b(function(){g(k).then(function(a){r||(r=!0,p.resolve(g(a).then(v,I,x)))},function(a){r||(r=!0,p.resolve(I(a)))},function(a){r||p.notify(x(a))})});return p.promise},all:function(a){var b=e(),c=0,d=O(a)?[]:{};q(a,function(a,e){c++;
g(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise}}}function fe(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,g=e?function(a){var b=c(a);return function(){d(b)}}:function(b){var c=
a(b,16.66,!1);return function(){a.cancel(c)}};g.supported=e;return g}]}function Yd(){var b=10,a=t("$rootScope"),c=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(d,e,g,f){function k(){this.$id=eb();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=[];
this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings={}}function m(b){if(p.$$phase)throw a("inprog",p.$$phase);p.$$phase=b}function h(a,b){var c=g(a);Ta(c,b);return c}function l(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function n(){}k.prototype={constructor:k,$new:function(a){a?(a=new k,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,a.$$postDigestQueue=this.$$postDigestQueue):(this.$$childScopeClass||(this.$$childScopeClass=
function(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$id=eb();this.$$childScopeClass=null},this.$$childScopeClass.prototype=this),a=new this.$$childScopeClass);a["this"]=a;a.$parent=this;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,d){var e=h(a,"watch"),g=this.$$watchers,f={fn:b,last:n,get:e,exp:a,
eq:!!d};c=null;if(!Q(b)){var k=h(b||y,"listener");f.fn=function(a,b,c){k(c)}}if("string"==typeof a&&e.constant){var m=f.fn;f.fn=function(a,b,c){m.call(this,a,b,c);Pa(g,f)}}g||(g=this.$$watchers=[]);g.unshift(f);return function(){Pa(g,f);c=null}},$watchCollection:function(a,b){var c=this,d,e,f,k=1<b.length,h=0,m=g(a),l=[],n={},p=!0,q=0;return this.$watch(function(){d=m(c);var a,b;if(U(d))if(db(d))for(e!==l&&(e=l,q=e.length=0,h++),a=d.length,q!==a&&(h++,e.length=q=a),b=0;b<a;b++)e[b]!==e[b]&&d[b]!==
d[b]||e[b]===d[b]||(h++,e[b]=d[b]);else{e!==n&&(e=n={},q=0,h++);a=0;for(b in d)d.hasOwnProperty(b)&&(a++,e.hasOwnProperty(b)?e[b]!==d[b]&&(h++,e[b]=d[b]):(q++,e[b]=d[b],h++));if(q>a)for(b in h++,e)e.hasOwnProperty(b)&&!d.hasOwnProperty(b)&&(q--,delete e[b])}else e!==d&&(e=d,h++);return h},function(){p?(p=!1,b(d,d,c)):b(d,f,c);if(k)if(U(d))if(db(d)){f=Array(d.length);for(var a=0;a<d.length;a++)f[a]=d[a]}else for(a in f={},d)zb.call(d,a)&&(f[a]=d[a]);else f=d})},$digest:function(){var d,g,f,k,h=this.$$asyncQueue,
l=this.$$postDigestQueue,q,z,s=b,P,N=[],w,E,A;m("$digest");c=null;do{z=!1;for(P=this;h.length;){try{A=h.shift(),A.scope.$eval(A.expression)}catch(H){p.$$phase=null,e(H)}c=null}a:do{if(k=P.$$watchers)for(q=k.length;q--;)try{if(d=k[q])if((g=d.get(P))!==(f=d.last)&&!(d.eq?xa(g,f):"number"==typeof g&&"number"==typeof f&&isNaN(g)&&isNaN(f)))z=!0,c=d,d.last=d.eq?Ga(g,null):g,d.fn(g,f===n?g:f,P),5>s&&(w=4-s,N[w]||(N[w]=[]),E=Q(d.exp)?"fn: "+(d.exp.name||d.exp.toString()):d.exp,E+="; newVal: "+ra(g)+"; oldVal: "+
ra(f),N[w].push(E));else if(d===c){z=!1;break a}}catch(B){p.$$phase=null,e(B)}if(!(k=P.$$childHead||P!==this&&P.$$nextSibling))for(;P!==this&&!(k=P.$$nextSibling);)P=P.$parent}while(P=k);if((z||h.length)&&!s--)throw p.$$phase=null,a("infdig",b,ra(N));}while(z||h.length);for(p.$$phase=null;l.length;)try{l.shift()()}catch(t){e(t)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this!==p&&(q(this.$$listenerCount,Ab(null,l,this)),a.$$childHead==
this&&(a.$$childHead=this.$$nextSibling),a.$$childTail==this&&(a.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=null,this.$$listeners={},this.$$watchers=this.$$asyncQueue=this.$$postDigestQueue=[],this.$destroy=this.$digest=this.$apply=y,this.$on=this.$watch=function(){return y})}},
$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a){p.$$phase||p.$$asyncQueue.length||f.defer(function(){p.$$asyncQueue.length&&p.$digest()});this.$$asyncQueue.push({scope:this,expression:a})},$$postDigest:function(a){this.$$postDigestQueue.push(a)},$apply:function(a){try{return m("$apply"),this.$eval(a)}catch(b){e(b)}finally{p.$$phase=null;try{p.$digest()}catch(c){throw e(c),c;}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||
(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){c[Oa(c,b)]=null;l(e,1,a)}},$emit:function(a,b){var c=[],d,g=this,f=!1,k={name:a,targetScope:g,stopPropagation:function(){f=!0},preventDefault:function(){k.defaultPrevented=!0},defaultPrevented:!1},h=[k].concat(ya.call(arguments,1)),m,l;do{d=g.$$listeners[a]||c;k.currentScope=g;m=0;for(l=d.length;m<l;m++)if(d[m])try{d[m].apply(null,h)}catch(n){e(n)}else d.splice(m,1),m--,l--;if(f)break;g=g.$parent}while(g);
return k},$broadcast:function(a,b){for(var c=this,d=this,g={name:a,targetScope:this,preventDefault:function(){g.defaultPrevented=!0},defaultPrevented:!1},f=[g].concat(ya.call(arguments,1)),k,h;c=d;){g.currentScope=c;d=c.$$listeners[a]||[];k=0;for(h=d.length;k<h;k++)if(d[k])try{d[k].apply(null,f)}catch(m){e(m)}else d.splice(k,1),k--,h--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}return g}};var p=new k;return p}]}function bd(){var b=
/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*(https?|ftp|file):|data:image\//;this.aHrefSanitizationWhitelist=function(a){return B(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return B(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,g;if(!S||8<=S)if(g=sa(c).href,""!==g&&!g.match(e))return"unsafe:"+g;return c}}}function Be(b){if("self"===b)return b;if(C(b)){if(-1<b.indexOf("***"))throw ua("iwcard",b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,
"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return RegExp("^"+b+"$")}if(fb(b))return RegExp("^"+b.source+"$");throw ua("imatcher");}function Hc(b){var a=[];B(b)&&q(b,function(b){a.push(Be(b))});return a}function ae(){this.SCE_CONTEXTS=fa;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=Hc(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=Hc(b));return a};this.$get=["$injector",function(c){function d(a){var b=function(a){this.$$unwrapTrustedValue=
function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var e=function(a){throw ua("unsafe");};c.has("$sanitize")&&(e=c.get("$sanitize"));var g=d(),f={};f[fa.HTML]=d(g);f[fa.CSS]=d(g);f[fa.URL]=d(g);f[fa.JS]=d(g);f[fa.RESOURCE_URL]=d(f[fa.URL]);return{trustAs:function(a,b){var c=f.hasOwnProperty(a)?f[a]:null;if(!c)throw ua("icontext",a,b);if(null===b||b===
s||""===b)return b;if("string"!==typeof b)throw ua("itype",a);return new c(b)},getTrusted:function(c,d){if(null===d||d===s||""===d)return d;var g=f.hasOwnProperty(c)?f[c]:null;if(g&&d instanceof g)return d.$$unwrapTrustedValue();if(c===fa.RESOURCE_URL){var g=sa(d.toString()),l,n,p=!1;l=0;for(n=b.length;l<n;l++)if("self"===b[l]?Mb(g):b[l].exec(g.href)){p=!0;break}if(p)for(l=0,n=a.length;l<n;l++)if("self"===a[l]?Mb(g):a[l].exec(g.href)){p=!1;break}if(p)return d;throw ua("insecurl",d.toString());}if(c===
fa.HTML)return e(d);throw ua("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function $d(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sniffer","$sceDelegate",function(a,c,d){if(b&&c.msie&&8>c.msieDocumentMode)throw ua("iequirks");var e=ka(fa);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},e.valueOf=Fa);e.parseAs=
function(b,c){var d=a(c);return d.literal&&d.constant?d:function(a,c){return e.getTrusted(b,d(a,c))}};var g=e.parseAs,f=e.getTrusted,k=e.trustAs;q(fa,function(a,b){var c=L(b);e[Va("parse_as_"+c)]=function(b){return g(a,b)};e[Va("get_trusted_"+c)]=function(b){return f(a,b)};e[Va("trust_as_"+c)]=function(b){return k(a,b)}});return e}]}function be(){this.$get=["$window","$document",function(b,a){var c={},d=Z((/android (\d+)/.exec(L((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||
{}).userAgent),g=a[0]||{},f=g.documentMode,k,m=/^(Moz|webkit|O|ms)(?=[A-Z])/,h=g.body&&g.body.style,l=!1,n=!1;if(h){for(var p in h)if(l=m.exec(p)){k=l[0];k=k.substr(0,1).toUpperCase()+k.substr(1);break}k||(k="WebkitOpacity"in h&&"webkit");l=!!("transition"in h||k+"Transition"in h);n=!!("animation"in h||k+"Animation"in h);!d||l&&n||(l=C(g.body.style.webkitTransition),n=C(g.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hashchange:"onhashchange"in b&&(!f||7<
f),hasEvent:function(a){if("input"==a&&9==S)return!1;if(D(c[a])){var b=g.createElement("div");c[a]="on"+a in b}return c[a]},csp:$b(),vendorPrefix:k,transitions:l,animations:n,android:d,msie:S,msieDocumentMode:f}}]}function de(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(b,a,c,d){function e(e,k,m){var h=c.defer(),l=h.promise,n=B(m)&&!m;k=a.defer(function(){try{h.resolve(e())}catch(a){h.reject(a),d(a)}finally{delete g[l.$$timeoutId]}n||b.$apply()},k);l.$$timeoutId=k;g[k]=h;
return l}var g={};e.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return e}]}function sa(b,a){var c=b;S&&(W.setAttribute("href",c),c=W.href);W.setAttribute("href",c);return{href:W.href,protocol:W.protocol?W.protocol.replace(/:$/,""):"",host:W.host,search:W.search?W.search.replace(/^\?/,""):"",hash:W.hash?W.hash.replace(/^#/,""):"",hostname:W.hostname,port:W.port,pathname:"/"===W.pathname.charAt(0)?W.pathname:
"/"+W.pathname}}function Mb(b){b=C(b)?sa(b):b;return b.protocol===Ic.protocol&&b.host===Ic.host}function ee(){this.$get=$(T)}function kc(b){function a(d,e){if(U(d)){var g={};q(d,function(b,c){g[c]=a(c,b)});return g}return b.factory(d+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+c)}}];a("currency",Jc);a("date",Kc);a("filter",Ce);a("json",De);a("limitTo",Ee);a("lowercase",Fe);a("number",Lc);a("orderBy",Mc);a("uppercase",Ge)}function Ce(){return function(b,
a,c){if(!O(b))return b;var d=typeof c,e=[];e.check=function(a){for(var b=0;b<e.length;b++)if(!e[b](a))return!1;return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return Sa.equals(a,b)}:function(a,b){if(a&&b&&"object"===typeof a&&"object"===typeof b){for(var d in a)if("$"!==d.charAt(0)&&zb.call(a,d)&&c(a[d],b[d]))return!0;return!1}b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var g=function(a,b){if("string"==typeof b&&"!"===b.charAt(0))return!g(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,
b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&g(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(g(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var f in a)(function(b){"undefined"!=typeof a[b]&&e.push(function(c){return g("$"==b?c:c&&c[b],a[b])})})(f);break;case "function":e.push(a);break;default:return b}d=[];for(f=0;f<b.length;f++){var k=
b[f];e.check(k)&&d.push(k)}return d}}function Jc(b){var a=b.NUMBER_FORMATS;return function(b,d){D(d)&&(d=a.CURRENCY_SYM);return Nc(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Lc(b){var a=b.NUMBER_FORMATS;return function(b,d){return Nc(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Nc(b,a,c,d,e){if(null==b||!isFinite(b)||U(b))return"";var g=0>b;b=Math.abs(b);var f=b+"",k="",m=[],h=!1;if(-1!==f.indexOf("e")){var l=f.match(/([\d\.]+)e(-?)(\d+)/);l&&"-"==l[2]&&
l[3]>e+1?f="0":(k=f,h=!0)}if(h)0<e&&(-1<b&&1>b)&&(k=b.toFixed(e));else{f=(f.split(Oc)[1]||"").length;D(e)&&(e=Math.min(Math.max(a.minFrac,f),a.maxFrac));f=Math.pow(10,e+1);b=Math.floor(b*f+5)/f;b=(""+b).split(Oc);f=b[0];b=b[1]||"";var l=0,n=a.lgSize,p=a.gSize;if(f.length>=n+p)for(l=f.length-n,h=0;h<l;h++)0===(l-h)%p&&0!==h&&(k+=c),k+=f.charAt(h);for(h=l;h<f.length;h++)0===(f.length-h)%n&&0!==h&&(k+=c),k+=f.charAt(h);for(;b.length<e;)b+="0";e&&"0"!==e&&(k+=d+b.substr(0,e))}m.push(g?a.negPre:a.posPre);
m.push(k);m.push(g?a.negSuf:a.posSuf);return m.join("")}function Ub(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function Y(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Ub(e,a,d)}}function sb(b,a){return function(c,d){var e=c["get"+b](),g=Ha(a?"SHORT"+b:b);return d[g][e]}}function Kc(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var g=0,f=0,k=b[8]?a.setUTCFullYear:a.setFullYear,m=
b[8]?a.setUTCHours:a.setHours;b[9]&&(g=Z(b[9]+b[10]),f=Z(b[9]+b[11]));k.call(a,Z(b[1]),Z(b[2])-1,Z(b[3]));g=Z(b[4]||0)-g;f=Z(b[5]||0)-f;k=Z(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));m.call(a,g,f,k,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e){var g="",f=[],k,m;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;C(c)&&(c=He.test(c)?Z(c):a(c));yb(c)&&(c=new Date(c));if(!Na(c))return c;for(;e;)(m=Ie.exec(e))?
(f=f.concat(ya.call(m,1)),e=f.pop()):(f.push(e),e=null);q(f,function(a){k=Je[a];g+=k?k(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function De(){return function(b){return ra(b,!0)}}function Ee(){return function(b,a){if(!O(b)&&!C(b))return b;a=Infinity===Math.abs(Number(a))?Number(a):Z(a);if(C(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);
return c}}function Mc(b){return function(a,c,d){function e(a,b){return Ra(b)?function(b,c){return a(c,b)}:a}function g(a,b){var c=typeof a,d=typeof b;return c==d?("string"==c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!O(a)||!c)return a;c=O(c)?c:[c];c=Uc(c,function(a){var c=!1,d=a||Fa;if(C(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);d=b(a);if(d.constant){var f=d();return e(function(a,b){return g(a[f],b[f])},c)}}return e(function(a,b){return g(d(a),
d(b))},c)});for(var f=[],k=0;k<a.length;k++)f.push(a[k]);return f.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function va(b){Q(b)&&(b={link:b});b.restrict=b.restrict||"AC";return $(b)}function Pc(b,a,c,d){function e(a,c){c=c?"-"+hb(c,"-"):"";d.removeClass(b,(a?tb:ub)+c);d.addClass(b,(a?ub:tb)+c)}var g=this,f=b.parent().controller("form")||vb,k=0,m=g.$error={},h=[];g.$name=a.name||a.ngForm;g.$dirty=!1;g.$pristine=!0;g.$valid=!0;g.$invalid=!1;f.$addControl(g);
b.addClass(Ma);e(!0);g.$addControl=function(a){Aa(a.$name,"input");h.push(a);a.$name&&(g[a.$name]=a)};g.$removeControl=function(a){a.$name&&g[a.$name]===a&&delete g[a.$name];q(m,function(b,c){g.$setValidity(c,!0,a)});Pa(h,a)};g.$setValidity=function(a,b,c){var d=m[a];if(b)d&&(Pa(d,c),d.length||(k--,k||(e(b),g.$valid=!0,g.$invalid=!1),m[a]=!1,e(!0,a),f.$setValidity(a,!0,g)));else{k||e(b);if(d){if(-1!=Oa(d,c))return}else m[a]=d=[],k++,e(!1,a),f.$setValidity(a,!1,g);d.push(c);g.$valid=!1;g.$invalid=
!0}};g.$setDirty=function(){d.removeClass(b,Ma);d.addClass(b,wb);g.$dirty=!0;g.$pristine=!1;f.$setDirty()};g.$setPristine=function(){d.removeClass(b,wb);d.addClass(b,Ma);g.$dirty=!1;g.$pristine=!0;q(h,function(a){a.$setPristine()})}}function qa(b,a,c,d){b.$setValidity(a,c);return c?d:s}function Ke(b,a,c){var d=c.prop("validity");U(d)&&b.$parsers.push(function(c){if(b.$error[a]||!(d.badInput||d.customError||d.typeMismatch)||d.valueMissing)return c;b.$setValidity(a,!1)})}function xb(b,a,c,d,e,g){var f=
a.prop("validity"),k=a[0].placeholder,m={};if(!e.android){var h=!1;a.on("compositionstart",function(a){h=!0});a.on("compositionend",function(){h=!1;l()})}var l=function(e){if(!h){var g=a.val();if(S&&"input"===(e||m).type&&a[0].placeholder!==k)k=a[0].placeholder;else if(Ra(c.ngTrim||"T")&&(g=aa(g)),d.$viewValue!==g||f&&""===g&&!f.valueMissing)b.$$phase?d.$setViewValue(g):b.$apply(function(){d.$setViewValue(g)})}};if(e.hasEvent("input"))a.on("input",l);else{var n,p=function(){n||(n=g.defer(function(){l();
n=null}))};a.on("keydown",function(a){a=a.keyCode;91===a||(15<a&&19>a||37<=a&&40>=a)||p()});if(e.hasEvent("paste"))a.on("paste cut",p)}a.on("change",l);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)};var r=c.ngPattern;r&&((e=r.match(/^\/(.*)\/([gim]*)$/))?(r=RegExp(e[1],e[2]),e=function(a){return qa(d,"pattern",d.$isEmpty(a)||r.test(a),a)}):e=function(c){var e=b.$eval(r);if(!e||!e.test)throw t("ngPattern")("noregexp",r,e,ga(a));return qa(d,"pattern",d.$isEmpty(c)||e.test(c),
c)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var v=Z(c.ngMinlength);e=function(a){return qa(d,"minlength",d.$isEmpty(a)||a.length>=v,a)};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var q=Z(c.ngMaxlength);e=function(a){return qa(d,"maxlength",d.$isEmpty(a)||a.length<=q,a)};d.$parsers.push(e);d.$formatters.push(e)}}function Vb(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],l=0;l<b.length;l++)if(e==
b[l])continue a;c.push(e)}return c}function e(a){if(!O(a)){if(C(a))return a.split(" ");if(U(a)){var b=[];q(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(g,f,k){function m(a,b){var c=f.data("$classCounts")||{},d=[];q(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});f.data("$classCounts",c);return d.join(" ")}function h(b){if(!0===a||g.$index%2===a){var h=e(b||[]);if(!l){var r=m(h,1);k.$addClass(r)}else if(!xa(b,l)){var q=
e(l),r=d(h,q),h=d(q,h),h=m(h,-1),r=m(r,1);0===r.length?c.removeClass(f,h):0===h.length?c.addClass(f,r):c.setClass(f,r,h)}}l=ka(b)}var l;g.$watch(k[b],h,!0);k.$observe("class",function(a){h(g.$eval(k[b]))});"ngClass"!==b&&g.$watch("$index",function(c,d){var f=c&1;if(f!==(d&1)){var h=e(g.$eval(k[b]));f===a?(f=m(h,1),k.$addClass(f)):(f=m(h,-1),k.$removeClass(f))}})}}}]}var L=function(b){return C(b)?b.toLowerCase():b},zb=Object.prototype.hasOwnProperty,Ha=function(b){return C(b)?b.toUpperCase():b},S,
w,Ba,ya=[].slice,Le=[].push,wa=Object.prototype.toString,Qa=t("ng"),Sa=T.angular||(T.angular={}),Ua,La,ja=["0","0","0"];S=Z((/msie (\d+)/.exec(L(navigator.userAgent))||[])[1]);isNaN(S)&&(S=Z((/trident\/.*; rv:(\d+)/.exec(L(navigator.userAgent))||[])[1]));y.$inject=[];Fa.$inject=[];var O=function(){return Q(Array.isArray)?Array.isArray:function(b){return"[object Array]"===wa.call(b)}}(),aa=function(){return String.prototype.trim?function(b){return C(b)?b.trim():b}:function(b){return C(b)?b.replace(/^\s\s*/,
"").replace(/\s\s*$/,""):b}}();La=9>S?function(b){b=b.nodeName?b:b[0];return b.scopeName&&"HTML"!=b.scopeName?Ha(b.scopeName+":"+b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var Xc=/[A-Z]/g,$c={full:"1.2.18",major:1,minor:2,dot:18,codeName:"ear-extendability"},Xa=R.cache={},ib=R.expando="ng"+(new Date).getTime(),me=1,pb=T.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},Wa=T.document.removeEventListener?
function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)};R._data=function(b){return this.cache[b[this.expando]]||{}};var he=/([\:\-\_]+(.))/g,ie=/^moz([A-Z])/,Gb=t("jqLite"),je=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Hb=/<|&#?\w+;/,ke=/<([\w:]+)/,le=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,da={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>",
"</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};da.optgroup=da.option;da.tbody=da.tfoot=da.colgroup=da.caption=da.thead;da.th=da.td;var Ka=R.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===V.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),R(T).on("load",a))},toString:function(){var b=[];q(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?w(this[b]):w(this[this.length+b])},length:0,
push:Le,sort:[].sort,splice:[].splice},mb={};q("multiple selected checked disabled readOnly required open".split(" "),function(b){mb[L(b)]=b});var rc={};q("input select option textarea button form details".split(" "),function(b){rc[Ha(b)]=!0});q({data:nc,inheritedData:lb,scope:function(b){return w(b).data("$scope")||lb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return w(b).data("$isolateScope")||w(b).data("$isolateScopeNoTemplate")},controller:oc,injector:function(b){return lb(b,
"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Kb,css:function(b,a,c){a=Va(a);if(B(c))b.style[a]=c;else{var d;8>=S&&(d=b.currentStyle&&b.currentStyle[a],""===d&&(d="auto"));d=d||b.style[a];8>=S&&(d=""===d?s:d);return d}},attr:function(b,a,c){var d=L(a);if(mb[d])if(B(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||y).specified?d:s;else if(B(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,
2),null===b?s:b},prop:function(b,a,c){if(B(c))b[a]=c;else return b[a]},text:function(){function b(b,d){var e=a[b.nodeType];if(D(d))return e?b[e]:"";b[e]=d}var a=[];9>S?(a[1]="innerText",a[3]="nodeValue"):a[1]=a[3]="textContent";b.$dv="";return b}(),val:function(b,a){if(D(a)){if("SELECT"===La(b)&&b.multiple){var c=[];q(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(D(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<
d.length;c++)Ia(d[c]);b.innerHTML=a},empty:pc},function(b,a){R.prototype[a]=function(a,d){var e,g,f=this.length;if(b!==pc&&(2==b.length&&b!==Kb&&b!==oc?a:d)===s){if(U(a)){for(e=0;e<f;e++)if(b===nc)b(this[e],a);else for(g in a)b(this[e],g,a[g]);return this}e=b.$dv;f=e===s?Math.min(f,1):f;for(g=0;g<f;g++){var k=b(this[g],a,d);e=e?e+k:k}return e}for(e=0;e<f;e++)b(this[e],a,d);return this}});q({removeData:lc,dealoc:Ia,on:function a(c,d,e,g){if(B(g))throw Gb("onargs");var f=la(c,"events"),k=la(c,"handle");
f||la(c,"events",f={});k||la(c,"handle",k=ne(c,f));q(d.split(" "),function(d){var g=f[d];if(!g){if("mouseenter"==d||"mouseleave"==d){var l=V.body.contains||V.body.compareDocumentPosition?function(a,c){var d=9===a.nodeType?a.documentElement:a,e=c&&c.parentNode;return a===e||!!(e&&1===e.nodeType&&(d.contains?d.contains(e):a.compareDocumentPosition&&a.compareDocumentPosition(e)&16))}:function(a,c){if(c)for(;c=c.parentNode;)if(c===a)return!0;return!1};f[d]=[];a(c,{mouseleave:"mouseout",mouseenter:"mouseover"}[d],
function(a){var c=a.relatedTarget;c&&(c===this||l(this,c))||k(a,d)})}else pb(c,d,k),f[d]=[];g=f[d]}g.push(e)})},off:mc,one:function(a,c,d){a=w(a);a.on(c,function g(){a.off(c,d);a.off(c,g)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;Ia(a);q(new R(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];q(a.childNodes,function(a){1===a.nodeType&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,
c){q(new R(c),function(c){1!==a.nodeType&&11!==a.nodeType||a.appendChild(c)})},prepend:function(a,c){if(1===a.nodeType){var d=a.firstChild;q(new R(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=w(c)[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){Ia(a);var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;q(new R(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:kb,removeClass:jb,toggleClass:function(a,c,d){c&&
q(c.split(" "),function(c){var g=d;D(g)&&(g=!Kb(a,c));(g?kb:jb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;for(a=a.nextSibling;null!=a&&1!==a.nodeType;)a=a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Jb,triggerHandler:function(a,c,d){c=(la(a,"events")||{})[c];d=d||[];var e=[{preventDefault:y,stopPropagation:y}];q(c,function(c){c.apply(a,
e.concat(d))})}},function(a,c){R.prototype[c]=function(c,e,g){for(var f,k=0;k<this.length;k++)D(f)?(f=a(this[k],c,e,g),B(f)&&(f=w(f))):Ib(f,a(this[k],c,e,g));return B(f)?f:this};R.prototype.bind=R.prototype.on;R.prototype.unbind=R.prototype.off});Ya.prototype={put:function(a,c){this[Ja(a)]=c},get:function(a){return this[Ja(a)]},remove:function(a){var c=this[a=Ja(a)];delete this[a];return c}};var pe=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,qe=/,/,re=/^\s*(_?)(\S+?)\1\s*$/,oe=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
Za=t("$injector"),Me=t("$animate"),Ld=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Me("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$timeout","$$asyncCallback",function(a,d){return{enter:function(a,c,f,k){f?f.after(a):(c&&c[0]||(c=f.parent()),c.append(a));k&&
d(k)},leave:function(a,c){a.remove();c&&d(c)},move:function(a,c,d,k){this.enter(a,c,d,k)},addClass:function(a,c,f){c=C(c)?c:O(c)?c.join(" "):"";q(a,function(a){kb(a,c)});f&&d(f)},removeClass:function(a,c,f){c=C(c)?c:O(c)?c.join(" "):"";q(a,function(a){jb(a,c)});f&&d(f)},setClass:function(a,c,f,k){q(a,function(a){kb(a,c);jb(a,f)});k&&d(k)},enabled:y}}]}],ia=t("$compile");gc.$inject=["$provide","$$sanitizeUriProvider"];var ue=/^(x[\:\-_]|data[\:\-_])/i,zc=t("$interpolate"),Ne=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
xe={http:80,https:443,ftp:21},Pb=t("$location");Rb.prototype=Qb.prototype=Cc.prototype={$$html5:!1,$$replace:!1,absUrl:qb("$$absUrl"),url:function(a,c){if(D(a))return this.$$url;var d=Ne.exec(a);d[1]&&this.path(decodeURIComponent(d[1]));(d[2]||d[1])&&this.search(d[3]||"");this.hash(d[5]||"",c);return this},protocol:qb("$$protocol"),host:qb("$$host"),port:qb("$$port"),path:Dc("$$path",function(a){return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;
case 1:if(C(a))this.$$search=cc(a);else if(U(a))this.$$search=a;else throw Pb("isrcharg");break;default:D(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:Dc("$$hash",Fa),replace:function(){this.$$replace=!0;return this}};var Da=t("$parse"),Gc={},ta,cb={"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:y,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return B(d)?B(e)?d+e:d:B(e)?e:s},"-":function(a,c,d,e){d=d(a,c);e=
e(a,c);return(B(d)?d:0)-(B(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":y,"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,
c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},Oe={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Tb=function(a){this.options=a};Tb.prototype={constructor:Tb,lex:function(a){this.text=a;this.index=0;this.ch=s;this.lastCh=":";for(this.tokens=[];this.index<
this.text.length;){this.ch=this.text.charAt(this.index);if(this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent();else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch}),this.index++;else if(this.isWhitespace(this.ch)){this.index++;continue}else{a=this.ch+this.peek();var c=a+this.peek(2),d=cb[this.ch],e=cb[a],g=cb[c];g?(this.tokens.push({index:this.index,
text:c,fn:g}),this.index+=3):e?(this.tokens.push({index:this.index,text:a,fn:e}),this.index+=2):d?(this.tokens.push({index:this.index,text:this.ch,fn:d}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+1)}this.lastCh=this.ch}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},was:function(a){return-1!==a.indexOf(this.lastCh)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=
a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=B(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw Da("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=L(this.text.charAt(this.index));
if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}a*=1;this.tokens.push({index:c,text:a,literal:!0,constant:!0,fn:function(){return a}})},readIdent:function(){for(var a=this,c="",d=this.index,e,g,f,k;this.index<this.text.length;){k=this.text.charAt(this.index);
if("."===k||this.isIdent(k)||this.isNumber(k))"."===k&&(e=this.index),c+=k;else break;this.index++}if(e)for(g=this.index;g<this.text.length;){k=this.text.charAt(g);if("("===k){f=c.substr(e-d+1);c=c.substr(0,e-d);this.index=g;break}if(this.isWhitespace(k))g++;else break}d={index:d,text:c};if(cb.hasOwnProperty(c))d.fn=cb[c],d.literal=!0,d.constant=!0;else{var m=Fc(c,this.options,this.text);d.fn=J(function(a,c){return m(a,c)},{assign:function(d,e){return rb(d,c,e,a.text,a.options)}})}this.tokens.push(d);
f&&(this.tokens.push({index:e,text:"."}),this.tokens.push({index:e+1,text:f}))},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,g=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),e=e+f;if(g)"u"===f?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d=(g=Oe[f])?d+g:d+f,g=!1;else if("\\"===f)g=!0;else{if(f===a){this.index++;this.tokens.push({index:c,
text:e,string:d,literal:!0,constant:!0,fn:function(){return d}});return}d+=f}this.index++}this.throwError("Unterminated quote",c)}};var bb=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};bb.ZERO=J(function(){return 0},{constant:!0});bb.prototype={constructor:bb,parse:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;
if(this.expect("("))a=this.filterChain(),this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var c=this.expect();(a=c.fn)||this.throwError("not a primary expression",c);a.literal=!!c.literal;a.constant=!!c.constant}for(var d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,
c){throw Da("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw Da("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){if(0<this.tokens.length){var g=this.tokens[0],f=g.text;if(f===a||f===c||f===d||f===e||!(a||c||d||e))return g}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},
unaryFn:function(a,c){return J(function(d,e){return a(d,e,c)},{constant:c.constant})},ternaryFn:function(a,c,d){return J(function(e,g){return a(e,g)?c(e,g):d(e,g)},{constant:a.constant&&c.constant&&d.constant})},binaryFn:function(a,c,d){return J(function(e,g){return c(e,g,a,d)},{constant:a.constant&&d.constant})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,g=
0;g<a.length;g++){var f=a[g];f&&(e=f(c,d))}return e}},filterChain:function(){for(var a=this.expression(),c;;)if(c=this.expect("|"))a=this.binaryFn(a,c.fn,this.filter());else return a},filter:function(){for(var a=this.expect(),c=this.$filter(a.text),d=[];;)if(a=this.expect(":"))d.push(this.expression());else{var e=function(a,e,k){k=[k];for(var m=0;m<d.length;m++)k.push(d[m](a,e));return c.apply(a,k)};return function(){return e}}},expression:function(){return this.assignment()},assignment:function(){var a=
this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),function(d,g){return a.assign(d,c(d,g),g)}):a},ternary:function(){var a=this.logicalOR(),c,d;if(this.expect("?")){c=this.ternary();if(d=this.expect(":"))return this.ternaryFn(a,c,this.ternary());this.throwError("expected :",d)}else return a},logicalOR:function(){for(var a=this.logicalAND(),c;;)if(c=this.expect("||"))a=this.binaryFn(a,
c.fn,this.logicalAND());else return a},logicalAND:function(){var a=this.equality(),c;if(c=this.expect("&&"))a=this.binaryFn(a,c.fn,this.logicalAND());return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+",
"-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(bb.ZERO,a.fn,this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this,d=this.expect().text,e=Fc(d,this.options,this.text);return J(function(c,d,k){return e(k||
a(c,d))},{assign:function(e,f,k){return rb(a(e,k),d,f,c.text,c.options)}})},objectIndex:function(a){var c=this,d=this.expression();this.consume("]");return J(function(e,g){var f=a(e,g),k=d(e,g),m;if(!f)return s;(f=ab(f[k],c.text))&&(f.then&&c.options.unwrapPromises)&&(m=f,"$$v"in f||(m.$$v=s,m.then(function(a){m.$$v=a})),f=f.$$v);return f},{assign:function(e,g,f){var k=d(e,f);return ab(a(e,f),c.text)[k]=g}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());
while(this.expect(","))}this.consume(")");var e=this;return function(g,f){for(var k=[],m=c?c(g,f):g,h=0;h<d.length;h++)k.push(d[h](g,f));h=a(g,f,m)||y;ab(m,e.text);ab(h,e.text);k=h.apply?h.apply(m,k):h(k[0],k[1],k[2],k[3],k[4]);return ab(k,e.text)}},arrayDeclaration:function(){var a=[],c=!0;if("]"!==this.peekToken().text){do{if(this.peek("]"))break;var d=this.expression();a.push(d);d.constant||(c=!1)}while(this.expect(","))}this.consume("]");return J(function(c,d){for(var f=[],k=0;k<a.length;k++)f.push(a[k](c,
d));return f},{literal:!0,constant:c})},object:function(){var a=[],c=!0;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;var d=this.expect(),d=d.string||d.text;this.consume(":");var e=this.expression();a.push({key:d,value:e});e.constant||(c=!1)}while(this.expect(","))}this.consume("}");return J(function(c,d){for(var e={},m=0;m<a.length;m++){var h=a[m];e[h.key]=h.value(c,d)}return e},{literal:!0,constant:c})}};var Sb={},ua=t("$sce"),fa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",
JS:"js"},W=V.createElement("a"),Ic=sa(T.location.href,!0);kc.$inject=["$provide"];Jc.$inject=["$locale"];Lc.$inject=["$locale"];var Oc=".",Je={yyyy:Y("FullYear",4),yy:Y("FullYear",2,0,!0),y:Y("FullYear",1),MMMM:sb("Month"),MMM:sb("Month",!0),MM:Y("Month",2,1),M:Y("Month",1,1),dd:Y("Date",2),d:Y("Date",1),HH:Y("Hours",2),H:Y("Hours",1),hh:Y("Hours",2,-12),h:Y("Hours",1,-12),mm:Y("Minutes",2),m:Y("Minutes",1),ss:Y("Seconds",2),s:Y("Seconds",1),sss:Y("Milliseconds",3),EEEE:sb("Day"),EEE:sb("Day",!0),
a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Ub(Math[0<a?"floor":"ceil"](a/60),2)+Ub(Math.abs(a%60),2))}},Ie=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,He=/^\-?\d+$/;Kc.$inject=["$locale"];var Fe=$(L),Ge=$(Ha);Mc.$inject=["$parse"];var cd=$({restrict:"E",compile:function(a,c){8>=S&&(c.href||c.name||c.$set("href",""),a.append(V.createComment("IE fix")));if(!c.href&&!c.xlinkHref&&!c.name)return function(a,
c){var g="[object SVGAnimatedString]"===wa.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(g)||a.preventDefault()})}}}),Eb={};q(mb,function(a,c){if("multiple"!=a){var d=ma("ng-"+c);Eb[d]=function(){return{priority:100,link:function(a,g,f){a.$watch(f[d],function(a){f.$set(c,!!a)})}}}}});q(["src","srcset","href"],function(a){var c=ma("ng-"+a);Eb[c]=function(){return{priority:99,link:function(d,e,g){var f=a,k=a;"href"===a&&"[object SVGAnimatedString]"===wa.call(e.prop("href"))&&
(k="xlinkHref",g.$attr[k]="xlink:href",f=null);g.$observe(c,function(a){a&&(g.$set(k,a),S&&f&&e.prop(f,g[k]))})}}}});var vb={$addControl:y,$removeControl:y,$setValidity:y,$setDirty:y,$setPristine:y};Pc.$inject=["$element","$attrs","$scope","$animate"];var Qc=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:Pc,compile:function(){return{pre:function(a,e,g,f){if(!g.action){var k=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};pb(e[0],"submit",
k);e.on("$destroy",function(){c(function(){Wa(e[0],"submit",k)},0,!1)})}var m=e.parent().controller("form"),h=g.name||g.ngForm;h&&rb(a,h,f,h);if(m)e.on("$destroy",function(){m.$removeControl(f);h&&rb(a,h,s,h);J(f,vb)})}}}}}]},dd=Qc(),qd=Qc(!0),Pe=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,Qe=/^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i,Re=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Rc={text:xb,number:function(a,c,d,e,g,f){xb(a,c,d,e,g,f);e.$parsers.push(function(a){var c=
e.$isEmpty(a);if(c||Re.test(a))return e.$setValidity("number",!0),""===a?null:c?a:parseFloat(a);e.$setValidity("number",!1);return s});Ke(e,"number",c);e.$formatters.push(function(a){return e.$isEmpty(a)?"":""+a});d.min&&(a=function(a){var c=parseFloat(d.min);return qa(e,"min",e.$isEmpty(a)||a>=c,a)},e.$parsers.push(a),e.$formatters.push(a));d.max&&(a=function(a){var c=parseFloat(d.max);return qa(e,"max",e.$isEmpty(a)||a<=c,a)},e.$parsers.push(a),e.$formatters.push(a));e.$formatters.push(function(a){return qa(e,
"number",e.$isEmpty(a)||yb(a),a)})},url:function(a,c,d,e,g,f){xb(a,c,d,e,g,f);a=function(a){return qa(e,"url",e.$isEmpty(a)||Pe.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,c,d,e,g,f){xb(a,c,d,e,g,f);a=function(a){return qa(e,"email",e.$isEmpty(a)||Qe.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},radio:function(a,c,d,e){D(d.name)&&c.attr("name",eb());c.on("click",function(){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value)})});e.$render=function(){c[0].checked=
d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e){var g=d.ngTrueValue,f=d.ngFalseValue;C(g)||(g=!0);C(f)||(f=!1);c.on("click",function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==g};e.$formatters.push(function(a){return a===g});e.$parsers.push(function(a){return a?g:f})},hidden:y,button:y,submit:y,reset:y,file:y},hc=["$browser","$sniffer",function(a,c){return{restrict:"E",require:"?ngModel",
link:function(d,e,g,f){f&&(Rc[L(g.type)]||Rc.text)(d,e,g,f,c,a)}}}],ub="ng-valid",tb="ng-invalid",Ma="ng-pristine",wb="ng-dirty",Se=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate",function(a,c,d,e,g,f){function k(a,c){c=c?"-"+hb(c,"-"):"";f.removeClass(e,(a?tb:ub)+c);f.addClass(e,(a?ub:tb)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$name=
d.name;var m=g(d.ngModel),h=m.assign;if(!h)throw t("ngModel")("nonassign",d.ngModel,ga(e));this.$render=y;this.$isEmpty=function(a){return D(a)||""===a||null===a||a!==a};var l=e.inheritedData("$formController")||vb,n=0,p=this.$error={};e.addClass(Ma);k(!0);this.$setValidity=function(a,c){p[a]!==!c&&(c?(p[a]&&n--,n||(k(!0),this.$valid=!0,this.$invalid=!1)):(k(!1),this.$invalid=!0,this.$valid=!1,n++),p[a]=!c,k(c,a),l.$setValidity(a,c,this))};this.$setPristine=function(){this.$dirty=!1;this.$pristine=
!0;f.removeClass(e,wb);f.addClass(e,Ma)};this.$setViewValue=function(d){this.$viewValue=d;this.$pristine&&(this.$dirty=!0,this.$pristine=!1,f.removeClass(e,Ma),f.addClass(e,wb),l.$setDirty());q(this.$parsers,function(a){d=a(d)});this.$modelValue!==d&&(this.$modelValue=d,h(a,d),q(this.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}}))};var r=this;a.$watch(function(){var c=m(a);if(r.$modelValue!==c){var d=r.$formatters,e=d.length;for(r.$modelValue=c;e--;)c=d[e](c);r.$viewValue!==c&&(r.$viewValue=
c,r.$render())}return c})}],Fd=function(){return{require:["ngModel","^?form"],controller:Se,link:function(a,c,d,e){var g=e[0],f=e[1]||vb;f.$addControl(g);a.$on("$destroy",function(){f.$removeControl(g)})}}},Hd=$({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),ic=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=!0;var g=function(a){if(d.required&&e.$isEmpty(a))e.$setValidity("required",!1);else return e.$setValidity("required",
!0),a};e.$formatters.push(g);e.$parsers.unshift(g);d.$observe("required",function(){g(e.$viewValue)})}}}},Gd=function(){return{require:"ngModel",link:function(a,c,d,e){var g=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){if(!D(a)){var c=[];a&&q(a.split(g),function(a){a&&c.push(aa(a))});return c}});e.$formatters.push(function(a){return O(a)?a.join(", "):s});e.$isEmpty=function(a){return!a||!a.length}}}},Te=/^(true|false|\d+)$/,Id=function(){return{priority:100,
compile:function(a,c){return Te.test(c.ngValue)?function(a,c,g){g.$set("value",a.$eval(g.ngValue))}:function(a,c,g){a.$watch(g.ngValue,function(a){g.$set("value",a)})}}}},id=va({compile:function(a){a.addClass("ng-binding");return function(a,d,e){d.data("$binding",e.ngBind);a.$watch(e.ngBind,function(a){d.text(a==s?"":a)})}}}),kd=["$interpolate",function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],
jd=["$sce","$parse",function(a,c){return function(d,e,g){e.addClass("ng-binding").data("$binding",g.ngBindHtml);var f=c(g.ngBindHtml);d.$watch(function(){return(f(d)||"").toString()},function(c){e.html(a.getTrustedHtml(f(d))||"")})}}],ld=Vb("",!0),nd=Vb("Odd",0),md=Vb("Even",1),od=va({compile:function(a,c){c.$set("ngCloak",s);a.removeClass("ng-cloak")}}),pd=[function(){return{scope:!0,controller:"@",priority:500}}],jc={};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var c=ma("ng-"+a);jc[c]=["$parse",function(d){return{compile:function(e,g){var f=d(g[c]);return function(c,d){d.on(L(a),function(a){c.$apply(function(){f(c,{$event:a})})})}}}}]});var sd=["$animate",function(a){return{transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,g,f){var k,m,h;c.$watch(e.ngIf,function(g){Ra(g)?m||(m=c.$new(),f(m,function(c){c[c.length++]=V.createComment(" end ngIf: "+e.ngIf+" ");k={clone:c};a.enter(c,d.parent(),d)})):(h&&(h.remove(),
h=null),m&&(m.$destroy(),m=null),k&&(h=Db(k.clone),a.leave(h,function(){h=null}),k=null))})}}}],td=["$http","$templateCache","$anchorScroll","$animate","$sce",function(a,c,d,e,g){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Sa.noop,compile:function(f,k){var m=k.ngInclude||k.src,h=k.onload||"",l=k.autoscroll;return function(f,k,r,q,I){var s=0,u,w,F,z=function(){w&&(w.remove(),w=null);u&&(u.$destroy(),u=null);F&&(e.leave(F,function(){w=null}),w=F,F=null)};f.$watch(g.parseAsResourceUrl(m),
function(g){var m=function(){!B(l)||l&&!f.$eval(l)||d()},r=++s;g?(a.get(g,{cache:c}).success(function(a){if(r===s){var c=f.$new();q.template=a;a=I(c,function(a){z();e.enter(a,null,k,m)});u=c;F=a;u.$emit("$includeContentLoaded");f.$eval(h)}}).error(function(){r===s&&z()}),f.$emit("$includeContentRequested")):(z(),q.template=null)})}}}}],Jd=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,g){d.html(g.template);a(d.contents())(c)}}}],ud=va({priority:450,
compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),vd=va({terminal:!0,priority:1E3}),wd=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,g,f){var k=f.count,m=f.$attr.when&&g.attr(f.$attr.when),h=f.offset||0,l=e.$eval(m)||{},n={},p=c.startSymbol(),r=c.endSymbol(),s=/^when(Minus)?(.+)$/;q(f,function(a,c){s.test(c)&&(l[L(c.replace("when","").replace("Minus","-"))]=g.attr(f.$attr[c]))});q(l,function(a,e){n[e]=c(a.replace(d,p+k+"-"+h+r))});e.$watch(function(){var c=
parseFloat(e.$eval(k));if(isNaN(c))return"";c in l||(c=a.pluralCat(c-h));return n[c](e,g,!0)},function(a){g.text(a)})}}}],xd=["$parse","$animate",function(a,c){var d=t("ngRepeat");return{transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,link:function(e,g,f,k,m){var h=f.ngRepeat,l=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),n,p,r,s,I,x,u={$id:Ja};if(!l)throw d("iexp",h);f=l[1];k=l[2];(l=l[3])?(n=a(l),p=function(a,c,d){x&&(u[x]=a);u[I]=c;u.$index=d;return n(e,
u)}):(r=function(a,c){return Ja(c)},s=function(a){return a});l=f.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!l)throw d("iidexp",f);I=l[3]||l[1];x=l[2];var B={};e.$watchCollection(k,function(a){var f,k,l=g[0],n,u={},E,A,H,t,C,y,D=[];if(db(a))C=a,n=p||r;else{n=p||s;C=[];for(H in a)a.hasOwnProperty(H)&&"$"!=H.charAt(0)&&C.push(H);C.sort()}E=C.length;k=D.length=C.length;for(f=0;f<k;f++)if(H=a===C?f:C[f],t=a[H],t=n(H,t,f),Aa(t,"`track by` id"),B.hasOwnProperty(t))y=B[t],delete B[t],u[t]=
y,D[f]=y;else{if(u.hasOwnProperty(t))throw q(D,function(a){a&&a.scope&&(B[a.id]=a)}),d("dupes",h,t);D[f]={id:t};u[t]=!1}for(H in B)B.hasOwnProperty(H)&&(y=B[H],f=Db(y.clone),c.leave(f),q(f,function(a){a.$$NG_REMOVED=!0}),y.scope.$destroy());f=0;for(k=C.length;f<k;f++){H=a===C?f:C[f];t=a[H];y=D[f];D[f-1]&&(l=D[f-1].clone[D[f-1].clone.length-1]);if(y.scope){A=y.scope;n=l;do n=n.nextSibling;while(n&&n.$$NG_REMOVED);y.clone[0]!=n&&c.move(Db(y.clone),null,w(l));l=y.clone[y.clone.length-1]}else A=e.$new();
A[I]=t;x&&(A[x]=H);A.$index=f;A.$first=0===f;A.$last=f===E-1;A.$middle=!(A.$first||A.$last);A.$odd=!(A.$even=0===(f&1));y.scope||m(A,function(a){a[a.length++]=V.createComment(" end ngRepeat: "+h+" ");c.enter(a,null,w(l));l=a;y.scope=A;y.clone=a;u[y.id]=y})}B=u})}}}],yd=["$animate",function(a){return function(c,d,e){c.$watch(e.ngShow,function(c){a[Ra(c)?"removeClass":"addClass"](d,"ng-hide")})}}],rd=["$animate",function(a){return function(c,d,e){c.$watch(e.ngHide,function(c){a[Ra(c)?"addClass":"removeClass"](d,
"ng-hide")})}}],zd=va(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Ad=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,g){var f=[],k=[],m=[],h=[];c.$watch(e.ngSwitch||e.on,function(d){var n,p;n=0;for(p=m.length;n<p;++n)m[n].remove();n=m.length=0;for(p=h.length;n<p;++n){var r=k[n];h[n].$destroy();m[n]=r;a.leave(r,function(){m.splice(n,1)})}k.length=0;h.length=
0;if(f=g.cases["!"+d]||g.cases["?"])c.$eval(e.change),q(f,function(d){var e=c.$new();h.push(e);d.transclude(e,function(c){var e=d.element;k.push(c);a.enter(c,e.parent(),e)})})})}}}],Bd=va({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,g){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:g,element:c})}}),Cd=va({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,g){e.cases["?"]=e.cases["?"]||
[];e.cases["?"].push({transclude:g,element:c})}}),Ed=va({link:function(a,c,d,e,g){if(!g)throw t("ngTransclude")("orphan",ga(c));g(function(a){c.empty();c.append(a)})}}),ed=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],Ue=t("ngOptions"),Dd=$({terminal:!0}),fd=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
e={$setViewValue:y};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var m=this,h={},l=e,n;m.databound=d.ngModel;m.init=function(a,c,d){l=a;n=d};m.addOption=function(c){Aa(c,'"option value"');h[c]=!0;l.$viewValue==c&&(a.val(c),n.parent()&&n.remove())};m.removeOption=function(a){this.hasOption(a)&&(delete h[a],l.$viewValue==a&&this.renderUnknownOption(a))};m.renderUnknownOption=function(c){c="? "+Ja(c)+" ?";n.val(c);a.prepend(n);a.val(c);n.prop("selected",
!0)};m.hasOption=function(a){return h.hasOwnProperty(a)};c.$on("$destroy",function(){m.renderUnknownOption=y})}],link:function(e,f,k,m){function h(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(F.parent()&&F.remove(),c.val(a),""===a&&x.prop("selected",!0)):D(a)&&x?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){F.parent()&&F.remove();d.$setViewValue(c.val())})})}function l(a,c,d){var e;d.$render=function(){var a=new Ya(d.$viewValue);q(c.find("option"),
function(c){c.selected=B(a.get(c.value))})};a.$watch(function(){xa(e,d.$viewValue)||(e=ka(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];q(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function n(e,f,g){function k(){var a={"":[]},c=[""],d,h,s,t,v;t=g.$modelValue;v=w(e)||[];var D=n?Wb(v):v,F,K,A;K={};s=!1;var E,J;if(r)if(x&&O(t))for(s=new Ya([]),A=0;A<t.length;A++)K[m]=t[A],s.put(x(e,K),t[A]);else s=new Ya(t);for(A=0;F=D.length,
A<F;A++){h=A;if(n){h=D[A];if("$"===h.charAt(0))continue;K[n]=h}K[m]=v[h];d=p(e,K)||"";(h=a[d])||(h=a[d]=[],c.push(d));r?d=B(s.remove(x?x(e,K):q(e,K))):(x?(d={},d[m]=t,d=x(e,d)===x(e,K)):d=t===q(e,K),s=s||d);E=l(e,K);E=B(E)?E:"";h.push({id:x?x(e,K):n?D[A]:A,label:E,selected:d})}r||(y||null===t?a[""].unshift({id:"",label:"",selected:!s}):s||a[""].unshift({id:"?",label:"",selected:!0}));K=0;for(D=c.length;K<D;K++){d=c[K];h=a[d];z.length<=K?(t={element:C.clone().attr("label",d),label:h.label},v=[t],z.push(v),
f.append(t.element)):(v=z[K],t=v[0],t.label!=d&&t.element.attr("label",t.label=d));E=null;A=0;for(F=h.length;A<F;A++)s=h[A],(d=v[A+1])?(E=d.element,d.label!==s.label&&E.text(d.label=s.label),d.id!==s.id&&E.val(d.id=s.id),d.selected!==s.selected&&E.prop("selected",d.selected=s.selected)):(""===s.id&&y?J=y:(J=u.clone()).val(s.id).attr("selected",s.selected).text(s.label),v.push({element:J,label:s.label,id:s.id,selected:s.selected}),E?E.after(J):t.element.append(J),E=J);for(A++;v.length>A;)v.pop().element.remove()}for(;z.length>
K;)z.pop()[0].element.remove()}var h;if(!(h=t.match(d)))throw Ue("iexp",t,ga(f));var l=c(h[2]||h[1]),m=h[4]||h[6],n=h[5],p=c(h[3]||""),q=c(h[2]?h[1]:m),w=c(h[7]),x=h[8]?c(h[8]):null,z=[[{element:f,label:""}]];y&&(a(y)(e),y.removeClass("ng-scope"),y.remove());f.empty();f.on("change",function(){e.$apply(function(){var a,c=w(e)||[],d={},h,k,l,p,t,u,v;if(r)for(k=[],p=0,u=z.length;p<u;p++)for(a=z[p],l=1,t=a.length;l<t;l++){if((h=a[l].element)[0].selected){h=h.val();n&&(d[n]=h);if(x)for(v=0;v<c.length&&
(d[m]=c[v],x(e,d)!=h);v++);else d[m]=c[h];k.push(q(e,d))}}else{h=f.val();if("?"==h)k=s;else if(""===h)k=null;else if(x)for(v=0;v<c.length;v++){if(d[m]=c[v],x(e,d)==h){k=q(e,d);break}}else d[m]=c[h],n&&(d[n]=h),k=q(e,d);1<z[0].length&&z[0][1].id!==h&&(z[0][1].selected=!1)}g.$setViewValue(k)})});g.$render=k;e.$watch(k)}if(m[1]){var p=m[0];m=m[1];var r=k.multiple,t=k.ngOptions,y=!1,x,u=w(V.createElement("option")),C=w(V.createElement("optgroup")),F=u.clone();k=0;for(var z=f.children(),J=z.length;k<J;k++)if(""===
z[k].value){x=y=z.eq(k);break}p.init(m,y,F);r&&(m.$isEmpty=function(a){return!a||0===a.length});t?n(e,f,m):r?l(e,f,m):h(e,f,m,p)}}}}],hd=["$interpolate",function(a){var c={addOption:y,removeOption:y};return{restrict:"E",priority:100,compile:function(d,e){if(D(e.value)){var g=a(d.text(),!0);g||e.$set("value",d.text())}return function(a,d,e){var h=d.parent(),l=h.data("$selectController")||h.parent().data("$selectController");l&&l.databound?d.prop("selected",!1):l=c;g?a.$watch(g,function(a,c){e.$set("value",
a);a!==c&&l.removeOption(c);l.addOption(a)}):l.addOption(e.value);d.on("$destroy",function(){l.removeOption(e.value)})}}}}],gd=$({restrict:"E",terminal:!0});T.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):((Ba=T.jQuery)&&Ba.fn.on?(w=Ba,J(Ba.fn,{scope:Ka.scope,isolateScope:Ka.isolateScope,controller:Ka.controller,injector:Ka.injector,inheritedData:Ka.inheritedData}),Fb("remove",!0,!0,!1),Fb("empty",!1,!1,!1),Fb("html",!1,!1,!0)):w=R,Sa.element=w,Zc(Sa),w(V).ready(function(){Wc(V,
dc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}.ng-hide-add-active,.ng-hide-remove{display:block!important;}</style>');
//# sourceMappingURL=angular.min.js.map
;

/* file-end: js/lib/angular/1.2.18/angular.min.js 
----------------------------------------------------------------------------------*/

/* ---------------------------------------------------------------------------------
   file-start: js/lib/angular/ng-infinite-scroll.min.js 
*/

/* ng-infinite-scroll - v1.0.0 - 2013-02-23 */
var mod;mod=angular.module("infinite-scroll",[]),mod.directive("infiniteScroll",["$rootScope","$window","$timeout",function(i,n,e){return{link:function(t,l,o){var r,c,f,a;return n=angular.element(n),f=0,null!=o.infiniteScrollDistance&&t.$watch(o.infiniteScrollDistance,function(i){return f=parseInt(i,10)}),a=!0,r=!1,null!=o.infiniteScrollDisabled&&t.$watch(o.infiniteScrollDisabled,function(i){return a=!i,a&&r?(r=!1,c()):void 0}),c=function(){var e,c,u,d;return d=n.height()+n.scrollTop(),e=l.offset().top+l.height(),c=e-d,u=n.height()*f>=c,u&&a?i.$$phase?t.$eval(o.infiniteScroll):t.$apply(o.infiniteScroll):u?r=!0:void 0},n.on("scroll",c),t.$on("$destroy",function(){return n.off("scroll",c)}),e(function(){return o.infiniteScrollImmediateCheck?t.$eval(o.infiniteScrollImmediateCheck)?c():void 0:c()},0)}}}]);
;

/* file-end: js/lib/angular/ng-infinite-scroll.min.js 
----------------------------------------------------------------------------------*/

/* ---------------------------------------------------------------------------------
   file-start: js/core/angular/ljMemories.js 
*/

/* ---------------------------------------------------------------------------------
   file-start: js/core/angular/bubble.js 
*/

/* ---------------------------------------------------------------------------------
   file-start: js/core/angular/common.js 
*/

/*
 * Include LJ.Templates as module dependency to have access to templates,
 * required using require_template. Don't forget to require this file.
 *
 * @example
 *   js:
 *     angular.module('MyModule', ['LJ.Templates']);
 *
 *   html:
 *     <div ng-include src="'ljMessages.ng.tmpl'">
 *
 * If you need direct access to template as a string, use $templateCache.
 *
 * Notice:
 *   By default required templates will be named in $templateCache as filename,
 *   e.g. `angular/widgets/social/twitter.ng.tmpl` will have name `twitter.ng.tmpl`
 *
 *   If two files have same name, but located in different folders, e.g.
 *   `angular/widgets/social/v1/twitter.ng.tmpl` and `angular/widgets/social/v2/twitter.ng.tmpl`
 *   files will be named as a file and folder they are located in =>
 *   `v1/twitter.ng.tmpl` and `v2/twitter.ng.tmpl`
 *
 */
angular.module('LJ.Templates', []).run(['$templateCache', function($templateCache) {
  var templates = angular.copy( LJ.get('template') );
  var temp = [];

  function getDups(array, regexp) {
    return array.filter(function (item, index) {
      return item.match(regexp) && item;
    });
  }

  function getContains(string1, string2) {
    var index = 0;

    for (var i = 0; i < string1.length; i++) {
      if ( string2.indexOf( string1.substr(0, i + 1) ) !== -1 ) {
        index = i + 1;
      }
    }

    return string1.slice(0, index);
  }

  angular.forEach(templates, function (value, key) {
    temp.push(key.split('').reverse().join(''));
  });

  // Convert templates to uniq names
  temp.forEach(function (value, index) {
    var match = value.match(/([\w\.]*)/),
        name, regexp, dups, max, pathPattern;

    if ( !(match && match[1]) ) {
      return;
    }

    regexp = new RegExp( match[1].replace('.', '\\.') );

    dups = getDups(temp, regexp);

    max = value.length - 1;

    dups.forEach(function (dup) {
      var contains = getContains(value, dup);
      var length = contains.length;

      max = max > length ? length : max;
    });

    if (dups.length === 1) {
      name = value.split('').reverse().join('');
      templates[name.split('/').pop()] = templates[name];

      delete templates[name];

      return;
    }

    dups.push(value);

    pathPattern = new RegExp('\\/?(\\w*.{' + escape(max) + '})$');

    dups.forEach(function (item, index) {
      var exec;

      item = item.split('').reverse().join('');
      exec = pathPattern.exec(item);

      if (templates.hasOwnProperty(item) && (exec && exec[1]) ) {
        templates[exec[1]] = templates[item];


        if (exec[1] !== item) {
          delete templates[item];
        }
      }
    });

  });

  angular.forEach(templates, function (value, key) {
    $templateCache.put(key, value);
  });

}]);

/*
 * Common directives
 */

angular.module('LJ.Directives', [])

/**
 * Insert html and do not watch for changes
 */
.directive('ljHtml', ['$parse', function ($parse) {
  return {
    compile: function (element, attrs) {
      var getter = $parse( attrs.ljHtml );

      return function link(scope, element) {
        element.html( getter(scope) || '' );
      };
    }
  };
}])

/**
 * Insert html and watch for changes
 */
.directive('ljHtmlLive', ['$parse', function ($parse) {
  return {
    scope: true,
    restrict: 'A',
    compile: function (element, attrs) {
      var getValue = $parse(attrs.ljHtmlLive);

      return function link(scope, element) {
        scope.$watch(function () {
          return getValue(scope);
        }, function (value) {
          element.html( value || '' );
        });
      };
    }
  };
}])

/**
 * Replace ng-include root with it's content,
 * if you have to just include template into the DOM.
 * Notice: should be used in conjunction with ng-include
 *
 * @example
 *
 *     <div ng-include="'Settings.html'" include-replace></div>
 */
.directive('includeReplace', function () {
  return {
    require: 'ngInclude',
    link: function (scope, element) {
      element.replaceWith( element.contents() );
    }
  };
})

/**
 * Notice:
 *   lj-ml-compile could be only used on node without any other directives,
 *   otherwise their behavior will be duplicated (ng-click handlers for example)
 *
 * @example
 *     <!-- replace span text with ml variable value -->
 *     <span lj-ml="user.text.save"></span>
 *
 * @example
 *     <!-- replace `placeholder` attr with ml variable value -->
 *     <input type="text"  lj-ml="user.text.save" lj-ml-attr="placeholder" />
 *
 * @example
 *     <!-- compile angular attributes inside of ml-variable -->
 *     <span lj-ml="some.variable" lj-ml-compile></span>
 *
 * @example
 *     <!-- object notation syntax -->
 *     <span
 *         lj-ml="{
 *             'some.filter': isFilter,
 *             'some.group': isGroup
 *         }"
 *         ></span>
 *
 * @example
 *
 *     Html:
 *
 *     Simple:
 *       <span
 *         lj-ml="entryunit.comments"
 *         lj-ml-resolve="{reply_count: item.comments_cnt}"
 *         ></span>
 *
 *     Deferred:
 *       <!-- wait for substitutions like [[username]] -->
 *       <span lj-ml="user.text.save" lj-ml-resolve="mlResolve" />
 *
 *       var mlDefer = $q.defer();
 *
 *       // Notice:
 *       //   Object with `promise` field is needed!
 *       //   If promise is assigned directly, it will be resolved to `undefined`
 *       $scope.mlResolve = { promise: mlDefer.promise }
 *       mlDefer.resolve({ username: 'good' })
 */
.directive('ljMl', ['$parse', '$compile', function($parse, $compile) {
  return {
    link: function(scope, element, attrs) {

      if ( attrs.hasOwnProperty('ljMlDynamic') ) {
        attrs.$observe('ljMl', function () {
          processMl(attrs.ljMl);
        });
      }

      processMl(attrs.ljMl);

      function processMl(mlVar) {
        var resolve;

        // ml has been processed yet
        if ( attrs.mlParsed ) {
          return;
        }

        // we don't need substitutions
        if ( !attrs.ljMlResolve ) {
          replaceMl(mlVar);
          return;
        }

        resolve = $parse(attrs.ljMlResolve)(scope);

        if ( !resolve.promise ) {
          replaceMl(mlVar, resolve);
          return;
        }

        // if object has promise key => wait for promise resolve
        resolve.promise.then(function (data) {
          replaceMl(mlVar, data);
        });
      }

      // replace variable with value
      function replaceMl(mlVar, dictionary) {
        var ml = LJ.ml(objNotation( mlVar ), dictionary);

        // attribute
        if (attrs.ljMlAttr) {
          element.attr( attrs.ljMlAttr, ml);
        } else {
          // html
          element.html(ml);
        }

        if ( attrs.hasOwnProperty('ljMlCompile') ) {
          // prevent cycled compilation of lj-ml directive
          element.attr('ml-parsed', true);
          $compile(element)(scope);
        }
      }

      /**
       * Allow object notation for ml
       * @param  {String} mlVar Variable value to check
       * @return {String}       Result ml variable value
       */
      function objNotation(mlVar) {
        if ( mlVar.indexOf('{') === -1 ) {
          return mlVar;
        }

        var obj = scope.$eval(mlVar),
            prop;

        if ( obj && typeof obj === 'object' ) {
          for (prop in obj) {
            if ( obj.hasOwnProperty(prop) && obj[prop] ) {
              return prop;
            }
          }
        }

        return mlVar;
      }
    }
  };
}])
.directive('ljSwitchOff', ['$document', '$parse',
                 function ( $document ,  $parse ) {
  /*
   * When area outside of element is clicked or ESC is pressed
   * 'showPopup' will be set to false and 'doSomething()' will be evaluated.
   *
   * <div ng-show="showPopup" lj-switch-off="showPopup" lj-switch-off-action="doSomething()"></div>
   *
   * Skip switching:
   * Notice: now skipping of switch is working for all `lj-switch-off` directives (is not grouped)
   * <span lj-switch-off-skip>This element prevents switching via `lj-switch-off` directive</span>
   *
   */

  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      var state    = $parse(attrs.ljSwitchOff),
          _clicked = false;

      element.on('click', function () {
        _clicked = true;
      });

      $document
        .on('keydown', keyPressed)
        .on('click', '[lj-switch-off-skip]', preventSwitching)
        .on('click', documentClick);

      // cleanup
      scope.$on('$destroy', function () {
        $document
          .off('keydown', keyPressed)
          .off('click', '[lj-switch-off-skip]', preventSwitching)
          .off('click', documentClick);
      });

      function close() {
        if (attrs.ljSwitchOffAction) {
          scope.$eval(attrs.ljSwitchOffAction);
        }

        state.assign(scope, false);
      }

      function preventSwitching() {
        _clicked = true;
      }

      function documentClick(event) {

        // right click in Firefox is closing the bubble
        if (event.button === 2) {
          return;
        }

        if ( !_clicked && state(scope, { $event: event }) ) {
          scope.$apply(close);
        }

        _clicked = false;
      }

      function keyPressed(event) {
        /** ESC */
        if ( event.which === 27 && state(scope, { $event: event }) ) {
          scope.$apply(close);
        }
      }
    }
  };
}]).
directive('ljDisabled', [function() {
  /*
   * Toggles disabled state for LiveJournal button
   *
   * <div class="b-ljbutton b-ljbutton-submit">
   *   <button lj-disabled="!comment">Submit comment</button>
   * </div>
   */
  return function (scope, element, attrs) {
    scope.$watch(attrs.ljDisabled, function(value) {
      element.prop('disabled', value);
      element.parent().toggleClass('b-ljbutton-disabled', value);
    });
  };
}])
.directive('focusAndSelect', ['$timeout', function ($timeout) {
  /*
   * Focus and select an input or textarea when expression is true
   *
   * <input focus-and-select="show">
   */
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      var attr = attrs.focusAndSelect,
          timeout = 50; // scroll can jump under 50ms

      scope.$watch(attr, function (value, prev) {
        if (value) {
          $timeout(function () {
            element[0].focus();
            element[0].select();
          }, timeout);
        } else if (prev) {
          // fix: blur for IE
          element[0].blur();
        }
      });
    }
  };
}])

/**
 * Debounced update of scope variable on <input /> changes
 *   [lj-debounce-delay]: option for set delay duration (in milliseconds). Default: 300
 *
 * @example
 *
 *   <!-- $scope.model.search will be updated with debounce delay 200ms ->
 *   <input type="search" lj-debounce="model.search" lj-debounce-delay="200" />
 */
.directive('ljDebounce', ['$parse', function ($parse) {
  return {
    link: function (scope, element, attrs) {
      var getter = $parse(attrs.ljDebounce),
          setter = getter.assign,
          delay  = attrs.ljDebounceDelay ? scope.$eval(attrs.ljDebounceDelay) : 300,
          events = 'change paste keyup search',
          handler,
          unwatch,
          _value;

      // changes of variable should be reflected in element
      unwatch = scope.$watch(function () {
        _value = getter(scope);
        return _value;
      }, function (value) {
        element.val(value);
      });

      handler = LJ.Function.debounce(function () {
        var value = element.val();

        if (value !== _value) {
          scope.$apply(function () {
            setter(scope, value);
          });
        }
      }, delay);

      element.on(events, handler);

      scope.$on('$destroy', function () {
        element.off(events, handler);
        unwatch();
      });
    }
  };
}])

/**
 * Scroll to the element, when ljScroll="expression" is true
 *
 * HTML:
 *   <h1 lj-scroll="model.state.scrollTop"></h1>
 *
 * JS:
 *   // scroll to element will be done and prop state will be `false` again
 *   model.state.scrollTop = true;
 */
.directive('ljScroll', ['$parse', function($parse) {
  return {
    restrict: 'A',
    compile: function (element, attrs) {
      var $window = angular.element(window),
          root = angular.element('html, body'),
          ljScroll = $parse(attrs.ljScroll),
          isUp = attrs.hasOwnProperty('ljScrollUp');

      /**
       * Header correction that should affect scrolling
       * @return {Number} Header coorrection
       */
      function headerCorrection() {
        if ( LJ.Flags.isDisabled('schemius') ) {
          return 0;
        }

        var header = angular.element('.s-header');

        return header.css('position') === 'fixed' ? -header.outerHeight() : 0;
      }

      return function link(scope, element) {
        scope.$watch(function () {
          return ljScroll(scope);
        }, function (value) {
          var top;

          if (value) {
            top = element.offset().top;

            // scroll to element only if we are below
            if ( !isUp || (isUp && $window.scrollTop() > top) ) {
              root.animate({
                scrollTop: top + headerCorrection()
              });
            }

            // reset state to false
            ljScroll.assign(scope, false);
          }
        });
      };
    }
  };
}])

.directive('ljScreenable', [function() {
  var $document = angular.element(document);

  return {
    link: function ($scope, element, attrs) {
      var event = attrs.ljScreenable;

      function check () {
        if ( element.is(':screenable') ) {

          // wait for angular bindings applied; eg. data-url="{{ item.url }}"
          $scope.$evalAsync(function () {
            LJ.Event.trigger(event, element.get(0));
          });

          $document.off('scroll', check);
        }
      }

      $document.on('scroll', check);

      $scope.$on('$destroy', function () {
        $document.off('scroll', check);
      });

      check();
    }
  };
}])
.directive('ljSvgIcon', [function () {
  return {
    scope: {
      id: '=ljSvgIcon'
    },
    link: function ($scope, $element) {
      var $href = $element.find('use');

      $href.attr('xlink:href', '#' + $scope.id);
    },
    template: '<svg class="svgicon" style="pointer-events: none; visibility: hidden;"><use xlink:href=""></use></svg>'
  }
}])
.directive('ljCut', [function () {
  return {
    link: function (scope, element) {
      var options = element.data('widget-options');

      element.ljcut(options);
    }
  };
}]);;

/* file-end: js/core/angular/common.js 
----------------------------------------------------------------------------------*/

Site.page.template['Widgets/ljBubble.tmpl'] = '<div\n    class=\"b-popup bubble-node b-popupus b-popupus-blue b-popup-withclosecontrol b-bubble-{{bubble.name}}\"\n    ng-show=\"show\"\n    lj-switch-off=\"show\"\n    lj-switch-off-action=\"bubble.close()\"\n    ng-style=\"{ left: position.x, top: position.y, visibility: visibility }\"\n    ng-class=\"{\n        \'b-popup-noclosecontrol\': !bubble.options.closeControl\n    }\"\n    >\n    <div class=\"b-popup-outer\">\n        <div class=\"b-popup-inner\">\n            <i class=\"i-popup-arr\" ng-class=\"arrowClass()\">\n                <i class=\"i-popup-arr-brdr-outer\">\n                    <i class=\"i-popup-arr-brdr-inner\">\n                        <i class=\"i-popup-arr-bg\"></i>\n                    </i>\n                </i>\n            </i>\n            <div ng-include src=\"template\"></div>\n            <i class=\"i-popup-close\" ng-click=\"bubble.close()\"></i>\n        </div>\n    </div>\n</div>\n';
LJ.injectStyle('/* LJSUP-15116 General styles for pupupus\n----------------------------------------*/\n.b-popupus {\n    position: absolute;\n    margin: 0;\n    padding: 0;\n    border: 2px solid;\n    border-radius: 10px;\n    -webkit-transition: opacity .3s ease;\n       -moz-transition: opacity .3s ease;\n         -o-transition: opacity .3s ease;\n            transition: opacity .3s ease;\n    }\n    BODY .b-popupus .b-popup-outer {\n        margin: 0;\n        padding: 15px;\n        border: 0;\n        border-radius: 8px;\n        background: #FFF;\n        *zoom: 1;\n        }\n        BODY .b-popupus .b-popup-inner {\n            margin: 0;\n            padding: 0;\n            border: 0;\n            -webkit-border-radius: 0;\n                    border-radius: 0;\n            }\n\n/* Arrows\n----------------------------------------*/\n/* Top Side */\n    BODY .b-popupus .i-popup-arrtl.i-popup-arr,\n    BODY .b-popupus .i-popup-arrtr.i-popup-arr {\n        border-right: 15px solid transparent;\n        border-bottom: 15px solid;\n        border-left: 15px solid transparent;\n        }\n/* Bottom Side */\n    BODY .b-popupus .i-popup-arrbl.i-popup-arr,\n    BODY .b-popupus .i-popup-arrbr.i-popup-arr {\n        border-top: 15px solid;\n        border-right: 15px solid transparent;\n        border-left: 15px solid transparent;\n        }\n/* Left Side */\n    BODY .b-popupus .i-popup-arrlt.i-popup-arr,\n    BODY .b-popupus .i-popup-arrlb.i-popup-arr {\n        border-top: 15px solid transparent;\n        border-right: 15px solid;\n        border-bottom: 15px solid transparent;\n        }\n/* Right Side */\n    BODY .b-popupus .i-popup-arrrt.i-popup-arr,\n    BODY .b-popupus .i-popup-arrrb.i-popup-arr {\n        border-top: 15px solid transparent;\n        border-bottom: 15px solid transparent;\n        border-left: 15px solid;\n        }\n\n\n\n/* Arrows Outers\n----------------------------------------*/\n/* Top Side */\n    BODY .b-popupus .i-popup-arrtl .i-popup-arr-brdr-outer,\n    BODY .b-popupus .i-popup-arrtr .i-popup-arr-brdr-outer {\n        top: 2px;\n        left: -15px;\n        border-right: 15px solid transparent;\n        border-bottom: 15px solid #FFF;\n        border-left: 15px solid transparent;\n        }\n/* Bottom Side */\n    BODY .b-popupus .i-popup-arrbl .i-popup-arr-brdr-outer,\n    BODY .b-popupus .i-popup-arrbr .i-popup-arr-brdr-outer {\n        bottom: 2px;\n        left: -15px;\n        border-top: 15px solid #FFF;\n        border-right: 15px solid transparent;\n        border-left: 15px solid transparent;\n        }\n/* Left Side */\n    BODY .b-popupus .i-popup-arrlt .i-popup-arr-brdr-outer,\n    BODY .b-popupus .i-popup-arrlb .i-popup-arr-brdr-outer {\n        top: -15px;\n        left: 2px;\n        border-top: 15px solid transparent;\n        border-right: 15px solid #FFF;\n        border-bottom: 15px solid transparent;\n        }\n/* Right Side */\n    BODY .b-popupus .i-popup-arrrt .i-popup-arr-brdr-outer,\n    BODY .b-popupus .i-popup-arrrb .i-popup-arr-brdr-outer {\n        top: -15px;\n        right: 2px;\n        border-top: 15px solid transparent;\n        border-bottom: 15px solid transparent;\n        border-left: 15px solid #FFF;\n        }\n\n\n\n/* Arrows inner\n----------------------------------------*/\nBODY .b-popupus .i-popup-arr-brdr-inner {\n    display: none;\n    }\n    BODY .b-popupus .i-popup-arr-bg {\n        display: none;\n        }\n\n\n/* Arrows position\n----------------------------------------*/\n    BODY .b-popupus .i-popup-arrtl {\n        top: -15px;\n        left: 50px;\n        }\n    BODY .b-popupus .i-popup-arrtr {\n        top: -15px;\n        right: 50px;\n        }\n    BODY .b-popupus .i-popup-arrbl {\n        bottom: -15px;\n        left: 50px;\n        }\n    BODY .b-popupus .i-popup-arrbr {\n        right: 50px;\n        bottom: -15px;\n        }\n    BODY .b-popupus .i-popup-arrlt {\n        top: 50px;\n        left: -15px;\n        }\n    BODY .b-popupus .i-popup-arrlb {\n        bottom: 50px;\n        left: -15px;\n        }\n    BODY .b-popupus .i-popup-arrrt {\n        top: 50px;\n        right: -15px;\n        }\n    BODY .b-popupus .i-popup-arrrb {\n        right: -15px;\n        bottom: 50px;\n        }\n\n    /* popupus on v3 */\n    /* top */\n    BODY.s-schemius .b-popupus .i-popup-arrt {\n        top: -15px;\n        left: 50%;\n        margin: 0 0 0 -6px;\n        }\n    /* top left */\n    BODY.s-schemius .b-popupus .i-popup-arrtl {\n        top: -15px;\n        left: 31px;\n        }\n    /* top right */\n    BODY.s-schemius .b-popupus .i-popup-arrtr {\n        top: -15px;\n        right: 31px;\n        }\n    /* bottom */\n    BODY.s-schemius .b-popupus .i-popup-arrb {\n        bottom: -15px;\n        left: 50%;\n        margin: 0 0 0 -6px;\n        }\n    /* bottom left */\n    BODY.s-schemius .b-popupus .i-popup-arrbl {\n        bottom: -15px;\n        left: 31px;\n        }\n    /* bottom right */\n    BODY.s-schemius .b-popupus .i-popup-arrbr {\n        bottom: -15px;\n        right: 31px;\n        }\n    /* left */\n    BODY.s-schemius .b-popupus .i-popup-arrl {\n        top: 50%;\n        left: -15px;\n        margin: -6px 0 0;\n        }\n    /* left top */\n    BODY.s-schemius .b-popupus .i-popup-arrlt {\n        left: -15px;\n        top: 15px;\n        }\n    /* left bottom */\n    BODY.s-schemius .b-popupus .i-popup-arrlb {\n        left: -15px;\n        bottom: 15px;\n        }\n    /* right */\n    BODY.s-schemius .b-popupus .i-popup-arrr {\n        top: 50%;\n        right: -15px;\n        margin: -6px 0 0;\n        }\n    /* right top */\n    BODY.s-schemius .b-popupus .i-popup-arrrt {\n        right: -15px;\n        top: 15px;\n        }\n    /* right bottom */\n    BODY.s-schemius .b-popupus .i-popup-arrrb {\n        right: -15px;\n        bottom: 15px;\n        }\n\n\n\n/* Close button\n----------------------------------------*/\n.b-popupus .i-popup-close {\n    position: absolute;\n    top: 5px;\n    right: 5px;\n    width: 16px;\n    height: 16px;\n    margin: 0;\n    padding: 0;\n    background: url(/img/icons/popup-close.png?v=15718) 0 0 no-repeat;\n    font: 0/0 serif;\n    }\n.b-popupus .i-popup-close:hover {\n    background-position: 0 -16px;\n    }\n\n\n/* With Close button\n----------------------------------------*/\nBODY .b-popupus.b-popup-withclosecontrol .b-popup-outer {\n    padding: 15px 35px 15px 15px;\n    }\n\n/* Without Close button\n----------------------------------------*/\nBODY .b-popupus.b-popup-noclosecontrol .b-popup-outer {\n    padding: 15px;\n    }\n\n\n/* LJSV-2573 Confirm Popup\n----------------------------------------*/\nBODY .b-popupus-confirm {\n    -webkit-box-shadow: none;\n            box-shadow: none;\n    z-index: 5001;\n    }\n    .b-popupus-confirm .b-dialog-footer .b-ljbutton {\n        margin-right: 0.5em;\n        margin-left: 0.5em;\n        }\n\n\n\n/* popup for tiny sreens (LJSUP-18502) */\n@media all and (max-width: 650px) {\n\n    /* class for body */\n    HTML BODY.p-openpopup {\n        overflow: hidden;\n        position: relative;\n        }\n\n        /* fader */\n        .p-openpopup .b-fader {\n            display: block;\n            position: fixed;\n            top: 0 !important;\n            right: 0 !important;\n            bottom: 0 !important;\n            left: 0 !important;\n            z-index: 1999;\n            opacity: 0.5;\n            margin: 0;\n            padding: 0;\n            background-color: #000;\n            }\n\n        /* popup */\n        HTML BODY.p-openpopup .b-popupus {\n            overflow-x: auto;\n            overflow-y: auto;\n            position: fixed;\n            top: 0 !important;\n            right: 0 !important;\n            bottom: 0 !important;\n            left: 0 !important;\n            z-index: 5001;\n            margin: 0;\n            padding: 0;\n            border: 0;\n            box-shadow: none;\n            border-radius: 0;\n            background: none;\n            }\n\n            /* outer */\n            HTML BODY.p-openpopup .b-popupus .b-popup-outer {\n                margin: 15px;\n                padding: 0;\n                border-radius: 3px;\n                background: #FFF;\n                }\n\n                /* inner */\n                HTML BODY.p-openpopup .b-popupus .b-popup-inner {\n                    margin: 0;\n                    padding: 30px;\n                    }\n\n                    /* show close button */\n                    HTML BODY.p-openpopup .b-popup-noclosecontrol .i-popup-close {\n                        display: block;\n                        }\n\n                    /* hide popup arrow */\n                    HTML BODY.p-openpopup .b-popupus .i-popup-arr {\n                        display: none;\n                        }\n\n                    /* close button */\n                    HTML BODY.p-openpopup .b-popupus .i-popup-close {\n                        position: absolute;\n                        top: 12px;\n                        right: 12px;\n                        width: 30px;\n                        height: 30px;\n                        background-image: url(/img/schemius/s-icons.svg?v=2);\n                        background-position: -62px 6px;\n                        background-repeat: no-repeat;\n                        cursor: pointer;\n                        font: 0px/0 a;\n                        }\n\n}\n\n');
LJ.injectStyle('/* LJSUP-15116 Colors mod for pupupus\n----------------------------------------*/\n.b-popupus-blue {\n	border-color: #1F4C9E;\n	-webkit-box-shadow: 0 10px 40px #6E8BB7;\n	        box-shadow: 0 10px 40px #6E8BB7;\n	}\n	BODY .b-popupus-blue .b-popup-outer {\n		background-image: -webkit-linear-gradient(top, #FFF 0%, #E1E2E6 100%);\n		background-image:    -moz-linear-gradient(top, #FFF 0%, #E1E2E6 100%);\n		background-image:      -o-linear-gradient(top, #FFF 0%, #E1E2E6 100%);\n		background-image:   linear-gradient(to bottom, #FFF 0%, #E1E2E6 100%);\n		}\n\n\n\n/* Background Fix for Horizontal Arrows on Popup\nProblem: gradient background do not compare on solid arrow background\nFix: two backgrounds (from top to 50% height and from bottom to 50%) with 80px solid colors\n----------------------------------------*/\n.b-popupus-horizontal {\n	}\n	BODY .b-popupus-horizontal.b-popupus-blue .b-popup-outer {\n		background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNlMWUyZTYiIHN0b3Atb3BhY2l0eT0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);\n		background-image:\n			-webkit-linear-gradient(top, #FFF 0%, #FFF 80px, #F0F0F0 51%, transparent 51%, transparent 100%),\n			-webkit-linear-gradient(bottom, #E1E2E6 0%, #E1E2E6 80px, #F0F0F0 51%, transparent 51%, transparent 100%);\n		background-image:\n			-moz-linear-gradient(top, #FFF 0%, #FFF 80px, #F0F0F0 51%, transparent 51%, transparent 100%),\n			-moz-linear-gradient(bottom, #E1E2E6 0%, #E1E2E6 80px, #F0F0F0 51%, transparent 51%, transparent 100%);\n		background-image:\n			-o-linear-gradient(top, #FFF 0%, #FFF 80px, #F0F0F0 51%, transparent 51%, transparent 100%),\n			-o-linear-gradient(bottom, #E1E2E6 0%, #E1E2E6 80px, #F0F0F0 51%, transparent 51%, transparent 100%);\n		background-image:\n			linear-gradient(top, #FFF 0%, #FFF 80px, #F0F0F0 51%, transparent 51%, transparent 100%),\n			linear-gradient(bottom, #E1E2E6 0%, #E1E2E6 80px, #F0F0F0 51%, transparent 51%, transparent 100%);\n		}\n\n\n\n/* Arrow\n----------------------------------------*/\n/* Top Side */\n	BODY .b-popupus-blue .i-popup-arrtl.i-popup-arr,\n	BODY .b-popupus-blue .i-popup-arrtr.i-popup-arr {\n		border-bottom-color: #1F4C9E;\n		}\n/* Bottom Side */\n	BODY .b-popupus-blue .i-popup-arrbl.i-popup-arr,\n	BODY .b-popupus-blue .i-popup-arrbr.i-popup-arr {\n		border-top-color: #1F4C9E;\n		}\n/* Left Side */\n	BODY .b-popupus-blue .i-popup-arrlt.i-popup-arr,\n	BODY .b-popupus-blue .i-popup-arrlb.i-popup-arr {\n		border-right-color: #1F4C9E;\n		}\n/* Right Side */\n	BODY .b-popupus-blue .i-popup-arrrt.i-popup-arr,\n	BODY .b-popupus-blue .i-popup-arrrb.i-popup-arr {\n		border-left-color: #1F4C9E;\n		}\n\n\n\n/* Arrow outers\n----------------------------------------*/\n/* Top Side */\n	BODY .b-popupus-blue .i-popup-arrtl .i-popup-arr-brdr-outer,\n	BODY .b-popupus-blue .i-popup-arrtr .i-popup-arr-brdr-outer {\n		border-bottom-color: #FFF;\n		}\n/* Bottom Side */\n	BODY .b-popupus-blue .i-popup-arrbl .i-popup-arr-brdr-outer,\n	BODY .b-popupus-blue .i-popup-arrbr .i-popup-arr-brdr-outer {\n		border-top-color: #FFF;\n		}\n/* Left Side */\n	BODY .b-popupus-blue .i-popup-arrlt .i-popup-arr-brdr-outer {\n		border-right-color: #FFF;\n		}\n	BODY .b-popupus-blue .i-popup-arrlb .i-popup-arr-brdr-outer {\n		border-right-color: #FFF;\n		}\n/* Right Side */\n	BODY .b-popupus-blue .i-popup-arrrt .i-popup-arr-brdr-outer {\n		border-left-color: #FFF;\n		}\n	BODY .b-popupus-blue .i-popup-arrrb .i-popup-arr-brdr-outer {\n		border-left-color: #FFF;\n		}\n\n/* LJSUP-17656: Redesign of popupus and contextualhover pop-ups\n----------------------------------------*/\n\n.s-schemius .b-popupus,\n.j-layer-air .b-popupus {\n	border: 0;\n	box-shadow: 0 0 3px #F2F6F8;\n	background: #FFF;\n	}\n\nBODY.s-schemius .b-popupus-blue .b-popup-outer,\nBODY.j-layer-air .b-popupus-blue .b-popup-outer {\n	border-radius: 7px;\n	border: 1px solid #DAE3E6;\n	background-image: none;\n	}\n\n/* Top Side */\n	.s-schemius .b-popupus .i-popup-arrtl.i-popup-arr,\n	.s-schemius .b-popupus .i-popup-arrtr.i-popup-arr,\n	.j-layer-air .b-popupus .i-popup-arrtl.i-popup-arr,\n	.j-layer-air .b-popupus .i-popup-arrtr.i-popup-arr {\n		border-bottom-color: #D9E6EA;\n		}\n/* Bottom Side */\n	.s-schemius .b-popupus .i-popup-arrbl.i-popup-arr,\n	.s-schemius .b-popupus .i-popup-arrbr.i-popup-arr,\n	.j-layer-air .b-popupus .i-popup-arrbl.i-popup-arr,\n	.j-layer-air .b-popupus .i-popup-arrbr.i-popup-arr {\n		border-top-color: #D9E6EA;\n		}\n/* Left Side */\n	.s-schemius .b-popupus .i-popup-arrlt.i-popup-arr,\n	.s-schemius .b-popupus .i-popup-arrlb.i-popup-arr,\n	.j-layer-air .b-popupus .i-popup-arrlt.i-popup-arr,\n	.j-layer-air .b-popupus .i-popup-arrlb.i-popup-arr {\n		border-right-color: #D9E6EA;\n		}\n/* Right Side */\n	.s-schemius .b-popupus .i-popup-arrrt.i-popup-arr,\n	.s-schemius .b-popupus .i-popup-arrrb.i-popup-arr,\n	.j-layer-air .b-popupus .i-popup-arrrt.i-popup-arr,\n	.j-layer-air .b-popupus .i-popup-arrrb.i-popup-arr {\n		border-left-color: #D9E6EA;\n		}\n\n\n\n/* Arrow outers\n----------------------------------------*/\n/* Top Side */\n	BODY .b-popupus-blue .i-popup-arrtl .i-popup-arr-brdr-outer,\n	BODY .b-popupus-blue .i-popup-arrtr .i-popup-arr-brdr-outer {\n		border-bottom-color: #FFF;\n		}\n/* Bottom Side */\n	BODY .b-popupus-blue .i-popup-arrbl .i-popup-arr-brdr-outer,\n	BODY .b-popupus-blue .i-popup-arrbr .i-popup-arr-brdr-outer {\n		border-top-color: #FFF;\n		}\n/* Left Side */\n	BODY .b-popupus-blue .i-popup-arrlt .i-popup-arr-brdr-outer {\n		border-right-color: #FFF;\n		}\n	BODY .b-popupus-blue .i-popup-arrlb .i-popup-arr-brdr-outer {\n		border-right-color: #FFF;\n		}\n/* Right Side */\n	BODY .b-popupus-blue .i-popup-arrrt .i-popup-arr-brdr-outer {\n		border-left-color: #FFF;\n		}\n	BODY .b-popupus-blue .i-popup-arrrb .i-popup-arr-brdr-outer {\n		border-left-color: #FFF;\n		}\n\n\n');
/**
 * LJ bubble directive
 *
 * Options:
 *   - closeControl: show close control or not. Default: true
 *
 * @example
 *   html:
 *     <!--
 *       Following will add click handler to button
 *       and include myBubble.tmpl inside bubble.
 *     -->
 *     <button lj-bubble="{
 *         name: 'myBubble',
 *         template: 'settings.ng.tmpl',
 *         closeControl: false
 *       }"
 *       >Show bubble!</button>
 *
 *   js:
 *     angular.module('MyModule', ['LJ.Bubble'])
 *     .controller('MyCtrl', ['$scope', 'Bubble', function($scope, Bubble) {
 *
 *       // Use Bubble.open to control bubble from JS.
 *       // You can pass jQuery node to reposition the bubble from the original placement.
 *       Bubble.open('myBubble', { 'some-stuff': 'optional' }, jQuery('.b-some-other-block'));
 *     }]);
 *
 * @todo
 *   Refactor detection of current bubble open
 *   Refactor disableClick option of directive
 *
 * @authors
 *   Artem Tyurin (artem.tyurin@sup.com)
 *   Valeriy Vasin (valeriy.vasin@sup.com)
 */

(function($) {
  'use strict';

  angular.module('LJ.Bubble', ['LJ.Templates', 'LJ.Directives'])
  .factory('Bubble', ['$rootScope', function ($rootScope) {
    var factory  = {},

        // bubbles options
        _options = {},

        // targets for bubbles
        _targets = {},

        // body className flag
        bubbleOpenClass = 'p-openpopup';

    // currently opened bubble name
    factory.current = null;

    // we can change bubble node while opening bubble
    factory.node = null;

    /**
     * Register bubble
     * @param {String} name Bubble name
     */
    factory._register = function (name, options) {

      if ( _options.hasOwnProperty(name) ) {
        console.warn('Warning: bubble with name `%s` has been registered before!', name);
      }

      var opts = angular.isDefined(options) ? angular.copy(options) : {};

      // extend with default options
      opts = angular.extend({
        closeControl: true
      }, opts);

      _options[name] = opts;
    };

    factory._unregister = function (name) {
      delete _options[name];

      if (factory.current === name) {
        factory.current = null;
      }
    };

    /**
     * Register target for bubble nodes
     *
     * @param {String} name Target name
     * @param {jQuery} node Target node
     */
    factory._registerTarget = function (name, node) {
      if ( _targets.hasOwnProperty(name) ) {
        throw new Error('Bubble with name `'+ name +'` has been registered before. Check it.');
      }

      _targets[name] = node;
    };

    /**
     * Remove registered target
     * @param  {String} name Target name
     */
    factory._unregisterTarget = function (name) {
      delete _targets[name];
    };

    function getTarget(name) {
      if ( !_targets.hasOwnProperty(name) ) {
        console.warn('Bubble target `'+ name +'` has not been registered yet.');
        return;
      }

      return _targets[name];
    }

    /**
     * Open bubble with provided name
     * @param {String}        name       Bubble name
     * @param {Object}        [options]  Options that will be available for bubble
     * @param {jQuery|String} [node]     jQuery: Node relative to which bubble will be positioned
     *                                   String: Registered bubble target name
     */
    factory.open = function (name, options, node) {
      if ( !_options.hasOwnProperty(name) ) {
        throw new Error('Bubble `'+ name +'` can\'t be opened, it has not been registered yet.');
      }

      if ( options instanceof jQuery ) {
        node = options;
        options = {};
      }

      if ( typeof options === 'string' ) {
        node = getTarget(options);
        options = {};
      }

      if (typeof options === 'object') {
        factory.options(name, options);
      }

      if (node instanceof jQuery) {
        factory.node = node;
      }

      if (typeof node === 'string') {
        factory.node = getTarget(node);
      }

      factory.current = name;
      $rootScope.$broadcast('bubble:open'        , name, options, node);
      $rootScope.$broadcast('bubble:open:' + name, name, options, node);
      angular.element('body').addClass(bubbleOpenClass);
    };

    /**
     * Close all opened bubbles
     * @param {String} [name] Close bubble
     */
    factory.close = function () {
      var name = factory.current,
          options = _options[name],
          option;

      $rootScope.$broadcast('bubble:close'        , name, options, factory.node);
      $rootScope.$broadcast('bubble:close:' + name, name, options, factory.node);

      // clear current bubble options
      for (option in options) {
        if ( options.hasOwnProperty(option) ) {
          delete options[option];
        }
      }

      factory.current = null;
      factory.node = null;
      angular.element('body').removeClass(bubbleOpenClass);
    };

    /**
     * Set context for opened bubble
     * @param  {String} name    Bubble name
     * @param  {Object} options Opening context (arguments)
     * @return {Object}         Bubble options
     */
    factory.options = function (name, options) {
      if (typeof options === 'undefined' || options === _options[name]) {
        return _options[name];
      }

      angular.copy(options, _options[name]);
    };

    return factory;
  }])
  .directive('ljBubble', ['Bubble', '$parse', '$compile', '$timeout', '$templateCache',
                 function( Bubble,   $parse,   $compile,   $timeout,   $templateCache ) {
    return {
      scope: true,
      link: function(scope, element, attrs) {
        var options = $parse(attrs.ljBubble)(scope),
            name    = options.name,
            bubble  = $compile($templateCache.get('ljBubble.tmpl'))(scope),
            arrow   = bubble.find('.i-popup-arr'),
            $window = angular.element(window);

        scope.show = false;

        Bubble._register(name, options);

        scope.template = options.template || (name + '.html');
        scope.bubble = {
          name: name,
          close: Bubble.close,
          options: Bubble.options(name)
        };

        scope.arrow = {
          vertical:   't', /* top  (t) or bottom (b) */
          horizontal: 'l'  /* left (l) or right  (r) */
        };

        scope.position = {
          x: -9999,
          y: -9999
        };

        scope.visibility = 'hidden';

        scope.arrowClass = function () {
          var opts = scope.bubble.options;

          return opts.aside || options.aside ?
            'i-popup-arr' + scope.arrow.horizontal + scope.arrow.vertical :
            'i-popup-arr' + scope.arrow.vertical + scope.arrow.horizontal;
        };

        scope.$watch(function() {
          return Bubble.current;
        }, function(value) {
          hideFromViewport();

          $timeout(function() {
            scope.show = value === name;

            if (value && scope.show) {
              $timeout(setPosition);
            }
          });
        }, true);

        function setPosition() {
          // try to use top/left coords
          var vertical   = scope.arrow.vertical,
              horizontal = scope.arrow.horizontal,
              opts = scope.bubble.options;

          scope.visibility = 'hidden';

          // calculate positions initially
          recalculatePositions();

          // if there is not enough vertical space,
          // bubble shows at the top of the target
          if ( isOutOfViewportY() ) {

            // we should change arrow position if possible
            scope.arrow.vertical = vertical === 't'  ?
                                  (opts.alwaysTop    ? 'b' : 't'):
                                  (opts.alwaysBottom ? 't' : 'b');
          }

          // if there is not enough horizontal space,
          // bubble shows at the right of the target
          if ( isOutOfViewportX() ) {
            // we should change arrow position
            scope.arrow.horizontal = horizontal === 'r' ?
                                    (opts.alwaysRight   ? 'l' : 'r') :
                                    (opts.alwaysLeft    ? 'r' : 'l');
          }

          // top/left coords can't be used
          if (
              scope.arrow.horizontal !== horizontal ||
              scope.arrow.vertical   !== vertical
          ) {
            // positions should be recalculated
            // timeout is needed to apply arrow positions
            $timeout(function () {
              recalculatePositions();
              scope.visibility = 'visible';
            });
          } else {
            scope.visibility = 'visible';
          }
        }

        function recalculatePositions() {
          var el      = Bubble.node || element,
              centerX = el.offset().left + Math.floor(el.outerWidth() / 2),
              forceX  = scope.bubble.options.forceX || 0,
              forceY  = scope.bubble.options.forceY || 0;

          if ( scope.bubble.options.aside || options.aside ) {

            scope.position.x = scope.arrow.horizontal === 'r' ?
              el.offset().left - bubble.outerWidth() - arrow.outerWidth() :
              el.offset().left + el.outerWidth() + arrow.outerWidth();

            scope.position.y = el.offset().top - arrow.position().top + ( el.outerHeight() - arrow.outerHeight() )/ 2 + forceY;

          } else {

            scope.position.x = centerX - arrow.position().left - Math.floor(arrow.outerWidth() / 2) - 2 + forceX;

            scope.arrow.vertical === 't' ?
              scope.position.y = el.offset().top + el.outerHeight() + arrow.outerHeight() :
              scope.position.y = el.offset().top - arrow.outerHeight() - bubble.outerHeight();
          }

        }

        function hideFromViewport() {
          scope.position.x = -9999;
        }

        function isOutOfViewportY() {
          var scrollTop = $window.scrollTop();

          if ( scope.position.y < scrollTop || scope.bubble.options.aside ) {
            return true;
          }

          return scope.position.y + bubble.outerHeight() > scrollTop + $window.outerHeight();
        }

        function isOutOfViewportX() {
          var scrollLeft = $window.scrollLeft();

          if ( scope.position.x < scrollLeft || scope.bubble.options.aside ) {
            return true;
          }

          return scope.position.x + bubble.outerWidth() > scrollLeft + $window.outerWidth();
        }

        /**
         * Bubble target click handler
         * @param  {jQuery.Event} event Click event object
         */
        function onTargetClick(event) {
          event.preventDefault();

          if ( Bubble.current === options.name ) {
            return;
          }

          $timeout(function() {
            Bubble.open(options.name);
          });
        }

        function onResize() {
          if (scope.show) {
            $timeout(setPosition);
          }
        }

        if ( !options.disableClick ) {
          element.on('click', onTargetClick);
        }

        $window.on('resize', onResize);

        if ( options.recalculateOnScroll ) {
          $window.on('scroll', onResize);
        }

        $('body').append(bubble);

        scope.$on('$destroy', function () {
          element.off('click', onTargetClick);
          $window.off('resize', onResize);
          Bubble._unregister(name);
          bubble.remove();
        });
      }
    };
  }])

  // register a target for the bubble
  // <span lj-bubble-target="mytarget"></span>
  .directive('ljBubbleTarget', ['Bubble', function (Bubble) {
    return function link(scope, element, attrs) {
      var name = attrs.ljBubbleTarget;

      Bubble._registerTarget(name, element);

      scope.$on('$destroy', function () {
        Bubble._unregisterTarget(name);
      });
    };
  }]);
})(jQuery);
;

/* file-end: js/core/angular/bubble.js 
----------------------------------------------------------------------------------*/

/* ---------------------------------------------------------------------------------
   file-start: js/core/angular/api.js 
*/

/* ---------------------------------------------------------------------------------
   file-start: js/core/angular/messages.js 
*/


Site.page.template['angular/ljMessages.ng.tmpl'] = '<div\n    class=\"b-msgsystem-wrapper b-msgsystem-wrapper-fixed\"\n    ng-hide=\"messages.length === 0\"\n    >\n    <div ng-repeat=\"message in messages\" class=\"b-msgsystem\" ng-class=\"\'b-msgsystem-type-\' + message.type\" ng-animate=\"\'b-msgsystem\'\">\n        <header class=\"b-msgsystem-head\" lj-html=\"message.title\" ng-if=\"message.title\"></header>\n        <div class=\"b-msgsystem-wrap\"><div class=\"b-msgsystem-body\" lj-html=\"message.body\"></div></div>\n        <span class=\"b-msgsystem-close\" ng-click=\"close(message)\">\n            <span class=\"b-msgsystem-close-text\" lj-ml=\"component.messages.close\"></span>\n            <span class=\"b-msgsystem-close-ctrl\" lj-ml=\"component.messages.close\" lj-ml-attr=\"title\">&times;</span>\n        </span>\n    </div>\n</div>\n';
LJ.injectStyle('/* System Message\n----------------------------------- */\n.b-msgsystem-wrapper {\n    width: 100%;\n    height: auto;\n    }\n    .b-msgsystem-wrapper.b-msgsystem-wrapper-fixed {\n        position: absolute;\n        top: 0;\n        left: 0;\n        z-index: 1001;\n        overflow: hidden;\n        padding: 0 0 10px;\n        }\n    .s-schemius .b-msgsystem-wrapper.b-msgsystem-wrapper-fixed {\n        top: 60px;\n        }\n\n    .g-sensor .b-msgsystem-wrapper.b-msgsystem-wrapper-fixed,\n    .mobile-msg .b-msgsystem-wrapper.b-msgsystem-wrapper-fixed {\n        position: static;\n        padding: 0;\n        background-image: none;\n        }\n\n.b-msgsystem {\n    position: relative;\n    min-height: 50px;\n    padding: 10px 140px 10px 120px;\n    font: 14px/1.357 Arial, Helvetica, sans-serif;\n    }\n    .b-msgsystem DD,\n    .b-msgsystem DT,\n    .b-msgsystem TH,\n    .b-msgsystem TD,\n    .b-msgsystem P,\n    .b-msgsystem DIV,\n    .b-msgsystem LI,\n    .b-msgsystem PRE,\n    .b-msgsystem CODE,\n    .b-msgsystem KBD {\n        font-size: 100%;\n        }\n    .b-msgsystem .i-ljuser-userhead {\n        vertical-align: top !important;\n        margin: 3px 0 0 0;\n        }\n.b-msgsystem:after {\n    position: absolute;\n    bottom: -10px;\n    left: 0;\n    display: block;\n    content: \'\';\n    width: 100%;\n    height: 10px;\n    background-image: -webkit-linear-gradient(top, rgba(53, 99, 161, 0.3), rgba(53, 99, 161, 0));\n    background-image:    -moz-linear-gradient(top, rgba(53, 99, 161, 0.3), rgba(53, 99, 161, 0));\n    background-image:      -o-linear-gradient(top, rgba(53, 99, 161, 0.3), rgba(53, 99, 161, 0));\n    background-image:   linear-gradient(to bottom, rgba(53, 99, 161, 0.3), rgba(53, 99, 161, 0));\n    -webkit-background-size: 10px 10px;\n         -o-background-size: 10px 10px;\n            background-size: 10px 10px;\n    background-position: 0 100%;\n    background-repeat: repeat-x;\n    }\n    .b-msgsystem-head {\n        margin: 0 0 0.357em;\n        padding: 0;\n        font-size: 1.142em;\n        font-weight: bold;\n        }\n    .b-msgsystem-wrap {\n        line-height: 50px;\n        min-height: 50px;\n        }\n\n    .b-msgsystem-head ~ .b-msgsystem-wrap {\n        line-height: inherit;\n        min-height: 0;\n        }\n\n    .b-msgsystem-body {\n        display: inline-block;\n        vertical-align: middle;\n        line-height: 1.571;\n        font-size: 1em;\n        color: #787878;\n        }\n\n.b-msgsystem .i-ljuser-username,\n.b-msgsystem .i-ljuser-username:link,\n.b-msgsystem .i-ljuser-username:visited {\n    color: #0051B7 !important;\n    }\n.b-msgsystem .i-ljuser-username:hover,\n.b-msgsystem .i-ljuser-username:active {\n    color: #C00 !important;\n    }\n\n.b-msgsystem-type-error {\n    background: #FFEFEF no-repeat 2.7em 50% url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAA7CAYAAADFJfKzAAAKeElEQVRo3tVbCVBURxp2ACMBRWaiOICCIMQDLFDjuaWGxERDUmYVIpaKEl1dN0aN1xrRoBDBAwwi4m0irhpjJB4rri7GI2q5luJ9gMageAAKiJwCwr/9U/9QPc17MwOZgbGrvpqZ9/r//++b7v67X7/3mjUzXVEQLARYchDPaWxei8KLs2JozvAGQwsGaw5vCr9bUL3mZMeLN3uB1jP9PlReXRjpn/HtqsjHUXFJWcvjr+asWJv1dMXaF89WJgB+4m88juexHtZHO/oDzEq4guuWSKwFI/rW7bBlkx5FrT6as3zNy6cr4qG+QDu0Rz/oj1q9OdftFY0tUiO0RmRswBine0uil2VHxeXmLFsDxgL6Q7/onxPdaGNbwXXXNzo7qFumLYqambU0Nj87cjWYCsz/c4yD8WhsW5m6lfnWtE6eOsvnQXhM6pOlsdBYwHgYlxvTJhGs4MamTercsAmPwmMKH0esAl14unE7FBw9AaU30qDiSQ68KiyCqrKXgAU/8Tcex/NYD+vr84lxMT7y4MaywthCsfvYXp8fvuThkuhqBpBD/sEjUJHzDBpS0A7tdfnH+MgD+RAvowjWEnprfvjazLAVIAckWfWyHIxR0E/+waOgKx7jE28swVpCL81eFHF/0TKQwpO1W6H8cRaYoqBf9C8XG3n9WcF8MrI9M23epIzQyGoGEJHFxhlUVYNJC/OPcaTiI6/T0+Z+ToLrnbR4oTY7Rof0+X1+eOm9+REgIu/wMWjMgvGkeDB+hVsDx73DJS2DBStoHrN2smutvDX7m0t35y0BEbnJKdAUBeNK8WE8L3u2cVDRtGRliFhNq2L/b3V6yqy56bPDQERm/BZoyoLxpXid+fvsUORN/PW2bm33ndx7QMebM0Of3/5qIfDIWJUAUF3dpGKhqgr+WBkPIjfGtwB5C91ZZ/bFNajdyYnTo25OXwAiyh49AXMoZZmPQIof8kb+pEM2Oys0rern5uF09Yt5eden/RN4PN6VBOZUHv+YBCJH5I38udZVyHXhmlbdP/rzyVenzgERr0rLzEos8pHiyfhP4VrXQi4D4w6C6mzIlymXJ88CHpmJuw1bBBQVw7nl38HeT0bBLyPHwpVN26CqolL/MGR1sC7aoC36QF96k1XiTyByZfyPoQ7SUyczaxJTy37OLh0uTpzxMnXiDOBRcv+h3sCVpaWwa7A/rGnrroWDY/+mO6mxc1hHtENfFSUlOmOWPHgIIlfkP8jFzQX1SCUqC5qfWm/xHznqQsg04HFj4VKDWvXKxh/qENbg/q+nZO3wnJwd+tRXbiyMBJEz6kA9pMtCsgsfCgiOPR88FXg82LHHILEp0+fJkr4Yt17W7sLqdbJ26FNfQX4iZ9Qh1ZU1WRjXlm1TPptw5NyYycAj73yqQWL/tyJWlnT63gOydnhOzu7cslX6l5GMn8gZdaAebs2saMavmBjUxwNDbp8JmgQ8ijMyDRJb9CQbNr3dsw7hf/UfApVl8pkcz2Ed0Q59oU99pfh+JoicmY401COsqGqnHOzfTicDJuT+FhgCPMoLXhi+dr2dDvsCx0O82hMS2neFwxOnQXF2jn7CrM7hSV/W2KAt+kBfBs0Aefkgcj4RMD4H9ZCuFrxYHMT2DM4nRgRXnBwRDDwMmTqadL4tKQWR8/G/jitGPaSrNklZ0g/cnO5wfPgYEPE6FCneqId01RGLmcsl5eOgimMfBwGPqooKsxZayVpW5JziP6qYxGou+yw1Yt/UiD08NCDv6LBA4FGeX2DWYl/m5oHIOXnoyKeoh5t+LOu07IH3h6f954MRwOPF73+YtdjCexkgcmY60uVatnbM7h44LCX5veHAI+vU2T+3nZJ2F65uSYRfZ4fC/s8mwJ6hI2uA3/EYnsM6DS3IT+SMOqTGrFY23tTHL+Hfgz8BHjfiN9d/V5BtgF9evxW2931PdsEgIrGPH1xatwXKXxTWKxbyEzmjDqlsrDXPLujWM+TAwI+Ax/HxUw2PzBb117ftgs2de2kJWd/RG3YOHAb7Ro6DQ8FTaoDf8RieExcT6KOa7UgYlIkZP5Ez6pCbZ2tXUK42rbyTBnxQ/suAD4HH83T93ayUTe4HgkJqCG/o5AP//WIOpP28DwoyHui96sE6WBdt0BZ97B8VUuNTV0FeIlfk36mlXXepFZTW2pjBfVuvQaf29n0feKRG6l6jFrHN7MTe78KeYQFwZ98heFXe8DsDaHtn/yH42T+wxmeRjq0g5CVyRf6oQ2ptrHXVgxl5cWffOXveYcQFVMpcW5Y+y63plpknTxt/J5H5RN8Yo+78WgJSPJG/MO1oXcDXXs/ioG5vbeOz03fg8909BgGPC99GSxLKTr0CVZWvTLeZyHznXL5W99JwaQyIHJE38qfkVOd6VmungsGBoVNMl54bd/n8BUTkp90xi7k172YaSPFD3sifdEjuVGi6so2mK/dopeyf6NX3xQ7vfsDjMEsaTV0wSycHBIPIjfEtRN5cF7aRuztQu7vI4Mjgubhjt6jtXfuAiCNjJzepWIwvxSvCzSsaeRN/2d1FrbsBDPiUimsLC4vu6z19b25jc6aIizFrmkQoxpXis8HT95atpSVON67E31bXXQGtOwI0R3kMV6lHbPXoUfa9Rw8QcWFlXKMKxXhSPLZ4+Bb7K9t9Sq2qNuSOgNi6Klpbdp3l6B661d2nmgFEHGJjuPpVlWnHKPOPcaTiI69ZavevkSe38Nd7r6fOXTzKaG4M3mFOHhs3s2WdFJI+CoBn126aRCj6Rf9ysb9x6oRrYG/i6VCfu3ha92dpnlJTKveJcPTYubFDN5DDb18vYbv4RUYRWcHuBpxeEA664jE+O5AX8VNz86pVfW5G891ZSRM0jgffUIeOCRucu1QzgBxOzl0E+ekNu2RDO7TX5R/jIw8S6kkLfmVD7rzXeaaCxkGt4H8onUPXOnqWrHN8G3Rhz5BP4UxYJNw9kAxPr92A4qzs2ss3/MTfeBzPn10cVVNfn0+Mi/E5oc7Er0HPVEg+LUPpXCPYx8/GPjDGwf12QjsPaCxgPIwrI9S4jweRYycaI97NFYo+M+wdo+Mc3ArjHdzBVGD+izAOxqNk1Il4GE2onGAlJQM3Sve+7s2th8y3d/4htk3HgjVt3MBYQH/M7zZP5p/F6UHx3Ci+0thCJZ9dpKzXluY1DwYvhp5tLK0GT2nlELHUvv351SrX8jiVK9QXzK4C7dEP+kO/5N+D4rWl+CZ5dlHyqVSaz1T0L7vSGPKiFujdxsLq3SAb1cy5durvF7d2Or7cvv2daPsOud8pXUpWK10AP/E3HsfzWG+0jeortEN78uNFfl0pjorimvSpVMnnjenftaPk5UhXGzieutDY8mXoReT7MvRj6M+hHx3vTfV8ya4L+XEhv29RHJvGet5Y9klyGjt29M+3oyzpQlsjnkS+G7UUiulOn150vAvVcyc7Z/KjIr+2TfEkuc53BOifb0ljSkXjS02Z05nGXAcSpPnuTOfVVF9F9q3IX5O+I2DQ2x+092NLpFvT/q2SxGigpOMacbbcazBm/dqLwkTv9bwWLzWZ3Rtb/weCZK6FTFk50QAAAABJRU5ErkJggg==\');\n    color: #CB1427;\n    }\n    .b-msgsystem-type-error + .b-msgsystem-type-error {\n        border-top: 1px solid #FFDFDF;\n        }\n.b-msgsystem-type-warning {\n    background: #FCF8E3 no-repeat 2.7em 50% url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAA7CAYAAADFJfKzAAAJyUlEQVRo3tVbDVRUxxVmWUAEREHFBSpEhUarFrXRiCdHkxxzmkSt1arxaKMSlJrE+IPWvwRUBEzCUWKAClYDFhNrqoBRTBQDgpQ2AWUNsqIYDQqKAiIEEBC5nUvvcmaH93YXw8I653wH9u3ce79vZ+bOvHnzLCxMVxQESwFKDuJ3WpunovDirBisGWwYejHYcugtfO5F9azJjhdv9gJtVwZMcVJnbnj9+oUtYaUFIUdva0Ivll8Ou3O3KKzm3pVwwL/4Ga/j91gP66Md/QBmJVzBdUsk1mtVwJT+mpxN/qUF206VX97eeLcoFDoLtEN79IP+qNWtuW6v6G6RWqFtIiNDZ7ldy/1gx53CkMpyzXboKqA/9Iv+OdHdNrYVXHe1edbLxUGTs3FV2aWt928XbgNTgfmvxjgYj8a2lalbmW9N29QvlvqU5AedLyvYAt0FjIdxuTFtEsEKbmza5aWtXnxLHVRbejEI9OHulWh4UHYSGqoLoLnhNrQ018DjloeABf/iZ7yO32M9rG/IJ8bF+MiDG8uKrhaK3cf+h7OBW2/mv9/KAHKoupkMzQ/L4UkK2qG9Pv8YH3kgH+LVJYJ1hBZmBUaXnN8EcqgqSWYt1ghdUdAP+tMXj/GJ6irBOkIvpL0XciN3PUihrDASmupLwRQF/aJ/udjI65cK5pORfdaxAP8fv1vXygAiyjQxAK2PwaSF+cc4UvGRV2bKMj8S3OmkxQu1S4yaM6H434EN13ICQURlyQnozoLxpHgwfrX7ds56jktaRgtW0Dxm6zaoj1NhxooLV7NXgYiKn76CnigYV4oP45nvPaS/M01LVsaI1bYq9v8+WUl+64qyVoCIEnUk9GTB+FK8ziX7bUbexN9g67Z332ULxj1zKf3tak3GO8Djet6HOIh6VCyO4eu5YSByY3wfIG+hO+vNvrgGdcz48s3wS2f+AiIe1t4EcygNtSUgxQ95I3/SIZudFdpWfdHX0039jX/VD6eXAo9SzT/AnEqpJhFEjupT/lXIn2tdhVwXbmvV5L2zl6m/9gMRLY8azEos8pHiyfgHcK1rKZeBcQfBOfvIgrQLJxYBj5KL+8EcC/ISuTL+Z1AH6emQmbWJyWHiWNfBuSkLG/OOLQQe9Q9uGBW8/EYuJEW8AjHL+0DsigFwer8fG18VRozBe2110QZt0Qf6MlSQl8gV+U8e7+6BeqQSlSXNT33/vmPqvO+T5wOPgjPrjBJ6/3YRxL47AKID7HVwKOR51uWa9HTHprY6ol3sioFtPg2Vgm//CiJn1IF6SJelZBc+vnd65H+PzAUeP6kTjBKbnvguRAXYSeLHfPlFSPH5JFk79GmoID+RM+qQ6sraLIxry4Gn42d8k3N4NvCovPUfo8Qe+2QmRC2zk4T6TLSsnTotStYOfRpcRjJ+ImfUgXq4NbPCgl8xMajSD8y4nP3FTOBRd/+6UWJzkoIZwd6SKC3KlLW7VXRW1g59Gip11TdA5Mx0FKEeYUXVPuVg/3bLODCtMjNxOvBoelht5ERfAQkbnoVPl9rqIPVvbxi0TY2Z18EOfRmT3BrrK0HknJ4w7S7qIV29eLE4iPsxuKfHv9qckfAq8Hjc0tyJlU0FnDu8Hg6HvgBHP57a1n1bH7cYvll//KitLtqgLfowRiiWR831IHJOj/99HeohXe1JSkkfcHN68Lf7XwERT0OR4o16SFcHsZi5PE7Hvdyctvdl4NGZlu2J8qipHkTOp+NeqiOx2ts+pVZsb63YkzGTq07tmQI8mhrum7XYxroKEDmnRk++h3q46UfZoWVTIicVnYx+AXjUVFw1a7G1FcUgcmY6rsi1bPuYPRT+XNqJ3ROBx53idLMWi/xEzqhDaszqZOO4zb+N+WrXeOBx6ewusxaL/ETOqEMqG+vMs5sWD12SEjEOeKTHzzUY8Fpeikmhd5nK+ImcUYfcPNu+gvJ0tR119EOfpqSPfIBHdfllvQF3LVKYFHIFeYlckf8w996jpVZQOmtjhqEJQSMyj4SPAh7nU7foFbvzTQuTQq4gL5Er8kcdUmtjnbsezMhb3vJce3j7CBDxqKnOzObXOpDiifyFaUfnBr79fhYH9a9cbHwOBntXH9r6a+Dx/fEgsxKbezwYRI7IG/lTcupwP6uzU8HgwjAs4m2PuM+DhoGI+3c0ZiG0qqwApPghb+RPOiR3KrRd2U7blcd62/kmbPKsSXz/GeCRGjOjx4W2sn3jE1GvgciN8a1F3lwXtpN7OtC+u8jgyuAdvEgVfmCjB4j4OvZPPSoW40vx2rZEFYG8ib/s7qLO0wAGPKXi2ctaMXrParfChPXuICLvZFiPCMW4UnxiV7tp7G0tcbrxJP72+p4K6DwRoDnK6w++DrP2B6oefrZWBSJyT4R2b0Ji8aR47AtU1b0+wX4mtarKmCcCYus609pyxJrZ/TbvW+PSygAijn86w6ib81/2aKelLY5UfOS1ela/jciTW/gbfNbT4SkeZbQhDKOCF/SN27uyP0jh6EeToeKm2jSPKJlf9C8X+4P5fXENPIp4unTmKZ7O81map1SUyn1CFjp+HrfCCeSQdWgN26+q7RKRzY0/w7l/BoK+eIzPQeRF/FTcvGrVmYfRfHd2ogkax8OYTXPtY/a849jKAHI4e/A9qLr9ZPMx2qG9Pv8YH3mQUG9a8Ds9yZP3DmcqaBy0C17+mu3mqACH+pjlDqAPh0MnQfaXG6A49wjcK8lnW55lbNej5v8HQ9hf/IzX8fvsf21sq2/IJ8bF+JxQd+L3RGcqJE/LUDrXCvZ5abTVnIglvS9Hs1377gLGw7gyQrv2eBA5dqMxMsraymLCymk2Ebvfsq2NYvu8pgLz/zPGwXiUjIYRjy4TKifYiZLBEEr3Y4YOUkxd/0fr+F1+Ng92+9tAVwH9Mb8JXq6WU1mcsRRvCMV36mqhkmcXKesNpHnNi2Ekw7gBjoopAVOVIdvnW30XucSq6RM/K+gsmF0z2qMf9Id+yb8XxRtI8U1ydlHyVCrNZ870K3vSGBpJLTB+QB+LF+f5Wq5aO93ys+A5yvQdC5RXI/6srNy5SFkfuVgJ+Bc/43X8Huu9MclyNdqhPfkZSX49KY4zxTXpqVTJ88b06zpS8nKluw0cT8NpbI1h+B2Rf55hIoMvh4l0fTzVG0N2w8mPB/ntT3Hsuuu8sexJcho7jvTLD6Is6UFbI95E/jfUUihmNP0dSdeHU72hZOdOfpzJr31PnCTX+44A/fIONKacaXypKHO605gbTIK0/7vT9yqq70z2fchfj74jYNTbH7T3Y0+k+9L+rROJ0cKJrmvF2XOvwZj1ay8KE73X81S81GR2b2z9DzRDXz0l+Xs9AAAAAElFTkSuQmCC\');\n    color: #C09853;\n    }\n    .b-msgsystem-type-warning + .b-msgsystem-type-warning {\n        border-top: 1px solid #F9F1C7;\n        }\n.b-msgsystem-type-success {\n    background: #DFF0D8 no-repeat 2.7em 50% url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAA7CAYAAADFJfKzAAAKXElEQVRo3tVbCVRV1xX1MwsIgkoRFBwgscikBkTSRq2miRpjnIixDkkVMdYposUhMgq2tQaM4JCotUZNamNjTDROC61jspyXAxqJKAoEBRFkRjh9m5zPujze+/9j+YCXtdfnv3vPOXv/e++5901t2hivaBgmMpgKkNdpbZ6LIoozk2AuwUKCpQQrAW1l3y25nTnbieJbvUCrQfMGOSy+vHh4dEZ0fFxW3O74nPjLCbkJOQkPEgpXPlxJ+MR3HEc92qE97PgHaFXCNcKwBDFLiWiHZWnLpsXdjzsYnxtfLgmixgJ2sIcf+ONeNxeGvaa5RWqF1oocnTjGZXl65Mq4nBV5K36Op6YC/MEv/Auim21ua4ThauH0opPtkrRl82Ky4x7F5qwgY0HyX4A4iMdz28zYvSz2ptWMfTP8Iu9GnY/JjqXmAuIhrjCnjSJYI8xN6wXnw6dG3Y8uisqKIV1Y92ADfff4AF0pvUrZldlU+LSIyqrLCAWf+I7jqEc7tNfnE3ERHzyEuaxpaqEYPjbhVyKiP7wXXSOB1PDVo730c2UuPUuBHex1+Ud88AAf5tUkgusLvR6RvDQzktQAkuXV5dQUBX72SP50xZP4rG0qwfWEzruwIHbxnQ9JCWuyk+l+RRYZo8Av/KvFBq//V7CYjGzCTsyetuj2shoJJEdK9idULf0Zs8A/4ijFB68Zx2e/x4IbnbREodbjt08MDE9fUhr+0xKS49v8A9ScBfGUeEj8isZsDnlJSFoGC9bwOmbVzsXOYc71hRfm34ogOb7J208tURBXiY/E82IHz46OvCyZGSJW26sY/+2mnXh/4dybi0iOpMwUasmC+Eq8pp2ctRS8mb/e3q0bvn1D+3ebdS284E9pC0nEXzOSqEb6a8mCOZxw+yOSc5P4PgZv2XDWmX2xB7WbciwsYea1BSTHvbL71BrK3bJ7pMQPvMGfdahmZ422V90H93CZfnlefuiV+STis6x/UWsqn2XtIjlH8AZ/oXc1akO4tlfH7pkc+sfLc0mO0qelrUos+CjxlPjPEHrXRC0D4wqC4x9OhR2eenE2idicuYNaY9mSuZPkXCX+R6CD9TTIzNrEZNs5qGvXSedmlU86P4tEZJRkGhS8qKKYYs6k0OB/v0uv7Q6l5Es7qLK6Sq8d2qAtbGALH/Clr9yReMm5gn+XV7q5QY9SojLh9cl+6KZRIe+cDSMRi67GGCS0pKqMXtoxnizX+NXD6L1zdGZw1KGN3A6+iiv1T50/S/zknKEDeliXieIQHvntxMSQH0JJxNa7hiWmtRe3NyCsxaE7p1TtUKdmB5/6CvjJOUOH0lDWZmHsLTu9eWjygbGnp5GIM3nnDBIbejhSlfTfzm5WtUOdmt30Q8v1xgU/OWfogB5hz6xpI+6YJDiPTJ2S9tbJ90jE7eK7BomN+369KunPb6hvL1GnZhd9Ollv3IziTJJzlnTcgB7ZjqpuycH4dhlxbEreG8enkoiCikKDxGY9yaXOG19pQNhn2ygqrVI/z0Ud2sjt4As+9ZW8ikck5zzi6JRc6GFdlqJYTOL2ElyHHZ1cOezYZBJhSDbVlqt5t2j4V2Fk/XEfsk8OpIn7F1JO8UO9dmiDtrCBLXzAl0GJUVpv5ZxfT51UDD2sqy5JmfIXXJzu+vvUiSTH81CUeEMP62ogFpnLbcihCZVDDk8gEZXVla1aaElVKck5/+7Q28UsVnvaZ6oV21YrduD+8fmDDoaQiEcVj1u12Ifl+STnPHDfuAfQIyw/pg16Nvjr0Td+8904EvFjYUarFnurKIPknCUdN9V6tm7OBnzxxuEB+8aQiKM5Z1q1WPCTc4YOpTlbLxv7bnw1JXDvWyTio6ubdQZLzfye8suMN9TzSgtqY6gV8JNzhg6lbFxvne25JODdfntGkoiQ1Nk6yZQ9La/d2yZd2KZzPW30KZzkCz7hGzHUCvjJOUOH2jpbt4Nq627n7b97eIX/f0aQiLSCdJ3EsGHHGYvLJwNrdz3pBZnPLBK28AFf8KnrZAC85FzB37qnvY/SDqre3lhCD6+tQ//r8+UwEhF1Psmg07SIE6vrdkCBO0No6clE+jo9le4UZlFV9dMGNjiGOrRBW9ho7eFL34YGvORcwR86lPbG9c56kJHdowLCvXa9RnIUVxl2peJM9iUK+nxCg+0fdkZunw4hzy2v1wL/45i8HWxPZ1/UGwd8lHiCv2zZqXcCX3c+i0lt2cXW74UdQwte/OJVErH8bKLBQxHnqEfunqEJ+8LJIaW/6kZfC7RBW9gYevUy8mwSyTmCN/hzcmpwPlvvSoUEJwk93f4etNFj5xCS4/qj9EbPQSSXE/fPUcqlnbVDc+aRmFrgfxxDna4EpFSu5N8kJX7gDf6sQ/FKhXYoW2uHsnWfDgO6/XNQYfftg0nEyP1hLb6uVtfU0PB900nOTeJbBN7CELZWuztQd3VRQmcJns5RfRLctg0kOcYemN2iYhFfiZdzbN9V4M38Va8u1rsbIAFPqbhrLE19XNYHX3Pd+luSI/7chhYRirhKfFw2BF83sTHDcuPO/G103RWod0eA1ygP2ze7jnbe/HKZ85aXSY4VZ9c1q1DEU+LhvCm42GZ4l1Hcq86G3BGQ964j7y1/3f4Dr6VOm4JrJJAcI7+ZSU9rjHt/Fv4RRyk+eLWf77UYPIWNv957PQ3u4nFG6y7B2z7Sd2OHT4NICa/snkyXHqYZRSj8wr9abPvlPtgDezNPp8bcxat3f5bXKWdO5X52sb47HDYGkho+OL7SoAvbhpQnlSW04MRfSFc8ic928GJ+zsK6ataYm9HicHbgBRrzwd92iVeK/fqAGgmkhjnHVlBa/k/PJBJ2sNflH/HBg4V68obf4VnuvDd4poLnQZ1gq/c9ltom9y2xXdePdCF41zsUcXI1fXnrIF18kEZZxblUWPGkVhQ+8R3HUb/41Ora9vp8Ii7iC0Jdmd8zPVOh+LQMp3OtYD+zwU7j2q7yS7NO7kvNBcRDXBWhTft4EDt24Tni3cbcJNBirscqqzV+RVZr/cloWOP3BHEQj5NRT+bRZELVBDtwMujO6d5f08NmqHnEC/+wSPR9bPGxHzUZJH+S360mnrZDpTh9OF53ju/Q1EIVn13krNeJ1zUPCb0l9NV0tBhoNqNbrHmc1w/mib4V5km+1Ggk+lbCHn7gD37ZvwfH68TxjfLsouJTqbyeOfKv7M5zqDf3QECbjhaDTEJc55mEe2wxjeyVarqy94+mq7zzTFd7l5gm+lDtJ77juFSPdiZvu86HXa39L356s193juPIcY36VKri88b869px8urMZxuYT714bvlL6Mfk+0sIkjBAQBAfD+B2/mzXi/24sd8OHMe6uZ43Vn2SnOeOHf/yv+Is6caXRjyZvBf3FMT48GdvPt6L2/VgO1f248h+bVriSXKd7wjwL2/Lc8qR55czZ05XnnNdWZD2f1eud+b2jmzfjv216DsCBr39wdd+bJi0PV+/dWAxWjjwca04G+E1mFb92ovGSO/1PBcvNbW6N7b+B2yJlhtD2EeEAAAAAElFTkSuQmCC\');\n    color: #468847;\n    }\n    .b-msgsystem-type-success + .b-msgsystem-type-success {\n        border-top: 1px solid #BFE1B1;\n        }\n.b-msgsystem-type-info {\n    background: #D9EDF7 no-repeat 2.7em 50% url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADsAAAA7CAYAAADFJfKzAAAK6UlEQVR42tVbCVBUVxYdQEVpINIsQRgQUeLKgNEYnZpKdEonVpwJbnEdt3JEGQ0uDGNEBhQ3iEbcUFBBUVR0BEFBURBQxJEgMSibK6Ls0Cwt0NAsd96lXpvfrz/dSNE0OVWnoLv/u/ec/9677/3fv3+nRmhRajPU4ZD5jLb5LYAx14ewL2E/Ql3C/hwOYF7r0uP6YjvGfK832H/ywvVGHuGZX/tcy9+1K64oYs+tkkzfhLIS34TyWr/bFYB/8TW+j5/jcXg8tsP2/MY1b1KHCtMlQo09I3JX7owrvLk7vqxxT0I5fCixHbbHOBgP49L4Oj1rmp2L1OQcN38L7+iXe3bdKq0kYqG7iPEwLsaXme7Jua3FGa79zAYP1996OW/9jriSqp03S0FdJPGrMQ/mw7yYX629zPRmf+eDsQ7eMQUZPnHF0FPEfJhXNqe7zTAAmBKuIAwhfNDW1pbR0tISVltbu9b3araL9/VC8bYbRaCMx+6VQ1xuDWQVN0BxrRTEkhaQSFsBgX/xNb6Pn+NxeLyqmJh3U1jGMiJRjzOXtbpqchBhGChBDREZk1UNXrFveRn9uArKxFLoArAdtmdjsmxzD3+yjcgV4LDukmEAWEpYAQTNLa1w7eFLWHfyNkzb/l+Y4nURXILiIe5RPsiQXlAHntfevGdUZhU0NrdCNwDjoGkam5/uF3MOd8kwAAQBRVTac/jDplAwWnqElyuP3mw/GYjQtDI4nFwMhTVNoA5gXIzvcfU1LzeE/ezDGlZldA4QtLS2wfqQRDSkktsv3QdEYXUTkGZqBcYPTCmB76Py+djmcjxlBTWsumgBwAEg8DiXImfIZHkA/HV3JKwhw9d+o3xPm688BrUNTdCTiM0SgXvkS0VGvBDP8Qwej0VLpWEAcAaC0KTs92am74iAF6XVIAMaG+8eJmf41i+voacR86QS3C4/V+CG8JxHxlZ2Qros9VFmdiRhMxAE3HgEc/dehabmFkC8KG+AjAIxIPyvZciZPXc3FzSBQ4lvYMOlpwpcFXTPg9gxwPmrqncnAIO0V9VNruG5cD6tGBBhd3PkzN5+XACaAM5hv7hXgNq4/O5Cds14p1U2zHDmhVZDQ8NEiUTiLZVKE+4/LU1eez4bkElPRYDAosQ1K3onAU2hQCRBbQpccTR5N/FiSKirrDpr0bOhZ/PpFIvVZzJFa8KeAPJNlQQQk70uvjeK666mcS6tCPXJcfXZTBHq5/Qur1ltejYM5/lGrXIOzQSkZ2QuIN5UiOV6FeevptHQ1IIaFUj0O3N6V5uvV/vQOwjCpYGp8StPPQJkSEoBILAYcc3mvBVBR3iUXw6eF+7BuhO32wteTX0jqML9vCLYEpbSvmM7Hv8Y6iRS6AxOp75BnXIk+hPQB/pRqMycqxl9i9ETrZaffNi4PDgDkHFPygCB4mVGjZcFtG9A+BB4KxOEy+Q3ICNdT9FljB97ItMUNi24zJVU14EqvK6sR51yRP1WDl9Yox++QqVN16ePvtp8ct6SE+kgY1JeBSBwZ8XdbOB2kUVBhRg/491xzfSLBj78kl/e4S7tH2Rb2hlsuZyFWuWIPtAP9aXNO4Rn+sb4LwpMAxkvpxcCwu/KT3JC0p6VAAt2aWJ3Y208g+FgTEaHbezWBkNncCa1ALXKEX2wQ5lbhQWEprN/jI+bf/R/IKNPdDYg7mS/VXnWo3960aFwK+cg4EPw7ScdtnF0OwOdwYOXItQqR/SBftAXtypr0x2HAaH5LP+k3LlHUkHGBcfuAwJ75QvP8HYR49zPwglSRFhgURn+XQiv8M1n7wIfymvqwXr1cd42OJo6g/yKOtQqR+IjD/3I76jokkPHt8VM/+TKWQfvApeya9S8QhE8eFaMxpVWYodNoQqjoFHaAh3hXm4RjHD99SRhgdt4KokWQdUQvWsCVvNM/6Qy9IO+ZEsQtzgNJLT8Zn+S9Bv/ZOBS2tLK9iAuRTgEeSsmHo9LSWzGK3hZWtPJi/UWuJtTCNd/ftW+pn8I6sl6y2r+2/7EOvSDvrhFSoe+MCK0mrEvEViyRrlXP8PWnoS3lWLQNPh0ox/0xWdWSGg93S9eOv2HBOCS27N4W4adW7hOag7Ys83Aav7KL76OmhVSfzoyswNkZqfuviGa5nsLuKyqa5Kbk6zZH6LSQZOoEDcCq3nqruvl6Iez/Ogo9OzkbdF5f951A7h8XloLXHiFp8p2SXgzjpwMCWgSL8rEwGomPp6yPaswZ/+4JTz+yx2xwOWd3BJgUVZTj8UHK7PGgfpYzeiDmbOK1Xi86/GAP227BlweisuC3gzUx2pGH0w1Vlxnh8/bsnySVzRwufhIouotW3K2WqkMqI/VjD7YdVZhB6VnZjNmwtbIpgmeV4DLvGKl6yXOX7WyI6AuVivqFwwaas/uoBT2xoS2DhtC74zbEgFc7ojM6JVmURerFfWjD3ZvrHDVQ2g9bKG3m+PmS8CyrrEZehNQD59O1I8+2KsehetZQsv+Jr93GON2rtrePRy43H45HXoTfCLSgdWIulE/+mCuZxXvVBCaEQ4dumJf0Ci388Ayt6gKegOy3oqATx/qRv3og71TwV7A68mGsr7t2EmfrA+tHb4xDLic/eN10DRayeLutDcWWG1Erxh1c4awHjOEFe8uEg4itLOa573bzvUMsFxwIA40CczPp8t6gc9e1E31895dZIeyHqEx4WCtvrr2Ns6B2bbrQoGlX3QGaAKYl0+PjXNQjrauwB51U/0CdgizQ1mH07vmhMMGjneaZeMSIrH55ylg6Rv1EHoQmI/mZugSXPfR2K+daK+a830joKp3hXRvOdJ0xkYPqzXBbYTAcva+GHpHQX3A+JiHLz/qIvq+R51Ur1Dldz0UWsyOyoxwCOEYs7leQZarTwAfp+2IgMyCClAHMC7G7yi32Zz/BKA+qtOsU9/isZWZs+6a01LuYDLP55z5qiDoiO7kpppY0gTdgXcSKfw7LAWU5SN6wlAX1WeOetnvZ1WaZYazEaElnQ+OQiePALOVgW2E0BE3nk6GvC6ux9gO2yuLj/lRBxqluixQp+pv3lUbFhAKuYYNp7p4mCw7Um+y4igo42TvS7D1/D24kvYcMl+XQ3FV3ftHE/Avvsb38XPPC6ntx6uKiXkxP8eoJdUn6IpRtjr3o4GMOYYd+o+aMtdo0b5c4fIA6CliPszLGlX+tEzXDWNgCzpHxmjp9J2g/xfXvQOXHBQPXHoY1EUS/x3mwXyYl+a3UGa0uwwb0WIwhJZ7Rx0z26mCGZtPGS72rzFccgi6ixiPxD3d52O7qSTPWJpvCM1v1L1GWcO0aNGqZ0rXtWGEowk/1TYw+XLAFGcf/bk70wwWH2gy+PtB+FCSdlJsj3EwHsal8YfRfKaYn312Ua1PpdL1TEjP8mA6h0bTHviMCJ2sO2H++gHT/xWi5+SdqPet7zPB/L2VgoX76wWLDgD+xdf4Pn6Ox+l+vmADtsP2GIfGs6PxzWk+A/ap1B553pieXUNavAYRWtP5NILOLUfCcVT854QTCSdxOJG+/xk9zpG2G0HjWNO4xjSPHvu8cY8/SU7njiE98x8TWlKhttgzVPwo7Clqxp7+HU3fH0GPs6XtLGkcIY0r4HuSXKO/EaBnXh/nFBVqSoefBTVgRWnN+d+Sfm5OjxfS9gYYj+83Ar3u1x/03o8ARVPxA2kFFXJohO9zzAloO03/+kO1aXX8rkdDJn/7v9j6P5SDt02QcYOYAAAAAElFTkSuQmCC\');\n    color: #3A87AD;\n    }\n    .b-msgsystem-type-info + .b-msgsystem-type-info {\n        border-top: 1px solid #B3DBEF;\n        }\n\n.b-msgsystem-close {\n    position: absolute;\n    right: 0;\n    top: 50%;\n    width: 100px;\n    margin: -0.714em 0 0;\n    padding: 0 2em 0 0;\n    text-align: right;\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    color: #000;\n    }\n.b-msgsystem-close:hover {\n    color: #C00;\n    }\n    .b-msgsystem-close-text {\n        border-bottom: 1px dotted;\n        }\n    .b-msgsystem-close-ctrl {\n        margin: 0 0 0 0.1em;\n        vertical-align: middle;\n        font-size: 1.3em;\n        }\n\n\n/* xs-size screen (45em) ~ 630px */\n@media all and (max-width: 45em) {\n    .b-msgsystem {\n        padding: 10px 50px 10px 44px;\n        background-position: 10px 10px;\n        -webkit-background-size: 24px;\n             -o-background-size: 24px;\n                background-size: 24px;\n        }\n\n    .b-msgsystem-close {\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        margin: 0;\n        width: 50px;\n        }\n        .b-msgsystem-close-text {\n            display: none;\n            }\n        .b-msgsystem-close-ctrl {\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            margin: -0.6em 0 0 -0.2em;\n            text-shadow: 0 -1px 0 rgba(255, 255, 255, 0.5);\n            font-size: 1.7em;\n            color: rgba(0, 0, 0, 0.5);\n            }\n}\n\n/* Toggle */\n.b-msgsystem {\n    top: 0;\n    opacity: 1;\n    -webkit-transition: 0.3s top, 0.3s opacity;\n       -moz-transition: 0.3s top, 0.3s opacity;\n        -ms-transition: 0.3s top, 0.3s opacity;\n         -o-transition: 0.3s top, 0.3s opacity;\n            transition: 0.3s top, 0.3s opacity;\n    }\n.b-msgsystem-enter,\n.b-msgsystem-leave {\n    top: -100px;\n    opacity: 0;\n    }\n\n');
//= require_ml component.messages.close

/*
 * LiveJournal page messages
 * https://conf.sup.com/pages/viewpage.action?pageId=6161047#id-1AddRemoveLinksandButtonsFRSCR-Warnings
 *
 * @example
 *   js:
 *
 *   angular.module('MyModule', ['LJ.Messages'])
 *     .controller('MyCtrl', ['$scope', 'Messages', function($scope, Messages) {
 *       Messages.error({ body: 'Call the cops!', title: 'Title is optional' });
 *     }]);
 *
 * .error, .info, .success, .warning methods are available.
 *
 * @example
 *   Alternatively, you can use it from Perl controller:
 *
 *   LJ::need_var(messages => [{
 *     title => 'hello', body => 'world',
 *     type => 'success'
 *   }]);
 */

(function() {
'use strict';

angular.module('LJ.Messages', ['LJ.Templates', 'LJ.Directives'])
  .run(['$compile', '$rootScope', function($compile, $rootScope) {
      $compile(
        '<div lj-messages></div>'
      )($rootScope)
      .appendTo('body');
  }])
  .factory('Messages', [function() {
    var factory = {
          items: LJ.get('messages') || []
        },
        types = ['error', 'info', 'success', 'warning'],
        _cache = {};

    factory.add = function (data) {
      if ( types.indexOf(data.type) === -1 ) {
        return;
      }

      if ( _cache[data.body] ) {
        return;
      }

      _cache[data.body] = true;
      factory.items.push(data);

      return factory;
    };

    types.forEach(function (method) {
      factory[method] = function (data) {
        data.type = method;
        factory.add(data);
      };
    });

    factory.clear = function () {
      factory.items.forEach(factory._remove);
    };

    factory._remove = function (item) {
      var index = factory.items.indexOf(item);

      if ( index !== -1 ) {
        factory.items.splice(index, 1);
      }

      delete _cache[item.body];

      return factory;
    };


    return factory;
  }])
  .directive('ljMessages', ['$timeout', 'Messages',
                   function( $timeout,   Messages ) {
    return {
      templateUrl: 'ljMessages.ng.tmpl',
      link: function (scope) {
        scope.messages = Messages.items;

        scope.close = function (data) {
          return Messages._remove(data);
        };
      }
    };
  }]);

})();
;

/* file-end: js/core/angular/messages.js 
----------------------------------------------------------------------------------*/

/**
 * @description Angular wrapper of LJ.Api
 * @author Valeriy Vasin (valeriy.vasin@sup.com)
 *
 * @example
 *
 *     angular.module('MyModule', ['LJ.Api'])
 *       .factory('myFactory', ['Api', function (Api) {
 *          return {
 *            fetch: function () {
 *              return Api.call('rpc.method', {param: 'value'});
 *            },
 *
 *            fetchCached: function () {
 *              return Api.call('rpc.method', { param: 'value' }, { cache: true });
 *            },
 *
 *            fetchCallback: function (callback) {
 *              Api.call('rpc.method', { param: 'value' }, callback);
 *            }
 *          };
 *       }]);
 *
 */

angular.module('LJ.Api', ['LJ.Messages'])
  .factory('Api', ['$cacheFactory', '$rootScope', '$q', 'Messages',
         function ( $cacheFactory,   $rootScope,   $q,   Messages ) {

      var factory = {},
          cachePromises = $cacheFactory('LJApiPromises');

      /**
       * Call JSON Rpc API
       *
       * @param  {String}   method                   JSON Rpc method
       * @param  {Object}   [params]                 JSON Rpc method params
       * @param  {Function} [callback]               Callback to call after data recieved
       * @param  {Object}   [options]                Additional api options
       * @param  {Boolean}  [options.cache]          Cache options: turn on/off cache for request
       * @param {Boolean}   [options.silent]         Turn on/off messages (error/info etc)
       * @param {Boolean}   [options.meta]           If set to `true` - result will be returned with meta
       *                                             information, e.g. { response, fromCache }
       *
       * @return {Promise}           Promise that will be resolved when data received
       */
      factory.call = function (method, params, callback, options) {
        var defer = $q.defer(),
            defaults = { cache: false, silent: false, meta: false },
            fromCache = false,
            promise,
            cacheKey;

        params = params || {};

        if (typeof callback === 'object') {
          options = callback;
          callback = null;
        }

        options = angular.extend(defaults, options || {});

        cacheKey = method + JSON.stringify(params);

        if ( options.cache ) {
          promise = cachePromises.get(cacheKey);

          if (promise) {
            fromCache = true;
          }
        }

        if ( !fromCache ) {
          promise = defer.promise;

          LJ.Api.call(method, params, function (response) {
            if (response.error) {
              defer.reject(response.error);
            } else {
              defer.resolve(response);
            }

            $rootScope.$apply();
          });

          // save original promise
          if ( options.cache ) {
            cachePromises.put(cacheKey, promise);
          }
        }

        // trigger events
        LJ.Event.trigger('api:request:change', method, true);
        promise.then(function() {
          LJ.Event.trigger('api:request:change', method, false);
        });

        // show errors/messages
        if ( !options.silent ) {
          promise.then(function showMessage(response) {
            var message = response.message;

            if (typeof message === 'undefined') {
              return;
            }

            message.body = message.content;
            Messages.add(message);
          }, function showErrorMessage(error) {

            // no error message provided
            if ( typeof error.message === 'undefined' ) {
              return;
            }

            // Do not show internal api error
            // See: lj.api.js#handleError
            if ( error.code === 1 ) {
              return;
            }

            Messages.error({ body: error.message });
          });
        }

        // add meta information
        if ( options.meta ) {
          promise = promise.then(function (response) {
            return {
              response:  response,
              fromCache: fromCache
            };
          });
        }

        if (typeof callback === 'function') {
          promise.then(callback);
        }

        return promise;
      };

      return factory;
    }
  ]);
;

/* file-end: js/core/angular/api.js 
----------------------------------------------------------------------------------*/

Site.page.template['angular/memories.ng.tmpl'] = '<div ng-controller=\"MemoriesCtrl\">\n\n    <div\n        class=\"b-addtomemories\"\n        ng-class=\"{ \'b-addtomemories-loading\': loading }\"\n        >\n\n        <!-- head -->\n        <h3\n            class=\"b-addtomemories-head\"\n            lj-ml=\"memories.title\"\n            ></h3>\n\n        <!-- intro -->\n        <p class=\"b-addtomemories-intro\">\n            <span\n                ng-show=\"!security\"\n                lj-ml=\"memories.title.add\"\n                ></span>\n            <span\n                ng-show=\"security\"\n                lj-ml=\"memories.title.edit\"\n                ></span>\n        </p>\n\n        <!-- items -->\n        <ul class=\"b-addtomemories-items\">\n\n            <li class=\"b-addtomemories-item\">\n                <label class=\"b-addtomemories-label\">\n                    <input\n                        type=\"radio\"\n                        name=\"security\"\n                        class=\"b-addtomemories-radio\"\n                        value=\"public\"\n                        ng-model=\"security\"\n                        ng-change=\"update()\"\n                        >\n                    <span\n                        class=\"b-addtomemories-title\"\n                        lj-ml=\"memories.security.public\"\n                        ></span>\n                </label>\n            </li>\n\n            <li class=\"b-addtomemories-item\">\n                <label class=\"b-addtomemories-label\">\n                    <input\n                        type=\"radio\"\n                        name=\"security\"\n                        class=\"b-addtomemories-radio\"\n                        value=\"friends\"\n                        ng-model=\"security\"\n                        ng-change=\"update()\"\n                        >\n                    <span\n                        class=\"b-addtomemories-title\"\n                        lj-ml=\"memories.security.friends\"\n                        ></span>\n                </label>\n            </li>\n\n            <li class=\"b-addtomemories-item\">\n                <label class=\"b-addtomemories-label\">\n                    <input\n                        type=\"radio\"\n                        name=\"security\"\n                        class=\"b-addtomemories-radio\"\n                        value=\"private\"\n                        ng-model=\"security\"\n                        ng-change=\"update()\"\n                        >\n                    <span\n                        class=\"b-addtomemories-title\"\n                        lj-ml=\"memories.security.private\"\n                        ></span>\n                </label>\n            </li>\n\n        </ul><!-- /items -->\n\n        <!-- footer -->\n        <div\n            class=\"b-addtomemories-footer\"\n            ng-show=\"removeButton\"\n            >\n            <div\n                class=\"\n                    b-ljbutton\n                    b-ljbutton-delete\n                    \"\n                >\n                <button\n                    ng-click=\"remove()\"\n                    lj-ml=\"memories.remove\"\n                    ></button>\n            </div>\n            <button\n                class=\"\n                    b-flatbutton\n                    b-flatbutton-simple\n                    b-flatbutton-red\n                    \"\n                ng-click=\"remove()\"\n                lj-ml=\"memories.remove\"\n                ></button>\n        </div><!-- /footer -->\n\n        <p class=\"b-addtomemories-options\">\n            <a\n                ng-href=\"{{siteroot}}/tools/memadd.bml?journal={{bubble.options.journal}}&amp;itemid={{bubble.options.ditemid}}\"\n                target=\"_blank\"\n                lj-ml=\"memories.options\"\n                ></a>\n        </p>\n\n    </div><!-- /addtomemories -->\n\n</div>\n';
LJ.injectStyle('/* LJSUP-17006: [S1 entry, memories] Popup in S1 entries */\n/* Add to Memories */\n\n.b-addtomemories {\n    width: 150px;\n    margin: 0;\n    padding: 0;\n    }\n    .b-addtomemories-head {\n        margin: 0 0 0.5em;\n        padding: 0;\n        font: bold 1.13em/1.1 Arial,sans-serif;\n        color: #000;\n        }\n    .b-addtomemories-intro {\n        margin: 0 0 0.3em;\n        }\n    .b-addtomemories-items {\n        margin: 0;\n        padding: 0;\n        list-style: none;\n        }\n        .b-addtomemories-item {\n            margin: 0;\n            padding: 0;\n            }\n            .b-addtomemories-label {\n                display: block;\n                margin: 0 -5px;\n                padding: 5px;\n                cursor: pointer;\n                }\n            .b-addtomemories-item:hover .b-addtomemories-label {\n                background: #C8E6FF;\n                }\n    .b-addtomemories-footer {\n        margin: 1em 0;\n        }\n        /* hide old-design button on schemius and show new one (LJSUP-19209) */\n        .b-addtomemories-footer .b-ljbutton {\n            display: inline-block;\n            }\n        .b-addtomemories-footer .b-flatbutton {\n            display: none;\n            }\n        .s-schemius .b-addtomemories-footer .b-ljbutton {\n            display: none;\n            }\n        .s-schemius .b-addtomemories-footer .b-flatbutton {\n            display: inline-block;\n            }\n    .b-addtomemories-options {\n        margin: 0.3em -5px 0;\n        padding: 0.3em 5px 0;\n        border-top: 1px solid #DAE3E6;\n        }\n.b-addtomemories-loading {\n    background: url(/img/preloader/preloader-blue-gray.gif?v=16423) no-repeat 50% 50%;\n    }\n    .b-addtomemories-loading .b-addtomemories-head,\n    .b-addtomemories-loading .b-addtomemories-intro,\n    .b-addtomemories-loading .b-addtomemories-items,\n    .b-addtomemories-loading .b-addtomemories-footer,\n    .b-addtomemories-loading .b-addtomemories-options {\n        visibility: hidden;\n        }\n\n');
(function($) {

angular.module('LJ.Memories', ['LJ.Bubble', 'LJ.Api'])

/**
* Directive build memories popup
*
* Usage:
*   <a
*     href="#"
*     lj-memories="{}"
*     >
*   </a>
*
* or
*
*   <a
*     href="#"
*     lj-memories="getOptions(element)"
*     >
*   </a>
*
* @authors
*   Georgii Kats (g.kats@sup.com)
*/
.directive('ljMemories', ['$parse', '$timeout', 'Bubble', function ($parse, $timeout, Bubble) {
  return {
    scope: {
      ljMemories: '&'
    },
    link: function (scope, element) {
      var options;

      function clickHandler (event) {
        event.preventDefault();

        if ( !options ) {
          options = ( typeof scope.ljMemories === 'function' ) ?
                    scope.ljMemories({ element: element }) :
                    scope.ljMemories;
        }

        Bubble.open('memories', options, $(element));
        scope.$apply();
      }

      element.on('click', clickHandler);

      scope.$on('$destroy', function () {
        element.off('click', clickHandler);
      });
    }
  };

}])
.controller('MemoriesCtrl', ['$scope', 'Api',
                    function( $scope ,  Api ) {

  var bubble = $scope.bubble;

  $scope.security = null;

  // bubble size could change because of button, reposition
  $scope.$watch('removeButton', function() {
    $(window).trigger('resize');
  });

  $scope.$on('bubble:open:memories', function() {
    Api.call('memories.get', bubble.options, function(result) {
      $scope.security = result.result ? result.result.security : null;

      $scope.removeButton = Boolean($scope.security);
    });
  });

  $scope.$on('bubble:close:memories', function() {
    $scope.removeButton = false;
  });

  $scope.siteroot = LJ.get('siteroot');

  $scope.update = function() {
    Api.call('memories.set', {
      journal:     bubble.options.journal,
      ditemid:     bubble.options.ditemid,
      description: bubble.options.journal + ': ' + bubble.options.title,

      security:    $scope.security
    }, function(result) {
      $scope.security = result;
      bubble.close();
      $scope.removeButton = true;
    });
  };

  $scope.remove = function() {
    Api.call('memories.remove', {
      journal: bubble.options.journal,
      ditemid: bubble.options.ditemid,
    }, function() {
      $scope.security = null;
      bubble.close();
      $scope.removeButton = false;
    });
  };

  LJ.Event.on('api:request:change', function(method, state) {
    if (/^memories/.test(method)) {
      $scope.loading = state;
    }
  });

}]);

})(jQuery);
;

/* file-end: js/core/angular/ljMemories.js 
----------------------------------------------------------------------------------*/

/* ---------------------------------------------------------------------------------
   file-start: js/core/angular/share.js 
*/



/* ---------------------------------------------------------------------------------
   file-start: js/core/string.js 
*/

;(function () {
    'use strict';

    LJ.define('LJ.String');

   /**
     * Add leading zeros to number until it will have correct length
     * @param  {*}      str     Any string or value that will be stringified
     * @param  {Number} length  Needed length
     * @param  {String} symbol  Symbol for padding
     * @return {String}         Padded value
     *
     * @example
     * var padded = LJ.string.pad('hello', 8, ' '); // => '   hello';
     */
    LJ.String.pad = function (str, length, symbol) {
        str = str.toString();

        if (typeof length === 'undefined') {
            throw new Error('You should provide padding string length');
        }

        if (typeof symbol === 'undefined') {
            throw new Error('You should provide padding symbol');
        }

        if (str.length >= length) {
            return str;
        }

        while (str.length < length) {
            str = symbol + str;
        }

        return str.length === length ? str : str.slice(-length);
    };

    /**
     * Capitalize string
     * @param  {String} str String to be capitalized
     * @return {String}     Capitalized string
     *
     * @example
     * LJ.String.capitalize('HELLO'); // => "Hello"
     */
    LJ.String.capitalize = function (str) {
        var length;

        if (typeof str !== 'string') {
            throw new Error('You should provide string as argument');
        }

        length = str.length;

        if (length === 0) {
            return str;
        } else if (length === 1) {
            return str.toUpperCase();
        } else {
            return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        }
    };

    /**
     * Add http:// if not present
     * @param  {String} str Input string
     *
     * @return {String}     Link with default protocol (http://) if needed
     */
    LJ.String.linkify = function(str) {
        var rxLink = new RegExp('^(?:([a-zA-Z]+):)?//'),
            alternative = /^[a-zA-Z]+:/, // mailto:
            rxEmptyProtocol = /^:\/\//;  // ://yandex.ru

        var defaultProtocol = alternative.test(str) ? '' : 'http://';

        return rxLink.test(str) ?
            str :
            defaultProtocol + (rxEmptyProtocol.test(str) ? str.replace('://', '') : str);
    };

    /**
     * Split by char(s), trim all values, remove empty elements
     *
     * @param  {String} str  String to split
     * @param  {String} char Character(s) to use for splitting
     * @return {Array}       Array of splitted values
     */
    LJ.String.smartSplit = function(str, char) {
        if (typeof char === 'undefined') {
            char = ',';
        }

        return str.split(char).map(function(item) {
            return item.trim();
        }).filter(Boolean);
    };

    LJ.String.encodeHTML = function(str) {
        function encodeEntity(c) {
            switch(c) {
                case "<": return "&lt;";
                case ">": return "&gt;";
                case "&": return "&amp;";
                case '"': return "&quot;";
                case "'": return "&apos;";
            }
            return c;
        }

        return str.replace(/([<>&\"\'])/g, function(m, c) {
            return encodeEntity(c);
        });
    };
}());
;

/* file-end: js/core/string.js 
----------------------------------------------------------------------------------*/

Site.page.template['angular/share.ng.tmpl'] = '<p\n    class=\"b-sharethis-head\"\n    lj-ml=\"sharing.popup.title\"\n    ></p>\n\n<ul\n    ng-controller=\"ShareBubbleCtrl as share\"\n    class=\"\n        b-sharethis-services\n        b-sharethis-services-v3\n        \"\n    >\n    <li\n        ng-repeat=\"service in share.services\"\n        class=\"\n            b-sharethis-services-item\n            b-sharethis-{{ service.name }}\n            \"\n        >\n        <a\n            target=\"_blank\"\n            class=\"b-sharethis-services-link\"\n            ng-click=\"share.openPopup($event, service.name, bubble.options.params);\"\n            ng-href=\"{{ service.link }}\"\n            ng-bind=\"service.title\"\n            ></a>\n    </li>\n</ul>\n';
;(function () {
  'use strict';

angular.module('LJ.Share', [
  'LJ.Directives',
  'LJ.Templates',
  'LJ.Bubble'
  ])
  .directive('ljShare', ['Bubble', function (Bubble) {
    return {
      restrict: 'A',
      scope: true,
      link: function ($scope, element, $attrs) {
        var params = $scope.$eval( $attrs.ljShare );

        // string with comma separated services to show in the bubble
        var services = $scope.$eval( $attrs.ljShareServices );

        // string with comma separated services to exclude from bubble
        var exclude  = $scope.$eval( $attrs.ljShareServicesExclude );

        services = services ? LJ.String.smartSplit( services ) : LJ.Social.Share.services();
        exclude = exclude ? LJ.String.smartSplit( exclude ) : [];

        if ( exclude.length ) {
          services = services.filter(function (service) {
            return exclude.indexOf(service) === -1;
          });
        }

        function share() {
          Bubble.open('share', {
            params:   params,
            services: services
          }, element);
          $scope.$apply();
        }

        // no services to show - do nothing
        if ( !services.length ) {
          return;
        }

        element.on('click', share);
        $scope.$on('$destroy', function () {
          element.off('click', share);
        });
      }
    };
  }])

  .controller('ShareBubbleCtrl', ['$scope', 'Bubble', function ($scope, Bubble) {
    var that = this;

    $scope.$on('bubble:open:share', function() {
      that.services = $scope.bubble.options.services.map(function(service) {
        return {
          name:  service,
          link:  LJ.Social.Share.getUrl(service, $scope.bubble.options.params),
          title: LJ.Social.Share.getTitle(service)
        };
      });
    });

    that.openPopup = function(event, service, params) {
      if ( LJ.Social.Share.isTab(service) ) {
        Bubble.close('share');
        return;
      }

      event.preventDefault();
      LJ.Social.Share.openPopup(service, params);
      Bubble.close('share');
    };

  }]);
}());
;

/* file-end: js/core/angular/share.js 
----------------------------------------------------------------------------------*/


/* ---------------------------------------------------------------------------------
   file-start: js/core/angular/ljTour.js 
*/



Site.page.template['angular/bubbletour.ng.tmpl'] = '<div class=\"b-helptour\">\n    <header class=\"b-helptour-header\">\n        <span class=\"b-helptour-stage\">\n            <span class=\"b-helptour-stage-prev\" ng-bind=\"state.step\"></span>\n            <span class=\"b-helptour-stage-hr\">/</span>\n            <span class=\"b-helptour-stage-next\" ng-bind=\"state.tour.length\"></span>\n        </span>\n    </header>\n    <div class=\"b-helptour-content b-text\">\n        <span lj-ml=\"{{state.currentStep.tourText}}\" lj-ml-dynamic=\"true\"></span>\n    </div>\n    <footer class=\"b-helptour-footer\">\n        <ul class=\"b-helptour-controls b-helptour-state\">\n            <li class=\"b-helptour-control b-helptour-control-skip\"\n                ng-hide=\"state.currentStep.tourNoSkip || state.step === state.tour.length\">\n                <a class=\"b-helptour-skip-link b-helptour-link\" href=\"#\" lj-ml=\"tour.steps.skip\" ng-click=\"end()\"></a>\n            </li>\n        </ul>\n        <ul class=\"b-helptour-controls b-helptour-step\">\n            <li class=\"b-helptour-control b-helptour-control-prev\"\n                ng-hide=\"state.currentStep.tourNoBack || state.step === 1\">\n                <a class=\"b-helptour-prev-link b-helptour-link\" href=\"#\" lj-ml=\"tour.steps.prev\" ng-click=\"doStep(-1)\"></a>\n            </li>\n            <li class=\"b-helptour-control b-helptour-control-next\"\n                ng-hide=\"state.currentStep.tourNoNext || state.step === state.tour.length\">\n                <a class=\"b-helptour-next-link b-helptour-link\" href=\"#\" lj-ml=\"tour.steps.next\" ng-click=\"doStep()\"></a>\n            </li>\n            <li class=\"b-helptour-control b-helptour-control-done\" ng-hide=\"state.step !== state.tour.length\">\n                <a class=\"b-helptour-done-link b-helptour-link\" href=\"#\" lj-ml=\"tour.steps.done\" ng-click=\"end()\"></a>\n            </li>\n        </ul>\n    </footer>\n</div>\n';
/**
 * Tour Module.
 *
 * Create tour for new users.
 * Use Bubbles module and data-attributes for steps set.
 *
 * data attributes:
 *    data-tour     - Tour name/id
 *    data-tour-step     - Step of this tour
 *    data-tour-no-skip  - Hide 'skip' link
 *    data-tour-no-back  - Hide 'back' link
 *    data-tour-title    - ML variable for step title
 *    data-tour-text     - ML variable for step text
 *    data-tour-remote   - Tour only for users
 *    data-tour-skip-if  - Skip this step if LJ.get('data-tour-skip-if value') returns true
 *                    eg. data-tour-skip-if="remote.is_friend"
 *                    eg. data-tour-skip-if="!remote.is_sup"
 *    data-tour-force-x  - force bubble position by x
 *    data-tour-force-y  - force bubble position by y
 *
 *    data-tour-bubble   - Bubble options JSON
 *
 * Example:
 *
 *  <span
 *      data-tour="friendsFeedTour"
 *      data-tour-step="3"
 *      data-tour-no-skip="true"
 *      data-tour-no-back="true"
 *      data-tour-remote="true"
 *      data-tour-bubble='{
 *        "alwaysBottom": true,
 *        "alwaysRight": true,
 *        "aside": true
 *      }'
 *      data-tour-title="tour.friendsfeed.title"
 *      data-tour-text="tour.friendsfeed.step3.filter.tip"
 *      >Menu</span>
 *
 *
 * Need registered bubble with name 'tour'
 * with default bubble options
 *
 * e.g.: <div lj-bubble="{ name: 'tour', template: 'bubbletour.ng.tmpl', closeControl: false, disableClick: false }"></div>
 *
 */

;(function ($) {
  'use strict';

  angular.module('LJ.Tour', ['LJ.Bubble', 'LJ.Templates', 'LJ.Directives'])
    .directive('ljTour', ['$timeout', 'Bubble', function ($timeout, Bubble) {
      return {
        scope: false,
        link: function (scope) {
          var fader = $('.b-fader');

          scope.tours = {};
          scope.queue = [];

          /**
           * Start tour if prop return step
           * or skip on 0
           */
          scope.start = function (name) {

            // Place tour in queue if some one already starts.
            if ( scope.state.currentTour ) {
              scope.queue.push(name);
              return;
            }

            scope.state.step = scope.state.prop[name];
            scope.state.tour = scope.tours[name].filter(function (tour) {
              return typeof tour !== 'undefined';
            });
            scope.state.currentTour = name;
            scope.state.currentStep = scope.state.tour[scope.state.step - 1];

            scope.openBubble();
          };

          /**
           * Ends tour by writing 0 to prop.
           * @param name string with ending tour name
           *             default current active tour.
           */
          scope.end = function () {

            // End tour is 0 step
            writeProp(0)
              .then( function () {

                $timeout(Bubble.close);
                fader.fadeOut();
                clearState();

                // starts next tour if queue isn't empty
                if ( scope.queue.length > 1 ) {
                  scope.start(scope.queue.shift());
                }

              });
          };

          /**
           * Make active tour step
           * @param direction 1 (default) or -1
           */
          scope.doStep = function (direction) {
            var step = scope.state.step + (direction || 1);

            if ( step > scope.state.tour.length ) {
              return scope.end();
            }

            scope.state.step = step;
            scope.state.currentStep = scope.state.tour[step - 1];

            scope.openBubble();
            writeProp(scope.state.step);
          };

          /**
           * Extend Bubble options from template
           * with data attributes of current step target
           */
          scope.openBubble = function () {
            var options = Bubble.options('tour'),
                step = scope.state.currentStep;
            Bubble.close();

            if ( !options || !step.element ) {
              return;
            }

            angular.extend(options, step.tourBubble);

            $timeout(function() {
              Bubble.open('tour', options, step.element);
              fader.fadeIn();
              scrollToBubble(step);
            });
          };

          /**
           * Search page for tours and start them
           */
          function init() {

            $('body').find('[data-tour]').each(function () {
              var element = $(this),
                  data = element.data(),
                  tour;

              // if element not visible on init() - skip step.
              if ( !element.is(':visible') || !isRemote(data) || isSkipped(data.tourSkipIf) ) {

                if ( !data || data.tourStep !== scope.state.startFrom || scope.state.currentTour === data.tour ) {
                  return;
                }

                return scope.state.startFrom++;
              }

              tour = scope.tours[data.tour] || [];

              tour[data.tourStep - 1] = angular.extend(data, { element: element });
              scope.tours[data.tour] = tour;

              if ( data.tourStep === scope.state.startFrom ) {
                //  starts tour only once.
                scope.state.startFrom = 0;

                LJ.Prop.get('friendsfeed_tour')
                  .then(function (value) {

                    // value = 0 - tour ends for user
                    if ( !value || !value[data.tour] ) {
                      return;
                    }

                    scope.state.prop = value;
                    scope.start(data.tour);
                  });
              }

            });

            // prevent fader click
            fader.on('click', function (event) {
              if ( scope.state.currentStep ) {
                event.stopPropagation();
              }
            });
          }

          //Clear scope.state
          function clearState() {
            scope.state = {
              startFrom: 1
            };
          }

          function isRemote (data) {
            return data.hasOwnProperty('remote') ?
              LJ.get('remote') :
              true;
          }

          // Check skip-if value
          function isSkipped (expression) {
            return expression && expression.charAt(0) !== '!' ?
              LJ.get(expression) :
              expression && !LJ.get( expression.slice(1) );
          }

          function writeProp(step) {
            scope.state.prop[scope.state.currentTour] = step;

            if ( !step ) {
              delete scope.state.prop[scope.state.currentTour];
            }

            return LJ.Prop.set('friendsfeed_tour', scope.state.prop);
          }

          // if element is out of screen - scroll to it
          function scrollToBubble(step) {
            var $window = $(window),
              screenTop = $window.scrollTop(),
              screenBottom = screenTop + $window.height(),
              elementTop = step.element.offset().top;

            if (elementTop > screenBottom || elementTop < screenTop) {
              $window.scrollTop(elementTop);
            }
          }

          if ( LJ.Flags.isEnabled('friendsfeed_tour') && !LJ.Support.isMobile() ) {
            clearState();
            $timeout(init, false);
          }
        }
      };
    }]);


}(jQuery));
;

/* file-end: js/core/angular/ljTour.js 
----------------------------------------------------------------------------------*/

/* ---------------------------------------------------------------------------------
   file-start: js/discovery/directives.js 
*/



Site.page.template['angular/ljImage.ng.tmpl'] = '<a ng-href=\"{{link}}\">\n    <figure class=\"b-journalpicture\">\n        <img\n            class=\"b-journalpicture-image\"\n            title=\"{{textContent}}\"\n            alt=\"{{textContent}}\"\n            ng-src=\"{{source}}\"\n            ng-style=\"dimensions\"\n            >\n        <figcaption class=\"b-journalpicture-caption\" lj-html=\"content\"></figcaption>\n    </figure>\n</a>\n';
Site.page.template['angular/ljGallery.ng.tmpl'] = '<div\n    class=\"b-journalgallery\"\n    ng-style=\"dimensions\"\n    ng-class=\"{\n        \'b-journalgallery-hightpriority\': isTall\n    }\"\n    >\n    <div\n        class=\"b-journalgallery-container\"\n        ng-style=\"dimensions\"\n        >\n        <figure\n            class=\"b-journalgallery-picture\"\n            ng-repeat=\"item in items\"\n            ng-style=\"dimensions\"\n            ng-if=\"isNearby($index)\"\n            ng-class=\"{\n                \'b-journalgallery-picture-prev\': $index < state.index,\n                \'b-journalgallery-picture-current\': $index === state.index,\n                \'b-journalgallery-picture-next\': $index > state.index\n            }\"\n            >\n            <div class=\"b-journalgallery-wrapper\">\n                <img\n                    ng-src=\"{{item.src}}\"\n                    class=\"b-journalgallery-image\"\n                    lj-gallery-load\n                    >\n            </div>\n            <figcaption class=\"b-journalgallery-caption\">\n                <span\n                    class=\"b-journalgallery-caption-title\"\n                    lj-html=\"item.content\"></span>\n            </figcaption>\n        </figure>\n    </div>\n    <span\n        class=\"b-journalgallery-counter\"\n        ng-bind=\"(state.index + 1) + \'/\' + (state.total+1)\"\n        ></span>\n    <span\n        class=\"b-journalgallery-nav b-journalgallery-nav-prev\"\n        ng-show=\"state.index !== 0\"\n        ng-click=\"prev()\"\n        ></span>\n    <span\n        class=\"b-journalgallery-nav b-journalgallery-nav-next\"\n        ng-show=\"state.index < state.total\"\n        ng-click=\"next()\"\n        ></span>\n</div>\n';
Site.page.template['angular/discovery/ljSuggest.ng.tmpl'] = '<div\n    class=\"b-mainpage-seealso\"\n    ng-if=\"suggest\"\n    >\n\n    <!-- head -->\n    <h3\n        class=\"b-mainpage-seealso-head\"\n        lj-ml=\"discovery.article.seealso\"\n        ></h3>\n\n    <!-- items -->\n    <ul class=\"b-mainpage-seealso-items\">\n        <li\n            class=\"b-mainpage-seealso-item\"\n            ng-repeat=\"suggested in suggest\"\n            >\n            <a\n                ng-href=\"{{suggested.url}}\"\n                class=\"b-mainpage-seealso-link\"\n                >\n                <span\n                    class=\"b-mainpage-seealso-pic\"\n                    ng-if=\"suggested.image\"\n                    ng-style=\"{ backgroundImage: \'url({{suggested.image}})\' }\"\n                    ></span>\n                <span\n                    class=\"b-mainpage-seealso-title\"\n                    lj-html=\"suggested.subject\"\n                    ></span>\n            </a>\n            <span class=\"b-mainpage-seealso-user\" ng-if=\"suggested.user\">\n                <span\n                    lj-user-dynamic=\"suggested.user.username\"\n                    lj-user-dynamic-options=\"{target: \'_blank\'}\"\n                    ></span>\n            </span>\n        </li>\n    </ul><!-- /items -->\n\n</div>';
Site.page.template['angular/widgets/authors/posts.ng.tmpl'] = '<!-- author\'s posts -->\n\n<div\n    class=\"b-authorsposts\"\n    ng-class=\"{\n        \'b-authorsposts-loading\': state.isLoading,\n        \'b-authorsposts-empty\': !posts.length\n    }\"\n    >\n\n    <!-- head -->\n    <header class=\"b-authorsposts-head\">\n        <h3\n            class=\"b-authorsposts-title\"\n            lj-ml=\"main.authorsposts.head\"\n            >\n        </h3>\n    </header>\n\n    <!-- body -->\n    <div class=\"b-authorsposts-body\">\n\n        <!-- items -->\n        <ul class=\"b-authorsposts-items\">\n\n            <!-- item -->\n            <li class=\"b-authorsposts-item\"\n                ng-repeat=\"post in posts\">\n\n                <!-- link -->\n                <a\n                    class=\"b-authorsposts-link\"\n                    ng-href=\"{{ post.url }}\"\n                    >\n                    <!-- pic -->\n                    <span\n                        class=\"b-authorsposts-pic\"\n                        style=\"background-image: url({{post.image}});\"\n                        ng-if=\"post.image\"\n                        ></span>\n                    <!-- subject -->\n                    <span\n                        class=\"b-authorsposts-subject\"\n                        lj-html=\"post.subject\"\n                        ></span>\n                </a>\n\n            </li>\n\n        </ul>\n\n        <!-- dummy loader -->\n        <div class=\"b-authorsposts-dummy\">\n            <div class=\"b-authorsposts-dummy-item\">\n                <span class=\"b-authorsposts-dummy-pic\"></span>\n                <div class=\"b-authorsposts-dummy-caption\">\n                    <span class=\"b-authorsposts-dummy-subject\"></span>\n                </div>\n            </div>\n            <div class=\"b-authorsposts-dummy-item\">\n                <span class=\"b-authorsposts-dummy-pic\"></span>\n                <div class=\"b-authorsposts-dummy-caption\">\n                    <span class=\"b-authorsposts-dummy-subject\"></span>\n                </div>\n            </div>\n            <div class=\"b-authorsposts-dummy-item\">\n                <span class=\"b-authorsposts-dummy-pic\"></span>\n                <div class=\"b-authorsposts-dummy-caption\">\n                    <span class=\"b-authorsposts-dummy-subject\"></span>\n                </div>\n            </div>\n        </div>\n\n    </div><!-- /body -->\n\n</div><!-- /authorsposts -->\n\n\n';
LJ.injectStyle('/* Journal Gallery\n----------------------------------- */\n/*\n<lj-gallery height=\"[x]\" width=\"[x]\">\n    <lj-gallery-item src=\"[image url]\" href=\"[link url]\"> подпись </lj-gallery-item>\n    <lj-gallery-item src=\"[image url]\" href=\"[link url]\"> подпись </lj-gallery-item>\n    <lj-gallery-item src=\"[image url]\" href=\"[link url]\"> подпись </lj-gallery-item>\n</lj-gallery>\n*/\n.b-journalgallery {\n    overflow: hidden;\n    display: block;\n    position: relative;\n    width: 100%;\n    margin: 0 auto;\n    padding: 0 0 70px;\n    font: 0.8125rem/1.1 \"ProximaNovaSemibold\",Tahoma,Arial,sans-serif;\n    }\n    /* container */\n    .b-journalgallery-container {\n        position: relative;\n        background: #FFF;\n        }\n        /* picture */\n        .b-journalgallery-picture {\n            position: absolute;\n            width: 100%;\n            margin: 0;\n            background: url(/img/preloader/preloader-disc-blue-white-16.gif?v=39502) no-repeat 50% 50%;\n            -webkit-transition: 500ms cubic-bezier(0.250, 0.250, 0.750, 0.750) all;\n            -moz-transition: 500ms cubic-bezier(0.250, 0.250, 0.750, 0.750) all;\n            -ms-transition: 500ms cubic-bezier(0.250, 0.250, 0.750, 0.750) all;\n            -o-transition: 500ms cubic-bezier(0.250, 0.250, 0.750, 0.750) all;\n            transition: 500ms cubic-bezier(0.250, 0.250, 0.750, 0.750) all;\n            text-align: center;\n            }\n        .b-journalgallery-picture:after {\n            content: \'\';\n            display: inline-block;\n            height: 100%;\n            margin: 0 0 0 -0.05em; /* To offset spacing. May vary by font */\n            vertical-align: middle;\n            }\n            .b-journalgallery-wrapper {\n                display: inline-block;\n                vertical-align: middle;\n                max-width: 99%;\n                max-width: calc(100% - 0.3em);\n                }\n            .b-journalgallery-hightpriority .b-journalgallery-wrapper {\n                display: inline;\n                }\n                .b-journalgallery-image {\n                    position: relative;\n                    max-width: 100%;\n                    margin: 0;\n                    vertical-align: top;\n                    opacity: 1;\n                    -webkit-transition: 500ms cubic-bezier(0.250, 0.250, 0.750, 0.750) all;\n                    -moz-transition: 500ms cubic-bezier(0.250, 0.250, 0.750, 0.750) all;\n                    -ms-transition: 500ms cubic-bezier(0.250, 0.250, 0.750, 0.750) all;\n                    -o-transition: 500ms cubic-bezier(0.250, 0.250, 0.750, 0.750) all;\n                    transition: 500ms cubic-bezier(0.250, 0.250, 0.750, 0.750) all;\n                    width: auto \\9;\n                    height: auto \\9;\n                    }\n                .b-journalgallery-hightpriority .b-journalgallery-image {\n                    max-height: 100%;\n                    }\n            .b-journalgallery-caption {\n                position: absolute;\n                top: 100%;\n                left: 0;\n                right: 0;\n                height: 70px; /* eq to b-journalgallery padding-bottom */\n                margin: 0;\n                padding: 0;\n                border: 0;\n                text-align: center;\n                background: #FFF;\n                color: #829399;\n                }\n                .b-journalgallery-caption-title {\n                    overflow: hidden;\n                    position: absolute;\n                    top: 0;\n                    right: 40px;\n                    left: 40px;\n                    height: 2.2em;\n                    margin: 0;\n                    padding: 10px 2px 0;\n                    }\n        .b-journalgallery-picture-loaded {\n            background-image: none;\n            }\n            .b-journalgallery-picture-loaded .b-journalgallery-image {\n                opacity: 1;\n                }\n        .b-journalgallery-picture-prev {\n            -webkit-transform: translate3d(-100%, 0, 0);\n            -moz-transform: translate3d(-100%, 0, 0);\n            -ms-transform: translate3d(-100%, 0, 0);\n            -o-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0);\n            opacity: 0;\n            }\n        .b-journalgallery-picture-next {\n            -webkit-transform: translate3d(100%, 0, 0);\n            -moz-transform: translate3d(100%, 0, 0);\n            -ms-transform: translate3d(100%, 0, 0);\n            -o-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0);\n            opacity: 0;\n            }\n        .b-journalgallery-picture-current {\n            -webkit-transform: translate3d(0, 0, 0);\n            -moz-transform: translate3d(0, 0, 0);\n            -ms-transform: translate3d(0, 0, 0);\n            -o-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n            }\n    /* counter */\n    .b-journalgallery-counter {\n        position: absolute;\n        bottom: 44px;\n        right: 0;\n        margin: 0;\n        padding: 2px;\n        border: 0;\n        text-align: right;\n        color: #829399;\n        }\n    /* prev-next arrows */\n    .b-journalgallery-nav {\n        position: absolute;\n        top: 0;\n        bottom: 70px; /* .b-journalgallery {padding-bottom} */\n        margin: 0;\n        padding: 0;\n        border: 0;\n        cursor: pointer;\n        font: 0/0 a;\n        }\n    .b-journalgallery-nav:before {\n        content: \" \";\n        position: absolute;\n        top: 50%;\n        width: 50px;\n        height: 50px;\n        margin: -25px 0 0;\n        padding: 0;\n        border: 0;\n        border-radius: 3px;\n        background: #839399;\n        }\n    .b-journalgallery-nav:hover:before {\n        background: #09C;\n        }\n    .b-discoveryarticle .b-journalgallery-nav:hover:before {\n        background: #39BF71;\n        }\n    .b-journalgallery-nav:after {\n        content: \" \";\n        position: absolute;\n        top: 50%;\n        width: 9px;\n        height: 16px;\n        margin: -8px 0 0;\n        padding: 0;\n        background: url(/img/icons/journalgallery.png?v=39648) no-repeat 0 0;\n        }\n    /* prev */\n    .b-journalgallery-nav-prev {\n        left: 0;\n        width: 30%;\n        }\n    .b-journalgallery-nav-prev:before {\n        left: 20px;\n        }\n    .b-journalgallery-nav-prev:after {\n        left: 40px;\n        }\n    /* next */\n    .b-journalgallery-nav-next {\n        right: 0;\n        width: 70%;\n        }\n    .b-journalgallery-nav-next:before {\n        right: 20px;\n        }\n    .b-journalgallery-nav-next:after {\n        right: 40px;\n        background-position: 0 -17px;\n        }\n\n\n');
LJ.injectStyle('/* AUTHOR\'S POSTS */\n\n\n\n.b-authorsposts {\n    width: 300px;\n    margin: 0 0 25px;\n    margin: 0 0 1.5625rem;\n    padding: 0 0 25px 30px;\n    padding: 0 0 1.5625rem 30px;\n    border-bottom: 1px solid #DAE3E6;\n    }\n\n    /* head */\n    .b-authorsposts-head {\n        margin: 0 0 16px;\n        margin: 0 0 1rem;\n        padding: 0;\n        }\n    .b-feedwidgets .b-authorsposts-head {\n        margin: 0 0 13px;\n        margin: 0 0 0.8125rem;\n        }\n        .b-authorsposts-title {\n            margin: 0;\n            padding: 0;\n            font-style: normal;\n            font-weight: normal;\n            font-size: 20px;\n            font-size: 1.25rem;\n            text-transform: uppercase;\n            color: #829399;\n            }\n\n    /* body */\n    .b-authorsposts-body {\n        margin: 0;\n        padding: 0;\n        }\n    .b-feedwidgets .b-authorsposts-body {\n        font-size: 14px;\n        font-size: 0.875rem;\n        }\n\n        /* items */\n        .b-authorsposts-items {\n            margin: 0;\n            padding: 0;\n            list-style: none;\n            }\n\n            /* item */\n            .b-authorsposts-item {\n                margin: 16px 0 0;\n                margin: 1rem 0 0;\n                padding: 0;\n                }\n            .b-authorsposts-item:first-child {\n                margin-top: 0;\n                }\n\n                /* link */\n                .b-authorsposts-link {\n                    position: relative;\n                    display: block;\n                    margin: 0;\n                    padding: 0;\n                    }\n                .b-discoveryarticle .b-authorsposts-link:link,\n                .b-discoveryarticle .b-authorsposts-link:visited {\n                    color: #242f33\n                    }\n                .b-discoveryarticle .b-authorsposts-link:hover,\n                .b-discoveryarticle .b-authorsposts-link:active {\n                    color: #00a3d9;\n                    }\n\n                    /* pic */\n                    .b-authorsposts-pic {\n                        display: block;\n                        height: 200px;\n                        margin: 0 0 0.5em;\n                        background-position: 50% 50%;\n                        background-repeat: no-repeat;\n                        background-size: cover;\n                        }\n\n                    /* subject */\n                    .b-authorsposts-subject {\n                        display: block;\n                        margin: 0;\n                        font-size: 1.25em;\n                        line-height: 1.2;\n                        }\n\n        /* dummy loader */\n        .b-authorsposts-dummy {\n            display: none;\n            margin: 0;\n            padding: 0;\n            list-style: none;\n            }\n            .b-authorsposts-dummy-item {\n                margin: 32px 0 0;\n                margin: 2rem 0 0;\n                padding: 0;\n                }\n            .b-authorsposts-dummy-item:first-child {\n                margin-top: 0;\n                }\n                /* image */\n                .b-authorsposts-dummy-pic {\n                    display: inline-block;\n                    width: 300px;\n                    height: 200px;\n                    margin: 0 0 8px;\n                    margin: 0 0 0.5rem;\n                    padding: 0;\n                    background: #F8F8F8;\n                    -webkit-animation: loading-authorsposts 1s infinite;\n                    -moz-animation:    loading-authorsposts 1s infinite;\n                    -o-animation:      loading-authorsposts 1s infinite;\n                    animation:         loading-authorsposts 1s infinite;\n                    }\n                /* hide at /feed page (LJSUP-18145) */\n                .b-feedwidgets .b-authorsposts-dummy-pic {\n                    display: none;\n                    }\n                /* caption */\n                .b-authorsposts-dummy-caption {\n                    display: block;\n                    height: 48px;\n                    height: 3rem;\n                    margin: 0 0 8px;\n                    margin: 0 0 0.5rem;\n                    padding: 0;\n                    }\n                    .b-authorsposts-dummy-subject {\n                        position: relative;\n                        display: block;\n                        width: 250px;\n                        height: 19px;\n                        height: 1.2rem;\n                        margin: 0 0 32px;\n                        margin: 0 0 2rem;\n                        padding: 0;\n                        background: #F8F8F8;\n                        -webkit-animation: loading-authorsposts 1s infinite;\n                        -moz-animation:    loading-authorsposts 1s infinite;\n                        -o-animation:      loading-authorsposts 1s infinite;\n                        animation:         loading-authorsposts 1s infinite;\n                        }\n                    .b-authorsposts-dummy-subject:after {\n                        content: \" \";\n                        position: absolute;\n                        top: 24px;\n                        top: 1.5rem;\n                        left: 0;\n                        width: 200px;\n                        height: 19px;\n                        height: 1.2rem;\n                        margin: 0;\n                        padding: 0;\n                        background: #F8F8F8;\n                        }\n                /* meta */\n                .b-authorsposts-dummy-meta {\n                    display: inline-block;\n                    width: 120px;\n                    height: 16px;\n                    height: 1rem;\n                    margin: 0;\n                    padding: 0;\n                    background: #F8F8F8;\n                    -webkit-animation: loading-authorsposts 1s infinite;\n                    -moz-animation:    loading-authorsposts 1s infinite;\n                    -o-animation:      loading-authorsposts 1s infinite;\n                    animation:         loading-authorsposts 1s infinite;\n                    }\n                @-webkit-keyframes loading-authorsposts {\n                    0%   { background: #F8F8F8; }\n                    50%  { background: #FBFBFB; }\n                    100% { background: #F8F8F8; }\n                }\n                @-moz-keyframes loading-authorsposts {\n                    0%   { background: #F8F8F8; }\n                    50%  { background: #FBFBFB; }\n                    100% { background: #F8F8F8; }\n                }\n                @-o-keyframes loading-authorsposts {\n                    0%   { background: #F8F8F8; }\n                    50%  { background: #FBFBFB; }\n                    100% { background: #F8F8F8; }\n                }\n                @keyframes loading-authorsposts {\n                    0%   { background: #F8F8F8; }\n                    50%  { background: #FBFBFB; }\n                    100% { background: #F8F8F8; }\n                }\n\n/* loading */\n.b-authorsposts-loading {\n    }\n    .b-authorsposts-loading .b-authorsposts-body {\n        min-height: 300px;\n        }\n        .b-authorsposts-loading .b-authorsposts-dummy {\n            display: block;\n            }\n        .b-authorsposts-loading .b-authorsposts-items {\n            visibility: hidden;\n            }\n\n\n\n/* empty */\n.b-authorsposts-empty {\n    display: none;\n    }\n    /* hide */\n    .b-authorsposts-empty .b-authorsposts-head {\n        display: none;\n        }\n    .b-authorsposts-empty .b-authorsposts-body {\n        display: none;\n        }\n\n\n\n@media all and (max-width: 1000px) {\n\n    .b-authorsposts {\n        width: auto;\n        max-width: 650px;\n        }\n        .b-authorsposts-item {\n            display: block;\n            width: auto;\n            margin-bottom: 1.5em;\n            }\n            .b-authorsposts-link {\n                margin-right: 0;\n                }\n\n}\n\n\n\n@media all and (max-width: 800px) {\n\n    .b-authorsposts {\n        width: 300px;\n        }\n}\n\n\n\n@media all and (max-width: 650px) {\n\n    .b-authorsposts {\n        width: auto;\n        max-width: 300px;\n        padding-left: 15px;\n        padding-right: 15px;\n        }\n}\n\n\n');
angular.module('Discovery.Tags', [
  'LJ.Templates',
  'LJ.Api'
])
/**
 * Discovery tags bootstrap. Should be used in conjunction with lj-html directive
 */
.directive('ljDiscoveryTags', ['$compile', function ($compile) {
  var TAGS = [
    'lj-gallery',
    '[lj-memories]',
    '[lj-lazy]',
    '[lj-share]',
    '[lj-cut]',
    '[lj-screenable]'
  ];

  return {
    restrict: 'A',
    terminal: true,
    link: function (scope, element) {
      $compile( element.find( TAGS.join(',') ) )(scope);
    }
  };
}])
.directive('ljGallery', ['$templateCache', '$compile',
               function ( $templateCache,   $compile ) {
    return {
      restrict: 'E',
      scope: true,
      link: function (scope, element, attrs) {
        scope.dimensions = {
          maxWidth:  attrs.width + 'px',
          height: attrs.height || 350
        };

        scope.items = element.find('lj-gallery-item').map(function(){
          var image = angular.element(this).find('img'),
              link = angular.element(this).find('a'),
              capture = angular.element(this).find('lj-gallery-item-capture');

          return {
            content: capture.html(),
            src: image.attr('src'),
            href: link.attr('href')
          };
        }).toArray();

        scope.isTall = ( typeof attrs.tall !== 'undefined' );

        scope.next = function () {
          scope.state.index += 1;
        };

        scope.prev = function () {
          scope.state.index -= 1;
        };

        scope.state = {
          index: 0,
          total: scope.items.length - 1
        };

        scope.isNearby = function (index) {
          return Math.abs(scope.state.index - index) <= 1;
        };

        // replace existed content with our template
        element.html(
          $compile( $templateCache.get('ljGallery.ng.tmpl') )(scope)
        );
      }
    };
}])
.directive('ljSuggest', ['Api', function (Api) {
  return {
    templateUrl: 'ljSuggest.ng.tmpl',
    scope: {
      itemId: '@ljSuggest'
    },
    link: function (scope) {
      Api.call('discovery.suggest', { itemid: scope.itemId }, {cache: true})
        .then(function (response) {
          scope.suggest = response.items;
        });
    }
  };
}])
.directive('ljWidgetAuthorsPosts', ['Api', function (Api) {
  return {
    templateUrl: 'posts.ng.tmpl',
    scope: {
      userId: '@ljWidgetAuthorsPosts',
      itemId: '@ljWidgetAuthorsPostsExclude'
    },
    link: function (scope) {
      scope.state = {
        isLoading: true
      };

      Api.call('discovery.author_posts', {
          itemid: scope.itemId,
          userid: scope.userId
        }, {
        cache: true
      }).then(function (response) {
          scope.state.isLoading = false;
          scope.posts = response.items;
        });

    }
  };
}]);
;

/* file-end: js/discovery/directives.js 
----------------------------------------------------------------------------------*/

/* ---------------------------------------------------------------------------------
   file-start: js/discovery/menu.js 
*/

;(function () {
  'use strict';

  angular.module('Discovery.Menu', [])
    .directive('ljScrollMenu', ['$document', '$timeout', function ($document, $timeout) {
      return {
        scope: {
          positions: '=ljScrollMenu',
          initialized: '=ljScrollMenuInitialized',

          // menu can be viewable (all items could be on the screen at the moment)
          isViewable:  '=ljScrollMenuViewable',
          isDisabled:  '=ljScrollMenuDisabled'
        },
        link: function (scope, element, attrs) {
          var $window  = angular.element(window),
              footer = angular.element('.s-footer'),
              header = angular.element('.l-flatslide-body'),
              layoutHeader = angular.element('.s-header'),
              layoutHeaderHeight = layoutHeader.height(),
              ljliveHeight = LJ.get('ljlive.is_enabled') ? 50 : 0,

              menuItems  = element.find('ul > li'),
              menuItemHeight = menuItems.eq(0).outerHeight(),
              menuHeight = menuItems.length * menuItemHeight,

              // is more functionality enabled
              isMoreEnabled = typeof attrs.ljScrollMenuMore !== 'undefined',
              moreButton = angular.element('.l-flatslide-menu-item-more'),

              movable,
              clonedMovable;

          if ( isMoreEnabled ) {
            // items that could be moved
            movable = element.find('ul > li.l-flatslide-menu-movable');

            // Clone movable elements and move them into MORE container
            clonedMovable = movable.clone().appendTo(
              element.find('.l-flatslide-menu-subitems')
            );
          }

          // detect sticky menu
          function isMenuFixed() {
            return layoutHeader.css('position') === 'fixed';
          }

          // update state when menu is enabled
          scope.$watch('isDisabled', function (isDisabled, old) {
            if (isDisabled !== old && !isDisabled) {
              $timeout(onScroll);
            }
          });

          if ( isMoreEnabled ) {
            // check menu position changes
            scope.$watch('positions', moveItems, true);
          }

          function onScroll() {
            if ( scope.isDisabled ) {
              return;
            }

            var windowScrollTop    = $window.scrollTop(),
                windowScrollBottom = windowScrollTop + $window.height(),
                headerScrollTop    = header.offset().top,
                footerScrollTop    = footer.offset().top,
                documentHeight     = $document.height(),
                top, bottom, height;

            // top coordinate should not be less then 0
            // Notice: it happens when you are trying to scroll top even after
            //         you are at the top of the page
            if (windowScrollTop < 0) {
              windowScrollTop = 0;
            }

            // bottom coordinate should not be greater then document height
            // Notice: it happens when you are trying to scroll bottom even after
            //         you are at the bottom of the page
            if (windowScrollBottom > documentHeight) {
              windowScrollBottom = documentHeight;
            }

            // current menu positions
            top = Math.max(headerScrollTop - windowScrollTop, isMenuFixed() ? layoutHeaderHeight : 0);
            bottom = Math.max(ljliveHeight, windowScrollBottom - footerScrollTop);
            height = Math.max($window.height() - top - bottom);

            // update scope properties only if they have been changed
            if ( top !== scope.positions.top ||
                 bottom !== scope.positions.bottom ||
                 height !== scope.positions.height ) {
              scope.positions.top = top;
              scope.positions.bottom = bottom;
              scope.positions.height = height;

              scope.$apply();
            }
          }

          function onResize() {
            // block fixed navigation for mobiles
            if ( LJ.Support.isMobile() ) {
              scope.isViewable = false;
              moveItems();
              return;
            }

            // check if menu can be viewable (all items could be on the screen at the moment)
            if ( menuHeight > $window.height() - layoutHeaderHeight - ljliveHeight ) {
              // height of menu is greater than the users screen
              scope.isViewable = false;
              moveItems();
            } else {
              scope.isViewable = true;
            }

            // recalculate menu positions
            // timeout is used because digest loop could be in progress at the moment
            $timeout(onScroll);
          }

          function moveItems() {
            if ( !isMoreEnabled ) {
              // functionality is disabled
              return;
            }

            // items that could be displayed inside of the current menu
            var itemsToDisplay = Math.floor(
                  ($window.height() - scope.positions.top - scope.positions.bottom) / menuItemHeight
                ),

                // -1 is bacause MORE item is listed inside of menuItems
                itemsToHide = (menuItems.length - 1) - itemsToDisplay;

            // show all menu items and hide MORE button
            if (itemsToHide <= 0) {
              movable.show();
              moreButton.hide();
              return;
            }

            // bacause MORE item should be shown as well
            itemsToHide += 1;
            moreButton.show();

            if ( itemsToHide >= movable.length ) {
              // hide all items that could be moved
              movable.hide();
              clonedMovable.show();
              return;
            }

            // hide last `itemsToHide` items
            movable.show().filter(':gt(' + (movable.length - itemsToHide - 1) + ')').hide();
            clonedMovable.hide().filter(':gt(' + (movable.length - itemsToHide - 1) + ')').show();
          }

          $window.on('scroll', onScroll);
          $window.on('resize', onResize);
          LJ.Event.on('discovery:menu:resize', onResize);
          scope.$on('$destroy', function () {
            $window.off('scroll', onScroll);
            $window.off('resize', onResize);
            LJ.Event.off('discovery:menu:resize', onResize);
          });

          $timeout(function () {
            onResize();
            onScroll();
            scope.initialized = true;
          });
        }
      };
    }]);

}());
;

/* file-end: js/discovery/menu.js 
----------------------------------------------------------------------------------*/

/* ---------------------------------------------------------------------------------
   file-start: js/discovery/settings.js 
*/




/* ---------------------------------------------------------------------------------
   file-start: js/core/angular/colorpicker.js 
*/


/* ---------------------------------------------------------------------------------
   file-start: js/color.js 
*/



/**
 * @author Valeriy Vasin (valeriy.vasin@sup.com)
 * @description Color object that will allow us perform interactions
 *              with colors. Base part for colorpicker
 */
;(function ($) {
    'use strict';

    var Color,
        defaultRGBColor = { red: 0, green: 0, blue: 0 },
        ERRORS = {
            rgb: 'You should provide correct RGB color hash.',
            hsv: 'You should provide correct HSV color hash.',
            hex: 'You should provide correct HEX color string.'
        };

    Color = function (color) {
        if ( !(this instanceof Color) ) {
            throw new Error('Missing `new` prefix when invoking constructor function.');
        }

        this._changeCallbacks = [];

        if (typeof color === 'undefined') {
            this.RGB(defaultRGBColor);
        } else if ( this.isRGB(color) ) {
            this.RGB(color);
        } else if ( this.isHSV(color) ) {
            this.HSV(color);
        } else if ( this.isHEX(color) ) {
            this.HEX(color);
        }
    };

    /**
     * Color getters/setters
     */

    /**
     * RGB color getter/setter
     * @param {Object} color RGB Color object
     * @param {Number} color.red The red color value [0..255]
     * @param {Number} color.green The green color value [0..255]
     * @param {Number} color.blue The blue color value [0..255]
     * @return {Object} Color object instance
     */
    Color.prototype.RGB = function (color) {
        if (typeof color === 'undefined') {
            // getter
            return $.extend({}, this._RGB);
        } else {
            // setter
            if ( !this.isRGB(color) ) {
                throw new Error( ERRORS.rgb );
            }
            this._RGB = $.extend({}, color);
            this._HSV = this.rgbToHsv( this._RGB );
            this._triggerChange();
            return this;
        }
    };

    /**
     * HSV color getter/setter
     * @param {Object} color HSV Color object
     * @param {Number} color.hue The hue value [0..359]
     * @param {Number} color.saturation The saturation value [0..100]
     * @param {Number} color.value The value value [0..100]
     * @return {Object} Color object instance
     */
    Color.prototype.HSV = function (color) {
        if (typeof color === 'undefined') {
            // getter
            return $.extend({}, this._HSV);
        } else {
            // setter
            if ( !this.isHSV(color) ) {
                throw new Error( ERRORS.hsv );
            }
            this._HSV = $.extend({}, color);
            this._RGB = this.hsvToRgb(this._HSV);
            this._triggerChange();
            return this;
        }
    };

    /**
     * Hex color getter/setter
     * @param  {String} HEXColor Hex color representation
     * @return {Object} Color object instance
     */
    Color.prototype.HEX = function (color) {
        if ( typeof color === 'undefined' ) {
            // getter
            return this.rgbToHex( this._RGB );
        } else {
            // setter
            if ( !this.isHEX(color) ) {
                throw new Error( ERRORS.hex );
            }
            this._RGB = this.hexToRgb(color);
            this._HSV = this.rgbToHsv( this._RGB );
            this._triggerChange();
            return this;
        }
    };

    /**
     * Set some part of the palette. It's possible to update parts
     * of RGB palette or HSV palette
     *
     * @param {Object} color Color hash
     *
     * @example
     * var color = new LJ.Color({ red: 255, green: 255, blue: 255 });
     * color.set({ red: 0 }); // now color is { red: 0, green: 255, blue: 255 }
     */
    Color.prototype.set = function (color) {
        var palette;

        if (typeof color !== 'object') {
            throw new Error('Color argument should be an object.');
        }

        if ( color.hasOwnProperty('red') || color.hasOwnProperty('green') || color.hasOwnProperty('blue') ) {
            palette = $.extend( this.RGB(), LJ.Object.pick(color, 'red', 'green', 'blue') );
            this.RGB(palette);
        } else if (color.hasOwnProperty('hue') || color.hasOwnProperty('saturation') || color.hasOwnProperty('value')) {
            palette = $.extend( this.HSV(), LJ.Object.pick(color, 'hue', 'saturation', 'value') );
            this.HSV(palette);
        }

        return this;
    };

    /**
     * Converters
     */

    /**
     * Converts an RGB color value to HSV. Conversion formula
     * adapted from http://en.wikipedia.org/wiki/HSV_color_space.
     *
     * @param {Object} RGBColor RGB Color object
     * @param {Number} RGBColor.red The red color value [0..255]
     * @param {Number} RGBColor.green The green color value [0..255]
     * @param {Number} RGBColor.blue The blue color value [0..255]
     *
     * @return {Object} HSVColor HSV Color object
     * @return {Number} HSVColor.hue The hue value [0..359]
     * @return {Number} HSVColor.saturation The saturation value [0..100]
     * @return {Number} HSVColor.value The value value [0..100]
     */
    Color.prototype.rgbToHsv = function (RGBColor) {
        var r, g, b,
            max, min,
            h, s, v,
            diff;

        if ( !this.isRGB(RGBColor) ) {
            throw new Error(ERRORS.rgb);
        }

        r = RGBColor.red / 255;
        g = RGBColor.green / 255;
        b = RGBColor.blue / 255;

        max = Math.max(r, g, b);
        min = Math.min(r, g, b);

        h = s = v = max;

        diff = max - min;
        s = max === 0 ? 0 : diff / max;

        if (max === min) {
            h = 0; // achromatic
        } else {
            switch (max){
                case r:
                    h = (g - b) / diff + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / diff + 2;
                    break;
                case b:
                    h = (r - g) / diff + 4;
                    break;
            }
            h /= 6;
        }

        return {
            hue: Math.round(h * 360),
            saturation: Math.round(s * 100),
            value: Math.round(v * 100)
        };
    };

    /**
     * HSV to RGB color conversion
     * Ported from the excellent java algorithm by Eugene Vishnevsky at:
     * http://www.cs.rit.edu/~ncs/color/t_convert.html
     *
     * @param {Object} HSVColor HSV color object
     * @param {Number} HSVColor.hue The hue value [0..359]
     * @param {Number} HSVColor.saturation The saturation value [0..100]
     * @param {Number} HSVColor.value The value value [0..100]
     *
     * @return {Object} RGBColor RGB color object
     * @return {Number} RGBColor.red The red color value [0..255]
     * @return {Number} RGBColor.green The green color value [0..255]
     * @return {Number} RGBColor.blue The blue color value [0..255]
     */
    Color.prototype.hsvToRgb = function (HSVColor) {
        var h, s, v,
            r, g, b,
            i, f, p, q, t;

        if ( !this.isHSV(HSVColor) ) {
            throw new Error( ERRORS.hsv );
        }

        h = Math.max(0, Math.min(360, HSVColor.hue));
        s = Math.max(0, Math.min(100, HSVColor.saturation));
        v = Math.max(0, Math.min(100, HSVColor.value));

        // We accept saturation and value arguments from 0 to 100 because that's
        // how Photoshop represents those values. Internally, however, the
        // saturation and value are calculated from a range of 0 to 1. We make
        // That conversion here.
        s /= 100;
        v /= 100;

        if (s === 0) {
            // Achromatic (grey)
            r = g = b = v;
            return {
                red: Math.round(r * 255),
                green: Math.round(g * 255),
                blue: Math.round(b * 255)
            };
        }

        h /= 60; // sector 0 to 5
        i = Math.floor(h);
        f = h - i; // factorial part of h
        p = v * (1 - s);
        q = v * (1 - s * f);
        t = v * (1 - s * (1 - f));

        switch(i) {
            case 0:
                r = v;
                g = t;
                b = p;
                break;

            case 1:
                r = q;
                g = v;
                b = p;
                break;

            case 2:
                r = p;
                g = v;
                b = t;
                break;

            case 3:
                r = p;
                g = q;
                b = v;
                break;

            case 4:
                r = t;
                g = p;
                b = v;
                break;

            default: // case 5:
                r = v;
                g = p;
                b = q;
        }

        return {
            red: Math.round(r * 255),
            green: Math.round(g * 255),
            blue: Math.round(b * 255)
        };
    };

    /**
     * Convert number to HEX representation
     * @param  {Number} number Number to be converted
     * @return {String}        Hex representation of the number
     */
    Color.prototype._numberToHex = function (number) {
        return number.toString(16);
    };

    /**
     * Convert RGB color to HEX string
     * @param {Object} RGBColor RGB color object
     * @param {Number} RGBColor.red The red value [0..255]
     * @param {Number} RGBColor.green The green value [0..255]
     * @param {Number} RGBColor.blue The blue value [0..255]
     *
     * @return {String}  HEX String, e.g. "#0f0f0f"
     */
    Color.prototype.rgbToHex = function (RGBColor) {
        if ( !this.isRGB(RGBColor) ) {
            throw new Error( ERRORS.rgb );
        }

        return '#' + [
            LJ.String.pad( this._numberToHex(RGBColor.red), 2, '0' ),
            LJ.String.pad( this._numberToHex(RGBColor.green), 2, '0' ),
            LJ.String.pad( this._numberToHex(RGBColor.blue), 2, '0' )
        ].join('');
    };

    /**
     * Convert Hex string to RGB array
     * @param  {String} HEXColor Hex color representation
     * @return {Object} RGBColor RGB color object
     * @return {Number} RGBColor.red The red color value [0..255]
     * @return {Number} RGBColor.green The green color value [0..255]
     * @return {Number} RGBColor.blue The blue color value [0..255]
     */
    Color.prototype.hexToRgb = function (HEXColor) {
        if ( !this.isHEX(HEXColor) ) {
            throw new Error( ERRORS.hex );
        }

        HEXColor = HEXColor.slice(1);

        return {
            red: parseInt( HEXColor.slice(0, 2), 16 ),
            green: parseInt( HEXColor.slice(2, 4), 16 ),
            blue: parseInt( HEXColor.slice(-2), 16 )
        };
    };

    /**
     * Matchers
     */

    /**
     * Check is provided color valid RGB color hash or not
     * @param  {Object}  color Value to check
     * @return {Boolean} Result of the check
     */
    Color.prototype.isRGB = function (color) {
        var result;

        if (typeof color !== 'object') {
            return false;
        }

        if (!color.hasOwnProperty('red') || !color.hasOwnProperty('green') || !color.hasOwnProperty('blue')) {
            return false;
        }

        result = [ color.red, color.green, color.blue ].every(function ( c ) {
            return typeof c === 'number' && c >= 0 && c <= 255;
        });

        return result;
    };

    /**
     * Check is provided color valid HSV color hash or not
     * @param  {Object}  color Value to check
     * @return {Boolean}       Result of the check
     */
    Color.prototype.isHSV = function (color) {
        var result;

        if (typeof color !== 'object') {
            return false;
        }

        if (!color.hasOwnProperty('hue') || !color.hasOwnProperty('saturation') || !color.hasOwnProperty('value')) {
            return false;
        }

        if ( typeof color.hue !== 'number' || color.hue < 0 || color.hue > 359 ) {
            return false;
        }

        result = [ color.saturation, color.value ].every(function ( c ) {
            return typeof c === 'number' && c >= 0 && c <= 100;
        });

        return result;
    };

    /**
     * Check is provided color valid hex color string
     * @param  {String}  color Value to check
     * @return {Boolean}       Result of the check
     */
    Color.prototype.isHEX = function (color) {
        var regex = /^#[\da-f]{6}$/i;

        return typeof color === 'string' && regex.test(color);
    };

    // override toString
    Color.prototype.toString = function () {
        return this.rgbToHex( this._RGB );
    };

    /**
     * Add change callback
     * @param  {Function} fn Function that should react to color changes
     * @return {Object}      Color instance
     */
    Color.prototype.change = function (fn) {
        if (typeof fn !== 'function') {
            throw new TypeError('Color change callback should be a function.');
        }

        if (this._changeCallbacks.indexOf(fn) === -1) {
            this._changeCallbacks.push(fn);
        }

        return this;
    };

    /**
     * This function will react on color changing and run callbacks
     */
    Color.prototype._triggerChange = function () {
        var hex,
            that;

        if (this._changeCallbacks.length) {
            that = this;
            hex = this.toString();
            this._changeCallbacks.forEach(function (callback) {
                callback.call(that, hex);
            });
        }
    };

    // export object into global namespace
    LJ.Color = Color;
}(jQuery));
;

/* file-end: js/color.js 
----------------------------------------------------------------------------------*/

/* ---------------------------------------------------------------------------------
   file-start: js/lib/jquery-ui/jquery.ui.mouse.min.js 
*/

/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.mouse.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){var c=!1;a(document).mouseup(function(a){c=!1}),a.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var b=this;this.element.bind("mousedown."+this.widgetName,function(a){return b._mouseDown(a)}).bind("click."+this.widgetName,function(c){if(!0===a.data(c.target,b.widgetName+".preventClickEvent"))return a.removeData(c.target,b.widgetName+".preventClickEvent"),c.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(b){if(c)return;this._mouseStarted&&this._mouseUp(b),this._mouseDownEvent=b;var d=this,e=b.which==1,f=typeof this.options.cancel=="string"&&b.target.nodeName?a(b.target).closest(this.options.cancel).length:!1;if(!e||f||!this._mouseCapture(b))return!0;this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){d.mouseDelayMet=!0},this.options.delay));if(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)){this._mouseStarted=this._mouseStart(b)!==!1;if(!this._mouseStarted)return b.preventDefault(),!0}return!0===a.data(b.target,this.widgetName+".preventClickEvent")&&a.removeData(b.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(a){return d._mouseMove(a)},this._mouseUpDelegate=function(a){return d._mouseUp(a)},a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),b.preventDefault(),c=!0,!0},_mouseMove:function(b){return!a.browser.msie||document.documentMode>=9||!!b.button?this._mouseStarted?(this._mouseDrag(b),b.preventDefault()):(this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,b)!==!1,this._mouseStarted?this._mouseDrag(b):this._mouseUp(b)),!this._mouseStarted):this._mouseUp(b)},_mouseUp:function(b){return a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,b.target==this._mouseDownEvent.target&&a.data(b.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(b)),!1},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(a){return this.mouseDelayMet},_mouseStart:function(a){},_mouseDrag:function(a){},_mouseStop:function(a){},_mouseCapture:function(a){return!0}})})(jQuery);;

/* file-end: js/lib/jquery-ui/jquery.ui.mouse.min.js 
----------------------------------------------------------------------------------*/

/* ---------------------------------------------------------------------------------
   file-start: js/lib/jquery-ui/jquery.ui.slider.min.js 
*/

/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.slider.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){var c=5;a.widget("ui.slider",a.ui.mouse,{widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null},_create:function(){var b=this,d=this.options,e=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),f="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",g=d.values&&d.values.length||1,h=[];this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"+(d.disabled?" ui-slider-disabled ui-disabled":"")),this.range=a([]),d.range&&(d.range===!0&&(d.values||(d.values=[this._valueMin(),this._valueMin()]),d.values.length&&d.values.length!==2&&(d.values=[d.values[0],d.values[0]])),this.range=a("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header"+(d.range==="min"||d.range==="max"?" ui-slider-range-"+d.range:"")));for(var i=e.length;i<g;i+=1)h.push(f);this.handles=e.add(a(h.join("")).appendTo(b.element)),this.handle=this.handles.eq(0),this.handles.add(this.range).filter("a").click(function(a){a.preventDefault()}).hover(function(){d.disabled||a(this).addClass("ui-state-hover")},function(){a(this).removeClass("ui-state-hover")}).focus(function(){d.disabled?a(this).blur():(a(".ui-slider .ui-state-focus").removeClass("ui-state-focus"),a(this).addClass("ui-state-focus"))}).blur(function(){a(this).removeClass("ui-state-focus")}),this.handles.each(function(b){a(this).data("index.ui-slider-handle",b)}),this.handles.keydown(function(d){var e=a(this).data("index.ui-slider-handle"),f,g,h,i;if(b.options.disabled)return;switch(d.keyCode){case a.ui.keyCode.HOME:case a.ui.keyCode.END:case a.ui.keyCode.PAGE_UP:case a.ui.keyCode.PAGE_DOWN:case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:d.preventDefault();if(!b._keySliding){b._keySliding=!0,a(this).addClass("ui-state-active"),f=b._start(d,e);if(f===!1)return}}i=b.options.step,b.options.values&&b.options.values.length?g=h=b.values(e):g=h=b.value();switch(d.keyCode){case a.ui.keyCode.HOME:h=b._valueMin();break;case a.ui.keyCode.END:h=b._valueMax();break;case a.ui.keyCode.PAGE_UP:h=b._trimAlignValue(g+(b._valueMax()-b._valueMin())/c);break;case a.ui.keyCode.PAGE_DOWN:h=b._trimAlignValue(g-(b._valueMax()-b._valueMin())/c);break;case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:if(g===b._valueMax())return;h=b._trimAlignValue(g+i);break;case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:if(g===b._valueMin())return;h=b._trimAlignValue(g-i)}b._slide(d,e,h)}).keyup(function(c){var d=a(this).data("index.ui-slider-handle");b._keySliding&&(b._keySliding=!1,b._stop(c,d),b._change(c,d),a(this).removeClass("ui-state-active"))}),this._refreshValue(),this._animateOff=!1},destroy:function(){return this.handles.remove(),this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider"),this._mouseDestroy(),this},_mouseCapture:function(b){var c=this.options,d,e,f,g,h,i,j,k,l;return c.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),d={x:b.pageX,y:b.pageY},e=this._normValueFromMouse(d),f=this._valueMax()-this._valueMin()+1,h=this,this.handles.each(function(b){var c=Math.abs(e-h.values(b));f>c&&(f=c,g=a(this),i=b)}),c.range===!0&&this.values(1)===c.min&&(i+=1,g=a(this.handles[i])),j=this._start(b,i),j===!1?!1:(this._mouseSliding=!0,h._handleIndex=i,g.addClass("ui-state-active").focus(),k=g.offset(),l=!a(b.target).parents().andSelf().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:b.pageX-k.left-g.width()/2,top:b.pageY-k.top-g.height()/2-(parseInt(g.css("borderTopWidth"),10)||0)-(parseInt(g.css("borderBottomWidth"),10)||0)+(parseInt(g.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(b,i,e),this._animateOff=!0,!0))},_mouseStart:function(a){return!0},_mouseDrag:function(a){var b={x:a.pageX,y:a.pageY},c=this._normValueFromMouse(b);return this._slide(a,this._handleIndex,c),!1},_mouseStop:function(a){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(a,this._handleIndex),this._change(a,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(a){var b,c,d,e,f;return this.orientation==="horizontal"?(b=this.elementSize.width,c=a.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(b=this.elementSize.height,c=a.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),d=c/b,d>1&&(d=1),d<0&&(d=0),this.orientation==="vertical"&&(d=1-d),e=this._valueMax()-this._valueMin(),f=this._valueMin()+d*e,this._trimAlignValue(f)},_start:function(a,b){var c={handle:this.handles[b],value:this.value()};return this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("start",a,c)},_slide:function(a,b,c){var d,e,f;this.options.values&&this.options.values.length?(d=this.values(b?0:1),this.options.values.length===2&&this.options.range===!0&&(b===0&&c>d||b===1&&c<d)&&(c=d),c!==this.values(b)&&(e=this.values(),e[b]=c,f=this._trigger("slide",a,{handle:this.handles[b],value:c,values:e}),d=this.values(b?0:1),f!==!1&&this.values(b,c,!0))):c!==this.value()&&(f=this._trigger("slide",a,{handle:this.handles[b],value:c}),f!==!1&&this.value(c))},_stop:function(a,b){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("stop",a,c)},_change:function(a,b){if(!this._keySliding&&!this._mouseSliding){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger("change",a,c)}},value:function(a){if(arguments.length){this.options.value=this._trimAlignValue(a),this._refreshValue(),this._change(null,0);return}return this._value()},values:function(b,c){var d,e,f;if(arguments.length>1){this.options.values[b]=this._trimAlignValue(c),this._refreshValue(),this._change(null,b);return}if(!arguments.length)return this._values();if(!a.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(b):this.value();d=this.options.values,e=arguments[0];for(f=0;f<d.length;f+=1)d[f]=this._trimAlignValue(e[f]),this._change(null,f);this._refreshValue()},_setOption:function(b,c){var d,e=0;a.isArray(this.options.values)&&(e=this.options.values.length),a.Widget.prototype._setOption.apply(this,arguments);switch(b){case"disabled":c?(this.handles.filter(".ui-state-focus").blur(),this.handles.removeClass("ui-state-hover"),this.handles.propAttr("disabled",!0),this.element.addClass("ui-disabled")):(this.handles.propAttr("disabled",!1),this.element.removeClass("ui-disabled"));break;case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":this._animateOff=!0,this._refreshValue();for(d=0;d<e;d+=1)this._change(null,d);this._animateOff=!1}},_value:function(){var a=this.options.value;return a=this._trimAlignValue(a),a},_values:function(a){var b,c,d;if(arguments.length)return b=this.options.values[a],b=this._trimAlignValue(b),b;c=this.options.values.slice();for(d=0;d<c.length;d+=1)c[d]=this._trimAlignValue(c[d]);return c},_trimAlignValue:function(a){if(a<=this._valueMin())return this._valueMin();if(a>=this._valueMax())return this._valueMax();var b=this.options.step>0?this.options.step:1,c=(a-this._valueMin())%b,d=a-c;return Math.abs(c)*2>=b&&(d+=c>0?b:-b),parseFloat(d.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var b=this.options.range,c=this.options,d=this,e=this._animateOff?!1:c.animate,f,g={},h,i,j,k;this.options.values&&this.options.values.length?this.handles.each(function(b,i){f=(d.values(b)-d._valueMin())/(d._valueMax()-d._valueMin())*100,g[d.orientation==="horizontal"?"left":"bottom"]=f+"%",a(this).stop(1,1)[e?"animate":"css"](g,c.animate),d.options.range===!0&&(d.orientation==="horizontal"?(b===0&&d.range.stop(1,1)[e?"animate":"css"]({left:f+"%"},c.animate),b===1&&d.range[e?"animate":"css"]({width:f-h+"%"},{queue:!1,duration:c.animate})):(b===0&&d.range.stop(1,1)[e?"animate":"css"]({bottom:f+"%"},c.animate),b===1&&d.range[e?"animate":"css"]({height:f-h+"%"},{queue:!1,duration:c.animate}))),h=f}):(i=this.value(),j=this._valueMin(),k=this._valueMax(),f=k!==j?(i-j)/(k-j)*100:0,g[d.orientation==="horizontal"?"left":"bottom"]=f+"%",this.handle.stop(1,1)[e?"animate":"css"](g,c.animate),b==="min"&&this.orientation==="horizontal"&&this.range.stop(1,1)[e?"animate":"css"]({width:f+"%"},c.animate),b==="max"&&this.orientation==="horizontal"&&this.range[e?"animate":"css"]({width:100-f+"%"},{queue:!1,duration:c.animate}),b==="min"&&this.orientation==="vertical"&&this.range.stop(1,1)[e?"animate":"css"]({height:f+"%"},c.animate),b==="max"&&this.orientation==="vertical"&&this.range[e?"animate":"css"]({height:100-f+"%"},{queue:!1,duration:c.animate}))}}),a.extend(a.ui.slider,{version:"1.8.24"})})(jQuery);
;

/* file-end: js/lib/jquery-ui/jquery.ui.slider.min.js 
----------------------------------------------------------------------------------*/

/* ---------------------------------------------------------------------------------
   file-start: js/lib/jquery-ui/jquery.ui.draggable.min.js 
*/

/*! jQuery UI - v1.8.24 - 2012-09-28
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.draggable.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(a,b){a.widget("ui.draggable",a.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1},_create:function(){this.options.helper=="original"&&!/^(?:r|a|f)/.test(this.element.css("position"))&&(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},destroy:function(){if(!this.element.data("draggable"))return;return this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy(),this},_mouseCapture:function(b){var c=this.options;return this.helper||c.disabled||a(b.target).is(".ui-resizable-handle")?!1:(this.handle=this._getHandle(b),this.handle?(c.iframeFix&&a(c.iframeFix===!0?"iframe":c.iframeFix).each(function(){a('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(a(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(b){var c=this.options;return this.helper=this._createHelper(b),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),a.ui.ddmanager&&(a.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},a.extend(this.offset,{click:{left:b.pageX-this.offset.left,top:b.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(b),this.originalPageX=b.pageX,this.originalPageY=b.pageY,c.cursorAt&&this._adjustOffsetFromHelper(c.cursorAt),c.containment&&this._setContainment(),this._trigger("start",b)===!1?(this._clear(),!1):(this._cacheHelperProportions(),a.ui.ddmanager&&!c.dropBehaviour&&a.ui.ddmanager.prepareOffsets(this,b),this._mouseDrag(b,!0),a.ui.ddmanager&&a.ui.ddmanager.dragStart(this,b),!0)},_mouseDrag:function(b,c){this.position=this._generatePosition(b),this.positionAbs=this._convertPositionTo("absolute");if(!c){var d=this._uiHash();if(this._trigger("drag",b,d)===!1)return this._mouseUp({}),!1;this.position=d.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";return a.ui.ddmanager&&a.ui.ddmanager.drag(this,b),!1},_mouseStop:function(b){var c=!1;a.ui.ddmanager&&!this.options.dropBehaviour&&(c=a.ui.ddmanager.drop(this,b)),this.dropped&&(c=this.dropped,this.dropped=!1);var d=this.element[0],e=!1;while(d&&(d=d.parentNode))d==document&&(e=!0);if(!e&&this.options.helper==="original")return!1;if(this.options.revert=="invalid"&&!c||this.options.revert=="valid"&&c||this.options.revert===!0||a.isFunction(this.options.revert)&&this.options.revert.call(this.element,c)){var f=this;a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){f._trigger("stop",b)!==!1&&f._clear()})}else this._trigger("stop",b)!==!1&&this._clear();return!1},_mouseUp:function(b){return a("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),a.ui.ddmanager&&a.ui.ddmanager.dragStop(this,b),a.ui.mouse.prototype._mouseUp.call(this,b)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(b){var c=!this.options.handle||!a(this.options.handle,this.element).length?!0:!1;return a(this.options.handle,this.element).find("*").andSelf().each(function(){this==b.target&&(c=!0)}),c},_createHelper:function(b){var c=this.options,d=a.isFunction(c.helper)?a(c.helper.apply(this.element[0],[b])):c.helper=="clone"?this.element.clone().removeAttr("id"):this.element;return d.parents("body").length||d.appendTo(c.appendTo=="parent"?this.element[0].parentNode:c.appendTo),d[0]!=this.element[0]&&!/(fixed|absolute)/.test(d.css("position"))&&d.css("position","absolute"),d},_adjustOffsetFromHelper:function(b){typeof b=="string"&&(b=b.split(" ")),a.isArray(b)&&(b={left:+b[0],top:+b[1]||0}),"left"in b&&(this.offset.click.left=b.left+this.margins.left),"right"in b&&(this.offset.click.left=this.helperProportions.width-b.right+this.margins.left),"top"in b&&(this.offset.click.top=b.top+this.margins.top),"bottom"in b&&(this.offset.click.top=this.helperProportions.height-b.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var b=this.offsetParent.offset();this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.ui.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop());if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.browser.msie)b={top:0,left:0};return{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.element.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var b=this.options;b.containment=="parent"&&(b.containment=this.helper[0].parentNode);if(b.containment=="document"||b.containment=="window")this.containment=[b.containment=="document"?0:a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,b.containment=="document"?0:a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(b.containment=="document"?0:a(window).scrollLeft())+a(b.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(b.containment=="document"?0:a(window).scrollTop())+(a(b.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(b.containment)&&b.containment.constructor!=Array){var c=a(b.containment),d=c[0];if(!d)return;var e=c.offset(),f=a(d).css("overflow")!="hidden";this.containment=[(parseInt(a(d).css("borderLeftWidth"),10)||0)+(parseInt(a(d).css("paddingLeft"),10)||0),(parseInt(a(d).css("borderTopWidth"),10)||0)+(parseInt(a(d).css("paddingTop"),10)||0),(f?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(a(d).css("borderLeftWidth"),10)||0)-(parseInt(a(d).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(f?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(a(d).css("borderTopWidth"),10)||0)-(parseInt(a(d).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=c}else b.containment.constructor==Array&&(this.containment=b.containment)},_convertPositionTo:function(b,c){c||(c=this.position);var d=b=="absolute"?1:-1,e=this.options,f=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=/(html|body)/i.test(f[0].tagName);return{top:c.top+this.offset.relative.top*d+this.offset.parent.top*d-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():g?0:f.scrollTop())*d),left:c.left+this.offset.relative.left*d+this.offset.parent.left*d-(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():g?0:f.scrollLeft())*d)}},_generatePosition:function(b){var c=this.options,d=this.cssPosition=="absolute"&&(this.scrollParent[0]==document||!a.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(d[0].tagName),f=b.pageX,g=b.pageY;if(this.originalPosition){var h;if(this.containment){if(this.relative_container){var i=this.relative_container.offset();h=[this.containment[0]+i.left,this.containment[1]+i.top,this.containment[2]+i.left,this.containment[3]+i.top]}else h=this.containment;b.pageX-this.offset.click.left<h[0]&&(f=h[0]+this.offset.click.left),b.pageY-this.offset.click.top<h[1]&&(g=h[1]+this.offset.click.top),b.pageX-this.offset.click.left>h[2]&&(f=h[2]+this.offset.click.left),b.pageY-this.offset.click.top>h[3]&&(g=h[3]+this.offset.click.top)}if(c.grid){var j=c.grid[1]?this.originalPageY+Math.round((g-this.originalPageY)/c.grid[1])*c.grid[1]:this.originalPageY;g=h?j-this.offset.click.top<h[1]||j-this.offset.click.top>h[3]?j-this.offset.click.top<h[1]?j+c.grid[1]:j-c.grid[1]:j:j;var k=c.grid[0]?this.originalPageX+Math.round((f-this.originalPageX)/c.grid[0])*c.grid[0]:this.originalPageX;f=h?k-this.offset.click.left<h[0]||k-this.offset.click.left>h[2]?k-this.offset.click.left<h[0]?k+c.grid[0]:k-c.grid[0]:k:k}}return{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:d.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(a.browser.safari&&a.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():e?0:d.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(b,c,d){return d=d||this._uiHash(),a.ui.plugin.call(this,b,[c,d]),b=="drag"&&(this.positionAbs=this._convertPositionTo("absolute")),a.Widget.prototype._trigger.call(this,b,c,d)},plugins:{},_uiHash:function(a){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),a.extend(a.ui.draggable,{version:"1.8.24"}),a.ui.plugin.add("draggable","connectToSortable",{start:function(b,c){var d=a(this).data("draggable"),e=d.options,f=a.extend({},c,{item:d.element});d.sortables=[],a(e.connectToSortable).each(function(){var c=a.data(this,"sortable");c&&!c.options.disabled&&(d.sortables.push({instance:c,shouldRevert:c.options.revert}),c.refreshPositions(),c._trigger("activate",b,f))})},stop:function(b,c){var d=a(this).data("draggable"),e=a.extend({},c,{item:d.element});a.each(d.sortables,function(){this.instance.isOver?(this.instance.isOver=0,d.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=!0),this.instance._mouseStop(b),this.instance.options.helper=this.instance.options._helper,d.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",b,e))})},drag:function(b,c){var d=a(this).data("draggable"),e=this,f=function(b){var c=this.offset.click.top,d=this.offset.click.left,e=this.positionAbs.top,f=this.positionAbs.left,g=b.height,h=b.width,i=b.top,j=b.left;return a.ui.isOver(e+c,f+d,i,j,g,h)};a.each(d.sortables,function(f){this.instance.positionAbs=d.positionAbs,this.instance.helperProportions=d.helperProportions,this.instance.offset.click=d.offset.click,this.instance._intersectsWith(this.instance.containerCache)?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=a(e).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return c.helper[0]},b.target=this.instance.currentItem[0],this.instance._mouseCapture(b,!0),this.instance._mouseStart(b,!0,!0),this.instance.offset.click.top=d.offset.click.top,this.instance.offset.click.left=d.offset.click.left,this.instance.offset.parent.left-=d.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=d.offset.parent.top-this.instance.offset.parent.top,d._trigger("toSortable",b),d.dropped=this.instance.element,d.currentItem=d.element,this.instance.fromOutside=d),this.instance.currentItem&&this.instance._mouseDrag(b)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",b,this.instance._uiHash(this.instance)),this.instance._mouseStop(b,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),d._trigger("fromSortable",b),d.dropped=!1)})}}),a.ui.plugin.add("draggable","cursor",{start:function(b,c){var d=a("body"),e=a(this).data("draggable").options;d.css("cursor")&&(e._cursor=d.css("cursor")),d.css("cursor",e.cursor)},stop:function(b,c){var d=a(this).data("draggable").options;d._cursor&&a("body").css("cursor",d._cursor)}}),a.ui.plugin.add("draggable","opacity",{start:function(b,c){var d=a(c.helper),e=a(this).data("draggable").options;d.css("opacity")&&(e._opacity=d.css("opacity")),d.css("opacity",e.opacity)},stop:function(b,c){var d=a(this).data("draggable").options;d._opacity&&a(c.helper).css("opacity",d._opacity)}}),a.ui.plugin.add("draggable","scroll",{start:function(b,c){var d=a(this).data("draggable");d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML"&&(d.overflowOffset=d.scrollParent.offset())},drag:function(b,c){var d=a(this).data("draggable"),e=d.options,f=!1;if(d.scrollParent[0]!=document&&d.scrollParent[0].tagName!="HTML"){if(!e.axis||e.axis!="x")d.overflowOffset.top+d.scrollParent[0].offsetHeight-b.pageY<e.scrollSensitivity?d.scrollParent[0].scrollTop=f=d.scrollParent[0].scrollTop+e.scrollSpeed:b.pageY-d.overflowOffset.top<e.scrollSensitivity&&(d.scrollParent[0].scrollTop=f=d.scrollParent[0].scrollTop-e.scrollSpeed);if(!e.axis||e.axis!="y")d.overflowOffset.left+d.scrollParent[0].offsetWidth-b.pageX<e.scrollSensitivity?d.scrollParent[0].scrollLeft=f=d.scrollParent[0].scrollLeft+e.scrollSpeed:b.pageX-d.overflowOffset.left<e.scrollSensitivity&&(d.scrollParent[0].scrollLeft=f=d.scrollParent[0].scrollLeft-e.scrollSpeed)}else{if(!e.axis||e.axis!="x")b.pageY-a(document).scrollTop()<e.scrollSensitivity?f=a(document).scrollTop(a(document).scrollTop()-e.scrollSpeed):a(window).height()-(b.pageY-a(document).scrollTop())<e.scrollSensitivity&&(f=a(document).scrollTop(a(document).scrollTop()+e.scrollSpeed));if(!e.axis||e.axis!="y")b.pageX-a(document).scrollLeft()<e.scrollSensitivity?f=a(document).scrollLeft(a(document).scrollLeft()-e.scrollSpeed):a(window).width()-(b.pageX-a(document).scrollLeft())<e.scrollSensitivity&&(f=a(document).scrollLeft(a(document).scrollLeft()+e.scrollSpeed))}f!==!1&&a.ui.ddmanager&&!e.dropBehaviour&&a.ui.ddmanager.prepareOffsets(d,b)}}),a.ui.plugin.add("draggable","snap",{start:function(b,c){var d=a(this).data("draggable"),e=d.options;d.snapElements=[],a(e.snap.constructor!=String?e.snap.items||":data(draggable)":e.snap).each(function(){var b=a(this),c=b.offset();this!=d.element[0]&&d.snapElements.push({item:this,width:b.outerWidth(),height:b.outerHeight(),top:c.top,left:c.left})})},drag:function(b,c){var d=a(this).data("draggable"),e=d.options,f=e.snapTolerance,g=c.offset.left,h=g+d.helperProportions.width,i=c.offset.top,j=i+d.helperProportions.height;for(var k=d.snapElements.length-1;k>=0;k--){var l=d.snapElements[k].left,m=l+d.snapElements[k].width,n=d.snapElements[k].top,o=n+d.snapElements[k].height;if(!(l-f<g&&g<m+f&&n-f<i&&i<o+f||l-f<g&&g<m+f&&n-f<j&&j<o+f||l-f<h&&h<m+f&&n-f<i&&i<o+f||l-f<h&&h<m+f&&n-f<j&&j<o+f)){d.snapElements[k].snapping&&d.options.snap.release&&d.options.snap.release.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[k].item})),d.snapElements[k].snapping=!1;continue}if(e.snapMode!="inner"){var p=Math.abs(n-j)<=f,q=Math.abs(o-i)<=f,r=Math.abs(l-h)<=f,s=Math.abs(m-g)<=f;p&&(c.position.top=d._convertPositionTo("relative",{top:n-d.helperProportions.height,left:0}).top-d.margins.top),q&&(c.position.top=d._convertPositionTo("relative",{top:o,left:0}).top-d.margins.top),r&&(c.position.left=d._convertPositionTo("relative",{top:0,left:l-d.helperProportions.width}).left-d.margins.left),s&&(c.position.left=d._convertPositionTo("relative",{top:0,left:m}).left-d.margins.left)}var t=p||q||r||s;if(e.snapMode!="outer"){var p=Math.abs(n-i)<=f,q=Math.abs(o-j)<=f,r=Math.abs(l-g)<=f,s=Math.abs(m-h)<=f;p&&(c.position.top=d._convertPositionTo("relative",{top:n,left:0}).top-d.margins.top),q&&(c.position.top=d._convertPositionTo("relative",{top:o-d.helperProportions.height,left:0}).top-d.margins.top),r&&(c.position.left=d._convertPositionTo("relative",{top:0,left:l}).left-d.margins.left),s&&(c.position.left=d._convertPositionTo("relative",{top:0,left:m-d.helperProportions.width}).left-d.margins.left)}!d.snapElements[k].snapping&&(p||q||r||s||t)&&d.options.snap.snap&&d.options.snap.snap.call(d.element,b,a.extend(d._uiHash(),{snapItem:d.snapElements[k].item})),d.snapElements[k].snapping=p||q||r||s||t}}}),a.ui.plugin.add("draggable","stack",{start:function(b,c){var d=a(this).data("draggable").options,e=a.makeArray(a(d.stack)).sort(function(b,c){return(parseInt(a(b).css("zIndex"),10)||0)-(parseInt(a(c).css("zIndex"),10)||0)});if(!e.length)return;var f=parseInt(e[0].style.zIndex)||0;a(e).each(function(a){this.style.zIndex=f+a}),this[0].style.zIndex=f+e.length}}),a.ui.plugin.add("draggable","zIndex",{start:function(b,c){var d=a(c.helper),e=a(this).data("draggable").options;d.css("zIndex")&&(e._zIndex=d.css("zIndex")),d.css("zIndex",e.zIndex)},stop:function(b,c){var d=a(this).data("draggable").options;d._zIndex&&a(c.helper).css("zIndex",d._zIndex)}})})(jQuery);;

/* file-end: js/lib/jquery-ui/jquery.ui.draggable.min.js 
----------------------------------------------------------------------------------*/


Site.page.template['angular/ljColorpicker.ng.tmpl'] = '<div class=\"b-colorpicker\">\n\n    <div\n        class=\"b-color-selector\"\n        ng-style=\"{ \'background-color\': paletteColor }\"\n        >\n\n        <div class=\"b-color-selector-pick\"></div>\n\n    </div>\n\n    <div class=\"b-color-selector-bar\"></div>\n\n    <dl class=\"b-colorpicker-controls\">\n\n        <dt\n            class=\"b-colorpicker-controls-title\"\n            lj-ml=\"colorpicker.title.new\"\n            ></dt>\n        <dd\n            ng-style=\"{ \'background-color\': newColor }\"\n            class=\"b-colorpicker-controls-new\"\n            ></dd>\n\n        <dt\n            class=\"b-colorpicker-controls-title\"\n            lj-ml=\"colorpicker.title.current\"\n            ></dt>\n        <dd\n            ng-style=\"{ \'background-color\': color }\"\n            ng-click=\"reset()\"\n            class=\"b-colorpicker-controls-current\"\n            ></dd>\n\n        <dt class=\"b-colorpicker-controls-title\">\n            <label\n                for=\"hexcolor\"\n                lj-ml=\"colorpicker.title.code\"\n                ></label>\n        </dt>\n        <dd class=\"b-colorpicker-controls-value\">\n            <input\n                class=\"b-colorpicker-controls-hex\"\n                ng-model=\"code\"\n                maxlength=\"6\"\n                size=\"6\"\n                >\n        </dd>\n\n        <dd class=\"b-colorpicker-controls-submit\">\n            <div class=\"b-ljbutton b-ljbutton-submit\">\n                <button\n                    type=\"button\"\n                    name=\"submitpost\"\n                    ng-click=\"submitColor()\"\n                    lj-ml=\"colorpicker.title.choose\"\n                    ></button>\n            </div>\n            <button\n                type=\"button\"\n                name=\"submitpost\"\n                class=\"b-flatbutton b-flatbutton-simple\"\n                ng-click=\"submitColor()\"\n                lj-ml=\"colorpicker.title.choose\"\n                ></button>\n        </dd>\n\n    </dl>\n\n</div>\n';
/**
 * @description Colorpicker directive
 * @author Valeriy Vasin (valeriy.vasin@sup.com)
 *
 * @example
 *
 * // Controller:
 * function ColorCtrl() {
 *
 *   // set initial color
 *   $scope.color = '#f0f0f0';
 *
 *   // this function will be executed when user accept color via clicking
 *   // on "Choose" button
 *   $scope.colorChanged() {
 *     console.log('%s has been choosen.', $scope.color);
 *   }
 *
 *   // preview color will be updated everytime user change "New" color
 *   // in the colorpicker
 *   $scope.$watch('previewColor', function (value) {
 *     console.log('preview color has been updated to %s', value);
 *   });
 *
 *   // Also it's possible to change colorpicker current color from controller
 *   //
 *   // Notice:
 *   //   previewColor couldn't be changed from controller right now, but it could
 *   //   be implemented if needed
 *   $scope.changeColorManually = function () {
 *     $scope.color = '#f3f3f3';
 *   };
 * }
 *
 * Layout:
 * <div
 *   lj-colorpicker="color"
 *   lj-colorpicker-preview="previewColor"
 *   lj-colorpicker-submit="colorChanged()"
 *   >
 *   this div element will be replaced with colorpicker template
 * </div>
 */

;(function ($) {
  'use strict';

  var app = angular.module('LJ.Colorpicker', []);

  // colorpicker helper service
  app.factory('ColorpickerHelper', [function () {

    return {
      /**
        * Convert 256x256 coords to 100x100 saturation/value system
        * @param {Object} coords      Coordinate object
        * @param {Number} coords.left Left coordinate (X-axis)
        * @param {Number} coords.top  Top coordinate (Y-axis)
        *
        * @return {Object} palette Palette object
        * @return {Number} palette.saturation Saturation of palette (x coord)
        * @return {Number} palette.value Saturation of palette (y coord)
        */
        coordsToPalette: function (coords) {
          return {
            saturation: Math.round(100 * coords.left / 256),
            value: 100 - Math.round(100 * coords.top / 256)
          };
        },

        /**
         * Convert 100x100 saturation/brightness system to 256x256 coords
         * @param {Object} palette Palette object
         * @param {Number} palette.saturation Saturation of palette (x coord)
         * @param {Number} palette.value      Saturation of palette (y coord)
         *
         * @return {Object} coords Coords object
         * @return {Number} coords.left Left position
         * @return {Number} coords.top Top position
         */
        paletteToCoords: function (palette) {
          return {
            top:  Math.round( (100 - palette.value) * 2.56 ),
            left: Math.round( palette.saturation * 2.56 )
          };
        }
    };
  }]);

  // colorpicker directive
  app.directive('ljColorpicker', ['ColorpickerHelper', '$timeout', function (Color, $timeout) {

    return {
      templateUrl: 'ljColorpicker.ng.tmpl',
      replace: true,
      scope: {
        color: '=ljColorpicker',
        newColor: '=ljColorpickerPreview',
        submit: '&ljColorpickerSubmit'
      },
      link: function (scope, element, attrs) {
        var pickerElement  = element.find('.b-color-selector-pick'),
            sliderElement  = element.find('.b-color-selector-bar'),
            paletteElement = element.find('.b-color-selector'),
            codeElement    = element.find('.b-colorpicker-controls-hex'),

            color = new LJ.Color(),
            newColor = new LJ.Color(),
            paletteColor = new LJ.Color(),

            // code input regexp: hex digits
            regexp = /^[a-f\d]*$/i;

        //
        // Scope watchers
        //
        scope.$watch('code', function (value, prev) {
          if ( !regexp.test(value) ) {
            scope.code = prev;
            return;
          }

          newColor.HEX('#' + LJ.String.pad(value, 6, '0'));
        });

        // watch changes of color by controller and apply them
        scope.$watch('color', function (value) {
          scope.color = scope.color || '#44915a';
          scope.reset();
        });

        // watch changes of new color
        scope.$watch('newColor', function () {
          if (scope.inner !== true) {
            scope.reset();
          }
          scope.inner = false;
        });

        //
        // Events
        //
        codeElement.on('blur', function () {
          scope.$apply(function () {
            scope.code = LJ.String.pad(scope.newColor.slice(1), 6, '0');
          });
        });

        color.change(function (hex) {
          scope.color = hex;
        });

        newColor.change(function (hex) {
          scope.inner = true;
          scope.newColor = hex;

          // quirk:
          //  we should not change input code value if we are editing it manually
          //  at the time
          if (scope.code && scope.code.length === 6) {
            scope.code = hex.slice(1);
          }

          // update slider position
          sliderElement
            .slider('option', 'value', paletteColor.HSV().hue);

          // update draggable position
          pickerElement
            .css( Color.paletteToCoords( newColor.HSV() ) );
        });

        paletteColor.change(function (hex) {
          scope.paletteColor = hex;
        });

        // palette draggable
        pickerElement
          .draggable({
            drag: function (e, ui) {
              var position = $.extend({}, ui.position),
                  isPositionCorrected = false;

              // correct position of picker
              if (position.left < 0) {
                position.left = 0;
                isPositionCorrected = true;
              }
              if (position.left > 256) {
                position.left = 256;
                isPositionCorrected = true;
              }
              if (position.top < 0) {
                position.top = 0;
                isPositionCorrected = true;
              }
              if (position.top > 256) {
                position.top = 256;
                isPositionCorrected = true;
              }

              if ( isPositionCorrected ) {
                pickerElement.css(position);
                ui.position = position;
              }

              newColor.set( Color.coordsToPalette(position) );
              scope.$apply();
            }
          })
          .on('mousedown', function (e) {
            // fire blur event for code input manually
            // because it will not be fired (reason: draggable widget)
            codeElement.trigger('blur');
            e.stopPropagation();
          });

        // start dragging on mousedown of palette element
        paletteElement.on('mousedown', function (e) {
          var offset = null,
              coords = null;

          // we should react only when right mouse button is down
          if (e.which !== 1) {
            return;
          }

          offset = paletteElement.offset();
          coords = {
            left: e.pageX - offset.left,
            top: e.pageY - offset.top
          };

          pickerElement
            .css(coords)
            .trigger(e);

          newColor.set( Color.coordsToPalette(coords) );
          scope.$apply();
        });

        // slider
        sliderElement.slider({
          orientation: 'vertical',
          min: 0,
          max: 360,
          slide: function (e, ui) {
            var hue = ui.value % 360;

            newColor.set({ hue: hue });
            paletteColor.set({ hue: hue });

            scope.$apply();
          }
        });

        /**
         * Reset all values into initial (current value of color)
         */
        scope.reset = function () {
          scope.inner = true;
          scope.newColor = scope.color;
          scope.code = scope.color.slice(1);

          color.HEX(scope.color);
          newColor.HEX(scope.newColor);

          scope.code = scope.color.slice(1);

          paletteColor.set({
            hue: newColor.HSV().hue,
            saturation: 100,
            value: 100
          });
        };

        /**
         * Update current color
         */
        scope.submitColor = function () {
          color.RGB( newColor.RGB() );
          scope.color = newColor.HEX();

          // call it asynchronously because color variable in the controller
          // will be changed asynchronously
          $timeout(scope.submit);
        };

        // initialization
        scope.color = scope.color || '#44915a';
        scope.reset();
      }
    };
  }]);
}(jQuery));
;

/* file-end: js/core/angular/colorpicker.js 
----------------------------------------------------------------------------------*/

/* ---------------------------------------------------------------------------------
   file-start: js/lib/plupload/plupload-2.1.1.full.min.js 
*/

/**
 * mOxie - multi-runtime File API & XMLHttpRequest L2 Polyfill
 * v1.2.0
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 *
 * Date: 2014-01-16
 */
!function(e,t){"use strict";function n(e,t){for(var n,i=[],r=0;r<e.length;++r){if(n=s[e[r]]||o(e[r]),!n)throw"module definition dependecy not found: "+e[r];i.push(n)}t.apply(null,i)}function i(e,i,r){if("string"!=typeof e)throw"invalid module definition, module id must be defined and be a string";if(i===t)throw"invalid module definition, dependencies must be specified";if(r===t)throw"invalid module definition, definition function must be specified";n(i,function(){s[e]=r.apply(null,arguments)})}function r(e){return!!s[e]}function o(t){for(var n=e,i=t.split(/[.\/]/),r=0;r<i.length;++r){if(!n[i[r]])return;n=n[i[r]]}return n}function a(n){for(var i=0;i<n.length;i++){for(var r=e,o=n[i],a=o.split(/[.\/]/),u=0;u<a.length-1;++u)r[a[u]]===t&&(r[a[u]]={}),r=r[a[u]];r[a[a.length-1]]=s[o]}}var s={},u="moxie/core/utils/Basic",c="moxie/core/I18n",l="moxie/core/utils/Mime",d="moxie/core/utils/Env",f="moxie/core/utils/Dom",p="moxie/core/Exceptions",h="moxie/core/EventTarget",m="moxie/core/utils/Encode",g="moxie/runtime/Runtime",v="moxie/runtime/RuntimeClient",y="moxie/file/Blob",w="moxie/file/File",E="moxie/file/FileInput",_="moxie/file/FileDrop",x="moxie/runtime/RuntimeTarget",R="moxie/file/FileReader",b="moxie/core/utils/Url",T="moxie/file/FileReaderSync",S="moxie/xhr/FormData",A="moxie/xhr/XMLHttpRequest",O="moxie/runtime/Transporter",I="moxie/image/Image",D="moxie/runtime/html5/Runtime",N="moxie/runtime/html5/file/Blob",L="moxie/core/utils/Events",M="moxie/runtime/html5/file/FileInput",C="moxie/runtime/html5/file/FileDrop",F="moxie/runtime/html5/file/FileReader",H="moxie/runtime/html5/xhr/XMLHttpRequest",P="moxie/runtime/html5/utils/BinaryReader",k="moxie/runtime/html5/image/JPEGHeaders",U="moxie/runtime/html5/image/ExifParser",B="moxie/runtime/html5/image/JPEG",z="moxie/runtime/html5/image/PNG",G="moxie/runtime/html5/image/ImageInfo",q="moxie/runtime/html5/image/MegaPixel",X="moxie/runtime/html5/image/Image",j="moxie/runtime/flash/Runtime",V="moxie/runtime/flash/file/Blob",W="moxie/runtime/flash/file/FileInput",Y="moxie/runtime/flash/file/FileReader",$="moxie/runtime/flash/file/FileReaderSync",J="moxie/runtime/flash/xhr/XMLHttpRequest",Z="moxie/runtime/flash/runtime/Transporter",K="moxie/runtime/flash/image/Image",Q="moxie/runtime/silverlight/Runtime",et="moxie/runtime/silverlight/file/Blob",tt="moxie/runtime/silverlight/file/FileInput",nt="moxie/runtime/silverlight/file/FileDrop",it="moxie/runtime/silverlight/file/FileReader",rt="moxie/runtime/silverlight/file/FileReaderSync",ot="moxie/runtime/silverlight/xhr/XMLHttpRequest",at="moxie/runtime/silverlight/runtime/Transporter",st="moxie/runtime/silverlight/image/Image",ut="moxie/runtime/html4/Runtime",ct="moxie/runtime/html4/file/FileInput",lt="moxie/runtime/html4/file/FileReader",dt="moxie/runtime/html4/xhr/XMLHttpRequest",ft="moxie/runtime/html4/image/Image";i(u,[],function(){var e=function(e){var t;return e===t?"undefined":null===e?"null":e.nodeType?"node":{}.toString.call(e).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()},t=function(i){var r;return n(arguments,function(o,s){s>0&&n(o,function(n,o){n!==r&&(e(i[o])===e(n)&&~a(e(n),["array","object"])?t(i[o],n):i[o]=n)})}),i},n=function(e,t){var n,i,r,o;if(e){try{n=e.length}catch(a){n=o}if(n===o){for(i in e)if(e.hasOwnProperty(i)&&t(e[i],i)===!1)return}else for(r=0;n>r;r++)if(t(e[r],r)===!1)return}},i=function(t){var n;if(!t||"object"!==e(t))return!0;for(n in t)return!1;return!0},r=function(t,n){function i(r){"function"===e(t[r])&&t[r](function(e){++r<o&&!e?i(r):n(e)})}var r=0,o=t.length;"function"!==e(n)&&(n=function(){}),t&&t.length||n(),i(r)},o=function(e,t){var i=0,r=e.length,o=new Array(r);n(e,function(e,n){e(function(e){if(e)return t(e);var a=[].slice.call(arguments);a.shift(),o[n]=a,i++,i===r&&(o.unshift(null),t.apply(this,o))})})},a=function(e,t){if(t){if(Array.prototype.indexOf)return Array.prototype.indexOf.call(t,e);for(var n=0,i=t.length;i>n;n++)if(t[n]===e)return n}return-1},s=function(t,n){var i=[];"array"!==e(t)&&(t=[t]),"array"!==e(n)&&(n=[n]);for(var r in t)-1===a(t[r],n)&&i.push(t[r]);return i.length?i:!1},u=function(e,t){var i=[];return n(e,function(e){-1!==a(e,t)&&i.push(e)}),i.length?i:null},c=function(e){var t,n=[];for(t=0;t<e.length;t++)n[t]=e[t];return n},l=function(){var e=0;return function(t){var n=(new Date).getTime().toString(32),i;for(i=0;5>i;i++)n+=Math.floor(65535*Math.random()).toString(32);return(t||"o_")+n+(e++).toString(32)}}(),d=function(e){return e?String.prototype.trim?String.prototype.trim.call(e):e.toString().replace(/^\s*/,"").replace(/\s*$/,""):e},f=function(e){if("string"!=typeof e)return e;var t={t:1099511627776,g:1073741824,m:1048576,k:1024},n;return e=/^([0-9]+)([mgk]?)$/.exec(e.toLowerCase().replace(/[^0-9mkg]/g,"")),n=e[2],e=+e[1],t.hasOwnProperty(n)&&(e*=t[n]),e};return{guid:l,typeOf:e,extend:t,each:n,isEmptyObj:i,inSeries:r,inParallel:o,inArray:a,arrayDiff:s,arrayIntersect:u,toArray:c,trim:d,parseSizeStr:f}}),i(c,[u],function(e){var t={};return{addI18n:function(n){return e.extend(t,n)},translate:function(e){return t[e]||e},_:function(e){return this.translate(e)},sprintf:function(t){var n=[].slice.call(arguments,1);return t.replace(/%[a-z]/g,function(){var t=n.shift();return"undefined"!==e.typeOf(t)?t:""})}}}),i(l,[u,c],function(e,t){var n="application/msword,doc dot,application/pdf,pdf,application/pgp-signature,pgp,application/postscript,ps ai eps,application/rtf,rtf,application/vnd.ms-excel,xls xlb,application/vnd.ms-powerpoint,ppt pps pot,application/zip,zip,application/x-shockwave-flash,swf swfl,application/vnd.openxmlformats-officedocument.wordprocessingml.document,docx,application/vnd.openxmlformats-officedocument.wordprocessingml.template,dotx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,xlsx,application/vnd.openxmlformats-officedocument.presentationml.presentation,pptx,application/vnd.openxmlformats-officedocument.presentationml.template,potx,application/vnd.openxmlformats-officedocument.presentationml.slideshow,ppsx,application/x-javascript,js,application/json,json,audio/mpeg,mp3 mpga mpega mp2,audio/x-wav,wav,audio/x-m4a,m4a,audio/ogg,oga ogg,audio/aiff,aiff aif,audio/flac,flac,audio/aac,aac,audio/ac3,ac3,audio/x-ms-wma,wma,image/bmp,bmp,image/gif,gif,image/jpeg,jpg jpeg jpe,image/photoshop,psd,image/png,png,image/svg+xml,svg svgz,image/tiff,tiff tif,text/plain,asc txt text diff log,text/html,htm html xhtml,text/css,css,text/csv,csv,text/rtf,rtf,video/mpeg,mpeg mpg mpe m2v,video/quicktime,qt mov,video/mp4,mp4,video/x-m4v,m4v,video/x-flv,flv,video/x-ms-wmv,wmv,video/avi,avi,video/webm,webm,video/3gpp,3gpp 3gp,video/3gpp2,3g2,video/vnd.rn-realvideo,rv,video/ogg,ogv,video/x-matroska,mkv,application/vnd.oasis.opendocument.formula-template,otf,application/octet-stream,exe",i={mimes:{},extensions:{},addMimeType:function(e){var t=e.split(/,/),n,i,r;for(n=0;n<t.length;n+=2){for(r=t[n+1].split(/ /),i=0;i<r.length;i++)this.mimes[r[i]]=t[n];this.extensions[t[n]]=r}},extList2mimes:function(t,n){var i=this,r,o,a,s,u=[];for(o=0;o<t.length;o++)for(r=t[o].extensions.split(/\s*,\s*/),a=0;a<r.length;a++){if("*"===r[a])return[];if(s=i.mimes[r[a]])-1===e.inArray(s,u)&&u.push(s);else{if(!n||!/^\w+$/.test(r[a]))return[];u.push("."+r[a])}}return u},mimes2exts:function(t){var n=this,i=[];return e.each(t,function(t){if("*"===t)return i=[],!1;var r=t.match(/^(\w+)\/(\*|\w+)$/);r&&("*"===r[2]?e.each(n.extensions,function(e,t){new RegExp("^"+r[1]+"/").test(t)&&[].push.apply(i,n.extensions[t])}):n.extensions[t]&&[].push.apply(i,n.extensions[t]))}),i},mimes2extList:function(n){var i=[],r=[];return"string"===e.typeOf(n)&&(n=e.trim(n).split(/\s*,\s*/)),r=this.mimes2exts(n),i.push({title:t.translate("Files"),extensions:r.length?r.join(","):"*"}),i.mimes=n,i},getFileExtension:function(e){var t=e&&e.match(/\.([^.]+)$/);return t?t[1].toLowerCase():""},getFileMime:function(e){return this.mimes[this.getFileExtension(e)]||""}};return i.addMimeType(n),i}),i(d,[u],function(e){function t(e,t,n){var i=0,r=0,o=0,a={dev:-6,alpha:-5,a:-5,beta:-4,b:-4,RC:-3,rc:-3,"#":-2,p:1,pl:1},s=function(e){return e=(""+e).replace(/[_\-+]/g,"."),e=e.replace(/([^.\d]+)/g,".$1.").replace(/\.{2,}/g,"."),e.length?e.split("."):[-8]},u=function(e){return e?isNaN(e)?a[e]||-7:parseInt(e,10):0};for(e=s(e),t=s(t),r=Math.max(e.length,t.length),i=0;r>i;i++)if(e[i]!=t[i]){if(e[i]=u(e[i]),t[i]=u(t[i]),e[i]<t[i]){o=-1;break}if(e[i]>t[i]){o=1;break}}if(!n)return o;switch(n){case">":case"gt":return o>0;case">=":case"ge":return o>=0;case"<=":case"le":return 0>=o;case"==":case"=":case"eq":return 0===o;case"<>":case"!=":case"ne":return 0!==o;case"":case"<":case"lt":return 0>o;default:return null}}var n=function(e){var t="",n="?",i="function",r="undefined",o="object",a="major",s="model",u="name",c="type",l="vendor",d="version",f="architecture",p="console",h="mobile",m="tablet",g={has:function(e,t){return-1!==t.toLowerCase().indexOf(e.toLowerCase())},lowerize:function(e){return e.toLowerCase()}},v={rgx:function(){for(var t,n=0,a,s,u,c,l,d,f=arguments;n<f.length;n+=2){var p=f[n],h=f[n+1];if(typeof t===r){t={};for(u in h)c=h[u],typeof c===o?t[c[0]]=e:t[c]=e}for(a=s=0;a<p.length;a++)if(l=p[a].exec(this.getUA())){for(u=0;u<h.length;u++)d=l[++s],c=h[u],typeof c===o&&c.length>0?2==c.length?t[c[0]]=typeof c[1]==i?c[1].call(this,d):c[1]:3==c.length?t[c[0]]=typeof c[1]!==i||c[1].exec&&c[1].test?d?d.replace(c[1],c[2]):e:d?c[1].call(this,d,c[2]):e:4==c.length&&(t[c[0]]=d?c[3].call(this,d.replace(c[1],c[2])):e):t[c]=d?d:e;break}if(l)break}return t},str:function(t,i){for(var r in i)if(typeof i[r]===o&&i[r].length>0){for(var a=0;a<i[r].length;a++)if(g.has(i[r][a],t))return r===n?e:r}else if(g.has(i[r],t))return r===n?e:r;return t}},y={browser:{oldsafari:{major:{1:["/8","/1","/3"],2:"/4","?":"/"},version:{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}}},device:{sprint:{model:{"Evo Shift 4G":"7373KT"},vendor:{HTC:"APA",Sprint:"Sprint"}}},os:{windows:{version:{ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2000:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",RT:"ARM"}}}},w={browser:[[/(opera\smini)\/((\d+)?[\w\.-]+)/i,/(opera\s[mobiletab]+).+version\/((\d+)?[\w\.-]+)/i,/(opera).+version\/((\d+)?[\w\.]+)/i,/(opera)[\/\s]+((\d+)?[\w\.]+)/i],[u,d,a],[/\s(opr)\/((\d+)?[\w\.]+)/i],[[u,"Opera"],d,a],[/(kindle)\/((\d+)?[\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?((\d+)?[\w\.]+)*/i,/(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?((\d+)?[\w\.]*)/i,/(?:ms|\()(ie)\s((\d+)?[\w\.]+)/i,/(rekonq)((?:\/)[\w\.]+)*/i,/(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron)\/((\d+)?[\w\.-]+)/i],[u,d,a],[/(trident).+rv[:\s]((\d+)?[\w\.]+).+like\sgecko/i],[[u,"IE"],d,a],[/(yabrowser)\/((\d+)?[\w\.]+)/i],[[u,"Yandex"],d,a],[/(comodo_dragon)\/((\d+)?[\w\.]+)/i],[[u,/_/g," "],d,a],[/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?((\d+)?[\w\.]+)/i],[u,d,a],[/(dolfin)\/((\d+)?[\w\.]+)/i],[[u,"Dolphin"],d,a],[/((?:android.+)crmo|crios)\/((\d+)?[\w\.]+)/i],[[u,"Chrome"],d,a],[/((?:android.+))version\/((\d+)?[\w\.]+)\smobile\ssafari/i],[[u,"Android Browser"],d,a],[/version\/((\d+)?[\w\.]+).+?mobile\/\w+\s(safari)/i],[d,a,[u,"Mobile Safari"]],[/version\/((\d+)?[\w\.]+).+?(mobile\s?safari|safari)/i],[d,a,u],[/webkit.+?(mobile\s?safari|safari)((\/[\w\.]+))/i],[u,[a,v.str,y.browser.oldsafari.major],[d,v.str,y.browser.oldsafari.version]],[/(konqueror)\/((\d+)?[\w\.]+)/i,/(webkit|khtml)\/((\d+)?[\w\.]+)/i],[u,d,a],[/(navigator|netscape)\/((\d+)?[\w\.-]+)/i],[[u,"Netscape"],d,a],[/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?((\d+)?[\w\.\+]+)/i,/(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/((\d+)?[\w\.-]+)/i,/(mozilla)\/((\d+)?[\w\.]+).+rv\:.+gecko\/\d+/i,/(uc\s?browser|polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|qqbrowser)[\/\s]?((\d+)?[\w\.]+)/i,/(links)\s\(((\d+)?[\w\.]+)/i,/(gobrowser)\/?((\d+)?[\w\.]+)*/i,/(ice\s?browser)\/v?((\d+)?[\w\._]+)/i,/(mosaic)[\/\s]((\d+)?[\w\.]+)/i],[u,d,a]],engine:[[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i,/(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,/(icab)[\/\s]([23]\.[\d\.]+)/i],[u,d],[/rv\:([\w\.]+).*(gecko)/i],[d,u]],os:[[/(windows)\snt\s6\.2;\s(arm)/i,/(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],[u,[d,v.str,y.os.windows.version]],[/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],[[u,"Windows"],[d,v.str,y.os.windows.version]],[/\((bb)(10);/i],[[u,"BlackBerry"],d],[/(blackberry)\w*\/?([\w\.]+)*/i,/(tizen)\/([\w\.]+)/i,/(android|webos|palm\os|qnx|bada|rim\stablet\sos|meego)[\/\s-]?([\w\.]+)*/i],[u,d],[/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],[[u,"Symbian"],d],[/mozilla.+\(mobile;.+gecko.+firefox/i],[[u,"Firefox OS"],d],[/(nintendo|playstation)\s([wids3portablevu]+)/i,/(mint)[\/\s\(]?(\w+)*/i,/(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk)[\/\s-]?([\w\.-]+)*/i,/(hurd|linux)\s?([\w\.]+)*/i,/(gnu)\s?([\w\.]+)*/i],[u,d],[/(cros)\s[\w]+\s([\w\.]+\w)/i],[[u,"Chromium OS"],d],[/(sunos)\s?([\w\.]+\d)*/i],[[u,"Solaris"],d],[/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],[u,d],[/(ip[honead]+)(?:.*os\s*([\w]+)*\slike\smac|;\sopera)/i],[[u,"iOS"],[d,/_/g,"."]],[/(mac\sos\sx)\s?([\w\s\.]+\w)*/i],[u,[d,/_/g,"."]],[/(haiku)\s(\w+)/i,/(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i,/(macintosh|mac(?=_powerpc)|plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos)/i,/(unix)\s?([\w\.]+)*/i],[u,d]]},E=function(e){var n=e||(window&&window.navigator&&window.navigator.userAgent?window.navigator.userAgent:t);this.getBrowser=function(){return v.rgx.apply(this,w.browser)},this.getEngine=function(){return v.rgx.apply(this,w.engine)},this.getOS=function(){return v.rgx.apply(this,w.os)},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS()}},this.getUA=function(){return n},this.setUA=function(e){return n=e,this},this.setUA(n)};return(new E).getResult()}(),i=function(){var t={define_property:function(){return!1}(),create_canvas:function(){var e=document.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))}(),return_response_type:function(t){try{if(-1!==e.inArray(t,["","text","document"]))return!0;if(window.XMLHttpRequest){var n=new XMLHttpRequest;if(n.open("get","/"),"responseType"in n)return n.responseType=t,n.responseType!==t?!1:!0}}catch(i){}return!1},use_data_uri:function(){var e=new Image;return e.onload=function(){t.use_data_uri=1===e.width&&1===e.height},setTimeout(function(){e.src="data:image/gif;base64,R0lGODlhAQABAIAAAP8AAAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="},1),!1}(),use_data_uri_over32kb:function(){return t.use_data_uri&&("IE"!==r.browser||r.version>=9)},use_data_uri_of:function(e){return t.use_data_uri&&33e3>e||t.use_data_uri_over32kb()},use_fileinput:function(){var e=document.createElement("input");return e.setAttribute("type","file"),!e.disabled}};return function(n){var i=[].slice.call(arguments);return i.shift(),"function"===e.typeOf(t[n])?t[n].apply(this,i):!!t[n]}}(),r={can:i,browser:n.browser.name,version:parseFloat(n.browser.major),os:n.os.name,osVersion:n.os.version,verComp:t,swf_url:"../flash/Moxie.swf",xap_url:"../silverlight/Moxie.xap",global_event_dispatcher:"moxie.core.EventTarget.instance.dispatchEvent"};return r.OS=r.os,r}),i(f,[d],function(e){var t=function(e){return"string"!=typeof e?e:document.getElementById(e)},n=function(e,t){if(!e.className)return!1;var n=new RegExp("(^|\\s+)"+t+"(\\s+|$)");return n.test(e.className)},i=function(e,t){n(e,t)||(e.className=e.className?e.className.replace(/\s+$/,"")+" "+t:t)},r=function(e,t){if(e.className){var n=new RegExp("(^|\\s+)"+t+"(\\s+|$)");e.className=e.className.replace(n,function(e,t,n){return" "===t&&" "===n?" ":""})}},o=function(e,t){return e.currentStyle?e.currentStyle[t]:window.getComputedStyle?window.getComputedStyle(e,null)[t]:void 0},a=function(t,n){function i(e){var t,n,i=0,r=0;return e&&(n=e.getBoundingClientRect(),t="CSS1Compat"===s.compatMode?s.documentElement:s.body,i=n.left+t.scrollLeft,r=n.top+t.scrollTop),{x:i,y:r}}var r=0,o=0,a,s=document,u,c;if(t=t,n=n||s.body,t&&t.getBoundingClientRect&&"IE"===e.browser&&(!s.documentMode||s.documentMode<8))return u=i(t),c=i(n),{x:u.x-c.x,y:u.y-c.y};for(a=t;a&&a!=n&&a.nodeType;)r+=a.offsetLeft||0,o+=a.offsetTop||0,a=a.offsetParent;for(a=t.parentNode;a&&a!=n&&a.nodeType;)r-=a.scrollLeft||0,o-=a.scrollTop||0,a=a.parentNode;return{x:r,y:o}},s=function(e){return{w:e.offsetWidth||e.clientWidth,h:e.offsetHeight||e.clientHeight}};return{get:t,hasClass:n,addClass:i,removeClass:r,getStyle:o,getPos:a,getSize:s}}),i(p,[u],function(e){function t(e,t){var n;for(n in e)if(e[n]===t)return n;return null}return{RuntimeError:function(){function n(e){this.code=e,this.name=t(i,e),this.message=this.name+": RuntimeError "+this.code}var i={NOT_INIT_ERR:1,NOT_SUPPORTED_ERR:9,JS_ERR:4};return e.extend(n,i),n.prototype=Error.prototype,n}(),OperationNotAllowedException:function(){function t(e){this.code=e,this.name="OperationNotAllowedException"}return e.extend(t,{NOT_ALLOWED_ERR:1}),t.prototype=Error.prototype,t}(),ImageError:function(){function n(e){this.code=e,this.name=t(i,e),this.message=this.name+": ImageError "+this.code}var i={WRONG_FORMAT:1,MAX_RESOLUTION_ERR:2};return e.extend(n,i),n.prototype=Error.prototype,n}(),FileException:function(){function n(e){this.code=e,this.name=t(i,e),this.message=this.name+": FileException "+this.code}var i={NOT_FOUND_ERR:1,SECURITY_ERR:2,ABORT_ERR:3,NOT_READABLE_ERR:4,ENCODING_ERR:5,NO_MODIFICATION_ALLOWED_ERR:6,INVALID_STATE_ERR:7,SYNTAX_ERR:8};return e.extend(n,i),n.prototype=Error.prototype,n}(),DOMException:function(){function n(e){this.code=e,this.name=t(i,e),this.message=this.name+": DOMException "+this.code}var i={INDEX_SIZE_ERR:1,DOMSTRING_SIZE_ERR:2,HIERARCHY_REQUEST_ERR:3,WRONG_DOCUMENT_ERR:4,INVALID_CHARACTER_ERR:5,NO_DATA_ALLOWED_ERR:6,NO_MODIFICATION_ALLOWED_ERR:7,NOT_FOUND_ERR:8,NOT_SUPPORTED_ERR:9,INUSE_ATTRIBUTE_ERR:10,INVALID_STATE_ERR:11,SYNTAX_ERR:12,INVALID_MODIFICATION_ERR:13,NAMESPACE_ERR:14,INVALID_ACCESS_ERR:15,VALIDATION_ERR:16,TYPE_MISMATCH_ERR:17,SECURITY_ERR:18,NETWORK_ERR:19,ABORT_ERR:20,URL_MISMATCH_ERR:21,QUOTA_EXCEEDED_ERR:22,TIMEOUT_ERR:23,INVALID_NODE_TYPE_ERR:24,DATA_CLONE_ERR:25};return e.extend(n,i),n.prototype=Error.prototype,n}(),EventException:function(){function t(e){this.code=e,this.name="EventException"}return e.extend(t,{UNSPECIFIED_EVENT_TYPE_ERR:0}),t.prototype=Error.prototype,t}()}}),i(h,[p,u],function(e,t){function n(){var n={};t.extend(this,{uid:null,init:function(){this.uid||(this.uid=t.guid("uid_"))},addEventListener:function(e,i,r,o){var a=this,s;return e=t.trim(e),/\s/.test(e)?(t.each(e.split(/\s+/),function(e){a.addEventListener(e,i,r,o)}),void 0):(e=e.toLowerCase(),r=parseInt(r,10)||0,s=n[this.uid]&&n[this.uid][e]||[],s.push({fn:i,priority:r,scope:o||this}),n[this.uid]||(n[this.uid]={}),n[this.uid][e]=s,void 0)},hasEventListener:function(e){return e?!(!n[this.uid]||!n[this.uid][e]):!!n[this.uid]},removeEventListener:function(e,i){e=e.toLowerCase();var r=n[this.uid]&&n[this.uid][e],o;if(r){if(i){for(o=r.length-1;o>=0;o--)if(r[o].fn===i){r.splice(o,1);break}}else r=[];r.length||(delete n[this.uid][e],t.isEmptyObj(n[this.uid])&&delete n[this.uid])}},removeAllEventListeners:function(){n[this.uid]&&delete n[this.uid]},dispatchEvent:function(i){var r,o,a,s,u={},c=!0,l;if("string"!==t.typeOf(i)){if(s=i,"string"!==t.typeOf(s.type))throw new e.EventException(e.EventException.UNSPECIFIED_EVENT_TYPE_ERR);i=s.type,s.total!==l&&s.loaded!==l&&(u.total=s.total,u.loaded=s.loaded),u.async=s.async||!1}if(-1!==i.indexOf("::")?function(e){r=e[0],i=e[1]}(i.split("::")):r=this.uid,i=i.toLowerCase(),o=n[r]&&n[r][i]){o.sort(function(e,t){return t.priority-e.priority}),a=[].slice.call(arguments),a.shift(),u.type=i,a.unshift(u);var d=[];t.each(o,function(e){a[0].target=e.scope,u.async?d.push(function(t){setTimeout(function(){t(e.fn.apply(e.scope,a)===!1)},1)}):d.push(function(t){t(e.fn.apply(e.scope,a)===!1)})}),d.length&&t.inSeries(d,function(e){c=!e})}return c},bind:function(){this.addEventListener.apply(this,arguments)},unbind:function(){this.removeEventListener.apply(this,arguments)},unbindAll:function(){this.removeAllEventListeners.apply(this,arguments)},trigger:function(){return this.dispatchEvent.apply(this,arguments)},convertEventPropsToHandlers:function(e){var n;"array"!==t.typeOf(e)&&(e=[e]);for(var i=0;i<e.length;i++)n="on"+e[i],"function"===t.typeOf(this[n])?this.addEventListener(e[i],this[n]):"undefined"===t.typeOf(this[n])&&(this[n]=null)}})}return n.instance=new n,n}),i(m,[],function(){var e=function(e){return unescape(encodeURIComponent(e))},t=function(e){return decodeURIComponent(escape(e))},n=function(e,n){if("function"==typeof window.atob)return n?t(window.atob(e)):window.atob(e);var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",r,o,a,s,u,c,l,d,f=0,p=0,h="",m=[];if(!e)return e;e+="";do s=i.indexOf(e.charAt(f++)),u=i.indexOf(e.charAt(f++)),c=i.indexOf(e.charAt(f++)),l=i.indexOf(e.charAt(f++)),d=s<<18|u<<12|c<<6|l,r=255&d>>16,o=255&d>>8,a=255&d,m[p++]=64==c?String.fromCharCode(r):64==l?String.fromCharCode(r,o):String.fromCharCode(r,o,a);while(f<e.length);return h=m.join(""),n?t(h):h},i=function(t,n){if(n&&e(t),"function"==typeof window.btoa)return window.btoa(t);var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",r,o,a,s,u,c,l,d,f=0,p=0,h="",m=[];if(!t)return t;do r=t.charCodeAt(f++),o=t.charCodeAt(f++),a=t.charCodeAt(f++),d=r<<16|o<<8|a,s=63&d>>18,u=63&d>>12,c=63&d>>6,l=63&d,m[p++]=i.charAt(s)+i.charAt(u)+i.charAt(c)+i.charAt(l);while(f<t.length);h=m.join("");var g=t.length%3;return(g?h.slice(0,g-3):h)+"===".slice(g||3)};return{utf8_encode:e,utf8_decode:t,atob:n,btoa:i}}),i(g,[u,f,h],function(e,t,n){function i(n,r,a,s,u){var c=this,l,d=e.guid(r+"_"),f=u||"browser";n=n||{},o[d]=this,a=e.extend({access_binary:!1,access_image_binary:!1,display_media:!1,do_cors:!1,drag_and_drop:!1,filter_by_extension:!0,resize_image:!1,report_upload_progress:!1,return_response_headers:!1,return_response_type:!1,return_status_code:!0,send_custom_headers:!1,select_file:!1,select_folder:!1,select_multiple:!0,send_binary_string:!1,send_browser_cookies:!0,send_multipart:!0,slice_blob:!1,stream_upload:!1,summon_file_dialog:!1,upload_filesize:!0,use_http_method:!0},a),n.preferred_caps&&(f=i.getMode(s,n.preferred_caps,f)),l=function(){var t={};return{exec:function(e,n,i,r){return l[n]&&(t[e]||(t[e]={context:this,instance:new l[n]}),t[e].instance[i])?t[e].instance[i].apply(this,r):void 0},removeInstance:function(e){delete t[e]},removeAllInstances:function(){var n=this;e.each(t,function(t,i){"function"===e.typeOf(t.instance.destroy)&&t.instance.destroy.call(t.context),n.removeInstance(i)})}}}(),e.extend(this,{initialized:!1,uid:d,type:r,mode:i.getMode(s,n.required_caps,f),shimid:d+"_container",clients:0,options:n,can:function(t,n){var r=arguments[2]||a;if("string"===e.typeOf(t)&&"undefined"===e.typeOf(n)&&(t=i.parseCaps(t)),"object"===e.typeOf(t)){for(var o in t)if(!this.can(o,t[o],r))return!1;return!0}return"function"===e.typeOf(r[t])?r[t].call(this,n):n===r[t]},getShimContainer:function(){var n,i=t.get(this.shimid);return i||(n=this.options.container?t.get(this.options.container):document.body,i=document.createElement("div"),i.id=this.shimid,i.className="moxie-shim moxie-shim-"+this.type,e.extend(i.style,{position:"absolute",top:"0px",left:"0px",width:"1px",height:"1px",overflow:"hidden"}),n.appendChild(i),n=null),i},getShim:function(){return l},shimExec:function(e,t){var n=[].slice.call(arguments,2);return c.getShim().exec.call(this,this.uid,e,t,n)},exec:function(e,t){var n=[].slice.call(arguments,2);return c[e]&&c[e][t]?c[e][t].apply(this,n):c.shimExec.apply(this,arguments)},destroy:function(){if(c){var e=t.get(this.shimid);e&&e.parentNode.removeChild(e),l&&l.removeAllInstances(),this.unbindAll(),delete o[this.uid],this.uid=null,d=c=l=e=null}}}),this.mode&&n.required_caps&&!this.can(n.required_caps)&&(this.mode=!1)}var r={},o={};return i.order="html5,flash,silverlight,html4",i.getRuntime=function(e){return o[e]?o[e]:!1},i.addConstructor=function(e,t){t.prototype=n.instance,r[e]=t},i.getConstructor=function(e){return r[e]||null},i.getInfo=function(e){var t=i.getRuntime(e);return t?{uid:t.uid,type:t.type,mode:t.mode,can:function(){return t.can.apply(t,arguments)}}:null},i.parseCaps=function(t){var n={};return"string"!==e.typeOf(t)?t||{}:(e.each(t.split(","),function(e){n[e]=!0}),n)},i.can=function(e,t){var n,r=i.getConstructor(e),o;return r?(n=new r({required_caps:t}),o=n.mode,n.destroy(),!!o):!1},i.thatCan=function(e,t){var n=(t||i.order).split(/\s*,\s*/);for(var r in n)if(i.can(n[r],e))return n[r];return null},i.getMode=function(t,n,i){var r=null;if("undefined"===e.typeOf(i)&&(i="browser"),n&&!e.isEmptyObj(t)){if(e.each(n,function(n,i){if(t.hasOwnProperty(i)){var o=t[i](n);if("string"==typeof o&&(o=[o]),r){if(!(r=e.arrayIntersect(r,o)))return r=!1}else r=o}}),r)return-1!==e.inArray(i,r)?i:r[0];if(r===!1)return!1}return i},i.capTrue=function(){return!0},i.capFalse=function(){return!1},i.capTest=function(e){return function(){return!!e}},i}),i(v,[p,u,g],function(e,t,n){return function i(){var i;t.extend(this,{connectRuntime:function(r){function o(t){var s,u;return t.length?(s=t.shift(),(u=n.getConstructor(s))?(i=new u(r),i.bind("Init",function(){i.initialized=!0,setTimeout(function(){i.clients++,a.trigger("RuntimeInit",i)},1)}),i.bind("Error",function(){i.destroy(),o(t)}),i.mode?(i.init(),void 0):(i.trigger("Error"),void 0)):(o(t),void 0)):(a.trigger("RuntimeError",new e.RuntimeError(e.RuntimeError.NOT_INIT_ERR)),i=null,void 0)}var a=this,s;if("string"===t.typeOf(r)?s=r:"string"===t.typeOf(r.ruid)&&(s=r.ruid),s){if(i=n.getRuntime(s))return i.clients++,i;throw new e.RuntimeError(e.RuntimeError.NOT_INIT_ERR)}o((r.runtime_order||n.order).split(/\s*,\s*/))},getRuntime:function(){return i&&i.uid?i:(i=null,null)},disconnectRuntime:function(){i&&--i.clients<=0&&(i.destroy(),i=null)}})}}),i(y,[u,m,v],function(e,t,n){function i(o,a){function s(t,n,o){var a,s=r[this.uid];return"string"===e.typeOf(s)&&s.length?(a=new i(null,{type:o,size:n-t}),a.detach(s.substr(t,a.size)),a):null}n.call(this),o&&this.connectRuntime(o),a?"string"===e.typeOf(a)&&(a={data:a}):a={},e.extend(this,{uid:a.uid||e.guid("uid_"),ruid:o,size:a.size||0,type:a.type||"",slice:function(e,t,n){return this.isDetached()?s.apply(this,arguments):this.getRuntime().exec.call(this,"Blob","slice",this.getSource(),e,t,n)},getSource:function(){return r[this.uid]?r[this.uid]:null},detach:function(e){this.ruid&&(this.getRuntime().exec.call(this,"Blob","destroy",r[this.uid]),this.disconnectRuntime(),this.ruid=null),e=e||"";var n=e.match(/^data:([^;]*);base64,/);n&&(this.type=n[1],e=t.atob(e.substring(e.indexOf("base64,")+7))),this.size=e.length,r[this.uid]=e},isDetached:function(){return!this.ruid&&"string"===e.typeOf(r[this.uid])},destroy:function(){this.detach(),delete r[this.uid]}}),a.data?this.detach(a.data):r[this.uid]=a}var r={};return i}),i(w,[u,l,y],function(e,t,n){function i(i,r){var o,a;if(r||(r={}),a=r.type&&""!==r.type?r.type:t.getFileMime(r.name),r.name)o=r.name.replace(/\\/g,"/"),o=o.substr(o.lastIndexOf("/")+1);else{var s=a.split("/")[0];o=e.guid((""!==s?s:"file")+"_"),t.extensions[a]&&(o+="."+t.extensions[a][0])}n.apply(this,arguments),e.extend(this,{type:a||"",name:o||e.guid("file_"),lastModifiedDate:r.lastModifiedDate||(new Date).toLocaleString()})}return i.prototype=n.prototype,i}),i(E,[u,l,f,p,h,c,w,g,v],function(e,t,n,i,r,o,a,s,u){function c(r){var c=this,d,f,p;if(-1!==e.inArray(e.typeOf(r),["string","node"])&&(r={browse_button:r}),f=n.get(r.browse_button),!f)throw new i.DOMException(i.DOMException.NOT_FOUND_ERR);p={accept:[{title:o.translate("All Files"),extensions:"*"}],name:"file",multiple:!1,required_caps:!1,container:f.parentNode||document.body},r=e.extend({},p,r),"string"==typeof r.required_caps&&(r.required_caps=s.parseCaps(r.required_caps)),"string"==typeof r.accept&&(r.accept=t.mimes2extList(r.accept)),d=n.get(r.container),d||(d=document.body),"static"===n.getStyle(d,"position")&&(d.style.position="relative"),d=f=null,u.call(c),e.extend(c,{uid:e.guid("uid_"),ruid:null,shimid:null,files:null,init:function(){c.convertEventPropsToHandlers(l),c.bind("RuntimeInit",function(t,i){c.ruid=i.uid,c.shimid=i.shimid,c.bind("Ready",function(){c.trigger("Refresh")},999),c.bind("Change",function(){var t=i.exec.call(c,"FileInput","getFiles");c.files=[],e.each(t,function(e){return 0===e.size?!0:(c.files.push(new a(c.ruid,e)),void 0)})},999),c.bind("Refresh",function(){var t,o,a,s;a=n.get(r.browse_button),s=n.get(i.shimid),a&&(t=n.getPos(a,n.get(r.container)),o=n.getSize(a),s&&e.extend(s.style,{top:t.y+"px",left:t.x+"px",width:o.w+"px",height:o.h+"px"})),s=a=null}),i.exec.call(c,"FileInput","init",r)}),c.connectRuntime(e.extend({},r,{required_caps:{select_file:!0}}))},disable:function(t){var n=this.getRuntime();n&&n.exec.call(this,"FileInput","disable","undefined"===e.typeOf(t)?!0:t)},refresh:function(){c.trigger("Refresh")},destroy:function(){var t=this.getRuntime();t&&(t.exec.call(this,"FileInput","destroy"),this.disconnectRuntime()),"array"===e.typeOf(this.files)&&e.each(this.files,function(e){e.destroy()}),this.files=null}})}var l=["ready","change","cancel","mouseenter","mouseleave","mousedown","mouseup"];return c.prototype=r.instance,c}),i(_,[c,f,p,u,w,v,h,l],function(e,t,n,i,r,o,a,s){function u(n){var a=this,u;"string"==typeof n&&(n={drop_zone:n}),u={accept:[{title:e.translate("All Files"),extensions:"*"}],required_caps:{drag_and_drop:!0}},n="object"==typeof n?i.extend({},u,n):u,n.container=t.get(n.drop_zone)||document.body,"static"===t.getStyle(n.container,"position")&&(n.container.style.position="relative"),"string"==typeof n.accept&&(n.accept=s.mimes2extList(n.accept)),o.call(a),i.extend(a,{uid:i.guid("uid_"),ruid:null,files:null,init:function(){a.convertEventPropsToHandlers(c),a.bind("RuntimeInit",function(e,t){a.ruid=t.uid,a.bind("Drop",function(){var e=t.exec.call(a,"FileDrop","getFiles");a.files=[],i.each(e,function(e){a.files.push(new r(a.ruid,e))})},999),t.exec.call(a,"FileDrop","init",n),a.dispatchEvent("ready")}),a.connectRuntime(n)},destroy:function(){var e=this.getRuntime();e&&(e.exec.call(this,"FileDrop","destroy"),this.disconnectRuntime()),this.files=null}})}var c=["ready","dragenter","dragleave","drop","error"];return u.prototype=a.instance,u}),i(x,[u,v,h],function(e,t,n){function i(){this.uid=e.guid("uid_"),t.call(this),this.destroy=function(){this.disconnectRuntime(),this.unbindAll()}}return i.prototype=n.instance,i}),i(R,[u,m,p,h,y,w,x],function(e,t,n,i,r,o,a){function s(){function i(e,i){function l(e){o.readyState=s.DONE,o.error=e,o.trigger("error"),d()}function d(){c.destroy(),c=null,o.trigger("loadend")}function f(t){c.bind("Error",function(e,t){l(t)}),c.bind("Progress",function(e){o.result=t.exec.call(c,"FileReader","getResult"),o.trigger(e)}),c.bind("Load",function(e){o.readyState=s.DONE,o.result=t.exec.call(c,"FileReader","getResult"),o.trigger(e),d()}),t.exec.call(c,"FileReader","read",e,i)}if(c=new a,this.convertEventPropsToHandlers(u),this.readyState===s.LOADING)return l(new n.DOMException(n.DOMException.INVALID_STATE_ERR));if(this.readyState=s.LOADING,this.trigger("loadstart"),i instanceof r)if(i.isDetached()){var p=i.getSource();switch(e){case"readAsText":case"readAsBinaryString":this.result=p;break;case"readAsDataURL":this.result="data:"+i.type+";base64,"+t.btoa(p)}this.readyState=s.DONE,this.trigger("load"),d()}else f(c.connectRuntime(i.ruid));else l(new n.DOMException(n.DOMException.NOT_FOUND_ERR))}var o=this,c;e.extend(this,{uid:e.guid("uid_"),readyState:s.EMPTY,result:null,error:null,readAsBinaryString:function(e){i.call(this,"readAsBinaryString",e)},readAsDataURL:function(e){i.call(this,"readAsDataURL",e)},readAsText:function(e){i.call(this,"readAsText",e)
},abort:function(){this.result=null,-1===e.inArray(this.readyState,[s.EMPTY,s.DONE])&&(this.readyState===s.LOADING&&(this.readyState=s.DONE),c&&c.getRuntime().exec.call(this,"FileReader","abort"),this.trigger("abort"),this.trigger("loadend"))},destroy:function(){this.abort(),c&&(c.getRuntime().exec.call(this,"FileReader","destroy"),c.disconnectRuntime()),o=c=null}})}var u=["loadstart","progress","load","abort","error","loadend"];return s.EMPTY=0,s.LOADING=1,s.DONE=2,s.prototype=i.instance,s}),i(b,[],function(){var e=function(t,n){for(var i=["source","scheme","authority","userInfo","user","pass","host","port","relative","path","directory","file","query","fragment"],r=i.length,o={http:80,https:443},a={},s=/^(?:([^:\/?#]+):)?(?:\/\/()(?:(?:()(?:([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?()(?:(()(?:(?:[^?#\/]*\/)*)()(?:[^?#]*))(?:\\?([^#]*))?(?:#(.*))?)/,u=s.exec(t||"");r--;)u[r]&&(a[i[r]]=u[r]);if(!a.scheme){n&&"string"!=typeof n||(n=e(n||document.location.href)),a.scheme=n.scheme,a.host=n.host,a.port=n.port;var c="";/^[^\/]/.test(a.path)&&(c=n.path,/(\/|\/[^\.]+)$/.test(c)?c+="/":c=c.replace(/\/[^\/]+$/,"/")),a.path=c+(a.path||"")}return a.port||(a.port=o[a.scheme]||80),a.port=parseInt(a.port,10),a.path||(a.path="/"),delete a.source,a},t=function(t){var n={http:80,https:443},i=e(t);return i.scheme+"://"+i.host+(i.port!==n[i.scheme]?":"+i.port:"")+i.path+(i.query?i.query:"")},n=function(t){function n(e){return[e.scheme,e.host,e.port].join("/")}return"string"==typeof t&&(t=e(t)),n(e())===n(t)};return{parseUrl:e,resolveUrl:t,hasSameOrigin:n}}),i(T,[u,v,m],function(e,t,n){return function(){function i(e,t){if(!t.isDetached()){var i=this.connectRuntime(t.ruid).exec.call(this,"FileReaderSync","read",e,t);return this.disconnectRuntime(),i}var r=t.getSource();switch(e){case"readAsBinaryString":return r;case"readAsDataURL":return"data:"+t.type+";base64,"+n.btoa(r);case"readAsText":for(var o="",a=0,s=r.length;s>a;a++)o+=String.fromCharCode(r[a]);return o}}t.call(this),e.extend(this,{uid:e.guid("uid_"),readAsBinaryString:function(e){return i.call(this,"readAsBinaryString",e)},readAsDataURL:function(e){return i.call(this,"readAsDataURL",e)},readAsText:function(e){return i.call(this,"readAsText",e)}})}}),i(S,[p,u,y],function(e,t,n){function i(){var e,i=[];t.extend(this,{append:function(r,o){var a=this,s=t.typeOf(o);o instanceof n?e={name:r,value:o}:"array"===s?(r+="[]",t.each(o,function(e){a.append(r,e)})):"object"===s?t.each(o,function(e,t){a.append(r+"["+t+"]",e)}):"null"===s||"undefined"===s||"number"===s&&isNaN(o)?a.append(r,"false"):i.push({name:r,value:o.toString()})},hasBlob:function(){return!!this.getBlob()},getBlob:function(){return e&&e.value||null},getBlobName:function(){return e&&e.name||null},each:function(n){t.each(i,function(e){n(e.value,e.name)}),e&&n(e.value,e.name)},destroy:function(){e=null,i=[]}})}return i}),i(A,[u,p,h,m,b,g,x,y,T,S,d,l],function(e,t,n,i,r,o,a,s,u,c,l,d){function f(){this.uid=e.guid("uid_")}function p(){function n(e,t){return y.hasOwnProperty(e)?1===arguments.length?l.can("define_property")?y[e]:v[e]:(l.can("define_property")?y[e]=t:v[e]=t,void 0):void 0}function u(t){function i(){k.destroy(),k=null,s.dispatchEvent("loadend"),s=null}function r(r){k.bind("LoadStart",function(e){n("readyState",p.LOADING),s.dispatchEvent("readystatechange"),s.dispatchEvent(e),I&&s.upload.dispatchEvent(e)}),k.bind("Progress",function(e){n("readyState")!==p.LOADING&&(n("readyState",p.LOADING),s.dispatchEvent("readystatechange")),s.dispatchEvent(e)}),k.bind("UploadProgress",function(e){I&&s.upload.dispatchEvent({type:"progress",lengthComputable:!1,total:e.total,loaded:e.loaded})}),k.bind("Load",function(t){n("readyState",p.DONE),n("status",Number(r.exec.call(k,"XMLHttpRequest","getStatus")||0)),n("statusText",h[n("status")]||""),n("response",r.exec.call(k,"XMLHttpRequest","getResponse",n("responseType"))),~e.inArray(n("responseType"),["text",""])?n("responseText",n("response")):"document"===n("responseType")&&n("responseXML",n("response")),U=r.exec.call(k,"XMLHttpRequest","getAllResponseHeaders"),s.dispatchEvent("readystatechange"),n("status")>0?(I&&s.upload.dispatchEvent(t),s.dispatchEvent(t)):(N=!0,s.dispatchEvent("error")),i()}),k.bind("Abort",function(e){s.dispatchEvent(e),i()}),k.bind("Error",function(e){N=!0,n("readyState",p.DONE),s.dispatchEvent("readystatechange"),D=!0,s.dispatchEvent(e),i()}),r.exec.call(k,"XMLHttpRequest","send",{url:E,method:_,async:w,user:R,password:b,headers:x,mimeType:S,encoding:T,responseType:s.responseType,withCredentials:s.withCredentials,options:P},t)}var s=this;M=(new Date).getTime(),k=new a,"string"==typeof P.required_caps&&(P.required_caps=o.parseCaps(P.required_caps)),P.required_caps=e.extend({},P.required_caps,{return_response_type:s.responseType}),t instanceof c&&(P.required_caps.send_multipart=!0),L||(P.required_caps.do_cors=!0),P.ruid?r(k.connectRuntime(P)):(k.bind("RuntimeInit",function(e,t){r(t)}),k.bind("RuntimeError",function(e,t){s.dispatchEvent("RuntimeError",t)}),k.connectRuntime(P))}function g(){n("responseText",""),n("responseXML",null),n("response",null),n("status",0),n("statusText",""),M=C=null}var v=this,y={timeout:0,readyState:p.UNSENT,withCredentials:!1,status:0,statusText:"",responseType:"",responseXML:null,responseText:null,response:null},w=!0,E,_,x={},R,b,T=null,S=null,A=!1,O=!1,I=!1,D=!1,N=!1,L=!1,M,C,F=null,H=null,P={},k,U="",B;e.extend(this,y,{uid:e.guid("uid_"),upload:new f,open:function(o,a,s,u,c){var l;if(!o||!a)throw new t.DOMException(t.DOMException.SYNTAX_ERR);if(/[\u0100-\uffff]/.test(o)||i.utf8_encode(o)!==o)throw new t.DOMException(t.DOMException.SYNTAX_ERR);if(~e.inArray(o.toUpperCase(),["CONNECT","DELETE","GET","HEAD","OPTIONS","POST","PUT","TRACE","TRACK"])&&(_=o.toUpperCase()),~e.inArray(_,["CONNECT","TRACE","TRACK"]))throw new t.DOMException(t.DOMException.SECURITY_ERR);if(a=i.utf8_encode(a),l=r.parseUrl(a),L=r.hasSameOrigin(l),E=r.resolveUrl(a),(u||c)&&!L)throw new t.DOMException(t.DOMException.INVALID_ACCESS_ERR);if(R=u||l.user,b=c||l.pass,w=s||!0,w===!1&&(n("timeout")||n("withCredentials")||""!==n("responseType")))throw new t.DOMException(t.DOMException.INVALID_ACCESS_ERR);A=!w,O=!1,x={},g.call(this),n("readyState",p.OPENED),this.convertEventPropsToHandlers(["readystatechange"]),this.dispatchEvent("readystatechange")},setRequestHeader:function(r,o){var a=["accept-charset","accept-encoding","access-control-request-headers","access-control-request-method","connection","content-length","cookie","cookie2","content-transfer-encoding","date","expect","host","keep-alive","origin","referer","te","trailer","transfer-encoding","upgrade","user-agent","via"];if(n("readyState")!==p.OPENED||O)throw new t.DOMException(t.DOMException.INVALID_STATE_ERR);if(/[\u0100-\uffff]/.test(r)||i.utf8_encode(r)!==r)throw new t.DOMException(t.DOMException.SYNTAX_ERR);return r=e.trim(r).toLowerCase(),~e.inArray(r,a)||/^(proxy\-|sec\-)/.test(r)?!1:(x[r]?x[r]+=", "+o:x[r]=o,!0)},getAllResponseHeaders:function(){return U||""},getResponseHeader:function(t){return t=t.toLowerCase(),N||~e.inArray(t,["set-cookie","set-cookie2"])?null:U&&""!==U&&(B||(B={},e.each(U.split(/\r\n/),function(t){var n=t.split(/:\s+/);2===n.length&&(n[0]=e.trim(n[0]),B[n[0].toLowerCase()]={header:n[0],value:e.trim(n[1])})})),B.hasOwnProperty(t))?B[t].header+": "+B[t].value:null},overrideMimeType:function(i){var r,o;if(~e.inArray(n("readyState"),[p.LOADING,p.DONE]))throw new t.DOMException(t.DOMException.INVALID_STATE_ERR);if(i=e.trim(i.toLowerCase()),/;/.test(i)&&(r=i.match(/^([^;]+)(?:;\scharset\=)?(.*)$/))&&(i=r[1],r[2]&&(o=r[2])),!d.mimes[i])throw new t.DOMException(t.DOMException.SYNTAX_ERR);F=i,H=o},send:function(n,r){if(P="string"===e.typeOf(r)?{ruid:r}:r?r:{},this.convertEventPropsToHandlers(m),this.upload.convertEventPropsToHandlers(m),this.readyState!==p.OPENED||O)throw new t.DOMException(t.DOMException.INVALID_STATE_ERR);if(n instanceof s)P.ruid=n.ruid,S=n.type||"application/octet-stream";else if(n instanceof c){if(n.hasBlob()){var o=n.getBlob();P.ruid=o.ruid,S=o.type||"application/octet-stream"}}else"string"==typeof n&&(T="UTF-8",S="text/plain;charset=UTF-8",n=i.utf8_encode(n));this.withCredentials||(this.withCredentials=P.required_caps&&P.required_caps.send_browser_cookies&&!L),I=!A&&this.upload.hasEventListener(),N=!1,D=!n,A||(O=!0),u.call(this,n)},abort:function(){if(N=!0,A=!1,~e.inArray(n("readyState"),[p.UNSENT,p.OPENED,p.DONE]))n("readyState",p.UNSENT);else{if(n("readyState",p.DONE),O=!1,!k)throw new t.DOMException(t.DOMException.INVALID_STATE_ERR);k.getRuntime().exec.call(k,"XMLHttpRequest","abort",D),D=!0}},destroy:function(){k&&("function"===e.typeOf(k.destroy)&&k.destroy(),k=null),this.unbindAll(),this.upload&&(this.upload.unbindAll(),this.upload=null)}})}var h={100:"Continue",101:"Switching Protocols",102:"Processing",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",226:"IM Used",300:"Multiple Choices",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",306:"Reserved",307:"Temporary Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Request Entity Too Large",414:"Request-URI Too Long",415:"Unsupported Media Type",416:"Requested Range Not Satisfiable",417:"Expectation Failed",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",426:"Upgrade Required",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",510:"Not Extended"};f.prototype=n.instance;var m=["loadstart","progress","abort","error","load","timeout","loadend"],g=1,v=2;return p.UNSENT=0,p.OPENED=1,p.HEADERS_RECEIVED=2,p.LOADING=3,p.DONE=4,p.prototype=n.instance,p}),i(O,[u,m,v,h],function(e,t,n,i){function r(){function i(){l=d=0,c=this.result=null}function o(t,n){var i=this;u=n,i.bind("TransportingProgress",function(t){d=t.loaded,l>d&&-1===e.inArray(i.state,[r.IDLE,r.DONE])&&a.call(i)},999),i.bind("TransportingComplete",function(){d=l,i.state=r.DONE,c=null,i.result=u.exec.call(i,"Transporter","getAsBlob",t||"")},999),i.state=r.BUSY,i.trigger("TransportingStarted"),a.call(i)}function a(){var e=this,n,i=l-d;f>i&&(f=i),n=t.btoa(c.substr(d,f)),u.exec.call(e,"Transporter","receive",n,l)}var s,u,c,l,d,f;n.call(this),e.extend(this,{uid:e.guid("uid_"),state:r.IDLE,result:null,transport:function(t,n,r){var a=this;if(r=e.extend({chunk_size:204798},r),(s=r.chunk_size%3)&&(r.chunk_size+=3-s),f=r.chunk_size,i.call(this),c=t,l=t.length,"string"===e.typeOf(r)||r.ruid)o.call(a,n,this.connectRuntime(r));else{var u=function(e,t){a.unbind("RuntimeInit",u),o.call(a,n,t)};this.bind("RuntimeInit",u),this.connectRuntime(r)}},abort:function(){var e=this;e.state=r.IDLE,u&&(u.exec.call(e,"Transporter","clear"),e.trigger("TransportingAborted")),i.call(e)},destroy:function(){this.unbindAll(),u=null,this.disconnectRuntime(),i.call(this)}})}return r.IDLE=0,r.BUSY=1,r.DONE=2,r.prototype=i.instance,r}),i(I,[u,f,p,T,A,g,v,O,d,h,y,w,m],function(e,t,n,i,r,o,a,s,u,c,l,d,f){function p(){function i(e){e||(e=this.getRuntime().exec.call(this,"Image","getInfo")),this.size=e.size,this.width=e.width,this.height=e.height,this.type=e.type,this.meta=e.meta,""===this.name&&(this.name=e.name)}function c(t){var i=e.typeOf(t);try{if(t instanceof p){if(!t.size)throw new n.DOMException(n.DOMException.INVALID_STATE_ERR);m.apply(this,arguments)}else if(t instanceof l){if(!~e.inArray(t.type,["image/jpeg","image/png"]))throw new n.ImageError(n.ImageError.WRONG_FORMAT);g.apply(this,arguments)}else if(-1!==e.inArray(i,["blob","file"]))c.call(this,new d(null,t),arguments[1]);else if("string"===i)/^data:[^;]*;base64,/.test(t)?c.call(this,new l(null,{data:t}),arguments[1]):v.apply(this,arguments);else{if("node"!==i||"img"!==t.nodeName.toLowerCase())throw new n.DOMException(n.DOMException.TYPE_MISMATCH_ERR);c.call(this,t.src,arguments[1])}}catch(r){this.trigger("error",r)}}function m(t,n){var i=this.connectRuntime(t.ruid);this.ruid=i.uid,i.exec.call(this,"Image","loadFromImage",t,"undefined"===e.typeOf(n)?!0:n)}function g(t,n){function i(e){r.ruid=e.uid,e.exec.call(r,"Image","loadFromBlob",t)}var r=this;r.name=t.name||"",t.isDetached()?(this.bind("RuntimeInit",function(e,t){i(t)}),n&&"string"==typeof n.required_caps&&(n.required_caps=o.parseCaps(n.required_caps)),this.connectRuntime(e.extend({required_caps:{access_image_binary:!0,resize_image:!0}},n))):i(this.connectRuntime(t.ruid))}function v(e,t){var n=this,i;i=new r,i.open("get",e),i.responseType="blob",i.onprogress=function(e){n.trigger(e)},i.onload=function(){g.call(n,i.response,!0)},i.onerror=function(e){n.trigger(e)},i.onloadend=function(){i.destroy()},i.bind("RuntimeError",function(e,t){n.trigger("RuntimeError",t)}),i.send(null,t)}a.call(this),e.extend(this,{uid:e.guid("uid_"),ruid:null,name:"",size:0,width:0,height:0,type:"",meta:{},clone:function(){this.load.apply(this,arguments)},load:function(){this.bind("Load Resize",function(){i.call(this)},999),this.convertEventPropsToHandlers(h),c.apply(this,arguments)},downsize:function(t,i,r,o){try{if(!this.size)throw new n.DOMException(n.DOMException.INVALID_STATE_ERR);if(this.width>p.MAX_RESIZE_WIDTH||this.height>p.MAX_RESIZE_HEIGHT)throw new n.ImageError(n.ImageError.MAX_RESOLUTION_ERR);(!t&&!i||"undefined"===e.typeOf(r))&&(r=!1),t=t||this.width,i=i||this.height,o="undefined"===e.typeOf(o)?!0:!!o,this.getRuntime().exec.call(this,"Image","downsize",t,i,r,o)}catch(a){this.trigger("error",a)}},crop:function(e,t,n){this.downsize(e,t,!0,n)},getAsCanvas:function(){if(!u.can("create_canvas"))throw new n.RuntimeError(n.RuntimeError.NOT_SUPPORTED_ERR);var e=this.connectRuntime(this.ruid);return e.exec.call(this,"Image","getAsCanvas")},getAsBlob:function(e,t){if(!this.size)throw new n.DOMException(n.DOMException.INVALID_STATE_ERR);return e||(e="image/jpeg"),"image/jpeg"!==e||t||(t=90),this.getRuntime().exec.call(this,"Image","getAsBlob",e,t)},getAsDataURL:function(e,t){if(!this.size)throw new n.DOMException(n.DOMException.INVALID_STATE_ERR);return this.getRuntime().exec.call(this,"Image","getAsDataURL",e,t)},getAsBinaryString:function(e,t){var n=this.getAsDataURL(e,t);return f.atob(n.substring(n.indexOf("base64,")+7))},embed:function(i){function r(){if(u.can("create_canvas")){var t=a.getAsCanvas();if(t)return i.appendChild(t),t=null,a.destroy(),o.trigger("embedded"),void 0}var r=a.getAsDataURL(c,l);if(!r)throw new n.ImageError(n.ImageError.WRONG_FORMAT);if(u.can("use_data_uri_of",r.length))i.innerHTML='<img src="'+r+'" width="'+a.width+'" height="'+a.height+'" />',a.destroy(),o.trigger("embedded");else{var d=new s;d.bind("TransportingComplete",function(){v=o.connectRuntime(this.result.ruid),o.bind("Embedded",function(){e.extend(v.getShimContainer().style,{top:"0px",left:"0px",width:a.width+"px",height:a.height+"px"}),v=null},999),v.exec.call(o,"ImageView","display",this.result.uid,m,g),a.destroy()}),d.transport(f.atob(r.substring(r.indexOf("base64,")+7)),c,e.extend({},h,{required_caps:{display_media:!0},runtime_order:"flash,silverlight",container:i}))}}var o=this,a,c,l,d,h=arguments[1]||{},m=this.width,g=this.height,v;try{if(!(i=t.get(i)))throw new n.DOMException(n.DOMException.INVALID_NODE_TYPE_ERR);if(!this.size)throw new n.DOMException(n.DOMException.INVALID_STATE_ERR);if(this.width>p.MAX_RESIZE_WIDTH||this.height>p.MAX_RESIZE_HEIGHT)throw new n.ImageError(n.ImageError.MAX_RESOLUTION_ERR);if(c=h.type||this.type||"image/jpeg",l=h.quality||90,d="undefined"!==e.typeOf(h.crop)?h.crop:!1,h.width)m=h.width,g=h.height||m;else{var y=t.getSize(i);y.w&&y.h&&(m=y.w,g=y.h)}return a=new p,a.bind("Resize",function(){r.call(o)}),a.bind("Load",function(){a.downsize(m,g,d,!1)}),a.clone(this,!1),a}catch(w){this.trigger("error",w)}},destroy:function(){this.ruid&&(this.getRuntime().exec.call(this,"Image","destroy"),this.disconnectRuntime()),this.unbindAll()}})}var h=["progress","load","error","resize","embedded"];return p.MAX_RESIZE_WIDTH=6500,p.MAX_RESIZE_HEIGHT=6500,p.prototype=c.instance,p}),i(D,[u,p,g,d],function(e,t,n,i){function r(t){var r=this,s=n.capTest,u=n.capTrue,c=e.extend({access_binary:s(window.FileReader||window.File&&window.File.getAsDataURL),access_image_binary:function(){return r.can("access_binary")&&!!a.Image},display_media:s(i.can("create_canvas")||i.can("use_data_uri_over32kb")),do_cors:s(window.XMLHttpRequest&&"withCredentials"in new XMLHttpRequest),drag_and_drop:s(function(){var e=document.createElement("div");return("draggable"in e||"ondragstart"in e&&"ondrop"in e)&&("IE"!==i.browser||i.version>9)}()),filter_by_extension:s(function(){return"Chrome"===i.browser&&i.version>=28||"IE"===i.browser&&i.version>=10}()),return_response_headers:u,return_response_type:function(e){return"json"===e&&window.JSON?!0:i.can("return_response_type",e)},return_status_code:u,report_upload_progress:s(window.XMLHttpRequest&&(new XMLHttpRequest).upload),resize_image:function(){return r.can("access_binary")&&i.can("create_canvas")},select_file:function(){return i.can("use_fileinput")&&window.File},select_folder:function(){return r.can("select_file")&&"Chrome"===i.browser&&i.version>=21},select_multiple:function(){return!(!r.can("select_file")||"Safari"===i.browser&&"Windows"===i.os||"iOS"===i.os&&i.verComp(i.osVersion,"7.0.4","<"))},send_binary_string:s(window.XMLHttpRequest&&((new XMLHttpRequest).sendAsBinary||window.Uint8Array&&window.ArrayBuffer)),send_custom_headers:s(window.XMLHttpRequest),send_multipart:function(){return!!(window.XMLHttpRequest&&(new XMLHttpRequest).upload&&window.FormData)||r.can("send_binary_string")},slice_blob:s(window.File&&(File.prototype.mozSlice||File.prototype.webkitSlice||File.prototype.slice)),stream_upload:function(){return r.can("slice_blob")&&r.can("send_multipart")},summon_file_dialog:s(function(){return"Firefox"===i.browser&&i.version>=4||"Opera"===i.browser&&i.version>=12||"IE"===i.browser&&i.version>=10||!!~e.inArray(i.browser,["Chrome","Safari"])}()),upload_filesize:u},arguments[2]);n.call(this,t,arguments[1]||o,c),e.extend(this,{init:function(){this.trigger("Init")},destroy:function(e){return function(){e.call(r),e=r=null}}(this.destroy)}),e.extend(this.getShim(),a)}var o="html5",a={};return n.addConstructor(o,r),a}),i(N,[D,y],function(e,t){function n(){function e(e,t,n){var i;if(!window.File.prototype.slice)return(i=window.File.prototype.webkitSlice||window.File.prototype.mozSlice)?i.call(e,t,n):null;try{return e.slice(),e.slice(t,n)}catch(r){return e.slice(t,n-t)}}this.slice=function(){return new t(this.getRuntime().uid,e.apply(this,arguments))}}return e.Blob=n}),i(L,[u],function(e){function t(){this.returnValue=!1}function n(){this.cancelBubble=!0}var i={},r="moxie_"+e.guid(),o=function(o,a,s,u){var c,l;a=a.toLowerCase(),o.addEventListener?(c=s,o.addEventListener(a,c,!1)):o.attachEvent&&(c=function(){var e=window.event;e.target||(e.target=e.srcElement),e.preventDefault=t,e.stopPropagation=n,s(e)},o.attachEvent("on"+a,c)),o[r]||(o[r]=e.guid()),i.hasOwnProperty(o[r])||(i[o[r]]={}),l=i[o[r]],l.hasOwnProperty(a)||(l[a]=[]),l[a].push({func:c,orig:s,key:u})},a=function(t,n,o){var a,s;if(n=n.toLowerCase(),t[r]&&i[t[r]]&&i[t[r]][n]){a=i[t[r]][n];for(var u=a.length-1;u>=0&&(a[u].orig!==o&&a[u].key!==o||(t.removeEventListener?t.removeEventListener(n,a[u].func,!1):t.detachEvent&&t.detachEvent("on"+n,a[u].func),a[u].orig=null,a[u].func=null,a.splice(u,1),o===s));u--);if(a.length||delete i[t[r]][n],e.isEmptyObj(i[t[r]])){delete i[t[r]];try{delete t[r]}catch(c){t[r]=s}}}},s=function(t,n){t&&t[r]&&e.each(i[t[r]],function(e,i){a(t,i,n)})};return{addEvent:o,removeEvent:a,removeAllEvents:s}}),i(M,[D,u,f,L,l,d],function(e,t,n,i,r,o){function a(){var e=[],a;t.extend(this,{init:function(s){var u=this,c=u.getRuntime(),l,d,f,p,h,m;a=s,e=[],f=a.accept.mimes||r.extList2mimes(a.accept,c.can("filter_by_extension")),d=c.getShimContainer(),d.innerHTML='<input id="'+c.uid+'" type="file" style="font-size:999px;opacity:0;"'+(a.multiple&&c.can("select_multiple")?"multiple":"")+(a.directory&&c.can("select_folder")?"webkitdirectory directory":"")+(f?' accept="'+f.join(",")+'"':"")+" />",l=n.get(c.uid),t.extend(l.style,{position:"absolute",top:0,left:0,width:"100%",height:"100%"}),p=n.get(a.browse_button),c.can("summon_file_dialog")&&("static"===n.getStyle(p,"position")&&(p.style.position="relative"),h=parseInt(n.getStyle(p,"z-index"),10)||1,p.style.zIndex=h,d.style.zIndex=h-1,i.addEvent(p,"click",function(e){var t=n.get(c.uid);t&&!t.disabled&&t.click(),e.preventDefault()},u.uid)),m=c.can("summon_file_dialog")?p:d,i.addEvent(m,"mouseover",function(){u.trigger("mouseenter")},u.uid),i.addEvent(m,"mouseout",function(){u.trigger("mouseleave")},u.uid),i.addEvent(m,"mousedown",function(){u.trigger("mousedown")},u.uid),i.addEvent(n.get(a.container),"mouseup",function(){u.trigger("mouseup")},u.uid),l.onchange=function g(){if(e=[],a.directory?t.each(this.files,function(t){"."!==t.name&&e.push(t)}):e=[].slice.call(this.files),"IE"!==o.browser)this.value="";else{var n=this.cloneNode(!0);this.parentNode.replaceChild(n,this),n.onchange=g}u.trigger("change")},u.trigger({type:"ready",async:!0}),d=null},getFiles:function(){return e},disable:function(e){var t=this.getRuntime(),i;(i=n.get(t.uid))&&(i.disabled=!!e)},destroy:function(){var t=this.getRuntime(),r=t.getShim(),o=t.getShimContainer();i.removeAllEvents(o,this.uid),i.removeAllEvents(a&&n.get(a.container),this.uid),i.removeAllEvents(a&&n.get(a.browse_button),this.uid),o&&(o.innerHTML=""),r.removeInstance(this.uid),e=a=o=r=null}})}return e.FileInput=a}),i(C,[D,u,f,L,l],function(e,t,n,i,r){function o(){function e(e){for(var n=[],i=0;i<e.length;i++)[].push.apply(n,e[i].extensions.split(/\s*,\s*/));return-1===t.inArray("*",n)?n:[]}function o(e){var n=r.getFileExtension(e.name);return!n||!d.length||-1!==t.inArray(n,d)}function a(e,n){var i=[];t.each(e,function(e){var t=e.webkitGetAsEntry();if(t)if(t.isFile){var n=e.getAsFile();o(n)&&l.push(n)}else i.push(t)}),i.length?s(i,n):n()}function s(e,n){var i=[];t.each(e,function(e){i.push(function(t){u(e,t)})}),t.inSeries(i,function(){n()})}function u(e,t){e.isFile?e.file(function(e){o(e)&&l.push(e),t()},function(){t()}):e.isDirectory?c(e,t):t()}function c(e,t){function n(e){r.readEntries(function(t){t.length?([].push.apply(i,t),n(e)):e()},e)}var i=[],r=e.createReader();n(function(){s(i,t)})}var l=[],d=[],f;t.extend(this,{init:function(n){var r=this,s;f=n,d=e(f.accept),s=f.container,i.addEvent(s,"dragover",function(e){e.preventDefault(),e.stopPropagation(),e.dataTransfer.dropEffect="copy"},r.uid),i.addEvent(s,"drop",function(e){e.preventDefault(),e.stopPropagation(),l=[],e.dataTransfer.items&&e.dataTransfer.items[0].webkitGetAsEntry?a(e.dataTransfer.items,function(){r.trigger("drop")}):(t.each(e.dataTransfer.files,function(e){o(e)&&l.push(e)}),r.trigger("drop"))},r.uid),i.addEvent(s,"dragenter",function(e){e.preventDefault(),e.stopPropagation(),r.trigger("dragenter")},r.uid),i.addEvent(s,"dragleave",function(e){e.preventDefault(),e.stopPropagation(),r.trigger("dragleave")},r.uid)},getFiles:function(){return l},destroy:function(){i.removeAllEvents(f&&n.get(f.container),this.uid),l=d=f=null}})}return e.FileDrop=o}),i(F,[D,m,u],function(e,t,n){function i(){function e(e){return t.atob(e.substring(e.indexOf("base64,")+7))}var i,r=!1;n.extend(this,{read:function(e,t){var o=this;i=new window.FileReader,i.addEventListener("progress",function(e){o.trigger(e)}),i.addEventListener("load",function(e){o.trigger(e)}),i.addEventListener("error",function(e){o.trigger(e,i.error)}),i.addEventListener("loadend",function(){i=null}),"function"===n.typeOf(i[e])?(r=!1,i[e](t.getSource())):"readAsBinaryString"===e&&(r=!0,i.readAsDataURL(t.getSource()))},getResult:function(){return i&&i.result?r?e(i.result):i.result:null},abort:function(){i&&i.abort()},destroy:function(){i=null}})}return e.FileReader=i}),i(H,[D,u,l,b,w,y,S,p,d],function(e,t,n,i,r,o,a,s,u){function c(){function e(e,t){var n=this,i,r;i=t.getBlob().getSource(),r=new window.FileReader,r.onload=function(){t.append(t.getBlobName(),new o(null,{type:i.type,data:r.result})),f.send.call(n,e,t)},r.readAsBinaryString(i)}function c(){return!window.XMLHttpRequest||"IE"===u.browser&&u.version<8?function(){for(var e=["Msxml2.XMLHTTP.6.0","Microsoft.XMLHTTP"],t=0;t<e.length;t++)try{return new ActiveXObject(e[t])}catch(n){}}():new window.XMLHttpRequest}function l(e){var t=e.responseXML,n=e.responseText;return"IE"===u.browser&&n&&t&&!t.documentElement&&/[^\/]+\/[^\+]+\+xml/.test(e.getResponseHeader("Content-Type"))&&(t=new window.ActiveXObject("Microsoft.XMLDOM"),t.async=!1,t.validateOnParse=!1,t.loadXML(n)),t&&("IE"===u.browser&&0!==t.parseError||!t.documentElement||"parsererror"===t.documentElement.tagName)?null:t}function d(e){var t="----moxieboundary"+(new Date).getTime(),n="--",i="\r\n",r="",a=this.getRuntime();if(!a.can("send_binary_string"))throw new s.RuntimeError(s.RuntimeError.NOT_SUPPORTED_ERR);return p.setRequestHeader("Content-Type","multipart/form-data; boundary="+t),e.each(function(e,a){r+=e instanceof o?n+t+i+'Content-Disposition: form-data; name="'+a+'"; filename="'+unescape(encodeURIComponent(e.name||"blob"))+'"'+i+"Content-Type: "+(e.type||"application/octet-stream")+i+i+e.getSource()+i:n+t+i+'Content-Disposition: form-data; name="'+a+'"'+i+i+unescape(encodeURIComponent(e))+i}),r+=n+t+n+i}var f=this,p,h;t.extend(this,{send:function(n,r){var s=this,l="Mozilla"===u.browser&&u.version>=4&&u.version<7,f="Android Browser"===u.browser,m=!1;if(h=n.url.replace(/^.+?\/([\w\-\.]+)$/,"$1").toLowerCase(),p=c(),p.open(n.method,n.url,n.async,n.user,n.password),r instanceof o)r.isDetached()&&(m=!0),r=r.getSource();else if(r instanceof a){if(r.hasBlob())if(r.getBlob().isDetached())r=d.call(s,r),m=!0;else if((l||f)&&"blob"===t.typeOf(r.getBlob().getSource())&&window.FileReader)return e.call(s,n,r),void 0;if(r instanceof a){var g=new window.FormData;r.each(function(e,t){e instanceof o?g.append(t,e.getSource()):g.append(t,e)}),r=g}}p.upload?(n.withCredentials&&(p.withCredentials=!0),p.addEventListener("load",function(e){s.trigger(e)}),p.addEventListener("error",function(e){s.trigger(e)}),p.addEventListener("progress",function(e){s.trigger(e)}),p.upload.addEventListener("progress",function(e){s.trigger({type:"UploadProgress",loaded:e.loaded,total:e.total})})):p.onreadystatechange=function v(){switch(p.readyState){case 1:break;case 2:break;case 3:var e,t;try{i.hasSameOrigin(n.url)&&(e=p.getResponseHeader("Content-Length")||0),p.responseText&&(t=p.responseText.length)}catch(r){e=t=0}s.trigger({type:"progress",lengthComputable:!!e,total:parseInt(e,10),loaded:t});break;case 4:p.onreadystatechange=function(){},0===p.status?s.trigger("error"):s.trigger("load")}},t.isEmptyObj(n.headers)||t.each(n.headers,function(e,t){p.setRequestHeader(t,e)}),""!==n.responseType&&"responseType"in p&&(p.responseType="json"!==n.responseType||u.can("return_response_type","json")?n.responseType:"text"),m?p.sendAsBinary?p.sendAsBinary(r):function(){for(var e=new Uint8Array(r.length),t=0;t<r.length;t++)e[t]=255&r.charCodeAt(t);p.send(e.buffer)}():p.send(r),s.trigger("loadstart")},getStatus:function(){try{if(p)return p.status}catch(e){}return 0},getResponse:function(e){var t=this.getRuntime();try{switch(e){case"blob":var i=new r(t.uid,p.response),o=p.getResponseHeader("Content-Disposition");if(o){var a=o.match(/filename=([\'\"'])([^\1]+)\1/);a&&(h=a[2])}return i.name=h,i.type||(i.type=n.getFileMime(h)),i;case"json":return u.can("return_response_type","json")?p.response:200===p.status&&window.JSON?JSON.parse(p.responseText):null;case"document":return l(p);default:return""!==p.responseText?p.responseText:null}}catch(s){return null}},getAllResponseHeaders:function(){try{return p.getAllResponseHeaders()}catch(e){}return""},abort:function(){p&&p.abort()},destroy:function(){f=h=null}})}return e.XMLHttpRequest=c}),i(P,[],function(){return function(){function e(e,t){var n=r?0:-8*(t-1),i=0,a;for(a=0;t>a;a++)i|=o.charCodeAt(e+a)<<Math.abs(n+8*a);return i}function n(e,t,n){n=3===arguments.length?n:o.length-t-1,o=o.substr(0,t)+e+o.substr(n+t)}function i(e,t,i){var o="",a=r?0:-8*(i-1),s;for(s=0;i>s;s++)o+=String.fromCharCode(255&t>>Math.abs(a+8*s));n(o,e,i)}var r=!1,o;return{II:function(e){return e===t?r:(r=e,void 0)},init:function(e){r=!1,o=e},SEGMENT:function(e,t,i){switch(arguments.length){case 1:return o.substr(e,o.length-e-1);case 2:return o.substr(e,t);case 3:n(i,e,t);break;default:return o}},BYTE:function(t){return e(t,1)},SHORT:function(t){return e(t,2)},LONG:function(n,r){return r===t?e(n,4):(i(n,r,4),void 0)},SLONG:function(t){var n=e(t,4);return n>2147483647?n-4294967296:n},STRING:function(t,n){var i="";for(n+=t;n>t;t++)i+=String.fromCharCode(e(t,1));return i}}}}),i(k,[P],function(e){return function t(n){var i=[],r,o,a,s=0;if(r=new e,r.init(n),65496===r.SHORT(0)){for(o=2;o<=n.length;)if(a=r.SHORT(o),a>=65488&&65495>=a)o+=2;else{if(65498===a||65497===a)break;s=r.SHORT(o+2)+2,a>=65505&&65519>=a&&i.push({hex:a,name:"APP"+(15&a),start:o,length:s,segment:r.SEGMENT(o,s)}),o+=s}return r.init(null),{headers:i,restore:function(e){var t,n;for(r.init(e),o=65504==r.SHORT(2)?4+r.SHORT(4):2,n=0,t=i.length;t>n;n++)r.SEGMENT(o,0,i[n].segment),o+=i[n].length;return e=r.SEGMENT(),r.init(null),e},strip:function(e){var n,i,o;for(i=new t(e),n=i.headers,i.purge(),r.init(e),o=n.length;o--;)r.SEGMENT(n[o].start,n[o].length,"");return e=r.SEGMENT(),r.init(null),e},get:function(e){for(var t=[],n=0,r=i.length;r>n;n++)i[n].name===e.toUpperCase()&&t.push(i[n].segment);return t},set:function(e,t){var n=[],r,o,a;for("string"==typeof t?n.push(t):n=t,r=o=0,a=i.length;a>r&&(i[r].name===e.toUpperCase()&&(i[r].segment=n[o],i[r].length=n[o].length,o++),!(o>=n.length));r++);},purge:function(){i=[],r.init(null),r=null}}}}}),i(U,[u,P],function(e,n){return function i(){function i(e,n){var i=a.SHORT(e),r,o,s,u,d,f,p,h,m=[],g={};for(r=0;i>r;r++)if(p=f=e+12*r+2,s=n[a.SHORT(p)],s!==t){switch(u=a.SHORT(p+=2),d=a.LONG(p+=2),p+=4,m=[],u){case 1:case 7:for(d>4&&(p=a.LONG(p)+c.tiffHeader),o=0;d>o;o++)m[o]=a.BYTE(p+o);break;case 2:d>4&&(p=a.LONG(p)+c.tiffHeader),g[s]=a.STRING(p,d-1);continue;case 3:for(d>2&&(p=a.LONG(p)+c.tiffHeader),o=0;d>o;o++)m[o]=a.SHORT(p+2*o);break;case 4:for(d>1&&(p=a.LONG(p)+c.tiffHeader),o=0;d>o;o++)m[o]=a.LONG(p+4*o);break;case 5:for(p=a.LONG(p)+c.tiffHeader,o=0;d>o;o++)m[o]=a.LONG(p+4*o)/a.LONG(p+4*o+4);break;case 9:for(p=a.LONG(p)+c.tiffHeader,o=0;d>o;o++)m[o]=a.SLONG(p+4*o);break;case 10:for(p=a.LONG(p)+c.tiffHeader,o=0;d>o;o++)m[o]=a.SLONG(p+4*o)/a.SLONG(p+4*o+4);break;default:continue}h=1==d?m[0]:m,g[s]=l.hasOwnProperty(s)&&"object"!=typeof h?l[s][h]:h}return g}function r(){var e=c.tiffHeader;return a.II(18761==a.SHORT(e)),42!==a.SHORT(e+=2)?!1:(c.IFD0=c.tiffHeader+a.LONG(e+=2),u=i(c.IFD0,s.tiff),"ExifIFDPointer"in u&&(c.exifIFD=c.tiffHeader+u.ExifIFDPointer,delete u.ExifIFDPointer),"GPSInfoIFDPointer"in u&&(c.gpsIFD=c.tiffHeader+u.GPSInfoIFDPointer,delete u.GPSInfoIFDPointer),!0)}function o(e,t,n){var i,r,o,u=0;if("string"==typeof t){var l=s[e.toLowerCase()];for(var d in l)if(l[d]===t){t=d;break}}i=c[e.toLowerCase()+"IFD"],r=a.SHORT(i);for(var f=0;r>f;f++)if(o=i+12*f+2,a.SHORT(o)==t){u=o+8;break}return u?(a.LONG(u,n),!0):!1}var a,s,u,c={},l;return a=new n,s={tiff:{274:"Orientation",270:"ImageDescription",271:"Make",272:"Model",305:"Software",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer"},exif:{36864:"ExifVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",36867:"DateTimeOriginal",33434:"ExposureTime",33437:"FNumber",34855:"ISOSpeedRatings",37377:"ShutterSpeedValue",37378:"ApertureValue",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37386:"FocalLength",41986:"ExposureMode",41987:"WhiteBalance",41990:"SceneCaptureType",41988:"DigitalZoomRatio",41992:"Contrast",41993:"Saturation",41994:"Sharpness"},gps:{0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude"}},l={ColorSpace:{1:"sRGB",0:"Uncalibrated"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{1:"Daylight",2:"Fliorescent",3:"Tungsten",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 -5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire.",1:"Flash fired.",5:"Strobe return light not detected.",7:"Strobe return light detected.",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},ExposureMode:{0:"Auto exposure",1:"Manual exposure",2:"Auto bracket"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},GPSLatitudeRef:{N:"North latitude",S:"South latitude"},GPSLongitudeRef:{E:"East longitude",W:"West longitude"}},{init:function(e){return c={tiffHeader:10},e!==t&&e.length?(a.init(e),65505===a.SHORT(0)&&"EXIF\0"===a.STRING(4,5).toUpperCase()?r():!1):!1
},TIFF:function(){return u},EXIF:function(){var t;if(t=i(c.exifIFD,s.exif),t.ExifVersion&&"array"===e.typeOf(t.ExifVersion)){for(var n=0,r="";n<t.ExifVersion.length;n++)r+=String.fromCharCode(t.ExifVersion[n]);t.ExifVersion=r}return t},GPS:function(){var t;return t=i(c.gpsIFD,s.gps),t.GPSVersionID&&"array"===e.typeOf(t.GPSVersionID)&&(t.GPSVersionID=t.GPSVersionID.join(".")),t},setExif:function(e,t){return"PixelXDimension"!==e&&"PixelYDimension"!==e?!1:o("exif",e,t)},getBinary:function(){return a.SEGMENT()},purge:function(){a.init(null),a=u=null,c={}}}}}),i(B,[u,p,k,P,U],function(e,t,n,i,r){function o(o){function a(){for(var e=0,t,n;e<=u.length;){if(t=c.SHORT(e+=2),t>=65472&&65475>=t)return e+=5,{height:c.SHORT(e),width:c.SHORT(e+=2)};n=c.SHORT(e+=2),e+=n-2}return null}function s(){d&&l&&c&&(d.purge(),l.purge(),c.init(null),u=f=l=d=c=null)}var u,c,l,d,f,p;if(u=o,c=new i,c.init(u),65496!==c.SHORT(0))throw new t.ImageError(t.ImageError.WRONG_FORMAT);l=new n(o),d=new r,p=!!d.init(l.get("app1")[0]),f=a.call(this),e.extend(this,{type:"image/jpeg",size:u.length,width:f&&f.width||0,height:f&&f.height||0,setExif:function(t,n){return p?("object"===e.typeOf(t)?e.each(t,function(e,t){d.setExif(t,e)}):d.setExif(t,n),l.set("app1",d.getBinary()),void 0):!1},writeHeaders:function(){return arguments.length?l.restore(arguments[0]):u=l.restore(u)},stripHeaders:function(e){return l.strip(e)},purge:function(){s.call(this)}}),p&&(this.meta={tiff:d.TIFF(),exif:d.EXIF(),gps:d.GPS()})}return o}),i(z,[p,u,P],function(e,t,n){function i(i){function r(){var e,t;return e=a.call(this,8),"IHDR"==e.type?(t=e.start,{width:u.LONG(t),height:u.LONG(t+=4)}):null}function o(){u&&(u.init(null),s=d=c=l=u=null)}function a(e){var t,n,i,r;return t=u.LONG(e),n=u.STRING(e+=4,4),i=e+=4,r=u.LONG(e+t),{length:t,type:n,start:i,CRC:r}}var s,u,c,l,d;s=i,u=new n,u.init(s),function(){var t=0,n=0,i=[35152,20039,3338,6666];for(n=0;n<i.length;n++,t+=2)if(i[n]!=u.SHORT(t))throw new e.ImageError(e.ImageError.WRONG_FORMAT)}(),d=r.call(this),t.extend(this,{type:"image/png",size:s.length,width:d.width,height:d.height,purge:function(){o.call(this)}}),o.call(this)}return i}),i(G,[u,p,B,z],function(e,t,n,i){return function(r){var o=[n,i],a;a=function(){for(var e=0;e<o.length;e++)try{return new o[e](r)}catch(n){}throw new t.ImageError(t.ImageError.WRONG_FORMAT)}(),e.extend(this,{type:"",size:0,width:0,height:0,setExif:function(){},writeHeaders:function(e){return e},stripHeaders:function(e){return e},purge:function(){}}),e.extend(this,a),this.purge=function(){a.purge(),a=null}}}),i(q,[],function(){function e(e,i,r){var o=e.naturalWidth,a=e.naturalHeight,s=r.width,u=r.height,c=r.x||0,l=r.y||0,d=i.getContext("2d");t(e)&&(o/=2,a/=2);var f=1024,p=document.createElement("canvas");p.width=p.height=f;for(var h=p.getContext("2d"),m=n(e,o,a),g=0;a>g;){for(var v=g+f>a?a-g:f,y=0;o>y;){var w=y+f>o?o-y:f;h.clearRect(0,0,f,f),h.drawImage(e,-y,-g);var E=y*s/o+c<<0,_=Math.ceil(w*s/o),x=g*u/a/m+l<<0,R=Math.ceil(v*u/a/m);d.drawImage(p,0,0,w,v,E,x,_,R),y+=f}g+=f}p=h=null}function t(e){var t=e.naturalWidth,n=e.naturalHeight;if(t*n>1048576){var i=document.createElement("canvas");i.width=i.height=1;var r=i.getContext("2d");return r.drawImage(e,-t+1,0),0===r.getImageData(0,0,1,1).data[3]}return!1}function n(e,t,n){var i=document.createElement("canvas");i.width=1,i.height=n;var r=i.getContext("2d");r.drawImage(e,0,0);for(var o=r.getImageData(0,0,1,n).data,a=0,s=n,u=n;u>a;){var c=o[4*(u-1)+3];0===c?s=u:a=u,u=s+a>>1}i=null;var l=u/n;return 0===l?1:l}return{isSubsampled:t,renderTo:e}}),i(X,[D,u,p,m,w,G,q,l,d],function(e,t,n,i,r,o,a,s,u){function c(){function e(){if(!E&&!y)throw new n.ImageError(n.DOMException.INVALID_STATE_ERR);return E||y}function c(e){return i.atob(e.substring(e.indexOf("base64,")+7))}function l(e,t){return"data:"+(t||"")+";base64,"+i.btoa(e)}function d(e){var t=this;y=new Image,y.onerror=function(){g.call(this),t.trigger("error",new n.ImageError(n.ImageError.WRONG_FORMAT))},y.onload=function(){t.trigger("load")},y.src=/^data:[^;]*;base64,/.test(e)?e:l(e,x.type)}function f(e,t){var i=this,r;return window.FileReader?(r=new FileReader,r.onload=function(){t(this.result)},r.onerror=function(){i.trigger("error",new n.FileException(n.FileException.NOT_READABLE_ERR))},r.readAsDataURL(e),void 0):t(e.getAsDataURL())}function p(n,i,r,o){var a=this,s,u,c=0,l=0,d,f,p,g;if(b=o,g=this.meta&&this.meta.tiff&&this.meta.tiff.Orientation||1,-1!==t.inArray(g,[5,6,7,8])){var v=n;n=i,i=v}return d=e(),u=r?Math.max:Math.min,s=u(n/d.width,i/d.height),s>1&&(!r||o)?(this.trigger("Resize"),void 0):(E||(E=document.createElement("canvas")),f=Math.round(d.width*s),p=Math.round(d.height*s),r?(E.width=n,E.height=i,f>n&&(c=Math.round((f-n)/2)),p>i&&(l=Math.round((p-i)/2))):(E.width=f,E.height=p),b||m(E.width,E.height,g),h.call(this,d,E,-c,-l,f,p),this.width=E.width,this.height=E.height,R=!0,a.trigger("Resize"),void 0)}function h(e,t,n,i,r,o){if("iOS"===u.OS)a.renderTo(e,t,{width:r,height:o,x:n,y:i});else{var s=t.getContext("2d");s.drawImage(e,n,i,r,o)}}function m(e,t,n){switch(n){case 5:case 6:case 7:case 8:E.width=t,E.height=e;break;default:E.width=e,E.height=t}var i=E.getContext("2d");switch(n){case 2:i.translate(e,0),i.scale(-1,1);break;case 3:i.translate(e,t),i.rotate(Math.PI);break;case 4:i.translate(0,t),i.scale(1,-1);break;case 5:i.rotate(.5*Math.PI),i.scale(1,-1);break;case 6:i.rotate(.5*Math.PI),i.translate(0,-t);break;case 7:i.rotate(.5*Math.PI),i.translate(e,-t),i.scale(-1,1);break;case 8:i.rotate(-.5*Math.PI),i.translate(-e,0)}}function g(){w&&(w.purge(),w=null),_=y=E=x=null,R=!1}var v=this,y,w,E,_,x,R=!1,b=!0;t.extend(this,{loadFromBlob:function(e){var t=this,i=t.getRuntime(),r=arguments.length>1?arguments[1]:!0;if(!i.can("access_binary"))throw new n.RuntimeError(n.RuntimeError.NOT_SUPPORTED_ERR);return x=e,e.isDetached()?(_=e.getSource(),d.call(this,_),void 0):(f.call(this,e.getSource(),function(e){r&&(_=c(e)),d.call(t,e)}),void 0)},loadFromImage:function(e,t){this.meta=e.meta,x=new r(null,{name:e.name,size:e.size,type:e.type}),d.call(this,t?_=e.getAsBinaryString():e.getAsDataURL())},getInfo:function(){var t=this.getRuntime(),n;return!w&&_&&t.can("access_image_binary")&&(w=new o(_)),n={width:e().width||0,height:e().height||0,type:x.type||s.getFileMime(x.name),size:_&&_.length||x.size||0,name:x.name||"",meta:w&&w.meta||this.meta||{}}},downsize:function(){p.apply(this,arguments)},getAsCanvas:function(){return E&&(E.id=this.uid+"_canvas"),E},getAsBlob:function(e,t){return e!==this.type&&p.call(this,this.width,this.height,!1),new r(null,{name:x.name||"",type:e,data:v.getAsBinaryString.call(this,e,t)})},getAsDataURL:function(e){var t=arguments[1]||90;if(!R)return y.src;if("image/jpeg"!==e)return E.toDataURL("image/png");try{return E.toDataURL("image/jpeg",t/100)}catch(n){return E.toDataURL("image/jpeg")}},getAsBinaryString:function(e,t){if(!R)return _||(_=c(v.getAsDataURL(e,t))),_;if("image/jpeg"!==e)_=c(v.getAsDataURL(e,t));else{var n;t||(t=90);try{n=E.toDataURL("image/jpeg",t/100)}catch(i){n=E.toDataURL("image/jpeg")}_=c(n),w&&(_=w.stripHeaders(_),b&&(w.meta&&w.meta.exif&&w.setExif({PixelXDimension:this.width,PixelYDimension:this.height}),_=w.writeHeaders(_)),w.purge(),w=null)}return R=!1,_},destroy:function(){v=null,g.call(this),this.getRuntime().getShim().removeInstance(this.uid)}})}return e.Image=c}),i(j,[u,d,f,p,g],function(e,t,n,i,r){function o(){var e;try{e=navigator.plugins["Shockwave Flash"],e=e.description}catch(t){try{e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version")}catch(n){e="0.0"}}return e=e.match(/\d+/g),parseFloat(e[0]+"."+e[1])}function a(a){var c=this,l;a=e.extend({swf_url:t.swf_url},a),r.call(this,a,s,{access_binary:function(e){return e&&"browser"===c.mode},access_image_binary:function(e){return e&&"browser"===c.mode},display_media:r.capTrue,do_cors:r.capTrue,drag_and_drop:!1,report_upload_progress:function(){return"client"===c.mode},resize_image:r.capTrue,return_response_headers:!1,return_response_type:function(t){return"json"===t&&window.JSON?!0:!e.arrayDiff(t,["","text","document"])||"browser"===c.mode},return_status_code:function(t){return"browser"===c.mode||!e.arrayDiff(t,[200,404])},select_file:r.capTrue,select_multiple:r.capTrue,send_binary_string:function(e){return e&&"browser"===c.mode},send_browser_cookies:function(e){return e&&"browser"===c.mode},send_custom_headers:function(e){return e&&"browser"===c.mode},send_multipart:r.capTrue,slice_blob:r.capTrue,stream_upload:function(e){return e&&"browser"===c.mode},summon_file_dialog:!1,upload_filesize:function(t){return e.parseSizeStr(t)<=2097152||"client"===c.mode},use_http_method:function(t){return!e.arrayDiff(t,["GET","POST"])}},{access_binary:function(e){return e?"browser":"client"},access_image_binary:function(e){return e?"browser":"client"},report_upload_progress:function(e){return e?"browser":"client"},return_response_type:function(t){return e.arrayDiff(t,["","text","json","document"])?"browser":["client","browser"]},return_status_code:function(t){return e.arrayDiff(t,[200,404])?"browser":["client","browser"]},send_binary_string:function(e){return e?"browser":"client"},send_browser_cookies:function(e){return e?"browser":"client"},send_custom_headers:function(e){return e?"browser":"client"},stream_upload:function(e){return e?"client":"browser"},upload_filesize:function(t){return e.parseSizeStr(t)>=2097152?"client":"browser"}},"client"),o()<10&&(this.mode=!1),e.extend(this,{getShim:function(){return n.get(this.uid)},shimExec:function(e,t){var n=[].slice.call(arguments,2);return c.getShim().exec(this.uid,e,t,n)},init:function(){var n,r,o;o=this.getShimContainer(),e.extend(o.style,{position:"absolute",top:"-8px",left:"-8px",width:"9px",height:"9px",overflow:"hidden"}),n='<object id="'+this.uid+'" type="application/x-shockwave-flash" data="'+a.swf_url+'" ',"IE"===t.browser&&(n+='classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" '),n+='width="100%" height="100%" style="outline:0"><param name="movie" value="'+a.swf_url+'" />'+'<param name="flashvars" value="uid='+escape(this.uid)+"&target="+t.global_event_dispatcher+'" />'+'<param name="wmode" value="transparent" />'+'<param name="allowscriptaccess" value="always" />'+"</object>","IE"===t.browser?(r=document.createElement("div"),o.appendChild(r),r.outerHTML=n,r=o=null):o.innerHTML=n,l=setTimeout(function(){c&&!c.initialized&&c.trigger("Error",new i.RuntimeError(i.RuntimeError.NOT_INIT_ERR))},5e3)},destroy:function(e){return function(){e.call(c),clearTimeout(l),a=l=e=c=null}}(this.destroy)},u)}var s="flash",u={};return r.addConstructor(s,a),u}),i(V,[j,y],function(e,t){var n={slice:function(e,n,i,r){var o=this.getRuntime();return 0>n?n=Math.max(e.size+n,0):n>0&&(n=Math.min(n,e.size)),0>i?i=Math.max(e.size+i,0):i>0&&(i=Math.min(i,e.size)),e=o.shimExec.call(this,"Blob","slice",n,i,r||""),e&&(e=new t(o.uid,e)),e}};return e.Blob=n}),i(W,[j],function(e){var t={init:function(e){this.getRuntime().shimExec.call(this,"FileInput","init",{name:e.name,accept:e.accept,multiple:e.multiple}),this.trigger("ready")}};return e.FileInput=t}),i(Y,[j,m],function(e,t){function n(e,n){switch(n){case"readAsText":return t.atob(e,"utf8");case"readAsBinaryString":return t.atob(e);case"readAsDataURL":return e}return null}var i="",r={read:function(e,t){var r=this,o=r.getRuntime();return"readAsDataURL"===e&&(i="data:"+(t.type||"")+";base64,"),r.bind("Progress",function(t,r){r&&(i+=n(r,e))}),o.shimExec.call(this,"FileReader","readAsBase64",t.uid)},getResult:function(){return i},destroy:function(){i=null}};return e.FileReader=r}),i($,[j,m],function(e,t){function n(e,n){switch(n){case"readAsText":return t.atob(e,"utf8");case"readAsBinaryString":return t.atob(e);case"readAsDataURL":return e}return null}var i={read:function(e,t){var i,r=this.getRuntime();return(i=r.shimExec.call(this,"FileReaderSync","readAsBase64",t.uid))?("readAsDataURL"===e&&(i="data:"+(t.type||"")+";base64,"+i),n(i,e,t.type)):null}};return e.FileReaderSync=i}),i(J,[j,u,y,w,T,S,O],function(e,t,n,i,r,o,a){var s={send:function(e,i){function r(){e.transport=l.mode,l.shimExec.call(c,"XMLHttpRequest","send",e,i)}function s(e,t){l.shimExec.call(c,"XMLHttpRequest","appendBlob",e,t.uid),i=null,r()}function u(e,t){var n=new a;n.bind("TransportingComplete",function(){t(this.result)}),n.transport(e.getSource(),e.type,{ruid:l.uid})}var c=this,l=c.getRuntime();if(t.isEmptyObj(e.headers)||t.each(e.headers,function(e,t){l.shimExec.call(c,"XMLHttpRequest","setRequestHeader",t,e.toString())}),i instanceof o){var d;if(i.each(function(e,t){e instanceof n?d=t:l.shimExec.call(c,"XMLHttpRequest","append",t,e)}),i.hasBlob()){var f=i.getBlob();f.isDetached()?u(f,function(e){f.destroy(),s(d,e)}):s(d,f)}else i=null,r()}else i instanceof n?i.isDetached()?u(i,function(e){i.destroy(),i=e.uid,r()}):(i=i.uid,r()):r()},getResponse:function(e){var n,o,a=this.getRuntime();if(o=a.shimExec.call(this,"XMLHttpRequest","getResponseAsBlob")){if(o=new i(a.uid,o),"blob"===e)return o;try{if(n=new r,~t.inArray(e,["","text"]))return n.readAsText(o);if("json"===e&&window.JSON)return JSON.parse(n.readAsText(o))}finally{o.destroy()}}return null},abort:function(e){var t=this.getRuntime();t.shimExec.call(this,"XMLHttpRequest","abort"),this.dispatchEvent("readystatechange"),this.dispatchEvent("abort")}};return e.XMLHttpRequest=s}),i(Z,[j,y],function(e,t){var n={getAsBlob:function(e){var n=this.getRuntime(),i=n.shimExec.call(this,"Transporter","getAsBlob",e);return i?new t(n.uid,i):null}};return e.Transporter=n}),i(K,[j,u,O,y,T],function(e,t,n,i,r){var o={loadFromBlob:function(e){function t(e){r.shimExec.call(i,"Image","loadFromBlob",e.uid),i=r=null}var i=this,r=i.getRuntime();if(e.isDetached()){var o=new n;o.bind("TransportingComplete",function(){t(o.result.getSource())}),o.transport(e.getSource(),e.type,{ruid:r.uid})}else t(e.getSource())},loadFromImage:function(e){var t=this.getRuntime();return t.shimExec.call(this,"Image","loadFromImage",e.uid)},getAsBlob:function(e,t){var n=this.getRuntime(),r=n.shimExec.call(this,"Image","getAsBlob",e,t);return r?new i(n.uid,r):null},getAsDataURL:function(){var e=this.getRuntime(),t=e.Image.getAsBlob.apply(this,arguments),n;return t?(n=new r,n.readAsDataURL(t)):null}};return e.Image=o}),i(Q,[u,d,f,p,g],function(e,t,n,i,r){function o(e){var t=!1,n=null,i,r,o,a,s,u=0;try{try{n=new ActiveXObject("AgControl.AgControl"),n.IsVersionSupported(e)&&(t=!0),n=null}catch(c){var l=navigator.plugins["Silverlight Plug-In"];if(l){for(i=l.description,"1.0.30226.2"===i&&(i="2.0.30226.2"),r=i.split(".");r.length>3;)r.pop();for(;r.length<4;)r.push(0);for(o=e.split(".");o.length>4;)o.pop();do a=parseInt(o[u],10),s=parseInt(r[u],10),u++;while(u<o.length&&a===s);s>=a&&!isNaN(a)&&(t=!0)}}}catch(d){t=!1}return t}function a(a){var c=this,l;a=e.extend({xap_url:t.xap_url},a),r.call(this,a,s,{access_binary:r.capTrue,access_image_binary:r.capTrue,display_media:r.capTrue,do_cors:r.capTrue,drag_and_drop:!1,report_upload_progress:r.capTrue,resize_image:r.capTrue,return_response_headers:function(e){return e&&"client"===c.mode},return_response_type:function(e){return"json"!==e?!0:!!window.JSON},return_status_code:function(t){return"client"===c.mode||!e.arrayDiff(t,[200,404])},select_file:r.capTrue,select_multiple:r.capTrue,send_binary_string:r.capTrue,send_browser_cookies:function(e){return e&&"browser"===c.mode},send_custom_headers:function(e){return e&&"client"===c.mode},send_multipart:r.capTrue,slice_blob:r.capTrue,stream_upload:!0,summon_file_dialog:!1,upload_filesize:r.capTrue,use_http_method:function(t){return"client"===c.mode||!e.arrayDiff(t,["GET","POST"])}},{return_response_headers:function(e){return e?"client":"browser"},return_status_code:function(t){return e.arrayDiff(t,[200,404])?"client":["client","browser"]},send_browser_cookies:function(e){return e?"browser":"client"},send_custom_headers:function(e){return e?"client":"browser"},use_http_method:function(t){return e.arrayDiff(t,["GET","POST"])?"client":["client","browser"]}}),o("2.0.31005.0")&&"Opera"!==t.browser||(this.mode=!1),e.extend(this,{getShim:function(){return n.get(this.uid).content.Moxie},shimExec:function(e,t){var n=[].slice.call(arguments,2);return c.getShim().exec(this.uid,e,t,n)},init:function(){var e;e=this.getShimContainer(),e.innerHTML='<object id="'+this.uid+'" data="data:application/x-silverlight," type="application/x-silverlight-2" width="100%" height="100%" style="outline:none;">'+'<param name="source" value="'+a.xap_url+'"/>'+'<param name="background" value="Transparent"/>'+'<param name="windowless" value="true"/>'+'<param name="enablehtmlaccess" value="true"/>'+'<param name="initParams" value="uid='+this.uid+",target="+t.global_event_dispatcher+'"/>'+"</object>",l=setTimeout(function(){c&&!c.initialized&&c.trigger("Error",new i.RuntimeError(i.RuntimeError.NOT_INIT_ERR))},"Windows"!==t.OS?1e4:5e3)},destroy:function(e){return function(){e.call(c),clearTimeout(l),a=l=e=c=null}}(this.destroy)},u)}var s="silverlight",u={};return r.addConstructor(s,a),u}),i(et,[Q,u,V],function(e,t,n){return e.Blob=t.extend({},n)}),i(tt,[Q],function(e){var t={init:function(e){function t(e){for(var t="",n=0;n<e.length;n++)t+=(""!==t?"|":"")+e[n].title+" | *."+e[n].extensions.replace(/,/g,";*.");return t}this.getRuntime().shimExec.call(this,"FileInput","init",t(e.accept),e.name,e.multiple),this.trigger("ready")}};return e.FileInput=t}),i(nt,[Q,f,L],function(e,t,n){var i={init:function(){var e=this,i=e.getRuntime(),r;return r=i.getShimContainer(),n.addEvent(r,"dragover",function(e){e.preventDefault(),e.stopPropagation(),e.dataTransfer.dropEffect="copy"},e.uid),n.addEvent(r,"dragenter",function(e){e.preventDefault();var n=t.get(i.uid).dragEnter(e);n&&e.stopPropagation()},e.uid),n.addEvent(r,"drop",function(e){e.preventDefault();var n=t.get(i.uid).dragDrop(e);n&&e.stopPropagation()},e.uid),i.shimExec.call(this,"FileDrop","init")}};return e.FileDrop=i}),i(it,[Q,u,Y],function(e,t,n){return e.FileReader=t.extend({},n)}),i(rt,[Q,u,$],function(e,t,n){return e.FileReaderSync=t.extend({},n)}),i(ot,[Q,u,J],function(e,t,n){return e.XMLHttpRequest=t.extend({},n)}),i(at,[Q,u,Z],function(e,t,n){return e.Transporter=t.extend({},n)}),i(st,[Q,u,K],function(e,t,n){return e.Image=t.extend({},n,{getInfo:function(){var e=this.getRuntime(),n=["tiff","exif","gps"],i={meta:{}},r=e.shimExec.call(this,"Image","getInfo");return r.meta&&t.each(n,function(e){var t=r.meta[e],n,o,a,s;if(t&&t.keys)for(i.meta[e]={},o=0,a=t.keys.length;a>o;o++)n=t.keys[o],s=t[n],s&&(/^(\d|[1-9]\d+)$/.test(s)?s=parseInt(s,10):/^\d*\.\d+$/.test(s)&&(s=parseFloat(s)),i.meta[e][n]=s)}),i.width=parseInt(r.width,10),i.height=parseInt(r.height,10),i.size=parseInt(r.size,10),i.type=r.type,i.name=r.name,i}})}),i(ut,[u,p,g,d],function(e,t,n,i){function r(t){var r=this,s=n.capTest,u=n.capTrue;n.call(this,t,o,{access_binary:s(window.FileReader||window.File&&File.getAsDataURL),access_image_binary:!1,display_media:s(a.Image&&(i.can("create_canvas")||i.can("use_data_uri_over32kb"))),do_cors:!1,drag_and_drop:!1,filter_by_extension:s(function(){return"Chrome"===i.browser&&i.version>=28||"IE"===i.browser&&i.version>=10}()),resize_image:function(){return a.Image&&r.can("access_binary")&&i.can("create_canvas")},report_upload_progress:!1,return_response_headers:!1,return_response_type:function(t){return"json"===t&&window.JSON?!0:!!~e.inArray(t,["text","document",""])},return_status_code:function(t){return!e.arrayDiff(t,[200,404])},select_file:function(){return i.can("use_fileinput")},select_multiple:!1,send_binary_string:!1,send_custom_headers:!1,send_multipart:!0,slice_blob:!1,stream_upload:function(){return r.can("select_file")},summon_file_dialog:s(function(){return"Firefox"===i.browser&&i.version>=4||"Opera"===i.browser&&i.version>=12||!!~e.inArray(i.browser,["Chrome","Safari"])}()),upload_filesize:u,use_http_method:function(t){return!e.arrayDiff(t,["GET","POST"])}}),e.extend(this,{init:function(){this.trigger("Init")},destroy:function(e){return function(){e.call(r),e=r=null}}(this.destroy)}),e.extend(this.getShim(),a)}var o="html4",a={};return n.addConstructor(o,r),a}),i(ct,[ut,u,f,L,l,d],function(e,t,n,i,r,o){function a(){function e(){var r=this,l=r.getRuntime(),d,f,p,h,m,g;g=t.guid("uid_"),d=l.getShimContainer(),a&&(p=n.get(a+"_form"),p&&t.extend(p.style,{top:"100%"})),h=document.createElement("form"),h.setAttribute("id",g+"_form"),h.setAttribute("method","post"),h.setAttribute("enctype","multipart/form-data"),h.setAttribute("encoding","multipart/form-data"),t.extend(h.style,{overflow:"hidden",position:"absolute",top:0,left:0,width:"100%",height:"100%"}),m=document.createElement("input"),m.setAttribute("id",g),m.setAttribute("type","file"),m.setAttribute("name",c.name||"Filedata"),m.setAttribute("accept",u.join(",")),t.extend(m.style,{fontSize:"999px",opacity:0}),h.appendChild(m),d.appendChild(h),t.extend(m.style,{position:"absolute",top:0,left:0,width:"100%",height:"100%"}),"IE"===o.browser&&o.version<10&&t.extend(m.style,{filter:"progid:DXImageTransform.Microsoft.Alpha(opacity=0)"}),m.onchange=function(){var t;this.value&&(t=this.files?this.files[0]:{name:this.value},s=[t],this.onchange=function(){},e.call(r),r.bind("change",function i(){var e=n.get(g),t=n.get(g+"_form"),o;r.unbind("change",i),r.files.length&&e&&t&&(o=r.files[0],e.setAttribute("id",o.uid),t.setAttribute("id",o.uid+"_form"),t.setAttribute("target",o.uid+"_iframe")),e=t=null},998),m=h=null,r.trigger("change"))},l.can("summon_file_dialog")&&(f=n.get(c.browse_button),i.removeEvent(f,"click",r.uid),i.addEvent(f,"click",function(e){m&&!m.disabled&&m.click(),e.preventDefault()},r.uid)),a=g,d=p=f=null}var a,s=[],u=[],c;t.extend(this,{init:function(t){var o=this,a=o.getRuntime(),s;c=t,u=t.accept.mimes||r.extList2mimes(t.accept,a.can("filter_by_extension")),s=a.getShimContainer(),function(){var e,r,u;e=n.get(t.browse_button),a.can("summon_file_dialog")&&("static"===n.getStyle(e,"position")&&(e.style.position="relative"),r=parseInt(n.getStyle(e,"z-index"),10)||1,e.style.zIndex=r,s.style.zIndex=r-1),u=a.can("summon_file_dialog")?e:s,i.addEvent(u,"mouseover",function(){o.trigger("mouseenter")},o.uid),i.addEvent(u,"mouseout",function(){o.trigger("mouseleave")},o.uid),i.addEvent(u,"mousedown",function(){o.trigger("mousedown")},o.uid),i.addEvent(n.get(t.container),"mouseup",function(){o.trigger("mouseup")},o.uid),e=null}(),e.call(this),s=null,o.trigger({type:"ready",async:!0})},getFiles:function(){return s},disable:function(e){var t;(t=n.get(a))&&(t.disabled=!!e)},destroy:function(){var e=this.getRuntime(),t=e.getShim(),r=e.getShimContainer();i.removeAllEvents(r,this.uid),i.removeAllEvents(c&&n.get(c.container),this.uid),i.removeAllEvents(c&&n.get(c.browse_button),this.uid),r&&(r.innerHTML=""),t.removeInstance(this.uid),a=s=u=c=r=t=null}})}return e.FileInput=a}),i(lt,[ut,F],function(e,t){return e.FileReader=t}),i(dt,[ut,u,f,b,p,L,y,S],function(e,t,n,i,r,o,a,s){function u(){function e(e){var t=this,i,r,a,s,u=!1;if(l){if(i=l.id.replace(/_iframe$/,""),r=n.get(i+"_form")){for(a=r.getElementsByTagName("input"),s=a.length;s--;)switch(a[s].getAttribute("type")){case"hidden":a[s].parentNode.removeChild(a[s]);break;case"file":u=!0}a=[],u||r.parentNode.removeChild(r),r=null}setTimeout(function(){o.removeEvent(l,"load",t.uid),l.parentNode&&l.parentNode.removeChild(l);var n=t.getRuntime().getShimContainer();n.children.length||n.parentNode.removeChild(n),n=l=null,e()},1)}}var u,c,l;t.extend(this,{send:function(d,f){function p(){var n=m.getShimContainer()||document.body,r=document.createElement("div");r.innerHTML='<iframe id="'+g+'_iframe" name="'+g+'_iframe" src="javascript:&quot;&quot;" style="display:none"></iframe>',l=r.firstChild,n.appendChild(l),o.addEvent(l,"load",function(){var n;try{n=l.contentWindow.document||l.contentDocument||window.frames[l.id].document,/^4(0[0-9]|1[0-7]|2[2346])\s/.test(n.title)?u=n.title.replace(/^(\d+).*$/,"$1"):(u=200,c=t.trim(n.body.innerHTML),h.trigger({type:"progress",loaded:c.length,total:c.length}),w&&h.trigger({type:"uploadprogress",loaded:w.size||1025,total:w.size||1025}))}catch(r){if(!i.hasSameOrigin(d.url))return e.call(h,function(){h.trigger("error")}),void 0;u=404}e.call(h,function(){h.trigger("load")})},h.uid)}var h=this,m=h.getRuntime(),g,v,y,w;if(u=c=null,f instanceof s&&f.hasBlob()){if(w=f.getBlob(),g=w.uid,y=n.get(g),v=n.get(g+"_form"),!v)throw new r.DOMException(r.DOMException.NOT_FOUND_ERR)}else g=t.guid("uid_"),v=document.createElement("form"),v.setAttribute("id",g+"_form"),v.setAttribute("method",d.method),v.setAttribute("enctype","multipart/form-data"),v.setAttribute("encoding","multipart/form-data"),v.setAttribute("target",g+"_iframe"),m.getShimContainer().appendChild(v);f instanceof s&&f.each(function(e,n){if(e instanceof a)y&&y.setAttribute("name",n);else{var i=document.createElement("input");t.extend(i,{type:"hidden",name:n,value:e}),y?v.insertBefore(i,y):v.appendChild(i)}}),v.setAttribute("action",d.url),p(),v.submit(),h.trigger("loadstart")},getStatus:function(){return u},getResponse:function(e){if("json"===e&&"string"===t.typeOf(c)&&window.JSON)try{return JSON.parse(c.replace(/^\s*<pre[^>]*>/,"").replace(/<\/pre>\s*$/,""))}catch(n){return null}return c},abort:function(){var t=this;l&&l.contentWindow&&(l.contentWindow.stop?l.contentWindow.stop():l.contentWindow.document.execCommand?l.contentWindow.document.execCommand("Stop"):l.src="about:blank"),e.call(this,function(){t.dispatchEvent("abort")})}})}return e.XMLHttpRequest=u}),i(ft,[ut,X],function(e,t){return e.Image=t}),a([u,c,l,d,f,p,h,m,g,v,y,w,E,_,x,R,b,T,S,A,O,I,L])}(this);;(function(){"use strict";var e={},t=moxie.core.utils.Basic.inArray;return function n(r){var i,s;for(i in r)s=typeof r[i],s==="object"&&!~t(i,["Exceptions","Env","Mime"])?n(r[i]):s==="function"&&(e[i]=r[i])}(window.moxie),e.Env=window.moxie.core.utils.Env,e.Mime=window.moxie.core.utils.Mime,e.Exceptions=window.moxie.core.Exceptions,window.mOxie=e,window.o||(window.o=e),e})();
/**
 * Plupload - multi-runtime File Uploader
 * v2.1.1
 *
 * Copyright 2013, Moxiecode Systems AB
 * Released under GPL License.
 *
 * License: http://www.plupload.com/license
 * Contributing: http://www.plupload.com/contributing
 *
 * Date: 2014-01-16
 */
;(function(e,t,n){function s(e){function r(e,t,r){var i={chunks:"slice_blob",jpgresize:"send_binary_string",pngresize:"send_binary_string",progress:"report_upload_progress",multi_selection:"select_multiple",dragdrop:"drag_and_drop",drop_element:"drag_and_drop",headers:"send_custom_headers",canSendBinary:"send_binary",triggerDialog:"summon_file_dialog"};i[e]?n[i[e]]=t:r||(n[e]=t)}var t=e.required_features,n={};return typeof t=="string"?o.each(t.split(/\s*,\s*/),function(e){r(e,!0)}):typeof t=="object"?o.each(t,function(e,t){r(t,e)}):t===!0&&(e.multipart||(n.send_binary_string=!0),e.chunk_size>0&&(n.slice_blob=!0),e.resize.enabled&&(n.send_binary_string=!0),o.each(e,function(e,t){r(t,!!e,!0)})),n}var r=e.setTimeout,i={},o={VERSION:"2.1.1",STOPPED:1,STARTED:2,QUEUED:1,UPLOADING:2,FAILED:4,DONE:5,GENERIC_ERROR:-100,HTTP_ERROR:-200,IO_ERROR:-300,SECURITY_ERROR:-400,INIT_ERROR:-500,FILE_SIZE_ERROR:-600,FILE_EXTENSION_ERROR:-601,FILE_DUPLICATE_ERROR:-602,IMAGE_FORMAT_ERROR:-700,IMAGE_MEMORY_ERROR:-701,IMAGE_DIMENSIONS_ERROR:-702,mimeTypes:t.mimes,ua:t.ua,typeOf:t.typeOf,extend:t.extend,guid:t.guid,get:function(n){var r=[],i;t.typeOf(n)!=="array"&&(n=[n]);var s=n.length;while(s--)i=t.get(n[s]),i&&r.push(i);return r.length?r:null},each:t.each,getPos:t.getPos,getSize:t.getSize,xmlEncode:function(e){var t={"<":"lt",">":"gt","&":"amp",'"':"quot","'":"#39"},n=/[<>&\"\']/g;return e?(""+e).replace(n,function(e){return t[e]?"&"+t[e]+";":e}):e},toArray:t.toArray,inArray:t.inArray,addI18n:t.addI18n,translate:t.translate,isEmptyObj:t.isEmptyObj,hasClass:t.hasClass,addClass:t.addClass,removeClass:t.removeClass,getStyle:t.getStyle,addEvent:t.addEvent,removeEvent:t.removeEvent,removeAllEvents:t.removeAllEvents,cleanName:function(e){var t,n;n=[/[\300-\306]/g,"A",/[\340-\346]/g,"a",/\307/g,"C",/\347/g,"c",/[\310-\313]/g,"E",/[\350-\353]/g,"e",/[\314-\317]/g,"I",/[\354-\357]/g,"i",/\321/g,"N",/\361/g,"n",/[\322-\330]/g,"O",/[\362-\370]/g,"o",/[\331-\334]/g,"U",/[\371-\374]/g,"u"];for(t=0;t<n.length;t+=2)e=e.replace(n[t],n[t+1]);return e=e.replace(/\s+/g,"_"),e=e.replace(/[^a-z0-9_\-\.]+/gi,""),e},buildUrl:function(e,t){var n="";return o.each(t,function(e,t){n+=(n?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(e)}),n&&(e+=(e.indexOf("?")>0?"&":"?")+n),e},formatSize:function(e){function t(e,t){return Math.round(e*Math.pow(10,t))/Math.pow(10,t)}if(e===n||/\D/.test(e))return o.translate("N/A");var r=Math.pow(1024,4);return e>r?t(e/r,1)+" "+o.translate("tb"):e>(r/=1024)?t(e/r,1)+" "+o.translate("gb"):e>(r/=1024)?t(e/r,1)+" "+o.translate("mb"):e>1024?Math.round(e/1024)+" "+o.translate("kb"):e+" "+o.translate("b")},parseSize:t.parseSizeStr,predictRuntime:function(e,n){var r,i;return r=new o.Uploader(e),i=t.Runtime.thatCan(r.getOption().required_features,n||e.runtimes),r.destroy(),i},addFileFilter:function(e,t){i[e]=t}};o.addFileFilter("mime_types",function(e,t,n){e.length&&!e.regexp.test(t.name)?(this.trigger("Error",{code:o.FILE_EXTENSION_ERROR,message:o.translate("File extension error."),file:t}),n(!1)):n(!0)}),o.addFileFilter("max_file_size",function(e,t,n){var r;e=o.parseSize(e),t.size!==r&&e&&t.size>e?(this.trigger("Error",{code:o.FILE_SIZE_ERROR,message:o.translate("File size error."),file:t}),n(!1)):n(!0)}),o.addFileFilter("prevent_duplicates",function(e,t,n){if(e){var r=this.files.length;while(r--)if(t.name===this.files[r].name&&t.size===this.files[r].size){this.trigger("Error",{code:o.FILE_DUPLICATE_ERROR,message:o.translate("Duplicate file error."),file:t}),n(!1);return}}n(!0)}),o.Uploader=function(e){function g(){var e,t=0,n;if(this.state==o.STARTED){for(n=0;n<f.length;n++)!e&&f[n].status==o.QUEUED?(e=f[n],this.trigger("BeforeUpload",e)&&(e.status=o.UPLOADING,this.trigger("UploadFile",e))):t++;t==f.length&&(this.state!==o.STOPPED&&(this.state=o.STOPPED,this.trigger("StateChanged")),this.trigger("UploadComplete",f))}}function y(e){e.percent=e.size>0?Math.ceil(e.loaded/e.size*100):100,b()}function b(){var e,t;d.reset();for(e=0;e<f.length;e++)t=f[e],t.size!==n?(d.size+=t.origSize,d.loaded+=t.loaded*t.origSize/t.size):d.size=n,t.status==o.DONE?d.uploaded++:t.status==o.FAILED?d.failed++:d.queued++;d.size===n?d.percent=f.length>0?Math.ceil(d.uploaded/f.length*100):0:(d.bytesPerSec=Math.ceil(d.loaded/((+(new Date)-p||1)/1e3)),d.percent=d.size>0?Math.ceil(d.loaded/d.size*100):0)}function w(){var e=c[0]||h[0];return e?e.getRuntime().uid:!1}function E(e,n){if(e.ruid){var r=t.Runtime.getInfo(e.ruid);if(r)return r.can(n)}return!1}function S(){this.bind("FilesAdded",C),this.bind("CancelUpload",M),this.bind("BeforeUpload",k),this.bind("UploadFile",L),this.bind("UploadProgress",A),this.bind("StateChanged",O),this.bind("QueueChanged",b),this.bind("Error",D),this.bind("FileUploaded",_),this.bind("Destroy",P)}function x(e,n){var r=this,i=0,s=[],u={accept:e.filters.mime_types,runtime_order:e.runtimes,required_caps:e.required_features,preferred_caps:l,swf_url:e.flash_swf_url,xap_url:e.silverlight_xap_url};o.each(e.runtimes.split(/\s*,\s*/),function(t){e[t]&&(u[t]=e[t])}),e.browse_button&&o.each(e.browse_button,function(n){s.push(function(s){var a=new t.FileInput(o.extend({},u,{name:e.file_data_name,multiple:e.multi_selection,container:e.container,browse_button:n}));a.onready=function(){var e=t.Runtime.getInfo(this.ruid);t.extend(r.features,{chunks:e.can("slice_blob"),multipart:e.can("send_multipart"),multi_selection:e.can("select_multiple")}),i++,c.push(this),s()},a.onchange=function(){r.addFile(this.files)},a.bind("mouseenter mouseleave mousedown mouseup",function(r){v||(e.browse_button_hover&&("mouseenter"===r.type?t.addClass(n,e.browse_button_hover):"mouseleave"===r.type&&t.removeClass(n,e.browse_button_hover)),e.browse_button_active&&("mousedown"===r.type?t.addClass(n,e.browse_button_active):"mouseup"===r.type&&t.removeClass(n,e.browse_button_active)))}),a.bind("error runtimeerror",function(){a=null,s()}),a.init()})}),e.drop_element&&o.each(e.drop_element,function(e){s.push(function(n){var s=new t.FileDrop(o.extend({},u,{drop_zone:e}));s.onready=function(){var e=t.Runtime.getInfo(this.ruid);r.features.dragdrop=e.can("drag_and_drop"),i++,h.push(this),n()},s.ondrop=function(){r.addFile(this.files)},s.bind("error runtimeerror",function(){s=null,n()}),s.init()})}),t.inSeries(s,function(){typeof n=="function"&&n(i)})}function T(e,n,r){var i=new t.Image;try{i.onload=function(){i.downsize(n.width,n.height,n.crop,n.preserve_headers)},i.onresize=function(){r(this.getAsBlob(e.type,n.quality)),this.destroy()},i.onerror=function(){r(e)},i.load(e)}catch(s){r(e)}}function N(e,n,r){function f(e,t,n){var r=a[e];switch(e){case"max_file_size":e==="max_file_size"&&(a.max_file_size=a.filters.max_file_size=t);break;case"chunk_size":if(t=o.parseSize(t))a[e]=t;break;case"filters":o.typeOf(t)==="array"&&(t={mime_types:t}),n?o.extend(a.filters,t):a.filters=t,t.mime_types&&(a.filters.mime_types.regexp=function(e){var t=[];return o.each(e,function(e){o.each(e.extensions.split(/,/),function(e){/^\s*\*\s*$/.test(e)?t.push("\\.*"):t.push("\\."+e.replace(new RegExp("["+"/^$.*+?|()[]{}\\".replace(/./g,"\\$&")+"]","g"),"\\$&"))})}),new RegExp("("+t.join("|")+")$","i")}(a.filters.mime_types));break;case"resize":n?o.extend(a.resize,t,{enabled:!0}):a.resize=t;break;case"prevent_duplicates":a.prevent_duplicates=a.filters.prevent_duplicates=!!t;break;case"browse_button":case"drop_element":t=o.get(t);case"container":case"runtimes":case"multi_selection":case"flash_swf_url":case"silverlight_xap_url":a[e]=t,n||(u=!0);break;default:a[e]=t}n||i.trigger("OptionChanged",e,t,r)}var i=this,u=!1;typeof e=="object"?o.each(e,function(e,t){f(t,e,r)}):f(e,n,r),r?(a.required_features=s(o.extend({},a)),l=s(o.extend({},a,{required_features:!0}))):u&&(i.trigger("Destroy"),x.call(i,a,function(e){e?(i.runtime=t.Runtime.getInfo(w()).type,i.trigger("Init",{runtime:i.runtime}),i.trigger("PostInit")):i.trigger("Error",{code:o.INIT_ERROR,message:o.translate("Init error.")})}))}function C(e,t){[].push.apply(f,t),e.trigger("QueueChanged"),e.refresh()}function k(e,t){if(a.unique_names){var n=t.name.match(/\.([^.]+)$/),r="part";n&&(r=n[1]),t.target_name=t.id+"."+r}}function L(e,n){function h(){u-->0?r(p,1e3):(n.loaded=f,e.trigger("Error",{code:o.HTTP_ERROR,message:o.translate("HTTP Error."),file:n,response:m.responseText,status:m.status,responseHeaders:m.getAllResponseHeaders()}))}function p(){var d,v,g,y;if(n.status==o.DONE||n.status==o.FAILED||e.state==o.STOPPED)return;g={name:n.target_name||n.name},s&&a.chunks&&c.size>s?(y=Math.min(s,c.size-f),d=c.slice(f,f+y)):(y=c.size,d=c),s&&a.chunks&&(e.settings.send_chunk_number?(g.chunk=Math.ceil(f/s),g.chunks=Math.ceil(c.size/s)):(g.offset=f,g.total=c.size)),m=new t.XMLHttpRequest,m.upload&&(m.upload.onprogress=function(t){n.loaded=Math.min(n.size,f+t.loaded),e.trigger("UploadProgress",n)}),m.onload=function(){if(m.status>=400){h();return}u=e.settings.max_retries,y<c.size?(d.destroy(),f+=y,n.loaded=Math.min(f,c.size),e.trigger("ChunkUploaded",n,{offset:n.loaded,total:c.size,response:m.responseText,status:m.status,responseHeaders:m.getAllResponseHeaders()}),t.Env.browser==="Android Browser"&&e.trigger("UploadProgress",n)):n.loaded=n.size,d=v=null,!f||f>=c.size?(n.size!=n.origSize&&(c.destroy(),c=null),e.trigger("UploadProgress",n),n.status=o.DONE,e.trigger("FileUploaded",n,{response:m.responseText,status:m.status,responseHeaders:m.getAllResponseHeaders()})):r(p,1)},m.onerror=function(){h()},m.onloadend=function(){this.destroy(),m=null},e.settings.multipart&&a.multipart?(g.name=n.target_name||n.name,m.open("post",i,!0),o.each(e.settings.headers,function(e,t){m.setRequestHeader(t,e)}),v=new t.FormData,o.each(o.extend(g,e.settings.multipart_params),function(e,t){v.append(t,e)}),v.append(e.settings.file_data_name,d),m.send(v,{runtime_order:e.settings.runtimes,required_caps:e.settings.required_features,preferred_caps:l,swf_url:e.settings.flash_swf_url,xap_url:e.settings.silverlight_xap_url})):(i=o.buildUrl(e.settings.url,o.extend(g,e.settings.multipart_params)),m.open("post",i,!0),m.setRequestHeader("Content-Type","application/octet-stream"),o.each(e.settings.headers,function(e,t){m.setRequestHeader(t,e)}),m.send(d,{runtime_order:e.settings.runtimes,required_caps:e.settings.required_features,preferred_caps:l,swf_url:e.settings.flash_swf_url,xap_url:e.settings.silverlight_xap_url}))}var i=e.settings.url,s=e.settings.chunk_size,u=e.settings.max_retries,a=e.features,f=0,c;n.loaded&&(f=n.loaded=s*Math.floor(n.loaded/s)),c=n.getSource(),e.settings.resize.enabled&&E(c,"send_binary_string")&&!!~t.inArray(c.type,["image/jpeg","image/png"])?T.call(this,c,e.settings.resize,function(e){c=e,n.size=e.size,p()}):p()}function A(e,t){y(t)}function O(e){if(e.state==o.STARTED)p=+(new Date);else if(e.state==o.STOPPED)for(var t=e.files.length-1;t>=0;t--)e.files[t].status==o.UPLOADING&&(e.files[t].status=o.QUEUED,b())}function M(){m&&m.abort()}function _(e){b(),r(function(){g.call(e)},1)}function D(e,t){t.file&&(t.file.status=o.FAILED,y(t.file),e.state==o.STARTED&&(e.trigger("CancelUpload"),r(function(){g.call(e)},1)))}function P(e){e.stop(),o.each(f,function(e){e.destroy()}),f=[],c.length&&(o.each(c,function(e){e.destroy()}),c=[]),h.length&&(o.each(h,function(e){e.destroy()}),h=[]),l={},v=!1,p=m=null,d.reset()}var u=o.guid(),a,f=[],l={},c=[],h=[],p,d,v=!1,m;a={runtimes:t.Runtime.order,max_retries:0,chunk_size:0,multipart:!0,multi_selection:!0,file_data_name:"file",flash_swf_url:"js/Moxie.swf",silverlight_xap_url:"js/Moxie.xap",filters:{mime_types:[],prevent_duplicates:!1,max_file_size:0},resize:{enabled:!1,preserve_headers:!0,crop:!1},send_chunk_number:!0},N.call(this,e,null,!0),d=new o.QueueProgress,o.extend(this,{id:u,uid:u,state:o.STOPPED,features:{},runtime:null,files:f,settings:a,total:d,init:function(){var e=this;typeof a.preinit=="function"?a.preinit(e):o.each(a.preinit,function(t,n){e.bind(n,t)});if(!a.browse_button||!a.url){this.trigger("Error",{code:o.INIT_ERROR,message:o.translate("Init error.")});return}S.call(this),x.call(this,a,function(n){typeof a.init=="function"?a.init(e):o.each(a.init,function(t,n){e.bind(n,t)}),n?(e.runtime=t.Runtime.getInfo(w()).type,e.trigger("Init",{runtime:e.runtime}),e.trigger("PostInit")):e.trigger("Error",{code:o.INIT_ERROR,message:o.translate("Init error.")})})},setOption:function(e,t){N.call(this,e,t,!this.runtime)},getOption:function(e){return e?a[e]:a},refresh:function(){c.length&&o.each(c,function(e){e.trigger("Refresh")}),this.trigger("Refresh")},start:function(){this.state!=o.STARTED&&(this.state=o.STARTED,this.trigger("StateChanged"),g.call(this))},stop:function(){this.state!=o.STOPPED&&(this.state=o.STOPPED,this.trigger("StateChanged"),this.trigger("CancelUpload"))},disableBrowse:function(){v=arguments[0]!==n?arguments[0]:!0,c.length&&o.each(c,function(e){e.disable(v)}),this.trigger("DisableBrowse",v)},getFile:function(e){var t;for(t=f.length-1;t>=0;t--)if(f[t].id===e)return f[t]},addFile:function(e,n){function l(e,n){var r=[];t.each(s.settings.filters,function(t,n){i[n]&&r.push(function(r){i[n].call(s,t,e,function(e){r(!e)})})}),t.inSeries(r,n)}function c(e){var i=t.typeOf(e);if(e instanceof t.File){if(!e.ruid&&!e.isDetached()){if(!f)return!1;e.ruid=f,e.connectRuntime(f)}c(new o.File(e))}else e instanceof t.Blob?(c(e.getSource()),e.destroy()):e instanceof o.File?(n&&(e.name=n),u.push(function(t){l(e,function(n){n||(a.push(e),s.trigger("FileFiltered",e)),r(t,1)})})):t.inArray(i,["file","blob"])!==-1?c(new t.File(null,e)):i==="node"&&t.typeOf(e.files)==="filelist"?t.each(e.files,c):i==="array"&&(n=null,t.each(e,c))}var s=this,u=[],a=[],f;f=w(),c(e),u.length&&t.inSeries(u,function(){a.length&&s.trigger("FilesAdded",a)})},removeFile:function(e){var t=typeof e=="string"?e:e.id;for(var n=f.length-1;n>=0;n--)if(f[n].id===t)return this.splice(n,1)[0]},splice:function(e,t){var r=f.splice(e===n?0:e,t===n?f.length:t),i=!1;return this.state==o.STARTED&&(i=!0,this.stop()),this.trigger("FilesRemoved",r),o.each(r,function(e){e.destroy()}),this.trigger("QueueChanged"),this.refresh(),i&&this.start(),r},bind:function(e,t,n){var r=this;o.Uploader.prototype.bind.call(this,e,function(){var e=[].slice.call(arguments);return e.splice(0,1,r),t.apply(this,e)},0,n)},destroy:function(){this.trigger("Destroy"),a=d=null,this.unbindAll()}})},o.Uploader.prototype=t.EventTarget.instance,o.File=function(){function n(n){o.extend(this,{id:o.guid(),name:n.name||n.fileName,type:n.type||"",size:n.size||n.fileSize,origSize:n.size||n.fileSize,loaded:0,percent:0,status:o.QUEUED,lastModifiedDate:n.lastModifiedDate||(new Date).toLocaleString(),getNative:function(){var e=this.getSource().getSource();return t.inArray(t.typeOf(e),["blob","file"])!==-1?e:null},getSource:function(){return e[this.id]?e[this.id]:null},destroy:function(){var t=this.getSource();t&&(t.destroy(),delete e[this.id])}}),e[this.id]=n}var e={};return n}(),o.QueueProgress=function(){var e=this;e.size=0,e.loaded=0,e.uploaded=0,e.failed=0,e.queued=0,e.percent=0,e.bytesPerSec=0,e.reset=function(){e.size=e.loaded=e.uploaded=e.failed=e.queued=e.percent=e.bytesPerSec=0}},e.plupload=o})(window,mOxie);;

/* file-end: js/lib/plupload/plupload-2.1.1.full.min.js 
----------------------------------------------------------------------------------*/

Site.page.template['angular/color.ng.tmpl'] = '<div ng-controller=\"ColorCtrl\">\n  <div lj-colorpicker=\"oldColor\" lj-colorpicker-preview=\"color\" lj-colorpicker-submit=\"save()\"></div>\n</div>\n';
Site.page.template['angular/lentaPreviewStyle.ng.tmpl'] = '\n/* background_color, background_image_key, background_repeat, background_position */\n.p-lenta {\n    background-color: {background_color};\n    background-image: url({background_image});\n    background-repeat: {background_repeat};\n    background-position: {background_position};\n    }\n\n/* sidebar_font_color */\n.p-lenta .l-flatslide-aside,\n.b-lenta-calendar TABLE TD, .b-lenta-calendar TABLE TH,\n.p-lenta .b-myupdates-emptiness,\n.p-lenta .b-feedwidgets .b-todaylj-caption A,\n.p-lenta .b-feedwidgets .b-todaylj-caption A:link,\n.p-lenta .b-feedwidgets .b-myupdates-item-content A,\n.p-lenta .b-feedwidgets .b-myupdates-item-content A:link {\n    color: {sidebar_font_color};\n    }\n\n/* url_color, url_visited, url_hover settings */\n.b-lenta-body A:link,\n.b-lenta .b-mysocial-footer-logout-text,\n.b-lenta .b-mysocial-footer-refresh,\n.p-lenta .b-feedwidgets A,\n.p-lenta .b-feedwidgets A:link,\n.b-lenta .i-ljuser-username,\n.b-lenta .i-ljuser-username:link,\n.p-lenta .b-feedwidgets .i-ljuser-username,\n.p-lenta .b-feedwidgets .i-ljuser-username:link,\n.p-lenta .b-feedwidgets .b-myupdates-item-content .i-ljuser A,\n.p-lenta .b-feedwidgets .b-myupdates-item-content .i-ljuser A:link,\n.b-translation-pseudo:link,\n.b-translation-pseudo:visited {\n    color: {url_color};\n    }\n.b-lenta-body A:visited,\n.p-lenta .b-feedwidgets A:visited,\n.p-lenta .b-feedwidgets .b-todaylj-caption A:visited,\n.b-lenta .i-ljuser-username:visited,\n.p-lenta .b-feedwidgets .b-myupdates-item-content A:visited,\n.p-lenta .b-feedwidgets .b-myupdates-item-content .i-ljuser A:visited {\n    color: {url_visited_color};\n    }\n.b-lenta-body A:hover,\n.p-lenta .b-feedwidgets A:hover,\n.p-lenta .b-feedwidgets .b-todaylj-caption A:hover,\n.b-lenta .i-ljuser-username:hover,\n.p-lenta .b-feedwidgets .b-myupdates-item-content A:hover,\n.p-lenta .b-feedwidgets .b-myupdates-item-content .i-ljuser A:hover,\n.b-translation-pseudo:hover {\n    color: {url_hover_color}\n    }\n.b-lenta-body .b-lenta-item-title A:link {\n    color: {font_color};\n    }\n.b-lenta-body .b-lenta-item-title A:visited {\n    color: {url_visited_color};\n    }\n.b-lenta-body .b-lenta-item-title A:hover {\n    color: {url_hover_color};\n    }\n\n\n\n /* sidebar_background_color */\n.p-lenta .l-flatslide-container:after,\n.p-lenta .l-flatslide-aside,\n.p-lenta .b-feedwidgets-item {\n    background-color: {sidebar_background_color};\n    }\n\n\n/* entry_background_color */\n.p-lenta .l-flatslide-content,\n.ljcut-link:after, \n.ljcut-pseudolink:after {\n    background-color: {entry_background_color};\n    }\n\n\n\n/* font_size, font_family, font_color */\n.p-lenta .b-lenta-item-content {\n    font-family: {font_family} !important;\n    }\n.p-lenta .b-lenta-item-content {\n    color: {font_color};\n    }\n.p-lenta .l-flatslide-content,\n.p-lenta .l-flatslide-aside {\n    font-size: {font_size}px !important;\n    }\n\n\n\n/* element_color (headers) */\n.p-lenta .b-lenta-head-title,\n.p-lenta .b-myupdates-title,\n.p-lenta .b-lenta-sidebar-title,\n.p-lenta .b-todaylj-title,\n.p-lenta .b-mysocial-title,\n.p-lenta .b-mylinks-title,\n.p-lenta .b-lenta-meta-label {\n    color: {element_color};\n    }\n\n\n/* element_color (svg) */\n.l-flatslide-menu-button,\n.l-flatslide-menu-button:link,\n.l-flatslide-menu-button:visited,\n.l-flatslide-menu-button:active,\n.l-flatslide-menu-button:hover,\n.l-flatslide-settingslink,\n.l-flatslide-settingslink:link,\n.l-flatslide-settingslink:visited,\n.l-flatslide-settingslink:active,\n.l-flatslide-settingslink:hover,\n.b-lenta-uparr,\n.j-e-actions-icon,\n.b-feedwidgets-move,\n.b-feedwidgets-close,\n.b-item-type-security-icon,\n.b-item-type-repost-icon,\n.j-e-nav-item-comments-icon,\n.j-e-nav-item-reply-icon,\n.b-mysocial-item-icon,\n.b-mysocial-item-dorepost .b-mysocial-item-icon,\n.b-mysocial-refresh,\n.b-mysocial-footer-logout-icon,\n.b-myupdates-item-remove,\n.b-todaylj-comments-icon,\n.ljcut-link-icon,\n.sbar-cal-nav-arr,\n.b-lenta-item-date,\n.b-lenta-item-journal,\n.b-selectus .label,\n.svgpreloader-background {\n    color: {element_color} !important;\n    }\n\n\n\n/* element_background_color (border) */\n.p-lenta .l-flatslide-content,\n.b-mainpage-intro,\n.b-lenta-item,\n.l-flatslide-aside,\n.l-flatslide-intro,\n.j-e-actions,\n.b-myupdates,\n.b-lenta-calendar TABLE TD, \n.b-lenta-calendar TABLE TH,\n.b-lenta-calendar,\n.b-todaylj,\n.b-mysocial,\n.b-mysocial-item,\n.b-mysocial-loadmore,\n.b-myupdates-item,\n.b-mylinks,\n.b-feedsettings,\n.ljcut-link:after, \n.ljcut-pseudolink:after,\n.ljcut-link:before, \n.ljcut-pseudolink:before,\n.b-sticky-cut-decor:before, \n.b-sticky-cut-decor:after,\n.b-sticky-cut-link-wrap:before,\n.j-e-actions-tooltip,\n.b-feedwidgets-options,\n.b-feedwidgets-options .b-selectus { \n    border-color: {element_background_color} !important;\n    }\n.j-e-actions-item A:hover:before {\n    border-left-color: {element_background_color};\n    }\n\n\n/* background-content */\n.j-e-actions,\n.b-lenta-calendar TABLE TH,\n.l-flatslide-settingslink,\n.l-flatslide-menu-button,\n.l-flatslide-menu-button:link,\n.b-lenta-up DIV,\n.b-lenta-new DIV,\n.b-feedwidgets-options .b-selectus {\n    background-color: {entry_header_color} !important;\n    }\n\n/* preloader */\n.svgpreloader-background {\n    fill: {element_color};\n    }\n\n.svgpreloader-piece {\n    fill: {element_background_color};    \n    }   \n\n';
Site.page.template['angular/backgroundUploader.ng.tmpl'] = '<div\n  class=\"b-feedsettings-bg-options b-feedsettings-bubble\"\n  ng-controller=\"ImageUploaderCtrl\"\n  id=\"upload-container\"\n  ng-class=\"{\'b-feedsettings-upload-state-loading\': inprogress, \'b-feedsettings-upload-state-user\': settings.background_image}\">\n    <div class=\"b-feedsettings-bg-options-head\">\n        <div\n          class=\"b-feedsettings-upload b-feedsettings-upload-default\"\n          ng-click=\"clickOnUpload()\">\n        </div>\n        <a href=\"#\" class=\"b-feedsettings-delete-icon\" title=\"delete\" ng-click=\"clickOnRestore()\"></a>\n        <span class=\"b-feedsettings-spinner\"></span>\n    </div>\n    <div class=\"b-feedsettings-bg-options-body\">\n        <ul class=\"nostyle\">\n            <li class=\"b-feedsettings-bg-options-item\">\n                <span class=\"b-feedsettings-label\">Position</span>\n                <div class=\"b-feedsettings-bg-options-row\">\n                    <select class=\"b-selectus\" ng-model=\"settings.background_position\">\n                        <option value=\"\">None</option>\n                        <option value=\"left\">Left</option>\n                        <option value=\"right\">Right</option>\n                    </select>\n                </div>\n            </li>\n            <li class=\"b-feedsettings-bg-options-item\">\n                <span class=\"b-feedsettings-label\">Repeat</span>\n                <div class=\"b-feedsettings-bg-options-row\"><!--\n                --><input type=\"checkbox\" ng-model=\"settings.background_repeat_x\" ng-checked=\"settings.background_repeat_x\">\n                    <span class=\"b-feedsettings-checkbox-text\">horizontal</span>\n                </div>\n                <div class=\"b-feedsettings-bg-options-row\"><!--\n                --><input type=\"checkbox\" ng-model=\"settings.background_repeat_y\" ng-checked=\"settings.background_repeat_y\">\n                    <span class=\"b-feedsettings-checkbox-text\">vertical</span>\n                </div>\n                \n            </li>\n        </ul>\n    </div>\n    <input name=\"data\" type=\"file\" id=\"pickfiles\">\n</div>\n';
LJ.injectStyle('/* Colorpicker */\n.b-colorpicker {\n	width: 410px;\n	margin: 0;\n	padding: 5px 0;\n	}\n.b-colorpicker:after {\n	content: \"\";\n	display: table;\n	border-collapse: collapse;\n	clear: both;\n	}\n\n.b-color-selector {\n	position: relative;\n	float: left;\n	overflow: hidden;\n	width: 256px;\n	height: 256px;\n	margin: 0 16px 0 0;\n	border: 1px solid #000;\n	background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAQAAAD2e2DtAAAhPklEQVR4XuyZ3Y4cSRGFo6R9cR4KiTueAh4BLlawAq/X9kxXHUbZrjrK+RQRnY0ZCcG2uvMvyl7pO3EisrxJ8T/8+f/4k+K/5b//0P/p9rH/J3riXMlKGOevOR/ju8cRt7jFt/gan+Ln+FP8Lj5IAFoA8MGi0Y9BrWehbuuYDdsz/xr6+P3+2eMWe7zGS3yLL/Fr/BJ/iT9H/EgB6Dms+igPUCrAdfRaQ82156qBy/MNOX4h92jwuoMf331k/h3/1/gcn+Jv8df4+d8TgCrU+jCb31afVcNMa9g3tZbNeQ+cuS4x2zX+fn8MXhd8438d+L/E5/hH/D1+iU+rArAWPwT11iLg1nql3Up8fR7rIQPfnoFeZLxnOi70sQ0B2PYn/Gf+/xa/xj/j09vvFwigBf88dC33ANIPMPberoXdvlqvZ7hS6BuxEzrN3hnv8dAdfGwT/sv+7/X/t/g8Pl/iBQLo0GsZeo9bmK5nLs+Fk07UfcU2RIKHPJKRsAXkWwWfn+P8+qN9yGCP25z/QwBvEhi/3+LWC0A1+vV2UOuFQIUWtCgUxksETrB9rjPHLTBht8x4Tfg3o0ePD/y2/iNu2uMWsU0FYPQAb7/DDyyACj8CFvNTa5fCzha0JBTx+eY5rMQT9VXdK9H0gb0yfI0xafcAH63fTbG5APjzEq+xQwDMPS2i35axb8TVPstqDFAQ8rqxb2XXLhH91rd2sulbDpAAR4VkIRx59rP66zViex3QB/oB/zVucZQC2BaaMIDvsg4e3MoKxNqiIzyUSRYSMGJEe4/G7ieUNHhcSbB7wp/GQ3PPT/xH3CyAu/0rtpeB3vh3CGANv61wHXxfvzduqYwkaQoDoPFntwYvZn2R8xKtn4bvmWQh9E2fdHX8iv3d1e97AzhQv5wSGOgH/nEqCID4e/haaARVF4PO0BlHgBRGjxqw/UNJAPIcld3mw7ned/o6o5Rd+Gz+OkVg+z/iZgFcn2+K7YQ/8h8OAHTPwdca+A1sOlNX2hn0tZ2Gr9zmp1Fd3hvyLAd8z7gzhqbPqs/G7/y9RLBPDuAL4PgdY1w7QyZ2gLX8Vw+fhYHhGygBBCkxgsktuoWjGLO17d2W9PZ93mu2f5r/nO2p8X83e+a/P/slAuPfB+wr64cHDPgQAPA/Db9Hv4EpnCXv9lQ0kEpFoeqFjVqr1/tz4JbB+zzL+OTtHrId9q/jvAMkl79TBM5/fyyBE3/qACrxN/B7I1dzUVNl70TK7kGQBPK7Ai68qGXNZ+Y7QsoKgEFX1q/mzi9djZ/huwPYB+I7fo+3awzjhwAAfwk/4VfoCU/Zc+pPVVm/REEQOOu/actnzHxKwafn3FLoO37KwPjP2u/GD/f/UwK3SQTuCyLoACwAPf4ePgqCgN4A8FRn8X6SJ/6Bv7TIVTR6EsVg2D7hFU/FPV+ZDA7LII68+zd+vwGkBC7oXxWb858CCK3hL+E3hq68gyhMXklNL8ydPXyLHJW9zn35VMKJYQfavSiM37U/trz7dwl4Gwdsu4Dhu/WLOLISoNb8+33l8A1FdQcg1P68e+cTBpjLQdgvDJ/AmfvO7ibvI+QuIJHBweqvcx8NoN5dACcXMPZzvAtAcAAWgH5/y7K4qNliIQBgSKUqAEI/UMvBsCKDjisc//lWlILSlzyCDKZ91n/b/lT7LYL5o33sG7Ul4J17rIuA2iaQ+PvcJ3wYe14IBPTMYNp8k+1Cta+gs5Iz+9nvE7hjp13e9mMyf1b/+R993P6hATRsZztc4Lhu/7qPpQCIn7vEr9QPCB+xgGxAWWYTcF7XxesdoTPP8+xXIgQUAAtBk/n7RMZtGXjX37vp8wq4yy5gGdw0y0UuAhF2AMBfFoUMeh1+5hFbYfUq9owzq/feLfcskD77vedIZj6zntZv23fOG39xA3C+n8IYsHfHnXvoAYB1bU9Z7qsxd4NSEccSwL0ys8dsBTtbvjT7afes+e7/vYPOHy99nfeSX/1c49jbIYHDO5MHWEAa7wP16C1AT+DnLcA7sPcc8wxVaXZ7j2JgxacUXOu9w0xPoIfxGnAqA+8x7w3d1j/Xfvb/zuw7cMvCn5jXFiocoIbNHUI0MOa+MVTwhRjYvbgzltWOZl8gdkfxpY738h3vTTtEHkYOEdj6dVV62frPYjD1/xCB5p0jXu0B58dsGgHwBY4EQaRuwNxnF8AcB+ipfj+44zUbPcSw2jP/mf3eYS+QyCB98eOsxwugtgEE8B2NX3h+9f8uASu4Yw0/20DDpxMYEqw8sfvK2LFOpUAhJPnvCLZ7kzCSa59GRGX/dgK0gJTAngA/DNwecJdaWwL6/F/ED7QEqbqpa0oA1wSdSAFCQP7Xpu+I/FVv6LHMr+u/W0BLYGc30HuASwBuAcZJ3P3aMIEOFT4vAzwnWjl+LefdGSg5V7J2PE2f2Odz+RzQi3d/XrP6+xqYIx+9v4GP9eQ9L4oNDlB3ADzP3UDB3J/zOM3zWhx5AehzXqkDVGuWATZ8c7uHVi8APVzh2QNMVz9X/7F2HgN5BHJ+ujYGGsD2RVCT73oUP/F2ZcDnhIsmb1onOQ9hVEIo8p/YUQRGLPoAOZrQvdZk/lJMIphKgSXgFT3BgoryFtAD5ylXxJ/nvnECfgvbAFEAgJrmTiEsgM9qP0Rg0D4t7J/mL9d/NIAzdBn5Ka7LE9z2vU5FwbwaB+iBM59L/OOYTyqBX5YAZj1XBG+YQF2AZ/5PZ17Nlh/E7hUy39Bd/w3d3QAl4NUVeZ5NV79oHQCr/lRpYUATJzgBI3lWuoJEDxDrvvElqEN0AKKm7UtF5RcLADOfHYBXB94CnqWA/T2zPu5zryyD3gEeznj1J7ITILLNdUCEyUMkpd1TCE0HYNSe+4IH03flT7Gz+599wJnPFlCh+doHD3DWuyhYAMZPAVQdQC6GJfzM7ybXa8AJ0hI2DB1+QBn4xHOu8ny3WNj/n6B9AvPXVf9l7F5d0H3C3l9+HeRi0DlAL4auFNDeUQYYxZPE9Mu2z3MfbFpxAJ7MJcErgzd2r+rcn+dG6/s/8t7XPkN3x+9+X4kHFA7Qi6Fp6Iif9o4nGFXVeLpA4gGe4wk4AGCj4lfV3yLgi59CBH4DKGP3TYBNoHHO0F0wDD2//6MHeLLlA/4O7AxZudUzhiWgcATOgZvo0eXj4uf5FQMRVNnP+YH5/Pp3zGzxzvXU7Gd3cNb3DsBmjnnOeY+/kIIYn5QKdvM2fZh5gjjB3exzTi/wPrPfTaNz3HNcAVVIYC4RyPUd+5zfxnxgGC+DLYD1nI9VKRA/faArAst57zm7gN4BxoxzegHnXe6zBzDeueb7FsBroGM0CBzIdc7Ds1gTAPP/YSkkFo/otghwl/M67z1Ddx9A7105mm0fr3yWCcAbNj3BHQDMH/VfIVu/r4DIe4jB3GoBEDTsGREVfvoAO35HsM5jFxELea9YQo+OH+AxL7LfKH3tY+6L9X+GOnmAJTBFXMY/EzTzRAB6UgqpExBuZuuo+pAH0SLDgVYE7pmxBdBn9d8zR1gE0qPg3QMw9wWTt/mzE3AZ8G6kzZ/nFICRUQylFDpRqPSBpBtIctx7xTnzvsz1Hr286xl2eS1sCgByv5bAPDsMGGIwdLSBSQko5z10ukbnA5RPVfW950ieUxDETAd4HH0kkFHxk2IwIUTuS1MkbgGGOXaNHeeescD3AjAWzCCLShQUAu2coOkCfIYGb+QlZs40RRo9qn42gycAN+RwlI7gqyD8AA2g4AGehfN+EoNaAXi2iPoxIbDaM454i73cA5oZBZGjjxBnMH7iRk4bN2eGzL3pGoiCYMMHbLzqe14AxpXO1n2glAmhcq/3AM78BBvBtOoDs0/TPUJ28+dZlufzaTZz5sMXLAHsNQLoa30njt4HWO2JOnlywQNK0PcdCqMvAvJpavyZIxzTrO0AkOfs+4NFYI7vHYAdgNbzn1Ed/iSqz/jGA2rQniWNoOXQWX8QM2e0eO/lhQDgmfmMogfcrn6A/xgE7K3t4zQXAsEaT+UHPCuavxSro5V4gc+MPM17RZr1AeC5D7AHsB+wEDjPK1HQA8xQIdPyRRACaApALwnmM6Wx5AfM78T4HYPoRBg58qzlm3cc5Rigr7sApRdD7vRu4Erv0VJIGkG1AljHHlEA7Y2eLpBnfIR6D0DmOyZHzg5AbAcBOkr00vFeDMx5n0EeKfh0x9HGr7oHYN732HmpWxeEGEMZFDtp9UcMWsG0DFAWbP3eg7Y8SuPHXaB2gQhKgf7QFYHd4qhvAZy12R4GyB08A/zGJjyDEwClK7Cfr+2f+c6RyGMCjFh0/FX2e/SL3SPJfez46xMXAdg/m8AFu4cQauyMMFRxBP7swkfjN2I809u/ijLgE3b7qPqIMKws+/MR4gD4/CQYQX4rDmAhEDexo4fPhfG4C6SVHNATtBGpLDCy8yfyADaWCRo/uwGa+9HYf+cBjoBTe90KgDsLuGvsz8ugKgX5mm0i7T9p/9gBUAwe/YRBdrcC0Sci6QSq3I/YMw/wiHJAAfROUMvEkNqxl4EUfc53a8iitH+gDrR4zH+O4RpPkWht7MuAR1wGee3DZ/vjiNUlFl2i0X30OeJ+3Og/33+vynMtrb2v+bwYHe/nub8+HvL68KhjOj84ynHHtd6v9S6P+zXu86jbGG96m43xJzGP23xnVD/y4seRbrCe833GR+ihMesE2vx/MrsDxu9MlmfI+Squ/9QCoBBo91lP3/UHPf4ab4YZT0EECyPNf6xp7Xhq3fCJ1gLphYMqDxkIdNcEkAIl2G7EqpKBMT+a+/SAXgzeB/Sk+SO8ea0DUYCJsar84XXS4CHK4Mn1MQEYhnca4HyWUWlRINAFq3dUUQi8ysYF85+j2ArKUY9m/yH+GbO924fc+we+52nRCFIARIs9FIBWDkled2bPbC9w8yIozadTVF77CT1y86dbeBdVHbHI8xM18hjCeJ/VmmSCcZYJBbBe+ZeA97t0gdYLaov3qWOBGzU/gV+bP3enZyCBIvunWOO0XIwexSHmXVT83Ae2P/B6FyGO46yNkTx6VezygudfrPyb7jJmjD7DyiMufmOBGO96bx7n1YGzw2fX6NX1iwugr3/+ncddvhqevx73MZ7XwL26BjJv+xg+wbre27xX8ILEA5j77Aa4Yu2fL4Bd5Q+YfpLpnQuwPDAGRh8Rzn1nKDjZNTJ6tQD6AtCB71cd4koMXi1g98oovUcpEHMA05oEDuJFM2h0vOh5VRUBs6NI/Nl+/y/mzrJXkyOHwm9J89fCzMy0zAyKggzLzKvg8io/L1OdaNKS1TryfQx1R4mUni7b3V+e42P3vdIMjIA9J6YsFVJ5rKeTjgS195T1uxX2p4wIy8nJGwV80kFgp2lj4Xg6joM949m/DgEbBqeTjID9+tGl0/hQEJ6NFSZ+FDxUMH4WAWCXCotl4fcloLPfrnaybcBHv09/ZwtQAVzYIru/Wr5l1PidQWEnPybvENM3C9eYWr7Me8f4LSbf9Tog9CNwv9rerwNBB4Fa/sHc5WtgHt6hW7/OfWWol/F/7XLf+nUAcJ2d/K6WWM4RNKa9byerFleQOsuBG2DHa2xu6gV6tX7fDl2/n6TrD71/HAX7/b7/77HxP7B5HgA18BqLSWLDjJ1EBGz8lteMvQfh23U6EtCPQBXCYQ+QYWBXQb9/CuoWoLvA+C9jps53+99HrtKCTneuGtMO1z7XmOb78BU0S0Cv1ul2r3K4eMjYydDvVSqA/xBmXv3yyBG85R3IkIfeB+MHH1gogQlCCHmAot9xy9XQmwD+nRcATf4wcgXH8hCgGvNRW0aroj7g1ApcuU6QgPa9XWP2L6NAriqA8S8HMw0FAg+1RfAsBQWrcR0W4ANawz3vbAQgAVwFLeait4isgVMF8E9FFLL2VOdDpWXwCiIQsJ4sgve8AWSFMA/3LAH2gG1HaxHXA0wMJoB/BASQB5/ufIKqV6hH+PwVoJG1ElD06z2ABfDBagEw5s4VpADx1D30vNQrasVeGwA++k2Wvumsgd4gGO/DqlfcABg29zdLgUWAHgDwy14wJYJrII4BdAAVAwvgvTBoQF7uecHftv3a9GfwlREwQQIiBrmqDEQIav92hkEw3gUBoCM42UrPQ5c7sBE5uIEDH4dAfQs4s/sd+Jtj/LwLgADecfBErd/B2uz2qO3nFj/49pe62BAA8xfsPADYCew+uga6AnhbwfJI4L7mnufRwBuAisKr8N0AAfPs587HHUCx6xU/Br010ODLPuD8OljO8qtbi1rV4Re0lrPnnIrDr23tajm34ng+1o1LYCx6fO50rNDcJ0ep2HNy9XL2V8vYWXK7ierTlrMK+4Ww/WckPs1ZTKs0N/4OnQ0rIETDne/XOu/BXSDoBs7+b+d4zv8Q1K9/dwHkrwDZBpwhcJYP2N34GwuABSG1ddyGhqMiArF3f/LDGewfBoFgFnnI9PfhywagQ8CVwQ7dZKAC+KsIQM4AFSETdPoO0CiIwq9i8M42UJJA7BsAVsFc9ztbwH5nZxPAXwSaoJU8QE72v5OnM4PWKssz+JIXTMkLbHUCEQPB3++8swFXH1AB/BlQwhmsvwtdcRJomPwCWs448fnsi2GSE3jbgJ3D3R/zgfGnvAAYpZxdI6dK/xySQx88I6fMlLNmzlgF3e5nGdjM931g/LEGHLocMwzdFwpkRBg1IXBGz4pcEFs+D59loIKgQTD+QAIAeAXA/iLII4EzNAYYPNs/i8HwyRmcQOCL9St2iynsY0wcYfy+0PFVP8DtX4GC5QNku/NrICaS4K6H/hcZiBh8N7AzdD8NAhPA77jjtdephrFqNgwYh4E+QSg964eOB+T8JZCA73f/hluAYrfhMH5LAmC4/ZhlCbA+wWMAhACu0LybzlgowdfvAZMBdP8eUwH8RuAAusuHnodBcgxoHYM/Lel9jU/3TjYCFQTIQGFPXwC/hqme9gNG79Vm9oD0GAAH0FgafK3/Ab7s/qUtQL3ABPArARVHDH6g6LLoATOPgb4DsAu4uI8wsf/hW8Di/h1LQQXwy6AAUA61eo2nh4Gd3LhitvejGAA8zn4FzzJQ+P5PAzTubwJ6Gr/wMALejjiS6NH4Od6Hfkr3Pve/Qlb4clJHkBPbv53Gzz1UCDQOez16HRQYR+ga524HQcAaqHGCvzmdr8g3p/tFAD9DmAyUT75cIA7opZJPDegnRg3gWQa6GNIiqKfJJxPAT5MCSDpBRxJazdKgkzyHmOHEpg8yYPh2Ah8oCeAnDjbBDsgBbQ09ws55ATlAzgWo97XH0fwFLkrBkMIa6ArgLQcS9L1iYafw8xpR9AxbgfYdQPNs+E5+ggwUvuV2eF5ET9z9e2S8GQeYHwckFIgAevACVyIMvB/h/lfUELGT7wMaQQG8EYZbk4XzVEsMlkHQ7AcwJLrQuf9xAKgUwAesLiCA14twNcqANROJaJRBp+Y/oNXamRCG1k5/MfRXQol6GwAvhhcP0fEaCCAfZcHAxC9H7aTC8aOc2ZLRCVHZAfyoghd3QOu3qME3AbzqQOWelyzVt8SgeDgjEYEnURCGAgRxCHgBLlEYAAIe1sCjJFQAr5AAuOf5uawYWBCQkSzMf8iIOHgLYCkIcIWO4LXH0wJ42WAyau55hcrPQhZ3AsCI3c9Tn0FrFiZ92AN08uMKuDF8E8BLipg7miu49xkqGz2Yfqr7udcTFdOTAowCFzpuAP42AAJ4kQVgeHqVWKX3UAFLYK77eXjAD35QDnkP4GUQtgEWwAsgAN7tGbNlcrbPRk/YefM/lfqcq2dqHNQHAPxgmAXwPAggsx/0er8+AvhMyPkpup8kBz4r7DB4dxCwAJ5LYSyuhCmBQO9LjgFS9/emPsuCxwFDZ0+oiWA8u7XAh9Fm+70mg5Aw2nJg3Jxj+CkPqAvgmW05eEJZxh7t/Xrns0RmqBawlz1gvQguyL8wFT9nc/378cllbPa/nDGGuf79/nf4hP4F/w3uz/8ynv4s934mV+r+vkPMYs1c4gH9TeAC9DGcC7FGXDp3becvPJt/ac9brO8Bfc8YP75Mnb9i9ePzohUQ7leugH6/S9QqMxsBxMaPFgpgzSCoykBjgLqHvGj9kUWQY+tWwfHDBngnC4DrvV+QAQI8nQt2L8NnEIKDve4C4wdJAQBkhZ0AnVv9cp9+kkFJ5Lo85wO5j8HcCphzgfH9KHiGnerwviQUF0vBMn3Dj9t/zAdiXwTx6R8UwPcIvKm75QvsAwwZ4LIMShV6ZuzsA4ybhwGLISCA75Y7n8FXu5uzneWP4LKDzNLXAQiiMQQEbWIkjO8IWgCYk0U9w87AMkjvA1XDr2BP9z4KQTBLRrPj2zkBAMQV0LWWgWcnftYbKDobglCwjBxEkBHAt3LWb3lE1oeOMsCoQAbQa6OM3XeGWRSCb/qOAL4JAkj4QcEHMtD7MmDH6KPnVRAjSSHA+gcDYnzDACBUjrIcGLEPCYCzuft1LfwGBGogYuAQuTP9KaoCGF8vCYBrFEIKel8G+JSe1kdmWQzU+5ovCuBrKAAnn0TNruBHWAaRnqd+78HmEWA5jDh5xq5ugQL4qmHAXmeULA4++RHue5ZIXxDc54xenpUT975F3b5X5BIZX1EBEE6trp7WyiCdk8jyE/0E8CwRub2fGwdwGl8GpCAH6GwGnBMF2z/DOZ0j8PgIkDidAHtZAF8CAeR7vSKKvgwqmHtigBHQR694JY6SYAF80RUAxOFU7nO2eY6zJ8Ti7ad18jNsGAIwHOQO5DC+QKbehlzrekUHqAEPiGFtnNFDPQwBjoflMD5PAsghZ7GwDBQrg2RTZ9kxZh4DXAHoU07A5s8C+NxWA51xhMwo4BjE0Q86spgVqfTRc8dDzN4mAnhKkNV7O5rlGACF5+FZgNaPKbqEJJJy4IUQBPBkQQD9LMcYN0PmuvOHvhA9Zxm7CuCJggCayBEqZtZCZh9hmHiH6JvAywJ4XATQQZyz/YYTJGZ5vZ/71RMFlJNDUAoK3BfAYyKADmLL1mssVsygvBhyv2amhcHWz5h5IIgAHhUBpB3BzvAM4yt1PeNF+WXQMrbqIGCPmMFMQgCPgADCW0DQJ+JOUAN9SuHMi2kiZHxSMyip+FnuSAAPZwXAMFkWhfdxhkGe/5lnPOcniAS2gqwAHpLOW32uwS75Ab+lD7YElSErNPYHlgZLYTwYFwCaPGPKwWZ43Ot9h+CqiVU8QqJ+MHNSYAE8sCWB2zXc3aUoCoeFwkj5jbP8RsYrOYgyZPQCFcD9KAAGjhOegfJ7NAdy6WPrPKEYSp3P6AEyCuA+MmsGHn6ujZn7HSXIcPu5WZUG+wH0ezhnArg3JgCuYOAsF/AcrmBoLAcGzxhZIOwH3P9s+LwzjHsyMz6HulHt5KCugpLlO9tv1e5Ld36x33lQjLvrlt8XBj/TF0ILXx/8LPoBA4xFJjw57gIBsOH24wwPatpyWC+W2XIFiKeGAQjgThDASqQUXy8EfmqdQGaznrOF/sf4uCMhgG5lXwJc2RdFH3MfPMdXiWHcfi4CkMxnVgjh2j74ZvacBHDbVsfaR3kCBFUhrAfbQc5vXbsLpARwKwigau1VgVQksP45vlbBl3yh0f8ogFs2hbAeNPf6qQQ0i+zUxsvW3Acf7nwEzGIYN295qH3QjJjfsgalnFp4OT8b8qDOLwngpo3RsTdwppKv93QT1eJ31sHnYLNMND9uDAtAYxU0ObuvdO4qeN1q9hCozmc0xgK4AQUQ6veORNJv6AtiFXDuvQZ4fit7Agvg+q2PmQFzRb8OTk3sAABQV5+dadHAUJBnx3UggA7mUwgLA0lhbFWcGBPDZaxRgfSlwQK4dquh7GNmGXF9H0tPSCvxZ42/JAoVwDUggFauL4Huc5ddJjXgDJdRz1LluDolgPV4a29jka2HuRYjwG3lUgK4CgRAWPo1XdHA8wRhcc0simkWaxg1CODKDboccEANY+FarWlHWVqMYrlguDYtDo6OKy4J4ON2y2JJdiUGotZFZmZmZoYH//9J0l32akahPrJV0y1vxtGSMlXOExXjRRO5AwAmAC0MyqL6CmDz4AgC8P8KgEB8oaqPi+ML8BmyqqFZBVUfC/nPAcC5wp1QHa1AN4Wtvktj3bBrVXUA+NcBIHodR3BKRAEGlT/tx81h8f8t9KfkH/PC8Ot+X6gb/AVqBAo/OBBoyC0OwB8CAOjjc/W6mq0X7+MA/F6xNjgCAYXi+rwYaWpdfqUBkIcCmEyHJh8LHn8qAD/XA2CaeJAIovQoF9VWm2kiDsAPY596WnUgaBhOvkZ9hwINBS4OAN93AyAeBY8vVHHVyiuagJACP09NvoUAAL2rSgibel0QOtLVNXbQsK58tfUC8hHg0/yXfCwC4aAeDWyqYHf5EgQg0O1N8fnQjjagR36kYQA+7wRAaOEJRACUQGQjuiiGJe4inwwH4d8GQS2uYAGFWh/lCggX+WgghgA6ACcYXH0/i9+/0MktIR8cAGBo6I3r5geHAwNqvkq8X94biZHPcuXx37ROzwfgXRiA5MiGd+ERLRh/HIC3OwIQjy4VJTQzYZ8Zg0YzmjwjbxwAQAggEBDTcHWupDPOy2tjsUEEgMO2aCnQ8u8peeUA4JgEl8vFITHEYfdR5uwD8NJ8wVVkPB4A19Z0aKqL7tohLxwAQGQAB2cSeNb4gLiYpw/AcwgAfyd3TP0731ihEwTgmYGICnDYC9EvFz/Xl6dWEMqgfraAnw7mJ08CAIBIQJfjD1yWOIvWfjEfgMcWEZ8cW/qpE/Eo2VRnPnc+cvLIAvIQgfw4lt5dBz9jHEF56ADAEFii1t4EUHkAAHA6aRC8tvmbcgDuGzWdUOh5ve2ia7jIPQu0AwTmrnZV15qVux4AHAF/mYLpTdtU1/SSOxiAOAJd53VN0pPbRiTyIahXGH8nTVSUW8YWj90L3KU7NNVFbhpdLnAvpOraVupqsq7csFli8CEo/2X0jXSRHeW6BT4K6UpWnzfk+i5daFO5FgDA6+N3A3fgavWuuuC55KrNbbMMBhUo8JjrzyJXjIY47/xEnYrndfBN5bIBYdyLuwfYWIFC/ZeXS0bWY7/Xe7anXDRgXNCfq9SbygXjxwCVYpd2kfMOAHy9kad6dzlngdHiWm+aX5OzDgCbXe2qnHEB2OR61+W0+RKb29EdcsoCQoP19Ea8R04GAAB9g6r1GeSEOa3A3Out7+xN5bgBYdhdr97nlGMGDOBMvUu7yFEDZsVzfLI3lSNGbffyfM/LYQMycJ16pT6ZHDIqydesU+1N5aDVLV3v0i5ywKpjqvRvf9lfeLHVP72p7LNtDqABFOkAtvqRaasB6OcvFZhJCJnqx/4AAAAASUVORK5CYII=);\n	/*background-image: url(/img/colorpicker/color-selector.png);*/\n	background-repeat: no-repeat;\n	}\n.b-color-selector-pick {\n	position: absolute;\n	top: 50px;\n	left: 50px;\n	margin: -6px 0 0 -6px;\n	width: 12px;\n	height: 12px;\n	background: url(/img/colorpicker/color-selector-pick.png?v=27530)\n	}\n.b-color-selector-bar {\n	position: relative;\n	float: left;\n	margin: 0 10px 0 0;\n	width: 20px;\n	height: 256px;\n	border: 1px solid #000;\n	background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAEACAYAAACzuVY0AAAA9klEQVR42u3XgQ3CMAxEUReSWmL/VUFKSikrIDgqJ/4M8JTT2Skph9W7CX/FbL2pQQMEBJwBrGrQKQWQwWb1iPyfyFwOGUDPN4fiyIcVLdjNAAEBAU8ANzXYKIWWA5yw54tMKRkiA2YA2eXfwddVDIofo0OArgYrpQAGGBunlAS77MwhczhjKUTmtqFl7sNB53DZxKB1wHigvOVGKYDMIZGJnHX1eviWWT02Zco55K9IuJYXe2pB8WMUEBAQEBAwMFjVoBM53glXIgMCAp6yy5ddDIofo4CAgB+CmxpsRI53wk5kIhOZyGOC8Uvhq8fl8FXkhxJ8AxUSiPbR9nUKAAAAAElFTkSuQmCC);\n	/*background-image: url(/img/colorpicker/color-selector-bar.png?v=27298);*/\n	}\n	.b-color-selector-bar A {\n		position: absolute;\n		left: -6px;\n		margin: 0 0 -4px;\n		width: 32px;\n		height: 9px;\n		background: url(/img/colorpicker/color-selector-slider.gif?v=27298) no-repeat 50% 50%;\n		}\n		.b-color-selector-bar A:link,\n		.b-color-selector-bar A:visited,\n		.b-color-selector-bar A:hover,\n		.b-color-selector-bar A:active,\n		.b-color-selector-bar A:focus {\n			border: none;\n			outline: none;\n			cursor: auto;\n			}\n\n\n.b-colorpicker-controls {\n	float: right;\n	margin: 0;\n	padding: 0;\n	width: 90px;\n	}\n	.b-colorpicker-controls-title {\n		margin: 0 auto;\n		width: 68px;\n		font-size: 11px;\n		}\n	.b-colorpicker-controls-current,\n	.b-colorpicker-controls-new {\n		margin: 0 auto 7px;\n		padding: 0;\n		width: 68px;\n		height: 68px;\n		border: 1px solid #000;\n		}\n	.b-colorpicker-controls-value {\n		margin: 0 auto;\n		padding: 0;\n		width: 68px;\n		}\n	.b-colorpicker-controls-submit {\n		margin: 1em 0.5em 0.5em;\n		padding: 0;\n		text-align: center;\n		}\n		/* two submit buttons (old + new) [LJSUP-19090] */\n		.b-colorpicker-controls-submit .b-ljbutton {\n			display: inline-block;\n			}\n		.b-colorpicker-controls-submit .b-flatbutton {\n			display: none;\n			}\n		.s-schemius .b-colorpicker-controls-submit .b-ljbutton {\n			display: none;\n			}\n		.s-schemius .b-colorpicker-controls-submit .b-flatbutton {\n			display: inline-block;\n			padding: 10px;\n			font-size: 12px;\n			}\n\n.b-updateform-bubble-user-button {\n	text-align: right;\n	}\n\n\n\n');
;(function () {
  'use strict';

  angular.module('Discovery.Settings', [
    'LJ.Api',
    'LJ.Bubble',
    'LJ.Colorpicker'
    ])
    .controller('ColorCtrl', ['$scope', function( $scope ) {

      $scope.$on('bubble:open:color', function (event, name, options) {
        $scope.color = options.color;
        $scope.attr = options.attr;
        $scope.oldColor = $scope.color;
      });

      $scope.$on('bubble:close:color', function () {
        $scope.color = $scope.oldColor;
        LJ.Event.trigger('color:reset', $scope.color, $scope.attr);
        $scope.color = null;
      });

      $scope.save = function () {
        $scope.oldColor = $scope.color;
        LJ.Event.trigger('color:save', $scope.color, $scope.attr);
        $scope.bubble.close();
      };

      $scope.$watch('color', function (current, previous) {
        if (current !== previous && current !== null) {
          LJ.Event.trigger('color:change', current, $scope.attr);
        }
      });
    }])
    .controller('ImageUploaderCtrl', ['$scope', '$timeout', 'Api',
                             function( $scope ,  $timeout ,  Api ) {

      var $preview = angular.element('.b-feedsettings-upload');
      var $input = angular.element('#pickfiles');
      var attrs = [
        'background_repeat_y',
        'background_repeat_x',
        'background_position',
        'background_image_key',
        'background_image'
      ];

      function setPreviewImage (image) {
        var value = '';

        if ( image ) {
          value = 'url(' + image + ')';
        }

        $preview.css('background-image', value);
      }
      $scope.clickOnUpload = function () {
        $input.trigger('click');
      };

      $scope.clickOnRestore = function () {
        uploader.splice(0);
        setPreviewImage('');

        Api
          .call('settings.reset_friendsfeed_background_settings')
          .then(function (response) {
            $scope.settings = response;
          });
      };

      var uploader = new plupload.Uploader({
        runtimes: 'html5,flash',

        browse_button: 'pickfiles',

        url: '/feed/endpoints/background_upload',

        multipart: true,

        dragdrop: true,

        drop_element: 'upload-container',

        filters : {
          max_file_size: '10mb',
          mime_types: [
            { title: 'Image files', extensions: 'jpg,gif,png' },
            { title: 'Zip files', extensions: 'zip' }
          ]
        },

        flash_swf_url: '/js/lib/plupload/Moxie.cdn.swf',

        init: {
          FilesAdded: function (up, files) {
            plupload.each(files, function(file) {
              file.formattedSize = plupload.formatSize(file.size);
            });

            $timeout(function () {
              uploader.start();
            });
          },

          FileUploaded: function (up, file, response) {
            response = JSON.parse(response.response);
            $scope.settings.background_image_key = response.result.imageKey;
            $scope.settings.background_image = response.result.imageURL;
            setPreviewImage($scope.settings.background_image);
            $scope.inprogress = false;
            $scope.$apply();
          },

          BeforeUpload: function () {
            $scope.inprogress = true;
          }
        }
      });

      attrs.forEach(function (attr) {
        $scope.$watch('settings.' + attr, function (current, previous) {
          if (current !== previous) {
            LJ.Event.trigger('background:change', current, attr);
          }
        });
      });

      $scope.$on('bubble:open:background', function (event, name, options) {
        $scope.settings = options;
        setPreviewImage($scope.settings.background_image);
      });

      uploader.init();

    }])
    .controller('SettingsCtrl', ['$scope', '$templateCache', '$timeout', 'Api', 'Bubble',
                        function( $scope ,  $templateCache ,  $timeout ,  Api ,  Bubble ) {

      var that = this;
      var $css = angular.element('.b-lenta-preview');
      var $template = $templateCache.get('lentaPreviewStyle.ng.tmpl');
      var $window = angular.element(window);
      var $settings = angular.element('.b-feedsettings');
      var $title = angular.element('.b-lenta-head-title');
      var colorsAttrs = [
        'background_color',
        'entry_background_color',
        'sidebar_background_color',
        'font_color',
        'sidebar_font_color',
        'url_color',
        'url_visited_color',
        'url_hover_color',
        'element_color',
        'element_background_color',
        'entry_header_color'
      ];
      var replaceStyle = LJ.Function.debounce(function (result) {
        $css.text(result);
      }, 100);
      var isLoadedSettings = false;

      function convertColorAttrs (response) {
        colorsAttrs.forEach(function (attr) {
          var value = response[attr];

          $scope.settings[attr] = value ? '#' + value : value;
        });
      }

      this.change = function (value, attr) {
        $scope.settings[attr] = value;
        that.updateStyle();
      };

      this.updateStyle = function () {
        var result;

        if ( !isLoadedSettings ) {
          return;
        }

        $scope.settings.background_repeat = 'no-repeat';

        angular.element('.b-lenta').toggleClass('b-lenta-tiny-size', $scope.settings.font_size <= 11)

        if ( $scope.settings.background_repeat_y ) {
          $scope.settings.background_repeat = 'repeat-y';
        }

        if ( $scope.settings.background_repeat_x ) {
          $scope.settings.background_repeat = 'repeat-x';
        }

        if ( $scope.settings.background_repeat_y && $scope.settings.background_repeat_x ) {
          $scope.settings.background_repeat = 'repeat';
        }

        result = $template.supplant($scope.settings);

        replaceStyle(result);
      };

      this.getSettings = function () {
        return Api
          .call('settings.get_friendsfeed_settings')
          .then(function (response) {
            $scope.settings = response;
            convertColorAttrs(response);
            isLoadedSettings = true;
          });
      };

      this.saveSettings = function (settings) {
        return Api
          .call('settings.save_friendsfeed_settings', settings);
      };

      this.restoreSettings = function () {
        return Api
          .call('settings.reset_friendsfeed_settings')
          .then(function (response) {
            $scope.settings = response;
            convertColorAttrs(response);
          });
      };

      this.isEnabled = function () {
        return LJ.get('remote') && LJ.Flags.isEnabled('friendsfeed_v3_settings');
      };

      $scope.settings = {};

      // used for font-size generating
      $scope.range = new Array(27);
      $scope.fontTypes = ['ProximaNovaRegular', 'Verdana', 'Arial', 'Helvetica'];
      $scope.paginationType = ['pages', 'endless'];

      $scope.save = function () {
        var data = angular.copy($scope.settings);

        colorsAttrs.forEach(function (attr) {
          data[attr] = data[attr].slice(1);
        });

        that.saveSettings(data).then(function () {
          $scope.feed.menu.isOpened = false;
        });
      };

      $scope.cancel = function () {
        that.getSettings()
          .then(function () {
            $scope.feed.menu.isOpened = false;
          })
          .then(that.updateStyle);
      };

      $scope.restore = function () {
        that.restoreSettings().then(that.updateStyle);
      };

      $scope.openColorpicker = function (event, attr) {
        $scope.feed.menu.isBubbleOpened = true;

        $timeout(function () {
          Bubble.open( 'color', {
            color: $scope.settings[attr], attr: attr
          }, angular.element(event.target) );
        });
      };

      $scope.openUploader = function (event) {
        var options = {
          background_position: $scope.settings.background_position,
          background_repeat_x: $scope.settings.background_repeat_x,
          background_repeat_y: $scope.settings.background_repeat_y,
          background_image_key: $scope.settings.background_image_key,
          background_image: $scope.settings.background_image
        };

        $scope.feed.menu.isBubbleOpened = true;
        $timeout(function () {
          Bubble.open('background', options, angular.element(event.target));
        });
      };

      $scope.$watch('settings.friends_feed_title', function (value) {
        $title.text(value);
      });

      ['settings.font_size', 'settings.font_family'].forEach(function (attr) {
        $scope.$watch(attr, function (current, previous) {
          if ( current !== previous ) {
            that.updateStyle();
          }
        });
      });

      $scope.$on('bubble:close:color', function () {

        // Use set timeout for prevent hide menu when you close colorpicker
        $timeout(function () {
          $scope.feed.menu.isBubbleOpened = false;
        }, 100);

      });

      $scope.$on('bubble:close:background', function () {

        // Use set timeout for prevent hide menu when you close uploader
        $timeout(function () {
          $scope.feed.menu.isBubbleOpened = false;
        }, 100);

      });

      $settings.on('scroll', function () {
        $window.trigger('scroll');
      });

      LJ.Event.on('color:change', that.change);
      LJ.Event.on('color:reset', that.change);
      LJ.Event.on('background:change', that.change);

      if ( this.isEnabled() ) {
        this.getSettings();
      }

    }]);

}());
;

/* file-end: js/discovery/settings.js 
----------------------------------------------------------------------------------*/

/* ---------------------------------------------------------------------------------
   file-start: js/feed/feedWidget.js 
*/



/* ---------------------------------------------------------------------------------
   file-start: js/lib/angular/1.2.18/angular-animate.min.js 
*/

/*
 AngularJS v1.2.18
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(u,f,P){'use strict';f.module("ngAnimate",["ng"]).factory("$$animateReflow",["$$rAF","$document",function(f,u){return function(e){return f(function(){e()})}}]).config(["$provide","$animateProvider",function(W,H){function e(f){for(var e=0;e<f.length;e++){var h=f[e];if(h.nodeType==aa)return h}}function C(h){return f.element(e(h))}var n=f.noop,h=f.forEach,Q=H.$$selectors,aa=1,k="$$ngAnimateState",K="ng-animate",g={running:!0};W.decorator("$animate",["$delegate","$injector","$sniffer","$rootElement",
"$$asyncCallback","$rootScope","$document",function(y,u,$,L,F,I,P){function R(a){if(a){var b=[],c={};a=a.substr(1).split(".");($.transitions||$.animations)&&b.push(u.get(Q[""]));for(var d=0;d<a.length;d++){var f=a[d],e=Q[f];e&&!c[f]&&(b.push(u.get(e)),c[f]=!0)}return b}}function M(a,b,c){function d(a,b){var c=a[b],d=a["before"+b.charAt(0).toUpperCase()+b.substr(1)];if(c||d)return"leave"==b&&(d=c,c=null),t.push({event:b,fn:c}),l.push({event:b,fn:d}),!0}function e(b,d,f){var q=[];h(b,function(a){a.fn&&
q.push(a)});var m=0;h(q,function(b,e){var h=function(){a:{if(d){(d[e]||n)();if(++m<q.length)break a;d=null}f()}};switch(b.event){case "setClass":d.push(b.fn(a,p,A,h));break;case "addClass":d.push(b.fn(a,p||c,h));break;case "removeClass":d.push(b.fn(a,A||c,h));break;default:d.push(b.fn(a,h))}});d&&0===d.length&&f()}var w=a[0];if(w){var k="setClass"==b,g=k||"addClass"==b||"removeClass"==b,p,A;f.isArray(c)&&(p=c[0],A=c[1],c=p+" "+A);var B=a.attr("class")+" "+c;if(T(B)){var r=n,v=[],l=[],x=n,m=[],t=[],
B=(" "+B).replace(/\s+/g,".");h(R(B),function(a){!d(a,b)&&k&&(d(a,"addClass"),d(a,"removeClass"))});return{node:w,event:b,className:c,isClassBased:g,isSetClassOperation:k,before:function(a){r=a;e(l,v,function(){r=n;a()})},after:function(a){x=a;e(t,m,function(){x=n;a()})},cancel:function(){v&&(h(v,function(a){(a||n)(!0)}),r(!0));m&&(h(m,function(a){(a||n)(!0)}),x(!0))}}}}}function z(a,b,c,d,e,w,g){function n(d){var e="$animate:"+d;x&&(x[e]&&0<x[e].length)&&F(function(){c.triggerHandler(e,{event:a,
className:b})})}function p(){n("before")}function A(){n("after")}function B(){n("close");g&&F(function(){g()})}function r(){r.hasBeenRun||(r.hasBeenRun=!0,w())}function v(){if(!v.hasBeenRun){v.hasBeenRun=!0;var d=c.data(k);d&&(l&&l.isClassBased?D(c,b):(F(function(){var d=c.data(k)||{};z==d.index&&D(c,b,a)}),c.data(k,d)));B()}}var l=M(c,a,b);if(l){b=l.className;var x=f.element._data(l.node),x=x&&x.events;d||(d=e?e.parent():c.parent());var m=c.data(k)||{};e=m.active||{};var t=m.totalActive||0,u=m.last;
if(l.isClassBased&&(m.disabled||u&&!u.isClassBased)||N(c,d))r(),p(),A(),v();else{d=!1;if(0<t){m=[];if(l.isClassBased)"setClass"==u.event?(m.push(u),D(c,b)):e[b]&&(y=e[b],y.event==a?d=!0:(m.push(y),D(c,b)));else if("leave"==a&&e["ng-leave"])d=!0;else{for(var y in e)m.push(e[y]),D(c,y);e={};t=0}0<m.length&&h(m,function(a){a.cancel()})}!l.isClassBased||(l.isSetClassOperation||d)||(d="addClass"==a==c.hasClass(b));if(d)r(),p(),A(),B();else{if("leave"==a)c.one("$destroy",function(a){a=f.element(this);var b=
a.data(k);b&&(b=b.active["ng-leave"])&&(b.cancel(),D(a,"ng-leave"))});c.addClass(K);var z=O++;t++;e[b]=l;c.data(k,{last:l,active:e,index:z,totalActive:t});p();l.before(function(d){var e=c.data(k);d=d||!e||!e.active[b]||l.isClassBased&&e.active[b].event!=a;r();!0===d?v():(A(),l.after(v))})}}}else r(),p(),A(),v()}function U(a){if(a=e(a))a=f.isFunction(a.getElementsByClassName)?a.getElementsByClassName(K):a.querySelectorAll("."+K),h(a,function(a){a=f.element(a);(a=a.data(k))&&a.active&&h(a.active,function(a){a.cancel()})})}
function D(a,b){if(e(a)==e(L))g.disabled||(g.running=!1,g.structural=!1);else if(b){var c=a.data(k)||{},d=!0===b;!d&&(c.active&&c.active[b])&&(c.totalActive--,delete c.active[b]);if(d||!c.totalActive)a.removeClass(K),a.removeData(k)}}function N(a,b){if(g.disabled)return!0;if(e(a)==e(L))return g.disabled||g.running;do{if(0===b.length)break;var c=e(b)==e(L),d=c?g:b.data(k),d=d&&(!!d.disabled||d.running||0<d.totalActive);if(c||d)return d;if(c)break}while(b=b.parent());return!0}var O=0;L.data(k,g);I.$$postDigest(function(){I.$$postDigest(function(){g.running=
!1})});var V=H.classNameFilter(),T=V?function(a){return V.test(a)}:function(){return!0};return{enter:function(a,b,c,d){a=f.element(a);b=b&&f.element(b);c=c&&f.element(c);this.enabled(!1,a);y.enter(a,b,c);I.$$postDigest(function(){a=C(a);z("enter","ng-enter",a,b,c,n,d)})},leave:function(a,b){a=f.element(a);U(a);this.enabled(!1,a);I.$$postDigest(function(){z("leave","ng-leave",C(a),null,null,function(){y.leave(a)},b)})},move:function(a,b,c,d){a=f.element(a);b=b&&f.element(b);c=c&&f.element(c);U(a);
this.enabled(!1,a);y.move(a,b,c);I.$$postDigest(function(){a=C(a);z("move","ng-move",a,b,c,n,d)})},addClass:function(a,b,c){a=f.element(a);a=C(a);z("addClass",b,a,null,null,function(){y.addClass(a,b)},c)},removeClass:function(a,b,c){a=f.element(a);a=C(a);z("removeClass",b,a,null,null,function(){y.removeClass(a,b)},c)},setClass:function(a,b,c,d){a=f.element(a);a=C(a);z("setClass",[b,c],a,null,null,function(){y.setClass(a,b,c)},d)},enabled:function(a,b){switch(arguments.length){case 2:if(a)D(b);else{var c=
b.data(k)||{};c.disabled=!0;b.data(k,c)}break;case 1:g.disabled=!a;break;default:a=!g.disabled}return!!a}}}]);H.register("",["$window","$sniffer","$timeout","$$animateReflow",function(k,g,C,L){function F(a,E){S&&S();X.push(E);S=L(function(){h(X,function(a){a()});X=[];S=null;q={}})}function I(a,E){var b=e(a);a=f.element(b);Y.push(a);b=Date.now()+E;b<=ea||(C.cancel(da),ea=b,da=C(function(){K(Y);Y=[]},E,!1))}function K(a){h(a,function(a){(a=a.data(m))&&(a.closeAnimationFn||n)()})}function R(a,E){var b=
E?q[E]:null;if(!b){var c=0,d=0,e=0,f=0,m,Z,s,g;h(a,function(a){if(a.nodeType==aa){a=k.getComputedStyle(a)||{};s=a[J+B];c=Math.max(M(s),c);g=a[J+r];m=a[J+v];d=Math.max(M(m),d);Z=a[p+v];f=Math.max(M(Z),f);var b=M(a[p+B]);0<b&&(b*=parseInt(a[p+l],10)||1);e=Math.max(b,e)}});b={total:0,transitionPropertyStyle:g,transitionDurationStyle:s,transitionDelayStyle:m,transitionDelay:d,transitionDuration:c,animationDelayStyle:Z,animationDelay:f,animationDuration:e};E&&(q[E]=b)}return b}function M(a){var b=0;a=
f.isString(a)?a.split(/\s*,\s*/):[];h(a,function(a){b=Math.max(parseFloat(a)||0,b)});return b}function z(a){var b=a.parent(),c=b.data(x);c||(b.data(x,++ca),c=ca);return c+"-"+e(a).getAttribute("class")}function U(a,b,c,d){var f=z(b),h=f+" "+c,k=q[h]?++q[h].total:0,g={};if(0<k){var l=c+"-stagger",g=f+" "+l;(f=!q[g])&&b.addClass(l);g=R(b,g);f&&b.removeClass(l)}d=d||function(a){return a()};b.addClass(c);var l=b.data(m)||{},s=d(function(){return R(b,h)});d=s.transitionDuration;f=s.animationDuration;if(0===
d&&0===f)return b.removeClass(c),!1;b.data(m,{running:l.running||0,itemIndex:k,stagger:g,timings:s,closeAnimationFn:n});a=0<l.running||"setClass"==a;0<d&&D(b,c,a);0<f&&(0<g.animationDelay&&0===g.animationDuration)&&(e(b).style[p]="none 0s");return!0}function D(a,b,c){"ng-enter"!=b&&("ng-move"!=b&&"ng-leave"!=b)&&c?a.addClass(t):e(a).style[J+r]="none"}function N(a,b){var c=J+r,d=e(a);d.style[c]&&0<d.style[c].length&&(d.style[c]="");a.removeClass(t)}function O(a){var b=p;a=e(a);a.style[b]&&0<a.style[b].length&&
(a.style[b]="")}function V(a,b,c,f){function g(a){b.off(z,l);b.removeClass(p);d(b,c);a=e(b);for(var fa in t)a.style.removeProperty(t[fa])}function l(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||b.timeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(Q));Math.max(a-y,0)>=x&&b>=u&&f()}var k=e(b);a=b.data(m);if(-1!=k.getAttribute("class").indexOf(c)&&a){var p="";h(c.split(" "),function(a,b){p+=(0<b?" ":"")+a+"-active"});var n=a.stagger,s=a.timings,r=a.itemIndex,u=Math.max(s.transitionDuration,
s.animationDuration),v=Math.max(s.transitionDelay,s.animationDelay),x=v*ba,y=Date.now(),z=A+" "+H,q="",t=[];if(0<s.transitionDuration){var B=s.transitionPropertyStyle;-1==B.indexOf("all")&&(q+=w+"transition-property: "+B+";",q+=w+"transition-duration: "+s.transitionDurationStyle+";",t.push(w+"transition-property"),t.push(w+"transition-duration"))}0<r&&(0<n.transitionDelay&&0===n.transitionDuration&&(q+=w+"transition-delay: "+T(s.transitionDelayStyle,n.transitionDelay,r)+"; ",t.push(w+"transition-delay")),
0<n.animationDelay&&0===n.animationDuration&&(q+=w+"animation-delay: "+T(s.animationDelayStyle,n.animationDelay,r)+"; ",t.push(w+"animation-delay")));0<t.length&&(s=k.getAttribute("style")||"",k.setAttribute("style",s+"; "+q));b.on(z,l);b.addClass(p);a.closeAnimationFn=function(){g();f()};k=(r*(Math.max(n.animationDelay,n.transitionDelay)||0)+(v+u)*W)*ba;a.running++;I(b,k);return g}f()}function T(a,b,c){var d="";h(a.split(","),function(a,e){d+=(0<e?",":"")+(c*b+parseInt(a,10))+"s"});return d}function a(a,
b,c,e){if(U(a,b,c,e))return function(a){a&&d(b,c)}}function b(a,b,c,e){if(b.data(m))return V(a,b,c,e);d(b,c);e()}function c(c,d,e,f){var g=a(c,d,e);if(g){var h=g;F(d,function(){N(d,e);O(d);h=b(c,d,e,f)});return function(a){(h||n)(a)}}f()}function d(a,b){a.removeClass(b);var c=a.data(m);c&&(c.running&&c.running--,c.running&&0!==c.running||a.removeData(m))}function G(a,b){var c="";a=f.isArray(a)?a:a.split(/\s+/);h(a,function(a,d){a&&0<a.length&&(c+=(0<d?" ":"")+a+b)});return c}var w="",J,H,p,A;u.ontransitionend===
P&&u.onwebkittransitionend!==P?(w="-webkit-",J="WebkitTransition",H="webkitTransitionEnd transitionend"):(J="transition",H="transitionend");u.onanimationend===P&&u.onwebkitanimationend!==P?(w="-webkit-",p="WebkitAnimation",A="webkitAnimationEnd animationend"):(p="animation",A="animationend");var B="Duration",r="Property",v="Delay",l="IterationCount",x="$$ngAnimateKey",m="$$ngAnimateCSS3Data",t="ng-animate-block-transitions",Q=3,W=1.5,ba=1E3,q={},ca=0,X=[],S,da=null,ea=0,Y=[];return{enter:function(a,
b){return c("enter",a,"ng-enter",b)},leave:function(a,b){return c("leave",a,"ng-leave",b)},move:function(a,b){return c("move",a,"ng-move",b)},beforeSetClass:function(b,c,d,e){var f=G(d,"-remove")+" "+G(c,"-add"),g=a("setClass",b,f,function(a){var e=b.attr("class");b.removeClass(d);b.addClass(c);a=a();b.attr("class",e);return a});if(g)return F(b,function(){N(b,f);O(b);e()}),g;e()},beforeAddClass:function(b,c,d){var e=a("addClass",b,G(c,"-add"),function(a){b.addClass(c);a=a();b.removeClass(c);return a});
if(e)return F(b,function(){N(b,c);O(b);d()}),e;d()},setClass:function(a,c,d,e){d=G(d,"-remove");c=G(c,"-add");return b("setClass",a,d+" "+c,e)},addClass:function(a,c,d){return b("addClass",a,G(c,"-add"),d)},beforeRemoveClass:function(b,c,d){var e=a("removeClass",b,G(c,"-remove"),function(a){var d=b.attr("class");b.removeClass(c);a=a();b.attr("class",d);return a});if(e)return F(b,function(){N(b,c);O(b);d()}),e;d()},removeClass:function(a,c,d){return b("removeClass",a,G(c,"-remove"),d)}}}])}])})(window,
window.angular);
//# sourceMappingURL=angular-animate.min.js.map
;

/* file-end: js/lib/angular/1.2.18/angular-animate.min.js 
----------------------------------------------------------------------------------*/

/* ---------------------------------------------------------------------------------
   file-start: js/widgets/angular/today.js 
*/



/* ---------------------------------------------------------------------------------
   file-start: js/core/angular/users.js 
*/


/* ---------------------------------------------------------------------------------
   file-start: js/core/angular/options.js 
*/

/**
 * Base implementation for services options
 *
 * @example
 *
 * var options = Options.create({
 *   counter: 25
 * });
 * console.log(options.counter); // => 25
 *
 * options.set('counter', 15);
 * console.log( options.raw().counter ); // => 15
 *
 * options.set({ counter: 10 });
 * console.log( options.counter ); // => 10
 *
 */
angular.module('LJ.Options', [])
  .factory('Options', [function () {
    return {
      create: function (options) {
        if (typeof options === 'undefined') {
          options = {};
        }

        if (typeof options !== 'object') {
          throw new TypeError('Options should be an object.');
        }

        function set(opts, value) {
          if (typeof value === 'undefined') {
            angular.extend(options, opts);
          } else {
            options[opts] = value;
          }
        }

        function get(option) {
          return options[option];
        }

        function raw() {
          return options;
        }

        return {
          set: set,
          get: get,
          raw: raw
        };
      }
    };
  }]);
;

/* file-end: js/core/angular/options.js 
----------------------------------------------------------------------------------*/

;(function () {
  'use strict';

  angular.module('Users', ['LJ.Api', 'LJ.Options'])

    // Relations wrapper. Currently works through js/relations/relations.js
    .factory('Relations', ['$q', '$timeout', 'UsersCache',
                 function ( $q,   $timeout,   UsersCache ) {

      /**
       * // add friend without options. State will be changed immediately
       * Relations.toggleFriend('test', true);
       *
       * // unsubscribe, but don't change user props immediately
       * Relations.toggleSubscription('test', false, { immediate: false });
       */

      /**
       * Helper that helps to interact with exiting relations
       * @param {String}   username        Username of user we are changing relation
       * @param {String}   action          Action to perform
       * @param {Object}   [options]       Options
       * @param {Boolean}  [options.wait]  Wait for response before updating user props
       * @return {Promise} Promise that will be resolved after action is completed
       */
      function _action(username, action, options) {
        var defer = $q.defer(),

            // immediate update user props
            updateProps = {
              addFriend:    { is_invite_sent: true },
              removeFriend: { is_friend: false },
              subscribe:    { is_subscribedon: true },
              unsubscribe:  { is_subscribedon: false },
              join:         { is_invite_sent: true },
              leave:        { is_member: false },
              setBan:       { is_banned: true },
              setUnban:     { is_banned: false }
            },

            // revert properties values if error happens
            revertProps = {
              addFriend:    { is_invite_sent: false },
              removeFriend: { is_friend: true },
              subscribe:    { is_subscribedon: false },
              unsubscribe:  { is_subscribedon: true },
              join:         { is_invite_sent: false },
              leave:        { is_member: true },
              setBan:       { is_banned: false },
              setUnban:     { is_banned: true }
            },

            // save current props
            userProps = angular.copy( UsersCache.get(username) || {} );

        if (typeof options === 'undefined') {
          options = {};
        }

        if ( !options.wait ) {
          UsersCache.update(username, updateProps[action] || {});
        }

        LJ.Event.trigger('relations.change', {
          username: username,
          action: action,
          callback: function (data) {
            $timeout(function () {
              if (data.error) {

                // rollback props
                if ( !options.wait ) {
                  UsersCache.update( username, angular.extend(revertProps[action], userProps) );
                }

                defer.reject(data.error.message);
                return;
              }

              var props = LJ.Object.pick(data,
                'is_banned',
                'is_friend',
                'is_member',
                'is_subscriber',
                'is_subscribedon',
                'is_friend_of',
                'is_invite_sent'
              );

              // update user props
              UsersCache.update(username, props);
              defer.resolve(data);
            });
          }
        });

        return defer.promise;
      }

      /**
       * Toggles subscription status of a user with provided username
       *
       * @param {String}   username        Username
       * @param {Boolean}  state           State: subscribe (true) or unsubscribe (false)
       * @param {Object}   [options]       Options
       * @param {Boolean}  [options.wait]  Wait for response before updating user props
       * @return {Promise}                 Promise that will be resolved with data after
       *                                   subscription status will be changed
       */
      function toggleSubscription(username, state, options) {
        var promise = _action(username, state ? 'subscribe' : 'unsubscribe', options);

        // reset filter mask after unsubscribe
        if ( !state ) {
          promise.then(function () {
            UsersCache.update(username, { filtermask: 0 });
          });
        }

        return promise;
      }

      /**
       * Toggles friend status of a user with provided username
       *
       * @param {String}   username        Username
       * @param {Boolean}  state           State: add friend (true) or remove from friend (false)
       * @param {Object}   [options]       Options
       * @param {Boolean}  [options.wait]  Wait for response before updating user props
       * @return {Promise}                 Promise that will be resolved with data after
       *                                   friend status will be changed
       */
      function toggleFriend(username, state, options) {
        return _action(username, state ? 'addFriend' : 'removeFriend', options);
      }

      /**
       * Join/leave community
       *
       * @param {String}   username        Username
       * @param {Boolean}  state           State: add friend (true) or remove from friend (false)
       * @param {Object}   [options]       Options
       * @param {Boolean}  [options.wait]  Wait for response before updating user props
       * @return {Promise}                 Promise that will be resolved with data after action completeness
       */
      function toggleMember(username, state, options) {
        return _action(username, state ? 'join' : 'leave', options);
      }

      /**
       * Ban/unban usern
       *
       * @param {String}   username        Username
       * @param {Boolean}  state           State: ban (true) or unban user (false)
       * @param {Object}   [options]       Options
       * @param {Boolean}  [options.wait]  Wait for response before updating user props
       * @return {Promise}                 Promise that will be resolved with data after action is completed
       */
      function toggleBan(username, state, options) {
        return _action(username, state ? 'setBan' : 'setUnban', options);
      }

      /**
       * Ban/unban user everywhere
       *
       * @param {String}   username       Username
       * @param {Boolean}  state          State: ban (true) or unban user (false) everywhere
       * @param {Object}   [options]      Options
       * @param {Boolean}  [options.wait] Wait for response before updating user props
       * @return {Promise}                Promise that will be resolved with data after action is completed
       */
      function toggleBanEverywhere(username, state, options) {
        return _action(username, state ? 'banEverywhere' : 'unbanEverywhere', options);
      }

      return {
        toggleFriend:        toggleFriend,
        toggleSubscription:  toggleSubscription,
        toggleMember:        toggleMember,
        toggleBan:           toggleBan,
        toggleBanEverywhere: toggleBanEverywhere,
      };
    }])

    // mask operations
    .factory('Mask', function () {
      var factory = {};

      /**
       * Notice: first bit of a mask is not used
       */

       /**
         * Notice:
         *   Our max filter id is equal 31: last bit (of 32) could be equal to 1
         *
         *   JavaScript bitwise operators converts numbers to signed integers:
         *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Signed_32-bit_integers
         *
         *   If max bit is equal to 1, it will be converted to negative number.
         *
         *   That is why we should manually interpret number as unsigned integer
         */
        function unsigned(number) {
          return number >>> 0;
        }

      /**
       * Change mask accroding to provided operations
       *
       * @param {Number}       mask             Mask field
       * @param {Object}       actions          Operations
       * @param {Number|Array} [actions.add]    Group id(s) to be added in
       * @param {Number|Array} [actions.remove] Group id(s) to be removed from
       *
       * @return {Number} Updated mask
       */
      factory.change = function (mask, actions) {
        var add    = actions.add,
            remove = actions.remove;

        // add
        if (typeof add !== 'undefined') {
          if ( !Array.isArray(add) ) {
            add = [add];
          }

          mask = add.reduce(function (mask, id) {
            return unsigned( mask | Math.pow(2, id) );
          }, mask);
        }

        // remove
        if (typeof remove !== 'undefined') {
          if ( !Array.isArray(remove) ) {
            remove = [remove];
          }

          mask = remove.reduce(function (mask, id) {
            var filterMask = (Math.pow(2, 32) - 1) - Math.pow(2, id);

            return unsigned( mask & filterMask );
          }, mask);
        }

        return mask;
      };

      /**
       * Check mask for inclusion in group
       *
       * @param  {Number} mask    Mask
       * @param  {Number} groupId Group id
       * @return {Boolean}        Result of the check
       */
      factory.check = function (mask, groupId) {
          var groupMask = Math.pow(2, groupId);

          // convert to Boolean, because `&` returns number (group id)
          return Boolean(mask & groupMask);
      };

      return factory;
    })

    /**
     * Service is responsible for retrieving, caching and updating users
     *
     * // get by username
     * UsersCache.get('test');
     *
     * // get all available users
     * UsersCache.get();
     *
     * // get users that satisfy filtering function
     * UsersCache.get( LJ.Function.get('is_community') );
     */
    .factory('UsersCache', ['$q', '$cacheFactory', 'Options',
                  function ( $q,   $cacheFactory,   Options ) {

      var _cache = $cacheFactory('users'),
          options = Options.create({
            journal: LJ.get('remoteUser'),
          }),
          factory;

      /**
       * Add / update user(s) to cache
       * @param  {Array|Object} users Models to cache
       * @return {Array|Object}       Cached models
       */
      function add(users) {
        if (typeof users === 'undefined') {
          return;
        }

        var hash = _cache.get( options.get('journal') ) || {},
            result = users;

        if ( !Array.isArray(users) ) {
          users = [users];
        }

        users.forEach(function (user) {
          if (!user || typeof user !== 'object' || typeof user.username === 'undefined') {
            return;
          }

          var existed = hash[user.username];

          hash[user.username] = existed ? angular.extend(existed, user) : user;
        });

        _cache.put(options.get('journal'), hash);

        return result;
      }

      /**
       * Check if user exists in cache
       *
       * @param {String}   username Username
       * @return {Boolean}          Checking result
       */
      function exists(username) {
        var cachedUsers = _cache.get( options.get('journal') );

        return Boolean( cachedUsers[username] );
      }

      /**
       * User(s) getter
       * @param  {String|Function} [username] Get users by username if string passed,
       *                                      apply filtering function for all users if function passed,
       *                                      return all users, if nothing has been passed
       * @return {Object|Array|NULL}          Result
       *
       * @example
       *
       *     // get by username
       *     get('test');
       *
       *     // get all communities
       *     get( LJ.Function.get('is_community') );
       *
       *     // get all users
       *     get();
       */
      function get(username) {
        var type = typeof username,
            cache;



        if (type === 'string') {
          cache = _cache.get( options.get('journal') );
          return cache && cache[username] ? cache[username] : null;
        }

        if (type === 'function') {
          // get users with filter function
          return _users(username);
        }

        if (type === 'undefined') {
          // get all users
          return _users();
        }

        throw new TypeError('Incorrect argument passed.');
      }

      /**
       * Getter helper
       * @param  {Function} [filter] Filter function
       * @return {Array}             List of users
       */
      function _users(filter) {
        var cachedUsers = _cache.get( options.get('journal') ),
            result = [],
            username;

        for (username in cachedUsers) {
          if ( cachedUsers.hasOwnProperty(username) ) {

            // skip users that not satisfy filter function
            if (filter && !filter( cachedUsers[username] )) {
              continue;
            }

            result.push(cachedUsers[username]);
          }
        }

        return result;
      }

      /**
       * Update user props
       *
       * @param  {String} username Username of user to update
       * @param  {Object} props    Props to update
       * @return {Object}          Updated user
       */
      function update(username, props) {
        var user = get(username) || { username: username };

        angular.extend(user, props);
        add(user);

        return user;
      }

      factory = {
        // cache users
        add:    add,
        update: update,

        // work with options
        set: options.set,

        // work with users
        get: get,
        exists: exists
      };

      return factory;
    }])

    .factory('Users', ['$q', '$timeout', 'Api', 'Mask', 'UsersCache', 'Options',
             function ( $q,   $timeout,   Api,   Mask,   UsersCache,   Options ) {

        var rpc = {
              friends: {
                read:    'relations.list_friends',
                readOne: 'relations.get_friend',
                update:  'groups.update_users'
              },

              subscriptions: {
                read:    'relations.list_subscriptions',
                readOne: 'relations.get_subscription',
                update:  'filters.update_users'
              }
            },
            options = Options.create({
              type:    'friends',
              journal: LJ.get('remoteUser')
            });

        function _rpc(rpcType) {
          return rpc[ options.get('type') ][rpcType];
        }

        /**
         * Check if user should be extracted from cache according friend/subscription status
         * @param  {Object}  user User model
         * @return {Boolean}      Result
         */
        function _isUserCorrect(user) {
          if (options.get('type') === 'subscriptions') {
            return Boolean( user.is_subscribedon );
          }

          // we are able to add any user to group, that is why any know user is correct for groups
          return true;
        }

        /**
         * Mask getter
         *
         * @param  {Object} user    User object
         * @param {Number}  [value] Mask value to set
         * @return {Number}         Mask
         */
        function mask(user, value) {
          if (typeof value === 'undefined') {
            return user[ maskField() ] || 1;
          }

          user[ maskField() ] = value;
        }

        function maskField() {
          return options.get('type') === 'subscriptions' ? 'filtermask' : 'groupmask';
        }

        function fetchUser(username, fields, options) {
          return Api.call('user.get', { target: username, fields: fields }, options)
            .then(function (response) {
              var user = response.user;

              UsersCache.add(user);
              return user;
            });
        }

        function fetchFriends(fields) {
          return Api.call('relations.list_friends', {
            journal: options.get('journal'),
            fields:  fields
          }).then( _setFlagAndCache('is_friend') );
        }

        function fetchGroupUsers(fields) {
          return Api.call('groups.list_users', {
            journal: options.get('journal'),
            fields:  fields
          }).then(function (response) {
            UsersCache.add(response.users);
            return response;
          });
        }

        function fetchSubscriptions(fields) {
          return Api.call('relations.list_subscriptions', {
            journal: options.get('journal'),
            fields:  fields
          }).then( _setFlagAndCache('is_subscribedon') );
        }

        function fetchBanned(fields) {
          return Api.call('relations.list_banned', {
            journal: options.get('journal'),
            fields:  fields
          }).then( _setFlagAndCache('is_banned') );
        }

        /**
         * Fetch helper method: set flag for fetched users, cache and return them
         * @return {Function} Function to use inside of .then()
         */
        function _setFlagAndCache(flag) {
          return function (response) {
            var users = response.users;

            users.forEach(
              LJ.Function.set(flag, true)
            );

            UsersCache.add(users);
            return users;
          };
        }

        function fetchCount(type) {
          return Api.call('relations.'+ type +'_count').then(function (response) {
            return response.count;
          });
        }

        /**
         * Sync user(s) model(s) with server
         *
         * @param  {Array|Object} users User model or collection of models
         * @return {Promise}            Promise that will be resolved after server response
         */
        function sync(users) {
          if ( !angular.isArray(users) ) {
            users = [users];
          }

          if (users.length === 0) {
            return $q.reject('You should provide users to sync.');
          }

          return Api.call(_rpc('update'), {
            users:   users,
            journal: options.get('journal')
          }).then(function (response) {
            UsersCache.add(response.users);
            return response;
          });
        }

        /**
         * Check is user listed in group/filter with `id`
         *
         * @method  isUserInGroup
         *
         * @param  {String}  username Username
         * @param  {Number}  id       Filter/Group id (1..30)
         * @return {Boolean}          Result
         */
        function isUserInGroup(username, id) {
          var user = UsersCache.get(username);

          return user ? Mask.check(mask(user), id) : false;
        }

        /**
         * @todo Remove this method and replace it usage in controller
         *
         * Temp method for extracting only existing users by usernames
         *
         * @param  {Array}  usernames   Username(s)
         * @return {Array}              Array of existing users
         */
        function getExisting(usernames) {
          return usernames.filter(UsersCache.exists)
            .map(UsersCache.get)
            .filter(_isUserCorrect);
        }

        /**
          * Filter users that are in exact group
          *
          * @method fromGroup
          *
          * @param  {Object} options          Options for users filtering
          * @param  {Number} options.id       Group id: (1..31)
          * @param  {Number} [options.limit]  Limit of users to extract
          * @param  {String} [options.filter] Filter username string
          * @return {Array}                   Array of users that are in group
          */
        function fromGroup(options) {
          var filter = (options.filter || '').toLowerCase(),
              users = UsersCache.get(function (user) {

                // filter friends/subscription
                if ( !_isUserCorrect(user) ) {
                  return false;
                }

                if ( !Mask.check(mask(user), options.id) ) {
                  return false;
                }

                if ( filter && user.display_username.toLowerCase().indexOf(filter) === -1 ) {
                  return false;
                }

                return true;
              });

          if (options.limit) {
            users = users.slice(0, options.limit);
          }

          return users;
        }

        /**
          * Filter users that are out of exact group
          *
          * @method outOfGroup
          *
          * @param {Object} options           Options for users filtering
          * @param {Number} options.id        Group id: (1..30)
          * @param {Number} [options.limit]   Limit of users to extract
          * @param {String} [options.filter]  Filter username string
          * @return {Array}                   Array of users that are out of group
          */
        function outOfGroup(options) {
          var filter = (options.filter || '').toLowerCase(),
              users = UsersCache.get(function (user) {

                // filter friends/subscription
                if ( !_isUserCorrect(user) ) {
                  return false;
                }

                if ( Mask.check(mask(user), options.id) ) {
                  return false;
                }

                if ( filter && user.display_username.toLowerCase().indexOf(filter) === -1 ) {
                  return false;
                }

                return true;
              });

          if (options.limit) {
            users = users.slice(0, options.limit);
          }

          return users;
        }

        /**
         * Add users to group
         *
         * @method addToGroup
         *
         * @param  {Number}         id          Group id
         * @param  {String|Array}   usernames   Username(s) of users to add
         * @return {Promise}                    Promise that will be resolved
         *                                      with synced users
         */
        function addToGroup(id, usernames) {
          if ( !Array.isArray(usernames) ) {
            usernames = [usernames];
          }

          var users;

          if (options.get('type') === 'subscriptions') {
            // for subscriptions we should filter non-existed
            users = getExisting(usernames);
          } else {
            users = usernames.map(function (username) {
              return UsersCache.get(username) || { username: username };
            });
          }

          users.forEach(function (user) {
            mask(user, Mask.change(mask(user), { add: id }));
          });

          return sync(users);
        }

        /**
         * Remove users from group
         *
         * @method removeFromGroup
         *
         * @param {Number}        id                Group id
         * @param {String|Array}  usernames         Username(s) of users to remove
         * @param {Object}        [options]         Options
         * @param {Boolean}       [options.silent]  Remove users from group without sync
         *
         * @return {Promise|Undefined}        Promise that will be resolved
         *                                    with synced users or Undefined, if options.silent provided
         */
        function removeFromGroup(id, usernames, options) {
          if ( !Array.isArray(usernames) ) {
            usernames = [usernames];
          }

          var existing = getExisting(usernames);

          // update mask
          existing.forEach(function (user) {
            mask(user, Mask.change(mask(user), { remove: id }));
          });

          // return without sync if silent
          if (options && options.silent) {
            return;
          }

          return sync(existing);
        }

        /**
         * Set alias for user
         *
         * @param  {String}  username Username
         * @param  {String}  value    User alias
         * @return {Promise}          Promise that will be resolved with data when complete
         */
        function alias(username, value) {
          UsersCache.update(username, { alias: value });
          return Api.call('user.alias_set', { target: username, alias: value });
        }

        /**
         * Sort helper
         *
         * @param {String}   prop Property. Available: username or display_username
         * @return {Function}      Comparator function
         *
         * @example
         *
         *    users.sort( Users.comparator('username') );
         */
        function comparator(prop) {
          return function (a, b) {
            return a[prop].toLowerCase().localeCompare(
              b[prop].toLowerCase()
            );
          };
        }

        /**
         * Patched version of options.set
         *
         * If we set journal for users it should also set journal for cache
         */
        function set() {
          var old = options.get('journal'),
              journal;

          options.set.apply(null, arguments);
          journal = options.get('journal');

          // update journal of cache if it changed
          if ( journal !== old ) {
            UsersCache.set('journal', journal);
          }
        }

        return {
          USERHEAD_FIELDS: {
            alias:        1,
            journal_url:  1,
            profile_url:  1,
            userhead_url: 1,
            is_invisible: 1,
            journaltype:  1
          },

          // options
          set: set,
          get: options.get,

          Cache: UsersCache,

          // work with server
          fetchUser:          fetchUser,
          fetchBanned:        fetchBanned,
          fetchFriends:       fetchFriends,
          fetchGroupUsers:    fetchGroupUsers,
          fetchSubscriptions: fetchSubscriptions,

          fetchCount: fetchCount,

          sync: sync,

          alias: alias,

          isUserInGroup: isUserInGroup,
          getExisting: getExisting,
          fromGroup: fromGroup,
          outOfGroup: outOfGroup,
          addToGroup: addToGroup,
          removeFromGroup: removeFromGroup,

          comparator: comparator
        };
    }]);
}());
;

/* file-end: js/core/angular/users.js 
----------------------------------------------------------------------------------*/

/* ---------------------------------------------------------------------------------
   file-start: js/core/angular/ljUser.js 
*/




Site.page.template['angular/ljUser.ng.tmpl'] = '<span\n    class=\"\n        ljuser\n        i-ljuser\n        i-ljuser-type-{{user.journaltype}}\n        \"\n    ng-class=\"{\n        \'i-ljuser-deleted\': user.is_invisible,\n        \'i-ljuser-nopopup noctxpopup\': user.noctxpopup,\n        \'i-ljuser-withalias\': user.alias,\n        \'i-ljuser-showalias\': user.showalias\n    }\"\n    data-ljuser=\"{{user.username}}\"\n    lj:user=\"{{user.username}}\"\n    ><!--\n\n    Userhead\n    --><a\n        class=\"i-ljuser-profile\"\n        ng-href=\"{{user.profile_url}}\"\n        ng-attr-target=\"{{user.target ? user.target : \'_self\'}}\"\n        ><!--\n        --><img\n            class=\"i-ljuser-userhead\"\n            ng-src=\"{{user.userhead_url}}\"\n            ><!--\n    --></a><!--\n\n    Username\n    --><a\n        class=\"i-ljuser-username\"\n        ng-href=\"{{user.journal_url}}\"\n        ng-attr-title=\"{{user.alias}}\"\n        ng-attr-target=\"{{user.target ? user.target : \'_self\'}}\"\n        ><b ng-bind=\"user.display_name\"></b></a><!--\n\n    Alias\n    --><span\n        class=\"i-ljuser-alias\"\n        ng-bind=\"user.alias\"\n        ></span><!--\n\n--></span>\n';
/**
 * lj-user-dynamic directive
 *
 * Available options:
 * - noctxpopup: disable contextual popup over the user
 *
 * @example
 *
 *     <span lj-user-dynamic="'good'" />
 *     <span lj-user-dynamic="username" />
 *     <span
 *       lj-user-dynamic="'good'"
 *       lj-user-dynamic-options="{ noctxpopup: true }"
 *       />
 */

angular.module('LJ.User', ['LJ.Api', 'LJ.Templates', 'Users'])

  /**
   * Helper service that allow us to get lj-user html for user with username and options
   *
   * @example
   *
   *     // returns promise that will be resolved with html for user `good`
   *     ljUser.get('good', { noctxpopup: true });
   */
  .factory('ljUser', ['$rootScope', 'Api', '$q', '$templateCache', '$compile', '$timeout', 'Users',
            function ( $rootScope,   Api,   $q,   $templateCache,   $compile,   $timeout,   Users ) {

    // wrapper is needed because we have to get outerHTML
    var wrapper = angular.element('<div />'),
        tmpl    = $templateCache.get('ljUser.ng.tmpl');

    /**
     * Prepare data for user, fetch if not ready
     *
     * @param  {String} username Username
     * @return {Promise}         Promise that will be resolved with user data
     */
    function prepare(username) {
      var defer = $q.defer(),
          user  = Users.Cache.get(username);

      // do not fetch user data if it has been already fetched
      if (user && user.userhead_url) {
        defer.resolve(user);
        return defer.promise;
      }

      return Users.fetchUser(username, Users.USERHEAD_FIELDS, { cache: true });
    }

    /**
     * Get user html
     * @param  {String} username  Username
     * @param  {Object} [options] User options
     * @return {Promise}          Promise that will be resolved with user data
     */
    function get(username, options) {
      var defer = $q.defer(),

          // create temporary scope for html compilation
          scope = $rootScope.$new();

      prepare(username).then(function () {
        var element;

        scope.user = angular.extend({}, Users.Cache.get(username), options || {});
        element = $compile(tmpl)(scope);

        // let angular apply all directives
        $timeout(function () {
          defer.resolve(
            // outerHTML
            wrapper.empty().append(element).html()
          );

          scope.$destroy();
        });
      });

      return defer.promise;
    }

    return {
      prepare: prepare,
      get: get
    };
  }])
  .directive('ljUserDynamic', ['$parse', 'Users', 'ljUser',
                     function ( $parse,   Users,   ljUser ) {

    return {
      templateUrl: 'ljUser.ng.tmpl',
      replace: true,
      scope: true,
      compile: function (element, attrs) {
        var usernameGetter = $parse(attrs.ljUserDynamic),
            optionsGetter  = $parse(attrs.ljUserDynamicOptions);

        return function link(scope) {
          var username = usernameGetter(scope),
              options  = optionsGetter(scope);

          scope.user = angular.extend({
            username: username,
            display_username: username
          }, options || {});

          ljUser.prepare(username).then(function () {
            scope.$watch(function () {
              return Users.Cache.get(username);
            }, function (user) {
              angular.extend(scope.user, user);
            }, true);
          });
        };
      }
    };
  }]);
;

/* file-end: js/core/angular/ljUser.js 
----------------------------------------------------------------------------------*/

Site.page.template['angular/widgets/todayLJ/todayLJ.ng.tmpl'] = '<!-- today lj (discovery) -->\n\n<div\n    class=\"b-todaylj\"\n    ng-class=\"{\n        \'b-todaylj-loading\': isLoading\n    }\"\n    ng-if=\"isSup || type === \'homepage\'\"\n    >\n\n    <!-- head -->\n    <header class=\"b-todaylj-head\">\n        <h3\n            class=\"b-todaylj-title\"\n            lj-ml=\"main.todaylj.head\"\n            ng-if=\"type === \'homepage\'\"\n            >\n        </h3>\n        <h3\n            class=\"b-todaylj-title\"\n            lj-ml=\"discovery.todaylj.head\"\n            ng-if=\"type === \'discovery\'\"\n            >\n        </h3>\n    </header>\n\n    <!-- body -->\n    <div class=\"b-todaylj-body\">\n\n        <!-- items -->\n        <ul class=\"b-todaylj-items\">\n\n            <!-- item -->\n            <li\n                class=\"b-todaylj-item\"\n                ng-repeat=\"item in items\"\n                >\n\n                <!-- pic -->\n                <figure\n                    class=\"b-todaylj-figure\"\n                    ng-if=\"item.image\"\n                    >\n                    <a\n                        target=\"{{target}}\"\n                        ng-href=\"{{item.url}}\"\n                        >\n                        <img\n                            ng-src=\"{{item.image}}\"\n                            alt=\"\"\n                            class=\"b-todaylj-pic\"\n                            >\n                    </a>\n                </figure>\n\n                <!-- caption -->\n                <h4 class=\"b-todaylj-caption\">\n                    <a\n                        ng-href=\"{{item.url}}\"\n                        target=\"{{target}}\"\n                        lj-html=\"item.subject\"\n                        >\n                    </a>\n                </h4>\n\n                <!-- meta -->\n                <p\n                    class=\"b-todaylj-meta\"\n                    ng-if=\"item.user\"\n                    >\n                    <span class=\"b-todaylj-username\">\n                        <span\n                            ng-if=\"item.user\"\n                            lj-user-dynamic=\"item.user.username\"\n                            lj-user-dynamic-options=\"{target: \'_blank\'}\"\n                            ></span>\n                    </span>\n                    <span\n                        class=\"b-todaylj-comments\"\n                        ng-if=\"item.comments_url\"\n                        >\n                        <a\n                            target=\"{{target}}\"\n                            ng-href=\"{{item.comments_url}}\"\n                            >\n                             <span class=\"b-todaylj-comments-icon\">\n                                <svg class=\"svgicon\">\n                                    <use xlink:href=\"#fi-comment-bold\"/>\n                                </svg>\n                             </span>\n                             <span\n                                class=\"b-todaylj-comments-inner\"\n                                >\n                                <span\n                                    ng-show=\"item.comments_cnt === 0\"\n                                    lj-ml=\"entryunit.comments.none\"\n                                    ></span>\n                                <span\n                                    ng-hide=\"item.comments_cnt === 0\"\n                                    lj-ml=\"entryunit.comments.numbersonly\"\n                                    lj-ml-resolve=\"{reply_count: item.comments_cnt}\"\n                                    ></span>\n                            </span>\n                        </a>\n                    </span>\n                </p>\n\n            </li><!-- /item -->\n\n        </ul><!-- /items -->\n\n        <!-- dummy loader -->\n        <div class=\"b-todaylj-dummy\">\n            <div class=\"b-todaylj-dummy-item\">\n                <span class=\"b-todaylj-dummy-pic\"></span>\n                <div class=\"b-todaylj-dummy-caption\">\n                    <span class=\"b-todaylj-dummy-subject\"></span>\n                </div>\n                <span class=\"b-todaylj-dummy-meta\"></span>\n            </div>\n            <div class=\"b-todaylj-dummy-item\">\n                <div class=\"b-todaylj-dummy-caption\">\n                    <span class=\"b-todaylj-dummy-subject\"></span>\n                </div>\n                <span class=\"b-todaylj-dummy-meta\"></span>\n            </div>\n            <div class=\"b-todaylj-dummy-item\">\n                <div class=\"b-todaylj-dummy-caption\">\n                    <span class=\"b-todaylj-dummy-subject\"></span>\n                </div>\n                <span class=\"b-todaylj-dummy-meta\"></span>\n            </div>\n            <div class=\"b-todaylj-dummy-item\">\n                <div class=\"b-todaylj-dummy-caption\">\n                    <span class=\"b-todaylj-dummy-subject\"></span>\n                </div>\n                <span class=\"b-todaylj-dummy-meta\"></span>\n            </div>\n            <div class=\"b-todaylj-dummy-item\">\n                <div class=\"b-todaylj-dummy-caption\">\n                    <span class=\"b-todaylj-dummy-subject\"></span>\n                </div>\n                <span class=\"b-todaylj-dummy-meta\"></span>\n            </div>\n        </div>\n\n    </div><!-- /body -->\n\n</div><!-- /todaylj -->\n\n\n';
LJ.injectStyle('/* TODAY LJ */\n\n\n\n.b-todaylj {\n    width: 300px;\n    margin: 0 0 25px;\n    margin: 0 0 1.5625rem;\n    padding: 0 0 25px 30px;\n    padding: 0 0 1.5625rem 30px;\n    border-bottom: 1px solid #DAE3E6;\n    }\n\n    /* head */\n    .b-todaylj-head {\n        margin: 0 0 16px;\n        margin: 0 0 1rem;\n        padding: 0;\n        }\n    .b-feedwidgets .b-todaylj-head {\n        margin: 0 0 13px;\n        margin: 0 0 0.8125rem;\n        }\n        .b-todaylj-title {\n            margin: 0;\n            padding: 0;\n            font-style: normal;\n            font-weight: normal;\n            font-size: 20px;\n            font-size: 1.25rem;\n            text-transform: uppercase;\n            color: #829399;\n            }\n\n    /* body */\n    .b-todaylj-body {\n        margin: 0;\n        padding: 0;\n        }\n    .b-feedwidgets .b-todaylj-body {\n        font-size: 14px;\n        font-size: 0.875rem;\n        }\n\n        /* items */\n        .b-todaylj-items {\n            margin: 0;\n            padding: 0;\n            list-style: none;\n            }\n\n            /* item */\n            .b-todaylj-item {\n                margin: 11px 0 0;\n                margin: 0.7rem 0 0;\n                padding: 0;\n                }\n            .b-todaylj-item:first-child {\n                margin-top: 0;\n                }\n\n                /* image */\n                .b-todaylj-figure {\n                    margin: 0 0 16px;\n                    margin: 0 0 1rem;\n                    padding: 0;\n                    }\n                    .b-todaylj-pic {\n                        max-width: 100%;\n                        height: auto;\n                        margin: 0;\n                        vertical-align: top;\n                        }\n                /* hide at /feed page (LJSUP-18145) */\n                .b-feedwidgets .b-todaylj-figure {\n                    display: none;\n                    }\n\n                /* caption */\n                .b-todaylj-caption {\n                    margin: 0 0 4px;\n                    margin: 0 0 0.3rem;\n                    padding: 0;\n                    font-weight: normal;\n                    font-size: 18px;\n                    font-size: 1.125rem;\n                    line-height: 1.2;\n                    }\n                    .b-todaylj-caption A:link,\n                    .b-todaylj-caption A:visited,\n                    .b-discoveryarticle .b-todaylj-caption A:link,\n                    .b-discoveryarticle .b-todaylj-caption A:visited {\n                        display: inline-block;\n                        color: #242F33;\n                        }\n                    .b-todaylj-caption A:hover,\n                    .b-todaylj-caption A:active,\n                    .b-discoveryarticle .b-todaylj-caption A:hover,\n                    .b-discoveryarticle .b-todaylj-caption A:active {\n                        display: inline-block;\n                        color: #00A3D9;\n                        }\n                .b-feedwidgets .b-todaylj-caption {\n                    margin: 0;\n                    font-size: 1em;\n                    line-height: 1.4;\n                    }\n\n                /* meta */\n                .b-todaylj-meta {\n                    margin: 0;\n                    padding: 0;\n                    }\n                .b-mainpage .b-todaylj-meta {\n                    letter-spacing: 0.05rem;\n                    text-transform: uppercase;\n                    font-family: \"ProximaNovaSemibold\",Tahoma,Arial,sans-serif;\n                    font-size: 14px;\n                    font-size: 0.875rem;\n                    }\n                    /* links */\n                    .b-todaylj-meta A:link,\n                    .b-todaylj-meta A:visited {\n                        color: #00A3D9;\n                        }\n                    .b-todaylj-meta A:hover,\n                    .b-todaylj-meta A:active {\n                        color: #0086B3;\n                        }\n                    /* username */\n                    .b-todaylj-username {\n                        margin: 0 16px 0 0\n                        margin: 0 1rem 0 0\n                        }\n                    /* comments */\n                    .b-todaylj-comments {\n                        position: relative;\n                        display: inline-block;\n                        margin: 0 16px 5px 0;\n                        margin: 0 1rem 0.3rem 0;\n                        padding: 0 0 0 22px;\n                        }\n                        .b-todaylj-comments-icon {\n                            position: absolute;\n                            top: 0;\n                            left: 0;\n                            width: 17px;\n                            height: 16px;\n                            margin: 0;\n                            padding: 0;\n                            background: url(/img/icons/unit_v3.png?v=40336) no-repeat 0 -17px;\n                            font: 0px/0 serif;\n                            color: #7A9199;\n                            }\n                            .b-todaylj-comments-icon .svgicon {\n                                width: 17px;\n                                height: 16px;\n                                }\n                        /* enabled feedsettings */\n                        .b-feedsettings-on .b-todaylj-comments-icon {\n                            background: none;\n                            }\n\n        /* dummy loader */\n        .b-todaylj-dummy {\n            display: none;\n            margin: 0;\n            padding: 0;\n            list-style: none;\n            }\n            .b-todaylj-dummy-item {\n                margin: 32px 0 0;\n                margin: 2rem 0 0;\n                padding: 0;\n                }\n            .b-todaylj-dummy-item:first-child {\n                margin-top: 0;\n                }\n                /* image */\n                .b-todaylj-dummy-pic {\n                    display: inline-block;\n                    width: 300px;\n                    height: 200px;\n                    margin: 0 0 8px;\n                    margin: 0 0 0.5rem;\n                    padding: 0;\n                    background: #F8F8F8;\n                    -webkit-animation: loading-todaylj 1s infinite;\n                    -moz-animation:    loading-todaylj 1s infinite;\n                    -o-animation:      loading-todaylj 1s infinite;\n                    animation:         loading-todaylj 1s infinite;\n                    }\n                /* hide at /feed page (LJSUP-18145) */\n                .b-feedwidgets .b-todaylj-dummy-pic {\n                    display: none;\n                    }\n                /* caption */\n                .b-todaylj-dummy-caption {\n                    display: block;\n                    height: 48px;\n                    height: 3rem;\n                    margin: 0 0 8px;\n                    margin: 0 0 0.5rem;\n                    padding: 0;\n                    }\n                    .b-todaylj-dummy-subject {\n                        position: relative;\n                        display: block;\n                        width: 250px;\n                        height: 19px;\n                        height: 1.2rem;\n                        margin: 0 0 32px;\n                        margin: 0 0 2rem;\n                        padding: 0;\n                        background: #F8F8F8;\n                        -webkit-animation: loading-todaylj 1s infinite;\n                        -moz-animation:    loading-todaylj 1s infinite;\n                        -o-animation:      loading-todaylj 1s infinite;\n                        animation:         loading-todaylj 1s infinite;\n                        }\n                    .b-todaylj-dummy-subject:after {\n                        content: \" \";\n                        position: absolute;\n                        top: 24px;\n                        top: 1.5rem;\n                        left: 0;\n                        width: 200px;\n                        height: 19px;\n                        height: 1.2rem;\n                        margin: 0;\n                        padding: 0;\n                        background: #F8F8F8;\n                        }\n                /* meta */\n                .b-todaylj-dummy-meta {\n                    display: inline-block;\n                    width: 120px;\n                    height: 16px;\n                    height: 1rem;\n                    margin: 0;\n                    padding: 0;\n                    background: #F8F8F8;\n                    -webkit-animation: loading-todaylj 1s infinite;\n                    -moz-animation:    loading-todaylj 1s infinite;\n                    -o-animation:      loading-todaylj 1s infinite;\n                    animation:         loading-todaylj 1s infinite;\n                    }\n                @-webkit-keyframes loading-todaylj {\n                    0%   { background: #F8F8F8; }\n                    50%  { background: #FBFBFB; }\n                    100% { background: #F8F8F8; }\n                }\n                @-moz-keyframes loading-todaylj {\n                    0%   { background: #F8F8F8; }\n                    50%  { background: #FBFBFB; }\n                    100% { background: #F8F8F8; }\n                }\n                @-o-keyframes loading-todaylj {\n                    0%   { background: #F8F8F8; }\n                    50%  { background: #FBFBFB; }\n                    100% { background: #F8F8F8; }\n                }\n                @keyframes loading-todaylj {\n                    0%   { background: #F8F8F8; }\n                    50%  { background: #FBFBFB; }\n                    100% { background: #F8F8F8; }\n                }\n\n/* loading */\n.b-todaylj-loading {\n    }\n    .b-todaylj-loading .b-todaylj-body {\n        min-height: 300px;\n        }\n        .b-todaylj-loading .b-todaylj-dummy {\n            display: block;\n            }\n        .b-todaylj-loading .b-todaylj-items {\n            visibility: hidden;\n            }\n\n\n\n@media all and (max-width: 1000px) {\n\n    .b-todaylj {\n        width: auto;\n        max-width: 650px;\n        margin-left: auto;\n        margin-right: auto;\n        padding-left: 0;\n        padding-bottom: 0;\n        border-bottom: 0;\n        text-align: left;\n        }\n        .b-todaylj-items {\n            -moz-column-count: 2;\n            -moz-column-gap: 50px;\n            -webkit-column-count: 2;\n            -webkit-column-gap: 50px;\n            column-count: 2;\n            column-gap: 50px;\n            }\n            .b-todaylj-item {\n                -webkit-column-break-inside: avoid;\n                -moz-column-break-inside: avoid;\n                column-break-inside: avoid;\n                }\n\n}\n\n\n\n@media all and (max-width: 800px) {\n\n    .b-todaylj {\n        width: 300px;\n        }\n        .b-todaylj-items {\n            -moz-column-count: auto;\n            -moz-column-gap: normal;\n            -webkit-column-count: auto;\n            -webkit-column-gap: normal;\n            column-count: auto;\n            column-gap: normal;\n            }\n\n}\n\n\n\n@media all and (max-width: 650px) {\n\n    .b-todaylj {\n        width: auto;\n        max-width: 300px;\n        }\n\n}\n\n\n');
//= require_ml main.todaylj.head,
//= require_ml discovery.todaylj.head,
//= require_ml entryunit.comments.numbersonly,
//= require_ml entryunit.comments.none

/**
 * Discovery in LiveJournal widget for Discovery page
 *
 * Usage:
 *
 *  <div lj-widget-discovery lj-widget-discovery-target="_blank"></div>
 */
angular.module('LJ.Widget.Discovery', ['LJ.Templates', 'LJ.Api', 'LJ.Directives', 'LJ.User', 'Users'])
  .directive('ljWidgetDiscovery', ['Api', 'Users', function (Api, Users) {
    return {
      templateUrl: 'todayLJ.ng.tmpl',
      link: function (scope, element, attrs) {
        scope.type = 'discovery';
        scope.isLoading = true;

        scope.target = angular.isDefined(attrs.ljWidgetDiscoveryTarget) ?
                        attrs.ljWidgetDiscoveryTarget :
                        '_blank';

        Api.call('discovery.today', null, {cache: true}).then(function (response) {
          scope.items = response.items;

          // cache users
          Users.Cache.add(
            scope.items.map( LJ.Function.get('user') )
          );

          scope.isLoading = false;
        });

        scope.isSup = LJ.get('remote_is_sup');
      }
    };
  }]);


/**
 * Top in LiveJournal widget for Home page
 *
 * Usage:
 *
 *  <div lj-widget-top lj-widget-top-target="_blank"></div>
 */
angular.module('LJ.Widget.Top', ['LJ.Templates', 'LJ.Api', 'LJ.Directives', 'LJ.User', 'Users'])
  .directive('ljWidgetTop', ['Api', 'Users', '$q', function (Api, Users, $q) {
    return {
      templateUrl: 'todayLJ.ng.tmpl',
      link: function (scope, element, attrs) {
        var blacknames = [],
            settings = {},
            items = [];

        function getSettings() {
          return Api.call('ratings.show_flags', { cache: true });
        }

        function getBlackNames() {
          return Api.call('ratings.blacklist_get', { cache: true }).then(function (response) {
            return response.blacklist.map( LJ.Function.get('user') );
          });
        }

        function filterItems(items) {
          var dups = [];

          return items.filter(function (item) {
            var name = item.user.display_name;

            dups.push(name);

            // Сheck for the entering to blacklist and check for uniqueness, if it's necessary
            return !!( blacknames.indexOf(name) === -1
                       || (settings.show_unique_items && dups.indexOf(name) === -1) );
          });
        }

        function loadItems(page) {
          // Only 5 items should be displayed
          var length = 5;

          // Only 5 times can be fetched
          var times = 5;

          page = page || 0;

          return Api.call('homepage.today', { page: page }, { cache: true }).then(function (response) {
            var filtered = filterItems(response.items);

            Array.prototype.push.apply(items, filtered);

            if (items.length < length && page < times) {
              return loadItems(page + 1);
            }

            // cache users
            Users.Cache.add(
              items.map( LJ.Function.get('user') )
            );

            scope.isLoading = false;

            return items.slice(0, length);
          });
        }

        if ( LJ.get('remote') ) {
          $q.all({ settings: getSettings(), names: getBlackNames() })
            .then(function (result) {
              angular.extend(settings, result.settings);

              blacknames = result.names;

              loadItems().then(function (result) {
                scope.items = result;
              });
            });
        } else {
          loadItems().then(function (result) {
            scope.items = result;
          });
        }

        scope.type = 'homepage';
        scope.isLoading = true;
        scope.items = [];

        scope.target = angular.isDefined(attrs.ljWidgetTopTarget) ?
                        attrs.ljWidgetTopTarget :
                        '_blank';

        scope.isSup = LJ.get('remote_is_sup');
      }
    };
  }]);
;

/* file-end: js/widgets/angular/today.js 
----------------------------------------------------------------------------------*/

/* ---------------------------------------------------------------------------------
   file-start: js/widgets/angular/updates.js 
*/

/**
 * Updates widgets
 */


/* ---------------------------------------------------------------------------------
   file-start: js/lib/es6-shim.min.js 
*/

(function(e){"use strict";var t=function(e){try{e()}catch(t){return false}return true};var r=function(e,t){try{var r=function(){e.apply(this,arguments)};if(!r.__proto__){return false}Object.setPrototypeOf(r,e);r.prototype=Object.create(e.prototype,{constructor:{value:e}});return t(r)}catch(n){return false}};var n=function(){try{Object.defineProperty({},"x",{});return true}catch(e){return false}};var a=function(){var e=false;if(String.prototype.startsWith){try{"/a/".startsWith(/a/)}catch(t){e=true}}return e};var i=new Function("return this;");var o=function(){var o=i();var u=o.isFinite;var s=!!Object.defineProperty&&n();var f=a();var c=Array.prototype.slice;var l=String.prototype.indexOf;var h=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;var p;var y=function(e,t){Object.keys(t).forEach(function(r){var n=t[r];if(r in e)return;if(s){Object.defineProperty(e,r,{configurable:true,enumerable:false,writable:true,value:n})}else{e[r]=n}})};var b=Object.create||function(e,t){function r(){}r.prototype=e;var n=new r;if(typeof t!=="undefined"){y(n,t)}return n};var g=typeof Symbol==="function"&&Symbol.iterator||"_es6shim_iterator_";if(o.Set&&typeof(new o.Set)["@@iterator"]==="function"){g="@@iterator"}var m=function(e,t){if(!t){t=function n(){return this}}var r={};r[g]=t;y(e,r)};var w=function L(e){var t=h.call(e);var r=t==="[object Arguments]";if(!r){r=t!=="[object Array]"&&e!==null&&typeof e==="object"&&typeof e.length==="number"&&e.length>=0&&h.call(e.callee)==="[object Function]"}return r};var d=function(e){if(!j.TypeIsObject(e))throw new TypeError("bad object");if(!e._es6construct){if(e.constructor&&j.IsCallable(e.constructor["@@create"])){e=e.constructor["@@create"](e)}y(e,{_es6construct:true})}return e};var j={CheckObjectCoercible:function(e,t){if(e==null)throw new TypeError(t||"Cannot call method on "+e);return e},TypeIsObject:function(e){return e!=null&&Object(e)===e},ToObject:function(e,t){return Object(j.CheckObjectCoercible(e,t))},IsCallable:function(e){return typeof e==="function"&&h.call(e)==="[object Function]"},ToInt32:function(e){return e>>0},ToUint32:function(e){return e>>>0},ToInteger:function(e){var t=+e;if(Number.isNaN(t))return 0;if(t===0||!Number.isFinite(t))return t;return Math.sign(t)*Math.floor(Math.abs(t))},ToLength:function(e){var t=j.ToInteger(e);if(t<=0)return 0;if(t>Number.MAX_SAFE_INTEGER)return Number.MAX_SAFE_INTEGER;return t},SameValue:function(e,t){if(e===t){if(e===0)return 1/e===1/t;return true}return Number.isNaN(e)&&Number.isNaN(t)},SameValueZero:function(e,t){return e===t||Number.isNaN(e)&&Number.isNaN(t)},IsIterable:function(t){return j.TypeIsObject(t)&&(t[g]!==e||w(t))},GetIterator:function(e){if(w(e)){return new p(e,"value")}var t=e[g]();if(!j.TypeIsObject(t)){throw new TypeError("bad iterator")}return t},IteratorNext:function(e){var t=arguments.length>1?e.next(arguments[1]):e.next();if(!j.TypeIsObject(t)){throw new TypeError("bad iterator")}return t},Construct:function(e,t){var r;if(j.IsCallable(e["@@create"])){r=e["@@create"]()}else{r=b(e.prototype||null)}y(r,{_es6construct:true});var n=e.apply(r,t);return j.TypeIsObject(n)?n:r}};var I=function(){function e(e){var t=Math.floor(e),r=e-t;if(r<.5){return t}if(r>.5){return t+1}return t%2?t+1:t}function t(t,r,n){var a=(1<<r-1)-1,i,o,u,s,f,c,l,h;if(t!==t){o=(1<<r)-1;u=Math.pow(2,n-1);i=0}else if(t===Infinity||t===-Infinity){o=(1<<r)-1;u=0;i=t<0?1:0}else if(t===0){o=0;u=0;i=1/t===-Infinity?1:0}else{i=t<0;t=Math.abs(t);if(t>=Math.pow(2,1-a)){o=Math.min(Math.floor(Math.log(t)/Math.LN2),1023);u=e(t/Math.pow(2,o)*Math.pow(2,n));if(u/Math.pow(2,n)>=2){o=o+1;u=1}if(o>a){o=(1<<r)-1;u=0}else{o=o+a;u=u-Math.pow(2,n)}}else{o=0;u=e(t/Math.pow(2,1-a-n))}}c=[];for(f=n;f;f-=1){c.push(u%2?1:0);u=Math.floor(u/2)}for(f=r;f;f-=1){c.push(o%2?1:0);o=Math.floor(o/2)}c.push(i?1:0);c.reverse();l=c.join("");h=[];while(l.length){h.push(parseInt(l.slice(0,8),2));l=l.slice(8)}return h}function r(e,t,r){var n=[],a,i,o,u,s,f,c,l;for(a=e.length;a;a-=1){o=e[a-1];for(i=8;i;i-=1){n.push(o%2?1:0);o=o>>1}}n.reverse();u=n.join("");s=(1<<t-1)-1;f=parseInt(u.slice(0,1),2)?-1:1;c=parseInt(u.slice(1,1+t),2);l=parseInt(u.slice(1+t),2);if(c===(1<<t)-1){return l!==0?NaN:f*Infinity}else if(c>0){return f*Math.pow(2,c-s)*(1+l/Math.pow(2,r))}else if(l!==0){return f*Math.pow(2,-(s-1))*(l/Math.pow(2,r))}else{return f<0?-0:0}}function n(e){return r(e,11,52)}function a(e){return t(e,11,52)}function i(e){return r(e,8,23)}function o(e){return t(e,8,23)}var u={toFloat32:function(e){return i(o(e))}};if(typeof Float32Array!=="undefined"){var s=new Float32Array(1);u.toFloat32=function(e){s[0]=e;return s[0]}}return u}();y(String,{fromCodePoint:function(e){var t=c.call(arguments,0,arguments.length);var r=[];var n;for(var a=0,i=t.length;a<i;a++){n=Number(t[a]);if(!j.SameValue(n,j.ToInteger(n))||n<0||n>1114111){throw new RangeError("Invalid code point "+n)}if(n<65536){r.push(String.fromCharCode(n))}else{n-=65536;r.push(String.fromCharCode((n>>10)+55296));r.push(String.fromCharCode(n%1024+56320))}}return r.join("")},raw:function(t){var r=c.call(arguments,1,arguments.length);var n=j.ToObject(t,"bad callSite");var a=n.raw;var i=j.ToObject(a,"bad raw value");var o=Object.keys(i).length;var u=j.ToLength(o);if(u===0){return""}var s=[];var f=0;var l,h,v,p;while(f<u){l=String(f);h=i[l];v=String(h);s.push(v);if(f+1>=u){break}h=r[l];if(h===e){break}p=String(h);s.push(p);f++}return s.join("")}});var O={repeat:function(){var e=function(t,r){if(r<1)return"";if(r%2)return e(t,r-1)+t;var n=e(t,r/2);return n+n};return function(t){var r=String(j.CheckObjectCoercible(this));t=j.ToInteger(t);if(t<0||t===Infinity){throw new RangeError("Invalid String#repeat value")}return e(r,t)}}(),startsWith:function(t){var r=String(j.CheckObjectCoercible(this));if(h.call(t)==="[object RegExp]")throw new TypeError('Cannot call method "startsWith" with a regex');t=String(t);var n=arguments.length>1?arguments[1]:e;var a=Math.max(j.ToInteger(n),0);return r.slice(a,a+t.length)===t},endsWith:function(t){var r=String(j.CheckObjectCoercible(this));if(h.call(t)==="[object RegExp]")throw new TypeError('Cannot call method "endsWith" with a regex');t=String(t);var n=r.length;var a=arguments.length>1?arguments[1]:e;var i=a===e?n:j.ToInteger(a);var o=Math.min(Math.max(i,0),n);return r.slice(o-t.length,o)===t},contains:function(t){var r=arguments.length>1?arguments[1]:e;return l.call(this,t,r)!==-1},codePointAt:function(t){var r=String(j.CheckObjectCoercible(this));var n=j.ToInteger(t);var a=r.length;if(n<0||n>=a)return e;var i=r.charCodeAt(n);var o=n+1===a;if(i<55296||i>56319||o)return i;var u=r.charCodeAt(n+1);if(u<56320||u>57343)return i;return(i-55296)*1024+(u-56320)+65536}};y(String.prototype,O);var _="\x85".trim().length!==1;if(_){var N=String.prototype.trim;delete String.prototype.trim;var T=["	\n\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003","\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028","\u2029\ufeff"].join("");var M=new RegExp("^["+T+"]["+T+"]*");var S=new RegExp("["+T+"]["+T+"]*$");y(String.prototype,{trim:function(){if(this===e||this===null){throw new TypeError("can't convert "+this+" to object")}return String(this).replace(M,"").replace(S,"")}})}var E=function(e){this._s=String(j.CheckObjectCoercible(e));this._i=0};E.prototype.next=function(){var t=this._s,r=this._i;if(t===e||r>=t.length){this._s=e;return{value:e,done:true}}var n=t.charCodeAt(r),a,i;if(n<55296||n>56319||r+1==t.length){i=1}else{a=t.charCodeAt(r+1);i=a<56320||a>57343?1:2}this._i=r+i;return{value:t.substr(r,i),done:false}};m(E.prototype);m(String.prototype,function(){return new E(this)});if(!f){String.prototype.startsWith=O.startsWith;String.prototype.endsWith=O.endsWith}y(Array,{from:function(t){var r=arguments.length>1?arguments[1]:e;var n=arguments.length>2?arguments[2]:e;var a=j.ToObject(t,"bad iterable");if(r!==e&&!j.IsCallable(r)){throw new TypeError("Array.from: when provided, the second argument must be a function")}var i=j.IsIterable(a);var o=i?0:j.ToLength(a.length);var u=j.IsCallable(this)?Object(i?new this:new this(o)):new Array(o);var s=i?j.GetIterator(a):null;var f;for(var c=0;i||c<o;c++){if(i){f=j.IteratorNext(s);if(f.done){o=c;break}f=f.value}else{f=a[c]}if(r){u[c]=n?r.call(n,f,c):r(f,c)}else{u[c]=f}}u.length=o;return u},of:function(){return Array.from(arguments)}});p=function(e,t){this.i=0;this.array=e;this.kind=t};y(p.prototype,{next:function(){var t=this.i,r=this.array;if(t===e||this.kind===e){throw new TypeError("Not an ArrayIterator")}if(r!==e){var n=j.ToLength(r.length);for(;t<n;t++){var a=this.kind;var i;if(a==="key"){i=t}else if(a==="value"){i=r[t]}else if(a==="entry"){i=[t,r[t]]}this.i=t+1;return{value:i,done:false}}}this.array=e;return{value:e,done:true}}});m(p.prototype);y(Array.prototype,{copyWithin:function(t,r){var n=arguments[2];var a=j.ToObject(this);var i=j.ToLength(a.length);t=j.ToInteger(t);r=j.ToInteger(r);var o=t<0?Math.max(i+t,0):Math.min(t,i);var u=r<0?Math.max(i+r,0):Math.min(r,i);n=n===e?i:j.ToInteger(n);var s=n<0?Math.max(i+n,0):Math.min(n,i);var f=Math.min(s-u,i-o);var c=1;if(u<o&&o<u+f){c=-1;u+=f-1;o+=f-1}while(f>0){if(v.call(a,u)){a[o]=a[u]}else{delete a[u]}u+=c;o+=c;f-=1}return a},fill:function(t){var r=arguments.length>1?arguments[1]:e;var n=arguments.length>2?arguments[2]:e;var a=j.ToObject(this);var i=j.ToLength(a.length);r=j.ToInteger(r===e?0:r);n=j.ToInteger(n===e?i:n);var o=r<0?Math.max(i+r,0):Math.min(r,i);var u=n<0?i+n:n;for(var s=o;s<i&&s<u;++s){a[s]=t}return a},find:function(t){var r=j.ToObject(this);var n=j.ToLength(r.length);if(!j.IsCallable(t)){throw new TypeError("Array#find: predicate must be a function")}var a=arguments[1];for(var i=0,o;i<n;i++){if(i in r){o=r[i];if(t.call(a,o,i,r))return o}}return e},findIndex:function(e){var t=j.ToObject(this);var r=j.ToLength(t.length);if(!j.IsCallable(e)){throw new TypeError("Array#findIndex: predicate must be a function")}var n=arguments[1];for(var a=0;a<r;a++){if(a in t){if(e.call(n,t[a],a,t))return a}}return-1},keys:function(){return new p(this,"key")},values:function(){return new p(this,"value")},entries:function(){return new p(this,"entry")}});m(Array.prototype,function(){return this.values()});if(Object.getPrototypeOf){m(Object.getPrototypeOf([].values()))}var x=Math.pow(2,53)-1;y(Number,{MAX_SAFE_INTEGER:x,MIN_SAFE_INTEGER:-x,EPSILON:2.220446049250313e-16,parseInt:o.parseInt,parseFloat:o.parseFloat,isFinite:function(e){return typeof e==="number"&&u(e)},isInteger:function(e){return Number.isFinite(e)&&j.ToInteger(e)===e},isSafeInteger:function(e){return Number.isInteger(e)&&Math.abs(e)<=Number.MAX_SAFE_INTEGER},isNaN:function(e){return e!==e}});if(s){y(Object,{getPropertyDescriptor:function(t,r){var n=Object.getOwnPropertyDescriptor(t,r);var a=Object.getPrototypeOf(t);while(n===e&&a!==null){n=Object.getOwnPropertyDescriptor(a,r);a=Object.getPrototypeOf(a)}return n},getPropertyNames:function(e){var t=Object.getOwnPropertyNames(e);var r=Object.getPrototypeOf(e);var n=function(e){if(t.indexOf(e)===-1){t.push(e)}};while(r!==null){Object.getOwnPropertyNames(r).forEach(n);r=Object.getPrototypeOf(r)}return t}});y(Object,{assign:function(e,t){if(!j.TypeIsObject(e)){throw new TypeError("target must be an object")}return Array.prototype.reduce.call(arguments,function(e,t){return Object.keys(Object(t)).reduce(function(e,r){e[r]=t[r];return e},e)})},is:function(e,t){return j.SameValue(e,t)},setPrototypeOf:function(e,t){var r;var n=function(e,t){if(!j.TypeIsObject(e)){throw new TypeError("cannot set prototype on a non-object")}if(!(t===null||j.TypeIsObject(t))){throw new TypeError("can only set prototype to an object or null"+t)}};var a=function(e,t){n(e,t);r.call(e,t);return e};try{r=e.getOwnPropertyDescriptor(e.prototype,t).set;r.call({},null)}catch(i){if(e.prototype!=={}[t]){return}r=function(e){this[t]=e};a.polyfill=a(a({},null),e.prototype)instanceof e}return a}(Object,"__proto__")})}if(Object.setPrototypeOf&&Object.getPrototypeOf&&Object.getPrototypeOf(Object.setPrototypeOf({},null))!==null&&Object.getPrototypeOf(Object.create(null))===null){(function(){var e=Object.create(null);var t=Object.getPrototypeOf,r=Object.setPrototypeOf;Object.getPrototypeOf=function(r){var n=t(r);return n===e?null:n};Object.setPrototypeOf=function(t,n){if(n===null){n=e}return r(t,n)};Object.setPrototypeOf.polyfill=false})()}try{Object.keys("foo")}catch(C){var k=Object.keys;Object.keys=function(e){return k(j.ToObject(e))}}var P={acosh:function(e){e=Number(e);if(Number.isNaN(e)||e<1)return NaN;if(e===1)return 0;if(e===Infinity)return e;return Math.log(e+Math.sqrt(e*e-1))},asinh:function(e){e=Number(e);if(e===0||!u(e)){return e}return e<0?-Math.asinh(-e):Math.log(e+Math.sqrt(e*e+1))},atanh:function(e){e=Number(e);if(Number.isNaN(e)||e<-1||e>1){return NaN}if(e===-1)return-Infinity;if(e===1)return Infinity;if(e===0)return e;return.5*Math.log((1+e)/(1-e))},cbrt:function(e){e=Number(e);if(e===0)return e;var t=e<0,r;if(t)e=-e;r=Math.pow(e,1/3);return t?-r:r},clz32:function(e){e=Number(e);var t=j.ToUint32(e);if(t===0){return 32}return 32-t.toString(2).length},cosh:function(e){e=Number(e);if(e===0)return 1;if(Number.isNaN(e))return NaN;if(!u(e))return Infinity;if(e<0)e=-e;if(e>21)return Math.exp(e)/2;return(Math.exp(e)+Math.exp(-e))/2},expm1:function(e){e=Number(e);if(e===-Infinity)return-1;if(!u(e)||e===0)return e;return Math.exp(e)-1},hypot:function(e,t){var r=false;var n=true;var a=false;var i=[];Array.prototype.every.call(arguments,function(e){var t=Number(e);if(Number.isNaN(t))r=true;else if(t===Infinity||t===-Infinity)a=true;else if(t!==0)n=false;if(a){return false}else if(!r){i.push(Math.abs(t))}return true});if(a)return Infinity;if(r)return NaN;if(n)return 0;i.sort(function(e,t){return t-e});var o=i[0];var u=i.map(function(e){return e/o});var s=u.reduce(function(e,t){return e+=t*t},0);return o*Math.sqrt(s)},log2:function(e){return Math.log(e)*Math.LOG2E},log10:function(e){return Math.log(e)*Math.LOG10E},log1p:function(e){e=Number(e);if(e<-1||Number.isNaN(e))return NaN;if(e===0||e===Infinity)return e;if(e===-1)return-Infinity;var t=0;var r=50;if(e<0||e>1)return Math.log(1+e);for(var n=1;n<r;n++){if(n%2===0){t-=Math.pow(e,n)/n}else{t+=Math.pow(e,n)/n}}return t},sign:function(e){var t=+e;if(t===0)return t;if(Number.isNaN(t))return t;return t<0?-1:1},sinh:function(e){e=Number(e);if(!u(e)||e===0)return e;return(Math.exp(e)-Math.exp(-e))/2},tanh:function(e){e=Number(e);if(Number.isNaN(e)||e===0)return e;if(e===Infinity)return 1;if(e===-Infinity)return-1;return(Math.exp(e)-Math.exp(-e))/(Math.exp(e)+Math.exp(-e))},trunc:function(e){var t=Number(e);return t<0?-Math.floor(-t):Math.floor(t)},imul:function(e,t){e=j.ToUint32(e);t=j.ToUint32(t);var r=e>>>16&65535;var n=e&65535;var a=t>>>16&65535;var i=t&65535;return n*i+(r*i+n*a<<16>>>0)|0},fround:function(e){if(e===0||e===Infinity||e===-Infinity||Number.isNaN(e)){return e}var t=Number(e);return I.toFloat32(t)}};y(Math,P);if(Math.imul(4294967295,5)!==-5){Math.imul=P.imul}var A=function(){var t,r;j.IsPromise=function(t){if(!j.TypeIsObject(t)){return false}if(!t._promiseConstructor){return false}if(t._status===e){return false}return true};var n=function(e){if(!j.IsCallable(e)){throw new TypeError("bad promise constructor")}var t=this;var r=function(e,r){t.resolve=e;t.reject=r};t.promise=j.Construct(e,[r]);if(!t.promise._es6construct){throw new TypeError("bad promise constructor")}if(!(j.IsCallable(t.resolve)&&j.IsCallable(t.reject))){throw new TypeError("bad promise constructor")}};var a=o.setTimeout;var i;if(typeof window!=="undefined"&&j.IsCallable(window.postMessage)){i=function(){var e=[];var t="zero-timeout-message";var r=function(r){e.push(r);window.postMessage(t,"*")};var n=function(r){if(r.source==window&&r.data==t){r.stopPropagation();if(e.length===0){return}var n=e.shift();n()}};window.addEventListener("message",n,true);return r}}var u=function(){var e=o.Promise;return e&&e.resolve&&function(t){return e.resolve().then(t)}};var s=j.IsCallable(o.setImmediate)?o.setImmediate.bind(o):typeof process==="object"&&process.nextTick?process.nextTick:u()||(j.IsCallable(i)?i():function(e){a(e,0)});var f=function(e,t){e.forEach(function(e){s(function(){var r=e.handler;var n=e.capability;var a=n.resolve;var i=n.reject;try{var o=r(t);if(o===n.promise){throw new TypeError("self resolution")}var u=c(o,n);if(!u){a(o)}}catch(s){i(s)}})})};var c=function(e,t){if(!j.TypeIsObject(e)){return false}var r=t.resolve;var n=t.reject;try{var a=e.then;if(!j.IsCallable(a)){return false}a.call(e,r,n)}catch(i){n(i)}return true};var l=function(e,t,r){return function(a){if(a===e){return r(new TypeError("self resolution"))}var i=e._promiseConstructor;var o=new n(i);var u=c(a,o);if(u){return o.promise.then(t,r)}else{return t(a)}}};t=function(t){var r=this;r=d(r);if(!r._promiseConstructor){throw new TypeError("bad promise")}if(r._status!==e){throw new TypeError("promise already initialized")}if(!j.IsCallable(t)){throw new TypeError("not a valid resolver")}r._status="unresolved";r._resolveReactions=[];r._rejectReactions=[];var n=function(t){if(r._status!=="unresolved"){return}var n=r._resolveReactions;r._result=t;r._resolveReactions=e;r._rejectReactions=e;r._status="has-resolution";f(n,t)};var a=function(t){if(r._status!=="unresolved"){return}var n=r._rejectReactions;r._result=t;r._resolveReactions=e;r._rejectReactions=e;r._status="has-rejection";f(n,t)};try{t(n,a)}catch(i){a(i)}return r};r=t.prototype;y(t,{"@@create":function(t){var n=this;var a=n.prototype||r;t=t||b(a);y(t,{_status:e,_result:e,_resolveReactions:e,_rejectReactions:e,_promiseConstructor:e});t._promiseConstructor=n;return t}});var h=function(e,t,r,n){var a=false;return function(i){if(a){return}a=true;t[e]=i;if(--n.count===0){var o=r.resolve;o(t)}}};t.all=function(e){var t=this;var r=new n(t);var a=r.resolve;var i=r.reject;try{if(!j.IsIterable(e)){throw new TypeError("bad iterable")}var o=j.GetIterator(e);var u=[],s={count:1};for(var f=0;;f++){var c=j.IteratorNext(o);if(c.done){break}var l=t.resolve(c.value);var v=h(f,u,r,s);s.count++;l.then(v,r.reject)}if(--s.count===0){a(u)}}catch(p){i(p)}return r.promise};t.race=function(e){var t=this;var r=new n(t);var a=r.resolve;var i=r.reject;try{if(!j.IsIterable(e)){throw new TypeError("bad iterable")}var o=j.GetIterator(e);while(true){var u=j.IteratorNext(o);if(u.done){break}var s=t.resolve(u.value);s.then(a,i)}}catch(f){i(f)}return r.promise};t.reject=function(e){var t=this;var r=new n(t);var a=r.reject;a(e);return r.promise};t.resolve=function(e){var t=this;if(j.IsPromise(e)){var r=e._promiseConstructor;if(r===t){return e}}var a=new n(t);var i=a.resolve;i(e);return a.promise};t.prototype["catch"]=function(t){return this.then(e,t)};t.prototype.then=function(e,t){var r=this;if(!j.IsPromise(r)){throw new TypeError("not a promise")}var a=this.constructor;var i=new n(a);if(!j.IsCallable(t)){t=function(e){throw e}}if(!j.IsCallable(e)){e=function(e){return e}}var o=l(r,e,t);var u={capability:i,handler:o};var s={capability:i,handler:t};switch(r._status){case"unresolved":r._resolveReactions.push(u);r._rejectReactions.push(s);break;case"has-resolution":f([u],r._result);break;case"has-rejection":f([s],r._result);break;default:throw new TypeError("unexpected")}return i.promise};return t}();y(o,{Promise:A});var R=r(o.Promise,function(e){return e.resolve(42)instanceof e});var F=function(){try{o.Promise.reject(42).then(null,5).then(null,function(){});return true}catch(e){return false}}();if(!R||!F){o.Promise=A}if(s){var z=function W(e){var t=typeof e;if(t==="string"){return"$"+e}else if(t==="number"){return e}return null};var D=function V(){return Object.create?Object.create(null):{}};var G={Map:function(){var t={};function r(e,t){this.key=e;this.value=t;this.next=null;this.prev=null}r.prototype.isRemoved=function(){return this.key===t};function n(e,t){this.head=e._head;this.i=this.head;this.kind=t}n.prototype={next:function(){var t=this.i,r=this.kind,n=this.head,a;if(this.i===e){return{value:e,done:true}}while(t.isRemoved()&&t!==n){t=t.prev}while(t.next!==n){t=t.next;if(!t.isRemoved()){if(r==="key"){a=t.key}else if(r==="value"){a=t.value}else{a=[t.key,t.value]}this.i=t;return{value:a,done:false}}}this.i=e;return{value:e,done:true}}};m(n.prototype);function a(t){var n=this;n=d(n);if(!n._es6map){throw new TypeError("bad map")}var a=new r(null,null);a.next=a.prev=a;y(n,{_head:a,_storage:D(),_size:0});if(t!==e&&t!==null){var i=j.GetIterator(t);var o=n.set;if(!j.IsCallable(o)){throw new TypeError("bad map")}while(true){var u=j.IteratorNext(i);if(u.done){break}var s=u.value;if(!j.TypeIsObject(s)){throw new TypeError("expected iterable of pairs")}o.call(n,s[0],s[1])}}return n}var i=a.prototype;y(a,{"@@create":function(e){var t=this;var r=t.prototype||i;e=e||b(r);y(e,{_es6map:true});return e}});Object.defineProperty(a.prototype,"size",{configurable:true,enumerable:false,get:function(){if(typeof this._size==="undefined"){throw new TypeError("size method called on incompatible Map")}return this._size}});y(a.prototype,{get:function(t){var r=z(t);if(r!==null){var n=this._storage[r];return n?n.value:e}var a=this._head,i=a;while((i=i.next)!==a){if(j.SameValueZero(i.key,t)){return i.value}}return e},has:function(e){var t=z(e);if(t!==null){return typeof this._storage[t]!=="undefined"}var r=this._head,n=r;while((n=n.next)!==r){if(j.SameValueZero(n.key,e)){return true}}return false},set:function(e,t){var n=this._head,a=n,i;var o=z(e);if(o!==null){if(typeof this._storage[o]!=="undefined"){this._storage[o].value=t;return}else{i=this._storage[o]=new r(e,t);a=n.prev}}while((a=a.next)!==n){if(j.SameValueZero(a.key,e)){a.value=t;return}}i=i||new r(e,t);if(j.SameValue(-0,e)){i.key=+0}i.next=this._head;i.prev=this._head.prev;i.prev.next=i;i.next.prev=i;this._size+=1},"delete":function(e){var r=this._head,n=r;var a=z(e);if(a!==null){if(typeof this._storage[a]==="undefined"){return false}n=this._storage[a].prev;delete this._storage[a]}while((n=n.next)!==r){if(j.SameValueZero(n.key,e)){n.key=n.value=t;n.prev.next=n.next;n.next.prev=n.prev;this._size-=1;return true}}return false},clear:function(){this._size=0;this._storage=D();var e=this._head,r=e,n=r.next;while((r=n)!==e){r.key=r.value=t;n=r.next;r.next=r.prev=e}e.next=e.prev=e},keys:function(){return new n(this,"key")},values:function(){return new n(this,"value")},entries:function(){return new n(this,"key+value")},forEach:function(e){var t=arguments.length>1?arguments[1]:null;var r=this.entries();for(var n=r.next();!n.done;n=r.next()){e.call(t,n.value[1],n.value[0],this)}}});m(a.prototype,function(){return this.entries()});return a}(),Set:function(){var t=function a(t){var r=this;r=d(r);if(!r._es6set){throw new TypeError("bad set")}y(r,{"[[SetData]]":null,_storage:D()});if(t!==e&&t!==null){var n=j.GetIterator(t);var a=r.add;if(!j.IsCallable(a)){throw new TypeError("bad set")}while(true){var i=j.IteratorNext(n);if(i.done){break}var o=i.value;a.call(r,o)}}return r};var r=t.prototype;y(t,{"@@create":function(e){var t=this;var n=t.prototype||r;e=e||b(n);y(e,{_es6set:true});return e}});var n=function i(e){if(!e["[[SetData]]"]){var t=e["[[SetData]]"]=new G.Map;Object.keys(e._storage).forEach(function(e){if(e.charCodeAt(0)===36){e=e.slice(1)}else{e=+e}t.set(e,e)});e._storage=null}};Object.defineProperty(t.prototype,"size",{configurable:true,enumerable:false,get:function(){if(typeof this._storage==="undefined"){throw new TypeError("size method called on incompatible Set")}n(this);return this["[[SetData]]"].size}});y(t.prototype,{has:function(e){var t;if(this._storage&&(t=z(e))!==null){return!!this._storage[t]}n(this);return this["[[SetData]]"].has(e)},add:function(e){var t;if(this._storage&&(t=z(e))!==null){this._storage[t]=true;return}n(this);return this["[[SetData]]"].set(e,e)},"delete":function(e){var t;if(this._storage&&(t=z(e))!==null){delete this._storage[t];return}n(this);return this["[[SetData]]"]["delete"](e)},clear:function(){if(this._storage){this._storage=D();return}return this["[[SetData]]"].clear()},keys:function(){n(this);return this["[[SetData]]"].keys()},values:function(){n(this);return this["[[SetData]]"].values()},entries:function(){n(this);return this["[[SetData]]"].entries()},forEach:function(e){var t=arguments.length>1?arguments[1]:null;var r=this;n(this);this["[[SetData]]"].forEach(function(n,a){e.call(t,a,a,r)})}});m(t.prototype,function(){return this.values()});return t}()};y(o,G);if(o.Map||o.Set){if(typeof o.Map.prototype.clear!=="function"||(new o.Set).size!==0||(new o.Map).size!==0||typeof o.Map.prototype.keys!=="function"||typeof o.Set.prototype.keys!=="function"||typeof o.Map.prototype.forEach!=="function"||typeof o.Set.prototype.forEach!=="function"||t(o.Map)||t(o.Set)||!r(o.Map,function(e){return new e([])instanceof e})){o.Map=G.Map;o.Set=G.Set}}m(Object.getPrototypeOf((new o.Map).keys()));m(Object.getPrototypeOf((new o.Set).keys()))}};if(typeof define==="function"&&define.amd){define(o)}else{o()}})();
//# sourceMappingURL=es6-shim.map;

/* file-end: js/lib/es6-shim.min.js 
----------------------------------------------------------------------------------*/




Site.page.template['angular/widgets/updates/updates.ng.tmpl'] = '<!-- my updates (LJSUP-18034) -->\n\n\n\n<div\n    class=\"b-myupdates\"\n    ng-class=\"{\n        \'b-myupdates-empty\': widget.items.length === 0,\n        \'b-myupdates-loading\': !widget.state.initialized\n    }\"\n    >\n\n\n\n    <!-- head -->\n    <header class=\"b-myupdates-head\">\n\n        <h3 class=\"b-myupdates-header\"><!--\n\n            --><span\n                class=\"b-myupdates-title\"\n                lj-ml=\"{\n                    \'main.updates.widget.title.comments\': widget.type === \'comments\',\n                    \'main.updates.widget.title.events\': widget.type === \'events\',\n                    \'main.updates.widget.title.entries\': widget.type === \'entries\',\n                    \'main.updates.widget.title.guests\': widget.type === \'guests\'\n                }\"\n                ></span><!--\n\n            --><span\n                class=\"b-myupdates-counter\"\n                ng-bind=\"widget.options.count\"\n                ng-if=\"widget.type != \'guests\'\"\n                ></span><!--\n\n        --></h3>\n\n    </header><!-- /head -->\n\n\n\n    <!-- body -->\n    <div class=\"b-myupdates-body\">\n\n        <!-- items -->\n        <ul class=\"b-myupdates-items\">\n\n            <!-- item -->\n            <li\n                class=\"b-myupdates-item\"\n                ng-repeat=\"item in widget.items | orderBy:widget.options.orderBy | limitTo: widget.options.size track by item.id\"\n                >\n\n                <!-- content -->\n                <span\n                    class=\"b-myupdates-item-content\"\n                    lj-html=\"widget.content(item)\"\n                    ></span>\n\n                <!-- remove button -->\n                <span\n                    class=\"b-myupdates-item-remove\"\n                    lj-ml=\"main.updates.remove\"\n                    lj-ml-attr=\"title\"\n                    ng-click=\"widget.remove(item)\"\n                    ng-if=\"widget.type !== \'guests\'\"\n                    >\n                    <svg class=\"svgicon\">\n                        <use xlink:href=\"#fi-check\"/>\n                    </svg>\n                </span>\n\n            </li>\n\n        </ul><!-- /items -->\n\n        <!-- dummy loader -->\n        <div class=\"b-myupdates-dummy\">\n            <div class=\"b-myupdates-dummy-item\">\n                <span class=\"b-myupdates-dummy-content\"></span>\n            </div>\n            <div class=\"b-myupdates-dummy-item\">\n                <span class=\"b-myupdates-dummy-content\"></span>\n            </div>\n            <div class=\"b-myupdates-dummy-item\">\n                <span class=\"b-myupdates-dummy-content\"></span>\n            </div>\n        </div><!-- /dummy -->\n\n        <!-- emptiness message -->\n        <p\n            class=\"b-myupdates-emptiness\"\n            lj-ml=\"{\n                \'main.updates.recent.empty\':   widget.type === \'entries\',\n                \'main.updates.comments.empty\': widget.type === \'comments\',\n                \'main.updates.common.empty\':   widget.type === \'events\',\n                \'main.updates.guests.empty\':   widget.type === \'guests\'\n            }\"\n            ></p>\n\n    </div><!-- /body -->\n\n\n\n    <!-- footer -->\n    <footer\n        class=\"b-myupdates-footer\"\n        ng-if=\"widget.type === \'comments\'\"\n        >\n        <a\n            ng-href=\"{{widget.siteroot}}/tools/recent_comments.bml\"\n            target=\"_blank\"\n            lj-ml=\"main.updates.comments.all\"\n            ></a>\n    </footer><!-- /footer -->\n\n\n\n</div>\n';
LJ.injectStyle('/* my updates widgets (LJSUP-18034) */\n\n\n\n.b-myupdates {\n    width: 300px;\n    margin: 0 0 25px;\n    margin: 0 0 1.5625rem;\n    padding: 0 0 25px 30px;\n    padding: 0 0 1.5625rem 30px;\n    border-bottom: 1px solid #DAE3E6;\n    }\n\n\n\n    /* head */\n    .b-myupdates-head {\n        position: relative;\n        margin: 0 0 13px;\n        margin: 0 0 0.8125rem;\n        padding: 0;\n        }\n\n        /* header */\n        .b-myupdates-header {\n            margin: 0;\n            padding: 0;\n            font-style: normal;\n            font-weight: normal;\n            font-size: 20px;\n            font-size: 1.25rem;\n            text-transform: uppercase;\n            color: #829399;\n            }\n\n            /* title */\n            .b-myupdates-title {\n                margin: 0;\n                }\n\n            /* counter */\n            .b-myupdates-counter {\n                display: inline-block;\n                min-width: 10px;\n                margin: 0 0 0 0.7em;\n                padding: 3px 5px;\n                border-radius: 15px;\n                vertical-align: 4px;\n                font: 11px/1 \"ProximaNovaSemibold\",Tahoma,Arial,sans-serif;\n                background: #FF8F40;\n                text-align: center;\n                color: #FFF;\n                }\n\n\n\n    /* body */\n    .b-myupdates-body {\n        margin: 0;\n        padding: 0;\n        font-size: 14px;\n        font-size: 0.875rem;\n        }\n        /* items */\n        .b-myupdates-items {\n            margin: 0;\n            padding: 0;\n            list-style: none;\n            }\n            /* item */\n            .b-myupdates-item {\n                position: relative;\n                margin: 0 0 1em;\n                padding: 0;\n                }\n                /* content */\n                .b-myupdates-item-content {\n                    display: block;\n                    margin: 0 20px 0 0;\n                    }\n                /* remove */\n                .b-myupdates-item-remove {\n                    overflow: hidden;\n                    visibility: hidden;\n                    position: absolute;\n                    top: 0;\n                    right: 0;\n                    width: 16px;\n                    height: 16px;\n                    margin: 0;\n                    padding: 0;\n                    background: url(/img/icons/unit_v3.png?v=40336) no-repeat 0 -221px;\n                    font: 0/0 a;\n                    cursor: pointer;\n                    color: #7A9199;\n                    }\n                .b-myupdates-item:hover .b-myupdates-item-remove {\n                    visibility: visible;\n                    }\n                    .b-myupdates-item-remove .svgicon {\n                        width: 16px;\n                        height: 16px;\n                        }\n\n                /* enabled feedsettings */\n                .b-feedsettings-on .b-myupdates-item-remove {\n                    background: none;\n                    }\n\n\n\n    /* dummy loader */\n    .b-myupdates-dummy {\n        display: none;\n        margin: 0;\n        }\n        .b-myupdates-dummy-item {\n            margin: 0 0 3em;\n            padding: 0;\n            }\n            .b-myupdates-dummy-content {\n                position: relative;\n                display: block;\n                width: 250px;\n                height: 19px;\n                height: 1.2rem;\n                margin: 0 0 32px;\n                margin: 0 0 1.5rem;\n                padding: 0;\n                background: #F8F8F8;\n                -webkit-animation: loading-myupdates 1s infinite;\n                -moz-animation:    loading-myupdates 1s infinite;\n                -o-animation:      loading-myupdates 1s infinite;\n                animation:         loading-myupdates 1s infinite;\n                }\n            .b-myupdates-dummy-content:after {\n                content: \" \";\n                position: absolute;\n                top: 24px;\n                top: 1.5rem;\n                left: 0;\n                width: 200px;\n                height: 19px;\n                height: 1.2rem;\n                margin: 0;\n                padding: 0;\n                background: #F8F8F8;\n                }\n            @-webkit-keyframes loading-myupdates {\n                0%   { background: #F8F8F8; }\n                50%  { background: #FBFBFB; }\n                100% { background: #F8F8F8; }\n            }\n            @-moz-keyframes loading-myupdates {\n                0%   { background: #F8F8F8; }\n                50%  { background: #FBFBFB; }\n                100% { background: #F8F8F8; }\n            }\n            @-o-keyframes loading-myupdates {\n                0%   { background: #F8F8F8; }\n                50%  { background: #FBFBFB; }\n                100% { background: #F8F8F8; }\n            }\n            @keyframes loading-myupdates {\n                0%   { background: #F8F8F8; }\n                50%  { background: #FBFBFB; }\n                100% { background: #F8F8F8; }\n            }\n\n\n    /* emptiness */\n    .b-myupdates-emptiness {\n        display: none;\n        margin: 0;\n        padding: 0.5em 0;\n        font-size: 1.2307em;\n        color: #829399;\n        }\n\n\n\n    /* footer */\n    .b-myupdates-footer {\n        margin: 0;\n        padding: 0;\n        font-size: 14px;\n        font-size: 0.875rem;\n        text-align: right;\n        }\n\n\n\n/* loading */\n.b-myupdates-loading {\n    }\n    .b-myupdates-loading .b-myupdates-dummy,\n    .b-myupdates-loading.b-myupdates-empty .b-myupdates-dummy {\n        display: block;\n        }\n    .b-myupdates-loading .b-myupdates-items {\n        display: none;\n        }\n    .b-myupdates-loading .b-myupdates-emptiness,\n    .b-myupdates-loading.b-myupdates-empty .b-myupdates-emptiness {\n        display: none;\n        }\n\n\n\n/* empty*/\n.b-myupdates-empty {\n    }\n    .b-myupdates-empty .b-myupdates-emptiness {\n        display: block;\n        }\n    .b-myupdates-empty .b-myupdates-counter {\n        display: none;\n        }\n    .b-myupdates-empty .b-myupdates-footer {\n        display: none;\n        }\n    .b-myupdates-empty .b-myupdates-dummy {\n        display: none;\n        }\n    .b-myupdates-empty .b-myupdates-items {\n        display: none;\n        }\n\n\n');
//= require_ml main.updates.ban
//= require_ml main.updates.remove
//= require_ml main.updates.recent.empty
//= require_ml main.updates.recent.empty.title
//= require_ml main.updates.recent.clear
//= require_ml main.updates.recent.confirm_ban
;(function () {
  'use strict';

angular.module('LJ.Widget.Updates', [
  'ngAnimate',
  'LJ.Templates',
  'LJ.Api',
  'LJ.Directives',
  'LJ.Options'
])
.factory('Entries', ['Options', 'Api', createFactory({
  type: 'entries',
  rpc: {
    fetch:  'homepage.get_entries',
    remove: 'homepage.remove_entry'
  },
  options: {
    orderBy: '-timestamp'
  }
})])
.factory('Comments', ['Options', 'Api', createFactory({
  type: 'comments',
  rpc: {
    fetch:  'homepage.get_comments',
    remove: 'homepage.remove_comment'
  }
})])
.factory('Events', ['Options', 'Api', createFactory({
  type: 'events',
  rpc: {
    fetch:  'homepage.get_events',
    remove: 'homepage.remove_event'
  }
})])
.factory('Guests', ['Options', 'Api', createFactory({
  type: 'guests',
  rpc: {
    fetch:  'friendsfeed.get_guests'
  },
  options: {
    timeout: 0,
    preloadAfter: 0
  }
})])
.controller('EntriesCtrl',  ['$scope', '$interval', 'Entries',  updatesCtrl])
.controller('CommentsCtrl', ['$scope', '$interval', 'Comments', updatesCtrl])
.controller('EventsCtrl',   ['$scope', '$interval', 'Events',   updatesCtrl])
.controller('GuestsCtrl',   ['$scope', '$interval', 'Guests',   updatesCtrl])
.directive('ljWidgetEntries', [function () {
  return {
    scope: true,
    controller: 'EntriesCtrl',
    controllerAs: 'widget',
    templateUrl: 'updates.ng.tmpl'
  };
}])
.directive('ljWidgetEvents', [function () {
  return {
    scope: true,
    controller: 'EventsCtrl',
    controllerAs: 'widget',
    templateUrl: 'updates.ng.tmpl'
  };
}])
.directive('ljWidgetComments', [function () {
  return {
    scope: true,
    controller: 'CommentsCtrl',
    controllerAs: 'widget',
    templateUrl: 'updates.ng.tmpl'
  };
}])
.directive('ljWidgetGuests', [function () {
  return {
    scope: true,
    controller: 'GuestsCtrl',
    controllerAs: 'widget',
    templateUrl: 'updates.ng.tmpl'
  };
}])
.animation('.b-myupdates-item', [function () {
  return {
    enter: function (element, done) {
      element.hide().slideDown('fast', 'linear', done);
    },

    leave: function (element, done) {
      element.slideUp('fast', 'linear', done);
    }
  };
}]);

function updatesCtrl($scope, $interval, Service) {

  var that = this,
      stop;

  $scope.$watch(Service.get, function (items) {
    that.items = items;
  });

  // Notice:
  // If preloadAfter is 0 - we widget doesn't need preloading by count
  if ( Service.options.get('preloadAfter') !== 0 ) {

    // fetch on demand, when items count is less then `preloadAfter`
    $scope.$watch(function () {
      return that.items.length;
    }, function (length) {
      // only after widget has been initialized
      if ( !that.state.initialized ) {
        return;
      }

      if (
          length < Service.options.get('preloadAfter') &&

          // -1 is because count has not been changed right after remove
          length < Service.options.get('count') - 1
      ) {
        if ( Service.options.get('timeout') === 0 ) {
          Service.fetch();
        } else {
          _fetch();
        }
      }
    });
  }

  this.options = Service.options.raw();

  this.type = Service.type;
  this.siteroot = LJ.get('siteroot');

  this.state = {
    initialized: false
  };

  this.remove = function (entry) {
    Service.track('close').remove(entry);
  };

  /**
   * Function helper that helps to get item content
   * @todo Add general response field for content
   */
  this.content = function (item) {
    if ( Service.type === 'entries' ) {
      return item['entry'];
    }

    if ( Service.type === 'comments' ) {
      return item['comment'];
    }

    if ( Service.type === 'events' ) {
      return item['event'];
    }

    if ( Service.type === 'guests' ) {
      return item['guest'];
    }
  };

  Service.fetch().then(function () {
    that.state.initialized = true;
  });

  // if widget needs updates
  if ( Service.options.get('timeout') !== 0 ) {
    stop = $interval(Service.fetch, Service.options.get('timeout'));
  }

  // reset $interval and fetch
  function _fetch() {
    // reset timestamp to get all entries
    Service.options.set('timestamp', null);
    Service.fetch();
    $interval.cancel(stop);
    stop = $interval(Service.fetch, Service.options.get('timeout'));
  }

  $scope.$on('$destroy', function () {
    $interval.cancel(stop);
  });
}

function createFactory(opts) {
  var rpc = opts.rpc,
      type = opts.type,
      _options = opts.options;

  return function (Options, Api) {
    var options = Options.create(
          angular.extend({
              // amount of items that are stored on server
              // Notice: we don't fetch all items
              count: 0,

              size: 4,

              // fetch items from server when less than 10 items left
              preloadAfter: 10,

              // updates request timeout
              timeout: LJ.get('updates_timeout') || 30000,

              // last item timestamp that will be sent to server
              // Notice: currently it's needed only for entries widget
              timestamp: null,

              // order field
              orderBy: 'order'
            }, _options || {})
        ),
        items = [],

        // ids of models that has been removed yet
        ids = [],

        // Prevent making dups api calls when fetch in progress
        isFetchBusy = false,

        factory = {
          type: type,

          fetch: fetch,
          remove: remove,
          get: get,
          options: options,
          track: track
        };

    function track(event) {
      LJ.Track.event('FriendsFeed', 'Widget', type + ' ' + event);
      return factory;
    }

    function fetch() {
      if ( isFetchBusy ) {
        return;
      }

      isFetchBusy = true;

      return Api.call(rpc.fetch, {
        from: 0,
        to:   20,
        timestamp: options.get('timestamp')
      }).then(function (response) {
        var _items = response[type],
            time = -new Date().valueOf();

        // Filter items that has been removed yet.
        // It could not be realized on server at the moment
        _items = _items.filter(function (item) {
          return ids.indexOf( item.id ) === -1;
        });

        // entries are sorted by timestamp
        if ( type !== 'entries' ) {

          // add order field
          _items.forEach(function (item, index) {
            item.order = time + index;
          });
        }

        // for entries we fetch new items if timestamp provided, otherwise - latest items,
        // for other widgets - latest items
        if ( type === 'entries' && options.get('timestamp') ) {
          items = items.concat(_items);
        } else {
          items = _items;
        }

        options.set({
          count: Number(response.count),

          // update timestamp
          timestamp: response.timestamp
        });

        isFetchBusy = false;
      });
    }

    function remove(item) {
      var id = item.id;

      // add item id to removed list
      ids.push(id);

      Api.call(rpc.remove, { id: id }).then(function (response) {
        options.set({ count: response.count });
      });

      // remove item from the list
      items = items.filter(function (item) {
        return item.id !== id;
      });
    }

    function get() {
      return items;
    }

    return factory;
  };
}

}());
;

/* file-end: js/widgets/angular/updates.js 
----------------------------------------------------------------------------------*/

/* ---------------------------------------------------------------------------------
   file-start: js/widgets/angular/links.js 
*/

/**
 * Interesting links widget
 * Usage:
 *   <div lj-widget-links></div>
 */


Site.page.template['angular/widgets/links/links.ng.tmpl'] = '<!-- my links (LJSUP-18522) -->\n\n\n\n<div\n    class=\"b-mylinks\"\n    ng-class=\"{\n        \'b-mylinks-empty\': widget.items.length === 0,\n        \'b-mylinks-loading\': isLoading\n    }\"\n    >\n\n\n\n    <!-- head -->\n    <header class=\"b-mylinks-head\">\n\n        <h3 class=\"b-mylinks-header\"><!--\n\n            --><span\n                class=\"b-mylinks-title\"\n                lj-ml=\"widget.links.title\"\n                ></span><!--\n\n        --></h3>\n\n    </header><!-- /head -->\n\n\n\n    <!-- body -->\n    <div class=\"b-mylinks-body\">\n\n        <!-- items -->\n        <ul class=\"b-mylinks-items\">\n\n            <li\n                class=\"b-mylinks-item\"\n                ng-repeat=\"item in items\"\n                ><!--\n                --><a\n                    ng-href=\"{{item.url}}\"\n                    ng-bind=\"item.title\"\n                    target=\"_blank\"\n                    class=\"b-mylinks-item-link\"\n                    ></a><!--\n            --></li>\n\n        </ul><!-- /items -->\n\n        <!-- dummy loader -->\n        <div class=\"b-mylinks-dummy\">\n            <div class=\"b-mylinks-dummy-item\">\n                <span class=\"b-mylinks-dummy-content\"></span>\n            </div>\n            <div class=\"b-mylinks-dummy-item\">\n                <span class=\"b-mylinks-dummy-content\"></span>\n            </div>\n        </div><!-- /dummy -->\n\n        <!-- emptiness message -->\n        <p\n            class=\"b-mylinks-emptiness\"\n            lj-ml=\"widget.links.empty\"\n            ></p>\n\n    </div><!-- /body -->\n\n\n\n    <!-- footer -->\n    <footer\n        class=\"b-mylinks-footer\"\n        >\n        <a\n            ng-href=\"{{siteroot}}/customize/options.bml?group=linkslist\"\n            target=\"_blank\"\n            lj-ml=\"widget.links.all\"\n            ></a>\n    </footer><!-- /footer -->\n\n\n\n</div>\n';
LJ.injectStyle('/* my links widgets (LJSUP-18522) */\n\n\n\n.b-mylinks {\n    width: 300px;\n    margin: 0 0 25px;\n    margin: 0 0 1.5625rem;\n    padding: 0 0 25px 30px;\n    padding: 0 0 1.5625rem 30px;\n    border-bottom: 1px solid #DAE3E6;\n    }\n\n\n\n    /* head */\n    .b-mylinks-head {\n        position: relative;\n        margin: 0 0 13px;\n        margin: 0 0 0.8125rem;\n        padding: 0;\n        }\n\n        /* header */\n        .b-mylinks-header {\n            margin: 0;\n            padding: 0;\n            font-style: normal;\n            font-weight: normal;\n            font-size: 20px;\n            font-size: 1.25rem;\n            text-transform: uppercase;\n            color: #829399;\n            }\n\n            /* title */\n            .b-mylinks-title {\n                margin: 0;\n                }\n\n\n\n    /* body */\n    .b-mylinks-body {\n        margin: 0;\n        font-size: 14px;\n        font-size: 0.875rem;\n        }\n        /* items */\n        .b-mylinks-items {\n            margin: 0 0 19px;\n            margin: 0 0 1.2rem;\n            padding: 0;\n            list-style: none;\n            }\n            /* item */\n            .b-mylinks-item {\n                position: relative;\n                margin: 0;\n                padding: 0;\n                }\n                /* link */\n                .b-mylinks-item-link {\n                    display: inline-block;\n                    }\n\n\n\n    /* dummy loader */\n    .b-mylinks-dummy {\n        display: none;\n        margin: 0;\n        }\n        .b-mylinks-dummy-item {\n            margin: 0 0 3em;\n            padding: 0;\n            }\n            .b-mylinks-dummy-content {\n                position: relative;\n                display: block;\n                width: 250px;\n                height: 19px;\n                height: 1.2rem;\n                margin: 0 0 32px;\n                margin: 0 0 1.5rem;\n                padding: 0;\n                background: #F8F8F8;\n                -webkit-animation: loading-mylinks 1s infinite;\n                -moz-animation:    loading-mylinks 1s infinite;\n                -o-animation:      loading-mylinks 1s infinite;\n                animation:         loading-mylinks 1s infinite;\n                }\n            .b-mylinks-dummy-content:after {\n                content: \" \";\n                position: absolute;\n                top: 24px;\n                top: 1.5rem;\n                left: 0;\n                width: 200px;\n                height: 19px;\n                height: 1.2rem;\n                margin: 0;\n                padding: 0;\n                background: #F8F8F8;\n                }\n            @-webkit-keyframes loading-mylinks {\n                0%   { background: #F8F8F8; }\n                50%  { background: #FBFBFB; }\n                100% { background: #F8F8F8; }\n            }\n            @-moz-keyframes loading-mylinks {\n                0%   { background: #F8F8F8; }\n                50%  { background: #FBFBFB; }\n                100% { background: #F8F8F8; }\n            }\n            @-o-keyframes loading-mylinks {\n                0%   { background: #F8F8F8; }\n                50%  { background: #FBFBFB; }\n                100% { background: #F8F8F8; }\n            }\n            @keyframes loading-mylinks {\n                0%   { background: #F8F8F8; }\n                50%  { background: #FBFBFB; }\n                100% { background: #F8F8F8; }\n            }\n\n\n\n    /* emptiness */\n    .b-mylinks-emptiness {\n        display: none;\n        margin: 0;\n        padding: 0.5em 0;\n        font-size: 1.2307em;\n        color: #829399;\n        }\n\n\n\n    /* footer */\n    .b-mylinks-footer {\n        margin: 0;\n        padding: 0;\n        font-size: 14px;\n        font-size: 0.875rem;\n        text-align: right;\n        }\n\n\n\n/* loading */\n.b-mylinks-loading {\n    }\n    /* show */\n    .b-mylinks-loading .b-mylinks-dummy {\n        display: block;\n        }\n    /* hide */\n    .b-mylinks-loading .b-mylinks-items {\n        display: none;\n        }\n    .b-mylinks-loading .b-mylinks-erroneous {\n        display: none;\n        }\n    .b-mylinks-loading .b-mylinks-loginess {\n        display: none;\n        }\n    .b-mylinks-loading .b-mylinks-emptiness {\n        display: none;\n        }\n\n\n\n/* empty */\n.b-mylinks-empty {\n    }\n    /* show */\n    .b-mylinks-empty .b-mylinks-emptiness {\n        display: block;\n        }\n    /* hide */\n    .b-mylinks-empty .b-mylinks-counter {\n        display: none;\n        }\n    .b-mylinks-empty .b-mylinks-footer {\n        display: none;\n        }\n    .b-mylinks-empty .b-mylinks-dummy {\n        display: none;\n        }\n    .b-mylinks-empty .b-mylinks-items {\n        display: none;\n        }\n\n\n');
//= require_ml widget.links.title

angular.module('LJ.Widget.Links', [])
  .directive('ljWidgetLinks', ['Api', function (Api) {
    return {
      templateUrl: 'links.ng.tmpl',
      link: function (scope) {
        scope.isLoading = true;

        Api.call('friendsfeed.get_linkslist').then(function (response) {
          scope.items = response.linkslist;
          scope.isLoading = false;
        });

        scope.siteroot = LJ.get('siteroot');
      }
    };
  }]);
;

/* file-end: js/widgets/angular/links.js 
----------------------------------------------------------------------------------*/

/* ---------------------------------------------------------------------------------
   file-start: js/widgets/angular/social.js 
*/





/* ---------------------------------------------------------------------------------
   file-start: js/editor/media.js 
*/

LJ.define('LJ.Media');

/**
 * Parse link or embed html.
 *
 * @param  {String}   input  Input can contain link or html.
 * @param  {Object}   params Contain parameters of request
 * @param  {Boolean}  params.thumbnail Request a thumbnail
 *
 * @return {Promise}  Promise representing the media
 */

LJ.Media.parse = (function($) {
  'use strict';

  /**
   * Media provider factory
   *
   * @param {String}   name          Provider name
   * @param {Object}   config        Configuration object
   * @param {String}   config.link   Link with params that will be supplanted after params parsing
   * @param {Function} config.param  Function that extracts needed params from user input.
   *                                 It returns params object if input successfully parsed,
   *                                 otherwise null/undefined
   *
   * @param {String|Function} config.embed  Embed. If string - it will be supplanted with parsed params
   *                                        If function - it should return Promise that will be resolved with embed string
   *
   * @param {String|Function} [config.thumbnail]  Thumbnail. If string - it will be supplanted with parsed params
   *                                              If function - it should return Promise that will be resolved with thumbnail string
   */
  function Provider(name, config) {
    this.provider = name;
    $.extend(this, config);

    // provider cache for embeds and thumbnails
    this._cache = {};
  }

  /**
   * Parse user input
   *
   * @param  {String} input              User media input
   * @param  {Object} options            Additional parsing options
   * @param  {Boolean} options.thumbnail Parse thumbnail or not
   *
   * @return {Promise} Promise that will be resolved with object
   *                   that contains {link, embed, thumb, site}
   */
  Provider.prototype.parse = function (input, options) {
    var that = this;
    var params = this.params(input);
    var promises;

    if ( !params ) {
      return;
    }

    promises = [];

    // embed promise
    promises.push(
      typeof this.embed === 'string' ?
        this.toPromise( this.embed.supplant(params) ) :
        this.embed(params)
    );

    if (options.thumbnail && this.thumbnail) {

      // embed promise
      promises.push(
        typeof this.thumbnail === 'string' ?
          this.toPromise( this.thumbnail.supplant(params) ) :
          this.thumbnail(params)
      );
    }

    return $.when.apply($, promises).then(function (embed, thumb) {
      return {
        link: that.link.supplant(params),
        embed: embed,
        thumb: thumb,
        site: that.provider
      };
    });
  };

  /**
   * Cache or retrieve from cache item by key
   * @param  {String} key     Cache key
   * @param  {*}      [value] Value to cache; if not defined - method will
   *                          work as a getter
   */
  Provider.prototype.cache = function (key, value) {
    if (typeof value === 'undefined' ) {
      return this._cache[key];
    }

    this._cache[key] = value;
  };

  /**
   * Helper that return provided value as a resolved promise
   * @return {Promise} Resolved promise
   */
  Provider.prototype.toPromise = function (value) {
    var defer = $.Deferred();

    defer.resolve(value);
    return defer.promise();
  };

  var providers = {

    'youtube': new Provider('youtube', {
      link: 'http://youtube.com/watch?v={id}',
      thumbnail: 'http://img.youtube.com/vi/{id}/0.jpg',
      embed: '<iframe src="http://www.youtube.com/embed/{id}" width="560" height="315" frameborder="0" allowfullscreen data-link="http://youtube.com/watch?v={id}"></iframe>',

      params: function (input) {
        var matcher = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\??v?=?))([^#\&\?]*).*/,
            match = input.match(matcher);

        if (match && match[0].indexOf('youtu') === -1) {
          return null;
        }

        return match && { id: match[7] };
      }
    }),

    'vimeo': new Provider('vimeo', {
      link: 'http://vimeo.com/{id}',
      embed: '<iframe src="http://player.vimeo.com/video/{id}" width="560" height="315" frameborder="0" allowfullscreen data-link="http://vimeo.com/{id}"></iframe>',

      params: function (input) {
        // URLs formats:
        // http://vimeo.com/:id
        // http://player.vimeo.com/video/:id
        // http://vimeo.com/channels/:userId/:id
        var matcher = /^(http:\/\/)?(www\.)?(player\.)?vimeo.com\/(video\/|channels\/\w+\/)?(\d+)*/,
            match = input.match(matcher);

        return match && { id: match[5] };
      },

      thumbnail: function (params) {
        var that = this;
        var cached = this.cache(params.id);

        if (cached) {
          return this.toPromise(cached);
        }

        return $.ajax({
          url: 'http://vimeo.com/api/v2/video/' + params.id + '.json',
          dataType: 'jsonp'
        }).then(function(response) {
          if (response && response[0]) {
            var thumb = response[0].thumbnail_large;

            if (thumb) {
              that.cache(params.id, thumb);
              return thumb;
            }
          } else {
            console.error('Data error', response);
          }
        });
      }
    }),

    'vine': new Provider('vine', {
      link: 'http://vine.co/v/{id}',
      embed: '<iframe src="http://vine.co/v/{id}/card" width="380" height="380" frameborder="0" data-link="http://vine.co/v/{id}"></iframe>',

      params: function (input) {
        // http://vine.co/v/bdbF0i72uwA
        var matcher = /vine.co\/v\/([^\/]*)/,
            match = input.match(matcher);

        return match && { id: match[1] };
      }
    }),

    'instagram': new Provider('instagram', {
      link: 'http://instagram.com/p/{id}/',
      embed: '<iframe src="//instagram.com/p/{id}/embed/" width="612" height="710" frameborder="0" scrolling="no" allowtransparency="true"  data-link="http://instagram.com/p/{id}/"></iframe>',

      params: function (input) {
        var matcher = /.*(?:instagram\.\w*|instagr\.am)\/p\/([^\/]+).*/,
            match = input.match(matcher);

        return match && { id: match[1] };
      }
    }),

    'gist': new Provider('gist', {
      link: 'https://gist.github.com/{id}',
      embed: '<div class="gh-gist" data-gist-id="{id}"><a href="https://gist.github.com/{id}">gist.github.com/{id}</a></div>',

      params: function (input) {
        var matcher = /.*(?:gist\.github\.com\/)([^\/]+\/{1}[^\/]+)\/{0,1}$/,
            match = input.match(matcher);

        return match && { id: match[1] };
      }
    }),

    'rutube': new Provider('rutube', {
      link: 'http://rutube.ru/video/{id}/',
      embed: '<iframe src="http://rutube.ru/video/embed/{id}" width="560" height="315" frameborder="0" allowfullscreen data-link="http://rutube.ru/video/{id}/"></iframe>',

      params: function (input) {

        // http://rutube.ru/video/015075383e2736aa4e864753167b0d49/
        var matcher = /^.*rutube.ru\/video(\/embed\/|\/private\/|\/)(\w{32}).*/;
        var match = input.match(matcher);

        return match && { id: match[2] };
      },

      thumbnail: function (params) {
        var that = this;
        var cached = this.cache(params.id);

        if (cached) {
          return this.toPromise(cached);
        }

        return $.ajax({
          url: 'http://rutube.ru/api/video/' + params.id + '/?format=jsonp',
          dataType: 'jsonp'
        }).done(function (response) {
          if (response && response.thumbnail_url) {
            var thumb = response.thumbnail_url;

            if (thumb) {
              that.cache(params.id, thumb);
              return thumb;
            }
          } else {
            console.error('Data error', response);
          }
        });
      }
    }),

    'twitter': new Provider('twitter', {
      link: 'https://twitter.com/{username}/status/{id}',

      params: function (input) {
        var matcher = /^.*twitter.com\/(\w*)\/status\/(\w*).*/,
            match = input.match(matcher);

        return match && { id: match[2], username: match[1] };
      },

      embed: function (params) {
        var that = this;
        var cached = this.cache(params.id);

        if (cached) {
          return this.toPromise(cached);
        }

        return $.ajax({
          url: 'https://api.twitter.com/1/statuses/oembed.json?id={id}'.supplant({ id: params.id }),
          dataType: 'jsonp'
        }).then(function (response) {

          // Remove all script tags
          var result = response.html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

          that.cache(params.id, result);
          return result;
        });
      }
    }),

    'facebook': new Provider('facebook', {
      link: '{link}',

      params: function (input) {
        var matcher = /(^.*facebook.com\/.*)/,
            match = input.match(matcher);

        return match && { link: match[1] };
      },

      embed: function (params) {
        var that = this;
        var embed = '<div class="fb-post" data-href="{link}" data-width="500"><div class="fb-xfbml-parse-ignore"><a href="{link}">Facebook post</a></div></div>';
        var matcher = /(^.*facebook.com\/)(\d*)(\/.*)/;
        var match = params.link.match(matcher);
        var defer = $.Deferred();
        var userid = match && match[2];
        var cached = this.cache(params.link);
        var result;

        if ( cached ) {
          return this.toPromise(cached);
        }

        // Notice:
        //  Facebook doesn't support embeds for posts that contains userid
        //  instead of usernames at the moment. That is why we get username by user id
        //
        // For example:
        //  https://www.facebook.com/717311163/posts/10153033960491164 is not supported,
        // but
        //  https://www.facebook.com/galina.timchenko.7/posts/10153033960491164 is supported
        //
        // Try it out here:
        //  https://developers.facebook.com/docs/plugins/embedded-posts
        if ( userid ) {
          LJ.Social.load('facebook').then(function () {
            FB.api(userid, function (response) {
              var link = params.link.replace(matcher, '$1' + response.username + '$3');

              result = embed.supplant({ link: link });

              that.cache(params.link, result);
              defer.resolve( result );
            });
          });
        } else {
          result = embed.supplant({ link: params.link });

          this.cache(params.link, result);
          defer.resolve( result );
        }

        return defer.promise();
      }
    })
  };

  /**
   * Parse media content
   *
   * @param  {String}   input                     User content
   * @param  {Object}   [options]                 Options
   * @param  {Boolean}  [options.thumbnail=true]  Get thumbnail or not
   *
   * @return {Promise}  Promise that will be resilved with {site, embed, link, thumbnail}
   */
  function parseMediaLink(input, options) {
    var provider, promise;

    for (provider in providers) {
      if ( providers.hasOwnProperty(provider) ) {
        promise = providers[provider].parse(input, options);

        if ( promise ) {
          return promise;
        }
      }
    }

    return null;
  }

  function parse(input, options) {
    options = $.extend({ thumbnail: true }, options || {});

    // jQuery can fail on input
    try {
      var node = $(input).first(), src;

      if (node && node.prop('tagName').toLowerCase() === 'iframe') {
        src = node && node.attr('src');

        if (src) {
          return parseMediaLink(src, options);
        }
      }
    } catch (e) {
      return parseMediaLink(input, options);
    }
  }

  return parse;
}(jQuery));
;

/* file-end: js/editor/media.js 
----------------------------------------------------------------------------------*/

Site.page.template['angular/widgets/social/twitter.ng.tmpl'] = '<!-- my updates (LJSUP-18034) -->\n\n<div\n    class=\"b-mysocial\"\n    ng-class=\"{\n        \'b-mysocial-empty\': status.isEmpty,\n        \'b-mysocial-error\': status.isError,\n        \'b-mysocial-login\': status.isLogin,\n        \'b-mysocial-refreshing\': status.isRefreshing,\n        \'b-mysocial-loading\': status.isLoading,\n        \'b-mysocial-showmore\': status.noMore\n    }\"\n    >\n\n\n\n    <!-- head -->\n    <header class=\"b-mysocial-head\">\n\n        <h3 class=\"b-mysocial-header\"><!--\n\n            --><span\n                class=\"b-mysocial-title\"\n                lj-ml=\"widget.social.twitter.title\"\n                ng-click=\"refresh()\"\n                ></span><!--\n            --><span class=\"b-mysocial-refresh\" ng-click=\"refresh()\">\n                    <svg class=\"svgicon\">\n                        <use xlink:href=\"#fi-spinner\"/>\n                    </svg>\n                </span><!--\n\n        --></h3>\n\n    </header><!-- /head -->\n\n\n\n    <!-- body -->\n    <div class=\"b-mysocial-body\">\n\n        <!-- items -->\n        <ul class=\"b-mysocial-items\"\n            ng-if=\"items\"\n            >\n\n            <li\n                class=\"b-mysocial-item\"\n                ng-repeat=\"item in items | limitTo: status.itemsLimit\"\n                >\n\n                <!-- retweet -->\n                <div\n                    class=\"b-mysocial-item-retweet\"\n                    ng-if=\"item.retweeted_status\"\n                    >\n                    <span\n                        class=\"b-mysocial-item-rt\"\n                        lj-ml=\"widget.social.twitter.retweet\"\n                        ></span>\n                    <a\n                        ng-href=\"{{ \'https://twitter.com/\' + item.user.screen_name }}\"\n                        target=\"_blank\"\n                        class=\"b-mysocial-item-username\"\n                        ng-bind=\"item.user.screen_name\"\n                        ></a>\n                </div><!-- /retweet -->\n\n                <!-- meta -->\n                <div class=\"b-mysocial-item-meta\">\n\n                    <!-- user -->\n                    <a\n                        ng-href=\"{{ \'https://twitter.com/\' + item.user.screen_name }}\"\n                        ng-if=\"!item.retweeted_status\"\n                        target=\"_blank\"\n                        class=\"b-mysocial-item-user\"\n                        >\n                        <span\n                            ng-style=\"{ backgroundImage: \'url(\' + item.user.profile_image_url_https + \')\' }\"\n                            class=\"b-mysocial-item-userpic\"\n                            ></span>\n                        <strong\n                            ng-bind=\"item.user.screen_name\"\n                            class=\"b-mysocial-item-username\"\n                            ></strong>\n                    </a>\n\n                    <!-- user on retweet -->\n                    <a\n                        ng-href=\"{{ \'https://twitter.com/\' + item.retweeted_status.user.screen_name }}\"\n                        ng-if=\"item.retweeted_status\"\n                        target=\"_blank\"\n                        class=\"b-mysocial-item-user\"\n                        >\n                        <span\n                            ng-style=\"{ backgroundImage: \'url(\' + item.retweeted_status.user.profile_image_url_https + \')\' }\"\n                            class=\"b-mysocial-item-userpic\"\n                            ></span>\n                        <strong\n                            ng-bind=\"item.retweeted_status.user.screen_name\"\n                            class=\"b-mysocial-item-username\"\n                            ></strong>\n                    </a>\n\n                    <!-- link -->\n                    <a\n                        ng-href=\"{{ \'https://twitter.com/\' + item.user.screen_name + \'/status/\' + item.id_str }}\"\n                        target=\"_blank\"\n                        class=\"b-mysocial-item-link\"\n                        >\n                        <time\n                            class=\"b-mysocial-item-date\"\n                            ng-bind=\"item.time\"\n                            ></time>\n                    </a>\n\n                    <!-- do retweet -->\n                    <span\n                        lj-ml-attr=\"widget.social.twitter.doretweet\"\n                        class=\"b-mysocial-item-doretweet\"\n                        style=\"display:none;\"\n                        >\n                        <span\n                            lj-ml=\"widget.social.twitter.doretweet\"\n                            class=\"b-mysocial-item-icon\"\n                            >\n                            <svg class=\"svgicon\">\n                                <use xlink:href=\"#fi-edit\"/>\n                            </svg>\n                        </span>\n                    </span>\n\n                    <!-- do fav -->\n                    <span\n                        lj-ml-attr=\"widget.social.twitter.dofav\"\n                        class=\"b-mysocial-item-dofav\"\n                        style=\"display:none;\"\n                        >\n                        <span\n                            lj-ml=\"widget.social.twitter.dofav\"\n                            class=\"b-mysocial-item-icon\"\n                            >\n                            <svg class=\"svgicon\">\n                                <use xlink:href=\"#fi-edit\"/>\n                            </svg>\n                        </span>\n                    </span>\n\n                    <!-- do repost -->\n                    <a\n                        ng-href=\"{{ item.ljRepost }}\"\n                        ng-show=\"item.ljRepost\"\n                        lj-ml-attr=\"widget.social.twitter.dorepost\"\n                        target=\"_blank\"\n                        class=\"b-mysocial-item-dorepost\"\n                        >\n                        <span\n                            lj-ml=\"widget.social.twitter.dorepost\"\n                            lj-ml-attr=\"title\"\n                            class=\"b-mysocial-item-icon\"\n                            >\n                            <svg class=\"svgicon\">\n                                <use xlink:href=\"#fi-edit\"/>\n                            </svg>\n                        </span>\n                    </a>\n\n                </div><!-- /meta -->\n\n                <!-- content -->\n                <div\n                    class=\"b-mysocial-item-content\"\n                    lj-html=\"item.text\"\n                    ></div><!-- /content -->\n\n            </li>\n\n        </ul><!-- /items -->\n\n        <!-- loadmore button -->\n        <div class=\"b-mysocial-loadmore\">\n            <span\n                class=\"\n                    b-flatbutton\n                    b-flatbutton-simple\n                    \"\n                lj-ml=\"widget.social.twitter.loadmore\"\n                ng-click=\"showMore()\"\n                ></span>\n        </div>\n\n        <!-- dummy loader -->\n        <div class=\"b-mysocial-dummy\">\n            <div class=\"b-mysocial-dummy-item\">\n                <span class=\"b-mysocial-dummy-content\"></span>\n            </div>\n            <div class=\"b-mysocial-dummy-item\">\n                <span class=\"b-mysocial-dummy-content\"></span>\n            </div>\n            <div class=\"b-mysocial-dummy-item\">\n                <span class=\"b-mysocial-dummy-content\"></span>\n            </div>\n        </div><!-- /dummy -->\n\n        <!-- erroneous message -->\n        <p\n            class=\"b-mysocial-erroneous\"\n            lj-ml=\"widget.social.twitter.error\"\n            ></p>\n\n        <!-- loginess button -->\n        <div class=\"b-mysocial-loginess\">\n            <a\n                class=\"\n                    b-flatbutton\n                    b-flatbutton-simple\n                    b-flatbutton-twitter\n                    \"\n                ng-href=\"{{ backUrl }}\"\n                >\n                <span\n                    class=\"b-flatbutton-icon\"\n                    ></span>\n                <span\n                    class=\"b-flatbutton-title\"\n                    lj-ml=\"widget.social.twitter.login\"\n                    ></span>\n            </a>\n        </div>\n\n        <!-- emptiness message -->\n        <p\n            class=\"b-mysocial-emptiness\"\n            lj-ml=\"widget.social.twitter.empty\"\n            ></p>\n\n    </div><!-- /body -->\n\n\n\n    <!-- footer -->\n    <footer\n        class=\"b-mysocial-footer\"\n        >\n        <span\n            ng-click=\"refresh()\"\n            lj-ml=\"widget.social.twitter.refresh\"\n            class=\"b-mysocial-footer-refresh\"\n            ></span>\n        <span\n            ng-click=\"logout()\"\n            class=\"b-mysocial-footer-logout\"\n            >\n            <span \n                class=\"b-mysocial-footer-logout-text\"\n                lj-ml=\"widget.social.twitter.logout\">\n            </span>\n            <span\n                lj-ml=\"widget.social.twitter.logout\"\n                lj-ml-attr=\"title\"\n                class=\"b-mysocial-footer-logout-icon\"\n                >\n                <svg class=\"svgicon\">\n                    <use xlink:href=\"#fi-logout\"/>\n                </svg>\n            </span>\n        </span>\n        <a\n            ng-href=\"https://www.twitter.com/\"\n            lj-ml=\"widget.social.twitter.all\"\n            target=\"_blank\"\n            class=\"b-mysocial-footer-all\"\n            ></a>\n    </footer><!-- /footer -->\n\n\n\n</div>\n\n\n';
Site.page.template['angular/widgets/social/facebook.ng.tmpl'] = '<!-- my updates (LJSUP-18034) -->\n\n\n\n<div\n    class=\"b-mysocial\"\n    ng-class=\"{\n        \'b-mysocial-empty\': status.isEmpty,\n        \'b-mysocial-error\': status.isError,\n        \'b-mysocial-login\': status.isLogin,\n        \'b-mysocial-refreshing\': status.isRefreshing,\n        \'b-mysocial-loading\': status.isLoading,\n        \'b-mysocial-showmore\': status.noMore\n    }\"\n    >\n\n\n\n    <!-- head -->\n    <header class=\"b-mysocial-head\">\n\n        <h3 class=\"b-mysocial-header\"><!--\n\n            --><span\n                class=\"b-mysocial-title\"\n                lj-ml=\"widget.social.facebook.title\"\n                ng-click=\"refresh()\"\n                ></span><!--\n            --><span class=\"b-mysocial-refresh\" ng-click=\"refresh()\">\n                    <svg class=\"svgicon\">\n                        <use xlink:href=\"#fi-spinner\"/>\n                    </svg>\n                </span><!--\n        --></h3>\n\n    </header><!-- /head -->\n\n\n\n    <!-- body -->\n    <div class=\"b-mysocial-body\">\n\n        <!-- items -->\n        <ul\n            class=\"b-mysocial-items\"\n            ng-if=\"items\"\n            >\n\n            <li\n                class=\"b-mysocial-item\"\n                ng-repeat=\"item in items | limitTo: status.itemsLimit\"\n                >\n\n                <!-- meta -->\n                <div class=\"b-mysocial-item-meta\">\n\n                    <!-- user -->\n                    <a\n                        ng-href=\"https://facebook.com/{{item.from.id}}\"\n                        target=\"_blank\"\n                        class=\"b-mysocial-item-user\"\n                        >\n                        <span\n                            class=\"b-mysocial-item-userpic\"\n                            ng-style=\"{ backgroundImage: \'url(https://graph.facebook.com/\' + item.from.id + \'/picture?type=square)\' }\"\n                            ></span>\n                        <strong\n                            class=\"b-mysocial-item-username\"\n                            ng-bind=\"item.from.name\"\n                            ></strong>\n                    </a>\n\n                    <!-- link -->\n                    <a\n                        ng-href=\"{{ item.permalink }}\"\n                        target=\"_blank\"\n                        class=\"b-mysocial-item-link\"\n                        >\n                        <time\n                            class=\"b-mysocial-item-date\"\n                            ng-bind=\"item.time\"\n                            ></time>\n                    </a>\n\n                    <!-- do like -->\n                    <span\n                        lj-ml=\"widget.social.facebook.dolike\"\n                        lj-ml-attr=\"title\"\n                        class=\"b-mysocial-item-dolike\"\n                        style=\"display:none;\"\n                        >\n                        <span\n                            lj-ml=\"widget.social.facebook.dolike\"\n                            lj-ml-attr=\"title\"\n                            class=\"b-mysocial-item-icon\">\n                            <svg class=\"svgicon\">\n                                <use xlink:href=\"#fi-edit\"/>\n                            </svg>\n                        </span>\n                    </span>\n\n                    <!-- do repost -->\n                    <a\n                        ng-href=\"{{ item.ljRepost }}\"\n                        ng-show=\"item.ljRepost\"\n                        lj-ml=\"widget.social.facebook.dorepost\"\n                        lj-ml-attr=\"title\"\n                        target=\"_blank\"\n                        class=\"b-mysocial-item-dorepost\"\n                        >\n                        <span\n                            lj-ml=\"widget.social.facebook.dorepost\"\n                            lj-ml-attr=\"title\"\n                            class=\"b-mysocial-item-icon\"\n                            >\n                            <svg class=\"svgicon\">\n                                <use xlink:href=\"#fi-edit\"/>\n                            </svg>\n                        </span>\n                    </a>\n\n                </div><!-- /meta -->\n\n                <!-- content -->\n                <div\n                    class=\"b-mysocial-item-content\"\n                    lj-html=\"item.text\"\n                    ></div><!-- /content -->\n\n                <!-- image -->\n                <div\n                    class=\"b-mysocial-item-picture\"\n                    ng-if=\"item.picture && item.object_id\"\n                    >\n                    <a\n                        ng-href=\"{{ item.link }}\"\n                        target=\"_blank\"\n                        class=\"b-mysocial-item-picture-link\"\n                        >\n                        <img\n                            ng-src=\"{{ item.picture }}\"\n                            alt=\"\"\n                            class=\"b-mysocial-item-picture-image\"\n                            >\n                    </a>\n                </div><!-- /image -->\n\n                <!-- external -->\n                <div\n                    class=\"b-mysocial-item-external\"\n                    ng-if=\"item.link && !item.object_id\"\n                    >\n                    <a\n                        ng-href=\"{{ item.link }}\"\n                        target=\"_blank\"\n                        class=\"b-mysocial-item-external-link\"\n                        >\n                        <!-- external title -->\n                        <h4\n                            class=\"b-mysocial-item-external-title\"\n                            ng-bind=\"item.name\"\n                            ></h4>\n                        <!-- external wrapper -->\n                        <div class=\"b-mysocial-item-external-wrapper\">\n                            <img\n                                ng-src=\"{{ item.picture }}\"\n                                class=\"b-mysocial-item-external-image\"\n                            >\n                            <p\n                                class=\"b-mysocial-item-external-text\"\n                                >{{item.description}}</p>\n                        </div>\n                    </a>\n                </div><!-- /external -->\n\n            </li>\n\n        </ul><!-- /items -->\n\n        <!-- loadmore button -->\n        <div class=\"b-mysocial-loadmore\">\n            <span\n                class=\"\n                    b-flatbutton\n                    b-flatbutton-simple\n                    \"\n                ng-hide=\"status.hideMoreButton\"\n                lj-ml=\"widget.social.facebook.loadmore\"\n                ng-click=\"showMore()\"\n                ></span>\n        </div>\n\n        <!-- dummy loader -->\n        <div class=\"b-mysocial-dummy\">\n            <div class=\"b-mysocial-dummy-item\">\n                <span class=\"b-mysocial-dummy-content\"></span>\n            </div>\n            <div class=\"b-mysocial-dummy-item\">\n                <span class=\"b-mysocial-dummy-content\"></span>\n            </div>\n            <div class=\"b-mysocial-dummy-item\">\n                <span class=\"b-mysocial-dummy-content\"></span>\n            </div>\n        </div><!-- /dummy -->\n\n        <!-- erroneous message -->\n        <p\n            class=\"b-mysocial-erroneous\"\n            lj-ml=\"widget.social.facebook.error\"\n            ></p>\n\n        <!-- loginess button -->\n        <div class=\"b-mysocial-loginess\">\n            <a\n                class=\"\n                    b-flatbutton\n                    b-flatbutton-simple\n                    b-flatbutton-facebook\n                    \"\n                ng-href=\"{{ backUrl }}\"\n                >\n                <span\n                    class=\"b-flatbutton-icon\"\n                    ></span>\n                <span\n                    class=\"b-flatbutton-title\"\n                    lj-ml=\"widget.social.facebook.login\"\n                    ></span>\n            </a>\n        </div>\n\n        <!-- emptiness message -->\n        <p\n            class=\"b-mysocial-emptiness\"\n            lj-ml=\"widget.social.facebook.empty\"\n            ></p>\n\n    </div><!-- /body -->\n\n\n\n    <!-- footer -->\n    <footer\n        class=\"b-mysocial-footer\"\n        >\n        <span\n            class=\"b-mysocial-footer-refresh\"\n            lj-ml=\"widget.social.facebook.refresh\"\n            ng-click=\"refresh()\"\n            ></span>\n        <span\n            ng-click=\"logout()\"\n            class=\"b-mysocial-footer-logout\">\n            <span \n                class=\"b-mysocial-footer-logout-text\"\n                lj-ml=\"widget.social.facebook.logout\">\n            </span>\n            <span \n                lj-ml=\"widget.social.facebook.logout\"\n                lj-ml-attr=\"title\"\n                class=\"b-mysocial-footer-logout-icon\">\n                <svg class=\"svgicon\">\n                    <use xlink:href=\"#fi-logout\"/>\n                </svg>\n            </span>\n        </span>\n        <a\n            ng-href=\"https://www.facebook.com/\"\n            class=\"b-mysocial-footer-all\"\n            target=\"_blank\"\n            lj-ml=\"widget.social.facebook.all\"\n            ></a>\n    </footer><!-- /footer -->\n\n\n\n</div>\n\n\n';
Site.page.template['angular/widgets/social/instagram.ng.tmpl'] = '<!-- my updates (LJSUP-18034 & LJSUP-18883) -->\n\n\n\n<div\n    class=\"b-mysocial\"\n    ng-class=\"{\n        \'b-mysocial-empty\': status.isEmpty,\n        \'b-mysocial-error\': status.isError,\n        \'b-mysocial-login\': status.isLogin,\n        \'b-mysocial-refreshing\': status.isRefreshing,\n        \'b-mysocial-loading\': status.isLoading,\n        \'b-mysocial-showmore\': status.noMore\n    }\"\n    >\n\n\n\n    <!-- head -->\n    <header class=\"b-mysocial-head\">\n\n        <h3 class=\"b-mysocial-header\"><!--\n\n            --><span\n                class=\"b-mysocial-title\"\n                lj-ml=\"widget.social.instagram.title\"\n                ng-click=\"refresh()\"\n                ></span><!--\n            --><span class=\"b-mysocial-refresh\" ng-click=\"refresh()\">\n                    <svg class=\"svgicon\">\n                        <use xlink:href=\"#fi-spinner\"/>\n                    </svg>\n                </span><!--\n        --></h3>\n\n    </header><!-- /head -->\n\n\n\n    <!-- body -->\n    <div class=\"b-mysocial-body\">\n\n        <!-- items -->\n        <ul\n            class=\"b-mysocial-items\"\n            ng-if=\"items\"\n            >\n\n            <li\n                class=\"b-mysocial-item\"\n                ng-repeat=\"item in items | limitTo: status.itemsLimit\"\n                >\n\n                <!-- meta -->\n                <div class=\"b-mysocial-item-meta\">\n\n                    <!-- user -->\n                    <a\n                        ng-href=\"https://instagram.com/{{item.user.username}}\"\n                        target=\"_blank\"\n                        class=\"b-mysocial-item-user\"\n                        >\n                        <span\n                            class=\"b-mysocial-item-userpic\"\n                            ng-style=\"{ backgroundImage: \'url(\' + item.user.profile_picture + \')\'}\"\n                            ></span>\n                        <strong\n                            class=\"b-mysocial-item-username\"\n                            ng-bind=\"item.user.username\"\n                            ></strong>\n                    </a>\n\n                    <!-- link -->\n                    <a\n                        ng-href=\"{{ item.link }}\"\n                        target=\"_blank\"\n                        class=\"b-mysocial-item-link\"\n                        >\n                        <time\n                            class=\"b-mysocial-item-date\"\n                            ng-bind=\"item.time\"\n                            ></time>\n                    </a>\n\n                    <!-- do like -->\n                    <span\n                        lj-ml=\"widget.social.instagram.dolike\"\n                        lj-ml-attr=\"title\"\n                        class=\"b-mysocial-item-dolike\"\n                        style=\"display:none;\"\n                        >\n                        <span\n                            lj-ml=\"widget.social.instagram.dolike\"\n                            lj-ml-attr=\"title\"\n                            class=\"b-mysocial-item-icon\"\n                            >\n                            <svg class=\"svgicon\">\n                                <use xlink:href=\"#fi-edit\"/>\n                            </svg>\n                        </span>\n                    </span>\n\n                    <!-- do repost -->\n                    <a\n                        ng-href=\"{{item.ljRepost}}\"\n                        ng-show=\"item.ljRepost\"\n                        lj-ml=\"widget.social.instagram.dorepost\"\n                        lj-ml-attr=\"title\"\n                        class=\"b-mysocial-item-dorepost\"\n                        target=\"_blank\"\n                        >\n                        <span\n                            lj-ml=\"widget.social.instagram.dorepost\"\n                            lj-ml-attr=\"title\"\n                            class=\"b-mysocial-item-icon\"\n                            >\n                            <svg class=\"svgicon\">\n                                <use xlink:href=\"#fi-edit\"/>\n                            </svg>\n                        </span>\n                    </a>\n\n                </div><!-- /meta -->\n\n                <!-- image -->\n                <div\n                    class=\"b-mysocial-item-picture\"\n                    ng-if=\"item.images.standard_resolution.url\"\n                    >\n                    <a\n                        ng-href=\"{{ item.link }}\"\n                        target=\"_blank\"\n                        class=\"b-mysocial-item-picture-link\"\n                        >\n                        <img\n                            ng-src=\"{{ item.images.standard_resolution.url }}\"\n                            alt=\"\"\n                            class=\"b-mysocial-item-picture-image\"\n                            >\n                    </a>\n                </div><!-- /image -->\n\n                <!-- content -->\n                <div\n                    class=\"b-mysocial-item-content\"\n                    lj-html=\"item.text\"\n                    ></div><!-- /content -->\n\n            </li>\n\n        </ul><!-- /items -->\n\n        <!-- loadmore button -->\n        <div class=\"b-mysocial-loadmore\">\n            <span\n                class=\"\n                    b-flatbutton\n                    b-flatbutton-simple\n                    \"\n                ng-hide=\"status.hideMoreButton\"\n                lj-ml=\"widget.social.instagram.loadmore\"\n                ng-click=\"showMore()\"\n                ></span>\n        </div>\n\n        <!-- dummy loader -->\n        <div class=\"b-mysocial-dummy\">\n            <div class=\"b-mysocial-dummy-item\">\n                <span class=\"b-mysocial-dummy-content\"></span>\n            </div>\n            <div class=\"b-mysocial-dummy-item\">\n                <span class=\"b-mysocial-dummy-content\"></span>\n            </div>\n            <div class=\"b-mysocial-dummy-item\">\n                <span class=\"b-mysocial-dummy-content\"></span>\n            </div>\n        </div><!-- /dummy -->\n\n        <!-- erroneous message -->\n        <p\n            class=\"b-mysocial-erroneous\"\n            lj-ml=\"widget.social.instagram.error\"\n            ></p>\n\n        <!-- loginess button -->\n        <div class=\"b-mysocial-loginess\">\n            <a\n                class=\"\n                    b-flatbutton\n                    b-flatbutton-simple\n                    b-flatbutton-instagram\n                    \"\n                ng-href=\"{{ backUrl }}\"\n                >\n                <span\n                    class=\"b-flatbutton-icon\"\n                    ></span>\n                <span\n                    class=\"b-flatbutton-title\"\n                    lj-ml=\"widget.social.instagram.login\"\n                    ></span>\n            </a>\n        </div>\n\n        <!-- emptiness message -->\n        <p\n            class=\"b-mysocial-emptiness\"\n            lj-ml=\"widget.social.instagram.empty\"\n            ></p>\n\n    </div><!-- /body -->\n\n\n\n    <!-- footer -->\n    <footer\n        class=\"b-mysocial-footer\"\n        >\n        <span\n            class=\"b-mysocial-footer-refresh\"\n            lj-ml=\"widget.social.instagram.refresh\"\n            ng-click=\"refresh()\"\n            ></span>\n        <span \n            class=\"b-mysocial-footer-logout\"\n            ng-click=\"logout()\"\n            >\n            <span\n                lj-ml=\"widget.social.instagram.logout\"\n                class=\"b-mysocial-footer-logout-text\">\n            </span>\n            <span\n                lj-ml=\"widget.social.instagram.logout\"\n                lj-ml-attr=\"title\"\n                class=\"b-mysocial-footer-logout-icon\"\n                >\n                <svg class=\"svgicon\">\n                    <use xlink:href=\"#fi-logout\"/>\n                </svg>\n            </span>\n        </span>\n        <a\n            ng-href=\"https://www.instagram.com/\"\n            class=\"b-mysocial-footer-all\"\n            target=\"_blank\"\n            lj-ml=\"widget.social.instagram.all\"\n            ></a>\n    </footer><!-- /footer -->\n\n\n\n</div>\n\n\n';
LJ.injectStyle('/* my updates widgets (LJSUP-18034) */\n\n\n\n.b-mysocial {\n    width: 300px;\n    margin: 0 0 25px;\n    margin: 0 0 1.5625rem;\n    padding: 0 0 25px 30px;\n    padding: 0 0 1.5625rem 30px;\n    border-bottom: 1px solid #DAE3E6;\n    }\n\n\n\n    /* head */\n    .b-mysocial-head {\n        position: relative;\n        margin: 0 0 13px;\n        margin: 0 0 0.8125rem;\n        padding: 0;\n        }\n\n        /* header */\n        .b-mysocial-header {\n            margin: 0;\n            padding: 0;\n            font-style: normal;\n            font-weight: normal;\n            font-size: 20px;\n            font-size: 1.25rem;\n            text-transform: uppercase;\n            color: #829399;\n            }\n\n            /* title */\n            .b-mysocial-title {\n                position: relative;\n                margin: 0;\n                padding: 0 23px 0 0;\n                cursor: pointer;\n                }\n            .b-mysocial-title:after {\n                content: \" \";\n                position: absolute;\n                top: 50%;\n                right: 0;\n                width: 16px;\n                height: 16px;\n                margin: -9px 0 0;\n                padding: 0;\n                background: url(/img/icons/unit_v3.png?v=13435656) no-repeat 0 -299px;\n                font: 0/0 a;\n                cursor: pointer;\n                }\n            .b-mysocial-title:after {\n                visibility: hidden;\n                } \n            .b-feedwidgets-item:hover .b-mysocial-title:after {\n                visibility: visible;\n                }\n            /* enabled feedsettings */\n            .b-feedsettings-on .b-mysocial-title {\n                padding: 0 2px 0 0;\n                }\n            .b-feedsettings-on .b-mysocial-title:after {\n                display: none;\n                }\n            \n            /* refresh */\n            .b-mysocial-refresh {\n                cursor: pointer;\n                visibility: hidden;\n                color: #7A9199;\n                }\n            .b-feedwidgets-item:hover .b-mysocial-refresh {\n                visibility: visible;\n                } \n                .b-mysocial-refresh .svgicon {\n                    display: inline-block;\n                    width: 16px;\n                    height: 16px;\n                    }\n\n\n    /* body */\n    .b-mysocial-body {\n        margin: 0;\n        padding: 0;\n        font-size: 14px;\n        font-size: 0.875rem;\n        }\n\n        /* items */\n        .b-mysocial-items {\n            margin: 0;\n            padding: 0;\n            list-style: none;\n            }\n\n            /* item */\n            .b-mysocial-item {\n                position: relative;\n                margin: 0 0 1em;\n                padding: 0 0 1em;\n                border-bottom: 1px solid #DAE3E6;\n                }\n\n                /* retweet */\n                .b-mysocial-item-retweet {\n                    position: relative;\n                    margin: 0 0 0.5em;\n                    padding: 0;\n                    font-size: 13px;\n                    font-size: 0.8125rem;\n                    }\n                    /* retweeted */\n                    .b-mysocial-item-retweet .b-mysocial-item-rt {\n                        color: #7F7F7F;\n                        }\n                    /* username */\n                    .b-mysocial-item-retweet .b-mysocial-item-username {\n                        }\n                    .b-mysocial-item-retweet .b-mysocial-item-username:link,\n                    .b-mysocial-item-retweet .b-mysocial-item-username:visited {\n                        color: #7FD1EE;\n                        }\n                    .b-mysocial-item-retweet .b-mysocial-item-username:hover,\n                    .b-mysocial-item-retweet .b-mysocial-item-username:active {\n                        color: #7FC3D9;\n                        }\n\n                /* meta */\n                .b-mysocial-item-meta {\n                    margin: 0 0 0.3em;\n                    }\n                .b-mysocial-item-meta:after {\n                    content: \"\";\n                    display: table;\n                    border-collapse: collapse;\n                    clear: both;\n                    }\n                    /* user */\n                    .b-mysocial-item-user {\n                        position: relative;\n                        float: left;\n                        max-width: 200px;\n                        margin: 0;\n                        padding: 1px 0 0 27px;\n                        }\n                    .b-mysocial-item-user:link,\n                    .b-mysocial-item-user:visited {\n                        color: #00A3D9;\n                        }\n                    .b-mysocial-item-user:hover,\n                    .b-mysocial-item-user:active {\n                        color: #0086B3;\n                        }\n                        /* userpic */\n                        .b-mysocial-item-userpic {\n                            position: absolute;\n                            top: 0;\n                            left: 0;\n                            display: block;\n                            width: 20px;\n                            height: 20px;\n                            margin: 0;\n                            padding: 0;\n                            border-radius: 3px;\n                            background-color: transparent;\n                            background-repeat: no-repeat;\n                            background-position: 50% 50%;\n                            background-size: contain;\n                            font: 0/0 a;\n                            }\n                        /* username */\n                        .b-mysocial-item-username {\n                            margin: 0;\n                            font-weight: normal;\n                            }\n                    /* link */\n                    .b-mysocial-item-link {\n                        float: right;\n                        margin: 0 0 0 5px;\n                        padding: 0;\n                        text-align: right;\n                        line-height: 21px;\n                        }\n                        /* date */\n                        .b-mysocial-item-date {\n                            margin: 0;\n                            }\n                    /* do repost */\n                    .b-mysocial-item-dorepost {\n                        position: relative;\n                        float: right;\n                        width: 16px;\n                        height: 16px;\n                        margin: 1px 0 0 5px;\n                        padding: 0;\n                        }\n                        /* icon */\n                        .b-mysocial-item-icon {\n                            position: absolute;\n                            top: 0;\n                            left: 0;\n                            width: 16px;\n                            height: 16px;\n                            margin: 0;\n                            padding: 0;\n                            border: 0;\n                            background-image: url(/img/icons/unit_v3.png?v=14345656);\n                            background-repeat: no-repeat;\n                            background-position: 0 0;\n                            text-shadow: none;\n                            color: transparent;\n                            font: 0/0 a;\n                            cursor: pointer;\n                            }\n                        .b-mysocial-item-dorepost .b-mysocial-item-icon {\n                            background-position: 0 -316px;\n                            }\n                    /* do retweet */\n                    .b-mysocial-item-doretweet {\n                        position: relative;\n                        float: right;\n                        width: 16px;\n                        height: 16px;\n                        margin: 1px 0 0 5px;\n                        padding: 0;\n                        }\n                        .b-mysocial-item-doretweet .b-mysocial-item-icon {\n                            background-position: 0 -333px;\n                            }\n                    /* do fav */\n                    .b-mysocial-item-dofav {\n                        position: relative;\n                        float: right;\n                        width: 16px;\n                        height: 16px;\n                        margin: 1px 0 0 5px;\n                        padding: 0;\n                        }\n                        .b-mysocial-item-dofav .b-mysocial-item-icon {\n                            background-position: 0 -350px;\n                            }\n                    /* do like */\n                    .b-mysocial-item-dolike {\n                        position: relative;\n                        float: right;\n                        width: 16px;\n                        height: 16px;\n                        margin: 1px 0 0 5px;\n                        padding: 0;\n                        }\n                        .b-mysocial-item-dolike .b-mysocial-item-icon {\n                            background-position: 0 -367px;\n                            }\n\n                /* content */\n                .b-mysocial-item-content {\n                    margin: 0 0 0.3em;\n                    word-break: break-word;\n                    word-wrap: break-word;\n                    }\n                    .b-mysocial-item-content A {\n                        word-break: break-all;\n                        word-break: break-word;\n                        -webkit-hyphens: auto;\n                        -moz-hyphens: auto;\n                        hyphens: auto;\n                        word-wrap: break-word;\n                        }\n\n                /* picture */\n                .b-mysocial-item-picture {\n                    margin: 0 0 0.3em;\n                    }\n                    .b-mysocial-item-picture-link {\n                        margin: 0;\n                        }\n                        .b-mysocial-item-picture-image {\n                            max-width: 100%;\n                            max-height: 1000px;\n                            margin: 0 0 0 -4px;\n                            padding: 3px;\n                            border: 1px solid #DAE3E6;\n                            vertical-align: top;\n                            }\n                    .b-mysocial-item-picture-link:visited {\n                        }\n                        .b-mysocial-item-picture-link:visited .b-mysocial-item-picture-image {\n                            opacity: 0.7;\n                            }\n\n                /* external */\n                .b-mysocial-item-external {\n                    margin: 0 0 0.3em;\n                    }\n                    .b-mysocial-item-external-link {\n                        display: block;\n                        margin: 0 0 0 -6px;\n                        padding: 5px;\n                        border: 1px solid #DAE3E6;\n                        }\n                        .b-mysocial-item-external-title {\n                            margin: 0 0 0.3em;\n                            font-size: 1em;\n                            font-weight: normal;\n                            line-height: 1.2;\n                            }\n                        .b-mysocial-item-external-wrapper {\n                            overflow: hidden;\n                            position: relative;\n                            max-height: 14em;\n                            margin: 0;\n                            padding: 0;\n                            }\n                        .b-mysocial-item-external-wrapper:before {\n                            content: \"\";\n                            position: absolute;\n                            top: 13em;\n                            left: 0;\n                            right: 0;\n                            height: 1em;\n                            background: red;\n                            background: -moz-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 70%);\n                            background: -webkit-linear-gradient(top, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 70%);\n                            background: linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 70%);\n                            }\n                        .b-mysocial-item-external-wrapper:after {\n                            content: \"\";\n                            display: table;\n                            border-collapse: collapse;\n                            clear: both;\n                            }\n                            .b-mysocial-item-external-image {\n                                float: left;\n                                width: 70px;\n                                margin: 3px 10px 3px 0;\n                                padding: 0;\n                                }\n                            .b-mysocial-item-external-text {\n                                margin: 0;\n                                color: #000;\n                                }\n                    .b-mysocial-item-external-link:visited {\n                        }\n                        .b-mysocial-item-external-link:visited .b-mysocial-item-external-image {\n                            opacity: 0.7;\n                            }\n                        .b-mysocial-item-external-link:visited .b-mysocial-item-external-text {\n                            opacity: 0.7;\n                            }\n\n        /* load more button */\n        .b-mysocial-loadmore {\n            margin: 0 0 1em;\n            padding: 0 0 1em;\n            border-bottom: 1px solid #DAE3E6;\n            text-align: center;\n            }\n\n        /* dummy loader */\n        .b-mysocial-dummy {\n            display: none;\n            margin: 0;\n            }\n            .b-mysocial-dummy-item {\n                margin: 0 0 3em;\n                padding: 0;\n                }\n                .b-mysocial-dummy-content {\n                    position: relative;\n                    display: block;\n                    width: 250px;\n                    height: 19px;\n                    height: 1.2rem;\n                    margin: 0 0 32px;\n                    margin: 0 0 1.5rem;\n                    padding: 0;\n                    background: #F8F8F8;\n                    -webkit-animation: loading-mysocial 1s infinite;\n                    -moz-animation:    loading-mysocial 1s infinite;\n                    -o-animation:      loading-mysocial 1s infinite;\n                    animation:         loading-mysocial 1s infinite;\n                    }\n                .b-mysocial-dummy-content:after {\n                    content: \" \";\n                    position: absolute;\n                    top: 24px;\n                    top: 1.5rem;\n                    left: 0;\n                    width: 200px;\n                    height: 19px;\n                    height: 1.2rem;\n                    margin: 0;\n                    padding: 0;\n                    background: #F8F8F8;\n                    }\n                @-webkit-keyframes loading-mysocial {\n                    0%   { background: #F8F8F8; }\n                    50%  { background: #FBFBFB; }\n                    100% { background: #F8F8F8; }\n                }\n                @-moz-keyframes loading-mysocial {\n                    0%   { background: #F8F8F8; }\n                    50%  { background: #FBFBFB; }\n                    100% { background: #F8F8F8; }\n                }\n                @-o-keyframes loading-mysocial {\n                    0%   { background: #F8F8F8; }\n                    50%  { background: #FBFBFB; }\n                    100% { background: #F8F8F8; }\n                }\n                @keyframes loading-mysocial {\n                    0%   { background: #F8F8F8; }\n                    50%  { background: #FBFBFB; }\n                    100% { background: #F8F8F8; }\n                }\n\n        /* erroneous */\n        .b-mysocial-erroneous {\n            display: none;\n            margin: 0 0 1em;\n            padding: 0;\n            font-size: 1.2307em;\n            color: #D92B2B;\n            }\n\n        /* loginess */\n        .b-mysocial-loginess {\n            display: none;\n            margin: 0;\n            text-align: center;\n            }\n\n        /* emptiness */\n        .b-mysocial-emptiness {\n            display: none;\n            margin: 0;\n            padding: 0.5em 0;\n            font-size: 1.2307em;\n            color: #829399;\n            }\n\n\n\n    /* footer */\n    .b-mysocial-footer {\n        margin: 0;\n        padding: 0;\n        font-size: 14px;\n        font-size: 0.875rem;\n        text-align: right;\n        }\n    .b-mysocial-footer:after {\n        content: \"\";\n        display: table;\n        border-collapse: collapse;\n        clear: both;\n        }\n        .b-mysocial-footer-refresh {\n            float: left;\n            margin: 0;\n            color: #00A3D9;\n            cursor: pointer;\n            }\n        .b-mysocial-footer-refresh:hover {\n            color: #0086B3;\n            }\n        .b-mysocial-footer-logout {\n            position: relative;\n            float: right;\n            margin: 0;\n            padding: 0 20px 0 0;\n            color: #00A3D9;\n            cursor: pointer;\n            }\n        .b-mysocial-footer-logout:hover {\n            color: #0086B3;\n            }\n        .b-mysocial-footer-logout:after {\n            content: \" \";\n            position: absolute;\n            top: 0;\n            right: 0;\n            width: 16px;\n            height: 16px;\n            margin: 0;\n            padding: 0;\n            background: url(/img/icons/unit_v3.png?v=14345656) no-repeat 0 -384px;\n            font: 0/0 a;\n            cursor: pointer;\n            }\n        /* enabled feedsettings */ \n        .b-feedsettings-on .b-mysocial-footer-logout:after {\n            display: none;\n            }\n        .b-mysocial-footer-logout-icon {\n            position: absolute;\n            top: 0;\n            right: 0;\n            cursor: pointer;\n            color: #7A9199;\n            }\n            .b-mysocial-footer-logout-icon .svgicon {\n                display: inline-block;\n                width: 16px;\n                height: 16px;\n                }\n        .b-mysocial-footer-all {\n            display: inline-block;\n            float: right;\n            clear: both;\n            margin: 0.5em 0 0;\n            display: none; /* temp */\n            }\n        .b-mysocial-footer-all:link,\n        .b-mysocial-footer-all:visited {\n            color: #00A3D9;\n            }\n        .b-mysocial-footer-all:hover,\n        .b-mysocial-footer-all:active,\n        .b-mysocial-footer-all:focus {\n            color: #0086B3;\n            }\n\n\n\n/* loading */\n.b-mysocial-loading {\n    }\n    /* show */\n    .b-mysocial-loading .b-mysocial-dummy {\n        display: block;\n        }\n    /* hide */\n    .b-mysocial-loading .b-mysocial-items {\n        display: none;\n        }\n    .b-mysocial-loading .b-mysocial-loadmore {\n        display: none;\n        }\n    .b-mysocial-loading .b-mysocial-erroneous {\n        display: none;\n        }\n    .b-mysocial-loading .b-mysocial-loginess {\n        display: none;\n        }\n    .b-mysocial-loading .b-mysocial-emptiness {\n        display: none;\n        }\n    .b-mysocial-loading .b-mysocial-footer {\n        display: none;\n        }\n    /* disable refresh */\n    .b-mysocial-loading .b-mysocial-title {\n        padding-right: 0;\n        cursor: default;\n        }\n    .b-mysocial-loading .b-mysocial-title:after {\n        display: none;\n        }\n    .b-mysocial-loading .b-mysocial-refresh {\n        display: none;\n        }\n\n\n\n/* refreshing */\n.b-mysocial-refreshing {\n    }\n    /* show */\n    .b-mysocial-refreshing .b-mysocial-items {\n        display: block;\n        pointer-events: none;\n        opacity: 0.3;\n        }\n    .b-mysocial-refreshing .b-mysocial-loadmore {\n        display: block;\n        pointer-events: none;\n        opacity: 0.3;\n        }\n    .b-mysocial-refreshing.b-mysocial-error .b-mysocial-erroneous {\n        display: block;\n        opacity: 0.3;\n        }\n    .b-mysocial-refreshing .b-mysocial-refresh {\n        opacity: 0.3;\n        }\n    /* hide */\n    .b-mysocial-refreshing .b-mysocial-dummy {\n        display: none;\n        }\n    .b-mysocial-refreshing .b-mysocial-erroneous {\n        display: none;\n        }\n    .b-mysocial-refreshing .b-mysocial-loginess {\n        display: none;\n        }\n    .b-mysocial-refreshing .b-mysocial-emptiness {\n        display: none;\n        }\n    .b-mysocial-refrashing .my-social-showmore {\n        display: none;\n        }\n\n\n/* empty */\n.b-mysocial-error {\n    }\n    /* show */\n    .b-mysocial-error .b-mysocial-erroneous {\n        display: block;\n        }\n    /* hide */\n    .b-mysocial-error .b-mysocial-items {\n        display: none;\n        }\n    .b-mysocial-error .b-mysocial-loadmore {\n        display: none;\n        }\n    .b-mysocial-error .b-mysocial-dummy {\n        display: none;\n        }\n    .b-mysocial-error .b-mysocial-loginess {\n        display: none;\n        }\n    .b-mysocial-error .b-mysocial-emptiness {\n        display: none;\n        }\n\n\n\n/* login */\n.b-mysocial-login {\n    }\n    /* show */\n    .b-mysocial-login .b-mysocial-loginess {\n        display: block;\n        }\n    /* hide */\n    .b-mysocial-login .b-mysocial-items {\n        display: none;\n        }\n    .b-mysocial-login .b-mysocial-loadmore {\n        display: none;\n        }\n    .b-mysocial-login .b-mysocial-dummy {\n        display: none;\n        }\n    .b-mysocial-login .b-mysocial-erroneous {\n        display: none;\n        }\n    .b-mysocial-login .b-mysocial-emptiness {\n        display: none;\n        }\n    .b-mysocial-login .b-mysocial-footer {\n        display: none;\n        }\n    /* disable refresh */\n    .b-mysocial-login .b-mysocial-title {\n        padding-right: 0;\n        cursor: default;\n        }\n    .b-mysocial-login .b-mysocial-title:after {\n        display: none;\n        }\n    .b-mysocial-login .b-mysocial-refresh {\n        display: none;\n        }\n\n\n\n/* empty */\n.b-mysocial-empty {\n    }\n    /* show */\n    .b-mysocial-empty .b-mysocial-emptiness {\n        display: block;\n        }\n    /* hide */\n    .b-mysocial-empty .b-mysocial-items {\n        display: none;\n        }\n    .b-mysocial-empty .b-mysocial-loadmore {\n        display: none;\n        }\n    .b-mysocial-empty .b-mysocial-dummy {\n        display: none;\n        }\n    .b-mysocial-empty .b-mysocial-erroneous {\n        display: none;\n        }\n    .b-mysocial-empty .b-mysocial-loginess {\n        display: none;\n        }\n\n    /* disable refresh */\n    .b-mysocial-empty .b-mysocial-title {\n        cursor: default;\n        }\n\n\n\n/* show more */\n.b-mysocial-showmore {\n    }\n    /* hide */\n    .b-mysocial-showmore .b-mysocial-loadmore {\n        display: none;\n        }\n    .b-mysocial-showmore .b-mysocial-dummy {\n        display: none;\n        }\n    .b-mysocial-showmore .b-mysocial-erroneous {\n        display: none;\n        }\n    .b-mysocial-showmore .b-mysocial-loginess {\n        display: none;\n        }\n    .b-mysocial-showmore .b-mysocial-emptiness {\n        display: none;\n        }\n\n\n');
;(function () {
  'use strict';

angular.module('LJ.Widget.Social', [
  'LJ.Templates',
  'LJ.Api',
  'LJ.Directives'
])
  .factory('Twitter', function () {
    var factory = {};

    factory.requestParams = {
      service: 'twitter',
      api_method: 'statuses/home_timeline'
    };

    factory.requestOptions = {
      silent: true
    };

    factory.modifyParams = {
      replaceLinks   : true,
      replaceHashTags: 'https://twitter.com/hashtag/{hashtag}?src=hash',
      replaceUsers   : 'https://twitter.com/{username}'
    };

    factory.beforeModify = function (tweet) {

      if (!tweet) {
        return false;
      }

      tweet.permalink = 'https://twitter.com/' + tweet.user.screen_name + '/status/' + tweet.id_str;

      // Remove 'RT @user: ' from the beginning
      if ( tweet.retweeted_status ) {
        tweet.text = tweet.text.replace(/^(RT\s@\w+:\s{0,1})/i, '');
      }

      return tweet;
    };

    // Normalize twitter 'created_at' time.
    factory.getDate = function (tweet) {
      return Date.parse(tweet.created_at) || Date.parse( tweet.created_at.replace(/(\s\+)/, ' UTC$1') );
    };

    return factory;
  })
  .factory('Facebook', function () {
    var factory = {};

    factory.requestParams = {
      service: 'facebook',
      api_method: 'home'
    };

    factory.requestOptions = {
      silent: true
    };

    factory.modifyParams = {
      replaceLinks   : true,
      replaceHashTags: 'https://www.facebook.com/hashtag/{hashtag}'
    };

    factory.beforeModify = function (item) {

      if ( item.picture ) {
        // remove 's130x130' string
        var sizePattern = /\/\w?\d{2,5}x\d{2,5}/,
            // NOT show images with session URL params
            sessionPattern = /\?(oh=|oe=|__gda__=)\w+/;

        if ( sessionPattern.test(item.picture) ) {
          delete item.picture;
        } else {
          item.picture = item.picture.replace(sizePattern, '');
        }
      }

      // prevent XSS
      item.text = LJ.String.encodeHTML( factory.textMethod(item) );

      // permalink to post. Construct it if no link received
      if ( item.actions.length && item.link ) {
        item.permalink = item.link.indexOf('facebook') !== -1 ?
          item.link :
          item.actions[0].link;
      } else {
        item.permalink = 'https://www.facebook.com/permalink.php?id=' + item.from.id + '&story_fbid=' + item.id.split('_')[1];
      }

      // next line tags add.
      item.text = item.text.replace(/\n/g, '\n<br/>');

      return item;
    };

    factory.textMethod = function (item) {
      return item.message || item.caption || item.story;
    };

    // Normalize facebook 'update_time' time. +0000 timezone to +00:00
    factory.getDate = function (item) {
      return LJ.Util.Date.parse( item.updated_time.replace(/(\+(\d){2})/, '$1:'), '%Y-%M-%D %H:%m' );
    };

    factory.itemsRoot = 'data';

    return factory;
  })
  .factory('Instagram', function () {
    var factory = {};

    factory.beforeModify = function (item){
      item.created_at = item.created_time*1000;
      item.permalink = item.link;

      return item;
    };

    factory.requestParams = {
      service: 'instagram',
      api_method: 'users/self/feed'
    };

    factory.requestOptions = {
      silent: true
    };

    factory.itemsRoot = 'data';

    factory.textMethod = function (item) {
      return item.caption ? item.caption.text : '';
    };

    factory.modifyParams = {
      replaceLinks   : true,
      replaceUsers   : 'https://instagram.com/{username}'
    };

    factory.getDate = function (item) {
      return item.created_time * 1000;
    };

    return factory;
  })
  .factory('Social', function () {

    var factory = {};

    // #hashtag link
    function replaceHashTags(text, hashTagUrl) {
      var template = '<a href="' + hashTagUrl + '" target="_blank">#{hashtag}</a>';
      return text.replace(/#([\S]+)/gi, function (match, hashTag) {
        return template.supplant({ hashtag: hashTag });
      });
    }

    // plain text URL to link
    function replaceLinks(text) {
      return text
        .replace(
          /((https?\:\/\/)|(www\.|(\S+|)(lj|livejournal)))(\S+)(\w{2,4})(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/gi,
          function(url){
            var href = url;
            if (!href.match('^https?:\/\/')) {
              href = 'http://' + href;
            }
            return '<a href="' + href + '">' + url + '</a>';
          });
    }

    // @username to user link
    function replaceUsers(text, profileUrl) {
      var template = '<a href="' + profileUrl + '" target="_blank">@{username}</a>';
      return text.replace(/@(\w+)/gi, function (match, username) {
        return template.supplant({ username: username });
      });
    }

    // replace set patterns to links
    factory.modify = function (text, options) {

      if ( options.replaceLinks ) {
        text = replaceLinks(text);
      }

      if ( options.replaceHashTags ) {
        text = replaceHashTags(text, options.replaceHashTags);
      }

      if ( options.replaceUsers ) {
        text = replaceUsers(text, options.replaceUsers);
      }

      return text;
    };

    return factory;
  })

  .controller('TwitterCtrl', ['$scope', '$timeout', 'Api', 'Social', 'Twitter', socialCtrl])
  .controller('FacebookCtrl', ['$scope', '$timeout', 'Api', 'Social', 'Facebook', socialCtrl])
  .controller('InstagramCtrl', ['$scope', '$timeout', 'Api', 'Social', 'Instagram', socialCtrl])


  .directive('ljWidgetTwitter', function () {
      return {
        controller  : 'TwitterCtrl',
        templateUrl : 'twitter.ng.tmpl',
        scope       : true
      };
  })

  .directive('ljWidgetFacebook', function () {
      return {
        controller  : 'FacebookCtrl',
        controllerAs: 'widget',
        templateUrl: 'facebook.ng.tmpl',
        scope      : true
      };
  })

  .directive('ljWidgetInstagram', function () {
      return {
        controller  : 'InstagramCtrl',
        controllerAs: 'widget',
        templateUrl: 'instagram.ng.tmpl',
        scope      : true
      };
  });

  function socialCtrl($scope, $timeout, Api, Social, Service) {

    var ITEMS_LIMIT = 10;

    $scope.status = {
      isLoading   : true,
      isError     : false,
      isLogin     : false,
      isRefreshing: false,
      isEmpty     : false,
      itemsLimit  : Service.itemsLimit || 5,
      noMore      : false
    };

    $scope.siteroot = LJ.get('siteroot');

    $scope.getItems = function () {

      // MAKE API REQUEST OUT OF BATCH QUEUE!
      // Can be slower then 10 seconds!
      $timeout( function () {
        // Get tweets from server proxy. Caches on server for 60s.
        Api.call('oauth_proxy.make_request', Service.requestParams, Service.requestOptions)
          .then(successCallback, errorCallback)
          .then(function (items) {

            if ( !items ) {
              return;
            }

            if ( !items.length ) {
              $scope.status.isEmpty = true;
              return;
            }

            // slice latest 10 items.
            $scope.items = items.length > ITEMS_LIMIT ? items.slice(0, ITEMS_LIMIT) : items;
            $scope.status.noMore = $scope.status.itemsLimit >= ITEMS_LIMIT || $scope.status.itemsLimit >= items.length;
            angular.forEach($scope.items, $scope.toHtml);
          });
      }, 200);
    };

    $scope.refresh = function () {
      $scope.status.isRefreshing = true;

      $scope.getItems();
    };

    $scope.backUrl = LJ.get('siteroot') + '/oauth_proxy/authorize?service='+ Service.requestParams.service +'&callback=' + LJ.get('remote.journal_url') + 'feed';

    // Replaces hash tags, links.
    $scope.toHtml = function (item, index) {
      var text, date, minutes;

      if ( Service.beforeModify ) {
        item = Service.beforeModify(item);
      }

      // standard property is .text, some Services use own property
      text = item.text || Service.textMethod(item);
      date = new Date( Service.getDate(item) );
      minutes = ( date.getMinutes() < 10 ? '0' : '' ) + date.getMinutes();

      if ( text ) {
        item.text = Social.modify(text, Service.modifyParams);
      }

      item.time = [date.getHours(), minutes].join(':');

      $scope.repost(item, index);
      $scope.items[index] = item;
    };

    $scope.showMore = function () {
      $scope.status.itemsLimit = ITEMS_LIMIT;
      $scope.status.noMore = true;
    };

    $scope.logout = function () {
      var token = LJ.get('friendsfeed_widgets.' + Service.requestParams.service + '.disconnect_token');

      // send GET to logout by adding image.
      var img = new Image();
      img.src = LJ.get('siteroot') + '/manage/settings/' + Service.requestParams.service + '.bml?act=disconnect&auth_token=' + token;

      $scope.status.noMore  = false;
      $scope.status.isEmpty = false;
      $scope.status.isLogin = true;
      $scope.getItems();
    };

    // construct url for repost item to LJ
    $scope.repost = function (item, index) {
      if ( item.permalink ) {
        var embed = LJ.Media.parse(item.permalink);

        if ( !embed ) {
          return;
        }
        embed.then( function (data) {
          $timeout( function () {
            $scope.items[index].ljRepost = $scope.siteroot + '/update.bml?event=' + encodeURIComponent(data.embed);
          });
        });
      }
    };

    function successCallback(data) {
      var dataObj;

      $scope.status.isError = false;
      $scope.status.isEmpty = false;
      $scope.status.isLoading = false;
      $scope.status.isRefreshing = false;

      // server proxies response as JSON.stringify
      // if service API dies - return string and JSON.parse crashes
      try {
        dataObj = JSON.parse(data.response);
      } catch (e) {
        $scope.status.isError = true;
        return e;
      }

      if ( !dataObj || dataObj.error || dataObj.errors ) {
        errorCallback( dataObj ? (dataObj.error || dataObj.errors[0]) : null );
        return;
      }

      return Service.itemsRoot ? dataObj[Service.itemsRoot] : dataObj;
    }

    function errorCallback(error) {
      var NO_ACCESS_TOKEN = -12604,
          AUTH_FAILED = -12602;

      $scope.status.isLoading = false;
      $scope.status.isRefreshing = false;

      if ( error && (
        error.code === NO_ACCESS_TOKEN ||
        error.code === AUTH_FAILED ||
        error.type === 'OAuthException') ) {

        $scope.status.isLogin = true;
        return false;
      }

      $scope.status.isError = true;
      return false;
    }

    // get feed on init.
    $scope.getItems();
  }
}());
;

/* file-end: js/widgets/angular/social.js 
----------------------------------------------------------------------------------*/

/* ---------------------------------------------------------------------------------
   file-start: js/core/angular/checked.js 
*/

angular.module('LJ.Checked', [])

  /**
   * Allows to work with checked groups.
   * When model with some id is set to true, all others will be set to false.
   *
   * @return {Object}   factory
   * @return {Function} factory.get  RadioGroup getter
   *
   * @example
   *
   *    // get CheckedGroup instance
   *    var checked = checkedGroup('editable');
   *
   *    // transfer models to scope
   *    $scope.models = checked.models();
   *
   *    // check if all models checked
   *    if ( checked.isAllChecked(ids) ) { ... }
   *
   *    // check if none checked
   *    if ( checked.isNoneChecked() ) { ... }
   *
   *    // check if none of ids is checked
   *    if ( checked.isNoneChecked(ids) ) { ... }
   *
   *    // check some models
   *    checked.toggle(ids, true);
   *
   *    // uncheck some models
   *    checked.toggle(ids, false);
   *
   *    // get checked model ids
   *    checked.getChecked();
   *
   *    // get amount of checked models
   *    checked.count();
   *
   */
  .factory('checkedGroup', [function () {
    // instances cache
    var cache = {};

    function CheckedGroup() {
      this._models = {};
    }

    /**
     * Reset models states
     * @return {Object} Models
     */
    CheckedGroup.prototype.reset = function (_models) {
      var models = this.models(),
          id;

      // reset models
      for (id in models) {
        if ( models.hasOwnProperty(id) ) {
          delete models[id];
        }
      }

      if ( angular.isObject(_models) ) {
        angular.extend(models, _models);
      }

      return this;
    };

    /**
     * Total models count
     * @return {Number} Count
     */
    CheckedGroup.prototype.length = function () {
      return Object.keys( this.models() ).length;
    };

    /**
     * CheckedGroup models count
     * @return {Number} Amount of checked models
     */
    CheckedGroup.prototype.count = function () {
      var models = this.models(),
          result = 0,
          id;

      for (id in models) {
        if (models.hasOwnProperty(id) && models[id]) {
          result += 1;
        }
      }

      return result;
    };

    /**
     * Get models
     * @return {Object} Models
     */
    CheckedGroup.prototype.models = function () {
      return this._models;
    };

    /**
     * Check helper
     * @param  {Array|Number|String} ids     Invite(s) id(s) to change state
     * @param  {Boolean}             [state] State: check or uncheck, if not provided,
     *                                       toggles previous model state
     */
    CheckedGroup.prototype.toggle = function (ids, state) {
      var models = this.models(),
          isStateDefined = typeof state !== 'undefined';

      if ( !Array.isArray(ids) ) {
        ids = [ids];
      }

      ids.forEach(function (id) {
        models[id] = isStateDefined ? state : !Boolean(models[id]);
      });
    };

    /**
     * Checkes if a model with provided id is checked
     * @param  {Number|String}  id  Model id
     * @return {Boolean}            Check result
     */
    CheckedGroup.prototype.isChecked = function (id) {
      return Boolean( this.models()[id] );
    };

    /**
     * Checks if all ids are checked
     * @param {Array|Number|String}  ids  Ids of models to check
     * @return {Boolean} Result
     */
    CheckedGroup.prototype.isAllChecked = function (ids) {
      var models = this.models();

      if (typeof ids === 'undefined') {
        return this.count() === this.length();
      }

      if ( !Array.isArray(ids) ) {
        ids = [ids];
      }

      return ids.every(function (id) {
        return models[id];
      });
    };

    /**
     * Checks if none of provided ids checked
     * @param  {Array|Number|String} [ids] Ids to check
     * @return {Boolean}      Result
     */
    CheckedGroup.prototype.isNoneChecked = function (ids) {
      var models = this.models();

      if (typeof ids === 'undefined') {
          return this.count() === 0;
      }

      if ( !Array.isArray(ids) ) {
        ids = [ids];
      }

      return ids.every(function (id) {
        return !models[id];
      });
    };

    /**
     * Get checked model ids
     * @param {Array|String|Number} [idsToCheck] Ids to check
     * @return {Array} CheckedGroup model ids
     */
    CheckedGroup.prototype.getChecked = function (idsToCheck) {
      var models = this.models(),
          ids = [],
          id;

      for (id in models) {
        if (models.hasOwnProperty(id) && models[id]) {
          ids.push( id );
        }
      }

      if (typeof idsToCheck !== 'undefined') {
        if ( !Array.isArray(idsToCheck) ) {
          idsToCheck = [idsToCheck];
        }

        // ids contain strings (object keys)
        idsToCheck = idsToCheck.map(String);

        ids = ids.filter(function (id) {
          return idsToCheck.indexOf(id) !== -1;
        });
      }

      return ids;
    };

    /**
     * Get instance of CheckedGroup instance
     *
     * @param  {String}       name CheckedGroup identifier
     * @return {CheckedGroup}      CheckedGroup instance
     */
    function get(name) {
      if ( cache[name] ) {
        return cache[name];
      }

      cache[name] = new CheckedGroup();
      return cache[name];
    }

    return get;
  }]);
;

/* file-end: js/core/angular/checked.js 
----------------------------------------------------------------------------------*/


/* ---------------------------------------------------------------------------------
   file-start: js/core/angular/ljSelectric.js 
*/

/* ---------------------------------------------------------------------------------
   file-start: js/lib/jquery.selectric.min.js 
*/

/*! Selectric ϟ v1.6.3 (2014-02-26) - git.io/tjl9sQ - Copyright (c) 2013 Leonardo Santos - Dual licensed: MIT/GPL */
!function(a){var b="selectric",c=function(a){var b,c="40-46 50-53 54-57 62-70 71-74 61 47 77".replace(/\d+/g,"\\3$&").split(" ");for(b in c){if(!c.hasOwnProperty(b))return;a=a.toLowerCase().replace(RegExp("["+c[b]+"]","g"),"aeiouncy".charAt(b))}return a},d=function(d,e){function f(){function d(a){/^(9|13|27)$/.test(a.keyCode||a.which)&&(a.stopPropagation(),k(v,!0))}var f=B.children();_$li="<ul>",selectedIndex=f.filter(":"+P).index(),w=v=~selectedIndex?selectedIndex:0,(A=f.length)&&(f.each(function(b){var d=a(this),e=d.html(),f=d.prop("disabled");G[b]={value:d.val(),text:e,slug:c(e),disabled:f},_$li+='<li class="'+(b==w?P:"")+(b==A-1?" last":"")+(f?" disabled":"")+'">'+e+"</li>"}),E.html(_$li+"</ul>"),H.html(G[w].text)),D.add(B).off(I),F.data(b,!0).prop("class",[r[6],B.prop("class"),N,e.responsive?r[8]:""].join(" ")),B.prop("disabled")?C.prop("disabled",!0):(F.removeClass(N).hover(function(){a(this).toggleClass(r[7])}),e.openOnHover&&D.on("mouseenter"+I,h),D.on(L,function(a){s?j():h(a)}),C.on({keypress:d,keydown:function(a){d(a),clearTimeout(u),u=setTimeout(function(){C.val("")},e.keySearchTimeout);var b=a.keyCode||a.which;b>36&&41>b&&k(39>b?n():m())},focusin:function(a){C.one("blur",function(){C.blur()}),s||h(a)}}).on(Q,function(){C.val().length&&a.each(G,function(a,b){return RegExp("^"+C.val(),"i").test(b.slug)&&!b.disabled?(k(a),!1):void 0})}),t=a("li",E.removeAttr("style")).click(function(){return k(a(this).index(),!0),!1}))}function g(){var a=E.closest(":visible").children(":hidden"),b=e.maxHeight;a.addClass(O);var c=E.outerWidth(),d=D.outerWidth()-(c-E.width());!e.expandToItemText||d>c?z=d:(E.css("overflow","scroll"),F.width(9e4),z=c,E.css("overflow",""),F.width("")),E.width(z).height()>b&&E.height(b),a.removeClass(O)}function h(b){b.preventDefault(),b.stopPropagation(),g(),a("."+M).removeClass(M),s=!0,x=E.outerHeight(),i(),C.val("").is(":focus")||C.focus(),J.on(L,j),e.openOnHover&&(clearTimeout(y),F.one("mouseleave"+I,function(){y=setTimeout(j,500)})),F.addClass(M),l(v),e.onOpen(d)}function i(){s&&(g(),E.css("top",F.offset().top+F.outerHeight()+x>K.scrollTop()+K.height()?-x:""),setTimeout(i,100))}function j(a){if(!a&&w!=v){var b=G[v].text;B.prop("selectedIndex",w=v).data("value",b).trigger("change",[b,w]),e.onChange(d),H.html(b)}J.off(I),F.removeClass(M),s=!1,e.onClose(d)}function k(a,b){G[v=a].disabled||(t.removeClass(P).eq(a).addClass(P),l(a),b&&j())}function l(a){var b=t.eq(a).outerHeight(),c=t[a].offsetTop,d=E.scrollTop(),e=c+2*b;E.scrollTop(e>d+x?e-x:d>c-b?c-b:d)}function m(a){if(G[a=(v+1)%A].disabled)for(;G[a=(a+1)%A].disabled;);return a}function n(a){if(G[a=(v>0?v:A)-1].disabled)for(;G[a=(a>0?a:A)-1].disabled;);return a}var o,e=a.extend({onOpen:a.noop,onClose:a.noop,onChange:a.noop,maxHeight:300,keySearchTimeout:500,arrowButtonMarkup:'<b class="button">&#x25be;</b>',disableOnMobile:!0,openOnHover:!1,expandToItemText:!1,responsive:!1,customClass:{prefix:"selectric",postfixes:"Input Items Open Disabled TempShow HideSelect Wrapper Hover Responsive",camelCase:!0}},e),p=e.customClass,q=p.postfixes.split(" "),r=[];if(!e.disableOnMobile||!/android|ip(hone|od|ad)/i.test(navigator.userAgent)){for(;o=q.shift();)r.push(p.camelCase?p.prefix+o:(p.prefix+o).replace(/([A-Z])/g,"-$&").toLowerCase());var s,t,u,v,w,x,y,z,A,B=a(d),C=a('<input type="text" class="'+r[0]+'"/>'),D=a('<div class="'+p.prefix+'"><p class="label"/>'+e.arrowButtonMarkup+"</div>"),E=a('<div class="'+r[1]+'" tabindex="-1"></div>'),F=B.data(b,!0).wrap("<div>").parent().append(D.add(E).add(C)),G=[],H=a(".label",D),I=".sl",J=a(document),K=a(window),L="click"+I,M=r[2],N=r[3],O=r[4],P="selected",Q="oninput"in C[0]?"input":"keyup";B.wrap('<div class="'+r[5]+'">'),f(),B.on({refresh:f,destroy:function(){E.add(D).remove(),B.removeData(b).removeData("value").off(I+" refresh destroy open close").unwrap().unwrap()},open:h,close:j})}};a.fn[b]=function(c,e){return this.each(function(){a(this).data(b)?""+c===c&&a(this).trigger(c):d(this,c||e)})}}(jQuery);
;

/* file-end: js/lib/jquery.selectric.min.js 
----------------------------------------------------------------------------------*/

;(function () {
  'use strict';

angular.module('LJ.Selectric', [])

  /**
   * Directive that helps to create custom select elements using selectric widget
   *
   * Notice:
   *   It's not possible to obtain ng-options change at the moment,
   *   that is why we need to provide items for `lj-selectric`
   *
   * See issue:
   *   https://github.com/angular/angular.js/issues/2903
   *
   * Usage:
   *   <select
   *     ng-options="label for value in items"
   *     lj-selectric="items"
   *     lj-selectric-max-height="200"
   *     >
   *   </select>
   *
   * Params can be set by attributes 'lj-selectric-param',
   * ex. lj-selectric-open-on-hover='true'
   */
  .directive('ljSelectric', ['$parse', '$timeout', function ($parse, $timeout) {
    return {
      require: '?ngModel',
      scope: true,
      link: function ($scope, element, attrs, ngModel) {
        var getOptions = $parse(attrs.ljSelectric),
            update,
            initParams;

        update = LJ.Function.debounce(function () {

          // timeout is needed to let angular update DOM
          $timeout(function () {
            element.selectric('refresh');
          });
        }, 50);

        // update selectric on options change
        if ( attrs.ljSelectric ) {
          $scope.$watchCollection(getOptions, update);
        }

        // update selectric on model value change
        if (ngModel) {
          $scope.$watch(function () {
            return ngModel.$modelValue;
          }, update);
        }

        // selectric initialization params (is copied from schemius.js)
        initParams = {
          customClass: {
            prefix: 'b-selectus',
            postfixes: 'Input Items Open Disabled TempShow HideSelect Wrapper Hover Responsive',
            camelCase: false
          }
        };

        // selectric params set by attributes
        for (var attr in attrs) {
          if (attrs.hasOwnProperty(attr) && /ljSelectric\w+/.test(attr) ) {
            var param = attr.replace('ljSelectric', '');

            // put first letter to lower case
            param = param.charAt(0).toLowerCase() + param.slice(1);

            initParams[param] = attrs[attr];
          }
        }

        element.selectric(initParams);

        $scope.$on('$destroy', function () {
          element.selectric('destroy');
        });
      }
    };
  }]);

}());
;

/* file-end: js/core/angular/ljSelectric.js 
----------------------------------------------------------------------------------*/

/* ---------------------------------------------------------------------------------
   file-start: js/jquery/jquery.lj.normalizedCalendar.js 
*/

/* ---------------------------------------------------------------------------------
   file-start: js/jquery/jquery.lj.inlineCalendar.js 
*/

/*!
 * LiveJournal Inline calendar
 *
 * Copyright 2011, dmitry.petrov@sup.com
 *
 * http://docs.jquery.com/UI
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *
 * @overview Inline calendar widget.
 *
 * Widget can be attached to any existant markup.
 *
 * Date wildcards used:
 *  - %D - day ( 01 - 31 )
 *  - %M - month ( 01 - 02 )
 *  - %Y - year ( yyyy, e.g. 2002 )
 *  - %s - unix timestamp in ms
 *
 * Options:
 *  - dayRef: Format of the url that will be attached to each day in the calendar.
 *  - allRefs: Wether to attach links to days in the calendar.
 *    and override currentDate on success.
 *    Could be: true/false/Object {from: Date, to: Date} (all fields are not required)
 *  - activeFrom: Days before this will be inactive in calendar.
 *  - actoveUntil: Days after this willbe inactive incalendar.
 *  - startMonth: Widget will not allow to switch calendar pane to the month before this.
 *  - endMonth: Widget will not allow to switch calendar pane to the month after this.
 *  - startAtSunday: Wether to count sunday as the start of the week.
 *  - events: Object, containing events to show in the calendar. They will be rendered as links. Structure of the object:
 *    { "yyyy": { "mm1" : [ d1, d2, d3, d4 ], "mm2": [ d5, d6, d7 ] } }
 *
 *  Events:
 *  - daySelected: Event is triggered when user selects a day in the calendar. The second parameter passed to the
 *  function is a Date object.
 *  - dateChange Event is triggered when user click on next or prev month/year button.
 *  - currentDateChange: Events is triggered when a new date is set in calendar as current.
 *
 *  Consistent options ( setting these options is guaranteed to work correctly ):
 *  - currentDate, date - Set/get current date.
 *  - activeFrom, date - Set/get earliest active date.
 *  - activeUntil, date - Set/get last active date.
 *  - title, title - set calendar title.
 *  - events, obj - override current events object
 *
 *  @TODO: move all service functions to the widget object and merge it with the view.
 *
 */

(function( $, window ) {

	var defaultOptions = {
		dayRef: '/%Y/%M/%D',
		monthRef: '', //the same, but for the months and year. Calendar will render link, if options are set
		yearRef: '',
		allRefs: false,
		currentDate: new Date(),
		//allow user to select dates in this range
		activeUntil: null,
		activeFrom: null,
		//allow user to switch months between these dates
		startMonth: new Date( 1900, 0, 1 ),
		endMonth: new Date( 2050, 0, 1 ),
		startAtSunday: !(LJ.ml('date.format.offset') !== '0') || false,
		dateFormat: "%Y-%M-%D",
		defaultTitle: "Calendar",
		longMonth: false,

		events: null, //object with events to show in the calendar
		displayedMonth: null, //month displayed on the calendar. If not specified at
								//startup currentDate is used instead.
		dateChange: null,

		selectors: {
			table: 'table',
			title: 'h5',
			tbody: 'tbody',

			month: '.cal-nav-month',
			year:  '.cal-nav-year',
			monthSelect: '.cal-nav-month-select',
			yearSelect:  '.cal-nav-year-select',

			prevMonth: '.cal-nav-month .cal-nav-prev',
			nextMonth: '.cal-nav-month .cal-nav-next',
			prevYear:  '.cal-nav-year .cal-nav-prev',
			nextYear:  '.cal-nav-year .cal-nav-next',

			monthLabel: '.cal-nav-month .cal-month',
			yearLabel: '.cal-nav-year .cal-year'
		},

		classNames: {
			container: '',
			inactive : 'other',
			future : 'other',
			current  : 'current',
			weekend: 'weekend',
			nextDisabled : 'cal-nav-next-dis',
			prevDisabled : 'cal-nav-prev-dis',
			cellHover : 'hover',
			longMonth: 'sidebar-cal-longmonth'
		},

		//now, all lang variables are collected from Site.ml_text and should not be modified
		mlPrefix: {
			monthNamesShort: ['monthNames', 'date.month.{name}.short'],
			monthNamesLong: ['monthNames', 'date.month.{name}.long'],
			dayNamesShort: ['dayNames', 'date.day.{name}.short']
		},

		ml: {
			monthNames: [ "january", "february", "march", "april", "may", "june", "july",
							 "august", "september", "october", "november", "december"],
			dayNames: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
			caption: "Calendar"
		}
	};

	function getDateNumber( d, dropDays ) {
		dropDays = dropDays || false;
		var day = d.getDate().toString();
		if( day.length === 1 ) { day = "0" + day; }
		if( dropDays ) {
			day = "";
		}

		var month = d.getMonth().toString();
		if( month.length === 1 ) { month = "0" + month; }

		return parseInt( d.getFullYear().toString() + month + day, 10);
	}

	function insideTimeRange( range, iDate ) {
		return getDateNumber( iDate, true ) >= getDateNumber( range[0], true ) &&
				getDateNumber( iDate, true ) <= getDateNumber( range[1], true );
	}

	function View(nodes, styles, o)
	{
		this.initialize = function (date) {
			this.tbody = this.catchTableStructure(date);
		};

		this.modelChanged = function (monthDate, events, switcherStates)
		{
			var monthml = o.longMonth? o.ml.monthNamesLong : o.ml.monthNamesShort;
			//we have a 30% speedup when we temporary remove tbody from dom
			this.tbody.detach();
			this.fillDates(monthDate, events);

			for (var sws in switcherStates) {
				nodes[sws][ (!switcherStates[sws]) ? 'addClass' : 'removeClass']( this.disabledStyle(sws) );
			}

			var monthText = o.monthRef
					? $( '<a>', {
						href: LJ.Util.Date.format( monthDate, o.monthRef ),
						text: monthml[ monthDate.getMonth() ] + (o.monthWithYear ?  (' ' + monthDate.getFullYear()) : '')
					} )
					: monthml[ monthDate.getMonth() ];

			var yearText = o.yearRef
					? $( '<a>', { href: LJ.Util.Date.format( monthDate, o.yearRef ), text: monthDate.getFullYear() } )
					: monthDate.getFullYear();

			nodes.monthLabel.empty().append( monthText );
			nodes.yearLabel.empty().append( yearText );

			this.tbody.appendTo( nodes.table );
		};

		this.catchTableStructure = function(date) {
			var tbody = nodes.tbody[0];
			nodes.daysCells = [];
			nodes.daysSpans = [];

			var row, rowsCount = tbody.rows.length, cell, cellsCount;

			var toAdd = 6 - rowsCount;

			var rowStr = '<tr>';
			for( var i = 0; i < 7; ++i ) { rowStr += '<td><span></span></td>'; }
			rowStr += '</tr>';

			while( toAdd-- > 0 ) {
				//add missing rows if server has rendered not enough markup
				$( rowStr ).hide().appendTo( nodes.tbody );
			}
			rowsCount = 6;
			nodes.lastRow = jQuery( tbody.rows[ tbody.rows.length - 1 ] );
			date = new Date(date);

			for( row = 0; row < rowsCount; ++row ) {
				for( cell = 0, cellsCount = tbody.rows[ row ].cells.length; cell < cellsCount; ++cell ) {
					// take into account span inside td
					var node = jQuery( tbody.rows[ row ].cells[ cell ] ),
						children = node.children(),
						day = children.text().trim();

					if(day) {
						date.setDate(day);
						node.data('isActive', true);
						node.data('day', date);
					}

					nodes.daysCells.push(node);
					nodes.daysSpans.push(children);
				}
			}

			return jQuery( tbody );
		};

		this.fillDates = function (monthDate, events)
		{
			function hasEvents( date ) {
				var year = date.getFullYear(),
					month = date.getMonth(),
					day = date.getDate();

				return( events && events[ year ] && events[ year ][ month ] && events[ year ][ month ][ day ] );
			}

			var d = new Date( monthDate );
			d.setDate( 1 );

			var offset;
			if( o.startAtSunday ) {
				offset = d.getDay();
			} else {
				offset = ( d.getDay() === 0 ? 6 : d.getDay()  - 1 );
			}
			d.setDate( 1 - offset );

			for( var i = 0, l = nodes.daysCells.length; i < l; ++i ) {
				var cell = nodes.daysCells[ i ],
					span = nodes.daysSpans[ i ];

				this.formDayString( d, cell, span, hasEvents( d ), this.isActiveDate( d, monthDate ) );

				d.setDate( d.getDate() + 1 );
			}

			d.setDate( d.getDate() - 1 ); //get the date from the last cell
			//we do not use show and hide methods, because show method sets display: block;
			if( d.getDate() < 7 ) {
				nodes.lastRow.css('display', '');
			} else {
				nodes.lastRow.css('display', 'none');
			}
		};

		this.isActiveDate = function( date, currentMonth ) {
			var isActive = true;

			isActive = ( currentMonth.getFullYear() === date.getFullYear() && currentMonth.getMonth() === date.getMonth() );

			if( isActive && ( o.activeFrom || o.activeUntil ) ) {
				isActive = ( o.activeFrom && getDateNumber( o.activeFrom ) <= getDateNumber( date ) ) ||
					( o.activeUntil && getDateNumber( o.activeUntil ) >= getDateNumber( date ) );
			}

			return isActive;
		};

		this.formDayString = function( d, cell, span, hasEvents, isActive )
		{
			d = new Date( d );
			var oldDay = cell.data( 'day' ),
				oldHasEvents = cell.data( 'hasEvents' ),
				oldIsActive = cell.data( 'isActive' );

			var isCurrentDay = ( getDateNumber( d ) === getDateNumber( o.currentDate ) );

			cell.data( 'day', d );
			cell.data( 'isActive', isActive );
			cell.data( 'hasEvents', hasEvents );

			cell[isCurrentDay ? 'addClass' : 'removeClass']( styles.current );
			cell.removeClass( styles.cellHover );

			if( !isActive ) {
				cell.addClass( styles.inactive );
				span.html(d.getDate());
			} else if( hasEvents || o.allRefs ) {

				var _tmpAllRefs = true;
				if (o.allRefs && typeof o.allRefs === 'object') {
					if (o.allRefs.from && d < o.allRefs.from) {
						_tmpAllRefs = false;
					}

					if (o.allRefs.to && d > o.allRefs.to) {
						_tmpAllRefs = false;
					}
				}

				if (_tmpAllRefs) {
					cell.removeClass( styles.inactive );
					span.html( $( '<a />', {
						html: d.getDate(),
						href: LJ.Util.Date.format( d, o.dayRef ),
            target: '_self'
					}));
				} else {
					cell.removeClass(styles.inactive);
					span.html(d.getDate());
				}

			} else {
				cell.removeClass( styles.inactive );
				span.html(d.getDate());
			}
		};

		this.disabledStyle = function (sws)
		{
			if(sws === 'prevMonth' || sws === 'prevYear') {
				return styles.prevDisabled;
			} else {
				return styles.nextDisabled;
			}
		};
	}

	var Calendar = {
		options: {}, //all options were move to the default options object

		_create: function() {
			this._preInit();
			this._initialize();
			this._postInit();
		},

		_preInit: function() {
			var def = $[ this.namespace ][ this.widgetName ].getDefaults();
			this.options = jQuery.extend( true, {}, def, this.options );
			this._prepareMLVars();
		},

		_prepareMLVars: function() {
			var self = this,
				expandVar = function(prefix, name) {
					return LJ.ml(prefix.supplant({name: name}));
				},
				prefixData;

			for (var prefix in this.options.mlPrefix) {
				if (this.options.mlPrefix.hasOwnProperty(prefix)) {
					prefixData = this.options.mlPrefix[prefix];
					this.options.ml[prefix] = this.options.ml[prefixData[0]].map(expandVar.bind(null, prefixData[1]));
				}
			}
		},

		// @TODO: need to change the structure of initialization code to remove this method
		_initialize: function() {
			if( !this.options.displayedMonth ) {
				this.options.displayedMonth = new Date( this.options.currentDate );
			}

			this._events = this.options.events;
			this._hideTimer = null;
			this._nodes = this._nodes || { container: this.element, root: this.element };
			this._invalidateTimer = null;

			if (this.element.hasClass(this.options.classNames.longMonth)) {
				this.options.longMonth = true;
			}

			this._bindNodes();

			this.options.startMonth.setDate( 1 );

			this._view = new (this._getView())( this._nodes, this.options.classNames, this.options );
			this._view.initialize(this.options.currentDate);

			if( this._nodes.table.hasClass( "monday" ) ) {
				this._setOption( "startAtSunday", false );
			}

			this._nodes.monthSelect.val(this.options.displayedMonth.getMonth());
			this._nodes.yearSelect.val(this.options.displayedMonth.getFullYear());

			this._bindEvents();
		},

		_postInit: function() {
		},

		_getView: function() {
			return View;
		},

		_bindNodes: function() {
			for( var i in this.options.selectors ) {
				if( !( i in this._nodes ) ) {
					this._nodes[ i ] = this._nodes.container.find( this.options.selectors[ i ] );
				}
			}

			var displayedMonth = LJ.Util.Date.parse(this._nodes.table.attr( "data-date"), this.options.dateFormat)
			if(displayedMonth) {
				this.options.displayedMonth = displayedMonth;
			}
		},

		destroy: function() {
			$.Widget.prototype.destroy.apply(this, arguments);
		},

		_bindEvents: function() {
			var self = this;

			var switcherStates = this._getSwitcherStates( this.options.currentDate ),
				switcherMouseDown = function( item ) {
					return function (ev) {
						ev.preventDefault();
						ev.stopPropagation();
						var switcherStates = self._getSwitcherStates( self.options.currentDate );

						if( switcherStates[item] ) {
							self["_" + item]();
						}
					};
				};

			for (var sws in switcherStates) {
				this._nodes[sws].click( switcherMouseDown(sws) );
			}

			this._nodes.monthSelect.change(function(ev) {
				var d = new Date(self.options.currentDate);
				d.setMonth(this.value);
				self._setOption('currentDate', d);
			});

			this._nodes.yearSelect.change(function(ev) {
				var d = new Date(self.options.currentDate);
				d.setFullYear(this.value);
				self._setOption('currentDate', d);
			});

			this._nodes.tbody
				.delegate( 'td', 'click', function( ev ) {
					self._cellSelectedEvent( $( this ), ev );
				} );
		},

		_switchMonth: function ( go ) {
			var event = jQuery.Event( "dateChange" );
			event.moveForward = go > 0;
			event.switchType = Math.abs( go ) === 12 ? "year" : ( Math.abs( go ) === 1 ? "month" : null );

			event.date = new Date(this.options.displayedMonth.getFullYear(), this.options.displayedMonth.getMonth() + go, 1);

			this._nodes.root.trigger( event );
			this._setOption( 'displayedMonth', event.date );
		},

		_prevMonth: function () { this._switchMonth( -1 ); },
		_nextMonth: function () { this._switchMonth( 1 ); },

		_prevYear : function () { this._switchMonth( -12 ); },
		_nextYear : function () { this._switchMonth( 12 ); },

		_cellSelectedEvent: function( cell, ev ) {
			//if cell is inactive or user controls it's behavior we do not pass event to the link
			if( !cell.data('isActive' ) || this._cellSelected( cell.data( 'day' ) ) ) {
				ev.stopPropagation();
				ev.preventDefault();
			}
		},

		/**
		 * @return {Boolean} returns true if user prevents default behaviour
		 */
		_cellSelected: function( date ) {
			var event = jQuery.Event( "daySelected" );
			this._nodes.root.trigger( event, [ date, LJ.Util.Date.format(date, this.options.dateFormat) ] );

			if( !event.isDefaultPrevented() ) {
				this._setOption( 'currentDate', date );
			}

			return !event.isDefaultPrevented();
		},

		_fitDate: function( date ) {
			date = new Date( date );
			var enabledMonthsRange = [ this.options.startMonth, this.options.endMonth ];

			if( !insideTimeRange( enabledMonthsRange, date ) ) {
				if( getDateNumber( date, true ) < getDateNumber( enabledMonthsRange[ 0 ], true ) ) {
					date = new Date( enabledMonthsRange[ 0 ] );
				} else {
					date = new Date( enabledMonthsRange[ 1 ] );
				}
			}

			return date;
		},

		_getSwitcherStates: function () {
			var monthDate = this.options.displayedMonth,
				yearStart = new Date( monthDate.getFullYear(), 0, 1 ),
				yearEnd = new Date( monthDate.getFullYear(), 11, 1 );

			return {
				prevMonth: this._isActivePrev( monthDate ) !== false,
				prevYear: this._isActivePrev( yearStart ) !== false,
				nextMonth: this._isActiveNext( monthDate ) !== false,
				nextYear: this._isActiveNext( yearEnd ) !== false
			};
		},

		_isActiveNext: function( date ) { return this._isActiveDate( date, 1 ); },
		_isActivePrev: function( date ) { return this._isActiveDate( date, -1 ); },
		_isActiveDate: function( date, dir ) {
			var d = new Date( date );
			d.setMonth( d.getMonth() + dir );
			d.setDate( 1 );

			return insideTimeRange( [ this.options.startMonth, this.options.endMonth ], d );
		},

		_invalidateDisplay: function() {
			var self = this;
			clearTimeout( this._invalidateTimer );

			setTimeout( function() {
				self._view.modelChanged( self.options.displayedMonth, self._events, self._getSwitcherStates() );
			}, 50 );
		},

		_setOption: function( name, value ) {
			switch( name ) {
				case 'currentDate':
					this.options.currentDate = this._fitDate( value );

					var event = jQuery.Event("currentDateChange"),
						date = new Date(this.options.currentDate);
					this._nodes.root.trigger( event, [ date, LJ.Util.Date.format(date, this.options.dateFormat) ] );

					this._setOption( 'displayedMonth', value );
					this._invalidateDisplay();
					break;
				case 'activeFrom':
					this.options.activeFrom = new Date( value );
					this._invalidateDisplay();
					break;
				case 'activeUntil':
					this.options.activeUntil = new Date( value );
					this._invalidateDisplay();
					break;
				case 'title':
					this._title = value;
					this._nodes.title.html( value );
					break;
				case 'events':
					this._events = value;
					this._invalidateDisplay();
					break;
				case 'displayedMonth':
					var newDate = this._fitDate( new Date( value ) ),
						isCurrentMonth = getDateNumber(newDate, true) === getDateNumber(this.options.displayedMonth, true);

					if( !isCurrentMonth ) {
						this.options.displayedMonth = this._fitDate( new Date( value ) );
						this._nodes.monthSelect.val(this.options.displayedMonth.getMonth());
						this._nodes.yearSelect.val(this.options.displayedMonth.getFullYear());
						this._invalidateDisplay();
					}

					break;
				case 'startMonth':
					this.options.startMonth = new Date( value );
					this._invalidateDisplay();
					break;
				case 'endMonth':
					this.options.endMonth = new Date( value );
					this._invalidateDisplay();
					break;
				case 'startAtSunday':
					this.options.startAtSunday = !!value;
					break;
				case 'monthWithYear':
					this.options.monthWithYear = Boolean(value);
					break;
			}
		},

		getElement: function( name ) {
			if( name in this._nodes ) {
				return this._nodes[ name ];
			} else {
				return null;
			}
		}

	};

	$.widget('lj.inlineCalendar', Calendar );

	jQuery.extend( $.lj.inlineCalendar, {

		getDefaults: function() {
			return defaultOptions;
		},

		setDefaults: function ( opts ) {
			if( opts ) {
				jQuery.extend( true, defaultOptions, opts );
			}
		}
	} );

} ( jQuery, window ) );

;

/* file-end: js/jquery/jquery.lj.inlineCalendar.js 
----------------------------------------------------------------------------------*/

/*
 * LiveJournal Calendar
 * normalized for usage with DOM directly as $(element).normalizedCalendar( options )
 *
 * @author Valeriy Vasin (valeriy.vasin@sup.com)
 * @requires jquery.ui.core.js, jquery.ui.widget.js, jquery.lj.inlineCalendar.js
 *
 * Date wildcards used:
 *  - %D - day ( 01 - 31 )
 *  - %M - month ( 01 - 02 )
 *  - %Y - year ( yyyy, e.g. 2002 )
 *  - %s - unix timestamp in ms
 *
 * Options:
 *  - dayRef: Format of the url that will be attached to each day in the calendar.
 *  - allRefs: Wether to attach links to days in the calendar.
 *  - currentDate:  initialy selected date.
 *  - activeFrom: Days before this will be inactive in calendar.
 *  - activeUntil: Days after this willbe inactive incalendar.
 *  - startMonth: Widget will not allow to switch calendar pane to the month before this.
 *    Actually it's a Date object, from which widget brings correct month and year.
 *  - endMonth: Widget will not allow to switch calendar pane to the month after this.
 *    Actually it's a Date object, from which widget brings correct month and year.
 *  - startAtSunday: Wether to count sunday as the start of the week.
 *  - dateFormat: Format of date string that will be inserted in the input after user selected value.
 *  - events: Object, containing events to show in the calendar. They will be rendered as links. Structure of the object:
 *    { "yyyy": { "mm1" : [ d1, d2, d3, d4 ], "mm2": [ d5, d6, d7 ] } }
 *
 *  Events:
 *  - daySelected: Event is triggered when user selects a day in the calendar. The second parameter passed to the
 *  function is a Date object.
 *  - dateChange: switch month or year
 *
 *  Consistent options ( setting these options is guaranteed to work correctly ):
 *  - currentDate, date - Set/get current date. Input is also updated on set.
 *  - activeFrom, date - Set/get earliest active date.
 *  - activeUntil, date - Set/get last active date.
 *  - title, title - set calendar title.
 *  - events, obj - override current events object
 */

(function( $, window ) {
	'use strict';

	$.widget('lj.normalizedCalendar', $.lj.inlineCalendar, {
		options: {}, //all options were move to the default options object

		_initialize: function() {
			this._nodes = {
				container: this._buildDOM(),
				root: this.element
			};

			this.element.html( this._nodes.container );

			$.lj.inlineCalendar.prototype._initialize.apply( this );
			this._invalidateDisplay();
		},

		_bindNodes: function() {
			var self = this;

			$.lj.inlineCalendar.prototype._bindNodes.apply( this );

			if( this.options.showCellHovers ) {
				this._nodes.table.addClass( this.options.classNames.showCellHovers );
			}
		},

		_buildDOM: function () {
			var // array, contains short days names in format: [ { day: 'sun' }, ... ]
				days,
				// array, contains years from endYear till startYear. Format: [ {year: 2012}, ... ]
				years = [],
				// array, contained months names. Format: [ {month: el}, ... ]
				months = [],
				weekendIdx1 = 0,
				weekendIdx2 = 6,
				// generate years
				startYear = this.options.startMonth.getFullYear(),
				endYear = this.options.endMonth.getFullYear(),
				// template options
				tmplOptions = null,
				makeArray = function(size, val) {
					var res = [];
					while(size--) { res.push(val); }

					return res;
				};
			// populate days
			days = this.options.ml.dayNamesShort.map(function (el) {
				return { day: el };
			});
			// populate months
			months = this.options.ml.monthNamesLong.map(function (el) {
				return { month: el };
			});
			// populate years
			while (endYear >= startYear) {
				years.push({ year: endYear--});
			}
			// if week starts from Monday - move sunday to the end
			if (!this.options.startAtSunday) {
				days[7] = days[0];
				days.shift();
				weekendIdx1 = 5;
			}

			tmplOptions = {
				caption: this.options.ml.caption,
				days: days,
				months: months,
				years: years,
				// rows * days in week
				cells: makeArray(6 * 7, {}),
				weekend1: weekendIdx1,
				weekend2: weekendIdx2
			};

			return LJ.UI.template(this.options.templates['calendar'], tmplOptions);
		},

		_cellSelectedEvent: function( cell, ev ) {
			$.lj.inlineCalendar.prototype._cellSelectedEvent.call( this, cell, ev );

			// if all of table cells are active controls (so on click on the cell we change date or something) - hide calendar
			if (this.options.showCellHovers && !!cell.data('isActive') ) {
				this._nodes.container.bubble( 'hide' );
			}

			// if target of click is link - redirect to its url
			if (ev.target.tagName.toLowerCase() == 'a') {
				window.location.href = ev.target.href;
			}
		},

		_invalidateDisplay: function() {
			this._view.modelChanged( this.options.displayedMonth, this._events, this._getSwitcherStates() );
		},

		destroy: function() {
			$.lj.inlineCalendar.prototype.destroy.apply( this );
			this.element.empty();
		}
	});

	$.lj.normalizedCalendar.defaults = {
		showCellHovers: false,

		events: null, //object with events to show in the calendar
		displayedMonth: null, //month displayed on the calendar. If not specified atstartup currentDate is used instead.

		selectors: {
			tmpl: '.appwidget-calendar .calendar'
		},

		classNames: {
			showCellHovers: 'all-days',
			popup: 'b-bubble-calendar'
		},

		templates: {
			calendar: 'templates-Widgets-normalized_calendar'
		}
	};

	jQuery.extend( $.lj.normalizedCalendar, {
		getDefaults: function() {
			return jQuery.extend( true, {}, $.lj.inlineCalendar.getDefaults(), $.lj.normalizedCalendar.defaults );
		},

		setDefaults: function ( opts ) {
			if( opts !== undefined ) {
				jQuery.extend( defaultOptions, opts );
			}
		}
	} );

} ( jQuery, window ) );
;

/* file-end: js/jquery/jquery.lj.normalizedCalendar.js 
----------------------------------------------------------------------------------*/

Site.page.template['Lenta/v3/lenta-calendar.tmpl'] = '<div class=\"b-lenta-calendar\">\n    <h3\n        class=\"b-lenta-sidebar-title\"\n        lj-ml=\"friendsfeed.linkbar.title.calendar\"\n        ></h3>\n    <div class=\"b-lenta-calendar-inner\">\n        <div class=\"b-lenta-calendar-content\"></div>\n    </div>\n</div>\n';
LJ.UI.registerTemplate('templates-Widgets-friends_feed_calendar', "{{html print_svg(\'flaticons\')}} <div class=\"popup-inner calendar\"> <p class=\"sbar-cal-nav\"> <span class=\"sbar-cal-nav-month\"> <i title=\"Previous Month\" class=\"sbar-cal-nav-prev\"> {{if 0}}<i class=\"sbar-cal-nav-arr\"></i>{{/if}} <span class=\"sbar-cal-nav-arr\"> <svg class=\"svgicon\"> <use xlink:href=\"#fi-arrow-left\"/> </svg> </span> </i> <span class=\"sbar-cal-month\"> <a class=\"month\" href=\"javasctipt:void(0);\">Oct</a> </span> {{if 0}}<i title=\"Next Month\" class=\"sbar-cal-nav-next disabled\"><i class=\"sbar-cal-nav-arr\"></i></i>{{/if}} <i title=\"Next Month\" class=\"sbar-cal-nav-next disabled\"> <span class=\"sbar-cal-nav-arr\"> <svg class=\"svgicon\"> <use xlink:href=\"#fi-arrow-right\"/> </svg> </span> </i> </span> <span class=\"sbar-cal-nav-year\"> {{if 0}}<i title=\"Previous Year\" class=\"sbar-cal-nav-prev\"><i class=\"sbar-cal-nav-arr\"></i></i>{{/if}} <i title=\"Previous Year\" class=\"sbar-cal-nav-prev\"> <span class=\"sbar-cal-nav-arr\"> <svg class=\"svgicon\"> <use xlink:href=\"#fi-arrow-left\"/> </svg> </span> </i> <span class=\"sbar-cal-year\"> <a class=\"year\" href=\"javasctipt:void(0);\">2012</a> </span> {{if 0}}<i title=\"Next Year\" class=\"sbar-cal-nav-next disabled\"><i class=\"sbar-cal-nav-arr\"></i></i>{{/if}} <i title=\"Next Year\" class=\"sbar-cal-nav-next disabled\"> <span class=\"sbar-cal-nav-arr\"> <svg class=\"svgicon\"> <use xlink:href=\"#fi-arrow-right\"/> </svg> </span> </i> </span> </p> <table cellspacing=\"1\" data-date=\"\"> <thead> <tr> {{each days}} <th class=\"child-${$index + 1}\">${day}</th> {{/each}} </tr> </thead> <tbody> {{each cells}} {{if $index % 7 === 0}}<tr>{{/if}} <td><span></span></td> {{if $index % 7 === 6}}</tr>{{/if}} {{/each}} </tbody> </table> </div>", 'JQuery.stat');
;(function ($) {
  'use strict';

  angular.module('Feed.Widget', [
      'LJ.Api',
      'LJ.Checked',
      'LJ.Widget.Top',
      'LJ.Widget.Discovery',
      'LJ.Widget.Updates',
      'LJ.Widget.Links',
      'LJ.Widget.Social',
      'ngAnimate',
      'LJ.Selectric'
    ])
    // HTML5 mode is on to keep anchor links working
    // by LJSV-2932
    .run(function () {
      // fix html5mode
      $('a:not([target])').attr('target', '_self');
    })
    .config(['$locationProvider', function($locationProvider) {
      $locationProvider.html5Mode(true);

      // Fix IE redirect to the main page: angular redirects us on base url /
      if ( !LJ.Support.history && angular.element('base').length === 0 ) {
        angular.element('<base />')
          .attr('href', location.pathname)
          .appendTo('head');
      }

    }])
    .animation('.b-feedwidgets-item', function() {
      return {
        move: function(element, done) {
          // fires after nodes position has been changed
          var nextElement = element.next();

          var elementHeight = element.outerHeight(true);
          var nextElementHeight = nextElement.outerHeight(true);

          var elementTop = element.position().top;
          var nextElementTop = nextElement.position().top;

          var elementReplacer = $('<div />', {
            height: elementHeight
          }).insertAfter(nextElement);

          var nextElementReplacer = $('<div />', {
            height: nextElementHeight
          }).insertAfter(element);

          // z-index is needed to set top/bottom widget during animation
          element.css({
            position: 'absolute',
            top: elementTop + nextElementHeight,
            zIndex: 500
          });

          nextElement.css({
            position: 'absolute',
            top: elementTop,
            zIndex: 600
          });

          $.when(
            element.animate({ top: elementTop }, 200, 'linear'),
            nextElement.animate({ top: nextElementTop }, 200, 'linear')
          ).then(function () {
              elementReplacer.remove();
              nextElementReplacer.remove();
              element.removeAttr('style');
              nextElement.removeAttr('style');
              done();
            });
        }
      };
    })
    .controller('FeedWidgetsCtrl', ['$scope', 'Api', 'checkedGroup',
      function ( $scope,   Api,   checkedGroup ) {

        var widgets = checkedGroup('widgets'),
          that = this,
          DIRECTION = {
            UP: -1,
            DOWN: 1
          };

        this.isRemote = Boolean( LJ.get('remote') );
        this.isOwn = this.isRemote && LJ.get('journal.username') === LJ.get('remote.username');

        // get state of discovery widget (is needed for non-logged users)
        this.isDiscoveryEnabled = LJ.get('friendsfeed_widgets.discoveryToday.enabled');

        // get calendar widget state for non-logged/non-paid users
        this.isCalendarEnabled = LJ.get('friendsfeed_widgets.calendar.enabled');

        // items for select
        this.widgetItems = [
          { widget: 'none',           value: LJ.ml('friendsfeed.widgets.select.title') },
          { widget: 'twitter',        value: LJ.ml('widget.social.twitter.title') },
          { widget: 'facebook',       value: LJ.ml('widget.social.facebook.title') },
          { widget: 'instagram',      value: LJ.ml('widget.social.instagram.title') },
          { widget: 'calendar',       value: LJ.ml('friendsfeed.linkbar.title.calendar') },
          { widget: 'discoveryToday', value: LJ.ml('discovery.todaylj.head') },
          { widget: 'ljToday',        value: LJ.ml('main.todaylj.head') },
          { widget: 'links',          value: LJ.ml('widget.links.title') },
          { widget: 'events',         value: LJ.ml('main.updates.widget.title.events') },
          { widget: 'comments',       value: LJ.ml('main.updates.widget.title.comments') },
          { widget: 'guests',         value: LJ.ml('main.updates.widget.title.guests') },
          { widget: 'entries',        value: LJ.ml('main.updates.widget.title.entries') }
        ].filter(function (item) {

            // filter enabled items only
            if ( item.widget === 'none' ) {
              return true;
            }

            return LJ.get('friendsfeed_widgets.' + item.widget + '.enabled');
          });

        this.selectedWidget = 'none';

        var _positions = LJ.get('friendsfeed_widgets_order') ?
          LJ.get('friendsfeed_widgets_order').split(',').map(Number) :
          [];

        this.list = function () {
          var list = that.widgetItems.slice(1).sort(function (a, b) {
            return _widgetPosition(a.widget) - _widgetPosition(b.widget);
          });

          return list.filter( LJ.Function.not(that.isWidgetInList, that) );
        };

        function _widgetPosition(widget) {
          var position = _positions.indexOf( _widgetId(widget) );

          // if widget has not been positioned yet - it should be added to the top;
          // -1 is less then minimal widgets position that is equal 0
          return position;
        }

        function _widgetId(widget) {
          return LJ.get('friendsfeed_widgets.' + widget + '.id');
        }

        function positions(value) {
          if ( !value ) {
            return _positions;
          }

          _positions = value;
        }

        // positions according to the list
        function listPositions() {
          return that.list().map( LJ.Function.get('widget') ).map( _widgetId );
        }

        function syncPositions() {
          Api.call('friendsfeed.change_widgets_order', {
            friendsfeed_widgets_order: positions().join(',')
          });
        }

        /**
         * When user selects some widget to add, - add
         * it to the page and reset select state
         */
        $scope.$watch(function () {
          return that.selectedWidget;
        }, function (widget) {
          if (widget && widget !== 'none') {
            that.add(widget);
            that.selectedWidget = 'none';
          }
        });

        /**
         * Show widget in list of available widgets or not
         * @param  {String}  name  Widget name
         * @return {Boolean}       Result of the check
         */
        this.isWidgetInList = function (item) {
          return !widgets.isChecked(item.widget);
        };

        /**
         * Show widgets select box or not depending on available widgets list
         * @return {Boolean} Result
         */
        this.hasDisabled = function () {
          return !widgets.isAllChecked();
        };

        /**
         * Set initial states
         */
        widgets.reset( getInitialStates() );

        function getInitialStates() {
          var states = {};

          // add states for enabled widgets only
          that.widgetItems.forEach(function (item) {
            if ( item.widget === 'none' ) {
              return;
            }

            states[ item.widget ] = LJ.get(
                'friendsfeed_widgets.' + item.widget + '.checked'
            );
          });

          return states;
        }

        this.models = widgets.models();

        /**
         * Remove widget from the page
         * @param  {String} widget Widget name
         */
        this.remove = function (widget) {
          widgets.toggle(widget, false);

          Api.call('friendsfeed.delete_widget', {
            widget: widget
          });

          positions( listPositions() );
        };

        /**
         * Add widget on the page
         * @param {String} widget Widget name
         */
        this.add = function (widget) {
          widgets.toggle(widget, true);

          Api.call('friendsfeed.add_widget', {
            widget: widget
          });

          positions( listPositions() );
        };

        this.down = function (widget) {
          moveWidget(widget, DIRECTION.DOWN);
        };

        this.up = function (widget) {
          moveWidget(widget, DIRECTION.UP);
        };

        /**
         * Swap widgets by diff positions
         * @param  {String} widget Widget name
         * @param  {Number} diff   Move diff: +1 - DOWN, -1 - UP
         */
        function moveWidget(widget, diff) {
          var pos = positions(),
            id  = _widgetId(widget),
            index = pos.indexOf(id),
            nextIndex = index + diff,
            nextId = pos[nextIndex];

          // check if move is possible
          if ( typeof nextId === 'number' ) {
            pos[nextIndex] = id;
            pos[index]     = nextId;
          } else {
            console.log('not possible');
          }

          // update positions
          positions( pos );
        }

        // update positions, because sometimes server sends us more enabled widgets then positions
        positions( listPositions() );

        // sync positions when changed
        var _watchInitialized;
        $scope.$watchCollection(function () {
          return _positions;
        }, function () {

          // skip initial watch with same data
          if ( !_watchInitialized ) {
            _watchInitialized = true;
            return;
          }

          syncPositions();
        });
      }])
    .directive('ljWidgetFeedCalendar', [function () {
      return {
        scope: true,
        restrict: 'A',
        templateUrl: 'lenta-calendar.tmpl',
        link: function (scope, element) {
          element
            .find('.b-lenta-calendar-content')
            .normalizedCalendar({
              selectors: {
                month: '.sbar-cal-nav-month',
                year:  '.sbar-cal-nav-year',

                prevMonth: '.sbar-cal-nav-month .sbar-cal-nav-prev',
                nextMonth: '.sbar-cal-nav-month .sbar-cal-nav-next',
                prevYear:  '.sbar-cal-nav-year .sbar-cal-nav-prev',
                nextYear:  '.sbar-cal-nav-year .sbar-cal-nav-next',

                monthLabel: '.sbar-cal-nav-month .sbar-cal-month',
                yearLabel: '.sbar-cal-nav-year .sbar-cal-year'
              },
              classNames: {
                current  : 'today',
                nextDisabled : 'disabled',
                prevDisabled : 'disabled'
              },
              templates: {
                calendar: 'templates-Widgets-friends_feed_calendar'
              },
              allRefs: { to: new Date() },
              dayRef: LJ.get('calendarPattern'),
              monthRef: false,
              yearRef: false,
              endMonth: new Date(),
              startAtSunday: true
            });
        }
      };
    }]);

  $(function () {
    /**
     * Scrolling sidebar functionality
     * @todo Refactor it
     */
    (function () {
      var className = 'b-lenta-widget-open',
        tabHeaders = $('.b-lenta-widget-header'),
        tabWrappers = $('.b-lenta-widget'),
        preventClose = false;

      tabHeaders.add(tabHeaders.prev()).on('click', function () {
        var tabWrapper = $(this).closest('.b-lenta-widget');

        tabWrappers.not(tabWrapper).removeClass(className);
        tabWrapper.toggleClass(className);
        preventClose = true;
      });

      $('.b-lenta-widget').on('click', function () {
        preventClose = true;
      });

      $(document).on('click', function () {
        if (preventClose) {
          preventClose = false;
        } else {
          $('.b-lenta-widget').removeClass(className);
        }
      });
    }());
  });

  /**
   * Friend feed v2 calendar widget initialization
   */

  $(function () {

    if ( LJ.Flags.isDisabled('friendsfeed_v3') ) {

      $('.b-lenta-calendar-content').normalizedCalendar({
        selectors: {
          month: '.sbar-cal-nav-month',
          year:  '.sbar-cal-nav-year',

          prevMonth: '.sbar-cal-nav-month .sbar-cal-nav-prev',
          nextMonth: '.sbar-cal-nav-month .sbar-cal-nav-next',
          prevYear:  '.sbar-cal-nav-year .sbar-cal-nav-prev',
          nextYear:  '.sbar-cal-nav-year .sbar-cal-nav-next',

          monthLabel: '.sbar-cal-nav-month .sbar-cal-month',
          yearLabel: '.sbar-cal-nav-year .sbar-cal-year'
        },
        classNames: {
          current  : 'today',
          nextDisabled : 'disabled',
          prevDisabled : 'disabled'
        },
        templates: {
          calendar: 'templates-Widgets-friends_feed_calendar'
        },
        allRefs: { to: new Date() },
        dayRef: LJ.get('calendarPattern'),
        monthRef: false,
        yearRef: false,
        endMonth: new Date(),
        startAtSunday: true
      });
    }

  });
}(jQuery));
;

/* file-end: js/feed/feedWidget.js 
----------------------------------------------------------------------------------*/

/* ---------------------------------------------------------------------------------
   file-start: js/feed/rss.js 
*/




Site.page.template['angular/feed/rss.ng.tmpl'] = '<!-- popup content -->\n<div\n  class=\"b-translation-content\"\n  ng-controller=\"RssCtrl as rss\"\n  ng-class=\"\'b-translation-\' + rss.state + \'-state\'\"\n  ng-class=\"{\'b-translation-error-state\': feed.hasError }\">\n  <header class=\"b-translation-heads\">\n    <span class=\"b-translation-title b-translation-title-add\" lj-ml=\"friendsfeed.settings.translation.title_add\"></span>\n    <span class=\"b-translation-title b-translation-title-create\" lj-ml=\"friendsfeed.settings.translation.title_create\"></span>\n    <span class=\"b-translation-title b-translation-title-add-success\" lj-ml=\"friendsfeed.settings.translation.title_success_add\"></span>\n    <span class=\"b-translation-title b-translation-title-create-success\" lj-ml=\"friendsfeed.settings.translation.title_success_create\"></span>\n  </header>\n  <div class=\"b-translation-body\">\n    <div class=\"b-translation-items\">\n      <input\n        class=\"b-input b-input-simple b-input-max b-translation-input b-translation-input-add\"\n        ng-model=\"url\"\n        placeholder=\"http://...\"\n        type=\"text\"/>\n      <input\n        class=\"b-input b-input-simple b-input-max b-translation-input b-translation-input-create\"\n        ng-model=\"name\"\n        placeholder=\"Name\"\n        type=\"text\"/>\n      <span class=\"b-translation-success-item\">\n        <img ng-src=\"userpic\" />\n        <span ng-bind=\"user\"></span>\n      </span>\n    </div>\n    <div class=\"b-translation-errors\">\n      <span\n        class=\"b-translation-error b-translation-error-create\"\n        lj-ml=\"friendsfeed.settings.translation.error_symbols\">\n      </span>\n      <span\n        class=\"b-translation-error b-translation-error-add\"\n        lj-ml=\"friendsfeed.settings.translation.error_paid\">\n      </span>\n    </div>\n    <div class=\"b-translation-submit\">\n      <button \n        class=\"b-flatbutton b-flatbutton-simple b-translation-submit-back\"\n        ng-click=\"rss.state = \'add\'\"\n        lj-ml=\"friendsfeed.settings.translation.button_back\">\n      </button>\n      <button\n        class=\"b-flatbutton b-flatbutton-simple b-translation-submit-add\"\n        ng-disabled=\"!url\"\n        ng-click=\"rss.add()\"\n        lj-ml=\"friendsfeed.settings.translation.button_add\">\n      </button>\n      <button\n        class=\"b-flatbutton b-flatbutton-simple b-translation-submit-create\"\n        ng-disabled=\"!name\"\n        ng-click=\"rss.create()\"\n        lj-ml=\"friendsfeed.settings.translation.button_create\">\n      </button>\n      <button\n        class=\"b-flatbutton b-flatbutton-simple b-translation-submit-next\"\n        href=\"#\"\n        ng-click=\"rss.state = \'add\'\"\n        lj-ml=\"friendsfeed.settings.translation.button_success\">\n      </button>\n    </div>\n  </div>\n</div>\n<!-- popup content -->';
;(function ($) {
  'use strict';

  angular.module('Feed.Rss', ['LJ.Api'])
  .controller('RssCtrl', ['$scope', 'Api',
                 function( $scope ,  Api ) {

    var that = this;

    this.validate = function () {
      return that.name.length >= 15;
    };

    this.create = function () {
      if ( this.validate() ) {
        Api
          .call('user.create_syndicated', { url: that.url, name: that.name })
          .then(function (response) {
            that.userpic = response.userpic;
            that.user = response.user;
            that.state = 'success-create';
          });
      } else {
        this.hasError = true
      }
    };

    this.add = function () {
      Api
        .call('user.get_syndicated', { url: $scope.url })
        .then(function (response) {
          if ( response.user ) {
            that.userpic = response.userpic;
            that.user = response.user;
            that.hasError = false;
            that.state = 'success-add';
          } else {
            if ( LJ.get('remote').is_paid ) {
              that.state = 'create';
            } else {
              that.hasError = true;
            }
          }
        });
    };

    $scope.$watch(function () {
      return that.state;
    }, function (state) {
      if ( state === 'add' ) {
        that.url = null;
        that.name = null;
        that.user = null;
        that.userpic = null;
      }
    });

    $scope.$watch(function () {
      return that.name + that.url;
    }, function () {
      that.hasError = false;
    });

    $scope.$on('bubble:open:rss', function () {
      that.state = 'add';
    });

    that.state = 'add';
  }])

}(jQuery));
;

/* file-end: js/feed/rss.js 
----------------------------------------------------------------------------------*/

Site.page.template['angular/feed/item.ng.tmpl'] = '<article\n        ng-repeat=\"item in items\"\n        lj-feed-item=\"{ ditemid: item.itemid, journal: item.journal_username }\"\n        lj-screenable=\"social:widgets:parse\"\n        class=\"j-e b-lenta-item\"\n        ng-class=\"{\'j-e-addmem-open\': toollbarActive }\"\n        ng-cloak>\n  <!-- header -->\n  <header class=\"b-lenta-item-header\">\n      <div\n          class=\"b-lenta-item-userpic\"\n          ng-show=\"item.userpic_present\"\n          >\n          <div class=\"b-userpic-wrap\">\n              <div class=\"b-userpic-inner\">\n                  <img\n                      ng-attr-width=\"item.userpic_width\"\n                      ng-attr-height=\"item.userpic_height\"\n                      class=\"ContextualPopup\"\n                      alt=\"\"\n                      ng-src=\"{{item.userpic_url}}\"/>\n              </div>\n          </div>\n      </div>\n\n      <div class=\"b-lenta-item-meta\">\n\n          <span\n              class=\"b-lenta-item-journal\"\n              lj-html=\"item.entry_title\"\n              ></span>\n          <span\n              class=\"b-lenta-item-date\"\n              ng-show=\"{{!item.is_reposted}}\"\n              ng-bind=\"item.timestamp\"\n              ></span>\n\n          <ul class=\"b-item-type\">\n\n              <li\n                  ng-show=\"item.show_security\"\n                  class=\"\n                      b-item-type-unit\n                      b-item-type-post\n                      \"\n                  ng-class=\"getSecurityStyle(item)\"\n                  ng-attr-title=\"item.security_description\"\n                  >\n                  <span class=\"b-item-type-security-icon\">\n                      <svg\n                          class=\"svgicon\"\n                          ng-switch=\"item.security\">\n                          <use\n                              xlink:href=\"#fi-security-friends\"\n                              ng-switch-when=\"friends\">\n                          </use>\n                          <use\n                              xlink:href=\"#fi-security-private\"\n                              ng-switch-when=\"private\">\n                          </use>\n                          <use\n                              xlink:href=\"#fi-security-friendgroups\"\n                              ng-switch-when=\"friendgroups\">\n                          </use>\n                      </svg>\n                  </span>\n              </li>\n\n              <li\n                  ng-show=\"item.is_reposted\"\n                  class=\"\n                      b-item-type-unit\n                      b-item-type-repost\n                      \"\n                  >\n                  <span class=\"b-item-type-repost-icon\" lj-svg-icon=\"fi-repost\"></span>\n                  <span\n                      class=\"b-item-type-label\"\n                      lj-ml=\"friendsfeed.status.repost\"\n                      ></span>\n              </li>\n\n              <li\n                  ng-show=\"item.is_ad\"\n                  class=\"\n                      b-itemtype-unit\n                      b-item-type-ad\n                      i-friendsfeed-ad-close\n                      \"\n                  ng-attr-data-adid=\"item.adid\"\n                  >\n                  <span\n                      class=\"b-item-type-ad-text\"\n                      lj-ml=\"friendsfeed.note.ad\"\n                      ></span>\n             </li>\n\n          </ul>\n\n      </div>\n\n      <h3 class=\"b-lenta-item-title\">\n          <a\n              ng-href=\"{{item.permalink_url}}\"\n              ng-bind=\"item.subject\"\n              ></a>\n      </h3>\n\n  </header>\n\n  <!-- content -->\n  <div\n      lj-discovery-tags\n      class=\"b-lenta-item-content\"\n      lj-html=\"item.body\"\n      ></div>\n\n  <!-- meta -->\n  <footer class=\"b-lenta-meta\">\n\n      <ul\n          class=\"b-lenta-item-metainfo\"\n          ng-show=\"{{item.mood_present || item.music_present || item.location_present || item.tags_present}}\"\n          >\n\n          <li\n              ng-show=\"item.mood_present\"\n              class=\"\n                  b-lenta-metaitem\n                  b-lenta-item-mood\n                  \"\n              >\n              <span\n                  class=\"b-lenta-meta-label\"\n                  ng-class=\"{\'b-lenta-metatoggle-target\': toggleMeta(item) }\"\n                  lj-ml=\"friendsfeed.metaitem.mood\"\n                  >\n              </span>\n              <span\n                  class=\"b-lenta-meta-content\"\n                  ng-bind=\"item.mood\"\n                  ></span>\n          </li>\n\n          <li\n              ng-show=\"item.music_present\"\n              class=\"\n                  b-lenta-metaitem\n                  b-lenta-item-music\n                  \"\n              >\n              <span\n                  class=\"b-lenta-meta-label\"\n                  ng-class=\"{\'b-lenta-metatoggle-target\': toggleMeta(item) }\"\n                  lj-ml=\"friendsfeed.metaitem.music\"\n                  >\n              </span>\n              <span\n                  class=\"b-lenta-meta-content\"\n                  lj-html=\"item.music\"\n                  ></span>\n          </li>\n\n          <li\n              ng-show=\"item.location_present\"\n              class=\"\n                  b-lenta-metaitem\n                  b-lenta-item-location\n                  \"\n              >\n              <span\n                  class=\"b-lenta-meta-label\"\n                  ng-class=\"{\'b-lenta-metatoggle-target\': toggleMeta(item) }\"\n                  lj-ml=\"friendsfeed.metaitem.location\"\n                  >\n              </span>\n              <span\n                  class=\"b-lenta-meta-content\"\n                  lj-html=\"item.location\"\n                  ></span>\n          </li>\n\n          <li\n              ng-show=\"item.tags_present\"\n              class=\"\n                  b-lenta-metaitem\n                  b-lenta-item-tags\n                  \"\n              >\n              <span\n                  class=\"b-lenta-meta-label\"\n                  ng-class=\"{\'b-lenta-metatoggle-target\': toggleMeta(item) }\"\n                  lj-html=\"item.meta_tags_title\"\n                  >\n              </span>\n              <a\n                  ng-repeat-start=\"tag in item.tags\"\n                  class=\"b-lenta-tag b-lenta-meta-content\"\n                  ng-href=\"{{tag.link}}\"\n                  ng-bind=\"tag.name\"\n                  ></a><!--\n              --><span ng-repeat-end ng-show=\"{{!$last}}\">, </span><!--\n          --></li>\n\n      </ul>\n\n      <div class=\"b-lenta-nav clearfix-lj\">\n\n          <ul class=\"j-e-nav-list\">\n\n              <li\n                  ng-show=\"{{item.reply_count > 0}}\"\n                  class=\"\n                      j-e-nav-item\n                      j-e-nav-item-comments\n                      \"\n                  >\n                  <a ng-href=\"{{item.comments_url}}\">\n                      <span\n                          class=\"\n                              j-e-nav-item-comments-icon\n                              j-e-nav-item-icon\n                              \"\n                          ng-show=\"isSettingsEnabled\"\n                          >\n                          <svg class=\"svgicon\">\n                              <use xlink:href=\"#fi-comment-view\"></use>\n                          </svg>\n                      </span>\n                      <span\n                          class=\"\n                              j-e-nav-item-comments-text\n                              j-e-nav-item-text\n                              \"\n                          ng-bind=\"item.reply_count\"\n                          ><!--\n                          -->&nbsp;<!--\n                          --><span\n                              lj-ml=\"friendsfeed.link.comments2\"\n                              lj-ml-resolve=\"{count: item.reply_count}\"\n                              ></span>\n                      </span>\n                  </a>\n              </li>\n\n              <li\n                  ng-show=\"item.posting_comments_allowed\"\n                  class=\"\n                      j-e-nav-item\n                      j-e-nav-item-reply\n                      \"\n                  >\n                  <a ng-href=\"{{item.reply_url}}\">\n                      <span\n                          class=\"\n                              j-e-nav-item-reply-icon\n                              j-e-nav-item-icon\n                              \"\n                          ng-show=\"isSettingsEnabled\"\n                          >\n                          <svg class=\"svgicon\">\n                              <use xlink:href=\"#fi-comment-add\"></use>\n                          </svg>\n                      </span>\n                      <span\n                          class=\"\n                              j-e-nav-item-reply-text\n                              j-e-nav-item-text\n                              \"\n                          lj-ml=\"friendsfeed.link.reply\"\n                          ></span>\n                  </a>\n              </li>\n\n          </ul>\n\n      </div>\n\n      <div class=\"j-nav j-e-actions\">\n\n          <ul class=\"j-e-actions-list\">\n\n              <li\n                  ng-repeat=\"link in item.linkbar | filter: { active: true }\"\n                  class=\"j-e-actions-item\"\n                  ng-class=\"getActionLinkStyle(link)\"\n                  >\n\n                  <a\n                      ng-attr-title=\"link.name\"\n                      ng-class=\"addmem\"\n                      ng-href=\"{{link.url}}\"\n                      ng-attr-id=\"link.id\"\n                      ng-if=\"link.type == \'memories\'\"\n                      lj-memories=\"options\"\n                      >\n                      <span\n                          class=\"j-e-actions-icon\"\n                          ng-class=\"getActionLinkStyle(link)\"\n                          lj-svg-icon=\"link.svg_icon_name\"\n                          ng-show=\"isSettingsEnabled\"\n                          ></span>\n                      <span\n                          class=\"j-e-actions-tooltip\"\n                          ng-bind=\"link.name\"\n                          ></span>\n                  </a>\n\n                  <a\n                      ng-attr-title=\"link.name\"\n                      ng-attr-id=\"link.id\"\n                      href=\"javasctipt:void(0)\"\n                      ng-if=\"link.type == \'share\'\"\n                      lj-share=\"{\n                      url:      link.data_url,\n                      title:    link.data_title,\n                      text:     link.data_text,\n                      hashtags: link.data_hashtags\n                      }\"\n                      >\n                      <span\n                          class=\"j-e-actions-icon\"\n                          ng-class=\"getActionLinkStyle(link)\"\n                          lj-svg-icon=\"link.svg_icon_name\"\n                          ng-show=\"isSettingsEnabled\"\n                          ></span>\n                      <span\n                          class=\"j-e-actions-tooltip\"\n                          ng-bind=\"link.name\"\n                          ></span>\n                  </a>\n\n                  <a\n                      ng-attr-title=\"link.name\"\n                      ng-class=\"track\"\n                      ng-href=\"{{link.url}}\"\n                      ng-attr-id=\"link.id\"\n                      ng-if=\"link.type == \'track\'\"\n                      >\n                      <span\n                          class=\"j-e-actions-icon\"\n                          ng-class=\"getActionLinkStyle(link)\"\n                          lj-svg-icon=\"link.svg_icon_name\"\n                          ng-show=\"isSettingsEnabled\"\n                          ></span>\n                      <span\n                          class=\"j-e-actions-tooltip\"\n                          ng-bind=\"link.name\"\n                          ></span>\n                  </a>\n\n                  <a\n                      ng-attr-title=\"link.name\"\n                      ng-class=\"editentry\"\n                      ng-href=\"{{link.url}}\"\n                      ng-attr-id=\"link.id\"\n                      ng-if=\"link.type == \'edit\'\"\n                      >\n                      <span\n                          class=\"j-e-actions-icon\"\n                          ng-class=\"getActionLinkStyle(link)\"\n                          lj-svg-icon=\"link.svg_icon_name\"\n                          ng-show=\"isSettingsEnabled\"\n                          ></span>\n                      <span\n                          class=\"j-e-actions-tooltip\"\n                          ng-bind=\"link.name\"\n                          ></span>\n                  </a>\n\n              </li>\n\n          </ul>\n\n      </div>\n\n  </footer>\n</article>\n\n';
/**
 * Functionality for friends feed
 * @author Georgii Kats (g.kats@rambler-co.ru)
 */
;(function ($) {
  'use strict';

  angular.module('Feed', [
    'LJ.Api',
    'LJ.Memories',
    'LJ.Share',
    'Discovery.Tags',
    'Discovery.Menu',
    'Discovery.Settings',
    'LJ.Tour',
    'Feed.Widget',
    'Feed.Rss',
    'infinite-scroll'
  ])
  // HTML5 mode is on to keep anchor links working
  // by LJSV-2932
  .run(function () {
    // fix html5mode
    $('a:not([target])').attr('target', '_self');
  })
  .config(['$locationProvider', function($locationProvider) {

    $locationProvider.html5Mode(true);

    // Fix IE redirect to the main page: angular redirects us on base url /
    if ( !LJ.Support.history && angular.element('base').length === 0 ) {
      angular.element('<base />')
        .attr('href', location.pathname)
        .appendTo('head');
    }

  }])
  .directive('ljNew', ['$rootScope', '$window', function ($rootScope, $window) {
    return {
      link: function ($scope) {
        function update (event, value) {
          $scope.count = value;
        }

        $scope.loadNews = function () {
          $rootScope.$broadcast('news:append');
          $scope.count = null;
        };

        $scope.count = null;

        $rootScope.$on('button:news:update', update);

        $scope.$on('$destroy', function () {
          $rootScope.$off('button:news:update', update);
        });
      }
    }
  }])
  .directive('ljFeedItem', ['$parse', function ($parse) {
    function toggleMeta (item) {
      return (item.mood_present + item.music_present + item.location_present + item.tags_present) != 1
    }

    function getSecurityStyle (item) {
      return 'b-item-type-security-' + item.security;
    }

    function getActionLinkStyle (link) {
      return 'j-e-actions-item-' + link.css_class;
    }

    return {
      link: function (scope, element, attrs) {
        scope.options = $parse(attrs.ljFeedItem)(scope);
        scope.toggleMeta = toggleMeta;
        scope.getSecurityStyle = getSecurityStyle;
        scope.getActionLinkStyle = getActionLinkStyle;
        scope.toollbarActive = false;

        scope.$on('bubble:open', function (event, name, options) {
          if (options.ditemid === scope.options.ditemid) {
            scope.toollbarActive = true;
          }
        });

        scope.$on('bubble:close', function () {
          scope.toollbarActive = false;
        });

        scope.isSettingsEnabled = LJ.Flags.isEnabled('friendsfeed_v3_settings');

        $(document).on('scroll', function (event) {
          var viewportTop = $(document).scrollTop();
          var $actions = element.find('.j-e-actions-list');
          var itemTop = element.offset().top;
          var itemBottom = itemTop + element.outerHeight();

          $actions.toggleClass(
            'j-e-scrolling',
              ( itemTop <= viewportTop ) && ( itemBottom - $actions.outerHeight() > viewportTop )
          );

          $actions.toggleClass('j-e-scrolling-stop', itemBottom - $actions.outerHeight() < viewportTop);
        });
      }
    };
  }])
  .controller('FeedCtrl', ['$scope', '$rootScope', '$timeout', '$compile', '$location', '$sce', 'Api',
                  function( $scope ,  $rootScope ,  $timeout ,  $compile,   $location ,  $sce ,  Api ) {
      var that = this;
      var $window = angular.element(window);
      var classNames = {
        'up-button': 'b-lenta-upper'
      };
      var $slide = angular.element('.b-lenta-sidebar-dynamic');
      this.options = {
        light: false,
        locked: false,
        requestOptions: LJ.get('currentRequest'),
        ids: LJ.get('entryUniqs') || []
      };

      $scope.items = [];
      $scope.news = [];

      var browser = {
        _current: null,
        agents: {
          webkit: /webkit/i,
          opera: /Opera/
        },
        current: function () {
          var that = this;

          if ( this._current ) {
            return this._current;
          }

          angular.forEach(this.agents, function (pattern, agent) {
            if (pattern.test(navigator.userAgent)) {
              that._current = agent;
            }
          });

          return this._current;
        }
      };

      this.menu = {
        positions: {},
        isOpened: false,
        isInitialize: false,
        isViewable: true,
        isBubbleOpened: false,
        tab: 'filters',
        toggle: function (event, tab) {

          // that is needed because angular interpret this incorrectly
          // when calls method from template
          if ( tab === 'settings' && !that.isEnableSettings() ) {
            return;
          }

          if ( typeof event !== 'undefined' ) {

            if ( (event.metaKey || event.ctrlKey) ) {
              return;
            }

            event.preventDefault();
          }

          if ( this.isBubbleOpened ) {
            return;
          }

          if ( typeof tab === 'undefined' ) {
            that.menu.isOpened = false;
            $scope.$apply();
            return;
          }

          if ( (tab === that.menu.tab && that.menu.isOpened) || !that.menu.isOpened ) {
            $timeout(function () {
              that.menu.isOpened = !that.menu.isOpened;
            });
          }

          that.menu.tab = tab;
        }
      };

      this.isLogged = Boolean( LJ.get('remote') );

      /**
       * Show or hide spinner
       * @param  {String} state 'show' or 'hide'
       */
      this.spinner = function (state) {
        if (typeof state !== 'string') {
          throw new TypeError('state should be a string');
        }

        angular.element('.b-lenta').toggleClass( 'b-lenta-loading', state === 'show' );
      };


      /**
       * Load more feeds from server and insert into the feed
       */
      this.loadNewsFeeds = function () {
        if ( that.options.locked ) {
          return;
        }

        that.options.locked = true;

        var params = angular.extend({}, that.options.requestOptions, { skip: 0 });

        Api.call('friendsfeed.get_items', params).then(function (response) {
          // insert counter image
          if ( response.counter_image_url ) {
            LJ.Stat.addCounter(response.counter_image_url);
          }

          var items = $scope.items.map(function (item) {
            return item.uniq;
          });

          var cache = $scope.news.map(function (item) {
            return item.uniq;
          });

          var news = response.items.filter(function (item) {
            return items.indexOf(item.uniq) == -1 && cache.indexOf(item.uniq) == -1;
          });

          if (news && news.length) {
              Array.prototype.unshift.apply($scope.news, news);
              $rootScope.$broadcast('button:news:update', $scope.news.length);
          }

          that.options.locked = false;
        });
      };

      /**
       * Load more feeds from server and insert into the feed
       */
       this.loadFeeds = function () {
        var data;

        if ( that.options.locked ) {
          return;
        }

        that.spinner('show');
        that.options.locked = true;
        data = angular.extend({}, that.options.requestOptions, { skip: $scope.items.length });

        return Api.call('friendsfeed.get_items', data).then(function (response) {
          if ( response.counter_image_url ) {
            LJ.Stat.addCounter(response.counter_image_url);
          }

          if (response.items && response.items.length) {
            Array.prototype.push.apply($scope.items, response.items);
          }

          that.spinner('hide');
          that.options.locked = false;
        });
      };

      this.isEnableSettings = function () {
        return LJ.get('remote') && LJ.Flags.isEnabled('friendsfeed_v3_settings');
      };

      $window.on('scroll', function () {
        $slide.toggleClass(classNames['up-button'], $window.scrollTop() > $window.height() && !that.options.light)
      });

      $rootScope.$on('news:append', function () {
        if ( LJ.get('friendsfeed_settings.paging_type') === 'pages' ) {
          location.search = 'skip=0';
        }

        Array.prototype.unshift.apply($scope.items, $scope.news);
        $scope.news = [];
      });

      this.loadFeeds().then(function () {
        if ( that.isLogged ) {
          setInterval(function () {
            that.loadNewsFeeds();
          }, (LJ.get('feed_timeout') || 15) * 1000)
        }
      })

    }]);

  // switch to old feed version on /feed
  $('body').on('click', '.b-lenta-msg-close', function (e) {
    e.preventDefault();

    LJ.Api.call('friendsfeed.close_friendsfeed_line', {}, function () {
      $('.b-lenta-msg').remove();
      $('body').addClass('b-lenta-msg-hidden');
    });
  });

  /**
   * Message receiver for friends feed style setting
   */
  (function () {
    var style = null;

    if (window.opener) {
      $(window).on('message', function (e) {
        // jQuery creates event wrapper for us
        e = e.originalEvent;

        // facebook also sends us postMessage
        if ( e.origin !== LJ.get('siteroot') ) {
          return;
        }

        // find and cache needed style element
        if (style === null) {
          style = $('head > .b-lenta-preview');
        }

        // create element if it is not on the page
        if (style.length === 0) {
          style = $('<style />', {
            type: 'text/css'
          });
          style.appendTo( $('head') );
        }

        // update style
        style.text( e.data );
      });
    }
  }());
}(jQuery));
;

/* file-end: js/feed/feed.v3.js 
----------------------------------------------------------------------------------*/
