
import React from 'react';

import { Link } from './Link';

test('hello', () => {
  expect(typeof Link).toBe('function');
  expect(typeof <Link href="/" attrs={{ href: '/' }} />).toBe('object');
});
