
import React from 'react';
import PropTypes from 'prop-types';

const PropAttributes = (props) => {
  const {
    attrs,
    children,
    ...remaining
  } = props;

  console.log('children', children);
  if (!children) {
    return <div>No renderProp provided</div>;
  }

  return React.cloneElement(children, attrs ? {
    attrs,
    style: remaining.style,
    inlineStyles: remaining.inlineStyles,
    className: remaining.className,
    classNames: remaining.classNames,
    Component: remaining.Component,
    Components: remaining.Components,
  } : {
    attrs: remaining,
  });
};

PropAttributes.propTypes = {
  children: PropTypes.oneOf([
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

PropAttributes.defaultProps = {
  attrs: null,
  style: {},
  inlineStyles: {},
  className: '',
  classNames: {},
  Component: null,
  Components: null,
};

export { PropAttributes };
