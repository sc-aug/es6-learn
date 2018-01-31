let array = [1,2,3];

let it = array[Symbol.iterator]();

console.log(typeof it);

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
