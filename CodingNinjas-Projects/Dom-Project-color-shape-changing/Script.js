//First of all lets define some variables:-

//Arrays:-
const colors = ["purple","red","blue","green"];
const shapes = ["circle","square"];

//fetchingElements:-
const gameArea = document.getElementById("gamearea");
const shapeElement = document.getElementById("shape");
const changeColorButton = document.getElementById("changeColor");
const changeShapeButton = document.getElementById("changeShape");


//functions:-
function getRandomIndex(arr) {
    return Math.floor(Math.random() * arr.length);
}
//This JavaScript code defines a function called getRandomIndex that takes an array (arr) as input. 
//The function's purpose is to generate and return a random index within the range of valid indices for the input array.

// This JavaScript code defines a function called getRandomIndex that takes an array (arr) as input. The function's purpose is to generate and return a random index within the range of valid indices for the input array.

// Here's what the code does step by step:

// Math.random(): This function generates a random decimal number between 0 (inclusive) and 1 (exclusive).

// arr.length: This property of the array gives you the number of elements in the array.

// Math.floor(...): This function rounds down a decimal number to the nearest integer. It's used here to make sure the decimal value generated in the next step is converted to an integer index.

// Math.random() * arr.length: This part multiplies the random decimal value by the length of the array. It results in a random number between 0 (inclusive) and the length of the array (exclusive).

// The entire expression Math.floor(Math.random() * arr.length) generates a random integer index within the valid range of indices for the array.

// So, when you call getRandomIndex(someArray), the function will return a random index that you can use to access an element in someArray. This can be helpful for various tasks like selecting a random item from an array or shuffling array elements.

function changeColor() {
    const randomColor = colors[getRandomIndex(colors)];
    gameArea.style.backgroundColor = randomColor;
}
//This JavaScript code defines a function called changeColor. 
//When this function is called, it performs the following steps to change the background color of a "gameArea" element on a webpage.

// const randomColor = colors[getRandomIndex(colors)];: 
// This line gets a random color from an array called colors. 
// It uses the getRandomIndex function (which you provided earlier) to generate a random index for the colors array. 
// This random index is used to access an element (color) from the array, and that color is stored in the randomColor variable.

// gameArea.style.backgroundColor = randomColor;: This line sets the backgroundColor style property of the "gameArea" element to the randomly selected color stored in the randomColor variable. This effectively changes the background color of the "gameArea" element to the new random color.

// In simpler terms, the changeColor function picks a random color from an array of colors and applies it as the background color of a specified HTML element with the id "gameArea". 
// This can be used to create visual effects or changes in the appearance of a webpage.


function changeShape(){
const randomShape = shapes[getRandomIndex(shapes)];
shapeElement.className = `shape ${randomShape}`;
shapeElement.textContent = randomShape.charAt(0).toUpperCase() + randomShape.slice(1);

}





// This JavaScript code defines a function called changeShape that, 
// when called, performs the following actions to modify the appearance of a webpage element representing a shape:

// const randomShape = shapes[getRandomIndex(shapes)];: 
// This line selects a random shape from an array called shapes. 
// It uses the getRandomIndex function (similar to the previous examples) to generate a random index for the shapes array. 
// The selected shape is stored in the randomShape variable.

// shapeElement.className = "shape " + randomShape;: 
// This line modifies the className property of an HTML element with the class "shape". 
// It adds the class name stored in the randomShape variable to the existing classes. 
// This likely changes the styling or appearance of the shape element based on the selected shape.

// shapeElement.textContent = randomShape.charAt(0).toUpperCase() + randomShape.slice(1);: 
// This line sets the text content of the shape element. 
// It takes the randomShape and capitalizes the first letter by using charAt(0).toUpperCase(). 
// Then, it concatenates the rest of the shape name using randomShape.slice(1), 
// effectively creating a capitalized version of the shape name. 
// This could be used to label the shape element with its name in a user-friendly format.

// In simpler terms, the changeShape function picks a random shape from an array of shapes, 
// applies a corresponding class to modify its appearance, and labels the shape element with a capitalized version of its name. 
// This can be used to dynamically change the style and content of a shape element on a webpage.



changeColorButton.addEventListener("click",changeColor);
changeShapeButton.addEventListener("click",changeShape);