// Ex1.
console.log('----------Ex1.-----construct-----');
class Person {
    constructor(name) {
        this.name = name;
    }
}

// let person = new Person('Me');
let person1 = Reflect.construct(Person, ['Me']);
console.log(person1);
console.log(person1 instanceof Person);

// Ex2. ??
// console.log('----------Ex2.----------');
//
// function TopObj() {
//     this.age = 10;
// }
//
// let person2 = Reflect.construct(Person, ['Me'], TopObj);
//
// console.log(person2);
// console.log(person2 instanceof Person);
// console.log(person2.__proto__ === Person.prototype);
// console.log(person2.__proto__ === TopObj.prototype);

// Ex3. 
console.log('----------Ex3.-----apply-----');
class Individual {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet(prefix = 'default') {
        console.log(`${prefix} I am ${this.name} age: ${this.age}`);
    }
}

let id = Reflect.construct(Individual, ['Me', 10]);
// id.greet();
Reflect.apply(id.greet, id, []);
Reflect.apply(id.greet, {}, ['prepre']);
Reflect.apply(id.greet, { name: 'Alice' }, []);
Reflect.apply(id.greet, { age: 0 }, ['prepre']);
