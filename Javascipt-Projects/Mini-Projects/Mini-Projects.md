
## Project One:-
## 1.Color changer -
## Code solution:-
```javascript
//1.Select all buttons from Html and holding in a variable `const`:-
const buttons = document.querySelectorAll('.button'); //Nodelists
//For inspection in the browser
// console.log(buttons); 

//////////////////////////////////////////////////////////////////////////////////////////////

//2.To selecting the page body:-
const body = document.querySelector("body");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//3.Using `forEach` loop because of nodelists on the buttons:-
buttons.forEach(function(button){
    console.log(button);
//addeventlistener() method on the button.
 //Click event with callBack function
 //Functioning to all colors:-
button.addEventListener('click',function(event){
console.log(event);
console.log(event.target);//Html element
if(event.target.id === 'grey'){
    body.style.backgroundColor = event.target.id;
}
if(event.target.id === 'red'){
    body.style.backgroundColor = event.target.id;
}
if(event.target.id === 'blue'){
    body.style.backgroundColor = event.target.id;
}
if(event.target.id === 'yellow'){
    body.style.backgroundColor = event.target.id;
}
})
});
/////////////////////////////////////////////////////////////////////////////////////////////
//4.Refresh button for refresh the page:-
const refreshButton = document.getElementById('refreshButton');

refreshButton.addEventListener('click', () => {
    location.reload();
});
//location.reload():-
//is a JavaScript method that allows you to reload the current page in a web browser. 
//When you call location.reload(), 
//it instructs the browser to reload the entire page, 
//including all of its resources (such as HTML, CSS, JavaScript, images, etc.).


```
## Project Two:-

## 2.BMI-Calculator -
## Code solution:-

```javascript
//For selecting `form` element and stored in a variable `const form`:-
const form = document.querySelector('form');

//Addeventlistener, here the event listener is `submit` why because of a `form`.
//And with the callBack function as a paramter(local variable) `event` as an object.
form.addEventListener('submit',function(event){
//preventDefault:- method is used to stop the default behavior of an element, 
 //as a form submission or a link click, from occurring.
event.preventDefault();

//queryselector for selecting height with an id and using `.value` becuase of an input to get values.
//parseInt:- because the values will get into a string so `parseInt()` method convert them into the numbers.
const height  = parseInt(document.querySelector('#height').value);
const weight  = parseInt(document.querySelector('#weight').value);
const resultDisplay = document.querySelector('#results');

//If-else if conditions to check the values for height and weight:-
if(height === "" || height < 0 || isNaN(height)){
//InnerHtml for values
results.innerHTML = `Please provide a valid input! ${height}`;
}
else if(weight === "" || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please provide a valid input! ${weight}`;
}
else{
//The formula for BMI is weight in kilograms divided by height in meters squared.
//toFixed() method for 2 decimal value.
const bmiResult = (weight/((height*height)/10000)).toFixed(2);

//For Bmi categories results:-
let bmiCategory;
   if(bmiResult < 18.6){
    bmiCategory = "Under weight"
   }
   else if(bmiResult > 18.6 && bmiResult < 24.9){
bmiCategory = "Healthy weight"
   }
  else{
    bmiCategory = "Overweight"
  }

    //To show the result display
resultDisplay.innerHTML = `<span> Based on your body mass index ${bmiResult}, you are within the ${bmiCategory} range.</span>`

}
});

//Reset button for reset the values:-
const resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click',function(){
  location.reload();
})
```
## Project Three:-

## 3.Digital Clock -

## Code solution:-
```javascript
//1.This line creates a variable called `clock` and
//assigns it the value of an html element with the id attribute of 'clock'.
const clock = document.getElementById('clock');

//2.`setInterval():-
//This sets up a repeating action.the function inside the `setInterval`,
//will be executed every (1000 miliseconds or 1 seconds).
setInterval(function(){

//3.new Date():-
//Inside the function that runs every second,it
//creates a new `Date` object,
//This object represents the current date and time.
const clockTime = new Date();  

//4.clock.innerHTML = clockTime.toLocaleTimeString():-
//`clock.innerHTML` It updates the content inside the Html elment with the id "clock".
//It sets the content to the current time using method `toLocaleTimeString()`.
clock.innerHTML = clockTime.toLocaleTimeString();
},1000);
```
## Project Four:-

## 4.Guess the Number -

## Code solution:-
```javascript
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


```
## Project Five:-

## 5.Move The Ball -

## Code solution:-
```javascript 
const ball = document.getElementById('ball');

let ballPosition = {x:0,y:0}; //Reassignability for `let`.

const viewportWidth  =  window.innerWidth;
const viewportHeight =  window.innerHeight;

function moveBall(event){
    const key = event.key
switch (key) {
    case "w":
        if(ballPosition.y > 0)
        {ballPosition.y -= 10;}
        break;
    case "a":
            if(ballPosition.x > 0)
             {ballPosition.x -= 10;}
            break;
    case "s":
                if(ballPosition.y < viewportHeight-50) 
                {ballPosition.y += 10;}
            
                break;
    case "d":
                    if(ballPosition.x < viewportWidth-50)
                    {ballPosition.x += 10;}
                    
                    break;
                
}    
ball.style.transform = `translate(${ballPosition.x}px,${ballPosition.y}px)`;
}
document.addEventListener('keydown',moveBall);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///.NOTES:-
//1 Getting Elements from the Page:-
//const ball = document.getElementById('ball');
//This line gets an element from the webpage with an id of 'ball' and stores it in a variable called `ball`.

//2:-
// let ballPosition = {x: 0, y: 0}; 
//This line creates a variable called ballPosition that keeps track of the ball's position.
//Initially, it's set at coordinates (0, 0).

//3.Getting Viewport Dimensions:-
// const viewportWidth = window.innerWidth;: 
//This stores the width of the visible part of the webpage in a variable called viewportWidth.
// const viewportHeight = window.innerHeight;:
//This stores the height of the visible part of the webpage in a variable called viewportHeight.

//4.Function for Moving the Ball:-
// function moveBall(event) { ... }: 
//This is a function named moveBall that gets called whenever a key is pressed.

