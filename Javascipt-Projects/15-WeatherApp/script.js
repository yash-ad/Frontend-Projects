    ///.Variables declaration:-
    const searchBox = document.querySelector('.search input');
    const searchButton = document.querySelector('.search button');
    const weatherIcon = document.querySelector('.weather-icon');
    const apiKey = "d7475ed17363e43099f1c0ac4e8036d6";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
    const backgroundImage = new Image();
     backgroundImage.src = 'https://source.unsplash.com/1600x900/?landscape';


    ///.Function declaration:-
    async function checkWeather(city){
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        //To check the condition if the cityname is valid or not:-
        //Error message for Suppose we enter the wrong city name or invalid city name.
        if(response.status == 404 ){
            document.querySelector('.error').style.display = "block";
            setTimeout(()=>{
                document.querySelector('.error').style.display = "none";
},2000)
        }
        else{
      let data = await response.json();
      console.log(data);
    let { name } = data;
     let { description } = data.weather[0];
      let { temp, humidity } = data.main;
     let { speed } = data.wind;

      document.querySelector('.city').innerHTML = `Weather in ${name}`;

      document.querySelector('.temperature').innerHTML = Math.round(temp)+'°c';

      document.querySelector('.description').innerHTML = `${description}`;

      document.querySelector('.humidity').innerHTML = `Humidity: ${humidity}%`;

      document.querySelector('.wind').innerHTML = `Wind speed: ${speed} km/h`;
      
      document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + city + "')";

    
//Update images according to the weather condition with the check conditions:-
if(data.weather[0].main == "Clouds"){
weatherIcon.src = "Images/clouds.png";
}
else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "Images/clear.png";
}
else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "Images/drizzle.png";
}
else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "Images/mist.png";
}

else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "Images/rain.png";
}
      //To clear the input box.
      searchBox.value = "";
}

};
 

///.Event listeners:-

//1.When pressing the `Enter` Key on keyboard:-
searchBox.addEventListener('keyup',(event)=>{
if(event.key == "Enter"){
    checkWeather(searchBox.value);
}
});

//2.When clicking the search-icon button:-
searchButton.addEventListener('click',()=>{
        checkWeather(searchBox.value);
    })
  
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///.NOTES:-

//1.searchBox, searchButton, and weatherIcon are variables that store references to specific elements in your HTML document using querySelector.
// apiKey and apiUrl are constants that hold your OpenWeatherMap API key and the base URL for the weather API.
// backgroundImage is an Image object that is preloaded with a default landscape image from Unsplash.

//2.This function is responsible for fetching weather data from the OpenWeatherMap API based on a provided city name.
// It starts by making an asynchronous fetch request to the API.
// If the response status is 404 (city not found), it displays an error message for 2 seconds, then hides it.
// Otherwise, it processes the response data.
// It extracts relevant weather information (name, description, temperature, humidity, and wind speed).
// It updates various elements in your HTML document with this information.
// It sets the background image to a city-specific image using Unsplash.
// It updates the weather icon based on the weather condition.
// Finally, it clears the search box.

//3.The first event listener triggers the checkWeather function when the Enter key is pressed in the search box.
// The second event listener triggers the checkWeather function when the search button is clicked.






