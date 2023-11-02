//1.Element Selection:-
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"; //API url
const toShowResult = document.getElementById('result');
const searchBtn = document.getElementById('search-btn');

//2.Event Listener (Search Button):-
searchBtn.addEventListener('click',()=>{
let userInput = document.getElementById('inp-word').value;
// console.log(userInput); Yes its working in the console.
fetch(`${url}${userInput}`)
.then((response)=>{
 return response.json();
})
.then((data)=>{
console.log(data); //Yes its working in the console.
toShowResult.innerHTML = generateTemplate(userInput,data);

})
.catch(handleErrors);

///1.Separate Functions for Template Generation:
// Consider separating the template generation logic into its own function for better organization
function generateTemplate(userInput, data) {
    return `
    <div class="word">
        <h3>${userInput}</h3>  
    </div>
    <div class="details">
    <p>${data[0].meanings[0].partOfSpeech}</p>
    <p>/${data[0].phonetic}/</p>
    </div> 
    <p class="word-meaning">${data[0].meanings[0].definitions[0].definition}</p>  
    <p class="word-example">${data[0].meanings[0].definitions[0].example || ""}</p>  
    `;
}

///2.Error Handling:-
//It's a good practice to handle errors properly, 
//especially when working with APIs. 
//You can create a separate function to handle errors and call it in the .catch block.
function handleErrors(error) {
    toShowResult.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
    console.error(error);
}

});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///.NOTES:-

//1.Element Selection:-
//It defines a constant url which contains the URL of a dictionary API.
//It selects two HTML elements with the IDs result and search-btn using document.getElementById(). These elements are likely buttons or containers that will be manipulated by the code later.

//2.Event Listener (Search Button):-
//It adds an event listener to the searchBtn element, which listens for a 'click' event.
//When the button is clicked, it retrieves the value entered by the user in an input field with the ID inp-word.

//3.Fetching Data from API:-
//It uses fetch() to make a GET request to the API endpoint formed by concatenating url and userInput.
//It handles the response using Promises. If the response is successful, it converts it to JSON format and logs it in the console.

//4.Handling API Response:-
//After converting the response to JSON, it processes the data in the second .then() block. It logs the data to the console.
//It then calls a function generateTemplate() and passes userInput and the received data as arguments

//5.Template Generation:-
//generateTemplate() is a function that takes userInput and data as arguments and returns an HTML template string.
//This template string seems to be generating HTML code for displaying information about a word, including its part of speech, phonetic transcription, definition, and example.

//6.Error Handling:-
//There's a function named handleErrors() which takes an error as an argument.
//In case of an error, it updates the HTML content inside the element with the ID result to display an error message.
//It also logs the error to the console.


//This code is a basic example of how to interact with an API in JavaScript,
//handle the response, and dynamically update a webpage with the received data. 
//Additionally, it includes error handling to deal with potential issues when making the API request.




