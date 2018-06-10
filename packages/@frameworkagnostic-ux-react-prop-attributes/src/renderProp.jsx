
import React from 'react';
import PropTypes from 'prop-types';

const PropAttributes = (props) => {
  const {
    attrs,
    children,
    render,
    renderComponent,
    Component,
    Components,
    inlineStyles,
    classNames,
    ...remainingProps
  } = props;

  if (renderComponent) {
    return React.createElement(renderComponent, {
      ...remainingProps,
      Component,
      Components,
      inlineStyles,
      classNames,
      attrs: attrs || remainingProps,
    }, children);
  }

  return render({
    ...remainingProps,
    children,
    Component,
    Components,
    inlineStyles,
    classNames,
    attrs: attrs || remainingProps,
  });
};

PropAttributes.propTypes = {
  attrs: PropTypes.objectOf(PropTypes.object),
  style: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.node,
  inlineStyles: PropTypes.objectOf(PropTypes.object),
  className: PropTypes.string,
  classNames: PropTypes.objectOf(PropTypes.object),
  Component: PropTypes.bool,
  Components: PropTypes.bool,
  render: PropTypes.func,
  renderComponent: PropTypes.func,
};

PropAttributes.defaultProps = {
  attrs: null,
  children: null,
  style: {},
  inlineStyles: {},
  className: '',
  classNames: {},
  Component: undefined,
  Components: undefined,
  renderComponent: () => (
    <div>No render component provided</div>
  ),
  render: () => (
    <div>No render prop provided</div>
  ),
};

export { PropAttributes };
