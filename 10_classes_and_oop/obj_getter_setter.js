const User = {

    _email: "Som@google.com",
    _password: "aba",

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

const som = Object.create(User)
console.log(som.email);
console.log(som.password);