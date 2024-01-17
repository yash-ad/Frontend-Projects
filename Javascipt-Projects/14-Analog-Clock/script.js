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

//Store the current time in localStorage:-
localStorage.setItem('lastKnownTime',JSON.stringify({ hour, minutes, seconds }));
};
//Set clock hands every second.
setInterval(displayTime, 1000); //1000 miliseconds = 1 second.

function restoreLastKnownTime() {
    // Retrieve last known time from local storage
    const lastKnownTime = JSON.parse(localStorage.getItem('lastKnownTime'));

    if (lastKnownTime) {
        const { hour, minutes, seconds } = lastKnownTime;

        let hourRotation     = 30 * hour + minutes/2;
        let minutesRotation  = 6  * minutes;  
        let secondsRotation  = 6  * seconds;

        hourHandle.style.transform = `rotate(${hourRotation}deg)`;
        minuteHandle.style.transform = `rotate(${minutesRotation}deg)`;
        secondsHandle.style.transform = `rotate(${secondsRotation}deg)`;
    }
}

// Check if there is a last known time and restore it.
restoreLastKnownTime();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///.NOTES:-

//1.new Date():-
//In JavaScript, new Date() is used to create a new instance of the Date object, which represents a specific point in time. This can be the current date and time or a specific date and time you provide as arguments.
//Once you have a Date object, you can access various components of the date and time, like year, month, day, hours, minutes, seconds, 
//Keep in mind that when you create a `Date` object without any arguments, it will use the current date and time based on the system it's running on.

//2.In JavaScript, 
// getHours(), 
// getMinutes(), 
//and getSeconds() are methods of the Date object. 
//They allow you to retrieve the hour, minute, and second components of a specific Date object, respectively.

//3.JSON.stringify() is a method in JavaScript that converts a JavaScript object or value to a JSON (JavaScript Object Notation) string. This is useful when you want to send data to a server or store it in a format that can be easily saved or transmitted.

//4.JSON.parse() is a JavaScript method that allows you to convert a JSON (JavaScript Object Notation) string into a JavaScript object. This is useful when you receive data from a server as a JSON string and need to work with it as a JavaScript object.

// displayTime is a function that updates the clock hands based on the current time. 
// It first creates a new Date object to get the current date and time. 
// Then it extracts the hours, minutes, and seconds. 
// The rotations for the hour, minute, and second hands are calculated based on these values. 
//The style.transform property is then used to rotate the corresponding clock hands.
// After updating the clock, the current time (in hours, minutes, and seconds) is stored in the browser's local storage using localStorage.setItem.

//restoreLastKnownTime is a function that checks if there's a last known time stored in local storage. 
//If it exists, it retrieves the values (hours, minutes, and seconds) and then recalculates the rotations for the clock hands. 
//Finally, it updates the clock hands' positions.

//setInterval is used to call the displayTime function every 1000 milliseconds (1 second). This ensures that the clock hands are updated every second to reflect the current time.
// Then code calls restoreLastKnownTime to check if there's a last known time saved in local storage and restore it.


