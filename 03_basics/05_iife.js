
//Immediately Invoked Function Expression (IIFE)

( function js(){
    console.log(`DB CONNECTED`);

}) ();

( (name) => {

    console.log(`DB CONNECTED TWO ${name}`);

} ) ('som')
