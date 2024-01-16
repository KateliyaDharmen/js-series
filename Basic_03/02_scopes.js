//Globle scope

// {
//     block scope
// }
// var c = 300;

let a = 100;

if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    // console.log("inner:", a);
}

// console.log(a); it gives error
// console.log(b); it gives error
// console.log(a); 

function one() {
    const username = "dharmen"
    
    function two() {
        const website = "yt"
        console.log(username);
    }
    
    // console.log(website);
    
    two()
}
// one()

if(true){
    const username = "dk"

    if(username === "dk"){
        const website = "yt"
        // console.log(username + website);
    }

    // console.log(website);
}

// console.log(username);
console.log(addone(1));

function addone(num) {
    return num + 1
}

console.log(addtwo(1)) //it gives error because it call before initialization

const addtwo = function(num){
    return num + 2
}

