// Ex1.
console.log('----------Ex1.----revocable-proxies-----');
let person = {
    name: 'Me'
}

let handler = {
    get(target, property) {
        return Reflect.get(...arguments);
    }
}

let {proxy, revoke} = Proxy.revocable(person, handler);

console.log(proxy.name);
revoke();
console.log(proxy.name); // error: proxy has been revoked.