
// var c = 100

let a = 150

if (true){

let a = 10
const b = 30
var c = 50

console.log("INNER: ",a);
}

console.log(a);

function one (){
    const Username = "som"

    function two(){
    const website = "netflix"
    console.log(Username);

    console.log(website)
    }

    //console.log(website);

    two()

}
one()

if(true){

    const username = "Som"

    if(username === "Som"){

        const website = "amazon"
        console.log(username + website);

    }
    //console.log(website);

}
// console.log(username);


console.log(addone(5))

function addone(num){

    return num + 1

}

// addTwo(5)

const addTwo = function(num){

    return num + 2
}


