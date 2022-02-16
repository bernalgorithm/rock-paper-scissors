const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;


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

/* Human readable interface to play RPS */
function playRound(playerChoice) {
  let scrubbedInput = playerChoice.toLowerCase();
  let numericalChoice;
  switch (scrubbedInput) {
    case "rock":
      numericalChoice = ROCK;
      break;
    case "paper":
      numericalChoice = PAPER;
      break;
    case "scissors":
      numericalChoice = SCISSORS;
      break;
    default:
      return "ERROR: invalid play";
      break;
  }
  return evaluateRound(numericalChoice, computerPlay());
}

/* Evaluates a round of Rock, Paper, Scissors */
function evaluateRound(playerHand, computerHand) {
  let winner = "";
  if (playerHand === computerHand) {
     winner = "tie";
  } else if (playerHand === 1) {
     winner = (computerHand === 2) ? "computer" : "player";
  } else if (playerHand === 2) {
     winner = (computerHand === 3) ? "computer" : "player";
  } else { //playerHand is 3
     winner = (computerHand === 1) ? "computer" : "player";
  }

  return announceResults(winner);
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

/* Plays game for 5 rounds max */
function game()
