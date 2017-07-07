import React from 'react';

import Header from './Header';
import Icon from './Icon';

const TopBar = ({ weatherIsLoading, weather }) => {

  const { name } = weather;

  if (weatherIsLoading) return (
    <div className="TopBar">
      <Header style={{ margin: 0, display: 'inline-block' }}>Loading...</Header>
    </div>
  )

  return (
    <div className="TopBar">
      <Header style={{ margin: 0, display: 'inline-block' }}>{name}</Header>
      <Icon clickable name="refresh" />
    </div>
  )
}

export default TopBar;
