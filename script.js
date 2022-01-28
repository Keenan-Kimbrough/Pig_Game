'use strict'

// Select elements



const score0 = document.querySelector('#score--0');
const scoreEL = document.getElementById('score--1');
const current0El = document.getElemebtById('current--0');
const current1El = document.getElementById('current--1');



const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('btn-new');
const btnRoll = document.querySelector('btn-roll');
const btnHold = document.querySelector('btn-hold');



// Starting conditions


scored0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');


const scores = [0, 0]
let currentScore = 0;
let activePlayer = 0;
// rolin dice functionality 

btnRoll.addEventListener('click', function () {

    //1. gerenting random dice roll
 const dice = Math.trunc(Math.random()* 6) +1;

 


    // 2. display dice

diceEl.classList.remove('hidden');

diceEl.src = `dice - ${dice}.png`
    // 3. check for rolled 1; if true, switch to next player
if (dice !== 1) {

    // add dice to current score
    currentScore += dice ;
    current0El.textContent = currentScore // CHANGE LATER

    document.getElementById(`current--${actualPlayer}`).textContent = currentScore;

}
else {
    // switch to next player

    // need to practice ternery operators
    // if active player is 0 then the new active player should 1 if else 0.
activePlayer = activePlayer === 0 ? 1 : 0;

}
})