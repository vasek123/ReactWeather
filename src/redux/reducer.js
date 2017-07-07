import * as actionTypes from './actionTypes';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.USERS_COORDINATES_RECEIVED: {
      return {
        ...state,
        usersCoordinates: {
          lat: action.lat,
          lon: action.lon,
        },
      }
    }

    case actionTypes.WEATHER_IS_LOADING: {
      return {
        ...state,
        weatherIsLoading: true,
      }
    }

    case actionTypes.GET_WEATHER_SUCCESS: {
      return {
        ...state,
        weather: action.weather,
        weatherIsLoading: false,
      }
    }

    default: {
      return state;
    }
  }
}

export default reducer;
