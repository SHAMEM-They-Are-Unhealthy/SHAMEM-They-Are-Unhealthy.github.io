import"./NavBar-PgYyMm5z.js";const i="https://shamem.glitch.me/get_news";function a(){var o=[],l=[];fetch(i).then(t=>{if(!t.ok)throw console.log(t),new Error("Network response was not ok");return t.json()}).then(t=>{var r=t.pagination.count;localStorage.setItem("count",r);for(let e=0;e<r;e++)o.push(t.data[e].title),l.push(t.data[e].url);localStorage.setItem("liTitle",JSON.stringify(o)),localStorage.setItem("liURL",JSON.stringify(l))}).catch(t=>{console.error("Error:",t)})}document.addEventListener("DOMContentLoaded",function(){a();var o=localStorage.getItem("liTitle"),l=localStorage.getItem("liURL");const t=JSON.parse(o),r=JSON.parse(l);var e=localStorage.getItem("count");for(let n=0;n<e;n++)document.getElementById("articles").innerHTML+=`<div class="articles" onclick="window.open('${r[n]}', '_blank')"><br/><p>${t[n]}</p><br/></div><hr/>`});