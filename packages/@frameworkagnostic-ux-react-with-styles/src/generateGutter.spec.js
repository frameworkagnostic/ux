
import { generateGutter } from './generateGutter';
import { breakpointXsStyles } from '../__mocks__/generate-gutter.mock';

test('generateGutter xs', () => {
  const styles = generateGutter('xs');

  expect(styles).toEqual(
    expect.objectContaining([
      "spacing-xs-8",
      "spacing-xs-16",
      "spacing-xs-24",
      "spacing-xs-40",
    ].reduce((acc, key) => {
      acc[key] = {
        margin: expect.any(Number),
        width: expect.any(String),
        "& > $item": {
          padding: expect.any(Number)
        },
      };
      return acc;
    }, {})),
  );

  expect(styles).toEqual(
    expect.objectContaining(Object.keys(styles).reduce((acc, key) => {
      acc[key] = breakpointXsStyles[key];
      return acc;
    }, {})),
  );

  expect(Object.keys(breakpointXsStyles).sort()).toEqual(
    expect.arrayContaining(Object.keys(styles).sort()),
  );

});
