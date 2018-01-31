// Ex1.
function *gen2(end) {
    for(let i = 0; i < end; i ++) {
        try {
            yield i;
        } catch (e) {
            console.log(e);
        }
    }
}

let it2 = gen2(3);

console.log(it2.next());
console.log(it2.throw("An error occurred"));
console.log(it2.next());
console.log(it2.next());