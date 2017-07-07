import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import WeatherInfo from './WeatherInfo';
import SidepanelContainer from '../containers/SidepanelContainer';
import Map from './Map';

class App extends Component {
  static propTypes = {
    storeCoordinates: PropTypes.func.isRequired,
    getWeatherByCoordinates: PropTypes.func.isRequired,
    usersCoordinates: PropTypes.object,
  }

  static defaultProps = {
    usersCoordinates: {},
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.props.storeCoordinates(position.coords.latitude, position.coords.longitude);
      this.props.getWeatherByCoordinates(this.props.usersCoordinates.lat, this.props.usersCoordinates.lon);
    });
  }

  render() {
    return (
      <div className="App">
        <SidepanelContainer />
        <Map
          usersCoordinates={this.props.usersCoordinates}
        />
      </div>
    );
  }
}

export default App;
