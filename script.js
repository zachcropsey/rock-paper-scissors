let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
  let randComp = Math.floor(Math.random() * 3);
  if (randComp === 0) {
    return "rock";
  } else if (randComp === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Select Rock, Paper, or Scissors").toLowerCase();
  return choice;
}

function playRound(humanChoice, computerChoice) {
  let result;

  if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore += 1;
    result = "You win, Rock crushes Scissors";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore += 1;
    result = "You win, Scissors cuts Paper";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore += 1;
    result = "You win, Paper covers Rock";
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore += 1;
    result = "You lose, Rock crushes Scissors";
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore += 1;
    result = "You lose, Scissors cuts Paper";
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore += 1;
    result = "You lose, Paper covers Rock";
  } else {
    result = "It's a tie";
  }

  return result;
}

function playGame(roundsRemaining) {
  if (roundsRemaining === 0) {
    console.log("Game over!");
    console.log(
      `Final Score -> Human: ${humanScore}, Computer: ${computerScore}`
    );
    return;
  }

  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();

  let result = playRound(humanChoice, computerChoice);
  console.log(result);
  console.log(`Your score: ${humanScore}, Computer score: ${computerScore}`);

  if (result !== "It's a tie") {
    playGame(roundsRemaining - 1);
  } else {
    playGame(roundsRemaining);
  }
}

playGame(5);