//5.Switch Statement for Key Presses:-
// switch (event.key) { ... }: This checks which key was pressed.
// Cases:
// "w": If "w" was pressed and the ball's position is above the top edge,it moves the ball up by 10 pixels.
// "a": If "a" was pressed and the ball's position is to the left of the left edge, it moves the ball left by 10 pixels.
// "s": If "s" was pressed and the ball's position is below the bottom edge (viewportHeight - 50 accounts for the ball's size), it moves the ball down by 10 pixels.
// "d": If "d" was pressed and the ball's position is to the right of the right edge (viewportWidth - 50 accounts for the ball's size), it moves the ball right by 10 pixels.

//6.Updating Ball's Position and Display:-
// ball.style.transform = translate(${ballPosition.x}px, ${ballPosition.y}px);: 
//This updates the position of the ball on the webpage. 
//It uses CSS transform property to move the ball to the new coordinates.

//7.Listening for Key Presses:-
// document.addEventListener('keydown', moveBall);: 
//This sets up an event listener to watch for key presses. 
//When a key is pressed, it calls the moveBall function.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///.FOR PRACTICE PURPOSE ONLY:-
// function pressEnter(event){
// const key = event.key;

// if(key === 'Enter'){
//     alert("You pressed the enter key!")
// }

// };


// document.addEventListener('keydown',pressEnter);

```
## Project Six:-

## 6.CatchMeIfYouCan (mouse pointer) -

## Code solution:-
```javascript

let box = document.querySelector('.box');

function getRandomPosition(){
    let viewportWidth  = window.innerWidth  - 100;    //100px is the box width.
    let viewportHeight = window.innerHeight - 100;   //100px is the box height.

    let randomX = Math.random() * viewportWidth;
    let randomY = Math.random() * viewportHeight;

    return {x :randomX , y : randomY};
};

function setRandomPosition(){
let position = getRandomPosition();
box.style.left = position.x + 'px';
box.style.top = position.y + 'px';
};

setRandomPosition();

box.addEventListener('mouseenter',setRandomPosition);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///.NOTES:-

//1:-
//let box = document.querySelector('.box');:
//This line of code finds an HTML element with the class name 'box' and assigns it to a variable called `box`. 
//This element is what the code will be working with.Thats why it has stored in `let` that we can reassign and use it accordingly.

//2:-function getRandomPosition() { ... }: 
//This defines a function called getRandomPosition.
// Functions are like reusable blocks of code. 
//In this case, This function generates a random position on the screen.
//let viewportWidth = window.innerWidth - 100; 
//It calculates the maximum width of the viewport (the visible area in the browser) minus 100 pixels (which is the width of the box).
//let viewportHeight = window.innerHeight - 100;: Similarly, it calculates the maximum height of the viewport minus 100 pixels (which is the height of the box).
//let randomX = Math.random() * viewportWidth; and 
//let randomY = Math.random() * viewportHeight;: 
//These lines generate random numbers for the x and y coordinates, 
//within the calculated width and height.
//return {x :randomX , y : randomY};: 
//This line returns an object with the random x and y coordinates.

//3.function setRandomPosition() { ... }: 
//This defines another function called setRandomPosition. 
//This function will be responsible for setting the position of the box.
// let position = getRandomPosition(),
 //It calls the getRandomPosition function to get a random position and stores it in the variable `position`.
//box.style.left = position.x + 'px'; and box.style.top = position.y + 'px';: 
//These lines set the left and top CSS properties of the box element to the x and y coordinates from the position object. 
//This effectively moves the box to the new random position.


//4.setRandomPosition(),
//This line immediately sets a random position for the box when the code is first run.


//5.box.addEventListener('mouseenter', setRandomPosition),
//This line sets up an event listener. 
//It listens for the "mouseenter" event on the box element, 
//which happens when the mouse pointer moves over the box. 
//When this event occurs, it calls the setRandomPosition function, 
//which moves the box to a new random position.

```
## Project Seven:-

## 7.FivedigitupCounter(DOM) -

## Code solution:-
```javascript
document.addEventListener('DOMContentLoaded',function(){
  
  //Declared all the variable and assigned them in their values.
  const digitElements = document.querySelectorAll('#counter span');
const valueInput = document.getElementById('value');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
let intervalId; //For setInterval and for clearInterval;


function updateCounter(value){
const valueString = value.toString().padStart(5,'0');
for (let i = 0; i < 5; i++) {
  digitElements[i].textContent = valueString[i];
}
};

function startCounter(){
  const value = parseInt(valueInput.value,10);
  if(isNaN(value)|| value < 1 || value > 99999){
    alert('Please enter a valid value (1-99999)');
    return;
  }
  let currentValue = 0;
  intervalId = setInterval(()=>{
if(currentValue < value){
  currentValue++;
  updateCounter(currentValue)
}else {
  clearInterval(intervalId);
}
  },1000)
};

function stopCounter(){
  clearInterval(intervalId);
}


function resetCounter(){
  location.reload();
}

startButton.addEventListener('click',startCounter);
stopButton.addEventListener('click', stopCounter);
resetButton.addEventListener('click', resetCounter);
});



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///.NOTES:-

//1.
//value.toString().padStart():-
 //This line converts the value to a string.
 //This is necessary because the `.padStart()` method is a string method and it can only be used on `strings`.

//2.
//`.padStart()`:-
 //The `.padStart()` is a string method,
 //It is used to pad the beginning of a string with specified character.
 // In this case '0' until the string reaches a certain length (in this case, 5 characters).
//5 is the target length. It means that if the string has fewer than 5 characters, it will be padded with '0' characters at the beginning until it reaches a length of 5.
//'0' is the character used for padding. In this case, it's the digit '0'. If the string were, for example, '123', after applying .padStart(5, '0'), it would become '00123'

//3.function updateCounter(value)
//digitElements[i]:-
 //This accesses an element in the digitElements array.
