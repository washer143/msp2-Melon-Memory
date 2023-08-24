const cards = document.querySelectorAll('.memory-card');
const htpModal = document.getElementById('htp-modal');
const modal = document.querySelector('.modal');
const moveContainer = document.querySelector('#moves');
const timerContainer = document.querySelector('#timer');
const modalBtn = document.getElementById('modal-btn');
const modalClose = document.querySelector('.modal-close');
const AllPairsMatched = 8;
let flippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let moves = 0;
let matchedPair = 0;
let timeResult = "";
let gameStart = false;
let clock;
/* timer variables */
let minutes = 0;
let seconds = 0;
let timeStart = false;

/* listens for click to flip cards */
cards.forEach(cards => cards.addEventListener('click', flipCard));

/* event listener to listen for click on how to play modal */
modalBtn.addEventListener('click', showHtpModal);
modalClose.addEventListener('click', closeHtpModal);

function showHtpModal() {
	htpModal.style.display = "block";
}

function closeHtpModal() {
	htpModal.style.display = "none";
}
/* This adds a flip function to the cards, adapted from
https://www.youtube.com/watch?v=ZniVgo8U7ek FreeCodeCamp.org */
function flipCard() {
	if(!gameStart) {
		gameStart = true;
		timer();
	}
	this.classList.add('flip');
	if(!flippedCard) {
		flippedCard = true;
		firstCard = this;
		return;
	}
	secondCard = this;
	checkForMatch();
}
/* This function will check if cards match, code adapted from 
https://www.youtube.com/watch?v=ZniVgo8U7ek FreeCodeCamp.org */
function checkForMatch() {
	let isMatch = firstCard.dataset.image === secondCard.dataset.image;
	if(isMatch) matchedPair += 1;
	if(isMatch) pairMatch();
	else noMatch();
	if(matchedPair === AllPairsMatched) gameWon();
}
/* This function will disable matched pairs */
function pairMatch() {
	firstCard.removeEventListener('click', flipCard);
	secondCard.removeEventListener('click', flipCard);
	resetBoard();
}
/* This function will lock the board until un-matched cards are flipped back */
function noMatch() {
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
/* This function will activate the timer once the game is started */
timerContainer.innerHTML = "Time " + minutes + " : " + seconds;

function timer() {
	clock = setInterval(function() {
		seconds++;
		if(seconds === 59) {
			minutes++;
			seconds = 0;
		}
		timerContainer.innerHTML = "Time " + minutes + " : " + seconds;
	}, 1000);
}
/* This function will clear the timer and will be called once the game is won */
function stopTime() {
	clearInterval(clock);
}
/* This function will reset the board after each round */
function resetBoard() {
	[flippedCard, lockBoard] = [false, false];
	[firstCard, secondCard] = [null, null];
}
/* Calls game won function to initiate win modal pop up*/
function gameWon() {
	stopTime();
	showWinModal();
}
/* This function will activate win modal to pop up once game is complete */
function showWinModal() {
	modal.style.display = "block";
	timeResult = timerContainer.innerHTML;
	document.getElementById("total-moves").innerHTML = moves;
	document.getElementById("total-time").innerHTML = timeResult;
	reset();
}
/* this function will activate the close button when the win modal pops-up */
window.onclick = function(event) {
	if(event.target.classList == 'modal-close') {
		document.getElementById('modal').style.display = "none";
	}
};
/* This function will randomize card placement once game is started or reset code adapted from 
https://www.youtube.com/watch?v=ZniVgo8U7ek FreeCodeCamp.org */
shuffle();
function shuffle() {
	cards.forEach(cards => {
	  let ramdom = Math.floor(Math.random() * 12);
	  cards.style.order = ramdom;
	});
  }

/* This will activate reset button to restart the game */
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
		cards.forEach(cardReset => cardReset.classList.remove('flip'));
		cards.forEach(card => card.addEventListener('click', flipCard));
	}, 500);
}