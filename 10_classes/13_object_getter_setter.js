const User = {
    _email: 'z@zn.com',
    _password: "password",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    },
    get password(){
        return this._password.toUpperCase()
    },
    set password(value){
        this._password = value
    }
}
// const example = Object.create() //create() is a factory function to initialize an object , by default without is reference is null
// console.log(example)

const user = Object.create(User)
console.log(user.email);
console.log(user.password);