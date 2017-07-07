import React from 'react';

import SmallHeader from './SmallHeader';
import Icon from './Icon';
import Text from './Text';

const Wind = ({ speed, deg }) => (
  <div className="Info Wind">
    <SmallHeader>WIND DIRECTION AND SPEED</SmallHeader>
    <br />
    <Icon
      name="long-arrow-up"
      style={{
        transformOrigin: 'center',
        transform: `rotate(${deg}deg)`,
        marginRight: 18,
      }}
    />
    <Text>{`${speed} m/s`}</Text>
  </div>
)

export default Wind;
