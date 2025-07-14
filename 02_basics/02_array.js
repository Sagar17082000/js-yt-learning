const marvel_heros = [ "Thor" , "Ironman" , "spiderman"]
const dc_heros = [ "Superman" , "flash" , "batman"]

// marvel_heros.push(dc_heros) // push modidies exisiting array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const all_heros = marvel_heros.concat(dc_heros) // concat returns new array

// console.log(all_heros);

const allNewHeros = [...marvel_heros, ...all_heros] // Spread operator

// console.log(allNewHeros);

const newArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_newArr = newArr.flat(Infinity)

// console.log(real_newArr);


console.log(Array.isArray("Sagar"))
console.log(Array.from({name:"Sagar",number:"1708"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));



