import React from 'react';

import Header from './Header';
import Icon from './Icon';

const TopBar = ({ weatherIsLoading, weather, coordinates, refresh, toggleSearchScreen, getUsersPositionAndWeather }) => {

  const { name } = weather;

  if (weatherIsLoading) return (
    <div className="TopBar">
      <Header style={{ margin: 0, display: 'inline-block' }}>Loading...</Header>
    </div>
  )

  return (
    <div className="TopBar">
      <Header style={{ margin: 0, display: 'inline-block' }}>{name}</Header>
      <div>
        <Icon clickable onClick={() => refresh(coordinates.lat, coordinates.lon)} name="refresh" color="#fff" />
        <Icon clickable onClick={() => getUsersPositionAndWeather()} name="location-arrow" color="#fff" />
        <Icon clickable onClick={() => toggleSearchScreen(true)} name="search" color="#fff" />
      </div>
    </div>
  )
}

export default TopBar;
