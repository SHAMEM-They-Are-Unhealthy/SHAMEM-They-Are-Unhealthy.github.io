import"./NavBar-PgYyMm5z.js";function c(e,s){return s.topScore-e.topScore}const r=document.querySelector(".center");$(document).ready(function(){$.get("https://shamem.glitch.me/get_highscores").done(function(e,s){var a=JSON.parse(e);let t=a.sort(c);o(t),d()})});function o(e){let s=e.map((a,t)=>`<article class="item">
                <h3 class="rank">${t+1}</h3>
                <h3 class="username">${a.username}</h3>
                <h3 class="score">${a.topScore}</h3>
            </article>`);s=s.join(""),r.innerHTML=s}function d(){const e=document.querySelectorAll(".item");switch(e.length){case 0:r.innerHTML='<article class="item">So Empty!</article>';break;case 1:e[0].classList.add("gold");break;case 2:e[0].classList.add("gold"),e[1].classList.add("silver");break;default:e[0].classList.add("gold"),e[1].classList.add("silver"),e[2].classList.add("bronze");break}}
