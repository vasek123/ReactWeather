import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import App from '../components/App';

const mapStateToProps = state => ({
  coordinates: state.coordinates,
  weather: state.weather,
  weatherIsLoading: state.weatherIsLoading,
  isSearchScreenVisible: state.isSearchScreenVisible,
})

const mapDispatchToProps = dispatch => ({
  storeCoordinates: (lat, lon) => dispatch(actions.usersCoordinatesReceived(lat, lon)),
  getWeatherByCoordinates: (lat, lon) => dispatch(actions.getWeatherByCoordinates(lat, lon)),
  toggleSearchScreen: (show) => dispatch(actions.toggleSearchScreen(show)),
})

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer;
