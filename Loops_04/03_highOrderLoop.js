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

// for (const [keys, value] of map) {
//     // console.log(keys, ":", value);
// }

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
    // console.log(key, ':', myObj[key]);
}

const fruits = ["apple", "banana", "guava"]

for (const key in fruits) {
    // console.log(key); //it gives index key.....for get values use fruits[key]
}

// for (const key in map) {
//     console.log(key);  // use forin loop on map it cannot give output
// }


//**************************for each*********************

const coding = ["js", "c", "cpp", "php", "java"]
// coding.forEach( (val) => {
//     console.log(val);
// })

// function printMe(val) {
//     console.log(val);
// }

// coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    // console.log(item, index, arr);
})

const animal = [
    {
        user: "lion",
        id: "lion@123"
    },
    {
        user: "tiger",
        id: "tiger@123"
    },
    {
        user: "chita",
        id: "chita@123"
    }
]

animal.forEach((val) => {
    console.log(val);
})

animal.forEach((val) => {
    console.log(val.user);
})