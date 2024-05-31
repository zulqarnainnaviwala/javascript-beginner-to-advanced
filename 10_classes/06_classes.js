//as we are using ES6 or later - so remember classes are all syntactic sugar nothing else.
// classes syntax
// class User {
//     //create constructor sytax
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }
//     //create method sytax
//     encryptPassword(){
//         return `${this.password}verySecure`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }

// }
// const zulqarnain = new User("zulqarnain", "zulqarnain@gmail.com", "secure")
// console.log(zulqarnain.encryptPassword());
// console.log(zulqarnain.changeUsername());

// suppose we haven't that class concept in js , so how can we done the same thing with prototypal inheritance? 
// so here's behind the scene, as we will acheive the same thing 
function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}
User.prototype.encryptPassword = function(){
    return `${this.password}secure`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}
const johndoe = new User("johndoe", "johndoe@gmail.com", "secure")
console.log(tea.encryptPassword());
console.log(tea.changeUsername());

// acheived succesfully, end of story! 👋