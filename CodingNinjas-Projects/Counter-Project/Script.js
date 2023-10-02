//This JavaScript code is designed to create a counter that starts from 0 and increases up to a user-defined
//number between 1 and 9.
//The counter is displayed with a smooth animation.
//Code below:-


//countInterval: This is a variable that will store the interval for the counter.
let countInterval;

//<button onclick="startCounter()">Start Counter</button>
//This function is triggered when the "Start Counter" button is clicked.
//It manages the counter animation.
function startCounter()
 {
//The value entered by the user in the input field.
let number = parseInt(document.getElementById("number").value);

//The HTML element that displays the current number. 
let currentNum = document.querySelector(".counter .current");

//The HTML element that displays the next number.
let nextNum = document.querySelector(".counter .next");

//count: Keeps track of the current count value.
let count = 0;

//It sets the current number to 0 and the next number to 1.
if(number < 1 || number > 9) {
    clearInterval(countInterval);
    return;
  }
//Clears the previous interval that was running
  clearInterval(countInterval);
  countInterval = setInterval(function () {
    if (count === number) {
      clearInterval(countInterval);
      if(count === 9)
      {

alert("Times up and Reset the button")
      }
      return;
    }
//This function increases the counter by 1 and updates the displayed numbers with a smooth animation.    
    increaseCount(currentNum, nextNum);
    count++;
  }, 1000);
};


//Resetting Numbers:
//It resets the displayed numbers to their initial state (0 and 1).
function resetNumbers(currentNo, nextNo) {
  currentNo.innerHTML = 0;
  nextNo.innerHTML = 1;
}

//Increasing the Counter:
//It adds an animation class to the next number to smoothly transition.
//It updates the current number with the next number's value.
//It removes the animation class and updates the next number.
function increaseCount(currentNo, nextNo) {
  nextNo.classList.add("animate");
  currentNo.innerHTML = nextNo.innerHTML;
  nextNo.classList.remove("animate");
  nextNo.innerHTML = parseInt(nextNo.innerHTML) + 1;
}

//<button onclick="resetCounter()">Reset Counter</button>
//Reset button function
//It clears the counter interval and resets the displayed numbers.
//It also calls the resetInput function to clear the input field.
function resetCounter()
{
let currentNum = document.querySelector(".counter .current");
let nextNum = document.querySelector(".counter .next");
clearInterval(countInterval);
resetNumbers(currentNum,nextNum);
resetInput();
}

//<input type="number" id="number" placeholder="Enter Number"/>
//Input reset as well.
//It clears the input field value to reset it.
function resetInput()
{
let inputReset = document.getElementById("number");
inputReset.value = ""; //Reset the input field.
}


///##Javascript code explanation :-

// Starting the Counter:
// When the "Start Counter" button is clicked:
// It gets the user-entered number and elements displaying current and next numbers.
// If the number is invalid (not between 1 and 9), it stops and clears any ongoing interval.
// It sets up an interval to increase the count, update the displayed numbers, and animate the transition.
// If the count reaches the entered number (9), it shows an alert and stops the counter.

// Resetting Numbers:
// It resets the displayed numbers to their initial state (0 and 1).

// Increasing the Counter:
// It adds an animation class to the next number to smoothly transition.
// It updates the current number with the next number's value.
// It removes the animation class and updates the next number.

// Resetting Counter and Input:
// When the "Reset Counter" button is clicked:
// It clears the counter interval and resets the displayed numbers.
// It also calls the resetInput function to clear the input field.

// Resetting Input:
// It clears the input field value to reset it.
// Overall, this code manages a counter that counts up to a user-defined number,
// displays it with animation, and provides a way to reset both the counter and the input field. -->

//
