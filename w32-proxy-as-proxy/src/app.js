// Ex1.
console.log('----------Ex1.-----proxy-as-proxy----');
let person = {
    name: 'Me',
    age: 10
};

let handler = {
};

let protoHandler = {
    get: function(target, name) {
        return name in target ? target[name] : 'Default Value';
    }
};

let proxy = new Proxy({}, handler);

let protoProxy = new Proxy(proxy, protoHandler);

Reflect.setPrototypeOf(person, protoProxy);

console.log(person.hobbies);

// > "----------Ex1.-----proxy-as-proxy----"
// > "Default Value"