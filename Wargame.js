
 

class Player {  //Creating a template of information on a player.
    constructor (name) {  // I want the player to hold a name.
        this.name = name; // I want this name in this class to equal the name entered as the player.
        this.score = 0;
        this.hand = []; // I want the players hand to hold thier delt group (array) of cards.
        
    }

    playCard() {  //function to play a card from the hand
        return this.hand.pop() // choosing the card from the bottom of the hand (array)
        // and playing that card (return the element of the array)
    }
    
    increamentScore () {
    this.score += 1;
 
    }
    }
    
   
// end of player



class Card {  // Creating a template to hold the cards info
    constructor(value, suit) { // card will hold a card value and card suit
        this.value = value; // I want this cards value to equal the value entered.
        this.suit = suit;  // I want this cards suit to equal the suit entered.
    }

    describe() {  // adding a method in the card class to "describe" the card and 
        return `${this.value} of ${this.suit}` // return what card you have (value and suit)
    }

    
   
} // end card class

class Deck {  //creating a class for the deck. 
    constructor() {
        this.cards = []; 
    }
    shuffleDeck() {  // creating a shuffle method inside the deck class to shuffle the deck.
        this.cards = this.cards.sort(() => Math.random() - 0.5);
    }

    dealCards(p1, p2) { // method in the deck class created to deal the cards to player 1 & 2
        while( this.cards.length > 0 ) { //Creating a loop to loop through the deck of cards
            p1.hand.push(this.cards.pop()); // and push a card to each players hand (array) of cards.
            p2.hand.push(this.cards.pop ());
        }
        
    }

} // end of deck class
//Prompting the players to enter thier names. 
const playerOne = new Player(prompt("Please enter your name player one."));
const playerTwo = new Player(prompt("Please enter your name player two."));
console.log(playerOne, playerTwo);

const gameDeck = new Deck();
const suits = ["Spades", "Hearts", "Diamonds", "Clubs"];

suits.forEach( ( suit => {
    for ( let i = 2; i <= 14; i++) {
        gameDeck.cards.push(new Card(i, `${i} of ${suit}`)); // This is creating cards 1 - 14 in each suit
    }
}));
gameDeck.shuffleDeck();
gameDeck.dealCards(playerOne, playerTwo);
console.log(playerOne, playerTwo);


while(playerOne.hand.length > 0); {
    let p1CurrentCard = playerOne.playCard();
    let p2CurrentCard = playerTwo.playCard();
    console.log(p1CurrentCard, p2CurrentCard);
}

//Unable to figure out how to compare scores and come up with a winner.  

//}elseif(playerOne.hand.length < 0); {

  //  console.log("game over");
//} 
   
  //  let p1 = playerOne.increamentScore;
    //let p2 = playerTwo.increamentScore;
    //let array1 = 
    //while(p1CurrentCard.value > p2CurrentCard.value); {
      //  p1++;
        //console.log("Player one wins!");
    //}while (p1CurrentCard.value < p2CurrentCard.value); {
      //  p2++;
        //console.log("Player two wins");
    //}elseif ( p1CurrentCard.value == p2CurrentCard.value);
    //console.log('tie');





//if(p1.hand(array) > p2.hand(array)); {
  //  console.log("player one wins");
    
//}elseif(p1.hand(array) < p2.hand(array));
//console.log('player two wins');

    
   // if(playerOne.totalPoints > playerTwo.totalPoints) {
     //   console.log(playerOne, 'scored!');
       // playerOne.totalPoints++;
        //onsole.log(playerOne, "score is :", playerOne.totalPoints); 
    //} else {
      //  console.log(playerTwo, "scored!");
        //playerTwo.totalPoints++;
        //console.log(playerTwo, "score is :", playerTwo.totalPoints);
    //}

