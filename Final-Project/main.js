// Define your API key and base URL
let apiKey = "bafdfac4d6d7b1fc3d3952df39f393b7";
let apiBaseURL = `https://api.openweathermap.org/data/2.5/weather?`;
let fahTemp = 0;
let feelsTemp = 0;
let fiveDayFahHighTemp = [];
let fiveDayFahLowTemp = [];
let theme = 'daytime';

//helper functions
function formatDate(timestamp) {
  let week = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', "Sat"]
  let date = new Date(timestamp * 1000)
  let day = date.getDay();
  return week[day];
}

function changeBackground(theme, weatherCode) {
  let htmlBody = document.querySelector('html')

  //thunderstorm
  if (CONDITION) {
    // do something
  }
  //drizzle
  if (CONDITION) {
    // do something
  }
  // rain
  if (CONDITION) {
    // do something
  }
  //snow
  if (CONDITION) {
    // do something
  }
  // atmosphere/fog
  if (CONDITION) {
    // do something
  }
  // clear
  if (CONDITION) {
    // do something
  }
  //clouds
  if (CONDITION) {
    // do something
  }
}


//grab elements from the dom to manipulate, and give them names
let cityNameH1 = document.querySelector("h1");
let cityNameInput;
let fTemp;
let cTemp;
let temp;
let tempFeelsLike;
let humEl;
let windEl;
let weatherSummary;
let weatherIcon;


// Function to fetch weather data from the API
function searchByCity(city) {
  let searchByCityURL = `q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(`${apiBaseURL}${searchByCityURL}`).then(showWeatherInfo);
};


// Function to display the weather information
fuction showWeatherInfo(responseData) {
  // do something!
}

searchByCity("New York");