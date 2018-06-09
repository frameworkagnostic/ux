
import React from 'react';
import { appendPropTypes } from './utils/propTypeMeta';

const PropAttributes = (props) => {
  const {
    attrs,
    children,
    ...remaining,
  } = props;

  return React.cloneElement(children, attrs ? {
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

appendPropTypes(PropAttributes);

export { PropAttributes };
