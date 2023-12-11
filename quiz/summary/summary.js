const quizQuestions = [
  {
    questionNumber: 1,
    question: "What colour is the sky?",
    answer1: "Green",
    answer2: "Blue",
    answer3: "Yellow",
    answer4: "red",
    correct: true,
    score: 400,
  },
  {
    questionNumber: 2,
    question: "Wsdgsky?",
    answer1: "meeeeee",
    answer2: "Blue",
    answer3: "Yellow",
    answer4: "red",
    correct: false,
    score: 0,
  },
  {
    questionNumber: 3,
    question: "sdgsdgdsge sky?",
    answer1: "woooooo",
    answer2: "Blue",
    answer3: "asvavasasvasavsaassvsav safsaf saf sa",
    answer4: "red",
    correct: false,
    score: 0,
  },
  {
    questionNumber: 4,
    question: "What csdhshtsnmmrm sky?",
    answer1: "hiiiiiiii",
    answer2: "Blue",
    answer3: "Yellow",
    answer4: "red",
    correct: true,
    score: 586,
  },
  {
    questionNumber: 5,
    question: "Wharsjrejjre ky?",
    answer1: "Green",
    answer2: "Blue",
    answer3: "Yellow",
    answer4: "red",
    correct: true,
    score: 700,
  },
  {
    questionNumber: 6,
    question: "What wr HEWHG sky?",
    answer1: "meeeeee",
    answer2: "Blue",
    answer3: "Yellow",
    answer4: "red",
    correct: false,
    score: 0,
  },
  {
    questionNumber: 7,
    question: "WhaWE GEW  EWy?",
    answer1: "woooooo",
    answer2: "Blue",
    answer3: "Yellow",
    answer4: "red",
    correct: true,
    score: 110,
  },
  {
    questionNumber: 8,
    question: "WhaEWG EW  WE EWy?",
    answer1: "hiiiiiiii",
    answer2: "Blue",
    answer3: "Yellow",
    answer4: "red",
    correct: false,
    score: 0,
  },
  {
    questionNumber: 9,
    question: "What coWE GGE WEWERHWsky?",
    answer1: "woooooo",
    answer2: "Blue",
    answer3: "Yellow",
    answer4: "red",
    correct: true,
    score: 76,
  },
  {
    questionNumber: 10,
    question: "What AWGWQAWGQAWG he sky?",
    answer1: "hiiiiiiii",
    answer2: "Blue",
    answer3: "Yellow",
    answer4: "red",
    correct: true,
    score: 675,
  },
];

window.addEventListener("DOMContentLoaded", () => {
  const center = document.querySelector(".center");

  function displaySummaryItems(items) {
    let summaryHTML = items.map((item) => {
      return `<div class="summary-item">
        <div class="top-container">
          <div class="question-title">
            <h3 class="question">${item.questionNumber}. ${item.question}</h3>
          </div>
          <div class="score">
            <h3>Score: ${item.score}</h3>
          </div>
        </div>
        <div class="answer-container">
          <p class="answer answer1">1. ${item.answer1}</p>
          <p class="answer answer2">2. ${item.answer2}</p>
          <p class="answer answer3">3. ${item.answer3}</p>
          <p class="answer answer4">4. ${item.answer4}</p>
        </div>
      </div>`;
    });

    summaryHTML.join("");
    center.innerHTML = summaryHTML;
  }

  displaySummaryItems(quizQuestions);
});
