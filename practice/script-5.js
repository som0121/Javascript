//Normal function 
//camalCasing  getAge(),addNums()

//constructor Functions
//PascalCasing

function Person(fname,lname,contact){

    this.fname = fname;
    this.lname = lname;
    this.contact = contact;

    this.getContact = function(){

        console.log(this.contact);
    };
    }


const person1 = new Person("Som", "Parashar","9898989");
const p2 = new Person("Rahul","Sharma","888888");
const p3 = new Person("Abhay","Singh","777777");

person1.getContact();
p2.getContact();

console.log(person1);