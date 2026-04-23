function sayMyName (){ // function definition
    console.log("S");
    console.log("A");
    console.log("N");
    console.log("J");
    console.log("U");
}
// sayMyName -> it is function reference
// sayMyName() - function call

function addition (a,b){ // parameters
    console.log(a+b);;
}
addition(2,3) // arguments

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// loginUserMessage("hitesh")
// console.log(loginUserMessage("hitesh"))

// rest operator - for sending multiple arguments in function

function calculateCartPrice(val1, val2, ...num){
    return num
}
console.log(calculateCartPrice(100,200,300,400,500)); // [ 300, 400, 500 ]


const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

