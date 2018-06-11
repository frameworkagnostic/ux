
import React from 'react';
import PropTypes from 'prop-types';

import { Repeater } from './Repeater';

const Container = ({ children, ...remainingProp }) => (
  <span {...remainingProp}>
    {children} |
  </span>
);

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.node,
    PropTypes.element
  ]),
};

Container.defaultProps = {
  children: null,
};

const Component = ({ children, ...remainingProp }) => (
  <a {...remainingProp}>
    {children}
  </a>
);

Component.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.node,
    PropTypes.element
  ]),
};

Component.defaultProps = {
  children: null,
};


export const name = 'Repeater';

export const examples = {
  Standard: () => {
    const props = {
      items: [
        {
          href: '#',
          children: 'Hello1'
        },
        {
          href: '#',
          children: 'Hello2'
        },
        {
          href: '#',
          children: 'Hello3'
        },
      ],
      Component
    };
    return <Repeater {...props} />;
  },
  'With  Container': () => {
    const props = {
      items: [
        {
          href: '#',
          children: 'Hello1'
        },
        {
          href: '#',
          children: 'Hello2'
        },
        {
          href: '#',
          children: 'Hello3'
        },
      ],
      Component,
      Container
    };
    return <Repeater {...props} />;
  },

};
