function connectDatabase() {
    const didConnect = database.connect();//side effect-expected
    if (didConnect) {
        return true;
    } else {
        console.log('Could not connect to database!');//side effect - unepxected system state change
        return false;
    }
}

//no side effects present
function determineSupportAgent(ticket) {
    if (ticket.requestType === 'unknown') {
        return findStandardAgent();
    }
    return findAgentByRequestType(ticket.requestType);
}


function isValid(email, password) {
    if (!email.includes('@') || password.length < 7) {
        console.log('Invalid input!');//side effect unexpected
        return false;
    }
    return true;
}

//Refactored code
function initApp(){
    const success = connectDatabase();
    if(!success){
        console.log('Could not connect to database!');//side effects
    }
}

function connectDatabase() {
    const didConnect = database.connect();//side effect-expected
    return didConnect;
}

function determineSupportAgent(ticket) {
    if (ticket.requestType === 'unknown') {
        return findStandardAgent();//side effect
    }
    return findAgentByRequestType(ticket.requestType);
}

function isInputValid(email,password){
    if(!isValid(email,password)){
        console.log('Invalid input!');
    }
}

function isValid(email, password) {
    return !email.includes('@') || password.length < 7
}

