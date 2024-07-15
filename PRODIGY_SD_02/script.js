// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber); // For testing purposes, remove in production

let attempts = 0;

function checkGuess() {
    const guess = parseInt(document.getElementById('guessInput').value);
    attempts++;

    const message = document.getElementById('message');
    const attemptsDisplay = document.getElementById('attempts');

    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = 'Please enter a valid number between 1 and 100.';
    } else if (guess < randomNumber) {
        message.textContent = 'Too low! Try again.';
    } else if (guess > randomNumber) {
        message.textContent = 'Too high! Try again.';
    } else {
        message.textContent = `Congratulations! You guessed the number ${randomNumber} correctly.`;
        attemptsDisplay.textContent = `Number of attempts: ${attempts}`;
        document.getElementById('guessInput').disabled = true;
    }

    document.getElementById('guessInput').value = '';
}
