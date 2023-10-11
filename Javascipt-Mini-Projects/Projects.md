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
//And with the callBack function as a paramter(local variable) `event`.
form.addEventListener('submit',function(event){
//preventDefault:- method is used to stop the default behavior of an element, 
 //as a form submission or a link click, from occurring.
event.preventDefault();

//queryselector for selecting height with an id and using `.value` becuase of an input to get values.
//parseInt:- because the values will get into a string so `parseInt()` method convert them into the numbers.
const height  = parseInt(document.querySelector('#height').value);
const weight  = parseInt(document.querySelector('#weight').value);
const results = document.querySelector('#results');

//If-else if conditions to check the values for height and weight:-
if(height === "" || height < 0 || isNaN(height)){
//InnerHtml for values
results.innerHTML = `Please provide a valid height! ${height}`;
}else if(weight === "" || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please provide a valid weight! ${weight}`;
}
else{
//The formula for BMI is weight in kilograms divided by height in meters squared.
//toFixed() method for 2 decimal value.
const bmi = (weight/((height*height)/10000)).toFixed(2);

//To show the results:-
results.innerHTML = `<span>Your Bmi is : ${bmi} </span>`;
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