const getCookieValue = (name) => (document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || '');
var answerObjArray;

$(document).ready(function() {
    if (getCookieValue("session-id") != null) {
        $.get("https://shamem.glitch.me/login_test", {"sessionID": getCookieValue("session-id")}).done(function(data, status) {
            document.cookie = "session-id=" + data + "; path=/";
            $.get("https://shamem.glitch.me/get_results", {"sessionID": getCookieValue("session-id")}).done(function(data, status) {
                var JSONdata = JSON.parse(data);
                document.cookie = "session-id=" + JSONdata["uuid"] + "; path=/";
                answerObjArray = JSONdata["data"];
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
            }).fail(function(data, status) {
                window.location = "/quiz/";
            });
        }).fail(function(data, status) {
            window.location = "/login/";
        });
    } else {
        window.location = "/login/";
    }
});
