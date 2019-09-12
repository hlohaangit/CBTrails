const card = require("../utility/card")

class deckOfCards {
    constructor() {
        this.cardsArray = null;
    }
    //returns the un-shuffled deck of cards
    getDeckOfCards() {
        this.cardsArray = new Array(52);
        for (let iterator = 0; iterator < 13; ++iterator) {
            this.cardsArray[iterator] = new card("Clubs", parseInt(iterator+1));
            this.cardsArray[iterator + 13] = new card("Hearts", parseInt(iterator+1));
            this.cardsArray[iterator + 26] = new card("Spades", parseInt(iterator+1));
            this.cardsArray[iterator + 39] = new card("Diamonds", parseInt(iterator+1));
        }
        return this.cardsArray;
    }
}

module.exports = deckOfCards;