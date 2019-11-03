import React, { Component } from 'react';

// Externals
import classNames from 'classnames';
// import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Typography } from '@material-ui/core';
import { Paper } from 'components';
// import styles from './styles';
import { Grid } from '@material-ui/core';
import { Dashboard as DashboardLayout } from 'layouts';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Switch from '@material-ui/core/Switch';
import WifiIcon from '@material-ui/icons/HighlightOutlined';
import SpeedIcon from '@material-ui/icons/AvTimer';
import NearMeIcon from '@material-ui/icons/NearMeOutlined';
import BatteryIcon from '@material-ui/icons/BatteryFullOutlined';

import { GoogleMap } from '../../components';
const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4
  },
  item: {
    height: '100%'
  }
   
});
export class Cane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time : new Date().toLocaleTimeString(),
      checked: ['wifi']
    }
    
  }
  setChecked(value){
    this.setState({checked: value})
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalID)
  }
  tick() {
    this.setState({time: new Date().toLocaleTimeString()})
  }
  handleToggle(value) {
    const currentIndex = this.state.checked.indexOf(value);
    const newChecked = [...this.state.checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setChecked(newChecked);
  }

  
  static propTypes = {};

  render() {
    const { classes, className, ...rest } = this.props;
    const {time, checked} = this.state
    const rootClassName = classNames(classes.root, className);
    return (
      <DashboardLayout title="Walking Stick Dashboard">
        <div className={classes.root}>
          <Grid container spacing={4}>
            <Grid item lg={6} sm={6} xl={6} xs={12}>
              <Paper
                {...rest}
                className={rootClassName}
              >
                <div className={classes.content}>
                  <div className={classes.details}>
                    <Typography style={classes.title} variant="h4">
                  Current Time:
                    </Typography>
                    <Typography variant="h2">
                      {time}
                    </Typography>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item lg={6} sm={6} xl={6} xs={12}>
              <Paper
                {...rest}
                className={rootClassName}
              >
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
                <GoogleMap />
              </Paper>
            </Grid>
            <Grid item lg={4} sm={4} xl={4} xs={12}>
              <Paper {...rest} className={rootClassName}>
                <Typography style={classes.title} variant="h3">
                Cane Status
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <WifiIcon />
                    </ListItemIcon>
                    <ListItemText id="switch-list-label-wifi" primary="Torch" />
                    <ListItemSecondaryAction>
                      <Switch
                        // checked
                        edge="end"
                        // onChange={this.handleToggle('wifi')}
                        inputProps={{ 'aria-labelledby': 'switch-list-label-wifi' }}
                      />
                    </ListItemSecondaryAction>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon> 
                      <SpeedIcon />
                    </ListItemIcon>
                    <ListItemText id="switch-list-label-wifi" primary="Accelerometer" />
                    <ListItemSecondaryAction>
                      <Switch
                        checked
                        edge="end"
                        // onChange={this.handleToggle('wifi')}
                        inputProps={{ 'aria-labelledby': 'switch-list-label-wifi' }}
                      />
                    </ListItemSecondaryAction>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <NearMeIcon />
                    </ListItemIcon>
                    <ListItemText id="switch-list-label-wifi" primary="Gyrscope" />
                    <ListItemSecondaryAction>
                      <Switch
                        checked
                        edge="end"
                        // onChange={this.handleToggle('wifi')}
                        // inputProps={{ 'aria-labelledby': 'switch-list-label-wifi' }}
                      />
                    </ListItemSecondaryAction>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <BatteryIcon />
                    </ListItemIcon>
                    <ListItemText id="switch-list-label-wifi" primary="Battery" />
                    <ListItemSecondaryAction>
                      <Switch
                        checked
                        edge="end"
                        // onChange={this.handleToggle('wifi')}
                        // inputProps={{ 'aria-labelledby': 'switch-list-label-wifi' }}
                      />
                    </ListItemSecondaryAction>
                  </ListItem>
                </List>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </DashboardLayout>
    );
  }
}

export default withStyles(styles)(Cane);
