let age = "65"

let ageNumber = Number(age)

console.log(typeof age)
console.log(typeof(ageNumber));

console.log(ageNumber);

//"65" -> 65
//"65abc" -> NaN (Not a Number)
//"" -> 0
//undefined -> undefined
//null -> 0
//boolean -> true:1, false:0

let someNumber = 3

let stringSomeNumber = String(someNumber)

console.log(stringSomeNumber);
console.log(typeof stringSomeNumber);

let isLoggdIn = "dk"
let booleanIsLoggedIn = Boolean(isLoggdIn)

console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);

//"dk" -> true
//"" -> false
//null -> false
//undefined -> false