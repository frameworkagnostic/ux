
import React from 'react';
import { Link } from './Link';

export const name = 'Buttons';

export const examples = {
  Link: () => {
    const props = {
      href: '#'
    };
    return (
      <Link {...props}>
        Hello
      </Link>
    );
  },
};
