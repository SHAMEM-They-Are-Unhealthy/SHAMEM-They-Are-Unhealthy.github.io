const quizQuestions = [
  {
    question: "What types of foods should you limit in your diet?",
    answer1: "Dairy",
    answer2: "Omega-3 fatty acids",
    answer3: "Processed foods",
    answer4: "Carbohydrates",
    correctAnswer: "answer3",
  },
  {
    question: "Which activity is not a moderate-intensity activity?",
    answer1: "Walking",
    answer2: "Running",
    answer3: "Doubles tennis",
    answer4: "Pushing a lawnmower",
    correctAnswer: "answer2",
  },
  {
    question: "Which activity is not a vigorous-intensity activity?",
    answer1: "Heavy gardening",
    answer2: "Running",
    answer3: "Aerobics",
    answer4: "Singles tennis",
    correctAnswer: "answer1",
  },
  {
    question: "Which activity is not a muscle-strengthening activity?",
    answer1: "Carrying heavy shopping bags",
    answer2: "Heavy gardening",
    answer3: "Yoga",
    answer4: "Aerobics",
    correctAnswer: "answer4",
  },
  {
    question: "Which activity is not a light activity?",
    answer1: "Getting up to make a cup of tea",
    answer2: "Yoga",
    answer3: "Moving around your home",
    answer4: "Cleaning and dusting",
    correctAnswer: "answer2",
  },
  {
    question:
      "What fraction of your food portion should include vegetables & salad?",
    answer1: "1/3",
    answer2: "1/4",
    answer3: "1/2",
    answer4: "2/5",
    correctAnswer: "answer3",
  },
  {
    question:
      "What fraction of your food portion should include good-quality protein?",
    answer1: "1/4",
    answer2: "1/2",
    answer3: "2/3",
    answer4: "3/5",
    correctAnswer: "answer1",
  },
  {
    question:
      "What fraction of your food portion should include complex carbohydrates?",
    answer1: "1/2",
    answer2: "3/5",
    answer3: "2/3",
    answer4: "1/4",
    correctAnswer: "answer4",
  },
  {
    question: "What are the benefits of following our programme?",
    answer1: "Improving your quality of life",
    answer2: "Improving mental health",
    answer3: "Prolonging your lifespan",
    answer4: "All of the above",
    correctAnswer: "answer1",
  },
  {
    question: "What are the benefits of following our programme?",
    answer1: "Looking younger",
    answer2: "Saving money",
    answer3: "Boosting your energy levels",
    answer4: "All of the above",
    correctAnswer: "answer3",
  },
  {
    question: "Which one is benefit of following our programme?",
    answer1: "Making your teeth whiter",
    answer2: "Improving sleep quality",
    answer3: "Improving your vision",
    answer4: "Making the sports team you support play better",
    correctAnswer: "answer2",
  },
  {
    question: "Which one is benefit of following our programme?",
    answer1: "Improving your music taste",
    answer2: "Death",
    answer3: "Losing money",
    answer4: "Avoiding illness",
    correctAnswer: "answer4",
  },
  {
    question: "What is our primary mission?",
    answer1:
      "To convince old people it’s never too late to start becoming healthy",
    answer2: "To entertain young people",
    answer3: "To promote a specific diet plan",
    answer4: "To sell health supplements",
    correctAnswer: "answer1",
  },
  {
    question: "How do we achieve our mission with our website?",
    answer1: "By developing a mobile app",
    answer2: "By organizing fitness events for young and old people",
    answer3:
      "By developing multiple information pages on health benefits and goal achievement",
    answer4: "By selling fitness equipment online",
    correctAnswer: "answer3",
  },
  {
    question:
      "What is the main message the website aims to convey to old people?",
    answer1: "It is too late to start a healthy lifestyle",
    answer2: "It is not too late to start becoming healthy",
    answer3: "Health is not important for older individuals",
    answer4: "There are limitations on accessing vital health information",
    correctAnswer: "answer2",
  },
  {
    question:
      "What kind of information will the website provide to its audience?",
    answer1: "Recipes for desserts",
    answer2: "Movie recommendations for seniors",
    answer3: "Tips for young entrepreneurs",
    answer4: "Benefits of being healthy and how to achieve health goals",
    correctAnswer: "answer4",
  },
  {
    question:
      "According to our mission statement, who should aspire to be healthy?",
    answer1: "Only young people",
    answer2: "Only old people",
    answer3: "Everyone",
    answer4: "People with specific medical conditions",
    correctAnswer: "answer3",
  },
  {
    question: "What is emphasized as a key aspect of the website’s mission?",
    answer1: "Developing multiple information pages",
    answer2: "Limiting access to information",
    answer3: "Promoting unhealthy habits",
    answer4: "Selling fitness merchandise",
    correctAnswer: "answer1",
  },
  {
    question:
      "What is emphasized as a direct way to boost mental health in the text?",
    answer1: "Watching television",
    answer2: "Regular exercise",
    answer3: "Playing video games",
    answer4: "Avoiding social interactions",
    correctAnswer: "answer2",
  },
  {
    question: "How does a well-balanced diet contribute to mental health?",
    answer1: "By causing chemical imbalances in the brain",
    answer2: "By decreasing endorphin levels",
    answer3: "By inducing stress and anxiety",
    answer4: "By regulating chemicals in the brain",
    correctAnswer: "answer4",
  },
  {
    question:
      "What impact can poor physical health in older ages have on one’s quality of life?",
    answer1: "It has no effect on quality of life",
    answer2: "It improves overall well-being",
    answer3:
      "It can lead to long hospital stays and a limited ability to enjoy activities",
    answer4: "It enhances cognitive functions",
    correctAnswer: "answer3",
  },
  {
    question: "What is the number 2 way to prolong lifespan?",
    answer1: "Regular exercise and proper diet",
    answer2: "Avoiding social interactions",
    answer3: "Watching television regulary",
    answer4: "Consuming fast food daily",
    correctAnswer: "answer1",
  },
  {
    question: "How can good physical health contribute to looking younger?",
    answer1: "Avoiding all physical activities",
    answer2: "Regular exercise and good fitness",
    answer3: "Following a strict diet of processed foods",
    answer4: "Getting frequent cosmetic surgeries",
    correctAnswer: "answer2",
  },
  {
    question: "What is highlighted as a benefit of proper sleep?",
    answer1: "Increased stress levels",
    answer2: "Reduced energy levels",
    answer3: "Frequent sleepless nights",
    answer4: "Good quality sleep and feeling refreshed",
    correctAnswer: "answer4",
  },
  {
    question: "How is good physical health linked to financial health",
    answer1: "By spending more money on healthcare",
    answer2: "By investing into expensive gym memberships",
    answer3: "By saving money through walking and cooking nutritious meals",
    answer4: "By avoiding all forms of physical activity",
    correctAnswer: "answer3",
  },
  {
    question:
      "How does good physical health contribute to minimizing the impact of illness?",
    answer1: "By minimizing the symptoms and durations of illnesses",
    answer2: "By increasing the severity and duration of ilnesses",
    answer3: "By weakening the immune system",
    answer4: "By avoiding all social interactions",
    correctAnswer: "answer1",
  },
  {
    question:
      "What is identified as the best way to avoid annoying, minor illnesses and colds in the text?",
    answer1: "Eating fast food regularly",
    answer2: "Keeping the mind and body healthy",
    answer3: "Avoiding physical activity",
    answer4: "Sleeping for only a few hours each night",
    correctAnswer: "answer2",
  },
];

