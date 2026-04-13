// 2 typed of datatypes this all are call by value
// 1. Primitive datatypes
// number => 2 to power 52
// bigint => 2 to power 1024
// string => " " or ' ' or ` `
// boolean => true or false
// null => standalone value 
// undefined => variable decalred but not give the value
// symbol => for making component unique

// const id = Symbol("123");
// const anotherId = Symbol("123");
// console.log(id == anotherId); // false
// const bigNumber = 12345678999n;

console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof bigNumber); // undefined

// 2. Non-primitive or reference datatypes and this are call by reference
// object
// array
// function

// javascript is dynamically typed language which means we can change the datatype of the variable at runtime
