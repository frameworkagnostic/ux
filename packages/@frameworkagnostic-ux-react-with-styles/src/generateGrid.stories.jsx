
import React from 'react';
import classnames from 'classnames';
import { withStyles } from './withStyles';
import { generateGutter } from './generateGutter';
import { generateGridReducer } from './generateGrid';
import { keys as breakpointKeys } from './createBreakpoints';
import { GRID_SIZES, GUTTERS } from './constants';

import css from './compiled-css/grid.css';

export const name = 'generateGrid';
//MuiGrid-item-4 MuiGrid-grid-xs-12-42 MuiGrid-grid-sm-6-1134
//MuiGrid-container-103 MuiGrid-spacing-xs-24-126 NestedGrid-root-101
export const examples = {
  'css': () => {
    console.log('css', css);
    return (
      <div className={classnames(
        css['container'],
      )} style={{ flexGrow: 1 }}>
        <div className={classnames(css['grid-xs-12'])}>
          <center>12</center>
        </div>
        <div className={classnames(css['grid-xs-6'])}>
          <center>6</center>
        </div>
        <div className={classnames(css['grid-xs-6'])}>
          <center>6</center>
        </div>

        <div className={classnames(css['grid-xs-3'])}>
          <center>6</center>
        </div>
        <div className={classnames(css['grid-xs-3'])}>
          <center>6</center>
        </div>
        <div className={classnames(css['grid-xs-3'])}>
          <center>6</center>
        </div>
        <div className={classnames(css['grid-xs-3'])}>
          <center>6</center>
        </div>
      </div>
    );
  },
};
