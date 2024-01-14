//Array

const myArray = [0,1,2,3,4,5];
const fruits = ["apple", "banana", "guava"];

console.log(myArray[2]); 
console.log(fruits);

//Array Methods
myArray.push(6);
myArray.push(7);
myArray.pop(7);

myArray.unshift(-1) //it insert the element at the starting of the array 
console.log(myArray);

myArray.shift() //it delete the element at the starting of the array 
console.log(myArray);

console.log(myArray.includes(2));
console.log(myArray.indexOf(23));

const newArr = myArray.join();
console.log(myArray);
console.log(newArr); //typeof newArr: string, after join operation

//slice and splice

console.log("A", myArray);

const myA1 = myArray.slice(1,3);
console.log(myA1);

console.log("B", myArray);

const myA2 = myArray.splice(1,3)
console.log(myA2);

console.log("C", myArray);

//slice: In this operation, it slice the array by start and end index,
// it not include end index like myA1 array. it not change original array after operation.

//splice: In this operation, it slice the array by start and end index,
// it include end index like myA2 array. it change original array after operation.