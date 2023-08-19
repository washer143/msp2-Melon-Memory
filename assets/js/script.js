const cards = document.querySelectorAll('.memory-card');
//const htpModal = document.getElementsById('.htp-modal');
//const winModal = document.getElementsById('.win-modal');
//const modalBtn = document.getElementsByClassName('.modal-btn');
//const leaderBoard = document.getElementsById('.leaderboard-btn');
const moveContainer = document.querySelector('#moves');
const timerContainer = document.querySelector('#timer');
//const modalClose = document.getElementsByClassName('.modal-close');
const allPairsMatched = 8;

let FlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let moves = 0;
let matchedPair = 0;
let timeResult = "";
let gameStart = false;




cards.forEach(card => card.addEventListener('click', flipCard));



function flipCard() {
  if (!gameStart) {
       gameStart = true;
       timer();
}

  this.classList.add('flip');

  if (!FlippedCard) {
    FlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.image === secondCard.dataset.image;
  if (isMatch) matchedPair +=1;

  if (isMatch) pairMatch();
    else noMatch();

  if (matchedPair === allPairsMatched) gameWon();

}

function pairMatch (){

  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function noMatch (){
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1000);

  plusMove();
}

 moves = 0;
 moveContainer.innerHtml = 0;
 
 function plusMove() {
     moves++;
     moveContainer.innerHTML = moves;
 }

function resetBoard() {
  [FlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 16);
    card.style.order = randomPos;
  });
})();

function timer() {
  
}
  


