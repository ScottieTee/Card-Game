const SUITS = ["h", "s", "d", "c"];
const RANKS = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];

//fresh card deck
export default class Deck {
  constructor(cards = freshDeck()) {
    this.cards = cards;
  }

  //shorthand for this.cards.length so I don't have to keep typing that
  get numberOfCards() {
    return this.cards.length;
  }

  //loop through all cards and swap them with another card
  //this takes the random index before the current card we are on and loops through our cards and provides a perfect, random shuffle.
  shuffle() {
    for (let i = this.numberOfCards - 1; i > 0; i--) {
      const newIndex = Math.floor(Math.random() * (i + 1));
      const oldValue = this.cards[newIndex];
      this.cards[newIndex] = this.cards[i];
      this.cards[i] = oldValue;
    }
  }
}

//creates cards with suits and ranks
class Card {
  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
  }
}

//array of 52 cards as one thanks to flatmap
function freshDeck() {
  return SUITS.flatMap((suit) => {
    return RANKS.map((rank) => {
      return new Card(suit, rank);
    });
  });
}
