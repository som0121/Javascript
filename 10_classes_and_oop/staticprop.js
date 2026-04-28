class User{
    
    constructor(username){

    this.username = username
    }

    logme(){
        console.log(`username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
    
}

const som = new User("Som")
// console.log(som.createId())

class Teacher extends User{
    constructor(username, email){

        super(username)
        this.email = email
    }
}

const android = new Teacher("Android", "android@google.com")
console.log(android.email);
