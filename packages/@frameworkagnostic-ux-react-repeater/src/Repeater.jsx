
import React from 'react';
import PropTypes from 'prop-types';

const Repeater = (props) => {
  const { Component, Container } = props;

  if (!Component || !Array.isArray(props.items)) {
    return null;
  }

  return props.items.map((itemProps, i) => {
    const key = `Repeater${i}`;

    if (Container) {
      return (
        <Container key={key} >
          <Component key={key} {...itemProps} />
        </Container>
      );
    }

    return <Component key={key} {...itemProps} />;
  });
};

Repeater.propTypes = {
  Container: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.node,
    PropTypes.element
  ]),
  Component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.node,
    PropTypes.element
  ]),
};

Repeater.defaultProps = {
  Component: null,
  Container: null,
};

export { Repeater };
