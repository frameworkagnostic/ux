
import React from 'react';
import PropTypes from 'prop-types';
import { BaseComponent } from './BaseComponent';

const Link = (props) => {
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

Link.propTypes = {
  children: PropTypes.node.isRequired,
  Component: PropTypes.node,
  href: PropTypes.string,
  attrs: PropTypes.shape({
    onClick: PropTypes.func,
  }),
  style: PropTypes.objectOf(PropTypes.string),
  className: PropTypes.string
};

Link.defaultProps = {
  attrs: null,
  style: {},
  className: '',
  Component: 'a',
  href: ''
};

export { Link };
