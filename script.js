'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
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
let score = [0, 0];
let activePlayer = 0;
let playing = true;

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // Check if game is active
  if (playing) {
    const dice = Math.floor(Math.random() * 6 + 1); // Generate a random dice roll

    diceEl.src = `img/dice-${dice}.png`; // Display dice
    diceEl.classList.remove('hidden');

    // check for rolled 1. if true, switch to next player
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

// Hold score functionality
btnHold.addEventListener('click', function () {
  // Check if game is active
  if (playing) {
    // Add current score to total score
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    // check if player score is >= 100
    // finish the game
    if (score[activePlayer] >= 10) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document.getElementById(`current--${activePlayer}`).textContent = 0;
    } else {
      //switch the player
      switchPlayer();
    }
  }
});

// New game functionality
btnNew.addEventListener('click', function () {
  player0El.classList.add('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  diceEl.classList.add('hidden');
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore = 0;
  score = [0, 0];
  activePlayer = 0;
  playing = true;
});

// switch player function declaration
function switchPlayer() {
  currentScore = 0; // reset current score
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer ? 0 : 1;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}
