const quizQuestions = [
  {
    questionNumber: 1,
    question: "What colour is the sky?",
    answer1: "Green",
    answer2: "Blue",
    answer3: "Yellow",
    answer4: "red",
  },
  {
    questionNumber: 2,
    question: "Wsdgsky?",
    answer1: "meeeeee",
    answer2: "Blue",
    answer3: "Yellow",
    answer4: "red",
  },
  {
    questionNumber: 3,
    question: "sdgsdgdsge sky?",
    answer1: "woooooo",
    answer2: "Blue",
    answer3: "asvavasasvasavsaassvsav safsaf saf sa",
    answer4: "red",
  },
  {
    questionNumber: 4,
    question: "What csdhshtsnmmrm sky?",
    answer1: "hiiiiiiii",
    answer2: "Blue",
    answer3: "Yellow",
    answer4: "red",
  },
  {
    questionNumber: 5,
    question: "Wharsjrejjre ky?",
    answer1: "Green",
    answer2: "Blue",
    answer3: "Yellow",
    answer4: "red",
  },
  {
    questionNumber: 6,
    question: "What wr HEWHG sky?",
    answer1: "meeeeee",
    answer2: "Blue",
    answer3: "Yellow",
    answer4: "red",
  },
  {
    questionNumber: 7,
    question: "WhaWE GEW  EWy?",
    answer1: "woooooo",
    answer2: "Blue",
    answer3: "Yellow",
    answer4: "red",
  },
  {
    questionNumber: 8,
    question: "WhaEWG EW  WE EWy?",
    answer1: "hiiiiiiii",
    answer2: "Blue",
    answer3: "Yellow",
    answer4: "red",
  },
  {
    questionNumber: 9,
    question: "What coWE GGE WEWERHWsky?",
    answer1: "woooooo",
    answer2: "Blue",
    answer3: "Yellow",
    answer4: "red",
  },
  {
    questionNumber: 10,
    question: "What AWGWQAWGQAWG he sky?",
    answer1: "hiiiiiiii",
    answer2: "Blue",
    answer3: "Yellow",
    answer4: "red",
  },
];

window.addEventListener("DOMContentLoaded", () => {
  const center = document.querySelector(".center");

  let counter = 0;
  let answers;
  let timer;
  let readyBtn;
  let i;

  function displayReady() {
    center.innerHTML = `
    <div class="ready-container">
      <h1 class="ready-title">
        There are ${quizQuestions.length} questions in this quiz.
      </h1>
      <h2>Are you ready?</h2>
      <div class="btn-container">
        <button class="ready-btn">Start Quiz</button>
      </div>
    </div>
    `;
    readyBtn = document.querySelector(".ready-btn");
    readyBtn.addEventListener("click", displayNextQuestion);
    // readyBtn.addEventListener("click", );
  }

  displayReady();

  function displayTimer(timer) {
    let i = 0;
    function timerPlusOne() {
      timer.innerHTML = i;
      i++;
    }
    timerPlusOne();
    setInterval(timerPlusOne, 1000);
  }

  function displayNextQuestion() {
    let questionHTML = `<div class="header-container">
        <h1 class="question-number">Question ${quizQuestions[counter].questionNumber}/10</h1>
        <div class="timer">
        <h2 class="timer-number"></h2>
        </div>
      </div>
      <div class="question-title">
        <h3 class="question">${quizQuestions[counter].question}</h3>
      </div>
      <div class="answer-container">
        <p class="answer answer1">
          ${quizQuestions[counter].answer1}
        </p>
        <p class="answer answer2">
          ${quizQuestions[counter].answer2}
        </p>
        <p class="answer answer3">
          ${quizQuestions[counter].answer3}
        </p>
        <p class="answer answer4">
          ${quizQuestions[counter].answer4}
        </p>
      </div>`;
    center.innerHTML = questionHTML;
    answers = document.querySelectorAll(".answer");
    timer = document.querySelector(".timer-number");
    if (counter < quizQuestions.length) {
      displayTimer(timer);
    }
    answers.forEach(function (answer) {
      answer.addEventListener("click", function (e) {
        const option = e.currentTarget.classList[1];
        console.log(option);
        if (counter < quizQuestions.length) {
          // displayInterval();
          displayNextQuestion(quizQuestions);
        } else {
          displayResults();
        }
      });
    });
    counter++;
  }

  function displayResults() {
    center.innerHTML = `<h1>finished</h1>`;
  }
});
