$(document).ready(function(){
    document.getElementsByClassName('sign-up')[0].setAttribute('href', '/register/' + window.location.search);
    if (getCookieValue("session-id") != null) {
        $.get("https://shamem.glitch.me/login_test", {"sessionID": getCookieValue("session-id")}).done(function(data, status) {
            document.cookie = "session-id=" + data + "; path=/";
            if (confirm('You are already logged in! Log out?')) {
                $.get("https://shamem.glitch.me/logout", {"sessionID": getCookieValue("session-id")});
            } else {
                const urlParams = new URLSearchParams(window.location.search);
                if (urlParams.get('tracker') == "true") {
                    window.location = "/tracker/";
                } else {
                    window.location = "/quiz/";
                }
            }
        })
    }
    $("form").submit(function() {
        $(".alert").html("");
        $.post("https://shamem.glitch.me/login", {"email": $("#email").val(), "password": $("#password").val()}).done(function(data, status) {
            document.cookie = "session-id=" + data + "; path=/";
            const urlParams = new URLSearchParams(window.location.search);
            if (urlParams.get('tracker') == "true") {
                window.location = "/tracker/";
            } else {
                window.location = "/quiz/";
            }
        }).fail(function(data, status) {
            $(".alert").html(data["responseJSON"]["message"]);
        });
        return false;
    });
});