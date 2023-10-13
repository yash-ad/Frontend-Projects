///.SELECTORS:-
let randomNumber = parseInt(Math.random()*100 + 1);
const submitButton = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remainingSlot = document.querySelector('.lastResult');
const lowOrHighval = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParagraph');
const createParagraph = document.createElement('p');

let prevGuess = []; //Users value stored in an empty array(truthy):-
let numGuess = 1;
let playGame = true;

if (playGame) { 
    submitButton.addEventListener('click',function(event){
        event.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess)
    }) 
};


function validateGuess(guess){
//condition checks:-
if (isNaN(guess)) {
  alert('Please enter a valid number')  
}
else if(guess < 1){
    alert('Please enter a number which is greater than 1')  
}
else if(guess > 100){
    alert('Please enter a number which is smaller than 100')  
}
else{
prevGuess.push(guess);
if(numGuess === 11){
    displayGuess(guess);
    displayMessage(`Game-Over,Your Random Number was ${randomNumber}`);
    endGame();
}
else{
displayGuess(guess);
checkGuess(guess);
}
}
};

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right`);
        endGame();
    }
    else if(guess < randomNumber){
        displayMessage(`Number is too Low`);
    }
    else if(guess > randomNumber){
        displayMessage(`Number is too High`);
    }
};

function displayGuess(guess){
userInput.value = "";
guessSlot.innerHTML += `${guess}, `
numGuess++;
remainingSlot.innerHTML = `${11-numGuess}`
};

function displayMessage(message){
lowOrHighval.innerHTML = `<h2>${message}</h2>`;
};

function endGame(){
userInput.value = ""; //For clear the values.
userInput.setAttribute('disabled','');
createParagraph.classList.add('button');
createParagraph.innerHTML = `<h2 id = "newGame">Start New Game</h2>`;
startOver.appendChild(createParagraph);
playGame = false; // to stop the game (falsy) value.
newGame();
};

function newGame(){
     newGameButton = document.querySelector('#newGame');
newGameButton.addEventListener('click',function(){
randomNumber = parseInt(Math.random()*100 + 1);
prevGuess = [];
numGuess = 1;
guessSlot.innerHTML = '';
remainingSlot.innerHTML = `${11-numGuess}`
userInput.removeAttribute('disabled');
startOver.removeChild(createParagraph);
playGame = true;
})
};








/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///.NOTES:-
//1.randomNumber:-
// let randomNumber = parseInt(Math.random()*100 + 1),
//This line generates a random floating-point number using Math.random(). 
//The result is then multiplied by 100 to get a number between 0 and 99.9999999... (inclusive). 
//The parseInt function is then used to convert this number into a whole integer. 
//Finally, 1 is added to ensure the result is at least 1. 
//This generates a random integer between 1 and 100, inclusive.

//2.Selectors:
// These lines use document.querySelector to select various elements from the HTML document.
//These elements are identified by their CSS selectors (e.g., '#subt' for an element with the id 'subt').

//3.Event Listeners:
//submitButton.addEventListener('click', function(event) {...}),]
//This sets up an event listener that listens for a click on the submit button (#subt). 
//When clicked, it prevents the default behavior (which is submitting a form, causing a page refresh), 
//then it extracts the user's guess from the input field and calls validateGuess with that value.

//4.validateGuess Function:
//This function checks if the user's guess is valid (i.e., a number between 1 and 100).
//If the guess is valid, it updates various elements on the page and checks if the game is over.

//5.checkGuess Function:
//This function compares the user's guess with the randomly generated number and provides feedback,
//(whether the guess is too high, too low, or correct).

//6.Display Functions:
// displayGuess updates the display to show the user's guesses.
// displayMessage displays a message (e.g., "Number is too High") on the page.

//7.endGame Function:
// This function is called when the game ends (either because the user guessed correctly or after 10 incorrect guesses). It disables the input field, adds a "Start New Game" button, and sets playGame to false to stop further guesses.

//8.newGame Function:
// This function sets up a new game when the "Start New Game" button is clicked. It generates a new random number, resets variables, clears the display, and re-enables the input field.