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
  const userInput = prompt(
    "Please enter your choice (rock - paper - scissor)"
  ).toLowerCase();
  switch (userInput) {
    case "rock":
      return "rock";
    case "paper":
      return "paper";
    case "scissors":
      return "scissors";
    default:
      return "invalid choice";
  }
};
