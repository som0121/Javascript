
let games = ["RDR","GTA", "UNCHARTED"]

let gametitle = {

    RDR: "Action",
    GTA: "Open world action",

    getgametitle: function(){
        console.log(`RDR title is ${this.RDR}`);
    }
}

Object.prototype.som = function(){

    console.log(`som is present in all objects`);
}
 gametitle.som()


 let anotherUsername = "Som parashar   "

 String.prototype.truelength = function(){

    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
 }

 anotherUsername.truelength()
 "som".truelength()
 "som parashar".truelength()
