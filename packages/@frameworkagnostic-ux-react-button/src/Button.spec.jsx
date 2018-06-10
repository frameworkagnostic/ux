
import React from 'react';

import { Button } from './Button';

test('hello', () => {
  expect(typeof Button).toBe('function');
  expect(typeof <Button href="/" attrs={{ href: '/' }} />).toBe('object');
});
