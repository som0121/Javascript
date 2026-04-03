
function MyName(){
    console.log("S");
    console.log("O");
    console.log("M");
}

MyName()

function addTwoNumbers(number1,number2){

    console.log(number1 + number2);

    return number1 + number2
}

const result = addTwoNumbers(7,5)

addTwoNumbers(4,6)

console.log("Result: ", result); 

function loginUserMessage(username = "som"){
    if(!username){
        console.log("please enter a username");
        return
    }

    return `${username} just logged in`
}

console.log(loginUserMessage("sam"))
console.log(loginUserMessage())