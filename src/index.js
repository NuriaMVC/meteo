function refreshWeather(response){
console.log(response.data.temperature.current);
let temperatureElement = document.querySelector ("#temperature");
let temperature = response.data.temperature.current;
let cityElement = document.querySelector ("#city");
cityElement.innerHTML = response.data.city;
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


