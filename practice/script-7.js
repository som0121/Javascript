const p1 ={
    lname: "Parashar",
    fname: "Som",
    contact:"828xxx",

    getFullname(){
            return `${this.lname} ${this.fname}`
    },
};

const p2 ={
    __proto__: p1,
};

console.log("p1 is",p1.fname);
p2.__proto__.fname = "S"

console.log("p1 after change is",p1.fname);
