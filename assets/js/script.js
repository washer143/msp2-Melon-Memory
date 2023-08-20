const cards = document.querySelectorAll('.memory-card');
const htpModal = document.querySelector('#htp-modal');
const winModal = document.querySelector('#win-modal');
//const leaderBoard = document.getElementsById('#leaderboard-btn');
const moveContainer = document.querySelector('#moves');
const timerContainer = document.querySelector('#timer');
const modalClose = document.querySelector('.modal-close');
const allPairsMatched = 8;


let FlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let moves = 0;
let matchedPair = 0;
let timeResult = "";
let gameStart = false;
let minutes = 0;
let seconds = 0;
let timeStart = false;


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

 timerContainer.innerHTML = "Clock " + minutes + " : " + seconds;
 
 function timer() {
     clock = setInterval(function() {
         seconds++;
         if (seconds === 59) {
             minutes++;
             seconds = 0;
         }
         timerContainer.innerHTML = "Clock " + minutes + " : " + seconds;
     }, 1000);
 }
 
 function stopTime() {
     clearInterval(Clock);
 }



function resetBoard() {
  [FlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function gameWon() {
  stopTime();
  showWinModal();
}




