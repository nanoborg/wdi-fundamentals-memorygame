debugger


const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	  } else if (cardsInPlay.length === 2) {
		console.log('sorry try again');
	  }
}

function flipCard(cardId) {
	console.log('User flipped '+cards[cardId]);
	cardsInPlay.push(cardId);
	checkForMatch();
}

flipCard(0)
flipCard(2)