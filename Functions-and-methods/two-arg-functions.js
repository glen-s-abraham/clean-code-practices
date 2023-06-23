function login(email,password){
    //Log user in
}

login('glen@email.com','password');


//bad code
function log(message,isError){
    if(isError){
        console.error(message)
    }else{
        console.log(message)
    }
}

log('Hi there!',false);