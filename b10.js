const API_KEY = '4269652c5e1b6a66a34f9d3d16ecc098';
const DEFAULT_VALUE = '--';
const cityName = document.querySelector(".city-name").textContent;
const weatherState = document.querySelector(".weather-state");
const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&lang=vi&units=metric`)
        .then(response => response.json())
        .then((data) => {
            cityName.innerHTML = data.name || DEFAULT_VALUE;
            weatherState.innerHTML = data.weather[0].description || DEFAULT_VALUE;
            weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` || DEFAULT_VALUE;
            temperature.innerHTML = Math.round(data.main.temp) || DEFAULT_VALUE;     })