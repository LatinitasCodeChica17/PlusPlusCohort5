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
   // theme will be the light or dark colors for our weather codes

  //thunderstorm
  if (weatherCode >= 200 && weatherCode <= 299) {
    // do something to show its a thunderstorm 
  }
  //drizzle
  if (weatherCode >=300 && weatherCode <=299) {
    // do something to show its drizzling
  }
  // rain
  if (weatherCode >=500 && weatherCode <=599) {
    // do something to show its raining
  }
  //snow
  if (weatherCode >=600 && weatherCode <=699) {
    // do something its snowing
  }
  // atmosphere/fog
  if (weatherCode >=700 && weatherCode <=799) {
    // do something to show its foggy
  }
  // clear
  if (weatherCode =800) {
    // do something to show its clear
  }
  //clouds
  if (weatherCode >=800 && weatherCode <=809) {
    // do something to show its cloudy
  }
}


//grab elements from the dom to manipulate, and give them names
let cityNameH1 = document.querySelector("h2");
let cityNameInput; //skip
let fTemp= document.getElementById("fTemp")
let cTemp = document.getElementById("cTemp")
let temp = document.getElementById("current-temp");
let tempFeelsLike = document.getElementById("tempFeelsLike")
let humEl = document.getElementById("humEl")
let windEl = document.getElementById("windEl")
let weatherSummary;
let weatherIcon;
let windowBackgroundImage=document.getElementsByClassName("outside-weather")


// Function to fetch weather data from the API
function searchByCity(city) {
  let searchByCityURL = `q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(`${apiBaseURL}${searchByCityURL}`).then(showWeatherInfo);
};


// Function to display the weather information
function showWeatherInfo(responseData) {
  // do something!
  temp.innerText = //some api data value for temp. 
}

searchByCity("New York");