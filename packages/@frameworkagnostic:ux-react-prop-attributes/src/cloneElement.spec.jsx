import React from 'react';
import renderer from 'react-test-renderer';

import { PropAttributes } from './cloneElement';

describe('<PropAttributes />', () => {
  test('validate element', () => expect(typeof PropAttributes).toBe('function'));

  describe('with no attributes', () => {
    const element = renderer.create(<PropAttributes />);
    const tree = element.toJSON();
    test('snapshot', () => expect(tree).toMatchSnapshot());
  });
});
