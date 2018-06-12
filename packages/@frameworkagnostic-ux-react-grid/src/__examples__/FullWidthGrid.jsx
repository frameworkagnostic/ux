
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@frameworkagnostic/ux-react-with-styles/lib/withStyles';
import Grid from '../Grid';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

export function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <div className={classes.paper}>xs=12</div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.paper}>xs=12 sm=6</div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.paper}>xs=12 sm=6</div>
        </Grid>
        <Grid item xs={6} sm={3}>
          <div className={classes.paper}>xs=6 sm=3</div>
        </Grid>
        <Grid item xs={6} sm={3}>
          <div className={classes.paper}>xs=6 sm=3</div>
        </Grid>
        <Grid item xs={6} sm={3}>
          <div className={classes.paper}>xs=6 sm=3</div>
        </Grid>
        <Grid item xs={6} sm={3}>
          <div className={classes.paper}>xs=6 sm=3</div>
        </Grid>
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export const FullWidthGridStyled = withStyles(styles)(FullWidthGrid);
