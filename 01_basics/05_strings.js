const name = "zulqarnain "
const repoCount = 34

//Concatenation : (old method method joins two or more strings/values)
// console.log(name + repoCount + " Value");

//String interpolation / Template literals / Template strings / String Templates
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const myName = new String('zulqarnain')
// console.log(myName[0]);
// console.log(myName.__proto__);


// console.log(myName.length);
// console.log(myName.toUpperCase());
console.log(myName.charAt(2));
console.log(myName.indexOf('t'));

const newString = myName.substring(0, 4)
console.log(newString);

// const myName = new String('zulqarnain-naviwala')
// const anotherString = myName.slice(0, 4)
const anotherString = myName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   zulqarnain    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://zulqaranain.com/my%20portfolio"

console.log(url.replace('%20', '-'))

console.log(url.includes('zulqaranain')) //true
console.log(url.includes('naviwala')) //false

// const myName = new String('zulqarnain-naviwala-com')
console.log(myName.split('-'));

// other string methods: https://www.programiz.com/javascript/library/string
// mdn :https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt