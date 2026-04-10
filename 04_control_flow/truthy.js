const userEmail = []

if(userEmail){

    console.log("Got user email");

}else{
    console.log("Don't have user email");
}

// falsy values 

//false, 0, -0, BigInt 0n, "", null, undefined,NaN

//truthy values

// "0", 'false', " ", [], {}, function() {}

const emptyObj = {}

if (Object.keys (emptyObj).length === 0) {

    console.log("Object is empty");
}

// Nullish coalescing Operator (??) : null undefined 

let val1;
val1 = 10 ?? 15

val2 = null ?? 10
val3 = undefined ?? 20
val4 = null ?? 20 ?? 40

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);

// Terniary Operator

// condition ? true : false

const carPrice = 5000

carPrice <= 4500? console.log("less than 4.5k") : console.log("more than 4.5k");




