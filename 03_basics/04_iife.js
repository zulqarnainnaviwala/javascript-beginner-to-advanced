// Immediately Invoked Function Expressions (IIFE)
//to avoid polution from global scope

// named IIFE
(function makeFunc(){
    console.log(`DB CONNECTED`);
})();  //; is important in end, sometimes you might get errors

// arrow IIFE
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('zulqarnian');

// arrow IIFE
( (name) => console.log(`DB CONNECTED TWO ${name}`))('zulqarnian')
