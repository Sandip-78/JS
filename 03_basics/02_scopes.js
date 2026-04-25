//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

// hosting happens in js , it means we can call the function before declaring it but it will work only for function declaration not for function expression
console.log(addone(5))

function addone(num){
    return num + 1
}


// temporal dead zone happend when we try to access the variable before declaring it and it will give us a reference error
addTwo(5)
const addTwo = function(num){
    return num + 2
}