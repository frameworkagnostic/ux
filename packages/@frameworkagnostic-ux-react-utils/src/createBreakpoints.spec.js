
import { keys as breakpointKeys, createBreakpoints } from './createBreakpoints';
import { generateGrid } from './generateGrid';

test('create breakpoint keys', () => {
  const keys = breakpointKeys.reduce((accumulator, key) => {
    const theme = {
      breakpoints: createBreakpoints()
    };
    generateGrid(accumulator, theme, key);
    return accumulator;
  }, {});
  expect(typeof keys).toBe('object');
});
