import React, { Component } from 'react';
import classNames from 'classnames';

import { Paper } from 'components';

import { withStyles } from '@material-ui/core';

import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Switch from '@material-ui/core/Switch';
import WifiIcon from '@material-ui/icons/HighlightOutlined';
import SpeedIcon from '@material-ui/icons/AvTimer';
import NearMeIcon from '@material-ui/icons/NearMeOutlined';
import BatteryIcon from '@material-ui/icons/BatteryFullOutlined';

class CaneStatus extends Component {
  render() {
    const {
      torch,
      accelerometer,
      gyroscope,
      ultrasonic,
      proximity,
      battery
    } = this.props;
    return (
      <List>
        <ListItem>
          <ListItemIcon>
            <WifiIcon />
          </ListItemIcon>
          <ListItemText id="switch-list-label-wifi" primary="Torch" />
          <ListItemSecondaryAction>
            <Switch
              checked={torch}
              edge="end"
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
              checked={accelerometer}
              edge="end"
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
            <Switch checked={gyroscope} edge="end" />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <NearMeIcon />
          </ListItemIcon>
          <ListItemText id="switch-list-label-wifi" primary="Ultrasonic" />
          <ListItemSecondaryAction>
            <Switch checked={ultrasonic} edge="end" />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <NearMeIcon />
          </ListItemIcon>
          <ListItemText id="switch-list-label-wifi" primary="Proximity" />
          <ListItemSecondaryAction>
            <Switch checked={proximity} edge="end" />
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <BatteryIcon />
          </ListItemIcon>
          <ListItemText id="switch-list-label-wifi" primary="Battery" />
          <ListItemSecondaryAction>
            <Switch
              checked={battery}
              edge="end"
              // onChange={this.handleToggle('wifi')}
              // inputProps={{ 'aria-labelledby': 'switch-list-label-wifi' }}
            />
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    );
  }
}

export default CaneStatus;