//digitElements is an array of HTML elements representing the individual digits of your counter,
//(as identified by their IDs: digit1, digit2, ..., digit5).
//`i` is a variable that represents the current index in the loop. 
//In this context, it will be a number from 0 to 4, corresponding to the five digits of your counter.Because 4 < 5;
//= valueString[i];: This sets the text content of the selected element to be the i-th character of the valueString.
//valueString[i] accesses the i-th character of the string. 
//Since JavaScript uses 0-based indexing, valueString[0] refers to the first character, valueString[1] to the second character, and so on.
// .textContent:-
//This is a property of an HTML element that represents the text content within that element. 
//It can be used to both read and set the text content.

//4.function startCounter():-
//const value = parseInt(valueInput.value, 10);
//valueInput.value:-
//This accesses the value property of the valueInput element.
//valueInput is a reference to an HTML input element, and 
//`.value` is a property of input elements that holds the current value entered by the user.
//parseInt(...): This is a JavaScript function that parses a string and returns an integer.
//The first argument of parseInt is the string to be parsed.
//In this case, it's valueInput.value, which is the current value entered by the user.
//The second argument of parseInt is the radix or base of the numeral system to be used. 
//The radix specifies the base in mathematical numeral systems. 
//In this case, 10 means base 10, which is the decimal system.
//For example, if the user entered '42', parseInt('42', 10) would return the number 42.
//const value = ...;: This line defines a new variable named value and assigns it the result of the parseInt operation.

//isNaN(value): This checks if the value is not a valid number.
// isNaN stands for "is Not a Number". It's a JavaScript function that returns true if the provided value cannot be converted into a number, and false otherwise. For example, isNaN('hello') returns true because 'hello' is not a valid number.
// In this context, it's used to make sure the user has entered a valid numerical value in the input field. If value is not a number, the condition will evaluate to true.
// value < 1: This checks if the value is less than 1.
// This part of the condition ensures that the entered value is greater than or equal to 1. If value is less than 1, the condition will evaluate to true.
// value > 99999: This checks if the value is greater than 99999.
// This part of the condition ensures that the entered value is less than or equal to 99999. If value is greater than 99999, the condition will evaluate to true.

// let currentValue = 0;: This initializes a variable named currentValue and sets it to 0. This variable will keep track of the current value of the counter.
// intervalId = setInterval(function() { ... }, 1000);: This sets up a repeating interval, where the function inside the setInterval will be executed every 1000 milliseconds (1 second).
// setInterval is a JavaScript function that repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.
// In this case, it's used to create a timer that will increment the counter value.
// The function inside setInterval:
// if (currentValue < value) { ... }: This condition checks if the currentValue is less than the desired value. If so, it means we haven't reached the target value yet.
// currentValue++;: If the condition is met, currentValue is incremented by 1. This simulates the counting up process.
// updateCounter(currentValue);: After incrementing the currentValue, it calls the updateCounter function to update the display with the new value.
// else { clearInterval(intervalId); }: If the condition is not met (i.e., currentValue is now greater than or equal to value), it clears the interval using clearInterval. This stops the counting process.

// document.addEventListener('DOMContentLoaded', function() { ... }); is an event listener in JavaScript. It's used to execute a function once the DOM (Document Object Model) content is fully loaded and ready for manipulation.
//document: This refers to the HTML document that is currently loaded in the browser.
//`.addEventListener(...)`: 
// This is a method of the document object that allows you to specify a function to be executed when a certain event occurs.

//'DOMContentLoaded': 
//This is the event type being listened for. 
//It fires when the initial HTML document has been completely loaded and parsed, 
//without waiting for stylesheets, images, and subframes to finish loading.
//This event is especially useful because it allows you to start executing JavaScript code as soon as the basic structure of the page is ready, without waiting for all external resources.
```

## Project Eight:-
## 8.Stopwatch -
## Code solution:-
```javascript

let miliSeconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0
let toShowOnDisplay = document.querySelector(".timer-display");
let startButton = document.querySelector('#start-timer');
let stopButton = document.querySelector('#stop-timer');
let resetButton = document.querySelector('#reset-timer');
let intervalId;


//Start Button functioning:-
startButton.addEventListener('click',function(){
    if(intervalId){
        clearInterval(intervalId);
    }
intervalId = setInterval(updateTimer,10) //10 seconds = 10,000 miliSeconds
});

function updateTimer(){
    //console.log("It works"); 
miliSeconds += 10;
if(miliSeconds === 1000){ //miliseconds is equal to 1000 , however 1000 miliseconds = 1 second.
    miliSeconds = 0;   //Resetting the miliseconds counter by 0.
    seconds++;         //Seconds increment by 1.

    if(seconds === 60){ //when the seconds is indeed 60 or equals to 60,However 60 seconds = 1 minute.
        seconds = 0;  //Resetting the seconds back to 0.
        minutes++;  //Minutes increment by 1.
    }

    if(minutes === 60){ //when the minutes is indeed 60 or equals to 60,However 60 minutes = 1 hour.
        minutes = 0;
        hours++; //Hours increment by 1 , it measn one hour has passed.
    }
}  
let h = String(hours).padStart(2,"0");
let m = String(minutes).padStart(2,"0");
let s = String(seconds).padStart(2,"0");
let ms = String(miliSeconds).padStart(3,"0");

toShowOnDisplay.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
};

//Stop Button functioning:-
stopButton.addEventListener('click',function(){
clearInterval(intervalId);
})

//Reset button functioning:-
resetButton.addEventListener('click',function(){
   clearInterval(intervalId);
   [miliSeconds,seconds,minutes,hours] = [0,0,0,0];
   toShowOnDisplay.innerHTML = "00 : 00 : 00 : 000";
})


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///.NOTES:-
//1.Variable Declarations:
// miliSeconds, seconds, minutes, hours: These variables are used to keep track of the time components (milliseconds, seconds, minutes, and hours) of the timer. They are all initialized to zero.
// toShowOnDisplay: This variable is used to store a reference to an HTML element with the class name "timer-display". It will be used to display the timer.
// startButton, stopButton, resetButton: These variables are used to store references to HTML buttons with the IDs "start-timer", "stop-timer", and "reset-timer" respectively.
// intervalId: This variable will be used to store the ID returned by setInterval, allowing us to later clear the interval.

