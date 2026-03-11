const myArr = [2,4,5,7,8,9]
const myCars = ["ferrari","porsche","buggati"]

const myArr2 = new Array(1,3,6,8,9)
console.log(myArr[1]);
console.log(myArr2[2]);

myArr.push(3)
myArr.pop()

myArr.unshift(8)
myArr.shift()

console.log(myArr.includes(6));
console.log(myArr.indexOf(8));

const newArr = myArr.join()

console.log(myArr);
console.log(typeof newArr);

//slice, splice

console.log("A ",myArr);

const mynA1 = myArr.slice(1,4)

console.log(mynA1);
console.log("B ",myArr);

const mynA2 = myArr.splice(1,4)

console.log("C", myArr);

console.log(mynA2);