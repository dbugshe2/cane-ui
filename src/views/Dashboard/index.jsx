import React, { Component } from 'react';

// Externals
import classNames from 'classnames';
// import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Typography, CircularProgress } from '@material-ui/core';
import { Paper } from 'components';
// import styles from './styles';
import { Grid } from '@material-ui/core';
import { Dashboard as DashboardLayout } from 'layouts';

import { GoogleMap, CaneStatus } from '../../components';
import CaneService from '../../services/cane';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4
  },
  item: {
    height: '100%'
  }
});

const ID = '5e2acee34e337106b55b03db';
export class Cane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SN: '',
      time: '',
      location: {},
      torch: null,
      accelerometer: null,
      gyroscope: null,
      ultrasonic: null,
      proximity: null,
      battery: null,
      loading: true
    };
    this.getCane = this.getCane.bind(this)
    this.getCaneInterval = this.getCaneInterval.bind(this)
  }
  getCane = (caneId) => {
    this.setState({ loading: true });
    CaneService.getCaneById(caneId)
      .then(Cane => {
        if (Cane) {
          console.log(Cane);
          this.setState({ ...Cane });
        }
        this.setState({ loading: false });
      })
      .catch(err => {
        console.error(err);
        this.setState({ loading: false });
      });
  }
  getCaneInterval = (id) => {
    this.intervalID = setInterval(this.getCane(id), 1500);
  }

  componentDidMount() {
    this.getCaneInterval(ID);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  static propTypes = {};

  render() {
    const { classes, className, ...rest } = this.props;
    const {
      time,
      torch,
      accelerometer,
      gyroscope,
      ultrasonic,
      proximity,
      battery,
      loading
    } = this.state;
    const { lat, lng } = this.state.location;
    const LastSeenTime = time
      ? new Date(time).toLocaleString()
      : 'Time Currently unavailable';
    const rootClassName = classNames(classes.root, className);
    return (
      <DashboardLayout title="Walking Stick Dashboard">
        {loading ? (
          <CircularProgress />
        ) : (
          <div className={classes.root}>
            <Grid container spacing={4}>
              <Grid item lg={6} sm={6} xl={6} xs={12}>
                <Paper {...rest} className={rootClassName}>
                  <div className={classes.content}>
                    <div className={classes.details}>
                      <Typography style={classes.title} variant="h4">
                        Last Seen:
                      </Typography>
                      <Typography variant="h2">{LastSeenTime}</Typography>
                    </div>
                  </div>
                </Paper>
              </Grid>
              <Grid item lg={6} sm={6} xl={6} xs={12}>
                <Paper {...rest} className={rootClassName}>
                  <div className={classes.content}>
                    <div className={classes.details}>
                      <Typography style={classes.title} variant="h4">
                        Current Location:
                      </Typography>
                      <Typography variant="h2">
                        FUT Minna, Gidan Kwano
                      </Typography>
                    </div>
                  </div>
                </Paper>
              </Grid>
            </Grid>
            <Grid container spacing={4}>
              <Grid item lg={8} sm={8} xl={8} xs={12}>
                <Paper {...rest} className={rootClassName}>
                  <Typography style={classes.title} variant="h3">
                    Cane Locator
                  </Typography>
                  <GoogleMap lat={lat} lng={lng} />
                </Paper>
              </Grid>
              <Grid item lg={4} sm={4} xl={4} xs={12}>
                <Paper {...rest} className={rootClassName}>
                  <Typography style={classes.title} variant="h3">
                    Cane Status
                  </Typography>
                  <CaneStatus
                    accelerometer={accelerometer}
                    battery={battery}
                    gyroscope={gyroscope}
                    proximity={proximity}
                    torch={torch}
                    ultrasonic={ultrasonic}
                  />
                </Paper>
              </Grid>
            </Grid>
          </div>
        )}
      </DashboardLayout>
    );
  }
}

export default withStyles(styles)(Cane);
