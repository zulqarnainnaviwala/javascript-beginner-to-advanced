//everything is javascript is eventually object or derived from object : string, array, function, objects, classes etc 

//do functions really have an object behaviour? let's test.
function multipleBy5(num){
    return num*5
}
//follow use dot notation to add poject object in func above to prove our statement
multipleBy5.power = 2
//results
// console.log(multipleBy5(5)); //will definitely work as we know 
// console.log(multipleBy5.power); //it's also working return 2  
//so like every object , do we have accesss to prototype of this func object as well? let's check 
// console.log(multipleBy5.prototype); //returns {} -> means yes and it is referencing own context 


//now let's declare a constructor func
function createUser(username, score){
    this.username = username
    this.score = score
}
//as we can see in browser array has prototypes in depth when we dig more n more
//can we add our own protoypal function in objects as well ? like map(), push(), pop() etc. Let's test ! 
createUser.prototype.increment = function(){
    this.score++ //this. has huge important to recognize specific instance when we will be using it.
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

const zulqarnain = new createUser("zulqarnain", 100) //new create a sperate object instance to avoid ambiguity and to work fine with our requirement
const naviwala = new createUser("naviwala", 99)

//test our own created prototypes when we initialized zulqarnain & naviwala, hopefully our increment & printMe prototypes were attached automatically just like we see when we initialize an array, the map() and other functins automatically attaches with array. 

zulqarnain.printMe()
zulqarnain.increment()
zulqarnain.printMe()
zulqarnain.increment()
zulqarnain.printMe() 

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/