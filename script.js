import Deck from "./deck.js"

const deck = new Deck()
deck.shuffle()
console.log(deck.cards)

//this will cover player decks * howevermany players
let playerDecks

startGame()
function startGame() {
    const deck = new Deck()
    deck.shuffle()

    //i need to create a numberOfPlayers variable
    //ceil prevents a rounding error
    const deckSplit = Math.ceil(deck.numberOfCards / numberOfPlayers)
    playerDecks = new Deck(deck.cards.slice(0, deckSplit))

    console.log(playerDecks)

}