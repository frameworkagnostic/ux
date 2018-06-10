
import React from 'react';
import { BaseComponent } from './BaseComponent';

export const name = 'Buttons';

export const examples = {
  BaseComponent: () => {
    const props = {
      href: '#'
    };
    return (
      <BaseComponent {...props}>
        Hello
      </BaseComponent>
    );
  },
};
