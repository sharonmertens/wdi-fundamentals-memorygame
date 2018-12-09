console.log("Up and running!");

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
	console.log("User flipped " + cardOne);
	console.log("User flipped " + cardTwo);

var cards = ["queen", "queen", "king", "king"]

var cardsInPlay = []

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
}

var cardOne = "queen";
cardsInPlay.push("cardOne"); // adds cardOne to cardsInPlay
	console.log("User flipped queen");

var cardTwo = "queen";
cardsInPlay.push("cardTwo"); // adds cardTwo to cardsInPlay
	console.log("User flipped queen");

var flipCard = function (cardId) {
	console.log("User flipped" + cards[cardId])
}

flipCard (0);
flipCard (2);

checkForMatch ();