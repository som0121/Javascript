console.log("Global Execution context starts")

var globalVariable = "the global variable";

function globalFunction(){
    
    console.log("Inside global function");

}
console.log(globalVariable);
globalFunction();

console.log("Global Execution Context ends");