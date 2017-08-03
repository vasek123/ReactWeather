import { connect } from 'react-redux';
import * as actions from '../redux/actions';

import SearchScreen from '../components/SearchScreen';

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
})

const mapDispatchToProps = dispatch => ({
  getWeatherByCity: (city) => dispatch(actions.getWeatherByCity(city)),
  toggleSearchScreen: (show) => dispatch(actions.toggleSearchScreen(show)),
})

const SearchScreenContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchScreen);

export default SearchScreenContainer;
