"use strict";
let randomNumber = Math.floor(Math.random() * 19) + 1;
let score = 20;
let highScore = 0;

console.log(`Solution: ${randomNumber}`);

let givenNumber;

document.querySelector(".form-flex").addEventListener("submit", (event) => {
  event.preventDefault();
  givenNumber = document.querySelector(".play-form-text-area").value;

  if (score > 0) {
    if (givenNumber < randomNumber) {
      document.querySelector(".play-guess").textContent = "Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else if (givenNumber > randomNumber) {
      document.querySelector(".play-guess").textContent = "Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".play-guess").textContent = "🎉 Correct Number!";
      document.querySelector("body").style.backgroundColor = "green";

      document.querySelector(".gmn-qm").textContent = `${randomNumber}`;
      document.querySelector(".gmn-grid").classList.add("gmn-grid-col2");
      document.querySelector(".play-form-text-area").classList.add("play-form-text-area--bgc");
      if (score > highScore) {
        highScore = score;
        document.querySelector(".highScore").textContent = highScore;
        document.querySelector(".play-form-text-area").disabled = true;
      }
    }
  }
});

document.querySelector(".header-button").addEventListener("click", () => {
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".gmn-grid").classList.remove("gmn-grid-col2");
  document.querySelector(".play-guess").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#2f2f2f";

  document.querySelector(".play-form-text-area").classList.remove("play-form-text-area--bgc");
  document.querySelector(".play-form-text-area").value = "";
  document.querySelector(".play-form-text-area").disabled = false;
  document.querySelector(".gmn-qm").textContent = "?";

  randomNumber = Math.floor(Math.random() * 20);
});
