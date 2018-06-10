
import React from 'react';
import { PropAttributes } from '@frameworkagnostic/ux-react-prop-attributes/lib/renderProp';

import { BaseComponent } from './BaseComponent';

export const name = 'Buttons';

export const examples = {
  BaseComponent: () => (
    <PropAttributes
      href="/"
      render={(props) => {
        const text = 'Hello';
        return (
          <BaseComponent {...props}>
            {text}
          </BaseComponent>
        );
      }}
    />
  ),
};
