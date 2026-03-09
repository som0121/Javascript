
// primitive (stack)  non primitive(heap) 

let name = myAccountname
let anothername = myYoutubename

anothername = "som"

console.log(myYoutubename)
console.log(anothername)

let userOne = {
    email : "admin@google.com",
    upi: "admin@ybl" 
}

let userTwo = userOne

userTwo.email = "som@google.com"

console.log(userOne.email);
console.log(userTwo.email);
