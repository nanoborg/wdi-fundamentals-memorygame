console.log("Up and running!");
var cards = [
  {
    id: 0,
    rank: "queen",
    suit: "hearts",
    cardImage: "./images/queen-of-hearts.png",
  },
  {
    id: 1,
    rank: "queen",
    suit: "diamonds",
    cardImage: "./images/queen-of-diamonds.png",
  },

  {
    id: 2,
    rank: "king",
    suit: "hearts",
    cardImage: "./images/king-of-hearts.png",
  },
  {
    id: 3,
    rank: "king",
    suit: "diamonds",
    cardImage: "./images/king-of-diamonds.png",
  },
];

var cardsInPlay = [];

function checkForMatch() {
  //if (cardsInPlay.length == 2) {
  if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
    alert("You found a match!");
    //setTimeout('location', 50000);
    // location.reload();
    resetBoard();
  } else {
    alert("Sorry, try again");
    resetBoard();
  }
}

function flipCard(e) {
  var cardId = e.target.dataset.id;

  if (cardsInPlay.length > 0 && cardId == cardsInPlay[0].id) {
    return;
  }
  cardsInPlay.push(cards[cardId]);
  e.target.src = cards[cardId].cardImage;
  if (cardsInPlay.length === 2) {
    setTimeout(() => {
      checkForMatch();
    }, 100);
  }
}

console.log(cardsInPlay);

function createBoard() {
  const cardTable = document.getElementById("game-board");
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement("img");
    cardElement.setAttribute("src", "./images/back.png");
    cardElement.setAttribute("data-id", i);
    cardElement.addEventListener("click", flipCard);
    cardTable.appendChild(cardElement);
  }
}

const resetBoard = () => {
  const cards = document.querySelectorAll("img");
  const cardTable = document.getElementById("game-board");

  cards.forEach((card, index) => {
    card.setAttribute("src", "./images/back.png");
    card.setAttribute("data-id", index);
    card.addEventListener("click", flipCard);
    cardTable.appendChild(card);
  });
  cardsInPlay = [];
};

createBoard();
