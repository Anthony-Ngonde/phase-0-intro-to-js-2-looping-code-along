// Code your solutions in this file


function writeCards(names, event) {
    //let names = ["Charlie", "Samip", "Ali"];
    let messages = [];

    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }

    return messages;
}


function countDown(startingNumber) {
    let currentNumber = startingNumber;

    while (currentNumber >= 0) {
        console.log(currentNumber);
        currentNumber--;
    }
}