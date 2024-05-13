// array
const myArray = [0, 1, 2, 3, 4, 5]
const myHeors = ["iron man", "batman"]
const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArray.push(6)
// myArray.push(7)
// console.log(myArray);
// myArray.pop()
// console.log(myArray);

// myArray.unshift(9)
// myArray.shift()
// console.log(myArray);

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(3));
// console.log(myArray);

// const newArr = myArray.join()
// console.log(myArray);
// console.log( newArr);
// console.log(typeof newArr)


// slice, splice

console.log("A ", myArray);

const myn1 = myArray.slice(1, 3)

console.log(myn1);
console.log("B ", myArray);


const myn2 = myArray.splice(1, 3)  //mutates original array
console.log("C ", myArray);
console.log(myn2);

// list of common array built-in methods:
// map()
// filter()
// reduce()
// forEach()
// find()
// findIndex()
// some()
// every()
// slice()
// splice()
// concat()
// indexOf()
// lastIndexOf()
// sort()
// reverse()
// split()
// join()
// includes()
// push()
// pop()
// shift()
// unshift()
// isArray()