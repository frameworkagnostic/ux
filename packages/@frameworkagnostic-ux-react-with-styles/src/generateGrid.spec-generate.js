

import mkdirp from 'mkdirp';
import path from 'path';
import fs from 'fs';
import React from 'react';
import renderer from 'react-test-renderer';
import * as logger from '__tests__/utils/syslog';
import { withStyles } from './withStyles';
import { generateGutter } from './generateGutter';
import { generateGridReducer } from './generateGrid';
import { keys as breakpointKeys, createBreakpoints } from './createBreakpoints';
import { GRID_SIZES, GUTTERS } from './constants';
import { withStylesMock } from '../__mocks__/with-style-grids.mock';

const breakpoints = createBreakpoints();
const styles = {
  container: {
    boxSizing: 'border-box',
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
  },
  item: {
    boxSizing: 'border-box',
    margin: '0', // For instance, it's useful when used with a `figure` element.
  },
  zeroMinWidth: {
    minWidth: 0,
  },
  'direction-xs-column': {
    flexDirection: 'column',
  },
  'direction-xs-column-reverse': {
    flexDirection: 'column-reverse',
  },
  'direction-xs-row-reverse': {
    flexDirection: 'row-reverse',
  },
  'wrap-xs-nowrap': {
    flexWrap: 'nowrap',
  },
  'wrap-xs-wrap-reverse': {
    flexWrap: 'wrap-reverse',
  },
  'align-items-xs-center': {
    alignItems: 'center',
  },
  'align-items-xs-flex-start': {
    alignItems: 'flex-start',
  },
  'align-items-xs-flex-end': {
    alignItems: 'flex-end',
  },
  'align-items-xs-baseline': {
    alignItems: 'baseline',
  },
  'align-content-xs-center': {
    alignContent: 'center',
  },
  'align-content-xs-flex-start': {
    alignContent: 'flex-start',
  },
  'align-content-xs-flex-end': {
    alignContent: 'flex-end',
  },
  'align-content-xs-space-between': {
    alignContent: 'space-between',
  },
  'align-content-xs-space-around': {
    alignContent: 'space-around',
  },
  'justify-xs-center': {
    justifyContent: 'center',
  },
  'justify-xs-flex-end': {
    justifyContent: 'flex-end',
  },
  'justify-xs-space-between': {
    justifyContent: 'space-between',
  },
  'justify-xs-space-around': {
    justifyContent: 'space-around',
  },
  ...generateGutter('xs', GUTTERS),
  ...breakpointKeys.reduce(generateGridReducer(GRID_SIZES, breakpoints.up), {}),
};

test('validate inline styles object', () => {
  expect(typeof styles).toBe('object');

  Object.keys(withStylesMock).forEach((key) => {
    expect(Object.keys(styles)).toContain(key);
  });

  expect(styles).toEqual(
    expect.objectContaining(Object.keys(styles).reduce((acc, key) => {
      acc[key] = withStylesMock[key];
      return acc;
    }, {})),
  );

  expect(styles).toMatchSnapshot();
});

const camelCaseToDash = (v) => v.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

const parseCssProperties = (styles, parentKey) => {
  return Object.keys(styles).reduce((acc, key) => {
    if(typeof(styles[key]) === 'string') {
      const property = camelCaseToDash(key);
      const value = styles[key];
      acc.properties.push(`\n     ${property}: ${value};`);
      return acc;
    }

    if(/^\&/.test(key) && key === '& > $item') {
      /*const declaration = `${parentKey} > .item`;
      const ruleSet = parseCssProperties(styles[key], key);
      logger.info(key, styles[key], ruleSet);

      acc.rules.push(`${declaration} {${ruleSet.properties.join('')}}`);

      if(ruleSet.rules.length) {
        acc.rules.push(...ruleSet.rules);
      }*/
      return acc;
    }

    if(typeof(key) === 'string') {
      const property = camelCaseToDash(key);
      const value = styles[key];
      acc.properties.push(`\n     ${property}: ${value};`);
      return acc;
    }

    logger.error(key, styles[key]);

    return null;
  }, {
    properties: [],
    rules: [],
  });
};

const parseCssStyles = (styles, accumulator) => {
  return Object.keys(styles).reduce((acc, key) => {
    const isMediaQuery = /^@/.test(key)
    const declaration = isMediaQuery ? key: `.${key}`;

    if(!isMediaQuery) {
      const ruleSet = parseCssProperties(styles[key], key);
      acc.push(`${declaration} {${ruleSet.properties.join('')}}`);

      if(ruleSet.rules.length) {
        acc.push(...ruleSet.rules);
      }

      return acc;
    }

    const ruleSet = parseCssStyles(styles[key], []);

    acc.push(`${declaration} {\n${ruleSet}\n}`);

    return acc;
  }, accumulator || []).join('\n ');
}

test('create grid.css', () => {
  const css = parseCssStyles(styles, []);
  mkdirp.sync(path.join(__dirname, './compiled-css'));
  fs.writeFileSync(path.join(__dirname, './compiled-css/grid.css'), css, 'utf-8');
});
