// this refers to the current object context and it is used to access the properties and methods of the current object
const user = {
    name : "Sanju",
    age : 20,
    welcomeMessage : function(){
        console.log(`${this.name}, welcome to website`);
       // console.log(this);   { name: 'Sanju', age: 20, welcomeMessage: [Function: welcomeMessage] }
    }
}

// user.welcomeMessage();
// user.name = "hitesh"
// user.welcomeMessage();
//console.log(this); // {} in node js and window in browser

// function chai(){ -----> normal function
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () { -------> function expression
//     let username = "hitesh"
//     console.log(this.username);
// }

// const chai =  () => { ------> arrow function
//     let username = "hitesh"
//     console.log(this);
// }

// const addTwo = (num1, num2) => { -----> explicit return
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2  ---> implicit return

// const addTwo = (num1, num2) => ( num1 + num2 ) ---> implicit return

// const addTwo = (num1, num2) => ({username: "hitesh"}) ---> implicit return object

console.log(addTwo(3, 4))
