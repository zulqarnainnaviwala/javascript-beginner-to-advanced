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