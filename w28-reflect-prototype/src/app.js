// Ex1.
console.log('----------Ex1.-----prototype-----');
class Person {
    constructor(name) {
        this.name = name;
    }
}

let person = Reflect.construct(Person, ['Me']);

console.log(Reflect.getPrototypeOf(person));
console.log(Reflect.__proto__ == Person.prototype); // not safty, es5
console.log(Reflect.getPrototypeOf(person) == Person.prototype);

// safe way to access prototype
Person.prototype.age = 10;
console.log(Reflect.getPrototypeOf(person));

// Ex2.
console.log('----------Ex2.-----change-prototype-----');
let proto = {
    age : 50
};

Reflect.setPrototypeOf(person, proto);
console.log(Reflect.getPrototypeOf(person));
console.log(Reflect.getPrototypeOf(person) === proto);