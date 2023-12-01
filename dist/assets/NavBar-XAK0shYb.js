(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();class l extends HTMLElement{constructor(){super()}connectedCallback(){this.innerHTML=`
        <header class="header">
            <nav class="navbar">
            <a href="/" class="nav-logo">SHAMEM</a>
            <ul class="nav-menu">
                <li class="nav-item">
                    <a href="/" class="nav-link">Home</a>
                </li>
                <li class="nav-item">
                    <a href="/diet/" class="nav-link">Diet</a>
                </li>
                <li class="nav-item">
                    <a href="/contact/" class="nav-link">Contact</a>
                </li>
                <li class="nav-item">
                    <a href="/workout/" class="nav-link">Workout</a>
                </li>
                <li class="nav-item">
                    <a href="/health/" class="nav-link">Health</a>
                </li>
                <li class="nav-item">
                    <a href="/benefits/" class="nav-link">Benefits</a>
                </li>
            </ul>
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
            </nav>
        </header>
        <div style="height: 55px;"></div>
        `}}customElements.define("nav-bar",l);document.addEventListener("DOMContentLoaded",function(){const a=document.querySelector(".hamburger"),s=document.querySelector(".nav-menu"),r=document.querySelectorAll(".nav-link");a.addEventListener("click",n),r.forEach(t=>t.addEventListener("click",e));function n(){a.classList.toggle("active"),s.classList.toggle("active")}function e(){a.classList.remove("active"),s.classList.remove("active")}});
