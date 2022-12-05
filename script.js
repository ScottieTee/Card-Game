import Hand from "./hand.js"
import prompt from 'prompt-sync';

const players = prompt()('');
// // console.log(`Hey there ${players}`);
const numberOfPlayers = Number(players)

//aggregate user input
let userInput = []

for (let i= 0; i < numberOfPlayers; i ++ ) {
    const newPrompt = prompt()(`${i} `)
    userInput.push(newPrompt)
}



let hands = userInput.map((val, i) => new Hand(val, i))


hands.sort((a,b) =>  b.value - a.value)


let winners = [hands[0].order]
let winningValue =  hands[0].value
for(let i = 1; i < hands.length; i++) {
    if(hands[i].value == winningValue) {
        winners.push(hands[i].order)
    } else {
        break
    }
}

console.log(winners.join(', '))




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