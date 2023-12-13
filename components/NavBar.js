import "./nav.css";

class NavBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
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
            <li class="nav-item workout-info">
                Workout Info
                <span class="dropdown-icon">
                    <i class="fa-solid fa-caret-down"></i>
                </span>
                <ul class="drop-down" style="text-align: left;">
                    <li>
                        <a href="/workout/" class="nav-link" style="font-weight: 400;">Workouts</a>
                    </li>
                    <li>
                        <a href="/tracker/" class="nav-link" style="font-weight: 400;">Workout Tracker</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="/quiz/" class="nav-link">
                    <p class="nav-item">Quiz</p>
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
