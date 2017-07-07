import { connect } from 'react-redux';
import WeatherInfo from '../components/WeatherInfo';

const mapStateToProps = state => ({
  weatherIsLoading: state.weatherIsLoading,
  weather: state.weather,
})

const WeatherInfoContainer = connect(
  mapStateToProps
)(WeatherInfo);

export default WeatherInfoContainer;
