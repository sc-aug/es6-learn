

// Ex1.
console.log("--------Ex1--------");
let obj1 = {
    a: 1
};

let obj2 = {
    b: 2
}

let obj = Object.assign(obj1, obj2);

console.log(obj);

// Ex2.
console.log("--------Ex2--------");
class Obj1 {
    constructor() {
        this.x = 1;
    }
}

class Obj2 {
    constructor() {
        this.y = 1;
    }
}

var object1 = new Obj1();
var object2 = new Obj2();

var object = Object.assign(object1, object2);

console.log(object);
console.log(object instanceof Obj1);
console.log(object instanceof Obj2);
console.log(object instanceof Object);

// check prototype
console.log(object.__proto__ === Obj1.prototype);
console.log(object.__proto__ === Obj2.prototype);
console.log(object.__proto__ === Object.prototype);

// Ex3.
console.log("--------Ex3--------");
let person = {
    name: "Bob"
};

let boss = {
    name: "Alex"
};

console.log(person.__proto__ === Object.prototype);

let o = Object.setPrototypeOf(person, boss);

console.log("returns:", o);

console.log(person.__proto__ === boss);

console.log(person.name);
