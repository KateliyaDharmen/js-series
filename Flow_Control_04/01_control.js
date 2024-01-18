//if else

let age = 20
if(age >=18){
    console.log("adult");
}else{
    console.log("teen");
}

if(2 != 3){
    console.log("executed");
}
// >,<,<=,>=,!=, ==, === ,!==

//if.....else if//
const temp = "50"
if(temp <= 22){
    console.log("tempreture is cold");
}else if(temp == 25)
{
    console.log("tempreture is moderated");
}
else if(temp > 30){
    console.log("tempreture is hot");
}
else{
    console.log("temp");
}


// && , ||
const score = 2
if(score < 50 && score >25){
    console.log("average");
}else if(score > 80 || score > 75)
{
    console.log("Good");
}else {
    console.log("vgood");
}

if(true) console.log("hello"),console.log("world"); // one line if statement