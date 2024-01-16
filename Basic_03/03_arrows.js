const user = {
    name: "dk",
    id: "abc123",
    welcomeMsg: function () {
        console.log(`hello ${this.name}`);
        console.log(this);
    }
}

user.welcomeMsg()
user.name = "dharmen"
user.welcomeMsg()

console.log(this);

function hello(){
    console.log(this);
}

hello();

function hello(){
    let name = "dk"
    console.log(this.name); //In function this keyword is not working
}
hello()

//Arrow function: () => {}

const hello = () => {
    let name = "dk"
    console.log(this.name); //In function this keyword is not working
}
// hello()

// const addNum = (num1, num2) => {
//     return num1 + num2
// }

// const addNum = (num1, num2) => num1 + num2
// const addNum = (num1, num2) => (num1 + num2)

const addNum = (num1, num2) => ({username: "dk"})

console.log(addNum(2,3));