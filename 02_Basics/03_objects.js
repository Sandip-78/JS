// singleton

//object literal
const mySym = Symbol("key1");
const person = {
    name : "Sanju",
    age : 20,
    [mySym] : "myValue",
    isLoggedIn : true
}

console.log(person.name);
console.log(person["name"]); // here the name ,age and isLoggedIn datatype is string
console.log(person[mySym]); // here the mySym is a symbol datatype
person.age = 25;
// Object.freeze(person); // it will freeze the object and we cannot change the value of object after freezing it
person.age = 20;
console.log(person.age);

person.greeting = function(){
    console.log(`Hello ,${this.name}`);
}
console.log(person.greeting());






