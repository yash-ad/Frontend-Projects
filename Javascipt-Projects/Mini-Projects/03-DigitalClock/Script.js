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