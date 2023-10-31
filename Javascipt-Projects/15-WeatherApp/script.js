    const searchBox = document.querySelector('.search input');
    const searchButton = document.querySelector('.search button');
    const weatherIcon = document.querySelector('.weather-icon');
    const apiKey = "d7475ed17363e43099f1c0ac4e8036d6";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
    const backgroundImage = new Image();
     backgroundImage.src = 'https://source.unsplash.com/1600x900/?landscape';


    async function checkWeather(city){
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

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
      searchBox.value = "";
    };
    
searchBox.addEventListener('keyup',(event)=>{
if(event.key == "Enter"){
    checkWeather(searchBox.value);
}
});

searchButton.addEventListener('click',()=>{
        checkWeather(searchBox.value);
    })
  