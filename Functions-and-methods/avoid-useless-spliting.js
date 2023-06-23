function createUser(email, password) {
    if (!inputIsValid(email, password)) {
        showErrorMessage('Invalid input!');
        return;
    }

    saveUser(email, password);
}

function createSupportChannel(email) {
    if (!emailIsValid(email)) {
        showErrorMessage('Invalid email - could not create channel');
    }
    // ...
}

function inputIsValid(email, password) {
    return emailIsValid(email) && passwordIsValid(password);
}

function emailIsValid(email) {
    return email && email.includes('@');
}

function passwordIsValid(password) {
    return password && password.trim() !== '';
}

function showErrorMessage(message) {
    console.log(message);
}

//actual
function saveUser(email, password) {
    const user = {
        email: email,
        password: password,
    }
    db.insert(user);
}

//refactored
class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    save() {
        database.insert(this);
    }
}

function saveUser(email, password) {
    const user = new User(email, password);

    user.save();
}

