const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;
let gameState = 0;

document.getElementById("start").addEventListener("click", gameOn);
document.getElementById("rock").addEventListener("click", function () {
  console.log(evaluateRound(ROCK, computerPlay()));
});
document.getElementById("paper").addEventListener("click", function () {
  console.log(evaluateRound(PAPER, computerPlay()));
});
document.getElementById("scissors").addEventListener("click", function () {
  console.log(evaluateRound(PAPER, computerPlay()));
});


/* occurs when player presses "Start Game" and activates game */
function gameOn() {
  gameState = 1;
  document.getElementById("selectors").style.display = "block";
}


/* This function will randomly return the computer's
choice of rock, paper, or scissors as their hand. */
function computerPlay() {
  let rando = Math.random();
  if (rando < 0.33) {
    return ROCK;
  } else if (rando < 0.66) {
    return PAPER;
  } else {
    return SCISSORS;
  }
}

/* Evaluates a round of Rock, Paper, Scissors */
function evaluateRound(playerHand, computerHand) {
  let winner = "";
  if (playerHand === computerHand) {
     winner = "tie";
  } else if (playerHand === ROCK) {
     winner = (computerHand === PAPER) ? "computer" : "player";
  } else if (playerHand === PAPER) {
     winner = (computerHand === SCISSORS) ? "computer" : "player";
  } else { //playerHand is SCISSORS
     winner = (computerHand === ROCK) ? "computer" : "player";
  }

  return winner;
}

function announceResults(winner) {
  if (winner == "computer") {
    return "Oh no, you got beat by AI.";
  } else if (winner == "player") {
    return "Nicely done. You won!";
  } else {
    return "Man and machine are equally matched. Tie!";
  }
}

function printCurrentScore(playerScore, computerScore) {
  console.log(`Player score: ${playerScore}\r\nComputer score: ${computerScore}`);
}

/* Plays game for 5 rounds max */
function game() {
  let userInput;
  let result;
  let playerWins = 0;
  let computerWins = 0;
  for (let i = 0; i < 5; i++) {
    userInput = prompt("What's your move?");
    if (userInput === null) {
      console.log("Game Cancelled.");
      return;
    } else {
      result = playRound(userInput);
      if (result === "computer") {
        computerWins++;
        console.log("Computer won");
        printCurrentScore(playerWins, computerWins);
      } else if (result === "player") {
        playerWins++;
        console.log("Player won");
        printCurrentScore(playerWins, computerWins);
      } else {
        computerWins++;
        playerWins++;
        console.log("Tie game");
        printCurrentScore(playerWins, computerWins);
      }
    }

    if (computerWins === 3) {
      console.log("game over, computer wins.");
      i = 5;
    } else if (playerWins === 3) {
      console.log("game over, player wins.");
      i = 5;
    } else if (playerWins === 5 && computerWins === 5) {
      console.log("game over, tie.");
    }
  }
}
