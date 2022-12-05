const SUITS = ["h", "s", "d", "c"];
const RANKS = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];

const RANK_TO_VALUE = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  T: 10,
  J: 10,
  Q: 10,
  K: 10,
  A: 11,
};

//fresh card Hand
export default class Hand {
  constructor(cards = "", order = 0) {
    this.cards = cards.split(" ").map((c) => new Card(c));
    this.value = this.getHandValue();
    this.order = order;
  }
  //straight flush outcome
  hasStraightFlush() {
    return 100000 * (this.hasStraight() && this.hasFlush());
  }
  //three of a kind outcome
  hasThreeOfKind() {
    return (
      10000 *
      (this.cards[0].rank == this.cards[1].rank &&
        this.cards[2].rank == this.cards[1].rank)
    );
  }
  //straight outcome
  hasStraight() {
    let ranks = this.cards.map((c) => c.order);
    ranks.sort();

    return 1000 * (ranks[0] + 2 == ranks[1] + 1 && ranks[1] + 1 == ranks[2]);
  }
  //flush outcome
  hasFlush() {
    return (
      100 *
      (this.cards[0].suit == this.cards[1].suit &&
        this.cards[2].suit == this.cards[1].suit)
    );
  }
  //pair outcome
  hasPair() {
    return (
      20 *
      ((this.cards[0].rank == this.cards[1].rank ||
        this.cards[2].rank == this.cards[1].rank) &&
        !(
          this.cards[0].rank == this.cards[1].rank &&
          this.cards[2].rank == this.cards[1].rank
        ))
    );
  }
  //high card outcome
  hasHighCard() {
    const vals = this.cards.map((c) => c.value);
    vals.sort((a, b) => a - b);
    return vals[vals.length - 1];
  }

  getHandValue() {
    return Math.max(
      this.hasStraightFlush(),
      this.hasThreeOfKind(),
      this.hasFlush(),
      this.hasStraight(),
      this.hasPair(),
      this.hasHighCard()
    );
  }
}

//creates cards with suits and ranks
class Card {
  constructor(input) {
    this.suit = input.charAt(1);
    this.rank = input.charAt(0);
    this.value = RANK_TO_VALUE[this.rank];
    this.order = RANKS.indexOf(this.rank);
  }

  // constructor(suit, rank) {
  //     this.suit = suit
  //     this.rank = rank
  // }
}

//array of 52 cards as one thanks to flatmap
function freshHand() {
  return SUITS.flatMap((suit) => {
    return RANKS.map((rank) => {
      return new Card(suit, rank);
    });
  });
}
