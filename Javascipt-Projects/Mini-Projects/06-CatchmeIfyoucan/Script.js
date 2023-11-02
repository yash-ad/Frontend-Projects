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