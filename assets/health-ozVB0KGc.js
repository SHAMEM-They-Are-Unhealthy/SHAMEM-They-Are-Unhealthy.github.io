import"./NavBar-pll_SPqi.js";const e=document.querySelector("#range"),o=document.querySelector("#currentAge");e.addEventListener("input",n=>{const t=Number(n.target.value);o.textContent=t+" years old";const r=t/e.max*100;e.style.background=`linear-gradient(to right, #f50 ${r}%, #ccc ${r}%)`,e.style.setProperty("--thumb-rotate",`${t/100*2160}deg`)});