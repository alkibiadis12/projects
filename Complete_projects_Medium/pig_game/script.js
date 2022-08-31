"use strict";

const rollDice = () => Math.floor(Math.random() * 6) + 1;

let turn = true;
let player1CurrentScore = 0;
let player2CurrentScore = 0;
let player1Score = 0;
let player2Score = 0;

document.querySelector(".btn--roll-dice").addEventListener("click", () => {
  let diceResult = rollDice();

  console.log(`Dice:${diceResult}`);

  document.querySelector(".dice").classList.remove("hidden");
  switch (diceResult) {
    case 1:
      document.querySelector(".dice").src = "./img/dice-six-faces-one.svg";
      break;
    case 2:
      document.querySelector(".dice").src = "./img/dice-six-faces-two.svg";
      break;
    case 3:
      document.querySelector(".dice").src = "./img/dice-six-faces-three.svg";
      break;
    case 4:
      document.querySelector(".dice").src = "./img/dice-six-faces-four.svg";
      break;
    case 5:
      document.querySelector(".dice").src = "./img/dice-six-faces-five.svg";
      break;
    case 6:
      document.querySelector(".dice").src = "./img/dice-six-faces-six.svg";
      break;
  }

  if (turn) {
    if (diceResult === 1) {
      player1CurrentScore = 0;
      player1Score = 0;
      document.querySelector(".player-current-score--1").textContent = String(player1CurrentScore);
      document.querySelector(".player-score--1").textContent = String(player1Score);
      document.querySelector(".player--1").classList.remove("player-dark-background");
      document.querySelector(".player--2").classList.add("player-dark-background");
      console.log("Player's 2 turn");
      turn = false;
    } else {
      player1CurrentScore += diceResult;
      document.querySelector(".player-current-score--1").textContent = String(player1CurrentScore);
    }
  } else {
    // player2 turn

    if (diceResult === 1) {
      player2CurrentScore = 0;
      player2Score = 0;
      document.querySelector(".player-current-score--2").textContent = String(player2CurrentScore);
      document.querySelector(".player-score--2").textContent = String(player2Score);
      document.querySelector(".player--2").classList.remove("player-dark-background");
      document.querySelector(".player--1").classList.add("player-dark-background");
      console.log("Player's 1 turn");
      turn = true;
    } else {
      player2CurrentScore += diceResult;
      document.querySelector(".player-current-score--2").textContent = String(player2CurrentScore);
    }
  }
});

document.querySelector(".btn--hold").addEventListener("click", () => {
  if (turn) {
    // player1 turn
    player1Score += player1CurrentScore;
    player1CurrentScore = 0;
    document.querySelector(".player-score--1").textContent = String(player1Score);
    document.querySelector(".player-current-score--1").textContent = String(player1CurrentScore);
    document.querySelector(".player--1").classList.remove("player-dark-background");
    document.querySelector(".player--2").classList.add("player-dark-background");
    console.log("Player's 2 turn");
    turn = false;
  } else {
    player2Score += player2CurrentScore;
    player2CurrentScore = 0;
    document.querySelector(".player-score--2").textContent = String(player2Score);
    document.querySelector(".player-current-score--2").textContent = String(player2CurrentScore);
    document.querySelector(".player--2").classList.remove("player-dark-background");
    document.querySelector(".player--1").classList.add("player-dark-background");
    console.log("Player's 1 turn");
    turn = true;
  }
});

document.querySelector(".btn--new-game").addEventListener("click", () => {
  document.querySelector(".dice").classList.add("hidden");
  turn = true;
  document.querySelector(".player--1").classList.add("player-dark-background");
  document.querySelector(".player--2").classList.remove("player-dark-background");
  player1CurrentScore = 0;
  player2CurrentScore = 0;
  player1Score = 0;
  player2Score = 0;
  document.querySelector(".player-score--1").textContent = "0";
  document.querySelector(".player-current-score--1").textContent = "0";
  document.querySelector(".player-score--2").textContent = "0";
  document.querySelector(".player-current-score--2").textContent = "0";
});
