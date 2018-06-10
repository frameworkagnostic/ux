
import React from 'react';

import { BaseComponent } from './BaseComponent';

test('hello', () => {
  expect(typeof BaseComponent).toBe('function');
  expect(typeof <BaseComponent href="/" attrs={{ href: '/' }} />).toBe('object');
});
