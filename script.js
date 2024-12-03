"use strict";

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 3) + 1;
};

const getComputerChoice = () => {
  const randomNumber = generateRandomNumber();
  switch (randomNumber) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
    default:
      return "invalid choice";
  }
};

const getHumanChoice = () => {
  let userInput;
  while (true) {
    userInput = prompt("Please enter your choice (rock, paper or scissors)")
      .trim()
      .toLowerCase();
    if (["rock", "paper", "scissors"].includes(userInput)) {
      return userInput;
    } else {
      alert("Invalid choice. Please try again with rock, paper, or scissors.");
    }
  }
};

let humanScore = 0;
let computerScore = 0;

const playRound = (humanChoice, computerChoice) => {
  if (humanChoice === computerChoice) {
    console.log(`Tie Game`);
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    console.log(`You won! Rock beats Scissors`);
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    console.log(`You won! Paper beats Rock`);
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    console.log(`You won! Scissors beats Paper`);
  } else {
    computerScore++;
    console.log(
      `You Lose! ${
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
      } beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}`
    );
  }
};

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
