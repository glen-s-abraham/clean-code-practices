//Pure function
//for same input parameters returns same output parameter always
//glen->id_glen
function generateId(useraName){
    const id= 'id_'+useraName;
    return id;
}

//impure function
//for smae input parameters return differnt output parameters
//glen->glen12344555544421,glens080809809809
function generateId(useraName){
    const id= useraName+Math.random().toString();
    return id;
}

///Side effect example
let lastAssignedId;

function generateId(userName){
    const id = 'id_'+userName;
    lastAssignedId = id;//changes a global state variable - unexpected at thi level of abstraction
    return id;
}