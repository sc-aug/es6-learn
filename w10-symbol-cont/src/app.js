let sym = Symbol.for('age');

let person = {
    name: 'Me',
    age: 0
}

function makeAge(p) {
    let ageSymbol = Symbol.for('age');
    p[ageSymbol] = 10;
}

makeAge(person);

console.log(person[sym]);
console.log(person["age"]);
