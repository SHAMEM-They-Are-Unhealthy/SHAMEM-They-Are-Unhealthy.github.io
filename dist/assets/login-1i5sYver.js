import"./NavBar-28i9yFkW.js";/* empty css             */$(document).ready(function(){$("form").submit(function(){return $(".alert").html(""),$.post("https://shamem.glitch.me/login",{email:$("#email").val(),password:$("#password").val()}).done(function(t,o){document.cookie="session-id="+t+"; path=/",window.location="/quiz/"}).fail(function(t,o){$(".alert").html(t.responseJSON.message)}),!1})});