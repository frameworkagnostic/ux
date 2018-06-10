
import React from 'react';
import { PropAttributes } from '@frameworkagnostic/ux-react-prop-attributes/lib/renderProp';

import { Button } from './Button';

export const name = 'Buttons';

export const examples = {
  Button: () => (
    <PropAttributes
      href="/"
      render={(props) => {
        const text = 'Hello';
        return (
          <Button {...props}>
            {text}
          </Button>
        );
      }}
    />
  ),
};
