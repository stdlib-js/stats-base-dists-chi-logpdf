// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,t,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!n(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(t=(-u).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(e),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var c=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,v=/e-(\d)$/,y=/^(\d+)$/,g=/^(\d+)e/,d=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=l.call(t,w,"$1e"),t=l.call(t,h,"e"),t=l.call(t,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=l.call(t,p,"e+0$1"),t=l.call(t,v,"e-0$1"),r.alternate&&(t=l.call(t,y,"$1."),t=l.call(t,g,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===s.call(r.specifier)?s.call(t):f.call(t)}function m(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var A=String.fromCharCode,N=isNaN,_=Array.isArray;function E(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function U(r){var e,n,t,a,o,c,f,s,l,p,v,y,g;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,s=0;s<r.length;s++)if(t=r[s],"string"==typeof t)c+=t;else{if(e=void 0!==t.precision,!(t=E(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(f=t.mapping),n=t.flags,l=0;l<n.length;l++)switch(a=n.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[f],10),f+=1,N(t.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[f],10),f+=1,N(t.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[f],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!N(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=N(o)?String(t.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=b(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(p=t.arg,v=t.width,y=t.padRight,g=void 0,(g=v-p.length)<0?p:p=y?p+m(g):m(g)+p)),c+=t.arg||"",f+=1}return c}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function S(r){var e,n,t,i;for(n=[],i=0,t=k.exec(r);t;)(e=r.slice(i,k.lastIndex-t[0].length)).length&&n.push(e),n.push(I(t)),i=k.lastIndex,t=k.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function x(r){var e,n;if("string"!=typeof r)throw new TypeError(x("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[S(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return U.apply(null,e)}var F=Object.prototype,j=F.toString,T=F.__defineGetter__,O=F.__defineSetter__,V=F.__lookupGetter__,$=F.__lookupSetter__;var G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===j.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===j.call(n))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(V.call(r,e)||$.call(r,e)?(t=r.__proto__,r.__proto__=F,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&T&&T.call(r,e,n.get),o&&O&&O.call(r,e,n.set),r};function H(r,e,n){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}function W(r){return r!=r}var C=Number.POSITIVE_INFINITY,L=Number.NEGATIVE_INFINITY;function P(r){return r===C||r===L}function R(r){return Math.abs(r)}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var Z=Object.prototype.toString;var X=Object.prototype.hasOwnProperty;var Y="function"==typeof Symbol?Symbol:void 0,z="function"==typeof Y?Y.toStringTag:"";var q=M&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return Z.call(r);n=r[z],a=z,e=null!=(i=r)&&X.call(i,a);try{r[z]=void 0}catch(e){return Z.call(r)}return t=Z.call(r),e?r[z]=n:delete r[z],t}:function(r){return Z.call(r)},B="function"==typeof Uint32Array;var D="function"==typeof Uint32Array?Uint32Array:null;var J,K="function"==typeof Uint32Array?Uint32Array:void 0;J=function(){var r,e,n;if("function"!=typeof D)return!1;try{e=new D(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(B&&n instanceof Uint32Array||"[object Uint32Array]"===q(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?K:function(){throw new Error("not implemented")};var Q=J,rr="function"==typeof Float64Array;var er="function"==typeof Float64Array?Float64Array:null;var nr,tr="function"==typeof Float64Array?Float64Array:void 0;nr=function(){var r,e,n;if("function"!=typeof er)return!1;try{e=new er([1,3.14,-3.14,NaN]),n=e,r=(rr&&n instanceof Float64Array||"[object Float64Array]"===q(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?tr:function(){throw new Error("not implemented")};var ir=nr,ar="function"==typeof Uint8Array;var or="function"==typeof Uint8Array?Uint8Array:null;var ur,cr="function"==typeof Uint8Array?Uint8Array:void 0;ur=function(){var r,e,n;if("function"!=typeof or)return!1;try{e=new or(e=[1,3.14,-3.14,256,257]),n=e,r=(ar&&n instanceof Uint8Array||"[object Uint8Array]"===q(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?cr:function(){throw new Error("not implemented")};var fr=ur,sr="function"==typeof Uint16Array;var lr="function"==typeof Uint16Array?Uint16Array:null;var pr,vr="function"==typeof Uint16Array?Uint16Array:void 0;pr=function(){var r,e,n;if("function"!=typeof lr)return!1;try{e=new lr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(sr&&n instanceof Uint16Array||"[object Uint16Array]"===q(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var yr,gr={uint16:pr,uint8:fr};(yr=new gr.uint16(1))[0]=4660;var dr=52===new gr.uint8(yr.buffer)[0],hr=!0===dr?1:0,wr=new ir(1),br=new Q(wr.buffer);function mr(r){return wr[0]=r,br[hr]}var Ar=!0===dr?1:0,Nr=new ir(1),_r=new Q(Nr.buffer);var Er=1023;var Ur=.6931471803691238,kr=1.9082149292705877e-10,Ir=0x40000000000000,Sr=.3333333333333333,xr=1048575,Fr=2146435072,jr=1048576,Tr=1072693248;function Or(r){var e,n,t,i,a,o,u,c,f,s,l,p;return 0===r?L:W(r)||r<0?NaN:(a=0,(n=mr(r))<jr&&(a-=54,n=mr(r*=Ir)),n>=Fr?r+r:(a+=(n>>20)-Er|0,a+=(c=(n&=xr)+614244&1048576|0)>>20|0,u=(r=function(r,e){return Nr[0]=r,_r[Ar]=e>>>0,Nr[0]}(r,n|c^Tr))-1,(xr&2+n)<3?0===u?0===a?0:a*Ur+a*kr:(o=u*u*(.5-Sr*u),0===a?u-o:a*Ur-(o-a*kr-u)):(c=n-398458|0,f=440401-n|0,i=(l=(p=(s=u/(2+u))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=t+i,(c|=f)>0?(e=.5*u*u,0===a?u-(e-s*(e+o)):a*Ur-(e-(s*(e+o)+a*kr)-u)):0===a?u-s*(u-o):a*Ur-(s*(u-o)-a*kr-u))))}var Vr=Math.floor,$r=Math.ceil;function Gr(r,e){var n,t,i,a;return i=(a=r*r)*a,t=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(n=.5*a))+(1-i-n+(a*t-r*e))}var Hr=-.16666666666666632,Wr=.00833333333332249,Cr=-.0001984126982985795,Lr=27557313707070068e-22,Pr=-2.5050760253406863e-8,Rr=1.58969099521155e-10;function Mr(r,e){var n,t,i;return n=Wr+(i=r*r)*(Cr+i*Lr)+i*(i*i)*(Pr+i*Rr),t=i*r,0===e?r+t*(Hr+i*n):r-(i*(.5*e-t*n)-e-t*Hr)}var Zr,Xr,Yr=2147483647,zr=2146435072,qr=1048575,Br=!0===dr?0:1,Dr=new ir(1),Jr=new Q(Dr.buffer);!0===dr?(Zr=1,Xr=0):(Zr=0,Xr=1);var Kr={HIGH:Zr,LOW:Xr},Qr=new ir(1),re=new Q(Qr.buffer),ee=Kr.HIGH,ne=Kr.LOW;function te(r,e){return re[ee]=r,re[ne]=e,Qr[0]}var ie,ae,oe=1023,ue=-1023,ce=-1074,fe=2147483648;!0===dr?(ie=1,ae=0):(ie=0,ae=1);var se={HIGH:ie,LOW:ae},le=new ir(1),pe=new Q(le.buffer),ve=se.HIGH,ye=se.LOW;function ge(r,e,n,t){return le[0]=r,e[t]=pe[ve],e[t+n]=pe[ye],e}function de(r){return ge(r,[0,0],1,0)}H(de,"assign",ge);var he=[0,0];function we(r,e){var n,t;return de.assign(r,he,1,0),n=he[0],n&=Yr,t=mr(e),te(n|=t&=fe,he[1])}var be=22250738585072014e-324,me=4503599627370496;function Ae(r,e,n,t){return W(r)||P(r)?(e[t]=r,e[t+n]=0,e):0!==r&&R(r)<be?(e[t]=r*me,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}H((function(r){return Ae(r,[0,0],1,0)}),"assign",Ae);var Ne=2220446049250313e-31,_e=2148532223,Ee=[0,0],Ue=[0,0];function ke(r,e){var n,t;return 0===e||0===r||W(r)||P(r)?r:(Ae(r,Ee,1,0),r=Ee[0],e+=Ee[1],e+=function(r){var e=mr(r);return(e=(e&zr)>>>20)-Er|0}(r),e<ce?we(0,r):e>oe?r<0?L:C:(e<=ue?(e+=52,t=Ne):t=1,de.assign(r,Ue,1,0),n=Ue[0],n&=_e,t*te(n|=e+Er<<20,Ue[1])))}function Ie(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var Se=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],xe=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Fe=16777216,je=5.960464477539063e-8,Te=Ie(20),Oe=Ie(20),Ve=Ie(20),$e=Ie(20);function Ge(r,e,n,t,i,a,o,u,c){var f,s,l,p,v,y,g,d,h;for(p=a,h=t[n],d=n,v=0;d>0;v++)s=je*h|0,$e[v]=h-Fe*s|0,h=t[d-1]+s,d-=1;if(h=ke(h,i),h-=8*Vr(.125*h),h-=g=0|h,l=0,i>0?(g+=v=$e[n-1]>>24-i,$e[n-1]-=v<<24-i,l=$e[n-1]>>23-i):0===i?l=$e[n-1]>>23:h>=.5&&(l=2),l>0){for(g+=1,f=0,v=0;v<n;v++)d=$e[v],0===f?0!==d&&(f=1,$e[v]=16777216-d):$e[v]=16777215-d;if(i>0)switch(i){case 1:$e[n-1]&=8388607;break;case 2:$e[n-1]&=4194303}2===l&&(h=1-h,0!==f&&(h-=ke(1,i)))}if(0===h){for(d=0,v=n-1;v>=a;v--)d|=$e[v];if(0===d){for(y=1;0===$e[a-y];y++);for(v=n+1;v<=n+y;v++){for(c[u+v]=Se[o+v],s=0,d=0;d<=u;d++)s+=r[d]*c[u+(v-d)];t[v]=s}return Ge(r,e,n+=y,t,i,a,o,u,c)}}if(0===h)for(n-=1,i-=24;0===$e[n];)n-=1,i-=24;else(h=ke(h,-i))>=Fe?(s=je*h|0,$e[n]=h-Fe*s|0,i+=24,$e[n+=1]=s):$e[n]=0|h;for(s=ke(1,i),v=n;v>=0;v--)t[v]=s*$e[v],s*=je;for(v=n;v>=0;v--){for(s=0,y=0;y<=p&&y<=n-v;y++)s+=xe[y]*t[v+y];Ve[n-v]=s}for(s=0,v=n;v>=0;v--)s+=Ve[v];for(e[0]=0===l?s:-s,s=Ve[0]-s,v=1;v<=n;v++)s+=Ve[v];return e[1]=0===l?s:-s,7&g}function He(r,e,n,t){var i,a,o,u,c,f,s;for(4,(a=(n-3)/24|0)<0&&(a=0),u=n-24*(a+1),f=a-(o=t-1),s=o+4,c=0;c<=s;c++)Te[c]=f<0?0:Se[f],f+=1;for(c=0;c<=4;c++){for(i=0,f=0;f<=o;f++)i+=r[f]*Te[o+(c-f)];Oe[c]=i}return 4,Ge(r,e,4,Oe,u,4,a,o,Te)}var We=Math.round,Ce=.6366197723675814,Le=1.5707963267341256,Pe=6077100506506192e-26,Re=6077100506303966e-26,Me=20222662487959506e-37,Ze=20222662487111665e-37,Xe=84784276603689e-45,Ye=2047;function ze(r,e,n){var t,i,a,o,u;return a=r-(t=We(r*Ce))*Le,o=t*Pe,u=e>>20|0,n[0]=a-o,u-(mr(n[0])>>20&Ye)>16&&(o=t*Me-((i=a)-(a=i-(o=t*Re))-o),n[0]=a-o,u-(mr(n[0])>>20&Ye)>49&&(o=t*Xe-((i=a)-(a=i-(o=t*Ze))-o),n[0]=a-o)),n[1]=a-n[0]-o,t}var qe=0,Be=16777216,De=1.5707963267341256,Je=6077100506506192e-26,Ke=2*Je,Qe=3*Je,rn=4*Je,en=598523,nn=1072243195,tn=1073928572,an=1074752122,on=1074977148,un=1075183036,cn=1075388923,fn=1075594811,sn=1094263291,ln=[0,0,0],pn=[0,0];function vn(r,e){var n,t,i,a,o,u,c;if((i=mr(r)&Yr|0)<=nn)return e[0]=r,e[1]=0,0;if(i<=an)return(i&qr)===en?ze(r,i,e):i<=tn?r>0?(c=r-De,e[0]=c-Je,e[1]=c-e[0]-Je,1):(c=r+De,e[0]=c+Je,e[1]=c-e[0]+Je,-1):r>0?(c=r-2*De,e[0]=c-Ke,e[1]=c-e[0]-Ke,2):(c=r+2*De,e[0]=c+Ke,e[1]=c-e[0]+Ke,-2);if(i<=fn)return i<=un?i===on?ze(r,i,e):r>0?(c=r-3*De,e[0]=c-Qe,e[1]=c-e[0]-Qe,3):(c=r+3*De,e[0]=c+Qe,e[1]=c-e[0]+Qe,-3):i===cn?ze(r,i,e):r>0?(c=r-4*De,e[0]=c-rn,e[1]=c-e[0]-rn,4):(c=r+4*De,e[0]=c+rn,e[1]=c-e[0]+rn,-4);if(i<sn)return ze(r,i,e);if(i>=zr)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return Dr[0]=r,Jr[Br]}(r),c=te(i-((t=(i>>20)-1046)<<20|0),n),o=0;o<2;o++)ln[o]=0|c,c=(c-ln[o])*Be;for(ln[2]=c,a=3;ln[a-1]===qe;)a-=1;return u=He(ln,pn,t,a),r<0?(e[0]=-pn[0],e[1]=-pn[1],-u):(e[0]=pn[0],e[1]=pn[1],u)}var yn=[0,0],gn=2147483647,dn=1072243195,hn=1044381696,wn=2146435072;function bn(r){var e;if(e=mr(r),(e&=gn)<=dn)return e<hn?1:Gr(r,0);if(e>=wn)return NaN;switch(3&vn(r,yn)){case 0:return Gr(yn[0],yn[1]);case 1:return-Mr(yn[0],yn[1]);case 2:return-Gr(yn[0],yn[1]);default:return Mr(yn[0],yn[1])}}var mn=1072243195,An=1045430272,Nn=[0,0];function _n(r){var e;if(e=mr(r),(e&=Yr)<=mn)return e<An?r:Mr(r,0);if(e>=zr)return NaN;switch(3&vn(r,Nn)){case 0:return Mr(Nn[0],Nn[1]);case 1:return Gr(Nn[0],Nn[1]);case 2:return-Mr(Nn[0],Nn[1]);default:return-Gr(Nn[0],Nn[1])}}var En=3.141592653589793;var Un=.07721566490153287,kn=.3224670334241136,In=1,Sn=-.07721566490153287,xn=.48383612272381005,Fn=-.1475877229945939,jn=.06462494023913339,Tn=-.07721566490153287,On=1,Vn=.4189385332046727,$n=1.4616321449683622,Gn=4503599627370496,Hn=0x400000000000000,Wn=8470329472543003e-37,Cn=1.4616321449683622,Ln=-.12148629053584961,Pn=-3638676997039505e-33;function Rn(r){var e,n,t,i,a,o,u,c,f,s,l,p,v;if(W(r)||P(r))return r;if(0===r)return C;if(r<0?(e=!0,r=-r):e=!1,r<Wn)return-Or(r);if(e){if(r>=Gn)return C;if(f=function(r){var e,n;return W(r)||P(r)?NaN:0===(e=R(n=r%2))||1===e?we(0,n):e<.25?_n(En*n):e<.75?we(bn(En*(e=.5-e)),n):e<1.25?(n=we(1,n)-n,_n(En*n)):e<1.75?-we(bn(En*(e-=1.5)),n):(n-=we(2,n),_n(En*n))}(r),0===f)return C;n=Or(En/R(f*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(v=-Or(r),r>=$n-1+.27?(l=1-r,t=0):r>=$n-1-.27?(l=r-(Cn-1),t=1):(l=r,t=2)):(v=0,r>=$n+.27?(l=2-r,t=0):r>=$n-.27?(l=r-Cn,t=1):(l=r-1,t=2)),t){case 0:o=Un+(p=l*l)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(p),a=p*(kn+p*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(p)),v+=(u=l*o+a)-.5*l;break;case 1:o=xn+(s=(p=l*l)*l)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(s),a=Fn+s*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(s),i=jn+s*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(s),v+=Ln+(u=p*o-(Pn-s*(a+l*i)));break;case 2:o=l*(Tn+l*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(l)),a=On+l*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(l),v+=-.5*l+o/a}else if(r<8)switch(t=function(r){return r<0?$r(r):Vr(r)}(r),u=(l=r-t)*(Sn+l*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(l)),c=In+l*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(l),v=.5*l+u/c,p=1,t){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:v+=Or(p*=l+2)}else r<Hn?(f=Or(r),s=Vn+(p=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(l=p*p),v=(r-.5)*(f-1)+s):v=r*(Or(r)-1);return e&&(v=n-v),v}var Mn=.6931471805599453;function Zn(r,e){var n,t;return W(r)||W(e)||e<0?NaN:0===e?0===r?C:L:r<0||r===C?L:(n=(1-(t=e/2))*Mn+(e-1)*Or(r)-r*r/2,n-=Rn(t))}function Xn(r){return function(){return r}}function Yn(r){return W(r)?Xn(NaN):function(e){if(W(e))return NaN;return e===r?C:L}}function zn(r){var e,n;return W(r)||r<0?Xn(NaN):0===r?Yn(0):(n=r/2,e=r-1,function(r){var t;if(W(r))return NaN;if(r<0||r===C)return L;return t=(1-n)*Mn+e*Or(r)-r*r/2,t-=Rn(n)})}H((function(r,e){return W(r)||W(e)?NaN:r===e?C:L}),"factory",Yn),H(Zn,"factory",zn);export{Zn as default,zn as factory};
//# sourceMappingURL=mod.js.map
