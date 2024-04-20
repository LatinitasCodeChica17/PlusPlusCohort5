// Define your API key, base URL, and other variables
let apiKey = "bafdfac4d6d7b1fc3d3952df39f393b7";
let pollenApiKey = "AIzaSyCxSohux2e71t1oNNM0PllEaDCoKwpwmDI"
let apiBaseURL = `https://api.openweathermap.org/data/2.5/weather?`;
let fullPath = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`
let pollenBaseURL =  `https://pollen.googleapis.com/v1/forecast:lookup?key=${pollenApiKey}`;
let fahTemp = 0;
let feelsTemp = 0;
let fiveDayFahHighTemp = [];
let fiveDayFahLowTemp = [];
let theme = 'daytime';
let lat = 0;
let long = 0;
let daysDisplayed = 1;
let pollenParams = ''
let cityName = window.location.search.split("=")[1];
searchByCity(cityName);

// helper functions to parse data
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
let weatherIcon = document.querySelector('#weather-icon')
let windowBackgroundImage=document.getElementsByClassName("outside-weather")


// Function to fetch weather data from the API
function searchByCity(city) {
  let searchByCityURL = `q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(`${apiBaseURL}${searchByCityURL}`).then(showWeatherInfo);
};

// Function to fetch pollen data from the API
function searchPollenData() {
  axios.get(`${pollenBaseURL}${pollenParams}`).then(showPollenInfo);
};

function showPollenInfo(responseData) {
  console.log(responseData.data);
}


// Function to display the weather information
function showWeatherInfo(responseData) {
  lat = responseData.data.coord.lat;
  long = responseData.data.coord.lon;
  let summary = responseData.data.weather[0].description;
  let icon = responseData.data.weather[0].icon;

  pollenParams = `&location.longitude=${long}&location.latitude=${lat}&days=${daysDisplayed}`;
  searchPollenData();

  cityNameH1.innerText = responseData.data.name;
  temp.innerText = responseData.data.main.temp;

  let iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`
  let coord = responseData.data.coord;
  weatherIcon.setAttribute('src', iconURL)
  weatherIcon.setAttribute('alt', summary)
}

function updateDate(timeZoneOffset, weatherCode) {
  let currentDate = new Date()

  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let monthNum = currentDate.getMonth()
  let monthName = months[monthNum]
  let date = currentDate.getDate();
  let day = days[currentDate.getDay()];
  let hour = currentDate.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let min = currentDate.getMinutes();
  if (min < 10) {
    min = `0${min}`;
  }
  let time = `${hour}:${min}`;
  let inputCityTimeZoneOffset = timeZoneOffset / 3600;
  let utcTime = currentDate.getUTCHours();
  let inputCityHour = utcTime + inputCityTimeZoneOffset

  if (inputCityHour < 1) {
    inputCityHour = `0${inputCityHour}`;
  }
  if (inputCityHour > 17 || inputCityHour < 6) {
    theme = 'nighttime'
  } else {
    theme = 'daytime'
  }
  if (inputCityHour >= 24) {
    inputCityHour = inputCityHour - 24
    day = days[currentDate.getDay() + 1];
    date = currentDate.getDate() + 1;
  }

  let formattedDate = `${day}, ${monthName} ${date},`
  let inputCityTime = `${inputCityHour}:${min}`;

  changeBackground(theme, weatherCode)

  dateLi.innerHTML = `${formattedDate} ${inputCityTime}${inputCityHour < 12 ? " AM" : " PM"}`
  localDateLi.innerHTML = `${time}${hour < 12 ? " AM" : " PM"}`
};
