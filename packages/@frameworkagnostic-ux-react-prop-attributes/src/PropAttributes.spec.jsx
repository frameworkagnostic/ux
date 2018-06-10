import React from 'react';
import renderer from 'react-test-renderer';

import { MockComponent } from '../__mocks__/MockComponent';
import { PropAttributes } from './PropAttributes';

describe('<PropAttributes />', () => {
  test('validate element', () => expect(typeof PropAttributes).toBe('function'));

  describe('with no attributes', () => {
    const element = <PropAttributes />;
    const component = renderer.create(element);
    const tree = component.toJSON();
    test('snapshot', () => expect(tree).toMatchSnapshot());
  });

  describe('with standard attributes', () => {
    const element = <PropAttributes href="/" />;
    const component = renderer.create(element);
    const tree = component.toJSON();
    test('snapshot', () => expect(tree).toMatchSnapshot());
  });

  describe('with renderProp', () => {
    const element = (
      <PropAttributes
        href="/"
        renderComponent={MockComponent}
      >
        Hello
      </PropAttributes>
    );
    const component = renderer.create(element);
    const tree = component.toJSON();
    test('snapshot', () => expect(tree).toMatchSnapshot());
  });

  describe('with renderProp <Component />', () => {
    const element = (
      <PropAttributes
        href="/"
        renderComponent={MockComponent}
      >
        Hello
      </PropAttributes>
    );
    const component = renderer.create(element);
    const tree = component.toJSON();
    test('snapshot', () => expect(tree).toMatchSnapshot());
  });
});
