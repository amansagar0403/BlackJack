let player = {
  name:"Per",
  chips:195
}
let cards = [];
let sum = 0;
let hasBlackJack = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.querySelector("#cards-el");
let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name + " " + player.chips

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1
  if (randomCard === 1) {
    return 11;
  } else if (randomCard > 10) {
    return 10;
  } else {
    return randomCard;
  }
}

function startGame() {
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  let cards = [firstCard, secondCard];
  let sum = firstCard + secondCard;
  let isAlive = true;
  renderGame();
}

function renderGame() {
  cardEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " "
  }
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
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
