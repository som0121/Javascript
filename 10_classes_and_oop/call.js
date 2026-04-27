
function SetUsername(username) {
    
    this.username = username
    console.log("called");
}

function createUser(username, email, password){

    SetUsername.call(this, username)

    this.email = email
    this.password = password
}

const car = new createUser("car","car@lambo","121")
console.log(car);