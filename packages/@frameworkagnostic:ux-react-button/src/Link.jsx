
import React from 'react';
import PropTypes from 'prop-types';

const Link = (props) => {
  const { Component, children, attrs } = props;
  console.log(props);
  return (
    <Component {...attrs}>
      <span>
        {children}
      </span>
    </Component>
  );
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  attrs: PropTypes.shape({
    href: PropTypes.string,
  }),
  style: PropTypes.objectOf(PropTypes.string),
  inlineStyles: PropTypes.objectOf(PropTypes.object),
  className: PropTypes.string,
  classNames: PropTypes.objectOf(PropTypes.object),
  Component: PropTypes.node,
  Components: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.node,
    PropTypes.element,
  ]),
};

Link.defaultProps = {
  attrs: null,
  style: {},
  inlineStyles: {},
  className: '',
  classNames: {},
  Component: 'a',
  Components: null,
};

export { Link };
