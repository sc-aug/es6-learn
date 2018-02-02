class Person {

    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello world! I am ${this.name}`);
    }
}

class Professor extends Person {
    constructor (name, univ) {
        super(name);
        this.univ = univ;
    }
    greet() {
        super.greet();
        console.log(`Hello world! I am ${this.name} I work in ${ this.univ }`);
    }
}

let person = new Person('Me');

console.log(person);
console.log(person.__proto__ === Person.prototype);

let tom = new Professor('Tom', 'ABC');

tom.greet();
console.log(person.__proto__ === Person.prototype);
console.log(person.__proto__ === Professor.prototype);
