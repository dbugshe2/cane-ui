import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, Card } from '@material-ui/core';
import { Grid, Typography } from '@material-ui/core';
import { Dashboard as DashboardLayout } from 'layouts';
import Carousel from 'nuka-carousel';
import { PortletContent, Portlet, PortletLabel, PortletHeader } from 'components';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4
  },
  item: {
    height: '100%'
  }
});

class Help extends Component {
  render() {
    const { classes } = this.props;

    return (
      <DashboardLayout title="Help">
        <div className={classes.root}>
            
          <Grid container spacing={4}>
            <Grid item lg={12} sm={12} xl={12} xs={12}>
              <Portlet>
                <PortletHeader>
                  <PortletLabel
                    subtitle="Contact Us"
                    title="Contact Information"
                  />
                </PortletHeader>
                <PortletContent>
                  <Typography variant="body1" />
                </PortletContent>
              </Portlet>
            </Grid>
          </Grid>
        </div>
      </DashboardLayout>
    );
  }
}

Help.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Help);
