import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

class App extends Component {
  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.props.storeCoordinates(position.coords.latitude, position.coords.longitude);
    });
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  storeCoordinates: (lat, lon) => dispatch(actions.usersCoordinatesReceived(lat, lon)),
})

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;
