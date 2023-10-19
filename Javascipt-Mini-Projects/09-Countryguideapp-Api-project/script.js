let searchBtn = document.getElementById('search-btn');
let countryInp = document.getElementById('country-input');
let resetBtn = document.getElementById('reset-btn');


searchBtn.addEventListener('click',()=>{
    let countryName = countryInp.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`; //https://restcountries.com/ API
//console.log(`let's check if it is working or not ${finalURL}`); //Yes it is working on the browser.
fetch(finalURL)
.then((response)=>{
 return response.json(); // You need to `return` the promise here.
})
.then((data)=>{
// console.log(data[0]);
// console.log(data[0].flags.svg);
// console.log(data[0].capital[0]);
// console.log(data[0].name.common);
// console.log(data[0].continents[0]);
// console.log(Object.keys(data[0].currencies)[0]);
// console.log(data[0].population);
// console.log(Object.values(data[0].languages).toString().split(",").join(", "));
result.innerHTML = `
<img src="${data[0].flags.svg}" class="flag-img">
<h2>${data[0].name.common}</h2>
<div class= "wrapper>
div class="data-wrapper">
<h4>Capital: </h4>
<span>${data[0].capital[0]}</span>
</div>
</div>
<div class= "wrapper>
div class="data-wrapper">
<h4>Continent: </h4>
<span>${data[0].continents[0]}</span>
</div>
</div>
<div class="wrapper">
<div class="data-wrapper">
    <h4>Population:</h4>
    <span>${data[0].population}</span>
</div>
</div>
<div class="wrapper">
<div class="data-wrapper">
    <h4>Currency:</h4>
    <span>${data[0].currencies[Object.keys(data[0].currencies)].name
    } - ${Object.keys(data[0].currencies)[0]}</span>
</div>
</div>
<div class="wrapper">
<div class="data-wrapper">
    <h4>Common Languages:</h4>
    <span>${Object.values(data[0].languages).toString().split(",").join(", ")}</span>
</div>
</div>
`
})
.catch(() => {
    if (countryName.length == "") {
      result.innerHTML = `<h3>The input field cannot be empty</h3>`;
    } else {
      result.innerHTML = `<h3>Please enter a valid country name.</h3>`;
    }
  });
});

resetBtn.addEventListener('click',()=>{
    location.reload();
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///.NOTES:-

//1.Element Selection:-
//This code snippet selects three elements from the DOM using their IDs: search-btn, country-input, and reset-btn.

//2.Event Listener (Search Button):-
//This sets up an event listener that listens for a click event on the element with the ID search-btn. When clicked, it executes the arrow function.

//3.Fetching Data:-
//This code handles the process of making an HTTP request to the URL generated using the countryName variable. 
//It uses the Fetch API to make a GET request.
//It first sets up the URL using a template string and the value of countryInp.
//It then uses .fetch() to send the GET request.
//When a response is received, it converts it to JSON using .json(). This also returns a promise.
//The second .then() block handles the JSON data returned from the response.
//The .catch() block handles any errors that occur during the fetch process.
//This block is responsible for handling the data received from the API after it has been converted to JSON.

//4.Updating the DOM with Response Data:-
//This code is updating an element in the DOM with the ID result by setting its innerHTML property. It uses a template string to create an HTML structure that will display information about the selected country.

//5.Error Handling:-
//This block handles errors that may occur during the fetch process. 
//In this case, it checks if the countryName is empty or if the request to the API fails.

//6.Event Listener (Reset Button):-
//This sets up an event listener that listens for a click event on the element with the ID reset-btn.
// When clicked, it reloads the page.