//2.Start Button Event Listener:
// An event listener is attached to the "startButton" element. When clicked, it checks if intervalId is not null (indicating that a timer is already running). If so, it clears the existing interval. Then, it sets a new interval with setInterval(updateTimer, 10) which calls the updateTimer function every 10 milliseconds.

//3.updateTimer Function:
// This function is called by the interval set by the start button.
// It increments miliSeconds by 10 (since it's called every 10 milliseconds).
// If miliSeconds reaches 1000, it resets to zero and increments seconds by 1. If seconds reaches 60, it resets to zero and increments minutes by 1. If minutes reaches 60, it resets to zero and increments hours by 1.
// It then formats the time components (hours, minutes, seconds, and miliSeconds) into strings and ensures they are always two digits long using padStart.
// Finally, it updates the toShowOnDisplay element's innerHTML with the formatted time.

//4.Stop Button Event Listener:
// When the "stopButton" is clicked, it clears the interval using clearInterval(intervalId), effectively stopping the timer.

//5.Reset Button Event Listener:
// When the "resetButton" is clicked, it first clears the interval if it's running. Then, it resets all time components to zero and updates the display to "00 : 00 : 00 : 000".

```
## Project Nine:-
## 9.CountryguideApp -
## Code solution:-
```javascript

let searchBtn = document.getElementById('search-btn');
let countryInp = document.getElementById('country-input');
let resetBtn = document.getElementById('reset-btn');


searchBtn.addEventListener('click',()=>{
    let countryName = countryInp.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`; //https://restcountries.com/ API
//console.log(`let's check if it is working or not ${finalURL}`); //Yes it is working on the browser.
fetch(finalURL)
.then((response)=>{
 return response.json(); // You need to `return` the promise here.
})
.then((data)=>{
// console.log(data[0]);
// console.log(data[0].flags.svg);
// console.log(data[0].capital[0]);
// console.log(data[0].name.common);
// console.log(data[0].continents[0]);
// console.log(Object.keys(data[0].currencies)[0]);
// console.log(data[0].population);
// console.log(Object.values(data[0].languages).toString().split(",").join(", "));
result.innerHTML = `
<img src="${data[0].flags.svg}" class="flag-img">
<h2>${data[0].name.common}</h2>
<div class= "wrapper>
div class="data-wrapper">
<h4>Capital: </h4>
<span>${data[0].capital[0]}</span>
</div>
</div>
<div class= "wrapper>
div class="data-wrapper">
<h4>Continent: </h4>
<span>${data[0].continents[0]}</span>
</div>
</div>
<div class="wrapper">
<div class="data-wrapper">
    <h4>Population:</h4>
    <span>${data[0].population}</span>
</div>
</div>
<div class="wrapper">
<div class="data-wrapper">
    <h4>Currency:</h4>
    <span>${data[0].currencies[Object.keys(data[0].currencies)].name
    } - ${Object.keys(data[0].currencies)[0]}</span>
</div>
</div>
<div class="wrapper">
<div class="data-wrapper">
    <h4>Common Languages:</h4>
    <span>${Object.values(data[0].languages).toString().split(",").join(", ")}</span>
</div>
</div>
`
})
.catch(() => {
    if (countryName.length == "") {
      result.innerHTML = `<h3>The input field cannot be empty</h3>`;
    } else {
      result.innerHTML = `<h3>Please enter a valid country name.</h3>`;
    }
  });
});

