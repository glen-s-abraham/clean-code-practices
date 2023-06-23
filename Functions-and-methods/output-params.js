//modifies the parameter value
//avoid this
function createId(user){
    user.id = 'u1';
}

const user = {name:'Max'};
createId(user);

//user object modified to have an id
console.log(user);


//Refactored

class User{
    constructor(name){
        this.name = name;
    }

    addId(){
        this.id = 'u1';
    }
}

const customer = new User('max');
customer.addId()
console.log(customer);