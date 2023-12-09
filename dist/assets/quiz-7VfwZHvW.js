import"./NavBar-gEiZQ2nI.js";const s=[{questionNumber:1,question:"What colour is the sky?",answer1:"Green",answer2:"Blue",answer3:"Yellow",answer4:"red"},{questionNumber:2,question:"Wsdgsky?",answer1:"meeeeee",answer2:"Blue",answer3:"Yellow",answer4:"red"},{questionNumber:3,question:"sdgsdgdsge sky?",answer1:"woooooo",answer2:"Blue",answer3:"asvavasasvasavsaassvsav safsaf saf sa",answer4:"red"},{questionNumber:4,question:"What csdhshtsnmmrm sky?",answer1:"hiiiiiiii",answer2:"Blue",answer3:"Yellow",answer4:"red"},{questionNumber:5,question:"Wharsjrejjre ky?",answer1:"Green",answer2:"Blue",answer3:"Yellow",answer4:"red"},{questionNumber:6,question:"What wr HEWHG sky?",answer1:"meeeeee",answer2:"Blue",answer3:"Yellow",answer4:"red"},{questionNumber:7,question:"WhaWE GEW  EWy?",answer1:"woooooo",answer2:"Blue",answer3:"Yellow",answer4:"red"},{questionNumber:8,question:"WhaEWG EW  WE EWy?",answer1:"hiiiiiiii",answer2:"Blue",answer3:"Yellow",answer4:"red"},{questionNumber:9,question:"What coWE GGE WEWERHWsky?",answer1:"woooooo",answer2:"Blue",answer3:"Yellow",answer4:"red"},{questionNumber:10,question:"What AWGWQAWGQAWG he sky?",answer1:"hiiiiiiii",answer2:"Blue",answer3:"Yellow",answer4:"red"}];window.addEventListener("DOMContentLoaded",()=>{const a=document.querySelector(".center");let r=0,l,w,c,o=[];function m(){a.innerHTML=`
    <div class="ready-container">
      <h1 class="ready-title">
        There are ${s.length} questions in this quiz.
      </h1>
      <div class="btn-container">
        <button class="ready-btn">Start Quiz</button>
      </div>
    </div>
    `,c=document.querySelector(".ready-btn"),c.addEventListener("click",d)}m();function q(e){let t=0;function n(){e.innerHTML=`${t}s`,t++}n(),setInterval(n,1e3)}function y(){const e=document.querySelector(".you-answered"),t=document.querySelector(".countdown-number");let n=3;function i(){t.innerHTML=`${n}s.`,e.innerHTML,n--,n<0&&clearInterval(u)}i();const u=setInterval(i,1e3)}function v(e){const t=o[e-1].answer,n=s[e-1][t];a.innerHTML=`
      <div class="interval-container">
        <h1 class="countdown">Next Question in <span class="countdown-number"></span></h1>
        <h2 class="">You answered :</h2>
        <h3 class="you-answered">${n}</h3>
      </div>
    `,y()}function d(){let e=s[r].questionNumber,t=`<div class="header-container">
        <h1 class="question-number">Question ${e}/10</h1>
        <div class="timer">
          <h2 class="timer-number"></h2>
        </div>
      </div>
      <div class="question-title">
        <h3 class="question">${s[r].question}</h3>
      </div>
      <div class="answer-container">
        <p class="answer answer1">
          ${s[r].answer1}
        </p>
        <p class="answer answer2">
          ${s[r].answer2}
        </p>
        <p class="answer answer3">
          ${s[r].answer3}
        </p>
        <p class="answer answer4">
          ${s[r].answer4}
        </p>
      </div>`;a.innerHTML=t,l=document.querySelectorAll(".answer"),w=document.querySelector(".timer-number");const n=Date.now();r<s.length&&q(w),l.forEach(function(i){i.addEventListener("click",function(u){const b=u.currentTarget.classList[1],f=Date.now()-n;function p(E,T,N){this.questionNumber=E,this.answer=T,this.time=N}let h=new p(e,b,f);console.log(h),o.push(h),console.log(o),r<s.length?(v(e),setTimeout(d,3e3)):W()})}),r++}function W(){a.innerHTML="<h1>finished</h1>"}});
