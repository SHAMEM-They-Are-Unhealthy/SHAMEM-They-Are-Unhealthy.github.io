const answerObjArray = [
  {
    question: "What types of foods should you limit in your diet?",
    answer1: "Dairy",
    answer2: "Omega-3 fatty acids",
    answer3: "Processed foods",
    answer4: "Carbohydrates",
    correctAnswer: "answer3",
    answer: "answer2",
    score: 590,
  },
  {
    question: "Which activity is not a moderate-intensity activity?",
    answer1: "Walking",
    answer2: "Running",
    answer3: "Doubles tennis",
    answer4: "Pushing a lawnmower",
    correctAnswer: "answer2",
    answer: "answer2",
    score: 2570,
  },
  {
    question: "Which activity is not a vigorous-intensity activity?",
    answer1: "Heavy gardening",
    answer2: "Running",
    answer3: "Aerobics",
    answer4: "Singles tennis",
    correctAnswer: "answer1",
    answer: "answer2",
    score: 3677,
  },
  {
    question: "Which activity is not a muscle-strengthening activity?",
    answer1: "Carrying heavy shopping bags",
    answer2: "Heavy gardening",
    answer3: "Yoga",
    answer4: "Aerobics",
    correctAnswer: "answer4",
    answer: "answer3",
    score: 8200,
  },
  {
    question: "Which activity is not a light activity?",
    answer1: "Getting up to make a cup of tea",
    answer2: "Yoga",
    answer3: "Moving around your home",
    answer4: "Cleaning and dusting",
    correctAnswer: "answer2",
    answer: "answer2",
    score: 1076,
  },
  {
    question:
      "What fraction of your food portion should include vegetables & salad?",
    answer1: "1/3",
    answer2: "1/4",
    answer3: "1/2",
    answer4: "2/5",
    correctAnswer: "answer3",
    answer: "answer4",
    score: 3449,
  },
  {
    question:
      "What fraction of your food portion should include good-quality protein?",
    answer1: "1/4",
    answer2: "1/2",
    answer3: "2/3",
    answer4: "3/5",
    correctAnswer: "answer1",
    answer: "answer1",
    score: 940,
  },
  {
    question:
      "What fraction of your food portion should include complex carbohydrates?",
    answer1: "1/2",
    answer2: "3/5",
    answer3: "2/3",
    answer4: "1/4",
    correctAnswer: "answer4",
    answer: "answer4",
    score: 1869,
  },
  {
    question: "What are the benefits of following our programme?",
    answer1: "Improving your quality of life",
    answer2: "Improving mental health",
    answer3: "Prolonging your lifespan",
    answer4: "All of the above",
    correctAnswer: "answer1",
    answer: "answer1",
    score: 772,
  },
  {
    question: "What are the benefits of following our programme?",
    answer1: "Looking younger",
    answer2: "Saving money",
    answer3: "Boosting your energy levels",
    answer4: "All of the above",
    correctAnswer: "answer3",
    answer: "answer2",
    score: 1193,
  },
];

window.addEventListener("DOMContentLoaded", () => {
  const center = document.querySelector(".center");

  function displaySummaryItems(items) {
    let summaryHTML = items.map((item, index) => {
      return `<div class="summary-item">
        <div class="top-container">
          <div class="question-title">
            <h3 class="question">${index + 1}. ${item.question}</h3>
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
  function addCorrectBorder(items) {
    const summaryItems = document.querySelectorAll(".summary-item");
    for (let i = 0; i < items.length; i++) {
      if (items[i].correctAnswer == items[i].answer) {
        summaryItems[i].classList.add("outline-color-green");
      } else {
        summaryItems[i].classList.add("outline-color-red");
      }
    }
  }

  function addYourAnswer(items) {
    let yourAnswer;
    let yourAnswerBackground;
    for (let i = 0; i < items.length; i++) {
      yourAnswer = items[i].answer;
      yourAnswer = "." + yourAnswer;
      yourAnswerBackground = document.querySelectorAll(yourAnswer);
      yourAnswerBackground[i].classList.add("yours");
    }
  }

  function addCorrectAnswer(items) {
    let correctAnswer;
    let correctAnswerBackground;
    for (let i = 0; i < items.length; i++) {
      correctAnswer = items[i].correctAnswer;
      correctAnswer = "." + correctAnswer;
      correctAnswerBackground = document.querySelectorAll(correctAnswer);
      correctAnswerBackground[i].classList.add("correct");
    }
  }

  function displayTotalScore(items) {
    let totalScore = 0;
    items.forEach((item) => {
      totalScore += item.score;
    });
    const totalScoreHTML = document.querySelector(".total-score");
    totalScoreHTML.innerHTML = `Total Score: ${totalScore}`;
  }

  displaySummaryItems(answerObjArray);
  addCorrectBorder(answerObjArray);
  addCorrectAnswer(answerObjArray);
  addYourAnswer(answerObjArray);
  displayTotalScore(answerObjArray);
});
