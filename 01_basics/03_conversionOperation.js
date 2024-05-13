let score = 33
// let score = "33"
// let score = "33abc"
// let score = "zulqarnain"
// let score = null
// let score = undefined
// let score = true

//let {score} =  req.body // no guarantee if score is coming as integer

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = 1
// let isLoggedIn = ""
// let isLoggedIn = "zulqarnain"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "zulqarnain" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " world"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2); //12
// console.log(1 + "2"); //12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); //32
// for deep understanding gideline here : https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

// console.log( (3 + 4) * 5 % 3); //use BODMAS for math ops to avoid problems

// console.log(true);
// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2   //bad readability 

let gameCounter = 100
gameCounter++;
++gameCounter;
--gameCounter;
gameCounter--;
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Decrement

console.log(gameCounter);
