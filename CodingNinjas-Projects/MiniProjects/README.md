<!-- # CodingNinjas-Javascript-miniProject:-                                  ## Counter timer using HTML , CSS and JAVASCRIPT:-

## Html code explanation:- -->
<!-- 
1. `<div id="counter-value">`: This is a container div for the counter value section. Inside this div, you have a paragraph (`<p>`) element that provides instructions to the user. It tells the user to enter a value between 1 and 9. Below the paragraph, there's another div (`<div id="input-range">`) that holds the input field and a button.

2. `<input type="number" id="number" placeholder="Enter Number" />`: This is an input field of type "number." It has an `id` attribute set to "number," which can be used to reference this input field in JavaScript. The `placeholder` attribute provides a hint to the user that they should enter a number.

3. `<button onclick="startCounter()">Start Counter</button>`: This is a button element that says "Start Counter." It has an `onclick` attribute, which means when the button is clicked, it will trigger a JavaScript function called `startCounter()`.

4. `<div id="counter-container">`: This is another container div, this time for the counter display section. Inside this div, you have a single counter element (`<div class="counter" id="first">`) that displays the current and next values.

5. `<p class="current"></p>`: This paragraph element with the class "current" will be used to display the current value of the counter.

6. `<p class="next">1</p>`: This paragraph element with the class "next" contains the initial next value of the counter, which is set to  -->

<!-- 
##Javascript code explanation :- -->
<!-- Starting the Counter:

When the "Start Counter" button is clicked:
It gets the user-entered number and elements displaying current and next numbers.
If the number is invalid (not between 1 and 9), it stops and clears any ongoing interval.
It sets up an interval to increase the count, update the displayed numbers, and animate the transition.
If the count reaches the entered number (9), it shows an alert and stops the counter.
Resetting Numbers:

It resets the displayed numbers to their initial state (0 and 1).
Increasing the Counter:

It adds an animation class to the next number to smoothly transition.
It updates the current number with the next number's value.
It removes the animation class and updates the next number.
Resetting Counter and Input:

When the "Reset Counter" button is clicked:
It clears the counter interval and resets the displayed numbers.
It also calls the resetInput function to clear the input field.
Resetting Input:

It clears the input field value to reset it.
Overall, this code manages a counter that counts up to a user-defined number, displays it with animation, and provides a way to reset both the counter and the input field. -->