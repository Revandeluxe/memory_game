var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function (){
	if (cardsInPlay[0]===cardsInPlay[1]){
		alert("You found a match!");
	} else {alert ("sorry, try again");
		}
	}	
	

var flipCard = function(cardID){
	console.log("User flipped" + cards[cardID]);
	cardsInPlay.push(cards[cardID]);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}


flipCard(0);
flipCard(2);





