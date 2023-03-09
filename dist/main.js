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

// eslint-disable-next-line max-classes-per-file
class ApiUrls {
  static getGeoCodeUrl(query) {
    return `${this.geoCodeStart}q=${query.userInput}${this.limit}${this.key}`;
  }
  static getWeatherUrl(query) {
    return `${this.weatherStart}lat=${query.latitude}&lon=${query.longitude}${this.key}`;
  }
}
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
const london = new UserQuery("LONDON");
async function fetchLatLon(queryObj) {
  try {
    let response = await fetch(UserQuery.getGeoCodeUrl(queryObj), {
      "mode": "cors"
    });
    response = await response.json();
    return response;
  } catch {
    return console.log("error");
  }
}
function destructureLatLon(queryObj, response) {
  queryObj.latitude = response[0].lat;
  queryObj.longitude = response[0].lon;
}
async function getLatLon(queryObj) {
  let response = await fetchLatLon(queryObj);
  destructureLatLon(queryObj, response);

  //fetchLatLon(queryObj).then(response => {destructureLatLon(queryObj, response)});
  console.log(queryObj);
}
async function fetchWeather(queryObj) {
  try {
    let response = await fetch(UserQuery.getWeatherUrl(queryObj), {
      "mode": "cors"
    });
    response = await response.json();
    console.log(response);
    return response;
  } catch {
    return console.log("error weather");
  }
}
async function checkWeather() {
  await getLatLon(london);
  fetchWeather(london);
  console.log("waiting on weather data");
}
checkWeather();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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USxFQUFFO0VBQ3BDLElBQUk7SUFDRixJQUFJQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFFWixTQUFTLENBQUNSLGFBQWEsQ0FBQ2tCLFFBQVEsQ0FBQyxFQUFFO01BQUMsTUFBTSxFQUFFO0lBQU0sQ0FBQyxDQUFDO0lBQ2hGQyxRQUFRLEdBQUcsTUFBTUEsUUFBUSxDQUFDRSxJQUFJLEVBQUU7SUFDaENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixRQUFRLENBQUM7SUFDckIsT0FBT0EsUUFBUTtFQUVqQixDQUFDLENBQUMsTUFBSztJQUNMLE9BQU9HLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsQ0FBQztFQUNyQztBQUNGO0FBS0EsZUFBZU0sWUFBWUEsQ0FBQSxFQUFHO0VBQzVCLE1BQU1GLFNBQVMsQ0FBQ1gsTUFBTSxDQUFDO0VBRXZCWSxZQUFZLENBQUNaLE1BQU0sQ0FBQztFQUNwQk0sT0FBTyxDQUFDQyxHQUFHLENBQUMseUJBQXlCLENBQUM7QUFFeEM7QUFDQU0sWUFBWSxFQUFFLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3BfX3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtY2xhc3Nlcy1wZXItZmlsZVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWNsYXNzZXMtcGVyLWZpbGVcbmNsYXNzIEFwaVVybHMge1xuXG4gIHN0YXRpYyBnZW9Db2RlU3RhcnQgPSBcImh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P1wiO1xuXG4gIHN0YXRpYyB3ZWF0aGVyU3RhcnQgPSBcImh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP1wiXG5cbiAgc3RhdGljIGtleSA9IFwiJmFwcGlkPTg1YWVmZjdiMDA2YWMwNWRiZGEzNzY1MjU5M2UxNWQyXCI7XG4gIFxuICBzdGF0aWMgbGltaXQgPSBcIiZsaW1pdD0xXCI7XG4gIFxuICBzdGF0aWMgZ2V0R2VvQ29kZVVybChxdWVyeSkge1xuICAgIHJldHVybiBgJHt0aGlzLmdlb0NvZGVTdGFydH1xPSR7cXVlcnkudXNlcklucHV0fSR7dGhpcy5saW1pdH0ke3RoaXMua2V5fWBcbiAgfVxuXG4gIHN0YXRpYyBnZXRXZWF0aGVyVXJsKHF1ZXJ5KSB7XG4gICAgcmV0dXJuIGAke3RoaXMud2VhdGhlclN0YXJ0fWxhdD0ke3F1ZXJ5LmxhdGl0dWRlfSZsb249JHtxdWVyeS5sb25naXR1ZGV9JHt0aGlzLmtleX1gXG4gIH1cbn1cblxuXG5jbGFzcyBVc2VyUXVlcnkgZXh0ZW5kcyBBcGlVcmxzIHtcblxuICBjb25zdHJ1Y3Rvcihsb2NhdGlvbikge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy51c2VySW5wdXQgPSBsb2NhdGlvbjtcbiAgfVxuXG4gICNsYXQ7XG5cbiAgI2xvbjtcblxuICBzZXQgbGF0aXR1ZGUodmFsdWUpIHtcbiAgICB0aGlzLiNsYXQgPSB2YWx1ZTtcbiAgfTtcblxuICBnZXQgbGF0aXR1ZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuI2xhdDtcbiAgfVxuXG4gIHNldCBsb25naXR1ZGUodmFsdWUpIHtcbiAgICB0aGlzLiNsb24gPSB2YWx1ZTtcbiAgfTtcblxuICBnZXQgbG9uZ2l0dWRlKCkge1xuICAgIHJldHVybiB0aGlzLiNsb247XG4gIH1cblxufVxuY29uc3QgbG9uZG9uID0gbmV3IFVzZXJRdWVyeShcIkxPTkRPTlwiKTtcblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hMYXRMb24ocXVlcnlPYmopIHtcbiAgdHJ5IHtcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCAoVXNlclF1ZXJ5LmdldEdlb0NvZGVVcmwocXVlcnlPYmopLCB7XCJtb2RlXCI6IFwiY29yc1wifSk7XG4gICAgcmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBjb25zb2xlLmxvZyhcImVycm9yXCIpXG4gIH1cbn1cblxuZnVuY3Rpb24gZGVzdHJ1Y3R1cmVMYXRMb24ocXVlcnlPYmosIHJlc3BvbnNlKSB7XG4gIHF1ZXJ5T2JqLmxhdGl0dWRlID0gcmVzcG9uc2VbMF0ubGF0O1xuICBxdWVyeU9iai5sb25naXR1ZGUgPSByZXNwb25zZVswXS5sb247XG59XG5cblxuYXN5bmMgZnVuY3Rpb24gZ2V0TGF0TG9uKHF1ZXJ5T2JqKSB7XG4gIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoTGF0TG9uKHF1ZXJ5T2JqKTtcbiAgZGVzdHJ1Y3R1cmVMYXRMb24ocXVlcnlPYmosIHJlc3BvbnNlKTtcblxuICAvL2ZldGNoTGF0TG9uKHF1ZXJ5T2JqKS50aGVuKHJlc3BvbnNlID0+IHtkZXN0cnVjdHVyZUxhdExvbihxdWVyeU9iaiwgcmVzcG9uc2UpfSk7XG4gIGNvbnNvbGUubG9nKHF1ZXJ5T2JqKVxufVxuXG5cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyKHF1ZXJ5T2JqKSB7XG4gIHRyeSB7XG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2ggKFVzZXJRdWVyeS5nZXRXZWF0aGVyVXJsKHF1ZXJ5T2JqKSwge1wibW9kZVwiOiBcImNvcnNcIn0pO1xuICAgIHJlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgIHJldHVybiByZXNwb25zZTtcblxuICB9IGNhdGNoe1xuICAgIHJldHVybiBjb25zb2xlLmxvZyhcImVycm9yIHdlYXRoZXJcIik7XG4gIH1cbn1cblxuXG5cblxuYXN5bmMgZnVuY3Rpb24gY2hlY2tXZWF0aGVyKCkge1xuICBhd2FpdCBnZXRMYXRMb24obG9uZG9uKTtcbiBcbiAgZmV0Y2hXZWF0aGVyKGxvbmRvbik7XG4gIGNvbnNvbGUubG9nKFwid2FpdGluZyBvbiB3ZWF0aGVyIGRhdGFcIilcblxufVxuY2hlY2tXZWF0aGVyKCk7XG5cblxuXG5cblxuXG5cbiJdLCJuYW1lcyI6WyJBcGlVcmxzIiwiZ2V0R2VvQ29kZVVybCIsInF1ZXJ5IiwiZ2VvQ29kZVN0YXJ0IiwidXNlcklucHV0IiwibGltaXQiLCJrZXkiLCJnZXRXZWF0aGVyVXJsIiwid2VhdGhlclN0YXJ0IiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJfZGVmaW5lUHJvcGVydHkiLCJfbGF0IiwiV2Vha01hcCIsIl9sb24iLCJVc2VyUXVlcnkiLCJjb25zdHJ1Y3RvciIsImxvY2F0aW9uIiwiX2NsYXNzUHJpdmF0ZUZpZWxkSW5pdFNwZWMiLCJ3cml0YWJsZSIsInZhbHVlIiwiX2NsYXNzUHJpdmF0ZUZpZWxkU2V0IiwiX2NsYXNzUHJpdmF0ZUZpZWxkR2V0IiwibG9uZG9uIiwiZmV0Y2hMYXRMb24iLCJxdWVyeU9iaiIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwiY29uc29sZSIsImxvZyIsImRlc3RydWN0dXJlTGF0TG9uIiwibGF0IiwibG9uIiwiZ2V0TGF0TG9uIiwiZmV0Y2hXZWF0aGVyIiwiY2hlY2tXZWF0aGVyIl0sInNvdXJjZVJvb3QiOiIifQ==