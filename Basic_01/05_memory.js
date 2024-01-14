//Stack(Primitive)
//Heap(Non Primitive)

let myName = "Dharmen"

let anotherName = myName
anotherName = "dk"

console.log(myName);//Dharmen
console.log(anotherName);//dk

//In stack memory it gives copy of their value like above example
//all Primitive datatypes are store in stack memory

let myWorld = {
    email: "skfjh@gmail.com",
    upi: "fkdf@dbl"
}

let anotherWorld = myWorld;

anotherWorld.email = "sfd@jfl"

console.log(myWorld.email);//sfd@jfl
console.log(anotherWorld.email);//sfd@jfl

//In Heap memory it gives reference , not copy of their value like above example
//all Non Primitive datatypes are store in Heap memory