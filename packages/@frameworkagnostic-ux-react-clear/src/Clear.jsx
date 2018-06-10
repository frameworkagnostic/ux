
import React from 'react';
import PropTypes from 'prop-types';

const Clear = (props) => {
  const { Component, className, style } = props;
  return <Component className={className} style={style} />;
};

Clear.propTypes = {
  className: PropTypes.string,
  Component: PropTypes.node,
  style: PropTypes.objectOf(PropTypes.string),
};

Clear.defaultProps = {
  className: '',
  Component: 'a',
  style: {
    clear: 'both'
  },
};

export { Clear };
