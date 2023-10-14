///.These below use cases will give you an empty values:-
// const height = document.querySelector('#height').value
// const weight = document.querySelector('#weight').value
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//To select the form and assigned into a variable constant:-
const form = document.querySelector('form');
//Submit event for submitting the form.
//In this context, `event` is a local variable that represents the event object. 
//`preventDefault()` is a method in JavaScript that is used to prevent the default behavior of an event from occurring.
//`.value` property to get the value form specific input.
// parseInt() method to return an integer from a string, that can be converted into a number.
form.addEventListener('submit',function(event){
event.preventDefault();
 const height  = parseInt(document.querySelector('#height').value);
 const weight  = parseInt(document.querySelector('#weight').value);
 const resultDisplay = document.querySelector('#results');

if(height === "" || height < 0 || isNaN(height)){
    results.innerHTML = `Please provide a valid Input ${height}`
}
else if(weight === "" || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please provide a valid Input ${weight}`
}
else{
    //BMI formula is weight in kilograms and height is meter squared.
    //`.toFixed` property is used to get the a number as decimal points
    const bmiResult = (weight/(height*height/10000)).toFixed(2);
   
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





const resetButton = document.querySelector('#reset');

resetButton.addEventListener('click',function(){
    location.reload();
})