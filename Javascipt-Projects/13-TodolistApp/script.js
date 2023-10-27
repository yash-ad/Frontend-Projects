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

