
import * as logger from '__tests__/utils/syslog';
import { gridSizesMock, expectedTopLevelSchema } from '../__mocks__/grid-sizes.mock';

import { keys as breakpointKeys, createBreakpoints } from './createBreakpoints';
import { generateGridReducer } from './generateGrid';
import { GRID_SIZES } from './constants';

test('create breakpoint keys', () => {
  const breakpoints = createBreakpoints();

  const styles = breakpointKeys.reduce(generateGridReducer(GRID_SIZES, breakpoints.up), {});

  Object.keys(styles).forEach((key) => {
    expect(expectedTopLevelSchema).toContain(key);
  });

  expect(styles).toEqual(
    expect.objectContaining(Object.keys(styles).reduce((acc, key) => {
      acc[key] = gridSizesMock[key];
      return acc;
    }, {})),
  );
  
  expect(styles).toMatchSnapshot();

});
