import React from 'react';

import Header from './Header';
import SmallHeader from './SmallHeader';
import Info from './Info';
import Temperature from './Temperature';
import Sun from './Sun';
import Wind from './Wind';

const weatherIsLoadingStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  // height: '100%',
}

const WeatherInfo = ({ weatherIsLoading, weather }) => {

  const { name, main, sys, wind, weather: w } = weather;

  if (weatherIsLoading) return (
    <div className="WeatherInfo" style={weatherIsLoadingStyle}>
      <SmallHeader>Loading...</SmallHeader>
    </div>
  )

  return (
    <div className="WeatherInfo">

      <Info title="current weather" text={w[0].description} /><br />

      <Temperature temperature={main.temp} />
      <Temperature title="min" temperature={main.temp_min} />
      <Temperature title="max" temperature={main.temp_max} /><br />

      <Sun title="sunrise" time={sys.sunrise} />
      <Sun title="sunset" time={sys.sunset} /><br />

      <Info title="humidity"text={`${main.humidity}%`} />
      <Wind speed={wind.speed} deg={wind.deg} />
    </div>
  )
}

WeatherInfo.defaultProps = {
  weather: {
    name: ""
  },
}

export default WeatherInfo;
