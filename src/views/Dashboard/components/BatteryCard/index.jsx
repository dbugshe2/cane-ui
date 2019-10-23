import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { BatteryChargingFullOutlined } from '@material-ui/icons';
import { Paper } from 'components';
import styles from './styles';

class BatteryCard extends Component {
  render() {
    const { classes, className, ...rest } = this.props;

    const rootClassName = classNames(classes.root, className);

    return (
      <Paper
        {...rest}
        className={rootClassName}
      >
        <div className={classes.content}>
          <div className={classes.details}>
            <Typography
              className={classes.title}
              variant="body2"
            >
              Battery Level
            </Typography>
            <Typography
              className={classes.value}
              variant="h2"
            >
              73 %
            </Typography>
          </div>
          <div className={classes.iconWrapper}>
            <BatteryChargingFullOutlined  />
          </div>
        </div>
      </Paper>
    );
  }
}

BatteryCard.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BatteryCard);
