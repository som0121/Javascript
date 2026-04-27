class user {

    constructor(username,email,password){

        this.username = username;
        this.email = email;
        this.password = password

    }

    encryptPassword(){

        return `${this.password}abc`
    }

    changeUsername(){

        return `${this.username.toUpperCase()}`
    }
}

const car = new user("car", "car@google.com", "121")

console.log(car.encryptPassword());
console.log(car.email);
console.log(car.changeUsername());

function User(username, email, password) {

    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptedPassword = function(){

    return `${this.password}abc`
}

const bike = new user("bike", "bike@google.com", "121")

console.log(bike.encryptPassword());
console.log(bike.changeUsername());
