class User{
    constructor(email, password){

        this.email = email;
        this.password =  password
    }

    get email(){

        return this._email.toUpperCase()
    }

    set email(value){

        this._email = value
    }

    get password(){

        return this._password.toUpperCase()
    }

    set password(value){

        this._password = value.toUpperCase()
    }
}


const som = new User("som@google.com", "xyz")
console.log(som.password);

console.log(som.email);