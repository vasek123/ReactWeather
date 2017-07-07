import { connect } from 'react-redux';
import Sidepanel from '../components/Sidepanel';

const mapStateToProps = state => ({
  weatherIsLoading: state.weatherIsLoading,
  weather: state.weather,
})

const SidepanelContainer = connect(
  mapStateToProps
)(Sidepanel);

export default SidepanelContainer;
