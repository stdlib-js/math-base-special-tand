// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function e(){return r&&"symbol"==typeof Symbol.toStringTag}var t,n=Object.prototype.toString,i=Object.prototype.hasOwnProperty,o="function"==typeof Symbol?Symbol:void 0,a="function"==typeof o?o.toStringTag:"",c=e()?function(r){var e,t,o,c,u;if(null==r)return n.call(r);t=r[a],u=a,e=null!=(c=r)&&i.call(c,u);try{r[a]=void 0}catch(e){return n.call(r)}return o=n.call(r),e?r[a]=t:delete r[a],o}:function(r){return n.call(r)},u="function"==typeof Uint32Array,f="function"==typeof Uint32Array?Uint32Array:null,s="function"==typeof Uint32Array?Uint32Array:void 0;t=function(){var r,e,t;if("function"!=typeof f)return!1;try{e=new f(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(u&&t instanceof Uint32Array||"[object Uint32Array]"===c(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?s:function(){throw new Error("not implemented")};var l,p=t,y="function"==typeof Float64Array,g="function"==typeof Float64Array?Float64Array:null,d="function"==typeof Float64Array?Float64Array:void 0;l=function(){var r,e,t;if("function"!=typeof g)return!1;try{e=new g([1,3.14,-3.14,NaN]),t=e,r=(y&&t instanceof Float64Array||"[object Float64Array]"===c(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?d:function(){throw new Error("not implemented")};var h,v=l,b="function"==typeof Uint8Array,w="function"==typeof Uint8Array?Uint8Array:null,m="function"==typeof Uint8Array?Uint8Array:void 0;h=function(){var r,e,t;if("function"!=typeof w)return!1;try{e=new w(e=[1,3.14,-3.14,256,257]),t=e,r=(b&&t instanceof Uint8Array||"[object Uint8Array]"===c(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?m:function(){throw new Error("not implemented")};var A,_=h,E="function"==typeof Uint16Array,S="function"==typeof Uint16Array?Uint16Array:null,U="function"==typeof Uint16Array?Uint16Array:void 0;A=function(){var r,e,t;if("function"!=typeof S)return!1;try{e=new S(e=[1,3.14,-3.14,65536,65537]),t=e,r=(E&&t instanceof Uint16Array||"[object Uint16Array]"===c(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?U:function(){throw new Error("not implemented")};var j,I={uint16:A,uint8:_};(j=new I.uint16(1))[0]=4660;var k=52===new I.uint8(j.buffer)[0],x=!0===k?1:0,F=new v(1),N=new p(F.buffer);function O(r){return F[0]=r,N[x]}var T=!0===k?0:1,V=new v(1),$=new p(V.buffer);function G(r,e){return V[0]=r,$[T]=e>>>0,V[0]}var P=.7853981633974483,H=3061616997868383e-32,W=.3333333333333341,C=2147483647;function L(r,e,t){var n,i,o,a,c,u,f,s,l;return(i=(n=O(r))&C|0)>=1072010280&&(r<0&&(r=-r,e=-e),r=(l=P-r)+(s=H-e),e=0),a=function(r){return 0===r?.13333333333320124:.13333333333320124+r*(.021869488294859542+r*(.0035920791075913124+r*(.0005880412408202641+r*(7817944429395571e-20+-18558637485527546e-21*r))))}(s=(l=r*r)*l),f=l*function(r){return 0===r?.05396825397622605:.05396825397622605+r*(.0088632398235993+r*(.0014562094543252903+r*(.0002464631348184699+r*(7140724913826082e-20+2590730518636337e-20*r))))}(s),a=e+l*((c=l*r)*(a+f)+e),s=r+(a+=W*c),i>=1072010280?(1-(n>>30&2))*((f=t)-2*(r-(s*s/(s+f)-a))):1===t?s:(f=a-((l=G(s,0))-r),(u=G(o=-1/s,0))+o*((c=1+u*l)+u*f))}var R,Z,M=2147483647,X=2146435072,Y=1048575,z=!0===k?0:1,q=new v(1),B=new p(q.buffer);!0===k?(R=1,Z=0):(R=0,Z=1);var D={HIGH:R,LOW:Z},J=new v(1),K=new p(J.buffer),Q=D.HIGH,rr=D.LOW;function er(r,e){return K[Q]=r,K[rr]=e,J[0]}var tr=Math.floor,nr=Number.POSITIVE_INFINITY,ir=Number,or=ir.NEGATIVE_INFINITY,ar=1023,cr=1023,ur=-1023,fr=-1074;function sr(r){return r!=r}function lr(r){return r===nr||r===or}var pr=2147483648,yr="function"==typeof Object.defineProperty?Object.defineProperty:null,gr=Object.defineProperty;function dr(r){return"number"==typeof r}function hr(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function vr(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+hr(i):hr(i)+r,n&&(r="-"+r)),r}var br=String.prototype.toLowerCase,wr=String.prototype.toUpperCase;function mr(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!dr(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=vr(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=vr(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===wr.call(r.specifier)?wr.call(t):br.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var Ar=Math.abs,_r=String.prototype.toLowerCase,Er=String.prototype.toUpperCase,Sr=String.prototype.replace,Ur=/e\+(\d)$/,jr=/e-(\d)$/,Ir=/^(\d+)$/,kr=/^(\d+)e/,xr=/\.0$/,Fr=/\.0*e/,Nr=/(\..*[^0])0*e/;function Or(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!dr(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Ar(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Sr.call(t,Nr,"$1e"),t=Sr.call(t,Fr,"e"),t=Sr.call(t,xr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Sr.call(t,Ur,"e+0$1"),t=Sr.call(t,jr,"e-0$1"),r.alternate&&(t=Sr.call(t,Ir,"$1."),t=Sr.call(t,kr,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===Er.call(r.specifier)?Er.call(t):_r.call(t)}function Tr(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var Vr=String.fromCharCode,$r=Array.isArray;function Gr(r){return r!=r}function Pr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Hr(r){var e,t,n,i,o,a,c,u,f,s,l,p,y;if(!$r(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",c=1,u=0;u<r.length;u++)if("string"==typeof(n=r[u]))a+=n;else{if(e=void 0!==n.precision,!(n=Pr(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Gr(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Gr(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=mr(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!Gr(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Gr(o)?String(n.arg):Vr(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=Or(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=vr(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(s=n.arg,l=n.width,p=n.padRight,y=void 0,(y=l-s.length)<0?s:s=p?s+Tr(y):Tr(y)+s)),a+=n.arg||"",c+=1}return a}var Wr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Cr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Lr(r){var e,t,n,i;for(t=[],i=0,n=Wr.exec(r);n;)(e=r.slice(i,Wr.lastIndex-n[0].length)).length&&t.push(e),t.push(Cr(n)),i=Wr.lastIndex,n=Wr.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function Rr(r){var e,t;if("string"!=typeof r)throw new TypeError(Rr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Lr(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return Hr.apply(null,e)}var Zr,Mr,Xr=Object.prototype,Yr=Xr.toString,zr=Xr.__defineGetter__,qr=Xr.__defineSetter__,Br=Xr.__lookupGetter__,Dr=Xr.__lookupSetter__,Jr=function(){try{return yr({},"x",{}),!0}catch(r){return!1}}()?gr:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===Yr.call(r))throw new TypeError(Rr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===Yr.call(t))throw new TypeError(Rr("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Br.call(r,e)||Dr.call(r,e)?(n=r.__proto__,r.__proto__=Xr,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&zr&&zr.call(r,e,t.get),a&&qr&&qr.call(r,e,t.set),r};function Kr(r,e,t){Jr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}!0===k?(Zr=1,Mr=0):(Zr=0,Mr=1);var Qr={HIGH:Zr,LOW:Mr},re=new v(1),ee=new p(re.buffer),te=Qr.HIGH,ne=Qr.LOW;function ie(r,e,t,n){return re[0]=r,e[n]=ee[te],e[n+t]=ee[ne],e}function oe(r){return ie(r,[0,0],1,0)}Kr(oe,"assign",ie);var ae=[0,0],ce=22250738585072014e-324,ue=4503599627370496;function fe(r,e,t,n){return sr(r)||lr(r)?(e[n]=r,e[n+t]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<ce?(e[n]=r*ue,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}Kr((function(r){return fe(r,[0,0],1,0)}),"assign",fe);var se=2220446049250313e-31,le=2148532223,pe=[0,0],ye=[0,0];function ge(r,e){var t,n,i,o,a,c;return 0===e||0===r||sr(r)||lr(r)?r:(fe(r,pe,1,0),r=pe[0],e+=pe[1],e+=function(r){var e=O(r);return(e=(e&X)>>>20)-ar|0}(r),e<fr?(i=0,o=r,oe.assign(i,ae,1,0),a=ae[0],a&=M,c=O(o),er(a|=c&=pr,ae[1])):e>cr?r<0?or:nr:(e<=ur?(e+=52,n=se):n=1,oe.assign(r,ye,1,0),t=ye[0],t&=le,n*er(t|=e+ar<<20,ye[1])))}function de(r){return function(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}(0,r)}var he=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ve=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],be=16777216,we=5.960464477539063e-8,me=de(20),Ae=de(20),_e=de(20),Ee=de(20);function Se(r,e,t,n,i,o,a,c,u){var f,s,l,p,y,g,d,h,v;for(p=o,v=n[t],h=t,y=0;h>0;y++)s=we*v|0,Ee[y]=v-be*s|0,v=n[h-1]+s,h-=1;if(v=ge(v,i),v-=8*tr(.125*v),v-=d=0|v,l=0,i>0?(d+=y=Ee[t-1]>>24-i,Ee[t-1]-=y<<24-i,l=Ee[t-1]>>23-i):0===i?l=Ee[t-1]>>23:v>=.5&&(l=2),l>0){for(d+=1,f=0,y=0;y<t;y++)h=Ee[y],0===f?0!==h&&(f=1,Ee[y]=16777216-h):Ee[y]=16777215-h;if(i>0)switch(i){case 1:Ee[t-1]&=8388607;break;case 2:Ee[t-1]&=4194303}2===l&&(v=1-v,0!==f&&(v-=ge(1,i)))}if(0===v){for(h=0,y=t-1;y>=o;y--)h|=Ee[y];if(0===h){for(g=1;0===Ee[o-g];g++);for(y=t+1;y<=t+g;y++){for(u[c+y]=he[a+y],s=0,h=0;h<=c;h++)s+=r[h]*u[c+(y-h)];n[y]=s}return Se(r,e,t+=g,n,i,o,a,c,u)}}if(0===v)for(t-=1,i-=24;0===Ee[t];)t-=1,i-=24;else(v=ge(v,-i))>=be?(s=we*v|0,Ee[t]=v-be*s|0,i+=24,Ee[t+=1]=s):Ee[t]=0|v;for(s=ge(1,i),y=t;y>=0;y--)n[y]=s*Ee[y],s*=we;for(y=t;y>=0;y--){for(s=0,g=0;g<=p&&g<=t-y;g++)s+=ve[g]*n[y+g];_e[t-y]=s}for(s=0,y=t;y>=0;y--)s+=_e[y];for(e[0]=0===l?s:-s,s=_e[0]-s,y=1;y<=t;y++)s+=_e[y];return e[1]=0===l?s:-s,7&d}function Ue(r,e,t,n){var i,o,a,c,u,f,s;for((o=(t-3)/24|0)<0&&(o=0),c=t-24*(o+1),f=o-(a=n-1),s=a+4,u=0;u<=s;u++)me[u]=f<0?0:he[f],f+=1;for(u=0;u<=4;u++){for(i=0,f=0;f<=a;f++)i+=r[f]*me[a+(u-f)];Ae[u]=i}return Se(r,e,4,Ae,c,4,o,a,me)}var je=Math.round,Ie=.6366197723675814,ke=1.5707963267341256,xe=6077100506506192e-26,Fe=6077100506303966e-26,Ne=20222662487959506e-37,Oe=20222662487111665e-37,Te=84784276603689e-45,Ve=2047;function $e(r,e,t){var n,i,o,a,c;return o=r-(n=je(r*Ie))*ke,a=n*xe,c=e>>20|0,t[0]=o-a,c-(O(t[0])>>20&Ve)>16&&(a=n*Ne-((i=o)-(o=i-(a=n*Fe))-a),t[0]=o-a,c-(O(t[0])>>20&Ve)>49&&(a=n*Te-((i=o)-(o=i-(a=n*Oe))-a),t[0]=o-a)),t[1]=o-t[0]-a,n}var Ge=0,Pe=16777216,He=1.5707963267341256,We=6077100506506192e-26,Ce=2*We,Le=3*We,Re=4*We,Ze=598523,Me=1072243195,Xe=1073928572,Ye=1074752122,ze=1074977148,qe=1075183036,Be=1075388923,De=1075594811,Je=1094263291,Ke=[0,0,0],Qe=[0,0];function rt(r,e){var t,n,i,o,a,c,u;if((i=O(r)&M|0)<=Me)return e[0]=r,e[1]=0,0;if(i<=Ye)return(i&Y)===Ze?$e(r,i,e):i<=Xe?r>0?(u=r-He,e[0]=u-We,e[1]=u-e[0]-We,1):(u=r+He,e[0]=u+We,e[1]=u-e[0]+We,-1):r>0?(u=r-2*He,e[0]=u-Ce,e[1]=u-e[0]-Ce,2):(u=r+2*He,e[0]=u+Ce,e[1]=u-e[0]+Ce,-2);if(i<=De)return i<=qe?i===ze?$e(r,i,e):r>0?(u=r-3*He,e[0]=u-Le,e[1]=u-e[0]-Le,3):(u=r+3*He,e[0]=u+Le,e[1]=u-e[0]+Le,-3):i===Be?$e(r,i,e):r>0?(u=r-4*He,e[0]=u-Re,e[1]=u-e[0]-Re,4):(u=r+4*He,e[0]=u+Re,e[1]=u-e[0]+Re,-4);if(i<Je)return $e(r,i,e);if(i>=X)return e[0]=NaN,e[1]=NaN,0;for(t=function(r){return q[0]=r,B[z]}(r),u=er(i-((n=(i>>20)-1046)<<20|0),t),a=0;a<2;a++)Ke[a]=0|u,u=(u-Ke[a])*Pe;for(Ke[2]=u,o=3;Ke[o-1]===Ge;)o-=1;return c=Ue(Ke,Qe,n,o),r<0?(e[0]=-Qe[0],e[1]=-Qe[1],-c):(e[0]=Qe[0],e[1]=Qe[1],c)}var et=[0,0],tt=1072243195,nt=1044381696;function it(r){return tr(r)===r}var ot=.017453292519943295;function at(r){return"number"==typeof r}var ct=ir.prototype.toString,ut=e();function ft(r){return"object"==typeof r&&(r instanceof ir||(ut?function(r){try{return ct.call(r),!0}catch(r){return!1}}(r):"[object Number]"===c(r)))}function st(r){return at(r)||ft(r)}function lt(r){return at(r)&&lr(r)}function pt(r){return ft(r)&&lr(r.valueOf())}function yt(r){return lt(r)||pt(r)}return Kr(st,"isPrimitive",at),Kr(st,"isObject",ft),Kr(yt,"isPrimitive",lt),Kr(yt,"isObject",pt),function(r){return yt(r)?NaN:it((r/90-1)/2)?1/0:it(r/90/2)?0:function(r){var e,t;return e=O(r),(e&=M)<=tt?e<nt?r:L(r,0,1):e>=X?NaN:(t=rt(r,et),L(et[0],et[1],1-((1&t)<<1)))}(function(r){return r*ot}(r))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).tand=e();
//# sourceMappingURL=browser.js.map
