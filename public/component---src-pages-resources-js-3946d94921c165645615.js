(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"0GX+":function(e,t,a){e.exports={pageHeader:"resources-module--pageHeader--3Et4m",nav:"resources-module--nav--2bZtM",tag:"resources-module--tag--190f0",more:"resources-module--more--etwfi"}},"3dzS":function(e,t,a){"use strict";var r=a("q1tI"),o=a.n(r),l=a("Wbzz"),n=a("8h8q"),c=a.n(n);t.a=function(e){return o.a.createElement("header",{className:c.a.root+" "+e.className},o.a.createElement("div",{className:c.a.logoArea},o.a.createElement(l.a,{to:"/"},o.a.createElement("img",{className:c.a.logo,src:Object(l.d)("/logo/css-tricks.svg"),alt:"CSS-Tricks Presents"})),o.a.createElement("div",null,"The Power of ",o.a.createElement("strong",null,"Serverless"),o.a.createElement("br",null)," for Front-End Developers"),o.a.createElement("button",{className:c.a.menuButton,onClick:function(){window.scrollTo(0,0),document.body.classList.toggle("menu-open")}},o.a.createElement("span",{className:"screen-reader-text"},"Toggle Menu"),o.a.createElement("img",{src:"/img/menu-button.svg",alt:"",className:c.a.toggleImg}))),o.a.createElement("div",{className:c.a.h1wrap,"data-title":e.title},e.title&&o.a.createElement("h1",null,e.title)),o.a.createElement("div",{className:c.a.subtitleArea,"data-title":e.title},e.children))}},"8h8q":function(e,t,a){e.exports={root:"pageHeader-module--root--1fwDq",h1wrap:"pageHeader-module--h1wrap--eEM6x",logoArea:"pageHeader-module--logoArea--1M0al",logo:"pageHeader-module--logo--1-Trr",toggleImg:"pageHeader-module--toggleImg--2Vkt4",menuButton:"pageHeader-module--menuButton--mUqzR",subtitleArea:"pageHeader-module--subtitleArea--16oha"}},"9I2h":function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),o=a.n(r),l=a("Wbzz"),n=a("LvDl"),c=a("0GX+"),s=a.n(c),m=a("vrFN"),i=a("3dzS"),u=a("kb7i"),d=a("fItr");t.default=function(){var e=Object(r.useState)("all"),t=e[0],a=e[1],c=Object(r.useState)(!1),g=c[0],f=c[1],p=function(e){a(e),document.documentElement.scrollTo({top:document.querySelector("#grid").getBoundingClientRect().top-70,left:0,behavior:"smooth"})};return Object(r.useEffect)((function(){document.body.classList.remove("homepage"),document.body.classList.remove("menu-open")})),o.a.createElement(l.b,{query:"921364250",render:function(e){var a=[];return e.allFile.edges.forEach((function(e){var t=e.node.childMarkdownRemark.frontmatter.tags;t&&a.push(t)})),a=Object(n.flatten)(a),(a=Object(n.uniq)(a)).sort(),o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,{title:"Resources"}),o.a.createElement("div",{"data-filter":"filter-"+t},o.a.createElement(i.a,{title:"Resources",className:s.a.pageHeader},o.a.createElement("p",null,"Articles about things related to Serverless, JAMstack, and the whole ball of yarn."),o.a.createElement("nav",{className:s.a.nav,"data-open":g},"Topics:"," ",a.map((function(e,t){return o.a.createElement("button",{key:e,onClick:function(){return p(e)},className:s.a.tag},e)})),o.a.createElement("button",{className:s.a.more,"data-open":g,id:"more-resources-button",onClick:function(){return f(!g)}},"More"))),o.a.createElement("main",{className:"grid",id:"grid"},e.allFile.edges.map((function(e,a){var r=e.node,l=r.childMarkdownRemark.frontmatter,n=l.title,c=l.url,s=l.author,m=l.tags;return m.includes(t)||"all"===t?o.a.createElement(u.a,{key:n,title:n,author:s,tags:m,html:r.childMarkdownRemark.html,url:c,extraClasses:"resource",tagChanger:p,cmsUrl:"/admin/#/collections/"+r.childMarkdownRemark.fields.collection+"/entries/"+r.childMarkdownRemark.fields.slug}):""}))),o.a.createElement(d.a,null)))}})}},A5mV:function(e,t,a){e.exports={homeFooter:"footer-module--homeFooter--1BFmt",whatis:"footer-module--whatis--27omb",findOutWrap:"footer-module--findOutWrap--3U4VV",findOut:"footer-module--findOut--3iqsb",footerSep:"footer-module--footerSep--3rtyI",builtWith:"footer-module--builtWith--18bwN",gatsby:"footer-module--gatsby--1wr0z",netlify:"footer-module--netlify--2Pyy2"}},YuTi:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},fItr:function(e,t,a){"use strict";var r=a("q1tI"),o=a.n(r),l=a("Wbzz"),n=a("A5mV"),c=a.n(n);t.a=function(e){return o.a.createElement("footer",{className:c.a.homeFooter},!e.noWhatIs&&o.a.createElement(o.a.Fragment,null,o.a.createElement("h3",{className:c.a.whatis},"Yeah, but what is serverless?"),o.a.createElement("div",{className:c.a.findOutWrap},o.a.createElement(l.a,{to:"/about/",className:c.a.findOut},"Find out →"))),o.a.createElement("br",null),o.a.createElement("img",{src:"/img/footer-sep.svg",alt:"",className:c.a.footerSep}),o.a.createElement("p",null,"I'm a serverless noob. Got a correction? Something to add?"," ",o.a.createElement("a",{href:"https://github.com/CSS-Tricks/serverless"},"There is a GitHub Repo")," ","where you can contribute or open an issue."),o.a.createElement("p",{className:c.a.builtWith},"Built with"," ",o.a.createElement("a",{className:c.a.gatsby,href:"https://www.gatsbyjs.org/"},"Gatsby")," ","and hosted on"," ",o.a.createElement("a",{className:c.a.netlify,href:"https://www.netlify.com/"},"Netlify"),"."))}},kb7i:function(e,t,a){"use strict";var r=a("q1tI"),o=a.n(r),l=a("Wbzz"),n=a("zhBr"),c=a.n(n);t.a=function(e){return o.a.createElement("div",{className:c.a.root+" "+e.extraClasses},e.logo&&o.a.createElement("a",{href:e.url,className:c.a.logoHeader},o.a.createElement("img",{className:c.a.logoImage,src:Object(l.d)(""+e.logo),alt:"Logo for "+e.title})),e.icon&&o.a.createElement("img",{className:c.a.icon,src:Object(l.d)("/img/"+e.icon),alt:""}),o.a.createElement("div",{className:c.a.cardContent},o.a.createElement("h3",{className:c.a.homePageLink},e.url&&o.a.createElement("a",{href:e.url},e.title),!e.url&&o.a.createElement(o.a.Fragment,null,e.title)),e.author&&o.a.createElement("p",null,o.a.createElement("span",{className:c.a.by},"by")," ",e.author),o.a.createElement("div",{className:c.a.textCardContent,dangerouslySetInnerHTML:{__html:e.html}}),e.tags&&o.a.createElement("div",{className:c.a.tagsArea},o.a.createElement("span",{className:c.a.topicWrap},o.a.createElement("img",{src:Object(l.d)("/img/topic.svg"),alt:""}),"Topics"),e.tags.map((function(t){return o.a.createElement("button",{className:c.a.topic,key:t,onClick:function(){return e.tagChanger(t)}},t)}))),e.topics&&o.a.createElement("div",{className:c.a.topicsArea},o.a.createElement("span",{className:c.a.focus},o.a.createElement("img",{src:Object(l.d)("/img/focus.svg"),alt:""}),"Focus Areas"),e.topics.map((function(e){return o.a.createElement("span",{key:e,className:c.a.topic},e)})))),e.cmsUrl&&o.a.createElement("a",{className:c.a.cmsLink,href:e.cmsUrl},"Edit this"))}},zhBr:function(e,t,a){e.exports={root:"card-module--root--1daMr",logoHeader:"card-module--logoHeader--24VIu",logoImage:"card-module--logoImage--262uz",icon:"card-module--icon--eKmaH",homePageLink:"card-module--homePageLink--ZPUCK",cmsLink:"card-module--cmsLink--1_BIu",cardContent:"card-module--cardContent--1TLTx",textCardContent:"card-module--textCardContent--14F8H",by:"card-module--by--2N_g5",tagsArea:"card-module--tagsArea--2egF0",topicsArea:"card-module--topicsArea--3jVWG",focus:"card-module--focus--39XPk",topicWrap:"card-module--topicWrap--3gu2J",topic:"card-module--topic--3aOAp"}}}]);
//# sourceMappingURL=component---src-pages-resources-js-3946d94921c165645615.js.map