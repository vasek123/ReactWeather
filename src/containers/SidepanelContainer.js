import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import Sidepanel from '../components/Sidepanel';

const mapStateToProps = (state, ownProps) => ({
  weatherIsLoading: state.weatherIsLoading,
  weather: state.weather,
  coordinates: state.coordinates,
  ...ownProps,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  refresh: (lat, lon) => dispatch(actions.getWeatherByCoordinates(lat, lon)),
  toggleSearchScreen: (show) => dispatch(actions.toggleSearchScreen(show)),
})

const SidepanelContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidepanel);

export default SidepanelContainer;
