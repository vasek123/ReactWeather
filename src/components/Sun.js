import React from 'react';
import moment from 'moment';

import SmallHeader from './SmallHeader';
import Text from './Text';

const Sun = ({ title, time }) => {

  time = moment(time).utc().format('hh:mm:ss');

  return (
    <div className="Info Sun">
      <SmallHeader>{title}</SmallHeader>
      <br />
      <Text>{time}</Text>
    </div>
  )
}

export default Sun;
