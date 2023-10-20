## Projects Related to DOM:-

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



