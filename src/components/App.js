import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchScreen from './SearchScreen';
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

    this.toggleSearchScreen = this.toggleSearchScreen.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.props.storeCoordinates(position.coords.latitude, position.coords.longitude);
      this.props.getWeatherByCoordinates(position.coords.latitude, position.coords.longitude);
    });
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
        <SearchScreen
          className={this.state.showSearchScreen ? 'active' : ''}
          toggleSearchScreen={this.toggleSearchScreen}
        />
        <SidepanelContainer toggleSearchScreen={this.toggleSearchScreen} />
        <Map
          coordinates={this.props.coordinates}
        />
      </div>
    );
  }
}

export default App;
