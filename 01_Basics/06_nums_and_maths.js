// const score = 400
// console.log(score); // 400

// const balance = new Number(100)
// console.log(balance); // Number : 100 -> object

// console.log(balance.toString().length); // convert into string and give length
// console.log(balance.toFixed(3)); // 100.000

// const otherNumber = 123.893;
// console.log(otherNumber.toPrecision(4)); // 123.9

// const hundred = 1000000;
// console.log(hundred.toLocaleString());


// ++++++++++++ Math +++++++++++++
console.log(Math); // Object [Math] {}
console.log(Math.abs(-4)); // 4
console.log(Math.round(4.6)); // 5
console.log(Math.round(4.2)); // 4
console.log(Math.ceil(4.1)); //5
console.log(Math.floor(4.9)); // 4
console.log(Math.min(4, 5, 6, 7)); // 4
console.log(Math.max(4, 5, 6, 7));// 7
console.log(Math.random()); // gives random number

const min = 10;
const max = 20;
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum); // gives random number between 10 and 20






