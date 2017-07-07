import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ children }) => (
  <span className="Text">{children}</span>
)

Text.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Text;
