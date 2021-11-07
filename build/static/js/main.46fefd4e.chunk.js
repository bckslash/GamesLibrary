(this.webpackJsonplib=this.webpackJsonplib||[]).push([[0],{26:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var s=a(2),r=a.n(s),i=a(17),n=a.n(i),o=(a(26),a(7)),c=a(3),l=a(10),d=a(1);var u=function(){return Object(d.jsxs)("div",{className:"bg-dark flex sm:px-5 py-7 justify-evenly flex-wrap sm:space-x-40 space-y-5 sm:space-y-0 gap-3 shadow-xl",children:[Object(d.jsxs)("div",{className:"text-3xl sm:text-4xl text-gray-300 flex items-center font-semibold cursor-pointer hover:animate-pulse rainbow ",children:[Object(d.jsx)(l.a,{}),Object(d.jsx)("h1",{children:".LIB"})]}),Object(d.jsxs)("ul",{className:"text-gray-300 mx-10 text-sm sm:text-lg flex items-center justify-center space-x-10 flex-wrap",children:[Object(d.jsx)("li",{className:"hover:text-gray-500 transition-colors duration-200 hover:animate-pulse",children:Object(d.jsx)(o.b,{exact:!0,to:"/",children:"HOME"})}),Object(d.jsx)("li",{className:"hover:text-gray-500 transition-colors duration-200 hover:animate-pulse",children:Object(d.jsx)(o.b,{to:"/games",children:"GAMES"})}),Object(d.jsx)("li",{className:"hover:text-gray-500 transition-colors duration-200 hover:animate-pulse",children:Object(d.jsx)(o.b,{to:"/about",children:"ABOUT"})}),Object(d.jsx)("li",{className:"hover:text-gray-500 transition-colors duration-200 hover:animate-pulse",children:Object(d.jsx)(o.b,{to:"/contact",children:"CONTACT"})})]})]})},m=a(11);var h=function(){return Object(d.jsxs)("div",{className:"bg-dark px-14 py-10 flex flex-col sm:flex-row text-center md:text-left items-center justify-center flex-wrap gap-10 shadow-xl",children:[Object(d.jsxs)("div",{className:"text-3xl sm:text-4xl text-gray-300 flex items-center font-semibold cursor-pointer hover:text-gray-500 transition-color duration-200 hover:animate-pulse rainbow",onClick:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},children:[Object(d.jsx)(l.a,{}),Object(d.jsx)("h1",{children:".LIB"})]}),Object(d.jsx)("div",{className:"text-gray-300 object-center md:w-2/5",children:Object(d.jsxs)("p",{className:"font-extralight",children:[Object(d.jsxs)("em",{className:"font-light",children:["\xa9 2021 TUKE Robert Smrek Game Library."," "]}),"All rights reserved. All trademarks are property of their respective owners. MIT Licenced."]})}),Object(d.jsxs)("ul",{className:"text-gray-300 space-y-5",children:[Object(d.jsxs)("li",{className:"flex items-center gap-1 hover:text-gray-500 transition-color duration-200",children:[Object(d.jsx)(m.a,{}),Object(d.jsx)("a",{href:"http://www.linkedin.com/in/robertsmrek",target:"_blank",rel:"noopener noreferrer",children:"LinkedIn"})]}),Object(d.jsxs)("li",{className:"flex items-center gap-1 hover:text-gray-500 transition-color duration-200",children:[Object(d.jsx)(m.b,{}),Object(d.jsx)("a",{href:"http://www.github.com/bckslash",target:"_blank",rel:"noopener noreferrer",children:"GitHub"})]})]})]})},p=a(5),b=a(12),g=a(8),x=r.a.createContext();function j(e){var t=e.children,a=Object(s.useState)(0),r=Object(p.a)(a,2),i=r[0],n=r[1],o=Object(s.useState)(g),c=Object(p.a)(o,2),l=c[0],u=(c[1],Object(s.useState)(l[i])),m=Object(p.a)(u,2),h=m[0],b=m[1];return Object(d.jsx)(x.Provider,{value:{games:l,game:h,setGame:b,number:i,setNumber:n},children:t})}var f=function(e){var t=e.game,a=Object(s.useState)(!0),r=Object(p.a)(a,2),i=r[0],n=r[1];return Object(d.jsxs)("section",{className:"bg-dark text-gray-300 rounded shadow-xl hover:filter saturate-0 brightness-75",children:[Object(d.jsx)(o.b,{to:"/game/".concat(t.id),children:Object(d.jsx)("img",{className:"rounded-t cursor-pointer w-full",src:t.images.url,alt:t.title})}),Object(d.jsxs)("section",{className:"p-8 space-y-5 text-center",children:[Object(d.jsx)("h1",{className:"text-center text-2xl font-semibold capitalize",children:t.title}),Object(d.jsx)("p",{className:"text-sm sm:text-base text-left ".concat(i&&"hidden"," "),children:t.description.short}),Object(d.jsx)("table",{className:"text-left w-full text-sm sm:text-base ".concat(i&&"hidden"),children:Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"ALL REVIEWS:"}),Object(d.jsx)("td",{className:"capitalize",children:t.reviews.all})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"RELEASE DATE:"}),Object(d.jsx)("td",{className:"capitalize",children:t.release})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"DEVELOPER:"}),Object(d.jsx)("td",{className:"capitalize",children:t.creators.developer})]})]})}),Object(d.jsx)(O,{showMore:i,setShowMore:n})]})]})},v=function(e){var t=e.handlePreview,a=e.children;return Object(d.jsx)("button",{onClick:function(){return t()},className:"text-4xl text-gray-300 bg-dark rounded-l py-10 hover:opacity-80 transition-opacity duration-200",children:a})},y=function(e){var t=e.handleNext,a=e.children;return Object(d.jsx)("button",{onClick:t,className:"text-4xl text-gray-300 bg-dark rounded-r py-10 hover:opacity-80 transition-opacity duration-200",children:a})},O=function(e){var t=e.showMore,a=e.setShowMore;return Object(d.jsx)("button",{onClick:function(){a(!t)},className:"bg-primary mx-auto px-3 py-1 rounded shadow-xl text-white hover:opacity-80 transition-opacity duration-200",children:t?"Read More":"Show less"})},w=function(){var e=Object(s.useContext)(x),t=e.number,a=e.setNumber,r=e.game,i=e.setGame;return Object(s.useEffect)((function(){i(g[t])}),[t,i]),Object(d.jsxs)("article",{className:"sm:w-9/12 lg:w-3/6 flex justify-center items-center",children:[Object(d.jsx)(v,{handlePreview:function(){a(t<=0?g.length-1:t-1)},children:Object(d.jsx)(b.a,{})}),Object(d.jsx)(f,{game:r}),Object(d.jsx)(y,{handleNext:function(){a(t>=2?0:t+1)},children:Object(d.jsx)(b.b,{})})]})};var k=function(e){var t=e.children;return Object(d.jsx)("button",{className:"bg-dark px-5 py-2 rounded hover:opacity-80 mt-5 transition-opacity duration-200 hover:animate-pulse",children:t})};var N=function(){return Object(d.jsxs)("main",{className:"h-semiscreen",children:[Object(d.jsx)(u,{}),Object(d.jsxs)("section",{className:"page flex flex-col 2xl:flex-row justify-evenly items-center gap-10 space-y-10 2xl:space-y-0 md:gap-0",children:[Object(d.jsxs)("section",{className:"text-gray-300 space-y-5 text-center 2xl:text-left",children:[Object(d.jsx)("p",{className:"text-base",children:"Are you done playing ?"}),Object(d.jsx)("h1",{className:"text-4xl font-semibold",children:"Explore and review games"}),Object(d.jsx)(o.b,{to:"/games",children:Object(d.jsx)(k,{children:"Browse games"})})]}),Object(d.jsx)(w,{})]}),Object(d.jsx)(h,{})]})};var S=function(){return Object(d.jsxs)("main",{className:"h-semiscreen",children:[Object(d.jsx)(u,{}),Object(d.jsx)("section",{className:"page grid gap-10 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 items-start",children:g.map((function(e){return Object(d.jsx)(f,{game:e},e.id)}))}),Object(d.jsx)(h,{})]})};var A=function(){var e=Object(c.f)().id,t=Object(s.useState)(!1),a=Object(p.a)(t,2),r=a[0],i=a[1],n=Object(s.useState)(g[e]),o=Object(p.a)(n,2),l=o[0];return o[1],console.log(l),Object(d.jsxs)("main",{className:"h-semiscreen",children:[Object(d.jsx)(u,{}),Object(d.jsx)("section",{className:"page text-gray-300 flex justify-center",children:Object(d.jsxs)("div",{className:"space-y-5 bg-dark p-10 bg-opacity-50 rounded xl:w-4/5",children:[Object(d.jsx)("h1",{className:"text-4xl font-medium",children:l.title}),Object(d.jsxs)("div",{className:"flex space-y-15 gap-20 md:gap-10 2xl:gap-0 lg:space-y-0 2xl:space-x-10 flex-col 2xl:flex-row",children:[Object(d.jsxs)("div",{className:"flex flex-col space-y-5 2xl:max-w-lg",children:[Object(d.jsx)("video",{className:"shadow-md",src:l.video.url,controls:!0}),Object(d.jsxs)("div",{className:"space-y-2",children:[Object(d.jsx)("h1",{className:"text-xl font-medium",children:"About game:"}),Object(d.jsx)("p",{className:"text-justify text-gray-400 leading-relaxed",children:r?l.description["about-game"]:"".concat(l.description["about-game"].slice(0,500)," ...")}),l.description["about-game"].length>=500&&Object(d.jsx)("button",{className:"bg-primary text-white px-3 py-1 rounded shadow-md capitalize",onClick:function(){return i(!r)},children:r?"show less":"read more"})]})]}),Object(d.jsxs)("div",{className:"flex flex-col space-y-5",children:[Object(d.jsx)("img",{className:"shadow-md",src:l.images.url,alt:l.title}),Object(d.jsx)("p",{className:"text-justify text-gray-400",children:l.description.short}),Object(d.jsx)("a",{className:"text-green-500 bg-dark text-center py-2 rounded shadow-md hover:animate-pulse",href:l.links.buy,target:"_blank",rel:"noopener noreferrer",children:"Buy the game"}),Object(d.jsx)("table",{className:"text-justify w-full text-sm sm:text-base ",children:Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"RECENT REVIEWS:"}),Object(d.jsx)("td",{className:"capitalize text-gray-400",children:l.reviews.recent})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"ALL REVIEWS:"}),Object(d.jsx)("td",{className:"capitalize text-gray-400",children:l.reviews.all})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"RELEASE DATE:"}),Object(d.jsx)("td",{className:"capitalize text-gray-400",children:l.release})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"DEVELOPER:"}),Object(d.jsx)("td",{className:"capitalize text-gray-400",children:l.creators.developer})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"PUBLISHER:"}),Object(d.jsx)("td",{className:"capitalize text-gray-400",children:l.creators.publisher})]})]})}),Object(d.jsx)("h1",{className:"text-xl font-medium",children:"Tags: "}),Object(d.jsx)("div",{className:"flex flex-wrap gap-2 overflow-hidden",children:l.tags.map((function(e){return Object(d.jsx)("p",{className:"capitalize bg-dark py-1 px-2 rounded shadow flex-grow text-center text-gray-400",children:e})}))}),Object(d.jsx)("h1",{className:"text-xl font-medium",children:"Languages: "}),Object(d.jsx)("div",{className:"flex flex-col gap-2 overflow-hidden",children:l.languages.subtitles.map((function(e){return Object(d.jsx)("p",{className:"capitalize py-1 px-2 shadow border-b",children:e})}))})]})]})]})}),Object(d.jsx)(h,{})]})};var q=function(){return Object(d.jsxs)("main",{className:"h-semiscreen",children:[Object(d.jsx)(u,{}),Object(d.jsx)("section",{className:"page",children:Object(d.jsxs)("div",{className:"text-gray-300 2xl:px-80 space-y-10",children:[Object(d.jsx)("h1",{className:"text-center text-3xl font-semibold ",children:"About Page"}),Object(d.jsxs)("p",{className:"text-gray-400 prose-lg",children:["Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nam iste minima voluptates illo, assumenda quae ad iure recusandae, consequuntur quis ut dicta cum tempora expedita voluptas esse dignissimos. Odio quam et animi nihil! Qui minus in doloribus nisi? Eum quam ad cumque numquam voluptatem atque error rem deserunt velit natus laudantium sint quae quis vel laborum beatae, molestiae consequuntur sapiente, tempora, et reiciendis non sunt minus corporis?",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"Assumenda eveniet numquam corporis cumque consectetur fuga dolore, dolores esse delectus rem adipisci veniam veritatis eum praesentium illo ducimus cupiditate eius nemo, vitae beatae, accusantium pariatur autem earum quos! Facilis accusamus suscipit voluptates consectetur a, consequuntur iste quia optio non tempora quae temporibus architecto fugit ratione dolorum reiciendis debitis rem? Fugiat maiores nobis quod non tempora! Dolorum at minima hic sunt sequi ipsum, facilis rerum. Doloremque exercitationem quibusdam dignissimos quod provident, modi numquam, explicabo dolorum ipsa dolore corrupti suscipit consequatur nobis quis tempora tenetur quidem consequuntur natus repellat, facere atque",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"mollitia. Molestiae sint ratione iusto numquam cupiditate, saepe aliquam exercitationem minima nulla? Iure molestias illum deleniti commodi, quia saepe expedita! Sed totam inventore facere doloremque hic, voluptate veritatis quo, magnam accusamus explicabo harum laudantium unde maxime excepturi ex! Nemo sequi suscipit eaque, facilis voluptatem excepturi voluptate consequatur dignissimos quae placeat! Tenetur quos, provident asperiores voluptate temporibus quae repellat iusto excepturi ipsum sit nobis totam, enim officiis reprehenderit. Animi quibusdam minima molestiae, fuga deserunt repellat temporibus ullam illum culpa nihil maxime aspernatur nesciunt atque consequatur dolorem, cum facere iure asperiores dicta, magnam nostrum corporis exercitationem placeat tempore! Accusantium voluptatibus eius vitae temporibus atque similique eaque tenetur culpa. Voluptatum maiores eveniet porro adipisci magni quas assumenda, odio aliquam ipsam dolorum",Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),"officiis quia rerum dicta obcaecati nesciunt ipsum numquam illo dignissimos sapiente repellendus totam. Porro quis dolor voluptate mollitia iusto perspiciatis illo nesciunt, animi accusamus."]})]})}),Object(d.jsx)(h,{})]})},T=a(21);var C=function(e){var t=e.children;return Object(d.jsx)("h4",{className:"bg-red-800 py-2 rounded text-white",children:t})},R=function(e){var t=e.children;return Object(d.jsx)("h4",{className:"bg-green-800 py-2 rounded text-white",children:t})},E=function(){var e=Object(s.useRef)(null),t=Object(s.useRef)(null),a=Object(s.useRef)(null),r=Object(s.useState)({id:"",name:"",email:"",message:""}),i=Object(p.a)(r,2),n=i[0],o=i[1],c=Object(s.useState)(!0),l=Object(p.a)(c,2),m=l[0],b=l[1],g=Object(s.useState)(!1),x=Object(p.a)(g,2),j=x[0],f=x[1];return Object(s.useEffect)((function(){setTimeout((function(){b(!0),f(!1)}),5e3)}),[m,j]),Object(s.useEffect)((function(){localStorage.setItem(n.id,JSON.stringify(n)),e.current.value="",t.current.value="",a.current.value=""}),[n]),Object(s.useEffect)((function(){e.current.focus()}),[]),Object(d.jsxs)("main",{className:"h-semiscreen",children:[Object(d.jsx)(u,{}),Object(d.jsx)("section",{className:"page",children:Object(d.jsxs)("form",{onSubmit:function(s){if(s.preventDefault(),e.current.value&&t.current.value&&a.current.value){if(i=t.current.value,!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(i).toLowerCase()))return b(!1),void(t.current.value="");var r={id:(new Date).getTime().toString().slice(-6),name:e.current.value,email:t.current.value,message:a.current.value};o(Object(T.a)({},r)),f(!0)}var i},className:"flex flex-col gap-5 md:w-6/12 mx-auto text-center text-gray-300",children:[Object(d.jsx)("h2",{className:"text-gray-300 mb-10 text-2xl md:text-4xl font-semibold ",children:"Send us a feedback"}),m||Object(d.jsx)(C,{children:"Invalid Email Address"}),j&&Object(d.jsx)(R,{children:"The Feedback was sent successfully"}),Object(d.jsx)("input",{className:"bg-transparent border-gray-900 rounded",id:"name",type:"text",placeholder:"NAME",ref:e,required:!0}),Object(d.jsx)("input",{className:"bg-transparent border-gray-900 rounded",id:"email",type:"text",placeholder:"E-MAIL",ref:t,required:!0}),Object(d.jsx)("textarea",{className:"bg-transparent border-gray-900 rounded h-80",id:"message",type:"text",placeholder:"MESSAGE",ref:a,required:!0}),Object(d.jsx)(k,{type:"submit",children:"Submit"})]})}),Object(d.jsx)(h,{})]})},M=a(20);var P=function(){return Object(d.jsxs)("main",{className:"h-semiscreen",children:[Object(d.jsx)(u,{}),Object(d.jsxs)("section",{className:"page text-gray-300 text-center space-y-10",children:[Object(d.jsx)("h1",{className:"text-4xl font-medium",children:"Nothing here."}),Object(d.jsx)("div",{className:"flex justify-center animate-pulse",children:Object(d.jsx)(M.a,{className:"text-9xl animate-spin-slow"})})]}),Object(d.jsx)(h,{})]})};var G=function(){return Object(d.jsx)(o.a,{children:Object(d.jsxs)(c.c,{children:[Object(d.jsx)(c.a,{exact:!0,path:"/",children:Object(d.jsx)(N,{})}),Object(d.jsx)(c.a,{path:"/games",children:Object(d.jsx)(S,{})}),Object(d.jsx)(c.a,{path:"/game/:id",children:Object(d.jsx)(A,{})}),Object(d.jsx)(c.a,{path:"/about",children:Object(d.jsx)(q,{})}),Object(d.jsx)(c.a,{path:"/contact",children:Object(d.jsx)(E,{})}),Object(d.jsx)(c.a,{path:"*",children:Object(d.jsx)(P,{})})]})})};n.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(j,{children:Object(d.jsx)(G,{})})}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('[{"id":"0","title":"Gtand Theft Auto V","reviews":{"recent":"very positive","all":"very positive","metacritic":96},"links":{"buy":"https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/"},"video":{"url":"https://cdn.akamai.steamstatic.com/steam/apps/2032899/movie480.webm?t=1447362323"},"images":{"url":"https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg?t=1618856444"},"release":"14 apr, 2015","creators":{"developer":"rockstar north","publisher":"rockstar games","franchise":"grand theft auto"},"tags":["action","multiplayer","Open World","Action","Multiplayer","Automobile Sim","Crime","Third Person","First-Person","Shooter","Adventure","Mature","Singleplayer","Third-Person Shooter","Racing","Co-op","Atmospheric","Sandbox","Funny","Great Soundtrack","Comedy","Moddable"],"languages":{"full-audio":"english","subtitles":["english","french","german","italian","spanish","korean","swedish","polish","russian"]},"description":{"short":"Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond, as well as the chance to experience the game running at 60 frames per second.","about-game":"When a young street hustler, a retired bank robber and a terrifying psychopath find themselves entangled with some of the most frightening and deranged elements of the criminal underworld, the U.S. government and the entertainment industry, they must pull off a series of dangerous heists to survive in a ruthless city in which they can trust nobody, least of all each other.\\nGrand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond, as well as the chance to experience the game running at 60 frames per second.\\nThe game offers players a huge range of PC-specific customization options, including over 25 separate configurable settings for texture quality, shaders, tessellation, anti-aliasing and more, as well as support and extensive customization for mouse and keyboard controls. Additional options include a population density slider to control car and pedestrian traffic, as well as dual and triple monitor support, 3D compatibility, and plug-and-play controller support.\\nGrand Theft Auto V for PC also includes Grand Theft Auto Online, with support for 30 players and two spectators. Grand Theft Auto Online for PC will include all existing gameplay upgrades and Rockstar-created content released since the launch of Grand Theft Auto Online, including Heists and Adversary modes.\\nThe PC version of Grand Theft Auto V and Grand Theft Auto Online features First Person Mode, giving players the chance to explore the incredibly detailed world of Los Santos and Blaine County in an entirely new way.\\nGrand Theft Auto V for PC also brings the debut of the Rockstar Editor, a powerful suite of creative tools to quickly and easily capture, edit and share game footage from within Grand Theft Auto V and Grand Theft Auto Online. The Rockstar Editor\u2019s Director Mode allows players the ability to stage their own scenes using prominent story characters, pedestrians, and even animals to bring their vision to life. Along with advanced camera manipulation and editing effects including fast and slow motion, and an array of camera filters, players can add their own music using songs from GTAV radio stations, or dynamically control the intensity of the game\u2019s score. Completed videos can be uploaded directly from the Rockstar Editor to YouTube and the Rockstar Games Social Club for easy sharing.\\nSoundtrack artists The Alchemist and Oh No return as hosts of the new radio station, The Lab FM. The station features new and exclusive music from the production duo based on and inspired by the game\u2019s original soundtrack. Collaborating guest artists include Earl Sweatshirt, Freddie Gibbs, Little Dragon, Killer Mike, Sam Herring from Future Islands, and more. Players can also discover Los Santos and Blaine County while enjoying their own music through Self Radio, a new radio station that will host player-created custom soundtracks.\\nSpecial access content requires Rockstar Games Social Club account. Visit http://rockstargames.com/v/bonuscontent for details.","mature-description":"The developers describe the content like this:\\nThis Game may contain content not appropriate for all ages, or may not be appropriate for viewing at work: General Mature Content"}},{"id":"1","title":"Forza Horizon 4","reviews":{"recent":"very positive","all":"very positive"},"links":{"buy":"https://store.steampowered.com/app/1293830/Forza_Horizon_4/"},"video":{"url":"https://cdn.akamai.steamstatic.com/steam/apps/256820719/movie480_vp9.webm?t=1612810749"},"images":{"url":"https://cdn.akamai.steamstatic.com/steam/apps/1293830/header.jpg?t=1622068013"},"release":"9 mar, 2021","creators":{"developer":"playground games","publisher":"xbox game studios"},"tags":["racing","multiplayer","Open World","PvP","Multiplayer","Driving","Third Person","Adventure","Singleplayer","Co-op","Atmospheric","Arcade","simulator","Great Soundtrack","sports"],"languages":{"full-audio":"english","subtitles":["english","french","german","italian","spanish","russian","czech"]},"description":{"short":"Dynamic seasons change everything at the world\u2019s greatest automotive festival. Go it alone or team up with others to explore beautiful and historic Britain in a shared open world.","about-game":"Dynamic seasons change everything at the world\u2019s greatest automotive festival. Go it alone or team up with others to explore beautiful and historic Britain in a shared open world. Collect, modify and drive over 450 cars. Race, stunt, create and explore \u2013 choose your own path to become a Horizon Superstar."}},{"id":"2","title":"Raft","reviews":{"recent":"very positive","all":"very positive"},"links":{"buy":"https://store.steampowered.com/app/648800/Raft/"},"video":{"url":"https://cdn.akamai.steamstatic.com/steam/apps/256717705/movie480.webm?t=1527104097"},"images":{"url":"https://cdn.akamai.steamstatic.com/steam/apps/648800/header.jpg?t=1635229387"},"release":"23 may, 2018","creators":{"developer":"Redbeet Interactive","publisher":"Axolot Games"},"tags":["survival","multiplayer","Open World Survival Craft","Crafting","base building","Action","indie","sandbox","Multiplayer","Adventure","Singleplayer","Co-op"],"languages":{"full-audio":"english","subtitles":["english","french","german","italian","spanish","korean","swedish"]},"description":{"short":"Raft throws you and your friends into an epic oceanic adventure! Alone or together, players battle to survive a perilous voyage across a vast sea! Gather debris, scavenge reefs and build your own floating home, but be wary of the man-eating sharks!","about-game":"By yourself or with friends, your mission is to survive an epic oceanic adventure across a perilous sea! Gather debris to survive, expand your raft and be wary of the dangers of the ocean!"}},{"id":"3","title":"Terraria","reviews":{"recent":"Overwhelmingly Positive","all":"Overwhelmingly Positive","metacritic":83},"links":{"buy":"https://store.steampowered.com/app/105600/Terraria/"},"video":{"url":"https://cdn.akamai.steamstatic.com/steam/apps/2029566/movie480.webm?t=1447358964"},"images":{"url":"https://cdn.akamai.steamstatic.com/steam/apps/105600/header.jpg?t=1590092560"},"release":"16 may, 2011","creators":{"developer":"re-logic","publisher":"re-logic"},"tags":["survival","multiplayer","Open World Survival Craft","Crafting","2D","base building","Action","Exploration","indie","sandbox","Multiplayer","Adventure","Singleplayer","Co-op","Platformer"],"languages":{"subtitles":["english","french","german","italian","spanish","korean","swedish"]},"description":{"short":"Dig, fight, explore, build! Nothing is impossible in this action-packed adventure game. Four Pack also available!","about-game":"Dig, Fight, Explore, Build: The very world is at your fingertips as you fight for survival, fortune, and glory. Will you delve deep into cavernous expanses in search of treasure and raw materials with which to craft ever-evolving gear, machinery, and aesthetics? Perhaps you will choose instead to seek out ever-greater foes to test your mettle in combat? Maybe you will decide to construct your own city to house the host of mysterious allies you may encounter along your travels?"}},{"id":"4","title":"Tom Clancy\'s Rainbow Six\xae Siege","reviews":{"recent":"Very Positive","all":"Very Positive"},"links":{"buy":"https://store.steampowered.com/app/359550/Tom_Clancys_Rainbow_Six_Siege/"},"video":{"url":"https://cdn.akamai.steamstatic.com/steam/apps/256713335/movie480.webm?t=1522850946"},"images":{"url":"https://cdn.akamai.steamstatic.com/steam/apps/359550/header.jpg?t=1633545115"},"release":"1 dec, 2015","creators":{"developer":"Ubisoft Montreal","publisher":"Ubisoft"},"tags":["FPS","hero shooter","tactical","Action","Realistic","Physics","Simulation","Multiplayer","Co-op"],"languages":{"full-audio":"english","subtitles":["english","french","german","italian","spanish","korean","swedish"]},"description":{"short":"Tom Clancy\'s Rainbow Six Siege is the latest installment of the acclaimed first-person shooter franchise developed by the renowned Ubisoft Montreal studio.","about-game":"Master the art of destruction and gadgetry in Tom Clancy\u2019s Rainbow Six Siege. Face intense close quarters combat, high lethality, tactical decision making, team play and explosive action within every moment. Experience a new era of fierce firefights and expert strategy born from the rich legacy of past Tom Clancy\'s Rainbow Six games."}},{"id":"5","title":"Red Dead Redemption 2","reviews":{"recent":"Very Positive","all":"Very Positive","metacritic":93},"links":{"buy":"https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/"},"video":{"url":"https://cdn.akamai.steamstatic.com/steam/apps/256768370/movie480.webm?t=1574881363"},"images":{"url":"https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg?t=1618851907"},"release":"5 dec, 2019","creators":{"developer":"rockstar games","publisher":"rockstar games"},"tags":["Open World","adventure","story ritch","western","sandbox","beautiful","shooter","Atmospheric","Action","Realistic","Simulation","Multiplayer"],"languages":{"full-audio":"english","subtitles":["english","french","german","italian","spanish","korean","swedish"]},"description":{"short":"Winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores, RDR2 is the epic tale of outlaw Arthur Morgan and the infamous Van der Linde gang, on the run across America at the dawn of the modern age. Also includes access to the shared living world of Red Dead Online.","about-game":"America, 1899.\\nArthur Morgan and the Van der Linde gang are outlaws on the run. With federal agents and the best bounty hunters in the nation massing on their heels, the gang must rob, steal and fight their way across the rugged heartland of America in order to survive. As deepening internal divisions threaten to tear the gang apart, Arthur must make a choice between his own ideals and loyalty to the gang who raised him.\\nNow featuring additional Story Mode content and a fully-featured Photo Mode, Red Dead Redemption 2 also includes free access to the shared living world of Red Dead Online, where players take on an array of roles to carve their own unique path on the frontier as they track wanted criminals as a Bounty Hunter, create a business as a Trader, unearth exotic treasures as a Collector or run an underground distillery as a Moonshiner and much more.\\nWith all new graphical and technical enhancements for deeper immersion, Red Dead Redemption 2 for PC takes full advantage of the power of the PC to bring every corner of this massive, rich and detailed world to life including increased draw distances; higher quality global illumination and ambient occlusion for improved day and night lighting; improved reflections and deeper, higher resolution shadows at all distances; tessellated tree textures and improved grass and fur textures for added realism in every plant and animal.\\nRed Dead Redemption 2 for PC also offers HDR support, the ability to run high-end display setups with 4K resolution and beyond, multi-monitor configurations, widescreen configurations, faster frame rates and more.","mature-description":"The developers describe the content like this:\\nThis Game may contain content not appropriate for all ages, or may not be appropriate for viewing at work: General Mature Content"}},{"id":"6","title":"Mortal Kombat 11","reviews":{"recent":"Very Positive","all":"Very Positive","metacritic":82},"links":{"buy":"https://store.steampowered.com/app/976310/Mortal_Kombat11/"},"video":{"url":"https://cdn.akamai.steamstatic.com/steam/apps/256742032/movie480.webm?t=1549069590"},"images":{"url":"https://cdn.akamai.steamstatic.com/steam/apps/976310/header.jpg?t=1634068925"},"release":"23 apr, 2019","creators":{"developer":"NetherRealm Studios, QLOC, Shiver","publisher":"Warner Bros. Games, Warner Bros. Interactive Entertainment"},"tags":["Fighting","gore","violent","blood","Action","Multiplayer","Singleplayer","mature","arcade","horror","Atmospheric"],"languages":{"full-audio":"english","subtitles":["english","french","german","italian"]},"description":{"short":"Mortal Kombat is back and better than ever in the next evolution of the iconic franchise.","about-game":"MK is back and better than ever in the next evolution of the iconic franchise.The all new Custom Character Variations give you unprecedented control of your fighters to make them your own. The new graphics engine showcases every skull-shattering, eye-popping moment, bringing you so close to the fight you can feel it. Featuring a roster of new and returning Klassic Fighters, Mortal Kombat\'s best-in-class cinematic story mode continues the epic saga over 25 years in the making.","mature-description":"This Game may contain content not appropriate for all ages, or may not be appropriate for viewing at work: Frequent Violence or Gore, General Mature Content"}},{"id":"7","title":"Bloons TD 6","reviews":{"recent":"Overwhelmingly Positive","all":"Overwhelmingly Positive","metacritic":82},"links":{"buy":"https://store.steampowered.com/app/960090/Bloons_TD_6/"},"video":{"url":"https://cdn.akamai.steamstatic.com/steam/apps/256781516/movie480_vp9.webm?t=1586789526"},"images":{"url":"https://cdn.akamai.steamstatic.com/steam/apps/960090/header.jpg?t=1634303522"},"release":"23 apr, 2019","creators":{"developer":"Ninja Kiwi","publisher":"Ninja Kiwi"},"tags":["Strategy","tower defense","Multiplayer","Singleplayer","co-op","funny","difficult","indie","cartoony"],"languages":{"subtitles":["english","french","german","italian","japanese","russian","swedish","finnish"]},"description":{"short":"The Bloons are back and better than ever! Get ready for a massive 3D tower defense game designed to give you hours and hours of the best strategy gaming available.","about-game":"Craft your perfect defense from a combination of awesome Monkey Towers, upgrades, Heroes, and activated abilities, then pop every last invading Bloon!Join millions of other players who enjoy the massive and ever-expanding features that deliver endless hours of the best strategy gaming available."}}]')}},[[36,1,2]]]);
//# sourceMappingURL=main.46fefd4e.chunk.js.map