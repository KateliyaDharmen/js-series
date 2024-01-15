const appUser = new Object();

appUser.id = "xyz123"
appUser.email = "hello@gmail.com"
appUser.isLoggedIn = false

// console.log(appUser);

const newAppUser = {
    email: "new@gmail.com",
    fullName: {
        username:{
            firstname: "Dharmen",
            lastname: "Kateliya"
        }
    }
}

// console.log(newAppUser.fullName.username.firstname);

//merge two objects
const obj1 = {1: "one", 2: "two", 3: "three"}
const obj2 = {4: "four", 5: "five", 6: "six"}

// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 1,
        email: "abc@gmail.com"
    }
]

// console.log(users[1].email);

// console.log(appUser);
// console.log(Object.keys(appUser));
// console.log(Object.values(appUser));
// console.log(Object.entries(appUser));
// console.log(appUser.hasOwnProperty("email"));

//object de-structure

const bike = {
    name: "kawasaki",
    price: "1000000",
    ownername: "dk"
}

// const {ownername} = bike // {object}
// console.log(ownername);

const {ownername: own} = bike // {object: shortname, if u want to use}
console.log(own);

// json
// {
//     "name": "dk",
//     "id": "abc383"
//     "email": "abc@gmail.com"
// }