resetBtn.addEventListener('click',()=>{
    location.reload();
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///.NOTES:-

//1.Element Selection:-
//This code snippet selects three elements from the DOM using their IDs: search-btn, country-input, and reset-btn.

//2.Event Listener (Search Button):-
//This sets up an event listener that listens for a click event on the element with the ID search-btn. When clicked, it executes the arrow function.

//3.Fetching Data:-
//This code handles the process of making an HTTP request to the URL generated using the countryName variable. 
//It uses the Fetch API to make a GET request.
//It first sets up the URL using a template string and the value of countryInp.
//It then uses .fetch() to send the GET request.
//When a response is received, it converts it to JSON using .json(). This also returns a promise.
//The second .then() block handles the JSON data returned from the response.
//The .catch() block handles any errors that occur during the fetch process.
//This block is responsible for handling the data received from the API after it has been converted to JSON.

//4.Updating the DOM with Response Data:-
//This code is updating an element in the DOM with the ID result by setting its innerHTML property. It uses a template string to create an HTML structure that will display information about the selected country.

//5.Error Handling:-
//This block handles errors that may occur during the fetch process. 
//In this case, it checks if the countryName is empty or if the request to the API fails.

//6.Event Listener (Reset Button):-
//This sets up an event listener that listens for a click event on the element with the ID reset-btn.
// When clicked, it reloads the page.

```
## Project Ten:-
## 10.DictionaryApp -
## Code solution:-
```javascript
//1.Element Selection:-
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"; //API url
const toShowResult = document.getElementById('result');
const searchBtn = document.getElementById('search-btn');

//2.Event Listener (Search Button):-
searchBtn.addEventListener('click',()=>{
let userInput = document.getElementById('inp-word').value;
// console.log(userInput); Yes its working in the console.
fetch(`${url}${userInput}`)
.then((response)=>{
 return response.json();
})
.then((data)=>{
console.log(data); //Yes its working in the console.
toShowResult.innerHTML = generateTemplate(userInput,data);

})
.catch(handleErrors);

///1.Separate Functions for Template Generation:
// Consider separating the template generation logic into its own function for better organization
function generateTemplate(userInput, data) {
    return `
    <div class="word">
        <h3>${userInput}</h3>  
    </div>
    <div class="details">
    <p>${data[0].meanings[0].partOfSpeech}</p>
    <p>/${data[0].phonetic}/</p>
    </div> 
    <p class="word-meaning">${data[0].meanings[0].definitions[0].definition}</p>  
    <p class="word-example">${data[0].meanings[0].definitions[0].example || ""}</p>  
    `;
}

///2.Error Handling:-
//It's a good practice to handle errors properly, 
//especially when working with APIs. 
//You can create a separate function to handle errors and call it in the .catch block.
function handleErrors(error) {
    toShowResult.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
    console.error(error);
}

});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///.NOTES:-

//1.Element Selection:-
//It defines a constant url which contains the URL of a dictionary API.
//It selects two HTML elements with the IDs result and search-btn using document.getElementById(). These elements are likely buttons or containers that will be manipulated by the code later.

//2.Event Listener (Search Button):-
//It adds an event listener to the searchBtn element, which listens for a 'click' event.
//When the button is clicked, it retrieves the value entered by the user in an input field with the ID inp-word.

//3.Fetching Data from API:-
//It uses fetch() to make a GET request to the API endpoint formed by concatenating url and userInput.
//It handles the response using Promises. If the response is successful, it converts it to JSON format and logs it in the console.

//4.Handling API Response:-
//After converting the response to JSON, it processes the data in the second .then() block. It logs the data to the console.
//It then calls a function generateTemplate() and passes userInput and the received data as arguments

//5.Template Generation:-
//generateTemplate() is a function that takes userInput and data as arguments and returns an HTML template string.
//This template string seems to be generating HTML code for displaying information about a word, including its part of speech, phonetic transcription, definition, and example.

//6.Error Handling:-
//There's a function named handleErrors() which takes an error as an argument.
//In case of an error, it updates the HTML content inside the element with the ID result to display an error message.
//It also logs the error to the console.


//This code is a basic example of how to interact with an API in JavaScript,
//handle the response, and dynamically update a webpage with the received data. 
//Additionally, it includes error handling to deal with potential issues when making the API request.

```

## Project Eleven:-
## 11.Feedback- Form Validation:-
## Code solution:-
```javascript
//Variable declarations:-(To display error)
let nameError = document.getElementById('name-error');
let phoneError = document.getElementById('phone-error');
let emailError = document.getElementById('email-error');
let messageError = document.getElementById('message-error');
let submitError = document.getElementById('submit-error');

//Function declarations:-
//1.
function validateName(){
    let name = document.getElementById('contact-name').value;

    if(name.length == ""){
nameError.innerHTML = "Name is required";
return false;
    }

if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML = "Fullname is required"
    return false;
}
    
    else{
        nameError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        return true;
    }
};

//2.
function validatePhone(){
    let phone = document.getElementById('contact-phone').value;

    if(phone.length == ""){  //Whether the phone number is empty it will display the "Phone no is required".
        phoneError.innerHTML = "Phone no is required";
        return false;
    }
    if(phone.length !== 10){ //When the length of the phone number digits is not eqaul to 10 , there will be display "Phone no should be in 10 digits".(`using` strict inequality operator !==)
        phoneError.innerHTML = "Phone no should be in 10 digits";
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) { //Checking:-The Phone number is between 0 to 9 and for 10 characters , there will be display "Only digits please".  
        phoneError.innerHTML = "Only digits please";
        return false;
    }
    else{
        phoneError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        return true;
    }
}

//3.
 function validateEmail(){
    let email = document.getElementById('contact-email').value; //It will store the value, written in the input of variable called `email` 

    if(email.length == ""){
        emailError.innerHTML = "Email is required";
        return false;
            };
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){ //It should contain alphabet and it may contain `.` or `_` and it can also contain any numeric and thereafter `@` thereafter some aplhabets and then `.` another alphabet it could be two,three or four characters.
        emailError.innerHTML = "Email Invalid";
        return false;
    }
    else{
       emailError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        return true;
    }
 };

 //4.
 function validateMessage(){
let message = document.getElementById('contact-message').value;
let requiredCharacters = 30; //30 characters is required.
let remainingCharacters = requiredCharacters - message.length; //left (remaining) characters while user typing - message (How much characters is left)
 
if(message == ""){
    messageError.innerHTML = "Message is required"
    return false;
 }
if(remainingCharacters > 0){
    messageError.innerHTML = remainingCharacters + ' more characters are required';
    return false;
}
    messageError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;

 }

 //5.
 function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = "To submit it, please fix the error."
        setTimeout(()=>{
            submitError.style.display = "none";
        },3000)
        return false;
}
else {
    clearForm(); // Assuming you have a clearForm() function
        setTimeout(() => {
            alert("Form submitted successfully");
            document.getElementById('myForm').submit(); // Assuming your form has the ID 'myForm'
        }, 0);
        return true;
}
};

//6.
function clearForm(){
    document.getElementById('myForm').reset(); // Assuming your form has the ID 'myForm'
    let checkIcons = document.querySelectorAll('.fa-solid.fa-circle-check');
    
   checkIcons.forEach((icon)=>{
icon.parentNode.removeChild(icon)
   })
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///.NOTES:-

//1.Variable Declarations:-
//nameError, phoneError, emailError, messageError, and submitError are,
//variables that hold references to specific elements in the HTML document.
//These elements are likely used to display error messages.

//2.Function validateName():-
// This function is responsible for validating the input for the "name" field in the form.
// It retrieves the value of the "contact-name" input field.
// If the field is empty, it sets an error message in the nameError element and returns false.
// If the name does not match a specific pattern (a space-separated full name), it sets a different error message.
// If the input is valid, it sets a checkmark icon in the nameError element and returns true.

//3.Function validatePhone():-
// This function is responsible for validating the input for the "phone" field in the form.
// It retrieves the value of the "contact-phone" input field.
// It checks for various conditions such as empty field, length not equal to 10, and whether it consists only of digits.
// It updates the phoneError element accordingly with error messages or a checkmark icon.
// It returns true if the input is valid, and false otherwise.

//4.Function validateEmail():-
// This function is responsible for validating the input for the "email" field in the form.
// It retrieves the value of the "contact-email" input field.
// It checks for conditions like an empty field and a specific email pattern using a regular expression.
// It updates the emailError element accordingly with error messages or a checkmark icon.
// It returns true if the input is valid, and false otherwise.

//5.Function validateMessage():
// This function is responsible for validating the input for the "message" field in the form.
// It retrieves the value of the "contact-message" input field.
// It checks for conditions like an empty field and whether the message has a minimum required character count.
// It updates the messageError element accordingly with error messages or a checkmark icon.
// It returns true if the input is valid, and false otherwise.

//6.Function validateForm():-
// This function is called when the form is submitted.
// It calls the individual validation functions and checks if any of them return false. 
// If any of them do, it displays an error message and returns false.
// If all validations pass, it assumes there's a clearForm() function  to reset the form, 
// and then it alerts a success message and submits the form.

//7.Function clearForm():-
// This function is used to reset the form. 
// It assumes there's a form with the ID 'myForm'.
// It also removes any checkmark icons (assuming they are used to indicate successful validation).
```
## Project Twelve:-
## 12.Create-account - Form Validation:-
## Code solution:-
```javascript
//1.Variable declarations:-
let form = document.getElementById('myForm');
let nameError = document.getElementById('name-error');
let emailError = document.getElementById('email-error');
let passwordError = document.getElementById('password-error');
let passwordTwoError = document.getElementById('passwordTwo-error');
let submitError = document.getElementById('submit-error');

//2.An event listener:-
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from actually submitting

    let isUsernameValid    = validateUsername();
    let isEmailValid       = validateEmail();
    let isPasswordOneValid = validatePasswordOne();
    let isPasswordTwoValid = validatePasswordTwo(document.getElementById('account-password').value.trim());

    if (isUsernameValid && isEmailValid && isPasswordOneValid && isPasswordTwoValid) {
        // All validations passed, proceed with form submission
        form.submit() 
    } 
    else { // Or do something else
    submitError.style.display = "block";
     submitError.innerHTML = "To submit it, please fix the error"
     setTimeout(()=>{
submitError.style.display = "none"
     },3000)
       
    }
});

