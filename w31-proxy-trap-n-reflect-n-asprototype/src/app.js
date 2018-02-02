// Ex1.
console.log('This should work(no error), the environment has some issues');
console.log('----------Ex1.-----trap----');
let person1 = {
    name: 'Me',
    age: 10
};

let handler1 = {
    get: function(target, name) {
        return name in target ? target[name] : 'Default Value';
    },
    set: function(target, property, value) {
        if (value.length >= 2) {
            Reflect.set(...arguments);
        } else {
            console.log('Failed');
        }
    }
};

let proxy1 = new Proxy(person1, handler1);

console.log(proxy1.test);
console.log(proxy1.name);

proxy1.name = 'K'; // failed
console.log(proxy1.name);
proxy1.name = 'KKKK'; // succeed
console.log(proxy1.name);

// Ex2.
console.log('----------Ex1.-----trap-cont----');
let person2 = {
    age: 10,
    name: 'Me'
}

let handler2 = {
    get: function(target, name) {
        return name in target ? target[name] : 'Default Value';
    },
    set: function(target, property, value) {
        if (value.length >= 2) {
            Reflect.set(...arguments);
        } else {
            console.log('Failed');
        }
    }
}

let proxy2 = new Proxy({}, handler2); // proxy can be prototype

console.log(proxy2.name); // output default value

Reflect.setPrototypeOf(person2, proxy2); // proxy can be prototype

console.log(proxy2.name); // output 'Me'

// > "This should work(no error), the environment has some issues"
// > "----------Ex1.-----trap----"
// > "Default Value"
// > "Me"
// > "Failed"
// > "Me"
// > "KKKK"
// > "----------Ex1.-----trap-cont----"
// > "Default Value"
// > "Default Value"