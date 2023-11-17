'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const players = document.querySelectorAll('.player');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let currentScore = 0;
let total0 = 0;
let total1 = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', rollDice);

// New game funtionality
btnNew.addEventListener('click', newGame);

// Hold game funtionality
btnHold.addEventListener('click', function () {
  if (player0El.classList.contains('player--active')) {
    total0 += currentScore;
    score0El.textContent = total0;
    currentScore = 0; // reset current score
    switchPlayer(currentScore); // switch player
  } else if (player1El.classList.contains('player--active')) {
    total1 += currentScore;
    score1El.textContent = total1;
    currentScore = 0; // reset current score
    switchPlayer(currentScore); // switch player
  }
  // Winner funtionality
  if (total0 >= 10) {
    player0El.classList.add('player--winner');
    btnRoll.removeEventListener('click', rollDice);
    player0El.classList.remove('player--active');
    player1El.classList.remove('player--active');
  } else if (total1 >= 10) {
    player1El.classList.add('player--winner');
    btnRoll.removeEventListener('click', rollDice);
    player0El.classList.remove('player--active');
    player1El.classList.remove('player--active');
  }
});

// New game function declaration
function newGame() {
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');
  player0El.classList.add('player--active');
  player0El.classList.remove('player--winner');
  player0El.classList.remove('player--winner');
  currentScore = 0;
  total0 = 0;
  total1 = 0;
  btnRoll.addEventListener('click', rollDice);
}

// Rolling dice function declaration
function rollDice() {
  const dice = Math.floor(Math.random() * 6 + 1); // Generate a random dice roll

  diceEl.src = `img/dice-${dice}.png`; // Display dice
  diceEl.classList.remove('hidden');

  // check for rolled 1. if true, switch to next player
  if (dice !== 1) {
    if (player0El.classList.contains('player--active')) {
      currentScore += dice;
      current0El.textContent = currentScore;
    } else if (player1El.classList.contains('player--active')) {
      currentScore += dice;
      current1El.textContent = currentScore;
    }
  } else {
    currentScore = 0; // reset current score
    switchPlayer(currentScore); // switch player
  }
}

// switch player function declaration
function switchPlayer(currentScore) {
  current0El.textContent = currentScore;
  current1El.textContent = currentScore;
  for (let i = 0; i < players.length; i++) {
    const element = players[i];
    if (element.classList.contains('player--active')) {
      element.classList.remove('player--active');
    } else {
      element.classList.add('player--active');
    }
  }
}
