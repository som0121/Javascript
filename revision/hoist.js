
console.log(a); // undefined not and  error 
var a = 5;

// console.log(b); // ReferenceError: cannot access 'b' before initialization (temporal dead zone)
let b = 10;

sayHi(); // "Hi!"- function declarations are fully hoisted

function sayHi(){
    console.log("Hi!")

}

sayBye(); // TypeError : sayBye is not a function

var sayBye = function(){

    console.log("Bye!");
};
