import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, Card } from '@material-ui/core';
import { Grid, Typography } from '@material-ui/core';
import { Dashboard as DashboardLayout } from 'layouts';
import Carousel from 'nuka-carousel';
import {
  PortletContent,
  Portlet,
  PortletLabel,
  PortletHeader
} from 'components';
import Phone from '../../assets/call.svg';
import Email from '../../assets/email.svg';
import Address from '../../assets/location.svg';
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
                  <Grid container>
                    <Grid
                      item
                      lg={4}
                      sm={12}
                      style={{ textAlign: 'center' }}
                      xl={4}
                      xs={12}
                    >
                      <img
                        alt="Phone Us"
                        src={Phone}
                        style={{ width: '128px', marginBottom: '20px' }}
                      />
                      <Typography variant="h3">Phone Number</Typography>
                      <Typography variant="body1">+234(0)9078878792</Typography>
                    </Grid>
                    <Grid
                      item
                      lg={4}
                      sm={12}
                      style={{ textAlign: 'center' }}
                      xl={4}
                      xs={12}
                    >
                      <img
                        alt="Our Address"
                        src={Address}
                        style={{ width: '128px', marginBottom: '20px' }}
                      />
                      <Typography variant="h3">Address</Typography>
                      <Typography variant="body1">
                        Center for Open Distance and E-Learning, Federal
                        University of Technology, Minna Nigeria
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      lg={4}
                      sm={12}
                      style={{ textAlign: 'center' }}
                      xl={4}
                      xs={12}
                    >
                      <img
                        alt="Send Us an Email"
                        src={Email}
                        style={{ width: '128px', marginBottom: '20px' }}
                      />
                      <Typography variant="h3">Email</Typography>
                      <Typography variant="body1">
                        <a href="mailto:ibrahim.hassan2@st.futminna.edu.ng">
                          ibrahim.hassan2@st.futminna.edu.ng
                        </a>
                      </Typography>
                    </Grid>
                  </Grid>
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
