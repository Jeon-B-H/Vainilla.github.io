// API key
const API_KEY = "abfebbb2eb51c3eeac47ce6fa4e9e6bb";

// navigator
navigator.geolocation.getCurrentPosition(onGeoWell, onGeoError)

// works good
function onGeoWell(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

    // fetch를 통해 url 정보 얻기
    fetch(url).then(response => response.json()).then(data => {
        // print current location of city & country
        const city = data.name;
        const country = data.sys.country;
        printCurrentLocation(city, country);

        // print weather 
        const weather = data.weather[0].main; 
        const temp = data.main.temp;
        printCurrentWeather(weather, temp); 
    });
}

// doesn't work
function onGeoError(){

}

// function : printCurrentLocation
function printCurrentLocation(city, country){
    const location_span = document.querySelector('#currentLocation');

    location_span.innerHTML = `${city}, ${country}`;
}

// function : printCurrentWeather
function printCurrentWeather(weather, temp){
    // variable of HTML element
    const weatherIcon = document.querySelector('#weather-icon');
    const temperatureText = document.querySelector('.weather-content:first-child span:first-child');
    const weatherText = document.querySelector('.weather-content:last-child span');

    // choose current weather icon
    if(weather === 'Clouds'){
        weatherIcon.innerHTML = '<i class="fas fa-cloud"></i>';
    } else if(weather === 'Clear'){
        weatherIcon.innerHTML = '<i class="fas fa-sun"></i>';
    } else if(weather === 'Thunderstorm'){
        weatherIcon.innerHTML = '<i class="fas fa-thunderstorm"></i>';
    } else if(weather === 'Drizzle'){
        weatherIcon.innerHTML = '<i class="fas fa-cloud-rain"></i>';
    } else if(weather === 'Rain'){
        weatherIcon.innerHTML = '<i class="fas fa-cloud-showers-heavy"></i>';
    } else if(weather === 'Snow'){
        weatherIcon.innerHTML = '<i class="far fa-snowflake"></i>';
    } else if(weather === 'Atmosphere'){
        weatherIcon.innerHTML = '<i class="fas fa-cloud"></i>';
    } else {
        weatherIcon.innerHTML = '<i class="fas fa-cloud-meatball"></i>';
    }

    // remove hidden className of degree symbol
    const degreeSymbol = document.querySelector('.weather-content:first-child span:last-child');
    degreeSymbol.classList.remove('hidden');

    // edit innerHTML of temperature & weather Text
    temperatureText.innerText = Math.floor(temp);
    weatherText.innerText = weather;
}