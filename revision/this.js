const obj = {
    name: "Javascript",
    
    regularFunction: function(){

        console.log(this.name) // "javascript" - this = obj (caller)

    },
    arrowFunction: ()=>{
        console.log(this.name); // undefined - 'this' = outer scope
    },

    delayedGreeting: function(){
        setTimeout(function (){
            console.log(this.name); //undefined - regular function loses 'this' in callback

        },100);

        setTimeout(()=> {
            console.log(this.name); // "javascript" - arrow function inherits 'this' from delayedgreeting
        },100);
    },
};

obj.regularFunction();
obj.arrowFunction();
obj.delayedGreeting();

const person1 = {name: "Som"};
const person2 = {name:"Rahul"};

function greet(greeting,punctuation){
    console.log(`${greeting}, ${this.name}${punctuation}`);

}

greet.call(person1,'Hello',"!"); // Hello, Som !
greet.apply(person2,["Hi","?"]); // Hi, Rahul?

const boundGreet = greet.bind(person1,"hey");
boundGreet("....")