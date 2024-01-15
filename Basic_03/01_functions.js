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

function loginMsg (username = "dk"){ //default parameter value
    if(username === undefined)
    {
        return `please enter the username`
    }
    else{
        return `${username} logged in!!`
    }
}

// const result = loginMsg();
// console.log(result);

// function calculateCartPrice (...n1) {
//     return n1
// }
function calculateCartPrice (val1,val2,...n1) {
    return n1
}

// console.log(calculateCartPrice(100,200,300,400,500)); //val1=100,val2=200, rest of n1 array

const user = { 
    username: "dk",
    price: 999
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user)
// handleObject({                  //it will be okay to pass direct object
//     username: "dk",
//     price: 999
// })

const newArr = [23,34,5,32,23]

function returnArr(getArray) {
    return getArray
}

console.log(returnArr(newArr))