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
    userInput = prompt("Please enter your choice (rock, paper or scissor)")
      .trim()
      .toLowerCase();
    if (["rock", "paper", "scissor"].includes(userInput)) {
      return userInput;
    } else {
      alert("Invalid choice. Please try again with rock, paper, or scissors.");
    }
  }
};
