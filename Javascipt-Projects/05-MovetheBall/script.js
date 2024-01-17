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