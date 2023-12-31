//For selecting `form` element and stored in a variable `const form`:-
const form = document.querySelector('form');

//Addeventlistener, here the event listener is `submit` why because of a `form`.
//And with the callBack function as a paramter(local variable) `event` as an object.
form.addEventListener('submit',function(event){
//preventDefault:- method is used to stop the default behavior of an element, 
 //as a form submission or a link click, from occurring.
event.preventDefault();

//queryselector for selecting height with an id and using `.value` becuase of an input to get values.
//parseInt:- because the values will get into a string so `parseInt()` method convert them into the numbers.
const height  = parseInt(document.querySelector('#height').value);
const weight  = parseInt(document.querySelector('#weight').value);
const resultDisplay = document.querySelector('#results');

//If-else if conditions to check the values for height and weight:-
if(height === "" || height < 0 || isNaN(height)){
//InnerHtml for values
results.innerHTML = `Please provide a valid input! ${height}`;
}
else if(weight === "" || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please provide a valid input! ${weight}`;
}
else{
//The formula for BMI is weight in kilograms divided by height in meters squared.
//toFixed() method for 2 decimal value.
const bmiResult = (weight/((height*height)/10000)).toFixed(2);

//For Bmi categories results:-
let bmiCategory;
   if(bmiResult < 18.6){
    bmiCategory = "Under weight"
   }
   else if(bmiResult > 18.6 && bmiResult < 24.9){
bmiCategory = "Healthy weight"
   }
  else{
    bmiCategory = "Overweight"
  }

    //To show the result display
resultDisplay.innerHTML = `<span> Based on your body mass index ${bmiResult}, you are within the ${bmiCategory} range.</span>`

}
});

//Reset button for reset the values:-
const resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click',function(){
  location.reload();
})