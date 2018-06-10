
import React from 'react';
import PropTypes from 'prop-types';
import { BaseComponent } from './BaseComponent';

const Button = (props) => {
  const {
    attrs,
    onClick,
    className,
    ...remainingProps
  } = props;

  return (<BaseComponent
    {...remainingProps}
    attrs={{
      onClick,
      className,
      ...attrs,
    }}
  />);
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  Component: PropTypes.node,
  attrs: PropTypes.shape({
    onClick: PropTypes.func,
  }),
  style: PropTypes.objectOf(PropTypes.string),
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  attrs: null,
  style: {},
  className: '',
  Component: 'button',
  onClick: () => null
};

export { Button };
