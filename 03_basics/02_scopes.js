//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "zulqarnain"
    function two(){
        const website = "youtube"
        // console.log(username); ////check username access
    }
    // console.log(website); //check website access 
     two()
}
// one()

if (true) {
    const username = "zulqar"
    if (username === "zulqar") {
        const website = " github"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// +++++++++++ Hoisting (can't use function before declaration )+++++++++++
console.log(addone(5)) // call before function declaration
//definition function
function addone(num){
    return num + 1
}
//expression function 
addTwo(5) //calling function before declaration
const addTwo = function(num){
    return num + 2
}

{} //scope
// in node env global scope this different as compare to browser
//test by console.log(this) --> node returns empty obj
//test by console.log(this) --> browser returns Window obj
