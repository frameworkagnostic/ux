
```js
import React from 'react';
import { Repeater } from '@frameworkagnostic/ux-react-repeater';

const Example = () => {
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
    Component: Component
  };
  return <Repeater {...props} />
};
```
