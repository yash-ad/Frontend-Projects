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







