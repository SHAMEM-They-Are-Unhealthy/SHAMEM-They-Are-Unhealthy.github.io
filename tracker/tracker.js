const getCookieValue = (name) => (document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || '');
const activeLevels = {
    LowActive: 7500,
    OldActive: 8000,
    Active: 10000,
    HighlyActive: 12500
};

$(document).ready(function() {
    if (getCookieValue("session-id") != null) {
        $.get("https://shamem.glitch.me/login_test", {"sessionID": getCookieValue("session-id")}).done(function(data, status) {
            document.cookie = "session-id=" + data + "; path=/";
            $.get("https://shamem.glitch.me/get_plan", {"sessionID": getCookieValue("session-id")}).done(function(data, status) {
                document.cookie = "session-id=" + JSON.parse(data)["uuid"] + "; path=/";
                window.location = "/tracker/details/";
            }).fail(function(data, status) {
                console.log("Create new plan");
            });
        }).fail(function(data, status) {
            window.location = "/login/?tracker=true";
        });
    } else {
        window.location = "/login/?tracker=true";
    }
    $("#start").click(function() {
        var current = $("#current").val();
        $.post("https://shamem.glitch.me/new_plan", {"sessionID": getCookieValue("session-id"), "start": new Date().valueOf(), "time": $("#length").val(), "result": activeLevels[$("input[name='radio']:checked").val()], "data": JSON.stringify([current, current, current, current, current, current, current])}).done(function(data, status) {
            document.cookie = "session-id=" + data + "; path=/";
            window.location = "/tracker/details/";
        }).fail(function(data, status) {
            window.location = "/login/?tracker=true";
        });
        return false;
    });
});