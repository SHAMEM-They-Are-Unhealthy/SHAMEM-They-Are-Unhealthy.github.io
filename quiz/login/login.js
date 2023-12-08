$(document).ready(function(){
    $("form").submit(function() {
        $(".alert").html("");
        $.post("https://shamem.glitch.me/login", {"email": $("#email").val(), "password": $("#password").val()}).done(function(data, status) {
            document.cookie = "session-id=" + data + "; path=/";
            window.location = "/quiz/";
        }).fail(function(data, status) {
            $(".alert").html(data["responseJSON"]["message"]);
        });
        return false;
    });
});