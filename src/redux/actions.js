import * as actionTypes from './actionTypes';
import api from '../api';

// Actions
export const usersCoordinatesReceived = (lat, lon) => ({
  type: actionTypes.USERS_COORDINATES_RECEIVED,
  lon,
  lat,
})

export const weatherIsLoading = () => ({
  type: actionTypes.WEATHER_IS_LOADING,
})

export const getWeatherByCoordinatesSuccess = (weather) => ({
  type: actionTypes.GET_WEATHER_BY_COORDINATES_SUCCESS,
  weather,
})

export const getWeatherByCitySuccess = (weather) => ({
  type: actionTypes.GET_WEATHER_BY_CITY_SUCCESS,
  weather,
})

export const getWeatherByCoordinates = (lat, lon) => {
  return (dispatch) => {
    dispatch(weatherIsLoading());
    api.getWeatherByCoordinates(lat, lon, (weather) => {
      dispatch(getWeatherByCoordinatesSuccess(weather));
    })
  }
}

export const getWeatherByCity = (city) => {
  return (dispatch) => {
    dispatch(weatherIsLoading());
    api.getWeatherByCity(city, (weather) => {
      dispatch(getWeatherByCitySuccess(weather));
    })
  }
}
