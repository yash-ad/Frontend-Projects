//1.Declare reference variables:-
const newTaskInput = document.querySelector("#task-input");
const addButton = document.querySelector("#add-btn");
const taskContainer = document.querySelector("#task-container");
const countValue = document.querySelector(".count-value")
const showError = document.getElementById("error");

let taskCount = 0; //To keep track of numbers.


const displayCount = (taskCount)=>{
    countValue.innerHTML = taskCount;
}


const addTask = ()=>{
    const taskName =  newTaskInput.value.trim();
    showError.style.display = "none";
showError.innerHTML = "This field cannot be left empty,Please enter valid input"
    if(taskName === ""){
        setTimeout(()=>{
            showError.style.display = "block" 
           
        },200);
    
        return;
    }

    const task = `<div class="task">
    <input type="checkbox" id="task-checkbox">
<span class="taskname">${taskName}</span>
<button class="edit">
<i class="fa-solid fa-pen-to-square"></i>
</button>
<button class="delete">
<i class="fa-solid fa-trash"></i> 
</button>
    </div`;

taskContainer.insertAdjacentHTML("beforeend", task);
};


addButton.addEventListener('click',addTask) //When the user clicks on the `Add` button the `addTask` function will be called.