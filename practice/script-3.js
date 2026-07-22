console.log(("Start of script 3"));

setTimeout(() => {
   console.log("This is a part of timeout"); 
},0);

Promise.resolve().then(()=>{
 console.log("This is a part of the promise task");
});

console.log("End of script");