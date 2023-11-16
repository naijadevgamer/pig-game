'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // Generate a random dice roll
  const dice = Math.floor(Math.random() * 6 + 1);

  // Display dice
  diceEl.src = `img/dice-${dice}.png`;
  diceEl.classList.remove('hidden');

  // check for rolled 1. if true, switch to next player
  if (dice !== 1) {
    currentScore += dice;
    score0El.textContent = currentScore;
    current0El.textContent = currentScore;
  } else {
    // switch player
  }
});
