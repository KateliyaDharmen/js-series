//Basic Comapriosions

console.log(2 < 1);
console.log(2 <= 1);
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 == 1);
console.log(2 != 1);

//Following type of comparisions give confusion, output is not pedectable 
// console.log("2" < 1);

// console.log(null > 0);      -->the reason is that an equality check == and comparision <> <= >= 
// console.log(null == 0);        work differently. Comparision convert null value to a number, trating as 0
// console.log(null >= 0);        that's why (3)null >= 0 is true and (1)null > 0 is false.*/

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

// === strict equality: it check it's value and also check it's datatypes.

console.log("2" === 1);