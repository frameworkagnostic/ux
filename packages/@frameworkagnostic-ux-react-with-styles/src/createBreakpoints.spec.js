
import * as logger from '__tests__/utils/syslog';
import {
  breakpointKeysMock,
  nextBreakpointMock,
} from '../__mocks__/breakpoint-keys.mocks';

import { keys as breakpointKeys, createBreakpoints } from './createBreakpoints';

test('create breakpoint keys', () => {
  expect(typeof createBreakpoints).toBe('function');

  const breakpoints = createBreakpoints();

  expect(breakpointKeys.sort()).toEqual(
    expect.arrayContaining(breakpointKeysMock.sort()),
  );

  breakpointKeysMock.forEach((breakpoint) => {
    expect(nextBreakpointMock[breakpoint]).toEqual(breakpoints.up(breakpoint));
  });
});