//3.Function declarations:-
function validateUsername(){
    let userName = document.getElementById('account-username').value.trim(); //`.trim()`method or a function  is used to remove whitespaces.

if(userName === ""){
    nameError.innerHTML = "Username is required"
    return false;
}
else if(!userName.match(/^[A-Za-z]+[@$*#_]+\d+$|^[A-Za-z]+\d+[@$*#_]+$/)){
    nameError.innerHTML = "Username Invalid"
    return false;
}
else{
    nameError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;
}
};


function validateEmail(){
    let emailId = document.getElementById('account-email').value.trim();  
if(emailId === ""){
    emailError.innerHTML = "Email is required";
    return false;
}
else if(!emailId.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    emailError.innerHTML = "Email Invalid"
    return false;
}
else{
    emailError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true; 
}
};

function validatePasswordOne(){
    let passwordOne = document.getElementById('account-password').value.trim(); 
   if(passwordOne === ""){
    passwordError.innerHTML = "Password is required";
    return false;
   }

   else if(!passwordOne.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$*#_])[A-Za-z\d@$*#_]{8,}$/)){
passwordError.innerHTML = "Password must be at least 8 characters"; 
   return false;
}
 
   else{
    passwordError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    return true;
   }
};

function validatePasswordTwo(passwordOne){
    let passwordTwo = document.getElementById('account-passwordTwo').value.trim();
    if(passwordTwo === ""){
        passwordTwoError.innerHTML = "Password again required"
    return false;
    }
   if(passwordOne !== passwordTwo){
passwordTwoError.innerHTML = "Password does not match"
return false;
    }
    else{
        passwordTwoError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        return true;
    }
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///.NOTES:-
//1.Variable Declarations:
// You've declared variables to store references to various elements in your HTML form. These variables will be used to manipulate the elements in your JavaScript code.

//2.Event Listener:
// You've attached an event listener to the form element with the id myForm. This event listener listens for a form submission.
// When the form is submitted, the function provided as the second argument is executed.
// event.preventDefault() is used to prevent the form from actually submitting (which would cause a page refresh).

//3.Form Submission Handling:
// Inside the event listener function, you're calling four validation functions (validateUsername, validateEmail, validatePasswordOne, validatePasswordTwo).
// These functions check the validity of the input fields and return true if the input is valid, or false if it's not.
// If all validations pass, the form is submitted. Otherwise, an error message is displayed.

//4.Error Handling:
// If any of the validations fail, an error message is displayed to the user. The error messages are set in the respective error elements (e.g., nameError, emailError, etc.).
// If there is a validation error, the form submission is prevented.

//5.Timeout Function:
// If there is a validation error, a submit error message is displayed briefly, and then it disappears after 3 seconds.

//6.Validation Functions:
// validateUsername: Checks if the username is empty or doesn't match a specific pattern. Provides appropriate error messages.
// validateEmail: Checks if the email is empty or doesn't match a specific pattern. Provides appropriate error messages.
// validatePasswordOne: Checks if the password is empty or doesn't match a specific pattern. Provides appropriate error messages.
// validatePasswordTwo: Checks if the confirmation password matches the original password. Provides appropriate error messages.

// 7.function validateUsername()
//!userName.match(/^[A-Za-z]+[@$*#_]+\d+$|^[A-Za-z]+\d+[@$*#_]+$/)
    //0.The `!` Logical not operator  in front of `userName` means "not". So, this part is saying "if the username does not match the specified pattern..."
    //1.!userName.match():This line of code is using a regular expression( a pattern match mechanism) to check if the `userName` follows a certain format.
    //2.`/^[A-Za-z]+[@$*~_]+\d+$|^[A-Za-z]+\d+[@$*#_]+$/` This is the regular expression pattern that the userName is being compared against.
    //3.`^` This symbol ,means the start of the string.
    //4.`[A-Za-z]+`This part means the username should start one or more letters (both upper and lower case are allowed)
    //5.`[@$*#_]+`This part means that there should be one or more special characters among `@` `$` `*` `#` `_`.
    //6.`\d+`This part means that there should be one or more digits (0-9).
    //7.`$` This part means that the end of the string.
    //8.`|` This is an operator which means that either the first pattern before it or the second pattern after it should match.


// Basically This code handles form submission,
// performs validations, 
//and provides user feedback for any errors,
//encountered during the submission process. 
//If all validations pass, the form is submitted.

```
## Project Thirteen:-
## 13.To-Do list App:-
## Code solution:-
```javascript

//.Variable Declarations:-
const inputBox = document.getElementById('input-box');
const addButton = document.getElementById('add-btn');
const listContainer = document.getElementById('list-container');
const showError = document.getElementById('error');


///.Function declarations:-
function addTask(){
    if(inputBox.value === ""){
        // alert("You must write something!");
        showError.style.display = "block"
        showError.innerHTML = "You must write something!";
        setTimeout(()=>{
showError.style.display = "none"
        },2000)
      
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7"; //It represents the Unicode character U00D7, which is the multiplication sign (×).
        li.appendChild(span);
    }
 inputBox.value = ""; 
saveData()
};

///.EventListeners:-
//1:-
addButton.addEventListener('click',addTask);

//2:-
listContainer.addEventListener('click',(event)=>{ //`event` is used as a parameter in an arrow function that serves as an event handler,behaves as a local variable.
if(event.target.tagName === "LI"){
    //console.log(event); //To check in the console if its working or not.
event.target.classList.toggle("checked");
    saveData() //When the tasks is checked the saveData() function will be called.
}
else if(event.target.tagName === "SPAN"){
event.target.parentElement.remove();
saveData()  //When the tasks is unchecked and wants to remove  the saveData() function will be called.
}
},false);


///.Function declarations:-

//The function `saveData` represents a feature in this app,
//that is when we close the browser or reload or refresh the browser,
//the tasks we have added it remains as it is,it will be saved automatically.
//`saveData() function` save the data in the localStorage and update the content in the browser.
function saveData(){
localStorage.setItem("data",listContainer.innerHTML); //Web API.
};

//The function `showTask` displays the data Whenever we open the website again.
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");

};
showTask();




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///.NOTES:-


//1.createElement():-
//The `createElement` method is a fundamental part of the document object model(DOM) in Javascript.
//its used to dynamically it creates a new HTML element.


//2.appendChild():-
//The `appendChild` method in javascript used to append a node as the last child of a specific parent node.
//Its commonly used to dynamically add new elements to a web page.

//3.parentElement:-
//The `parentElement` is a property refers to the parent element of a given DOM node.

//4.remove():-
//The `remove` method in javascript used to remove an element from the DOM ( Document object Model).

//5.localStorage:-
//The localStorage is a web API in javascript that allows you to store key-value pairs in a web browser.
//Both the 'keys' and 'values' stored are always strings. 
//Even if you store integers or other.
//primitive values, they all will be converted to strings.

//6.setItem():-
//The `setItem()` method of `localStorage`API is used to store data Under a specified key.
// Basic syntax - localStorage.setItem(key, value);

//7.getItem():-
//The `getItem()` method of `localStorage` API in javascript,
//It allows you to retrieve the value associated with a specific key from the browser's local storage.



//1.Variable Declarations:
// inputBox, addButton, listContainer, and showError are constants declared using const.
// document.getElementById('input-box') retrieves an HTML element with the id attribute of 'input-box' from the DOM (Document Object Model).
// document.getElementById('add-btn') retrieves an HTML element with the id attribute of 'add-btn'.
// document.getElementById('list-container') retrieves an HTML element with the id attribute of 'list-container'.
// document.getElementById('error') retrieves an HTML element with the id attribute of 'error'.

//2.Function Declarations:
// addTask is a function that gets executed when the user clicks the "Add" button (addButton).
// It first checks if the value of inputBox is an empty string.
// If it is empty, it displays an error message for 2 seconds using a timeout function and sets the showError element's style to be visible (block).
// If the input is not empty, it creates a new li element (representing a list item).
// It sets the innerHTML of the li element to the value of inputBox.
// The li element is then appended to the listContainer.
// It creates a span element and sets its innerHTML to "\u00d7" which represents the Unicode character U+00D7 (multiplication sign).
// This span element is then appended to the li element.
// Finally, it clears the input box value, and calls the saveData function


//3.More Function Declarations:
// saveData is a function that saves the current state of the list in the browser's localStorage.
// It uses localStorage.setItem to store the HTML content of listContainer with the key "data".


// showTask is a function that retrieves the saved data from localStorage and displays it on the page.
// It uses localStorage.getItem to retrieve the HTML content associated with the key "data" and sets it as the inner HTML of listContainer.

//4.Summary:-
// This code represents a simple to-do list application:
// It uses JavaScript to manipulate the DOM, responding to user interactions.
// Tasks are added by typing into an input box and clicking an "Add" button.
// If the input is empty, it displays an error message.
// Each task is represented as an `LI` list element with a delete button (SPAN element).
// Tasks are saved in the browser's localStorage, so they persist even when the page is reloaded or closed.
// When the page is loaded, the saved tasks are retrieved and displayed.

```
## Project Fourteen:-
## 14.Analog-Clock:-
## Code solution:-
```javascript

///.Clock calculation to move handles and for clock functioning:-
///1.Hours:-
//1.In 12 hours Angle is 360 deg.
//2.1 hour = 360/12 = 30 deg.
//3.h hours = 30 deg multiply by  hours + m/2.

///2.Minutes:-
//60 min = 360 deg
//1 min = 360/60 =  6deg
//m min = 6 multiply by minutes

///3.Seconds:-
//60 sec = 360deg
//1sec = 360/60 = 6deg
//s secs = 6 multiply by seconds
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///.Javascript code below:-

//.Variable declarations:-
//.Handles of the analog clock - Hour ,Minute and Seconds.
const hourHandle = document.getElementById('hour-hand');
const minuteHandle = document.getElementById('min-hand');
const secondsHandle = document.getElementById('sec-hand');


function displayTime(){  
let date = new Date()

//Getting Hours , Minutes and Seconds and stored in the variable.
let hour    = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

//Handles rotation.
let hourRotation     = 30 * hour + minutes/2;
let minutesRotation  = 6  * minutes;  
let secondsRotation  = 6  * seconds;

//Handles move and their functioning:-
hourHandle.style.transform = `rotate(${hourRotation}deg)`;
minuteHandle.style.transform = `rotate(${minutesRotation}deg)`;
secondsHandle.style.transform = `rotate(${secondsRotation}deg)`;

//Store the current time in localStorage:-
localStorage.setItem('lastKnownTime',JSON.stringify({ hour, minutes, seconds }));
};
//Set clock hands every second.
setInterval(displayTime, 1000); //1000 miliseconds = 1 second.

function restoreLastKnownTime() {
    // Retrieve last known time from local storage
    const lastKnownTime = JSON.parse(localStorage.getItem('lastKnownTime'));

    if (lastKnownTime) {
        const { hour, minutes, seconds } = lastKnownTime;

        let hourRotation     = 30 * hour + minutes/2;
        let minutesRotation  = 6  * minutes;  
        let secondsRotation  = 6  * seconds;

        hourHandle.style.transform = `rotate(${hourRotation}deg)`;
        minuteHandle.style.transform = `rotate(${minutesRotation}deg)`;
        secondsHandle.style.transform = `rotate(${secondsRotation}deg)`;
    }
}

// Check if there is a last known time and restore it.
restoreLastKnownTime();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///.NOTES:-

//1.new Date():-
//In JavaScript, new Date() is used to create a new instance of the Date object, which represents a specific point in time. This can be the current date and time or a specific date and time you provide as arguments.
//Once you have a Date object, you can access various components of the date and time, like year, month, day, hours, minutes, seconds, 
//Keep in mind that when you create a `Date` object without any arguments, it will use the current date and time based on the system it's running on.

//2.In JavaScript, 
// getHours(), 
// getMinutes(), 
//and getSeconds() are methods of the Date object. 
//They allow you to retrieve the hour, minute, and second components of a specific Date object, respectively.

//3.JSON.stringify() is a method in JavaScript that converts a JavaScript object or value to a JSON (JavaScript Object Notation) string. This is useful when you want to send data to a server or store it in a format that can be easily saved or transmitted.

//4.JSON.parse() is a JavaScript method that allows you to convert a JSON (JavaScript Object Notation) string into a JavaScript object. This is useful when you receive data from a server as a JSON string and need to work with it as a JavaScript object.

// displayTime is a function that updates the clock hands based on the current time. 
// It first creates a new Date object to get the current date and time. 
// Then it extracts the hours, minutes, and seconds. 
// The rotations for the hour, minute, and second hands are calculated based on these values. 
//The style.transform property is then used to rotate the corresponding clock hands.
// After updating the clock, the current time (in hours, minutes, and seconds) is stored in the browser's local storage using localStorage.setItem.

//restoreLastKnownTime is a function that checks if there's a last known time stored in local storage. 
//If it exists, it retrieves the values (hours, minutes, and seconds) and then recalculates the rotations for the clock hands. 
//Finally, it updates the clock hands' positions.

//setInterval is used to call the displayTime function every 1000 milliseconds (1 second). This ensures that the clock hands are updated every second to reflect the current time.
// Then code calls restoreLastKnownTime to check if there's a last known time saved in local storage and restore it.

```

## Project Fifteen:-
## 15.Weather-App:-
## Code solution:-
```javascript

 ///.Variables declaration:-
    const searchBox = document.querySelector('.search input');
    const searchButton = document.querySelector('.search button');
    const weatherIcon = document.querySelector('.weather-icon');
    const apiKey = "d7475ed17363e43099f1c0ac4e8036d6";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
    const backgroundImage = new Image();
     backgroundImage.src = 'https://source.unsplash.com/1600x900/?landscape';


    ///.Function declaration:-
    async function checkWeather(city){
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        //To check the condition if the cityname is valid or not:-
        //Error message for Suppose we enter the wrong city name or invalid city name.
        if(response.status == 404 ){
            document.querySelector('.error').style.display = "block";
            setTimeout(()=>{
                document.querySelector('.error').style.display = "none";
},2000)
        }
        else{
      let data = await response.json();
      console.log(data);
    let { name } = data;
     let { description } = data.weather[0];
      let { temp, humidity } = data.main;
     let { speed } = data.wind;

      document.querySelector('.city').innerHTML = `Weather in ${name}`;

      document.querySelector('.temperature').innerHTML = Math.round(temp)+'°c';

      document.querySelector('.description').innerHTML = `${description}`;

      document.querySelector('.humidity').innerHTML = `Humidity: ${humidity}%`;

      document.querySelector('.wind').innerHTML = `Wind speed: ${speed} km/h`;
      
      document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + city + "')";

    
//Update images according to the weather condition with the check conditions:-
if(data.weather[0].main == "Clouds"){
weatherIcon.src = "Images/clouds.png";
}
else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "Images/clear.png";
}
else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "Images/drizzle.png";
}
else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "Images/mist.png";
}

else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "Images/rain.png";
}
      //To clear the input box.
      searchBox.value = "";
}

};
 

