(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),c=n(17),s=n.n(c),r=n(7),o=n(2),l=(n(23),n(9)),j=n(15),d=n(0),b={winX:window.innerWidth,winY:window.innerHeight},h=function(e,t){switch(t.do){case"resize":return Object(j.a)(Object(j.a)({},e),{},{winX:window.innerWidth,winY:window.innerHeight});default:throw new Error("Invalid action type: ".concat(t.do))}},u=Object(a.createContext)(),O=function(e){var t=Object(a.useReducer)(h,b),n=Object(l.a)(t,2),i=n[0],c=n[1];return Object(a.useEffect)((function(){function e(){c({do:"resize"})}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}})),Object(d.jsx)(u.Provider,{value:[i,c],children:e.children})},m=function(){return Object(a.useContext)(u)};var x=function(){var e=m(),t=Object(l.a)(e,1)[0];return Object(d.jsxs)("div",{className:"navbar",children:[Object(d.jsx)("span",{children:"JingChang Xiao"}),Object(d.jsx)("div",{className:"navbar-mid"}),t.winX>980?Object(d.jsxs)("div",{className:"navbar-nav",children:[Object(d.jsx)(r.b,{exact:!0,to:"/",activeClassName:"active",className:"navbar-navlinks",children:"HOME"}),Object(d.jsx)(r.b,{to:"/demos",activeClassName:"active",className:"navbar-navlinks",children:"DEMOS"}),Object(d.jsx)(r.b,{to:"/projects",activeClassName:"active",className:"navbar-navlinks",children:"PROJECTS"}),Object(d.jsx)(r.b,{to:"/about",activeClassName:"active",className:"navbar-navlinks",children:"ABOUT ME"})]}):Object(d.jsx)("div",{className:"navbar-nav",children:"NAVIGATION >>"})]})};var v=function(){return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h2",{style:{fontSize:"30pt",marginTop:"8rem"},children:"404 Error"}),Object(d.jsx)("p",{children:"Page not found"})]})};var p=function(){return Object(d.jsx)("div",{className:"container-max",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{style:{margin:"0 10%"},children:[Object(d.jsx)("h2",{children:"Hello!"}),Object(d.jsx)("p",{children:"My name is JingChang Xiao, but most people call me Chang. Welcome to my portfolio website."}),Object(d.jsx)("p",{children:"I am a graduate from the University of Toronto with a Bachelor's degree in Mechanical Engineering, with a keen interest in software design and development. Recently I underwent a rigorous training program for full stack web development, where I learned about many essential tools that are critical to creating a fully functional website."}),Object(d.jsx)("p",{children:"With this portfolio, I am hoping to demonstrate that I have gained a high proficiency with web design, and am ready to apply my skills in the job market. This website was built using ReactJS and is fully responsive, meaning that it will adapt the placement of page elements based on the screen size of your device. All functionality for the front end are in plain React and do not utilize any third party libraries, and all CSS is also custom written by me."}),Object(d.jsx)("p",{children:"Server based functionality for this website is also supported with a NodeJS server, utilizing an interface built on ExpressJS and using a MongoDB database to save data. That means this website is a fully functional MERN stack project."}),Object(d.jsx)("p",{children:"With all that said, feel free to look around, and take a look at my Github if you are interested in any of my other works (link in the about me page). I hope you enjoy my website!"})]})})})};var f=function(){return Object(d.jsx)("div",{className:"projects-main",children:Object(d.jsx)("span",{children:"Demos page"})})};var w=function(){var e=Object(o.f)(),t=m();function n(t){e.push("/demos/"+t)}return Object(l.a)(t,1)[0].winX>980?Object(d.jsxs)("div",{className:"sidebar",children:[Object(d.jsx)("h3",{className:"sidebar-title",children:"Demos"}),Object(d.jsx)("input",{className:"sidebar-search",placeholder:"Search"}),Object(d.jsxs)("ul",{className:"sidebar-btn-list",children:[Object(d.jsx)("li",{children:Object(d.jsx)("button",{onClick:function(){return n("popout")},children:"Popout tabs"})}),Object(d.jsx)("li",{children:Object(d.jsx)("button",{onClick:function(){return n("reactive")},children:"Reactive layouts"})}),Object(d.jsx)("li",{children:Object(d.jsx)("button",{onClick:function(){return n("dragdrop")},children:"Drag and drop"})})]})]}):Object(d.jsx)("div",{className:"sidebar closed",children:"[\xa0\xa0\xa0]"})};var g=function(){return Object(d.jsxs)("div",{className:"container-max",children:[Object(d.jsx)(w,{}),Object(d.jsx)(f,{})]})};var y=function(){return Object(d.jsx)("div",{className:"container-max",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("p",{children:"Projects page"})})})};var N=function(){return Object(d.jsx)("div",{className:"container-max",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("p",{children:"About page"})})})};var k=function(){return Object(d.jsx)(O,{children:Object(d.jsxs)(r.a,{children:[Object(d.jsx)(x,{}),Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{exact:!0,path:"/",children:Object(d.jsx)(p,{})}),Object(d.jsx)(o.a,{path:"/demos",children:Object(d.jsx)(g,{})}),Object(d.jsx)(o.a,{path:"/projects",children:Object(d.jsx)(y,{})}),Object(d.jsx)(o.a,{path:"/about",children:Object(d.jsx)(N,{})}),Object(d.jsx)(o.a,{children:Object(d.jsx)(v,{})})]})]})})};s.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.82d2ee73.chunk.js.map