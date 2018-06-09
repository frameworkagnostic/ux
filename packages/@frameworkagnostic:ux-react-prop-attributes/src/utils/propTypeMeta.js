
import React from 'react';
import PropTypes from 'prop-types';

export const commonPropTypes = () => ({
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
});

export const commonDefaultProps = () => ({
  attrs: null,
  style: {},
  inlineStyles: {},
  className: '',
  classNames: {},
  Component: null,
  Components: null,
});

export const appendPropTypes = (Component, extendDefaultProps = {}, extendPropTypes = {}) => {
  Component.defaultProps = Object.assign(
    commonDefaultProps(),
    extendDefaultProps,
  );

  Component.propTypes = Object.assign(
    commonPropTypes(),
    extendPropTypes,
  );

  return Component;
}
