(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"A2+M":function(t,e,r){var n=r("X8hv");t.exports={MDXRenderer:n}},I5cv:function(t,e,r){var n=r("XKFU"),o=r("Kuth"),a=r("2OiF"),i=r("y3w9"),c=r("0/R4"),u=r("eeVq"),l=r("8MEG"),s=(r("dyZX").Reflect||{}).construct,f=u((function(){function t(){}return!(s((function(){}),[],t)instanceof t)})),b=!u((function(){s((function(){}))}));n(n.S+n.F*(f||b),"Reflect",{construct:function(t,e){a(t),i(e);var r=arguments.length<3?t:a(arguments[2]);if(b&&!f)return s(t,e,r);if(t==r){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var n=[null];return n.push.apply(n,e),new(l.apply(t,n))}var u=r.prototype,m=o(c(u)?u:Object.prototype),d=Function.apply.call(t,m,e);return c(d)?d:m}})},Ie8z:function(t,e,r){"use strict";r("V+eJ");var n=r("k1TG"),o=r("aXB2"),a=r("q1tI"),i=r("iuhU"),c=r("H2TA"),u=["video","audio","picture","iframe","img"],l=a.forwardRef((function(t,e){var r=t.children,c=t.classes,l=t.className,s=t.component,f=void 0===s?"div":s,b=t.image,m=t.src,d=t.style,p=Object(o.a)(t,["children","classes","className","component","image","src","style"]),y=-1!==u.indexOf(f),g=!y&&b?Object(n.a)({backgroundImage:'url("'.concat(b,'")')},d):d;return a.createElement(f,Object(n.a)({className:Object(i.a)(c.root,l,y&&c.media,-1!=="picture img".indexOf(f)&&c.img),ref:e,style:g,src:y?b||m:void 0},p),r)}));e.a=Object(c.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(l)},X8hv:function(t,e,r){function n(t,e,r){return(n=o()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&a(o,r.prototype),o}).apply(null,arguments)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r("jm62"),r("yt8O"),r("RW0V"),r("rGqo"),r("rE2o"),r("ioFf"),r("XfO3"),r("HEwt"),r("f3/d"),r("a1Th"),r("Btvt"),r("I5cv"),r("I5cv"),r("f3/d"),r("a1Th"),r("XfO3"),r("HEwt"),r("rE2o"),r("jm62"),r("ioFf"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V");var f=r("q1tI"),b=r("7ljp"),m=b.useMDXComponents,d=b.mdx,p=r("BfwJ").useMDXScope;t.exports=function(t){var e=t.scope,r=t.components,o=t.children,a=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,["scope","components","children"]),c=m(r),u=p(e),s=f.useMemo((function(){if(!o)return null;var t=l({React:f,mdx:d},u),e=Object.keys(t),r=e.map((function(e){return t[e]}));return n(Function,["_fn"].concat(i(e),[""+o])).apply(void 0,[{}].concat(i(r)))}),[o,e]);return f.createElement(s,l({components:c},a))}},b4ge:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return R})),r.d(e,"pageQuery",(function(){return k}));var n=r("q1tI"),o=r("LbRr"),a=(r("rGqo"),r("rE2o"),r("ioFf"),r("XfO3"),r("HEwt"),r("f3/d"),r("a1Th"),r("Btvt"),r("Wbzz")),i=r("qKvR");function c(t){return function(t){if(Array.isArray(t))return l(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||u(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){if(t){if("string"==typeof t)return l(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(t,e):void 0}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var s=function t(e,r,n){void 0===r&&(r=!0),void 0===n&&(n=1);var o=[];if(e)for(var a,i=function(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=u(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0;return function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=t[Symbol.iterator]()).next.bind(r)}(e);!(a=i()).done;){var l=a.value;l.url&&o.push(l.url.slice(1)),l.items&&r&&n&&o.push.apply(o,c(t(l.items,!0,n+1)))}return o};var f=function(t){var e=t.items,r=function(t,e){void 0===e&&(e=void 0);var r=Object(n.useState)(""),o=r[0],a=r[1];return Object(n.useEffect)((function(){var r=new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting&&a(t.target.id)}))}),{rootMargin:e||"0% 0% -80% 0%"});return t.forEach((function(t){r.observe(document.getElementById(t))})),function(){t.forEach((function(t){r.unobserve(document.getElementById(t))}))}}),[t,e]),o}(s(e,!0)),o={listStyleType:"none",margin:"0 0 10 0",padding:0,paddingInlineStart:".5rem",marginBlockStart:".3rem",marginBlockEnd:".3rem",marginLeft:".5rem","&:hover":{fontWeight:"bold"}};return e?Object(i.b)("nav",null,Object(i.b)("h2",null,"Table of Contents"),Object(i.b)("ul",{style:o},function t(e,r,n){return e&&e.map((function(e,o){var c=e.url==="#"+r;return Object(i.b)("li",{key:e.url},e.url&&Object(i.b)(a.a,{to:e.url,style:c?{fontWeight:"bold"}:{}},e.title),e.items&&Object(i.b)("ul",{style:n},t(e.items,r,n)))}))}(e,r,o))):null},b=r("vrFN"),m=r("W/9C"),d=r("N1om"),p=r.n(d),y=r("R/WZ"),g=r("30+C"),v=r("oa/T"),O=r("Ie8z"),h=r("ofer"),j=r("viY9"),w=r("q4d2"),x=r("bWLx"),I=r("p3AD"),S=r("tRbT"),E=(r("h4Ch"),r("A2+M"));function R(t){var e=t.data.mdx,r=e.frontmatter,n=e.body,c=e.fields,u=e.tableOfContents,l=Object(y.a)((function(t){var e;return{root:{maxWidth:900},card_col:{marginTop:-25},cardmedia:{margin:"0 10% 0 10",borderRadius:"2%",objectFit:"cover",transform:"scale(0.95)",marginBottom:"3rem"},cardcontent:{marginTop:"-5%"},textbody:{display:"flex",alignItems:"center",justifyContent:"left",flexFlow:"row wrap",padding:"0.5em",border:"none"},text_date:{display:"flex",alignItems:"center",justifyContent:"left",flexFlow:"row wrap",padding:"0.5em",color:"#808080"},text_readtime:{display:"flex",alignItems:"center",justifyContent:"left",flexFlow:"row wrap",color:"#808080"},tags:{marginTop:10,marginRight:10,padding:".2rem .5rem",display:"flex",alignItems:"center",justifyContent:"right",color:"#696969",fontWeight:"300",backgroundColor:"#D3D3D3",borderRadius:".2rem",transition:"background-color .3s","&:hover":{color:"#696969",backgroundColor:"#CEE7F7"}},toc:(e={position:"block",marginBottom:10},e[t.breakpoints.up("md")]={position:"sticky",marginLeft:10,top:"3rem"},e)}}))(),s=Object(j.a)();return s=Object(w.a)(s),Object(i.b)("div",{css:Object(i.a)("margin:0 auto;max-width:1300px;padding-top:",Object(I.a)(1.5),";min-height:100vh;")},Object(i.b)(b.a,{title:r.title,description:r.description,image:r.thumbnailImage.childImageSharp.fluid.src,article:!0,tags:r.tags}),Object(i.b)(o.a,null),Object(i.b)(S.a,{container:!0,direction:"row-reverse",justify:"center",alignItems:"flex-start",className:l.card_col},Object(i.b)(x.a,{theme:s},Object(i.b)(S.a,{item:!0,xs:12,sm:12,md:3,lg:3,className:l.toc},Object(i.b)(g.a,null,Object(i.b)(v.a,null,Object(i.b)(f,{items:u.items})))),Object(i.b)(S.a,{item:!0,xs:12,md:8,lg:8},Object(i.b)(g.a,{className:l.root},Object(i.b)(v.a,null,Object(i.b)(h.a,{className:l.textbody,variant:"h5",component:"h1"},r.title),Object(i.b)(h.a,{className:l.text_date,variant:"body2",component:"p"},r.date,Object(i.b)(h.a,{gutterBottom:!0,paragraph:!0,className:l.text_readtime,variant:"body2",component:"p"},",  ",c.readingTime.text)),Object(i.b)(S.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"flex-start"},Object(i.b)(h.a,{gutterBottom:!0,paragraph:!0,className:l.textbody,variant:"body2",component:"p"},r.tags.map((function(t){return Object(i.b)(S.a,{item:!0},Object(i.b)(a.a,{to:"/tags/"+p()(t)+"/",className:l.tags},t," "))}))))),r.thumbnailImageUse?Object(i.b)(O.a,{className:l.cardmedia,component:"img",alt:"이미지를 불러오지 못했습니다..ㅠㅠ",height:"100%",width:"100%",image:r.thumbnailImage.childImageSharp.fluid.srcWebp,title:r.title}):null,Object(i.b)(v.a,{className:l.cardcontent},Object(i.b)(E.MDXRenderer,{className:"blog-post-content"},n)))))),Object(i.b)(m.a,null))}var k="3973482298"},h4Ch:function(t,e,r){}}]);
//# sourceMappingURL=component---src-templates-blog-template-js-0cad841062f91b43306a.js.map