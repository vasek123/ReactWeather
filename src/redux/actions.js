import * as actionTypes from './actionTypes';
import api from '../api';

// Actions
export const usersCoordinatesReceived = (lat, lon) => ({
  type: actionTypes.USERS_COORDINATES_RECEIVED,
  lon,
  lat,
})

export const getWeatherSuccess = (weather) => ({
  type: actionTypes.GET_WEATHER_SUCCESS,
  weather,
})

export const getWeatherByCoordinate = (lat, lon) => {
  return (dispatch) => {
    api.getWeatherByCoordinates(lat, lon, (weather) => {
      dispatch(getWeatherSuccess(weather));
    })
  }
}
