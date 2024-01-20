//for 

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
// }

for (let i = 1; i <= 10; i++){
    // console.log(`outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop value: ${j}`);
        // console.log(`${i} * ${j} = ${i*j}`);
    }
}

let myArray = ["one", "two", "three"]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}

// Break and Continue

for (let i = 1; i <= 20; i++) {
    const element = i;
    if(i == 10){
        console.log("value 10 detected");
        break;
    }
    console.log(element);
}

for (let i = 1; i <= 20; i++) {
    const element = i;
    if(i == 10){
        console.log("value 10 detected");
        continue;
    }
    console.log(element);
}