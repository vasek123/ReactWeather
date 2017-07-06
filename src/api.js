const API_KEY = 'f23504c3ec01671ea27bb7434849cf7b';
const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather';

const api = {
  getWeatherByCoordinates: (lat, lon, cb) => {
    fetch(`${BASE_URL}?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      })
  },

  getWeatherByCity: (city, cb) => {
    fetch(`${BASE_URL}?q=${city}&APPID=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      })
  },
}

export default api;
