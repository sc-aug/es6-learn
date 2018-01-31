let sym = Symbol('debug');
console.log(sym);
console.log(sym.toString());
console.log(typeof sym);
console.log(typeof 1);

// symbol is hidden
// can be used as id
let objs = [
    {
        name: 'A',
        [sym]: 10
    }, {
        name: 'A',
        [sym]: 11
    }
]

console.log(objs);

// Ex2. 

let sym1 = Symbol.for('age');
let sym2 = Symbol('xxx');
let sym3 = Symbol.for('age');

console.log("equal?? ", sym1 === sym3);

let person1 = {
    name: 'Me'
}

let person2 = {
    name: 'We'
}

function makeAge(p1, p2) {
    let ageSymbol1 = Symbol.for('age');
    let ageSymbol2 = Symbol('xxx');
    p1[ageSymbol1] = 20;
    p2[ageSymbol2] = 10;
}

makeAge(person1, person2);

console.log(person1[sym1]);
console.log(person2[sym2]);

