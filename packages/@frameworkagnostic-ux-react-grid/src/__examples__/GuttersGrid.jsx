import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@frameworkagnostic/ux-react-with-styles/lib/withStyles';
import Grid from '../Grid';

// https://material-ui.com/layout/grid/
const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
    backgroundColor: 'blue'
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  demoItem: {
    backgroundColor: 'green'
  }
});

// The responsive grid focuses on consistent spacing widths, rather than column width. Material design margins and columns follow an 8dp square baseline grid. Spacing can be 8, 16, 24, 32 or 40dp wide.

class GuttersGrid extends React.Component {
  state = {
    spacing: '40',
  };

  handleChange = (key) => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
            {[0, 1, 2].map((value) => (
              <Grid key={value} item className={classes.demoItem} >
                <div className={classes.paper}>
                  {value}
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>

      </Grid>
    );
  }
}

GuttersGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export const GuttersGridStyled = withStyles(styles)(GuttersGrid);
