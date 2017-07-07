import React from 'react';

import TopBar from './TopBar';
import WeatherInfoContainer from '../containers/WeatherInfoContainer';

const Sidepanel = (props) => {
  return (
    <div className="Sidepanel">
      <TopBar {...props} />
      <WeatherInfoContainer />
    </div>
  )
}

export default Sidepanel;
