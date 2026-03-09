//Primitive

// 7 types: String, Number, Boolean,null, undefined, Symbol,BigInt

const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('421')
const anotherId = Symbol('421')

console.log(id === anotherId);

const bigNumber = 9245678568845n


// Reference (Non primitive)

// Array, Objects, Functions

const cars = ["Lamborghini","Ferrari","Mclaren","Porsche"]

let myObj = {
    name: "som",
    age: 22,
}

const myFunction = function() {

    console.log("Hello")
}
console.log(typeof myFunction);
console.log(typeof cars)