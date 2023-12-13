const getCookieValue = (name) => (document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || '');

$(document).ready(function() {
    if (getCookieValue("session-id") != null) {
        $.get("https://shamem.glitch.me/login_test", {"sessionID": getCookieValue("session-id")}).done(function(data, status) {
            document.cookie = "session-id=" + data + "; path=/";
            document.getElementById("login").innerHTML = `<h3>Are you ready?</h3>
<div class="a-container" style="text-align: center;">
    <a class="btn" href="/quiz/health-quiz/">Start the Quiz</a>
</div>`;
        }).fail(function(data, status) {
            window.location = "/login/";
        });
    } else {
        window.location = "/login/";
    }
});