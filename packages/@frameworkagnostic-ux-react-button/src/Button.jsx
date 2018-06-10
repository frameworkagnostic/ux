
import React from 'react';
import PropTypes from 'prop-types';
import { BaseComponent } from './BaseComponent';

const Button = (props) => {
  const {
    attrs,
    href,
    className,
    ...remainingProps
  } = props;

  return (<BaseComponent
    {...remainingProps}
    attrs={{
      href,
      className,
      ...attrs,
    }}
  />);
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  Component: PropTypes.node,
  href: PropTypes.string,
  attrs: PropTypes.shape({
    onClick: PropTypes.func,
  }),
  style: PropTypes.objectOf(PropTypes.string),
  className: PropTypes.string
};

Button.defaultProps = {
  attrs: null,
  style: {},
  className: '',
  Component: 'button',
  href: ''
};

export { Button };
