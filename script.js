"use strict";

// Select elements

const player0EL = document.querySelector(".player--0");
const player1EL = document.querySelector(".player--1");

const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");

const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let currentScore, activePlayer, playing, scores;

// Starting condition

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add("hidden");
  player0EL.classList.remove("player--winner");
  player1EL.classList.remove("player--winner");
  player0EL.classList.add("player--active");
  player1EL.classList.remove("player--active");
};
// stats logic from start of application
init();

//funtion swith player
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  console.log("Switch Player Function works");
  // if active player is 0 then the new active player should 1 if else 0.
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  //toggle -  toggles back and forth
  // we ususally use classlist and now toggle class on classlist Property
  player0EL.classList.toggle("player--active");
  player1EL.classList.toggle("player--active");
};

// rolin dice functionality

btnRoll.addEventListener("click", function () {
  if (playing) {
    // random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. display dice

    diceEl.classList.remove("hidden");

    diceEl.src = `dice-${dice}.png`;

    // 3. check for rolled 1; if true, switch to next player
    if (dice !== 1) {
      // add dice to current score
      currentScore += dice;

      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
        
    } else {
      // switch to next player

      // need to practice ternery operators

      currentScore += dice;

      scores[activePlayer] += currentScore;
      document.getElementById(`score--${activePlayer}`).textContent =
        scores[activePlayer]; // CHANGE LATER

      if (scores[activePlayer] >= 100) {
        playing = false;
        


        
      document.getElementById(`score--${activePlayer}`).textContent =
        scores[activePlayer];
        diceEl.classList.add("hidden");
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.add("player--winner");

        document
          .querySelector(`.player--${activePlayer}`)
          .classList.add("player--active");
        console.log(" selecting winner works!");
        alert("Congrats you won! ");
      } else {
        switchPlayer();
      }
    }
  }
});

btnHold.addEventListener("click", function () {
  //add current score to active player
  scores[activePlayer] += currentScore;
  //scores[1] = score[1] + currentScore
  if (playing) {
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    console.log("button hold works if playing works");
  }
  //2. check is player score is >= 100
  // finish the game
  if (scores[activePlayer] >= 100) {
    playing = false;

    diceEl.classList.add("hidden");
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--winner");

    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--active");

    console.log("hold, winner game button hold works");

    alert(`Congrats you won! `);
  } else {
    // switch to next player
    switchPlayer();
  }
});

btnNew.addEventListener("click", init);
