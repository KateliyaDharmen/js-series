//Promises in JS 
//Promise is an Object that represents the eventual complition of an asynchronous opration

const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task
    //DB calls, network calls, cryptography
    setTimeout(() => {
        console.log('Async Task is comoplete');
        resolve();
    }, 1000);
});
promiseOne.then(function (data) {
    console.log("Promise Consumed");
})

//another syntax of promise
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("async Task 2");
        resolve();
    }, 1000);
}).then(() => {
    console.log("async2 resolved");
})

//third promise

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: "dharmen", password: "123@" })
    }, 1000);
})

promiseThree.then((data) => {
    console.log(data);
})

//fourth promise

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ username: "dharmen", password: "123@" })
        } else {
            reject('ERROR: Somthing went wrong')
        }
    }, 1000)
})

promiseFour.then(function (user) {
    console.log(user);
    return user.username;
}).then(function (username) {
    console.log(username);
}).catch(function (err) {
    console.log(err);
}).finally(function () {
    console.log("the promise is ethier resolved or rejected");
})

//fifth promise (using async,await)

//Promises can also handle by 'async,await' but we have to add try,catch block

//what actually async,await do: it is like '.then,.catch'. wait for the work which we will do, if it is done then give the result else give the error 

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(function () {
        let error = true; //also try with false value
        if (!error) {
            resolve({ username: "Javascript", password: "123@" })
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive() {
    //if we do not consider the error then output will be fine , but consider the error then output is not generated it shows the error that put the .catch block
    // const response = await promiseFive;
    // console.log(response); 
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive();

//using fetch()
// async function getMyData() {
//     try {
//         const response = await fetch('https://api.github.com/users/KateliyaDharmen');
//         // console.log(response); //typeof: object
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("ERROR");
//     }
// }
// getMyData();

//above function write in .then .catch also because fetch() function return promise

fetch('https://api.github.com/users/KateliyaDharmen')
.then( (response) => {
    const data = response.json();
    return data;
})
.then( (myData) => {
    console.log(myData);
})
.catch( (error) => {
    console.log(error);
})