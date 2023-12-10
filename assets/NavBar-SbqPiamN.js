(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();class r extends HTMLElement{constructor(){super()}connectedCallback(){this.innerHTML=`
<header class="header">
    <nav class="navbar">
        <a href="/" class="nav-logo">
            <img alt="logo" src="https://github.com/SHAMEM-They-Are-Unhealthy/SHAMEM-They-Are-Unhealthy.github.io/blob/main/public/SRF.png?raw=true" id="logo-img" style="width: 100px; height: auto;" />
        </a>
        <ul class="nav-menu">
            <li>
                <a href="/" class="nav-link">
                    <p class="nav-item">Home</p>
                </a>
            </li>
            <li class="nav-item health-info">
                Health Info
                <span class="dropdown-icon">
                    <i class="fa-solid fa-caret-down"></i>
                </span>
                <ul class="drop-down" style="text-align: left;">
                    <li>
                        <a href="/diet/" class="nav-link" style="font-weight: 400;">Diet</a>
                    </li>
                    <li>
                        <a href="/benefits/" class="nav-link" style="font-weight: 400;">Benefits</a>
                    </li>
                    <li>
                        <a href="/health/" class="nav-link" style="font-weight: 400;">Health</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="/workout/" class="nav-link">
                    <p class="nav-item">Workout</p>
                </a>
            </li>
            <li>
                <a href="/contact/" class="nav-link">
                    <p class="nav-item">Contact</p>
                </a>
            </li>
        </ul>
        <div class="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
    </nav>
</header>
<div style="height: 55px"></div>`}}customElements.define("nav-bar",r);document.addEventListener("DOMContentLoaded",function(){const s=document.querySelector(".hamburger"),a=document.querySelector(".nav-menu"),l=document.querySelectorAll(".nav-link");s.addEventListener("click",n),l.forEach(t=>t.addEventListener("click",e));function n(){s.classList.toggle("active"),a.classList.toggle("active")}function e(){s.classList.remove("active"),a.classList.remove("active")}});
