const score = 100
console.log(score);

const balance = new Number(400);
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);

console.log(balance.toFixed(2));//output: 400.00

const anyNumber = 112.383;
console.log(anyNumber.toPrecision(3));

const run = 1000000
// console.log(run.toLocaleString());

//*********************Maths**********************

console.log(Math.abs(-5));
console.log(Math.round(7.858));
console.log(Math.ceil(7.858));
console.log(Math.floor(7.858));
console.log(Math.max(4,7,4,6,8,2,5,90));
console.log(Math.min(4,7,4,6,8,2,5,90));

console.log(Math.random());//it gives random number between 0 to 1
console.log(Math.floor((Math.random()*10) + 1)); //it gives random number between 1 to 9

const min = 10
const max = 20
// Math.random() * (max - min + 1)
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