///.Event listeners:-

//1.When pressing the `Enter` Key on keyboard:-
searchBox.addEventListener('keyup',(event)=>{
if(event.key == "Enter"){
    checkWeather(searchBox.value);
}
});

//2.When clicking the search-icon button:-
searchButton.addEventListener('click',()=>{
        checkWeather(searchBox.value);
    })
  
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///.NOTES:-

//1.searchBox, searchButton, and weatherIcon are variables that store references to specific elements in your HTML document using querySelector.
// apiKey and apiUrl are constants that hold your OpenWeatherMap API key and the base URL for the weather API.
// backgroundImage is an Image object that is preloaded with a default landscape image from Unsplash.

//2.This function is responsible for fetching weather data from the OpenWeatherMap API based on a provided city name.
// It starts by making an asynchronous fetch request to the API.
// If the response status is 404 (city not found), it displays an error message for 2 seconds, then hides it.
// Otherwise, it processes the response data.
// It extracts relevant weather information (name, description, temperature, humidity, and wind speed).
// It updates various elements in your HTML document with this information.
// It sets the background image to a city-specific image using Unsplash.
// It updates the weather icon based on the weather condition.
// Finally, it clears the search box.

//3.The first event listener triggers the checkWeather function when the Enter key is pressed in the search box.
// The second event listener triggers the checkWeather function when the search button is clicked.

```




