// Ex1.
class Person {

}

Person.prototype[Symbol.toStringTag] = 'Person';

let person = new Person();

console.log(person);

// Ex2.
let numbers = [1,2,3,4];
let tmp = numbers + 1;
console.log(typeof tmp);
console.log(tmp);

numbers[Symbol.toPrimitive] = function() {
    return 111;
}

console.log(numbers + 1);
