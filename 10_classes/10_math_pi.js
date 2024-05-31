//can we change value of PI in JS ? why and why not ? "it is a constant is not a valid answer"
// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

//let's dig for reason behind
const descripter = Object.getOwnPropertyDescriptor(Math, "PI") //getOwnPropertyDescriptor -> gives some hidden info about any object
// console.log(descripter);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,
    orderChai: function(){
        console.log("aa rahi hai");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
//how to change our initialized objects properties behaviour like we saw in PI above  
Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: false , // means name is not iterable now
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}