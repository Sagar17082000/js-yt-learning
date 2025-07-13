//Primitive

// 7 Types : Number , String , Boolean , null , undefined , Symbol , BigInt

let score = 100
let stringScore = "100"
let scoreValue = 100.45
let isLoggedIn = true
let outerTemp = null
let myScore;

let gameScore = Symbol('234')
let anotherGameScore = Symbol('234')

// console.log(gameScore === anotherGameScore);

let bigNumber = 12345678903456n 

//Reference ( Non-primitive)

// Array , Objects , functions

const myArray = ["Sagar" , "Sagar1" , "Sagar2"]

const Obj = {
    name : "Sagar",
    age : 24
}

const myfunction = function() {
    console.log("Hello world");
    
}

// console.log(typeof myArray);


// +++++++++++++++++++++++++++++++++++++++++++++++

let userName = "Sagar"

let anotherUserName = userName;

anotherUserName = "Mike"

console.log(userName);
console.log(anotherUserName);

const userDetails = {
    name : "Latham",
    age : 35
}

const anotherUserDetails = userDetails;

anotherUserDetails.age = 50;

console.log(userDetails.age);
console.log(anotherUserDetails.age);
