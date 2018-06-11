
import React from 'react';

import { Container2Row } from './Container2Row';

test('<Container2Row />', () => {
  expect(typeof Container2Row).toBe('function');
  expect(typeof <Container2Row />).toBe('object');
});
