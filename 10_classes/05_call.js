function setUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    // setUsername(username) //setUsername is called and performed it's task, then vanished from call stack without passing feedback to createUser , so we will use call() to rectify that problem 
    setUsername.call(this, username) //.call() hold reference to the from executions context of setUsername () and this is optional is first parameter
   
    this.email = email
    this.password = password
}

const admin = new createUser("zul", "zul@fb.com", "secure")
console.log(admin);