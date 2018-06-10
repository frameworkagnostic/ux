
```js
import React from 'react';
import { PropAttributes } from '@frameworkagnostic/ux-react-prop-attributes';
import { Link } from '@frameworkagnostic/ux-react-button';

const Example = () => (
  <PropAttributes
    href="/"
    render={(props) => <Link {...props}>Hello</Link>}
  />
);
```

```js
import React from 'react';
import { Link } from '@frameworkagnostic/ux-react-button';

const Example = () => (
  <Link href="/" />
    Hello
  </Link>
);
```

```js
import React from 'react';
import { Link } from '@frameworkagnostic/ux-react-button';

const Example = () => (
  <Link attrs={{
    href:"/",
    onClick: () => console.log('clicked'),
  }} />
    Hello
  </Link>
);
```
