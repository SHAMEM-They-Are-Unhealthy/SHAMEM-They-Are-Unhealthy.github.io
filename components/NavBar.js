import "./nav.css";

class NavBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
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
<div style="height: 55px"></div>`;
  }
}

customElements.define("nav-bar", NavBar);

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLink = document.querySelectorAll(".nav-link");

  hamburger.addEventListener("click", mobileMenu);
  navLink.forEach((n) => n.addEventListener("click", closeMenu));

  function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }

  function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
});
