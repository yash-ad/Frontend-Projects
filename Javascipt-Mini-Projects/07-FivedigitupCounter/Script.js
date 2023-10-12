//Declared all the variable and assigned them in their values.
const digitElements = document.querySelectorAll('#counter span');
const valueInput = document.getElementById('value');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
let intervalId; //For setInterval and for clearInterval;


function updateCounter(value){
const valueString = value.toString().padStart(5,'0');
for (let i = 0; i < 5; i++) {
  digitElements[i].textContent = valueString[i];
}
};

function startCounter(){
  const value = parseInt(valueInput.value,10);
  if(isNan(value)|| value < 1 || value > 99999){
    alert('Please enter a valid value (1-99999)');
    return;
  }
  let currentValue = 0;
  intervalId = setInterval(()=>{
if(currentValue < value){
  currentValue++;
  updateCounter(currentValue)
}else {
  clearInterval(intervalId);
}
  },1000)
};

function stopCounter(){
  clearInterval(intervalId);
}


function resetCounter(){
  location.reload();
}








////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///.NOTES:-

//1.
//value.toString().padStart():-
 //This line converts the value to a string.
 //This is necessary because the `.padStart()` method is a string method and it can only be used on `strings`.

//2.
//`.padStart()`:-
 //The `.padStart()` is a string method,
 //It is used to pad the beginning of a string with specified character.
 // In this case '0' until the string reaches a certain length (in this case, 5 characters).
//5 is the target length. It means that if the string has fewer than 5 characters, it will be padded with '0' characters at the beginning until it reaches a length of 5.
//'0' is the character used for padding. In this case, it's the digit '0'. If the string were, for example, '123', after applying .padStart(5, '0'), it would become '00123'

//3.function updateCounter(value)
//digitElements[i]:-
 //This accesses an element in the digitElements array.
//digitElements is an array of HTML elements representing the individual digits of your counter,
//(as identified by their IDs: digit1, digit2, ..., digit5).
//`i` is a variable that represents the current index in the loop. 
//In this context, it will be a number from 0 to 4, corresponding to the five digits of your counter.Because 4 < 5;
//= valueString[i];: This sets the text content of the selected element to be the i-th character of the valueString.
//valueString[i] accesses the i-th character of the string. 
//Since JavaScript uses 0-based indexing, valueString[0] refers to the first character, valueString[1] to the second character, and so on.
// .textContent:-
//This is a property of an HTML element that represents the text content within that element. 
//It can be used to both read and set the text content.

//4.function startCounter():-
//const value = parseInt(valueInput.value, 10);
//valueInput.value:-
//This accesses the value property of the valueInput element.
//valueInput is a reference to an HTML input element, and 
//`.value` is a property of input elements that holds the current value entered by the user.
//parseInt(...): This is a JavaScript function that parses a string and returns an integer.
//The first argument of parseInt is the string to be parsed.
//In this case, it's valueInput.value, which is the current value entered by the user.
//The second argument of parseInt is the radix or base of the numeral system to be used. 
//The radix specifies the base in mathematical numeral systems. 
//In this case, 10 means base 10, which is the decimal system.
//For example, if the user entered '42', parseInt('42', 10) would return the number 42.
//const value = ...;: This line defines a new variable named value and assigns it the result of the parseInt operation.

//isNaN(value): This checks if the value is not a valid number.
// isNaN stands for "is Not a Number". It's a JavaScript function that returns true if the provided value cannot be converted into a number, and false otherwise. For example, isNaN('hello') returns true because 'hello' is not a valid number.
// In this context, it's used to make sure the user has entered a valid numerical value in the input field. If value is not a number, the condition will evaluate to true.

// value < 1: This checks if the value is less than 1.

// This part of the condition ensures that the entered value is greater than or equal to 1. If value is less than 1, the condition will evaluate to true.
// value > 99999: This checks if the value is greater than 99999.

// This part of the condition ensures that the entered value is less than or equal to 99999. If value is greater than 99999, the condition will evaluate to true.