//const car = new Object() // singleton

const googleUser = {} // non singleton 

// console.log(car)
console.log(googleUser)

googleUser.id = "123aaa"
googleUser.name = "som"
googleUser.isloggedIn = false

const regularUser = {
    email: "som@google.com",
    fullname: {
        
        userfullname:{
            firstname: "Som",
            lastname: "Parashar"

        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "x", 2:"y"}
const obj2 = {3:"s", 4:"p"}

// const obj3 = {obj1,obj2}

//const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1,...obj2}
console.log(obj3);

const users = [

    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 2,
        email: "a@gmail.com"
    },
    {
        id: 3,
        email: "m@gmail.com"
    },
]

users[1].email
console.log(googleUser);

console.log(Object.keys(googleUser));
console.log(Object.values(googleUser));
console.log(Object.entries(googleUser));

console.log(googleUser.hasOwnProperty('isLoggedIn'));
