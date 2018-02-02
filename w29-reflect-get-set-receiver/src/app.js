// Ex1.
console.log('----------Ex1.-----properties-get&set----');
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let p1 = Reflect.construct(Person, ['Me', 10]);
// this makes property more flexible, accessing properties with varibles
console.log(Reflect.get(p1, 'name'));
Reflect.set(p1, 'name', 'Bob');
console.log(p1);

// Ex2.
console.log('----------Ex2.----------');
let alice1 = {
    name: 'Alice1'
}
console.log(Reflect.get(p1, 'name', alice1));

//////////////////////////////////////////////////////////////////////////
// Ex3.
console.log('----------Ex3.-----understand-the-receiver-----');
// this allows us to change `this` keywords
class P {
    constructor (n, a) {
        this._name = n;
        this._age = a;
    }

    get name() {
        return this._name;
    }
    set name(n) {
        this._name = n;
    }
}

let bob = new P('Bob', 3);

let alice2 = {
    _name: 'Alice2'
}

// try to comment/un-comment this line 
Reflect.set(bob, 'name', 'NotBob', alice2);

console.log(Reflect.get(bob, 'name', alice2));

// Ex4.
console.log('----------Ex4.-----check-has-property-----');
console.log(Reflect.has(bob, 'name'));

