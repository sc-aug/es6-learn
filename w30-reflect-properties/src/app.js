// Ex1.
console.log('----------Ex1.-----properties-add----');
class Person {
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

let p1 = Reflect.construct(Person, ['Me', 10]);

Reflect.defineProperty(p1, 'hobbies', {
    writable: true, // read-only
    value: ['Sports', 'Cooking'],
    configurable: true // one could change config after the property has been created.
});

console.log(p1.hobbies);

p1.hobbies = ['Nothing']; // error. if read-only

console.log(p1.hobbies);

// Ex2.
console.log('----------Ex2.-----properties-delete----');
Reflect.deleteProperty(p1, '_age');
console.log(p1._age);

// Ex3. lock object. prevent extension of object
console.log('----------Ex3.-----prevent-object-extensions----');
let p2 = Reflect.construct(Person, ['Me', 20]);
Reflect.preventExtensions(p2);
Reflect.defineProperty(p1, 'hobbies', {
    writable: true, // read-only
    value: ['Sports', 'Cooking'],
    configurable: true // one could change config after the property has been created.
});

console.log(p2.hobbies);

//Ex4.
console.log('----------Ex4.-----check-obj-extensibility----');
console.log(Reflect.isExtensible(p1));
console.log(Reflect.isExtensible(p2));