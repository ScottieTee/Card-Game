import Hand from "./hand.js"
import prompt from 'prompt-sync';

// const deck = new Deck()
// deck.shuffle()
// console.log(deck.cards)

// //need to establish a function here for when a player enters in this amount of players
// let numberOfPlayers = 2
// const players = prompt()('');
// // console.log(`Hey there ${players}`);
// const numberOfPlayers = Number(players)

// //aggregate user input
// let userInput = []

// for (let i= 0; i < numberOfPlayers; i ++ ) {
//     const newPrompt = prompt()(`${i} `)
//     userInput.push(newPrompt)
// }
// console.log(userInput);

const numberOfPlayers = 3

//aggregate user input
let userInput = [
    '2c As 4d',
    'Kd 5h 6c',
    'Jc Jd 9s',
]

let hands = userInput.map(i => new Hand(i))
console.log(hands)

hands.forEach(hand => console.log(hand.getHandValue()))


// const computerDeckElement = document.querySelector('.computer-deck')
// const computerCardSlot = document.querySelector('.computer-card-slot-a')
// const playerDeckElement = document.querySelector('.player-deck')
// const playerCardSlot = document.querySelector('.player-card-slot-a')
// const text = document.querySelector('.text')

//this will cover player decks * howevermany players
let playerHands


// startGame()
// function startGame() {
//     const hand = new Hand()
//     deck.shuffle()

//     //ceil prevents a rounding error
//     const deckSplit = Math.ceil(deck.numberOfCards / numberOfPlayers)
//     playerDecks = new Deck(deck.cards.slice(0, deckSplit))

//     console.log(playerDecks);
// }

// function cleanBeforeRound() {
// text.innerText = ''
// computerCardSlot.innerHTML = ''
// playerCardSlot.innerHTML = ''

// function updateDeckCount() {
//     computerDeckElement.innerText = computerDeck.numberOfCards
//     DeckElement.innerText = computerDeck.numberOfCards
// }

// }