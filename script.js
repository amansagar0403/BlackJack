let firstCard = 10;
let secondCard = 10;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.querySelector("#cards-el");

function startGame() {
  renderGame();
}

function renderGame() {
  cardEl.textContent = "Cards: " + cards[0] + " " + cards[1];
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a card?";
  } else if (sum === 21) {
    message = "Wohoo!! You have Won!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  console.log("Drawing a new card!!");
  let card = 7;
  sum += card;
  renderGame();
}
