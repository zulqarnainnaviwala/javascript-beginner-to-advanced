class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}
class Teacher extends User{
    constructor(username, email, password){
        super(username) //super give access to the properties of User, just like we had used "call(this, username)" in prototypal inheritance constructor function
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const teacher1 = new Teacher("Zulqarnain", "zul@example.com", "secure")
teacher1.logMe()
const newUser = new User("Naviwala")
newUser.logMe()
// newUser.addCourse() //don't have child method acces , inheritance works from parent to child
console.log(teacher1 === User);
console.log(newUser === Teacher);
console.log(Teacher === User);
console.log(teacher1 instanceof User);