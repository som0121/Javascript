console.log("start of script 2");

setTimeout(()=>{
    console.log("This is from the task queue(setTimeout)");
},5000);

console.log("End of script");