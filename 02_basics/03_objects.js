// singleton 
//object.create 

//object literals

const mySym = Symbol("key1")
 
const JsUser = {

    name: "Som",
    "full name": "Som Parashar",

    [mySym]: "mykey1",
    age:22,
    location: "india",
    email: "som@gmail.com",
    isloggedin: false,

    lastlogindays:["Monday","Tuesday"]

}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser)
console.log(JsUser[mySym])

JsUser.email = "Som@microsoft.com"
//Object.freeze(JsUser)
JsUser.email = "Som@chatgpt.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){

    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
