import React from 'react';

const Icon = ({ name, clickable, color, style, ...props }) => (
  <i
    className={`icon fa fa-${name} clickable-${clickable}`}
    style={{ color, ...style }}
    {...props}
  />
)

Icon.defaultProps = {
  clickable: false,
  color: '#000',
}

export default Icon;
