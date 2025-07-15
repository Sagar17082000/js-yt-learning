// const user = new Object();

const user = {}
// console.log(user);

const regularUser = {
    emailId : "sagar@google.com",
    fullname : {
        userFullname : {
            firstname : "Sagar",
            lastname : "Ramtekkar"
        }
    }
}

// console.log(regularUser.fullname.userFullname.firstname);

const obj1 = { 1 : "A" , 2 : "B"}
const obj2 = { 3 : "C" , 4 : "D"}

// const obj3 = {...obj1,...obj2}
const obj3 = Object.assign(obj1,obj2)

console.log(obj3);
console.log(obj1);

user.name = "Sagar";
user.emailId = "Same@google.com"
user.isLoggedIn = false

// console.log(user);

// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))

console.log(user.hasOwnProperty('emailId'));






