function saveUser(email,password){
    const user = {
        email,
        password
    }

    db.insert('user',user)
}

saveUser('test@gmail.com','testers')

//refactor - 1 
function saveUser(user){
    db.insert('users',user);
}

saveUser(newUser);

//refactor -2
class User{
    constructor(email,password){
        this.email = email;
        this.password=password;
        this.id = Math.random().toString();
    }

    save(){
        db.insert('users',user);
    }
}