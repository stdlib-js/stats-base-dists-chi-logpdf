// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,e=t.toString,o=t.__defineGetter__,u=t.__defineSetter__,f=t.__lookupGetter__,i=t.__lookupSetter__,a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(f.call(r,n)||i.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),y="get"in a,v="set"in a,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,n,a.get),v&&u&&u.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function l(r){return r!=r}var y=Number.POSITIVE_INFINITY,v=Number.NEGATIVE_INFINITY;function p(r){return r===y||r===v}function s(r){return Math.abs(r)}var b,w="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),d=Object.prototype.toString,N=Object.prototype.hasOwnProperty,A="function"==typeof Symbol?Symbol.toStringTag:"",_=w&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,u;if(null==r)return d.call(r);t=r[A],u=A,n=null!=(o=r)&&N.call(o,u);try{r[A]=void 0}catch(n){return d.call(r)}return e=d.call(r),n?r[A]=t:delete r[A],e}:function(r){return d.call(r)},h="function"==typeof Uint32Array,m="function"==typeof Uint32Array?Uint32Array:null,U="function"==typeof Uint32Array?Uint32Array:void 0;b=function(){var r,n,t;if("function"!=typeof m)return!1;try{n=new m(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(h&&t instanceof Uint32Array||"[object Uint32Array]"===_(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?U:function(){throw new Error("not implemented")};var g,j=b,I="function"==typeof Float64Array,O="function"==typeof Float64Array?Float64Array:null,S="function"==typeof Float64Array?Float64Array:void 0;g=function(){var r,n,t;if("function"!=typeof O)return!1;try{n=new O([1,3.14,-3.14,NaN]),t=n,r=(I&&t instanceof Float64Array||"[object Float64Array]"===_(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?S:function(){throw new Error("not implemented")};var E,F=g,T="function"==typeof Uint8Array,H="function"==typeof Uint8Array?Uint8Array:null,G="function"==typeof Uint8Array?Uint8Array:void 0;E=function(){var r,n,t;if("function"!=typeof H)return!1;try{n=new H(n=[1,3.14,-3.14,256,257]),t=n,r=(T&&t instanceof Uint8Array||"[object Uint8Array]"===_(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?G:function(){throw new Error("not implemented")};var P,k=E,x="function"==typeof Uint16Array,L="function"==typeof Uint16Array?Uint16Array:null,M="function"==typeof Uint16Array?Uint16Array:void 0;P=function(){var r,n,t;if("function"!=typeof L)return!1;try{n=new L(n=[1,3.14,-3.14,65536,65537]),t=n,r=(x&&t instanceof Uint16Array||"[object Uint16Array]"===_(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?M:function(){throw new Error("not implemented")};var V,W={uint16:P,uint8:k};(V=new W.uint16(1))[0]=4660;var Y=52===new W.uint8(V.buffer)[0],C=!0===Y?1:0,q=new F(1),z=new j(q.buffer);function B(r){return q[0]=r,z[C]}var D=!0===Y?1:0,J=new F(1),K=new j(J.buffer),Q=1023,R=.6931471803691238,X=1.9082149292705877e-10,Z=1048575;function $(r){var n,t,e,o,u,f,i,a,c,y,p,s;return 0===r?v:l(r)||r<0?NaN:(u=0,(t=B(r))<1048576&&(u-=54,t=B(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-Q|0,u+=(a=614244+(t&=Z)&1048576|0)>>20|0,i=(r=function(r,n){return J[0]=r,K[D]=n>>>0,J[0]}(r,t|1072693248^a))-1,(Z&2+t)<3?0===i?0===u?0:u*R+u*X:(f=i*i*(.5-.3333333333333333*i),0===u?i-f:u*R-(f-u*X-i)):(a=t-398458|0,c=440401-t|0,o=(p=(s=(y=i/(2+i))*y)*s)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=s*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),f=e+o,(a|=c)>0?(n=.5*i*i,0===u?i-(n-y*(n+f)):u*R-(n-(y*(n+f)+u*X)-i)):0===u?i-y*(i-f):u*R-(y*(i-f)-u*X-i))))}var rr=Math.floor,nr=Math.ceil;function tr(r,n){var t,e,o,u;return o=(u=r*r)*u,e=u*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(u),e+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(u),(o=1-(t=.5*u))+(1-o-t+(u*e-r*n))}var er=-.16666666666666632;function or(r,n){var t,e,o;return t=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===n?r+e*(er+o*t):r-(o*(.5*n-e*t)-n-e*er)}var ur,fr,ir=!0===Y?0:1,ar=new F(1),cr=new j(ar.buffer);!0===Y?(ur=1,fr=0):(ur=0,fr=1);var lr,yr,vr={HIGH:ur,LOW:fr},pr=new F(1),sr=new j(pr.buffer),br=vr.HIGH,wr=vr.LOW;function dr(r,n){return sr[br]=r,sr[wr]=n,pr[0]}!0===Y?(lr=1,yr=0):(lr=0,yr=1);var Nr={HIGH:lr,LOW:yr},Ar=new F(1),_r=new j(Ar.buffer),hr=Nr.HIGH,mr=Nr.LOW;function Ur(r,n){return Ar[0]=n,r[0]=_r[hr],r[1]=_r[mr],r}function gr(r,n){return 1===arguments.length?Ur([0,0],r):Ur(r,n)}var jr=[0,0];function Ir(r,n){var t,e;return gr(jr,r),t=jr[0],t&=2147483647,e=B(n),dr(t|=e&=2147483648,jr[1])}function Or(r,n,t,e){return l(r)||p(r)?(n[e]=r,n[e+t]=0,n):0!==r&&s(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return Or(r,[0,0],1,0)}),"assign",Or);var Sr=[0,0],Er=[0,0];function Fr(r,n){var t,e;return 0===n||0===r||l(r)||p(r)?r:(Or(r,Sr,1,0),n+=Sr[1],n+=function(r){var n=B(r);return(n=(2146435072&n)>>>20)-Q|0}(r=Sr[0]),n<-1074?Ir(0,r):n>1023?r<0?v:y:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,gr(Er,r),t=Er[0],t&=2148532223,e*dr(t|=n+Q<<20,Er[1])))}function Tr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Hr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Gr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Pr=16777216,kr=5.960464477539063e-8,xr=Tr(20),Lr=Tr(20),Mr=Tr(20),Vr=Tr(20);function Wr(r,n,t,e,o,u,f,i,a){var c,l,y,v,p,s,b,w,d;for(v=u,d=e[t],w=t,p=0;w>0;p++)l=kr*d|0,Vr[p]=d-Pr*l|0,d=e[w-1]+l,w-=1;if(d=Fr(d,o),d-=8*rr(.125*d),d-=b=0|d,y=0,o>0?(b+=p=Vr[t-1]>>24-o,Vr[t-1]-=p<<24-o,y=Vr[t-1]>>23-o):0===o?y=Vr[t-1]>>23:d>=.5&&(y=2),y>0){for(b+=1,c=0,p=0;p<t;p++)w=Vr[p],0===c?0!==w&&(c=1,Vr[p]=16777216-w):Vr[p]=16777215-w;if(o>0)switch(o){case 1:Vr[t-1]&=8388607;break;case 2:Vr[t-1]&=4194303}2===y&&(d=1-d,0!==c&&(d-=Fr(1,o)))}if(0===d){for(w=0,p=t-1;p>=u;p--)w|=Vr[p];if(0===w){for(s=1;0===Vr[u-s];s++);for(p=t+1;p<=t+s;p++){for(a[i+p]=Hr[f+p],l=0,w=0;w<=i;w++)l+=r[w]*a[i+(p-w)];e[p]=l}return Wr(r,n,t+=s,e,o,u,f,i,a)}}if(0===d)for(t-=1,o-=24;0===Vr[t];)t-=1,o-=24;else(d=Fr(d,-o))>=Pr?(l=kr*d|0,Vr[t]=d-Pr*l|0,o+=24,Vr[t+=1]=l):Vr[t]=0|d;for(l=Fr(1,o),p=t;p>=0;p--)e[p]=l*Vr[p],l*=kr;for(p=t;p>=0;p--){for(l=0,s=0;s<=v&&s<=t-p;s++)l+=Gr[s]*e[p+s];Mr[t-p]=l}for(l=0,p=t;p>=0;p--)l+=Mr[p];for(n[0]=0===y?l:-l,l=Mr[0]-l,p=1;p<=t;p++)l+=Mr[p];return n[1]=0===y?l:-l,7&b}function Yr(r,n,t,e){var o,u,f,i,a,c,l;for((u=(t-3)/24|0)<0&&(u=0),i=t-24*(u+1),c=u-(f=e-1),l=f+4,a=0;a<=l;a++)xr[a]=c<0?0:Hr[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=f;c++)o+=r[c]*xr[f+(a-c)];Lr[a]=o}return Wr(r,n,4,Lr,i,4,u,f,xr)}var Cr=Math.round;function qr(r,n,t){var e,o,u,f,i;return u=r-1.5707963267341256*(e=Cr(.6366197723675814*r)),f=6077100506506192e-26*e,i=n>>20|0,t[0]=u-f,i-(B(t[0])>>20&2047)>16&&(f=20222662487959506e-37*e-((o=u)-(u=o-(f=6077100506303966e-26*e))-f),t[0]=u-f,i-(B(t[0])>>20&2047)>49&&(f=84784276603689e-45*e-((o=u)-(u=o-(f=20222662487111665e-37*e))-f),t[0]=u-f)),t[1]=u-t[0]-f,e}var zr=1.5707963267341256,Br=6077100506506192e-26,Dr=2*Br,Jr=3*Br,Kr=4*Br,Qr=[0,0,0],Rr=[0,0];function Xr(r,n){var t,e,o,u,f,i,a;if((o=2147483647&B(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?qr(r,o,n):o<=1073928572?r>0?(a=r-zr,n[0]=a-Br,n[1]=a-n[0]-Br,1):(a=r+zr,n[0]=a+Br,n[1]=a-n[0]+Br,-1):r>0?(a=r-2*zr,n[0]=a-Dr,n[1]=a-n[0]-Dr,2):(a=r+2*zr,n[0]=a+Dr,n[1]=a-n[0]+Dr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?qr(r,o,n):r>0?(a=r-3*zr,n[0]=a-Jr,n[1]=a-n[0]-Jr,3):(a=r+3*zr,n[0]=a+Jr,n[1]=a-n[0]+Jr,-3):1075388923===o?qr(r,o,n):r>0?(a=r-4*zr,n[0]=a-Kr,n[1]=a-n[0]-Kr,4):(a=r+4*zr,n[0]=a+Kr,n[1]=a-n[0]+Kr,-4);if(o<1094263291)return qr(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return ar[0]=r,cr[ir]}(r),a=dr(o-((e=(o>>20)-1046)<<20|0),t),f=0;f<2;f++)Qr[f]=0|a,a=16777216*(a-Qr[f]);for(Qr[2]=a,u=3;0===Qr[u-1];)u-=1;return i=Yr(Qr,Rr,e,u),r<0?(n[0]=-Rr[0],n[1]=-Rr[1],-i):(n[0]=Rr[0],n[1]=Rr[1],i)}var Zr=[0,0];function $r(r){var n;if(n=B(r),(n&=2147483647)<=1072243195)return n<1044381696?1:tr(r,0);if(n>=2146435072)return NaN;switch(3&Xr(r,Zr)){case 0:return tr(Zr[0],Zr[1]);case 1:return-or(Zr[0],Zr[1]);case 2:return-tr(Zr[0],Zr[1]);default:return or(Zr[0],Zr[1])}}var rn=[0,0];function nn(r){var n;if(n=B(r),(n&=2147483647)<=1072243195)return n<1045430272?r:or(r,0);if(n>=2146435072)return NaN;switch(3&Xr(r,rn)){case 0:return or(rn[0],rn[1]);case 1:return tr(rn[0],rn[1]);case 2:return-or(rn[0],rn[1]);default:return-tr(rn[0],rn[1])}}var tn=3.141592653589793,en=1.4616321449683622,on=1.4616321449683622;function un(r){var n,t,e,o,u,f,i,a,c,v,b,w,d;if(l(r)||p(r))return r;if(0===r)return y;if(r<0?(n=!0,r=-r):n=!1,r<8470329472543003e-37)return-$(r);if(n){if(r>=4503599627370496)return y;if(c=function(r){var n,t;return l(r)||p(r)?NaN:0===(n=s(t=r%2))||1===n?Ir(0,t):n<.25?nn(tn*t):n<.75?Ir($r(tn*(n=.5-n)),t):n<1.25?(t=Ir(1,t)-t,nn(tn*t)):n<1.75?-Ir($r(tn*(n-=1.5)),t):(t-=Ir(2,t),nn(tn*t))}(r),0===c)return y;t=$(tn/s(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(d=-$(r),r>=en-1+.27?(b=1-r,e=0):r>=en-1-.27?(b=r-(on-1),e=1):(b=r,e=2)):(d=0,r>=en+.27?(b=2-r,e=0):r>=en-.27?(b=r-on,e=1):(b=r-1,e=2)),e){case 0:f=.07721566490153287+(w=b*b)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(w),u=w*(.3224670334241136+w*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(w)),d+=(i=b*f+u)-.5*b;break;case 1:f=.48383612272381005+(v=(w=b*b)*b)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(v),u=v*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(v)-.1475877229945939,o=.06462494023913339+v*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(v),d+=(i=w*f-(-3638676997039505e-33-v*(u+b*o)))-.12148629053584961;break;case 2:f=b*(b*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(b)-.07721566490153287),u=1+b*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(b),d+=-.5*b+f/u}else if(r<8)switch(e=function(r){return r<0?nr(r):rr(r)}(r),i=(b=r-e)*(b*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(b)-.07721566490153287),a=1+b*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(b),d=.5*b+i/a,w=1,e){case 7:w*=b+6;case 6:w*=b+5;case 5:w*=b+4;case 4:w*=b+3;case 3:d+=$(w*=b+2)}else r<0x400000000000000?(c=$(r),v=.4189385332046727+(w=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(b=w*w),d=(r-.5)*(c-1)+v):d=r*($(r)-1);return n&&(d=t-d),d}var fn=.6931471805599453;function an(r,n){var t,e;return l(r)||l(n)||n<0?NaN:0===n?0===r?y:v:r<0||r===y?v:(t=(1-(e=n/2))*fn+(n-1)*$(r)-r*r/2,t-=un(e))}function cn(r){return function(){return r}}function ln(r){return l(r)?cn(NaN):function(n){return l(n)?NaN:n===r?y:v}}return c((function(r,n){return l(r)||l(n)?NaN:r===n?y:v}),"factory",ln),c(an,"factory",(function(r){var n,t;return l(r)||r<0?cn(NaN):0===r?ln(0):(t=r/2,n=r-1,function(r){var e;return l(r)?NaN:r<0||r===y?v:(e=(1-t)*fn+n*$(r)-r*r/2,e-=un(t))})})),an},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).logpdf=n();
//# sourceMappingURL=index.js.map
