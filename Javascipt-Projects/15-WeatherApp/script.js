    const searchBox = document.querySelector('.search input');
    const searchButton = document.querySelector('.search button');
    const apiKey = "d7475ed17363e43099f1c0ac4e8036d6";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

    async function checkWeather(city){
      const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
      let data = await response.json();
      console.log(data);
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      document.querySelector('.city').innerHTML = `Weather in ${name}`;

      document.querySelector('.temperature').innerHTML = Math.round(temp)+'°c';

      document.querySelector('.humidity').innerHTML = `Humidity: ${humidity}%`;

      document.querySelector('.wind').innerHTML = `Wind speed: ${speed} km/h`;
      document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/04n" + icon + ".png";
      document.querySelector('.description').innerHTML = description;
      document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + city + "')";
    };
    
searchBox.addEventListener('keyup',(event)=>{
if(event.key == "Enter"){
    checkWeather(searchBox.value);
}
});

searchButton.addEventListener('click',()=>{
        checkWeather(searchBox.value);
    })
  