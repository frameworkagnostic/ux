
import React from 'react';
import PropTypes from 'prop-types';

const Link = (props) => {
  const { Component, children, attrs } = props;

  return (
    <Component {...attrs}>
      <span>
        {children}
      </span>
    </Component>
  );
};

Link.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.node,
    PropTypes.element,
  ]).isRequired,
  attrs: PropTypes.objectOf(PropTypes.object),
  style: PropTypes.objectOf(PropTypes.string),
  inlineStyles: PropTypes.objectOf(PropTypes.object),
  className: PropTypes.string,
  classNames: PropTypes.objectOf(PropTypes.object),
  Component: PropTypes.oneOf([
    PropTypes.bool,
    PropTypes.node,
    PropTypes.element,
  ]),
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
