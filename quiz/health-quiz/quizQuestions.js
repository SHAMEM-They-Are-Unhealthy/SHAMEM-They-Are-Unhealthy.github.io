const getCookieValue = (name) => (document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || '');

window.addEventListener("DOMContentLoaded", () => {
    if (getCookieValue("session-id") != null) {
        $.get("https://shamem.glitch.me/login_test", {"sessionID": getCookieValue("session-id")}).done(function(data, status) {
            document.cookie = "session-id=" + data + "; path=/";
            const center = document.querySelector(".center");

            let quizQuestions, answerObjArray;
            let counter = -1;
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
                if (counter == -1) {
                    $.post("https://shamem.glitch.me/start_quiz", {"sessionID": getCookieValue("session-id")}).done(function(data, status) {
                        var dataJSON = JSON.parse(data);
                        document.cookie = "session-id=" + dataJSON["uuid"] + "; path=/";
                        quizQuestions = dataJSON["data"];
                        answerObjArray = [...quizQuestions];
                        displayNextQuestion();
                    }).fail(function(data, status) {
                        window.location = "/login/";
                    });
                } else {
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
                            $.post("https://shamem.glitch.me/submit_answer", {"sessionID": getCookieValue("session-id"), answer: option}).done(function(data, status) {
                                document.cookie = "session-id=" + data + "; path=/";
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
                            }).fail(function(data, status) {
                                window.location = "/login/";
                            });
                        });
                    });
                }
                counter++;
            }

            function displayResults() {
                window.location = "/quiz/summary/";
            }
        }).fail(function(data, status) {
                window.location = "/login/";
        });
    } else {
        window.location = "/login/";
    }
});
