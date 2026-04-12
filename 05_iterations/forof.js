
const arr = [5,10,15,20,25]

for (const num of arr) {

    console.log(num);
    
}

const greetings = "Hello world!"

for (const greet of greetings){


    console.log (`char is ${greet}`)
}

// MAPS

const map = new Map()

map.set("IN", "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

map.set("IN", "India")

console.log(map);

for (const [key,value] of map) {

    console.log (key, ':-', value);
    
}

const myObject = {

    'game1': 'RDR',
    'game2': 'god of war'
}

//for (const [key, value] of myObject) {
    
 //   console.log(key, ':-', value);
//}