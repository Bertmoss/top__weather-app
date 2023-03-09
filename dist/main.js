/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// eslint-disable-next-line max-classes-per-file
class ApiUrls {
  static getGeoCodeUrl(query) {
    return `${this.geoCodeStart}q=${query.userInput}${this.limit}${this.key}`;
  }
  static getWeatherUrl(query) {
    return `${this.weatherStart}lat=${query.latitude}&lon=${query.longitude}${this.key}`;
  }
}

// information holder
_defineProperty(ApiUrls, "geoCodeStart", "http://api.openweathermap.org/geo/1.0/direct?");
_defineProperty(ApiUrls, "weatherStart", "https://api.openweathermap.org/data/2.5/weather?");
_defineProperty(ApiUrls, "key", "&appid=85aeff7b006ac05dbda37652593e15d2");
_defineProperty(ApiUrls, "limit", "&limit=1");
var _lat = /*#__PURE__*/new WeakMap();
var _lon = /*#__PURE__*/new WeakMap();
class UserQuery extends ApiUrls {
  constructor(location) {
    super();
    _classPrivateFieldInitSpec(this, _lat, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _lon, {
      writable: true,
      value: void 0
    });
    this.userInput = location;
  }
  set latitude(value) {
    _classPrivateFieldSet(this, _lat, value);
  }
  get latitude() {
    return _classPrivateFieldGet(this, _lat);
  }
  set longitude(value) {
    _classPrivateFieldSet(this, _lon, value);
  }
  get longitude() {
    return _classPrivateFieldGet(this, _lon);
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
      let response = await fetch(UserQuery.getGeoCodeUrl(queryObj), {
        "mode": "cors"
      });
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
        let response = await fetch(UserQuery.getWeatherUrl(queryObj), {
          "mode": "cors"
        });
        let data = await response.json();
        console.log(data);
      } else {
        console.log(this.locationError);
      }
    } catch {
      console.log(this.weatherError);
    }
  }
};
function checkWeather() {
  api.fetchWeather(london);
  console.log("waiting on weather");
}
checkWeather();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLE1BQU1BLE9BQU8sQ0FBQztFQVVaLE9BQU9DLGFBQWFBLENBQUNDLEtBQUssRUFBRTtJQUMxQixPQUFRLEdBQUUsSUFBSSxDQUFDQyxZQUFhLEtBQUlELEtBQUssQ0FBQ0UsU0FBVSxHQUFFLElBQUksQ0FBQ0MsS0FBTSxHQUFFLElBQUksQ0FBQ0MsR0FBSSxFQUFDO0VBQzNFO0VBRUEsT0FBT0MsYUFBYUEsQ0FBQ0wsS0FBSyxFQUFFO0lBQzFCLE9BQVEsR0FBRSxJQUFJLENBQUNNLFlBQWEsT0FBTU4sS0FBSyxDQUFDTyxRQUFTLFFBQU9QLEtBQUssQ0FBQ1EsU0FBVSxHQUFFLElBQUksQ0FBQ0osR0FBSSxFQUFDO0VBQ3RGO0FBQ0Y7O0FBRUE7QUFBQUssZUFBQSxDQW5CTVgsT0FBTyxrQkFFVywrQ0FBK0M7QUFBQVcsZUFBQSxDQUZqRVgsT0FBTyxrQkFJVyxrREFBa0Q7QUFBQVcsZUFBQSxDQUpwRVgsT0FBTyxTQU1FLHlDQUF5QztBQUFBVyxlQUFBLENBTmxEWCxPQUFPLFdBUUksVUFBVTtBQUFBLElBQUFZLElBQUEsb0JBQUFDLE9BQUE7QUFBQSxJQUFBQyxJQUFBLG9CQUFBRCxPQUFBO0FBWTNCLE1BQU1FLFNBQVMsU0FBU2YsT0FBTyxDQUFDO0VBRTlCZ0IsV0FBV0EsQ0FBQ0MsUUFBUSxFQUFFO0lBQ3BCLEtBQUssRUFBRTtJQUFDQywwQkFBQSxPQUFBTixJQUFBO01BQUFPLFFBQUE7TUFBQUMsS0FBQTtJQUFBO0lBQUFGLDBCQUFBLE9BQUFKLElBQUE7TUFBQUssUUFBQTtNQUFBQyxLQUFBO0lBQUE7SUFDUixJQUFJLENBQUNoQixTQUFTLEdBQUdhLFFBQVE7RUFDM0I7RUFNQSxJQUFJUixRQUFRQSxDQUFDVyxLQUFLLEVBQUU7SUFDbEJDLHFCQUFBLEtBQUksRUFBQVQsSUFBQSxFQUFRUSxLQUFLO0VBQ25CO0VBRUEsSUFBSVgsUUFBUUEsQ0FBQSxFQUFHO0lBQ2IsT0FBQWEscUJBQUEsQ0FBTyxJQUFJLEVBQUFWLElBQUE7RUFDYjtFQUVBLElBQUlGLFNBQVNBLENBQUNVLEtBQUssRUFBRTtJQUNuQkMscUJBQUEsS0FBSSxFQUFBUCxJQUFBLEVBQVFNLEtBQUs7RUFDbkI7RUFFQSxJQUFJVixTQUFTQSxDQUFBLEVBQUc7SUFDZCxPQUFBWSxxQkFBQSxDQUFPLElBQUksRUFBQVIsSUFBQTtFQUNiO0FBRUY7QUFDQSxNQUFNUyxNQUFNLEdBQUcsSUFBSVIsU0FBUyxDQUFDLFFBQVEsQ0FBQztBQUV0QyxNQUFNUyxLQUFLLEdBQUcsSUFBSVQsU0FBUyxDQUFDLFFBQVEsQ0FBQzs7QUFFckM7QUFDQSxNQUFNVSxHQUFHLEdBQUc7RUFDVkMsWUFBWSxFQUFFLHNCQUFzQjtFQUNwQ0MsYUFBYSxFQUFFLDhCQUE4QjtFQUM3QyxNQUFNQyxVQUFVQSxDQUFDQyxRQUFRLEVBQUU7SUFDekIsSUFBSTtNQUNGLElBQUlDLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUVoQixTQUFTLENBQUNkLGFBQWEsQ0FBQzRCLFFBQVEsQ0FBQyxFQUFFO1FBQUMsTUFBTSxFQUFFO01BQU0sQ0FBQyxDQUFDO01BQ2hGQyxRQUFRLEdBQUcsTUFBTUEsUUFBUSxDQUFDRSxJQUFJLEVBQUU7TUFDaENILFFBQVEsQ0FBQ3BCLFFBQVEsR0FBR3FCLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ0csR0FBRztNQUNuQ0osUUFBUSxDQUFDbkIsU0FBUyxHQUFHb0IsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDSSxHQUFHO0lBQ3RDLENBQUMsQ0FBQyxNQUFNO01BQ04sT0FBTyxJQUFJLENBQUNQLGFBQWE7SUFDM0I7RUFDRixDQUFDO0VBQ0QsTUFBTVEsWUFBWUEsQ0FBQ04sUUFBUSxFQUFFO0lBQzNCLElBQUk7TUFDRixJQUFJTyxHQUFHLEdBQUcsTUFBTSxJQUFJLENBQUNSLFVBQVUsQ0FBQ0MsUUFBUSxDQUFDO01BQ3pDLElBQUlPLEdBQUcsS0FBSyxJQUFJLENBQUNULGFBQWEsRUFBRTtRQUM5QixJQUFJRyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFFaEIsU0FBUyxDQUFDUixhQUFhLENBQUNzQixRQUFRLENBQUMsRUFBRTtVQUFDLE1BQU0sRUFBRTtRQUFNLENBQUMsQ0FBQztRQUNoRixJQUFJUSxJQUFJLEdBQUcsTUFBTVAsUUFBUSxDQUFDRSxJQUFJLEVBQUU7UUFDaENNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLENBQUM7TUFDbkIsQ0FBQyxNQUFNO1FBQ0xDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQ1osYUFBYSxDQUFDO01BQ2pDO0lBQ0YsQ0FBQyxDQUFDLE1BQU07TUFDTlcsT0FBTyxDQUFDQyxHQUFHLENBQUMsSUFBSSxDQUFDYixZQUFZLENBQUM7SUFDaEM7RUFDRjtBQUNGLENBQUM7QUFFQyxTQUFTYyxZQUFZQSxDQUFBLEVBQUc7RUFDdEJmLEdBQUcsQ0FBQ1UsWUFBWSxDQUFDWixNQUFNLENBQUM7RUFDeEJlLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLG9CQUFvQixDQUFDO0FBQ3JDO0FBQ0FDLFlBQVksRUFBRSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wX193ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWNsYXNzZXMtcGVyLWZpbGVcbmNsYXNzIEFwaVVybHMge1xuXG4gIHN0YXRpYyBnZW9Db2RlU3RhcnQgPSBcImh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P1wiO1xuXG4gIHN0YXRpYyB3ZWF0aGVyU3RhcnQgPSBcImh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP1wiXG5cbiAgc3RhdGljIGtleSA9IFwiJmFwcGlkPTg1YWVmZjdiMDA2YWMwNWRiZGEzNzY1MjU5M2UxNWQyXCI7XG4gIFxuICBzdGF0aWMgbGltaXQgPSBcIiZsaW1pdD0xXCI7XG4gIFxuICBzdGF0aWMgZ2V0R2VvQ29kZVVybChxdWVyeSkge1xuICAgIHJldHVybiBgJHt0aGlzLmdlb0NvZGVTdGFydH1xPSR7cXVlcnkudXNlcklucHV0fSR7dGhpcy5saW1pdH0ke3RoaXMua2V5fWBcbiAgfVxuXG4gIHN0YXRpYyBnZXRXZWF0aGVyVXJsKHF1ZXJ5KSB7XG4gICAgcmV0dXJuIGAke3RoaXMud2VhdGhlclN0YXJ0fWxhdD0ke3F1ZXJ5LmxhdGl0dWRlfSZsb249JHtxdWVyeS5sb25naXR1ZGV9JHt0aGlzLmtleX1gXG4gIH1cbn1cblxuLy8gaW5mb3JtYXRpb24gaG9sZGVyXG5jbGFzcyBVc2VyUXVlcnkgZXh0ZW5kcyBBcGlVcmxzIHtcblxuICBjb25zdHJ1Y3Rvcihsb2NhdGlvbikge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy51c2VySW5wdXQgPSBsb2NhdGlvbjtcbiAgfVxuXG4gICNsYXQ7XG5cbiAgI2xvbjtcblxuICBzZXQgbGF0aXR1ZGUodmFsdWUpIHtcbiAgICB0aGlzLiNsYXQgPSB2YWx1ZTtcbiAgfTtcblxuICBnZXQgbGF0aXR1ZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2xhdDtcbiAgfVxuXG4gIHNldCBsb25naXR1ZGUodmFsdWUpIHtcbiAgICB0aGlzLiNsb24gPSB2YWx1ZTtcbiAgfTtcblxuICBnZXQgbG9uZ2l0dWRlKCkge1xuICAgIHJldHVybiB0aGlzLiNsb247XG4gIH1cblxufVxuY29uc3QgbG9uZG9uID0gbmV3IFVzZXJRdWVyeShcIkxvbmRvblwiKTtcblxuY29uc3QgdG9reW8gPSBuZXcgVXNlclF1ZXJ5KFwid2Fyc2F3XCIpO1xuXG4vLyBzZXJ2aWNlIHByb3ZpZGVyXG5jb25zdCBhcGkgPSB7XG4gIHdlYXRoZXJFcnJvcjogXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiLFxuICBsb2NhdGlvbkVycm9yOiBcIlVuYWJsZSB0byBmaW5kIHRoaXMgbG9jYXRpb25cIixcbiAgYXN5bmMgX3NldExhdExvTihxdWVyeU9iaikge1xuICAgIHRyeSB7XG4gICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCAoVXNlclF1ZXJ5LmdldEdlb0NvZGVVcmwocXVlcnlPYmopLCB7XCJtb2RlXCI6IFwiY29yc1wifSk7XG4gICAgICByZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHF1ZXJ5T2JqLmxhdGl0dWRlID0gcmVzcG9uc2VbMF0ubGF0O1xuICAgICAgcXVlcnlPYmoubG9uZ2l0dWRlID0gcmVzcG9uc2VbMF0ubG9uO1xuICAgIH0gY2F0Y2gge1xuICAgICAgcmV0dXJuIHRoaXMubG9jYXRpb25FcnJvcjtcbiAgICB9XG4gIH0sXG4gIGFzeW5jIGZldGNoV2VhdGhlcihxdWVyeU9iaikge1xuICAgIHRyeSB7XG4gICAgICBsZXQgb2JqID0gYXdhaXQgdGhpcy5fc2V0TGF0TG9OKHF1ZXJ5T2JqKTtcbiAgICAgIGlmIChvYmogIT09IHRoaXMubG9jYXRpb25FcnJvcikge1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCAoVXNlclF1ZXJ5LmdldFdlYXRoZXJVcmwocXVlcnlPYmopLCB7XCJtb2RlXCI6IFwiY29yc1wifSk7XG4gICAgICAgIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5sb2NhdGlvbkVycm9yKVxuICAgICAgfVxuICAgIH0gY2F0Y2gge1xuICAgICAgY29uc29sZS5sb2codGhpcy53ZWF0aGVyRXJyb3IpXG4gICAgfVxuICB9XG59XG5cbiAgZnVuY3Rpb24gY2hlY2tXZWF0aGVyKCkge1xuICAgIGFwaS5mZXRjaFdlYXRoZXIobG9uZG9uKTtcbiAgICBjb25zb2xlLmxvZyhcIndhaXRpbmcgb24gd2VhdGhlclwiKVxufVxuY2hlY2tXZWF0aGVyKCk7XG5cblxuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbIkFwaVVybHMiLCJnZXRHZW9Db2RlVXJsIiwicXVlcnkiLCJnZW9Db2RlU3RhcnQiLCJ1c2VySW5wdXQiLCJsaW1pdCIsImtleSIsImdldFdlYXRoZXJVcmwiLCJ3ZWF0aGVyU3RhcnQiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsIl9kZWZpbmVQcm9wZXJ0eSIsIl9sYXQiLCJXZWFrTWFwIiwiX2xvbiIsIlVzZXJRdWVyeSIsImNvbnN0cnVjdG9yIiwibG9jYXRpb24iLCJfY2xhc3NQcml2YXRlRmllbGRJbml0U3BlYyIsIndyaXRhYmxlIiwidmFsdWUiLCJfY2xhc3NQcml2YXRlRmllbGRTZXQiLCJfY2xhc3NQcml2YXRlRmllbGRHZXQiLCJsb25kb24iLCJ0b2t5byIsImFwaSIsIndlYXRoZXJFcnJvciIsImxvY2F0aW9uRXJyb3IiLCJfc2V0TGF0TG9OIiwicXVlcnlPYmoiLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsImxhdCIsImxvbiIsImZldGNoV2VhdGhlciIsIm9iaiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY2hlY2tXZWF0aGVyIl0sInNvdXJjZVJvb3QiOiIifQ==