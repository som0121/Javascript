function createCounter(){

    let count = 0; // this variable is "closed over"

    return function(){
        count++;
        return count;
    };

}

const counter1 = createCounter();
console.log(counter1());  //1
console.log(counter1()); //2

const counter2 = createCounter();
console.log(counter2());


function bankAccount(balance){

    return {
        deposit(amount){
            balance+= amount;
            return balance;
        },

        withdraw(amount){

            if(amount > balance) return "Insufficient funds"
            balance -= amount;
            return balance;
        },
        getBalance(){
            return balance;
        },
    };
}

const account = bankAccount(1000);
console.log(account.deposit(500));
console.log(account.getBalance());
