const p1 = {
    xp1: "I am inside P1",
};

const p2 = {
    xp2 : "I am inside P2",
    __proto__: p1,
};

const p3 = {
    xp3: "inside p3",
    __proto__:p2,
};

class Student{
    constructor(){

    }
    getName(){
        return "inside get name";
    }
}

const s1 = new Student();
const s2 = {__proto__: Student.prototype};