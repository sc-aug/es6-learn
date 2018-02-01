// Math.
console.log('------------Math----------');
/**
 * == 0  -   0
 *  > 0  -   1
 *  < 0  -  -1
 * NaN/string/ - NaN
 */ 
console.log(Math.sign(-10));

console.log(Math.trunc(3.78));
console.log(Math.floor(3.78));
console.log(Math.trunc(-3.78));
console.log(Math.floor(-3.78));

// ...

// Strings.
console.log('------------Strings----------');
// can use combined with regular expression
let test = "helloworld";
console.log(test.startsWith("hello"));
console.log(test.startsWith("HELLO"));
console.log(test.startsWith("helllo"));
console.log(test.endsWith("world"));
console.log(test.includes("llow"));

// Number
console.log('------------Number----------');
let num1 = NaN;
let num2 = 'NaN';
console.log(Number.isNaN(num1));
console.log(Number.isNaN(num2));
let num3 = 100000000000;
console.log(Number.isFinite(num3));
let num4 = Infinity;
console.log(Number.isFinite(num4));
let num5 = 10;
console.log(Number.isInteger(num5));
