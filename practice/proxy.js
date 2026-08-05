const p1 = {
    fname:'som',
    lname:'parashar',
    age:'22'
};

const p1Proxy = new Proxy(p1,{
    get(target,prop){
        if (prop in target) return target[prop];
        return false;
        
        console.log({target,prop})
        return 'testing';
    },

});
p1Proxy.age = -22;

console.log(p1Proxy.lname)