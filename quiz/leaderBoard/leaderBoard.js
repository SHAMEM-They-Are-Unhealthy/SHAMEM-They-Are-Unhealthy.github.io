let leaderboardArray = [
  {
    username: "qqqqqqqq",
    topScore: 3560,
  },
  {
    username: "wwwwwww",
    topScore: 2800,
  },
  {
    username: "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    topScore: 2999,
  },
  {
    username: "rrrrrr",
    topScore: 3000,
  },
  {
    username: "tttt",
    topScore: 360,
  },
  {
    username: "yyy",
    topScore: 3560,
  },
  {
    username: "uuuuuu",
    topScore: 2800,
  },
  {
    username: "iiiiiiiiiiii",
    topScore: 2999,
  },
  {
    username: "ooooooooo",
    topScore: 3000,
  },
  {
    username: "ppppp",
    topScore: 361,
  },
];

function compareNumbers(u1, u2) {
  return u2.topScore - u1.topScore;
}

let sortedLeaderboardArray = leaderboardArray.sort(compareNumbers);
const center = document.querySelector(".center");

window.addEventListener("DOMContentLoaded", () => {
  displayLeaderBoard(sortedLeaderboardArray);
  podium();
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
  items[0].classList.add("gold");
  items[1].classList.add("silver");
  items[2].classList.add("bronze");
}
