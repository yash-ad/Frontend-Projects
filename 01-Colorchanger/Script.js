//1.Select all buttons from Html and holding in a variable `const`:-
const buttons = document.querySelectorAll('.button'); //Nodelists
//For inspection in the browser
// console.log(buttons); 

//////////////////////////////////////////////////////////////////////////////////////////////

//2.To selecting the page body:-
const body = document.querySelector("body");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//3.Using `forEach` loop because of nodelists on the buttons:-
buttons.forEach(function(button){
    console.log(button);
//addeventlistener() method on the button.
 //Click event with callBack function
 //Functioning to all colors:-
button.addEventListener('click',function(event){
console.log(event);
console.log(event.target);//Html element
if(event.target.id === 'grey'){
    body.style.backgroundColor = event.target.id;
}
if(event.target.id === 'red'){
    body.style.backgroundColor = event.target.id;
}
if(event.target.id === 'blue'){
    body.style.backgroundColor = event.target.id;
}
if(event.target.id === 'yellow'){
    body.style.backgroundColor = event.target.id;
}
if(event.target.id === 'purple'){
    body.style.backgroundColor = event.target.id;
}
})
});
/////////////////////////////////////////////////////////////////////////////////////////////
//4.Refresh button for refresh the page:-
const refreshButton = document.getElementById('refreshButton');

refreshButton.addEventListener('click', () => {
    location.reload();
});
//location.reload():-
//is a JavaScript method that allows you to reload the current page in a web browser. 
//When you call location.reload(), 
//it instructs the browser to reload the entire page, 
//including all of its resources (such as HTML, CSS, JavaScript, images, etc.).
