const inputBox = document.getElementById('input-box');
const addButton = document.getElementById('add-btn');
const listContainer = document.getElementById('list-container');
const showError = document.getElementById('error');

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
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
inputBox.value = ""; 
saveData()
};

addButton.addEventListener('click',addTask);

listContainer.addEventListener('click',(event)=>{
if(event.target.tagName === "LI"){
    console.log(event); //To check in the console if its working or not.
    event.target.classList.toggle("checked");
    saveData()  //When the tasks is checked the saveData() function will be called.
}
else if(event.target.tagName === "SPAN"){
event.target.parentElement.remove();
saveData()  //When the tasks is unchecked and wants to remove  the saveData() function will be called.
}
},false);

//This function represents a feature in this app , that is when we clode the browser or reload or refresh the browser, the task we have added it remains as it is.
//saveData() function save the data in the localStorage and update the content in the browser
function saveData(){
localStorage.setItem("data",listContainer.innerHTML)
};


//Display the data Whenever we open the website again.
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");

};
showTask();