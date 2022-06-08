let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = 5;
let lowScore = document.querySelector(".low");
let highScore = document.querySelector(".high");
let checkBtn = document.querySelector(".check");
let input = document.querySelector(".input");
let gRight = document.querySelector(".right");
let btnAgain = document.querySelector(".again");

const displayMessage = function (message, selector) {
  document.querySelector(selector).textContent = message;
};

input.addEventListener("keydown", (e) => {
  if (e.keyCode === 13) {
    checkBtn.onclick();
  }
});

checkBtn.onclick = function () {
  const guess = Number(input.value);
  // console.log(guess,typeof guess);

  if (!guess) {
    displayMessage("🚧 Please Enter a Value", ".content");
  } else if (guess === secretNumber) {
    displayMessage("🎯You are Awesome.", ".content");
    winaudio.play();
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? "🔥 Too High" : "❄ Too Low",
        ".content"
      );
      score--;
      gRight.innerHTML = score;
      guess > secretNumber
        ? (highScore.innerHTML = guess)
        : (lowScore.innerHTML = guess);
    } else {
      displayMessage("💥 You lost the game", ".content");
      gRight.textContent = "";
      displayMessage(`The number was ${secretNumber}`, ".guess-right");
      failsound.play();
    }
  }
};

btnAgain.addEventListener("click", () => {
  window.location.reload();
});

// btnAgain.addEventListener("click", function () {
//   lowScore.innerHTML = 1;
//   highScore.innerHTML = 100;
//   let score = 5;
//   displayMessage("Start guessing...", ".content");
//   displayMessage("Guess Right:", ".guess-right");
//   document.querySelector(".right").textContent = score;
// });
