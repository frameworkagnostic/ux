import React from 'react';
import { PropAttributes } from './renderProp';
import renderer from 'react-test-renderer';
//import { shallow } from 'enzyme';

describe('<PropAttributes />', () => {
  test('validate element', () => expect(typeof PropAttributes).toBe('function'));

  describe('with no attributes', () => {
    const element = renderer.create(
      <PropAttributes />
    );
    const tree = element.toJSON();
    test('snapshot', () => expect(tree).toMatchSnapshot());
  })

})
