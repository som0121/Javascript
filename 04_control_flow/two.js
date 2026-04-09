
const score = 500

if (score > 100) {

    // let power = "fire"
    var power = "fire"
    console.log(`user power : ${power}`);
}

console.log(`user power: ${power}`);


const balance = 1200

if (balance < 700) {

    console.log("less than 700");

} else if (balance <900) {

    console.log("less than 900");

} else if (balance <1200) {

    console.log("less than 1200")

} else {
    console.log("less than 1500");
}

const userLoogedIn = true
const debitCardMoney = true

const loggedInFromEmail = true
const loggedInFromgoogle = true

if (userLoogedIn && debitCardMoney && 2 == "2"){

    console.log("This user can purchase the products");
}

if (loggedInFromEmail || loggedInFromgoogle) {

    console.log("User logged in");
}

