"use strict";(self.webpackChunkthais_basso_nutricionista_funcional_e_comportamental=self.webpackChunkthais_basso_nutricionista_funcional_e_comportamental||[]).push([[906],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,r=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,l=new RegExp("^"+s.source),i=new RegExp(s.source+r.source,"gu"),o=new RegExp("\\d+"+r.source,"gu"),c=(e,r)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(r={pascalCase:!1,preserveConsecutiveUppercase:!1,...r},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===r.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(r.locale),c=!1===r.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(r.locale);if(1===e.length)return r.pascalCase?c(e):s(e);return e!==s(e)&&(e=((e,n,r)=>{let s=!1,l=!1,i=!1;for(let o=0;o<e.length;o++){const c=e[o];s&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),s=!1,i=l,l=!0,o++):l&&i&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),i=l,l=!1,s=!0):(s=n(c)===c&&r(c)!==c,i=l,l=r(c)===c&&n(c)!==c)}return e})(e,s,c)),e=e.replace(l,""),e=r.preserveConsecutiveUppercase?((e,t)=>(n.lastIndex=0,e.replace(n,(e=>t(e)))))(e,s):s(e),r.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(i.lastIndex=0,o.lastIndex=0,e.replace(i,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{G:function(){return P},L:function(){return f},M:function(){return x},P:function(){return N},_:function(){return i},a:function(){return l},b:function(){return u},c:function(){return c},g:function(){return d},h:function(){return o}});var n=a(7294),r=(a(3204),a(5697)),s=a.n(r);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t.indexOf(a=s[n])>=0||(r[a]=e[a]);return r}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function m(e,t,a){const n={};let r="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:n}}function u(e,t,a,n,r){return void 0===r&&(r={}),l({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:l({},r,{opacity:t?1:0})})}function d(e,t,a,n,r,s,i,o){const c={};s&&(c.backgroundColor=s,"fixed"===a?(c.width=n,c.height=r,c.backgroundColor=s,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),i&&(c.objectFit=i),o&&(c.objectPosition=o);const m=l({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:l({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return m}const p=["children"],g=function(e){let{layout:t,width:a,height:r}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+r+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},f=function(e){let{children:t}=e,a=i(e,p);return n.createElement(n.Fragment,null,n.createElement(g,l({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],b=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:r,alt:s="",shouldLoad:o}=e,c=i(e,h);return n.createElement("img",l({},c,{decoding:"async",loading:r,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:s}))},E=function(e){let{fallback:t,sources:a=[],shouldLoad:r=!0}=e,s=i(e,b);const o=s.sizes||(null==t?void 0:t.sizes),c=n.createElement(y,l({},s,t,{sizes:o,shouldLoad:r}));return a.length?n.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return n.createElement("source",{key:t+"-"+s+"-"+a,type:s,media:t,srcSet:r?a:void 0,"data-srcset":r?void 0:a,sizes:o})})),c):c};var v;y.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},E.displayName="Picture",E.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};const w=["fallback"],N=function(e){let{fallback:t}=e,a=i(e,w);return t?n.createElement(E,l({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",l({},a))};N.displayName="Placeholder",N.propTypes={fallback:r.string,sources:null==(v=E.propTypes)?void 0:v.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const x=function(e){return n.createElement(n.Fragment,null,n.createElement(E,l({},e)),n.createElement("noscript",null,n.createElement(E,l({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=E.propTypes;const k=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],L=["style","className"],C=e=>e.replace(/\n/g,""),S=function(e,t,a){for(var n=arguments.length,r=new Array(n>3?n-3:0),l=3;l<n;l++)r[l-3]=arguments[l];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(r)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},I={image:s().object.isRequired,alt:S},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],_=["style","className"],j=new Set;let A,R;const O=function(e){let{as:t="div",image:r,style:s,backgroundColor:c,className:u,class:d,onStartLoad:p,onLoad:g,onError:f}=e,h=i(e,T);const{width:b,height:y,layout:E}=r,v=m(b,y,E),{style:w,className:N}=v,x=i(v,_),k=(0,n.useRef)(),L=(0,n.useMemo)((()=>JSON.stringify(r.images)),[r.images]);d&&(u=d);const C=function(e,t,a){let n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(E,b,y);return(0,n.useEffect)((()=>{A||(A=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return R=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=k.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void j.add(L);if(R&&j.has(L))return;let t,n;return A.then((e=>{let{renderImageToString:a,swapPlaceholderImage:i}=e;k.current&&(k.current.innerHTML=a(l({isLoading:!0,isLoaded:j.has(L),image:r},h)),j.has(L)||(t=requestAnimationFrame((()=>{k.current&&(n=i(k.current,L,j,s,p,g,f))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[r]),(0,n.useLayoutEffect)((()=>{j.has(L)&&R&&(k.current.innerHTML=R(l({isLoading:j.has(L),isLoaded:j.has(L),image:r},h)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[r]),(0,n.createElement)(t,l({},x,{style:l({},w,s,{backgroundColor:c}),className:N+(u?" "+u:""),ref:k,dangerouslySetInnerHTML:{__html:C},suppressHydrationWarning:!0}))},P=(0,n.memo)((function(e){return e.image?(0,n.createElement)(O,e):null}));P.propTypes=I,P.displayName="GatsbyImage";const W=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function q(e){return function(t){let{src:a,__imageData:r,__error:s}=t,o=i(t,W);return s&&console.warn(s),r?n.createElement(e,l({image:r},o)):(console.warn("Image not loaded",a),null)}}const M=q((function(e){let{as:t="div",className:a,class:r,style:s,image:o,loading:c="lazy",imgClassName:p,imgStyle:g,backgroundColor:h,objectFit:b,objectPosition:y}=e,E=i(e,k);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;r&&(a=r),g=l({objectFit:b,objectPosition:y,backgroundColor:h},g);const{width:v,height:w,layout:S,images:I,placeholder:T,backgroundColor:_}=o,j=m(v,w,S),{style:A,className:R}=j,O=i(j,L),P={fallback:void 0,sources:[]};return I.fallback&&(P.fallback=l({},I.fallback,{srcSet:I.fallback.srcSet?C(I.fallback.srcSet):void 0})),I.sources&&(P.sources=I.sources.map((e=>l({},e,{srcSet:C(e.srcSet)})))),n.createElement(t,l({},O,{style:l({},A,s,{backgroundColor:h}),className:R+(a?" "+a:"")}),n.createElement(f,{layout:S,width:v,height:w},n.createElement(N,l({},d(T,!1,S,v,w,_,b,y))),n.createElement(x,l({"data-gatsby-image-ssr":"",className:p},E,u("eager"===c,!1,P,c,g)))))})),F=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},z=new Set(["fixed","fullWidth","constrained"]),U={src:s().string.isRequired,alt:S,width:F,height:F,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!z.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};M.displayName="StaticImage",M.propTypes=U;const B=q(P);B.displayName="StaticImage",B.propTypes=U},2819:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),r=a(6082);function s(e){return n.createElement("section",{className:"action-banner my-5"},n.createElement(r.W2,null,n.createElement("div",{className:"action-banner-box text-center white"},n.createElement("div",{className:"d-flex justify-content-center align-items-center flex-column"},n.createElement("div",{className:"action-banner-image-container mb-5"},e.image),n.createElement(r.NZ,{className:"action-banner-title"},e.text),n.createElement("div",{className:"text-center"},n.createElement("p",{className:"action-banner-content",style:{display:e.content?"block":"none"}},e.content),n.createElement(r.Jd,{href:e.href||null,text:e.callToAction||null,className:"mt-4"}))))))}},6557:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),r=a(6082);function s(e){return n.createElement("header",{className:""+(e.className||"")},n.createElement(r.W2,{className:"py-3 justify-content-center"},e.children&&e.children,n.createElement(r.V1,{title:e.title,subtitle:e.subtitle}),n.createElement("div",{class:"mouse-container scroll-animation"},n.createElement("div",{class:"mouse"},n.createElement("span",{class:"scroll-down"})))))}},7461:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),r=a(1883),s=a(6082);function l(e){return n.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light fixed-top "+e.page},n.createElement(s.W2,{className:"justify-content-between"},n.createElement("button",{className:"navbar-toggler",type:"button","data-mdb-toggle":"collapse","data-mdb-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.createElement("i",{className:"fas fa-bars"})),n.createElement(r.rU,{to:"/",alt:"Página inicial"},n.createElement("img",{src:"/icons/logo-with-name.png",alt:"Logo Thaís Basso nutricionista",className:"logo"})),n.createElement("div",{id:"navbarSupportedContent",className:"collapse navbar-collapse flex-grow-0"},n.createElement("ul",{className:"navbar-nav mb-lg-0"},[{name:"Início",to:"/",ariaLabel:"Página inicial"},{name:"Sobre mim",to:"/sobre-mim",ariaLable:"Informações sobre mim"},{name:"Contato",to:"/contato",ariaLabel:"Informações de contato"},{name:"Atendimentos",to:"/atendimentos",ariaLabel:"Informações sobre as consultas e valores dos planos."}].map(((e,t)=>n.createElement("li",{key:t,className:"nav-item px-3"},n.createElement(r.rU,{to:e.to,"aria-label":e.ariaLabel,className:"nav-link text go-right"},e.name)))))),n.createElement("div",{id:"socialLinks",className:"d-flex align-items-center d-none d-lg-block"},[{icon:"fa-facebook",href:"https://www.facebook.com/nutricionistathaisb",alt:"Link do Facebook"},{icon:"fa-instagram",href:"https://www.instagram.com/nutrithaisbasso",alt:"Link do Instagram"},{icon:"fa-whatsapp",href:"https://api.whatsapp.com/send?1=pt_BR&phone=5554996224005",alt:"Link do WhatsApp"},{icon:"fa-youtube",href:"https://www.youtube.com/channel/UCACMTraiEAeIf0pZ552PNZg",alt:"Link do canal do Youtube"}].map(((e,t)=>n.createElement("a",{href:e.href,alt:e.alt,target:"_blank",rel:"noreferrer",key:t},n.createElement("i",{className:"fab "+e.icon+" fa-1x px-2"})))))))}function i(){return n.createElement("footer",{className:"text-center text-lg-start"},n.createElement("div",{className:"container-custom p-5 px-2"},n.createElement("div",{className:"row dark-violet"},n.createElement("div",{className:"col-lg-6 col-md-12 mb-4 mb-md-0"},n.createElement("h5",{className:"text-uppercase"},n.createElement("b",null,n.createElement("i",{className:"fas me-3 mb-3 fa-map-marked-alt"})," Onde me encontrar?")),n.createElement("p",{className:"mb-2"},"Rua Humberto Accorsi, n° 230 - Sala 02"),n.createElement("p",{className:"mb-2"},"Edifício Rádio Estação, bairro Aurora"),n.createElement("p",{className:"mb-2"},"CEP 95185-000 - Carlos Barbosa/RS"),n.createElement("br",null),n.createElement("p",{className:"mb-0"},n.createElement(r.rU,{to:"/contato"},"Veja outras formas de contato"))),n.createElement("div",{className:"footerLogo col-lg-6 col-md-12 mb-4 mb-md-0 d-flex justify-content-end align-items-center"},n.createElement("img",{src:"/icons/logo.png",className:"logo",alt:"Logo Thaís Basso nutricionista"})))),n.createElement("div",{className:"footerHi p-3"},n.createElement(s.W2,{className:"d-flex justify-content-between"},n.createElement("span",null,"Made with ",n.createElement("i",{className:"fas fa-heart heart"})," by Lucas and Marcelo"),n.createElement("span",null,"© All rights are reserved | 2022"))))}function o(e){return n.createElement(n.Fragment,null,n.createElement(l,{page:e.page||""}),n.createElement("div",{className:"filler  "+(e.page||""),style:{display:"block",height:"100px"}}),n.createElement("div",{className:"page-content "+(e.page||"")},e.children),n.createElement(i,null))}},3533:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(1883),r=a(7294);function s(e){const t=(0,n.K2)("1596170800"),{title:a,description:s}=t.site.siteMetadata;return r.createElement(r.Fragment,null,r.createElement("meta",{charSet:"UTF-8"}),r.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),r.createElement("link",{rel:"canonical",href:"https://thaisbasso.com"}),r.createElement("link",{rel:"icon",type:"image/svg+xml",href:"/icons/favicon.svg"}),r.createElement("script",{type:"text/javascript",src:"https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.2.0/mdb.min.js"}),r.createElement("title",null,e.title||a),r.createElement("meta",{name:"description",content:e.description||s}))}},6082:function(e,t,a){a.d(t,{J3:function(){return m},Jd:function(){return c},NZ:function(){return s},V1:function(){return r},W2:function(){return o},X2:function(){return i},r4:function(){return l}});var n=a(7294);const r=e=>n.createElement("h1",{className:"text-center page-title "+(e.className||"")},n.createElement("span",{className:"d-block title"},e.title),e.subtitle&&n.createElement("span",{className:"subtitle d-block mt-3"},e.subtitle)),s=e=>n.createElement("h3",{className:"text mb-4 p-0 fs-1gg "+(e.className||"")},e.children),l=e=>n.createElement("p",{className:"text mb-4 p-0 "+e.className},e.children),i=e=>n.createElement("div",{className:"row "+(e.className||"")},e.children),o=e=>n.createElement("div",{className:"container-custom px-2 py-2 "+e.className||0},e.children),c=e=>n.createElement("a",{className:e.className||"",href:e.href||"https://api.whatsapp.com/send?1=pt_BR&phone=5554996224005",alt:e.alt||!1,target:e.target||!1,rel:"noreferrer"},n.createElement("button",{type:"button",className:"callToAction btn fs-6 text-center "+(e.buttonClassName||"")},e.text||"Marque sua consulta")),m=e=>n.createElement("div",{className:(e.className||"")+" shadow-custom p-4"},e.children)}}]);
//# sourceMappingURL=a0f67363a1bdf3aa3788903160068e6b2b64eec5-5bffafb604160fac8152.js.map