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


// inputBox, addButton, listContainer, and showError are constants declared using const.
// document.getElementById('input-box') retrieves an HTML element with the id attribute of 'input-box' from the DOM (Document Object Model).
// document.getElementById('add-btn') retrieves an HTML element with the id attribute of 'add-btn'.
// document.getElementById('list-container') retrieves an HTML element with the id attribute of 'list-container'.
// document.getElementById('error') retrieves an HTML element with the id attribute of 'error'.

// addTask is a function that gets executed when the user clicks the "Add" button (addButton).
// It first checks if the value of inputBox is an empty string.
// If it is empty, it displays an error message for 2 seconds using a timeout function and sets the showError element's style to be visible (block).
// If the input is not empty, it creates a new li element (representing a list item).
// It sets the innerHTML of the li element to the value of inputBox.
// The li element is then appended to the listContainer.
// It creates a span element and sets its innerHTML to "\u00d7" which represents the Unicode character U+00D7 (multiplication sign).
// This span element is then appended to the li element.
// Finally, it clears the input box value, and calls the saveData function


// saveData is a function that saves the current state of the list in the browser's localStorage.
// It uses localStorage.setItem to store the HTML content of listContainer with the key "data".


// showTask is a function that retrieves the saved data from localStorage and displays it on the page.
// It uses localStorage.getItem to retrieve the HTML content associated with the key "data" and sets it as the inner HTML of listContainer.

// This code represents a simple to-do list application:
// It uses JavaScript to manipulate the DOM, responding to user interactions.
// Tasks are added by typing into an input box and clicking an "Add" button.
// If the input is empty, it displays an error message.
// Each task is represented as an `LI` list element with a delete button (SPAN element).
// Tasks are saved in the browser's localStorage, so they persist even when the page is reloaded or closed.
// When the page is loaded, the saved tasks are retrieved and displayed.
