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

function playRound(humanChoice) {
  let computerChoice = getComputerChoice();
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

  // Update the result display
  document.getElementById("result").textContent = result;

  // Debugging: Check if scores are updating
  console.log("Human Score: " + humanScore);
  console.log("Computer Score: " + computerScore);

  // Update score display
  document.getElementById("human-score").textContent =
    "Human Score: " + humanScore;
  document.getElementById("computer-score").textContent =
    "Computer Score: " + computerScore;

  // Check if someone has won
  if (humanScore === 5) {
    console.log("Human won!");
    document.getElementById("result").textContent =
      "Congratulations! You win the game!";
    disableButtons(); // Disable buttons after the game ends
  } else if (computerScore === 5) {
    console.log("Computer won!");
    document.getElementById("result").textContent =
      "Computer wins the game. Better luck next time!";
    disableButtons(); // Disable buttons after the game ends
  }
}

function disableButtons() {
  document.getElementById("rockbtn").disabled = true;
  document.getElementById("paperbtn").disabled = true;
  document.getElementById("scissorsbtn").disabled = true;
}

document.getElementById("rockbtn").addEventListener("click", function () {
  playRound("rock");
});
document.getElementById("paperbtn").addEventListener("click", function () {
  playRound("paper");
});
document.getElementById("scissorsbtn").addEventListener("click", function () {
  playRound("scissors");
});

document.getElementById("resetbtn").addEventListener("click", function () {
  humanScore = 0;
  computerScore = 0;
  document.getElementById("human-score").textContent = "Human Score: 0";
  document.getElementById("computer-score").textContent = "Computer Score: 0";
  document.getElementById("result").textContent = "";
  document.getElementById("rockbtn").disabled = false;
  document.getElementById("paperbtn").disabled = false;
  document.getElementById("scissorsbtn").disabled = false;
});
