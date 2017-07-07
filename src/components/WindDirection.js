import React from 'react';

import SmallHeader from './SmallHeader';
import Icon from './Icon';
import Text from './Text';

const WindDirection = ({ direction }) => (
  <div className="Info WindDirection">
    <SmallHeader>WIND DIRECTION</SmallHeader>
    <br />
    <Icon name="long-arrow-up" style={{ transform: `rotate(${direction}deg)` }} />
    <Text>{`${direction}deg`}</Text>
  </div>
)

export default WindDirection;
