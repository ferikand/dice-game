// Create variables for the game state
let scoreOne = 0;
let scoreTwo = 0;
const turnOne = 1;
const turnTwo = 2;
const message = document.getElementById("message");
// console.log(message);
const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard");
const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");
const activePlayer = document.querySelector(".active");

rollBtn.addEventListener("click", function () {
  if (player1Dice.classList.value.includes("active")) {
    let randomDice = Math.floor(Math.random() * 6 + 1);
    scoreOne += randomDice;
    player1Dice.textContent = randomDice;
    player1Scoreboard.textContent = scoreOne;
    player1Dice.classList.remove("active");
    player2Dice.classList.add("active");
    message.textContent = `Player ${turnTwo} Turn`;
    if (scoreOne >= 6) {
      message.textContent = `Player ${turnOne} Win!!!`;
      resetBtn.style.display = "block";
      rollBtn.style.display = "none";
    }
  } else if (player2Dice.classList.value.includes("active")) {
    let randomDice = Math.floor(Math.random() * 6 + 1);
    scoreTwo += randomDice;
    player2Dice.textContent = randomDice;
    player2Scoreboard.textContent = scoreTwo;
    player2Dice.classList.remove("active");
    player1Dice.classList.add("active");
    message.textContent = `Player ${turnOne} Turn`;
    if (scoreTwo >= 6) {
      message.textContent = `Player ${turnTwo} Win!!!`;
      resetBtn.style.display = "block";
      rollBtn.style.display = "none";
    }
  }
});

resetBtn.addEventListener("click", function () {
  scoreOne = 0;
  scoreTwo = 0;
  message.textContent = "Player 1 Turn";
  player1Dice.textContent = "-";
  player1Scoreboard.textContent = "0";
  player2Dice.textContent = "-";
  player2Scoreboard.textContent = "0";
  resetBtn.style.display = "none";
  rollBtn.style.display = "block";
});
