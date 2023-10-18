
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
// miliSeconds, seconds, minutes, hours: 
//These variables are used to keep track of the time components (milliseconds, seconds, minutes, and hours) of the timer. 
//They are all initialized to zero.
// toShowOnDisplay: This variable is used to store a reference to an HTML element with the class name "timer-display". 
//It will be used to display the timer.
// startButton, stopButton, resetButton: These variables are used to store references to HTML buttons with the IDs "start-timer", "stop-timer", and "reset-timer" respectively.
// intervalId: This variable will be used to store the ID returned by setInterval, allowing us to later clear the interval.

//2.Start Button Event Listener:
// An event listener is attached to the "startButton" element. 
//When clicked, it checks if intervalId is not null (indicating that a timer is already running). 
//If so, it clears the existing interval. 
//Then, it sets a new interval with setInterval(updateTimer, 10) which calls the updateTimer function every 10 milliseconds.

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
