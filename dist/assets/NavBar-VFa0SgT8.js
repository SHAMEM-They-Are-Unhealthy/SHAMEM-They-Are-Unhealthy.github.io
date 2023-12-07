(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();class r extends HTMLElement{constructor(){super()}connectedCallback(){this.innerHTML=`
        <header class="header">
  <nav class="navbar">
    <a href="/" class="nav-logo"
      ><img id="logo-img" style="width: 100px; height: auto"
    /></a>
    <ul class="nav-menu">
      <a href="/" class="nav-link">
        <li class="nav-item">Home</li>
      </a>
      <a href="/health-info/" class="nav-link">
        <li class="nav-item health-info">
          Health Info
          <span class="dropdown-icon">
            <i class="fa-solid fa-caret-down"></i>
          </span>
          <ul class="drop-down" style="text-align: left;">
            <a href="/health/">
              <li>Health</li>
            </a>
            <a href="/diet/">
              <li>Diet</li>
            </a>
            <a href="/benefits/">
              <li>Benefits</li>
            </a>
          </ul>
        </li>
      </a>
      <a href="/workout/" class="nav-link">
        <li class="nav-item">Workout</li>
      </a>
      <a href="/contact/" class="nav-link">
        <li class="nav-item">Contact</li>
      </a>
    </ul>
    <div class="hamburger">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>
  </nav>
</header>
<div style="height: 55px"></div>`}}customElements.define("nav-bar",r);document.addEventListener("DOMContentLoaded",function(){const s=document.querySelector(".hamburger"),a=document.querySelector(".nav-menu"),i=document.querySelectorAll(".nav-link");s.addEventListener("click",n),i.forEach(t=>t.addEventListener("click",e));function n(){s.classList.toggle("active"),a.classList.toggle("active")}function e(){s.classList.remove("active"),a.classList.remove("active")}});
