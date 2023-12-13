import"./NavBar-PgYyMm5z.js";const i=e=>{var t;return((t=document.cookie.match("(^|;)\\s*"+e+"\\s*=\\s*([^;]+)"))==null?void 0:t.pop())||""};$(document).ready(function(){i("session-id")!=null?$.get("https://shamem.glitch.me/login_test",{sessionID:i("session-id")}).done(function(e,t){document.cookie="session-id="+e+"; path=/",document.getElementById("login").innerHTML=`<h3>Are you ready?</h3>
<div class="a-container" style="text-align: center;">
    <a class="btn" href="/quiz/health-quiz/">Start the Quiz</a>
</div>`}):window.location="/login/"});
