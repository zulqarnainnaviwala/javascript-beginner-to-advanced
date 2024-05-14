// singleton Object
// Object.create

//Symbol
const mySym = Symbol("key1")

// Object literal
const JsUser = {
    name: "Zulqarnain",
    "full name": "Zulqarnain Naviwala",
    [mySym]: "mykey1", //[mySym] syntax to define symbol as a key to object
    age: 25,
    location: "Karachi",
    email: "zulqarnain@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "zulqarnain@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "zulqarnain@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); //this refers to the same object it is exisitng in
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
console.log(JsUser);