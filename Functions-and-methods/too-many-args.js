class User {
    constructor(name, age, email) {
        this.email = email;
        this.age = age;
        this.name = name;
    }
}

const user = new User('Max', 31, 'max@test.com');

//Refactor

class User {
    constructor(userData) {
        this.name = userData.name;
        this.age = userData.age;
        this.email = userData.email;
    }
}

const user2 = new User({ name: 'Max', age: 31, email: 'max@test.com' });

//Ex2
function compare(a, b, comperator) {
    if (comperator === 'equal') {
        return a === b;
    } else if (comperator === 'not equal') {
        return a !== b;
    } else if (comperator === 'greater') {
        return a > b;
    } else if (comperator === 'smaller') {
        return a < b;
    }
}

const isSmaller = compare(3, 5, 'smaller');

//refactor
function compare(comparisonData) {
    const { first, second, comperator } = comparisonData
    if (comperator === 'equal') {
        return first === second;
    } else if (comperator === 'not equal') {
        return first !== second;
    } else if (comperator === 'greater') {
        return first > second;
    } else if (comperator === 'smaller') {
        return first < second;
    }
}

const isEqual = compare({ first: 3, second: 5, comperator: 'smaller' });