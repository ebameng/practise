(function(){var h={},mt={},c={id:"f0cfcccd7b1393990c78efdeebff3968",dm:["imooc.com"],js:"tongji.baidu.com/hm-web/js/",etrk:[],icon:'/hmt/icon/21|gif|20|20',ctrk:true,align:1,nv:-1,vdur:1800000,age:31536000000,rec:0,rp:[],trust:0,vcard:0,qiao:0,lxb:0,conv:0,comm:0,apps:''};var p=!0,q=null,r=!1;mt.h={};mt.h.za=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.h.cookieEnabled=navigator.cookieEnabled;mt.h.javaEnabled=navigator.javaEnabled();mt.h.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.h.Ca=(window.screen.width||0)+"x"+(window.screen.height||0);mt.h.colorDepth=window.screen.colorDepth||0;mt.cookie={};
mt.cookie.set=function(a,b,f){var d;f.H&&(d=new Date,d.setTime(d.getTime()+f.H));document.cookie=a+"="+b+(f.domain?"; domain="+f.domain:"")+(f.path?"; path="+f.path:"")+(d?"; expires="+d.toGMTString():"")+(f.Pa?"; secure":"")};mt.cookie.get=function(a){return(a=RegExp("(^| )"+a+"=([^;]*)(;|$)").exec(document.cookie))?a[2]:q};mt.p={};mt.p.Ja=function(a){return document.getElementById(a)};mt.p.la=function(a){var b;for(b="A";(a=a.parentNode)&&1==a.nodeType;)if(a.tagName==b)return a;return q};
(mt.p.Aa=function(){function a(){if(!a.z){a.z=p;for(var b=0,f=d.length;b<f;b++)d[b]()}}function b(){try{document.documentElement.doScroll("left")}catch(d){setTimeout(b,1);return}a()}var f=r,d=[],l;document.addEventListener?l=function(){document.removeEventListener("DOMContentLoaded",l,r);a()}:document.attachEvent&&(l=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",l),a())});(function(){if(!f)if(f=p,"complete"===document.readyState)a.z=p;else if(document.addEventListener)document.addEventListener("DOMContentLoaded",
l,r),window.addEventListener("load",a,r);else if(document.attachEvent){document.attachEvent("onreadystatechange",l);window.attachEvent("onload",a);var d=r;try{d=window.frameElement==q}catch(n){}document.documentElement.doScroll&&d&&b()}})();return function(b){a.z?b():d.push(b)}}()).z=r;mt.event={};mt.event.c=function(a,b,f){a.attachEvent?a.attachEvent("on"+b,function(d){f.call(a,d)}):a.addEventListener&&a.addEventListener(b,f,r)};
mt.event.preventDefault=function(a){a.preventDefault?a.preventDefault():a.returnValue=r};mt.l={};mt.l.parse=function(){return(new Function('return (" + source + ")'))()};
mt.l.stringify=function(){function a(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var d=f[a];if(d)return d;d=a.charCodeAt();return"\\u00"+Math.floor(d/16).toString(16)+(d%16).toString(16)}));return'"'+a+'"'}function b(a){return 10>a?"0"+a:a}var f={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(d){switch(typeof d){case "undefined":return"undefined";case "number":return isFinite(d)?String(d):"null";case "string":return a(d);case "boolean":return String(d);
default:if(d===q)return"null";if(d instanceof Array){var f=["["],k=d.length,n,e,g;for(e=0;e<k;e++)switch(g=d[e],typeof g){case "undefined":case "function":case "unknown":break;default:n&&f.push(","),f.push(mt.l.stringify(g)),n=1}f.push("]");return f.join("")}if(d instanceof Date)return'"'+d.getFullYear()+"-"+b(d.getMonth()+1)+"-"+b(d.getDate())+"T"+b(d.getHours())+":"+b(d.getMinutes())+":"+b(d.getSeconds())+'"';n=["{"];e=mt.l.stringify;for(k in d)if(Object.prototype.hasOwnProperty.call(d,k))switch(g=
d[k],typeof g){case "undefined":case "unknown":case "function":break;default:f&&n.push(","),f=1,n.push(e(k)+":"+e(g))}n.push("}");return n.join("")}}}();mt.lang={};mt.lang.e=function(a,b){return"[object "+b+"]"==={}.toString.call(a)};mt.lang.Ma=function(a){return mt.lang.e(a,"Number")&&isFinite(a)};mt.lang.Oa=function(a){return mt.lang.e(a,"String")};mt.localStorage={};
mt.localStorage.F=function(){if(!mt.localStorage.f)try{mt.localStorage.f=document.createElement("input"),mt.localStorage.f.type="hidden",mt.localStorage.f.style.display="none",mt.localStorage.f.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.f)}catch(a){return r}return p};
mt.localStorage.set=function(a,b,f){var d=new Date;d.setTime(d.getTime()+f||31536E6);try{window.localStorage?(b=d.getTime()+"|"+b,window.localStorage.setItem(a,b)):mt.localStorage.F()&&(mt.localStorage.f.expires=d.toUTCString(),mt.localStorage.f.load(document.location.hostname),mt.localStorage.f.setAttribute(a,b),mt.localStorage.f.save(document.location.hostname))}catch(l){}};
mt.localStorage.get=function(a){if(window.localStorage){if(a=window.localStorage.getItem(a)){var b=a.indexOf("|"),f=a.substring(0,b)-0;if(f&&f>(new Date).getTime())return a.substring(b+1)}}else if(mt.localStorage.F())try{return mt.localStorage.f.load(document.location.hostname),mt.localStorage.f.getAttribute(a)}catch(d){}return q};
mt.localStorage.remove=function(a){if(window.localStorage)window.localStorage.removeItem(a);else if(mt.localStorage.F())try{mt.localStorage.f.load(document.location.hostname),mt.localStorage.f.removeAttribute(a),mt.localStorage.f.save(document.location.hostname)}catch(b){}};mt.sessionStorage={};mt.sessionStorage.set=function(a,b){if(window.sessionStorage)try{window.sessionStorage.setItem(a,b)}catch(f){}};
mt.sessionStorage.get=function(a){return window.sessionStorage?window.sessionStorage.getItem(a):q};mt.sessionStorage.remove=function(a){window.sessionStorage&&window.sessionStorage.removeItem(a)};mt.V={};mt.V.log=function(a,b){var f=new Image,d="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[d]=f;f.onload=f.onerror=f.onabort=function(){f.onload=f.onerror=f.onabort=q;f=window[d]=q;b&&b(a)};f.src=a};mt.D={};
mt.D.ra=function(){var a="";if(navigator.plugins&&navigator.mimeTypes.length){var b=navigator.plugins["Shockwave Flash"];b&&b.description&&(a=b.description.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{if(b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(a=b.GetVariable("$version"))&&(a=a.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(f){}return a};
mt.D.fa=function(a,b,f,d,l){return'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+a+'" width="'+f+'" height="'+d+'"><param name="movie" value="'+b+'" /><param name="flashvars" value="'+(l||"")+'" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="'+a+'" width="'+f+'" height="'+d+'" src="'+b+'" flashvars="'+(l||"")+'" allowscriptaccess="always" /></object>'};mt.url={};
mt.url.j=function(a,b){var f=a.match(RegExp("(^|&|\\?|#)("+b+")=([^&#]*)(&|$|#)",""));return f?f[3]:q};mt.url.La=function(a){return(a=a.match(/^(https?:)\/\//))?a[1]:q};mt.url.oa=function(a){return(a=a.match(/^(https?:\/\/)?([^\/\?#]*)/))?a[2].replace(/.*@/,""):q};mt.url.Q=function(a){return(a=mt.url.oa(a))?a.replace(/:\d+$/,""):a};mt.url.Ka=function(a){return(a=a.match(/^(https?:\/\/)?[^\/]*(.*)/))?a[2].replace(/[\?#].*/,"").replace(/^$/,"/"):q};
h.m={xa:"http://tongji.baidu.com/hm-web/welcome/ico",M:"log.hm.baidu.com/hm.gif",Z:"baidu.com",ua:"hmmd",va:"hmpl",ta:"hmkw",sa:"hmci",wa:"hmsr",o:0,i:Math.round(+new Date/1E3),protocol:"https:"==document.location.protocol?"https:":"http:",Na:0,da:6E5,ea:10,O:1024,ca:1,A:2147483647,W:"cc cf ci ck cl cm cp cw ds ep et fl ja ln lo lt nv rnd si st su v cv lv api tt u".split(" ")};
(function(){var a={k:{},c:function(a,f){this.k[a]=this.k[a]||[];this.k[a].push(f)},s:function(a,f){this.k[a]=this.k[a]||[];for(var d=this.k[a].length,l=0;l<d;l++)this.k[a][l](f)}};return h.q=a})();
(function(){function a(a,d){var l=document.createElement("script");l.charset="utf-8";b.e(d,"Function")&&(l.readyState?l.onreadystatechange=function(){if("loaded"===l.readyState||"complete"===l.readyState)l.onreadystatechange=q,d()}:l.onload=function(){d()});l.src=a;var k=document.getElementsByTagName("script")[0];k.parentNode.insertBefore(l,k)}var b=mt.lang;return h.load=a})();
(function(){var a=h.m,b=mt.D,f={init:function(){if(""!==c.icon){var d;d=c.icon.split("|");var f=a.xa+"?s="+c.id,k=("http:"==a.protocol?"http://eiv":"https://bs")+".baidu.com"+d[0]+"."+d[1];switch(d[1]){case "swf":d=b.fa("HolmesIcon"+a.i,k,d[2],d[3],"s="+f);break;case "gif":d='<a href="'+f+'" target="_blank"><img border="0" src="'+k+'" width="'+d[2]+'" height="'+d[3]+'"></a>';break;default:d='<a href="'+f+'" target="_blank">'+d[0]+"</a>"}document.write(d)}}};h.q.c("pv-b",f.init);return f})();
(function(){var a=mt.p,b=mt.event,f=mt.h,d=h.m,l=[],k={X:function(){c.ctrk&&(b.c(document,"mouseup",k.ba()),b.c(window,"unload",function(){k.B()}),setInterval(function(){k.B()},d.da))},ba:function(){return function(a){a=k.ma(a);if(""!==a){var b=(d.protocol+"//"+d.M+"?"+h.b.U().replace(/ep=[^&]*/,"ep="+encodeURIComponent("["+a+"]"))).length;b+(d.A+"").length>d.O||(b+encodeURIComponent(l.join(",")+(l.length?",":"")).length+(d.A+"").length>d.O&&k.B(),l.push(a),(l.length>=d.ea||/t:a/.test(a))&&k.B())}}},
ma:function(b){if(0===d.ca){var e=b.target||b.srcElement,g=e.tagName.toLowerCase();if("embed"==g||"object"==g)return""}f.za?(e=Math.max(document.documentElement.scrollTop,document.body.scrollTop),g=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft),g=b.clientX+g,e=b.clientY+e):(g=b.pageX,e=b.pageY);var m=window.innerWidth||document.documentElement.clientWidth||document.body.offsetWidth;switch(c.align){case 1:g-=m/2;break;case 2:g-=m}g="{x:"+g+",y:"+e+",";e=b.target||b.srcElement;
return g=(b="a"==e.tagName.toLowerCase()?e:a.la(e))?g+("t:a,u:"+encodeURIComponent(b.href)+"}"):g+"t:b}"},B:function(){0!==l.length&&(h.b.a.et=2,h.b.a.ep="["+l.join(",")+"]",h.b.g(),l=[])}};h.q.c("pv-b",k.X);return k})();
(function(){function a(){return function(){h.b.a.nv=0;h.b.a.st=4;h.b.a.et=3;h.b.a.ep=h.G.pa()+","+h.G.na();h.b.g()}}function b(){clearTimeout(x);var a;w&&(a="visible"==document[w]);y&&(a=!document[y]);e="undefined"==typeof a?p:a;if((!n||!g)&&e&&m)u=p,t=+new Date;else if(n&&g&&(!e||!m))u=r,s+=+new Date-t;n=e;g=m;x=setTimeout(b,100)}function f(a){var g=document,t="";if(a in g)t=a;else for(var s=["webkit","ms","moz","o"],d=0;d<s.length;d++){var b=s[d]+a.charAt(0).toUpperCase()+a.slice(1);if(b in g){t=
b;break}}return t}function d(a){if(!("focus"==a.type||"blur"==a.type)||!(a.target&&a.target!=window))m="focus"==a.type||"focusin"==a.type?p:r,b()}var l=mt.event,k=h.q,n=p,e=p,g=p,m=p,v=+new Date,t=v,s=0,u=p,w=f("visibilityState"),y=f("hidden"),x;b();(function(){var a=w.replace(/[vV]isibilityState/,"visibilitychange");l.c(document,a,b);l.c(window,"pageshow",b);l.c(window,"pagehide",b);"object"==typeof document.onfocusin?(l.c(document,"focusin",d),l.c(document,"focusout",d)):(l.c(window,"focus",d),
l.c(window,"blur",d))})();h.G={pa:function(){return+new Date-v},na:function(){return u?+new Date-t+s:s}};k.c("pv-b",function(){l.c(window,"unload",a())});return h.G})();
(function(){var a=mt.lang,b=h.m,f=h.load,d={ya:function(d){if((void 0===window._dxt||a.e(window._dxt,"Array"))&&"undefined"!==typeof h.b){var k=h.b.I();f([b.protocol,"//datax.baidu.com/x.js?si=",c.id,"&dm=",encodeURIComponent(k)].join(""),d)}},Ha:function(d){if(a.e(d,"String")||a.e(d,"Number"))window._dxt=window._dxt||[],window._dxt.push(["_setUserId",d])}};return h.ga=d})();
(function(){function a(g){for(var d in g)if({}.hasOwnProperty.call(g,d)){var b=g[d];f.e(b,"Object")||f.e(b,"Array")?a(b):g[d]=String(b)}}function b(a){return a.replace?a.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):a}var f=mt.lang,d=mt.l,l=h.m,k=h.q,n=h.ga,e={R:q,r:[],C:0,S:r,init:function(){e.d=0;e.R={push:function(){e.L.apply(e,arguments)}};k.c("pv-b",function(){e.ha();e.ia()});k.c("pv-d",e.ka);k.c("stag-b",function(){h.b.a.api=e.d||e.C?e.d+"_"+e.C:""});k.c("stag-d",function(){h.b.a.api=
0;e.d=0;e.C=0})},ha:function(){var a=window._hmt;if(a&&a.length)for(var d=0;d<a.length;d++){var b=a[d];switch(b[0]){case "_setAccount":1<b.length&&/^[0-9a-z]{32}$/.test(b[1])&&(e.d|=1,window._bdhm_account=b[1]);break;case "_setAutoPageview":if(1<b.length&&(b=b[1],r===b||p===b))e.d|=2,window._bdhm_autoPageview=b}}},ia:function(){if("undefined"===typeof window._bdhm_account||window._bdhm_account===c.id){window._bdhm_account=c.id;var a=window._hmt;if(a&&a.length)for(var d=0,b=a.length;d<b;d++)f.e(a[d],
"Array")&&"_trackEvent"!==a[d][0]&&"_trackRTEvent"!==a[d][0]?e.L(a[d]):e.r.push(a[d]);window._hmt=e.R}},ka:function(){if(0<e.r.length)for(var a=0,d=e.r.length;a<d;a++)e.L(e.r[a]);e.r=q},L:function(a){if(f.e(a,"Array")){var d=a[0];if(e.hasOwnProperty(d)&&f.e(e[d],"Function"))e[d](a)}},_trackPageview:function(a){if(1<a.length&&a[1].charAt&&"/"==a[1].charAt(0)){e.d|=4;h.b.a.et=0;h.b.a.ep="";h.b.J?(h.b.a.nv=0,h.b.a.st=4):h.b.J=p;var d=h.b.a.u,b=h.b.a.su;h.b.a.u=l.protocol+"//"+document.location.host+
a[1];e.S||(h.b.a.su=document.location.href);h.b.g();h.b.a.u=d;h.b.a.su=b}},_trackEvent:function(a){2<a.length&&(e.d|=8,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=4,h.b.a.ep=b(a[1])+"*"+b(a[2])+(a[3]?"*"+b(a[3]):"")+(a[4]?"*"+b(a[4]):""),h.b.g())},_setCustomVar:function(a){if(!(4>a.length)){var d=a[1],f=a[4]||3;if(0<d&&6>d&&0<f&&4>f){e.C++;for(var t=(h.b.a.cv||"*").split("!"),s=t.length;s<d-1;s++)t.push("*");t[d-1]=f+"*"+b(a[2])+"*"+b(a[3]);h.b.a.cv=t.join("!");a=h.b.a.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,
"");""!==a?h.b.setData("Hm_cv_"+c.id,encodeURIComponent(a),c.age):h.b.Ba("Hm_cv_"+c.id)}}},_setReferrerOverride:function(a){1<a.length&&(h.b.a.su=a[1].charAt&&"/"==a[1].charAt(0)?l.protocol+"//"+window.location.host+a[1]:a[1],e.S=p)},_trackOrder:function(b){b=b[1];f.e(b,"Object")&&(a(b),e.d|=16,h.b.a.nv=0,h.b.a.st=4,h.b.a.et=94,h.b.a.ep=d.stringify(b),h.b.g())},_trackMobConv:function(a){if(a={webim:1,tel:2,map:3,sms:4,callback:5,share:6}[a[1]])e.d|=32,h.b.a.et=93,h.b.a.ep=a,h.b.g()},_trackRTPageview:function(b){b=
b[1];f.e(b,"Object")&&(a(b),b=d.stringify(b),512>=encodeURIComponent(b).length&&(e.d|=64,h.b.a.rt=b))},_trackRTEvent:function(b){b=b[1];if(f.e(b,"Object")){a(b);b=encodeURIComponent(d.stringify(b));var m=function(a){var b=h.b.a.rt;e.d|=128;h.b.a.et=90;h.b.a.rt=a;h.b.g();h.b.a.rt=b},k=b.length;if(900>=k)m.call(this,b);else for(var k=Math.ceil(k/900),t="block|"+Math.round(Math.random()*l.A).toString(16)+"|"+k+"|",s=[],u=0;u<k;u++)s.push(u),s.push(b.substring(900*u,900*u+900)),m.call(this,t+s.join("|")),
s=[]}},_setUserId:function(a){a=a[1];n.ya();n.Ha(a)}};e.init();h.$=e;return h.$})();
(function(){function a(){"undefined"==typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=p,this.a={},this.J=r,this.init())}var b=mt.url,f=mt.V,d=mt.D,l=mt.lang,k=mt.cookie,n=mt.h,e=mt.localStorage,g=mt.sessionStorage,m=h.m,v=h.q;a.prototype={K:function(a,b){a="."+a.replace(/:\d+/,"");b="."+b.replace(/:\d+/,"");var d=a.indexOf(b);return-1<d&&d+b.length==a.length},T:function(a,b){a=a.replace(/^https?:\/\//,"");return 0===a.indexOf(b)},w:function(a){for(var d=0;d<c.dm.length;d++)if(-1<
c.dm[d].indexOf("/")){if(this.T(a,c.dm[d]))return p}else{var f=b.Q(a);if(f&&this.K(f,c.dm[d]))return p}return r},I:function(){for(var a=document.location.hostname,b=0,d=c.dm.length;b<d;b++)if(this.K(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[\/\?#].*/,"");return a},P:function(){for(var a=0,b=c.dm.length;a<b;a++){var d=c.dm[a];if(-1<d.indexOf("/")&&this.T(document.location.href,d))return d.replace(/^[^\/]+(\/.*)/,"$1")+"/"}return"/"},qa:function(){if(!document.referrer)return m.i-m.o>c.vdur?1:4;var a=
r;this.w(document.referrer)&&this.w(document.location.href)?a=p:(a=b.Q(document.referrer),a=this.K(a||"",document.location.hostname));return a?m.i-m.o>c.vdur?1:4:3},getData:function(a){try{return k.get(a)||g.get(a)||e.get(a)}catch(b){}},setData:function(a,b,d){try{k.set(a,b,{domain:this.I(),path:this.P(),H:d}),d?e.set(a,b,d):g.set(a,b)}catch(f){}},Ba:function(a){try{k.set(a,"",{domain:this.I(),path:this.P(),H:-1}),g.remove(a),e.remove(a)}catch(b){}},Fa:function(){var a,b,d,f,e;m.o=this.getData("Hm_lpvt_"+
c.id)||0;13==m.o.length&&(m.o=Math.round(m.o/1E3));b=this.qa();a=4!=b?1:0;if(d=this.getData("Hm_lvt_"+c.id)){f=d.split(",");for(e=f.length-1;0<=e;e--)13==f[e].length&&(f[e]=""+Math.round(f[e]/1E3));for(;2592E3<m.i-f[0];)f.shift();e=4>f.length?2:3;for(1===a&&f.push(m.i);4<f.length;)f.shift();d=f.join(",");f=f[f.length-1]}else d=m.i,f="",e=1;this.setData("Hm_lvt_"+c.id,d,c.age);this.setData("Hm_lpvt_"+c.id,m.i);d=m.i==this.getData("Hm_lpvt_"+c.id)?"1":"0";if(0===c.nv&&this.w(document.location.href)&&
(""===document.referrer||this.w(document.referrer)))a=0,b=4;this.a.nv=a;this.a.st=b;this.a.cc=d;this.a.lt=f;this.a.lv=e},U:function(){for(var a=[],b=0,d=m.W.length;b<d;b++){var f=m.W[b],e=this.a[f];"undefined"!=typeof e&&""!==e&&a.push(f+"="+encodeURIComponent(e))}b=this.a.et;this.a.rt&&(0===b?a.push("rt="+encodeURIComponent(this.a.rt)):90===b&&a.push("rt="+this.a.rt));return a.join("&")},Ga:function(){this.Fa();this.a.si=c.id;this.a.su=document.referrer;this.a.ds=n.Ca;this.a.cl=n.colorDepth+"-bit";
this.a.ln=n.language;this.a.ja=n.javaEnabled?1:0;this.a.ck=n.cookieEnabled?1:0;this.a.lo="number"==typeof _bdhm_top?1:0;this.a.fl=d.ra();this.a.v="1.0.94";this.a.cv=decodeURIComponent(this.getData("Hm_cv_"+c.id)||"");1==this.a.nv&&(this.a.tt=document.title||"");var a=document.location.href;this.a.cm=b.j(a,m.ua)||"";this.a.cp=b.j(a,m.va)||"";this.a.cw=b.j(a,m.ta)||"";this.a.ci=b.j(a,m.sa)||"";this.a.cf=b.j(a,m.wa)||""},init:function(){try{this.Ga(),0===this.a.nv?this.Ea():this.N(".*"),h.b=this,this.aa(),
v.s("pv-b"),this.Da()}catch(a){var b=[];b.push("si="+c.id);b.push("n="+encodeURIComponent(a.name));b.push("m="+encodeURIComponent(a.message));b.push("r="+encodeURIComponent(document.referrer));f.log(m.protocol+"//"+m.M+"?"+b.join("&"))}},Da:function(){function a(){v.s("pv-d")}"undefined"===typeof window._bdhm_autoPageview||window._bdhm_autoPageview===p?(this.J=p,this.a.et=0,this.a.ep="",this.g(a)):a()},g:function(a){var b=this;b.a.rnd=Math.round(Math.random()*m.A);v.s("stag-b");var d=m.protocol+"//"+
m.M+"?"+b.U();v.s("stag-d");b.Y(d);f.log(d,function(d){b.N(d);l.e(a,"Function")&&a.call(b)})},aa:function(){var a=document.location.hash.substring(1),d=RegExp(c.id),f=-1<document.referrer.indexOf(m.Z)?p:r,e=b.j(a,"jn"),l=/^heatlink$|^select$/.test(e);a&&(d.test(a)&&f&&l)&&(a=document.createElement("script"),a.setAttribute("type","text/javascript"),a.setAttribute("charset","utf-8"),a.setAttribute("src",m.protocol+"//"+c.js+e+".js?"+this.a.rnd),e=document.getElementsByTagName("script")[0],e.parentNode.insertBefore(a,
e))},Y:function(a){var b=g.get("Hm_unsent_"+c.id)||"",d=this.a.u?"":"&u="+encodeURIComponent(document.location.href),b=encodeURIComponent(a.replace(/^https?:\/\//,"")+d)+(b?","+b:"");g.set("Hm_unsent_"+c.id,b)},N:function(a){var b=g.get("Hm_unsent_"+c.id)||"";b&&((b=b.replace(RegExp(encodeURIComponent(a.replace(/^https?:\/\//,"")).replace(/([\*\(\)])/g,"\\$1")+"(%26u%3D[^,]*)?,?","g"),"").replace(/,$/,""))?g.set("Hm_unsent_"+c.id,b):g.remove("Hm_unsent_"+c.id))},Ea:function(){var a=this,b=g.get("Hm_unsent_"+
c.id);if(b)for(var b=b.split(","),d=function(b){f.log(m.protocol+"//"+decodeURIComponent(b).replace(/^https?:\/\//,""),function(b){a.N(b)})},e=0,l=b.length;e<l;e++)d(b[e])}};return new a})();
(function(){var a=mt.p,b=mt.event,f=mt.url,d=mt.l;try{if(window.performance&&performance.timing&&"undefined"!==typeof h.b){var l=+new Date,k=function(a){var b=performance.timing,d=b[a+"Start"]?b[a+"Start"]:0;a=b[a+"End"]?b[a+"End"]:0;return{start:d,end:a,value:0<a-d?a-d:0}},n=q;a.Aa(function(){n=+new Date});var e=function(){var a,b,e;e=k("navigation");b=k("request");e={netAll:b.start-e.start,netDns:k("domainLookup").value,netTcp:k("connect").value,srv:k("response").start-b.start,dom:performance.timing.domInteractive-
performance.timing.fetchStart,loadEvent:k("loadEvent").end-e.start};a=document.referrer;var g=q;b=q;if("www.baidu.com"===(a.match(/^(http[s]?:\/\/)?([^\/]+)(.*)/)||[])[2])g=f.j(a,"qid"),b=f.j(a,"click_t");a=g;e.qid=a!=q?a:"";b!=q?(e.bdDom=n?n-b:0,e.bdRun=l-b,e.bdDef=k("navigation").start-b):(e.bdDom=0,e.bdRun=0,e.bdDef=0);h.b.a.et=87;h.b.a.ep=d.stringify(e);h.b.g()};b.c(window,"load",function(){setTimeout(e,500)})}}catch(g){}})();
(function(){var a=h.m,b={init:function(){try{if("http:"===a.protocol){var b=document.createElement("IFRAME");b.setAttribute("src","http://boscdn.bpc.baidu.com/v1/holmes-moplus/mp-cdn.html");b.style.display="none";b.style.width="1";b.style.height="1";b.Ia="0";document.body.appendChild(b)}}catch(f){}}},f=navigator.userAgent.toLowerCase();-1<f.indexOf("android")&&-1===f.indexOf("micromessenger")&&b.init()})();
(function(){var a=mt.lang,b=mt.event,f=mt.l;if(c.comm&&"undefined"!==typeof h.b){var d=function(a){if(a.item){for(var b=a.length,d=Array(b);b--;)d[b]=a[b];return d}return[].slice.call(a)},l=/.*\/swt(\/)?([\?|#].*)?$/i,k={click:function(){for(var a=[],b=d(document.getElementsByTagName("a")),b=[].concat.apply(b,d(document.getElementsByTagName("area"))),b=[].concat.apply(b,d(document.getElementsByTagName("img"))),f=/openZoosUrl\(|swt/,e=/\/LR\/Chatpre\.aspx/,g=0,k=b.length;g<k;g++){var m=b[g],n=m.getAttribute("onclick"),
m=m.getAttribute("href");(f.test(n)||e.test(m)||l.test(m))&&a.push(b[g])}return a}},n=function(a,b){for(var d in a)if(a.hasOwnProperty(d)&&b.call(a,d,a[d])===r)return r},e=function(b,d){var e={n:"swt",t:"clk"};e.v=b;if(d){var g=d.getAttribute("href"),k=d.getAttribute("onclick")?""+d.getAttribute("onclick"):q;l.test(g)?(e.sn="mediate",e.snv=g):a.e(k,"String")&&(-1===k.indexOf("openZoosUrl")&&-1!==k.indexOf("swt"))&&(g=d.getAttribute("id")||"",e.sn="wrap",e.snv=k,e.id=g)}h.b.a.et=86;h.b.a.ep=f.stringify(e);
h.b.g();for(e=+new Date;500>=+new Date-e;);},g,m="/zoosnet"+(/\/$/.test("/zoosnet")?"":"/"),v=function(b,d){if(g===d)return e(m+b,d),r;if(a.e(d,"Array")||a.e(d,"NodeList"))for(var f=0,k=d.length;f<k;f++)if(g===d[f])return e(m+b+"/"+(f+1),d[f]),r};b.c(document,"click",function(b){b=b||window.event;g=b.target||b.srcElement;var d={};for(n(k,function(b,e){d[b]=a.e(e,"Function")?e():document.getElementById(e)});g&&g!==document&&n(d,v)!==r;)g=g.parentNode})}})();})();
