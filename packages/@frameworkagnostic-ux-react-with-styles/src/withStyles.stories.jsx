
import React from 'react';

export const name = 'withStyles';

export const examples = {
  Link: () => {
    const props = {
      href: '#'
    };
    return (
      <a {...props}>
        Hello
      </a>
    );
  },
};
