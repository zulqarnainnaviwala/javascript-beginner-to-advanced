// Object literal -> means literally an object in js
//collection of properties and methods
const user = {
    username: "muhammad",
    loginCount: 78,
    // signedIn: false,
    signedIn: true,
    getUserDetails: function(){
        // console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        // console.log(this);
    }
}

//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this); //returns empty {} here , but on browser it returns window object

//just take an example : arr = [1,2,3,4] -> arr.map(statement) -> but do you know how map() exactly knows that i need to loop arround "1, 2 ,3 & 4" -> because of current context (this) which is defined in prototype

//now if I wanted to create a user2 obj , I need to define all again const user2={username: "muhammad",.....} right ? if wanted to create many ?

// - Constructor function , so what is it ? we have already used this before. examples : const promise = new Promise() , const date = new Date() etc
//what a Constructor function does ? allows us to create multiple instance with single Object literal

//how to create a Constructor function ?
function User(username, loginCount, isLoggedIn){
    //our variable = password argument in funtion 
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this //if you don't return , it will be returned by default , just for good practice
}

//generate an object instances with out created constructor function i.e User
// const userOne =  User("zulqarnain", 12, true)
// const userTwo =  User("Naviwala", 15, false) 
// console.log(userOne); // userOne will be ovewritten and show userTwo values , so that's why we need to use "new" when creating any instance 
// console.log(userTwo); // will be okay 

//implementation with "new" , which is necessary.
const userOne = new User("zulqarnain", 12, true)
const userTwo = new User("Naviwala", 15, false)
const userThree = new User("muhammad", 20, true)
// console.log(userOne);
//console.log(userTwo);
//console.log(userThree);
console.log(userOne.constructor); //constructor is that User func we set above
console.log(userOne instanceof User); //instanceof : to check whether userOne is the instance provided constructor(User)
