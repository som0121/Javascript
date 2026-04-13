const language = ["English","French","German","Spanish","Italian"]


const values = language.forEach ( (item) => {

    console.log(item);
    return item

})

console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const newNums = myNums.filter( (num) => {

    return num > 4 })

const Numbers = []

myNums.forEach ( (num) => {

    if (num >4) {

        Numbers.push(num)
    }
} )
    

console.log(newNums);
console.log(Numbers);