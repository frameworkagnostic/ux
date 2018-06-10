
import React from 'react';

import { Clear } from './Clear';

test('hello', () => {
  expect(typeof Clear).toBe('function');
  expect(typeof <Clear />).toBe('object');
});
