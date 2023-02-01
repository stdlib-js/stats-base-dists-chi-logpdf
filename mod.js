// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty,t=Object.prototype,e=t.toString,o=t.__defineGetter__,u=t.__defineSetter__,a=t.__lookupGetter__,i=t.__lookupSetter__;var f=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,f){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((l="value"in f)&&(a.call(r,n)||i.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=f.value,r.__proto__=c):r[n]=f.value),y="get"in f,v="set"in f,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,n,f.get),v&&u&&u.call(r,n,f.set),r};function c(r,n,t){f(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(r){return r!=r}var y=Number.POSITIVE_INFINITY,v=Number.NEGATIVE_INFINITY;function s(r){return r===y||r===v}function p(r){return Math.abs(r)}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var w=Object.prototype.toString;var N=Object.prototype.hasOwnProperty;var A="function"==typeof Symbol?Symbol.toStringTag:"";var _=b&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,u;if(null==r)return w.call(r);t=r[A],u=A,n=null!=(o=r)&&N.call(o,u);try{r[A]=void 0}catch(n){return w.call(r)}return e=w.call(r),n?r[A]=t:delete r[A],e}:function(r){return w.call(r)},d="function"==typeof Uint32Array;var h="function"==typeof Uint32Array?Uint32Array:null;var m,U="function"==typeof Uint32Array?Uint32Array:void 0;m=function(){var r,n,t;if("function"!=typeof h)return!1;try{n=new h(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(d&&t instanceof Uint32Array||"[object Uint32Array]"===_(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?U:function(){throw new Error("not implemented")};var g=m,j="function"==typeof Float64Array;var I="function"==typeof Float64Array?Float64Array:null;var O,S="function"==typeof Float64Array?Float64Array:void 0;O=function(){var r,n,t;if("function"!=typeof I)return!1;try{n=new I([1,3.14,-3.14,NaN]),t=n,r=(j&&t instanceof Float64Array||"[object Float64Array]"===_(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?S:function(){throw new Error("not implemented")};var E=O,F="function"==typeof Uint8Array;var H="function"==typeof Uint8Array?Uint8Array:null;var T,G="function"==typeof Uint8Array?Uint8Array:void 0;T=function(){var r,n,t;if("function"!=typeof H)return!1;try{n=new H(n=[1,3.14,-3.14,256,257]),t=n,r=(F&&t instanceof Uint8Array||"[object Uint8Array]"===_(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?G:function(){throw new Error("not implemented")};var P=T,k="function"==typeof Uint16Array;var x="function"==typeof Uint16Array?Uint16Array:null;var L,M="function"==typeof Uint16Array?Uint16Array:void 0;L=function(){var r,n,t;if("function"!=typeof x)return!1;try{n=new x(n=[1,3.14,-3.14,65536,65537]),t=n,r=(k&&t instanceof Uint16Array||"[object Uint16Array]"===_(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?M:function(){throw new Error("not implemented")};var V,W={uint16:L,uint8:P};(V=new W.uint16(1))[0]=4660;var Y=52===new W.uint8(V.buffer)[0],C=!0===Y?1:0,q=new E(1),z=new g(q.buffer);function B(r){return q[0]=r,z[C]}var D=!0===Y?1:0,J=new E(1),K=new g(J.buffer);var Q=.6931471803691238,R=1.9082149292705877e-10;function X(r){var n,t,e,o,u,a,i,f,c,y,s,p;return 0===r?v:l(r)||r<0?NaN:(u=0,(t=B(r))<1048576&&(u-=54,t=B(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-1023|0,u+=(f=(t&=1048575)+614244&1048576|0)>>20|0,i=(r=function(r,n){return J[0]=r,K[D]=n>>>0,J[0]}(r,t|1072693248^f))-1,(1048575&2+t)<3?0===i?0===u?0:u*Q+u*R:(a=i*i*(.5-.3333333333333333*i),0===u?i-a:u*Q-(a-u*R-i)):(f=t-398458|0,c=440401-t|0,o=(s=(p=(y=i/(2+i))*y)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(s),e=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(s),a=e+o,(f|=c)>0?(n=.5*i*i,0===u?i-(n-y*(n+a)):u*Q-(n-(y*(n+a)+u*R)-i)):0===u?i-y*(i-a):u*Q-(y*(i-a)-u*R-i))))}var Z=Math.floor,$=Math.ceil;function rr(r,n){var t,e,o,u;return o=(u=r*r)*u,e=u*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(u),e+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(u),(o=1-(t=.5*u))+(1-o-t+(u*e-r*n))}var nr=-.16666666666666632;function tr(r,n){var t,e,o;return t=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===n?r+e*(nr+o*t):r-(o*(.5*n-e*t)-n-e*nr)}var er,or,ur=!0===Y?0:1,ar=new E(1),ir=new g(ar.buffer);!0===Y?(er=1,or=0):(er=0,or=1);var fr={HIGH:er,LOW:or},cr=new E(1),lr=new g(cr.buffer),yr=fr.HIGH,vr=fr.LOW;function sr(r,n){return lr[yr]=r,lr[vr]=n,cr[0]}var pr,br;!0===Y?(pr=1,br=0):(pr=0,br=1);var wr={HIGH:pr,LOW:br},Nr=new E(1),Ar=new g(Nr.buffer),_r=wr.HIGH,dr=wr.LOW;function hr(r,n,t,e){return Nr[0]=r,n[e]=Ar[_r],n[e+t]=Ar[dr],n}function mr(r){return hr(r,[0,0],1,0)}c(mr,"assign",hr);var Ur=[0,0];function gr(r,n){var t,e;return mr.assign(r,Ur,1,0),t=Ur[0],t&=2147483647,e=B(n),sr(t|=e&=2147483648,Ur[1])}function jr(r,n,t,e){return l(r)||s(r)?(n[e]=r,n[e+t]=0,n):0!==r&&p(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return jr(r,[0,0],1,0)}),"assign",jr);var Ir=[0,0],Or=[0,0];function Sr(r,n){var t,e;return 0===n||0===r||l(r)||s(r)?r:(jr(r,Ir,1,0),n+=Ir[1],n+=function(r){var n=B(r);return(n=(2146435072&n)>>>20)-1023|0}(r=Ir[0]),n<-1074?gr(0,r):n>1023?r<0?v:y:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,mr.assign(r,Or,1,0),t=Or[0],t&=2148532223,e*sr(t|=n+1023<<20,Or[1])))}function Er(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Fr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Hr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Tr=5.960464477539063e-8,Gr=Er(20),Pr=Er(20),kr=Er(20),xr=Er(20);function Lr(r,n,t,e,o,u,a,i,f){var c,l,y,v,s,p,b,w,N;for(v=u,N=e[t],w=t,s=0;w>0;s++)l=Tr*N|0,xr[s]=N-16777216*l|0,N=e[w-1]+l,w-=1;if(N=Sr(N,o),N-=8*Z(.125*N),N-=b=0|N,y=0,o>0?(b+=s=xr[t-1]>>24-o,xr[t-1]-=s<<24-o,y=xr[t-1]>>23-o):0===o?y=xr[t-1]>>23:N>=.5&&(y=2),y>0){for(b+=1,c=0,s=0;s<t;s++)w=xr[s],0===c?0!==w&&(c=1,xr[s]=16777216-w):xr[s]=16777215-w;if(o>0)switch(o){case 1:xr[t-1]&=8388607;break;case 2:xr[t-1]&=4194303}2===y&&(N=1-N,0!==c&&(N-=Sr(1,o)))}if(0===N){for(w=0,s=t-1;s>=u;s--)w|=xr[s];if(0===w){for(p=1;0===xr[u-p];p++);for(s=t+1;s<=t+p;s++){for(f[i+s]=Fr[a+s],l=0,w=0;w<=i;w++)l+=r[w]*f[i+(s-w)];e[s]=l}return Lr(r,n,t+=p,e,o,u,a,i,f)}}if(0===N)for(t-=1,o-=24;0===xr[t];)t-=1,o-=24;else(N=Sr(N,-o))>=16777216?(l=Tr*N|0,xr[t]=N-16777216*l|0,o+=24,xr[t+=1]=l):xr[t]=0|N;for(l=Sr(1,o),s=t;s>=0;s--)e[s]=l*xr[s],l*=Tr;for(s=t;s>=0;s--){for(l=0,p=0;p<=v&&p<=t-s;p++)l+=Hr[p]*e[s+p];kr[t-s]=l}for(l=0,s=t;s>=0;s--)l+=kr[s];for(n[0]=0===y?l:-l,l=kr[0]-l,s=1;s<=t;s++)l+=kr[s];return n[1]=0===y?l:-l,7&b}function Mr(r,n,t,e){var o,u,a,i,f,c,l;for(4,(u=(t-3)/24|0)<0&&(u=0),i=t-24*(u+1),c=u-(a=e-1),l=a+4,f=0;f<=l;f++)Gr[f]=c<0?0:Fr[c],c+=1;for(f=0;f<=4;f++){for(o=0,c=0;c<=a;c++)o+=r[c]*Gr[a+(f-c)];Pr[f]=o}return 4,Lr(r,n,4,Pr,i,4,u,a,Gr)}var Vr=Math.round;function Wr(r,n,t){var e,o,u,a,i;return u=r-1.5707963267341256*(e=Vr(.6366197723675814*r)),a=6077100506506192e-26*e,i=n>>20|0,t[0]=u-a,i-(B(t[0])>>20&2047)>16&&(a=20222662487959506e-37*e-((o=u)-(u=o-(a=6077100506303966e-26*e))-a),t[0]=u-a,i-(B(t[0])>>20&2047)>49&&(a=84784276603689e-45*e-((o=u)-(u=o-(a=20222662487111665e-37*e))-a),t[0]=u-a)),t[1]=u-t[0]-a,e}var Yr=1.5707963267341256,Cr=6077100506506192e-26,qr=2*Cr,zr=4*Cr,Br=[0,0,0],Dr=[0,0];function Jr(r,n){var t,e,o,u,a,i,f;if((o=2147483647&B(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Wr(r,o,n):o<=1073928572?r>0?(f=r-Yr,n[0]=f-Cr,n[1]=f-n[0]-Cr,1):(f=r+Yr,n[0]=f+Cr,n[1]=f-n[0]+Cr,-1):r>0?(f=r-2*Yr,n[0]=f-qr,n[1]=f-n[0]-qr,2):(f=r+2*Yr,n[0]=f+qr,n[1]=f-n[0]+qr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Wr(r,o,n):r>0?(f=r-3*Yr,n[0]=f-1.8231301519518578e-10,n[1]=f-n[0]-1.8231301519518578e-10,3):(f=r+3*Yr,n[0]=f+1.8231301519518578e-10,n[1]=f-n[0]+1.8231301519518578e-10,-3):1075388923===o?Wr(r,o,n):r>0?(f=r-4*Yr,n[0]=f-zr,n[1]=f-n[0]-zr,4):(f=r+4*Yr,n[0]=f+zr,n[1]=f-n[0]+zr,-4);if(o<1094263291)return Wr(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return ar[0]=r,ir[ur]}(r),f=sr(o-((e=(o>>20)-1046)<<20|0),t),a=0;a<2;a++)Br[a]=0|f,f=16777216*(f-Br[a]);for(Br[2]=f,u=3;0===Br[u-1];)u-=1;return i=Mr(Br,Dr,e,u),r<0?(n[0]=-Dr[0],n[1]=-Dr[1],-i):(n[0]=Dr[0],n[1]=Dr[1],i)}var Kr=[0,0];function Qr(r){var n;if(n=B(r),(n&=2147483647)<=1072243195)return n<1044381696?1:rr(r,0);if(n>=2146435072)return NaN;switch(3&Jr(r,Kr)){case 0:return rr(Kr[0],Kr[1]);case 1:return-tr(Kr[0],Kr[1]);case 2:return-rr(Kr[0],Kr[1]);default:return tr(Kr[0],Kr[1])}}var Rr=[0,0];function Xr(r){var n;if(n=B(r),(n&=2147483647)<=1072243195)return n<1045430272?r:tr(r,0);if(n>=2146435072)return NaN;switch(3&Jr(r,Rr)){case 0:return tr(Rr[0],Rr[1]);case 1:return rr(Rr[0],Rr[1]);case 2:return-tr(Rr[0],Rr[1]);default:return-rr(Rr[0],Rr[1])}}var Zr=3.141592653589793;var $r=1.4616321449683622,rn=1.4616321449683622;function nn(r){var n,t,e,o,u,a,i,f,c,v,b,w,N;if(l(r)||s(r))return r;if(0===r)return y;if(r<0?(n=!0,r=-r):n=!1,r<8470329472543003e-37)return-X(r);if(n){if(r>=4503599627370496)return y;if(c=function(r){var n,t;return l(r)||s(r)?NaN:0===(n=p(t=r%2))||1===n?gr(0,t):n<.25?Xr(Zr*t):n<.75?gr(Qr(Zr*(n=.5-n)),t):n<1.25?(t=gr(1,t)-t,Xr(Zr*t)):n<1.75?-gr(Qr(Zr*(n-=1.5)),t):(t-=gr(2,t),Xr(Zr*t))}(r),0===c)return y;t=X(Zr/p(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(N=-X(r),r>=$r-1+.27?(b=1-r,e=0):r>=$r-1-.27?(b=r-(rn-1),e=1):(b=r,e=2)):(N=0,r>=$r+.27?(b=2-r,e=0):r>=$r-.27?(b=r-rn,e=1):(b=r-1,e=2)),e){case 0:a=.07721566490153287+(w=b*b)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(w),u=w*(.3224670334241136+w*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(w)),N+=(i=b*a+u)-.5*b;break;case 1:a=.48383612272381005+(v=(w=b*b)*b)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(v),u=v*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(v)-.1475877229945939,o=.06462494023913339+v*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(v),N+=-.12148629053584961+(i=w*a-(-3638676997039505e-33-v*(u+b*o)));break;case 2:a=b*(b*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(b)-.07721566490153287),u=1+b*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(b),N+=-.5*b+a/u}else if(r<8)switch(e=function(r){return r<0?$(r):Z(r)}(r),i=(b=r-e)*(b*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(b)-.07721566490153287),f=1+b*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(b),N=.5*b+i/f,w=1,e){case 7:w*=b+6;case 6:w*=b+5;case 5:w*=b+4;case 4:w*=b+3;case 3:N+=X(w*=b+2)}else r<0x400000000000000?(c=X(r),v=.4189385332046727+(w=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(b=w*w),N=(r-.5)*(c-1)+v):N=r*(X(r)-1);return n&&(N=t-N),N}var tn=.6931471805599453;function en(r,n){var t,e;return l(r)||l(n)||n<0?NaN:0===n?0===r?y:v:r<0||r===y?v:(t=(1-(e=n/2))*tn+(n-1)*X(r)-r*r/2,t-=nn(e))}function on(r){return function(){return r}}function un(r){return l(r)?on(NaN):function(n){if(l(n))return NaN;return n===r?y:v}}function an(r){var n,t;return l(r)||r<0?on(NaN):0===r?un(0):(t=r/2,n=r-1,function(r){var e;if(l(r))return NaN;if(r<0||r===y)return v;return e=(1-t)*tn+n*X(r)-r*r/2,e-=nn(t)})}c((function(r,n){return l(r)||l(n)?NaN:r===n?y:v}),"factory",un),c(en,"factory",an);export{en as default,an as factory};
//# sourceMappingURL=mod.js.map
