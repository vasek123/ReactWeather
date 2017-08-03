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

    this.getUsersPositionAndWeather = this.getUsersPositionAndWeather.bind(this);
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

  render() {
    return (
      <div className="App">
        <SearchScreenContainer className={this.props.isSearchScreenVisible ? 'active' : ''} />
        <SidepanelContainer getUsersPositionAndWeather={this.getUsersPositionAndWeather} />
        <Map coordinates={this.props.coordinates} />
      </div>
    );
  }
}

export default App;
