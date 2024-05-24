// this keyword refers to current context
const user = {
    username: "alex",
    price: 1999,
    welcomeMessage: function() {
        //username exists in this object because in the run time username will be initialized later on and we need a reference during declaration
        console.log(`${this.username} , welcome to website`); 

        console.log(this); //current context on func
    }
}

// user.welcomeMessage()
// user.username = "alex"
// user.welcomeMessage()

// console.log(this);

//Definition Function Syntax
// function check(){
//     let username = "alex"
//     console.log(this.username);
// }

//Expression Function Syntax
// const check = function () {
//     let username = "alex"
//     console.log(this.username);
// }

//Arrow Function Syntax
const check =  () => {
    let username = "alex"
    console.log(this);
}

// check()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//implicit return in arrow function
// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) => ( num1 + num2 )
// const addTwo = (num1, num2) => ({username: "zulqarnian"})

console.log(addTwo(3, 4))
