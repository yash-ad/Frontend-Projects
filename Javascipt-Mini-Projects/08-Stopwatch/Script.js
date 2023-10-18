//Lets intialize some variables:-
let miliSeconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0
let timerDisplay = document.querySelector(".timer-display");
let startButton = document.querySelector('#start-timer');
let stopButton = document.querySelector('#stop-timer');
let resetButton = document.querySelector('#reset-timer');

//We set the intial value `interval` variable to `null`:-
let intervalId = null;


//addEventlisteners to html element:-
startButton.addEventListener('click',function(){
    if(intervalId === null){
        clearInterval(intervalId);
    }
intervalId = setInterval(displayTimer,10)
})

function displayTimer(){
    //console.log("It works");

    


}


stopButton.addEventListener('click',function(){

})

resetButton.addEventListener('click',function(){

})