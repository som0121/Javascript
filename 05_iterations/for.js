// for

for (let i = 0; i<5; i++){

    const element = i;
    
    if (element == 3) {

        console.log("the number is 3");
    }

    console.log(element);

}

for (let i = 1; i <= 10; i++) {

    console.log(`outer loop value: ${i}`);

    for (let j =1 ; j<=10; j++){

        // console.log(`inner loop value ${j} and inner loop ${i}`);

        console.log(i + '*' +j + ' = ' + i*j);
    }
    
}

let myArray = ["ferrari","lamborghini","porsche"]

for (let index = 0; index < myArray.length; index++) {

    const element = myArray[index];
    console.log(element);
    
}

// break and continue

for (let i = 1; i <= 15; i++) {

    if(i == 10){

        console.log(`the value 10 is detected`);

        //continue
        break
    }
    
    console.log(`value of i is ${i}`);
}