const name = "som"
const repocount = 100

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gameName = new String('som-parashar')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));


const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(-6,-2)
console.log(anotherString);

const newStringOne = "   som  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://google.com/google%20Android"

console.log(url.replace('%20','-'))
console.log(url.includes('youtube'))

console.log(gameName.split('-'));
