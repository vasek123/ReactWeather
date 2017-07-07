import React from 'react';
import PropTypes from 'prop-types';

import SmallHeader from './SmallHeader';
import Text from './Text';

const Info = ({ title, text }) => (
  <div className="Info">
    <SmallHeader>{title}</SmallHeader>
    <br />
    <Text>{text}</Text>
  </div>
)

export default Info;
