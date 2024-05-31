let myName = "zuqlarnain     "
let myFriend = "raza     "
// our task is to create a function (trueLength) which is accessible by all string in our code , and it will return the true length after triming.
// console.log(myName.trueLength); //should return 10
// console.log(myFriend.trueLength); //should return 4


// Let's clear some concepts bafore acheiving above task
let myHeros = ["thor", "spiderman"]
let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

//let's manupilate top level hierarchy
Object.prototype.zulqarnain = function(){
    console.log(`zulqarnain is present in all objects`);
}
// check whether it is accesible to all objects (array etc is also derived from object so we will check on that too)
// heroPower.zulqarnain()
// myHeros.zulqarnain()

//now let's manupilate top level hierarchy of array 
Array.prototype.heyZul = function(){
    console.log(`Zul says hello`);
}
//check whether it is accesible to all objects or only till array's hierarchy
// myHeros.heyZul()
// heroPower.heyZul() //caught error : means Object is the top most hierarchy so prototypes declared there are accessible to all kind of objects but if it's declared to Array hierarchy it is limited to that only 

// ---------------- Back to our task ------------------

let anotherUser = "atim     "
//adding prototype on String hierarchy 
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}
myName.trueLength()
myFriend.trueLength()
anotherUser.trueLength()
"saif     ".trueLength()
"aleem  ".trueLength()

// -------- Prototypal Inheritance (to access properties of others dynamically) ----------
// const User = {
//     name: "zulqarnain",
//     email: "johndoe@example.com"
// }
// const Teacher = {
//     makeVideo: true
// }
// const TeachingSupport = {
//     isAvailable: false
// }
// const TASupport = {
//     makeAssignment: 'JS assignment',
//     fullTime: true,
//     __proto__: TeachingSupport //Prototypal Inheritance TASupport has access to properties of TeachingSupport
// }

//Global Prototypal Inheritance
// Teacher.__proto__ = User //Teacher has access to properties of User

// __proto__ is outdated aproach, modern syntax is Object.setPrototypeOf(to,from)
// Object.setPrototypeOf(TeachingSupport, Teacher)

//--------------------------------------------------------------------------

// extra knowledge :
// prototypal behaviour -> keep finding for something from child to parent, grand parent and so on 
// and arrow functions me this ka access na hona isi prototype ki wjh se nh hota
// q k javacript me "new, classes, this, inheritance etc" ka access isi "Prototype" ki wjh se milta hai 