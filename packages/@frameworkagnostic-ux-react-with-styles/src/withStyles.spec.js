
import React from 'react';
import renderer from 'react-test-renderer';
import { withStyles } from './withStyles';
import { generateGutter } from './generateGutter';
import { generateGridReducer } from './generateGrid';
import { keys as breakpointKeys } from './createBreakpoints';
import { GRID_SIZES, GUTTERS } from './constants';

test('withStyles', () => {
  const Grid = ({ classes }) => <div>Hello</div>;

  const styles = theme => {
    expect(typeof theme).toBe('object');
    return {
      container: {
        boxSizing: 'border-box',
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
      },
      item: {
        boxSizing: 'border-box',
        margin: '0',
      },
      ...generateGutter('xs', GUTTERS),
      ...breakpointKeys.reduce(generateGridReducer(GRID_SIZES, theme.breakpoints.up), {}),
    };
  };

  const StyledGrid = withStyles(styles, { name: 'MuiGrid' })(Grid);
  expect(typeof StyledGrid).toBe('function');
  expect(typeof StyledGrid.propTypes).toBe('object');
  const element = <StyledGrid />;
  const component = renderer.create(element);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
