import React, { Component } from 'react';

// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Typography } from '@material-ui/core';

import { Paper } from 'components';

import styles from './styles';

export class LocationCard extends Component {
  static propTypes = {};

  render() {
    const { classes, className, ...rest } = this.props;

    const rootClassName = classNames(classes.root, className);
    return (
      <Paper {...rest} className={rootClassName}>
        <div className={classes.content}>
          <div className={classes.details}>
            <Typography className={classes.title} variant="body2">
              Current Location
            </Typography>
            <Typography 
              className={classes.value}
              variant="h2"
            >
              Mobil Park, Minna
            </Typography>
          </div>
        </div>
      </Paper>
    );
  }
}

LocationCard.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LocationCard);
