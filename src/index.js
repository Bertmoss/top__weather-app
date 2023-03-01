// eslint-disable-next-line max-classes-per-file

// eslint-disable-next-line max-classes-per-file
class ApiUrls {

  static geoCodeStart = "http://api.openweathermap.org/geo/1.0/direct?";

  static weatherStart = "https://api.openweathermap.org/data/2.5/weather?"

  static key = "&appid=85aeff7b006ac05dbda37652593e15d2";
  
  static limit = "&limit=1";
  
  static getGeoCodeUrl(query) {
    return `${this.geoCodeStart}q=${query.userInput}${this.limit}${this.key}`
  }

  static getWeatherUrl(query) {
    return `${this.weatherStart}lat=${query.latitude}&lon=${query.longitude}${this.key}`
  }
}


class UserQuery extends ApiUrls {

  constructor(location) {
    super();
    this.userInput = location;
  }

  #lat;

  #lon;

  set latitude(value) {
    this.#lat = value;
  };

  get latitude() {
    return this.#lat;
  }

  set longitude(value) {
    this.#lon = value;
  };

  get longitude() {
    return this.#lon;
  }

}
const london = new UserQuery("LONDON");

async function fetchLatLon(queryObj) {
  try {
    let response = await fetch (UserQuery.getGeoCodeUrl(queryObj), {"mode": "cors"});
    response = await response.json();
    return response;

  } catch {
    return console.log("error")
  }
}

function destructureLatLon(queryObj, response) { // issue here
  console.log(response[0])
  const {lat, lon} = response[0];
  
  queryObj.latitude = lat;
  queryObj.longitude = lon;
}

function getLatLon(queryObj) {
  let response = fetchLatLon(queryObj);
  destructureLatLon(queryObj, response);

  //fetchLatLon(queryObj).then(response => {destructureLatLon(queryObj, response)});
  console.log(queryObj)
}



async function fetchWeather(queryObj) {
  try {
    let response = await fetch (UserQuery.getWeatherUrl(queryObj), {"mode": "cors"});
    response = await response.json();
    console.log(response)
    return response;

  } catch{
    return console.log("error weather");
  }
}




async function checkWeather() {
  getLatLon(london);
 
  fetchWeather(london);
  console.log("waiting on weather data")

}
checkWeather();








fetch (UserQuery.getGeoCodeUrl(london), {"mode": "cors"})
.then((result)=> result.json())
.then((data) => {
  console.log(data[0].lat)
  london.latitude = data[0].lat;
  london.longitude = data[0].lon;
  console.log(UserQuery.getWeatherUrl(london));
});

