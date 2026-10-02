
function testVar(){

    if (true){
        var x = 10;
    }
    console.log(x); // 10 - accessible outside the if block
}

function testLet(){
    if (true){

        let y = 20;
    }
   // console.log(y); // ReferenceError- block scoped
}

const obj = {name: "Som"};
obj.name = "update"; // allowed - mutating property

console.log(obj)
//obj = {}; // TypeError - reassigning the binding 