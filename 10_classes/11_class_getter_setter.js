class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    //getter setter names should be same as your properties name in constructor
    get email(){
        // return this.email.toUpperCase() //race condition , getter and contructor will start getting value, so we need to add _ in variable name refering as private or a new property name 
        return this._email.toUpperCase()
    }
    set email(value){
        //this.email = value //race condition , setter and contructor will start setting value, so we need to add _ in variable name refering as private or a new property name
        this._email = value
    }

    get password(){
        return `${this._password}IsSecure`
    }

    set password(value){
        this._password = value
    }
}

const zul = new User("z@zn.ai", "password")
console.log(zul.email);