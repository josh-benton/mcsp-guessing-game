let promptGuess = prompt('Which number would you like to guess?');

function guessedNumber(num) {
    console.log('the guessed number was:' + num);
    if (num == 17 ) {
        alert('Correct!');
    } else if (num > 17) {
        alert('Lower');
    } else {
        alert('Higher');
    }
}


console.log(guessedNumber(promptGuess));