document.addEventListener("DOMContentLoaded", function() {
    const navLink = document.querySelectorAll(".enabled");
    navLink.forEach(n => n.addEventListener("click", () => {
        document.querySelectorAll(".selected").forEach(el => el.classList.remove("selected"));
        n.classList.toggle("selected");
    }));
});