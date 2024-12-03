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
