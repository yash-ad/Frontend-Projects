///.SELECTORS:-
let randomNumber = parseInt(Math.random()*100 + 1);
const submitButton = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remainingSlot = document.querySelector('.lastResult');
const lowOrHighval = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParagraph');
const createParagraph = document.createElement('p');

let prevGuess = []; //User value stored in an empty array(truthy):-
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
//math.random:-to generate a random floating number:-
//And want to convert and return into an integer:-
//`* 100` for decimal 2 digits and `+ 1` for not getting zero number
//Assigned it into a constant variable called `randomNumber`.