import React from 'react';
import PropTypes from 'prop-types';

const SmallHeader = ({ children }) => (
  <span className="SmallHeader">{children}</span>
)

SmallHeader.propTypes = {
  children: PropTypes.string.isRequired,
}

export default SmallHeader;
