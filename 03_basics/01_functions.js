// console.log("Z");
// console.log("U");
// console.log("L");
// console.log("Q");
// console.log("A");
// console.log("R");
// console.log("N");
// console.log("A");
// console.log("I");
// console.log("N");

function sayMyName(){
    console.log("Z");
    console.log("U");
    console.log("L");
    console.log("Q");
    console.log("A");
    console.log("R");
    console.log("N");
    console.log("A");
    console.log("I");
    console.log("N");
}

// sayMyName //refernce 
// sayMyName() //call
// console.log(sayMyName)
// console.log(sayMyName())

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
// addTwoNumbers(3, 5)
// addTwoNumbers(3) //check result
// addTwoNumbers(3,"2") //check result
// addTwoNumbers(3,null) //check result

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2  //shorthand / optimised / clean
}
// addTwoNumbers(3, 5) //returned value never caught in variable 
// console.log(addTwoNumbers(3, 5)); //printed but not saved anywhere
// const result = addTwoNumbers(3, 5) //returned value saved in variable 
// console.log("Result: ", result);

// function loginUserMessage(username) //parameter:username(or any name), func name : loginUserMessage
// {
//     return `${username} just logged in`
// }
// console.log(loginUserMessage())
// console.log(loginUserMessage("Alex")) //passing argument i.e here username:Alex

function loginUserMessage(username) //to pass a default value to parameter : username = "sam"
{
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage())
// console.log(loginUserMessage("Alex"))

// function calculateCartPrice(num1){ 
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500, 2000)) // first value will count only

// function calculateCartPrice(...num1) //rest operator : "..."
// { 
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500, 2000)) //all elements will count and returns array 

// function calculateCartPrice(val1, val2, ...num1){ 
//     return num1
//     // return [val1,val2,num1]
//     // return [val1,val2,...num1]
// }
// console.log(calculateCartPrice(200, 400, 500, 2000,5000)) //val1:200, val2:400, rest of them will count in array num1

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// const user = {
//     username: "johndoe",
//     prices: 199
// }
// handleObject(user) //passing argument 
// handleObject({
//     username: "alex",
//     price: 399
// })

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));