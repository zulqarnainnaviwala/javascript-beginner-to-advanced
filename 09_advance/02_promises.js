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

// creation of promise 
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: javascript went wrong')
        }
    }, 1000)
});

//here is a twist : it is not necessary that we should consume a promise with .then() .catch() ONLY. there is another approach to handle a promise i.e using async await 
//consumption of promiseFive using asyn await approach
async function consumePromiseFive(){
        // await promiseFive() //remember promise is an Object(eventual completion or failure), so we can't consume it like "()"
        const response = await promiseFive
        console.log(response);
        console.log(error);
}
consumePromiseFive()

//if there is a catch(error in promise) , asyn await approach can't handle the error directly so we have use try catch with it to acheive error gracefully wrna code phat jayegaaaa  
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

// ----------------------****************----------------------
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
// this is the documentation that all browsers (mozilla , chrome , safari) read and understand how fetch works : https://fetch.spec.whatwg.org/#fetch-method
// Read: https://dev.to/logrocket/the-fetch-api-is-finally-coming-to-nodejs-foe
// Read: https://blog.logrocket.com/fetch-api-node-js

//using fetch() promise with asyn await 
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUsers()

// using fetch() promise with .then() .catch() 
fetch('https://api.github.com/users/zulqarnainnaviwala')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// agar ap opar ka sara code thek sath run kren to dekhengy fetch sb se end likha hai but console sb se pehly print huwa hai , this is the power WebApi (fetch) , iska reason ye hai k jb bhi javascript code run hota hai to setTimeOut aur setInterval jese functions "callback queue" me rehty hain phr execute hojaty hain but fetch ka aesa nh fetch k liye ek special queue bnti hai jisay micro task queue/priority queue/fetch queue kehty hain. let say if there are two task  (fetch and setTimeOut) having same 1 second execution time us case me bhi fetch pehly run hoga  

// Even though the code sequence indicates that "fetch" comes last, it actually executes first due to the unique nature of Web API's fetch functionality. This is because, unlike other asynchronous operations like setTimeout or setInterval, fetch tasks are queued differently. They are placed in a special queue known as the micro task queue, priority queue, or fetch queue. Therefore, even if there are multiple tasks with the same execution time, such as fetch and setTimeout, fetch will still be prioritized and executed before others.