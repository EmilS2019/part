(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,n){t.exports=n(38)},37:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(13),c=n.n(r),i=n(14),u=n(3),l=function(t){var e=t.note,n=t.toggleImportance,a=t.deleteNote,r=e.important?"make unimportant":"make important";return o.a.createElement("li",{className:"note"},o.a.createElement("h2",null," ",e.content," "),o.a.createElement("button",{onClick:a,className:"btn"},"delete"),o.a.createElement("button",{onClick:n,className:"btn"},r))},m=n(2),d=n.n(m),s=(n(37),function(){return d.a.get("/notes").then(function(t){return t.data})}),f=function(t){return d.a.post("/notes",t).then(function(t){return t.data})},p=function(t,e){return d.a.put("".concat("/notes","/").concat(t),e).then(function(t){return t.data})},b=function(t){return d.a.get("".concat("/notes","/").concat(t)).then(function(t){return t.data})},h="/notes",E=function(){return o.a.createElement("div",{style:{clear:"both",position:"absolute",height:"2.5rem",bottom:"0",left:"0",width:"100%",color:"white",fontStyle:"italic",background:"#333",textAlign:"center"}},o.a.createElement("br",null),o.a.createElement("em",null,"Note app, Kattenelvis"))},g=function(t){var e=t.message;if(null===e)return null;return o.a.createElement("div",{style:{position:"fixed",color:"red",background:"lightgrey",fontSize:"20px",borderStyle:"solid",borderRadius:"5px",padding:"10px",marginBottom:"10px",width:"88.5%",margin:"auto",boxSizing:"border-box",display:"none"}},e)},v=function(){var t=Object(a.useState)([]),e=Object(u.a)(t,2),n=e[0],r=e[1],c=Object(a.useState)(""),m=Object(u.a)(c,2),v=m[0],N=m[1],w=Object(a.useState)(!0),S=Object(u.a)(w,2),O=S[0],j=S[1],k=Object(a.useState)("Some error happened..."),y=Object(u.a)(k,2),x=y[0],C=y[1];Object(a.useEffect)(function(){s().then(function(t){r(t)})},[]);var I=O?n:n.filter(function(t){return t.important}),z=function(){var t=0;return n.forEach(function(e){e.id>t&&(t=e.id)}),t};z();return o.a.createElement("div",null,o.a.createElement("main",null,o.a.createElement("div",{className:"contentWrap"},o.a.createElement("h1",null,"Notes"),o.a.createElement(g,{message:x}),o.a.createElement("ul",null,I.map(function(t){return o.a.createElement(l,{key:t.id,note:t,toggleImportance:function(){return function(t){var e=n.find(function(e){return e.id===t}),a=Object(i.a)({},e,{important:!e.important});p(t,a).then(function(e){r(n.map(function(n){return n.id!==t?n:e}))}).catch(function(a){C("Note '".concat(e.content,"' was already removed from server")),setTimeout(function(){C(null)},5e3),r(n.filter(function(e){return e.id!==t}))})}(t.id)},deleteNote:function(){return e=t.id,void b(e).then(function(t){d.a.delete("".concat(h,"/").concat(e)),console.log("Target eliminated"),r(n.filter(function(t){return t.id!==e}))});var e}})})),o.a.createElement("form",{onSubmit:function(t){t.preventDefault();var e={id:z()+1,content:v,date:(new Date).toISOString(),important:Math.random()>.5};f(e).then(function(t){r(n.concat(t)),N("")})},className:"addNoteForm"},o.a.createElement("h1",null,"Add Note"),o.a.createElement("input",{value:v,onChange:function(t){N(t.target.value)}}),o.a.createElement("button",{type:"submit",className:"btn"},"save")),o.a.createElement("button",{onClick:function(){return j(!O)},className:"btn"},"show ",O?"important":"all"))),o.a.createElement(E,null))};c.a.render(o.a.createElement(v,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a8b4301f.chunk.js.map