
import React from 'react';
import { withStyles } from './withStyles';
import { generateGutter } from './generateGutter';
import { generateGridReducer } from './generateGrid';
import { keys as breakpointKeys } from './createBreakpoints';
import { GRID_SIZES, GUTTERS } from './constants';

const Grid = ({ classes }) => (
  <div className={classes.container}>
      Hello
  </div>
);

const styles = (theme) => ({
  container: {
    boxSizing: 'border-box',
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    color: 'red',
  },
  item: {
    boxSizing: 'border-box',
    margin: '0',
  },
  ...generateGutter('xs', GUTTERS),
  ...breakpointKeys.reduce(generateGridReducer(GRID_SIZES, theme.breakpoints.up), {}),
});

const StyledGrid = withStyles(styles, { name: 'MuiGrid' })(Grid);

export const name = 'withStyles';

export const examples = {
  Link: () => {
    const props = {
      href: '#'
    };
    return (
      <StyledGrid {...props}>
        Hello
      </StyledGrid>
    );
  },
};
