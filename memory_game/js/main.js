console.log("Up and running!");
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
	console.log("User flipped " + cardOne);
	console.log("User flipped " + cardTwo);
var cards = ["queen", "queen", "king", "king"]
var cardsInPlay = []
var cardOne = "queen";
cardsInPlay.push("cardOne"); // adds cardOne to cardsInPlay
console.log(cards);
var cardTwo = "queen";
cardsInPlay.push("cardTwo"); // adds cardTwo to cardsInPlay
console.log(cardsInPlay);

var flipCard = function (cardId) {
	console.log("User flipped" + cards[cardId])
}