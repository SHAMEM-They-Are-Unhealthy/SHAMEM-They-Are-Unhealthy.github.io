class NavBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header class="header">
            <nav class="navbar">
            <a href="/" class="nav-logo">SHAMEM</a>
            <ul class="nav-menu">
                <li class="nav-item">
                    <a href="/" class="nav-link">Home</a>
                </li>
                <li class="nav-item">
                    <a href="/diet.html" class="nav-link">Diet</a>
                </li>
                <li class="nav-item">
                    <a href="/contact.html" class="nav-link">Contact</a>
                </li>
                <li class="nav-item">
                    <a href="/workout.html" class="nav-link">Workout</a>
                </li>
                <li class="nav-item">
                    <a href="/health.html" class="nav-link">Health</a>
                </li>
                <li class="nav-item">
                    <a href="/benefits.html" class="nav-link">Benefits</a>
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
        `;

    }
}

customElements.define('nav-bar', NavBar);

document.addEventListener("DOMContentLoaded", function() {
    document.getElementsByTagName('head')[0].insertAdjacentHTML('beforeend', '<link rel="stylesheet" href="components/nav.css" />');
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navLink = document.querySelectorAll(".nav-link");
  
    hamburger.addEventListener("click", mobileMenu);
    navLink.forEach(n => n.addEventListener("click", closeMenu));
  
    function mobileMenu() {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    }
  
    function closeMenu() {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }
  });