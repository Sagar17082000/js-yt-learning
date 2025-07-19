const myName = function(){
    console.log("My name is Sagar");
    
}

// myName()

const addTwoNumbers = function(number1 , number2){
    return number1+number2
     
}

const result = addTwoNumbers(3,8);
// console.log(result);

// console.log(addTwoNumbers(3,5));

const userLoggedInMessage = function(username = "Super user"){ // username is parameter
    return `${username} logged in successfully`
}

// console.log(userLoggedInMessage("Sagar")) // "Sagar" is argument


function addToShoppingCart(val1,val2,...num1){
    return num1
}

// console.log(addToShoppingCart(200,400,500,800));

const user = {
    username : "Sagar",
    age : 24
}

function userDetails(myObject){
    return `Username is ${myObject.username} and is ${myObject.age} years old`
}

// console.log(userDetails({
//     username : "Sagar",
//     age : 24
// }));

const myArray = [100,200,300,400,500]

function getSecondValue(anyArray){
    return anyArray[1]
}

// console.log(getSecondValue(myArray))
console.log(getSecondValue([489,193,3482,4940]));


