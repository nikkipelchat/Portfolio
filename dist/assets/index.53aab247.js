import{o as s,c as r,a as e,r as f,b as c,n as h,d as N,e as v,t as d,u as p,f as j,g as E,F as m,h as _,i as g,j as A,k as P,l as q,m as R,p as T}from"./vendor.ffeeb7a6.js";const B=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))t(l);new MutationObserver(l=>{for(const a of l)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&t(u)}).observe(document,{childList:!0,subtree:!0});function n(l){const a={};return l.integrity&&(a.integrity=l.integrity),l.referrerpolicy&&(a.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?a.credentials="include":l.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(l){if(l.ep)return;l.ep=!0;const a=n(l);fetch(l.href,a)}};B();var G="/Portfolioo/assets/nikki.aeb2f301.jpg",y=(i,o)=>{const n=i.__vccOpts||i;for(const[t,l]of o)n[t]=l;return n};const D={},F={xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 24 24",fill:"currentColor"},V=e("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"},null,-1),W=[V];function Q(i,o){return s(),r("svg",F,W)}var S=y(D,[["render",Q]]);const J={},O={xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 24 24",fill:"currentColor"},H=e("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"},null,-1),U=[H];function Y(i,o){return s(),r("svg",O,U)}var z=y(J,[["render",Y]]);const K={},X={xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 24 24",fill:"currentColor"},Z=e("path",{d:"M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z"},null,-1),ee=e("path",{d:"M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z"},null,-1),te=[Z,ee];function ie(i,o){return s(),r("svg",X,te)}var oe=y(K,[["render",ie]]);const ne={class:"sticky top-0 left-0 z-50 px-4 text-gray-200 bg-zinc-900 lg:h-screen lg:w-60 xl:w-80 lg:fixed"},se={class:"flex items-center justify-between h-16 lg:hidden"},le=e("h2",{class:"text-xl font-bold tracking-wider"}," Nikki Pelchat ",-1),re={class:"flex items-center"},ae={class:"ml-4 hover:text-teal-600",title:"Github",href:"https://github.com/nikkipelchat",target:"_blank"},ce={class:"ml-4 hover:text-teal-600",title:"LinkedIn",href:"https://ca.linkedin.com/in/nikki-pelchat",target:"_blank"},de=e("div",{class:"hidden md:flex md:flex-col md:items-center"},[e("img",{class:"object-cover w-48 h-48 border-8 rounded-full border-zinc-600 full",src:G,alt:"Nikki Pelchat"}),e("h2",{class:"mt-2 text-2xl font-bold tracking-wider"}," Nikki Pelchat ")],-1),ue={class:"w-full"},he={class:"justify-center hidden h-6 space-x-8 md:flex"},pe={class:"text-white hover:text-teal-600",href:"https://github.com/nikkipelchat",target:"_blank",title:"Github"},fe={class:"text-white hover:text-teal-600",href:"https://ca.linkedin.com/in/nikki-pelchat",target:"_blank",title:"LinkedIn"},me={props:{activeLink:{type:String,required:!0}},setup(i){const o=f(!1);function n(){o.value=!o.value}return(t,l)=>(s(),r("header",ne,[e("div",se,[le,e("div",re,[e("a",ae,[c(S,{class:"w-4 h-4"})]),e("a",ce,[c(z,{class:"w-4 h-4"})]),e("div",{class:"ml-12 cursor-pointer",onClick:n},[c(oe,{class:"w-6 h-6"})])])]),e("nav",{class:h(["fixed top-0 bottom-0 flex flex-col items-center justify-between w-full py-10 mt-16 transition-all duration-300 bg-zinc-900 lg:mt-0 lg:left-0 lg:w-60 xl:w-80",o.value?"left-0":"-left-full"])},[de,e("div",ue,[e("ul",{class:"text-lg tracking-wider text-center",onClick:n},[e("li",null,[e("a",{class:h(["block py-2 hover:text-teal-600",i.activeLink==="home"?"text-teal-700":""]),href:"#home"}," Home ",2)]),e("li",null,[e("a",{class:h(["block py-2 hover:text-teal-600",i.activeLink==="about"?"text-teal-700":""]),href:"#about"}," About Me ",2)]),e("li",null,[e("a",{class:h(["block py-2 hover:text-teal-600",i.activeLink==="resume"?"text-teal-700":""]),href:"#resume"}," Resume ",2)]),e("li",null,[e("a",{class:h(["block py-2 hover:text-teal-600",i.activeLink==="portfolio"?"text-teal-700":""]),href:"#portfolio"}," Portfolio ",2)])])]),e("div",he,[e("a",pe,[c(S)]),e("a",fe,[c(z)])])],2)]))}},_e={class:"px-4 py-16 bg-white dark:bg-zinc-700"},ge={class:"container mx-auto"},ve={class:"text-center text-zinc-800 dark:text-zinc-100"},xe=e("span",{class:"font-bold text-teal-700"},"Nikki",-1),be=v(". All Rights Reserved. "),ye={setup(i){const o=N(()=>{var n=new Date,t=n.getFullYear();return t});return(n,t)=>(s(),r("div",_e,[e("div",ge,[e("p",ve,[v(" Copyright \xA9 "+d(p(o))+" ",1),xe,be])])]))}};var ke="/Portfolioo/assets/iceland5.c604a608.jpg";const k={props:{class:{type:String,default:"btn-primary"}},setup(i){return(o,n)=>(s(),r("a",{class:h(["btn",i.class]),href:"/resume.pdf",download:"nikki-pelchat-resume"}," Download Resume ",2))}},we={class:"w-full h-full"},$e={class:"z-10 flex flex-col items-center justify-center w-full h-full text-center text-gray-200"},Se={class:"max-w-fit"},ze=e("p",{class:"text-xl lg:text-2xl text-left"}," hello, it's me... ",-1),Ne=e("p",{class:"mt-4 text-6xl font-bold lg:text-7xl text-center"}," Nikki Pelchat ",-1),Ee=e("p",{class:"mt-4 text-2xl text-right"}," located in Saskatchewan. ",-1),Ie={class:"mt-8 items-center"},Le=e("div",{class:"absolute inset-0 z-0 w-full h-full"},[e("img",{class:"object-cover w-full h-full",src:ke}),e("div",{class:"absolute inset-0 bg-black bg-opacity-80"})],-1),I={setup(i){return(o,n)=>(s(),r("section",we,[e("div",$e,[e("div",Se,[ze,Ne,Ee,e("div",Ie,[c(k,{class:h("btn-outline max-w-fit")})])])]),Le]))}},Ce={class:"relative py-20"},Me={class:"relative flex items-center justify-center w-full"},je={class:"absolute flex items-center justify-center"},Ae={class:"text-4xl font-bold tracking-widest text-gray-200 uppercase md:text-5xl lg:text-6xl dark:text-zinc-600 opacity-70"},Pe=e("span",{class:"absolute bottom-0 w-24 h-1 bg-teal-700 rounded-full"},null,-1),qe={class:"text-2xl font-extrabold lg:text-3xl text-zinc-800 dark:text-zinc-100"},w={props:{backgroundTitle:{type:String,default:""},foregroundTitle:{type:String,default:""}},setup(i){return(o,n)=>(s(),r("div",Ce,[e("div",Me,[e("div",je,[e("span",Ae,d(i.backgroundTitle),1),Pe]),e("div",qe,d(i.foregroundTitle),1)])]))}},Re={class:"px-4 pb-24 bg-white dark:bg-zinc-700"},Te={class:"container mx-auto"},Be={class:"space-y-4 text-base text-center text-zinc-800 dark:text-zinc-100 lg:px-8"},Ge=v(" I'm "),De=e("span",{class:"font-bold text-teal-700"},"Nikki Pelchat",-1),Fe=e("p",null," In my spare time I love reading, learning new things, and cooking and trying new foods and recipes. I do my own mechanical work which always lead to some funny stories, renos and repairs around the house, and enjoy gardening. Finally, I absolutely love to travel and watching my daughters experience new activities. Fun fact, the background photo at the top of my website is from my favorite trip, Iceland! ",-1),Ve={class:"mt-8 text-center"},L={setup(i){const o=N(()=>{var n=new Date,t=new Date("1992/02/04"),l=n.getFullYear()-t.getFullYear(),a=n.getMonth()-t.getMonth();return(a<0||a===0&&n.getDate()<t.getDate())&&l--,l});return(n,t)=>(s(),r("section",Re,[e("div",Te,[c(w,{"background-title":"About Me","foreground-title":"About Me"}),e("div",null,[e("div",Be,[e("p",null,[Ge,De,v(", a "+d(p(o))+" year old full-stack developer. I attained my Master of Applied Science in Software Systems Engineering from the University of Regina in 2020. My focus of study was in Artificial Intelligence, specifically Neural Networks and Deep Learning. My career's focus has been within web development, both front and backend. ",1)]),Fe]),e("div",Ve,[c(k)])])])]))}},We={class:"p-6 border rounded border-zinc-300 dark:border-0 dark:bg-zinc-900"},Qe={class:"inline-block px-2 text-xs leading-6 text-white bg-teal-700 rounded"},Je={class:"mt-4 text-xl font-bold text-zinc-800 dark:text-zinc-300"},Oe={key:0,class:"mt-4 text-xl font-bold text-zinc-800 dark:text-zinc-300"},He={class:"text-sm text-rose-700"},Ue={class:"mt-6 text-zinc-800 dark:text-zinc-400"},b={props:{time:{type:String,required:!0},title:{type:String,required:!0},subtitle:{type:String,required:!0},location:{type:String,required:!0},description:{type:String,required:!0}},setup(i){const o=i;return(n,t)=>(s(),r("div",We,[e("div",Qe,d(i.time),1),e("h2",Je,d(i.title),1),o.subtitle?(s(),r("h2",Oe,d(i.subtitle),1)):j("",!0),e("h4",He,d(i.location),1),e("p",Ue,d(i.description),1)]))}},Ye={class:"flex items-center justify-between"},Ke={class:"font-bold text-zinc-800 dark:text-zinc-100"},Xe={class:"font-bold text-zinc-800 dark:text-zinc-100"},Ze={class:"h-2 rounded-full bg-slate-300"},et={props:{title:{type:String,required:!0},value:{type:String,required:!0}},setup(i){return(o,n)=>(s(),r("div",null,[e("div",Ye,[e("p",Ke,d(i.title),1),e("p",Xe,d(i.value)+"% ",1)]),e("div",Ze,[e("div",{class:"h-full bg-teal-700 rounded-l-full",style:E({width:i.value+"%"})},null,4)])]))}},tt=[{time:"2010 - 2014",title:"Bachelor of Applied Science, Software Systems Engineering",location:"University of Regina",description:"Attended my BASc in Software Systems Engineering. Graduated with distinction."},{time:"2015 - 2020",title:"Master of Applied Science, Software Systems Engineering",location:"University of Regina",description:"My focus of study was Artificial Intelligence and my thesis, Neural Network Music Genre Classification, further focused on Neural Networks and Deep Learning. Graduated with great distinction."}],it=[{time:"2019",title:"Neural Network Music Genre Classification",location:"IEEE Canadian Conference of Electrical and Computer Engineering",description:"Presented my work in Edmonton, Alberta at the CCECE Conference. Published my work in their collection of articles.",link:"https://ieeexplore.ieee.org/document/8861555"},{time:"2020",title:"Neural Network Music Genre Classification",location:"Canadian Journal of Electrical and Computer Engineering",description:"My thesis summary was accepted and published by the CJECE Journal in 2020. This was a continuation of the work presented in the 2019 CCECE Conference.",link:"https://ieeexplore.ieee.org/document/9165253"}],ot=[{time:"June 2020 - Present",title:"Principle Software Engineer",location:"Lumeca Health",description:"I joined Lumeca to help grow their product, virtual health consultations. I contributed to feature planning and scoping, the backend architecture to a scheduling project, and upgrading our front end from Vue 2 to Vue 3. The stack I work in currently is Laravel, MySQL, AWS, and Vue.js."},{time:"Nov 2018 - June 2020",title:"Engineering Team Lead",location:"GasBuddy",description:"When I moved to a management role the team I lead was 3-5 people. My duties changed to facilitating the Agile development cycle, task prioritization, weekly team member check-ins and quarterly reviews, team conflict resolution, and relaying task requirements, updates and consumer challenges to the team. Along with the responsibility that comes with managing a team, I was also contributing code, PR reviews, and writing tests."},{time:"Feb 2015 - Nov 2018",title:"Senior Software Engineer",location:"GasBuddy",description:"I moved into the software development department where I was introduced to Node.js. The product was brand new so I was able to see a full software development cycle from inception to customer subscriptions. The stack was Node.js, ES6, ESLint, PostgreSQL, Elastic Search, AWS, and React."},{time:"Sept 2014 - Feb 2015",title:"QA Engineer",location:"GasBuddy",description:"I joined GasBuddy on the QA team. I quickly gained an appreciation for methodical testing and verifying software. I created my own test plans to keep track of what had been tested prior to production releases."}],nt=[{title:"Javascript (ES6, ESLint)",value:"100"},{title:"Node.js",value:"100"},{title:"PHP/Larvel",value:"70"},{title:"HTML/CSS/Responsive Design",value:"100"},{title:"REST APIs",value:"90"},{title:".Net",value:"50"},{title:"Vue.js",value:"70"},{title:"SQL (MySQL, PostgreSQL)",value:"80"},{title:"Docker",value:"90"},{title:"React",value:"65"},{title:"Elastic Search",value:"75"},{title:"AWS",value:"60"},{title:"TypeScript",value:"65"},{title:"Redis",value:"70"},{title:"Git",value:"90"}],st=[{title:"Portfolio",description:"This is the website that you are currently on, my portfolio and resume.  Uses Node.js, Vue.js 3, and tailwind.",imageName:"portfolio.png",link:"https://github.com/nikkipelchat/Portfolio",type:"Web"},{title:"Example Architecture of a Node.js (TS) project",description:"This is an example architecture I built of a Node.js project. I used this archetecture on a private project so I've created a public outline of it to build from in the future.",imageName:"node.png",link:"https://github.com/nikkipelchat/ExampleBackEndArchitecture",type:"Web"}],lt={class:"px-4 pb-24 bg-zinc-100 dark:bg-zinc-800"},rt={class:"container mx-auto"},at=e("h2",{class:"text-2xl font-bold text-zinc-800 dark:text-zinc-100"}," Education ",-1),ct={class:"grid grid-cols-1 gap-4 mt-4 lg:grid-cols-2"},dt=e("h2",{class:"mt-12 text-2xl font-bold text-zinc-800 dark:text-zinc-100"}," Publications and Conferences ",-1),ut={class:"grid grid-cols-1 gap-4 mt-4 lg:grid-cols-2"},ht=e("h2",{class:"mt-12 text-2xl font-bold text-zinc-800 dark:text-zinc-100"}," Experience ",-1),pt={class:"grid grid-cols-1 gap-4 mt-4 lg:grid-cols-2"},ft=e("h2",{class:"mt-12 text-2xl font-bold text-zinc-800 dark:text-zinc-100"}," Skills ",-1),mt={class:"grid grid-cols-1 gap-4 mt-4 lg:grid-cols-3"},_t={class:"mt-24 text-center"},C={setup(i){return(o,n)=>(s(),r("section",lt,[e("div",rt,[c(w,{"background-title":"Resume","foreground-title":"Resume"}),at,e("div",ct,[(s(!0),r(m,null,_(p(tt),t=>(s(),g(b,{key:t.title,time:t.time,title:t.title,subtitle:t.subtitle,location:t.location,description:t.description},null,8,["time","title","subtitle","location","description"]))),128))]),dt,e("div",ut,[(s(!0),r(m,null,_(p(it),t=>(s(),g(b,{key:t.title,time:t.time,title:t.title,subtitle:t.subtitle,location:t.location,description:t.description},null,8,["time","title","subtitle","location","description"]))),128))]),ht,e("div",pt,[(s(!0),r(m,null,_(p(ot),t=>(s(),g(b,{key:t.title,time:t.time,title:t.title,subtitle:t.subtitle,location:t.location,description:t.description},null,8,["time","title","subtitle","location","description"]))),128))]),ft,e("div",mt,[(s(!0),r(m,null,_(p(nt),t=>(s(),g(et,{key:t.title,title:t.title,value:t.value},null,8,["title","value"]))),128))]),e("div",_t,[c(k)])])]))}},gt=["href","alt"],vt={class:"flex flex-col items-center justify-center h-full px-10 duration-300 transform bg-black bg-opacity-40 hover:bg-opacity-75"},xt={class:"text-xl font-bold text-white duration-500 transform opacity-0 group-hover:opacity-90"},bt={class:"text-base text-white duration-500 transform opacity-0 group-hover:opacity-90"},yt={props:{title:{type:String,required:!0},imageName:{type:String,required:!0},link:{type:String,required:!0},type:{type:String,required:!0}},setup(i){const o=i;return(n,t)=>(s(),r("a",{href:o.link,alt:o.title,target:"_blank",class:"block h-48 mx-auto my-2 duration-500 transform bg-center bg-cover shadow-xl cursor-pointer w-96 hover:-translate-y-2 group",style:E({backgroundImage:"url(../../"+i.imageName+")"})},[e("div",vt,[e("h1",xt,d(o.title),1),e("h4",bt,d(o.type),1)])],12,gt))}},kt={class:"px-4 pb-24 bg-white dark:bg-zinc-700"},wt={class:"container mx-auto"},$t={class:"flex flex-wrap items-center mt-4"},M={setup(i){return(o,n)=>(s(),r("section",kt,[e("div",wt,[c(w,{"background-title":"My Work","foreground-title":"My Work"}),e("div",$t,[(s(!0),r(m,null,_(p(st),t=>(s(),g(yt,{key:t.title,title:t.title,"image-name":t.imageName,link:t.link,type:t.type},null,8,["title","image-name","link","type"]))),128))])])]))}},St={class:"flex flex-col h-screen font-primary"},zt={class:"flex-grow overflow-y-scroll lg:ml-60 xl:ml-80 scroll-smooth"},Nt={id:"footer"},Et={setup(i){const o=f("home"),n=f(null),t=f(null),l=f(null),a=f(null),u=new IntersectionObserver(x=>{x[0].isIntersecting===!0&&(o.value=x[0].target.id)},{threshold:[.1]});return A(()=>{u.observe(n.value),u.observe(t.value),u.observe(l.value),u.observe(a.value)}),(x,Lt)=>(s(),r("div",St,[c(me,{"active-link":o.value},null,8,["active-link"]),e("main",zt,[e("div",{id:"home",ref_key:"home",ref:n,class:"w-full h-full"},[c(I)],512),e("div",{id:"about",ref_key:"about",ref:t},[c(L)],512),e("div",{id:"resume",ref_key:"resume",ref:l},[c(C)],512),e("div",{id:"portfolio",ref_key:"portfolio",ref:a},[c(M)],512),e("div",Nt,[c(ye)])])]))}},It=P({history:q("/Portfolioo/"),routes:[{path:"/",name:"home",component:I},{path:"/about",name:"about",component:L},{path:"/resume",name:"resume",component:C},{path:"/portfolio",name:"portfolio",component:M}]});const $=R(Et);$.use(T());$.use(It);$.mount("#app");
