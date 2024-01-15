//Functions

// console.log("d");
// console.log("h");
// console.log("a");
// console.log("r");
// console.log("m");
// console.log("e");
// console.log("n");

function myName() {
    console.log("d");
    console.log("h");
    console.log("a");
    console.log("r");
    console.log("m");
    console.log("e");
    console.log("n");
}
// myName();

// function addTwoNumbers(n1, n2){
//     console.log(n1 + n2);
// }

// function addTwoNumbers(n1, n2){
//     let result = n1 + n2
//     return result
// }

function addTwoNumbers(n1, n2){
    return n1 + n2
}

// const result = addTwoNumbers(7,4);
// console.log("Result:",result);

function loginMsg (username){
    if(username === undefined)
    {
        return `please enter the username`
    }
    else{
        return `${username} logged in!!`
    }
}

const result = loginMsg();
console.log(result);