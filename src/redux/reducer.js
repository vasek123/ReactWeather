import * as actionTypes from './actionTypes';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.USERS_COORDINATES_RECEIVED: {
      return {
        ...state,
        coordinates: {
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

    case actionTypes.GET_WEATHER_BY_COORDINATES_SUCCESS: {
      return {
        ...state,
        weather: action.weather,
        weatherIsLoading: false,
      }
    }

    case actionTypes.GET_WEATHER_BY_CITY_SUCCESS: {
      return {
        ...state,
        weather: action.weather,
        weatherIsLoading: false,
        coordinates: {
          lat: action.weather.coord.lat,
          lon: action.weather.coord.lon,
        },
      }
    }

    case actionTypes.TOGGLE_SEARCH_SCREEN: {
      return {
        ...state,
        isSearchScreenVisible: action.show !== undefined ? action.show : !state.isSearchScreenVisible,
      }
    }

    default: {
      return state;
    }
  }
}

export default reducer;
