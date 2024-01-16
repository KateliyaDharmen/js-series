//Immediately Invoked Function Expression (IIFE)

// use of IIFE because the problem of global scope polution 
// (global cope k polution ko hatane k liye immediate function ka use hota he)

(function one() { 
    console.log("db connected");
})();

//IIFE: (function defination)(function execution)

( (name) => {
    console.log(`db connected two ${name}`);
})('dk')