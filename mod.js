// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function c(r){return"string"==typeof r}var f=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,v=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=p.call(t,b,"$1e"),t=p.call(t,w,"e"),t=p.call(t,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=p.call(t,v,"e+0$1"),t=p.call(t,y,"e-0$1"),r.alternate&&(t=p.call(t,g,"$1."),t=p.call(t,d,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===l.call(r.specifier)?l.call(t):s.call(t)}function A(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function N(r,e,n){var t=e-r.length;return t<0?r:r=n?r+A(t):A(t)+r}var _=String.fromCharCode,E=isNaN,U=Array.isArray;function k(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function I(r){var e,n,t,a,o,f,s,l,p;if(!U(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",s=1,l=0;l<r.length;l++)if(c(t=r[l]))f+=t;else{if(e=void 0!==t.precision,!(t=k(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),n=t.flags,p=0;p<n.length;p++)switch(a=n.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,E(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,E(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!E(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=E(o)?String(t.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=N(t.arg,t.width,t.padRight)),f+=t.arg||"",s+=1}return f}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function F(r){var e,n,t,i;for(n=[],i=0,t=S.exec(r);t;)(e=r.slice(i,S.lastIndex-t[0].length)).length&&n.push(e),n.push(x(t)),i=S.lastIndex,t=S.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function j(r){return"string"==typeof r}function T(r){var e,n,t;if(!j(r))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=F(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return I.apply(null,n)}var O=Object.prototype,V=O.toString,$=O.__defineGetter__,G=O.__defineSetter__,H=O.__lookupGetter__,W=O.__lookupSetter__;var C=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===V.call(n))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(H.call(r,e)||W.call(r,e)?(t=r.__proto__,r.__proto__=O,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(r,e,n.get),o&&G&&G.call(r,e,n.set),r};function L(r,e,n){C(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function P(r){return r!=r}var R=Number.POSITIVE_INFINITY,M=Number.NEGATIVE_INFINITY;function Z(r){return r===R||r===M}function X(r){return Math.abs(r)}var Y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var z=Object.prototype.toString;var q=Object.prototype.hasOwnProperty;var B="function"==typeof Symbol?Symbol:void 0,D="function"==typeof B?B.toStringTag:"";var J=Y&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return z.call(r);n=r[D],a=D,e=null!=(i=r)&&q.call(i,a);try{r[D]=void 0}catch(e){return z.call(r)}return t=z.call(r),e?r[D]=n:delete r[D],t}:function(r){return z.call(r)},K="function"==typeof Uint32Array;var Q="function"==typeof Uint32Array?Uint32Array:null;var rr,er="function"==typeof Uint32Array?Uint32Array:void 0;rr=function(){var r,e,n;if("function"!=typeof Q)return!1;try{e=new Q(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(K&&n instanceof Uint32Array||"[object Uint32Array]"===J(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?er:function(){throw new Error("not implemented")};var nr=rr,tr="function"==typeof Float64Array;var ir="function"==typeof Float64Array?Float64Array:null;var ar,or="function"==typeof Float64Array?Float64Array:void 0;ar=function(){var r,e,n;if("function"!=typeof ir)return!1;try{e=new ir([1,3.14,-3.14,NaN]),n=e,r=(tr&&n instanceof Float64Array||"[object Float64Array]"===J(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?or:function(){throw new Error("not implemented")};var ur=ar,cr="function"==typeof Uint8Array;var fr="function"==typeof Uint8Array?Uint8Array:null;var sr,lr="function"==typeof Uint8Array?Uint8Array:void 0;sr=function(){var r,e,n;if("function"!=typeof fr)return!1;try{e=new fr(e=[1,3.14,-3.14,256,257]),n=e,r=(cr&&n instanceof Uint8Array||"[object Uint8Array]"===J(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?lr:function(){throw new Error("not implemented")};var pr=sr,vr="function"==typeof Uint16Array;var yr="function"==typeof Uint16Array?Uint16Array:null;var gr,dr="function"==typeof Uint16Array?Uint16Array:void 0;gr=function(){var r,e,n;if("function"!=typeof yr)return!1;try{e=new yr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(vr&&n instanceof Uint16Array||"[object Uint16Array]"===J(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?dr:function(){throw new Error("not implemented")};var hr,wr={uint16:gr,uint8:pr};(hr=new wr.uint16(1))[0]=4660;var br=52===new wr.uint8(hr.buffer)[0],mr=!0===br?1:0,Ar=new ur(1),Nr=new nr(Ar.buffer);function _r(r){return Ar[0]=r,Nr[mr]}var Er=!0===br?1:0,Ur=new ur(1),kr=new nr(Ur.buffer);var Ir=.6931471803691238,Sr=1.9082149292705877e-10;function xr(r){var e,n,t,i,a,o,u,c,f,s,l,p;return 0===r?M:P(r)||r<0?NaN:(a=0,(n=_r(r))<1048576&&(a-=54,n=_r(r*=0x40000000000000)),n>=2146435072?r+r:(a+=(n>>20)-1023|0,a+=(c=(n&=1048575)+614244&1048576|0)>>20|0,u=(r=function(r,e){return Ur[0]=r,kr[Er]=e>>>0,Ur[0]}(r,n|1072693248^c))-1,(1048575&2+n)<3?0===u?0===a?0:a*Ir+a*Sr:(o=u*u*(.5-.3333333333333333*u),0===a?u-o:a*Ir-(o-a*Sr-u)):(c=n-398458|0,f=440401-n|0,i=(l=(p=(s=u/(2+u))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=t+i,(c|=f)>0?(e=.5*u*u,0===a?u-(e-s*(e+o)):a*Ir-(e-(s*(e+o)+a*Sr)-u)):0===a?u-s*(u-o):a*Ir-(s*(u-o)-a*Sr-u))))}var Fr=Math.floor,jr=Math.ceil;function Tr(r,e){var n,t,i,a;return i=(a=r*r)*a,t=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(n=.5*a))+(1-i-n+(a*t-r*e))}var Or=-.16666666666666632;function Vr(r,e){var n,t,i;return n=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),t=i*r,0===e?r+t*(Or+i*n):r-(i*(.5*e-t*n)-e-t*Or)}var $r,Gr,Hr=!0===br?0:1,Wr=new ur(1),Cr=new nr(Wr.buffer);!0===br?($r=1,Gr=0):($r=0,Gr=1);var Lr={HIGH:$r,LOW:Gr},Pr=new ur(1),Rr=new nr(Pr.buffer),Mr=Lr.HIGH,Zr=Lr.LOW;function Xr(r,e){return Rr[Mr]=r,Rr[Zr]=e,Pr[0]}var Yr,zr;!0===br?(Yr=1,zr=0):(Yr=0,zr=1);var qr={HIGH:Yr,LOW:zr},Br=new ur(1),Dr=new nr(Br.buffer),Jr=qr.HIGH,Kr=qr.LOW;function Qr(r,e,n,t){return Br[0]=r,e[t]=Dr[Jr],e[t+n]=Dr[Kr],e}function re(r){return Qr(r,[0,0],1,0)}L(re,"assign",Qr);var ee=[0,0];function ne(r,e){var n,t;return re.assign(r,ee,1,0),n=ee[0],n&=2147483647,t=_r(e),Xr(n|=t&=2147483648,ee[1])}function te(r,e,n,t){return P(r)||Z(r)?(e[t]=r,e[t+n]=0,e):0!==r&&X(r)<22250738585072014e-324?(e[t]=4503599627370496*r,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}L((function(r){return te(r,[0,0],1,0)}),"assign",te);var ie=[0,0],ae=[0,0];function oe(r,e){var n,t;return 0===e||0===r||P(r)||Z(r)?r:(te(r,ie,1,0),e+=ie[1],e+=function(r){var e=_r(r);return(e=(2146435072&e)>>>20)-1023|0}(r=ie[0]),e<-1074?ne(0,r):e>1023?r<0?M:R:(e<=-1023?(e+=52,t=2220446049250313e-31):t=1,re.assign(r,ae,1,0),n=ae[0],n&=2148532223,t*Xr(n|=e+1023<<20,ae[1])))}function ue(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var ce=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],fe=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],se=5.960464477539063e-8,le=ue(20),pe=ue(20),ve=ue(20),ye=ue(20);function ge(r,e,n,t,i,a,o,u,c){var f,s,l,p,v,y,g,d,h;for(p=a,h=t[n],d=n,v=0;d>0;v++)s=se*h|0,ye[v]=h-16777216*s|0,h=t[d-1]+s,d-=1;if(h=oe(h,i),h-=8*Fr(.125*h),h-=g=0|h,l=0,i>0?(g+=v=ye[n-1]>>24-i,ye[n-1]-=v<<24-i,l=ye[n-1]>>23-i):0===i?l=ye[n-1]>>23:h>=.5&&(l=2),l>0){for(g+=1,f=0,v=0;v<n;v++)d=ye[v],0===f?0!==d&&(f=1,ye[v]=16777216-d):ye[v]=16777215-d;if(i>0)switch(i){case 1:ye[n-1]&=8388607;break;case 2:ye[n-1]&=4194303}2===l&&(h=1-h,0!==f&&(h-=oe(1,i)))}if(0===h){for(d=0,v=n-1;v>=a;v--)d|=ye[v];if(0===d){for(y=1;0===ye[a-y];y++);for(v=n+1;v<=n+y;v++){for(c[u+v]=ce[o+v],s=0,d=0;d<=u;d++)s+=r[d]*c[u+(v-d)];t[v]=s}return ge(r,e,n+=y,t,i,a,o,u,c)}}if(0===h)for(n-=1,i-=24;0===ye[n];)n-=1,i-=24;else(h=oe(h,-i))>=16777216?(s=se*h|0,ye[n]=h-16777216*s|0,i+=24,ye[n+=1]=s):ye[n]=0|h;for(s=oe(1,i),v=n;v>=0;v--)t[v]=s*ye[v],s*=se;for(v=n;v>=0;v--){for(s=0,y=0;y<=p&&y<=n-v;y++)s+=fe[y]*t[v+y];ve[n-v]=s}for(s=0,v=n;v>=0;v--)s+=ve[v];for(e[0]=0===l?s:-s,s=ve[0]-s,v=1;v<=n;v++)s+=ve[v];return e[1]=0===l?s:-s,7&g}function de(r,e,n,t){var i,a,o,u,c,f,s;for(4,(a=(n-3)/24|0)<0&&(a=0),u=n-24*(a+1),f=a-(o=t-1),s=o+4,c=0;c<=s;c++)le[c]=f<0?0:ce[f],f+=1;for(c=0;c<=4;c++){for(i=0,f=0;f<=o;f++)i+=r[f]*le[o+(c-f)];pe[c]=i}return 4,ge(r,e,4,pe,u,4,a,o,le)}var he=Math.round;function we(r,e,n){var t,i,a,o,u;return a=r-1.5707963267341256*(t=he(.6366197723675814*r)),o=6077100506506192e-26*t,u=e>>20|0,n[0]=a-o,u-(_r(n[0])>>20&2047)>16&&(o=20222662487959506e-37*t-((i=a)-(a=i-(o=6077100506303966e-26*t))-o),n[0]=a-o,u-(_r(n[0])>>20&2047)>49&&(o=84784276603689e-45*t-((i=a)-(a=i-(o=20222662487111665e-37*t))-o),n[0]=a-o)),n[1]=a-n[0]-o,t}var be=1.5707963267341256,me=6077100506506192e-26,Ae=2*me,Ne=4*me,_e=[0,0,0],Ee=[0,0];function Ue(r,e){var n,t,i,a,o,u,c;if((i=2147483647&_r(r)|0)<=1072243195)return e[0]=r,e[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?we(r,i,e):i<=1073928572?r>0?(c=r-be,e[0]=c-me,e[1]=c-e[0]-me,1):(c=r+be,e[0]=c+me,e[1]=c-e[0]+me,-1):r>0?(c=r-2*be,e[0]=c-Ae,e[1]=c-e[0]-Ae,2):(c=r+2*be,e[0]=c+Ae,e[1]=c-e[0]+Ae,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?we(r,i,e):r>0?(c=r-3*be,e[0]=c-1.8231301519518578e-10,e[1]=c-e[0]-1.8231301519518578e-10,3):(c=r+3*be,e[0]=c+1.8231301519518578e-10,e[1]=c-e[0]+1.8231301519518578e-10,-3):1075388923===i?we(r,i,e):r>0?(c=r-4*be,e[0]=c-Ne,e[1]=c-e[0]-Ne,4):(c=r+4*be,e[0]=c+Ne,e[1]=c-e[0]+Ne,-4);if(i<1094263291)return we(r,i,e);if(i>=2146435072)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return Wr[0]=r,Cr[Hr]}(r),c=Xr(i-((t=(i>>20)-1046)<<20|0),n),o=0;o<2;o++)_e[o]=0|c,c=16777216*(c-_e[o]);for(_e[2]=c,a=3;0===_e[a-1];)a-=1;return u=de(_e,Ee,t,a),r<0?(e[0]=-Ee[0],e[1]=-Ee[1],-u):(e[0]=Ee[0],e[1]=Ee[1],u)}var ke=[0,0];function Ie(r){var e;if(e=_r(r),(e&=2147483647)<=1072243195)return e<1044381696?1:Tr(r,0);if(e>=2146435072)return NaN;switch(3&Ue(r,ke)){case 0:return Tr(ke[0],ke[1]);case 1:return-Vr(ke[0],ke[1]);case 2:return-Tr(ke[0],ke[1]);default:return Vr(ke[0],ke[1])}}var Se=[0,0];function xe(r){var e;if(e=_r(r),(e&=2147483647)<=1072243195)return e<1045430272?r:Vr(r,0);if(e>=2146435072)return NaN;switch(3&Ue(r,Se)){case 0:return Vr(Se[0],Se[1]);case 1:return Tr(Se[0],Se[1]);case 2:return-Vr(Se[0],Se[1]);default:return-Tr(Se[0],Se[1])}}var Fe=3.141592653589793;var je=1.4616321449683622,Te=1.4616321449683622;function Oe(r){var e,n,t,i,a,o,u,c,f,s,l,p,v;if(P(r)||Z(r))return r;if(0===r)return R;if(r<0?(e=!0,r=-r):e=!1,r<8470329472543003e-37)return-xr(r);if(e){if(r>=4503599627370496)return R;if(f=function(r){var e,n;return P(r)||Z(r)?NaN:0===(e=X(n=r%2))||1===e?ne(0,n):e<.25?xe(Fe*n):e<.75?ne(Ie(Fe*(e=.5-e)),n):e<1.25?(n=ne(1,n)-n,xe(Fe*n)):e<1.75?-ne(Ie(Fe*(e-=1.5)),n):(n-=ne(2,n),xe(Fe*n))}(r),0===f)return R;n=xr(Fe/X(f*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(v=-xr(r),r>=je-1+.27?(l=1-r,t=0):r>=je-1-.27?(l=r-(Te-1),t=1):(l=r,t=2)):(v=0,r>=je+.27?(l=2-r,t=0):r>=je-.27?(l=r-Te,t=1):(l=r-1,t=2)),t){case 0:o=.07721566490153287+(p=l*l)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(p),a=p*(.3224670334241136+p*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(p)),v+=(u=l*o+a)-.5*l;break;case 1:o=.48383612272381005+(s=(p=l*l)*l)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(s),a=s*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(s)-.1475877229945939,i=.06462494023913339+s*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(s),v+=-.12148629053584961+(u=p*o-(-3638676997039505e-33-s*(a+l*i)));break;case 2:o=l*(l*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(l)-.07721566490153287),a=1+l*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(l),v+=-.5*l+o/a}else if(r<8)switch(t=function(r){return r<0?jr(r):Fr(r)}(r),u=(l=r-t)*(l*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(l)-.07721566490153287),c=1+l*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(l),v=.5*l+u/c,p=1,t){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:v+=xr(p*=l+2)}else r<0x400000000000000?(f=xr(r),s=.4189385332046727+(p=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(l=p*p),v=(r-.5)*(f-1)+s):v=r*(xr(r)-1);return e&&(v=n-v),v}var Ve=.6931471805599453;function $e(r,e){var n,t;return P(r)||P(e)||e<0?NaN:0===e?0===r?R:M:r<0||r===R?M:(n=(1-(t=e/2))*Ve+(e-1)*xr(r)-r*r/2,n-=Oe(t))}function Ge(r){return function(){return r}}function He(r){return P(r)?Ge(NaN):function(e){if(P(e))return NaN;return e===r?R:M}}function We(r){var e,n;return P(r)||r<0?Ge(NaN):0===r?He(0):(n=r/2,e=r-1,function(r){var t;if(P(r))return NaN;if(r<0||r===R)return M;return t=(1-n)*Ve+e*xr(r)-r*r/2,t-=Oe(n)})}L((function(r,e){return P(r)||P(e)?NaN:r===e?R:M}),"factory",He),L($e,"factory",We);export{$e as default,We as factory};
//# sourceMappingURL=mod.js.map
