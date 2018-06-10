
import React from 'react';
import { Button } from './Button';

export const name = 'Buttons';

export const examples = {
  Button: () => {
    const props = {
      onClick: () => console.log('clicked')
    };
    return (
      <Button {...props}>
        Hello
      </Button>
    );
  },
};
