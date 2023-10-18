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
})
