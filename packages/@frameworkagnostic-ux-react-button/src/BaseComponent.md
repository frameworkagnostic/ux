
```js
import React from 'react';
import { BaseComponent } from '@frameworkagnostic/ux-react-button';

const Example = () => (
  <BaseComponent href="/" />
    Hello
  </BaseComponent>
);
```

```js
import React from 'react';
import { BaseComponent } from '@frameworkagnostic/ux-react-button';

const Example = () => (
  <BaseComponent attrs={{
    href:"/",
    onClick: () => console.log('clicked'),
  }} />
    Hello
  </BaseComponent>
);
```
