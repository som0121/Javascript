
const user = {
    
    username: "Som",
    age: 22,

    welcomeMessage: function(){

        console.log(`${this.username},welcome to website`);
    }
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this);

const car = function (){

    let name = "Som"
    console.log(this.name);
}

const car2 = () => {

    let username = "Som parashar"
    console.log(this.username);
}

car()
car2()

const addTwo = (num1, num2) => {

    return num1 + num2
}

const add = (num1, num2) => (num1 + num2)

const added = (num1, num2) => ({username: "Som"})

console.log(addTwo(5,5))
console.log(add(10,5))
