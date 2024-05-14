// Object literal
// const tinderUser = {}

// singleton Object
const tinderUser = new Object()
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "john",
            lastname: "doe"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = { obj1, obj2 } //same problem in arrays, it will create object of objects

// Object.assign (source, target)
// const obj4 = Object.assign(obj1, obj2) // returns new obj having props of obj1 & obj2
// const obj4 = Object.assign({}, obj1, obj2) // best pratice to give empty {} as source 
// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2}
// console.log(obj4);


const users = [
    {
        id: 1,
        email: "some@gmail.com"
    },
    {
        id: 2,
        email: "john@gmail.com"
    },
    {
        id: 3,
        email: "doe@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); //returns keys array
// console.log(Object.values(tinderUser)); //returns values array
// console.log(Object.entries(tinderUser)); //array of arrays, each property value is an array

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //returns boolean
// console.log(tinderUser.hasOwnProperty('isLogged')); 


const course = {
    coursename: "js beginner to advance",
    price: "999",
    courseInstructor: "zulqarnain naviwala"
}

// course.courseInstructor
// const {courseInstructor} = course
const {courseInstructor: instructor} = course //remain 

// console.log(courseInstructor);
console.log(instructor);


// JSON example : keys,values both in ""
// {
//     "name": "zulqarnain",
//     "coursename": "js beginner to advance",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]
