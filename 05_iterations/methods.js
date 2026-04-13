
const Numbers = [5,10,15,20,25]

const newNums =  Numbers.map( (num) => {return num * 2} )

const newnum = Numbers
.map( (num)=> num*5 )
.map( (num) => num+2)
.filter ( (num) => num >= 100)

console.log(newNums);

console.log(newnum);


const newNumbers = [1,2,4,6,8]

const Total = newNumbers.reduce(function (accumlator, currval){

    console.log(`acc: ${accumlator} and currval: ${currval}`);
    return accumlator + currval

},0)

const newTotal =   Numbers.reduce ( (acc,currval)=> acc+currval, 0)

console.log(Total);
console.log(newTotal);

const shoppingcart = [

    {
        product : "laptop",
        price : 70000
    },

    
    {
        product : "phone",
        price : 20000
    },

     {
        product : "tv",
        price : 40000
    },
]

const priceToPay = shoppingcart.reduce((acc,product)=> acc + product.price, 0)

console.log(priceToPay);