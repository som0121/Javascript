const cars = ["Ferrari", "Lamborghini", "Buggati","Mclaren"]

cars.forEach (function (val) {

    console.log(val);
})

cars.forEach ( (item) => {

    console.log(item);
})

function printMe(item) {

    console.log(item);
}

cars.forEach(printMe)

const days = ["Friday", "Saturday", "Sunday"]

days.forEach ((item, index, arr)=> {

    console.log(item,index,arr);
})

const language = [

    {
        langaugeName: "English",
        country: "USA and Britain"
    },

    {
        langaugeName: "French",
        country: "France"
    },

    {
        langaugeName: "German",
        country: "Germany"
    }

]

language.forEach( (item) => {

    console.log(item.langaugeName);
}

)