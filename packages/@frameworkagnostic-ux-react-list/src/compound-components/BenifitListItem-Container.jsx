
import React from 'react';
import PropTypes from 'prop-types';

const Container = (props) => {
  const {
    children, styles, classNames, type
  } = props;

  if (!children) {
    return null;
  }

  return (
    <div className={classNames[type]} style={styles[type]}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  styles: PropTypes.objectOf(PropTypes.object),
  classNames: PropTypes.objectOf(PropTypes.object),
  type: PropTypes.string,
};

Container.defaultProps = {
  type: 'container',
  classNames: {},
  styles: {},
};

export { Container };
