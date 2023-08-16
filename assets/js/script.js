const cards = document.querySelectorAll('.memory-card');

let flippedCard = false;
let firstCard, secondCard;

cards.forEach(card => card.addEventListener('click', flipCard));

function flipCard (){
    this.classList.toggle('flip');
    if (!flippedCard){
        flippedCard = true;
        firstCard = this;
    } else {
        flippedCard = false;
        secondCard = this; return;
 
    }

}
