// Immediate Invoked Function Expression
// IIFE is used to create a new scope and avoid polluting the global scope. It is a function that is executed immediately after it is defined. It is also known as self-invoking function or self-executing function.

(function chai(){
    // named IIFE
    console.log("DB connected");
})();

((name)=>{
    console.log(`DB connected ${name}`);
})("sanju")