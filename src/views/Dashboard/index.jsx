import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Dashboard as DashboardLayout } from 'layouts';

import {
  BatteryCard,
  EstimatedTimeCard,
  LocationCard,
  MapPreview
} from './components';
import MapboxPreview from './MapboxPreview';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4
  },
  item: {
    height: '100%'
  }
});

class Dashboard extends Component {
  render() {
    const { classes } = this.props;

    return (
      <DashboardLayout title="Dashboard">
        <div className={classes.root}>
          <Grid container spacing={4}>
            <Grid item lg={12} sm={12} xl={12} xs={12}>
              <BatteryCard className={classes.item} />
            </Grid>
            <Grid container spacing={4}>
              <Grid item lg={8} sm={8} xl={8} xs={12}>
                <MapPreview className={classes.item} />
              </Grid>
              <Grid item lg={4} sm={4} xl={4} xs={12}>
                <LocationCard className={classes.item} />
              </Grid>
            </Grid>
          </Grid>
        </div>
      </DashboardLayout>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
