// Ex1.
console.log('----------Ex1.----------');
let cardAce = {
    name: 'Ace of Spades'
}

let cardKing = {
    name: 'King of Clubs'
}

let key1 = { a: 1 };
let key2 = { b: 1 };

// WeakMap can only use Object as keys
// reference to primitive type is weak
// objects can be garbage collected
let deck = new WeakMap();
deck.set(key1, cardAce);
deck.set(key2, cardKing);

// Looping is impossible, because some item might be deleted
// and JS won't be able to detect that
// for (e of deck) {
//     console.log(e)
// }

console.log(deck.get(key1));