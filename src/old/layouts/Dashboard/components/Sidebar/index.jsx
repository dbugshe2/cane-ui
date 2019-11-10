import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { MenuItem, Select, withStyles } from '@material-ui/core';
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography
} from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl/FormControl';
import {
  HomeOutlined as DashboardIcon,
  LockOpenOutlined as LockOpenIcon,
  HistoryOutlined as HistoryIcon,
  AccountBoxOutlined as AccountBoxIcon,
  SettingsOutlined as SettingsIcon,
  LiveHelpOutlined as HelpIcon,
  DashboardOutlined as CaneIcon
} from '@material-ui/icons';
import styles from './styles';

class Sidebar extends Component {

  render() {
    const { classes, className } = this.props;
    const rootClassName = classNames(classes.root, className);

    return (
      <nav className={rootClassName}>
        <div className={classes.logoWrapper}>
          <Link className={classes.logoLink} to="/">
            {/* <img
              alt="logo"
              className={classes.logoImage}
              src="/images/logos/origami-bird.png"
            /> */}
            <Typography variant="h3" />
          </Link>
        </div>

        <Divider className={classes.logoDivider} />

        <List component="div" disablePadding>
          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/dashboard"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Home Page"
            />
          </ListItem>
          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/cane"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <CaneIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Dashboard"
            />
          </ListItem>
         
          
          
         
          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/account"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Family Relation"
            />
          </ListItem>
          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/help"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <HelpIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Help"
            />
          </ListItem>
          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/history"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <HistoryIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="History"
            />
          </ListItem>
          <ListItem
            activeClassName={classes.activeListItem}
            className={classes.listItem}
            component={NavLink}
            to="/sign-in"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <LockOpenIcon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary="Logout"
            />
          </ListItem>
        </List>
        
        <Divider className={classes.listDivider} />
      </nav>
    );
  }
}

Sidebar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Sidebar);
