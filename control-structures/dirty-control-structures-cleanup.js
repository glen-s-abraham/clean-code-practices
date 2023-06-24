main();
function main() {
    const transactions = [
        {
            id: 't1',
            type: 'PAYMENT',
            status: 'OPEN',
            method: 'CREDIT_CARD',
            amount: '23.99',
        },
        {
            id: 't2',
            type: 'PAYMENT',
            status: 'OPEN',
            method: 'PAYPAL',
            amount: '100.43',
        },
        {
            id: 't3',
            type: 'REFUND',
            status: 'OPEN',
            method: 'CREDIT_CARD',
            amount: '10.99',
        },
        {
            id: 't4',
            type: 'PAYMENT',
            status: 'CLOSED',
            method: 'PLAN',
            amount: '15.99',
        },
    ];
    try {
        processTransactions(transaction);
    } catch (error) {
        showErrorMessage(error.message);
    }
}

//refactored
function processTransactions(transactions) {
    validateTransactions(transactions);
    for (const transaction of transactions) {
        try {
            processTransaction(transaction);
        } catch (error) {
            showErrorMessage(error.message);
            continue;
        }

    }
}


function processTransaction(transaction) {
    try {
        validateTransaction(transaction);
        const processors = getTransactionProcessor(transaction)
        if (isPayment(transaction)) {
            processors.payment(transaction)
        } else {
            processors.refund(transaction)
        }

    } catch (error) {
        showErrorMessage(error.message)
    }
}

function getTransactionProcessor(transaction) {
    let processors = {
        payment: null,
        refund: null
    }
    if (usesTransactionMethod(transaction, 'CREDIT_CARD')) {
        processors.payment = processCreditCardTransaction
        processors.refund = processCreditCardRefund
    } else if (usesTransactionMethod(transaction, 'PAYPAL')) {
        processors.payment = processPayPalTransaction
        processors.refund = processPayPalRefund
    } else if (usesTransactionMethod(transaction, 'PLAN')) {
        processors.payment = processPlanTransaction
        processors.refund = processPlanRefund
    }
    return processors;
}

function validateTransaction(transaction) {
    if (!isOpen(transaction)) {
        throw new Error('Invalid transaction type')
    }
    if (!isPayment(transaction) || !isRefund(transaction)) {
        throw new Error('Invalid transaction!')
    }
}

function validateTransactions(transactions) {
    if (isEmpty(transactions)) {
        throw new Error('Invalid transaction')
    }
}

function processCreditCardTransaction(transaction) {
    if (isPayment(transaction)) {
        processCreditCardPayment(transaction)
    } else if (isRefund(transaction)) {
        processCreditCardRefund(transaction)
    }
}
function processPayPalTransaction(transaction) {
    if (isPayment(transaction)) {
        processPayPalPayment(transaction)
    } else if (isRefund(transaction)) {
        processPayPalRefund(transaction)
    }
}

function processPlanTransaction(transaction) {
    if (isPayment(transaction)) {
        processPlanPayment(transaction)
    } else if (isRefund(transaction)) {
        processPlanRefund(transaction)
    }
}

function usesTransactionMethod(transaction, method) {
    return transaction.method === method;
}

function isRefund(transaction) {
    return transaction.type === 'Refund';
}

function isPayment(transaction) {
    return transaction.type === 'PAYMENT';
}


function isOpen(transaction) {
    return transaction.status === 'OPEN'
}


// function processPayment(paymentTransaction) {
//     if (paymentTransaction.method === 'CREDIT_CARD') {
//         processCreditCardPayment(paymentTransaction);
//     } else if (paymentTransaction.method === 'PAYPAL') {
//         processPayPalPayment(paymentTransaction);
//     } else if (paymentTransaction.method === 'PLAN') {
//         processPlanPayment(paymentTransaction);
//     }
// }

// function processRefund(refundTransaction) {
//     if (refundTransaction.method === 'CREDIT_CARD') {
//         processCreditCardRefund(refundTransaction);
//     } else if (refundTransaction.method === 'PAYPAL') {
//         processPayPalRefund(refundTransaction);
//     } else if (refundTransaction.method === 'PLAN') {
//         processPlanRefund(refundTransaction);
//     }
// }

function showErrorMessage(message, item) {
    console.log(message);
    if (item) {
        console.log(item)
    }
}

function isEmpty(transactions) {
    return !transactions || transactions.lenght === 0
}

function processCreditCardPayment(transaction) {
    console.log(
        'Processing credit card payment for amount: ' + transaction.amount
    );
}

function processCreditCardRefund(transaction) {
    console.log(
        'Processing credit card refund for amount: ' + transaction.amount
    );
}

function processPayPalPayment(transaction) {
    console.log('Processing PayPal payment for amount: ' + transaction.amount);
}

function processPayPalRefund(transaction) {
    console.log('Processing PayPal refund for amount: ' + transaction.amount);
}

function processPlanPayment(transaction) {
    console.log('Processing plan payment for amount: ' + transaction.amount);
}

function processPlanRefund(transaction) {
    console.log('Processing plan refund for amount: ' + transaction.amount);
}




