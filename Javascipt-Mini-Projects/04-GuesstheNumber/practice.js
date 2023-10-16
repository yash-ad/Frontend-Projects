//First task is to generate a random number:-
//`parseInt()` method to return as an integer , string into a number.

const randomNumber = parseInt(Math.random()*100 + 1);
const userInput = document.querySelector('#guessField');
const submitButton = document.querySelector('#subt');
const guessSlot = document.querySelector('.guesses');
const remainingSlot = document.querySelector('.lastResult');
const lowOrHighVal = document.querySelector('.lowOrHi');
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
lowOrHighVal.innerHTML = `<h2>${message}</h2>`
};

let endGame = ()=>{
//To clean the values:-
//Add a paragraph
userInput.value = "";
userInput.setAttribute('disabled',"");
createParagraph.classList.add('button');
createParagraph.innerHTML = `<h2 id ="newGame">Start Game</h2>`;
resultOnParagraph.appendChild(createParagraph); 
playGame = false;   
newGame();
};


let newGame = ()=>{
const newGameButton = document.querySelector('#newGame');
newGameButton.addEventListener('click',function(){
    randomNumber = parseInt(Math.random()*100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remainingSlot.innerHTML = `${11-numGuess}`;
    resultOnParagraph.removeAttribute('disabled');
    resultOnParagraph.removeChild(createParagraph);
    playGame = true;
})
};