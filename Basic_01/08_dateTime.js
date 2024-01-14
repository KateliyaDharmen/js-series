//Dates

const myDate = new Date();
console.log(myDate);
console.log(typeof myDate);

console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toDateString());
console.log(myDate.toUTCString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toTimeString());

// let myCreatedDate = new Date(2023,0,12);
// let myCreatedDate = new Date(2023,0,12,4,20);
// let myCreatedDate = new Date("2023-02-15"); //yy-mm-dd
// let myCreatedDate = new Date("12-25-2013"); //mm-dd-yy
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(myDate.getMinutes());
console.log(myDate.getHours());
console.log(myDate.getDay());
console.log(myDate.getFullYear());




