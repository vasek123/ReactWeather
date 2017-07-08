import { connect } from 'react-redux';
import Sidepanel from '../components/Sidepanel';

const mapStateToProps = (state, ownProps) => ({
  weatherIsLoading: state.weatherIsLoading,
  weather: state.weather,
  ...ownProps,
})

const SidepanelContainer = connect(
  mapStateToProps
)(Sidepanel);

export default SidepanelContainer;
