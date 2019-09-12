/**
 * @description: Shuffle a deck Of Cards among 4 players such that each of them recieves 9 cards
 * @author : Vaibhav Pratihar
 * @since : 08/20/19
 */

 const shuffleObject = require("../playerDeckOfCards/shuffleCardObject");
 const deckOfCards = require("../utility/deckOfCards");

 var cardShuffleObject = new shuffleObject();
 cardShuffleObject.shuffleCards((new deckOfCards).getDeckOfCards());