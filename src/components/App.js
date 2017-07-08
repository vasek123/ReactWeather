import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchScreenContainer from '../containers/SearchScreenContainer';
import SidepanelContainer from '../containers/SidepanelContainer';
import Map from './Map';

class App extends Component {
  static propTypes = {
    storeCoordinates: PropTypes.func.isRequired,
    getWeatherByCoordinates: PropTypes.func.isRequired,
    coordinates: PropTypes.object,
  }

  static defaultProps = {
    coordinates: {},
  }

  constructor(props) {
    super(props);
    this.state = {
      showSearchScreen: false,
    }

    this.getUsersPositionAndWeather = this.getUsersPositionAndWeather.bind(this);
    this.toggleSearchScreen = this.toggleSearchScreen.bind(this);
  }

  getUsersPositionAndWeather() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.props.storeCoordinates(position.coords.latitude, position.coords.longitude);
      this.props.getWeatherByCoordinates(position.coords.latitude, position.coords.longitude);
    });
  }

  componentDidMount() {
    this.getUsersPositionAndWeather();
  }

  toggleSearchScreen(show) {
    this.setState({ showSearchScreen: show !== undefined ? show : !this.state.showSearchScreen });
  }

  render() {
    /* if (this.state.showSearchScreen) {
      return (
        <div className="App">
          <SearchScreen toggleSearchScreen={this.toggleSearchScreen} />
        </div>
      )
    } */
    return (
      <div className="App">
        <SearchScreenContainer
          className={this.state.showSearchScreen ? 'active' : ''}
          toggleSearchScreen={this.toggleSearchScreen}
        />
        <SidepanelContainer
          getUsersPositionAndWeather={this.getUsersPositionAndWeather}
          toggleSearchScreen={this.toggleSearchScreen}
        />
        <Map
          coordinates={this.props.coordinates}
        />
      </div>
    );
  }
}

export default App;
