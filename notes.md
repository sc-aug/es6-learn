# Notes of ES6

### Prepare
* [Compatible with browsers](https://kangax.github.io/compat-table/es6/)
* [Complete Setups](https://github.com/topheman/vanilla-es6-jspm)

### Basics

#### `let` and `const` and `var`
* let allows us using block scoping.

``` javascript
// Ex1.
// gets error: test2 is not defined
if (true) {
    var test1 = 't1';
}

if (true) {
    let test2 = 't2';
}
console.log(test1);
console.log(test2);

// Ex2.
// Get 10
let test = 10;
if (true) {
    let test = 20;
}
console.log(test);
```

``` javascript
// Ex3.
// gets error: cannot change constant variable
const test = 10;
test = 2;
console.log(test)

// Ex4.
// no error
// because array is a reference type, and the reference is not changed
// this rule also applys to `Object`
const test2 = [1, 2, 3];
test2.push(4);
conosle.log(test2);
```

#### Arrow Function
``` javascript
// Ex1.
// old way
function fn1() {
    return 'Hello';
}

fn2(a, b) {
    return a + b;
}

fn3(a) {
    return a + 1;
} 

// new way
var fn1 = () => 'Hello';
var fn2 = (a, b) => a + b;
var fn3 = a => a + 1;
```

#### `this` keyword acts different in arrow function
* [example](/w1-function-this/)

#### Default value in function
``` javascript
// Ex1.
function isEqual(n1 = 10, n2 = 5*3) {
    return n1 == n2;
}
// Ex2.
function isEqual(n1 = 10, n2 = n1) {
    return n1 == n2;
}
// Ex3.
let a = 10
function isEqual(n1 = a, n2 = n1) {
    return n1 == n2;
}
// This gets error! n2 is not defined.
function isEqual(n1 = n2, n2 = 10) {
    return n1 == n2;
}
```

#### Object literal extensions
``` javascript
// Ex1.
let myObj1 = {
    name: 'Chuan',
    gender: 0
};

// Ex2.
let name = 'chuan';
let gender = 0;
let myObj2 = {
    name,
    gender
}

// Ex3.
let name = 'chuan';
let gender = 0;
let myObj3 = {
    name,
    gender,
    helloFn() {
        console.log(this.name + ', ' + this.gender)
    },
    "hello Fn2"() {
        console.log(this.name);
    }
}
myObj3.helloFn();
myObj3["hello Fn2"]();
```

#### Rest operator & Spread operator
``` javascript
// Ex1. Rest operator
// convert input to an array
function sum(...numbers) {
    let res = 0;
    for (let i = 0; i < numbers.length; i++) {
        res += numbers[i];
    }
    return res;
}

console.log(sum(1,3,4,5,"6"))
```

``` javascript
// Ex2. Spread operator
let nums = [1,2,3,4,5];
console.log(Math.max(...nums));
// console.log(Math.max(nums)); // gets error
```

#### The for-of loop
``` javascript
let nums = [1,2,3,4,5]
for (let n of nums) {
    console.log(n);
}
```

#### Template literals

``` javascript
let name = 'Chuan';
let description = `
    this is a multiple line string template
    Hello, I am ${ 'Mr.' + name }
    Hello, I am \${ 'Mr.' + name }
`;
console.log(description);
```

#### Destructuring Arrays
``` javascript
// Ex0. swap
let a = 5;
let b = 10;
[b, a] = [a, b];
```

``` javascript
// Ex1.
// get a = 1, b = 2, c = 3
let nums = [1,2,3,4,5,6];
let [a, b, c] = nums;
// this won't effect a, b, c
// because a, b, c is a copy of that value not reference.
nums.splice(0, 1);
```

``` javascript
// Ex2.
// get a = 1, b = [2,3,4,5,6]
let nums = [1,2,3,4,5,6];
let [a, ...b] = nums;
```

``` javascript
// Ex3. set default value
// get a = 1, b = [2,3,4,5,6]
let nums = [1,2];
let [a = "default", b, c = "default value"] = nums;
console.log(a, b, c);
```

``` javascript
// Ex4. ignore a number
let nums = [1, 2, 3];
let [a = "default", , c = "default value"] = nums;
console.log(a, c);
```

#### Destructuring Objects
``` javascript
// Ex1.
let obj = {
    name: 'Hello',
    age: 10,
    greet() {
        console.log('Hello!');
    }
}
let {name, age, greet} = obj;
```

``` javascript
// Ex2. using alias
let obj = {
    name: 'Hello',
    age: 10,
    greet() {
        console.log('Hello!');
    }
}
let {name, age, greet: hello} = obj;
hello();
```

### Modules & Classes


### Promises


### Map,WeakMap & Set, WeakSet


### Reflect

* [Reflect](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect)
* In `Reflect`, `receiver` is used to refer the `object` of `this`.

