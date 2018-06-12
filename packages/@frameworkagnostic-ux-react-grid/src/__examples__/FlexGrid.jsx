import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@frameworkagnostic/ux-react-with-styles/lib/withStyles';
import Grid from '../Grid';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  demo: {
    height: 240,
  },
  paper: {
    padding: 0,
    height: '100%',
    color: theme.palette.text.secondary,
    backgroundColor: '#dcdcdc',
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class FlexGrid extends React.Component {
  render() {
    const { classes } = this.props;
    const { alignItems, direction, justify } = this.props;
    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid
            container
            spacing={0}
            className={classes.demo}
            alignItems={alignItems}
            direction={direction}
            justify={justify}
          >
            {[0, 1, 2].map((value) => (
              <Grid key={value} item>
                <div
                  className={classes.paper}
                >
                  {`Cell ${value + 1}`}
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

FlexGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

FlexGrid.defaultProps = {};

export const FlexGridStyled = withStyles(styles)(FlexGrid);
