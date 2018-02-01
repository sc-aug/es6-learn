// Ex1.
console.log('----------Ex1.----init------');
let objs = [
    {a: 1},
    {b: 1},
    {c: 2},
    {c: 2}
];
let set1 = new WeakSet(objs);

// No loop & No size. JS won't know if any of its element being deleted.

// Ex2.
console.log('----------Ex2.----has------');
console.log(set1.has({a: 1}));
console.log(set1.has(objs[0]));
console.log(set1.has(objs[3]));
console.log(objs[0] === objs[3]);

// Ex3.
console.log('----------Ex3.----add-delete------');
set1.delete(objs[0]);
console.log(set1.has(objs[0]));
console.log(set1.has(objs[3]));

let newobj = { a: 1, b: 2 };
set1.add(newobj);
console.log(set1.has(newobj));