let answerObjArray = [...quizQuestions];

window.addEventListener("DOMContentLoaded", () => {
  const center = document.querySelector(".center");

  let counter = 0;
  let answers;
  let timer;
  let readyBtn;

  function displayReady() {
    center.innerHTML = `
    <div class="ready-container">
      <h1 class="ready-title">
        There are 10 questions in this quiz.
      </h1>
      <div class="btn-container">
        <button class="ready-btn">Start Quiz</button>
      </div>
    </div>
    `;
    readyBtn = document.querySelector(".ready-btn");
    readyBtn.addEventListener("click", displayNextQuestion);
  }

  displayReady();

  function displayTimer(timer) {
    let i = 0;
    function timerPlusOne() {
      timer.innerHTML = `${i}s`;
      i++;
    }
    timerPlusOne();
    setInterval(timerPlusOne, 1000);
  }

  function displayCountdown() {
    const youAnswered = document.querySelector(".you-answered");
    const countdownNumber = document.querySelector(".countdown-number");
    let i = 3;
    function timerMinusOne() {
      countdownNumber.innerHTML = `${i}s.`;
      youAnswered.innerHTML;
      i--;
      if (i < 0) {
        clearInterval(countdown);
      }
    }
    timerMinusOne();
    const countdown = setInterval(timerMinusOne, 1000);
  }

  function displayInterval(answerObjArray) {
    let intervalText;
    if (counter < 10) {
      intervalText = "Next Question in ";
    } else {
      console.log(answerObjArray);
      intervalText = "Ending quiz in ";
    }
    const answerKey = answerObjArray[counter - 1].answer;
    const yourAnswer = quizQuestions[counter - 1][answerKey];
    center.innerHTML = `
      <div class="interval-container">
        <h1 class="countdown">${intervalText}<span class="countdown-number"></span></h1>
        <h2 class="">You answered :</h2>
        <h3 class="you-answered">${yourAnswer}</h3>
      </div>
    `;
    displayCountdown();
  }

  function displayNextQuestion() {
    let questionHTML = `<div class="header-container">
        <h1 class="question-number">Question ${counter + 1}/10</h1>
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
    const startTime = Date.now();
    if (counter < 10) {
      displayTimer(timer);
    }
    answers.forEach(function (answer) {
      answer.addEventListener("click", function (e) {
        const option = e.currentTarget.classList[1];
        const endTime = Date.now();
        const timeTaken = endTime - startTime;
        answerObjArray[counter - 1].answer = option;
        answerObjArray[counter - 1].score = timeTaken;
        displayInterval(answerObjArray);

        if (counter < 10) {
          setTimeout(displayNextQuestion, 3000);
        } else {
          setTimeout(displayResults, 3000);
        }
      });
    });
    counter++;
  }
  function displayResults() {
    let url = window.location.origin;
    url = url + "/quiz/summary/";
    window.location.replace(url);
  }
});
