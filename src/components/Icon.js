import React from 'react';

const Icon = ({ name, clickable, ...props }) => (
  <i className={`icon fa fa-${name} clickable-${clickable}`} {...props} />
)

Icon.defaultProps = {
  clickable: false,
}

export default Icon;
