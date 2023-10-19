//1.Element Selection:-
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"; //API url
const toShowResult = document.getElementById('result');
const soundBox = document.getElementById('sound');
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
})








})






