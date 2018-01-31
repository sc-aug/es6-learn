// Ex1.
function *select() { 
    yield 'House';
    yield 'Garage';
}

let it1 = select();

console.log(it1.next());
console.log(it1.next());
console.log(it1.next());

// Ex2.
let obj = {
    [Symbol.iterator]: gen1
}

function *gen1() {
    yield 1;
    yield 2;
}

for (let e of obj) {
    console.log(e);
}

// Ex3.
function *gen2(end) {
    for(let i = 0; i < end; i ++) {
        yield i;
    }
}

let it2 = gen2(3);

console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
