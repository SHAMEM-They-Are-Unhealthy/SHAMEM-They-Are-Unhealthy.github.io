const getCookieValue = (name) => (document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || '');

function compareNumbers(u1, u2) {
    return u2.topScore - u1.topScore;
}

const center = document.querySelector(".center");

$(document).ready(function() {
    $.get("https://shamem.glitch.me/get_highscores").done(function(data, status) {
        var JSONdata = JSON.parse(data);
        let sortedLeaderboardArray = JSONdata.sort(compareNumbers);
        displayLeaderBoard(sortedLeaderboardArray);
        podium();
    });
});

function displayLeaderBoard(items) {
    let leaderBoardHTML = items.map((item, index) => {
        return `<article class="item">
                <h3 class="rank">${index + 1}</h3>
                <h3 class="username">${item.username}</h3>
                <h3 class="score">${item.topScore}</h3>
            </article>`;
    });
    leaderBoardHTML = leaderBoardHTML.join("");
    center.innerHTML = leaderBoardHTML;
}

function podium() {
    const items = document.querySelectorAll(".item");
    switch (items.length) {
        case 0:
            center.innerHTML = `<article class="item">So Empty!</article>`;
            break;
        case 1:
            items[0].classList.add("gold");
            break;
        case 2:
            items[0].classList.add("gold");
            items[1].classList.add("silver");
            break;
        default:
            items[0].classList.add("gold");
            items[1].classList.add("silver");
            items[2].classList.add("bronze");
            break;
    }
}
