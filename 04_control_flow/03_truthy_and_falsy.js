// const userEmail = 0
// const userEmail = 1
// const userEmail = true
const userEmail = false
// const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// 1, true, "0" (in string), 'false' (in string), " " (in string), [], {}, function(){} (empty function)

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// const emptyObj = {}
// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }