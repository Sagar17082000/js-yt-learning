
const newArray = [1,2,3,5,6,7,8,9,0]

const heros = ["Like" , "Mike"]

const mArray = new Array(1,2,3,4,5)

// mArray.push(10)
// console.log(mArray);

// mArray.push(7)
// console.log(mArray);

// mArray.pop()
// console.log(mArray);

// mArray.unshift(100)
// mArray.shift()

// console.log(mArray.includes(9));
// console.log(mArray.indexOf(9));
// console.log(mArray.indexOf(3));

const newArr = mArray.join()

// console.log(typeof mArray);
// console.log(typeof newArr);

// Slice , Splice

console.log("A ",mArray)

// console.log();
const mny1 = mArray.slice(1,3) // slice does not modify original array
console.log(mny1);
console.log("B ",mArray)

const mny2 = mArray.splice(1,3) // splice modifies original array
console.log(mny2);
console.log("C ",mArray)





