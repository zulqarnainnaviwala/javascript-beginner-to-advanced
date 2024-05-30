//History : before promises and fetch in core JS/node there were some strong libraries used to acheive asyn behaviour in js
//References: 
// https://stackoverflow.com/questions/6345358/queryselector-with-nested-nth-child-in-chrome-doesnt-appear-to-work
// http://bluebirdjs.com/docs/api-reference.html   

// ----------------------****************----------------------
//Promises in JS: introduced in June 2015 (ES6).
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// A Promise is in one of these states:
// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

// syntax : new Promise() -> create an instance/object 
//promise consist of two parts, "create" and "consume"

//creation of promise
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network or any 
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve(); //this is a powerful function directly connects with .then() when you consume a promise
    }, 1000)
})

//consumption of promise
promiseOne.then(function(){
    console.log("Promise consumed");
})

//creation and consumption in one go without initializing a promise into a variable like above (promiseOne)
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
})

//data consumption in promise by passing into resolve() which is by default connected to .then()
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "zulqarnain", email: "zulqarnain@example.com"}) //mostly you will see an object passed in resolve() but it is not not necessary it could be any type of data
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

//now exploring how reject() works
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        // let error = false
        if (!error) {
            resolve({username: "zulqarnain", password: "secure"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

// comsumption on promiseFour to check could we hold returned value of promise? 
// const username = promiseFour
// .then((user) => {
//    console.log(user);
//    return user.username
// })
// console.log(username) //the answer is promise is in pending state and it's not possible 

//comsumption on promiseFour with chaining (to catch previous function is returned value next .then() ) and how to avoid callback hell. Also will use catch() for error and finally() for feedback (finally will always run just like default case)
promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("The promise is either resolved or rejected"))

