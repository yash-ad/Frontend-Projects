//First task is to generate a random number:-
//`parseInt()` method to return as an integer , string into a number.

let randomNumber = parseInt(Math.random()*100 + 1);
const userInput = document.querySelector('#guessField');
const submitButton = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const remainingSlot = document.querySelector('.lastResult');
const toShowMessage = document.querySelector('.displaymsg');
const resultOnParagraph  = document.querySelector('.resultParagraph');

//To create paragraph:-
const createParagraph = document.createElement('p');

//Values stored in an array:-
let prevGuess = [];

//Number of guesses:-
let numGuess = 1;

//playGame variable for to play the game:-
let playGame = true;

///.Lets create functions and codeLogics below:-

//User is elegible for to start the game:-
if(playGame){
submitButton.addEventListener('click',(event)=>{
event.preventDefault();
const guessVal = parseInt(userInput.value);
console.log(guessVal);
validateGuess(guessVal);
}) 
}


let validateGuess = (guessVal)=>{
 //To check the conditions using if/else if condtions:-
 if(isNaN(guessVal)){
alert('Please enter a valid number.')
 }
 else if(guessVal < 1){
    alert('Please enter a number greater than 1.')
     }
else if(guessVal > 100){
        alert('Please enter a number lesser than 100.')
         }
else{
prevGuess.push(guessVal);
if(numGuess === 11){
    displayGuess(guessVal)
    displayMessage(`Game-Over.Your random number was: ${randomNumber}`);
    endGame();
}
else{
   displayGuess(guessVal);
   checkGuess(guessVal);
}
}
};


let checkGuess = (guessVal)=>{
if(guessVal === randomNumber){
    displayMessage('Congratulations,You guessed it right number')
    endGame();
}
else if(guessVal < randomNumber){
displayMessage('Number is too low');
}
else if(guessVal > randomNumber){
    displayMessage('Number is too high');
}
};

//To cleanup and to clear the values:-
let displayGuess = (guessVal)=>{
userInput.value = "";
guessSlot.innerHTML += `${guessVal},`
numGuess++;
remainingSlot.innerHTML = `${11-numGuess}`
};

//Interaction with DOM manipulation:-                                                                                                                               
let displayMessage = (message)=>{
toShowMessage.innerHTML = `<h2>${message}</h2>`
};

let endGame = ()=>{
//To clean the values:-
//Add a paragraph
userInput.value = "";
userInput.setAttribute('disabled',"");
createParagraph.classList.add('button');
createParagraph.innerHTML = `<h2 id ="newgame">StartGame</h2>`;
resultOnParagraph.appendChild(createParagraph); 
playGame = false;   
newGame();
};


let newGame = ()=>{
const newGameButton = document.querySelector('#newgame');
newGameButton.addEventListener('click',function(){
    randomNumber = parseInt(Math.random()*100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remainingSlot.innerHTML = `${11-numGuess}`;
    createParagraph.removeAttribute('disabled');
    createParagraph.removeChild(resultOnParagraph);
    playGame = true;
})
};



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///.NOTES:-

//1.Random Number Generation:-
//let randomNumber = parseInt(Math.random()*100 + 1); 
//generates a random number between 1 and 100 using Math.random(), and parseInt() converts it into an integer.

//2.DOM Elements:
//const userInput, submitButton, guessSlot,remainingSlot,
//lowOrHighVal, and resultOnParagraph are variables that store references
//to specific elements in the HTML document.

//3.Creating Paragraph Elements:
//const createParagraph = document.createElement('p'); 
//creates a new paragraph element. 
//This will be used to display messages in the game.

//4.Array to Store Previous Guesses:
//let prevGuess = []; 
//initializes an empty array to store the user's previous guesses.

//5.Number of Guesses:
// let numGuess = 1; 
//initializes a counter for the number of guesses the user has made.

//6.Flag for Playing the Game:
//let playGame = true; 
//is a flag that indicates whether the game is in progress.

//7.Event Listener for Submit Button:
// submitButton.addEventListener('click', (event) => {...} listens for a click event on the submit button. When clicked, it triggers the game logic.

//8.validateGuess Function:
// This function checks if the user's guess is valid and within the specified range (1-100).

//9.checkGuess Function:
// Compares the user's guess to the random number and provides feedback on whether the guess is too high, too low, or correct.


//10.displayGuess Function:
// Updates the display to show the user's previous guesses and updates the remaining guesses count.

//11.displayMessage Function:
// Updates the display to show messages 
//(e.g., "Number is too low", "Congratulations, You guessed it right number").

//12.endGame Function:
// Ends the game by disabling the input field, displaying a message, and providing an option to start a new game.

//13.newGame Function:
//Starts a new game by generating a new random number, resetting variables, and enabling the input field.
