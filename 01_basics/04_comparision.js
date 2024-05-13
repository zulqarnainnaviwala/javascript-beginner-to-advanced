// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
//The reason is that an equality check == and comparisons > < >= <= work differently 
//Comparisons convert null to a number by treating it as 0 

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
//undefined will always give false


//strict check (check with data type)
console.log("2" === 2);