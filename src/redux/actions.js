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

export const getWeatherSuccess = (weather) => ({
  type: actionTypes.GET_WEATHER_SUCCESS,
  weather,
})

export const getWeatherByCoordinates = (lat, lon) => {
  return (dispatch) => {
    dispatch(weatherIsLoading());
    api.getWeatherByCoordinates(lat, lon, (weather) => {
      dispatch(getWeatherSuccess(weather));
    })
  }
}
