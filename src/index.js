function refreshWeather(response){
console.log(response.data.temperature.current);
let temperatureElement = document.querySelector ("#temperature");
let temperature = response.data.temperature.current;
let cityElement = document.querySelector ("#city");
let descriptionElement = document.querySelector ("#description");
let humidityElement = document.querySelector ("#humidity");
let windSpeedElement = document.querySelector ("#wind-speed");
console.log(response.data.condition.description);
cityElement.innerHTML = response.data.city;
descriptionElement.innerHTML = response.data.condition.description;
humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity (city){
    let apiKey = "d75bd003f442ft249a6aa4aba8co07bf";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(refreshWeather);
}

function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#city")
    cityElement.innerHTML = searchInput.value;
    searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Barcelona");


