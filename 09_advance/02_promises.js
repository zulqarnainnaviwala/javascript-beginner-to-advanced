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
