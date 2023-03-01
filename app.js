const secretNumber = 17;
const correctMessage = 'Correct';
const higherMessage = 'Higher';
const lowerMessage = 'Lower';
let guessCount = 0;
let guess;
let history = [];
let again;

let userName = prompt('What is your name?');

function checkGuess(guess) {
    guessCount++;
    history.push(guess);
    if (guess == secretNumber) {
        if (guessCount > 1) {
            history.pop();
            alert(`That's ${correctMessage} ${userName}! Your previous guesses were ${history}!`);

        } else {
            alert(correctMessage);
        }
        return true;
    } else if (guess > secretNumber) {
        alert(`Sorry ${userName}, guess ${lowerMessage}`)
        return false;
    } else {
        alert(`Sorry ${userName}, guess ${higherMessage}`)
        return false;
    }
}


function playAgain() {
    again = prompt('Would you like to play again? Yes or No.');
    if (again.toLowerCase() == 'yes') {
        history = [];
        return true;
    } else {
        return false;
    }
}


do {
    do {
        guess = prompt('Which number would you like to guess?');
    } while (!checkGuess(guess)) {
    }
} while (playAgain()) {
}



