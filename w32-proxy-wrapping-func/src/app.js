// Ex1.
console.log('----------Ex1.----wrapping-functions-----');
let log = (message) => {
    console.log('Log entry created, message: ' + message);
}

let handler = {
  	apply(target, thisArg, argumentList) {
      	if (argumentList.length == 1) {
          	return Reflect.apply(...arguments);
        }
    }
};

let proxy = new Proxy(log, handler);

proxy('Hello!');
proxy('Hello!', 10); // failed
