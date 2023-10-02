## CodingNinjas-Calculator-project

## Code solution:-

```javascript

1. Calculator Container:
   - `<div id="Calculator-container">`
   This is the main container for the calculator.

2. Display Screen:
   - `<input type="text" class="screenDisplay">`: This input field serves as the display screen for showing the entered numbers and calculation results.

3. Calculator Buttons:
   - `<div class="Buttons">`: This div contains all the calculator buttons.

4. Operator Buttons:
   - `<button class="Operator" data-value="AC">AC</button>`: Clears the calculator's current display.
   - `<button class="Operator" data-value="DEL">DEL</button>`: Deletes the last entered digit.
   - `<button class="Operator" data-value="%">%</button>`: Represents the percentage operator.
   - `<button class="Operator" data-value="/">/</button>`: Represents the division operator.
   - `<button class="Operator" data-value="*">*</button>`: Represents the multiplication operator.
   - `<button class="Operator" data-value="-">-</button>`: Represents the subtraction operator.
   - `<button class="Operator" data-value="+">+</button>`: Represents the addition operator.
   - `<button class="Operator" data-value="=">=</button>`: Initiates the calculation and displays the result.

5. Numeric Buttons:
   - `<button data-value="7">7</button>`, `<button data-value="8">8</button>`, ...: Numeric buttons from 0 to 9.
   - `<button data-value="00">00</button>`: Represents a double zero.
   - `<button data-value=".">.</button>`: Represents the decimal point.

The `data-value` attribute of each button indicates the value or operation it represents. This structure sets up the basic layout and functionality for a calculator interface. You can add JavaScript code to handle button clicks and perform calculations based on the user's input.



1. **Initializing Variables**:
   - `display`: Holds a reference to the calculator's display screen element with the class `screenDisplay`.
   - `buttons`: Holds references to all button elements on the calculator.
   - `specialChars`: An array containing special characters used in calculations: `%`, `*`, `/`, `-`, `+`, `=`.
   - `output`: A variable that stores the current input/output for calculations.

2. **`calculate` Function**:
   - This function is responsible for handling different button clicks and updating the `output` and display accordingly.
   - If the `=` button is clicked and the `output` is not empty, it evaluates the expression in the `output`, handling percentage calculations by replacing `%` with `/100` before evaluation.
   - If the `AC` button is clicked, it clears the `output`.
   - If the `DEL` button is clicked, it removes the last character from the `output`.
   - For other buttons, it checks if the `output` is empty and the button is a special character. If so, it returns early. Otherwise, it appends the button's value to the `output`.

3. **Adding Event Listeners to Buttons**:
   - A loop iterates through each button element using `buttons.forEach(...)`.
   - For each button, a click event listener is added that calls the `calculate` function with the button's `data-value` attribute as the argument.

This JavaScript code binds the `calculate` function to button clicks, updating the `output` based on the button clicked and displaying the result on the calculator's display screen. The code provides basic calculator functionality, including numeric input, operators, percentage calculations, clearing, and deletion of characters. -->

```
