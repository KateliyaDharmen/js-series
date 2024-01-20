//for of 
//["", "", ""]
//[{}, {}, {}]

const arr = [1,2,3,4,5]
for (const val of arr) {
    // console.log(val);
}

const string = "Kateliya dharmen"
for (const i of string) {
    // console.log(i);
}

// Map

const map = new Map()
map.set("one", 1)
map.set("two", 2)
map.set("three", 3)

// console.log(map);

for (const [keys, value] of map) {
    // console.log(keys, ":", value);
}

const myObj = {
    name: "dk",
    age: 20,
    email: "abc@gmail.com"
}

// for (const [keys,value] of myObj) {   // => for of loop is working on iterable object
//     // console.log(keys, value);
// }

//for in loop
for (const key in myObj) {
    console.log(key, ':', myObj[key]);
}