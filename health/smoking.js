document.addEventListener("DOMContentLoaded", function() {
    const navLink = document.querySelectorAll(".enabled");
    navLink.forEach(n => n.addEventListener("click", () => {
        document.querySelectorAll(".selected").forEach(el => el.classList.remove("selected"));
        n.classList.toggle("selected");
        var event = new Event('change');
        document.getElementById("selected").value = n.getAttribute("value");
        document.getElementById("selected").dispatchEvent(event);
    }));
});