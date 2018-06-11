
import React from 'react';

import { Repeater } from './Repeater';

test('hello', () => {
  expect(typeof Repeater).toBe('function');
  expect(typeof <Repeater />).toBe('object');
});
