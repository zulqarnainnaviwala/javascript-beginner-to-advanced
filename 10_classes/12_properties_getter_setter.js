function User(email, password){
    this._email = email;
    this._password = password

    //Syntax using defineProperty(this, property, {functions})
    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const zulqarnain = new User("z@zn.com", "password")

console.log(zulqarnain.email);
console.log(zulqarnain.password); 

//not zulqarnain.email() or zulqarnain.password()  because these are methods, just getting/setting values