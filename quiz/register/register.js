$(document).ready(function() {
    let captcha_uuid;
    $.get("https://shamem.glitch.me/gen_captcha", function(data, status){
        captcha_uuid = data["uuid"]
        document.getElementById("captchaImg").innerHTML = `<img src="data:image/jpeg;base64,${data["number"]}"/>`;
    });

    $("form").submit(function() {
        $(".alert").html("");
        $.post("https://shamem.glitch.me/register", {"email": $("#email").val(), "username": $("#username").val(), "password": $("#password").val(), "captcha": $("#captcha").val(), "captcha_uuid": captcha_uuid}).done(function(data, status) {
            $.post("https://shamem.glitch.me/login", {"email": $("#email").val(), "password": $("#password").val()}).done(function(data, status) {
                document.cookie = "session-id=" + data + "; path=/";
                window.location = "/quiz/";
            }).fail(function(data, status) {
                $(".alert").html("Something went wrong! Try again later!");
            });
        }).fail(function(data, status) {
            $(".alert").html(data["responseJSON"]["message"]);
        });
        return false;
    });
});