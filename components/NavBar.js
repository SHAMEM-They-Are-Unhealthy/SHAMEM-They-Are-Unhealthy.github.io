import "./nav.css"

class NavBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header class="header">
            <nav class="navbar">
            <a href="/" class="nav-logo"><img id="logo-img" style="width: 100px; height:auto;"/></a>
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
        `;

    }
}

customElements.define('nav-bar', NavBar);

document.addEventListener("DOMContentLoaded", function() {
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