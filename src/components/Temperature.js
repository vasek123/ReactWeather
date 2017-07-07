import React from 'react';
import PropTypes from 'prop-types';

import SmallHeader from './SmallHeader';
import Text from './Text';

const Temperature = ({ title, temperature }) => {
  return (
    <div className="Info Temperature">
      <SmallHeader>{title}</SmallHeader>
      <br />
      <Text>{`${temperature}°C`}</Text>
    </div>
  )
}

Temperature.defaultProps = {
  title: 'TEMPERATURE',
}

export default Temperature;
