const user = {
    username: "som@123",
    loginCount: 12,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        //console.log(`username: ${this.username}`);

        console.log(this);
        console.log(user.username)
        
    }

};
user.getUserDetails();

function User (username, loginCount, isLoggedIn) {

    this.username = username;
    this.loginCount = loginCount;
    this.logggedIn = isLoggedIn

    this.greeting = function() {

        console.log(`Welcome ${this.username}`);
    }

    return this

}

const userOne = new User("Som",10,true)
const userTwo = new User("Som parashar", 15, false)

console.log(userOne);
console.log((userTwo));