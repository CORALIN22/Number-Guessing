let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = (num) => {
  num = Math.floor(Math.random() * 9);
  return num;
};

const compareGuesses = (humanGuess, compGuess, secretTarget) => {
  const humanDifference = Math.abs(secretTarget - humanGuess);
  const computerDifference = Math.abs(secretTarget - compGuess);
  return humanDifference <= computerDifference;
};
const updateScore = (winner) => {
  if ("human" === winner) {
    humanScore++;
  }

  if ("computer" === winner) {
    computerScore++;
  }
};

const advanceRound = () => {
  currentRoundNumber++;
};
