import"./NavBar-8kjRtyNB.js";const c=r=>{var a;return((a=document.cookie.match("(^|;)\\s*"+r+"\\s*=\\s*([^;]+)"))==null?void 0:a.pop())||""};var t;$(document).ready(function(){c("session-id")!=null?$.get("https://shamem.glitch.me/login_test",{sessionID:c("session-id")}).done(function(r,a){document.cookie="session-id="+r+"; path=/",$.get("https://shamem.glitch.me/get_results",{sessionID:c("session-id")}).done(function(i,d){var l=JSON.parse(i);document.cookie="session-id="+l.uuid+"; path=/",t=l.data;const u=document.querySelector(".center");function w(o){let s=o.map((e,n)=>`<div class="summary-item">
                            <div class="top-container">
                                <div class="question-title">
                                    <h3 class="question">${n+1}. ${e.question}</h3>
                                </div>
                                <div class="score">
                                    <h3>Score: ${e.score}</h3>
                                </div>
                            </div>
                            <div class="answer-container">
                                <p class="answer answer1">1. ${e.answer1}</p>
                                <p class="answer answer2">2. ${e.answer2}</p>
                                <p class="answer answer3">3. ${e.answer3}</p>
                                <p class="answer answer4">4. ${e.answer4}</p>
                            </div>
                        </div>`);s.join(""),u.innerHTML=s}function m(o){const s=document.querySelectorAll(".summary-item");for(let e=0;e<o.length;e++)o[e].correctAnswer==o[e].answer?s[e].classList.add("outline-color-green"):s[e].classList.add("outline-color-red")}function p(o){let s,e;for(let n=0;n<o.length;n++)s=o[n].answer,s="."+s,e=document.querySelectorAll(s),e[n].classList.add("yours")}function f(o){let s,e;for(let n=0;n<o.length;n++)s=o[n].correctAnswer,s="."+s,e=document.querySelectorAll(s),e[n].classList.add("correct")}function h(o){let s=0;o.forEach(n=>{s+=n.score});const e=document.querySelector(".total-score");e.innerHTML=`Total Score: ${s}`}w(t),m(t),f(t),p(t),h(t)}).fail(function(i,d){window.location="/quiz/"})}).fail(function(r,a){window.location="/login/"}):window.location="/login/"});window.addEventListener("DOMContentLoaded",()=>{});
