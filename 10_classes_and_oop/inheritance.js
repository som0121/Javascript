class User {

    constructor(username){

        this.username = username
    }

    logme(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User {

    constructor(username,email,password){

        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course has added named ${this.username}`);
    }
}

const math = new Teacher("math", "math@lambo.com","121")

math.addCourse()