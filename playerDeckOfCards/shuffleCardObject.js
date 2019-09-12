const priorityQueue = require("./priorityQueueUsingLinkedList")

class shuffleCardObject {

    /**
     * @description : Shuffle Deck of Cards amongst four players
     * @param {deckOfCards} deckOfCards is the array in which all 52 un-shuffled cards are stored;
     */
    shuffleCards(deckOfCards){
        var booleanArray = new Array(52);
        booleanArray.fill(false);

        for(let iterator = 1; iterator <= 4; ++iterator){
            this.printCards(this.shuffleDeck(deckOfCards,booleanArray),iterator);
        }
    }

    /**
     * @description : Returns a queue of 9 shuffled cards 
     * @param {deckOfCards} deckOfCards is the un-shuffled deck of 52 cards
     * @param {booleanArray} booleanArray denotes a an array of boolean to determine which card hasn't been used
     */
    shuffleDeck(deckOfCards,booleanArray){
        var playerQueue = new priorityQueue();
        for (let iterator = 0; iterator < 9; ++iterator) {
            while (true) {
                var index = parseInt((Math.random() * 52) + 0);
                if (!booleanArray[index]) {
                    playerQueue.enqueue(deckOfCards[index]);
                    booleanArray[index] = true;
                    break;
                }
            }
        }
        return playerQueue;
    }

    /**
     * @description : Prints Cards in a Queue
     * @param {playerArray} playerArray is the array which contains cards of player
     * @param {playerName} Name of Player
     */
    printCards(playerQueue,playerName){
        process.stdout.write("Cards of Player " +playerName +" : ");
        playerQueue.print();
        console.log();
    }

}

module.exports = shuffleCardObject;