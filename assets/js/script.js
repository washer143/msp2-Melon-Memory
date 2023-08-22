const cards = document.querySelectorAll('.memory-card');
const htpModal = document.getElementById('htp-modal');
const modal = document.querySelector('.modal');
const moveContainer = document.querySelector('#moves');
const timerContainer = document.querySelector('#timer');
const modalBtn = document.getElementById('modal-btn');
const modalClose = document.querySelector('.modal-close');
const storageContainer = document.querySelector('.storage');
const info = document.querySelector('.info');
const saveBtn = document.querySelector('.save-btn');
const storedInput = localStorage.getItem('text-input');
const AllPairsMatched = 8;


let flippedCard = false;
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


modalBtn.addEventListener('click', showHtpModal); 
modalClose.addEventListener('click', closeHtpModal);

 
 function showHtpModal(){
     htpModal.style.display = "block";
 }

 function closeHtpModal(){
     htpModal.style.display = "none";
}
 

function flipCard() {
  if (!gameStart) {
       gameStart = true;
       timer();
}

  this.classList.add('flip');

  if (!flippedCard) {
    flippedCard = true;
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

  if (matchedPair === AllPairsMatched) gameWon();

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

 timerContainer.innerHTML = "Time " + minutes + " : " + seconds;
 
 function timer() {
     clock = setInterval(function() {
         seconds++;
         if (seconds === 59) {
             minutes++;
             seconds = 0;
         }
         timerContainer.innerHTML = "Time " + minutes + " : " + seconds;
     }, 1000);
 }
 
 function stopTime() {
     clearInterval(clock);
 }


function resetBoard() {
  [flippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function gameWon() {
  stopTime();
  showWinModal();
}

function showWinModal() {
  modal.style.display = "block";
  timeResult = timerContainer.innerHTML;
  document.getElementById("total-moves").innerHTML = moves;
  document.getElementById("total-time").innerHTML = timeResult;
  reset();
}


window.onclick = function(event) {
  if (event.target.classList == 'modal-close') {
      document.getElementById('modal').style.display = "none";
  }
};


function shuffle() {
  cards.forEach(cards => {
    let random = Math.floor(Math.random() * 16);
    cards.style.order = random;
  });
};


function reset() {
    
  setTimeout(() => {
    stopTime();
    shuffle();
    flippedCard = false;
    [firstCard, secondCard] = [null, null];
    gameStart = false;
    timeStart = false;
    seconds = 0;
    minutes = 0;
    moves = 0;
    matchedPair = 0;
    timerContainer.innerHTML = "Timer 0:00";
    moveContainer.innerHTML = 0;
    cards.forEach(cardReset => cardReset.classList.remove('flip'))
    cards.forEach(card => card.addEventListener('click', flipCard));
  }, 500);
}

