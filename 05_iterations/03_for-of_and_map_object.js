// for of
// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps in Javascript 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
const map = new Map()
map.set('PK', "Pakistan")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
map.set('PK', "Pakistan")  // will be ignore , set contains unique values

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const key of myObject) {
//     console.log(key); //will print in the form of array
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value); // achieved by array destructuring
// }