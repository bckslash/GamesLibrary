(this.webpackJsonplib=this.webpackJsonplib||[]).push([[0],{28:function(e,t,c){},39:function(e,t){},40:function(e,t,c){"use strict";c.r(t);var s=c(2),a=c.n(s),r=c(18),n=c.n(r),i=(c(28),c(6)),l=c(3),o=c(4),j=c(10),u=c(21),x=c(1);var d=function(e){var t=e.hamburgerMenu;return Object(x.jsxs)("ul",{className:"text-lg px-8 py-5 space-y-2 ".concat(t?"bg-dark absolute w-full":"hidden"," md:flex justify-center items-center md:space-y-0 gap-10"),children:[Object(x.jsx)("li",{children:Object(x.jsx)(i.b,{className:"hover:text-gray-500 transition-colors duration-200 hover:animate-pulse",to:"/",children:"HOME"})}),Object(x.jsx)("li",{children:Object(x.jsx)(i.b,{className:"hover:text-gray-500 transition-colors duration-200 hover:animate-pulse",to:"/games",children:"GAMES"})}),Object(x.jsx)("li",{children:Object(x.jsx)(i.b,{className:"hover:text-gray-500 transition-colors duration-200 hover:animate-pulse",to:"/about",children:"ABOUT"})}),Object(x.jsx)("li",{children:Object(x.jsx)(i.b,{className:"hover:text-gray-500 transition-colors duration-200 hover:animate-pulse",to:"/contact",children:"CONTACT"})})]})},b=function(){var e=Object(s.useState)(!1),t=Object(o.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){return window.addEventListener("resize",(function(){a(!1)})),function(){window.removeEventListener("resize",(function(){}))}})),Object(x.jsxs)("nav",{className:"bg-dark transition-all sticky top-0 text-text",children:[Object(x.jsxs)("div",{className:"px-8 py-4 flex justify-between md:justify-evenly items-center ".concat(c&&""),children:[Object(x.jsxs)(i.b,{to:"/",className:"text-3xl sm:text-4xl flex items-center font-semibold cursor-pointer hover:animate-pulse rainbow transition-all ",children:[Object(x.jsx)(j.a,{}),Object(x.jsx)("h1",{children:".LIB"})]}),Object(x.jsx)("button",{onClick:function(){a(!c)},className:"text-4xl",children:Object(x.jsx)(u.a,{className:"".concat(c&&"transform -rotate-90"," transition-transform md:hidden")})}),c||Object(x.jsx)(d,{hamburgerMenu:c})]}),c&&Object(x.jsx)(d,{hamburgerMenu:c})]})},m=c(11);var h=function(){return Object(x.jsxs)("footer",{className:"bg-dark text-text z-10 py-10 px-5 flex flex-col sm:flex-row text-center md:text-left items-center justify-center flex-wrap gap-8 shadow-xl",children:[Object(x.jsxs)("div",{className:"text-3xl sm:text-4xl flex items-center font-semibold cursor-pointer hover:text-gray-500 transition-color duration-200 hover:animate-pulse rainbow",onClick:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},children:[Object(x.jsx)(j.a,{}),Object(x.jsx)("h1",{children:".LIB"})]}),Object(x.jsx)("div",{className:"object-center md:w-2/5",children:Object(x.jsxs)("p",{className:"font-extralight",children:[Object(x.jsxs)("em",{className:"font-light",children:["\xa9 2021 TUKE Robert Smrek Game Library."," "]}),"All rights reserved. All trademarks are property of their respective owners. MIT Licenced."]})}),Object(x.jsxs)("ul",{className:"space-y-4",children:[Object(x.jsxs)("li",{className:"flex items-center gap-1 hover:text-gray-500 transition-color duration-200",children:[Object(x.jsx)(m.a,{}),Object(x.jsx)("a",{href:"http://www.linkedin.com/in/robertsmrek",target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"})]}),Object(x.jsxs)("li",{className:"flex items-center gap-1 hover:text-gray-500 transition-color duration-200",children:[Object(x.jsx)(m.b,{}),Object(x.jsx)("a",{href:"http://www.github.com/bckslash",target:"_blank",rel:"noopener noreferrer",children:"GitHub"})]})]})]})},f=c(8),O=c(17),p=c.n(O),g=c(22),v=(c(39),a.a.createContext());function y(e){var t=e.children,c=Object(s.useState)(0),a=Object(o.a)(c,2),r=a[0],n=a[1],i=Object(s.useState)([]),l=Object(o.a)(i,2),j=l[0],u=l[1],d=Object(s.useState)({}),b=Object(o.a)(d,2),m=b[0],h=b[1],f=Object(s.useState)({}),O=Object(o.a)(f,2),y=(O[0],O[1]),N=Object(s.useState)(1),w=Object(o.a)(N,2),E=w[0],k=w[1],S=Object(s.useState)(!0),q=Object(o.a)(S,2),A=q[0],L=q[1],T="https://api.rawg.io/api/games?",z=function(){var e=Object(g.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L(!0),e.prev=1,e.next=4,fetch("".concat(T,"key=").concat("79fef868b7604333b57ebde17d0922a8","&page=").concat(E)).then((function(e){return e.json()})).then((function(e){var t=e.next,c=e.results;y({next:t,results:c}),u(c),h(c[r]),L(!1)}));case 4:e.next=10;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0),L(!1);case 10:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){z()}),[T,E]),Object(x.jsx)(v.Provider,{value:{game:m,setGame:h,number:r,setNumber:n,loading:A,games:j,page:E,setPage:k},children:t})}var N=function(){return Object(s.useContext)(v)};var w=function(e){var t=e.game,c=Object(s.useState)(!0),a=Object(o.a)(c,2),r=a[0],n=a[1];return Object(x.jsxs)("section",{className:"bg-dark flex-1 text-text rounded shadow-xl hover:filter saturate-0 brightness-75",children:[Object(x.jsx)(i.b,{to:"/game/".concat(t.id),children:Object(x.jsx)("img",{className:"rounded-t cursor-pointer w-full",src:t.background_image,alt:t.name})}),Object(x.jsxs)("section",{className:"p-8 space-y-5 text-center",children:[Object(x.jsx)("h1",{className:"text-center text-2xl font-semibold capitalize",children:t.name}),Object(x.jsx)("table",{className:"text-left w-full text-sm sm:text-base ".concat(r&&"hidden"),children:Object(x.jsxs)("tbody",{children:[Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"RATING:"}),Object(x.jsx)("td",{className:"capitalize",children:t.rating})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"RELEASE DATE:"}),Object(x.jsx)("td",{className:"capitalize",children:t.released})]})]})}),Object(x.jsx)(S,{showMore:r,setShowMore:n})]})]})},E=function(e){var t=e.handlePreview,c=e.children;return Object(x.jsx)("button",{onClick:function(){return t()},className:"text-4xl text-text bg-dark rounded-l py-10 hover:opacity-80 transition-opacity duration-200",children:c})},k=function(e){var t=e.handleNext,c=e.children;return Object(x.jsx)("button",{onClick:t,className:"text-4xl text-text bg-dark rounded-r py-10 hover:opacity-80 transition-opacity duration-200",children:c})},S=function(e){var t=e.showMore,c=e.setShowMore;return Object(x.jsx)("button",{onClick:function(){c(!t)},className:"bg-primary mx-auto px-3 py-1 rounded shadow-xl text-white hover:opacity-80 transition-opacity duration-200",children:t?"Read More":"Show less"})},q=function(){var e=N(),t=e.number,c=e.setNumber,a=e.game,r=e.setGame,n=e.games;return Object(s.useEffect)((function(){r(n[t])}),[t,r]),Object(x.jsxs)("article",{className:"sm:w-9/12 lg:w-1/3 flex justify-between items-center",children:[Object(x.jsx)(E,{handlePreview:function(){c(t<=0?n.length-1:t-1)},children:Object(x.jsx)(f.a,{})}),Object(x.jsx)(w,{game:a}),Object(x.jsx)(k,{handleNext:function(){c(t>=10?0:t+1)},children:Object(x.jsx)(f.b,{})})]})};var A=function(e){var t=e.fun,c=e.children;return Object(x.jsx)("button",{onClick:t,className:"bg-dark text-light px-5 py-2 rounded hover:opacity-80 transition-opacity duration-200 hover:animate-pulse",children:c})},L=function(e){var t=e.children;return Object(x.jsx)("button",{className:"bg-dark text-light px-5 py-2 rounded hover:opacity-80 mt-5 transition-opacity duration-200 hover:animate-pulse",children:t})};var T=function(){return document.title="Game Library",Object(s.useEffect)((function(){window.scrollTo({top:0,left:0})}),[]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("main",{className:"min-h-screen flex flex-col justify-between",children:[Object(x.jsx)(b,{}),Object(x.jsxs)("section",{className:"page flex-1 flex flex-col gap-10 lg:flex-row justify-around items-center",children:[Object(x.jsxs)("section",{className:"text-text space-y-5 text-center 2xl:text-left",children:[Object(x.jsx)("p",{className:"text-base",children:"Are you done playing ?"}),Object(x.jsx)("h1",{className:"text-4xl font-semibold",children:"Explore and review games"}),Object(x.jsx)(i.b,{to:"/games",children:Object(x.jsx)(L,{children:"Browse games"})})]}),Object(x.jsx)(q,{})]})]}),Object(x.jsx)(h,{})]})};var z=function(){document.title="Game Library | Games";var e=N(),t=e.games,c=e.page,s=e.setPage;return a.a.useEffect((function(){window.scrollTo({top:0,left:0})}),[]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("main",{className:"min-h-screen flex flex-col justify-between",children:[Object(x.jsx)(b,{}),Object(x.jsxs)("section",{className:"page flex-1 text-center",children:[Object(x.jsx)("div",{className:"grid gap-10 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 items-start",children:t.map((function(e){return Object(x.jsx)(w,{game:e},e.id)}))}),Object(x.jsxs)("div",{className:"text-base md:text-xl 2xl:text-2xl text-center mt-20 space-x-5 flex justify-center items-center text-light",children:[Object(x.jsx)(A,{fun:function(){1!==c&&s(c-1)},children:Object(x.jsx)(f.a,{})}),Object(x.jsxs)("h1",{children:["Page ",c]}),Object(x.jsx)(A,{fun:function(){s(c+1)},children:Object(x.jsx)(f.b,{})})]})]})]}),Object(x.jsx)(h,{})]})};var M=function(){Object(l.f)().id;var e=Object(s.useState)(!1),t=Object(o.a)(e,2),c=t[0],r=t[1],n=Object(s.useState)([]),i=Object(o.a)(n,1)[0];return a.a.useEffect((function(){window.scrollTo({top:0,left:0})}),[]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("main",{className:"min-h-screen flex flex-col justify-between",children:[Object(x.jsx)(b,{}),Object(x.jsx)("section",{className:"page flex-1 text-text flex justify-center",children:Object(x.jsxs)("div",{className:"space-y-5 bg-dark p-10 bg-opacity-50 rounded xl:w-4/5",children:[Object(x.jsx)("h1",{className:"text-4xl font-medium",children:i.title}),Object(x.jsxs)("div",{className:"flex space-y-15 gap-20 md:gap-10 2xl:gap-0 lg:space-y-0 2xl:space-x-10 flex-col 2xl:flex-row",children:[Object(x.jsxs)("div",{className:"flex flex-col space-y-5 2xl:max-w-lg",children:[Object(x.jsx)("video",{className:"shadow-md",src:i.video.url,controls:!0}),Object(x.jsxs)("div",{className:"space-y-2",children:[Object(x.jsx)("h1",{className:"text-xl font-medium",children:"About game:"}),Object(x.jsx)("p",{className:"text-justify text-gray-400 leading-relaxed",children:c?i.description.about:i.description.about.length>=500?"".concat(i.description.about.slice(0,500)," ..."):i.description.about}),i.description.about.length>=500&&Object(x.jsx)("button",{className:"bg-primary text-white px-3 py-1 rounded shadow-md capitalize",onClick:function(){return r(!c)},children:c?"show less":"read more"})]})]}),Object(x.jsxs)("div",{className:"flex flex-col space-y-5",children:[Object(x.jsx)("img",{className:"shadow-md",src:i.images.url,alt:i.title}),Object(x.jsx)("p",{className:"text-justify text-gray-400",children:i.description.short}),Object(x.jsx)("a",{className:"text-green-500 bg-dark text-center py-2 rounded shadow-md hover:animate-pulse",href:i.links.buy,target:"_blank",rel:"noopener noreferrer",children:"Buy the game"}),Object(x.jsx)("table",{className:"text-justify w-full text-sm sm:text-base ",children:Object(x.jsxs)("tbody",{children:[Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"RECENT REVIEWS:"}),Object(x.jsx)("td",{className:"capitalize text-gray-400",children:i.reviews.recent})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"ALL REVIEWS:"}),Object(x.jsx)("td",{className:"capitalize text-gray-400",children:i.reviews.all})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"RELEASE DATE:"}),Object(x.jsx)("td",{className:"capitalize text-gray-400",children:i.release})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"DEVELOPER:"}),Object(x.jsx)("td",{className:"capitalize text-gray-400",children:i.creators.developer})]}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"PUBLISHER:"}),Object(x.jsx)("td",{className:"capitalize text-gray-400",children:i.creators.publisher})]})]})}),Object(x.jsx)("h1",{className:"text-xl font-medium",children:"Tags: "}),Object(x.jsx)("div",{className:"flex flex-wrap gap-2 overflow-hidden",children:i.tags.map((function(e,t){return Object(x.jsx)("p",{className:"capitalize bg-dark py-1 px-2 rounded shadow flex-grow text-center text-gray-400",children:e},t)}))}),Object(x.jsxs)("h1",{className:"text-xl font-medium",children:["Languages:"," "]}),Object(x.jsx)("div",{className:"flex flex-col gap-2 overflow-hidden",children:i.languages.subtitles.map((function(e,t){return Object(x.jsx)("p",{className:"capitalize py-1 px-2 shadow border-b",children:e},t)}))})]})]})]})})]}),Object(x.jsx)(h,{})]})};var C=function(){return document.title="Game Library | About",a.a.useEffect((function(){window.scrollTo({top:0,left:0})}),[]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("main",{className:"min-h-screen flex flex-col justify-between",children:[Object(x.jsx)(b,{}),Object(x.jsx)("section",{className:"page flex-1",children:Object(x.jsxs)("div",{className:"text-text 2xl:px-80 space-y-10",children:[Object(x.jsx)("h1",{className:"text-center text-3xl font-semibold ",children:"About Page"}),Object(x.jsxs)("p",{className:"text-gray-400 prose-lg",children:["Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nam iste minima voluptates illo, assumenda quae ad iure recusandae, consequuntur quis ut dicta cum tempora expedita voluptas esse dignissimos. Odio quam et animi nihil! Qui minus in doloribus nisi? Eum quam ad cumque numquam voluptatem atque error rem deserunt velit natus laudantium sint quae quis vel laborum beatae, molestiae consequuntur sapiente, tempora, et reiciendis non sunt minus corporis?",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"Assumenda eveniet numquam corporis cumque consectetur fuga dolore, dolores esse delectus rem adipisci veniam veritatis eum praesentium illo ducimus cupiditate eius nemo, vitae beatae, accusantium pariatur autem earum quos! Facilis accusamus suscipit voluptates consectetur a, consequuntur iste quia optio non tempora quae temporibus architecto fugit ratione dolorum reiciendis debitis rem? Fugiat maiores nobis quod non tempora! Dolorum at minima hic sunt sequi ipsum, facilis rerum. Doloremque exercitationem quibusdam dignissimos quod provident, modi numquam, explicabo dolorum ipsa dolore corrupti suscipit consequatur nobis quis tempora tenetur quidem consequuntur natus repellat, facere atque accusamus."]})]})})]}),Object(x.jsx)(h,{})]})},G=c(23);var R=function(e){var t=e.children;return Object(x.jsx)("h4",{className:"bg-red-800 py-2 rounded text-white",children:t})},I=function(e){var t=e.children;return Object(x.jsx)("h4",{className:"bg-green-800 py-2 rounded text-white",children:t})},P=function(){document.title="Game Library | Contact",Object(s.useEffect)((function(){window.scrollTo({top:0,left:0})}),[]);var e=Object(s.useRef)(null),t=Object(s.useRef)(null),c=Object(s.useRef)(null),a=Object(s.useState)({id:"",name:"",email:"",message:""}),r=Object(o.a)(a,2),n=r[0],i=r[1],l=Object(s.useState)(!0),j=Object(o.a)(l,2),u=j[0],d=j[1],m=Object(s.useState)(!1),f=Object(o.a)(m,2),O=f[0],p=f[1];return Object(s.useEffect)((function(){setTimeout((function(){d(!0),p(!1)}),5e3)}),[u,O]),Object(s.useEffect)((function(){localStorage.setItem(n.id,JSON.stringify(n)),e.current.value="",t.current.value="",c.current.value=""}),[n]),Object(s.useEffect)((function(){e.current.focus()}),[]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("main",{className:"min-h-screen flex flex-col justify-between",children:[Object(x.jsx)(b,{}),Object(x.jsx)("section",{className:"page flex-1 text-text",children:Object(x.jsxs)("form",{onSubmit:function(s){if(s.preventDefault(),e.current.value&&t.current.value&&c.current.value){if(r=t.current.value,!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(r).toLowerCase()))return d(!1),void(t.current.value="");var a={id:(new Date).getTime().toString().slice(-6),name:e.current.value,email:t.current.value,message:c.current.value};i(Object(G.a)({},a)),p(!0)}var r},className:"flex flex-col gap-5 md:w-6/12 mx-auto text-center",children:[Object(x.jsx)("h2",{className:"mb-10 text-2xl md:text-4xl font-semibold ",children:"Send us a feedback"}),u||Object(x.jsx)(R,{children:"Invalid Email Address"}),O&&Object(x.jsx)(I,{children:"The Feedback was sent successfully"}),Object(x.jsx)("input",{className:"bg-transparent border-gray-900 rounded",id:"name",type:"text",placeholder:"NAME",ref:e,required:!0}),Object(x.jsx)("input",{className:"bg-transparent border-gray-900 rounded",id:"email",type:"text",placeholder:"E-MAIL",ref:t,required:!0}),Object(x.jsx)("textarea",{className:"bg-transparent border-gray-900 rounded h-96",id:"message",type:"text",placeholder:"MESSAGE",ref:c,required:!0}),Object(x.jsx)(L,{type:"submit",children:"Submit"})]})})]}),Object(x.jsx)(h,{})]})},F=c(12);var B=function(){return document.title="Game Library | Error",a.a.useEffect((function(){window.scrollTo({top:0,left:0})}),[]),Object(x.jsxs)("main",{className:"h-semiscreen",children:[Object(x.jsx)(b,{}),Object(x.jsxs)("section",{className:"page text-gray-300 text-center space-y-10",children:[Object(x.jsx)("h1",{className:"text-4xl font-medium",children:"Nothing here."}),Object(x.jsx)("div",{className:"flex justify-center animate-pulse",children:Object(x.jsx)(F.a,{className:"text-9xl animate-spin-slow"})})]}),Object(x.jsx)(h,{})]})};var D=function(){return Object(x.jsx)("main",{className:"min-h-screen flex flex-col justify-between",children:Object(x.jsx)("section",{className:"page flex-grow flex flex-col 2xl:flex-row justify-evenly items-center gap-10 space-y-10 2xl:space-y-0 md:gap-0",children:Object(x.jsx)("div",{className:"flex justify-center animate-pulse text-white",children:Object(x.jsx)(F.a,{className:"text-9xl animate-spin"})})})})};var _=function(){return N().loading?Object(x.jsx)(D,{}):Object(x.jsx)(i.a,{children:Object(x.jsxs)(l.c,{children:[Object(x.jsx)(l.a,{exact:!0,path:"/",children:Object(x.jsx)(T,{})}),Object(x.jsx)(l.a,{path:"/games",children:Object(x.jsx)(z,{})}),Object(x.jsx)(l.a,{path:"/game/:id",children:Object(x.jsx)(M,{})}),Object(x.jsx)(l.a,{path:"/about",children:Object(x.jsx)(C,{})}),Object(x.jsx)(l.a,{path:"/contact",children:Object(x.jsx)(P,{})}),Object(x.jsx)(l.a,{path:"*",children:Object(x.jsx)(B,{})})]})})};n.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(y,{children:Object(x.jsx)(_,{})})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.c701ec2c.chunk.js.map