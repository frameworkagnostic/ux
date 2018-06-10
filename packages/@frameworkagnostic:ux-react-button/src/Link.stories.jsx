
import React from 'react';
import { PropAttributes } from '@frameworkagnostic/ux-react-prop-attributes/lib/renderProp';

import { Link } from './Link';

export const name = 'Link';

export const examples = {
  Standard2: () => (
    <PropAttributes
      href="/"
      render={(props) => {
        const text = 'Hello';
        return (
          <Link {...props}>
            {text}
          </Link>
        );
      }}
    />
  ),
};
