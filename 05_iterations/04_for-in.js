//for in loop
const languages = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in languages) {
    //console.log(`${key} shortcut is for ${languages[key]}`);
}

const programming = ["javascript", "ruby", "python", "java", "C++"]


for (const key in programming) {
    // console.log(key); //array has also keys by default start from zero 
    //console.log(programming[key]);
}

//can we loop over map as well?
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")
// for (const key in map) {
//     console.log(key);
// }
//Map object  is not iteratable in javascript