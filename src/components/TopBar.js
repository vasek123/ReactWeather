import React from 'react';

import Header from './Header';
import Icon from './Icon';

const TopBar = ({ weatherIsLoading, weather, toggleSearchScreen }) => {

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
        <Icon clickable name="refresh" color="#fff" />
        <Icon clickable onClick={() => toggleSearchScreen(true)} name="search" color="#fff" />
      </div>
    </div>
  )
}

export default TopBar;
