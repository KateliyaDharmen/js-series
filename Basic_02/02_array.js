const team1 = ["rcb", "mi", "kkr", "gt"]
const team2 = ["srh", "psj", "lk"]

// team1.push(team2);
// console.log(team1);
// team1.concat(team2)
// console.log(team1);.

const newTeam = [...team1, ...team2]
// console.log(newTeam);

const anotherArr = [1,2,3,[4,5],6,[7,8,9,[10,11]],12]
const newAnotherArr = anotherArr.flat(Infinity);
// console.log(newAnotherArr);


console.log(Array.isArray("dharmen"))
console.log(Array.from("dharmen"))
console.log(Array.from({name: "dharmen"})) //note it

const a1 = 100,a2 = 200, a3 = 300;
console.log(Array.of(a1, a2, a3));


