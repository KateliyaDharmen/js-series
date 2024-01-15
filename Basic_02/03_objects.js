//singletone
//Object.create

//object literals
const mySymbol = Symbol("key1");
const user1 = {
    name: "Dharmen",
    "full name": "dk",
    [mySymbol]: "myKey1",
    age: 20,
    email: "dharmen@google.com",
    isLoggedIn: true,
    location: "ahmedabad",
    lasLoginDays: ["monday", "sunday"],
}

// console.log(user1.name);
// console.log(user1["email"]); 
// console.log(user1["full name"]);
//this are two types to access object

console.log(user1[mySymbol]);

user1.location = "mumbai"
// Object.freeze(user1);
user1.name = "dk";
console.log(user1);

user1.greeting = function () {
    console.log("Hello js!!");
}
console.log(user1.greeting());

user1.greeting2 = function () {
    console.log(`Hello My Name is ${user1.name}`); // instead of {user1.name}, u can also use {this.name}
}
console.log(user1.greeting2());