
import React from 'react';
import PropTypes from 'prop-types';

const BaseComponent = (props) => {
  const { Component, children, attrs } = props;
  return (
    <Component {...attrs}>
      <span>
        {children}
      </span>
    </Component>
  );
};

BaseComponent.propTypes = {
  children: PropTypes.node.isRequired,
  attrs: PropTypes.shape({
    href: PropTypes.string,
  }),
  style: PropTypes.objectOf(PropTypes.string),
  inlineStyles: PropTypes.objectOf(PropTypes.object),
  className: PropTypes.string,
  classNames: PropTypes.objectOf(PropTypes.object),
  Component: PropTypes.node,
};

BaseComponent.defaultProps = {
  attrs: null,
  style: {},
  inlineStyles: {},
  className: '',
  classNames: {},
  Component: 'a',
};

export { BaseComponent };
