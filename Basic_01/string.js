const name  = "Dharmen";
let age = 18;

// console.log(name + age + " value");

// console.log(`Hello, My Name is ${name} and i'm ${age} year old`)
//its better way to write string and it is easy to read and understand

//another way to declare string 
const myName = new String('Dharmen');
// console.log(myName);

//****************Methods****************

const myString = "Dharmendk";
const url = "https://dharmen.com%20dharmenkateliya"

//charat()
console.log(myString.charAt(2));

//indexof()
console.log(myString.indexOf('a'));

//toUpperCase() and toLowerCase()
console.log(myString.toUpperCase() + myString.toLowerCase());

//length()
console.log(myString.length);

//replace()
console.log(url.replace('%20', '-'));

//substring()
console.log(myString.substring(0,4));

//split()
let value = "dharmen-dk-kateliya"
console.log(value.split('-'));

//trim()
let anotherValue = "    dk    "
console.log(anotherValue.trim());

//String has many methods, properties. read the documentation on google
