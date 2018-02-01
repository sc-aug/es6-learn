// Ex1.
console.log('----------Ex1.----init------');
let set1 = new Set([1,2,3,1,1]);;

for (let e of set1) {
    console.log(e);
}

// Ex2.
console.log('----------Ex2.-----add-----');
let set2 = new Set([1,2,3,1,1]);;

set2.add(1);
set2.add(5);

for (let e of set2) {
    console.log(e);
}

// Ex3.
console.log('----------Ex3.-----delete-----');
let set3 = new Set([1,2,3,1,1]);;

set3.delete(1);

for (let e of set3) {
    console.log(e);
}

// Ex4.
console.log('----------Ex4.-----has-----');
let set4 = new Set([1,2,3,1,1]);;

console.log(set4.has(5));
console.log(set4.has(1));

// Ex5.
console.log('----------Ex5.-----loop-----');
let set5 = new Set([1,2,3,1,1]);;

for (let e of set5.entries()) {
    console.log(e); // get key-value pairs
}

for (let e of set5.keys()) {
    console.log(e); // get key-value pairs
}

for (let e of set5.values()) {
    console.log(e); // get key-value pairs
}