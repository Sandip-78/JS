const marvel = ["thor","spiderman","ironman"];
const dc = ["superman","batman","falsh"];

// marvel.push(dc)
console.log(marvel);

// const heros = marvel.concat(dc); // return new array by merging two array
// console.log(heros);

const all_heros = [...marvel,...dc]; // spread operator
console.log(all_heros);

console.log(Array.isArray("Hitesh")); // false
console.log(Array.from("hitesh")); // make array with [ 'h', 'i', 't', 'e', 's', 'h' ]

console.log(Array.from({name : "sanju"})); // gives empty array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3)); //[ 100, 200, 300 ]

