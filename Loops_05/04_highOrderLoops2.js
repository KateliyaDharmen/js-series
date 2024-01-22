// const coding = ["js", "c", "cpp", "php", "java"]

// const result = coding.forEach((val) => {
//     // console.log(val);
//     return val
// })

// console.log(result); //it gives undefined because forEach loop does not return any values

const myNum = [1,2,3,4,5,6,7,8,9,10]

// const result = myNum.filter((num) => { 
//     return num > 5
// })
// console.log(result);

const newNums = []

// myNum.forEach((num) => {
//     if(num > 5){
//         newNums.push(num)
//     }
// })

// console.log(newNums);

const books = [
    {title: "Book1", genre: "friction", publish: 1987, edition: 2000},
    {title: "Book2", genre: "non-friction", publish: 1999, edition: 2004},
    {title: "Book3", genre: "science", publish: 2003, edition: 2007},
    {title: "Book4", genre: "history", publish: 1978, edition: 1995},
    {title: "Book5", genre: "friction", publish: 2015, edition: 2020},
    {title: "Book6", genre: "non-friction", publish: 2000, edition: 2008},
    {title: "Book7", genre: "science", publish: 2008, edition: 2015},
]

const result = books.filter((bk) => {
   return bk.genre === "science" && bk.publish > 2005
})

// const result = books.filter( (bk) => bk.publish >= 2000)

// console.log(result);

// ************************.map()****************

// const Nnums = myNum.map( (num) => {return num + 10})
// console.log(Nnums);

//**********chaining**************

//when we use multiple method at a time its called chaining

const newResult = myNum.map( (num) => num * 2).map( (num) => num + 5).filter( (num) => num >= 10)

// console.log(newResult);

// ********************.reduce() ***************************

const n1 = [1,2,3]

const total = n1.reduce( (accumulater, currentvalue) => {
    console.log(`acc: ${accumulater} and currval: ${currentvalue}`);
    return accumulater + currentvalue
},0)

// console.log(total);

const cart = [
    {
        item: "tv",
        price: 20000
    },
    {
        item: "fridge",
        price: 29000
    },
    {
        item: "mobile",
        price: 10000
    },
    {
        item: "ac",
        price: 50000
    }
]

const totalCartPrice = cart.reduce( (acc, item) => acc + item.price,0)
console.log(totalCartPrice);