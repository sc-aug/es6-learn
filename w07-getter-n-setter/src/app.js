class Person {
    constructor(name = "", age = 0) {
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name.toUpperCase();
    }

    set name(value) {
        this._name = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }
}

let me = new Person('haha');
console.log(me);
console.log(me.name);
console.log(me.age);
me.age = 20;
console.log(me.age);
