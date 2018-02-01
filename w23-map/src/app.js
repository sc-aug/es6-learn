// Ex1.
console.log('----------Ex1.----------');
let cardAce = {
    name: 'Ace of Spades'
}

let cardKing = {
    name: 'King of Clubs'
}

let deck = new Map();
deck.set('as', cardAce);
deck.set('kc', cardKing);

console.log(deck);
console.log(deck.size);

// Ex2.
console.log('----------Ex2.----------');
deck.set('as', cardAce);
console.log(deck.size);
console.log(deck.get('as'));

// Ex3.
console.log('----------Ex3.----------');
deck.delete('as');
console.log(deck.size);
console.log(deck.get('as')); // get undefined

// Ex4.
console.log('----------Ex4.----------');
deck.clear(); // delete all key-value pairs
console.log(deck.size);
console.log(deck.get('as')); // get undefined

// Ex5. iterator
console.log('----------Ex5.----------');
deck.set('as', cardAce);
deck.set('kc', cardKing);
console.log(deck.keys()); // gets an iterator
for (let e of deck.keys()) {
    console.log(e);
}
console.log(deck.values()); // gets an iterator
for (let e of deck.values()) {
    console.log(e);
}
console.log(deck.entries()); // gets an iterator
for (let e of deck.entries()) {
    console.log(e);
}
for (let e of deck) { // it's exactly the same
    console.log(e);
}
