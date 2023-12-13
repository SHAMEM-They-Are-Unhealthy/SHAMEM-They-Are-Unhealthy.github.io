import"./NavBar-PgYyMm5z.js";const d=a=>{var c;return((c=document.cookie.match("(^|;)\\s*"+a+"\\s*=\\s*([^;]+)"))==null?void 0:c.pop())||""};window.addEventListener("DOMContentLoaded",()=>{d("session-id")!=null?$.get("https://shamem.glitch.me/login_test",{sessionID:d("session-id")}).done(function(a,c){document.cookie="session-id="+a+"; path=/";const l=document.querySelector(".center");let i,r,e=-1,m,h,p;function y(){l.innerHTML=`
                <div class="ready-container">
                    <h1 class="ready-title">
                        There are 10 questions in this quiz.
                    </h1>
                    <div class="btn-container">
                        <button class="ready-btn">Start Quiz</button>
                    </div>
                </div>
                `,p=document.querySelector(".ready-btn"),p.addEventListener("click",w)}y();function v(t){let s=0;function n(){t.innerHTML=`${s}s`,s++}n(),setInterval(n,1e3)}function q(){const t=document.querySelector(".you-answered"),s=document.querySelector(".countdown-number");let n=3;function o(){s.innerHTML=`${n}s.`,t.innerHTML,n--,n<0&&clearInterval(u)}o();const u=setInterval(o,1e3)}function T(t){let s;e<10?s="Next Question in ":s="Ending quiz in ";const n=t[e-1].answer,o=i[e-1][n];l.innerHTML=`
                    <div class="interval-container">
                        <h1 class="countdown">${s}<span class="countdown-number"></span></h1>
                        <h2 class="">You answered :</h2>
                        <h3 class="you-answered">${o}</h3>
                    </div>
                `,q()}function w(){if(e==-1)$.post("https://shamem.glitch.me/start_quiz",{sessionID:d("session-id")}).done(function(t,s){var n=JSON.parse(t);document.cookie="session-id="+n.uuid+"; path=/",i=n.data,r=[...i],w()}).fail(function(t,s){window.location="/login/"});else{let t=`<div class="header-container">
                            <h1 class="question-number">Question ${e+1}/10</h1>
                            <div class="timer">
                                <h2 class="timer-number"></h2>
                            </div>
                        </div>
                        <div class="question-title">
                            <h3 class="question">${i[e].question}</h3>
                        </div>
                        <div class="answer-container">
                            <p class="answer answer1">
                                ${i[e].answer1}
                            </p>
                            <p class="answer answer2">
                                ${i[e].answer2}
                            </p>
                            <p class="answer answer3">
                                ${i[e].answer3}
                            </p>
                            <p class="answer answer4">
                                ${i[e].answer4}
                            </p>
                        </div>`;l.innerHTML=t,m=document.querySelectorAll(".answer"),h=document.querySelector(".timer-number");const s=Date.now();e<10&&v(h),m.forEach(function(n){n.addEventListener("click",function(o){const u=o.currentTarget.classList[1];$.post("https://shamem.glitch.me/submit_answer",{sessionID:d("session-id"),answer:u}).done(function(f,g){document.cookie="session-id="+f+"; path=/";const L=Date.now()-s;r[e-1].answer=u,r[e-1].score=L,T(r),e<10?setTimeout(w,3e3):setTimeout(b,3e3)}).fail(function(f,g){window.location="/login/"})})})}e++}function b(){window.location="/quiz/summary/"}}).fail(function(a,c){window.location="/login/"}):window.location="/login/"});
