(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[305],{2087:function(e,s,t){Promise.resolve().then(t.bind(t,5731))},5731:function(e,s,t){"use strict";t.r(s);var n=t(7437),l=t(4033),i=t(2265),a=t(1641),r=t(6691),c=t.n(r),o=t(3023),d=t(3067);s.default=e=>{var s,t;let{params:r}=e,m=(0,l.useRouter)(),{countryName:u}=r,[x,f]=(0,i.useState)(!0),[h,p]=(0,i.useState)([]),v=(0,i.useCallback)(async()=>{try{let e=await fetch("/api/".concat(u)),s=await e.json();p(s[0]),f(!1)}catch(e){console.log(e)}},[u]);(0,i.useEffect)(()=>{let e=setTimeout(()=>{v()},1e3);return()=>clearTimeout(e)},[v]);let j=(0,i.useMemo)(()=>{var e;return h?null==h?void 0:null===(e=h.population)||void 0===e?void 0:e.toLocaleString("en-EN"):null},[h]),g=(0,i.useMemo)(()=>{var e;return h?null==h?void 0:null===(e=h.currencies)||void 0===e?void 0:e.map(e=>e.name):null},[h]),N=(0,i.useMemo)(()=>{var e;return h?null==h?void 0:null===(e=h.languages)||void 0===e?void 0:e.map(e=>e.name):null},[h]);return(0,n.jsx)("div",{className:"m-20 relative flex flex-col justify-center items-center",children:x?(0,n.jsx)("div",{className:"flex justify-center items-center",children:(0,n.jsx)(a.Z,{size:200,color:"#3bc04b",loading:x})}):(0,n.jsx)("div",{children:(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"my-10 mx-2",children:(0,n.jsxs)(o.z,{className:"px-7 py-5",onClick:()=>m.push(".."),children:[(0,n.jsx)(d.Z,{size:19})," Back"]})}),(0,n.jsxs)("div",{className:"flex flex-col md:flex-row",children:[(0,n.jsx)(c(),{src:null==h?void 0:null===(s=h.flags)||void 0===s?void 0:s.png,width:500,height:200,alt:"".concat(null==h?void 0:h.name," flag"),className:"border w-[400px] mx-auto md:w-[500px]"}),(0,n.jsxs)("div",{className:"md:mx-20 text-center md:text-left",children:[(0,n.jsx)("h1",{className:"font-bold md:text-3xl text-2xl my-4",children:null==h?void 0:h.name}),(0,n.jsxs)("div",{className:"md:flex md:gap-10",children:[(0,n.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,n.jsxs)("span",{className:"flex gap-1 items-center md:justify-start justify-center",children:[(0,n.jsx)("p",{className:"font-semibold text-sm",children:"Native Name: "}),(0,n.jsx)("p",{className:"font-light text-sm",children:null==h?void 0:h.nativeName})]}),(0,n.jsxs)("span",{className:"flex gap-1 items-center md:justify-start justify-center",children:[(0,n.jsx)("p",{className:"font-semibold text-sm",children:"Population: "}),(0,n.jsx)("p",{className:"font-light text-sm",children:j})]}),(0,n.jsxs)("span",{className:"flex gap-1 items-center md:justify-start justify-center",children:[(0,n.jsx)("p",{className:"font-semibold text-sm",children:"Region: "}),(0,n.jsx)("p",{className:"font-light text-sm",children:null==h?void 0:h.region})]}),(0,n.jsxs)("span",{className:"flex gap-1 items-center md:justify-start justify-center",children:[(0,n.jsx)("p",{className:"font-semibold text-sm",children:"Sub Region: "}),(0,n.jsx)("p",{className:"font-light text-sm",children:null==h?void 0:h.subregion})]}),(0,n.jsxs)("span",{className:"flex gap-1 items-center md:justify-start justify-center",children:[(0,n.jsx)("p",{className:"font-semibold text-sm",children:"Capital: "}),(0,n.jsx)("p",{className:"font-light text-sm",children:null==h?void 0:h.capital})]})]}),(0,n.jsxs)("div",{className:"flex flex-col gap-3 mt-2",children:[(0,n.jsxs)("span",{className:"flex gap-1 items-center md:justify-start justify-center",children:[(0,n.jsxs)("p",{className:"font-semibold text-sm",children:["Top Level Domain:"," "]}),(0,n.jsx)("p",{className:"font-light text-sm",children:null==h?void 0:h.topLevelDomain})]}),(0,n.jsxs)("span",{className:"flex gap-1 items-center md:justify-start justify-center",children:[(0,n.jsx)("p",{className:"font-semibold text-sm",children:"Currencies: "}),(0,n.jsx)("p",{className:"font-light text-sm",children:null==g?void 0:g.join(", ")})]}),(0,n.jsxs)("span",{className:"flex gap-1 items-center md:justify-start justify-center",children:[(0,n.jsx)("p",{className:"font-semibold text-sm",children:"Languages: "}),(0,n.jsx)("p",{className:"font-light text-sm",children:null==N?void 0:N.join(", ")})]})]})]}),(0,n.jsxs)("div",{className:"my-10 flex items-center md:justify-start justify-center gap-1",children:[(0,n.jsx)("p",{className:"text-sm",children:"Border Countries:"}),null==h?void 0:null===(t=h.borders)||void 0===t?void 0:t.map(e=>(0,n.jsx)(o.z,{variant:"ghost",onClick:()=>m.push("/"),children:e},e))]})]})]})]})})})}},3023:function(e,s,t){"use strict";t.d(s,{z:function(){return o}});var n=t(7437),l=t(2265),i=t(7256),a=t(6061),r=t(9311);let c=(0,a.j)("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),o=l.forwardRef((e,s)=>{let{className:t,variant:l,size:a,asChild:o=!1,...d}=e,m=o?i.g7:"button";return(0,n.jsx)(m,{className:(0,r.cn)(c({variant:l,size:a,className:t})),ref:s,...d})});o.displayName="Button"},9311:function(e,s,t){"use strict";t.d(s,{cn:function(){return cn}});var n=t(7042),l=t(3986);function cn(){for(var e=arguments.length,s=Array(e),t=0;t<e;t++)s[t]=arguments[t];return(0,l.m)((0,n.W)(s))}}},function(e){e.O(0,[344,205,971,864,744],function(){return e(e.s=2087)}),_N_E=e.O()}]);