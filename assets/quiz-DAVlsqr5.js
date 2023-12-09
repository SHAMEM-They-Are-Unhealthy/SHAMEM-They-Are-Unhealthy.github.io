import"./NavBar-gEiZQ2nI.js";const s=[{questionNumber:1,question:"What colour is the sky?",answer1:"Green",answer2:"Blue",answer3:"Yellow",answer4:"red"},{questionNumber:2,question:"Wsdgsky?",answer1:"meeeeee",answer2:"Blue",answer3:"Yellow",answer4:"red"},{questionNumber:3,question:"sdgsdgdsge sky?",answer1:"woooooo",answer2:"Blue",answer3:"asvavasasvasavsaassvsav safsaf saf sa",answer4:"red"},{questionNumber:4,question:"What csdhshtsnmmrm sky?",answer1:"hiiiiiiii",answer2:"Blue",answer3:"Yellow",answer4:"red"},{questionNumber:5,question:"Wharsjrejjre ky?",answer1:"Green",answer2:"Blue",answer3:"Yellow",answer4:"red"},{questionNumber:6,question:"What wr HEWHG sky?",answer1:"meeeeee",answer2:"Blue",answer3:"Yellow",answer4:"red"},{questionNumber:7,question:"WhaWE GEW  EWy?",answer1:"woooooo",answer2:"Blue",answer3:"Yellow",answer4:"red"},{questionNumber:8,question:"WhaEWG EW  WE EWy?",answer1:"hiiiiiiii",answer2:"Blue",answer3:"Yellow",answer4:"red"},{questionNumber:9,question:"What coWE GGE WEWERHWsky?",answer1:"woooooo",answer2:"Blue",answer3:"Yellow",answer4:"red"},{questionNumber:10,question:"What AWGWQAWGQAWG he sky?",answer1:"hiiiiiiii",answer2:"Blue",answer3:"Yellow",answer4:"red"}];window.addEventListener("DOMContentLoaded",()=>{const a=document.querySelector(".center");let e=0,t,o,u;function w(){a.innerHTML=`
    <div class="ready-container">
      <h1 class="ready-title">
        There are ${s.length} questions in this quiz.
      </h1>
      <h2>Are you ready?</h2>
      <div class="btn-container">
        <button class="ready-btn">Start Quiz</button>
      </div>
    </div>
    `,u=document.querySelector(".ready-btn"),u.addEventListener("click",l)}w();function d(i){let n=0;function r(){i.innerHTML=n,n++}r(),setInterval(r,1e3)}function l(){let i=`<div class="header-container">
        <h1 class="question-number">Question ${s[e].questionNumber}/10</h1>
        <div class="timer">
        <h2 class="timer-number"></h2>
        </div>
      </div>
      <div class="question-title">
        <h3 class="question">${s[e].question}</h3>
      </div>
      <div class="answer-container">
        <p class="answer answer1">
          ${s[e].answer1}
        </p>
        <p class="answer answer2">
          ${s[e].answer2}
        </p>
        <p class="answer answer3">
          ${s[e].answer3}
        </p>
        <p class="answer answer4">
          ${s[e].answer4}
        </p>
      </div>`;a.innerHTML=i,t=document.querySelectorAll(".answer"),o=document.querySelector(".timer-number"),e<s.length&&d(o),t.forEach(function(n){n.addEventListener("click",function(r){const h=r.currentTarget.classList[1];console.log(h),e<s.length?l():c()})}),e++}function c(){a.innerHTML="<h1>finished</h1>"}});
