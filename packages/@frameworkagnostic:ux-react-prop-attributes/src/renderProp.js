
import React from 'react';
import { appendPropTypes } from './utils/propTypeMeta';
import PropTypes from 'prop-types';

const PropAttributes = (props) => {
  const {
    attrs,
    children,
    renderProp,
    ...remaining,
  } = props;

  return renderProp(attrs ? {
    attrs,
    style: remaining.style,
    inlineStyles: remaining.inlineStyles,
    className: remaining.className,
    classNames: remaining.classNames,
    Component: remaining.Component,
    Components: remaining.Components,
  } : {
    attrs: remaining
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
  renderProp: PropTypes.func,
};

PropAttributes.defaultProps = {
  attrs: null,
  style: {},
  inlineStyles: {},
  className: '',
  classNames: {},
  Component: null,
  Components: null,
  renderProp: () => (
    <div>No renderProp provided</div>
  ),
};

export { PropAttributes };
