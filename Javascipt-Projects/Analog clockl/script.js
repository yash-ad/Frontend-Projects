///.Clock calculation to move handles and for clock functioning:-
///1.Hours:-
//1.In 12 hours Angle is 360 deg.
//2.1 hour = 360/12 = 30 deg.
//3.h hours = 30 deg multiply by  hours + m/2.

///2.Minutes:-
//60 min = 360 deg
//1 min = 360/60 =  6deg
//m min = 6 multiply by minutes

///3.Seconds:-
//60 sec = 360deg
//1sec = 360/60 = 6deg
//s secs = 6 multiply by seconds

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///.Javascript code below:-

//.Variable declarations:-
//.Handles of the analog clock - Hour ,Minute and Seconds.
const hourHandle = document.getElementById('hour-hand');
const minuteHandle = document.getElementById('min-hand');
const secondsHandle = document.getElementById('sec-hand');
const toggleButton = document.querySelector('.mode-switch');
const body = document.querySelector('body');


function displayTime(){  
let date = new Date()

//Getting Hours , Minutes and Seconds and stored in the variable.
let hour    = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

//Handles rotation.
let hourRotation     = 30 * hour + minutes/2;
let minutesRotation  = 6  * minutes;  
let secondsRotation  = 6  * seconds;

//Handles move and their functioning:-
hourHandle.style.transform = `rotate(${hourRotation}deg)`;
minuteHandle.style.transform = `rotate(${minutesRotation}deg)`;
secondsHandle.style.transform = `rotate(${secondsRotation}deg)`;

};

//Set clock hands every second.
setInterval(displayTime, 1000); //1000 miliseconds = 1 second.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///.NOTES:-

//1.new Date():-
//In JavaScript, new Date() is used to create a new instance of the Date object, which represents a specific point in time. This can be the current date and time or a specific date and time you provide as arguments.
//Once you have a Date object, you can access various components of the date and time, like year, month, day, hours, minutes, seconds, 
//Keep in mind that when you create a `Date` object without any arguments, it will use the current date and time based on the system it's running on.

// In JavaScript, 
// getHours(), 
// getMinutes(), 
//and getSeconds() are methods of the Date object. 
//They allow you to retrieve the hour, minute, and second components of a specific Date object, respectively.







