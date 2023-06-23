function createUser(email, password) {
    if (!email || !email.includes('@') || !password || !password.trim() === '') {
        console.log('invalid input');
        return;
    }

    const user = {
        email, password
    }
    database.insert(user);
}

//refactored
function createUser(email, password) {
    validateInput(email, password);
    saveuser(email, password);
}

function validateInput(email, password) {
    if (inputIsNotValid(email, password)) {
        throw new Error('Invalid input')
    }
}

function inputIsNotValid(email, password) {
    return !email || !email.includes('@') || !password || !password.trim() === '';
}

function showErrorMessage(message) {
    console.log(message);
}

function saveuser(email, password) {
    const user = {
        email, password
    }
    database.insert(user);
}