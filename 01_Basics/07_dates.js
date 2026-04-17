let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(typeof myDate); // object

let myCreatedDate = new Date("2023-01-04"); 
let myCreatedDate2 = new Date("04-01-2023");

let myTimeStamp = Date.now();
console.log(myTimeStamp); // gives time in milliseconds since Jan 1, 1970
console.log(myCreatedDate.getTime()); // gives time in milliseconds since Jan 1, 1970 for the given date


console.log(Math.floor(Date.now()/1000));
