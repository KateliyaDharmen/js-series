const userEmail = []

if(userEmail){
    console.log("got user email");
}else{
    console.log("don't have user email");
}

//Truthy values: [], {}, "0", "false", " " (space), function(){} (empty function)

//Falsy value: false, 0, -0, BigInt 0n, "", null, undefined, NaN


//how to check if array and object is emty
if(userEmail.length === 0)
{
    console.log("empty array");
}
const obj = {}
if(Object.keys(obj).length === 0)
{
    console.log("empty object");
}

// Nullish Coalescing Operator (??): null undefined
// if we have two value and one of them is null or undefined, then use (??) so it can denied null and undefined value

let val;
val = 4 ?? 2
val = 2 ?? null

console.log(val);

//Ternary Operator

//condition ? true : false

const price = 30

price <=20 ? console.log("less than 20") : console.log("more than 20");