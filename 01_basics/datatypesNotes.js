//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
// let userEmail = undefined;
let userEmail;  //undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["Spider-Man", "Batman", "Iron-Man"];
let myObj = {
    name: "zulqarnain",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function or "function object"
//        Object  =>  object

// Docs : https://262.ecma-international.org/5.1/#sec-11.4.3


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) -> give a copy of original variable , Heap (Non-Primitive) -> give a reference to original variable

//Stack
let mySiteName = "zulqarnian.com"
let anotherSiteame = mySiteName
anotherSiteame = "zulqarnainnaviwala.com"
console.log(mySiteName)
console.log(anotherSiteame)

//Heap
let userOne  =  {
    email: "zulqarnain@google.com",
    age: 25
}
let userTwo = userOne
userTwo.email = "zulqarnainnaviwala@google.com"
console.log(userOne.email)
console.log(userTwo.email)

