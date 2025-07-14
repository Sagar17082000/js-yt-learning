// singleton

const sym = Symbol("Key1");

const obj = {
    name : "Sagar",
    "full name" :"Sagar Ramtekkar", 
    [sym] : "Key1",
    age : 25,
    location : "Nagpur",
    email : "Sagar@google.com",
    isLogggedIn : true,
    loginDays : ["Monday","Friday"]
}

// console.log(obj.name);
// console.log(obj["name"]);
// console.log(obj["full name"]);
// console.log(obj[sym]);
// console.log(typeof obj[sym]);

obj["email"] = "Sagar@yahoo.com";

// console.log(obj["email"]);
// Object.freeze(obj)
obj["email"] = "Sagar@gtc.com";


// console.log(obj);

obj.greeting = function(){
    console.log("Hello JS User");
    
}

obj.greeting2 = function(){
    console.log(`Hello JS User ${this.name}`);
    
}

console.log(obj.greeting());
console.log(obj.greeting2());




