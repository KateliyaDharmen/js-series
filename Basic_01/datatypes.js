"use strict"; // treat all js code as newer version 
//alert(3+3) we are using node.js, not browser

//code readabilty should be high

let name = "Dharmen"
let age = 18
let isLoggdIn = false

//datatypes:

//number
//bigint
//string -> ""
//boolean -> true/false
//null -> standalone value
//undefined 
//symbol -> unique
//object

console.log(typeof name);
console.log(typeof age);

console.log(typeof undefined); // undefined
console.log(typeof null); // object

//datatypes summery

//Primitive
//7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

let nam = "dk"
let value = 547;
let isOk = true
let userCode = null
let userEmail;
let userId = Symbol('123');
let userPassword = Symbol('123')

console.log(userId == userPassword); false

let score = 564646464646464;
//Reference(Non Primitive)
//Array, Functions, Objects 

let fruits = ["apple", "banana", "guava"];

let myObj = {
    name: "dharmen",
    age: 18,
    city: "Mumbai"
}

let myFunc = function myFunction() {
    console.log("Hello js:)");
}