class User {
    constructor(username){
        this.username = username
        User.staticProp = "Static Property"; // Static property initialized within the constructor
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    // Static method initialized 
    static createId(){
        return `123`
    }
}
const zulqarnain = new User("zulqarnain")
// console.log(zulqarnain.createId()) //createId is static , so not accessible

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}
const iphone = new Teacher("iphone", "iphone@apple.com")
// console.log(iphone.createId()); //not accessible due to static

console.log(User.createId()) //only be access by class/constructor name
console.log(User.staticProp) //only be access by class/constructor name