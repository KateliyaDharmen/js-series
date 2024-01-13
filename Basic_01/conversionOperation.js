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

//************************Operations*****************************

//Basic Operations like +,-,*,/,**(power),%

console.log("3" + 3);//33
console.log(3 + "3");//33
console.log("3" + "3");//33
console.log("3" + 3 + 2);//332
console.log(3 + 3 + "2");//62
console.log(3 + "3" + 2);//332

let value = true
console.log(+true); //it is okay to learn but in production it is not applicable , code is readable

let counter = 100;
console.log(counter++); // prefic: first print the number and then increment it
console.log(counter);
console.log(++counter);//postfix: first increment the number and then print it