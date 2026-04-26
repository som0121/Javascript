
function multipleBy10(num){

    return num*10

}

multipleBy10.power = 2

console.log(multipleBy10(10));
console.log(multipleBy10.power);
console.log(multipleBy10.prototype);

function createUser(username, price) {

    this.username = username
    this.price = price
}

createUser.prototype.increment = function() {
    
    this.price++
}

createUser.prototype.printMe = function() {
    console.log(`Price is ${this.price}`)
}

const car = new createUser("car",5000)
const bike = new createUser("bike",2000)


car.printMe()
bike.printMe()