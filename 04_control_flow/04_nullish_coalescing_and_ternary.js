// Nullish Coalescing Operator (??): null undefined
//to handle errors or fallback in code , specially designed for null and undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

// Ternary  Operator
// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")