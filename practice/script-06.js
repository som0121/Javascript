// After ES6  class keywords intro

class Person{

    constructor(fname,lname,contact){
        this.fname = fname;
        this.lname = lname;
        this.contact = contact;
    }
    getContact(){
        console.log(this.contact);

    }
    getName(){
        console.log(this.fname,this.lname);
    }
}
const person1 = new Person("Som", "Parashar","9898989");
const p2 = new Person("Rahul","Sharma","888888");
const p3 = new Person("Abhay","Singh","777777");

person1.getContact();
person1.getName();