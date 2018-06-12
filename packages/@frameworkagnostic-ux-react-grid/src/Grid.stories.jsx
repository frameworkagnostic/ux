
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@frameworkagnostic/ux-react-with-styles/lib/withStyles';
import Grid from './Grid';

import { FullWidthGridStyled } from './__examples__/FullWidthGrid';
import { GuttersGridStyled } from './__examples__/GuttersGrid';
import { FlexGridStyled } from './__examples__/FlexGrid';


export const name = 'Grid';

export const examples = {
  'Full-width': () => <FullWidthGridStyled />,
  Spacing: () => <GuttersGridStyled />,
  'Flex-Grid': () => (
    <div>
      <div>
        <FlexGridStyled direction="row" justify="space-between" alignItems="stretch" />
      </div>
      <div>
        <FlexGridStyled direction="row" justify="space-between" alignItems="flex-end" />
      </div>
      <div>
        <FlexGridStyled direction="row" justify="space-between" alignItems="center" />
      </div>
      <div>
        <FlexGridStyled direction="column" justify="space-between" alignItems="stretch" />
      </div>
    </div>
  ),
};
