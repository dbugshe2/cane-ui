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
// import styles from './styles';

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

export const styles = theme => ({
  root: {
    backgroundColor: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit
  },
  logoWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '63px',
    flexShrink: 0
  },
  logoLink: {
    fontSize: 0,
    display: 'contents',
    flexDirection: 'row'
  },
  logoImage: {
    cursor: 'pointer',
    width: '48px'
  },
  logoDivider: {
    marginBottom: theme.spacing.unit * 2
  },
  profile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content'
  },
  avatar: {
    width: '100px',
    height: '100px'
  },
  nameText: {
    marginTop: theme.spacing.unit * 2
  },
  bioText: {},
  profileDivider: {
    marginBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2
  },
  listSubheader: {
    color: theme.palette.text.secondary
  },
  listItem: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      borderLeft: `4px solid ${theme.palette.primary.main}`,
      borderRadius: '4px',
      '& $listItemIcon': {
        color: theme.palette.primary.main,
        marginLeft: '-4px'
      }
    },
    '& + &': {
      marginTop: theme.spacing.unit
    }
  },
  activeListItem: {
    borderLeft: `4px solid ${theme.palette.primary.main}`,
    borderRadius: '4px',
    backgroundColor: theme.palette.primary.light,
    '& $listItemText': {
      color: theme.palette.text.primary
    },
    '& $listItemIcon': {
      color: theme.palette.primary.main,
      marginLeft: '-4px'
    }
  },
  listItemIcon: {
    marginRight: 0
  },
  listItemText: {
    fontWeight: 500,
    color: theme.palette.text.secondary
  },
  listDivider: {
    marginBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2
  },
  formControl: {
    marginLeft: theme.spacing(2),
    minWidth: 60,
    marginRight: 'auto'
  },
  language: {
    bottom: 10,
    position: 'fixed'
  },
  icon: {
    width: '24px',
  },
});
