//forEach 
//loop on arrays, smarts enough to iterate each val and perform increment and also does't return anything  
//forEach wants callback(no-name func in simple words) to perform what needs to be done 

const coding = ["js", "ruby", "java", "python", "cpp"]

// callback with normal func 
// coding.forEach( function (val){
//     console.log(val);
// } )

// callback with arrow func 
// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => { 
    // console.log(item.languageName);
})

//checking forcefully return case
let checkRet = []
checkRet = myCoding.forEach( (item) => { 
    console.log(item.languageName);
    return item.languageName
})
console.log(checkRet) //got undefined , so we cant return anything from forEach