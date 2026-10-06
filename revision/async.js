console.log("1: Start");

setTimeout(() => console.log("2: setTimeout"), 0);

Promise.resolve().then(() => console.log("3: Promise"));

console.log("4: End");

//1. callback

function getUser(id,callback){

    setTimeout(()=>{

        callback({id,name:"Som"})
    },1000);
}

getUser(1,(user) => {

    console.log(user);
});

// 2. promise

function getUserPromise(id){

    return new Promise((resolve,reject)=> {
        setTimeout(()=>{

            if (id) resolve({id,name:"Som"});

            else reject("No ID provided");
        },1000);
    });
}

getUserPromise(1)

    .then((user) => console.log(user))
    .catch((err)=> console.log(err));

// 3. async/await - reads top- to - bottom like synchronous code

async function fetchUser(id){
    try{
        const user = await getUserPromise(id);
        console.log(user);

    } catch (err){
        console.log(err);
    }
}

fetchUser(1);