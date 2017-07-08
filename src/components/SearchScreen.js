import React, { Component } from 'react';

import Icon from './Icon';
import Input from './Input';

class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    }

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    this.setState({ input: e.target.value });
  }

  render() {

    const { className } = this.props;

    return (
      <div className={`SearchScreen ${className}`}>
        <div style={{ position: 'absolute', top: 0, right: 0, padding: 30 }}>
          <Icon clickable onClick={() => this.props.toggleSearchScreen(false)} name="close" color="#fff" />
        </div>
        <Input placeholder="City" value={this.state.input} onChange={this.onInputChange} />
        <Icon
          clickable
          onClick={() => { this.props.getWeatherByCity(this.state.input); this.props.toggleSearchScreen(false); }}
          name="search"
          color="#fff"
        />
      </div>
    )
  }
}

export default SearchScreen;
