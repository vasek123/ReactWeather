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

    default: {
      return state;
    }
  }
}

export default reducer;
