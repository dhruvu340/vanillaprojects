 const input_Box = document.querySelector('.inputbox');
 const searchBtn = document.querySelector('.ri-search-line');
 const weather_img = document.querySelector('.image');
 const temperature = document.querySelector('.temp');
 const description = document.querySelector('#info');
 const humidity = document.querySelector('.humidi');
 const wind_speed = document.querySelector('.windi');
const nonerr= document.querySelector(".nonerror");
const err= document.querySelector("#image1");

async function checkWeather(city){

const apikey="1f99c86ef454b8111da0523e4a85ca99";
const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

// Fetch weather data from OpenWeatherMap API

    let result = await fetch(url);
let weather = await result.json();



     if(weather.cod=="404"){
            nonerr.style.display = "none";
            err.style.display = "block";

     }else{
      


        temperature.innerHTML=Math.round(weather.main.temp-273)+"°C";
        humidity.innerHTML=weather.main.humidity+"%";
        description.innerHTML=weather.weather[0].description;
        wind_speed.innerHTML=weather.wind.speed+"KMPH";

       
       
        switch(weather.weather[0].main){
            case 'Clouds':
                weather_img.src = "assets/cloud.png";
                break;
            case 'Clear':
                weather_img.src = "assets/clear.png";
                break;
            case 'Rain':
                weather_img.src = "assets/rain.png";
                break;
            case 'Mist':
                weather_img.src = "assets/mist.png";
                break;
            case 'Snow':
                weather_img.src = "assets/snow.png";
                break;
    
        }
       
    
     }



  

 





}



// Fetch weather data from OpenWeatherMap API
searchBtn.addEventListener('click', ()=>{




 checkWeather(input_Box.value);
    
 })



