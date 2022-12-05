const SUITS = ["h", "s", "d", "c"]
const RANKS = [
    "2", 
    "3", 
    "4", 
    "5",
    "6",
    "7", 
    "8", 
    "9", 
    "T", 
    "J", 
    "Q", 
    "K", 
    "A"
]


const RANK_TO_VALUE = {
    "2": 2, 
    "3": 3, 
    "4": 4, 
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8, 
    "9": 9, 
    "T": 10, 
    "J": 10,
    "Q": 10, 
    "K": 10, 
    "A": 11,
}



// * **Straight Flush:** A straight flush is a hand that is both a straight and a flush. That is to say, all three cards have the same suit, and their ranks form a "run" (check out the explanation for a straight).

// * **Three Of A Kind:** A three of a kind is a hand in which all three of the cards have the same rank. An example might be `4c 4h 4d`, as all three cards are fours.

// * **Straight:** A straight is a hand in which the cards have ranks that are in a "run." This means that they are of the format `n, n+1, n+2`. For example, the hand `5h 3c 4d` is a straight, because the cards can be ordered `3c 4d 5h` to form a "run" of `3-4-5`. The full order of the cards is `2, 3, 4, 5, 6, 7, 8, 9, T, J, Q, K, A`. Face cards form runs when they appear in that order, so `Qh Kd As` is a straight, because they form a run of `Q-K-A`. Runs can also include numbers and face cards, so `9h Td Js` is straight because it forms a run of `9-T-J`. When considering a straight, aces can also be used as a 1. That means that `A-2-3` is also a run. An ace cannot, however, be both high and low in the same straight, so `K-A-2` does not qualify.

// * **Flush:** A flush is a hand in which all three cards have the same suit. An example might be `Ac 4c 8c`, as all three cards are clubs.

// * **Pair:** A pair is a hand in which two of the cards have the same rank, but the third is different. An example is `4c 4d Ah`. This is a "pair of fours", because it has two fours.

// * **High Card:** Any hand that doesn't fit into one of the other categories is considered a "high card" hand.


//fresh card Hand
export default class Hand {
    constructor(cards = '', order = 0) {
        this.cards = cards.split(" ").map(c => new Card(c))
        this.value = this.getHandValue()
        this.order = order
    }

    hasStraightFlush() {
        return 100000 * (this.hasStraight() && this.hasFlush())
    }

    hasThreeOfKind() {
        return 10000 * (this.cards[0].rank == this.cards[1].rank && this.cards[2].rank == this.cards[1].rank)
    }

    hasStraight() {
        let ranks = this.cards.map(c => c.order)
        ranks.sort()
        
        return 1000 * (((ranks[0] + 2) == (ranks[1] + 1)) && ((ranks[1] + 1) == ranks[2]))
    }

    hasFlush() {
        return 100 * (this.cards[0].suit == this.cards[1].suit && this.cards[2].suit == this.cards[1].suit)
    }

    hasPair() {
        return 20 * ((this.cards[0].rank == this.cards[1].rank || this.cards[2].rank == this.cards[1].rank)
            && !(this.cards[0].rank == this.cards[1].rank && this.cards[2].rank == this.cards[1].rank))
    }

    hasHighCard(){
        const vals = this.cards.map(c => c.value)
        vals.sort((a,b) => a - b)
        return vals[vals.length - 1]
    }

    getHandValue() {

        // console.log([
        //     this.hasStraightFlush(),
        //     this.hasThreeOfKind(),
        //     this.hasFlush(),
        //     this.hasStraight(),
        //     this.hasPair(),
        //     this.hasHighCard()
        // ])
        return Math.max(
            this.hasStraightFlush(),
            this.hasThreeOfKind(),
            this.hasFlush(),
            this.hasStraight(),
            this.hasPair(),
            this.hasHighCard(),
        )
    }

}


//creates cards with suits and ranks
class Card {
    constructor(input) {
        this.suit = input.charAt(1)
        this.rank = input.charAt(0)
        this.value = RANK_TO_VALUE[this.rank]
        this.order = RANKS.indexOf(this.rank)
    }

    // constructor(suit, rank) {
    //     this.suit = suit
    //     this.rank = rank
    // }
}


//array of 52 cards as one thanks to flatmap
function freshHand() {
    return SUITS.flatMap(suit =>{
        return RANKS.map(rank => {
            return new Card(suit, rank)
        })
    })
}