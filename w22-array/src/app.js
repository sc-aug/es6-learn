// Ex1.
console.log('----------Ex1.----------');
// es5 style
let arr1 = Array(5);
console.log(arr1);

let arr2 = Array.of(5, 6, 7);
console.log(arr2);

// Ex2.
console.log('----------Ex2.----------');
let arr3 = [1,3,5];
console.log(arr3);
let newArr3 = Array.from(arr3, val => val + 2);
console.log(newArr3);

// Ex3.
console.log('----------Ex3.----------');
let arr4 = [1,2,4];
arr4.fill(100);
console.log(arr4);
let arr5 = [1,2,4,8];
arr5.fill(100, 1, 3);
console.log(arr5);

// Ex4.
console.log('----------Ex4.----------');
let arr6 = [4,1,7,2,3,9,11];
console.log(arr6.find(val => val > 5)); // find the very first element

// Ex5.
console.log('----------Ex5.----------');
let inventory = [
    { name: 'apple', quantity: 3 },
    { name: 'banana', quantity: 10},
    { name: 'tomato', quantity: 8}
];

function findTomato(repo) {
    return repo.name === 'tomato';
}
console.log(inventory.find(findTomato));

// Ex6.
console.log('----------Ex6.----------');
let arr7 = [1,2,3,4,100];
console.log(arr7.copyWithin(1,4));
console.log(arr7); // the original array changed

// Ex7.
console.log('----------Ex7.----------');
let arr8 = [1,2,3,4,100];
console.log(arr8.copyWithin(1, 0, 4));
// get [1,1,2,3,4,100]
// then truncate to [1,1,2,3,4]

// Ex8.
console.log('----------Ex8.----------');
let arr9 = [1,2,3,4,5];
console.log(arr9.entries()); // get an iterator
let it = arr9.entries();
for (let e of it) {
    console.log(e); // get key value pairs
}
