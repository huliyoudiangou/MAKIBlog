(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[797],{3025:function(e,t,r){Promise.resolve().then(r.bind(r,5814))},7648:function(e,t,r){"use strict";r.d(t,{default:function(){return s.a}});var a=r(2972),s=r.n(a)},9376:function(e,t,r){"use strict";var a=r(5475);r.o(a,"useRouter")&&r.d(t,{useRouter:function(){return a.useRouter}}),r.o(a,"useSearchParams")&&r.d(t,{useSearchParams:function(){return a.useSearchParams}})},5814:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var a=r(7437),s=r(2265),n=r(7648),c=r(9376);async function i(){let e=await fetch("/api/posts");return await e.json()}function u(){let e=(0,c.useSearchParams)(),t=(null==e?void 0:e.get("q"))||"",[r,u]=(0,s.useState)([]);return(0,s.useEffect)(()=>{(async()=>{u((await i()).filter(e=>e.title.toLowerCase().includes(t.toLowerCase())||e.content.toLowerCase().includes(t.toLowerCase())))})()},[t]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("h1",{className:"text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white",children:["搜索结果: ",t]}),r.length>0?(0,a.jsx)("div",{className:"grid gap-6",children:r.map(e=>(0,a.jsx)(n.default,{href:"/posts/".concat(e.slug),className:"block",children:(0,a.jsxs)("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300 border border-gray-200 dark:border-gray-700",children:[(0,a.jsx)("h2",{className:"text-2xl font-semibold mb-2 text-gray-800 dark:text-white",children:e.title}),(0,a.jsx)("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:e.date})]})},e.slug))}):(0,a.jsx)("p",{className:"text-center text-gray-600 dark:text-gray-400",children:"没有找到相关结果。"})]})}function l(){return(0,a.jsx)("div",{className:"bg-gray-100 dark:bg-gray-900 min-h-screen py-8",children:(0,a.jsx)("div",{className:"container mx-auto px-4",children:(0,a.jsx)("div",{className:"max-w-4xl mx-auto",children:(0,a.jsx)(s.Suspense,{fallback:(0,a.jsx)("div",{children:"加载中..."}),children:(0,a.jsx)(u,{})})})})})}}},function(e){e.O(0,[972,971,117,744],function(){return e(e.s=3025)}),_N_E=e.O()}]);