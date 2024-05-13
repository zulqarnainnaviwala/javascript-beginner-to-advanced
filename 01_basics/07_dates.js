// Dates Object in JS
let myDate = new Date()
console.log(myDate.toString()); //Mon May 13 2024 20:05:15 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); //Mon May 13 2024
// console.log(myDate.toISOString()); //2024-05-13T20:03:32.237Z
// console.log(myDate.toJSON()); //2024-05-13T20:03:32.237Z
// console.log(myDate.toLocaleDateString()); //5/13/2024
// console.log(myDate.toLocaleString()); // 5/13/2024, 8:03:32 PM
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate.toDateString()); //Mon Jan 23 2023

// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
})


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
// https://www.javatpoint.com/javascript-date