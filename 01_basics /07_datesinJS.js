const myDate = new Date();

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);

// const newDate = new Date(2025 , 1 , 20 , 12 , 30);
const newDate = new Date("08-17-2000");

// console.log(newDate.toDateString());
// console.log(newDate.toLocaleString());

const myTime = Date.now();
// console.log(Math.floor(myTime/1000));
// console.log(newDate.getTime());

// console.log(myDate.getDay())
// console.log(myDate.getMonth())

myDate.toLocaleString("default",
    {
        weekday : "long"
    }
)

console.log(myDate.toLocaleString());





