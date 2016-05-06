var axios = require('axios');

// api key: 23212bbf2cb83fc09746e45e5e543576
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=23212bbf2cb83fc09746e45e5e543576&units=metric';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error (res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error (res.date.message);
    });
  }
}
