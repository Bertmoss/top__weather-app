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

// information holder
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
const london = new UserQuery("London");

const tokyo = new UserQuery("warsaw");

// service provider
const api = {
  weatherError: "Something went wrong",
  locationError: "Unable to find this location",
  async _setLatLoN(queryObj) {
    try {
      let response = await fetch (UserQuery.getGeoCodeUrl(queryObj), {"mode": "cors"});
      response = await response.json();
      queryObj.latitude = response[0].lat;
      queryObj.longitude = response[0].lon;
    } catch {
      return this.locationError;
    }
  },
  async fetchWeather(queryObj) {
    try {
      let obj = await this._setLatLoN(queryObj);
      if (obj !== this.locationError) {
        let response = await fetch (UserQuery.getWeatherUrl(queryObj), {"mode": "cors"});
        let data = await response.json();
        console.log(data)
      } else {
        console.log(this.locationError)
      }
    } catch {
      console.log(this.weatherError)
    }
  }
}

  function checkWeather() {
    api.fetchWeather(london);
    console.log("waiting on weather")
}
checkWeather();








