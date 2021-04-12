(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(e,t,i){},30:function(e,t,i){},31:function(e,t,i){"use strict";i.r(t);var n=i(1),s=i.n(n),c=i(17),a=i.n(c),r=i(4),l=i(2),o=(i(23),i(8)),d=i(15),j=i(0),h={winX:window.innerWidth,winY:window.innerHeight},b=function(e,t){switch(t.do){case"resize":return Object(d.a)(Object(d.a)({},e),{},{winX:window.innerWidth,winY:window.innerHeight});default:throw new Error("Invalid action type: ".concat(t.do))}},m=Object(n.createContext)(),u=function(e){var t=Object(n.useReducer)(b,h),i=Object(o.a)(t,2),s=i[0],c=i[1];return Object(n.useEffect)((function(){function e(){c({do:"resize"})}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}})),Object(j.jsx)(m.Provider,{value:[s,c],children:e.children})},O=function(){return Object(n.useContext)(m)};var p=function(){var e=O(),t=Object(o.a)(e,1)[0],i=Object(n.useRef)(null),s=Object(n.useRef)(null);function c(){i.current.classList.contains("hidden")?(i.current.classList.remove("hidden"),s.current.classList.remove("hidden")):(i.current.classList.add("hidden"),s.current.classList.add("hidden"))}return t.winX>980?Object(j.jsxs)("div",{className:"navbar",children:[Object(j.jsx)("span",{children:"JingChang Xiao"}),Object(j.jsx)("div",{className:"navbar-mid"}),Object(j.jsxs)("div",{className:"navbar-nav",children:[Object(j.jsx)(r.b,{exact:!0,to:"/",activeClassName:"active",className:"navlinks",children:"HOME"}),Object(j.jsx)(r.b,{to:"/demos",activeClassName:"active",className:"navlinks",children:"DEMOS"}),Object(j.jsx)(r.b,{to:"/projects",activeClassName:"active",className:"navlinks",children:"PROJECTS"}),Object(j.jsx)(r.b,{to:"/about",activeClassName:"active",className:"navlinks",children:"ABOUT ME"})]})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"navbar",children:[Object(j.jsx)("span",{children:"JingChang Xiao"}),Object(j.jsx)("div",{className:"navbar-mid"}),Object(j.jsx)("div",{className:"navbar-nav",children:Object(j.jsx)("button",{className:"navlinks",onClick:c,children:Object(j.jsx)("div",{className:"hamburger"})})})]}),Object(j.jsxs)("div",{className:"nav-side hidden",ref:i,onClick:c,children:[Object(j.jsx)(r.b,{exact:!0,to:"/",activeClassName:"active",className:"navlinks",children:"HOME"}),Object(j.jsx)(r.b,{to:"/demos",activeClassName:"active",className:"navlinks",children:"DEMOS"}),Object(j.jsx)(r.b,{to:"/projects",activeClassName:"active",className:"navlinks",children:"PROJECTS"}),Object(j.jsx)(r.b,{to:"/about",activeClassName:"active",className:"navlinks",children:"ABOUT ME"})]}),Object(j.jsx)("div",{className:"invis-bg hidden",ref:s,onClick:c})]})};var x=function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h2",{style:{fontSize:"30pt",marginTop:"8rem"},children:"404 Error"}),Object(j.jsx)("p",{children:"Page not found"})]})},v=i.p+"static/media/personal_logo_inverted.abd655be.png";var g=function(){return Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{style:{width:"80%"},children:[Object(j.jsx)("h1",{style:{textAlign:"center"},children:"Hello!"}),Object(j.jsx)("div",{className:"center",children:Object(j.jsx)("img",{src:v,className:"logo-img",alt:"logo"})}),Object(j.jsx)("p",{children:"My name is JingChang Xiao, but most people call me Chang. Welcome to my portfolio website."}),Object(j.jsx)("p",{children:"With this portfolio, I am hoping to demonstrate that I have gained a high proficiency in web design, and am ready to apply my skills in the industry. This website was built using ReactJS and is fully responsive, meaning that it will adapt the placement of page elements based on the screen size of your device. All functionality for the front end are in plain React and do not utilize any third party libraries, and all CSS is also custom written by me."}),Object(j.jsx)("p",{children:"Server based functionality for this website is also supported with a NodeJS server, utilizing an interface built on ExpressJS and using a MongoDB database to save data, making this website a fully functional MERN stack project."}),Object(j.jsx)("p",{children:"With all that said, feel free to look around, and take a look at my Github if you are interested in any of my other works (link in the about me page). I hope you enjoy my website!"})]})})};var f=function(){var e=Object(n.useRef)(null),t=Object(n.useState)(!1),i=Object(o.a)(t,2),s=i[0],c=i[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"demo-container",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{children:"CSS Implementation"}),Object(j.jsx)("p",{children:"This involves having a div element that is hidden via a special class, wherein the div is unhidden by modifying the div's class list. This is the classical approach to popout tabs with regards to plain HTML/JS."})]}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{onClick:function(){e.current.classList.toggle("hidden")},children:"Click to open tab"}),Object(j.jsx)("div",{className:"demo-tab hidden",ref:e,children:"Tab"})]}),Object(j.jsxs)("div",{className:"demo-container",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{children:"React Implementation"}),Object(j.jsx)("p",{children:"This involves having a state variable that tracks whether or not the tab is showing, and modifies the DOM itself to generate a new popout tab when that state is changed to true. This is only possible by taking advantage of react's virtual DOM system, which can dynamically generate new HTML elements via state changes."})]}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{onClick:function(){c((function(e){return!e}))},children:"Click to open tab"}),s?Object(j.jsx)("div",{className:"demo-tab",children:"Tab"}):""]})]})};i(30);var k=function(){var e=Object(l.g)(),t=Object(n.useState)("none"),i=Object(o.a)(t,2),s=i[0],c=i[1];return Object(n.useEffect)((function(){var t=e.pathname.replace("/demos/","");t.includes("/demos")&&(t="none"),c(t)}),[e]),Object(j.jsx)("div",{className:"projects-main",children:"none"===s?Object(j.jsxs)("span",{children:["Click on any of the demos on the sidebar to view them ",Object(j.jsx)("br",{}),"<--- ",Object(j.jsx)("br",{}),"This page is still a work in progress, so not all demos are available yet."]}):"popout"===s?Object(j.jsx)(f,{}):Object(j.jsxs)("span",{children:[s," demo coming soon..."]})})};var w=function(){var e=Object(l.f)(),t=O(),i=Object(o.a)(t,1)[0],s=Object(n.useRef)(null),c=Object(n.useRef)(null);function a(t){e.push("/demos/"+t)}function r(){s.current.classList.contains("hidden")?(s.current.classList.remove("hidden"),c.current.classList.remove("hidden")):(s.current.classList.add("hidden"),c.current.classList.add("hidden"))}return i.winX>980?Object(j.jsxs)("div",{className:"sidebar",children:[Object(j.jsx)("h2",{className:"sidebar-title",children:"Demos"}),Object(j.jsxs)("ul",{className:"sidebar-btn-list",children:[Object(j.jsx)("li",{children:Object(j.jsx)("button",{onClick:function(){return a("popout")},children:"Popout tabs"})}),Object(j.jsx)("li",{children:Object(j.jsx)("button",{onClick:function(){return a("reactive")},children:"Reactive layouts"})}),Object(j.jsx)("li",{children:Object(j.jsx)("button",{onClick:function(){return a("dragdrop")},children:"Drag and drop"})})]})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"sidebar closed",onClick:r,children:"\u276f\u276f"}),Object(j.jsxs)("div",{className:"sidebar open hidden",ref:s,onClick:r,children:[Object(j.jsx)("h2",{className:"sidebar-title",children:"Demos"}),Object(j.jsxs)("ul",{className:"sidebar-btn-list",children:[Object(j.jsx)("li",{children:Object(j.jsx)("button",{onClick:function(){return a("popout")},children:"Popout tabs"})}),Object(j.jsx)("li",{children:Object(j.jsx)("button",{onClick:function(){return a("reactive")},children:"Reactive layouts"})}),Object(j.jsx)("li",{children:Object(j.jsx)("button",{onClick:function(){return a("dragdrop")},children:"Drag and drop"})})]})]}),Object(j.jsx)("div",{className:"invis-bg hidden",ref:c,onClick:r})]})};var y=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(w,{}),Object(j.jsx)(k,{})]})};var N=function(e){return Object(j.jsxs)("div",{className:"project-entry",children:[Object(j.jsx)("h3",{children:e.name}),Object(j.jsxs)("div",{className:"grid-2",children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:e.image,alt:e.name})}),Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{className:"my-2",children:e.description}),Object(j.jsxs)("p",{className:"my-1",children:["Live link:"," ",Object(j.jsx)("a",{className:"port-link",href:e.link,target:"_blank",rel:"noreferrer",children:e.link})]}),Object(j.jsxs)("p",{className:"my-1",children:["Github link:"," ",Object(j.jsx)("a",{href:e.gitLink,target:"_blank",rel:"noreferrer",children:e.gitLink})]})]})]})]})},C=i.p+"static/media/socketim.9471ed4a.png",L=i.p+"static/media/budget.d228ffed.png",T=i.p+"static/media/burgerlogger.a6e4c633.png",S=[{name:"Socket IM",image:C,description:"The focus of this project was to implement SocketIO under the react framework. I have implemented SocketIO in vanilla HTML before, but due to the nature of React's virtual DOM, SocketIO requires a different approach.",link:"https://react-im.herokuapp.com/",gitLink:"https://github.com/sinsinkun/React-SocketIO"},{name:"Google Books Search",image:i.p+"static/media/googlebooks.33a3cd29.png",description:'This project is to demonstrate a basic implementation of a full MERN stack. The search itself calls the Google Books API to obtain entries, which can be saved to the "Saved" tab for later access, implemented using MongoDB.',link:"https://jcx-googlebooksearch.herokuapp.com/",gitLink:"https://github.com/sinsinkun/UTOR-Googlebooks"},{name:"Budget Tracker",image:L,description:"This project focuses on the implementation of a Service Worker, which allows offline functionality in the event of internet interruption.",link:"https://jcx-budgettracker.herokuapp.com/",gitLink:"https://github.com/sinsinkun/UTOR-BudgetTracker"},{name:"Burger Logger",image:T,description:"This project is to showcase my familiarity with vanilla HTML/JS full stack implementation, utilizing a SQL DB backend for tracking information.",link:"https://jcx-burger.herokuapp.com/",gitLink:"https://github.com/sinsinkun/UTOR-BurgerList"}];var M=function(){return Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{style:{width:"80%"},children:[Object(j.jsx)("h1",{children:"Projects page"}),S.map((function(e){return Object(j.jsx)(N,{name:e.name,link:e.link,image:e.image,gitLink:e.gitLink,description:e.description},e.name)}))]})})},R=i.p+"static/media/profile.4de8fccf.jpg",E=i.p+"static/media/JingChang_Xiao_Resume.718c3d2b.pdf";var I=function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{style:{width:"80%"},children:[Object(j.jsx)("h1",{children:"About Me"}),Object(j.jsx)("img",{src:R,className:"profile-img",alt:"profile"}),Object(j.jsx)("p",{children:"I am a graduate from the University of Toronto with a Bachelor's degree in Mechanical Engineering, with a keen interest in software design and development. Recently I underwent a rigorous training program for full stack web development, where I learned about many essential tools that are critical to creating a fully functional website."}),Object(j.jsxs)("p",{children:[Object(j.jsx)("a",{href:E,target:"_blank",rel:"noreferrer",children:"Click here"})," to open a copy of my resume. It covers in more detail my educational and professional background, as well as other skills that may be less relevant to developers."]})]}),Object(j.jsxs)("div",{style:{width:"80%"},children:[Object(j.jsx)("h3",{children:"Contact Me"}),Object(j.jsx)("p",{children:"You can contact me through any of the below channels: "}),Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:[Object(j.jsx)("b",{children:"Email: "}),"chang.x1994@gmail.com"]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("b",{children:"Phone Number: "}),"416-834-7055"]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("b",{children:"Github: "}),Object(j.jsx)("a",{href:"https://github.com/sinsinkun",target:"_blank",rel:"noreferrer",children:"https://github.com/sinsinkun"})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("b",{children:"LinkedIn: "}),Object(j.jsx)("a",{href:"https://www.linkedin.com/in/jingchang-xiao/",target:"_blank",rel:"noreferrer",children:"https://www.linkedin.com/in/jingchang-xiao/"})]})]})]})]})};var B=function(){return Object(j.jsx)(u,{children:Object(j.jsxs)(r.a,{children:[Object(j.jsx)(p,{}),Object(j.jsx)("div",{className:"container-max",children:Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{exact:!0,path:"/",children:Object(j.jsx)(g,{})}),Object(j.jsx)(l.a,{path:"/demos",children:Object(j.jsx)(y,{})}),Object(j.jsx)(l.a,{path:"/projects",children:Object(j.jsx)(M,{})}),Object(j.jsx)(l.a,{path:"/about",children:Object(j.jsx)(I,{})}),Object(j.jsx)(l.a,{children:Object(j.jsx)(x,{})})]})})]})})};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(B,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.f3e23ec6.chunk.js.map